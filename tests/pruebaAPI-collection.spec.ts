import { test, expect } from '@playwright/test';

test(`Validar API`, async ({request}) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users'
    );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(Array.isArray(data)).toBeTruthy();
  expect(data.length).toBeGreaterThan(0);

    for(const user of data){
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
        expect(user.email).toContain('@');
    }
});