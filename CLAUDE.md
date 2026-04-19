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
bundle install           # Install Jekyll dependencies
bundle exec jekyll serve # Start local Jekyll server (port 4000)
bundle exec jekyll build # Build static site to _site/
```

## Architecture

- **Pages**: Markdown files in `/docs/` directory
- **Layouts**: HTML templates in `/_layouts/`
- **Includes**: Reusable components in `/_includes/`
- **Static Files**: CSS, images, etc. in `/assets/`
- **Config**: Site configuration in `_config.yml`

## Documentation Structure

```
docs/
├── index.md                    # Homepage
├── getting-started/            # Getting started guides
├── user-guides/                # User documentation
├── developer-guides/           # Developer documentation
├── api-reference/              # API documentation
└── smart-contracts/            # Smart contract documentation
```

## Adding Documentation

1. Create new `.md` file in appropriate `/docs/` subdirectory
2. Add YAML frontmatter with title, layout, and navigation info
3. Write content in Markdown
4. Test locally with `bundle exec jekyll serve`
5. Commit and push (GitHub Pages deploys automatically)

## Deployment

- Deployed via GitHub Pages
- Workflow in `.github/workflows/deploy.yml`
- Builds on push to main branch
- Published to: https://civicmastery.github.io/give-protocol-docs/

## Writing Guidelines

- Use clear, concise language
- Include code examples where applicable
- Add screenshots for UI-related docs
- Keep navigation hierarchy shallow (max 3 levels)
- Cross-reference related documentation

## Git Workflow

1. Test locally before committing
2. Check all links work
3. Verify images display correctly
4. Write descriptive commit messages
5. Push triggers automatic deployment
