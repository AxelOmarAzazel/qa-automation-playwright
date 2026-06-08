import { test } from '@playwright/test';

test.beforeEach(async () => {
    console.log('Preparando prueba');
});

test('Prueba A', async () => {
    console.log('Ejecutando A');
});

test('Prueba B', async () => {
    console.log('Ejecutando B');
});