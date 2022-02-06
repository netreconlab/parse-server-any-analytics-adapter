'use strict';

const AnyAnalyticsAdapter = require('../src/AnyAnalyticsAdapter');

describe('AnyAnalyticsAdapter', function () {
  const adapter = new AnyAnalyticsAdapter({
    app: 'my-app-name',
    version: 100,
    plugins: []
  });

  it('should have a method called appOpened', async () => {
    expect(adapter.appOpened({"hello": "world"}), "").toBeInstanceOf(Promise);
  });

  it('should have a method called trackEvent', async () => {
    expect(adapter.trackEvent("test", {"hello": "world"}), "").toBeInstanceOf(Promise);
  });
});
