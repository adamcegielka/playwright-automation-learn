import { test, expect } from '@playwright/test';

test.describe.parallel('GET Request', () => {
  const baseUrl = 'https://reqres.in/api';

  test('Get User Detail for response in terminal', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/1`);
    const responseBody = JSON.parse(await response.text());

    // Assert
    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(1);
    expect(responseBody.data.email).toBe('george.bluth@reqres.in');
    expect(responseBody.data.first_name).toBe('George');
    expect(responseBody.data.last_name).toBe('Bluth');

    // Terminal
    console.log('Status:', response.status());
    console.log('Response Body id:', responseBody.data.id);
    console.log('Response Body email:', responseBody.data.email);
    console.log('Response Body first_name:', responseBody.data.first_name);
    console.log('Response Body last_name:', responseBody.data.last_name);
  });
});

// Test run:
// npm test -- tests/api_ReqRes/GET_Request_User_Detail.spec.ts --project=chromium
