# Contributing

## Branching model

| Branch            | Purpose                                 | Branches from | Merges into          |
| ----------------- | --------------------------------------- | ------------- | -------------------- |
| `main`            | Released, production-ready code         | —             | —                    |
| `develop`         | Integration branch for the next release | `main`        | `release/*`          |
| `feature/<name>`  | A single feature or task                | `develop`     | `develop`            |
| `release/<x.y.z>` | Release preparation                     | `develop`     | `main` and `develop` |
| `hotfix/<x.y.z>`  | Urgent production fix                   | `main`        | `main` and `develop` |

Feature pull requests are squash-merged. Release and hotfix pull requests are merged with a merge commit, and `main` is tagged `vX.Y.Z`.

## Commit messages

Commits follow [Conventional Commits](https://www.conventionalcommits.org):

```text
<type>(<scope>): <subject>
```

Types: `feat`, `fix`, `refactor`, `perf`, `test`, `docs`, `style`, `build`, `ci`, `chore`.

## Before opening a pull request

```bash
npx nx format:check
npx nx affected -t lint test build
```
