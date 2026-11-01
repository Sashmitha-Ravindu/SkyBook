# SkyBook

A flight booking web app built as a micro-frontend system: an Angular shell runs the booking flow, and a React seat map is loaded into it at runtime through Module Federation.

> **Status:** in active development. See the [roadmap](#roadmap).

## Features (planned)

- Five-step booking flow: search, fares, seats, passengers, summary
- Seat selection on an accessible, keyboard-operable seat map
- English and Arabic with full right-to-left layout
- Mocked REST API, so the app deploys as a static site

## Tech stack

| Area       | Tools                               |
| ---------- | ----------------------------------- |
| Monorepo   | Nx                                  |
| Shell      | Angular, NgRx, RxJS, Angular CDK    |
| Seat map   | React, Redux Toolkit                |
| Federation | Module Federation                   |
| i18n       | Transloco                           |
| Mock API   | MSW (Mock Service Worker)           |
| Testing    | Jest, Testing Library, Cypress, axe |
| CI/CD      | GitHub Actions                      |

## Getting started

Requires Node.js 24 (see `.nvmrc`).

```bash
git clone https://github.com/Sashmitha-Ravindu/SkyBook.git
cd SkyBook
npm ci
```

## Project structure

```text
apps/   deployable applications
libs/   shared libraries (models, mocks)
```

## Roadmap

| Version | Milestone                                   |
| ------- | ------------------------------------------- |
| 0.1.0   | Workspace, CI pipeline, first deployment    |
| 0.2.0   | Angular booking flow with NgRx and mock API |
| 0.3.0   | React seat map via Module Federation        |
| 0.4.0   | Arabic/RTL, accessibility, performance      |
| 1.0.0   | Full test suite and documentation           |

## Contributing

This repository follows Git Flow and [Conventional Commits](https://www.conventionalcommits.org). See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
