import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 04', () => {
  const baseUrl = 'https://reqres.in/api';

  test('POST Request - Create New User', async ({ request }) => {
    const response = await request.post(`${baseUrl}/users`, {
      data: {
        id: 999,
        name: 'Morpheus',
        job: 'Leader',
      },
    });
    const responseBody = JSON.parse(await response.text());

    // Assert
    expect(response.status()).toBe(201);
    console.log('Status:', response.status());

    expect(responseBody.id).toBe(999);
    expect(responseBody.name).toContain('Morpheus');
    expect(responseBody.job).toBe('Leader');
    expect(responseBody.createdAt).toBeTruthy();
    console.log(responseBody);
  });

  test('POST Request - Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    });
    const responseBody = JSON.parse(await response.text());

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    expect(responseBody.token).toBeTruthy();
    console.log(responseBody);
  });

  test('POST Request - Login Fail', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'peter@klaven',
      },
    });
    const responseBody = JSON.parse(await response.text());

    // Assert
    expect(response.status()).toBe(400);
    console.log('Status:', response.status());

    expect(responseBody.error).toBe('Missing password');
    console.log(responseBody);
  });
});

// Test run:
// npm test -- tests/api_ReqRes/POST_firstApiTest_4.spec.ts --project=chromium
