import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 01', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('Assert Response Status for posts', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts`);

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });
});

// Test run:
// npm test -- tests/api_JsonPlaceholder/posts/GET_posts-all.spec.ts --project=chromium
