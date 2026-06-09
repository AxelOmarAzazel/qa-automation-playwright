import { test, expect } from '@playwright/test';

test(`Validar API`, async ({request}) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(Array.isArray(data)).toBeTruthy();
  expect(data.length).toBeGreaterThan(0);

  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('name');
  expect(data[0]).toHaveProperty('email');

});