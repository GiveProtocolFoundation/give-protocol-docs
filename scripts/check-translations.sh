#!/usr/bin/env bash
# check-translations.sh — Validate i18n completeness vs English baseline
# Usage: ./scripts/check-translations.sh
# Exit code 0 = OK, 1 = errors found (missing YAML keys), warnings only for missing pages

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
I18N_DIR="$SCRIPT_DIR/../_i18n"
EN_DIR="$I18N_DIR/en"
EN_YAML="$I18N_DIR/en.yml"

TIER1_LANGS=("es" "zh")
ERRORS=0
WARNINGS=0

echo "======================================"
echo " Give Protocol — Translation Checker"
echo "======================================"
echo ""

# ----- Helper: compare YAML top-level keys -----
compare_yaml_keys() {
  local en_file="$1"
  local target_file="$2"
  local lang="$3"

  if [[ ! -f "$target_file" ]]; then
    echo "  [ERROR] Missing YAML file: $target_file"
    ERRORS=$((ERRORS + 1))
    return
  fi

  # Extract top-level section keys (lines not starting with whitespace, ending with :)
  local en_keys
  en_keys=$(grep -E '^[a-zA-Z_]+:' "$en_file" | sed 's/:.*//' | sort)
  local target_keys
  target_keys=$(grep -E '^[a-zA-Z_]+:' "$target_file" | sed 's/:.*//' | sort)

  local missing_sections
  missing_sections=$(comm -23 <(echo "$en_keys") <(echo "$target_keys"))

  if [[ -n "$missing_sections" ]]; then
    echo "  [ERROR] $lang.yml missing top-level keys vs en.yml:"
    echo "$missing_sections" | while read -r key; do
      echo "    - $key"
    done
    ERRORS=$((ERRORS + 1))
  fi

  # Check sub-keys within each section
  local en_subkeys
  en_subkeys=$(grep -E '^\s+[a-zA-Z_]+:' "$en_file" | sed 's/[[:space:]]*//' | sed 's/:.*//' | sort)
  local target_subkeys
  target_subkeys=$(grep -E '^\s+[a-zA-Z_]+:' "$target_file" | sed 's/[[:space:]]*//' | sed 's/:.*//' | sort)

  local missing_subkeys
  missing_subkeys=$(comm -23 <(echo "$en_subkeys") <(echo "$target_subkeys"))

  if [[ -n "$missing_subkeys" ]]; then
    echo "  [ERROR] $lang.yml missing sub-keys vs en.yml:"
    echo "$missing_subkeys" | while read -r key; do
      echo "    - $key"
    done
    ERRORS=$((ERRORS + 1))
  fi
}

# ----- 1. Check UI string YAML files -----
echo "── Checking UI string YAML files ──"
for lang in "${TIER1_LANGS[@]}"; do
  echo "  Checking _i18n/$lang.yml vs en.yml..."
  compare_yaml_keys "$EN_YAML" "$I18N_DIR/$lang.yml" "$lang"
done

YAML_OK=$((ERRORS == 0))
if [[ $YAML_OK -eq 1 ]]; then
  echo "  ✓ All YAML files have matching keys"
fi
echo ""

# ----- 2. Check content page files -----
echo "── Checking content page files ──"
while IFS= read -r -d '' en_file; do
  rel_path="${en_file#$EN_DIR/}"

  for lang in "${TIER1_LANGS[@]}"; do
    target_file="$I18N_DIR/$lang/$rel_path"
    if [[ ! -f "$target_file" ]]; then
      echo "  [WARN]  Missing $lang translation: _i18n/$lang/$rel_path"
      WARNINGS=$((WARNINGS + 1))
    fi
  done
done < <(find "$EN_DIR" -name "*.md" -print0)

if [[ $WARNINGS -eq 0 && $ERRORS -eq 0 ]]; then
  echo "  ✓ All content pages have translations in all Tier 1 languages"
fi
echo ""

# ----- Summary -----
echo "======================================"
echo " Summary"
echo "======================================"
echo "  Errors   : $ERRORS  (fail CI)"
echo "  Warnings : $WARNINGS  (warn only)"
echo ""

if [[ $ERRORS -gt 0 ]]; then
  echo "  ✗ CI FAILED — fix errors above before merging."
  exit 1
elif [[ $WARNINGS -gt 0 ]]; then
  echo "  ⚠ Warnings present — some translations are missing (acceptable for placeholder pages)."
  exit 0
else
  echo "  ✓ All translation checks passed!"
  exit 0
fi
