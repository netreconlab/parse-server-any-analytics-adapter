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
    /**
     * Creates a new analytics adapter.
     * @param {Object} tracking id 
     */
    constructor(tracking_id, app_name, app_version, plugin_info){
        this.tracking_id = tracking_id;
        // Look at Analytics original js code for how they construct
        /* Initialize analytics */
        const analytics = Analytics({
            app: app_name,
            version: app_version,
            plugins: [
            //  To-do.
            ]
        })
    }
    appOpened(parameters, req){
        return Promise.resolve({});
    }
    trackEvent(eventName, parameters, req){
        var visitor;
        visitor = analytics.identify(this.tracking_id)
        analytics.track(eventName, parameters)
        return Promise.resolve({});
    }
 }

 module.exports = AgnosticAnalyticsAdapter;