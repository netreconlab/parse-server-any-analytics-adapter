const Analytics = require('analytics').Analytics;
const AnalyticsAdapter = require('./AnalyticsAdapter');

/**
 * @class AnyAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the
 * [Analytics](https://github.com/DavidWells/analytics) package.
 */
class AnyAnalyticsAdapter extends AnalyticsAdapter {
    analytics = {};

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
      super(config);

      /* Initialize analytics */
      this.analytics = Analytics(config);
    }

    appOpened(parameters, req) {
      this.trackEvent("AppOpened", parameters, req);
    }

    trackEvent(eventName, parameters, req) {
      this.analytics.track(eventName, parameters);
    }
}

module.exports = AnyAnalyticsAdapter;
