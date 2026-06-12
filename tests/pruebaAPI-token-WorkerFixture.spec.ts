import { test, expect } from '../fixtures/apiWFixture';

test('Usuarios', async ({ apiToken }) => {
  expect(apiToken).toBeTruthy();
});

test('Productos', async ({ apiToken }) => {
  expect(apiToken).toBeTruthy();
});

test('Ordenes', async ({ apiToken }) => {
  expect(apiToken).toBeTruthy();
});