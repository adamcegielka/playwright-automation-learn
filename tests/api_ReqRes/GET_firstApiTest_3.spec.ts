import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 03', () => {
  const baseUrl = 'https://reqres.in/api';

  test('Simple API Test - Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`);
    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Simple API Test - Assert Invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/non-existing`);
    // Assert
    expect(response.status()).toBe(404);
    console.log('Status:', response.status());
  });

  test('GET Request - Get User Detail', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(1);

    expect(responseBody.data.email).toContain('george.bluth@reqres.in');
    expect(responseBody.data.first_name).toContain('George');
    expect(responseBody.data.last_name).toBe('Bluth');

    expect(responseBody.data.email).toBeTruthy();

    // console.log(responseBody);
  });
});

// Test run:
// npm test -- tests/api_ReqRes/GET_firstApiTest_3.spec.ts --project=chromium
