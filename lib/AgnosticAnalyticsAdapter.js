"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Analytics = require('analytics');

var AnalyticsAdapter = require('./AnalyticsAdapter');

var Errors = require('./Errors');
/**
 * @class AgnosticAnalyticsAdapter
 * @description An analytics adapter for Parse Server using the Analytics (agnostic) package
 */


var AgnosticAnalyticsAdapter = /*#__PURE__*/function (_AnalyticsAdapter) {
  _inherits(AgnosticAnalyticsAdapter, _AnalyticsAdapter);

  var _super = _createSuper(AgnosticAnalyticsAdapter);

  /**
   * Creates a new analytics adapter.
   * @param {Object} config: {
      app //? : string;  
      version //?: string;
      debug //?: boolean;
      plugins //?: AnalyticsPlugin[];
      } 
   */
  function AgnosticAnalyticsAdapter(config) {
    var _this;

    _classCallCheck(this, AgnosticAnalyticsAdapter);

    console.log('*******');
    /* Initialize analytics */

    analytics = Analytics(config);
    console.log('*******22222');
    return _possibleConstructorReturn(_this);
  }

  _createClass(AgnosticAnalyticsAdapter, [{
    key: "appOpened",
    value: function appOpened(parameters, req) {
      trackEvent("AppOpened", parameters, req);
    }
  }, {
    key: "trackEvent",
    value: function trackEvent(eventName, parameters, req) {
      analytics.track(eventName, parameters);
    }
  }]);

  return AgnosticAnalyticsAdapter;
}(AnalyticsAdapter);

module.exports = AgnosticAnalyticsAdapter;
//# sourceMappingURL=AgnosticAnalyticsAdapter.js.map