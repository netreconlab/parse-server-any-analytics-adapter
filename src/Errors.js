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
      });
    }
  }
  
  module.exports = Errors;