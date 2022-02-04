import AnalyticsAdapter from '../src/AnalyticsAdapter.js'
console.log(AnalyticsAdapter)
import Parse from './helper.js';
console.log(Parse)


describe('AnalyticsAdapter', () => {
  const adapter = new AnalyticsAdapter()
  const user = new Parse.User();

  it('should have a method called appOpened', () => {
    expect(typeof (adapter.appOpened)).toBe('function');
    // expect(adapter.appOpened({parameters: 'param', req: 'req'})).toBeUndefined();
  });

  it('should have a method called trackEvent', () => {
    expect(typeof adapter.trackEvent).toBe('function');
    expect(adapter.trackEvent({ eventName: 'event', parameters: 'param', req: 'req' })).not.toBeUndefined();
  });
});   