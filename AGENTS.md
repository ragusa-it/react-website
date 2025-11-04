# Repository Guidelines

## Project Structure & Module Organization
The app bootstraps from `src/index.js`, with feature views composed inside `src/App.js`. Reusable UI lives in `src/components`, while shared state such as theming sits under `src/context`. Keep pure utilities and configuration helpers in `src/utils`, and place local media in `src/images`. Static assets that must be served verbatim belong in `public`. Use `analyze-performance.sh` or `npm run analyze` when introducing new bundles to verify that lazy loaded sections remain lean.

## Build, Test, and Development Commands
Use `npm start` for local development; it runs the CRA dev server with hot reloading. Ship-ready builds come from `npm run build`, which outputs to `build/`. Run `npm test` to execute the Jest + React Testing Library suite in watch mode, and pass `CI=true npm test` to force a single run in CI. Investigate bundle composition with `npm run analyze`, which performs a production build before opening Webpack Bundle Analyzer.

## Coding Style & Naming Conventions
Write React components as named functions in PascalCase (e.g., `HeroSection.jsx`) and colocate related styles when necessary. Favor Tailwind utility classes for layout and effects; reserve `App.css` and `index.css` for global overrides. Use 2-space indentation, single quotes in JavaScript, and keep files under 200 logical lines when practical. Custom hooks must start with `use`, and asynchronous helpers should end with `Async`. Respect the default `react-app` ESLint rules by avoiding unused variables and preferring strict equality checks.

## Testing Guidelines
Author tests with React Testing Library and Jest. Name test files `<Component>.test.js` and store them next to the component or within a sibling `__tests__` directory for more complex modules. Each new component should cover rendering, critical interactions, and regression checks around lazy loading or modal visibility. Aim for meaningful assertions over snapshot dumps, and keep overall coverage above 80% to guard the interactive UI flow. Run `npm test` locally before pushing.

## Commit & Pull Request Guidelines
Follow the existing history by starting commit subjects with an imperative verb (`Add`, `Refine`, `Fix`). Keep subjects under 72 characters and include context in the body when a change spans multiple components. Before opening a pull request, re-run `npm test` and `npm run build`, describe the change set and rationale, link any tracked issues, and attach UI screenshots or videos for visible updates. Mention follow-up tasks explicitly if they will ship later.
