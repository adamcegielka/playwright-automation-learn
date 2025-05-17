import { test } from '@playwright/test';
import { getRandomNumber, getRandomString } from './randomData';

test.describe('Random Data', () => {

  test('data helpers - get random Numbers', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form/');
    let newNumber = await getRandomNumber();
    console.log(newNumber);
  });

  test('data helpers - get random String', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form/');
    let newString = await getRandomString();
    console.log(newString);
  });
});
