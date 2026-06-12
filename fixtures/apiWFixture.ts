import { test as base, expect, request } from '@playwright/test';

type ApiFixtures = {
  apiToken: string;
};

let loginCount = 0;

export const test = base.extend<ApiFixtures>({
  apiToken: [async ({}, use) => {
    loginCount++;

    console.log(`LOGIN EJECUTADO ${loginCount} VEZ(ES)`);

    const apiContext = await request.newContext();

    const loginResponse = await apiContext.post(
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

    await apiContext.dispose();
  }, { scope: 'worker' }],
});

export { expect };