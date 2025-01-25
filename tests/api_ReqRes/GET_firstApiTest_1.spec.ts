import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 01', () => {
  const baseUrl = 'https://reqres.in/api';

  test('Simple API Test - Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`);
    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());
  });

  test('Simple API Test - Assert Invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/non-existing`);
    // Assert
    expect(response.status()).toBe(404);
    console.log('Status:', response.status());
  });
});

// Test run:
// npm test -- tests/api_ReqRes/GET_firstApiTest_1.spec.ts --project=chromium
