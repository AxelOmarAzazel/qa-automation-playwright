import { test, expect } from '../fixtures/apiFixture';

test('Validar usuarios con API fixture', async ({ request, apiToken }) => {
  const response = await request.get(
    'https://reqres.in/api/users?page=1',
    {
      headers: {
        'x-api-key': process.env.REQRES_API_KEY!,
        Authorization: `Bearer ${apiToken}`,
      },
    }
  );

  expect(response.status()).toBe(200);

  const data = await response.json();

  for (const user of data.data) {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('first_name');
    expect(user).toHaveProperty('last_name');
    expect(user).toHaveProperty('email');
    expect(user.email).toContain('@');
  }
});