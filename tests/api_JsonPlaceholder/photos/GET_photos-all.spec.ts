import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing for photos', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('Assert response status for todos', async ({ request }) => {
    const response = await request.get(`${baseUrl}/photos`);

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });
});

// Test run:
// npm test -- tests/api_JsonPlaceholder/photos/GET_photos-all.spec.ts --project=chromium
