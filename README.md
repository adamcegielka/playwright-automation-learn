[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)

# Playwright Web Automation Testing

This is my personal project to improve my skills in automated testing using Playwright with Typescript.
This project was created solely for my learning process and to showcase my testing skills.

## Folder Structure

The repository is organized as follows:

```
/Playwright-web-automation-testing
├── .vscode/
│   └── settings.json
├── tests/
│   ├── api_JsonPlaceholder/
│   ├── api_Petstore/
│   ├── api_ReqRes/
│   ├── api_RestfulBooker/
│   ├── e2e_AutomationExercise/
│   ├── e2e_AutomationPracticeShop/
│   ├── e2e_AutomationTestStore/
│   ├── e2e_JakTestowacPl/
│   └── e2e_ZeroBank/
├── tips/
├── utils/
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── README.md
├── eslint.config.mjs
├── package-lock.json
├── package.json
└── playwright.config.ts
```

## Installation

- Instal [Node.js](https://nodejs.org/en)

- Playwright Installation: 
```js
npm init playwright@latest
```

- ESLint Installation 
```js
npm install eslint --save-dev
```
- Configuration 
```js
npm init @eslint/config
```
- Add Prettier in `.eslint.config.mjs` file:
```mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    ignores: ['node_modules/', 'tips/', 'utils/', 'README.md'], // Add ignored paths here
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        process: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
    },
  },
];
```

- Prettier Installation 
```js
npm install --save-dev --save-exact prettier
```
- Add file `.prettierignore` :
```
package-lock.json
README.md
```
- Add Prettier rule `.prettierrc.json` :
```json
{
    "singleQuote": true,
    "endOfLine": "auto"
}
```
- Run formatting with Prettier `npx prettier --write .`
- Linking Prettier with ESLint `npm install --save-dev eslint-config-prettier`

## Running Tests from command line:

- Command line: `npx playwright test`
- Run tests in UI mode: `npx playwright test --ui`
- Run tests in headed mode: `npx playwright test --headed`
- Run last failed tests: `npx playwright test --last-failed`
- Debug tests with the Playwright Inspector: `npx playwright test --debug`
- Test reports: `npx playwright show-report`

## Add scripts to `package.json` file

```json
"scripts": {
    "open:codegen:myshop": "npx playwright codegen http://www.automationpractice.pl/",
    "open:codegen:store": "npx playwright codegen https://automationteststore.com/",
    "open:codegen:bank": "npx playwright codegen http://zero.webappsecurity.com/",
    "open:ui": "npx playwright test --ui",
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:chromium": "npx playwright test --project=chromium",
    "test:chromium:headed": "npx playwright test --headed --project=chromium",
    "test:firefox": "npx playwright test --project=firefox",
    "test:firefox:headed": "npx playwright test --headed --project=firefox",
    "test:webkit": "npx playwright test --project=webkit",
    "test:webkit:headed": "npx playwright test --headed --project=cwebkit",
    "test:tag:failTest": "npx playwright test --grep @failTest",
    "test:tag:without": "npx playwright test --grep-invert @failTest",
    "prettier": "npx prettier --write .",
    "lint:check": "eslint . --max-warnings=0",
    "lint:fix": "eslint . --fix"
  },
```

After that in terminal use `npm ...` e.g.: 
- `npm test`
- `npm run test:chromium:headed`
- `npm run prettier`

## VS Code plugins installed

- [vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) - enhances the visual experience by adding icons to files and folders, making navigation easier.
- [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - provides code snippets for JavaScript ES6 syntax, speeding up coding and learning new syntax patterns.
- [ESLint](https://eslint.org/) - a powerful tool to identify and fix problems in JavaScript code, ensuring code quality and consistency.
- [Prettier - Code formatter](https://prettier.io/) - automatically formats code to maintain a consistent style, making it more readable and standardized.
- [GitLens - Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - enhances the Git capabilities of VS Code, making it easier to visualize code and navigate through repositories.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - helps in catching common spelling errors, which is crucial for writing clean and professional code.
- [GitHub Actions](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-github-actions) - used for automating workflows, which can include testing, building, and deploying JavaScript applications.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - allows for a real-time preview of web pages, making it easier to see the effects of code changes instantly.

## Tutorials:

- [Playwright: Web Automation Testing From Zero to Hero](https://www.udemy.com/course/playwright-from-zero-to-hero)
- [Automated Software Testing with Playwright](https://www.udemy.com/course/automated-software-testing-with-playwright)
- [Playwright - Zwinna Panda - pl](https://www.youtube.com/watch?v=1-u5JWFWPgw&list=PLvFBbkSgL1u7Bco8ewGnWeZpjRH-bHC_7)
- [jaktestowac.pl](https://jaktestowac.pl/course/playwright-wprowadzenie/)
- [playwright.info - Automatyzacja i testy z Playwright - pl](https://playwright.info/)
- [Playwright Javascript](https://www.youtube.com/watch?v=6fapvF1uYo0&list=PLYDwWPRvXB89caN5PHWDLrXJuyugu5Mg_)
- [Playwright API Testing - Kaniel Outis](https://www.youtube.com/watch?v=S12sspgH8es&list=PL-hNDoK1-od_HpjnFwFZnjKpIs_D-lEpn)
- [Playwright API Testing - LetCode with Koushik](https://www.youtube.com/watch?v=deEK0lHrC-w&t=1441s)
- [Playwright - Cucumber - TS](https://www.youtube.com/watch?v=bfWXNLqKlvA&list=PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk)

## TypeScript:

- [TypeScript - Podstawy](https://frontlive.pl/blog/typescript-podstawy)
- [TypeScript - Przeprogramowani.ts](https://www.youtube.com/watch?v=nUjl2nK0FAY&list=PLfE0DpqEANZ0CQ9pCGlxGKPvYb1Sj6ybV)
- [TypeScript for Test Automation](https://www.youtube.com/watch?v=k0hSJdTfXNM&list=PL699Xf-_ilW5VXRsJwBJLmDGrsrYxBjQT)
