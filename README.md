# Learning Playwright with TypeScript

This repository contains practice exercises and sample tests for Playwright fundamentals using TypeScript.

## Contents

- `tests/` - example Playwright test suites and lab exercises
- `playwright.config.ts` - Playwright configuration for test execution
- `package.json` - project dependencies and scripts

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run all tests:
   ```bash
   npx playwright test
   ```

3. Run a specific test file:
   ```bash
   npx playwright test tests/Tasks/Project3_vwo/app_vwo_com.spec.ts
   ```

## Notes

- The project uses Playwright Test with TypeScript.
- Test reports are saved under `playwright-report/`.
- Use `npx playwright show-report` to open the HTML report.

