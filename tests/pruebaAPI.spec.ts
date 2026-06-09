import { test, expect } from '@playwright/test';

test(`Validar API`, async ({request}) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

  expect(response.status()).toBe(200);

  const data = await response.json();

  expect(data.id).toBe(1);
  expect(data.name).toBe('Leanne Graham');
  expect(data.email).toBe('Sincere@april.biz');

});