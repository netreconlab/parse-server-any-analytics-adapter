'use strict';

const AnyAnalyticsAdapter = require('../src/AnyAnalyticsAdapter');

describe('AnyAnalyticsAdapter', function () {
  const adapter = new AnyAnalyticsAdapter({
    app: 'my-app-name',
    version: 100,
    plugins: []
  });

  it('appOpened should resolve', async () => {
    expect(adapter.appOpened({"hello": "world"}), "").toBeInstanceOf(Promise);
  });

  it('trackEvent should resolve', async () => {
    expect(adapter.trackEvent("test", {"hello": "world"}), "").toBeInstanceOf(Promise);
  });
});
