const path = require('path');
const fs = require('fs').promises;
const Analytics = require('analytics');
const AnalyticsAdapter = require('./AnalyticsAdapter');
const Errors = require('./Errors');

/**
 * @class AgnosticAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the Analytics (agnostic) package
 */
 class AgnosticAnalyticsAdapter extends AnalyticsAdapter {
    analytics: Analytics;

    /**
     * Creates a new analytics adapter.
     * @param {Object} tracking id 
     */
    constructor(config: {
        app?: string;
        version?: string;
        debug?: boolean;
        plugins?: AnalyticsPlugin[];
        }) {

        /* Initialize analytics */
        analytics = Analytics(config);
    }

    appOpened(parameters, req){
        return Promise.resolve({});
    }

    trackEvent(eventName, parameters, req){
        analytics.track(eventName, parameters);
    }
 }

 module.exports = AgnosticAnalyticsAdapter;