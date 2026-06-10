import { test, expect } from '@playwright/test';

test.describe.configure({
    retries: 2
});

test.skip('Prueba que falla', async () => {
    expect(1).toBe(2);
});