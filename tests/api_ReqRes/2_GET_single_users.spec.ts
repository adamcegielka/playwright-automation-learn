import { test, expect } from '@playwright/test';

test.describe.parallel('Get single users', () => {
  const baseUrl = 'https://reqres.in';

  test('Assert Response for specific user', async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/users/2`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Status code
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    // Response body
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);

    // Assert structure
    expect(responseBody).toHaveProperty('data');
    expect(responseBody.data).toHaveProperty('id', 2);
    expect(responseBody.data).toHaveProperty('email', 'janet.weaver@reqres.in');
    expect(responseBody.data).toHaveProperty('first_name', 'Janet');
    expect(responseBody.data).toHaveProperty('last_name', 'Weaver');
    expect(responseBody.data).toHaveProperty(
      'avatar',
      'https://reqres.in/img/faces/2-image.jpg',
    );
  });

  test('Get User Detail - second method', async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/users/2`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Status code
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    // Response body
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);

    // Assert structure - second method
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toContain('janet.weaver@reqres.in');
    expect(responseBody.data.first_name).toContain('Janet');
    expect(responseBody.data.last_name).toBe('Weaver');

    // Assert id is an integer
    expect(Number.isInteger(responseBody.data.id)).toBe(true);

    // Assert last_name is a string
    expect(typeof responseBody.data.last_name).toBe('string');

    // Assert other fields are not empty
    expect(responseBody.data.first_name).toBeTruthy();
    expect(responseBody.data.email).toBeTruthy();
  });
});
