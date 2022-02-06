const Analytics = require('analytics').Analytics;
const AnalyticsAdapter = require('./AnalyticsAdapter');

/**
 * @class AnyAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the
 * [Analytics](https://github.com/DavidWells/analytics) package.
 */
class AnyAnalyticsAdapter extends AnalyticsAdapter {

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
    return this.trackEvent("AppOpened", parameters, req);
  }

  /* eslint-disable-next-line no-unused-vars */
  trackEvent(eventName, parameters, req) {
    return this.analytics.track(eventName, parameters);
  }
}

module.exports = AnyAnalyticsAdapter;
