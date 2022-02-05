const Analytics = require('analytics');
const AnalyticsAdapter = require('./AnalyticsAdapter');
const Errors = require('./Errors');      

/**
 * @class AgnosticAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the Analytics (agnostic) package
 */
 class AgnosticAnalyticsAdapter extends AnalyticsAdapter {
    analytics = Analytics;

    /**
     * Creates a new analytics adapter.
     * @param {Object} config: {
        app //? : string;  
        version //?: string;
        debug //?: boolean;
        plugins //?: AnalyticsPlugin[];
        } 
     */
    constructor(config) {
        console.log('*******');
        /* Initialize analytics */
        analytics = Analytics(config);
        console.log('*******22222');
    }

    appOpened(parameters, req) {
        trackEvent("AppOpened", parameters, req);
    }

    trackEvent(eventName, parameters, req) {
        analytics.track(eventName, parameters);
    }
 }
 
 module.exports = AgnosticAnalyticsAdapter;