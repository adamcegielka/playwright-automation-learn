import { test, expect } from '@playwright/test';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

test.describe.parallel('Get users', () => {
  const baseUrl = 'https://reqres.in';

  test('Assert Response for user from page 1', async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/users`, {
      params: { page: 1 },
    });

    // Status code
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    // Response body
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);

    // Assert structure
    expect(responseBody).toHaveProperty('page');
    expect(responseBody).toHaveProperty('per_page');
    expect(responseBody).toHaveProperty('total');
    expect(responseBody).toHaveProperty('total_pages');
    expect(responseBody).toHaveProperty('data');

    // Assert values
    expect(responseBody.page).toBe(1);
    expect(responseBody.per_page).toBe(6);
    expect(responseBody.total).toBe(12);
    expect(responseBody.total_pages).toBe(2);

    // Assert data array
    expect(responseBody.data.length).toBe(responseBody.per_page);
    (responseBody.data as User[]).forEach((user) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('last_name');
      expect(user).toHaveProperty('avatar');
    });

    // Assert first user
    const firstUser = responseBody.data[0];
    expect(firstUser.id).toBe(1);
    expect(firstUser.email).toBe('george.bluth@reqres.in');
    expect(firstUser.first_name).toBe('George');
    expect(firstUser.last_name).toBe('Bluth');
    expect(firstUser.avatar).toBe('https://reqres.in/img/faces/1-image.jpg');

    // Assert second user
    const secondUser = responseBody.data[1];
    expect(secondUser.id).toBe(2);
    expect(secondUser.email).toBe('janet.weaver@reqres.in');
    expect(secondUser.first_name).toBe('Janet');
    expect(secondUser.last_name).toBe('Weaver');
    expect(secondUser.avatar).toBe('https://reqres.in/img/faces/2-image.jpg');
  });

  test('Assert Response for user from page 2', async ({ request }) => {
    const response = await request.get(`${baseUrl}/api/users`, {
      params: { page: 2 },
    });

    // Status code
    expect(response.status()).toBe(200);
    console.log('Status:', response.status());

    // Response body
    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);

    // Assert structure
    expect(responseBody).toHaveProperty('page');
    expect(responseBody).toHaveProperty('per_page');
    expect(responseBody).toHaveProperty('total');
    expect(responseBody).toHaveProperty('total_pages');
    expect(responseBody).toHaveProperty('data');

    // Assert values
    expect(responseBody.page).toBe(2);
    expect(responseBody.per_page).toBe(6);
    expect(responseBody.total).toBe(12);
    expect(responseBody.total_pages).toBe(2);

    // Assert data array
    expect(responseBody.data.length).toBe(responseBody.per_page);
    (responseBody.data as User[]).forEach((user) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('last_name');
      expect(user).toHaveProperty('avatar');
    });

    // Assert first user
    const firstUser = responseBody.data[0];
    expect(firstUser.id).toBe(7);
    expect(firstUser.email).toBe('michael.lawson@reqres.in');
    expect(firstUser.first_name).toBe('Michael');
    expect(firstUser.last_name).toBe('Lawson');
    expect(firstUser.avatar).toBe('https://reqres.in/img/faces/7-image.jpg');

    // Assert second user
    const secondUser = responseBody.data[1];
    expect(secondUser.id).toBe(8);
    expect(secondUser.email).toBe('lindsay.ferguson@reqres.in');
    expect(secondUser.first_name).toBe('Lindsay');
    expect(secondUser.last_name).toBe('Ferguson');
    expect(secondUser.avatar).toBe('https://reqres.in/img/faces/8-image.jpg');
  });
});
