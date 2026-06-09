import { test, expect } from '@playwright/test';

test('Eliminar usuario con DELETE', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.status()).toBe(200);
});