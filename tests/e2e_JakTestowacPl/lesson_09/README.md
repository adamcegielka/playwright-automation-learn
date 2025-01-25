## Description
- Lesson S02L07 [jaktestowac.pl](https://jaktestowac.pl/lesson/pw1s02l07/) - Debugging and scripting
 
## What was done in the lesson
- Scripts in package.json
- Run in debug mode
- New test and debugging  
`package.json`:
```json
"scripts": {
    "test:record": "npx playwright codegen https://demo-bank.vercel.app/",
    "test": "npx playwright test",
    "test:headed": "npx playwright test --headed",
    "test:login": "npm run test tests/login.spec.ts",
    "test:login:headed": "npm run test tests/login.spec.ts -- --headed",
    "test:desktop": "npm run test tests/desktop.spec.ts",
    "test:desktop:headed": "npm run test tests/desktop.spec.ts -- --headed ",
    "report": "npx playwright show-report",
    "open:ui": "npx playwright test --ui"
  },
```

## Chrome DevTools

- open DevTools <kbd>F12</kbd> or right click `Inspect`  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd>  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>K</kbd> **Firefox**
- testing CSS selectors in Console: `$$('selector')`  