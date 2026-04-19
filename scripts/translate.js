#!/usr/bin/env node
/**
 * translate.js — AI translation script for Give Protocol docs
 *
 * Uses the Anthropic Claude API to translate English content to Tier 1 languages
 * (Spanish and Simplified Chinese). Run whenever new EN content is added.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-ant-... node scripts/translate.js
 *
 * Options (env vars):
 *   ANTHROPIC_API_KEY   Required. Your Claude API key.
 *   TRANSLATE_LANGS     Comma-separated language codes. Default: es,zh
 *   FORCE_RETRANSLATE   Set to "1" to overwrite non-placeholder translations.
 *   DRY_RUN             Set to "1" to print what would be translated without writing.
 *
 * When to re-run:
 *   - After adding or updating any file in _i18n/en/
 *   - After adding new YAML keys to _i18n/en.yml
 *   - The script is idempotent: files without the placeholder comment are skipped
 *     unless FORCE_RETRANSLATE=1 is set.
 *
 * Placeholder detection:
 *   Markdown files: looks for "Translation pending" in an HTML comment
 *   YAML files: looks for placeholder keys containing "TODO" or "placeholder"
 */

"use strict";

const https = require("https");
const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const API_KEY = process.env.ANTHROPIC_API_KEY;
const TARGET_LANGS = (process.env.TRANSLATE_LANGS || "es,zh").split(",");
const FORCE = process.env.FORCE_RETRANSLATE === "1";
const DRY_RUN = process.env.DRY_RUN === "1";

const SCRIPT_DIR = path.dirname(path.resolve(process.argv[1]));
const I18N_DIR = path.join(SCRIPT_DIR, "..", "_i18n");
const EN_DIR = path.join(I18N_DIR, "en");
const EN_YAML = path.join(I18N_DIR, "en.yml");

const LANG_NAMES = { es: "Spanish", zh: "Simplified Chinese" };

const PLACEHOLDER_MD = "Translation pending";

// ---------------------------------------------------------------------------
// Claude API call
// ---------------------------------------------------------------------------

/**
 * Call Claude claude-opus-4-6 with the given prompt.
 * @param {string} prompt
 * @returns {Promise<string>} The model's text response
 */
function callClaude(prompt) {
  if (!API_KEY) {
    throw new Error("ANTHROPIC_API_KEY environment variable is not set.");
  }

  const body = JSON.stringify({
    model: "claude-opus-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.anthropic.com",
        path: "/v1/messages",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "Content-Length": Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => { data += chunk; });
        res.on("end", () => {
          try {
            const parsed = JSON.parse(data);
            if (parsed.error) {
              reject(new Error(`API error: ${parsed.error.message}`));
            } else {
              resolve(parsed.content[0].text);
            }
          } catch (e) {
            reject(new Error(`Failed to parse response: ${data}`));
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

// ---------------------------------------------------------------------------
// Translation helpers
// ---------------------------------------------------------------------------

/**
 * Translate a Markdown page. Preserves frontmatter structure, Jekyll template
 * tags ({% t ... %}), code blocks, and URL paths. Only the human-readable text
 * is translated.
 *
 * @param {string} content  Source English markdown
 * @param {string} lang     Target language code (es, zh)
 * @param {string} relPath  Relative path for context (e.g. "introduction/what-is.md")
 * @returns {Promise<string>} Translated markdown
 */
async function translateMarkdown(content, lang, relPath) {
  const langName = LANG_NAMES[lang] || lang;
  const prompt = `You are a professional technical translator specializing in ${langName}.

Translate the following Jekyll Markdown documentation page from English to ${langName}.

Rules:
1. Translate ALL human-readable text (titles, descriptions, headings, paragraphs, list items, table cells, blockquotes).
2. Keep ALL frontmatter keys (layout, title, description) but translate their VALUES.
3. Preserve ALL Jekyll template tags exactly as-is: {% t key.name %}, {{ variable }}, etc.
4. Preserve ALL Markdown formatting: headers (#, ##), bold (**), code blocks (\`\`\`), tables, blockquotes (>).
5. Keep ALL URLs, domain names, code snippets, and technical terms unchanged.
6. Keep ALL HTML tags and attributes unchanged (e.g. <div class="...">, <i class="...">).
7. Do NOT add any explanation or commentary — output ONLY the translated Markdown.
8. Do NOT include a placeholder comment in the output.
9. Adjust internal links to include the language prefix: e.g. /getting-started/ → /${lang}/getting-started/
   But do NOT change external URLs (http://, https://).

Source file: ${relPath}

---BEGIN ENGLISH CONTENT---
${content}
---END ENGLISH CONTENT---

Output the full translated ${langName} Markdown below (no explanation, no code fences):`;

  const result = await callClaude(prompt);
  // Strip any accidental wrapping code fences
  return result.replace(/^```(?:markdown|md)?\n?/i, "").replace(/\n?```$/g, "").trim() + "\n";
}

/**
 * Translate a YAML UI strings file. Preserves all keys, only translates values.
 *
 * @param {string} content  Source English YAML
 * @param {string} lang     Target language code
 * @returns {Promise<string>} Translated YAML
 */
async function translateYaml(content, lang) {
  const langName = LANG_NAMES[lang] || lang;
  const prompt = `You are a professional technical translator specializing in ${langName}.

Translate the following Jekyll i18n YAML file from English to ${langName}.

Rules:
1. Keep ALL YAML keys exactly unchanged.
2. Translate ONLY the string values (the part after the colon and quote).
3. Preserve YAML indentation and structure exactly.
4. Preserve any special characters, placeholders (%{variable}), or HTML in values.
5. Do NOT add explanation or commentary — output ONLY the translated YAML.

---BEGIN ENGLISH YAML---
${content}
---END ENGLISH YAML---

Output the full translated ${langName} YAML below (no explanation, no code fences):`;

  const result = await callClaude(prompt);
  return result.replace(/^```(?:yaml|yml)?\n?/i, "").replace(/\n?```$/g, "").trim() + "\n";
}

// ---------------------------------------------------------------------------
// File processing
// ---------------------------------------------------------------------------

/**
 * Check if a markdown file needs translation (has placeholder comment).
 * @param {string} content
 * @returns {boolean}
 */
function needsTranslation(content) {
  return content.includes(PLACEHOLDER_MD);
}

/**
 * Collect all .md files under a directory recursively.
 * @param {string} dir
 * @returns {string[]} Absolute paths
 */
function collectMdFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMdFiles(fullPath));
    } else if (entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("==============================================");
  console.log(" Give Protocol — AI Translation Script");
  console.log("==============================================");
  console.log(`  Target languages : ${TARGET_LANGS.join(", ")}`);
  console.log(`  Force retranslate: ${FORCE}`);
  console.log(`  Dry run          : ${DRY_RUN}`);
  console.log("");

  if (!API_KEY && !DRY_RUN) {
    console.error("ERROR: ANTHROPIC_API_KEY is not set. Aborting.");
    process.exit(1);
  }

  const mdFiles = collectMdFiles(EN_DIR);
  let translated = 0;
  let skipped = 0;
  let errors = 0;

  // --- Translate markdown content pages ---
  for (const enFile of mdFiles) {
    const relPath = path.relative(EN_DIR, enFile);

    for (const lang of TARGET_LANGS) {
      const targetFile = path.join(I18N_DIR, lang, relPath);

      // Ensure target directory exists
      fs.mkdirSync(path.dirname(targetFile), { recursive: true });

      // Check if target file needs translation
      let targetContent = "";
      if (fs.existsSync(targetFile)) {
        targetContent = fs.readFileSync(targetFile, "utf8");
        if (!FORCE && !needsTranslation(targetContent)) {
          console.log(`  SKIP  [${lang}] ${relPath} (already translated)`);
          skipped++;
          continue;
        }
      }

      console.log(`  TRANSLATE [${lang}] ${relPath}...`);

      if (DRY_RUN) {
        console.log(`    (dry run — would write to ${targetFile})`);
        translated++;
        continue;
      }

      try {
        const enContent = fs.readFileSync(enFile, "utf8");
        const translated_content = await translateMarkdown(enContent, lang, relPath);
        fs.writeFileSync(targetFile, translated_content, "utf8");
        console.log(`    ✓ Written to ${path.relative(process.cwd(), targetFile)}`);
        translated++;
      } catch (err) {
        console.error(`    ✗ Error translating ${relPath} to ${lang}: ${err.message}`);
        errors++;
      }
    }
  }

  console.log("");
  console.log("--- YAML UI strings ---");

  // --- Translate YAML files ---
  for (const lang of TARGET_LANGS) {
    const targetYaml = path.join(I18N_DIR, `${lang}.yml`);

    // For YAML, we always check if translation looks complete
    // by comparing key count. If FORCE, always retranslate.
    if (!FORCE && fs.existsSync(targetYaml)) {
      const existingContent = fs.readFileSync(targetYaml, "utf8");
      // Simple heuristic: if it has content and no "TODO" placeholders, skip
      if (!existingContent.includes("TODO:") && existingContent.length > 100) {
        console.log(`  SKIP  ${lang}.yml (appears already translated)`);
        skipped++;
        continue;
      }
    }

    console.log(`  TRANSLATE ${lang}.yml...`);

    if (DRY_RUN) {
      console.log(`    (dry run — would write to ${targetYaml})`);
      translated++;
      continue;
    }

    try {
      const enContent = fs.readFileSync(EN_YAML, "utf8");
      const translated_yaml = await translateYaml(enContent, lang);
      fs.writeFileSync(targetYaml, translated_yaml, "utf8");
      console.log(`    ✓ Written to ${path.relative(process.cwd(), targetYaml)}`);
      translated++;
    } catch (err) {
      console.error(`    ✗ Error translating en.yml to ${lang}: ${err.message}`);
      errors++;
    }
  }

  console.log("");
  console.log("==============================================");
  console.log(` Done: ${translated} translated, ${skipped} skipped, ${errors} errors`);
  console.log("==============================================");

  if (errors > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
