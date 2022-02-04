import path from 'path';
import fs from 'fs';
import Analytics from 'analytics';
import AnalyticsAdapter from './AnalyticsAdapter.js';
import Errors from './Errors.js';      

/**
 * @class AgnosticAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the Analytics (agnostic) package
 */
 class AgnosticAnalyticsAdapter extends AnalyticsAdapter {
    // analytics: Analytics;
    // const analytics = new Analytics();

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
        // get parameters
        const { app, version, debug, plugins} = options || {};
        // ensure parameters are correct
        if (app != String) throw Errors.Error.appConfigInvalid;
        if (version != String) throw Errors.Error.versionConfigInvalid;
        if (debug != Boolean) throw Errors.Error.debugConfigInvalid;
        // if (plugins != AnalyticsPlugin[]) throw Errors.Error.pluginsConfigInvalid;

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
 
export default AgnosticAnalyticsAdapter;