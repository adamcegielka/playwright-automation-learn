## Description
- Lesson S02L03 [jaktestowac.pl](https://jaktestowac.pl/lesson/pw1s02l03/) - Test analysis with Trace Viewer
- Formatting code with [Prettier](https://jaktestowac.pl/lesson/pw1sb01l06/)
- [REST API](https://jaktestowac.pl/api/) Testing Basics
- Tested site [demo-bank](https://demo-bank.vercel.app/)
- YouTube - Playwright's UI Mode: [Watch mode and time travel debugging](https://www.youtube.com/watch?v=d0u6XhXknzU)
 
## What was done in the lesson

- Install Prettier: `npm install --save-dev --save-exact prettier` 

- exlude files in: `.prettierignore`
```TypeScript
playwright-report
package-lock.json
package.json
README.md
test-results
```  

- set rules in: `.prettierrc.json`
```TypeScript
{
    "singleQuote": true
}
```  
- run Prettier: `npx prettier --write .`  

- More about the format options [Prettier](https://prettier.io/docs/en/options.html)

### Video reports

- Adding video to reports
    - In the `playwright.config.ts` file, add an entry in the `use` block: `video: retain-on-failure`
    ```TypeScript
    use: {
  actionTimeout: 0,
  trace: 'on-first-retry’,
  video: 'retain-on-failure',
  },
    ```
- Turn on Trace Viewer
    - In the `playwright.config.ts` file, we change the setting for trace in the `use` : `trace: 'retain-on-failure'`
    ```TypeScript
    use: {
  actionTimeout: 0,
  trace: 'retain-on-failure’,
  video: 'retain-on-failure',
  },
    ```
- Start-up on Trace Viewer `npx playwright show-trace trace.zip`
- Open up UI mode `npx playwright test --ui`
- Trace Viewer presentation on [jaktestowac.pl](https://con.jaktestowac.pl/wp-content/uploads/PW/1/S02/PW1S02L03.jpg)

## Chrome DevTools

-  open DevTools <kbd>F12</kbd> or right click `Inspect`  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd>  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>K</kbd> **Firefox**
-  testing CSS selectors in Console: `$$('selector')`  
