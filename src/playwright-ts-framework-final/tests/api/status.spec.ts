
import { test, expect } from '../fixtures/testFixtures';

test('API health endpoint is reachable', async ({ apiClient }) => {
  const response = await apiClient.get('https://new.fophelp.pro/api/health');
  expect(response.ok()).toBeTruthy();
});
