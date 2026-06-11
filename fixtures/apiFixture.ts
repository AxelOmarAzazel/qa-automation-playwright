import { test as base, expect } from '@playwright/test';

type ApiFixtures = {
  apiToken: string;
};

export const test = base.extend<ApiFixtures>({
  apiToken: async ({ request }, use) => {
    const loginResponse = await request.post(
      'https://reqres.in/api/login',
      {
        headers: {
          'x-api-key': process.env.REQRES_API_KEY!,
        },
        data: {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        },
      }
    );
    
    expect(loginResponse.status()).toBe(200);

    const loginData = await loginResponse.json();

    await use(loginData.token);
  },
});

export { expect } from '@playwright/test';