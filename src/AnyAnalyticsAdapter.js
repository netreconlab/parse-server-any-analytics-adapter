const Analytics = require('analytics').Analytics;
const AnalyticsAdapter = require('./AnalyticsAdapter');

/**
 * @class AnyAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the
 * [Analytics](https://github.com/DavidWells/analytics) package.
 */
class AnyAnalyticsAdapter extends AnalyticsAdapter {

  /**
   * @description Creates a new analytics adapter.
   * @param {Object} config analytics core config
   * @param {string?} [config.app] Name of site / app
   * @param {string?} [config.version] Version of your app
   * @param {boolean?} [config.debug] Should analytics run in debug mode
   * @param {AnalyticsPlugin[]?} [config.plugins] Array of analytics plugins
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
