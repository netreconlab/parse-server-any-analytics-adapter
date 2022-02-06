'use strict';

const AnyAnalyticsAdapter = require('../src/AnyAnalyticsAdapter');

describe('AnyAnalyticsAdapter', () => {
  const adapter = new AnyAnalyticsAdapter({
    app: 'my-app-name',
    version: 100,
    plugins: []
  });

  it('should have a method called trackEvent', () => {
    expect(typeof (adapter.trackEvent)).toBe('function');
  });

  it('should have a method called appOpened', () => {
    expect(typeof (adapter.appOpened)).toBe('function');
  });
});
