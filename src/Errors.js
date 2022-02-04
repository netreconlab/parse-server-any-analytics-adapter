class Errors extends Error {

    /**
     * Creates a custom error.
     * @param {String} message The error message.
     */
    static customError(message) {
      return new Error(message);
    }
  
    /**
     * The preset errors.
     * errorType: new Error('ApiAnalyticsAdapter: My error message.'),
     */
    static get Error() {
      return Object.freeze({
        testError: new Error('Testing custom error.'),
        appConfigInvalid: new Error('Invalid configuration parameter pass to "app", expecting a String.'),
        versionConfigInvalid: new Error('Invalid configuration parameter pass to "version", expecting a String.'),
        debugConfigInvalid: new Error('Invalid configuration parameter pass to "debug", expecting a Boolean.'),
        pluginsConfigInvalid: new Error('Invalid configuration parameter pass to "plugins", expecting a AnalyticsPlugin[].')
      });
    }
  }
  
  // module.exports = Errors;
  export default Errors;