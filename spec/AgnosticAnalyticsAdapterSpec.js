import AgnosticAnalyticsAdapter from '../src/AgnosticAnalyticsAdapter.js'
// console.log(AgnosticAnalyticsAdapter)
import Parse from './helper.js';
// console.log(Parse)
// import {} from 'jasmine';

describe("AgnosticAnalyticsAdapter", () => {
    const adapter = new AgnosticAnalyticsAdapter();    
    const user = new Parse.User();

    it('should have a method called trackEvent', () => {
        expect(typeof (adapter.trackEvent)).toBe('function');
    });
});