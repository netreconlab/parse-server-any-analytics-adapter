"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*eslint no-unused-vars: "off"*/

/**
 * @module Adapters
 */

/**
 * @interface AnalyticsAdapter
 */
var AnalyticsAdapter = /*#__PURE__*/function () {
  function AnalyticsAdapter() {
    _classCallCheck(this, AnalyticsAdapter);
  }

  _createClass(AnalyticsAdapter, [{
    key: "appOpened",
    value:
    /**
    @param {any} parameters: the analytics request body, analytics info will be in the dimensions property
    @param {Request} req: the original http request
     */
    function appOpened(parameters, req) {
      return Promise.resolve({});
    }
    /**
    @param {String} eventName: the name of the custom eventName
    @param {any} parameters: the analytics request body, analytics info will be in the dimensions property
    @param {Request} req: the original http request
     */

  }, {
    key: "trackEvent",
    value: function trackEvent(eventName, parameters, req) {
      return Promise.resolve({});
    }
  }]);

  return AnalyticsAdapter;
}();

module.exports = AnalyticsAdapter;
//# sourceMappingURL=AnalyticsAdapter.js.map