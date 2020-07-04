/* eslint-env detox/detox, mocha */

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('title'))).toBeVisible();
    await expect(element(by.id('title'))).toContain('Welcome to RNStarter.');
  });
});
