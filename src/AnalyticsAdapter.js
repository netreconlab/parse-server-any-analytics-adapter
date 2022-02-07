/* eslint no-unused-vars: "off" */

/**
 * @interface AnalyticsAdapter
 */
class AnalyticsAdapter {

  /**
   * @function appOpened
   * @description Tracks when the app is opened
   * @param {any} parameters: the analytics request body, analytics info will be in the dimensions property
   * @param {Request} req: the original http request
   * @returns {Promise<Any>} The mail provider API response.
   */
  appOpened(parameters, req) {
    return Promise.resolve({});
  }

  /**
   * @function trackEvent
   * @description Tracks an event
   * @param {String} eventName: the name of the custom eventName
   * @param {any} parameters: the analytics request body, analytics info will be in the dimensions property
   * @param {Request} req: the original http request
   * @returns {Promise<Any>} The mail provider API response.
   */
  trackEvent(eventName, parameters, req) {
    return Promise.resolve({});
  }
}

module.exports = AnalyticsAdapter;
