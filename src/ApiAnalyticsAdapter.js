const path = require('path');
const fs = require('fs').promises;
const Analytics = require('analytics');
const AnalyticsAdapter = require('./AnalyticsAdapter');
const Errors = require('./Errors');

const analytics = Analytics({
    app: '',
    plugins: [
    //  To-do.
    ]
  })
  
/**
 * @class ApiAnalyticsAdapter
 * @description An analytics adapter for Parse Server 
 */
 class ApiAnalyticsAdapter extends AnalyticsAdapter {
    /**
     * Creates a new analytics adapter.
     * @param {Object} tracking id 
     */
    constructor(tracking_id){
        this.tracking_id = tracking_id;
    }
    appOpened(parameters, req){
        return Promise.resolve({});
    }
    trackEvent(eventName, parameters, req){
        var visitor;
        if (typeof(req.auth.user) !== 'undefined') {
        visitor = ua(this._tracking_id, req.auth.user.id);
        } else {
        visitor = ua(this._tracking_id);
        }
        var params = {
        ec: eventName,
        ea: parameters.action || eventName,
        el: parameters.label || '',
        ev: parameters.value || 0,
        dp: parameters.page || req.originalUrl
        }
        
        visitor.event(params).send();
        return Promise.resolve({});
    }
 }
