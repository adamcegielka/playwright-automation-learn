import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 05', () => {
  const baseUrl = 'https://reqres.in/api';

  test('PUT Request - Update User', async ({ request }) => {
    const response = await request.put(`${baseUrl}/users/2`, {
      data: {
        name: 'Neo',
        job: 'Hopeful',
      },
    });
    const responseBody = JSON.parse(await response.text());

    // Assert
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    expect(responseBody.name).toBe('Neo');
    expect(responseBody.job).toBe('Hopeful');
    expect(responseBody.updatedAt).toBeTruthy();
    console.log(responseBody);
  });
});

// Test run:
// npm test -- tests/api_ReqRes/PUT_firstApiTest_5.spec.ts --project=chromium
