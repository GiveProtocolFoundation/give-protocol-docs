# CLAUDE.md - Give Protocol Documentation

Give Protocol Documentation - Jekyll-based documentation site for the Give Protocol charitable giving platform. Part of the Give Protocol distributed repository architecture.

## Repository Structure

This is the **docs** repository, one of four Give Protocol repositories:

- **give-protocol-webapp**: React/Vite Progressive Web App
- **give-protocol-contracts**: Solidity smart contracts and Hardhat infrastructure
- **give-protocol-docs** (this repo): Jekyll documentation site
- **give-protocol-backend**: Supabase backend and admin functions

## Essential Commands

```bash
bundle install                     # Install Jekyll and translation dependencies
bundle exec jekyll serve           # Start local server (port 4000)
bundle exec jekyll build           # Build to _site/
./scripts/check-translations.sh    # Validate i18n completeness
```

## Architecture

- **Config**: `_config.yml` — site metadata, plugin declarations, language list
- **Layouts**: `_layouts/` — `default.html`, `page.html`, `home.html`
- **Includes**: `_includes/` — `header.html`, `footer.html`, `nav.html`, `lang-switcher.html`, `google-translate.html`
- **Data**: `_data/navigation.yml` — sidebar/nav structure
- **i18n**: `_i18n/` — translation YAMLs (`en.yml`, `es.yml`, `zh.yml`) + content dirs (`en/`, `es/`, `zh/`)
- **Assets**: `assets/css/main.scss` — main stylesheet

## Translation Architecture

Two-tier i18n strategy:

| Tier | Languages | Method |
|------|-----------|--------|
| 1 — Full | English (default), Spanish (`/es/`), Chinese Simplified (`/zh/`) | `jekyll-multiple-languages-plugin`, human-translated |
| 2 — Widget | DE, FR, JA, PT, KO, AR, HI, ZH-TW | Google Translate widget |

### Adding/Updating Translations

1. Author content in English first (`_i18n/en/`)
2. Mirror the file path in `_i18n/es/` and `_i18n/zh/`
3. Update UI strings in `_i18n/es.yml` and `_i18n/zh.yml` as needed
4. Run `./scripts/check-translations.sh` to find missing translations
5. CI will warn on missing pages and fail on missing UI string keys

## Deployment

- Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`
- Published at: https://docs.giveprotocol.io (CNAME)
- The CI workflow runs `check-translations.sh` before deploying

## Code Quality Rules

- Keep JSX nesting ≤ 4 levels in Liquid templates
- Use `{% t key %}` (not hardcoded strings) for all UI text in layouts/includes
- Every new English content page in `_i18n/en/` must have a corresponding placeholder in `_i18n/es/` and `_i18n/zh/`
