'use strict';

const AgnosticAnalyticsAdapter = require('../src/AgnosticAnalyticsAdapter');
const googleAnalytics = require('@analytics/google-analytics');

describe('AgnosticAnalyticsAdapter', () => {
    /*const adapter = new AgnosticAnalyticsAdapter({
        app: 'my-app-name',
        version: 100,
        plugins: [
            googleAnalytics({
                trackingId: 'UA-121991291',
            })
        ]  
    });*/

    it('should have a method called trackEvent', () => {
        //expect(typeof (adapter.trackEvent)).toBe('function');
    });
});