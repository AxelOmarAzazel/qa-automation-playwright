import { test, expect } from '@playwright/test';

test(`Actualizar usuario con PUT`, async ({request}) => {

    const response = await request.put(
    'https://jsonplaceholder.typicode.com/users/1',
    {
        data: {
            
            "name": "Axel",
            "email": "axel@test.com"

        }
    }
);

    expect(response.status()).toBe(200);

    const data = await response.json();

    
    expect(data.id).toBe(1);
    expect(data.name).toBe('Axel');
    expect(data.email).toBe('axel@test.com');


});