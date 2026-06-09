import { test } from '@playwright/test';

test.describe('Demo Hooks', () => {

    test.beforeAll(async () => {
        console.log('Before All');
    });

    test.beforeEach(async () => {
        console.log('Before Each');
    });

    test.afterAll(async () => {
        console.log('After All');
    });

    test('Prueba A', async () => {
        console.log('Ejecutando A');
    });

    test('Prueba B', async () => {
        console.log('Ejecutando B');
    });

});