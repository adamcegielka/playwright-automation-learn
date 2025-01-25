import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 01', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('Assert Response Status for post with userId 1', async ({ request }) => {
    const response = await request.get(`${baseUrl}/posts/1`);
    const responseTitle =
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);

    expect(responseBody.title).toContain(responseTitle);
    console.log('Response Title:', responseBody.title);
  });
});

// Test run:
// npm test -- tests/api_JsonPlaceholder/posts/GET_posts-userId.spec.ts --project=chromium
