'use strict';

const AnalyticsAdapter = require('../src/AnalyticsAdapter');

describe('AnalyticsAdapter', () => {
  const adapter = new AnalyticsAdapter()

  it('should have a method called appOpened', () => {
    expect(typeof (adapter.appOpened)).toBe('function');
    expect(adapter.appOpened({parameters: 'param', req: 'req'})).not.toBeUndefined();
  });

  it('should have a method called trackEvent', () => {
    expect(typeof adapter.trackEvent).toBe('function');
    expect(adapter.trackEvent({ eventName: 'event', parameters: 'param', req: 'req' })).not.toBeUndefined();
  });
});
