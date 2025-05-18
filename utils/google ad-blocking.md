# Google Ad blocking

## Playwright Adblocker [more](https://www.npmjs.com/package/@cliqz/adblocker-playwright)

- I used:
```javascript
  await page.route("**/*", route => {
      route.request().url().startsWith("https://googleads.") ?
        route.abort() : route.continue();
      return;
    });
```

- The first way to remove an advertisement that appears:
```javascript
  aw