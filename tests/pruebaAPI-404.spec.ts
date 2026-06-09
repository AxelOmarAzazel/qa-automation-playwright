import { test, expect } from '@playwright/test';

test(`Validar API`, async ({request}) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/999999'
    );

  expect(response.status()).toBe(404);

  const data = await response.json();
 expect(data).toEqual({});
  
});