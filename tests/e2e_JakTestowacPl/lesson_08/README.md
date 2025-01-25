## Description
- Lesson S02L06 [jaktestowac.pl](https://jaktestowac.pl/lesson/pw1s02l06/) - DRY and hook beforeEach
 
## What was done in the lesson S02L06
- DRY (Don’t Repeat Yourself)
- Hook beforeEach `beforeEach()`

```TypeScript
test.beforeEach (async ({ page }) => {
    const userId = 'xxx';
    const userPassword = 'xxxx';

    await page.goto('/');
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
});
```
- Placing `URL` values in the `playwright.config.ts` file under the `baseURL` variable  
`await page.goto('/');`

## Chrome DevTools

- open DevTools <kbd>F12</kbd> or right click `Inspect`  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>J</kbd>  
    - <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>K</kbd> **Firefox**
- testing CSS selectors in Console: `$$('selector')`  