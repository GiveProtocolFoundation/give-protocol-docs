# Give Protocol Documentation

Jekyll-based documentation site for [Give Protocol](https://giveprotocol.io) — the blockchain-based platform for transparent charitable giving.

**Live site:** https://docs.giveprotocol.io

## Quick Start

```bash
# Install dependencies
bundle install

# Start local development server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Translation Support

The site supports three Tier 1 languages with full URL-prefixed routing:

| Language | URL prefix | Status |
|----------|-----------|--------|
| English | (default) | ✅ Complete |
| Spanish | `/es/` | ✅ Baseline |
| Chinese Simplified | `/zh/` | ✅ Baseline |

Tier 2 languages (DE, FR, JA, PT, KO, AR, HI, ZH-TW) are served via the Google Translate widget.

### Adding Translations

1. Add content pages to `_i18n/en/` (English)
2. Mirror the file at the same path in `_i18n/es/` and `_i18n/zh/`
3. Update UI strings in `_i18n/es.yml` / `_i18n/zh.yml` if needed
4. Run `./scripts/check-translations.sh` to validate

### Validation

```bash
./scripts/check-translations.sh
```

Exit code 0 = all checks pass. Exit code 1 = missing YAML keys (CI fails). Warnings only for missing content pages.

## Architecture

```
_config.yml                 # Jekyll + i18n configuration
Gemfile                     # Ruby dependencies (includes jekyll-multiple-languages-plugin)
_layouts/                   # HTML templates (default.html, page.html, home.html)
_includes/                  # Reusable components
  header.html               # Site header with nav and lang switcher
  lang-switcher.html        # Tier 1 language switcher (EN/ES/ZH)
  google-translate.html     # Tier 2 Google Translate widget
_data/navigation.yml        # Sidebar navigation structure
_i18n/
  en.yml / es.yml / zh.yml  # UI string translations
  en/ es/ zh/               # Translated content pages
assets/css/main.scss        # Main stylesheet
scripts/check-translations.sh  # i18n validation script
.github/workflows/deploy.yml   # CI/CD: build + deploy to GitHub Pages
```

## CI/CD

On push to `main`, GitHub Actions:
1. Runs `check-translations.sh` (fails on missing YAML keys)
2. Builds the Jekyll site with all languages
3. Deploys to GitHub Pages → `docs.giveprotocol.io`
