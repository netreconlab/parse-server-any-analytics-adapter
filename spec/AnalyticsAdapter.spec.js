'use strict';

const AnalyticsAdapter = require('../src/AnalyticsAdapter');

describe('AnalyticsAdapter', function () {
  const adapter = new AnalyticsAdapter()

  it('appOpened should resolve', async () => {
    expect(adapter.appOpened({"hello": "world"}), "").toBeInstanceOf(Promise);
  });

  it('trackEvent should resolve', async () => {
    expect(adapter.trackEvent("test", {"hello": "world"}), "").toBeInstanceOf(Promise);
  });
});
