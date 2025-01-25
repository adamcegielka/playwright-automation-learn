[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Playwright.dev](https://img.shields.io/badge/API%20reference-Playwright-D0422C.svg)](https://playwright.dev/docs/api/class-playwright)
[![Node.js](https://img.shields.io/badge/download-Node.js-026e00.svg?logo=node.js)](https://nodejs.org/)
[![Support badge](https://img.shields.io/badge/stackoverflow-Playwright-45ba4b.svg?logo=stackoverflow)](https://stackoverflow.com/questions/tagged/playwright) 

# Learning automatic tests in Playwright with jaktestowac.pl

- Course from the [jaktestowac.pl](https://jaktestowac.pl/course/playwright-wprowadzenie/)  
- Repository jaktestowac [GitHub](https://github.com/jaktestowac/playwright_automatyzacja_wprowadzenie)  
- Tested site [demo-bank](https://demo-bank.vercel.app/)  

## Lessons:
- [lesson_01](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_01) -> First automatic test
- [lesson_02](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_02) -> Set of tests and negative cases
- [lesson_03](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_03) -> Development tests and locators
- [lesson_04](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_04) -> Mobile top-up
- [lesson_05](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_05) -> Code refactoring
- [lesson_06](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_06) -> Test analysis with Trace Viewer
- [lesson_07](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_07) -> Implementation of AAA
- [lesson_08](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_08) -> DRY (Don't Repeat Yourself) and hook beforeEach
- [lesson_09](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_09) -> Debugging and scripting
- [lesson_10](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_10) -> Playwright plug-in and test-data
- [lesson_11](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_11) -> Simplest implementation of the POM pattern
- [lesson_12](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_12) -> Simplest implementation of the POM pattern
- [lesson_13](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_13) -> POM: task to perform
- [lesson_14](https://github.com/AdamCegGrid/Playwright-web-automation-testing/tree/main/tests/e2e_JakTestowacPl/lesson_14) -> POM and components, common elements

## Run tests:
- `npm run open:codegen:demobank`
- `npm test -- tests/e2e_JakTestowacPl`
- `npm test -- tests/e2e_JakTestowacPl/lesson_01`
- `npm test -- tests/e2e_JakTestowacPl/lesson_01 --project=chromium`
- `npm test -- tests/e2e_JakTestowacPl/lesson_01/example.spec.ts --project=chromium`
- `npm test -- tests/e2e_JakTestowacPl/lesson_01/example.spec.ts --project=chromium --headed`

###  Import  
```TypeScript
import { test, expect, chromium } from '@playwright/test';
```
### Test  
```TypeScript
test('Title', async ({ page }) => {
  // ...
});
```
### Describe  
```TypeScript
test.describe('Title two tests', () => {

  test('Title1', async ({ page }) => {
    // ...
  });

  test('Title2', async ({ page }) => {
    // ...
  });
});
```

## Chrome DevTools

- open DevTools <kbd>F12</kbd> or right click: `Inspect`  
- testing CSS selectors in Console: `$$('selector')`  
