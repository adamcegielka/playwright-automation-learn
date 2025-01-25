import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing 06', () => {
  const baseUrl = 'https://reqres.in/api';

  test('DELETE Request - Delete User', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/users/2`);

    // Assert
    expect(response.status()).toBe(204);
    console.log('Status:', response.status());
  });
});

// Test run:
// npm test -- tests/api_ReqRes/DELETE_firstApiTest_6.spec.ts --project=chromium
