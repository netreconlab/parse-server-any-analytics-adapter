const path = require('path');
const fs = require('fs').promises;
const Analytics = require('analytics');
const AnalyticsAdapter = require('./AnalyticsAdapter');
const Errors = require('./Errors');
/* Initialize analytics */
const analytics = Analytics({
    app: '',
    version: 100,
    plugins: [
    //  To-do.
    ]
  })

/**
 * @class AgnosticAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the Analytics (agnostic) package
 */
 class AgnosticAnalyticsAdapter extends AnalyticsAdapter {
    /**
     * Creates a new analytics adapter.
     * @param {Object} tracking id 
     */
    constructor(tracking_id){
        this.tracking_id = tracking_id;
        // initialize analytics inside constructor, create a property on top of the constructor (const)
        // Look at Analytics original js code for how they construct
    }
    appOpened(parameters, req){
        return Promise.resolve({});
    }
    trackEvent(eventName, parameters, req){
        var visitor;
        if (typeof(req.auth.user) !== 'undefined') {
        // visitor = ua(this._tracking_id, req.auth.user.id);
        visitor = analytics.identify(this.tracking_id)
        } else {
        // visitor = ua(this._tracking_id);
        visitor = analytics.identify(this.tracking_id)
        }
        analytics.track(eventName, parameters)
        return Promise.resolve({});
    }
 }

 module.exports = AgnosticAnalyticsAdapter;