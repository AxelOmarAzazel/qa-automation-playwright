import { test, expect  } from '@playwright/test';

test('Pruebas API TOKEN', async ({request}) => {

    const loginResponse = await request.post(
    'https://reqres.in/api/login',
    {

        headers: {
        'x-api-key': process.env.REQRES_API_KEY!
        },
        data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
        }
    });

    const loginData = await loginResponse.json();
    const token = loginData.token;

    const response = await request.get(
    'https://reqres.in/api/users?page=1',
    {

        headers: {
            'x-api-key': process.env.REQRES_API_KEY!,
            Authorization: `Bearer ${token}`
            }
    });

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