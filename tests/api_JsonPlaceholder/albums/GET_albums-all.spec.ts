import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing for albums', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  test('Assert response status for albums', async ({ request }) => {
    const response = await request.get(`${baseUrl}/albums`);

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Assert response status for albums with query params userId', async ({ request }) => {
    const response = await request.get(`${baseUrl}/albums`, {
      params: { userId: 1 },
    });

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Assert response status for albums with query params id', async ({ request }) => {
    const response = await request.get(`${baseUrl}/albums`, {
      params: { id: 5 },
    });

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Assert response status for albums with query params title', async ({ request }) => {
    const response = await request.get(`${baseUrl}/albums`, {
      params: { title: 'dolores ut et facere placeat' },
    });

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });
});

// Test run:
// npm test -- tests/api_JsonPlaceholder/albums/GET_albums-all.spec.ts --project=chromium
