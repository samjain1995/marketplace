(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-products-products-module"],{

/***/ "./node_modules/drift-zoom/es/BoundingBox.js":
/*!***************************************************!*\
  !*** ./node_modules/drift-zoom/es/BoundingBox.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoundingBox; });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./node_modules/drift-zoom/es/util/throwIfMissing.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom */ "./node_modules/drift-zoom/es/util/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var BoundingBox =
/*#__PURE__*/
function () {
  function BoundingBox(options) {
    _classCallCheck(this, BoundingBox);

    this.isShowing = false;
    var _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$containerEl = options.containerEl,
        containerEl = _options$containerEl === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$containerEl;
    this.settings = {
      namespace: namespace,
      zoomFactor: zoomFactor,
      containerEl: containerEl
    };
    this.openClasses = this._buildClasses("open");

    this._buildElement();
  }

  _createClass(BoundingBox, [{
    key: "_buildClasses",
    value: function _buildClasses(suffix) {
      var classes = ["drift-".concat(suffix)];
      var ns = this.settings.namespace;

      if (ns) {
        classes.push("".concat(ns, "-").concat(suffix));
      }

      return classes;
    }
  }, {
    key: "_buildElement",
    value: function _buildElement() {
      this.el = document.createElement("div");
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this._buildClasses("bounding-box"));
    }
  }, {
    key: "show",
    value: function show(zoomPaneWidth, zoomPaneHeight) {
      this.isShowing = true;
      this.settings.containerEl.appendChild(this.el);
      var style = this.el.style;
      style.width = "".concat(Math.round(zoomPaneWidth / this.settings.zoomFactor), "px");
      style.height = "".concat(Math.round(zoomPaneHeight / this.settings.zoomFactor), "px");
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.openClasses);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.isShowing) {
        this.settings.containerEl.removeChild(this.el);
      }

      this.isShowing = false;
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openClasses);
    }
  }, {
    key: "setPosition",
    value: function setPosition(percentageOffsetX, percentageOffsetY, triggerRect) {
      var pageXOffset = window.pageXOffset;
      var pageYOffset = window.pageYOffset;
      var inlineLeft = triggerRect.left + percentageOffsetX * triggerRect.width - this.el.clientWidth / 2 + pageXOffset;
      var inlineTop = triggerRect.top + percentageOffsetY * triggerRect.height - this.el.clientHeight / 2 + pageYOffset;

      if (inlineLeft < triggerRect.left + pageXOffset) {
        inlineLeft = triggerRect.left + pageXOffset;
      } else if (inlineLeft + this.el.clientWidth > triggerRect.left + triggerRect.width + pageXOffset) {
        inlineLeft = triggerRect.left + triggerRect.width - this.el.clientWidth + pageXOffset;
      }

      if (inlineTop < triggerRect.top + pageYOffset) {
        inlineTop = triggerRect.top + pageYOffset;
      } else if (inlineTop + this.el.clientHeight > triggerRect.top + triggerRect.height + pageYOffset) {
        inlineTop = triggerRect.top + triggerRect.height - this.el.clientHeight + pageYOffset;
      }

      this.el.style.left = "".concat(inlineLeft, "px");
      this.el.style.top = "".concat(inlineTop, "px");
    }
  }]);

  return BoundingBox;
}();


//# sourceMappingURL=BoundingBox.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/Drift.js":
/*!*********************************************!*\
  !*** ./node_modules/drift-zoom/es/Drift.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drift; });
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/dom */ "./node_modules/drift-zoom/es/util/dom.js");
/* harmony import */ var _injectBaseStylesheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injectBaseStylesheet */ "./node_modules/drift-zoom/es/injectBaseStylesheet.js");
/* harmony import */ var _Trigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Trigger */ "./node_modules/drift-zoom/es/Trigger.js");
/* harmony import */ var _ZoomPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZoomPane */ "./node_modules/drift-zoom/es/ZoomPane.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Drift =
/*#__PURE__*/
function () {
  function Drift(triggerEl) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Drift);

    this.VERSION = "1.4.0";
    this.triggerEl = triggerEl;
    this.destroy = this.destroy.bind(this);

    if (!Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["isDOMElement"])(this.triggerEl)) {
      throw new TypeError("`new Drift` requires a DOM element as its first argument.");
    } // Prefix for generated element class names (e.g. `my-ns` will
    // result in classes such as `my-ns-pane`. Default `drift-`
    // prefixed classes will always be added as well.


    var namespace = options["namespace"] || null; // Whether the ZoomPane should show whitespace when near the edges.

    var showWhitespaceAtEdges = options["showWhitespaceAtEdges"] || false; // Whether the inline ZoomPane should stay inside
    // the bounds of its image.

    var containInline = options["containInline"] || false; // How much to offset the ZoomPane from the
    // interaction point when inline.

    var inlineOffsetX = options["inlineOffsetX"] || 0;
    var inlineOffsetY = options["inlineOffsetY"] || 0; // A DOM element to append the inline ZoomPane to

    var inlineContainer = options["inlineContainer"] || document.body; // Which trigger attribute to pull the ZoomPane image source from.

    var sourceAttribute = options["sourceAttribute"] || "data-zoom"; // How much to magnify the trigger by in the ZoomPane.
    // (e.g., `zoomFactor: 3` will result in a 900 px wide ZoomPane imag
    // if the trigger is displayed at 300 px wide)

    var zoomFactor = options["zoomFactor"] || 3; // A DOM element to append the non-inline ZoomPane to.
    // Required if `inlinePane !== true`.

    var paneContainer = options["paneContainer"] === undefined ? document.body : options["paneContainer"]; // When to switch to an inline ZoomPane. This can be a boolean or
    // an integer. If `true`, the ZoomPane will always be inline,
    // if `false`, it will switch to inline when `windowWidth <= inlinePane`

    var inlinePane = options["inlinePane"] || 375; // If `true`, touch events will trigger the zoom, like mouse events.

    var handleTouch = "handleTouch" in options ? !!options["handleTouch"] : true; // If present (and a function), this will be called
    // whenever the ZoomPane is shown.

    var onShow = options["onShow"] || null; // If present (and a function), this will be called
    // whenever the ZoomPane is hidden.

    var onHide = options["onHide"] || null; // Add base styles to the page. See the "Theming"
    // section of README.md for more information.

    var injectBaseStyles = "injectBaseStyles" in options ? !!options["injectBaseStyles"] : true; // An optional number that determines how long to wait before
    // showing the ZoomPane because of a `mouseenter` event.

    var hoverDelay = options["hoverDelay"] || 0; // An optional number that determines how long to wait before
    // showing the ZoomPane because of a `touchstart` event.
    // It's unlikely that you would want to use this option, since
    // "tap and hold" is much more intentional than a hover event.

    var touchDelay = options["touchDelay"] || 0; // If true, a bounding box will show the area currently being previewed
    // during mouse hover

    var hoverBoundingBox = options["hoverBoundingBox"] || false; // If true, a bounding box will show the area currently being previewed
    // during touch events

    var touchBoundingBox = options["touchBoundingBox"] || false; // A DOM element to append the bounding box to.

    var boundingBoxContainer = options["boundingBoxContainer"] || document.body;

    if (inlinePane !== true && !Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["isDOMElement"])(paneContainer)) {
      throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");
    }

    if (!Object(_util_dom__WEBPACK_IMPORTED_MODULE_0__["isDOMElement"])(inlineContainer)) {
      throw new TypeError("`inlineContainer` must be a DOM element");
    }

    this.settings = {
      namespace: namespace,
      showWhitespaceAtEdges: showWhitespaceAtEdges,
      containInline: containInline,
      inlineOffsetX: inlineOffsetX,
      inlineOffsetY: inlineOffsetY,
      inlineContainer: inlineContainer,
      sourceAttribute: sourceAttribute,
      zoomFactor: zoomFactor,
      paneContainer: paneContainer,
      inlinePane: inlinePane,
      handleTouch: handleTouch,
      onShow: onShow,
      onHide: onHide,
      injectBaseStyles: injectBaseStyles,
      hoverDelay: hoverDelay,
      touchDelay: touchDelay,
      hoverBoundingBox: hoverBoundingBox,
      touchBoundingBox: touchBoundingBox,
      boundingBoxContainer: boundingBoxContainer
    };

    if (this.settings.injectBaseStyles) {
      Object(_injectBaseStylesheet__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    this._buildZoomPane();

    this._buildTrigger();
  }

  _createClass(Drift, [{
    key: "_buildZoomPane",
    value: function _buildZoomPane() {
      this.zoomPane = new _ZoomPane__WEBPACK_IMPORTED_MODULE_3__["default"]({
        container: this.settings.paneContainer,
        zoomFactor: this.settings.zoomFactor,
        showWhitespaceAtEdges: this.settings.showWhitespaceAtEdges,
        containInline: this.settings.containInline,
        inline: this.settings.inlinePane,
        namespace: this.settings.namespace,
        inlineOffsetX: this.settings.inlineOffsetX,
        inlineOffsetY: this.settings.inlineOffsetY,
        inlineContainer: this.settings.inlineContainer
      });
    }
  }, {
    key: "_buildTrigger",
    value: function _buildTrigger() {
      this.trigger = new _Trigger__WEBPACK_IMPORTED_MODULE_2__["default"]({
        el: this.triggerEl,
        zoomPane: this.zoomPane,
        handleTouch: this.settings.handleTouch,
        onShow: this.settings.onShow,
        onHide: this.settings.onHide,
        sourceAttribute: this.settings.sourceAttribute,
        hoverDelay: this.settings.hoverDelay,
        touchDelay: this.settings.touchDelay,
        hoverBoundingBox: this.settings.hoverBoundingBox,
        touchBoundingBox: this.settings.touchBoundingBox,
        namespace: this.settings.namespace,
        zoomFactor: this.settings.zoomFactor,
        boundingBoxContainer: this.settings.boundingBoxContainer
      });
    }
  }, {
    key: "setZoomImageURL",
    value: function setZoomImageURL(imageURL) {
      this.zoomPane._setImageURL(imageURL);
    }
  }, {
    key: "disable",
    value: function disable() {
      this.trigger.enabled = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.trigger.enabled = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.trigger._hide();

      this.trigger._unbindEvents();
    }
  }, {
    key: "isShowing",
    get: function get() {
      return this.zoomPane.isShowing;
    }
  }, {
    key: "zoomFactor",
    get: function get() {
      return this.settings.zoomFactor;
    },
    set: function set(zf) {
      this.settings.zoomFactor = zf;
      this.zoomPane.settings.zoomFactor = zf;
      this.trigger.settings.zoomFactor = zf;
      this.boundingBox.settings.zoomFactor = zf;
    }
  }]);

  return Drift;
}(); // Public API

/* eslint-disable no-self-assign */



Object.defineProperty(Drift.prototype, "isShowing", {
  get: function get() {
    return this.isShowing;
  }
});
Object.defineProperty(Drift.prototype, "zoomFactor", {
  get: function get() {
    return this.zoomFactor;
  },
  set: function set(value) {
    this.zoomFactor = value;
  }
});
Drift.prototype["setZoomImageURL"] = Drift.prototype.setZoomImageURL;
Drift.prototype["disable"] = Drift.prototype.disable;
Drift.prototype["enable"] = Drift.prototype.enable;
Drift.prototype["destroy"] = Drift.prototype.destroy;
/* eslint-enable no-self-assign */
//# sourceMappingURL=Drift.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/Trigger.js":
/*!***********************************************!*\
  !*** ./node_modules/drift-zoom/es/Trigger.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trigger; });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./node_modules/drift-zoom/es/util/throwIfMissing.js");
/* harmony import */ var _BoundingBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoundingBox */ "./node_modules/drift-zoom/es/BoundingBox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Trigger =
/*#__PURE__*/
function () {
  function Trigger() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Trigger);

    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
    this._handleEntry = this._handleEntry.bind(this);
    this._handleMovement = this._handleMovement.bind(this);
    var _options$el = options.el,
        el = _options$el === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$el,
        _options$zoomPane = options.zoomPane,
        zoomPane = _options$zoomPane === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomPane,
        _options$sourceAttrib = options.sourceAttribute,
        sourceAttribute = _options$sourceAttrib === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$sourceAttrib,
        _options$handleTouch = options.handleTouch,
        handleTouch = _options$handleTouch === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$handleTouch,
        _options$onShow = options.onShow,
        onShow = _options$onShow === void 0 ? null : _options$onShow,
        _options$onHide = options.onHide,
        onHide = _options$onHide === void 0 ? null : _options$onHide,
        _options$hoverDelay = options.hoverDelay,
        hoverDelay = _options$hoverDelay === void 0 ? 0 : _options$hoverDelay,
        _options$touchDelay = options.touchDelay,
        touchDelay = _options$touchDelay === void 0 ? 0 : _options$touchDelay,
        _options$hoverBoundin = options.hoverBoundingBox,
        hoverBoundingBox = _options$hoverBoundin === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$hoverBoundin,
        _options$touchBoundin = options.touchBoundingBox,
        touchBoundingBox = _options$touchBoundin === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$touchBoundin,
        _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$boundingBoxC = options.boundingBoxContainer,
        boundingBoxContainer = _options$boundingBoxC === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$boundingBoxC;
    this.settings = {
      el: el,
      zoomPane: zoomPane,
      sourceAttribute: sourceAttribute,
      handleTouch: handleTouch,
      onShow: onShow,
      onHide: onHide,
      hoverDelay: hoverDelay,
      touchDelay: touchDelay,
      hoverBoundingBox: hoverBoundingBox,
      touchBoundingBox: touchBoundingBox,
      namespace: namespace,
      zoomFactor: zoomFactor,
      boundingBoxContainer: boundingBoxContainer
    };

    if (this.settings.hoverBoundingBox || this.settings.touchBoundingBox) {
      this.boundingBox = new _BoundingBox__WEBPACK_IMPORTED_MODULE_1__["default"]({
        namespace: this.settings.namespace,
        zoomFactor: this.settings.zoomFactor,
        containerEl: this.settings.boundingBoxContainer
      });
    }

    this.enabled = true;

    this._bindEvents();
  }

  _createClass(Trigger, [{
    key: "_preventDefault",
    value: function _preventDefault(event) {
      event.preventDefault();
    }
  }, {
    key: "_preventDefaultAllowTouchScroll",
    value: function _preventDefaultAllowTouchScroll(event) {
      if (!this.settings.touchDelay || !this._isTouchEvent(event) || this.isShowing) {
        event.preventDefault();
      }
    }
  }, {
    key: "_isTouchEvent",
    value: function _isTouchEvent(event) {
      return !!event.touches;
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.settings.el.addEventListener("mouseenter", this._handleEntry, false);
      this.settings.el.addEventListener("mouseleave", this._hide, false);
      this.settings.el.addEventListener("mousemove", this._handleMovement, false);

      if (this.settings.handleTouch) {
        this.settings.el.addEventListener("touchstart", this._handleEntry, false);
        this.settings.el.addEventListener("touchend", this._hide, false);
        this.settings.el.addEventListener("touchmove", this._handleMovement, false);
      } else {
        this.settings.el.addEventListener("touchstart", this._preventDefault, false);
        this.settings.el.addEventListener("touchend", this._preventDefault, false);
        this.settings.el.addEventListener("touchmove", this._preventDefault, false);
      }
    }
  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      this.settings.el.removeEventListener("mouseenter", this._handleEntry, false);
      this.settings.el.removeEventListener("mouseleave", this._hide, false);
      this.settings.el.removeEventListener("mousemove", this._handleMovement, false);

      if (this.settings.handleTouch) {
        this.settings.el.removeEventListener("touchstart", this._handleEntry, false);
        this.settings.el.removeEventListener("touchend", this._hide, false);
        this.settings.el.removeEventListener("touchmove", this._handleMovement, false);
      } else {
        this.settings.el.removeEventListener("touchstart", this._preventDefault, false);
        this.settings.el.removeEventListener("touchend", this._preventDefault, false);
        this.settings.el.removeEventListener("touchmove", this._preventDefault, false);
      }
    }
  }, {
    key: "_handleEntry",
    value: function _handleEntry(e) {
      this._preventDefaultAllowTouchScroll(e);

      this._lastMovement = e;

      if (e.type == "mouseenter" && this.settings.hoverDelay) {
        this.entryTimeout = setTimeout(this._show, this.settings.hoverDelay);
      } else if (this.settings.touchDelay) {
        this.entryTimeout = setTimeout(this._show, this.settings.touchDelay);
      } else {
        this._show();
      }
    }
  }, {
    key: "_show",
    value: function _show() {
      if (!this.enabled) {
        return;
      }

      var onShow = this.settings.onShow;

      if (onShow && typeof onShow === "function") {
        onShow();
      }

      this.settings.zoomPane.show(this.settings.el.getAttribute(this.settings.sourceAttribute), this.settings.el.clientWidth, this.settings.el.clientHeight);

      if (this._lastMovement) {
        var touchActivated = this._lastMovement.touches;

        if (touchActivated && this.settings.touchBoundingBox || !touchActivated && this.settings.hoverBoundingBox) {
          this.boundingBox.show(this.settings.zoomPane.el.clientWidth, this.settings.zoomPane.el.clientHeight);
        }
      }

      this._handleMovement();
    }
  }, {
    key: "_hide",
    value: function _hide(e) {
      if (e) {
        this._preventDefaultAllowTouchScroll(e);
      }

      this._lastMovement = null;

      if (this.entryTimeout) {
        clearTimeout(this.entryTimeout);
      }

      if (this.boundingBox) {
        this.boundingBox.hide();
      }

      var onHide = this.settings.onHide;

      if (onHide && typeof onHide === "function") {
        onHide();
      }

      this.settings.zoomPane.hide();
    }
  }, {
    key: "_handleMovement",
    value: function _handleMovement(e) {
      if (e) {
        this._preventDefaultAllowTouchScroll(e);

        this._lastMovement = e;
      } else if (this._lastMovement) {
        e = this._lastMovement;
      } else {
        return;
      }

      var movementX;
      var movementY;

      if (e.touches) {
        var firstTouch = e.touches[0];
        movementX = firstTouch.clientX;
        movementY = firstTouch.clientY;
      } else {
        movementX = e.clientX;
        movementY = e.clientY;
      }

      var el = this.settings.el;
      var rect = el.getBoundingClientRect();
      var offsetX = movementX - rect.left;
      var offsetY = movementY - rect.top;
      var percentageOffsetX = offsetX / this.settings.el.clientWidth;
      var percentageOffsetY = offsetY / this.settings.el.clientHeight;

      if (this.boundingBox) {
        this.boundingBox.setPosition(percentageOffsetX, percentageOffsetY, rect);
      }

      this.settings.zoomPane.setPosition(percentageOffsetX, percentageOffsetY, rect);
    }
  }, {
    key: "isShowing",
    get: function get() {
      return this.settings.zoomPane.isShowing;
    }
  }]);

  return Trigger;
}();


//# sourceMappingURL=Trigger.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/ZoomPane.js":
/*!************************************************!*\
  !*** ./node_modules/drift-zoom/es/ZoomPane.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoomPane; });
/* harmony import */ var _util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/throwIfMissing */ "./node_modules/drift-zoom/es/util/throwIfMissing.js");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/dom */ "./node_modules/drift-zoom/es/util/dom.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // All officially-supported browsers have this, but it's easy to
// account for, just in case.

var divStyle = document.createElement("div").style;
var HAS_ANIMATION = typeof document === "undefined" ? false : "animation" in divStyle || "webkitAnimation" in divStyle;

var ZoomPane =
/*#__PURE__*/
function () {
  function ZoomPane() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ZoomPane);

    this._completeShow = this._completeShow.bind(this);
    this._completeHide = this._completeHide.bind(this);
    this._handleLoad = this._handleLoad.bind(this);
    this.isShowing = false;
    var _options$container = options.container,
        container = _options$container === void 0 ? null : _options$container,
        _options$zoomFactor = options.zoomFactor,
        zoomFactor = _options$zoomFactor === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$zoomFactor,
        _options$inline = options.inline,
        inline = _options$inline === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$inline,
        _options$namespace = options.namespace,
        namespace = _options$namespace === void 0 ? null : _options$namespace,
        _options$showWhitespa = options.showWhitespaceAtEdges,
        showWhitespaceAtEdges = _options$showWhitespa === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$showWhitespa,
        _options$containInlin = options.containInline,
        containInline = _options$containInlin === void 0 ? Object(_util_throwIfMissing__WEBPACK_IMPORTED_MODULE_0__["default"])() : _options$containInlin,
        _options$inlineOffset = options.inlineOffsetX,
        inlineOffsetX = _options$inlineOffset === void 0 ? 0 : _options$inlineOffset,
        _options$inlineOffset2 = options.inlineOffsetY,
        inlineOffsetY = _options$inlineOffset2 === void 0 ? 0 : _options$inlineOffset2,
        _options$inlineContai = options.inlineContainer,
        inlineContainer = _options$inlineContai === void 0 ? document.body : _options$inlineContai;
    this.settings = {
      container: container,
      zoomFactor: zoomFactor,
      inline: inline,
      namespace: namespace,
      showWhitespaceAtEdges: showWhitespaceAtEdges,
      containInline: containInline,
      inlineOffsetX: inlineOffsetX,
      inlineOffsetY: inlineOffsetY,
      inlineContainer: inlineContainer
    };
    this.openClasses = this._buildClasses("open");
    this.openingClasses = this._buildClasses("opening");
    this.closingClasses = this._buildClasses("closing");
    this.inlineClasses = this._buildClasses("inline");
    this.loadingClasses = this._buildClasses("loading");

    this._buildElement();
  }

  _createClass(ZoomPane, [{
    key: "_buildClasses",
    value: function _buildClasses(suffix) {
      var classes = ["drift-".concat(suffix)];
      var ns = this.settings.namespace;

      if (ns) {
        classes.push("".concat(ns, "-").concat(suffix));
      }

      return classes;
    }
  }, {
    key: "_buildElement",
    value: function _buildElement() {
      this.el = document.createElement("div");
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this._buildClasses("zoom-pane"));
      var loaderEl = document.createElement("div");
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(loaderEl, this._buildClasses("zoom-pane-loader"));
      this.el.appendChild(loaderEl);
      this.imgEl = document.createElement("img");
      this.el.appendChild(this.imgEl);
    }
  }, {
    key: "_setImageURL",
    value: function _setImageURL(imageURL) {
      this.imgEl.setAttribute("src", imageURL);
    }
  }, {
    key: "_setImageSize",
    value: function _setImageSize(triggerWidth, triggerHeight) {
      this.imgEl.style.width = "".concat(triggerWidth * this.settings.zoomFactor, "px");
      this.imgEl.style.height = "".concat(triggerHeight * this.settings.zoomFactor, "px");
    } // `percentageOffsetX` and `percentageOffsetY` must be percentages
    // expressed as floats between `0' and `1`.

  }, {
    key: "setPosition",
    value: function setPosition(percentageOffsetX, percentageOffsetY, triggerRect) {
      var imgElWidth = this.imgEl.offsetWidth;
      var imgElHeight = this.imgEl.offsetHeight;
      var elWidth = this.el.offsetWidth;
      var elHeight = this.el.offsetHeight;
      var centreOfContainerX = elWidth / 2;
      var centreOfContainerY = elHeight / 2;
      var targetImgXToBeCentre = imgElWidth * percentageOffsetX;
      var targetImgYToBeCentre = imgElHeight * percentageOffsetY;
      var left = centreOfContainerX - targetImgXToBeCentre;
      var top = centreOfContainerY - targetImgYToBeCentre;
      var differenceBetweenContainerWidthAndImgWidth = elWidth - imgElWidth;
      var differenceBetweenContainerHeightAndImgHeight = elHeight - imgElHeight;
      var isContainerLargerThanImgX = differenceBetweenContainerWidthAndImgWidth > 0;
      var isContainerLargerThanImgY = differenceBetweenContainerHeightAndImgHeight > 0;
      var minLeft = isContainerLargerThanImgX ? differenceBetweenContainerWidthAndImgWidth / 2 : 0;
      var minTop = isContainerLargerThanImgY ? differenceBetweenContainerHeightAndImgHeight / 2 : 0;
      var maxLeft = isContainerLargerThanImgX ? differenceBetweenContainerWidthAndImgWidth / 2 : differenceBetweenContainerWidthAndImgWidth;
      var maxTop = isContainerLargerThanImgY ? differenceBetweenContainerHeightAndImgHeight / 2 : differenceBetweenContainerHeightAndImgHeight;

      if (this.el.parentElement === this.settings.inlineContainer) {
        // This may be needed in the future to deal with browser event
        // inconsistencies, but it's difficult to tell for sure.
        // let scrollX = isTouch ? 0 : window.scrollX;
        // let scrollY = isTouch ? 0 : window.scrollY;
        var scrollX = window.pageXOffset;
        var scrollY = window.pageYOffset;
        var inlineLeft = triggerRect.left + percentageOffsetX * triggerRect.width - elWidth / 2 + this.settings.inlineOffsetX + scrollX;
        var inlineTop = triggerRect.top + percentageOffsetY * triggerRect.height - elHeight / 2 + this.settings.inlineOffsetY + scrollY;

        if (this.settings.containInline) {
          if (inlineLeft < triggerRect.left + scrollX) {
            inlineLeft = triggerRect.left + scrollX;
          } else if (inlineLeft + elWidth > triggerRect.left + triggerRect.width + scrollX) {
            inlineLeft = triggerRect.left + triggerRect.width - elWidth + scrollX;
          }

          if (inlineTop < triggerRect.top + scrollY) {
            inlineTop = triggerRect.top + scrollY;
          } else if (inlineTop + elHeight > triggerRect.top + triggerRect.height + scrollY) {
            inlineTop = triggerRect.top + triggerRect.height - elHeight + scrollY;
          }
        }

        this.el.style.left = "".concat(inlineLeft, "px");
        this.el.style.top = "".concat(inlineTop, "px");
      }

      if (!this.settings.showWhitespaceAtEdges) {
        if (left > minLeft) {
          left = minLeft;
        } else if (left < maxLeft) {
          left = maxLeft;
        }

        if (top > minTop) {
          top = minTop;
        } else if (top < maxTop) {
          top = maxTop;
        }
      }

      this.imgEl.style.transform = "translate(".concat(left, "px, ").concat(top, "px)");
      this.imgEl.style.webkitTransform = "translate(".concat(left, "px, ").concat(top, "px)");
    }
  }, {
    key: "_removeListenersAndResetClasses",
    value: function _removeListenersAndResetClasses() {
      this.el.removeEventListener("animationend", this._completeShow, false);
      this.el.removeEventListener("animationend", this._completeHide, false);
      this.el.removeEventListener("webkitAnimationEnd", this._completeShow, false);
      this.el.removeEventListener("webkitAnimationEnd", this._completeHide, false);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openClasses);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.closingClasses);
    }
  }, {
    key: "show",
    value: function show(imageURL, triggerWidth, triggerHeight) {
      this._removeListenersAndResetClasses();

      this.isShowing = true;
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.openClasses);

      if (this.imgEl.getAttribute("src") != imageURL) {
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.loadingClasses);
        this.imgEl.addEventListener("load", this._handleLoad, false);

        this._setImageURL(imageURL);
      }

      this._setImageSize(triggerWidth, triggerHeight);

      if (this._isInline) {
        this._showInline();
      } else {
        this._showInContainer();
      }

      if (HAS_ANIMATION) {
        this.el.addEventListener("animationend", this._completeShow, false);
        this.el.addEventListener("webkitAnimationEnd", this._completeShow, false);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.openingClasses);
      }
    }
  }, {
    key: "_showInline",
    value: function _showInline() {
      this.settings.inlineContainer.appendChild(this.el);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.inlineClasses);
    }
  }, {
    key: "_showInContainer",
    value: function _showInContainer() {
      this.settings.container.appendChild(this.el);
    }
  }, {
    key: "hide",
    value: function hide() {
      this._removeListenersAndResetClasses();

      this.isShowing = false;

      if (HAS_ANIMATION) {
        this.el.addEventListener("animationend", this._completeHide, false);
        this.el.addEventListener("webkitAnimationEnd", this._completeHide, false);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["addClasses"])(this.el, this.closingClasses);
      } else {
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openClasses);
        Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.inlineClasses);
      }
    }
  }, {
    key: "_completeShow",
    value: function _completeShow() {
      this.el.removeEventListener("animationend", this._completeShow, false);
      this.el.removeEventListener("webkitAnimationEnd", this._completeShow, false);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openingClasses);
    }
  }, {
    key: "_completeHide",
    value: function _completeHide() {
      this.el.removeEventListener("animationend", this._completeHide, false);
      this.el.removeEventListener("webkitAnimationEnd", this._completeHide, false);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.openClasses);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.closingClasses);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.inlineClasses);
      this.el.setAttribute("style", ""); // The window could have been resized above or below `inline`
      // limits since the ZoomPane was shown. Because of this, we
      // can't rely on `this._isInline` here.

      if (this.el.parentElement === this.settings.container) {
        this.settings.container.removeChild(this.el);
      } else if (this.el.parentElement === this.settings.inlineContainer) {
        this.settings.inlineContainer.removeChild(this.el);
      }
    }
  }, {
    key: "_handleLoad",
    value: function _handleLoad() {
      this.imgEl.removeEventListener("load", this._handleLoad, false);
      Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["removeClasses"])(this.el, this.loadingClasses);
    }
  }, {
    key: "_isInline",
    get: function get() {
      var inline = this.settings.inline;
      return inline === true || typeof inline === "number" && window.innerWidth <= inline;
    }
  }]);

  return ZoomPane;
}();


//# sourceMappingURL=ZoomPane.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/injectBaseStylesheet.js":
/*!************************************************************!*\
  !*** ./node_modules/drift-zoom/es/injectBaseStylesheet.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectBaseStylesheet; });
/* UNMINIFIED RULES

const RULES = `
@keyframes noop {
  0% { zoom: 1; }
}

@-webkit-keyframes noop {
  0% { zoom: 1; }
}

.drift-zoom-pane.drift-open {
  display: block;
}

.drift-zoom-pane.drift-opening, .drift-zoom-pane.drift-closing {
  animation: noop 1ms;
  -webkit-animation: noop 1ms;
}

.drift-zoom-pane {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.drift-zoom-pane-loader {
  display: none;
}

.drift-zoom-pane img {
  position: absolute;
  display: block;
  max-width: none;
  max-height: none;
}

.drift-bounding-box {
  position: absolute;
  pointer-events: none;
}
`;

*/
var RULES = ".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}";
function injectBaseStylesheet() {
  if (document.querySelector(".drift-base-styles")) {
    return;
  }

  var styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.classList.add("drift-base-styles");
  styleEl.appendChild(document.createTextNode(RULES));
  var head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}
//# sourceMappingURL=injectBaseStylesheet.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/util/dom.js":
/*!************************************************!*\
  !*** ./node_modules/drift-zoom/es/util/dom.js ***!
  \************************************************/
/*! exports provided: isDOMElement, addClasses, removeClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMElement", function() { return isDOMElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClasses", function() { return addClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClasses", function() { return removeClasses; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// This is not really a perfect check, but works fine.
// From http://stackoverflow.com/questions/384286
var HAS_DOM_2 = (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) === "object";
function isDOMElement(obj) {
  return HAS_DOM_2 ? obj instanceof HTMLElement : obj && _typeof(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
}
function addClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.add(className);
  });
}
function removeClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.remove(className);
  });
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./node_modules/drift-zoom/es/util/throwIfMissing.js":
/*!***********************************************************!*\
  !*** ./node_modules/drift-zoom/es/util/throwIfMissing.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throwIfMissing; });
function throwIfMissing() {
  throw new Error("Missing parameter");
}
//# sourceMappingURL=throwIfMissing.js.map

/***/ }),

/***/ "./node_modules/ngx-image-zoom/__ivy_ngcc__/fesm2015/ngx-image-zoom.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ngx-image-zoom/__ivy_ngcc__/fesm2015/ngx-image-zoom.js ***!
  \*****************************************************************************/
/*! exports provided: NgxImageZoomComponent, NgxImageZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxImageZoomComponent", function() { return NgxImageZoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxImageZoomModule", function() { return NgxImageZoomModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["zoomContainer"];
const _c1 = ["imageThumbnail"];
const _c2 = ["fullSizeImage"];
const _c3 = function (a1) { return { "ngxImageZoomFullContainer": true, "ngxImageZoomLensEnabled": a1 }; };
var NgxImageZoomComponent_1;
let NgxImageZoomComponent = NgxImageZoomComponent_1 = class NgxImageZoomComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.zoomScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.zoomPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enableLens = false;
        this.lensBorderRadius = 0;
        this.lensWidth = 100;
        this.lensHeight = 100;
        this.zoomMode = 'hover';
        this.magnification = 1;
        this.enableScrollZoom = false;
        this.scrollStepSize = 0.1;
        this.circularLens = false;
        this.maxZoomRatio = 2;
        this.zoomingEnabled = false;
        this.zoomFrozen = false;
        this.isReady = false;
        this.thumbImageLoaded = false;
        this.fullImageLoaded = false;
        this.eventListeners = [];
    }
    set setThumbImage(thumbImage) {
        this.thumbImageLoaded = false;
        this.isReady = false;
        this.thumbImage = thumbImage;
    }
    set setFullImage(fullImage) {
        this.fullImageLoaded = false;
        this.isReady = false;
        this.fullImage = fullImage;
    }
    set setZoomMode(zoomMode) {
        if (NgxImageZoomComponent_1.validZoomModes.some(m => m === zoomMode)) {
            this.zoomMode = zoomMode;
        }
    }
    set setMagnification(magnification) {
        this.magnification = Number(magnification) || this.magnification;
        this.zoomScroll.emit(this.magnification);
    }
    set setMinZoomRatio(minZoomRatio) {
        const ratio = Number(minZoomRatio) || this.minZoomRatio || this.baseRatio || 0;
        this.minZoomRatio = Math.max(ratio, this.baseRatio || 0);
    }
    set setMaxZoomRatio(maxZoomRatio) {
        this.maxZoomRatio = Number(maxZoomRatio) || this.maxZoomRatio;
    }
    set setScrollStepSize(stepSize) {
        this.scrollStepSize = Number(stepSize) || this.scrollStepSize;
    }
    set setEnableLens(enable) {
        this.enableLens = Boolean(enable);
    }
    set setLensWidth(width) {
        this.lensWidth = Number(width) || this.lensWidth;
    }
    set setLensHeight(height) {
        this.lensHeight = Number(height) || this.lensHeight;
    }
    set setCircularLens(enable) {
        this.circularLens = Boolean(enable);
    }
    set setEnableScrollZoom(enable) {
        this.enableScrollZoom = Boolean(enable);
    }
    ngOnInit() {
        this.setUpEventListeners();
    }
    ngOnChanges() {
        if (this.enableLens) {
            if (this.circularLens) {
                this.lensBorderRadius = this.lensWidth / 2;
            }
            else {
                this.lensBorderRadius = 0;
            }
        }
        this.calculateRatioAndOffset();
        this.calculateImageAndLensPosition();
    }
    ngOnDestroy() {
        this.eventListeners.forEach((destroyFn) => destroyFn());
    }
    /**
     * Template helper methods
     */
    onThumbImageLoaded() {
        this.thumbImageLoaded = true;
        this.checkImagesLoaded();
    }
    onFullImageLoaded() {
        this.fullImageLoaded = true;
        this.checkImagesLoaded();
    }
    setUpEventListeners() {
        if (this.zoomMode === 'hover') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseenter', (event) => this.hoverMouseEnter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.hoverMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.hoverMouseMove(event)));
        }
        else if (this.zoomMode === 'toggle') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.toggleClick(event)));
        }
        else if (this.zoomMode === 'click') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.clickStarter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.clickMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.clickMouseMove(event)));
        }
        else if (this.zoomMode === 'hover-freeze') {
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseenter', (event) => this.hoverFreezeMouseEnter(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mouseleave', () => this.hoverFreezeMouseLeave()));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousemove', (event) => this.hoverFreezeMouseMove(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'click', (event) => this.hoverFreezeClick(event)));
        }
        if (this.enableScrollZoom) {
            // Chrome: 'mousewheel', Firefox: 'DOMMouseScroll', IE: 'onmousewheel'
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'mousewheel', (event) => this.onMouseWheel(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'DOMMouseScroll', (event) => this.onMouseWheel(event)));
            this.eventListeners.push(this.renderer.listen(this.zoomContainer.nativeElement, 'onmousewheel', (event) => this.onMouseWheel(event)));
        }
        if (this.enableLens && this.circularLens) {
            this.lensBorderRadius = this.lensWidth / 2;
        }
    }
    checkImagesLoaded() {
        this.calculateRatioAndOffset();
        if (this.thumbImageLoaded && this.fullImageLoaded) {
            this.calculateImageAndLensPosition();
            this.isReady = true;
        }
    }
    /**
     * Zoom position setters
     */
    setZoomPosition(left, top) {
        this.latestMouseLeft = Number(left) || this.latestMouseLeft;
        this.latestMouseTop = Number(top) || this.latestMouseTop;
        const c = {
            x: this.latestMouseLeft,
            y: this.latestMouseTop
        };
        this.zoomPosition.emit(c);
    }
    /**
     * Mouse wheel event
     */
    onMouseWheel(event) {
        // Don't eat events if zooming isn't active
        if (!this.zoomingEnabled || this.zoomFrozen) {
            return;
        }
        event = window.event || event; // old IE
        const direction = Math.max(Math.min((event.wheelDelta || -event.detail), 1), -1);
        if (direction > 0) {
            // up
            this.setMagnification = Math.min(this.magnification + this.scrollStepSize, this.maxZoomRatio);
        }
        else {
            // down
            this.setMagnification = Math.max(this.magnification - this.scrollStepSize, this.minZoomRatio);
        }
        this.calculateRatio();
        this.calculateZoomPosition(event);
        // Prevent scrolling on page.
        event.returnValue = false; // IE
        if (event.preventDefault) {
            event.preventDefault(); // Chrome & FF
        }
    }
    /**
     * Hover mode
     */
    hoverMouseEnter(event) {
        this.zoomOn(event);
    }
    hoverMouseLeave() {
        this.zoomOff();
    }
    hoverMouseMove(event) {
        this.calculateZoomPosition(event);
    }
    /**
     * Toggle mode
     */
    toggleClick(event) {
        if (this.zoomingEnabled) {
            this.zoomOff();
        }
        else {
            this.zoomOn(event);
        }
    }
    /**
     * Click mode
     */
    clickStarter(event) {
        if (this.zoomingEnabled === false) {
            this.zoomOn(event);
        }
    }
    clickMouseLeave() {
        this.zoomOff();
    }
    clickMouseMove(event) {
        if (this.zoomingEnabled) {
            this.calculateZoomPosition(event);
        }
    }
    /**
     * Hover freeze mode
     */
    hoverFreezeMouseEnter(event) {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.zoomOn(event);
        }
    }
    hoverFreezeMouseLeave() {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.zoomOff();
        }
    }
    hoverFreezeMouseMove(event) {
        if (this.zoomingEnabled && !this.zoomFrozen) {
            this.calculateZoomPosition(event);
        }
    }
    hoverFreezeClick(event) {
        if (this.zoomingEnabled && this.zoomFrozen) {
            this.zoomFrozen = false;
            this.zoomOff();
        }
        else if (this.zoomingEnabled) {
            this.zoomFrozen = true;
        }
        else {
            this.zoomOn(event);
        }
    }
    /**
     * Private helper methods
     */
    zoomOn(event) {
        if (this.isReady) {
            this.zoomingEnabled = true;
            this.calculateRatioAndOffset();
            this.display = 'block';
            this.calculateZoomPosition(event);
        }
    }
    zoomOff() {
        this.zoomingEnabled = false;
        this.display = 'none';
    }
    calculateZoomPosition(event) {
        const newLeft = Math.max(Math.min(event.offsetX, this.thumbWidth), 0);
        const newTop = Math.max(Math.min(event.offsetY, this.thumbHeight), 0);
        this.setZoomPosition(newLeft, newTop);
        this.calculateImageAndLensPosition();
    }
    calculateImageAndLensPosition() {
        let lensLeftMod = 0;
        let lensTopMod = 0;
        if (this.enableLens) {
            lensLeftMod = this.lensLeft = this.latestMouseLeft - this.lensWidth / 2;
            lensTopMod = this.lensTop = this.latestMouseTop - this.lensHeight / 2;
        }
        this.fullImageLeft = (this.latestMouseLeft * -this.xRatio) - lensLeftMod;
        this.fullImageTop = (this.latestMouseTop * -this.yRatio) - lensTopMod;
    }
    calculateRatioAndOffset() {
        this.thumbWidth = this.imageThumbnail.nativeElement.width;
        this.thumbHeight = this.imageThumbnail.nativeElement.height;
        // If lens is disabled, set lens size to equal thumb size and position it on top of the thumb
        if (!this.enableLens) {
            this.lensWidth = this.thumbWidth;
            this.lensHeight = this.thumbHeight;
            this.lensLeft = 0;
            this.lensTop = 0;
        }
        // getBoundingClientRect() ? https://stackoverflow.com/a/44008873
        this.offsetTop = this.imageThumbnail.nativeElement.getBoundingClientRect().top;
        this.offsetLeft = this.imageThumbnail.nativeElement.getBoundingClientRect().left;
        if (this.fullImage === undefined) {
            this.fullImage = this.thumbImage;
        }
        if (this.fullImageLoaded) {
            this.fullWidth = this.fullSizeImage.nativeElement.naturalWidth;
            this.fullHeight = this.fullSizeImage.nativeElement.naturalHeight;
            this.baseRatio = Math.max((this.thumbWidth / this.fullWidth), (this.thumbHeight / this.fullHeight));
            // Don't allow zooming to smaller than thumbnail size
            this.minZoomRatio = Math.max(this.minZoomRatio || 0, this.baseRatio || 0);
            this.calculateRatio();
        }
    }
    calculateRatio() {
        this.magnifiedWidth = (this.fullWidth * this.magnification);
        this.magnifiedHeight = (this.fullHeight * this.magnification);
        this.xRatio = (this.magnifiedWidth - this.thumbWidth) / this.thumbWidth;
        this.yRatio = (this.magnifiedHeight - this.thumbHeight) / this.thumbHeight;
    }
};
NgxImageZoomComponent.ɵfac = function NgxImageZoomComponent_Factory(t) { return new (t || NgxImageZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
NgxImageZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxImageZoomComponent, selectors: [["lib-ngx-image-zoom"]], viewQuery: function NgxImageZoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.zoomContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.imageThumbnail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullSizeImage = _t.first);
    } }, inputs: { setThumbImage: ["thumbImage", "setThumbImage"], setFullImage: ["fullImage", "setFullImage"], setZoomMode: ["zoomMode", "setZoomMode"], setMagnification: ["magnification", "setMagnification"], setMinZoomRatio: ["minZoomRatio", "setMinZoomRatio"], setMaxZoomRatio: ["maxZoomRatio", "setMaxZoomRatio"], setScrollStepSize: ["scrollStepSize", "setScrollStepSize"], setEnableLens: ["enableLens", "setEnableLens"], setLensWidth: ["lensWidth", "setLensWidth"], setLensHeight: ["lensHeight", "setLensHeight"], setCircularLens: ["circularLens", "setCircularLens"], setEnableScrollZoom: ["enableScrollZoom", "setEnableScrollZoom"] }, outputs: { zoomScroll: "zoomScroll", zoomPosition: "zoomPosition" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 31, consts: [[1, "ngxImageZoomContainer"], ["zoomContainer", ""], [1, "ngxImageZoomThumbnail", 3, "src", "load"], ["imageThumbnail", ""], [3, "ngClass"], [1, "ngxImageZoomFull", 3, "src", "load"], ["fullSizeImage", ""]], template: function NgxImageZoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function NgxImageZoomComponent_Template_img_load_2_listener() { return ctx.onThumbImageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function NgxImageZoomComponent_Template_img_load_5_listener() { return ctx.onFullImageLoaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.thumbWidth, "px")("height", ctx.thumbHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.thumbImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.display)("top", ctx.lensTop, "px")("left", ctx.lensLeft, "px")("width", ctx.lensWidth, "px")("height", ctx.lensHeight, "px")("border-radius", ctx.lensBorderRadius, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c3, ctx.enableLens));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.display)("top", ctx.fullImageTop, "px")("left", ctx.fullImageLeft, "px")("width", ctx.magnifiedWidth, "px")("height", ctx.magnifiedHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.fullImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".ngxImageZoomContainer[_ngcontent-%COMP%]{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail[_ngcontent-%COMP%]{pointer-events:all}.ngxImageZoomFull[_ngcontent-%COMP%]{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer[_ngcontent-%COMP%]{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled[_ngcontent-%COMP%]{border:2px solid red;cursor:crosshair;pointer-events:none}"] });
NgxImageZoomComponent.validZoomModes = ['hover', 'toggle', 'click', 'hover-freeze'];
NgxImageZoomComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('zoomContainer', { static: true })
], NgxImageZoomComponent.prototype, "zoomContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageThumbnail', { static: true })
], NgxImageZoomComponent.prototype, "imageThumbnail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fullSizeImage', { static: true })
], NgxImageZoomComponent.prototype, "fullSizeImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxImageZoomComponent.prototype, "zoomScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgxImageZoomComponent.prototype, "zoomPosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('thumbImage')
], NgxImageZoomComponent.prototype, "setThumbImage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fullImage')
], NgxImageZoomComponent.prototype, "setFullImage", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('zoomMode')
], NgxImageZoomComponent.prototype, "setZoomMode", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('magnification')
], NgxImageZoomComponent.prototype, "setMagnification", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('minZoomRatio')
], NgxImageZoomComponent.prototype, "setMinZoomRatio", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('maxZoomRatio')
], NgxImageZoomComponent.prototype, "setMaxZoomRatio", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scrollStepSize')
], NgxImageZoomComponent.prototype, "setScrollStepSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('enableLens')
], NgxImageZoomComponent.prototype, "setEnableLens", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lensWidth')
], NgxImageZoomComponent.prototype, "setLensWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lensHeight')
], NgxImageZoomComponent.prototype, "setLensHeight", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circularLens')
], NgxImageZoomComponent.prototype, "setCircularLens", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('enableScrollZoom')
], NgxImageZoomComponent.prototype, "setEnableScrollZoom", null);

let NgxImageZoomModule = class NgxImageZoomModule {
};
NgxImageZoomModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxImageZoomModule });
NgxImageZoomModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxImageZoomModule_Factory(t) { return new (t || NgxImageZoomModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxImageZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'lib-ngx-image-zoom',
                template: "<div #zoomContainer class=\"ngxImageZoomContainer\"\n     [style.width.px]=\"this.thumbWidth\" [style.height.px]=\"this.thumbHeight\">\n\n  <img #imageThumbnail class=\"ngxImageZoomThumbnail\" [src]=\"thumbImage\" (load)=\"onThumbImageLoaded()\"/>\n\n  <div [ngClass]=\"{'ngxImageZoomFullContainer': true, 'ngxImageZoomLensEnabled': this.enableLens}\"\n       [style.display]=\"this.display\"\n       [style.top.px]=\"this.lensTop\"\n       [style.left.px]=\"this.lensLeft\"\n       [style.width.px]=\"this.lensWidth\"\n       [style.height.px]=\"this.lensHeight\"\n       [style.border-radius.px]=\"this.lensBorderRadius\"\n  >\n    <img #fullSizeImage class=\"ngxImageZoomFull\" [src]=\"fullImage\"\n         (load)=\"onFullImageLoaded()\"\n         [style.display]=\"this.display\"\n         [style.top.px]=\"this.fullImageTop\"\n         [style.left.px]=\"this.fullImageLeft\"\n         [style.width.px]=\"this.magnifiedWidth\"\n         [style.height.px]=\"this.magnifiedHeight\"\n    />\n  </div>\n</div>\n",
                styles: [".ngxImageZoomContainer{position:relative;margin:auto;overflow:hidden;pointer-events:none}.ngxImageZoomThumbnail{pointer-events:all}.ngxImageZoomFull{position:absolute;max-width:none;max-height:none;display:none;pointer-events:none}.ngxImageZoomFullContainer{position:absolute;overflow:hidden;pointer-events:none}.ngxImageZoomFullContainer.ngxImageZoomLensEnabled{border:2px solid red;cursor:crosshair;pointer-events:none}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { zoomScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], zoomPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], setThumbImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['thumbImage']
        }], setFullImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['fullImage']
        }], setZoomMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['zoomMode']
        }], setMagnification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['magnification']
        }], setMinZoomRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['minZoomRatio']
        }], setMaxZoomRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['maxZoomRatio']
        }], setScrollStepSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['scrollStepSize']
        }], setEnableLens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['enableLens']
        }], setLensWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['lensWidth']
        }], setLensHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['lensHeight']
        }], setCircularLens: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['circularLens']
        }], setEnableScrollZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['enableScrollZoom']
        }], zoomContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['zoomContainer', { static: true }]
        }], imageThumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['imageThumbnail', { static: true }]
        }], fullSizeImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fullSizeImage', { static: true }]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxImageZoomModule, { declarations: function () { return [NgxImageZoomComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [NgxImageZoomComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxImageZoomModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    NgxImageZoomComponent,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ],
                exports: [
                    NgxImageZoomComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-image-zoom
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-image-zoom.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-detail/category-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-detail/category-detail.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-ecom-categories [categoryId]=\"cat_Id\"></app-ecom-categories>\n\n<app-discounted-products [categoryId]=\"cat_Id\"></app-discounted-products>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-listing/category-listing.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-listing/category-listing.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container categories\">\n    <ng-container *ngIf=\"!isLoading; else skeleton\">\n        <div class=\"row\">\n            <ng-container *ngIf=\"categories && categories.length; else noData\">\n                <div class=\"col-md-3 col-sm-6\" *ngFor=\"let category of categories[subCatIndex];trackBy:trackByCategoryFn\">\n                    <img appImage [url]=\"category?.image\" [settings]=\"settings\" style=\"object-fit: cover; width: 100%; border-radius: 5px; height: 200px;\"\n                    [size]=\"'270x180'\" [src]=\"category?.image\"\n                        onError=\"src = './assets/images/placeholder_image.svg'\" alt=\"Image 1\" class=\"cursor\"\n                        (click)=\"getSubCat(category)\">\n                    <h5 class=\"text-center\">{{category?.name}}</h5>\n                </div>\n            </ng-container>\n\n            <ng-template #noData>\n                <div class=\"home-no-data\">\n                    <h4 [style.color]=\"style.baseColor\">{{'No' | translate}}\n                            {{'categories' | localization | translate}} {{'Found' | translate}}</h4>\n                </div>\n            </ng-template>\n        </div>\n    </ng-container>\n\n\n    <ng-template #skeleton>\n        <div class=\"skeleton\">\n            <div class=\"row\">\n                <div class=\"col-md-3\" *ngFor=\"let item of util.generateFakeList(8);trackBy:trackByFakeListFn\">\n                    <img>\n                    <h5></h5>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-wise-products/category-wise-products.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-wise-products/category-wise-products.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"three_btns\">\n    <div class=\"container l-m\">\n        <div class=\"row\">\n            <div class=\"col-sm-9\">\n                <h3>{{selected_category?.name}}</h3>\n                <span>{{categories.length}} Categories</span>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"btns-sec btns-sec-right\">\n                    <div class=\"dropdown\">\n                        <label class=\"dropdown\">\n                            <!-- Sort by: -->\n                            <div class=\"dd-button\">{{selectedSorting}}<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i>\n                            </div>\n                            <input type=\"checkbox\" class=\"dd-input\" id=\"test\">\n                            <ul class=\"dd-menu\">\n                                <li (click)=\"onSort(1)\">Price: Low to High</li>\n                                <li (click)=\"onSort(0)\">Price: High to Low</li>\n                                <li (click)=\"onSort(3)\">Popularity</li>\n                            </ul>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-----------------tabs section------>\n<section class=\"Categories-sec\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 Categories-box\">\n                <div style=\"cursor: pointer;\" (click)=\"selectCategory(category)\"\n                    [ngClass]=\"selected_category.id == category.id ? 'box-1 active-1' : 'box-2'\"\n                    *ngFor=\"let category of categories\">\n                    <img [src]=\"category?.image\">\n                    <a><span>{{category?.name}} </span><i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i></a>\n                </div>\n            </div>\n            <div class=\"col-sm-8 Categories-big\">\n                <img *ngIf=\"!isLoading\" [src]=\"selected_category?.image\" style=\"height: 424px;\">\n                <div *ngIf=\"isLoading\" style=\"width: 100%; height: 424px; background-color: rgb(230, 230, 230);\"></div>\n                <div class=\"container-fluid\">\n                    <ul class=\"nav nav-tabs\">\n                        <li *ngFor=\"let subCat of subCategoryAr; let i = index;\"\n                            [ngClass]=\"subCat.id == selected_subcat ? 'active' : ''\"\n                            (click)=\"selectSubCategory(subCat?.id, i)\" style=\"cursor: pointer;\"><a\n                                [ngClass]=\"subCat.id == selected_subcat ? 'active show' : ''\">{{subCat?.name}}</a></li>\n                    </ul>\n                    <div class=\"tab-content\">\n                        <div id=\"home\" class=\"tab-pane fade in active show\">\n                            <div class=\"row\" *ngIf=\"!isLoading; else skeleton\">\n                                <div class=\"col-sm-4\"\n                                    *ngFor=\"let product of productList | paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: pagination.count }; let i = index;\">\n                                    <app-product [product]=\"product\" [style]=\"style\" [settings]=\"settings\"\n                                        [darkTheme]=\"isDarkTheme\" [state]=\"productstate\" [loggedIn]=\"loggedIn\"\n                                        (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\">\n                                    </app-product>\n                                </div>\n                            </div>\n\n                            <ng-template #skeleton>\n                                <div class=\"row product-list skeleton\">\n                                  <div class=\"col col-md-3 Recommends-products\"\n                                    *ngFor=\"let data of util.generateFakeList(8);\">\n                                    <app-product-skeleton [settings]=\"settings\" [style]=\"style\"></app-product-skeleton>\n                                  </div>\n                                </div>\n                              </ng-template>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div *ngIf=\"productList.length === 0 && noData\" class=\"no-data\">\n                            <h1 [style.color]=\"style.baseColor\">No {{'products' | localization | translate}} Found</h1>\n                        </div>\n\n                        <div class=\"custom-pagination mt-5 mb-5\" *ngIf=\"pagination.count > pagination.perPage\">\n                            <pagination-controls responsive=\"true\" [style.color]=\"style.primaryColor\"\n                                previousLabel=\"Prev\" nextLabel=\"Next\" (pageChange)=\"pageChange($event)\">\n                            </pagination-controls>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/discounted-products/discounted-products.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/discounted-products/discounted-products.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"\n  *ngIf=\"(settings?.selected_template == 0 && settings?.app_type == 1) || ([2,8].includes(settings.app_type) && settings?.selected_template != 3)\">\n  <div class=\"reccom-main_section\">\n    <h2 [style.color]=\"style?.baseColor\" style=\"margin-top: 20px\">Offered {{'products' | localization | translate}}</h2>\n    <div class=\"row\">\n      <ng-container *ngIf=\"!isLoading; else skeleton\">\n        <div class=\"col-6 col-md-6 col-xl-4 col-lg-4 col-sm-6\"\n          *ngFor=\"let offer of specialOffers;trackBy:trackBySpecialDataFn\">\n          <app-product [product]=\"offer\" [darkTheme]=\"isDarkTheme\" [settings]=\"settings\" [style]=\"style\"\n            [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\"></app-product>\n        </div>\n      </ng-container>\n\n      <ng-template #skeleton>\n        <div class=\"skeleton col-6 col-md-6 col-xl-4 col-lg-4 col-sm-6\"\n          *ngFor=\"let offer of util.generateFakeList(8);trackBy:trackByUtilOfferDataFn\">\n          <app-product-skeleton [settings]=\"settings\" [style]=\"style\"></app-product-skeleton>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" style=\"margin-top: 30px;\" *ngIf=\"settings?.selected_template == 1 && settings?.app_type == 1\">\n\n  <div class=\"categories-item-products\">\n    <div class=\"row\">\n      <ng-container *ngIf=\"!isLoading; else skeleton\">\n        <div class=\"col-md-6\" *ngFor=\"let offer of specialOffers;trackBy:trackByOfferDataFn\">\n          <app-product [product]=\"offer\" [darkTheme]=\"isDarkTheme\" [settings]=\"settings\" [style]=\"style\"\n            [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\"></app-product>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <ng-template #skeleton>\n    <div class=\"skeleton col-md-6\" *ngFor=\"let offer of util.generateFakeList(8);trackBy:trackByFakeListDataFn\">\n      <app-product-skeleton [settings]=\"settings\" [style]=\"style\"></app-product-skeleton>\n    </div>\n  </ng-template>\n\n</div>\n\n<div class=\"container\" style=\"margin-top: 30px;\" *ngIf=\"settings?.selected_template == 3 && settings?.app_type == 1\">\n\n  <div class=\"categories-item-products\">\n    <div class=\"row\">\n      <ng-container *ngIf=\"!isLoading; else skeleton\">\n        <div class=\"col-md-6\" *ngFor=\"let offer of specialOffers;trackBy:trackBySpecialOffersDataFn\">\n          <app-product [product]=\"offer\" [darkTheme]=\"isDarkTheme\" [settings]=\"settings\" [style]=\"style\"\n            [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\"></app-product>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <ng-template #skeleton>\n    <div class=\"skeleton col-md-6\" *ngFor=\"let offer of util.generateFakeList(8);trackBy:trackByFakeListFn\">\n      <app-product-skeleton [settings]=\"settings\" [style]=\"style\"></app-product-skeleton>\n    </div>\n  </ng-template>\n\n</div>\n\n\n<div class=\"container\" style=\"margin-top: 30px;\"\n  *ngIf=\"settings?.selected_template == 2 && settings?.app_type == 1 && settings?.is_single_vendor == 1\">\n\n  <div class=\"categories-item-products\">\n    <div class=\"row\">\n      <ng-container *ngIf=\"!isLoading; else skeleton\">\n        <div class=\"col-md-3\" *ngFor=\"let offer of specialOffers;trackBy:trackBySpecialOffersDataFn\">\n          <app-product [product]=\"offer\" [darkTheme]=\"isDarkTheme\" [settings]=\"settings\" [style]=\"style\"\n            [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\"></app-product>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <ng-template #skeleton>\n    <div class=\"skeleton col-md-3\" *ngFor=\"let offer of util.generateFakeList(8);trackBy:trackByFakeListFn\">\n      <app-product-skeleton [settings]=\"settings\" [style]=\"style\"></app-product-skeleton>\n    </div>\n  </ng-template>\n\n</div>\n\n\n\n\n<div class=\"container\" style=\"margin-top: 30px;\" *ngIf=\"settings?.selected_template == 4 && settings?.app_type == 1\">\n\n  <div class=\"categories-item-products\">\n    <div class=\"row\">\n      <ng-container *ngIf=\"!isLoading; else skeleton\">\n        <div class=\"col-md-6\" *ngFor=\"let offer of specialOffers;trackBy:trackBySpecialOffersFn\">\n          <app-product [product]=\"offer\" [darkTheme]=\"isDarkTheme\" [settings]=\"settings\" [style]=\"style\"\n            [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\"></app-product>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n  <ng-template #skeleton>\n    <div class=\"skeleton col-md-6\" *ngFor=\"let offer of util.generateFakeList(8);trackBy:trackByUtilOfferFn\">\n      <app-product-skeleton [settings]=\"settings\" [style]=\"style\"></app-product-skeleton>\n    </div>\n  </ng-template>\n\n</div>\n\n\n\n<div class=\"container offers\" *ngIf=\"settings?.selected_template == 3 && settings?.app_type == 2\">\n  <div class=\"row\">\n\n    <ng-container *ngIf=\"!isLoading; else skeleton\">\n      <div class=\"col-md-4\" *ngFor=\"let offer of specialOffers.slice(0,3);trackBy:trackByOfferFn\">\n        <div class=\"offer-div cursor\" (click)=\"productDetail(offer)\">\n          <img appImage [url]=\"offer?.image_path\" [size]=\"'550x650'\" [src]=\"offer?.image_path\" [settings]=\"settings\"\n            onError=\"src = './assets/images/placeholder_image.svg'\" alt=\"Image 1\" class=\"cursor\"\n            (click)=\"categoryDetail(category)\">\n\n          <h4 data-toggle=\"tooltip\" [title]=\"offer?.name\">{{offer?.name}}</h4>\n          <div class=\"offer-discount\" *ngIf=\"offer?.discount\" style=\"min-height: 20px; line-height: 24px;\">\n            {{offer?.discount}}% <span>off</span></div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <ng-template #skeleton>\n    <div class=\"skeleton col-md-4\" *ngFor=\"let offer of util.generateFakeList(3);trackBy:trackByUtilDataFn\">\n      <img>\n    </div>\n  </ng-template>\n</div>\n\n\n<div *ngIf=\"settings?.isCustomFlow && isMobile\">\n  <ng-container *ngIf=\"offerCategories.length; else noCustomData\">\n    <section *ngFor=\"let category of offerCategories;trackBy:trackByCategoryFn\"\n      class=\"marketplace-categories marketplace-deal\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"marketplace-categories_heading\">\n              <h3 [style.color]=\"style.baseColor\">Top Deals in {{category.name}}</h3>\n            </div>\n          </div>\n          <div *ngFor=\"let product of (category.value);trackBy:trackByProductFn\" class=\"col-md-4\">\n            <div *ngIf=\"product.type != 8\" class=\"box demo-design\">\n              <div class=\"top\">\n                <img appImage [url]=\"product?.image_path\" [size]=\"'105x190'\" [src]=\"product?.image_path\"\n                  [settings]=\"settings\" onError=\"src = './assets/images/placeholder_image.svg';\">\n              </div>\n              <div class=\"btm\">\n                <div class=\"d-flex no-img\">\n                  <div class=\"text\">\n                    <strong data-toggle=\"tooltip\" [title]=\"product?.name\" style=\"color: rgb(54, 54, 54);\">\n                      {{product?.name}}\n                    </strong>\n\n                    <p data-toggle=\"tooltip\" [title]=\"product?.supplier_name\" style=\"color: rgb(54, 54, 54);\">\n                      {{product?.supplier_name}} </p>\n                    <h5>upto {{product?.discountPercentage}}% off</h5>\n                  </div>\n                </div>\n                <hr\n                  style=\"background-image: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(250, 237, 204, 0.53)), to(rgba(250, 237, 204, 0.53)), color-stop(0.5, rgb(54, 54, 54)));\">\n                <button class=\"text-uppercase\" type=\"button\" (click)=\"onViewDetail(product)\">{{'View Details' |\n                  translate}}</button>\n              </div>\n            </div>\n            <div *ngIf=\"product.type == 8\" class=\"box\">\n              <div class=\"top\">\n                <img appImage [url]=\"product?.image_path\" [size]=\"'350x150'\" [src]=\"product?.image_path\"\n                  [settings]=\"settings\" onError=\"src = './assets/images/placeholder_image.svg';\">\n              </div>\n              <div class=\"btm\" style=\"background-color: rgba(250, 237, 204, 0.22);\">\n                <div class=\"d-flex no-img\">\n                  <div class=\"text\">\n                    <strong data-toggle=\"tooltip\" [title]=\"product?.name\" style=\"color: rgb(54, 54, 54);\">\n                      {{product?.name}}\n                    </strong>\n\n                    <p data-toggle=\"tooltip\" [title]=\"product?.supplier_name\" style=\"color: rgb(54, 54, 54);\">\n                      {{product?.supplier_name}} </p>\n                    <!-- <h5>Oud Metha, Dubai</h5> -->\n                  </div>\n                </div>\n                <hr\n                  style=\"background-image: -webkit-gradient(linear, 0 0, 100% 0, from(rgba(250, 237, 204, 0.53)), to(rgba(250, 237, 204, 0.53)), color-stop(0.5, rgb(54, 54, 54)));\">\n                <button class=\"text-uppercase\" type=\"button\" style=\"color: rgb(155, 139, 95);\"\n                  (click)=\"onViewDetail(product)\">{{'View Details' | translate}}</button>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </ng-container>\n\n  <ng-template #noCustomData>\n    <div class=\"mixed-no-data\">\n      <h4 [style.color]=\"style.baseColor\">No Data Found</h4>\n    </div>\n  </ng-template>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/product-detail/product-detail.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/product-detail/product-detail.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"settings?.app_type==2\">\n  <ng-container [ngSwitch]=\"settings?.selected_template\">\n    <ng-template [ngSwitchCase]=\"4\">\n      <div class=\"E-commerce-Product-Page\">\n        <div class=\"container\">\n          <div class=\"E-commerce-Product-outter\">\n            <div class=\"row\">\n              <div class=\"col-md-5\">\n                <div class=\"E-commerce-Product-images\">\n                  <div class=\"E-commerce-Product-images-left\" *ngIf=\"detail?.image_path?.length\">\n                    <ul>\n                      <li *ngFor=\"let img of detail?.image_path;trackBy:trackByImage_pathFn;\">\n                        <a href=\"javascript:void(0)\" (click)=\"onImageClick(img)\">\n                          <img [class.active]=\"img == image\" appImage [url]=\"img\" [size]=\"'150x150'\" [src]=\"img\"\n                            onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class=\"E-commerce-Product-images-right\">\n                    <a href=\"javascript:void(0)\">\n                      <img #productImage appImage style=\"object-fit: cover; width: 100%;\" [url]=\"image\"\n                        [size]=\"'92x163'\" [src]=\"image\" onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n                    </a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n                <div class=\"E-commerce-Product-description\">\n                  <h1>{{detail?.name}}</h1>\n                  <p [style.color]=\"style.primaryColor\" opacity=\"0.5\" @fade>{{'by' | translate}}\n                    {{detail?.supplier_name}},\n                    {{detail?.supplier_address}}\n                  </p>\n                  <p *ngIf=\"detail?.country_of_origin\" [style.color]=\"style.primaryColor\" opacity=\"0.5\" @fade>\n                    {{detail?.country_of_origin}}</p>\n                  <h6 *ngIf=\"detail?.Size_chart_url\" (click)=\"showImage(detail?.Size_chart_url)\"\n                    [style.color]=\"style.baseColor\" class=\"view_chart\" @fade>{{'View Chart'}}\n                  </h6>\n                  <!-- <div class=\"E-commerce-Product-model\">\n                    <span><strong>Model: </strong>***-******</span>\n                    <span><strong>SKU: </strong>********</span>\n                  </div> -->\n                  <div class=\"star-rating\" *ngIf=\"settings?.is_product_rating == 1\">\n                    <!-- <rating [ngModel]=\"detail?.avg_rating\" [readonly]=\"true\" [max]=\"5\" [float]=\"true\" @fade></rating> -->\n                    <p-rating [ngModel]=\"detail?.avg_rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n                  </div>\n                  <div *ngIf=\"detail?.discount\" class=\"E-commerce-Product-save-money\">\n                    <span>Save {{detail?.discount}}%</span>\n                  </div>\n                  <div class=\"E-commerce-Product-price-detail\">\n                    <span *ngIf=\"detail?.discount\">{{currency}}{{detail?.fixed_price ? detail?.fixed_price : 0}}</span>\n                    <p>{{currency}} {{detail?.display_price}}</p>\n                    <!-- <span>Inclusive of VAT</span> -->\n                  </div>\n\n                  <div *ngIf=\"detail?.variants.length\">\n                    <!-- for first varient -->\n                    <div class=\"product_size\">\n                      <h4 [style.color]=\"style.primaryColor\">{{categoryName}}</h4>\n                      <div class=\"color_outter cursor\"\n                        [ngStyle]=\"data.isClicked ? {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': style.primaryColor } : ''\"\n                        *ngFor=\"let data of detail?.variants;let i = index;trackBy:trackByVariantDetailsFn;\"\n                        (click)=\"replaceAllValue(i);mainCategoryIndex = i\">\n                        <a *ngIf=\"firstVariantType == 0\">{{data?.name}}</a>\n                        <a *ngIf=\"firstVariantType == 1\" class=\"color-box\"\n                          [ngStyle]=\"{'backgroundColor': data.name}\"></a>\n                      </div>\n                    </div>\n\n                    <!-- for all other variants -->\n                    <div class=\"product_size\"\n                      *ngFor=\"let data of detail?.variants[mainCategoryIndex]?.subCat;let parent = index;let last = last;trackBy:trackByVDDetailsn\">\n                      <h4 [style.color]=\"style.primaryColor\">{{data.name}}\n                      </h4>\n\n                      <div\n                        [ngStyle]=\"value.isClicked ? {'borderColor': style.primaryColor, 'color': '#ffffff', 'backgroundColor': style.primaryColor} : {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' }\"\n                        class=\"size_outter\" *ngFor=\"let value of data.values;let i = index;trackBy:trackByDataValuesFn;\"\n                        [ngClass]=\"parent == 0 ? (!detail?.variants[mainCategoryIndex]?.isClicked ? 'disabled' : 'cursor') :\n                      (!detail?.variants[mainCategoryIndex]?.subCat[parent - 1 ].isClicked ? 'disabled' : 'cursor')\">\n\n                        <a [ngStyle]=\"{'background': value?.variant_value}\" class=\"color-variant\"\n                          [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                          (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent, i,last, value)\"\n                          *ngIf=\"value?.variant_type == 1\"></a>\n\n                        <a [style.color]=\"value.isClicked ? '#ffffff' : style.primaryColor\"\n                          [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                          *ngIf=\"value?.variant_type == 0\"\n                          (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent,i ,last,value)\">{{value?.variant_value}}</a>\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"E-commerce-Product-add-cart\" *ngIf=\"!detail?.isOutOfStock && settings.app_type == 2\">\n                    <a class=\"buy_now\" href=\"javascript:void(0)\" [ngStyle]=\"{'background-color': style.primaryColor}\"\n                      (click)=\"onBuyNow()\" @fade>{{'Buy Now' | translate}}</a>\n                    <a class=\"add_to_cart\" href=\"javascript:void(0)\" (click)=\"checkAdd()\" @fade>{{'ADD TO CART' |\n                      translate}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-2\">\n                <div class=\"E-commerce-Product-policy\">\n                  <ul>\n                    <!-- <li><span><img src=\"./assets/images/ic_01.png\"></span>\n                      <p>By ** July</p>\n                    </li> -->\n                    <li><span><img src=\"./assets/images/ic_02.png\"></span>\n                      <p>100% Genuine Product</p>\n                    </li>\n                    <li><span><img src=\"./assets/images/ic_03.png\"></span>\n                      <p>Secure Payment</p>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"E-commerce-Product-review-description\">\n            <div class=\"E-commerce-Product-review-description-tabs\">\n              <ul>\n                <li class=\"active\"><a href=\"javascript:void(0)\">Description</a></li>\n                <!-- <li><a href=\"javascript:void(0)\">Reviews</a></li> -->\n              </ul>\n            </div>\n            <div class=\"E-commerce-description-product\">\n              <h2 [style.color]=\"style.baseColor\" @fade>{{'DESCRIPTION' | translate}}</h2>\n              <ng-container></ng-container>\n              <!-- <div class=\"E-commerce-description-product-outter\">\n                <div class=\"E-commerce-description-product-details\">\n                  <div class=\"\">\n                    <p [innerHtml]=\"detail?.product_desc | safe: 'html'\" [style.color]=\"style.baseColor\" opacity=\"0.69\" @fade>\n                  </div>\n                </div>\n                <div class=\"E-commerce-description-product-image\">\n                  <img src=\"images/9.png\">\n                </div>\n              </div> -->\n\n              <p [innerHtml]=\"detail?.product_desc | safe: 'html'\" [style.color]=\"style.baseColor\" opacity=\"0.69\" @fade>\n            </div>\n          </div>\n\n          <div class=\"row mb-5\" style=\"margin-top: 100px;\" *ngIf=\"similarProducts.length && settings?.app_type != 1\">\n\n            <div *ngIf=\"settings?.is_compare_products=='1'\" class=\"col-md-12 mb-4\">\n              <div class=\"vendors_heading my-4 col-md-4\">\n                <a (click)=\"onComparePrice()\">{{'Compare prices with diffrent vendors' | translate}} </a>\n              </div>\n              <div class=\"select_product select_vendor p-lg-4 p-3 col-md-6\">\n                <div class=\"row align-items-center\">\n                  <div class=\"col-4\">\n                    <div class=\"select_img  d-flex align-items-center justify-content-center\">\n                      <img class=\"img-fluid\" [src]=\"randomProduct?.image_path\" [height]=\"'500'\" width=\"100%\"\n                        onError=\"src = './assets/images/image_placeholder.jpeg';\" />\n                    </div>\n                  </div>\n                  <div class=\"col-8\">\n                    <div class=\"select_prduct_text\">\n                      <h4 class=\"m-0\">{{randomProduct?.name}}</h4>\n                      <a class=\"slect_company d-block my-sm-2 my-1\">{{randomProduct?.supplier_name}}</a>\n                      <label class=\"product_price m-0\">\n                        <span *ngIf=\"detail?.discount\">{{randomProduct?.display_price}}</span>\n                        {{randomProduct?.fixed_price ? randomProduct?.fixed_price : 0}}\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-12\">\n              <h4 class=\"mt-2 mb-5\">Similar {{'products' | localization | translate}}</h4>\n              <div class=\"row\">\n                <div class=\"col-md-3\" *ngFor=\"let product of similarProducts.slice(0, 8);trackBy:trackBySPFn;\">\n                  <div\n                    [ngClass]=\"settings?.app_type == 2 && settings.selected_template == 0 ? 'Recommends-products mb-3' : ''\">\n                    <app-ecommerce [product]=\"product\" [settings]=\"settings\" [style]=\"style\" [loggedIn]=\"loggedIn\"\n                      (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\" [canCompare]=\"canCompareProd\"\n                      (onSelectProduct)=\"selectForCompare($event)\"></app-ecommerce>\n                  </div>\n                </div>\n\n                <!-- *ngIf=\"isShowCompareBtn\" -->\n                <div *ngIf=\"isShowCompareBtn\" class=\"col-12 text-center mt-5 pt-lg-3 mb-4\">\n                  <div class=\"des_btn_group d-flex align-items-center justify-content-between\">\n                    <a [ngStyle]=\"{'background-color': style.primaryColor}\"\n                      class=\"default_btn text-uppercase pointer m-auto\" (click)=\"onCompareProducts()\">{{'Compare' |\n                      translate}}</a>\n                  </div>\n                </div>\n\n                <div id=\"compare_prod\">\n                  <app-compare-products *ngIf=\"isCompare\" [products]=\"compareProductList\" [style]=\"style\"\n                    (onAddCart)=\"compareAddCart($event)\">\n                  </app-compare-products>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"E-commerce-Product-viewed-outter\">\n            <div class=\"row E-commerce-Product-viewed-title\">\n              <div class=\"col-md-12\">\n                <h1>People also viewed</h1>\n              </div>\n            </div>\n            <div class=\"E-commerce-Product-viewed-products\"\n              *ngIf=\"detail?.similarProduct && detail?.similarProduct.length\">\n              <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                <div ngxSlickItem class=\"E-commerce-Product-viewed-bb\"\n                  *ngFor=\"let prod of detail?.similarProduct;trackBy:trackBySimilarProductFn;\">\n                  <app-product [product]=\"prod\" [style]=\"style\" [settings]=\"settings\" [loggedIn]=\"loggedIn\"\n                    (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\">\n                  </app-product>\n                </div>\n              </ngx-slick-carousel>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template [ngSwitchCase]=\"5\">\n      <section>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-xs-6\">\n              <div class=\"container mt-5\">\n                <div class=\"col-md-12\">\n                  <div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <ul class=\"carousel-indicators\">\n                      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n                      <li data-target=\"#demo\"\n                        *ngFor=\"let img of detail?.image_path;let i=index;trackBy:trackByUtilDataFn;\"\n                        data-slide-to=\"i+1\">\n                      </li>\n                    </ul>\n                    <div class=\"carousel-inner\">\n                      <div class=\"carousel-item active\">\n                        <a href=\"javascript:void(0)\">\n                          <img #productImage class=\"drift-trigger\" appImage style=\"object-fit: cover; width: 100%;\"\n                            [url]=\"image\" [size]=\"'600x500'\" [src]=\"image\"\n                            onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n                        </a>\n                      </div>\n                      <div class=\"carousel-item\" *ngFor=\"let img of detail?.image_path;trackBy:trackByUtilImageDataFn;\">\n                        <a href=\"javascript:void(0)\" (click)=\"onImageClick(img)\">\n                          <img [class.active]=\"img == image\" appImage [url]=\"img\" [size]=\"'150x150'\" [src]=\"img\"\n                            onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n                        </a>\n                      </div>\n                    </div>\n                    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n                      <span class=\"carousel-control-prev-icon\"></span>\n                    </a>\n                    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n                      <span class=\"carousel-control-next-icon\"></span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-xs-6 flex drift-detail\">\n              <div class=\"contnt-sec\">\n                <a href=\"#\" class=\"headings\" style=\"font-size: 40px\">{{detail?.name}}</a>\n                <p [style.color]=\"style.primaryColor\" opacity=\"0.5\" @fade>\n                  {{detail?.supplier_name}},\n                  {{detail?.supplier_address}}\n                </p>\n                <p *ngIf=\"detail?.country_of_origin\" [style.color]=\"style.primaryColor\" opacity=\"0.5\" @fade>\n                  {{detail?.country_of_origin}}</p>\n                <h6 *ngIf=\"detail?.Size_chart_url\" (click)=\"showImage(detail?.Size_chart_url)\"\n                  [style.color]=\"style.baseColor\" class=\"view_chart\" @fade>{{'View Chart'}}\n                </h6>\n\n                <div class=\"star-rating\" *ngIf=\"settings?.is_product_rating == 1\">\n                  <p-rating [ngModel]=\"detail?.avg_rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n                </div>\n                <div *ngIf=\"detail?.discount\" class=\"E-commerce-Product-save-money\">\n                  <span>Save {{detail?.discount}}%</span>\n                </div>\n\n                <div class=\"E-commerce-Product-price-detail\">\n                  <small *ngIf=\"detail?.discount\">{{currency}}{{detail?.fixed_price ? detail?.fixed_price : 0}}</small>\n                  <strong>{{currency}} {{detail?.display_price}}</strong>\n                </div>\n\n                <div *ngIf=\"detail?.variants.length\">\n                  <div class=\"product_size\" *ngIf=\"categoryName!='Size' && categoryName!='size'\">\n                    <h4 [style.color]=\"style.primaryColor\">{{categoryName}}</h4>\n                    <div class=\"color_outter cursor\"\n                      [ngStyle]=\"data.isClicked ? {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' } : ''\"\n                      *ngFor=\"let data of detail?.variants;let i = index;trackBy:trackByVariantsDFn;\"\n                      (click)=\"replaceAllValue(i);mainCategoryIndex = i\">\n                      <a *ngIf=\"firstVariantType == 0\">{{data?.name}}</a>\n                      <a *ngIf=\"firstVariantType == 1\" class=\"color-box\" [ngStyle]=\"{'backgroundColor': data.name}\"></a>\n\n                      <!-- {{data?.name}} -->\n                    </div>\n                  </div>\n\n                  <div *ngIf=\"categoryName=='Size' || categoryName=='size'\">\n                    <button class=\"Button10 Button10--secondary AsyncButton10 primaryButton fitanalytics__button-text\"\n                      tabindex=\"0\" role=\"button\" (click)=\"showSize=!showSize\" aria-label=\"Find my size\">Find my\n                      size</button>\n\n                    <div class=\"dropdown btn-2\" *ngIf=\"showSize\">\n                      <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n                        aria-expanded=\"false\">{{'Select A Size' | translate}} : {{selectedSize}}\n                        <span class=\"caret\"></span></button>\n                      <ul class=\"dropdown-menu menu-list\">\n                        <li *ngFor=\"let data of detail?.variants;let i = index;trackBy:trackByDetailDataFn;\">\n                          <a class=\"cursor\" (click)=\"replaceAllValue(i);mainCategoryIndex = i\">{{data?.name}}</a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n\n                  <div class=\"product_size\"\n                    *ngFor=\"let data of detail?.variants[mainCategoryIndex]?.subCat;let parent = index;let last = last;trackBy:trackByVariantsDetailsDataFn;\">\n                    <h4 [style.color]=\"style.primaryColor\">{{data.name}}\n                    </h4>\n                    <div\n                      [ngStyle]=\"value.isClicked ? {'borderColor': style.primaryColor, 'color': '#ffffff', 'backgroundColor': style.primaryColor} : {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' }\"\n                      class=\"size_outter\" *ngFor=\"let value of data.values;let i = index;trackBy:trackByDataValueFn;\"\n                      [ngClass]=\"parent == 0 ? (!detail?.variants[mainCategoryIndex]?.isClicked ? 'disabled' : 'cursor') :\n                    (!detail?.variants[mainCategoryIndex]?.subCat[parent - 1 ].isClicked ? 'disabled' : 'cursor')\">\n                      <a [ngStyle]=\"{'background': value?.variant_value}\" class=\"color-variant\"\n                        [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                        (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent, i,last, value)\"\n                        *ngIf=\"value?.variant_type == 1\"></a>\n\n                      <a [style.color]=\"value.isClicked ? '#ffffff' : style.primaryColor\"\n                        [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                        *ngIf=\"value?.variant_type == 0\"\n                        (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent,i ,last,value)\">{{value?.variant_value}}</a>\n                    </div>\n                  </div>\n                </div>\n\n                <div *ngIf=\"!detail?.isOutOfStock\" class=\"mt-3\">\n                  <app-quantity-buttons *ngIf=\"settings.app_type != 8\" [settings]=\"settings\" [style]=\"style\"\n                    [deafultView]=\"true\" [selectedQuantity]=\"detail?.selectedQuantity\" (onAdd)=\"increaseValue()\"\n                    (onRemove)=\"decreaseValue()\">\n                  </app-quantity-buttons>\n\n                  <ng-container *ngIf=\"settings.app_type == 8\">\n                    <h5 @fade [style.color]=\"style.baseColor\">{{'Select Time Of Need' | translate}}</h5>\n                    <app-quantity-buttons [style]=\"style\" [settings]=\"settings\" [priceType]=\"detail?.price_type\"\n                      [isProduct]=\"detail?.is_product\" [selectedQuantity]=\"detail.selectedQuantity\"\n                      (onRemove)=\"onServiceAddOrRemove(detail, -1)\" (onAdd)=\"onServiceAddOrRemove(detail, 1)\">\n                    </app-quantity-buttons>\n                  </ng-container>\n                </div>\n\n                <button *ngIf=\"settings?.is_product_wishlist == 1\" (click)=\"wishlist(!detail?.is_favourite)\"\n                  class=\"Button10 Button10--secondary AsyncButton10 primaryButton fitanalytics__button-text btn-pri\"\n                  tabindex=\"0\" role=\"button\" aria-label=\"Find my size\">\n                  <a>\n                    <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                      xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"2\"\n                        [attr.fill]=\"detail?.is_favourite ? style.primaryColor : 'none'\" fill-rule=\"evenodd\">\n                        <g id=\"Group-4\" transform=\"translate(2.000000, 3.000000)\"\n                          [attr.stroke]=\"detail?.is_favourite ? style.primaryColor : style.baseColor\">\n                          <g id=\"ic_heart_fill\">\n                            <path\n                              d=\"M10,18 L1.71572875,9.84452689 C-0.571909584,7.59245518 -0.571909584,3.9411255 1.71572875,1.68905378 C4.00336709,-0.563017928 7.71236166,-0.563017928 10,1.68905378 C12.2876383,-0.563017928 15.9966329,-0.563017928 18.2842712,1.68905378 C20.5719096,3.9411255 20.5719096,7.59245518 18.2842712,9.84452689 L10,18 Z\"\n                              id=\"Combined-Shape-Copy\"></path>\n                          </g>\n                        </g>\n                      </g>\n                    </svg>\n                  </a>\n                  Add to wish list</button>\n              </div>\n              <div class=\"add-to-cart_btn mt-3\" *ngIf=\"!detail?.isOutOfStock && settings.app_type == 2\">\n                <!-- <button [style.color]=\"style.primaryColor\" class=\"btn btn-large add-tocart\" [disabled]=\"disableAdd\"\n                  (click)=\"checkAdd()\" @fade>{{'ADD TO CART' | translate}}</button> -->\n                <button class=\"btn btn-large buy-now\" [ngStyle]=\"{'background-color': style.primaryColor,'width':'83%'}\"\n                  (click)=\"onBuyNow()\" @fade>{{'Buy Now' | translate}}</button>\n              </div>\n\n              <div class=\"add-to-cart_btn\" *ngIf=\"settings.app_type == 1\">\n                <button [style.color]=\"style.primaryColor\" [ngStyle]=\"{'width':'83%'}\"\n                  class=\"btn btn-large add-tocart w-100\" (click)=\"goToCart()\">\n                  {{'Go To Cart' | translate}}</button>\n              </div>\n\n              <div class=\"add-to-cart_btn\" *ngIf=\"settings.app_type == 8\">\n                <button [ngStyle]=\"{'background-color': style.primaryColor, 'color' : '#fff','width':'83%'}\"\n                  class=\"btn btn-large add-tocart w-100\" (click)=\"onBookNow()\">\n                  {{'Select Date & Time' | translate}}</button>\n              </div>\n\n              <div class=\"add-to-cart_btn\" *ngIf=\"detail?.isOutOfStock\">\n                <button [style.color]=\"style.primaryColor\" [ngStyle]=\"{'width':'83%'}\"\n                  class=\"btn btn-large add-tocart w-100\" [disabled]=\"disableAdd\">{{'Out Of Stock' | translate}}</button>\n              </div>\n              <div class=\"panel-group m-top\" id=\"accordion\">\n                <!-- <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\"><i class=\"fa fa-angle-down\"\n                          aria-hidden=\"true\"></i>ADITER'S NOTES</a>\n                    </h4>\n                  </div>\n                  <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n                    <div class=\"panel-body\">\n                      <div class=\"description_txt\">\n                        <h2 [style.color]=\"style.baseColor\" @fade>{{'DESCRIPTION' | translate}}</h2>\n                        <ng-container></ng-container>\n                        <p [innerHtml]=\"detail?.product_desc | safe: 'html'\" [style.color]=\"style.baseColor\"\n                          opacity=\"0.69\" @fade>\n                        </p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                 -->\n                <!-- <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\"><i class=\"fa fa-angle-down\"\n                          aria-hidden=\"true\"></i>SIZE & FIT</a>\n                    </h4>\n                  </div>\n                  <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                      <ul>\n                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</li>\n                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,,</li>\n                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</li>\n                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,,</li>\n                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</li>\n                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit,,</li>\n                      </ul>\n                    </div>\n                  </div>\n                </div> -->\n\n                <div class=\"panel panel-default\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\"><i class=\"fa fa-angle-down\"\n                          aria-hidden=\"true\"></i>{{'DESCRIPTION' | translate}}</a>\n                    </h4>\n                  </div>\n                  <div id=\"collapse3\" class=\"panel-collapse collapse show\">\n                    <div class=\"panel-body\">\n                      <p [innerHtml]=\"detail?.product_desc | safe: 'html'\" [style.color]=\"style.baseColor\"\n                        opacity=\"0.69\" @fade>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <!-- <div class=\"panel panel-default\" *ngIf=\"detail?.variants.length\">\n                  <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\"><i class=\"fa fa-angle-down\"\n                          aria-hidden=\"true\"></i>DELIVERY & RETURNS</a>\n                    </h4>\n                  </div>\n                  <div id=\"collapse4\" class=\"panel-collapse collapse show\">\n\n                    <div class=\"product_size\">\n                      <h4 [style.color]=\"style.primaryColor\">{{categoryName}}</h4>\n                      <div class=\"color_outter cursor\"\n                        [ngStyle]=\"data.isClicked ? {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' } : ''\"\n                        *ngFor=\"let data of detail?.variants;let i = index;trackBy:trackByVariantDetailsFn;\"\n                        (click)=\"replaceAllValue(i);mainCategoryIndex = i\">\n                        <a *ngIf=\"firstVariantType == 0\">{{data?.name}}</a>\n                        <a *ngIf=\"firstVariantType == 1\" class=\"color-box\"\n                          [ngStyle]=\"{'backgroundColor': data.name}\"></a>\n                      </div>\n                    </div>\n\n                    <div class=\"product_size\"\n                      *ngFor=\"let data of detail?.variants[mainCategoryIndex]?.subCat;let parent = index;let last = last;trackBy:trackByVDDetailsn\">\n                      <h4 [style.color]=\"style.primaryColor\">{{data.name}}\n                      </h4>\n\n                      <div\n                        [ngStyle]=\"value.isClicked ? {'borderColor': style.primaryColor, 'color': '#ffffff', 'backgroundColor': style.primaryColor} : {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' }\"\n                        class=\"size_outter\" *ngFor=\"let value of data.values;let i = index;trackBy:trackByDataValuesFn;\"\n                        [ngClass]=\"parent == 0 ? (!detail?.variants[mainCategoryIndex]?.isClicked ? 'disabled' : 'cursor') :\n                        (!detail?.variants[mainCategoryIndex]?.subCat[parent - 1 ].isClicked ? 'disabled' : 'cursor')\">\n\n                        <a [ngStyle]=\"{'background': value?.variant_value}\" class=\"color-variant\"\n                          [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                          (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent, i,last, value)\"\n                          *ngIf=\"value?.variant_type == 1\"></a>\n\n                        <a [style.color]=\"value.isClicked ? '#ffffff' : style.primaryColor\"\n                          [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                          *ngIf=\"value?.variant_type == 0\"\n                          (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent,i ,last,value)\">{{value?.variant_value}}</a>\n\n                      </div>\n                    </div>\n\n                  </div>\n                </div> -->\n                <small class=\"m-top1\">Product Code {{detail?.id}}</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n    </ng-template>\n\n\n    <ng-template ngSwitchDefault>\n      <ng-container *ngIf=\"!isLoading; then data else skeleton\"></ng-container>\n      <ng-template #data>\n        <div class=\"sub_bar\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <!-- <h3 [style.color]=\"style.primaryColor\">{{detail?.category_flow}}><strong\n                      [style.color]=\"style.primaryColor\">{{detail?.name}}</strong></h3> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"product_section\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\" images-section-left\" [ngStyle]=\"{'borderColor': style.primaryColor}\">\n                  <img #productImage class=\"drift-trigger\" appImage [url]=\"image\" [size]=\"'600x500'\" [src]=\"image\"\n                    [height]=\"'500'\" width=\"100%\" onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n                  <div class=\"images-slides\" [ngStyle]=\"{'borderColor': style.primaryColor}\"\n                    *ngIf=\"detail?.image_path?.length\"\n                    [class.separate_product]=\"settings?.separate_images_product_detail == 1\">\n\n                    <img *ngFor=\"let img of detail?.image_path;trackBy:trackByImgPathDataFn;\"\n                      [class.active]=\"img == image\" [url]=\"img\" [size]=\"'150x150'\" [src]=\"img\"\n                      (click)=\"onImageClick(img)\" onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 nike-txt-part drift-detail mt-lg-0 mt-5 pt-lg-0 pt-4\">\n                <div class=\"heart-img\" *ngIf=\"settings?.is_product_wishlist == 1\">\n                  <a (click)=\"wishlist(!detail?.is_favourite)\">\n                    <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                      xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"2\"\n                        [attr.fill]=\"detail?.is_favourite ? style.primaryColor : 'none'\" fill-rule=\"evenodd\">\n                        <g id=\"Group-4\" transform=\"translate(2.000000, 3.000000)\"\n                          [attr.stroke]=\"detail?.is_favourite ? style.primaryColor : style.baseColor\">\n                          <g id=\"ic_heart_fill\">\n                            <path\n                              d=\"M10,18 L1.71572875,9.84452689 C-0.571909584,7.59245518 -0.571909584,3.9411255 1.71572875,1.68905378 C4.00336709,-0.563017928 7.71236166,-0.563017928 10,1.68905378 C12.2876383,-0.563017928 15.9966329,-0.563017928 18.2842712,1.68905378 C20.5719096,3.9411255 20.5719096,7.59245518 18.2842712,9.84452689 L10,18 Z\"\n                              id=\"Combined-Shape-Copy\"></path>\n                          </g>\n                        </g>\n                      </g>\n                    </svg>\n                  </a>\n                </div>\n                <p class=\"title_shoes\" [style.color]=\"style.baseColor\" opacity=\"0.900000036\" @fade>{{detail?.name}}</p>\n                <p [style.color]=\"style.primaryColor\" class=\"mb-1\" opacity=\"0.5\" @fade>{{'by' | translate}}\n                  {{detail?.supplier_name}}</p>\n                <p *ngIf=\"detail?.country_of_origin && settings?.enable_country_of_origin_in_product=='1'\"\n                  [style.color]=\"style.primaryColor\" opacity=\"0.5\" @fade>\n                  <span>{{'Country' | translate}}</span> &nbsp;:&nbsp; {{detail?.country_of_origin}}\n                </p>\n\n                <h6 *ngIf=\"detail?.brand_name\" [style.color]=\"style.baseColor\" @fade>{{detail?.brand_name}}</h6>\n\n                <div class=\"star-rating\" *ngIf=\"settings?.is_product_rating == 1\">\n                  <!-- <rating *ngIf=\"!(settings?.app_type == 2 && settings?.selected_template == 3)\"\n                    [ngModel]=\"detail?.avg_rating\" [readonly]=\"true\" [max]=\"5\" [float]=\"true\" @fade></rating> -->\n\n                  <p-rating *ngIf=\"!(settings?.app_type == 2 && settings?.selected_template == 3)\"\n                    [ngModel]=\"detail?.avg_rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n\n                  <span *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 3\"\n                    [style.color]=\"style.baseColor\" class=\"rating\">{{detail?.avg_rating ? detail?.avg_rating :\n                    0}}/5</span>\n                </div>\n                <h2 @fade><strong [style.color]=\"style.baseColor\">{{currency}}\n                    {{detail?.fixed_price ? detail?.fixed_price : 0}} </strong><span *ngIf=\"detail?.discount\"\n                    class=\"detail-discount\" [style.color]=\"style.baseColor\">{{currency}}\n                    {{detail?.display_price}}</span>\n                </h2>\n\n                <h6 *ngIf=\"detail?.size_chart_url && settings?.enable_size_chart_in_product=='1'\"\n                  style=\"opacity: 0.7; font-size: 18px;\" (click)=\"showImage(detail?.size_chart_url)\"\n                  [style.color]=\"style.baseColor\" class=\"view_chart\" @fade>\n                  {{'View Chart'}}\n                </h6>\n\n                <div *ngIf=\"detail?.variants.length\">\n                  <!-- for first varient -->\n                  <div class=\"product_size\">\n                    <h4 [style.color]=\"style.primaryColor\">{{categoryName}}</h4>\n                    <div class=\"color_outter cursor\"\n                      [ngStyle]=\"data.isClicked ? {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' } : ''\"\n                      *ngFor=\"let data of detail?.variants;let i = index;trackBy:trackByVDFn;\"\n                      (click)=\"replaceAllValue(i);mainCategoryIndex = i\">\n                      <a *ngIf=\"firstVariantType == 0\">{{data?.name}}</a>\n                      <a *ngIf=\"firstVariantType == 1\" class=\"color-box\" [ngStyle]=\"{'backgroundColor': data.name}\"></a>\n                    </div>\n                  </div>\n\n                  <!-- for all other variants -->\n                  <div class=\"product_size\"\n                    *ngFor=\"let data of detail?.variants[mainCategoryIndex]?.subCat;let parent = index;let last = last;trackBy:trackByVariantsDetailsFn;\">\n                    <h4 [style.color]=\"style.primaryColor\">{{data.name}}\n                    </h4>\n\n                    <div\n                      [ngStyle]=\"value.isClicked ? {'borderColor': style.primaryColor, 'color': '#ffffff', 'backgroundColor': style.primaryColor} : {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' }\"\n                      class=\"size_outter\" *ngFor=\"let value of data.values;let i = index;trackBy:trackByValuesDataFn;\"\n                      [ngClass]=\"parent == 0 ? (!detail?.variants[mainCategoryIndex]?.isClicked ? 'disabled' : 'cursor') :\n                    (!detail?.variants[mainCategoryIndex]?.subCat[parent - 1 ].isClicked ? 'disabled' : 'cursor')\">\n\n                      <a [ngStyle]=\"{'background': value?.variant_value}\" class=\"color-variant\"\n                        [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                        (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent, i,last, value)\"\n                        *ngIf=\"value?.variant_type == 1\"></a>\n\n                      <a [style.color]=\"value.isClicked ? '#ffffff' : style.primaryColor\"\n                        [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                        *ngIf=\"value?.variant_type == 0\"\n                        (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent,i ,last,value)\">{{value?.variant_value}}</a>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div *ngIf=\"!detail?.isOutOfStock\" class=\"mt-3\">\n                  <!-- <p class=\"quantity-text\" [style.color]=\"style.baseColor\" @fade>Quantity</p> -->\n                  <app-quantity-buttons *ngIf=\"settings.app_type != 8\" [settings]=\"settings\" [style]=\"style\"\n                    [deafultView]=\"true\" [selectedQuantity]=\"detail?.selectedQuantity\" (onAdd)=\"increaseValue()\"\n                    (onRemove)=\"decreaseValue()\">\n                  </app-quantity-buttons>\n\n                  <ng-container *ngIf=\"settings.app_type == 8\">\n                    <h5 @fade [style.color]=\"style.baseColor\">{{'Select Time Of Need' | translate}}</h5>\n                    <app-quantity-buttons [style]=\"style\" [settings]=\"settings\" [priceType]=\"detail?.price_type\"\n                      [isProduct]=\"detail?.is_product\" [selectedQuantity]=\"detail.selectedQuantity\"\n                      (onRemove)=\"onServiceAddOrRemove(detail, -1)\" (onAdd)=\"onServiceAddOrRemove(detail, 1)\">\n                    </app-quantity-buttons>\n                  </ng-container>\n                </div>\n\n                <p *ngIf=\"detail.adds_on && detail.adds_on.length\"\n                  [ngStyle]=\"{color: style.primaryColor, 'font-size': '14px'}\"> {{'Customizable' | translate}} </p>\n\n                <div class=\"description_txt\">\n                  <h2 [style.color]=\"style.baseColor\" @fade>{{'DESCRIPTION' | translate}}</h2>\n                  <ng-container></ng-container>\n                  <p [innerHtml]=\"detail?.product_desc | safe: 'html'\" [style.color]=\"style.baseColor\" opacity=\"0.69\"\n                    @fade>\n                  </p>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"!detail?.isOutOfStock && settings.app_type == 2\">\n                  <!-- <button [style.color]=\"style.primaryColor\" class=\"btn btn-large add-tocart\" [disabled]=\"disableAdd\"\n                    (click)=\"checkAdd()\" @fade>{{'ADD TO CART' | translate}}</button> -->\n                  <button class=\"btn btn-large buy-now\" [ngStyle]=\"{'background-color': style.primaryColor}\"\n                    (click)=\"onBuyNow()\" @fade>{{'Buy Now' | translate}}</button>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"settings.app_type == 1\">\n                  <button [style.color]=\"style.primaryColor\" class=\"btn btn-large add-tocart w-100\"\n                    (click)=\"goToCart()\">\n                    {{'Go To Cart' | translate}}</button>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"settings.app_type == 8\">\n                  <button [ngStyle]=\"{'background-color': style.primaryColor, 'color' : '#fff'}\"\n                    class=\"btn btn-large add-tocart w-100\" (click)=\"onBookNow()\">\n                    {{'Select Date & Time' | translate}}</button>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"detail?.isOutOfStock\">\n                  <button [style.color]=\"style.primaryColor\" class=\"btn btn-large add-tocart w-100\"\n                    [disabled]=\"disableAdd\">{{'Out Of Stock' | translate}}</button>\n                </div>\n              </div>\n\n              <!-- <div *ngIf=\"brandId && settings?.app_type == 2 && settings?.selected_template == 2\">\n            <app-product-listing-by-brand [brandId]=\"brandId\" [settings]=\"settings\" [style]=\"style\">\n            </app-product-listing-by-brand>\n          </div> -->\n\n              <div class=\"clearfix container\">\n                <div class=\"tab_margin product_ul\" *ngIf=\"settings?.isProductCustomTabDescriptionEnable\">\n                  <ul>\n                    <ng-container\n                      *ngFor=\"let data of settings?.productCustomTabDescriptionLabel; let i=index;trackBy:trackByCustomTabDescFn;\">\n                      <li [ngClass]=\"{'active' : isTabActive == i+1}\" *ngIf=\"detail['customTabDescription'+(i+1)]\"\n                        (click)=\"setTabContent(detail['customTabDescription'+(i+1)], i+1)\">{{data.labelText}}</li>\n                    </ng-container>\n                  </ul>\n\n                  <div class=\"content_padding\">\n                    <div [innerHTML]=\"tabContent\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-top: 100px;\" *ngIf=\"similarProducts.length && settings?.app_type != 1\">\n\n              <div *ngIf=\"settings?.is_compare_products=='1'\" class=\"col-md-12 mb-4\">\n                <div class=\"vendors_heading my-4 col-md-4\">\n                  <a (click)=\"onComparePrice()\">{{'Compare prices with diffrent vendors' | translate}} </a>\n                </div>\n                <div class=\"select_product select_vendor p-lg-4 p-3 col-md-6\">\n                  <div class=\"row align-items-center\">\n                    <div class=\"col-4\">\n                      <div class=\"select_img  d-flex align-items-center justify-content-center\">\n                        <img class=\"img-fluid\" [src]=\"randomProduct?.image_path\" [height]=\"'500'\" width=\"100%\"\n                          onError=\"src = './assets/images/image_placeholder.jpeg';\" />\n                      </div>\n                    </div>\n                    <div class=\"col-8\">\n                      <div class=\"select_prduct_text\">\n                        <h4 class=\"m-0\">{{randomProduct?.name}}</h4>\n                        <a class=\"slect_company d-block my-sm-2 my-1\">{{randomProduct?.supplier_name}}</a>\n                        <label class=\"product_price m-0\">\n                          <span *ngIf=\"detail?.discount\">{{randomProduct?.display_price}}</span>\n                          {{randomProduct?.fixed_price ? randomProduct?.fixed_price : 0}}\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <h4>Similar {{'products' | localization | translate}}</h4>\n                <div class=\"row\">\n                  <div class=\"col-md-3\"\n                    *ngFor=\"let product of similarProducts.slice(0, 8);trackBy:trackBySimilarDataFn;\">\n                    <div\n                      [ngClass]=\"settings?.app_type == 2 && settings.selected_template == 0 ? 'Recommends-products mb-3' : ''\">\n                      <app-ecommerce [product]=\"product\" [settings]=\"settings\" [style]=\"style\" [loggedIn]=\"loggedIn\"\n                        (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\" [canCompare]=\"canCompareProd\"\n                        (onSelectProduct)=\"selectForCompare($event)\"></app-ecommerce>\n                    </div>\n                  </div>\n\n                  <!-- *ngIf=\"isShowCompareBtn\" -->\n                  <div *ngIf=\"isShowCompareBtn\" class=\"col-12 text-center mt-5 pt-lg-3\">\n                    <div class=\"des_btn_group d-flex align-items-center justify-content-between\">\n                      <a [ngStyle]=\"{'background-color': style.primaryColor}\"\n                        class=\"default_btn text-uppercase pointer m-auto\" (click)=\"onCompareProducts()\">{{'Compare' |\n                        translate}}</a>\n                    </div>\n                  </div>\n\n                  <div id=\"compare_prod\">\n                    <app-compare-products *ngIf=\"isCompare\" [products]=\"compareProductList\" [style]=\"style\"\n                      (onAddCart)=\"compareAddCart($event)\">\n                    </app-compare-products>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </ng-template>\n\n      <ng-template #skeleton>\n\n        <div class=\"skeleton\">\n          <div class=\"sub_bar\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <!-- <h3 [style.color]=\"style.primaryColor\">{{detail?.category_flow}}><strong\n                        [style.color]=\"style.primaryColor\">{{detail?.name}}</strong></h3> -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"product_section\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\" images-section-left\">\n                    <img [ngStyle]=\"{'height': '500px', 'width': '100%', 'border': 'none'}\">\n                    <div class=\"images-slides\">\n                      <img [ngStyle]=\"{'height': '150px', 'width': '150px', 'background':'#dedfe1'}\"\n                        *ngFor=\"let img of util.generateFakeList(3);trackBy:trackByUtilImageFn;\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6 nike-txt-part  mt-lg-0 mt-5 pt-lg-0 pt-4\">\n                  <h2 [ngStyle]=\"{'height': '32px'}\"></h2>\n\n                  <p [ngStyle]=\"{'height': '24px','width': '100%'}\" class=\"title_shoes\"></p>\n\n                  <p [ngStyle]=\"{'height': '12px', 'margin-top': '5px'}\"> </p>\n                  <div class=\"star-rating\">\n                    <!-- <rating [ngModel]=\"detail?.avg_rating\" [readonly]=\"true\" [max]=\"5\" [float]=\"true\"></rating> -->\n                    <p-rating [ngModel]=\"detail?.avg_rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n                    <!-- <span [style.color]=\"style.baseColor\" class=\"rating\">{{detail?.avg_rating ? detail?.avg_rating : 0}}/5</span> -->\n                  </div>\n                  <h2 [ngStyle]=\"{'height': '32px', 'width': '100px'}\"></h2>\n                  <p class=\"quantity-text\" [ngStyle]=\"{'height': '22px', 'width': '150px'}\"></p>\n                  <h2 [ngStyle]=\"{'height': '35px', 'width': '100px'}\"></h2>\n                  <div class=\"description_txt\">\n                    <h2 [ngStyle]=\"{'height': '22px', 'width': '150px'}\"></h2>\n                    <p [ngStyle]=\"{'height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                  </div>\n                  <div class=\"add-to-cart_btn\">\n                    <h2 [ngStyle]=\"{'height': '70px', 'width': '250px'}\" class=\"btn btn-large add-tocart\"></h2>\n                    <h2 [ngStyle]=\"{'height': '70px', 'width': '250px', 'margin-left': '20px'}\"\n                      class=\"btn btn-large buy-now\">\n                    </h2>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </ng-template>\n    </ng-template>\n  </ng-container>\n</div>\n<div *ngIf=\"settings?.app_type==1\">\n  <ng-container [ngSwitch]=\"settings?.selected_template\">\n    <ng-template ngSwitchDefault>\n      <ng-container *ngIf=\"!isLoading; then data else skeleton\"></ng-container>\n      <ng-template #data>\n        <div class=\"sub_bar\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <!-- <h3 [style.color]=\"style.primaryColor\">{{detail?.category_flow}}><strong\n                      [style.color]=\"style.primaryColor\">{{detail?.name}}</strong></h3> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"product_section\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div *ngIf=\"!settings?.is_single_vendor\" class=\" images-section-left\"\n                  [ngStyle]=\"{'borderColor': style.primaryColor}\">\n                  <img #productImage class=\"drift-trigger\" appImage [url]=\"image\" [size]=\"'600x500'\" [src]=\"image\"\n                    [height]=\"'500'\" width=\"100%\" onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n                  <div class=\"images-slides\" [ngStyle]=\"{'borderColor': style.primaryColor}\"\n                    *ngIf=\"detail?.image_path?.length\"\n                    [class.separate_product]=\"settings?.separate_images_product_detail == 1\">\n\n                    <img *ngFor=\"let img of detail?.image_path;trackBy:trackByImagePathFn;\"\n                      [class.active]=\"img == image\" [url]=\"img\" [size]=\"'150x150'\" [src]=\"img\"\n                      (click)=\"onImageClick(img)\" onError=\"src = './assets/images/image_placeholder.jpeg';\" @fade>\n                  </div>\n                </div>\n\n                <div *ngIf=\"settings?.is_single_vendor\" class=\"images-section-left\"\n                  [ngStyle]=\"{'borderColor': style.primaryColor}\">\n                  <ngx-slick-carousel class=\"carousel\" #slickModal=\"slick-carousel\" [config]=\"slideConfig\">\n                    <div ngxSlickItem\n                      *ngFor=\"let img of detail?.image_path;trackBy:trackByImagePathFn; let i = index;trackBy:trackBySpecialOffersFn\"\n                      class=\"slide\">\n                      <div class=\"item\">\n                        <div class=\"product-item\" style=\"margin-right: 30px; position: relative;\">\n                          <img style=\"width: 100%; cursor: pointer;\" (click)=\"onImageClick(img)\" appImage [url]=\"img\"\n                            [settings]=\"settings\" [size]=\"'355x320'\" [src]=\"img\"\n                            onError=\"src = '/assets/images/placeholder_image.svg';\">\n                        </div>\n                      </div>\n                    </div>\n                  </ngx-slick-carousel>\n                </div>\n\n\n              </div>\n              <div class=\"col-lg-6 nike-txt-part drift-detail mt-lg-0 mt-5 pt-lg-0 pt-4\">\n                <div class=\"heart-img\" *ngIf=\"settings?.is_product_wishlist == 1\">\n                  <a (click)=\"wishlist(!detail?.is_favourite)\">\n                    <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n                      xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"2\"\n                        [attr.fill]=\"detail?.is_favourite ? style.primaryColor : 'none'\" fill-rule=\"evenodd\">\n                        <g id=\"Group-4\" transform=\"translate(2.000000, 3.000000)\"\n                          [attr.stroke]=\"detail?.is_favourite ? style.primaryColor : style.baseColor\">\n                          <g id=\"ic_heart_fill\">\n                            <path\n                              d=\"M10,18 L1.71572875,9.84452689 C-0.571909584,7.59245518 -0.571909584,3.9411255 1.71572875,1.68905378 C4.00336709,-0.563017928 7.71236166,-0.563017928 10,1.68905378 C12.2876383,-0.563017928 15.9966329,-0.563017928 18.2842712,1.68905378 C20.5719096,3.9411255 20.5719096,7.59245518 18.2842712,9.84452689 L10,18 Z\"\n                              id=\"Combined-Shape-Copy\"></path>\n                          </g>\n                        </g>\n                      </g>\n                    </svg>\n                  </a>\n                </div>\n                <p class=\"title_shoes\" [style.color]=\"style.baseColor\" opacity=\"0.900000036\" @fade>{{detail?.name}}</p>\n                <p [style.color]=\"style.primaryColor\" class=\"mb-1\" opacity=\"0.5\" *ngIf=\"settings?.is_single_vendor!=1\"\n                  @fade>{{'by' | translate}}\n                  {{detail?.supplier_name}}</p>\n                <p *ngIf=\"detail?.country_of_origin && settings?.enable_country_of_origin_in_product=='1'\"\n                  [style.color]=\"style.primaryColor\" opacity=\"0.5\" @fade>\n                  <span>{{'Country' | translate}}</span> &nbsp;:&nbsp; {{detail?.country_of_origin}}\n                </p>\n\n                <h6 *ngIf=\"detail?.brand_name\" [style.color]=\"style.baseColor\" @fade>{{detail?.brand_name}}</h6>\n                <h6 *ngIf=\"detail?.size_chart_url && settings?.enable_size_chart_in_product=='1'\"\n                  (click)=\"showImage(detail?.size_chart_url)\" [style.color]=\"style.baseColor\" class=\"view_chart\" @fade>\n                  {{'View Chart'}}\n                </h6>\n\n\n                <div class=\"star-rating\" *ngIf=\"settings?.is_product_rating == 1\">\n                  <!-- <rating *ngIf=\"!(settings?.app_type == 2 && settings?.selected_template == 3)\"\n                    [ngModel]=\"detail?.avg_rating\" [readonly]=\"true\" [max]=\"5\" [float]=\"true\" @fade></rating> -->\n\n                  <p-rating *ngIf=\"!(settings?.app_type == 2 && settings?.selected_template == 3)\"\n                    [ngModel]=\"detail?.avg_rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n\n                  <span *ngIf=\"settings?.app_type == 2 && settings?.selected_template == 3\"\n                    [style.color]=\"style.baseColor\" class=\"rating\">{{detail?.avg_rating ? detail?.avg_rating :\n                    0}}/5</span>\n                </div>\n                <h2 class=\"value_heading\" *ngIf=\"!settings?.is_single_vendor && settings?.selected_template!=2\" @fade>\n                  <strong [style.color]=\"style.baseColor\">{{currency}}\n                    {{detail?.fixed_price ? detail?.fixed_price : 0}} </strong><span *ngIf=\"detail?.discount\"\n                    class=\"detail-discount\" [style.color]=\"style.baseColor\">{{currency}}\n                    {{detail?.display_price}}</span>\n                </h2>\n                <div *ngIf=\"detail?.variants.length\">\n                  <!-- for first varient -->\n                  <div class=\"product_size\">\n                    <h4 [style.color]=\"style.primaryColor\">{{categoryName}}</h4>\n                    <div class=\"color_outter cursor\"\n                      [ngStyle]=\"data.isClicked ? {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' } : ''\"\n                      *ngFor=\"let data of detail?.variants;let i = index;trackBy:trackByVariantsDataFn;\"\n                      (click)=\"replaceAllValue(i);mainCategoryIndex = i\">\n                      <a *ngIf=\"firstVariantType == 0\">{{data?.name}}</a>\n                      <a *ngIf=\"firstVariantType == 1\" class=\"color-box\" [ngStyle]=\"{'backgroundColor': data.name}\"></a>\n                    </div>\n                  </div>\n\n                  <!-- for all other variants -->\n                  <div class=\"product_size\"\n                    *ngFor=\"let data of detail?.variants[mainCategoryIndex]?.subCat;let parent = index;let last = last;trackBy:trackByVariantsFn;\">\n                    <h4 [style.color]=\"style.primaryColor\">{{data.name}}\n                    </h4>\n\n                    <div\n                      [ngStyle]=\"value.isClicked ? {'borderColor': style.primaryColor, 'color': '#ffffff', 'backgroundColor': style.primaryColor} : {'borderColor': style.primaryColor, 'color': style.primaryColor, 'backgroundColor': '#ffffff' }\"\n                      class=\"size_outter\" *ngFor=\"let value of data.values;let i = index;trackBy:trackByValueDataFn;\"\n                      [ngClass]=\"parent == 0 ? (!detail?.variants[mainCategoryIndex]?.isClicked ? 'disabled' : 'cursor') :\n                    (!detail?.variants[mainCategoryIndex]?.subCat[parent - 1 ].isClicked ? 'disabled' : 'cursor')\">\n\n                      <a [ngStyle]=\"{'background': value?.variant_value}\" class=\"color-variant\"\n                        [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                        (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent, i,last, value)\"\n                        *ngIf=\"value?.variant_type == 1\"></a>\n\n                      <a [style.color]=\"value.isClicked ? '#ffffff' : style.primaryColor\"\n                        [hidden]=\"parent !== 0 && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId && detail?.variants[mainCategoryIndex]?.subCat[parent - 1].clickedId !== value.product_id\"\n                        *ngIf=\"value?.variant_type == 0\"\n                        (click)=\"value.isClicked = true;data.isClicked = true;data.clickedId = value.product_id;replaceNextValues(mainCategoryIndex, parent,i ,last,value)\">{{value?.variant_value}}</a>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div *ngIf=\"!detail?.isOutOfStock && !settings?.is_single_vendor\" class=\"mt-3\">\n                  <!-- <p class=\"quantity-text\" [style.color]=\"style.baseColor\" @fade>Quantity</p> -->\n                  <app-quantity-buttons *ngIf=\"settings.app_type != 8\" [settings]=\"settings\" [style]=\"style\"\n                    [deafultView]=\"true\" [selectedQuantity]=\"detail?.selectedQuantity\" (onAdd)=\"increaseValue()\"\n                    (onRemove)=\"decreaseValue()\">\n                  </app-quantity-buttons>\n\n                  <ng-container *ngIf=\"settings.app_type == 8\">\n                    <h5 @fade [style.color]=\"style.baseColor\">{{'Select Time Of Need' | translate}}</h5>\n                    <app-quantity-buttons [style]=\"style\" [settings]=\"settings\" [priceType]=\"detail?.price_type\"\n                      [isProduct]=\"detail?.is_product\" [selectedQuantity]=\"detail.selectedQuantity\"\n                      (onRemove)=\"onServiceAddOrRemove(detail, -1)\" (onAdd)=\"onServiceAddOrRemove(detail, 1)\">\n                    </app-quantity-buttons>\n                  </ng-container>\n                </div>\n\n                <p *ngIf=\"detail.adds_on && detail.adds_on.length\"\n                  [ngStyle]=\"{color: style.primaryColor, 'font-size': '14px'}\"> {{'Customizable' | translate}} </p>\n\n                <div class=\"description_txt\">\n                  <h2 [style.color]=\"style.baseColor\" @fade>{{'DESCRIPTION' | translate}}</h2>\n                  <ng-container></ng-container>\n                  <p [innerHtml]=\"detail?.product_desc | safe: 'html'\" [style.color]=\"style.baseColor\" opacity=\"0.69\"\n                    @fade>\n                  </p>\n                </div>\n\n                <div class=\"row\" *ngIf=\"!detail?.isOutOfStock && settings?.is_single_vendor==1\">\n                  <div class=\"col-md-12 mt-3 mb-3\">\n                    <h2 class=\"\" @fade>\n                      <strong [style.color]=\"style.baseColor\">{{currency}}\n                        {{detail?.fixed_price ? detail?.fixed_price : 0}} </strong><span *ngIf=\"detail?.discount\"\n                        class=\"detail-discount\" [style.color]=\"style.baseColor\">{{currency}}\n                        {{detail?.display_price}}</span>\n                    </h2>\n                  </div>\n                  <div class=\"col-md-12 mb-3\">\n                    <app-quantity-buttons *ngIf=\"settings.app_type != 8\" [settings]=\"settings\" [style]=\"style\"\n                      [deafultView]=\"true\" [selectedQuantity]=\"detail?.selectedQuantity || '0'\"\n                      (onAdd)=\"increaseValue()\" (onRemove)=\"decreaseValue()\">\n                    </app-quantity-buttons>\n                  </div>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"!detail?.isOutOfStock && settings.app_type == 2\">\n                  <!-- <button [style.color]=\"style.primaryColor\" class=\"btn btn-large add-tocart\" [disabled]=\"disableAdd\"\n                    (click)=\"checkAdd()\" @fade>{{'ADD TO CART' | translate}}</button> -->\n                  <button class=\"btn btn-large buy-now\" [ngStyle]=\"{'background-color': style.primaryColor}\"\n                    (click)=\"onBuyNow()\" @fade>{{'Buy Now' | translate}}</button>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"settings.app_type == 1\">\n                  <button [style.color]=\"style.primaryColor\" class=\"btn btn-large add-tocart w-100\"\n                    (click)=\"goToCart()\">\n                    {{'Go To Cart' | translate}}</button>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"settings.app_type == 8\">\n                  <button [ngStyle]=\"{'background-color': style.primaryColor, 'color' : '#fff'}\"\n                    class=\"btn btn-large add-tocart w-100\" (click)=\"onBookNow()\">\n                    {{'Select Date & Time' | translate}}</button>\n                </div>\n\n                <div class=\"add-to-cart_btn\" *ngIf=\"detail?.isOutOfStock\">\n                  <button [style.color]=\"style.primaryColor\" class=\"btn btn-large add-tocart w-100\"\n                    [disabled]=\"disableAdd\">{{'Out Of Stock' | translate}}</button>\n                </div>\n              </div>\n\n              <!-- <div *ngIf=\"brandId && settings?.app_type == 2 && settings?.selected_template == 2\">\n            <app-product-listing-by-brand [brandId]=\"brandId\" [settings]=\"settings\" [style]=\"style\">\n            </app-product-listing-by-brand>\n          </div> -->\n\n              <div class=\"clearfix container\">\n                <div class=\"tab_margin product_ul\" *ngIf=\"settings?.isProductCustomTabDescriptionEnable\">\n                  <ul>\n                    <ng-container\n                      *ngFor=\"let data of settings?.productCustomTabDescriptionLabel; let i=index;trackBy:trackBySettingsFn;\">\n                      <li [ngClass]=\"{'active' : isTabActive == i+1}\" *ngIf=\"detail['customTabDescription'+(i+1)]\"\n                        (click)=\"setTabContent(detail['customTabDescription'+(i+1)], i+1)\">{{data.labelText}}</li>\n                    </ng-container>\n                  </ul>\n\n                  <div class=\"content_padding\">\n                    <div [innerHTML]=\"tabContent\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\" style=\"margin-top: 100px;\" *ngIf=\"similarProducts.length && settings?.app_type != 1\">\n\n              <div *ngIf=\"settings?.is_compare_products=='1'\" class=\"col-md-12 mb-4\">\n                <div class=\"vendors_heading my-4 col-md-4\">\n                  <a (click)=\"onComparePrice()\">{{'Compare prices with diffrent vendors' | translate}} </a>\n                </div>\n                <div class=\"select_product select_vendor p-lg-4 p-3 col-md-6\">\n                  <div class=\"row align-items-center\">\n                    <div class=\"col-4\">\n                      <div class=\"select_img  d-flex align-items-center justify-content-center\">\n                        <img class=\"img-fluid\" [src]=\"randomProduct?.image_path\" [height]=\"'500'\" width=\"100%\"\n                          onError=\"src = './assets/images/image_placeholder.jpeg';\" />\n                      </div>\n                    </div>\n                    <div class=\"col-8\">\n                      <div class=\"select_prduct_text\">\n                        <h4 class=\"m-0\">{{randomProduct?.name}}</h4>\n                        <a class=\"slect_company d-block my-sm-2 my-1\">{{randomProduct?.supplier_name}}</a>\n                        <label class=\"product_price m-0\">\n                          <span *ngIf=\"detail?.discount\">{{randomProduct?.display_price}}</span>\n                          {{randomProduct?.fixed_price ? randomProduct?.fixed_price : 0}}\n                        </label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <h4>Similar {{'products' | localization | translate}}</h4>\n                <div class=\"row\">\n                  <div class=\"col-md-3\" *ngFor=\"let product of similarProducts.slice(0, 8);trackBy:trackByProductFn;\">\n                    <div\n                      [ngClass]=\"settings?.app_type == 2 && settings.selected_template == 0 ? 'Recommends-products mb-3' : ''\">\n                      <app-ecommerce [product]=\"product\" [settings]=\"settings\" [style]=\"style\" [loggedIn]=\"loggedIn\"\n                        (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\" [canCompare]=\"canCompareProd\"\n                        (onSelectProduct)=\"selectForCompare($event)\"></app-ecommerce>\n                    </div>\n                  </div>\n\n                  <!-- *ngIf=\"isShowCompareBtn\" -->\n                  <div *ngIf=\"isShowCompareBtn\" class=\"col-12 text-center mt-5 pt-lg-3\">\n                    <div class=\"des_btn_group d-flex align-items-center justify-content-between\">\n                      <a [ngStyle]=\"{'background-color': style.primaryColor}\"\n                        class=\"default_btn text-uppercase pointer m-auto\" (click)=\"onCompareProducts()\">{{'Compare' |\n                        translate}}</a>\n                    </div>\n                  </div>\n\n                  <div id=\"compare_prod\">\n                    <app-compare-products *ngIf=\"isCompare\" [products]=\"compareProductList\" [style]=\"style\"\n                      (onAddCart)=\"compareAddCart($event)\">\n                    </app-compare-products>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </ng-template>\n\n      <ng-template #skeleton>\n\n        <div class=\"skeleton\">\n          <div class=\"sub_bar\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <!-- <h3 [style.color]=\"style.primaryColor\">{{detail?.category_flow}}><strong\n                        [style.color]=\"style.primaryColor\">{{detail?.name}}</strong></h3> -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"product_section\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\" images-section-left\">\n                    <img [ngStyle]=\"{'height': '500px', 'width': '100%', 'border': 'none'}\">\n                    <div class=\"images-slides\">\n                      <img [ngStyle]=\"{'height': '150px', 'width': '150px', 'background':'#dedfe1'}\"\n                        *ngFor=\"let img of util.generateFakeList(3);trackBy:trackByImgDataFn;\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6 nike-txt-part  mt-lg-0 mt-5 pt-lg-0 pt-4\">\n                  <h2 [ngStyle]=\"{'height': '32px'}\"></h2>\n\n                  <p [ngStyle]=\"{'height': '24px','width': '100%'}\" class=\"title_shoes\"></p>\n\n                  <p [ngStyle]=\"{'height': '12px', 'margin-top': '5px'}\"> </p>\n                  <div class=\"star-rating\">\n                    <!-- <rating [ngModel]=\"detail?.avg_rating\" [readonly]=\"true\" [max]=\"5\" [float]=\"true\"></rating> -->\n                    <p-rating [ngModel]=\"detail?.avg_rating\" readonly=\"true\" stars=\"5\" [cancel]=\"false\"></p-rating>\n                    <!-- <span [style.color]=\"style.baseColor\" class=\"rating\">{{detail?.avg_rating ? detail?.avg_rating : 0}}/5</span> -->\n                  </div>\n                  <h2 [ngStyle]=\"{'height': '32px', 'width': '100px'}\"></h2>\n                  <p class=\"quantity-text\" [ngStyle]=\"{'height': '22px', 'width': '150px'}\"></p>\n                  <h2 [ngStyle]=\"{'height': '35px', 'width': '100px'}\"></h2>\n                  <div class=\"description_txt\">\n                    <h2 [ngStyle]=\"{'height': '22px', 'width': '150px'}\"></h2>\n                    <p [ngStyle]=\"{'height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                    <p [ngStyle]=\"{'margin-top': '-10px','height': '18px','width': '100%'}\"></p>\n                  </div>\n                  <div class=\"add-to-cart_btn\">\n                    <h2 [ngStyle]=\"{'height': '70px', 'width': '250px'}\" class=\"btn btn-large add-tocart\"></h2>\n                    <h2 [ngStyle]=\"{'height': '70px', 'width': '250px', 'margin-left': '20px'}\"\n                      class=\"btn btn-large buy-now\">\n                    </h2>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </ng-template>\n    </ng-template>\n  </ng-container>\n</div>\n\n\n<app-image-viewer *ngIf=\"openImageViewer\" [viewImage]=\"imageToView\" (closeImageViewer)=\"closeImageViewer($event)\">");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"section clearfix\" style=\"padding: 10px 0px 60px; margin-top: 0px;\"> -->\n    <div class=\"clearfix container\">\n        <hr class=\"topmargin\">\n        <div class=\"title-dotted-border topmargin-sm\">\n            <h4>More from this Brand</h4>\n        </div>\n\n        <ng-container *ngIf=\"!isLoading; else skeleton\">\n            <div class=\"row clearfix\">\n                <div class=\"col-lg-3 col-md-4 col-sm-6 col-12 px-2 padd\"\n                    *ngFor=\"let product of sameBrandProducts;trackBy:trackBySameBrandFn;\">\n                    <app-ecommerce [product]=\"product\" [settings]=\"settings\" [style]=\"style\" [loggedIn]=\"loggedIn\"\n                        (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\"></app-ecommerce>\n                </div>\n            </div>\n        </ng-container>\n\n        <ng-template #skeleton>\n            <div class=\"skeleton\">\n                <div class=\"row\">\n                    <div class=\"col-lg-3 col-md-4 col-sm-6 col-12 px-2 padd\" *ngFor=\"let item of utilityService.generateFakeList(4);trackBy:trackBySkeletonFn;\">\n                        <app-product-skeleton [settings]=\"settings\"></app-product-skeleton>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n\n    </div>\n<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/unified-search/unified-search.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/unified-search/unified-search.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-processing-indicator *ngIf=\"isLoading\"></app-processing-indicator>\n\n<div class=\"container mb-5 mt-5\" *ngIf=\"products.length\">\n    <div class=\"reccom-main_section\">\n        <h2 [style.color]=\"style?.baseColor\" style=\"margin-top: 20px\">{{'products' | localization | translate}}</h2>\n        <div class=\"row\">\n            <div class=\"Recommends-products\" [ngClass]=\"productClass\"\n                *ngFor=\"let product of products | paginate: { itemsPerPage: productPagination.perPage, currentPage: productPagination.currentPage, totalItems: productPagination.count }; let i = index;trackBy:trackByProductsFn;\">\n                <app-product [product]=\"product\" [style]=\"style\" [settings]=\"settings\" [state]=\"productstate\"\n                    [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\">\n                </app-product>\n            </div>\n        </div>\n\n        <div class=\"custom-pagination mt-5\" style=\"margin-top: 15px !important\"\n            *ngIf=\"productPagination.count > productPagination.perPage\">\n            <pagination-controls responsive=\"true\" [style.color]=\"style.primaryColor\" previousLabel=\"Prev\"\n                nextLabel=\"Next\" (pageChange)=\"pageChange($event)\"></pagination-controls>\n        </div>\n    </div>\n</div>\n\n<hr>\n\n<div class=\"container mt-5\" *ngIf=\"suppliers.length && settings?.is_single_vendor == 0\">\n    <div class=\"reccom-main_section\">\n        <h2 [style.color]=\"style?.baseColor\" style=\"margin-top: 20px\">{{'suppliers' | localization | translate}}</h2>\n        <div class=\"row\">\n            <div [ngClass]=\"supplierClass\"\n                *ngFor=\"let supplier of suppliers | paginate: { itemsPerPage: supplierPagination.perPage, currentPage: supplierPagination.currentPage, totalItems: suppliers.length }; let i = index;trackBy:trackBySameBrandFn;\">\n                <app-supplier [settings]=\"settings\" [style]=\"style\" [supplier]=\"supplier\"></app-supplier>\n            </div>\n        </div>\n\n        <div class=\"custom-pagination mt-5\" *ngIf=\"suppliers.length > supplierPagination.perPage\">\n            <pagination-controls responsive=\"true\" [style.color]=\"style.primaryColor\" previousLabel=\"Prev\"\n                nextLabel=\"Next\" (pageChange)=\"supplierPagination.currentPage = $event\"></pagination-controls>\n        </div>\n    </div>\n</div>\n\n<div class=\"container mb-5 mt-5\" *ngIf=\"!products.length && !suppliers.length\">\n    <div class=\"row product-list\">\n        <div class=\"no-data\">\n            <h1 [style.color]=\"style.baseColor\">No Data Found</h1>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/view-all-categories/view-all-categories.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/view-all-categories/view-all-categories.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container [ngSwitch]=\"settings?.selected_template\">\n\n    <ng-template [ngSwitchCase]=\"2\">\n        <!------------------service section-------------------->\n        <section class=\"bg-white p-0\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 main_heading t-center\">\n                        <h1>Start your experience</h1>\n                    </div>\n                    <div class=\"col-sm-3 box cat-img\"\n                        *ngFor=\"let category of categoryData;trackBy:trackByCategoryDataFn;\">\n                        <img appImage [url]=\"category?.image\" [size]=\"'260x200'\" [src]=\"category?.image\"\n                            [settings]=\"settings\" onError=\"src = './assets/images/placeholder_image.svg';\">\n                        <h3 style=\"cursor: pointer;\" (click)=\"toProducts(category)\"><a>{{category?.name}}<i\n                                    class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i></a></h3>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </ng-template>\n\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/view-more-products/view-more-products.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/view-more-products/view-more-products.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 30px;\" *ngIf=\"settings?.selected_template == 3 && settings?.app_type == 1\">\n\n    <div class=\"categories-item-products\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-4\">\n                <h2 [style.color]=\"style?.baseColor\" class=\"text-uppercase\" *ngIf=\"isRecommendedFoods\">\n                    {{'Recommended' | translate}}\n                    {{'product' | localization}}</h2>\n                <h2 [style.color]=\"style?.baseColor\" class=\"text-uppercase\" *ngIf=\"isTopSelling\">\n                    {{'Top-Selling Dishes' | translate}}</h2>\n            </div>\n            <ng-container *ngIf=\"!isLoading; else skeleton\">\n                <div class=\"col-md-6\" *ngFor=\"let product of products;trackBy:trackByProductsFn;\">\n                    <app-product [product]=\"product\" [darkTheme]=\"isDarkTheme\" [settings]=\"settings\" [style]=\"style\"\n                        [loggedIn]=\"loggedIn\" (add)=\"addProduct($event)\" (remove)=\"removeProduct($event)\"></app-product>\n                </div>\n            </ng-container>\n        </div>\n    </div>\n\n    <ng-template #skeleton>\n        <div class=\"skeleton col-md-6\" *ngFor=\"let product of util.generateFakeList(8);trackBy:trackByFakeListFn;\">\n            <app-product-skeleton [settings]=\"settings\" [style]=\"style\"></app-product-skeleton>\n        </div>\n    </ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/wishlist/wishlist.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/wishlist/wishlist.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--================ Start Page Breadcrumb Page ================-->\n<div class=\"page_breadcrumb\" [style.background-color]=\"style.backgroundColor\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <ul>\n          <li><a class=\"bold\" [style.color]=\"style.baseColor\">{{'wishlist' | localization | translate}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-6\">\n        <p class=\"page-resultes\" [style.color]=\"style.baseColor\">\n          <span *ngIf=\"products.length > 2\">{{(pagination.currentPage - 1) * (pagination.perPage) +\n            1}}-{{((((pagination.currentPage - 1) * (pagination.perPage) + 1) + pagination.perPage)-1) > products.length\n            ? products.length : ((((pagination.currentPage - 1) * (pagination.perPage) + 1) + pagination.perPage)-1)}}\n            of </span>\n          {{products.length}} {{'results' | translate}}\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n<!--================ End Page Breadcrumb Page ================-->\n\n\n<section style=\"margin: 30px 0px 30px;\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 more-product-page_section\" [ngClass]=\"{'products': settings?.selected_template == 5}\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h2 [style.color]=\"style?.primaryColor\">{{'products' | localization | translate}}</h2>\n            <!-- <p [style.color]=\"style?.baseColor\">{{'Awesome deals unlocked every day' | translate}}</p> -->\n          </div>\n        </div>\n\n        <ng-container *ngIf=\"!isLoading; else skeleton\">\n          <div class=\"row product-list\"\n            [ngClass]=\"{'all-products': settings?.selected_template == 5 && products.length}\">\n            <div class=\"col col-md-3 Recommends-products\"\n              [ngClass]=\"{'col-md-3': settings?.selected_template == 0 , 'col-md-6': settings?.selected_template == 1, 'col-md-2': settings?.selected_template == 3}\"\n              *ngFor=\"let product of products | paginate: { itemsPerPage: pagination.perPage, currentPage: pagination.currentPage, totalItems: products.length }; let i = index;trackBy:trackByProductsFn;\">\n              <app-product [settings]=\"settings\" [style]=\"style\" [loggedIn]=\"true\" [product]=\"product\"\n                (onFavourite)=\"onFavourite(product.product_id)\" (add)=\"addProduct($event)\"\n                (remove)=\"removeProduct($event)\"></app-product>\n            </div>\n\n          </div>\n\n          <div *ngIf=\"products.length === 0\" class=\"no-data\">\n            <h1 [style.color]=\"style.baseColor\">{{'No' | translate}} {{'product' | localization | translate }}\n              {{'Found' | translate}}\n            </h1>\n          </div>\n\n          <div class=\"custom-pagination mt-5\" *ngIf=\"products.length > pagination.perPage\">\n            <pagination-controls [style.color]=\"style.primaryColor\" previousLabel=\"Prev\" nextLabel=\"Next\"\n              (pageChange)=\"pagination.currentPage = $event\"></pagination-controls>\n          </div>\n\n        </ng-container>\n\n        <ng-template #skeleton>\n          <div class=\"row product-list skeleton\">\n            <div class=\"col col-md-3 Recommends-products\"\n              [ngClass]=\"{'col-md-3': settings?.selected_template == 0 , 'col-md-6': settings?.selected_template == 1}\"\n              *ngFor=\"let item of util.generateFakeList(8);trackBy:trackByFakeListFn;\">\n              <app-product-skeleton [style]=\"style\" [settings]=\"settings\"></app-product-skeleton>\n            </div>\n          </div>\n        </ng-template>\n\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./src/app/layout/pages/products/category-detail/category-detail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/pages/products/category-detail/category-detail.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy9jYXRlZ29yeS1kZXRhaWwvY2F0ZWdvcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/pages/products/category-detail/category-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/pages/products/category-detail/category-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CategoryDetailComponent = class CategoryDetailComponent {
    constructor(route) {
        this.route = route;
        this.cat_Id = '';
    }
    ngOnInit() {
        this.subscription = this.route.queryParams
            .subscribe(params => {
            if (params.cat_id) {
                this.cat_Id = JSON.parse(params.cat_id);
            }
        });
    }
    /********* Unsubscribe Subscriptions **********/
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
CategoryDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CategoryDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-detail/category-detail.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-detail.component.scss */ "./src/app/layout/pages/products/category-detail/category-detail.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], CategoryDetailComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/category-listing/category-listing.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/pages/products/category-listing/category-listing.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy9jYXRlZ29yeS1saXN0aW5nL2NhdGVnb3J5LWxpc3RpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/pages/products/category-listing/category-listing.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/pages/products/category-listing/category-listing.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CategoryListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListingComponent", function() { return CategoryListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");






let CategoryListingComponent = class CategoryListingComponent {
    constructor(util, http, router) {
        this.util = util;
        this.http = http;
        this.router = router;
        this.categories = [];
        this.subCatIndex = 0;
        this.isLoading = false;
        this.selectedCatIds = [];
        this.selectedCatId = 0;
    }
    ngOnInit() {
        this.settingsSubscription = this.util.getSettings.subscribe((settings) => {
            if (settings) {
                this.settings = settings;
            }
        });
        this.getCategories();
    }
    getCategories() {
        this.isLoading = true;
        let param_data = {
            language_id: this.util.handler.languageId
        };
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"].getCategories, param_data, true)
            .subscribe(response => {
            if (!!response && response.data) {
                this.categories = [];
                if (this.settings.isCustomFlow) {
                    const category = response['data'].find((c) => c.type == this.settings.app_type);
                    if (!!category && category['sub_category']) {
                        this.categories.push(category['sub_category']);
                    }
                }
                else {
                    this.categories.push(response['data']);
                }
            }
            this.isLoading = false;
        }, err => {
            this.isLoading = false;
        });
    }
    getSubCat(category) {
        if (this.subCatIndex == 0) {
            this.selectedCatId = category.id;
        }
        if ((category.is_subcategory && this.subCatIndex > 0) || (this.subCatIndex == 0 && category.sub_category.length)) {
            let param_data = {
                categoryId: category.id || category.category_id,
                languageId: this.util.handler.languageId,
            };
            this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_2__["ApiUrl"].getSubcategory, param_data, true)
                .subscribe(response => {
                if (!!response && response.data) {
                    this.categories.push(response.data);
                    this.subCatIndex++;
                }
            });
        }
        else {
            this.viewProducts(category);
        }
    }
    viewProducts(category) {
        let selectedCatPath = [category['name']];
        let seoValue = selectedCatPath.length ? selectedCatPath[selectedCatPath.length - 1].replace(/ &/g, '-') : '';
        let param_obj = {};
        Object.assign(param_obj, this.util.handler);
        if (this.subCatIndex > 0) {
            param_obj['subCatId'] = [category.id || category.category_id];
        }
        param_obj['category'] = this.selectedCatId;
        param_obj['path'] = selectedCatPath;
        this.router.navigate(['/products', 'product-listing', seoValue], {
            queryParams: { f: this.util.encryptData(param_obj) }
        });
    }
    ngOnDestroy() {
        this.settingsSubscription.unsubscribe();
    }
    trackByCategoryFn(id, index) {
        return index;
    }
    trackByFakeListFn(id, index) {
        return index;
    }
};
CategoryListingComponent.ctorParameters = () => [
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
CategoryListingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-category-listing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-listing/category-listing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-listing.component.scss */ "./src/app/layout/pages/products/category-listing/category-listing.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], CategoryListingComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/category-wise-products/category-wise-products.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/pages/products/category-wise-products/category-wise-products.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy9jYXRlZ29yeS13aXNlLXByb2R1Y3RzL2NhdGVnb3J5LXdpc2UtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/pages/products/category-wise-products/category-wise-products.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/pages/products/category-wise-products/category-wise-products.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CategoryWiseProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryWiseProductsComponent", function() { return CategoryWiseProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var src_app_layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layout/shared/product/components/add-on/add-on.component */ "./src/app/layout/shared/product/components/add-on/add-on.component.ts");
/* harmony import */ var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var src_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var src_app_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/filters.model */ "./src/app/shared/models/filters.model.ts");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");













let CategoryWiseProductsComponent = class CategoryWiseProductsComponent {
    constructor(route, http, util, user, cartService, dialogService) {
        this.route = route;
        this.http = http;
        this.util = util;
        this.user = user;
        this.cartService = cartService;
        this.dialogService = dialogService;
        this.loggedIn = false;
        this.productstate = {
            hideSupplier: false
        };
        this.cart = [];
        this.categoryId = '';
        this.noData = false;
        this.isLoading = true;
        this.subCategoryIds = [];
        this.productList = [];
        this.selected_category = {};
        this.categories = [];
        this.selectedSorting = '';
        this.selected_subcat = '';
        this.subCategoryAr = [];
        this.userSubscription = this.user.currentUser.subscribe(user => {
            if (!!user && user["access_token"]) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_6__["PaginationModel"]();
        this.filterData = new src_app_shared_models_filters_model__WEBPACK_IMPORTED_MODULE_5__["FiltersModel"]();
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles
            .subscribe(style => {
            this.style = style;
        });
        this.settingsSubscription = this.util.getSettings
            .subscribe((settings) => {
            if (settings) {
                this.settings = settings;
                this.productstate.hideSupplier = !!this.settings.is_single_vendor;
            }
        });
        this.routeSubscription = this.route.queryParams
            .subscribe(_params => {
            if (_params.f) {
                let params = this.util.decryptData(_params.f);
                this.categoryId = params['category'] || params['categoryId'] || null;
                this.supplierIds = params.supplierId ? params.supplierId : [];
            }
        });
        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
            }
        });
        this.setSelectedSorting();
        this.getCategories();
    }
    filterProducts(is_page_change) {
        this.isLoading = true;
        if (!is_page_change) {
            this.pagination.currentPage = 1;
            this.pagination.offset = 0;
        }
        this.noData = false;
        let param_data = Object.assign({}, this.filterData);
        param_data['languageId'] = this.util.handler.languageId;
        param_data['offset'] = this.pagination.offset;
        param_data['limit'] = this.pagination.perPage;
        param_data['latitude'] = this.util.handler.latitude;
        param_data['longitude'] = this.util.handler.longitude;
        param_data['need_agent'] = 0;
        param_data['subCategoryId'] = this.subCategoryIds;
        if (this.supplierIds)
            param_data['supplier_ids'] = this.supplierIds;
        if (param_data['low_to_high'] == -1 && this.settings.no_default_product_sort == 1) {
            delete param_data['low_to_high'];
        }
        this.http.postData(src_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].filterProducts, param_data, false)
            .subscribe((response) => {
            this.productList = [];
            if (!!response && response.data) {
                this.pagination.count = response.data.count;
                this.productList = response.data.product;
                this.productList.map(data => {
                    this.util.productPriceToFloat(data);
                    data['avg_rating'] = Number.parseFloat(data['avg_rating']).toFixed(1);
                    data['discount_price'] = Math.round(((data.display_price - data.fixed_price) / data.display_price) * 100);
                    data['selectedQuantity'] = 0;
                    this.util.productPriceToFloat(data);
                    data["discountPercentage"] = parseFloat((((data.display_price - data.fixed_price) / data.display_price) * 100).toFixed(2));
                    data["discount"] = Math.round(data.discountPercentage);
                    if (this.cart.length) {
                        this.cart.forEach(cartProduct => {
                            if (cartProduct.productId == data.product_id) {
                                data['selectedQuantity'] = cartProduct['selectedQuantity'];
                                if (data['price_type']) {
                                    data['fixed_price'] = cartProduct['fixed_price'];
                                }
                                if (!!cartProduct['customization']) {
                                    data['customization'] = cartProduct['customization'];
                                }
                            }
                        });
                    }
                });
            }
            this.noData = true;
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    getSubCategories(cat) {
        cat.sub_category.forEach(el => {
            if (el.sub_category && el.sub_category.length) {
                this.getSubCategories(el);
            }
            else {
                this.subCategoryAr.push(el);
            }
        });
    }
    getCategories() {
        let param_data = {
            language_id: this.util.handler.languageId
        };
        this.http.getData(src_app_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].getCategories, param_data, true)
            .subscribe(response => {
            if (!!response && response.data) {
                this.categories = response.data;
                this.selected_category = (response.data).find(el => el.id == this.categoryId);
                this.filterCategories();
            }
        });
    }
    filterCategories() {
        this.subCategoryAr = [];
        const sub = this.categories.find(o => o.id == this.categoryId);
        if (!!sub) {
            this.getSubCategories(sub);
        }
        if (this.subCategoryAr.length) {
            this.subCategoryIds = [this.subCategoryAr[0].id];
            this.selected_subcat = this.subCategoryAr[0].id;
        }
        else {
            this.subCategoryIds = [this.categoryId];
        }
        this.filterProducts(false);
    }
    selectCategory(category) {
        this.selected_category = category;
        this.categoryId = category.id;
        this.filterCategories();
    }
    onSort(type) {
        if (this.filterData.low_to_high == type) {
            return;
        }
        this.filterData.low_to_high = type;
        this.setSelectedSorting();
        this.filterProducts(false);
    }
    pageChange(event) {
        this.pagination.currentPage = event;
        this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
        this.filterProducts(true);
    }
    selectSubCategory(subCatId, index) {
        this.subCategoryIds = [subCatId];
        this.selected_subcat = subCatId;
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_6__["PaginationModel"]();
        this.filterProducts(false);
    }
    setSelectedSorting() {
        switch (this.filterData.low_to_high) {
            case -1:
                this.selectedSorting = 'Default';
                break;
            case 0:
                this.selectedSorting = 'High to Low';
                break;
            case 1:
                this.selectedSorting = 'Low to High';
                break;
            case 3:
                this.selectedSorting = 'Popularity';
                break;
            default:
                this.selectedSorting = 'Low to High';
        }
    }
    addProduct(product) {
        if (product['is_product_adds_on'] !== 1) {
            this.cartService.addToCart(product, this.productList);
            return;
        }
        this.openAddOnDialog(product);
    }
    removeProduct(product) {
        if (product['customization'] && product['customization'].length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.removeFromCart(product);
        }
    }
    openAddOnDialog(product) {
        const dialogRef = this.dialogService.open(src_app_layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_2__["AddOnComponent"], {
            header: product['name'],
            width: '50%',
            showHeader: false,
            // contentStyle: { "max-height": "350px", "overflow": "auto" },
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: product,
                addOnItems: product['adds_on']
            }
        });
        dialogRef.onClose.subscribe(() => {
            if (product.customization && product.customization.length) {
                // this.router.navigate(['/', this.settings.app_type, 'cart']);
            }
        });
    }
    ngOnDestroy() {
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
        if (!!this.cartSubscription)
            this.cartSubscription.unsubscribe();
        if (!!this.routeSubscription)
            this.routeSubscription.unsubscribe();
    }
};
CategoryWiseProductsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
    { type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }
];
CategoryWiseProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-category-wise-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-wise-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/category-wise-products/category-wise-products.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({ opacity: 1 }))
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./category-wise-products.component.scss */ "./src/app/layout/pages/products/category-wise-products/category-wise-products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        src_app_services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])
], CategoryWiseProductsComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/discounted-products/discounted-products.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/pages/products/discounted-products/discounted-products.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mixed-no-data {\n  text-align: center;\n  border: 1px solid #0000002e;\n  margin: 40px 20px;\n  padding: 20px;\n  border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL3Byb2R1Y3RzL2Rpc2NvdW50ZWQtcHJvZHVjdHMvZGlzY291bnRlZC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvcHJvZHVjdHMvZGlzY291bnRlZC1wcm9kdWN0cy9kaXNjb3VudGVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1peGVkLW5vLWRhdGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDJlO1xyXG4gICAgbWFyZ2luOiA0MHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/layout/pages/products/discounted-products/discounted-products.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/pages/products/discounted-products/discounted-products.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DiscountedProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountedProductsComponent", function() { return DiscountedProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/theme/theme.service */ "./src/app/services/theme/theme.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../shared/pipes/localization.pipe */ "./src/app/shared/pipes/localization.pipe.ts");
/* harmony import */ var _layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../layout/shared/product/components/add-on/add-on.component */ "./src/app/layout/shared/product/components/add-on/add-on.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../../services/data-cache/data-cache.service */ "./src/app/services/data-cache/data-cache.service.ts");

















let DiscountedProductsComponent = class DiscountedProductsComponent {
    constructor(http, util, route, router, cartService, dialogService, user, message, localization, translate, data_cache, themeService) {
        this.http = http;
        this.util = util;
        this.route = route;
        this.router = router;
        this.cartService = cartService;
        this.dialogService = dialogService;
        this.user = user;
        this.message = message;
        this.localization = localization;
        this.translate = translate;
        this.data_cache = data_cache;
        this.themeService = themeService;
        this.specialOffers = [];
        this.currency = '';
        this.allOffers = false;
        this.noData = false;
        this.cart = [];
        this.loggedIn = false;
        this.isDarkTheme = false;
        this.isLoading = true;
        this.productFor = 1;
        this.offerCategories = [];
        this.isMobile = _core_global__WEBPACK_IMPORTED_MODULE_11__["GlobalVariable"].IS_MOBILE;
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_3__["StyleVariables"]();
        this.userSubscription = this.user.currentUser
            .subscribe(user => {
            if (!!user && user['access_token']) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_11__["GlobalVariable"].CURRENCY;
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles.subscribe((style) => {
            this.style = style;
        });
        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
            }
        });
        this.settingsSubscription = this.util.getSettings.subscribe((settings) => {
            if (settings) {
                this.settings = settings;
            }
        });
        this.themeSubscription = this.util.getDarkTheme.subscribe((darkTheme) => {
            this.isDarkTheme = darkTheme;
        });
        this.route.queryParams.subscribe(queryParams => {
            if (queryParams.type) {
                this.productFor = parseInt(queryParams.type);
            }
            this.makeSubscribe();
        });
    }
    productDetail(data) {
        if (this.settings.app_type != 1) {
            let obj = {
                productId: data.product_id,
                supplierBranchId: data.supplier_branch_id,
                category: data.category_id
            };
            data.name = data.name.replace(/ &/g, "-");
            obj = Object.assign(Object.assign({}, this.util.handler), obj);
            this.router.navigate(['/products', 'product-detail', data.name], {
                queryParams: { f: this.util.encryptData(obj) }
            });
        }
    }
    makeSubscribe() {
        this.getDataSubscribe = this.util.callGetData.subscribe(data => {
            if (data) {
                this.getAllOffers();
            }
        });
    }
    getAllOffers() {
        this.isLoading = true;
        const params = {
            languageId: this.util.handler.languageId,
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude
        };
        let apiPath = '';
        let objForRes = '';
        if (this.settings.selected_template == 3 && this.categoryId) {
            this.data_cache.removeKey(this.productFor == 1 ? _core_apiUrl__WEBPACK_IMPORTED_MODULE_12__["ApiUrl"].getSpecialOffers : _core_apiUrl__WEBPACK_IMPORTED_MODULE_12__["ApiUrl"].getPopularProduct);
            params['categoryId'] = this.categoryId;
        }
        switch (this.productFor) {
            case 1:
                apiPath = _core_apiUrl__WEBPACK_IMPORTED_MODULE_12__["ApiUrl"].getSpecialOffers;
                objForRes = 'offerEnglish';
                break;
            default:
                apiPath = _core_apiUrl__WEBPACK_IMPORTED_MODULE_12__["ApiUrl"].getPopularProduct;
                objForRes = 'product';
                break;
        }
        this.http.getData(apiPath, params, true, true).subscribe(response => {
            this.noData = true;
            this.isLoading = false;
            if (!!response && response.data) {
                this.specialOffers = this.mapData(response.data[objForRes]);
                if (this.settings.isCustomFlow && this.productFor == 1) {
                    this.offerCategories = response.data.getOfferByCategory;
                    this.cutomDomainOffers();
                }
            }
        }, (err) => this.isLoading = false);
    }
    onImageLoad(offer) {
        offer.image = offer.image_path;
    }
    mapData(offerData) {
        offerData.map((offer) => {
            offer['avg_rating'] = Number.parseFloat(offer['avg_rating']).toFixed(1);
            offer['image'] = this.util.thumbnail(offer['product_image']);
            offer["selectedQuantity"] = 0;
            if (this.cart.length) {
                this.cart.forEach(cartProduct => {
                    if (cartProduct.productId == offer.product_id) {
                        offer['selectedQuantity'] = cartProduct['selectedQuantity'];
                    }
                });
            }
            if (offer["price_type"]) {
                try {
                    offer["fixed_price"] = JSON.parse(offer.fixed_price);
                    let price = offer.fixed_price[0];
                    offer["discount"] = Math.round(((price.price_per_hour - price.discount_price) /
                        price.price_per_hour) *
                        100);
                }
                catch (err) {
                }
            }
            else {
                this.util.productPriceToFloat(offer);
                offer["discount"] = Math.round(((offer.display_price - offer.fixed_price) / offer.display_price) * 100);
            }
        });
        return offerData;
    }
    /********* Open Add On Dialog *********/
    openAddOnDialog(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item) {
            product.customization = item.customization;
        }
        const dialogRef = this.dialogService.open(_layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_14__["AddOnComponent"], {
            header: product['name'],
            width: '50%',
            showHeader: false,
            // contentStyle: { "max-height": "350px", "overflow": "auto" },
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: product,
                addOnItems: product['adds_on']
            }
        });
        dialogRef.onClose.subscribe(() => {
            if (product.customization && product.customization.length) {
                delete product.customization;
                this.router.navigate(['/cart']);
            }
        });
    }
    addProduct(product) {
        if (product.adds_on && product.adds_on.length && this.settings.app_type == 1) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.addToCart(product, this.specialOffers.slice(0, 24));
            return;
        }
    }
    removeProduct(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item['customization'] && item['customization'].length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.removeFromCart(product);
        }
    }
    wishlist(status, detail) {
        if (!this.loggedIn) {
            this.message.alert('warning', this.translate.instant('Please Login First'));
            return;
        }
        let param_data = {
            status: +status,
            product_id: detail.id
        };
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_12__["ApiUrl"].addToWishlist, param_data, true)
            .subscribe(response => {
            if (!!response && response.data) {
                this.message.toast('success', `${this.localization.transform('product')} ${this.translate.instant('Has Been Successfully')} ${status ? this.translate.instant('Added To') : this.translate.instant('Removed From')} ${this.localization.transform('wishlist')}`);
                detail.is_favourite = status;
            }
        });
    }
    cutomDomainOffers() {
        this.offerCategories.map(category => {
            category.value.map((offer) => {
                offer['avg_rating'] = Number.parseFloat(offer['avg_rating']).toFixed(1);
                offer['image'] = this.util.thumbnail(offer['image_path']);
                offer["selectedQuantity"] = 0;
                if (offer['price_type']) {
                    offer['maxHour'] = offer['hourly_price'][offer['hourly_price'].length - 1]['max_hour'] - this.settings.interval;
                    if (offer['discount'] && offer['hourly_price'][0]['discount_price']) {
                        offer['fixed_price'] = offer['hourly_price'][0]['discount_price'];
                        offer['display_price'] = offer['hourly_price'][0]['price_per_hour'];
                        offer['discount_price'] = Math.round(((offer['hourly_price'][0]['price_per_hour'] - offer['hourly_price'][0]['discount_price']) / offer['hourly_price'][0]['price_per_hour']) * 100);
                        offer["discountPercentage"] = parseFloat((((offer.display_price - offer.fixed_price) / offer.display_price) * 100).toFixed(2));
                    }
                    else {
                        offer['fixed_price'] = offer['hourly_price'][0]['price_per_hour'];
                    }
                }
                else {
                    this.util.productPriceToFloat(offer);
                    offer["discountPercentage"] = parseFloat((((offer.display_price - offer.fixed_price) / offer.display_price) * 100).toFixed(2));
                    offer["discount"] = Math.round(offer.discountPercentage);
                }
            });
        });
    }
    onViewDetail(data) {
        const category = this.util.getLocalData('selected_category', true) || {};
        category.type = data.type;
        this.util.setLocalData('selected_category', category, true);
        this.util.clearLocalData('ques_data');
        this.cartService.emptyCart();
        let obj = {
            productId: data.parent_id || data.product_id,
            supplierBranchId: data.supplier_branch_id,
            category: data.category_id
        };
        data.name = data.name.replace(/ &/g, "-");
        obj = Object.assign(Object.assign({}, this.util.handler), obj);
        this.router.navigate(["/", "products", "product-detail", data.name], {
            queryParams: { f: this.util.encryptData(obj) }
        }).then(() => {
            this.settings.app_type = category.type;
            this.util.setSettings(this.settings);
            this.themeService.setStyles();
        });
    }
    trackBySpecialDataFn(id, index) {
        return index;
    }
    trackByUtilOfferDataFn(id, index) {
        return index;
    }
    trackByOfferDataFn(id, index) {
        return index;
    }
    trackByFakeListDataFn(id, index) {
        return index;
    }
    trackBySpecialOffersDataFn(id, index) {
        return index;
    }
    trackByFakeListFn(id, index) {
        return index;
    }
    trackBySpecialOffersFn(id, index) {
        return index;
    }
    trackByUtilOfferFn(id, index) {
        return index;
    }
    trackByOfferFn(id, index) {
        return index;
    }
    trackByUtilDataFn(id, index) {
        return index;
    }
    trackByProductFn(id, index) {
        return index;
    }
    trackByCategoryFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.getDataSubscribe)
            this.getDataSubscribe.unsubscribe();
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
        if (!!this.themeSubscription)
            this.themeSubscription.unsubscribe();
        let componentInstance = this.dialogService.dialogComponentRef;
        if (componentInstance) {
            componentInstance.destroy();
        }
    }
};
DiscountedProductsComponent.ctorParameters = () => [
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DialogService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_10__["MessagingService"] },
    { type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_13__["LocalizationPipe"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
    { type: _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_16__["DataCacheService"] },
    { type: _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"] }
];
DiscountedProductsComponent.propDecorators = {
    categoryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
DiscountedProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-discounted-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discounted-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/discounted-products/discounted-products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discounted-products.component.scss */ "./src/app/layout/pages/products/discounted-products/discounted-products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_8__["DialogService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_10__["MessagingService"],
        _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_13__["LocalizationPipe"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
        _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_16__["DataCacheService"],
        _services_theme_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]])
], DiscountedProductsComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/product-detail/product-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/pages/products/product-detail/product-detail.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*--------img scrolling------------------*/\n.images-slides[_ngcontent-saas-website-c303] img[_ngcontent-saas-website-c303] {\n  height: 125px !important;\n}\n/*--------img scrolling end---------------*/\n.grp-btn {\n  display: inline-flex;\n}\n.btn-number:active,\n.btn-number:focus {\n  outline: none !important;\n}\n.border-top {\n  border-top: 1px solid #dcdcdc;\n}\n.border-top p {\n  padding: 15px 0px;\n}\n.share {\n  color: #df284d;\n  float: right;\n  margin-top: 4px;\n  cursor: pointer;\n}\n.share i {\n  font-size: 20px;\n  margin-right: 5px;\n  vertical-align: bottom;\n}\n.brand {\n  margin-bottom: 10px;\n}\n.brand h6 {\n  margin-top: 0px !important;\n}\n.add-to-cart {\n  border-radius: 4px;\n  width: 180px;\n  height: 35px;\n  text-align: center;\n  display: inline-grid;\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.remove-from-cart {\n  margin-top: 20px;\n  border-radius: 4px;\n  width: 180px;\n  height: 35px;\n  text-align: center;\n  display: inline-grid;\n  margin-bottom: 20px;\n  font-size: 14px;\n  border: 1px solid #e70000;\n  color: #e70000;\n}\n.quality_outter input {\n  font-size: 12px;\n}\n.qty {\n  padding: 0px 10px;\n  margin: 3px 0px 0px;\n}\nsection {\n  margin-top: 0px;\n}\n.input-group {\n  width: 100%;\n  float: none;\n  padding: 10px 0px;\n}\n.restdet .review a {\n  margin-top: -67px !important;\n}\n.price {\n  font-size: 20px !important;\n}\n.wishlist {\n  float: right;\n}\n.wishlist a {\n  padding: 8px;\n  background-color: #ffffff;\n}\n.wishlist .fa-share-alt {\n  padding: 0px 6px;\n}\n.color-variant {\n  height: 20px;\n  width: 20px;\n  margin: -2px -8px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.offimg {\n  width: 100% !important;\n  height: 100% !important;\n}\n.carousel-indicators li {\n  border-radius: 50%;\n}\n.carousel-inner img {\n  width: 100%;\n  height: 700px;\n  max-height: 700px;\n  max-width: 500px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 25px;\n}\n.product_section {\n  margin-top: 60px;\n  margin-bottom: 100px;\n}\n.images-section-left {\n  position: relative;\n}\n.images-section-left img {\n  border: 1px solid;\n  border-radius: 15px;\n}\n.images-slides {\n  position: absolute;\n  bottom: -50px;\n  width: 95%;\n  left: 10px;\n  overflow-x: auto;\n  height: 155px;\n  display: flex;\n}\n.images-section-left img {\n  border: 1px solid;\n  border-radius: 15px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.images-slides img {\n  max-width: 160px;\n  display: inline-block;\n  float: left;\n  margin-left: 10px;\n  background: #fff;\n  border-radius: 15px;\n  border: 1px solid rgba(37, 73, 77, 0.5);\n  height: 150px;\n  /* box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3); */\n}\n.heart-img {\n  float: right;\n  margin-top: 14px;\n  cursor: pointer;\n}\np.title_shoes {\n  margin-bottom: 0;\n  opacity: 0.8;\n  color: #25494d;\n  font-size: 22px;\n  font-weight: 300;\n  width: 90%;\n}\n.star-rating {\n  float: right;\n  width: 100%;\n}\n.nike-txt-part h2 {\n  display: inline-block;\n  margin-bottom: 10px;\n  color: #25494d;\n  font-size: 28px;\n  font-weight: 300;\n  line-break: 21px;\n}\n.detail-discount {\n  position: relative;\n}\n.detail-discount:before {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  height: 3px;\n  width: 100%;\n  background: #25494d;\n  transform: translateY(-50%);\n}\n.description_txt {\n  margin-top: 70px;\n}\n.description_txt h2,\n.feature h2 {\n  display: inline-block !important;\n  font-size: 18px !important;\n  font-weight: 300 !important;\n  margin-bottom: 10px !important;\n}\n.description_txt p {\n  opacity: 0.8;\n  color: #484848;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 24px;\n}\n.color_outter a {\n  color: var(--primaryColor);\n}\n.add-to-cart_btn button.btn.btn-large {\n  width: 47%;\n  background: var(--primaryColor) !important;\n  padding: 16px;\n  border-radius: 4px;\n  height: 76px;\n  color: #fff !important;\n  font-size: 18px;\n  font-weight: normal;\n  line-height: 24px;\n  text-align: center;\n  border: 1px solid #8ca562;\n  text-transform: uppercase;\n}\n.add-to-cart_btn button.btn.btn-large {\n  height: 55px;\n}\n.tab_margin {\n  margin-top: 100px !important;\n  margin-bottom: 100px !important;\n}\n.product_ul li {\n  display: initial;\n  margin-right: 30px;\n  font-size: 20px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.5);\n  padding-bottom: 10px;\n  position: relative;\n  cursor: pointer;\n}\n.product_ul li.active {\n  color: #000;\n}\n.product_ul li:after {\n  content: \"\";\n  width: 100%;\n  position: absolute;\n  background: transparent;\n  height: 2px;\n  bottom: 0px;\n  left: 0px;\n}\n.product_ul li.active:after {\n  background: #000;\n}\n.product_ul ul {\n  border-bottom: 1px solid #ddd;\n  flex-direction: row;\n  list-style: none;\n  display: flex;\n}\n.content_padding {\n  padding-bottom: 30px;\n}\n.separate_product {\n  position: unset;\n  margin-top: 25px;\n}\n.view_chart {\n  cursor: pointer !important;\n}\n.view_chart:hover {\n  text-decoration: underline;\n}\n.carousel-inner img {\n  border-radius: 5px !important;\n}\n.carousel-control-next-icon {\n  background-color: black;\n}\n.carousel-control-prev-icon {\n  background-color: black;\n}\nbutton.btn.cancel-order {\n  background-color: #000 !important;\n  color: #fff !important;\n}\n.carousel-indicators {\n  bottom: -28px !important;\n}\n.carousel .slick-dots {\n  display: block !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQSwwQ0FBQTtBQUNBO0VBQ0Usd0JBQXdCO0FBbEIxQjtBQW9CQSwyQ0FBQTtBQUNBO0VBQ0Usb0JBQW9CO0FBakJ0QjtBQW9CQTs7RUFFRSx3QkFBd0I7QUFqQjFCO0FBbUJBO0VBQ0UsNkJBQTZCO0FBaEIvQjtBQWtCQTtFQUNFLGlCQUFpQjtBQWZuQjtBQWlCQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFkakI7QUFVQTtFQU9JLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0FBYjFCO0FBaUJBO0VBQ0UsbUJBQW1CO0FBZHJCO0FBYUE7RUFJSSwwQkFBMEI7QUFiOUI7QUFpQkE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixlQUFlO0FBZGpCO0FBaUJBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztBQWRoQjtBQWlCQTtFQUVJLGVBQWU7QUFmbkI7QUFtQkE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBaEJyQjtBQW1CQTtFQUNFLGVBQWU7QUFoQmpCO0FBbUJBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7QUFoQm5CO0FBbUJBO0VBQ0UsNEJBQTRCO0FBaEI5QjtBQW1CQTtFQUNFLDBCQUEwQjtBQWhCNUI7QUFtQkE7RUFDRSxZQUFZO0FBaEJkO0FBZUE7RUFHSSxZQUFZO0VBQ1oseUJBQXlCO0FBZDdCO0FBVUE7RUFRSSxnQkFBZ0I7QUFkcEI7QUFrQkE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQWZqQjtBQWtCQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFmekI7QUFzQkE7RUFHRSxrQkFBa0I7QUFyQnBCO0FBMkJBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBeEJyQjtBQTJCQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7QUF4QnRCO0FBMkJBO0VBQ0Usa0JBQWtCO0FBeEJwQjtBQTJCQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUF4QnJCO0FBMkJBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtBQXhCZjtBQTJCQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQWlCO0tBQWpCLGlCQUFpQjtBQXhCbkI7QUEyQkE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsYUFBYTtFQUNiLGdEQUFBO0FBeEJGO0FBMkJBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBeEJqQjtBQTJCQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtBQXhCWjtBQTJCQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBeEJiO0FBMkJBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUF4QmxCO0FBMkJBO0VBQ0Usa0JBQWtCO0FBeEJwQjtBQTJCQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUF4QjdCO0FBMkJBO0VBQ0UsZ0JBQWdCO0FBeEJsQjtBQTJCQTs7RUFFRSxnQ0FBZ0M7RUFDaEMsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUF4QmhDO0FBMkJBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQXhCbkI7QUEwQkE7RUFDRSwwQkFBMEI7QUF2QjVCO0FBeUJBO0VBQ0UsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUF0QjNCO0FBeUJBO0VBQ0UsWUFBWTtBQXRCZDtBQXlCQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUF0QmpDO0FBeUJBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBRWhCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUF2QmpCO0FBMEJBO0VBQ0UsV0FBVztBQXZCYjtBQTBCQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7QUF2Qlg7QUEwQkE7RUFDRSxnQkFBZ0I7QUF2QmxCO0FBMEJBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQXZCZjtBQTBCQTtFQUNFLG9CQUFvQjtBQXZCdEI7QUEwQkE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBdkJsQjtBQXlCQTtFQUNFLDBCQUEwQjtBQXRCNUI7QUF3QkE7RUFDRSwwQkFBMEI7QUFyQjVCO0FBd0JBO0VBQ0UsNkJBQTZCO0FBckIvQjtBQXVCQTtFQUNFLHVCQUF1QjtBQXBCekI7QUF3QkE7RUFDRSx1QkFBdUI7QUFyQnpCO0FBeUJBO0VBQ0UsaUNBQWlDO0VBQ2pDLHNCQUFzQjtBQXRCeEI7QUF3QkE7RUFDRSx3QkFBd0I7QUFyQjFCO0FBdUJBO0VBQ0UseUJBQXlCO0FBcEIzQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5idG4tbnVtYmVyIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBmb250LXdlaWdodDogNDAwO1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4vLyAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbi8vICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuLy8gICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbi8vICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4vLyAgIGZvbnQtc2l6ZTogMXJlbTtcbi8vICAgbGluZS1oZWlnaHQ6IDE7XG4vLyAgIHdpZHRoOiAyNXB4O1xuLy8gICBoZWlnaHQ6IDI1cHg7O1xuLy8gICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4vLyAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbi8vIH1cbi8qLS0tLS0tLS1pbWcgc2Nyb2xsaW5nLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5pbWFnZXMtc2xpZGVzW19uZ2NvbnRlbnQtc2Fhcy13ZWJzaXRlLWMzMDNdIGltZ1tfbmdjb250ZW50LXNhYXMtd2Vic2l0ZS1jMzAzXSB7XG4gIGhlaWdodDogMTI1cHggIWltcG9ydGFudDtcbn1cbi8qLS0tLS0tLS1pbWcgc2Nyb2xsaW5nIGVuZC0tLS0tLS0tLS0tLS0tLSovXG4uZ3JwLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uYnRuLW51bWJlcjphY3RpdmUsXG4uYnRuLW51bWJlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2RjZGM7XG59XG4uYm9yZGVyLXRvcCBwIHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG4uc2hhcmUge1xuICBjb2xvcjogI2RmMjg0ZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgfVxufVxuXG4uYnJhbmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gIGg2IHtcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYWRkLXRvLWNhcnQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZW1vdmUtZnJvbS1jYXJ0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTcwMDAwO1xuICBjb2xvcjogI2U3MDAwMDtcbn1cblxuLnF1YWxpdHlfb3V0dGVyIHtcbiAgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4ucXR5IHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIG1hcmdpbjogM3B4IDBweCAwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5yZXN0ZGV0IC5yZXZpZXcgYSB7XG4gIG1hcmdpbi10b3A6IC02N3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ud2lzaGxpc3Qge1xuICBmbG9hdDogcmlnaHQ7XG4gIGEge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLmZhLXNoYXJlLWFsdCB7XG4gICAgcGFkZGluZzogMHB4IDZweDtcbiAgfVxufVxuXG4uY29sb3ItdmFyaWFudCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogLTJweCAtOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9mZmltZyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4vLyAuY2Fyb3VzZWwtaXRlbSB7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIC8vIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC8vIGhlaWdodDogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4vLyAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbi8vICAgcmlnaHQ6IDU2JSAhaW1wb3J0YW50O1xuLy8gfVxuXG4uY2Fyb3VzZWwtaW5uZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAwcHg7XG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLnByb2R1Y3Rfc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uaW1hZ2VzLXNlY3Rpb24tbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltYWdlcy1zZWN0aW9uLWxlZnQgaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5pbWFnZXMtc2xpZGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01MHB4O1xuICB3aWR0aDogOTUlO1xuICBsZWZ0OiAxMHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBoZWlnaHQ6IDE1NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW1hZ2VzLXNlY3Rpb24tbGVmdCBpbWcge1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5pbWFnZXMtc2xpZGVzIGltZyB7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM3LCA3MywgNzcsIDAuNSk7XG4gIGhlaWdodDogMTUwcHg7XG4gIC8qIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgKi9cbn1cblxuLmhlYXJ0LWltZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5wLnRpdGxlX3Nob2VzIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogIzI1NDk0ZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4uc3Rhci1yYXRpbmcge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmlrZS10eHQtcGFydCBoMiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMyNTQ5NGQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1icmVhazogMjFweDtcbn1cblxuLmRldGFpbC1kaXNjb3VudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRldGFpbC1kaXNjb3VudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzI1NDk0ZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uZGVzY3JpcHRpb25fdHh0IHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmRlc2NyaXB0aW9uX3R4dCBoMixcbi5mZWF0dXJlIGgyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uX3R4dCBwIHtcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogIzQ4NDg0ODtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5jb2xvcl9vdXR0ZXIgYSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xufVxuLmFkZC10by1jYXJ0X2J0biBidXR0b24uYnRuLmJ0bi1sYXJnZSB7XG4gIHdpZHRoOiA0NyU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlDb2xvcikgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhjYTU2MjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFkZC10by1jYXJ0X2J0biBidXR0b24uYnRuLmJ0bi1sYXJnZSB7XG4gIGhlaWdodDogNTVweDtcbn1cblxuLnRhYl9tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZHVjdF91bCBsaSB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAvLyBvcGFjaXR5OiAwLjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3RfdWwgbGkuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5wcm9kdWN0X3VsIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xufVxuXG4ucHJvZHVjdF91bCBsaS5hY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ucHJvZHVjdF91bCB1bCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGVudF9wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5zZXBhcmF0ZV9wcm9kdWN0IHtcbiAgcG9zaXRpb246IHVuc2V0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLnZpZXdfY2hhcnQge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbi52aWV3X2NoYXJ0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jYXJvdXNlbC1pbm5lciBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAvLyBoZWlnaHQ6IDQycHg7XG4gIC8vIHdpZHRoOiAzMnB4O1xufVxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIC8vIGhlaWdodDogNDJweDtcbiAgLy8gd2lkdGg6IDMycHg7XG59XG5idXR0b24uYnRuLmNhbmNlbC1vcmRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgYm90dG9tOiAtMjhweCAhaW1wb3J0YW50O1xufVxuLmNhcm91c2VsIC5zbGljay1kb3RzIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/pages/products/product-detail/product-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/pages/products/product-detail/product-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../services/seo/seo.service */ "./src/app/services/seo/seo.service.ts");
/* harmony import */ var _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/theme/styleConstants.model */ "./src/app/core/theme/styleConstants.model.ts");
/* harmony import */ var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../shared/models/product.model */ "./src/app/shared/models/product.model.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../../shared/pipes/localization.pipe */ "./src/app/shared/pipes/localization.pipe.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var drift_zoom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! drift-zoom */ "./node_modules/drift-zoom/es/Drift.js");
/* harmony import */ var _layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../../../../layout/shared/product/components/add-on/add-on.component */ "./src/app/layout/shared/product/components/add-on/add-on.component.ts");
/* harmony import */ var _shared_layout_shared_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../../shared/layout-shared/components/questions/questions.component */ "./src/app/layout/shared/layout-shared/components/questions/questions.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");























// declare const $;
let ProductDetailComponent = class ProductDetailComponent {
    constructor(route, http, util, message, router, dialogService, user, cartService, localization, translate, seo, document, window) {
        this.route = route;
        this.http = http;
        this.util = util;
        this.message = message;
        this.router = router;
        this.dialogService = dialogService;
        this.user = user;
        this.cartService = cartService;
        this.localization = localization;
        this.translate = translate;
        this.seo = seo;
        this.document = document;
        this.window = window;
        this.detail = {
            variants: [],
            selectedQuantity: 0
        };
        this.image = '';
        this.mainCategoryIndex = 0;
        this.categoryName = '';
        this.showQuantity = false;
        this.showSupplier = false;
        this.allCheckOrNot = [];
        this.brandId = '';
        this.productId = 0;
        this.supplierBranchId = 0;
        this.variantsArray = [];
        this.cart = [];
        this.unitId = '';
        this.setting = {};
        this.selectedLocation = {};
        this.currency = '';
        this.title = "Product detail";
        this.description = '';
        this.avgRating = 0;
        this.loggedIn = false;
        this.disableAdd = false;
        this.timeInterval = 0;
        this.perValue = '';
        this.selectedIndex = 0;
        this.responseVariants = [];
        this.firstVariantType = 0;
        this.isLoading = false;
        this.isBuyNow = false;
        this.similarProducts = [];
        this.showSize = false;
        this.selectedSize = "";
        this.isTabActive = 0;
        this.tabContent = '';
        // slideConfig = {
        //   'slidesToShow': 3,
        //   'slidesToScroll': 3,
        //   'dots': false,
        //   'arrows': true,
        //   'infinite': false
        // };
        this.slideConfig = {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "dots": true,
            "arrows": false,
            "infinite": false,
            "autoplay": true,
            "autoplaySpeed": 3000
        };
        this.compareProductList = [];
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_10__["StyleVariables"]();
        this.btnInverse = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_3__["StyleConstants"]();
        this.btn = new _core_theme_styleConstants_model__WEBPACK_IMPORTED_MODULE_3__["StyleConstants"]();
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_16__["GlobalVariable"].CURRENCY;
        this.userSubscription = this.user.currentUser
            .subscribe(user => {
            if (!!user && user['access_token']) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles
            .subscribe(style => {
            this.style = style;
            this.btnInverse.color = style.defaultColor;
            this.btnInverse.backgroundColor = '#ffffff';
            this.btnInverse.borderColor = style.defaultColor;
            this.btn.color = '#ffffff';
            this.btn.backgroundColor = style.primaryColor;
            this.btn.borderColor = style.primaryColor;
        });
        this.settingsSubscription = this.util.getSettings
            .subscribe((settings) => {
            if (settings) {
                this.timeInterval = settings['interval'];
                this.settings = settings;
            }
        });
        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
            }
        });
        this.makeSubscribe();
    }
    makeSubscribe() {
        this.getDataSubscribe = this.util.callGetData.
            subscribe((data) => {
            if (data) {
                this.subscribeRoute();
                this.selectedLocation = this.util.getLocalData('locationObj', true);
            }
        });
        this.getDataSubscribe = this.util.getSettings.
            subscribe((data) => {
            if (data) {
                this.setting = data;
            }
        });
    }
    // subscribe route
    subscribeRoute() {
        this.subscription = this.route.queryParams.subscribe(params => {
            if (params.f) {
                params = this.util.decryptData(params.f);
                this.productId = parseInt(params.productId);
                this.supplierBranchId = parseInt(params.supplierBranchId);
                this.categoryId = parseInt(params.category);
                if (params.offer) {
                    this.offer = parseInt(params.offer);
                }
                this.getProductDetail();
            }
        });
    }
    addToRecentlyAdded() {
        if (this.loggedIn) {
            this.http.putData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].updateRecentlyViewed, { productId: this.productId })
                .subscribe(respone => { });
        }
    }
    getProductDetail(product_id) {
        let obj = {
            languageId: this.util.handler.languageId,
            productId: product_id ? product_id : this.productId,
            supplierBranchId: this.supplierBranchId,
            offer: this.offer ? this.offer : 0,
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude
        };
        this.isLoading = true;
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].getProductDetail, obj, false)
            .subscribe(response => {
            if (!!response && response.data) {
                this.window.scrollTo(0, 0);
                this.addToRecentlyAdded();
                this.similarProducts = response.data.similarProduct;
                if (this.similarProducts && this.similarProducts.length) {
                    this.randomProduct = this.similarProducts[Math.floor(Math.random() * this.similarProducts.length)];
                }
                this.clearCompareData();
                this.brandId = response.data.brand_id;
                if (product_id) {
                    if (!response.data.display_price || response.data.display_price < 0) {
                        this.message.alert('info', `${this.localization.transform('product')} ${this.translate.instant('Quantity Not Available')}!`);
                    }
                    else {
                        this.setValueToDetail(response.data);
                    }
                }
                else {
                    this.detail = response.data;
                    this.detailObj = this.detail;
                    this.seo.updateTitle(`${this.detail.name} | ${_core_global__WEBPACK_IMPORTED_MODULE_16__["GlobalVariable"].SITE_NAME}`);
                    this.seo.updateDescription(this.detail.product_desc);
                    this.detail.fixed_price = Number(this.detail.fixed_price).toFixed(2);
                    if (response.data.variants.length) {
                        this.responseVariants = response.data.variants;
                        this.makeVariant(response.data);
                    }
                    else {
                        this.detail.selectedQuantity = 0;
                        this.showQuantity = true;
                        this.productId = this.detail.id;
                        this.unitId = this.productId.toString();
                        this.checkUintIdExist();
                    }
                    this.setQuantity();
                    this.image = this.detail.image_path[0];
                    if (this.settings.isProductCustomTabDescriptionEnable) {
                        this.initTab();
                    }
                }
                this.checkStock(response.data);
                if (this.settings.app_type == 2 && this.settings.disable_zoom_in_product == 0 && this.setting.selected_template != 4)
                    this.initializeImageMagnifier();
            }
            this.isLoading = false;
            this.getCurrency();
        }, (err) => this.isLoading = false);
    }
    initTab() {
        for (let i = 0; i < this.settings.productCustomTabDescriptionLabel.length; i++) {
            let col = this.settings.productCustomTabDescriptionLabel[i];
            if (!!this.detail[col.labelDBColName]) {
                this.isTabActive = i + 1;
                this.tabContent = this.detail[col.labelDBColName];
                break;
            }
        }
    }
    setTabContent(content, flag) {
        this.isTabActive = flag;
        this.tabContent = content;
    }
    checkStock(product) {
        this.detail.isOutOfStock = false;
        let quantity = !!product.quantity ? (Number(product.quantity) || 0) : 0;
        let purchaseQuantity = !!product.purchased_quantity ? (Number(product.purchased_quantity) || 0) : 0;
        if (purchaseQuantity >= quantity) {
            this.detail.isOutOfStock = true;
        }
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    initializeImageMagnifier() {
        (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.delay(500);
            this.productImage.nativeElement['dataset']['zoom'] = this.image;
            new drift_zoom__WEBPACK_IMPORTED_MODULE_18__["default"](this.document.querySelector(".drift-trigger"), {
                paneContainer: this.document.querySelector(".drift-detail"),
                inlinePane: 900,
                inlineOffsetY: -85,
                containInline: true,
                hoverBoundingBox: true
            });
        }))();
    }
    setQuantity() {
        if (this.detail['price_type'])
            this.detail['fixed_price'] = this.detail['hourly_price'][0].price_per_hour;
        if (this.cart.length) {
            this.cart.forEach(cartProduct => {
                if (cartProduct.productId == this.detail.id) {
                    this.detail['selectedQuantity'] = cartProduct['selectedQuantity'];
                    if (this.detail['price_type']) {
                        this.detail['fixed_price'] = cartProduct['fixed_price'];
                    }
                }
            });
        }
    }
    makeVariant(responseData) {
        let data = {}, colorMap = {};
        this.categoryName = responseData.variants[0].variant_name;
        this.firstVariantType = responseData.variants[0].variant_type;
        if (this.settings.not_all_variant_required == 0) {
            responseData.variants[0].variant_values.forEach(value => {
                data[value.product_id] = {
                    subCat: [],
                    name: value.variant_value.toLowerCase(),
                    data: value,
                    isClicked: false
                };
            });
        }
        else {
            responseData.variants.forEach(col => {
                col.variant_values.forEach(value => {
                    data[value.product_id] = {
                        subCat: [],
                        name: value.variant_value.toLowerCase(),
                        data: value,
                        isClicked: false
                    };
                });
            });
        }
        for (let i = 1; i < responseData.variants.length; i++) {
            responseData.variants[i].variant_values.forEach(value => {
                value.isClicked = false;
                if (`${responseData.variants[i].variant_name}+${value.product_id}` in colorMap) {
                    if (data[value.product_id].subCat[colorMap[`${value.color}+${value.product_id}`]])
                        data[value.product_id].subCat[colorMap[`${value.color}+${value.product_id}`]].values.push(value);
                }
                else {
                    colorMap[`${responseData.variants[i].variant_name}+${value.product_id}`] = data[value.product_id] ? data[value.product_id].subCat.length : 0;
                    if (data[value.product_id]) {
                        data[value.product_id].subCat[colorMap[`${responseData.variants[i].variant_name}+${value.product_id}`]] = {
                            name: responseData.variants[i].variant_name,
                            values: [value],
                            isClicked: false,
                            clickedId: '',
                            [responseData.variants[i].variant_name]: colorMap[`${responseData.variants[i].variant_name}+${value.product_id}`]
                        };
                    }
                }
            });
        }
        let finalArray = [];
        let subCatMap = {};
        for (let value in data) {
            if (`${data[value].name}` in subCatMap) {
                if (finalArray[subCatMap[data[value].name]].subCat.length != 0) {
                    finalArray[subCatMap[data[value].name]].subCat = this.util.findUnique(finalArray[subCatMap[data[value].name]].subCat, data[value].subCat);
                }
                else {
                    finalArray[subCatMap[data[value].name]].subCat = data[value].subCat;
                }
            }
            else {
                subCatMap[data[value].name] = finalArray.length;
                finalArray[subCatMap[data[value].name]] = data[value];
            }
        }
        this.variantsArray = finalArray;
        this.detail.variants = JSON.parse(JSON.stringify(this.variantsArray));
    }
    replaceAllValue(index) {
        // if (this.settings.enable_food_varients) {
        //   return;
        // }
        this.showQuantity = false;
        this.detail.variants = JSON.parse(JSON.stringify(this.variantsArray));
        this.detail.variants[index].isClicked = true;
        this.selectedSize = this.detail.variants[index].name;
        if (!this.detail.variants[index].subCat.length) {
            this.lastCallProductDetail(this.detail.variants[index].data);
        }
    }
    replaceNextValues(mainIndex, parentIndex, currentIndex, last, data) {
        // if (this.settings.enable_food_varients) {
        //   return;
        // }
        this.showQuantity = false;
        if (last) {
            this.makeIsClickedTrue(mainIndex, parentIndex, currentIndex);
            this.lastCallProductDetail(data);
        }
        else {
            this.makeIsClickedTrue(mainIndex, parentIndex, currentIndex);
            let index = this.detail.variants[mainIndex].subCat[parentIndex + 1].values.findIndex(x => x.product_id == data.product_id);
            if (index == -1) {
                this.lastCallProductDetail(data);
            }
        }
    }
    makeIsClickedTrue(mainIndex, parentIndex, currentIndex) {
        let array = JSON.parse(JSON.stringify(this.variantsArray[mainIndex].subCat[parentIndex].values));
        this.detail.variants[mainIndex].subCat[parentIndex].values = array;
        this.detail.variants[mainIndex].subCat[parentIndex].values[currentIndex].isClicked = true;
    }
    lastCallProductDetail(data) {
        this.unitId = data.unid;
        this.productId = data.product_id;
        this.getProductDetail(data.product_id);
    }
    decreaseValue() {
        if (this.settings.app_type == 1) {
            this.removeProduct(this.detail);
            return;
        }
        if (this.detail.selectedQuantity <= 0) {
            return;
        }
        this.detail.selectedQuantity -= 1;
        this.checkAdd();
    }
    increaseValue() {
        if (this.settings.app_type == 1) {
            this.addProduct(this.detail);
            return;
        }
        if (this.detail.variants && this.detail.variants.length) {
            if (!this.unitId || this.unitId == this.detail.id) {
                this.message.alert('info', this.translate.instant('Please Choose / Select Variant First'));
                return;
            }
        }
        if (this.disableAdd) {
            return;
        }
        if (this.detail.selectedQuantity >= (Number(this.detail.quantity) - Number(this.detail.purchased_quantity))) {
            this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
            return;
        }
        this.detail.selectedQuantity += 1;
        this.checkAdd();
    }
    checkAdd() {
        if (this.detail.variants && this.detail.variants.length) {
            if (!this.unitId || this.unitId == this.detail.id) {
                this.message.alert('info', this.translate.instant('Please choose / select variant first'));
                this.isBuyNow = false;
                return;
            }
        }
        let key = this.setting.cart_flow.toString();
        let cart = this.cart ? this.cart.slice() : [];
        if (cart.length) {
            if (key == '0') {
                let msg = `Can't Add More Than One Item Or Quantity!`;
                this.openConfirm(msg);
                this.isBuyNow = false;
                return;
            }
            else if (key == '1') {
                let index = cart.findIndex(x => x.unitId == this.unitId);
                if (index == -1) {
                    let msg = `${this.translate.instant("Can't Add More Than One")} ${this.localization.transform('product')}!`;
                    this.openConfirm(msg);
                    this.isBuyNow = false;
                    return;
                }
                else {
                    this.addToCartValues();
                }
            }
            else if (key == '2') {
                let index = cart.findIndex(x => x.unitId == this.unitId);
                if (index !== -1) {
                    let msg = `${this.translate.instant("Can't Add More Than One Quantity")}!`;
                    this.openConfirm(msg);
                    this.isBuyNow = false;
                    return;
                }
                else {
                    this.addToCartValues();
                }
            }
            else {
                this.addToCartValues();
            }
        }
        else {
            this.addToCartValues();
        }
    }
    openConfirm(msg) {
        this.message.confirm(`${this.translate.instant('Clear Your Cart')}`, msg).then(data => {
            if (data.value) {
                this.clearCart();
            }
        });
    }
    clearCart() {
        this.detail.selectedQuantity = 0;
        this.util.setCart([]);
        this.addToCartValues();
    }
    addToCartValues() {
        if (this.detail.adds_on && this.detail.adds_on.length) {
            return this.openAddOnDialog(this.detail);
        }
        if (this.cart.length) {
            if (this.cart[0].supplier_id != this.detail.supplier_id && this.settings.vendor_status == 0) {
                this.message.confirm(`${this.translate.instant('Add This Item To Cart')}`, `${this.translate.instant('Existing Items Will Be Removed From Cart As Your Cart Has Items Of Different')} ${this.localization.transform('supplier')}!`)
                    .then(result => {
                    if (result.value) {
                        this.cart = [];
                        this.addTocart();
                    }
                    else {
                        this.isBuyNow = false;
                        return;
                    }
                });
            }
            else {
                const value = this.cart.findIndex(x => x.unitId == this.unitId);
                if (value > -1) {
                    this.detail.selectedQuantity = this.detail.selectedQuantity;
                    this.cart[value].selectedQuantity = this.detail.selectedQuantity;
                    if (this.cart[value]['selectedQuantity'] <= 0) {
                        this.cart.splice(value, 1);
                    }
                    this.hourlyPrice(value);
                    this.util.setCart(this.cart);
                    if (this.isBuyNow) {
                        this.router.navigate(['/cart']);
                    }
                }
                else {
                    this.addTocart();
                }
            }
        }
        else {
            this.addTocart();
        }
    }
    getCartVarients(productId) {
        let variantsArray = [];
        this.responseVariants.forEach((variant) => {
            variantsArray.push(...variant.variant_values);
        });
        return variantsArray.filter(variant => variant.product_id == productId);
    }
    addTocart() {
        this.detail.handingCharges = this.detail.handling_admin + this.detail.handling_supplier;
        this.detail.unitId = this.unitId;
        this.detail.categoryId = this.categoryId ? this.categoryId : this.detail['category_id'];
        this.hourlyPrice(-1);
        if (this.detail.selectedQuantity > (Number(this.detail.quantity) - Number(this.detail.purchased_quantity))) {
            this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
            return;
        }
        this.detail['selectedQuantity'] = this.detail['selectedQuantity'] || 1;
        let cart = new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_4__["ProductModel"]();
        for (let data in cart) {
            cart[data] = this.detail[data];
        }
        cart['cartVariants'] = this.getCartVarients(this.productId);
        cart.productId = this.productId.toString();
        cart.image_path = cart.image_path.length ? cart.image_path[0] : null;
        this.cart.push(cart);
        this.util.setCart(this.cart);
        if (this.isBuyNow) {
            this.router.navigate(['/cart']);
        }
    }
    hourlyPrice(index) {
        if (this.detail['price_type']) {
            if (this.detail['is_product']) {
                this.timeInterval = 60;
            }
            if (this.detail['selectedQuantity'] * this.timeInterval >= (parseInt(this.detail['hourly_price'][this.detail['hourly_price'].length - 1]['max_hour']))) {
                this.disableAdd = true;
            }
            else {
                this.disableAdd = false;
            }
            this.detail['hourly_price'].forEach(element => {
                if (this.detail['selectedQuantity'] * this.timeInterval >= element['min_hour'] && this.detail['selectedQuantity'] * this.timeInterval < element['max_hour']) {
                    this.detail['fixed_price'] = element['price_per_hour'];
                    if (index > -1) {
                        this.cart[index]['fixed_price'] = element['price_per_hour'];
                    }
                }
            });
        }
    }
    setValueToDetail(data) {
        this.detail.quantity = data.quantity;
        this.detail.purchased_quantity = data.purchased_quantity;
        this.detail.display_price = data.display_price;
        this.detail.image_path = data.image_path;
        this.detail.fixed_price = Number(data.fixed_price).toFixed(2);
        this.detail.discount = data.discount;
        this.detail.product_desc = data.product_desc;
        this.detail.price_type = data.price_type;
        this.detail.handling_supplier = data.handling_supplier;
        this.detail.handling_admin = data.handling_admin;
        this.detail.delivery_charges = data.delivery_charges;
        this.detail.selectedQuantity = 0;
        this.showQuantity = true;
        this.checkUintIdExist();
    }
    checkUintIdExist() {
        if (this.cart.length) {
            const value = this.cart.findIndex(x => x.unitId == this.unitId);
            if (value > -1) {
                this.detail.selectedQuantity = this.cart[value].selectedQuantity;
            }
        }
    }
    rateProduct() {
        if (this.loggedIn) {
            let obj = {
                productId: this.detail['id'],
                supplierBranchId: this.detail['supplier_branch_id']
            };
            this.router.navigate(['orders/rating'], { queryParams: obj });
        }
        else {
            this.message.alert('warning', `${this.translate.instant('Please Login To Continue')}!`);
        }
    }
    viewSupplier(detail) {
        this.router.navigate(['/supplier', 'supplier-detail'], {
            queryParams: {
                sup_id: detail['supplier_id'],
                branch_id: detail['supplier_branch_id'],
                cat_id: this.categoryId,
            }
        });
    }
    locationToggle() {
        this.util.locationToggle.next(true);
    }
    wishlist(status) {
        if (!this.loggedIn) {
            this.message.alert('warning', 'please login first');
            return;
        }
        let param_data = {
            status: +status,
            product_id: this.detail.id
        };
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_5__["ApiUrl"].addToWishlist, param_data, true)
            .subscribe(response => {
            if (!!response && response.data) {
                this.message.toast('success', `${this.localization.transform('product')} ${this.translate.instant('Has Been Successfully')} ${status ? this.translate.instant('Added To') : this.translate.instant('Removed From')} ${this.localization.transform('wishlist')}`);
                this.detail.is_favourite = status;
            }
        });
    }
    onBuyNow() {
        this.isBuyNow = true;
        this.checkAdd();
    }
    /********* Open Add On Dialog *********/
    openAddOnDialog(product) {
        const dialogRef = this.dialogService.open(_layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_19__["AddOnComponent"], {
            header: product['name'],
            width: '45%',
            showHeader: false,
            // contentStyle: { "max-height": "350px", "overflow": "auto" },
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: product,
                addOnItems: product['adds_on']
            }
        });
        dialogRef.onClose.subscribe(() => {
            if (product.customization && product.customization.length) {
                this.router.navigate(['/cart']);
            }
        });
    }
    removeProduct(product) {
        if (product['customization'] && product['customization'].length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.removeFromCart(product);
        }
    }
    addProduct(product) {
        if (product['adds_on'] && product['adds_on'].length) {
            this.openAddOnDialog(product);
            return;
        }
        this.cartService.addToCart(product);
    }
    onImageClick(img) {
        this.image = img;
        this.productImage.nativeElement['dataset']['zoom'] = this.image;
    }
    toAgentList() {
        const url = this.router.url;
        this.util.setRedirectUrl(url);
        if (this.detail['price_type'] && !this.detail.selectedQuantity) {
            this.detail.selectedQuantity += this.detail.duration / this.timeInterval;
        }
        this.util.setLocalData('selected_service', this.detail, true);
        let params = {
            isPkg: '0',
            service_ids: this.detail.id
        };
        // params['date_time'] = moment().unix();
        this.router.navigate(['/cart/agent'], {
            queryParams: params
        });
    }
    onServiceAddOrRemove(service, value) {
        if (value < 0 && service.selectedQuantity <= 0) {
            return;
        }
        if (service.selectedQuantity * this.timeInterval >= service.maxHour && value > 0) {
            this.message.alert('info', this.translate.instant('Maximum Limit Reached'));
            return;
        }
        if (service['price_type']) {
            if (value > 0)
                service.selectedQuantity += service.duration / this.timeInterval;
            else
                service.selectedQuantity -= service.duration / this.timeInterval;
        }
        else {
            if (value > 0) {
                service.selectedQuantity = ++service.selectedQuantity;
            }
            else {
                service.selectedQuantity = --service.selectedQuantity;
            }
        }
        this.cartService.calculateProductHourlyPrice(service);
    }
    openQuestions(service) {
        const dialogRef = this.dialogService.open(_shared_layout_shared_components_questions_questions_component__WEBPACK_IMPORTED_MODULE_20__["QuestionsComponent"], {
            width: '60%',
            showHeader: false,
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                cat_id: service['detailed_sub_category_id'] || service['sub_category_id'] || service['categories_id'] || service['category_id'],
            }
        });
        dialogRef.onClose.subscribe((navigate) => {
            if (navigate) {
                this.toAgentList();
            }
        });
    }
    onBookNow() {
        if (!this.loggedIn) {
            this.message.alert('info', `${this.translate.instant('Please Login First')}!`);
            return;
        }
        if (!this.util.getLocalData('ques_data') && this.detail.is_question) {
            // this.util.clearLocalData('ques_data');
            this.cartService.emptyCart();
            this.openQuestions(this.detail);
        }
        else {
            this.toAgentList();
        }
    }
    goToCart() {
        this.router.navigate(['/cart']);
    }
    onComparePrice() {
        this.canCompareProd = !this.canCompareProd;
        this.isShowCompareBtn = !this.isShowCompareBtn;
        this.compareProductList.push(Object.assign({}, this.detail));
    }
    selectForCompare(event) {
        if (event == null) {
            this.clearCompareData();
            this.showHideCompareBtn();
            return;
        }
        if (this.compareProductList.length >= 3 && event.event.target.checked) {
            this.message.toast("error", "You can compare only 3 products");
            event.event.preventDefault();
            return;
        }
        var existProduct = this.compareProductList.some(x => x.product_id == event.product.product_id);
        if (!existProduct) {
            this.compareProductList.push(event.product);
            this.showHideCompareBtn();
        }
        else {
            this.compareProductList = this.compareProductList.filter(function (obj) {
                return obj.product_id != event.product.product_id;
            });
            this.showHideCompareBtn();
        }
    }
    showHideCompareBtn() {
        if (this.compareProductList.length == 0) {
            this.isCompare = false;
        }
        if (this.compareProductList.length > 1) {
            this.isShowCompareBtn = true;
        }
        else {
            this.isShowCompareBtn = false;
        }
    }
    onCompareProducts() {
        if (this.compareProductList.length <= 0) {
            this.message.toast("error", "Please select product");
            return;
        }
        if (this.compareProductList.length < 2) {
            this.message.toast("error", "Please select atleast 1 products");
            return;
        }
        this.isCompare = true;
        let el = this.document.getElementById('compare_prod');
        el.scrollIntoView({ behavior: "smooth" });
    }
    compareAddCart(event) {
        this.detail = event;
        this.onBuyNow();
    }
    clearCompareData() {
        this.compareProductList = [];
        this.canCompareProd = false;
        this.isShowCompareBtn = false;
    }
    showImage(image) {
        this.imageToView = image;
        this.openImageViewer = true;
    }
    closeImageViewer(event) {
        this.openImageViewer = event;
    }
    trackByImage_pathFn(id, index) {
        return index;
    }
    trackByVariantDetailsFn(id, index) {
        return index;
    }
    trackByVDDetailsn(id, index) {
        return index;
    }
    trackByDataValuesFn(id, index) {
        return index;
    }
    trackBySPFn(id, index) {
        return index;
    }
    trackBySimilarProductFn(id, index) {
        return index;
    }
    trackByUtilDataFn(id, index) {
        return index;
    }
    trackByUtilImageDataFn(id, index) {
        return index;
    }
    trackByVariantsDFn(id, index) {
        return index;
    }
    trackByDetailDataFn(id, index) {
        return index;
    }
    trackByVariantsDetailsDataFn(id, index) {
        return index;
    }
    trackByDataValueFn(id, index) {
        return index;
    }
    trackByImgPathDataFn(id, index) {
        return index;
    }
    trackByVDFn(id, index) {
        return index;
    }
    trackByVariantsDetailsFn(id, index) {
        return index;
    }
    trackByValuesDataFn(id, index) {
        return index;
    }
    trackByCustomTabDescFn(id, index) {
        return index;
    }
    trackBySimilarDataFn(id, index) {
        return index;
    }
    trackByUtilImageFn(id, index) {
        return index;
    }
    trackByImagePathFn(id, index) {
        return index;
    }
    trackByVariantsDataFn(id, index) {
        return index;
    }
    trackByVariantsFn(id, index) {
        return index;
    }
    trackByValueDataFn(id, index) {
        return index;
    }
    trackBySettingsFn(id, index) {
        return index;
    }
    trackByProductFn(id, index) {
        return index;
    }
    trackByImgDataFn(id, index) {
        return index;
    }
    getCurrency() {
        this.util.getSelectedCurrency.subscribe((res) => {
            if (res) {
                this.selected_currency = res;
                if (this.detail) {
                    var obj = Object.assign({}, this.detailObj);
                    obj.display_price = parseFloat(obj.display_price) * this.selected_currency.conversion_rate;
                    obj.fixed_price = parseFloat(obj.fixed_price) * this.selected_currency.conversion_rate;
                    this.detail = Object.assign({}, obj);
                    this.currency = this.selected_currency.currency_name;
                }
            }
        });
    }
    ngOnDestroy() {
        if (!!this.subscription)
            this.subscription.unsubscribe();
        if (!!this.getDataSubscribe)
            this.getDataSubscribe.unsubscribe();
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.cartSubscription)
            this.cartSubscription.unsubscribe();
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
        // $("#img").modal('hide');
        let componentInstance = this.dialogService.dialogComponentRef;
        if (componentInstance) {
            componentInstance.destroy();
        }
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__["DialogService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_14__["CartService"] },
    { type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateService"] },
    { type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_1__["WINDOW"],] }] }
];
ProductDetailComponent.propDecorators = {
    productImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["ViewChild"], args: ['productImage', { static: false },] }]
};
ProductDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-product-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/product-detail/product-detail.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 1 }))
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/layout/pages/products/product-detail/product-detail.component.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../../../shared/layout-shared/components/compare-products/compare-products.component.scss */ "./src/app/layout/shared/layout-shared/components/compare-products/compare-products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_7__["MessagingService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__["DialogService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_14__["CartService"],
        _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_15__["LocalizationPipe"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateService"],
        _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__["SeoService"], Object, Window])
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0LWxpc3RpbmctYnktYnJhbmQvcHJvZHVjdC1saXN0aW5nLWJ5LWJyYW5kLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProductListingByBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingByBrandComponent", function() { return ProductListingByBrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _shared_models_appSettings_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../shared/models/appSettings.model */ "./src/app/shared/models/appSettings.model.ts");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../layout/shared/product/components/add-on/add-on.component */ "./src/app/layout/shared/product/components/add-on/add-on.component.ts");













let ProductListingByBrandComponent = class ProductListingByBrandComponent {
    constructor(cartService, utilityService, http, userService, dialogService, router) {
        this.cartService = cartService;
        this.utilityService = utilityService;
        this.http = http;
        this.userService = userService;
        this.dialogService = dialogService;
        this.router = router;
        this.brandId = '';
        this.isLoading = false;
        this.cart = [];
        this.sameBrandProducts = [];
        this.loggedIn = false;
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_1__["GlobalVariable"].CURRENCY;
    }
    ngOnInit() {
        this.cartSubscription = this.utilityService.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
            }
        });
        this.userSubscription = this.userService.currentUser
            .subscribe(user => {
            if (!!user && user['access_token']) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
        this.fetch();
    }
    fetch() {
        let brand_ids = [];
        brand_ids.push(this.brandId);
        const param_data = {
            latitude: this.utilityService.handler.latitude,
            longitude: this.utilityService.handler.longitude,
            languageId: this.utilityService.handler.languageId,
            // type: this.settings.app_type,
            offset: 0,
            limit: 4,
            subCategoryId: [],
            supplier_ids: [],
            variant_ids: [],
            need_agent: 0,
            is_availability: 1,
            brand_ids,
            is_discount: 0,
            low_to_high: 1,
            max_price_range: 50000,
            min_price_range: 0
        };
        this.isLoading = true;
        this.isLoading = true;
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_3__["ApiUrl"].filterProducts, param_data, false)
            .subscribe((response) => {
            if (!!response && response.data) {
                this.sameBrandProducts = response.data.product;
                this.sameBrandProducts.map(data => {
                    this.utilityService.productPriceToFloat(data);
                    data['avg_rating'] = Number.parseFloat(data['avg_rating']).toFixed(1);
                    data['discount_price'] = Math.round(((data.display_price - data.fixed_price) / data.display_price) * 100);
                    data['selectedQuantity'] = 0;
                    if (data['price_type']) {
                        data['maxHour'] = data['hourly_price'][data['hourly_price'].length - 1]['max_hour'] - this.settings.interval;
                        if (data['discount'] && data['hourly_price'][0]['discount_price']) {
                            data['fixed_price'] = data['hourly_price'][0]['discount_price'];
                            data['display_price'] = data['hourly_price'][0]['price_per_hour'];
                            data['discount_price'] = Math.round(((data['hourly_price'][0]['price_per_hour'] - data['hourly_price'][0]['discount_price']) / data['hourly_price'][0]['price_per_hour']) * 100);
                        }
                        else {
                            data['fixed_price'] = data['hourly_price'][0]['price_per_hour'];
                        }
                    }
                    if (this.cart.length) {
                        this.cart.forEach(cartProduct => {
                            if (cartProduct.productId == data.product_id) {
                                data['selectedQuantity'] = cartProduct['selectedQuantity'];
                                if (data['price_type']) {
                                    data['fixed_price'] = cartProduct['fixed_price'];
                                }
                                if (!!cartProduct['customization']) {
                                    data['customization'] = cartProduct['customization'];
                                }
                            }
                        });
                    }
                });
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    addProduct(product) {
        if (product.adds_on && product.adds_on.length && this.settings.app_type == 1) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.addToCart(product);
            return;
        }
    }
    removeProduct(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item['customization'] && item['customization'].length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.removeFromCart(product);
        }
    }
    productDetail(data) {
        if (this.settings.app_type != 1) {
            let obj = {
                productId: data.parent_id || data.product_id,
                supplierBranchId: data.supplier_branch_id,
                category: data.category_id
            };
            data.name = data.name.replace(/ &/g, "-");
            obj = Object.assign(Object.assign({}, this.utilityService.handler), obj);
            this.router.navigate(["/", this.settings.app_type, "products", "product-detail", data.name], {
                queryParams: { f: this.utilityService.encryptData(obj) }
            });
        }
    }
    /********* Open Add On Dialog *********/
    openAddOnDialog(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item) {
            product.customization = item.customization;
        }
        const dialogRef = this.dialogService.open(_layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_12__["AddOnComponent"], {
            header: product['name'],
            width: '50%',
            showHeader: false,
            // contentStyle: { "max-height": "350px", "overflow": "auto" },
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: Object.assign({}, product),
                addOnItems: product['adds_on']
            }
        });
        dialogRef.onClose.subscribe(() => {
            if (product.customization && product.customization.length) {
                delete product.customization;
            }
        });
    }
    trackBySameBrandFn(id, index) {
        return index;
    }
    trackBySkeletonFn(id, index) {
        return index;
    }
};
ProductListingByBrandComponent.ctorParameters = () => [
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProductListingByBrandComponent.propDecorators = {
    settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }],
    brandId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Input"] }]
};
ProductListingByBrandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-product-listing-by-brand',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-listing-by-brand.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-listing-by-brand.component.scss */ "./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProductListingByBrandComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/products.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/pages/products/products.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_supplier_supplier_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/supplier/supplier.module */ "./src/app/layout/shared/supplier/supplier.module.ts");
/* harmony import */ var _shared_product_product_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/product/product.module */ "./src/app/layout/shared/product/product.module.ts");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-zoom */ "./node_modules/ngx-image-zoom/__ivy_ngcc__/fesm2015/ngx-image-zoom.js");
/* harmony import */ var _products_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products.routing */ "./src/app/layout/pages/products/products.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/layout/pages/products/product-detail/product-detail.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _discounted_products_discounted_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./discounted-products/discounted-products.component */ "./src/app/layout/pages/products/discounted-products/discounted-products.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/layout-shared/layout-shared.module */ "./src/app/layout/shared/layout-shared/layout-shared.module.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/layout/pages/products/wishlist/wishlist.component.ts");
/* harmony import */ var _product_listing_by_brand_product_listing_by_brand_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-listing-by-brand/product-listing-by-brand.component */ "./src/app/layout/pages/products/product-listing-by-brand/product-listing-by-brand.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/layout/pages/products/category-detail/category-detail.component.ts");
/* harmony import */ var _category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category-listing/category-listing.component */ "./src/app/layout/pages/products/category-listing/category-listing.component.ts");
/* harmony import */ var _unified_search_unified_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./unified-search/unified-search.component */ "./src/app/layout/pages/products/unified-search/unified-search.component.ts");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _view_more_products_view_more_products_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-more-products/view-more-products.component */ "./src/app/layout/pages/products/view-more-products/view-more-products.component.ts");
/* harmony import */ var _category_wise_products_category_wise_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./category-wise-products/category-wise-products.component */ "./src/app/layout/pages/products/category-wise-products/category-wise-products.component.ts");
/* harmony import */ var _view_all_categories_view_all_categories_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-all-categories/view-all-categories.component */ "./src/app/layout/pages/products/view-all-categories/view-all-categories.component.ts");








/******************************** components ******************************/















let ProductsModule = class ProductsModule {
};
ProductsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [
            _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailComponent"],
            // ProductListingComponent,
            _discounted_products_discounted_products_component__WEBPACK_IMPORTED_MODULE_11__["DiscountedProductsComponent"],
            _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_14__["WishlistComponent"],
            _product_listing_by_brand_product_listing_by_brand_component__WEBPACK_IMPORTED_MODULE_15__["ProductListingByBrandComponent"],
            _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_16__["CategoryDetailComponent"],
            _category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_17__["CategoryListingComponent"],
            _unified_search_unified_search_component__WEBPACK_IMPORTED_MODULE_18__["UnifiedSearchComponent"],
            _view_more_products_view_more_products_component__WEBPACK_IMPORTED_MODULE_20__["ViewMoreProductsComponent"],
            _category_wise_products_category_wise_products_component__WEBPACK_IMPORTED_MODULE_21__["CategoryWiseProductsComponent"],
            _view_all_categories_view_all_categories_component__WEBPACK_IMPORTED_MODULE_22__["ViewAllCategoriesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _shared_layout_shared_layout_shared_module__WEBPACK_IMPORTED_MODULE_13__["LayoutSharedModule"],
            _shared_product_product_module__WEBPACK_IMPORTED_MODULE_3__["ProductModule"],
            _shared_supplier_supplier_module__WEBPACK_IMPORTED_MODULE_2__["SupplierModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _products_routing__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_4__["NgxImageZoomModule"],
            ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_19__["SlickCarouselModule"]
        ],
        providers: [
            primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_10__["DialogService"]
        ]
    })
], ProductsModule);



/***/ }),

/***/ "./src/app/layout/pages/products/products.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/pages/products/products.routing.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _category_wise_products_category_wise_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-wise-products/category-wise-products.component */ "./src/app/layout/pages/products/category-wise-products/category-wise-products.component.ts");
/* harmony import */ var _category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-listing/category-listing.component */ "./src/app/layout/pages/products/category-listing/category-listing.component.ts");
/* harmony import */ var _core_guards_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/guards/auth-guard/auth-guard.service */ "./src/app/core/guards/auth-guard/auth-guard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/layout/pages/products/product-detail/product-detail.component.ts");
/* harmony import */ var _product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-listing/product-listing.component */ "./src/app/layout/pages/products/product-listing/product-listing.component.ts");
/* harmony import */ var _discounted_products_discounted_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./discounted-products/discounted-products.component */ "./src/app/layout/pages/products/discounted-products/discounted-products.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/layout/pages/products/wishlist/wishlist.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/layout/pages/products/category-detail/category-detail.component.ts");
/* harmony import */ var _unified_search_unified_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./unified-search/unified-search.component */ "./src/app/layout/pages/products/unified-search/unified-search.component.ts");
/* harmony import */ var _view_more_products_view_more_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-more-products/view-more-products.component */ "./src/app/layout/pages/products/view-more-products/view-more-products.component.ts");
/* harmony import */ var _view_all_categories_view_all_categories_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-all-categories/view-all-categories.component */ "./src/app/layout/pages/products/view-all-categories/view-all-categories.component.ts");







/**************************** component pages *************************************/








const routes = [
    {
        path: 'product-detail/:seovalue', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailComponent"], data: {
            title: 'Product Detail',
            description: 'Product Description',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'product-listing/:seovalue', component: _product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_8__["ProductListingComponent"], data: {
            title: 'Product Listing',
            description: 'Product Description',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'all-discounted-products', component: _discounted_products_discounted_products_component__WEBPACK_IMPORTED_MODULE_9__["DiscountedProductsComponent"], data: {
            title: 'Offers',
            description: 'Offers Listing',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'view-more-products', component: _view_more_products_view_more_products_component__WEBPACK_IMPORTED_MODULE_13__["ViewMoreProductsComponent"], data: {
            title: 'Products',
            description: 'Products Listing',
            keyword: 'shopping, ecommerce,food'
        }
    },
    {
        path: 'category-details', component: _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDetailComponent"], data: {
            title: 'Subscription',
            description: 'Subscription Listing',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["WishlistComponent"], canActivate: [_core_guards_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]], data: {
            title: 'wishlist',
            description: 'wishlist Description',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'category-listing', component: _category_listing_category_listing_component__WEBPACK_IMPORTED_MODULE_2__["CategoryListingComponent"], data: {
            title: 'category listing',
            description: 'category Description',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'search', component: _unified_search_unified_search_component__WEBPACK_IMPORTED_MODULE_12__["UnifiedSearchComponent"], data: {
            title: 'Listing',
            description: 'Description',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'list', component: _category_wise_products_category_wise_products_component__WEBPACK_IMPORTED_MODULE_1__["CategoryWiseProductsComponent"], data: {
            title: 'Listing',
            description: 'Listing',
            keyword: 'shopping, ecommerce'
        }
    },
    {
        path: 'all-categories', component: _view_all_categories_view_all_categories_component__WEBPACK_IMPORTED_MODULE_14__["ViewAllCategoriesComponent"], data: {
            title: 'Categories',
            description: 'All Categories',
            keyword: 'shopping, ecommerce'
        }
    }
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/layout/pages/products/unified-search/unified-search.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/pages/products/unified-search/unified-search.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy91bmlmaWVkLXNlYXJjaC91bmlmaWVkLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/pages/products/unified-search/unified-search.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/pages/products/unified-search/unified-search.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UnifiedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnifiedSearchComponent", function() { return UnifiedSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/product/components/add-on/add-on.component */ "./src/app/layout/shared/product/components/add-on/add-on.component.ts");
/* harmony import */ var _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/models/filters.model */ "./src/app/shared/models/filters.model.ts");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);














let UnifiedSearchComponent = class UnifiedSearchComponent {
    constructor(route, util, http, cartService, dialogService, user, window) {
        this.route = route;
        this.util = util;
        this.http = http;
        this.cartService = cartService;
        this.dialogService = dialogService;
        this.user = user;
        this.window = window;
        this.search = "";
        this.products = [];
        this.suppliers = [];
        this.cart = [];
        this.isLoading = false;
        this.timeInterval = 0;
        this.loggedIn = false;
        this.productstate = {
            hideSupplier: false
        };
        this.productClass = 'col-md-4';
        this.supplierClass = 'col-md-4';
        this.productPagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__["PaginationModel"]();
        this.supplierPagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_7__["PaginationModel"]();
        this.productPagination.perPage = 10;
        this.supplierPagination.perPage = 10;
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles
            .subscribe((styles) => {
            this.style = styles;
        });
        this.settingsSubscription = this.util.getSettings
            .subscribe((settings) => {
            if (settings) {
                switch (settings.app_type) {
                    case 1:
                        if (settings.selected_template == 1) {
                            this.productClass = 'col-md-6';
                            this.supplierClass = 'col-md-6';
                        }
                }
                this.timeInterval = settings['interval'];
                this.productstate.hideSupplier = !!settings.is_single_vendor;
                this.settings = settings;
            }
        });
        this.userSubscription = this.user.currentUser.subscribe(user => {
            if (!!user && user["access_token"]) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
            }
        });
        this.routeSubscription = this.route.queryParams.subscribe(params => {
            if (params) {
                this.search = params.search;
                this.getProducts(false);
                this.getSuppliers();
            }
        });
    }
    getProducts(is_page_change) {
        this.isLoading = true;
        if (!is_page_change) {
            this.productPagination.currentPage = 1;
            this.productPagination.offset = 0;
        }
        let param_data = Object.assign(Object.assign({}, new _shared_models_filters_model__WEBPACK_IMPORTED_MODULE_5__["FiltersModel"]()), { languageId: this.util.handler.languageId, offset: this.productPagination.offset, limit: this.productPagination.perPage, latitude: this.util.handler.latitude, longitude: this.util.handler.longitude, product_name: this.search });
        const category = this.util.getLocalData('selected_category', true);
        if (this.settings.isCustomFlow && category) {
            param_data['categoryId'] = category.id;
        }
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_12__["ApiUrl"].filterProducts, param_data, false)
            .subscribe((response) => {
            if (!!response && response.data) {
                this.productPagination.count = response.data.count;
                this.products = response.data.product;
                this.products.map(data => {
                    this.util.productPriceToFloat(data);
                    data['avg_rating'] = Number.parseFloat(data['avg_rating']).toFixed(1);
                    data['discount_price'] = Math.round(((data.display_price - data.fixed_price) / data.display_price) * 100);
                    data['selectedQuantity'] = 0;
                    if (data['price_type']) {
                        data['maxHour'] = data['hourly_price'][data['hourly_price'].length - 1]['max_hour'] - this.timeInterval;
                        if (data['discount'] && data['hourly_price'][0]['discount_price']) {
                            data['fixed_price'] = data['hourly_price'][0]['discount_price'];
                            data['display_price'] = data['hourly_price'][0]['price_per_hour'];
                            data['discount_price'] = Math.round(((data['hourly_price'][0]['price_per_hour'] - data['hourly_price'][0]['discount_price']) / data['hourly_price'][0]['price_per_hour']) * 100);
                        }
                        else {
                            data['fixed_price'] = data['hourly_price'][0]['price_per_hour'];
                        }
                    }
                    if (this.cart.length) {
                        this.cart.forEach(cartProduct => {
                            if (cartProduct.productId == data.product_id) {
                                data['selectedQuantity'] = cartProduct['selectedQuantity'];
                                if (data['price_type']) {
                                    data['fixed_price'] = cartProduct['fixed_price'];
                                }
                                if (!!cartProduct['customization']) {
                                    data['customization'] = cartProduct['customization'];
                                }
                            }
                        });
                    }
                });
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    getSuppliers() {
        this.isLoading = true;
        let param_data = {
            languageId: this.util.handler.languageId,
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude,
            search: this.search,
            sort_by: 0,
            offset: moment__WEBPACK_IMPORTED_MODULE_13__().format('Z')
        };
        const category = this.util.getLocalData('selected_category', true);
        if (this.settings.isCustomFlow && category) {
            param_data['categoryId'] = category.id;
        }
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_12__["ApiUrl"].getHomeSuppliers, param_data)
            .subscribe(response => {
            if (!!response && response.data) {
                this.suppliers = response.data;
                this.suppliers.map((data) => {
                    parseFloat(data["rating"]);
                    data["display_supplier_image"] = data["supplier_image"];
                    data["display_logo"] = data["logo"];
                });
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    pageChange(event) {
        this.productPagination.currentPage = event;
        this.productPagination.offset = event > 1 ? (event - 1) * this.productPagination.perPage : 0;
        this.getProducts(true);
        this.window.scrollTo(0, 0);
    }
    addProduct(product) {
        if (product['is_product_adds_on'] !== 1) {
            this.cartService.addToCart(product, this.products);
            return;
        }
        this.openAddOnDialog(product);
    }
    removeProduct(product) {
        if (product['customization'] && product['customization'].length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.removeFromCart(product);
        }
    }
    openAddOnDialog(product) {
        const dialogRef = this.dialogService.open(_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_4__["AddOnComponent"], {
            header: product['name'],
            width: '45%',
            showHeader: false,
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: product,
                addOnItems: product['adds_on']
            }
        });
    }
    trackByProductsFn(id, index) {
        return index;
    }
    trackBySameBrandFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
        if (!!this.routeSubscription)
            this.routeSubscription.unsubscribe();
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
        if (!!this.cartSubscription)
            this.cartSubscription.unsubscribe();
    }
};
UnifiedSearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"] },
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_6__["WINDOW"],] }] }
];
UnifiedSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-unified-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unified-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/unified-search/unified-search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./unified-search.component.scss */ "./src/app/layout/pages/products/unified-search/unified-search.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
        _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
        Window])
], UnifiedSearchComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/view-all-categories/view-all-categories.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/pages/products/view-all-categories/view-all-categories.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy92aWV3LWFsbC1jYXRlZ29yaWVzL3ZpZXctYWxsLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/pages/products/view-all-categories/view-all-categories.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/pages/products/view-all-categories/view-all-categories.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ViewAllCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllCategoriesComponent", function() { return ViewAllCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_date_date_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/date/date.service */ "./src/app/services/date/date.service.ts");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _services_window_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/window/window.service */ "./src/app/services/window/window.service.ts");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);

















let ViewAllCategoriesComponent = class ViewAllCategoriesComponent {
    constructor(util, http, user, cartService, dialogService, translate, router, dateService, document, window) {
        this.util = util;
        this.http = http;
        this.user = user;
        this.cartService = cartService;
        this.dialogService = dialogService;
        this.translate = translate;
        this.router = router;
        this.dateService = dateService;
        this.document = document;
        this.window = window;
        this.products = [];
        this.allProducts = [];
        this.categoryData = [];
        this.popularProducts = [];
        this.cart = [];
        this.currency = '';
        this.supplierId = '';
        this.search = '';
        this.tabOffset = 0;
        this.loggedIn = false;
        this.hoverIndex = -1;
        this.categoryIndex = 0;
        this.pagePosition = {};
        this.productstate = {
            hideSupplier: true
        };
        this.isLoading = false;
        this.siteName = '';
        this.slideConfig = {
            "slidesToShow": 5,
            "slidesToScroll": 1,
            "dots": true,
            "arrows": true,
            "infinite": false,
            "autoplay": true,
            "autoplaySpeed": 3000
        };
        // this.currency = GlobalVariable.CURRENCY;
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_2__["PaginationModel"]();
        this.pagination.perPage = 10;
        this.pagination.currentPage = 1;
        this.pagination.offset = 0;
        this.siteName = _core_global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"].SITE_NAME;
        this.userSubscription = this.user.currentUser
            .subscribe(user => {
            if (!!user && user['access_token']) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
        this.onResize();
    }
    onResize() {
        let width = window.innerWidth;
        if (width <= 400) {
            this.slideConfig.slidesToShow = 1;
        }
        else if (width > 400 && width <= 812) {
            this.slideConfig.slidesToShow = 2;
        }
        else if (width > 812 && width <= 1024) {
            this.slideConfig.slidesToShow = 3;
        }
        else {
            this.slideConfig.slidesToShow = 5;
        }
    }
    onWindowScroll() {
        for (let key in this.pagePosition) {
            this.pagePosition[key] = this.document.getElementById(key)
                ? this.pagePosition[key] < (this.document.getElementById(key).offsetTop - 180) ? this.document.getElementById(key).offsetTop - 180 : this.pagePosition[key]
                : null;
        }
        const positions = Object.keys(this.pagePosition);
        const lastIndex = positions.length - 1;
        const offset = this.window.pageYOffset - 650;
        for (let index = 0; index < positions.length; index++) {
            if (index === 0) {
                if (this.pagePosition[`${positions[index]}`] !== undefined &&
                    offset < this.pagePosition[`${positions[index + 1]}`]) {
                    this.categoryIndex = index;
                    break;
                }
                else {
                    continue;
                }
            }
            else if (index === lastIndex) {
                if (this.pagePosition[`${positions[lastIndex]}`] &&
                    offset > this.pagePosition[`${positions[lastIndex]}`]) {
                    this.categoryIndex = lastIndex;
                    break;
                }
                else {
                    continue;
                }
            }
            else {
                if (this.pagePosition[`${positions[index]}`]
                    && offset > this.pagePosition[`${positions[index]}`] &&
                    offset < this.pagePosition[`${positions[index + 1]}`]) {
                    this.categoryIndex = index;
                    break;
                }
            }
        }
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles
            .subscribe((style) => {
            this.style = style;
        });
        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
            }
        });
        this.getSettings();
        this.dataSubscribe();
        this.getCategories();
        this.getPopularProducts();
    }
    getCategories() {
        this.util.getLanguageCategoryData
            .subscribe(categories => {
            if (categories) {
                this.categoryData = (categories.english).slice();
            }
        });
    }
    dataSubscribe() {
        this.getDataSubscription = this.util.callGetData.
            subscribe((data) => {
            if (data) {
                this.currency = _core_global__WEBPACK_IMPORTED_MODULE_5__["GlobalVariable"].CURRENCY;
                this.getDetails();
            }
        });
    }
    getSettings() {
        this.settingsSubscription = this.util.getSettings
            .subscribe((settings) => {
            if (settings) {
                this.settings = settings;
            }
        });
    }
    getDetails() {
        this.isLoading = true;
        let param_data = {
            languageId: this.util.handler.languageId,
            supplier_id: this.settings.single_vendor_id,
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude,
            offset: this.pagination.offset,
            limit: this.pagination.perPage
        };
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].getSupplierDetailProduct, param_data)
            .subscribe(response => {
            if (!!response && response.data) {
                this.pagination.count = response.data.count;
                this.supplierDetail = response.data.supplier_detail;
                this.todaySupplierTimings();
                this.allProducts = new Array();
                this.allProducts.push(...response.data.product);
                this.allProducts.forEach(data => {
                    if (!data.value || !data.value.length)
                        return;
                    data.value.map(product => {
                        product['image'] = this.util.thumbnail(product['image_path']);
                        if (product.display_price != product.fixed_price) {
                            product["discount"] = Math.round(((product.display_price - product.fixed_price) / product.display_price) * 100);
                        }
                        product["selectedQuantity"] = 0;
                        if (this.cart.length) {
                            this.cart.forEach(cartProduct => {
                                if (cartProduct.productId == product.product_id) {
                                    product['selectedQuantity'] = cartProduct['selectedQuantity'];
                                    product['customization'] = cartProduct['customization'];
                                }
                            });
                        }
                        this.util.productPriceToFloat(product);
                        product["discount"] = Math.round(((product.display_price - product.fixed_price) / product.display_price) * 100);
                    });
                });
                if (this.settings.isCustomFlow) {
                    let selectedCat = this.util.getLocalData('selected_category', true);
                    this.products = this.allProducts.filter(el => el.category_id == selectedCat.id);
                }
                else {
                    this.products = this.allProducts.slice();
                }
                this.initialPagePosition();
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    initialPagePosition() {
        if (this.products && this.products.length) {
            for (let i = 0; i < this.products.length; i++) {
                this.pagePosition[`${i}`] = 0;
            }
        }
    }
    onImageLoad(product) {
        product.image = product.image_path;
    }
    categorySelect(index) {
        let el = this.document.getElementById(index);
        el.scrollIntoView({ behavior: "smooth" });
    }
    getPopularProducts() {
        const queryParams = {
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude,
            languageId: this.util.handler.languageId,
            // type: this.settings.app_type,
            offset: 0,
            limit: 8
        };
        this.isLoading = true;
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].getPopularProduct, queryParams, true, true).subscribe((serverResponse) => {
            if (serverResponse && serverResponse.status == 200) {
                this.popularProducts = serverResponse.data.product.map((item) => {
                    item['avg_rating'] = Number.parseFloat(item['avg_rating']).toFixed(1);
                    item['image'] = this.util.thumbnail(item['image_path']);
                    item["selectedQuantity"] = 0;
                    if (this.cart.length) {
                        this.cart.forEach(cartProduct => {
                            if (cartProduct.productId == item.product_id) {
                                item['selectedQuantity'] = cartProduct['selectedQuantity'];
                            }
                        });
                    }
                    if (item['price_type']) {
                        item['maxHour'] = item['hourly_price'][item['hourly_price'].length - 1]['max_hour'] - this.settings.interval;
                        if (item['discount'] && item['hourly_price'][0]['discount_price']) {
                            item['fixed_price'] = item['hourly_price'][0]['discount_price'];
                            item['display_price'] = item['hourly_price'][0]['price_per_hour'];
                            item["discountPercentage"] = parseFloat((((item.display_price - item.fixed_price) / item.display_price) * 100).toFixed(2));
                        }
                        else {
                            item['fixed_price'] = item['hourly_price'][0]['price_per_hour'];
                        }
                    }
                    else {
                        this.util.productPriceToFloat(item);
                        item["discountPercentage"] = parseFloat((((item.display_price - item.fixed_price) / item.display_price) * 100).toFixed(2));
                        item["discount"] = Math.round(item.discountPercentage);
                    }
                    return item;
                });
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    todaySupplierTimings() {
        if (this.supplierDetail.timing && this.supplierDetail.timing.length) {
            const today = this.dateService.getDay(moment__WEBPACK_IMPORTED_MODULE_16__().format('dddd').toLowerCase());
            const todayTimes = this.supplierDetail.timing.find((i) => i.week_id == today);
            if (todayTimes) {
                let startTime = todayTimes.start_time.split(':');
                let endTime = todayTimes.end_time.split(':');
                const openingTime = moment__WEBPACK_IMPORTED_MODULE_16__().set('h', startTime[0]).set('m', startTime[1]).set('s', startTime[2]);
                const closeTime = moment__WEBPACK_IMPORTED_MODULE_16__().set('h', endTime[0]).set('m', endTime[1]).set('s', endTime[2]);
                this.supplierDetail['todayTimes'] = {
                    is_open: todayTimes.is_open,
                    startTime: openingTime.format('LT'),
                    endTime: closeTime.format('LT'),
                    day: this.dateService.getDayName(today)
                };
                if (moment__WEBPACK_IMPORTED_MODULE_16__().isBefore(openingTime, 'm') || moment__WEBPACK_IMPORTED_MODULE_16__().isAfter(closeTime)) {
                    this.supplierDetail['todayTimes']['is_open'] = 0;
                }
                this.productstate.hideQuantity = this.supplierDetail['todayTimes']['is_open'] == 0 ? true : false;
            }
        }
    }
    supplierList(category) {
        // const queryParams = { cat_id: category.id, cat_name: category.name }
        // if (category.menu_type == 1 && category.sub_category && category.sub_category.length) {
        //   queryParams['n_lvl'] = 1
        // }
        // let queryParams = { supplierId:  }
        // this.router.navigate(['/products/listing'], { queryParams });
        // let queryParams = {
        //   supplierId: this.settings.single_vendor_id,
        //   cat_id: category.id
        // }
        // this.router.navigate(["products/listing"], {
        //   queryParams: queryParams
        // });
        let seoValue = (category.name).replace(/ &/g, '-');
        let param_obj = {};
        Object.assign(param_obj, this.util.handler);
        param_obj['subCatId'] = [category.id];
        param_obj['category'] = category.id;
        param_obj['path'] = [category.name];
        param_obj['supplierId'] = [this.settings.single_vendor_id];
        param_obj['multi_b'] = this.supplierDetail.is_multi_branch;
        this.router.navigate(['/products', 'product-listing', seoValue], {
            queryParams: { f: this.util.encryptData(param_obj) }
        });
    }
    onSubmitNewsLetter(form) {
        console.log(form);
    }
    toProducts(category) {
        let param_obj = {};
        Object.assign(param_obj, this.util.handler);
        param_obj['subCatId'] = [category.id];
        param_obj['category'] = category.id;
        param_obj['path'] = [category.name];
        param_obj['supplierId'] = [this.settings.single_vendor_id];
        param_obj['multi_b'] = this.supplierDetail.is_multi_branch;
        this.router.navigate(['products', 'list'], {
            queryParams: { f: this.util.encryptData(param_obj) }
        });
    }
    pageChange(event) {
        this.pagination.currentPage = event;
        this.pagination.offset = event > 1 ? (event - 1) * this.pagination.perPage : 0;
        this.getDetails();
        this.window.scrollTo(0, 350);
        // this.categorySelect(1);
    }
    onSeeMore() {
        this.router.navigate(['/', 'products', 'all-discounted-products'], {
            queryParams: { type: 1 }
        });
    }
    trackByCatFn(id, index) {
        return index;
    }
    trackByProductsDataFn(id, index) {
        return index;
    }
    trackBySupplierFn(id, index) {
        return index;
    }
    trackByProductFn(id, index) {
        return index;
    }
    trackByUtilFakeListFn(id, index) {
        return index;
    }
    trackByGenFakeListFn(id, index) {
        return index;
    }
    trackByPPFn(id, index) {
        return index;
    }
    trackByCategoryDataFn(id, index) {
        return index;
    }
    trackByOfferDataFn(id, index) {
        return index;
    }
    trackBySectionsFn(id, index) {
        return index;
    }
    trackByFakeListFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
        if (!!this.getDataSubscription)
            this.getDataSubscription.unsubscribe();
        if (!!this.cartSubscription)
            this.cartSubscription.unsubscribe();
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
        let componentInstance = this.dialogService.dialogComponentRef;
        if (componentInstance) {
            componentInstance.destroy();
        }
    }
};
ViewAllCategoriesComponent.ctorParameters = () => [
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"] },
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__["DialogService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_date_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"],] }] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["Inject"], args: [_services_window_window_service__WEBPACK_IMPORTED_MODULE_6__["WINDOW"],] }] }
];
ViewAllCategoriesComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ['window:resize', ['$event'],] }],
    onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__["HostListener"], args: ["window:scroll", [],] }]
};
ViewAllCategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["Component"])({
        selector: 'app-view-all-categories',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-all-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/view-all-categories/view-all-categories.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fade', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 1 }))
                ])
            ])
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-all-categories.component.scss */ "./src/app/layout/pages/products/view-all-categories/view-all-categories.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_10__["UtilityService"],
        _services_http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_13__["DialogService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services_date_date_service__WEBPACK_IMPORTED_MODULE_1__["DateService"], Object, Window])
], ViewAllCategoriesComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/view-more-products/view-more-products.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/pages/products/view-more-products/view-more-products.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlcy9wcm9kdWN0cy92aWV3LW1vcmUtcHJvZHVjdHMvdmlldy1tb3JlLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/pages/products/view-more-products/view-more-products.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/pages/products/view-more-products/view-more-products.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ViewMoreProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMoreProductsComponent", function() { return ViewMoreProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/theme/styleVariables.model */ "./src/app/core/theme/styleVariables.model.ts");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../services/messaging/messaging.service */ "./src/app/services/messaging/messaging.service.ts");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../shared/pipes/localization.pipe */ "./src/app/shared/pipes/localization.pipe.ts");
/* harmony import */ var _layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../layout/shared/product/components/add-on/add-on.component */ "./src/app/layout/shared/product/components/add-on/add-on.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");















let ViewMoreProductsComponent = class ViewMoreProductsComponent {
    constructor(http, util, route, router, cartService, dialogService, user, message, localization, translate) {
        this.http = http;
        this.util = util;
        this.route = route;
        this.router = router;
        this.cartService = cartService;
        this.dialogService = dialogService;
        this.user = user;
        this.message = message;
        this.localization = localization;
        this.translate = translate;
        this.products = [];
        this.currency = '';
        this.allOffers = false;
        this.noData = false;
        this.cart = [];
        this.loggedIn = false;
        this.isDarkTheme = false;
        this.isRecommendedFoods = false;
        this.isTopSelling = false;
        this.isLoading = true;
        this.productFor = 1;
        this.style = new _core_theme_styleVariables_model__WEBPACK_IMPORTED_MODULE_2__["StyleVariables"]();
        this.userSubscription = this.user.currentUser
            .subscribe(user => {
            if (!!user && user['access_token']) {
                this.loggedIn = true;
            }
            else {
                this.loggedIn = false;
            }
        });
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_10__["GlobalVariable"].CURRENCY;
    }
    ngOnInit() {
        this.styleSubscription = this.util.getStyles.subscribe((style) => {
            this.style = style;
        });
        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
                // this.mapData(this.cart);
            }
        });
        this.settingsSubscription = this.util.getSettings.subscribe((settings) => {
            if (settings) {
                this.settings = settings;
            }
        });
        this.themeSubscription = this.util.getDarkTheme.subscribe((darkTheme) => {
            this.isDarkTheme = darkTheme;
        });
        this.routeSubscription = this.route.queryParams.subscribe(params => {
            this.categoryId = params["cat_id"] ? params["cat_id"] : null;
            this.isRecommendedFoods = params["rec_foods"] && params["rec_foods"] == 1 ? true : false;
            this.isTopSelling = params["top_selling"] && params["top_selling"] == 1 ? true : false;
            this.subscribeData();
        });
    }
    productDetail(data) {
        if (this.settings.app_type != 1) {
            let obj = {
                productId: data.product_id,
                supplierBranchId: data.supplier_branch_id,
                category: data.category_id
            };
            data.name = data.name.replace(/ &/g, "-");
            obj = Object.assign(Object.assign({}, this.util.handler), obj);
            this.router.navigate(['/products', 'product-detail', data.name], {
                queryParams: { f: this.util.encryptData(obj) }
            });
        }
    }
    subscribeData() {
        this.dataSubscription = this.util.callGetData.subscribe(showData => {
            if (showData) {
                if (this.isRecommendedFoods) {
                    this.getRecent();
                    return;
                }
                if (this.isTopSelling) {
                    this.getPopularProducts();
                    return;
                }
            }
        });
    }
    getPopularProducts() {
        const queryParams = {
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude,
            languageId: this.util.handler.languageId,
            // type: this.settings.app_type,
            offset: 0,
            limit: 8
        };
        this.isLoading = true;
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_11__["ApiUrl"].getPopularProductV1, queryParams, true, true).subscribe((response) => {
            if (response && response.status == 200) {
                this.products = [];
                this.products = response.data.product;
                this.products.map((data) => {
                    parseFloat(data["rating"]);
                    data["display_supplier_image"] = this.util.thumbnail(data["supplier_image"]);
                    data["display_logo"] = this.util.thumbnail(data["logo"]);
                });
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    getRecent() {
        let params = {
            latitude: this.util.handler.latitude || 0,
            longitude: this.util.handler.longitude || 0,
            languageId: this.util.handler.languageId,
            offset: 0
        };
        this.isLoading = true;
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_11__["ApiUrl"].recentlyViewed, params)
            .subscribe(response => {
            this.isLoading = false;
            if (!!response && response.data) {
                this.products = [];
                this.products = response.data.recentActivity;
            }
        });
    }
    onImageLoad(offer) {
        offer.image = offer.image_path;
    }
    mapData(offerData) {
        offerData.map((offer) => {
            offer['avg_rating'] = Number.parseFloat(offer['avg_rating']).toFixed(1);
            offer['image'] = this.util.thumbnail(offer['product_image']);
            offer["selectedQuantity"] = 0;
            if (this.cart.length) {
                this.cart.forEach(cartProduct => {
                    if (cartProduct.productId == offer.product_id) {
                        offer['selectedQuantity'] = cartProduct['selectedQuantity'];
                    }
                });
            }
            if (offer["price_type"]) {
                try {
                    offer["fixed_price"] = JSON.parse(offer.fixed_price);
                    let price = offer.fixed_price[0];
                    offer["discount"] = Math.round(((price.price_per_hour - price.discount_price) /
                        price.price_per_hour) *
                        100);
                }
                catch (err) {
                }
            }
            else {
                this.util.productPriceToFloat(offer);
                offer["discount"] = Math.round(((offer.display_price - offer.fixed_price) / offer.display_price) * 100);
            }
        });
        return offerData;
    }
    /********* Open Add On Dialog *********/
    openAddOnDialog(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item) {
            product.customization = item.customization;
        }
        const dialogRef = this.dialogService.open(_layout_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_13__["AddOnComponent"], {
            header: product['name'],
            width: '50%',
            showHeader: false,
            // contentStyle: { "max-height": "350px", "overflow": "auto" },
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: product,
                addOnItems: product['adds_on']
            }
        });
        dialogRef.onClose.subscribe(() => {
            if (product.customization && product.customization.length) {
                //delete product.customization;
                //this.router.navigate(['/cart']);
            }
        });
    }
    addProduct(product) {
        if (product.adds_on && product.adds_on.length && this.settings.app_type == 1) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.addToCart(product, this.products.slice(0, 24));
            return;
        }
    }
    removeProduct(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item['customization'] && item['customization'].length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.removeFromCart(product);
        }
    }
    wishlist(status, detail) {
        if (!this.loggedIn) {
            this.message.alert('warning', this.translate.instant('Please Login First'));
            return;
        }
        let param_data = {
            status: +status,
            product_id: detail.id
        };
        this.http.postData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_11__["ApiUrl"].addToWishlist, param_data, true)
            .subscribe(response => {
            if (!!response && response.data) {
                this.message.toast('success', `${this.localization.transform('product')} ${this.translate.instant('Has Been Successfully')} ${status ? this.translate.instant('Added To') : this.translate.instant('Removed From')} ${this.localization.transform('wishlist')}`);
                detail.is_favourite = status;
            }
        });
    }
    trackByProductsFn(id, index) {
        return index;
    }
    trackByFakeListFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (!!this.userSubscription)
            this.userSubscription.unsubscribe();
        if (!!this.styleSubscription)
            this.styleSubscription.unsubscribe();
        if (!!this.getDataSubscribe)
            this.getDataSubscribe.unsubscribe();
        if (!!this.settingsSubscription)
            this.settingsSubscription.unsubscribe();
        if (!!this.themeSubscription)
            this.themeSubscription.unsubscribe();
        if (!!this.routeSubscription)
            this.routeSubscription.unsubscribe();
        if (!!this.cartSubscription)
            this.cartSubscription.unsubscribe();
        let componentInstance = this.dialogService.dialogComponentRef;
        if (componentInstance) {
            componentInstance.destroy();
        }
    }
};
ViewMoreProductsComponent.ctorParameters = () => [
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__["DialogService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"] },
    { type: _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }
];
ViewMoreProductsComponent.propDecorators = {
    categoryId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ViewMoreProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-more-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-more-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/view-more-products/view-more-products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-more-products.component.scss */ "./src/app/layout/pages/products/view-more-products/view-more-products.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
        _services_messaging_messaging_service__WEBPACK_IMPORTED_MODULE_9__["MessagingService"],
        _shared_pipes_localization_pipe__WEBPACK_IMPORTED_MODULE_12__["LocalizationPipe"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]])
], ViewMoreProductsComponent);



/***/ }),

/***/ "./src/app/layout/pages/products/wishlist/wishlist.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/pages/products/wishlist/wishlist.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bold {\n  font-weight: 600;\n}\n\n.qty-btn {\n  line-height: 2px;\n  width: 22px;\n  padding: 4px;\n}\n\n.qty-btn .fa {\n  font-size: 10px !important;\n}\n\n.qty-span {\n  width: 22px;\n}\n\n.to-cart {\n  font-size: 12px;\n  padding: 2px 10px;\n  border-radius: 20px;\n  float: right;\n}\n\n.qty {\n  padding: 0px 10px;\n  font-size: 12px;\n  margin-top: 3px;\n  font-size: 14px;\n}\n\n.spechial_products_outter {\n  min-height: 335px;\n}\n\n.spechial_products_image {\n  height: 160px !important;\n}\n\n.input-group {\n  width: 100%;\n  float: none;\n}\n\n.itboxdisc strong {\n  width: 100% !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.price-ext {\n  font-size: 14px;\n  opacity: 0.8;\n}\n\n.buy-now {\n  float: right;\n  font-size: 12px;\n  border: 2px solid black;\n  padding: 2px 8px;\n  border-radius: 30px;\n  margin-top: -24px;\n  cursor: pointer;\n  background-color: #ffffff;\n  position: relative;\n  font-weight: 500;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BhZ2VzL3Byb2R1Y3RzL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBSkE7RUFNSSwwQkFBMEI7QUFFOUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFFYjs7QUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUd6Qjs7QUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBR2Q7O0FBQUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFHbEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcGFnZXMvcHJvZHVjdHMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5xdHktYnRuIHtcbiAgbGluZS1oZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDIycHg7XG4gIHBhZGRpbmc6IDRweDtcblxuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5xdHktc3BhbiB7XG4gIHdpZHRoOiAyMnB4O1xufVxuXG4udG8tY2FydCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnF0eSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc3BlY2hpYWxfcHJvZHVjdHNfb3V0dGVyIHtcbiAgbWluLWhlaWdodDogMzM1cHg7XG59XG5cbi5zcGVjaGlhbF9wcm9kdWN0c19pbWFnZSB7XG4gIGhlaWdodDogMTYwcHggIWltcG9ydGFudDtcbn1cbi5pbnB1dC1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbm9uZTtcbn1cbi5pdGJveGRpc2Mgc3Ryb25nIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5wcmljZS1leHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJ1eS1ub3cge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/pages/products/wishlist/wishlist.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/pages/products/wishlist/wishlist.component.ts ***!
  \**********************************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/seo/seo.service */ "./src/app/services/seo/seo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http/http.service */ "./src/app/services/http/http.service.ts");
/* harmony import */ var _core_apiUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/apiUrl */ "./src/app/core/apiUrl.ts");
/* harmony import */ var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/utility/utility.service */ "./src/app/services/utility/utility.service.ts");
/* harmony import */ var _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/models/pagination.model */ "./src/app/shared/models/pagination.model.ts");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/global */ "./src/app/core/global.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/data-cache/data-cache.service */ "./src/app/services/data-cache/data-cache.service.ts");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dynamicdialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dynamicdialog.js");
/* harmony import */ var _shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/product/components/add-on/add-on.component */ "./src/app/layout/shared/product/components/add-on/add-on.component.ts");














let WishlistComponent = class WishlistComponent {
    constructor(http, util, userService, cartService, cacheService, dialogService, seo, router) {
        this.http = http;
        this.util = util;
        this.userService = userService;
        this.cartService = cartService;
        this.cacheService = cacheService;
        this.dialogService = dialogService;
        this.seo = seo;
        this.router = router;
        this.isLoading = false;
        this.isloggedIn = false;
        this.noData = false;
        this.products = [];
        this.currency = '';
        this.cart = [];
        this.pagination = new _shared_models_pagination_model__WEBPACK_IMPORTED_MODULE_6__["PaginationModel"]();
        this.currency = _core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].CURRENCY;
    }
    ngOnInit() {
        this.seo.updateTitle(`Wishlist | ${_core_global__WEBPACK_IMPORTED_MODULE_9__["GlobalVariable"].SITE_NAME}`);
        this.styleSubscription = this.util.getStyles
            .subscribe(style => {
            this.style = style;
        });
        this.settingsSubscription = this.util.getSettings
            .subscribe((settings) => {
            if (settings) {
                this.settings = settings;
            }
        });
        this.cartSubscription = this.util.getCart.subscribe(cart => {
            if (cart) {
                this.cart = cart;
            }
        });
        this.userSubscription = this.userService.currentUser.subscribe((user) => {
            if (!!user) {
                this.isloggedIn = true;
            }
        });
        this.subscribeData();
    }
    subscribeData() {
        this.dataSubscription = this.util.callGetData.subscribe(showData => {
            if (showData) {
                this.getWishlist();
            }
        });
    }
    getWishlist() {
        let param_data = {
            language_id: this.util.handler.languageId,
            latitude: this.util.handler.latitude,
            longitude: this.util.handler.longitude
        };
        this.isLoading = true;
        this.http.getData(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].getWishList, param_data)
            .subscribe(response => {
            if (!!response && response.data) {
                this.products = response.data;
                this.products.map(data => {
                    this.util.productPriceToFloat(data);
                    data['discount_price'] = Math.round(((data.display_price - data.fixed_price) / data.display_price) * 100);
                    data['selectedQuantity'] = 0;
                    if (data['price_type']) {
                        data['maxHour'] = data['hourly_price'][data['hourly_price'].length - 1]['max_hour'];
                        if (data['discount'] && data['hourly_price'][0]['discount_price']) {
                            data['fixed_price'] = data['hourly_price'][0]['discount_price'];
                            data['display_price'] = data['hourly_price'][0]['price_per_hour'];
                            data['discount_price'] = Math.round(((data['hourly_price'][0]['price_per_hour'] - data['hourly_price'][0]['discount_price']) / data['hourly_price'][0]['price_per_hour']) * 100);
                        }
                        else {
                            data['fixed_price'] = data['hourly_price'][0]['price_per_hour'];
                        }
                    }
                    if (this.cart.length) {
                        this.cart.forEach(cartProduct => {
                            if (cartProduct.productId == data.product_id) {
                                data['selectedQuantity'] = cartProduct['selectedQuantity'];
                                if (data['price_type']) {
                                    data['fixed_price'] = cartProduct['fixed_price'];
                                }
                            }
                        });
                    }
                });
            }
            this.isLoading = false;
        }, (err) => this.isLoading = false);
    }
    /********* Open Add On Dialog *********/
    openAddOnDialog(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item) {
            product.customization = item.customization;
        }
        const dialogRef = this.dialogService.open(_shared_product_components_add_on_add_on_component__WEBPACK_IMPORTED_MODULE_13__["AddOnComponent"], {
            header: product['name'],
            width: '45%',
            showHeader: false,
            // contentStyle: { "max-height": "350px", "overflow": "auto" },
            transitionOptions: '600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
            data: {
                product: Object.assign({}, product),
                addOnItems: product['adds_on']
            }
        });
        dialogRef.onClose.subscribe(() => {
            if (product.customization && product.customization.length) {
                delete product.customization;
            }
        });
    }
    addProduct(product) {
        if (product.adds_on && product.adds_on.length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.addToCart(product);
            return;
        }
    }
    removeProduct(product) {
        let item = this.cart.find(p => p.productId == product.product_id);
        if (item['customization'] && item['customization'].length) {
            this.openAddOnDialog(product);
        }
        else {
            this.cartService.removeFromCart(product);
        }
    }
    /********* Product detail **********/
    productDetail(data) {
        let obj = {
            productId: data.product_id,
            supplierBranchId: data.supplier_branch_id,
            category: data['category_id']
        };
        data.name = data.name.replace(/ &/g, '-');
        obj = Object.assign(Object.assign({}, this.util.handler), obj);
        this.router.navigate(['products/product-detail', data.name], {
            queryParams: { f: this.util.encryptData(obj) }
        });
    }
    onFavourite(productId) {
        this.products = this.products.filter((product) => product.product_id !== productId);
        this.cacheService.removeKey(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].getSpecialOffers);
        this.cacheService.removeKey(_core_apiUrl__WEBPACK_IMPORTED_MODULE_4__["ApiUrl"].getPopularProduct);
    }
    trackByProductsFn(id, index) {
        return index;
    }
    trackByFakeListFn(id, index) {
        return index;
    }
    ngOnDestroy() {
        if (!!this.dataSubscription)
            this.dataSubscription.unsubscribe();
        if (!!this.styleSubscription)
            this.dataSubscription.unsubscribe();
        if (!!this.dataSubscription)
            this.settingsSubscription.unsubscribe();
        if (!!this.cartSubscription)
            this.dataSubscription.unsubscribe();
        if (!!this.userSubscription)
            this.dataSubscription.unsubscribe();
    }
};
WishlistComponent.ctorParameters = () => [
    { type: _services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] },
    { type: _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] },
    { type: _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_11__["DataCacheService"] },
    { type: primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__["DialogService"] },
    { type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
WishlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wishlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pages/products/wishlist/wishlist.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/layout/pages/products/wishlist/wishlist.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_http_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
        _services_user_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
        _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"],
        _services_data_cache_data_cache_service__WEBPACK_IMPORTED_MODULE_11__["DataCacheService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__["DialogService"],
        _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__["SeoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], WishlistComponent);



/***/ })

}]);
//# sourceMappingURL=pages-products-products-module-es2015.js.map