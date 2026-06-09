import { test, expect } from '@playwright/test';

test(`Crear usuario POST`, async ({request}) => {

    const response = await request.post(
    'https://jsonplaceholder.typicode.com/users',
    {
        data: {
            
            "name": "Axel",
            "email": "axel@test.com"

        }
    }
);

    expect(response.status()).toBe(201);

    const data = await response.json();

    
    expect(data).toHaveProperty('id');
    expect(data.name).toBe("Axel");
    expect(data.email).toBe("axel@test.com");


});