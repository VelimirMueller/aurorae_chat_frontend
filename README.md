## 📊 Project Health

[![CI](https://github.com/VelimirMueller/aurorae_chat_frontend/actions/workflows/node.js.yml/badge.svg)](https://github.com/VelimirMueller/aurorae_chat_frontend/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=VelimirMueller_aurorae_chat_frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=VelimirMueller_aurorae_chat_frontend)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=VelimirMueller_aurorae_chat_frontend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=VelimirMueller_aurorae_chat_frontend)
[![Deploy](https://github.com/VelimirMueller/aurorae_chat_frontend/actions/workflows/deploy.yml/badge.svg)](https://github.com/VelimirMueller/aurorae_chat_frontend/actions/workflows/deploy.yml)
[![Live – Deployed on GitHub Pages(experimental)](https://img.shields.io/badge/Live-GitHub%20Pages-blue?logo=github)](https://velimirmueller.github.io/aurorae_chat_frontend/)

---

# 🌌 Aurorae Chat Frontend

**A beautiful, fast, and modern Nuxt 3 web experience**  
Powered by Tailwind CSS, TypeScript, and built with high standards for code quality, coverage, and performance.


> _The name “Aurorae” refers to the poetic, natural light displays in the polar skies, named after the Roman goddess of dawn._

## ✨ Features

- ⚡ **Nuxt 3** — Modern full-stack Vue framework
- 🎨 **Tailwind CSS** — Utility-first, highly customizable styling
- 🧠 **TypeScript** — Safer and more scalable development
- ✅ **Vitest** — Blazing fast unit tests with coverage tracking
- 📦 **CI/CD** — GitHub Actions + SonarCloud for:
  - Code quality checks
  - Linting
  - 80%+ test coverage enforcement
- 💬 **WebSocket-ready** — Real-time capabilities via `socket.io-client` and `mock-socket`
- 🔍 **Linting & Formatting** — ESLint with full TypeScript & Vue support

---

## 📦 Getting Started

```bash
# Install dependencies
yarn install

# Run in development mode
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Static site generation
yarn generate
```

## 🔍 Testing

```bash
# Run unit tests 
yarn test
```
- Run tests with coverage (uses v8 and Istanbul) `yarn test:coverage`

✅ Minimum test coverage: 80% enforced via SonarCloud integration

# ✅ Code Quality & Linting

```bash
# Lint the codebase
yarn lint

# Type-check the project
yarn type-check
```
Code is automatically checked on push and pull requests via GitHub CI workflows.

# 🚀 Deployment

Static deployment via GitHub Pages: `yarn deploy` (expiremental)

Make sure the .output/public directory is up-to-date after a fresh build.

# 🛠 Tech Stack

| Tech                                          | Purpose                          |
| --------------------------------------------- | -------------------------------- |
| [Nuxt 3](https://nuxt.com)                    | Framework for SSR and SSG        |
| [Tailwind CSS](https://tailwindcss.com)       | Styling and layout               |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript             |
| [Vitest](https://vitest.dev)                  | Unit testing framework           |
| [SonarCloud](https://sonarcloud.io/)          | Code quality, lint, coverage     |
| [ESLint](https://eslint.org/)                 | Linting with Vue + TypeScript    |
| [Pinia](https://pinia.vuejs.org/)             | Lightweight Vue state management |
| [Playwright](https://playwright.dev/)         | (Optional) E2E testing potential |

# 🔐 SonarCloud Integration

Enforces 80%+ code coverage

Flags code smells, bugs, and security issues

Configured via .github/workflows/ci.yml

# 💬 License 

© 2023 The Aurorae Project. All rights reserved.

MIT or Custom License (update if needed)
