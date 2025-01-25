import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing for albums', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('Assert response status for todos', async ({ request }) => {
    const response = await request.get(`${baseUrl}/albums`);

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });
});

// Test run:
// npm test -- tests/api_JsonPlaceholder/albums/GET_albums-all.spec.ts --project=chromium
