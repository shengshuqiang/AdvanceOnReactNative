(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactDevToolsBackend"] = factory();
	else
		root["ReactDevToolsBackend"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../agent/Agent.js":
/*!***************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/agent/Agent.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _require = __webpack_require__(/*! events */ "../../node_modules/events/events.js"),
    EventEmitter = _require.EventEmitter;

var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var nullthrows = __webpack_require__(/*! nullthrows */ "../../node_modules/nullthrows/nullthrows.js").default;

var guid = __webpack_require__(/*! ../utils/guid */ "../../utils/guid.js");

var getIn = __webpack_require__(/*! ./getIn */ "../../agent/getIn.js");

/**
 * The agent lives on the page in the same context as React, observes events
 * from the `backend`, and communicates (via a `Bridge`) with the frontend.
 *
 * It is responsible for generating string IDs (ElementID) for each react
 * element, maintaining a mapping of those IDs to elements, handling messages
 * from the frontend, and translating between react elements and native
 * handles.
 *
 *
 *   React
 *     |
 *     v
 *  backend
 *     |
 *     v
 *  -----------
 * | **Agent** |
 *  -----------
 *     ^
 *     |
 *     v
 *  (Bridge)
 *     ^
 *     |
 * serialization
 *     |
 *     v
 *  (Bridge)
 *     ^
 *     |
 *     v
 *  ----------------
 * | Frontend Store |
 *  ----------------
 *
 *
 * Events from the `backend`:
 * - root (got a root)
 * - mount (a component mounted)
 * - update (a component updated)
 * - unmount (a component mounted)
 *
 * Events from the `frontend` Store:
 * - see `addBridge` for subscriptions
 *
 * Events that Agent fires:
 * - selected
 * - hideHighlight
 * - startInspecting
 * - stopInspecting
 * - shutdown
 * - highlight /highlightMany
 * - setSelection
 * - root
 * - mount
 * - update
 * - unmount
 */
var Agent =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Agent, _EventEmitter);

  // the window or global -> used to "make a value available in the console"
  function Agent(global, capabilities) {
    var _this;

    _classCallCheck(this, Agent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Agent).call(this));
    _this.global = global;
    _this.internalInstancesById = new Map();
    _this.idsByInternalInstances = new WeakMap();
    _this.renderers = new Map();
    _this.elementData = new Map();
    _this.roots = new Set();
    _this.reactInternals = {};
    var lastSelected;

    _this.on('selected', function (id) {
      var data = _this.elementData.get(id);

      if (data) {
        if (data.publicInstance && _this.global.$r === lastSelected) {
          _this.global.$r = data.publicInstance;
          lastSelected = data.publicInstance;
        }
      }
    });

    _this._prevSelected = null;
    _this._scrollUpdate = false;
    var isReactDOM = window.document && typeof window.document.createElement === 'function';
    _this.capabilities = assign({
      scroll: isReactDOM && typeof window.document.body.scrollIntoView === 'function',
      dom: isReactDOM,
      editTextContent: false
    }, capabilities);

    if (isReactDOM) {
      _this._updateScroll = _this._updateScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
      window.addEventListener('scroll', _this._onScroll.bind(_assertThisInitialized(_assertThisInitialized(_this))), true);
      window.addEventListener('click', _this._onClick.bind(_assertThisInitialized(_assertThisInitialized(_this))), true);
      window.addEventListener('mouseover', _this._onMouseOver.bind(_assertThisInitialized(_assertThisInitialized(_this))), true);
      window.addEventListener('resize', _this._onResize.bind(_assertThisInitialized(_assertThisInitialized(_this))), true);
    }

    return _this;
  } // returns an "unsubscribe" function


  _createClass(Agent, [{
    key: "sub",
    value: function sub(ev, fn) {
      var _this2 = this;

      this.on(ev, fn);
      return function () {
        _this2.removeListener(ev, fn);
      };
    }
  }, {
    key: "setReactInternals",
    value: function setReactInternals(renderer, reactInternals) {
      this.reactInternals[renderer] = reactInternals;
    }
  }, {
    key: "addBridge",
    value: function addBridge(bridge) {
      var _this3 = this;

      /** Events received from the frontend **/
      // the initial handshake
      bridge.on('requestCapabilities', function () {
        bridge.send('capabilities', _this3.capabilities);

        _this3.emit('connected');
      });
      bridge.on('setState', this._setState.bind(this));
      bridge.on('setProps', this._setProps.bind(this));
      bridge.on('setContext', this._setContext.bind(this));
      bridge.on('makeGlobal', this._makeGlobal.bind(this));
      bridge.on('highlight', function (id) {
        return _this3.highlight(id);
      });
      bridge.on('highlightMany', function (id) {
        return _this3.highlightMany(id);
      });
      bridge.on('hideHighlight', function () {
        return _this3.emit('hideHighlight');
      });
      bridge.on('startInspecting', function () {
        return _this3.emit('startInspecting');
      });
      bridge.on('stopInspecting', function () {
        return _this3.emit('stopInspecting');
      });
      bridge.on('selected', function (id) {
        return _this3.emit('selected', id);
      });
      bridge.on('isRecording', function (isRecording) {
        return _this3.emit('isRecording', isRecording);
      });
      bridge.on('setInspectEnabled', function (enabled) {
        _this3._inspectEnabled = enabled;

        _this3.emit('stopInspecting');
      });
      bridge.on('shutdown', function () {
        return _this3.emit('shutdown');
      });
      bridge.on('changeTextContent', function (_ref) {
        var id = _ref.id,
            text = _ref.text;

        var node = _this3.getNodeForID(id);

        if (!node) {
          return;
        }

        node.textContent = text;
      }); // used to "inspect node in Elements pane"

      bridge.on('putSelectedNode', function (id) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$node = _this3.getNodeForID(id);
      }); // used to "view source in Sources pane"

      bridge.on('putSelectedInstance', function (id) {
        var node = _this3.elementData.get(id);

        if (node) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$type = node.type;
        } else {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$type = null;
        }

        if (node && node.publicInstance) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$inst = node.publicInstance;
        } else {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$inst = null;
        }
      }); // used to select the inspected node ($0)

      bridge.on('checkSelection', function () {
        var newSelected = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;

        if (newSelected !== _this3._prevSelected) {
          _this3._prevSelected = newSelected;
          var sentSelected = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$node;

          if (newSelected !== sentSelected) {
            _this3.selectFromDOMNode(newSelected, true);
          }
        }
      });
      bridge.on('scrollToNode', function (id) {
        return _this3.scrollToNode(id);
      });
      bridge.on('traceupdatesstatechange', function (value) {
        return _this3.emit('traceupdatesstatechange', value);
      });
      bridge.on('colorizerchange', function (value) {
        return _this3.emit('colorizerchange', value);
      });
      /** Events sent to the frontend **/

      this.on('root', function (id) {
        return bridge.send('root', id);
      });
      this.on('mount', function (data) {
        return bridge.send('mount', data);
      });
      this.on('update', function (data) {
        return bridge.send('update', data);
      });
      this.on('updateProfileTimes', function (data) {
        return bridge.send('updateProfileTimes', data);
      });
      this.on('sendFiberTree', function (data) {
        return bridge.send('sendFiberTree', data);
      });
      this.on('unmount', function (id) {
        bridge.send('unmount', id); // once an element has been unmounted, the bridge doesn't need to be
        // able to inspect it anymore.

        bridge.forget(id);
      });
      this.on('setSelection', function (data) {
        return bridge.send('select', data);
      });
      this.on('setInspectEnabled', function (data) {
        return bridge.send('setInspectEnabled', data);
      });
      this.on('isRecording', function (isRecording) {
        return bridge.send('isRecording', isRecording);
      });
      this.on('storeSnapshot', function (data) {
        return bridge.send('storeSnapshot', data);
      });
      this.on('clearSnapshots', function () {
        return bridge.send('clearSnapshots');
      });
    }
  }, {
    key: "scrollToNode",
    value: function scrollToNode(id) {
      var node = this.getNodeForID(id);

      if (!node) {
        console.warn('unable to get the node for scrolling');
        return;
      }

      var domElement = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;

      if (!domElement) {
        console.warn('unable to get the domElement for scrolling');
        return;
      }

      if (typeof domElement.scrollIntoViewIfNeeded === 'function') {
        domElement.scrollIntoViewIfNeeded();
      } else if (typeof domElement.scrollIntoView === 'function') {
        domElement.scrollIntoView();
      }

      this.highlight(id);
    }
  }, {
    key: "highlight",
    value: function highlight(id) {
      var data = this.elementData.get(id);
      var node = this.getNodeForID(id);

      if (data && node) {
        this.emit('highlight', {
          node: node,
          name: data.name,
          props: data.props
        });
      }
    }
  }, {
    key: "highlightMany",
    value: function highlightMany(ids) {
      var _this4 = this;

      var nodes = [];
      ids.forEach(function (id) {
        var node = _this4.getNodeForID(id);

        if (node) {
          nodes.push(node);
        }
      });

      if (nodes.length) {
        this.emit('highlightMany', nodes);
      }
    }
  }, {
    key: "getNodeForID",
    value: function getNodeForID(id) {
      var component = this.internalInstancesById.get(id);

      if (!component) {
        return null;
      }

      var renderer = this.renderers.get(id);

      if (renderer && this.reactInternals[renderer].getNativeFromReactElement) {
        return this.reactInternals[renderer].getNativeFromReactElement(component);
      }

      return null;
    }
  }, {
    key: "selectFromDOMNode",
    value: function selectFromDOMNode(node, quiet) {
      var offsetFromLeaf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var id = this.getIDForNode(node);

      if (!id) {
        return;
      }

      this.emit('setSelection', {
        id: id,
        quiet: quiet,
        offsetFromLeaf: offsetFromLeaf
      });
    } // TODO: remove this method because it's breaking encapsulation.
    // It was used by RN inspector but this required leaking Fibers to it.
    // RN inspector will use selectFromDOMNode() instead now.
    // Remove this method in a few months after this comment was added.

  }, {
    key: "selectFromReactInstance",
    value: function selectFromReactInstance(instance, quiet) {
      var id = this.getId(instance);

      if (!id) {
        console.log('no instance id', instance);
        return;
      }

      this.emit('setSelection', {
        id: id,
        quiet: quiet
      });
    }
  }, {
    key: "getIDForNode",
    value: function getIDForNode(node) {
      if (!this.reactInternals) {
        return null;
      }

      var component;

      for (var renderer in this.reactInternals) {
        // If a renderer doesn't know about a reactId, it will throw an error.
        try {
          // $FlowFixMe possibly null - it's not null
          component = this.reactInternals[renderer].getReactElementFromNative(node);
        } catch (e) {}

        if (component) {
          return this.getId(component);
        }
      }

      return null;
    }
  }, {
    key: "_setProps",
    value: function _setProps(_ref2) {
      var id = _ref2.id,
          path = _ref2.path,
          value = _ref2.value;
      var data = this.elementData.get(id);

      if (data && data.updater && typeof data.updater.setInProps === 'function') {
        data.updater.setInProps(path, value);
      } else {
        console.warn("trying to set props on a component that doesn't support it");
      }
    }
  }, {
    key: "_setState",
    value: function _setState(_ref3) {
      var id = _ref3.id,
          path = _ref3.path,
          value = _ref3.value;
      var data = this.elementData.get(id);

      if (data && data.updater && typeof data.updater.setInState === 'function') {
        data.updater.setInState(path, value);
      } else {
        console.warn("trying to set state on a component that doesn't support it");
      }
    }
  }, {
    key: "_setContext",
    value: function _setContext(_ref4) {
      var id = _ref4.id,
          path = _ref4.path,
          value = _ref4.value;
      var data = this.elementData.get(id);

      if (data && data.updater && typeof data.updater.setInContext === 'function') {
        // $FlowFixMe
        data.updater.setInContext(path, value);
      } else {
        console.warn("trying to set context on a component that doesn't support it");
      }
    }
  }, {
    key: "_makeGlobal",
    value: function _makeGlobal(_ref5) {
      var id = _ref5.id,
          path = _ref5.path;
      var data = this.elementData.get(id);

      if (!data) {
        return;
      }

      var value;

      if (path === 'instance') {
        value = data.publicInstance;
      } else {
        value = getIn(data, path);
      }

      this.global.$tmp = value;
      console.log('$tmp =', value);
    }
  }, {
    key: "getId",
    value: function getId(internalInstance) {
      if (_typeof(internalInstance) !== 'object' || !internalInstance) {
        return internalInstance;
      }

      if (!this.idsByInternalInstances.has(internalInstance)) {
        this.idsByInternalInstances.set(internalInstance, guid());
        this.internalInstancesById.set(nullthrows(this.idsByInternalInstances.get(internalInstance)), internalInstance);
      }

      return nullthrows(this.idsByInternalInstances.get(internalInstance));
    }
  }, {
    key: "addRoot",
    value: function addRoot(renderer, internalInstance) {
      var id = this.getId(internalInstance);
      this.roots.add(id);
      this.emit('root', id);
    }
  }, {
    key: "rootCommitted",
    value: function rootCommitted(renderer, internalInstance, data) {
      var id = this.getId(internalInstance);
      this.emit('rootCommitted', id, internalInstance, data);
    }
  }, {
    key: "onMounted",
    value: function onMounted(renderer, component, data) {
      var _this5 = this;

      var id = this.getId(component);
      this.renderers.set(id, renderer);
      this.elementData.set(id, data);
      var send = assign({}, data);

      if (send.children && send.children.map) {
        send.children = send.children.map(function (c) {
          return _this5.getId(c);
        });
      }

      send.id = id;
      send.canUpdate = send.updater && send.updater.canUpdate;
      delete send.type;
      delete send.updater;
      this.emit('mount', send);
    }
  }, {
    key: "onUpdated",
    value: function onUpdated(component, data) {
      var _this6 = this;

      var id = this.getId(component);
      this.elementData.set(id, data);
      var send = assign({}, data);

      if (send.children && send.children.map) {
        send.children = send.children.map(function (c) {
          return _this6.getId(c);
        });
      }

      send.id = id;
      send.canUpdate = send.updater && send.updater.canUpdate;
      delete send.type;
      delete send.updater;
      this.emit('update', send);
    }
  }, {
    key: "onUpdatedProfileTimes",
    value: function onUpdatedProfileTimes(component, data) {
      var _this7 = this;

      var id = this.getId(component);
      this.elementData.set(id, data);
      var send = assign({}, data);

      if (send.children && send.children.map) {
        send.children = send.children.map(function (c) {
          return _this7.getId(c);
        });
      }

      send.id = id;
      send.canUpdate = send.updater && send.updater.canUpdate;
      delete send.type;
      delete send.updater;
      this.emit('updateProfileTimes', send);
    }
  }, {
    key: "onSendFiberTree",
    value: function onSendFiberTree(component, data) {
      this.emit('sendFiberTree', data);
    }
  }, {
    key: "onUnmounted",
    value: function onUnmounted(component) {
      var id = this.getId(component);
      this.elementData.delete(id);

      if (this.roots.has(id)) {
        this.roots.delete(id);
        this.emit('rootUnmounted', id);
      }

      this.renderers.delete(id);
      this.emit('unmount', id);
      this.idsByInternalInstances.delete(component);
    }
  }, {
    key: "_onScroll",
    value: function _onScroll() {
      if (!this._scrollUpdate) {
        this._scrollUpdate = true;
        window.requestAnimationFrame(this._updateScroll);
      }
    }
  }, {
    key: "_updateScroll",
    value: function _updateScroll() {
      this.emit('refreshMultiOverlay');
      this.emit('stopInspecting');
      this._scrollUpdate = false;
    }
  }, {
    key: "_onClick",
    value: function _onClick(event) {
      if (!this._inspectEnabled) {
        return;
      }

      var id = this.getIDForNode(event.target);

      if (!id) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this.emit('setSelection', {
        id: id
      });
      this.emit('setInspectEnabled', false);
    }
  }, {
    key: "_onMouseOver",
    value: function _onMouseOver(event) {
      if (this._inspectEnabled) {
        var id = this.getIDForNode(event.target);

        if (!id) {
          return;
        }

        this.highlight(id);
      }
    }
  }, {
    key: "_onResize",
    value: function _onResize(event) {
      this.emit('stopInspecting');
    }
  }]);

  return Agent;
}(EventEmitter);

module.exports = Agent;

/***/ }),

/***/ "../../agent/Bridge.js":
/*!****************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/agent/Bridge.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var consts = __webpack_require__(/*! ./consts */ "../../agent/consts.js");

var hydrate = __webpack_require__(/*! ./hydrate */ "../../agent/hydrate.js");

var dehydrate = __webpack_require__(/*! ./dehydrate */ "../../agent/dehydrate.js");

var getIn = __webpack_require__(/*! ./getIn */ "../../agent/getIn.js");

var performanceNow = __webpack_require__(/*! fbjs/lib/performanceNow */ "../../node_modules/fbjs/lib/performanceNow.js"); // Use the polyfill if the function is not native implementation


function getWindowFunction(name, polyfill) {
  if (String(window[name]).indexOf('[native code]') === -1) {
    return polyfill;
  }

  return window[name];
} // Custom polyfill that runs the queue with a backoff.
// If you change it, make sure it behaves reasonably well in Firefox.


var lastRunTimeMS = 5;
var cancelIdleCallback = getWindowFunction('cancelIdleCallback', clearTimeout);
var requestIdleCallback = getWindowFunction('requestIdleCallback', function (cb, options) {
  // Magic numbers determined by tweaking in Firefox.
  // There is no special meaning to them.
  var delayMS = 3000 * lastRunTimeMS;

  if (delayMS > 500) {
    delayMS = 500;
  }

  return setTimeout(function () {
    var startTime = performanceNow();
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Infinity;
      }
    });
    var endTime = performanceNow();
    lastRunTimeMS = (endTime - startTime) / 1000;
  }, delayMS);
});

/**
 * The bridge is responsible for serializing requests between the Agent and
 * the Frontend Store. It needs to be connected to a Wall object that can send
 * JSONable data to the bridge on the other side.
 *
 * complex data
 *     |
 *     v
 *  [Bridge]
 *     |
 * jsonable data
 *     |
 *     v
 *   [wall]
 *     |
 *     v
 * ~ some barrier ~
 *     |
 *     v
 *   [wall]
 *     |
 *     v
 *  [Bridge]
 *     |
 *     v
 * "hydrated" data
 *
 * When an item is passed in that can't be serialized (anything other than a
 * plain array, object, or literal value), the object is "cleaned", and
 * rehydrated on the other side with `Symbol` attributes indicating that the
 * object needs to be inspected for more detail.
 *
 * Example:
 *
 * bridge.send('evname', {id: 'someid', foo: MyCoolObjectInstance})
 * ->
 * shows up, hydrated as
 * {
 *   id: 'someid',
 *   foo: {
 *     [consts.name]: 'MyCoolObjectInstance',
 *     [consts.type]: 'object',
 *     [consts.meta]: {},
 *     [consts.inspected]: false,
 *   }
 * }
 *
 * The `consts` variables are Symbols, and as such are non-ennumerable.
 * The front-end therefore needs to check for `consts.inspected` on received
 * objects, and can thereby display object proxies and inspect them.
 *
 * Complex objects that are passed are expected to have a top-level `id`
 * attribute, which is used for later lookup + inspection. Once it has been
 * determined that an object is no longer needed, call `.forget(id)` to clean
 * up.
 */
var Bridge =
/*#__PURE__*/
function () {
  function Bridge(wall) {
    _classCallCheck(this, Bridge);

    this._cbs = new Map();
    this._inspectables = new Map();
    this._cid = 0;
    this._listeners = {};
    this._buffer = [];
    this._flushHandle = null;
    this._callers = {};
    this._paused = false;
    this._wall = wall;
    wall.listen(this._handleMessage.bind(this));
  }

  _createClass(Bridge, [{
    key: "inspect",
    value: function inspect(id, path, cb) {
      var _cid = this._cid++;

      this._cbs.set(_cid, function (data, cleaned, proto, protoclean) {
        if (cleaned.length) {
          hydrate(data, cleaned);
        }

        if (proto && protoclean.length) {
          hydrate(proto, protoclean);
        }

        if (proto) {
          data[consts.proto] = proto;
        }

        cb(data);
      });

      this._wall.send({
        type: 'inspect',
        callback: _cid,
        path: path,
        id: id
      });
    } // Listening directly to the wall isn't advised.
    // It can be used to listen/detect v4 messages (since they use a different format).

  }, {
    key: "call",
    value: function call(name, args, cb) {
      var _cid = this._cid++;

      this._cbs.set(_cid, cb);

      this._wall.send({
        type: 'call',
        callback: _cid,
        args: args,
        name: name
      });
    }
  }, {
    key: "onCall",
    value: function onCall(name, handler) {
      if (this._callers[name]) {
        throw new Error('only one call handler per call name allowed');
      }

      this._callers[name] = handler;
    }
  }, {
    key: "pause",
    value: function pause() {
      this._wall.send({
        type: 'pause'
      });
    }
  }, {
    key: "resume",
    value: function resume() {
      this._wall.send({
        type: 'resume'
      });
    }
  }, {
    key: "setInspectable",
    value: function setInspectable(id, data) {
      var prev = this._inspectables.get(id);

      if (!prev) {
        this._inspectables.set(id, data);

        return;
      }

      this._inspectables.set(id, _objectSpread({}, prev, data));
    }
  }, {
    key: "send",
    value: function send(evt, data) {
      this._buffer.push({
        evt: evt,
        data: data
      });

      this.scheduleFlush();
    }
  }, {
    key: "scheduleFlush",
    value: function scheduleFlush() {
      if (!this._flushHandle && this._buffer.length) {
        var timeout = this._paused ? 5000 : 500;
        this._flushHandle = requestIdleCallback(this.flushBufferWhileIdle.bind(this), {
          timeout: timeout
        });
      }
    }
  }, {
    key: "cancelFlush",
    value: function cancelFlush() {
      if (this._flushHandle) {
        cancelIdleCallback(this._flushHandle);
        this._flushHandle = null;
      }
    }
  }, {
    key: "flushBufferWhileIdle",
    value: function flushBufferWhileIdle(deadline) {
      this._flushHandle = null; // Magic numbers were determined by tweaking in a heavy UI and seeing
      // what performs reasonably well both when DevTools are hidden and visible.
      // The goal is that we try to catch up but avoid blocking the UI.
      // When paused, it's okay to lag more, but not forever because otherwise
      // when user activates React tab, it will freeze syncing.

      var chunkCount = this._paused ? 20 : 10;
      var chunkSize = Math.round(this._buffer.length / chunkCount);
      var minChunkSize = this._paused ? 50 : 100;

      while (this._buffer.length && (deadline.timeRemaining() > 0 || deadline.didTimeout)) {
        var take = Math.min(this._buffer.length, Math.max(minChunkSize, chunkSize));

        var currentBuffer = this._buffer.splice(0, take);

        this.flushBufferSlice(currentBuffer);
      }

      if (this._buffer.length) {
        this.scheduleFlush();
      }
    }
  }, {
    key: "flushBufferSlice",
    value: function flushBufferSlice(bufferSlice) {
      var _this = this;

      var events = bufferSlice.map(function (_ref) {
        var evt = _ref.evt,
            data = _ref.data;
        var cleaned = [];
        var san = dehydrate(data, cleaned);

        if (cleaned.length) {
          _this.setInspectable(data.id, data);
        }

        return {
          type: 'event',
          evt: evt,
          data: san,
          cleaned: cleaned
        };
      });

      this._wall.send({
        type: 'many-events',
        events: events
      });
    }
  }, {
    key: "forget",
    value: function forget(id) {
      this._inspectables.delete(id);
    }
  }, {
    key: "on",
    value: function on(evt, fn) {
      if (!this._listeners[evt]) {
        this._listeners[evt] = [fn];
      } else {
        this._listeners[evt].push(fn);
      }
    }
  }, {
    key: "off",
    value: function off(evt, fn) {
      if (!this._listeners[evt]) {
        return;
      }

      var ix = this._listeners[evt].indexOf(fn);

      if (ix !== -1) {
        this._listeners[evt].splice(ix, 1);
      }
    }
  }, {
    key: "once",
    value: function once(evt, fn) {
      var self = this;

      var listener = function listener() {
        fn.apply(this, arguments);
        self.off(evt, listener);
      };

      this.on(evt, listener);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(payload) {
      var _this2 = this;

      if (payload.type === 'resume') {
        this._paused = false;
        this.scheduleFlush();
        return;
      }

      if (payload.type === 'pause') {
        this._paused = true;
        this.cancelFlush();
        return;
      }

      if (payload.type === 'callback') {
        var callback = this._cbs.get(payload.id);

        if (callback) {
          callback.apply(void 0, _toConsumableArray(payload.args));

          this._cbs.delete(payload.id);
        }

        return;
      }

      if (payload.type === 'call') {
        this._handleCall(payload.name, payload.args, payload.callback);

        return;
      }

      if (payload.type === 'inspect') {
        this._inspectResponse(payload.id, payload.path, payload.callback);

        return;
      }

      if (payload.type === 'event') {
        // console.log('[bridge<-]', payload.evt);
        if (payload.cleaned) {
          hydrate(payload.data, payload.cleaned);
        }

        var fns = this._listeners[payload.evt];
        var data = payload.data;

        if (fns) {
          fns.forEach(function (fn) {
            return fn(data);
          });
        }
      }

      if (payload.type === 'many-events') {
        payload.events.forEach(function (event) {
          // console.log('[bridge<-]', payload.evt);
          if (event.cleaned) {
            hydrate(event.data, event.cleaned);
          }

          var handlers = _this2._listeners[event.evt];

          if (handlers) {
            handlers.forEach(function (fn) {
              return fn(event.data);
            });
          }
        });
      }
    }
  }, {
    key: "_handleCall",
    value: function _handleCall(name, args, callback) {
      if (!this._callers[name]) {
        console.warn('unknown call: "' + name + '"');
        return;
      }

      args = !Array.isArray(args) ? [args] : args;
      var result;

      try {
        result = this._callers[name].apply(null, args);
      } catch (e) {
        console.error('Failed to call', e);
        return;
      }

      this._wall.send({
        type: 'callback',
        id: callback,
        args: [result]
      });
    }
  }, {
    key: "_inspectResponse",
    value: function _inspectResponse(id, path, callback) {
      var inspectable = this._inspectables.get(id);

      var result = {};
      var cleaned = [];
      var proto = null;
      var protoclean = [];

      if (inspectable) {
        var val = getIn(inspectable, path);
        var protod = false;
        var isFn = typeof val === 'function';

        if (val && typeof val[Symbol.iterator] === 'function') {
          var iterVal = Object.create({}); // flow throws "object literal incompatible with object type"

          var count = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = val[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var entry = _step.value;

              if (count > 100) {
                // TODO: replace this if block with better logic to handle large iterables
                break;
              }

              iterVal[count] = entry;
              count++;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          val = iterVal;
        }

        Object.getOwnPropertyNames(val).forEach(function (name) {
          if (name === '__proto__') {
            protod = true;
          }

          if (isFn && (name === 'arguments' || name === 'callee' || name === 'caller')) {
            return;
          } // $FlowIgnore This is intentional


          result[name] = dehydrate(val[name], cleaned, [name]);
        });
        /* eslint-disable no-proto */

        if (!protod && val.__proto__ && val.constructor.name !== 'Object') {
          var newProto = {};
          var pIsFn = typeof val.__proto__ === 'function';
          Object.getOwnPropertyNames(val.__proto__).forEach(function (name) {
            if (pIsFn && (name === 'arguments' || name === 'callee' || name === 'caller')) {
              return;
            }

            newProto[name] = dehydrate(val.__proto__[name], protoclean, [name]);
          });
          proto = newProto;
        }
        /* eslint-enable no-proto */

      }

      this._wall.send({
        type: 'callback',
        id: callback,
        args: [result, cleaned, proto, protoclean]
      });
    }
  }, {
    key: "wall",
    get: function get() {
      return this._wall;
    }
  }]);

  return Bridge;
}();

module.exports = Bridge;

/***/ }),

/***/ "../../agent/consts.js":
/*!****************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/agent/consts.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var _Symbol = __webpack_require__(/*! es6-symbol */ "../../node_modules/es6-symbol/index.js");

module.exports = {
  name: _Symbol('name'),
  type: _Symbol('type'),
  inspected: _Symbol('inspected'),
  meta: _Symbol('meta'),
  proto: _Symbol('proto')
};

/***/ }),

/***/ "../../agent/dehydrate.js":
/*!*******************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/agent/dehydrate.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
 // This threshold determines the depth at which the bridge "dehydrates" nested data.
// Dehydration means that we don't serialize the data for e.g. postMessage or stringify,
// unless the frontend explicitly requests it (e.g. a user clicks to expand a props object).
// We tried reducing this value from 2 to 1 to improve performance:
// https://github.com/facebook/react-devtools/issues/1200
// But this caused problems with the Profiler's interaction tracing output.
// Because React mutates Fibers, profiling data that is dehydrated for old commits–
// will not be available later from within the Profiler.
// This impacts props/state as well as Interactions.
// https://github.com/facebook/react-devtools/issues/1262

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var LEVEL_THRESHOLD = 10;
/**
 * Get a enhanced/artificial type string based on the object instance
 */

function getPropType(data) {
  if (!data) {
    return null;
  }

  var type = _typeof(data);

  if (type === 'object') {
    if (data._reactFragment) {
      return 'react_fragment';
    }

    if (Array.isArray(data)) {
      return 'array';
    }

    if (ArrayBuffer.isView(data)) {
      if (data instanceof DataView) {
        return 'data_view';
      }

      return 'typed_array';
    }

    if (data instanceof ArrayBuffer) {
      return 'array_buffer';
    }

    if (typeof data[Symbol.iterator] === 'function') {
      return 'iterator';
    }

    if (Object.prototype.toString.call(data) === '[object Date]') {
      return 'date';
    }
  }

  return type;
}
/**
 * Generate the dehydrated metadata for complex object instances
 */


function createDehydrated(type, data, cleaned, path) {
  var meta = {};

  if (type === 'array' || type === 'typed_array') {
    meta.length = data.length;
  }

  if (type === 'iterator' || type === 'typed_array') {
    meta.readOnly = true;
  }

  cleaned.push(path);
  return {
    type: type,
    meta: meta,
    name: !data.constructor || data.constructor.name === 'Object' ? '' : data.constructor.name
  };
}
/**
 * Strip out complex data (instances, functions, and data nested > LEVEL_THRESHOLD levels
 * deep). The paths of the stripped out objects are appended to the `cleaned`
 * list. On the other side of the barrier, the cleaned list is used to
 * "re-hydrate" the cleaned representation into an object with symbols as
 * attributes, so that a sanitized object can be distinguished from a normal
 * object.
 *
 * Input: {"some": {"attr": fn()}, "other": AnInstance}
 * Output: {
 *   "some": {
 *     "attr": {"name": the fn.name, type: "function"}
 *   },
 *   "other": {
 *     "name": "AnInstance",
 *     "type": "object",
 *   },
 * }
 * and cleaned = [["some", "attr"], ["other"]]
 */


function dehydrate(data, cleaned) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var type = getPropType(data);

  switch (type) {
    case 'function':
      cleaned.push(path);
      return {
        name: data.name,
        type: 'function'
      };

    case 'string':
      return data.length <= 500 ? data : data.slice(0, 500) + '...';
    // We have to do this assignment b/c Flow doesn't think "symbol" is
    // something typeof would return. Error 'unexpected predicate "symbol"'

    case 'symbol':
      cleaned.push(path);
      return {
        type: 'symbol',
        name: data.toString()
      };
    // React Fragments error if you try to inspect them.

    case 'react_fragment':
      return 'A React Fragment';
    // ArrayBuffers error if you try to inspect them.

    case 'array_buffer':
    case 'data_view':
      cleaned.push(path);
      return {
        type: type,
        name: type === 'data_view' ? 'DataView' : 'ArrayBuffer',
        meta: {
          length: data.byteLength,
          uninspectable: true
        }
      };

    case 'array':
      if (level > LEVEL_THRESHOLD) {
        return createDehydrated(type, data, cleaned, path);
      }

      return data.map(function (item, i) {
        return dehydrate(item, cleaned, path.concat([i]), level + 1);
      });

    case 'typed_array':
    case 'iterator':
      return createDehydrated(type, data, cleaned, path);

    case 'date':
      cleaned.push(path);
      return {
        name: data.toString(),
        type: 'date',
        meta: {
          uninspectable: true
        }
      };

    case 'object':
      if (level > LEVEL_THRESHOLD || data.constructor && typeof data.constructor === 'function' && data.constructor.name !== 'Object') {
        return createDehydrated(type, data, cleaned, path);
      } else {
        var res = {};

        for (var name in data) {
          res[name] = dehydrate(data[name], cleaned, path.concat([name]), level + 1);
        }

        return res;
      }

    default:
      return data;
  }
}

module.exports = dehydrate;

/***/ }),

/***/ "../../agent/getIn.js":
/*!***************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/agent/getIn.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Retrieves the value from the path of nested objects
 * @param  {Object} base Base or root object for path
 * @param  {Array<String>} path nested path
 * @return {any}      Value at end of path or `mull`
 */

function getIn(base, path) {
  return path.reduce(function (obj, attr) {
    if (obj) {
      if (hasOwnProperty.call(obj, attr)) {
        return obj[attr];
      }

      if (typeof obj[Symbol.iterator] === 'function') {
        // Convert iterable to array and return array[index]
        return _toConsumableArray(obj)[attr];
      }
    }

    return null;
  }, base);
}

module.exports = getIn;

/***/ }),

/***/ "../../agent/hydrate.js":
/*!*****************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/agent/hydrate.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var consts = __webpack_require__(/*! ./consts */ "../../agent/consts.js");

function hydrate(data, cleaned) {
  cleaned.forEach(function (path) {
    var last = path.pop();
    var obj = path.reduce(function (obj_, attr) {
      return obj_ ? obj_[attr] : null;
    }, data);

    if (!obj || !obj[last]) {
      return;
    }

    var replace = {};
    replace[consts.name] = obj[last].name;
    replace[consts.type] = obj[last].type;
    replace[consts.meta] = obj[last].meta;
    replace[consts.inspected] = false;
    obj[last] = replace;
  });
}

module.exports = hydrate;

/***/ }),

/***/ "../../agent/inject.js":
/*!****************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/agent/inject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var setupBackend = __webpack_require__(/*! ../backend/backend */ "../../backend/backend.js");

module.exports = function (hook, agent) {
  var subs = [// Basic functionality
  hook.sub('renderer-attached', function (_ref) {
    var id = _ref.id,
        renderer = _ref.renderer,
        helpers = _ref.helpers;
    agent.setReactInternals(id, helpers);
    helpers.walkTree(agent.onMounted.bind(agent, id), agent.addRoot.bind(agent, id));
  }), hook.sub('mount', function (_ref2) {
    var renderer = _ref2.renderer,
        internalInstance = _ref2.internalInstance,
        data = _ref2.data;
    return agent.onMounted(renderer, internalInstance, data);
  }), hook.sub('unmount', function (_ref3) {
    var renderer = _ref3.renderer,
        internalInstance = _ref3.internalInstance;
    return agent.onUnmounted(internalInstance);
  }), hook.sub('update', function (_ref4) {
    var renderer = _ref4.renderer,
        internalInstance = _ref4.internalInstance,
        data = _ref4.data;
    return agent.onUpdated(internalInstance, data);
  }), // Required by Profiler plugin
  hook.sub('root', function (_ref5) {
    var renderer = _ref5.renderer,
        internalInstance = _ref5.internalInstance;
    return agent.addRoot(renderer, internalInstance);
  }), hook.sub('rootCommitted', function (_ref6) {
    var renderer = _ref6.renderer,
        internalInstance = _ref6.internalInstance,
        data = _ref6.data;
    return agent.rootCommitted(renderer, internalInstance, data);
  }), hook.sub('updateProfileTimes', function (_ref7) {
    var renderer = _ref7.renderer,
        internalInstance = _ref7.internalInstance,
        data = _ref7.data;
    return agent.onUpdatedProfileTimes(internalInstance, data);
  }), // fibertree
  hook.sub('sendFiberTree', function (_ref8) {
    var renderer = _ref8.renderer,
        internalInstance = _ref8.internalInstance,
        data = _ref8.data;
    return agent.onSendFiberTree(internalInstance, data);
  })];
  var success = setupBackend(hook);

  if (!success) {
    return;
  }

  hook.emit('react-devtools', agent);
  hook.reactDevtoolsAgent = agent;
  agent.on('shutdown', function () {
    subs.forEach(function (fn) {
      return fn();
    });
    hook.reactDevtoolsAgent = null;
  });
};

/***/ }),

/***/ "../../backend/ReactDebugHooks.js":
/*!***************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/ReactDebugHooks.js ***!
  \***************************************************************************************************/
/*! exports provided: inspectHooks, inspectHooksOfFiber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectHooks", function() { return inspectHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectHooksOfFiber", function() { return inspectHooksOfFiber; });
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! error-stack-parser */ "../../node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This file was forked from the React GitHub repo:
// https://github.com/facebook/react/blob/master/packages/react-debug-tools/src/ReactDebugHooks.js
// It has been modified slightly though to account for "shared" imports and different lint configs.
// I've also removed some of the Flow types that don't exist in DevTools.
 // HACK: These values are copied from attachRendererFiber
// In the future, the react-debug-hooks package will be published to NPM,
// and be locked to a specific range of react versions
// For now we are just hard-coding the current/latest versions.

var ContextProvider = 10;
var ForwardRef = 11;
var FunctionComponent = 0;
var SimpleMemoComponent = 15; // Used to track hooks called during a render

var hookLog = []; // Primitives

var primitiveStackCache = null;

function getPrimitiveStackCache() {
  // This initializes a cache of all primitive hooks so that the top
  // most stack frames added by calling the primitive hook can be removed.
  if (primitiveStackCache === null) {
    var cache = new Map();
    var readHookLog;

    try {
      // Use all hooks here to add them to the hook log.
      Dispatcher.useContext({
        _currentValue: null
      });
      Dispatcher.useState(null);
      Dispatcher.useReducer(function (s, a) {
        return s;
      }, null);
      Dispatcher.useRef(null);
      Dispatcher.useLayoutEffect(function () {});
      Dispatcher.useEffect(function () {});
      Dispatcher.useImperativeHandle(undefined, function () {
        return null;
      });
      Dispatcher.useCallback(function () {});
      Dispatcher.useMemo(function () {
        return null;
      });
      Dispatcher.useDebugValue(null);
    } finally {
      readHookLog = hookLog;
      hookLog = [];
    }

    for (var i = 0; i < readHookLog.length; i++) {
      var hook = readHookLog[i];
      cache.set(hook.primitive, error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(hook.stackError));
    }

    primitiveStackCache = cache;
  }

  return primitiveStackCache;
}

var currentHook = null;

function nextHook() {
  var hook = currentHook;

  if (hook !== null) {
    currentHook = hook.next;
  }

  return hook;
}

function readContext(context, observedBits) {
  // For now we don't expose readContext usage in the hooks debugging info.
  return context._currentValue;
}

function useContext(context, observedBits) {
  hookLog.push({
    primitive: 'Context',
    stackError: new Error(),
    value: context._currentValue
  });
  return context._currentValue;
}

function useState(initialState) {
  var hook = nextHook();
  var state = hook !== null ? hook.memoizedState : typeof initialState === 'function' ? initialState() : initialState;
  hookLog.push({
    primitive: 'State',
    stackError: new Error(),
    value: state
  });
  return [state, function (action) {}];
}

function useReducer(reducer, initialState, initialAction) {
  var hook = nextHook();
  var state = hook !== null ? hook.memoizedState : initialState;
  hookLog.push({
    primitive: 'Reducer',
    stackError: new Error(),
    value: state
  });
  return [state, function (action) {}];
}

function useRef(initialValue) {
  var hook = nextHook();
  var ref = hook !== null ? hook.memoizedState : {
    current: initialValue
  };
  hookLog.push({
    primitive: 'Ref',
    stackError: new Error(),
    value: ref.current
  });
  return ref;
}

function useLayoutEffect(create, inputs) {
  nextHook();
  hookLog.push({
    primitive: 'LayoutEffect',
    stackError: new Error(),
    value: create
  });
}

function useEffect(create, inputs) {
  nextHook();
  hookLog.push({
    primitive: 'Effect',
    stackError: new Error(),
    value: create
  });
}

function useImperativeHandle(ref, create, inputs) {
  nextHook(); // We don't actually store the instance anywhere if there is no ref callback
  // and if there is a ref callback it might not store it but if it does we
  // have no way of knowing where. So let's only enable introspection of the
  // ref itself if it is using the object form.

  var instance = undefined;

  if (ref !== null && _typeof(ref) === 'object') {
    instance = ref.current;
  }

  hookLog.push({
    primitive: 'ImperativeHandle',
    stackError: new Error(),
    value: instance
  });
}

function useCallback(callback, inputs) {
  var hook = nextHook();
  hookLog.push({
    primitive: 'Callback',
    stackError: new Error(),
    value: hook !== null ? hook.memoizedState[0] : callback
  });
  return callback;
}

function useDebugValue(value, formatterFn) {
  hookLog.push({
    primitive: 'DebugValue',
    stackError: new Error(),
    value: typeof formatterFn === 'function' ? formatterFn(value) : value
  });
}

function useMemo(nextCreate, inputs) {
  var hook = nextHook();
  var value = hook !== null ? hook.memoizedState[0] : nextCreate();
  hookLog.push({
    primitive: 'Memo',
    stackError: new Error(),
    value: value
  });
  return value;
}

var Dispatcher = {
  readContext: readContext,
  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState
}; // Inspect

// Don't assume
//
// We can't assume that stack frames are nth steps away from anything.
// E.g. we can't assume that the root call shares all frames with the stack
// of a hook call. A simple way to demonstrate this is wrapping `new Error()`
// in a wrapper constructor like a polyfill. That'll add an extra frame.
// Similar things can happen with the call to the dispatcher. The top frame
// may not be the primitive. Likewise the primitive can have fewer stack frames
// such as when a call to useState got inlined to use dispatcher.useState.
//
// We also can't assume that the last frame of the root call is the same
// frame as the last frame of the hook call because long stack traces can be
// truncated to a stack trace limit.
var mostLikelyAncestorIndex = 0;

function findSharedIndex(hookStack, rootStack, rootIndex) {
  var source = rootStack[rootIndex].source;

  hookSearch: for (var i = 0; i < hookStack.length; i++) {
    if (hookStack[i].source === source) {
      // This looks like a match. Validate that the rest of both stack match up.
      for (var a = rootIndex + 1, b = i + 1; a < rootStack.length && b < hookStack.length; a++, b++) {
        if (hookStack[b].source !== rootStack[a].source) {
          // If not, give up and try a different match.
          continue hookSearch;
        }
      }

      return i;
    }
  }

  return -1;
}

function findCommonAncestorIndex(rootStack, hookStack) {
  var rootIndex = findSharedIndex(hookStack, rootStack, mostLikelyAncestorIndex);

  if (rootIndex !== -1) {
    return rootIndex;
  } // If the most likely one wasn't a hit, try any other frame to see if it is shared.
  // If that takes more than 5 frames, something probably went wrong.


  for (var i = 0; i < rootStack.length && i < 5; i++) {
    rootIndex = findSharedIndex(hookStack, rootStack, i);

    if (rootIndex !== -1) {
      mostLikelyAncestorIndex = i;
      return rootIndex;
    }
  }

  return -1;
}

function isReactWrapper(functionName, primitiveName) {
  if (!functionName) {
    return false;
  }

  var expectedPrimitiveName = 'use' + primitiveName;

  if (functionName.length < expectedPrimitiveName.length) {
    return false;
  }

  return functionName.lastIndexOf(expectedPrimitiveName) === functionName.length - expectedPrimitiveName.length;
}

function findPrimitiveIndex(hookStack, hook) {
  var stackCache = getPrimitiveStackCache();
  var primitiveStack = stackCache.get(hook.primitive);

  if (primitiveStack === undefined) {
    return -1;
  }

  for (var i = 0; i < primitiveStack.length && i < hookStack.length; i++) {
    if (primitiveStack[i].source !== hookStack[i].source) {
      // If the next two frames are functions called `useX` then we assume that they're part of the
      // wrappers that the React packager or other packages adds around the dispatcher.
      if (i < hookStack.length - 1 && isReactWrapper(hookStack[i].functionName, hook.primitive)) {
        i++;
      }

      if (i < hookStack.length - 1 && isReactWrapper(hookStack[i].functionName, hook.primitive)) {
        i++;
      }

      return i;
    }
  }

  return -1;
}

function parseTrimmedStack(rootStack, hook) {
  // Get the stack trace between the primitive hook function and
  // the root function call. I.e. the stack frames of custom hooks.
  var hookStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(hook.stackError);
  var rootIndex = findCommonAncestorIndex(rootStack, hookStack);
  var primitiveIndex = findPrimitiveIndex(hookStack, hook);

  if (rootIndex === -1 || primitiveIndex === -1 || rootIndex - primitiveIndex < 2) {
    // Something went wrong. Give up.
    return null;
  }

  return hookStack.slice(primitiveIndex, rootIndex - 1);
}

function parseCustomHookName(functionName) {
  if (!functionName) {
    return '';
  }

  var startIndex = functionName.lastIndexOf('.');

  if (startIndex === -1) {
    startIndex = 0;
  }

  if (functionName.substr(startIndex, 3) === 'use') {
    startIndex += 3;
  }

  return functionName.substr(startIndex);
}

function buildTree(rootStack, readHookLog) {
  var rootChildren = [];
  var prevStack = null;
  var levelChildren = rootChildren;
  var stackOfChildren = [];

  for (var i = 0; i < readHookLog.length; i++) {
    var hook = readHookLog[i];
    var stack = parseTrimmedStack(rootStack, hook);

    if (stack !== null) {
      // Note: The indices 0 <= n < length-1 will contain the names.
      // The indices 1 <= n < length will contain the source locations.
      // That's why we get the name from n - 1 and don't check the source
      // of index 0.
      var commonSteps = 0;

      if (prevStack !== null) {
        // Compare the current level's stack to the new stack.
        while (commonSteps < stack.length && commonSteps < prevStack.length) {
          var stackSource = stack[stack.length - commonSteps - 1].source;
          var prevSource = prevStack[prevStack.length - commonSteps - 1].source;

          if (stackSource !== prevSource) {
            break;
          }

          commonSteps++;
        } // Pop back the stack as many steps as were not common.


        for (var j = prevStack.length - 1; j > commonSteps; j--) {
          levelChildren = stackOfChildren.pop();
        }
      } // The remaining part of the new stack are custom hooks. Push them
      // to the tree.


      for (var _j = stack.length - commonSteps - 1; _j >= 1; _j--) {
        var children = [];
        levelChildren.push({
          name: parseCustomHookName(stack[_j - 1].functionName),
          value: undefined,
          subHooks: children
        });
        stackOfChildren.push(levelChildren);
        levelChildren = children;
      }

      prevStack = stack;
    }

    levelChildren.push({
      name: hook.primitive,
      value: hook.value,
      subHooks: []
    });
  } // Associate custom hook values (useDebugValue() hook entries) with the correct hooks.


  rollupDebugValues(rootChildren, null);
  return rootChildren;
} // Custom hooks support user-configurable labels (via the useDebugValue() hook).
// That hook adds the user-provided values to the hooks tree.
// This method removes those values (so they don't appear in DevTools),
// and bubbles them up to the "value" attribute of their parent custom hook.


function rollupDebugValues(hooksTree, parentHooksNode) {
  var debugValueHooksNodes = [];

  for (var i = 0; i < hooksTree.length; i++) {
    var hooksNode = hooksTree[i];

    if (hooksNode.name === 'DebugValue' && hooksNode.subHooks.length === 0) {
      hooksTree.splice(i, 1);
      i--;
      debugValueHooksNodes.push(hooksNode);
    } else {
      rollupDebugValues(hooksNode.subHooks, hooksNode);
    }
  } // Bubble debug value labels to their parent custom hook.
  // If there is no parent hook, just ignore them.
  // (We may warn about this in the future.)


  if (parentHooksNode !== null) {
    if (debugValueHooksNodes.length === 1) {
      parentHooksNode.value = debugValueHooksNodes[0].value;
    } else if (debugValueHooksNodes.length > 1) {
      parentHooksNode.value = debugValueHooksNodes.map(function (_ref) {
        var value = _ref.value;
        return value;
      });
    }
  }
}

function inspectHooks(renderFunction, props, currentDispatcher) {
  var previousDispatcher = currentDispatcher.current;
  var readHookLog;
  currentDispatcher.current = Dispatcher;
  var ancestorStackError;

  try {
    ancestorStackError = new Error();
    renderFunction(props);
  } finally {
    readHookLog = hookLog;
    hookLog = [];
    currentDispatcher.current = previousDispatcher;
  }

  var rootStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(ancestorStackError);
  return buildTree(rootStack, readHookLog);
}

function setupContexts(contextMap, fiber) {
  var current = fiber;

  while (current) {
    if (current.tag === ContextProvider) {
      var providerType = current.type;
      var context = providerType._context;

      if (!contextMap.has(context)) {
        // Store the current value that we're going to restore later.
        contextMap.set(context, context._currentValue); // Set the inner most provider value on the context.

        context._currentValue = current.memoizedProps.value;
      }
    }

    current = current.return;
  }
}

function restoreContexts(contextMap) {
  contextMap.forEach(function (value, context) {
    return context._currentValue = value;
  });
}

function inspectHooksOfForwardRef(renderFunction, props, ref, currentDispatcher) {
  var previousDispatcher = currentDispatcher.current;
  var readHookLog;
  currentDispatcher.current = Dispatcher;
  var ancestorStackError;

  try {
    ancestorStackError = new Error();
    renderFunction(props, ref);
  } finally {
    readHookLog = hookLog;
    hookLog = [];
    currentDispatcher.current = previousDispatcher;
  }

  var rootStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(ancestorStackError);
  return buildTree(rootStack, readHookLog);
}

function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = Object.assign({}, baseProps);
    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

function inspectHooksOfFiber(fiber, currentDispatcher) {
  if (fiber.tag !== FunctionComponent && fiber.tag !== SimpleMemoComponent && fiber.tag !== ForwardRef) {
    throw new Error('Unknown Fiber. Needs to be a function component to inspect hooks.');
  } // Warm up the cache so that it doesn't consume the currentHook.


  getPrimitiveStackCache();
  var type = fiber.type;
  var props = fiber.memoizedProps;

  if (type !== fiber.elementType) {
    props = resolveDefaultProps(type, props);
  } // Set up the current hook so that we can step through and read the
  // current state from them.


  currentHook = fiber.memoizedState;
  var contextMap = new Map();

  try {
    setupContexts(contextMap, fiber);

    if (fiber.tag === ForwardRef) {
      return inspectHooksOfForwardRef(type.render, props, fiber.ref, currentDispatcher);
    }

    return inspectHooks(type, props, currentDispatcher);
  } finally {
    currentHook = null;
    restoreContexts(contextMap);
  }
}

/***/ }),

/***/ "../../backend/attachRenderer.js":
/*!**************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/attachRenderer.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var getData = __webpack_require__(/*! ./getData */ "../../backend/getData.js");

var getData012 = __webpack_require__(/*! ./getData012 */ "../../backend/getData012.js");

var attachRendererFiber = __webpack_require__(/*! ./attachRendererFiber */ "../../backend/attachRendererFiber.js");

/**
 * This takes care of patching the renderer to emit events on the global
 * `Hook`. The returned object has a `.cleanup` method to un-patch everything.
 */
function attachRenderer(hook, rid, renderer) {
  var rootNodeIDMap = new Map();
  var extras = {}; // Before 0.13 there was no Reconciler, so we patch Component.Mixin

  var isPre013 = !renderer.Reconciler; // React Fiber

  if (typeof renderer.findFiberByHostInstance === 'function') {
    return attachRendererFiber(hook, rid, renderer);
  } // React Native


  if (renderer.Mount.findNodeHandle && renderer.Mount.nativeTagToRootNodeID) {
    extras.getNativeFromReactElement = function (component) {
      return renderer.Mount.findNodeHandle(component);
    };

    extras.getReactElementFromNative = function (nativeTag) {
      var id = renderer.Mount.nativeTagToRootNodeID(nativeTag);
      return rootNodeIDMap.get(id);
    }; // React DOM 15+

  } else if (renderer.ComponentTree) {
    extras.getNativeFromReactElement = function (component) {
      return renderer.ComponentTree.getNodeFromInstance(component);
    };

    extras.getReactElementFromNative = function (node) {
      return renderer.ComponentTree.getClosestInstanceFromNode(node);
    }; // React DOM

  } else if (renderer.Mount.getID && renderer.Mount.getNode) {
    extras.getNativeFromReactElement = function (component) {
      try {
        return renderer.Mount.getNode(component._rootNodeID);
      } catch (e) {
        return undefined;
      }
    };

    extras.getReactElementFromNative = function (node) {
      // $FlowFixMe
      var id = renderer.Mount.getID(node);

      while (node && node.parentNode && !id) {
        node = node.parentNode; // $FlowFixMe

        id = renderer.Mount.getID(node);
      }

      return rootNodeIDMap.get(id);
    };
  } else {
    console.warn('Unknown react version (does not have getID), probably an unshimmed React Native');
  }

  var oldMethods;
  var oldRenderComponent;
  var oldRenderRoot; // React DOM

  if (renderer.Mount._renderNewRootComponent) {
    oldRenderRoot = decorateResult(renderer.Mount, '_renderNewRootComponent', function (internalInstance) {
      hook.emit('root', {
        renderer: rid,
        internalInstance: internalInstance
      });
    }); // React Native
  } else if (renderer.Mount.renderComponent) {
    oldRenderComponent = decorateResult(renderer.Mount, 'renderComponent', function (internalInstance) {
      hook.emit('root', {
        renderer: rid,
        internalInstance: internalInstance._reactInternalInstance
      });
    });
  }

  if (renderer.Component) {
    console.error('You are using a version of React with limited support in this version of the devtools.\nPlease upgrade to use at least 0.13, or you can downgrade to use the old version of the devtools:\ninstructions here https://github.com/facebook/react-devtools/tree/devtools-next#how-do-i-use-this-for-react--013'); // 0.11 - 0.12
    // $FlowFixMe renderer.Component is not "possibly undefined"

    oldMethods = decorateMany(renderer.Component.Mixin, {
      mountComponent: function mountComponent() {
        var _this = this;

        rootNodeIDMap.set(this._rootNodeID, this); // FIXME DOMComponent calls Component.Mixin, and sets up the
        // `children` *after* that call, meaning we don't have access to the
        // children at this point. Maybe we should find something else to shim
        // (do we have access to DOMComponent here?) so that we don't have to
        // setTimeout.

        setTimeout(function () {
          hook.emit('mount', {
            internalInstance: _this,
            data: getData012(_this),
            renderer: rid
          });
        }, 0);
      },
      updateComponent: function updateComponent() {
        var _this2 = this;

        setTimeout(function () {
          hook.emit('update', {
            internalInstance: _this2,
            data: getData012(_this2),
            renderer: rid
          });
        }, 0);
      },
      unmountComponent: function unmountComponent() {
        hook.emit('unmount', {
          internalInstance: this,
          renderer: rid
        });
        rootNodeIDMap.delete(this._rootNodeID);
      }
    });
  } else if (renderer.Reconciler) {
    oldMethods = decorateMany(renderer.Reconciler, {
      mountComponent: function mountComponent(internalInstance, rootID, transaction, context) {
        var data = getData(internalInstance);
        rootNodeIDMap.set(internalInstance._rootNodeID, internalInstance);
        hook.emit('mount', {
          internalInstance: internalInstance,
          data: data,
          renderer: rid
        });
      },
      performUpdateIfNecessary: function performUpdateIfNecessary(internalInstance, nextChild, transaction, context) {
        hook.emit('update', {
          internalInstance: internalInstance,
          data: getData(internalInstance),
          renderer: rid
        });
      },
      receiveComponent: function receiveComponent(internalInstance, nextChild, transaction, context) {
        hook.emit('update', {
          internalInstance: internalInstance,
          data: getData(internalInstance),
          renderer: rid
        });
      },
      unmountComponent: function unmountComponent(internalInstance) {
        hook.emit('unmount', {
          internalInstance: internalInstance,
          renderer: rid
        });
        rootNodeIDMap.delete(internalInstance._rootNodeID);
      }
    });
  }

  extras.walkTree = function (visit, visitRoot) {
    var onMount = function onMount(component, data) {
      rootNodeIDMap.set(component._rootNodeID, component);
      visit(component, data);
    };

    walkRoots(renderer.Mount._instancesByReactRootID || renderer.Mount._instancesByContainerID, onMount, visitRoot, isPre013);
  };

  extras.cleanup = function () {
    if (oldMethods) {
      if (renderer.Component) {
        restoreMany(renderer.Component.Mixin, oldMethods);
      } else {
        restoreMany(renderer.Reconciler, oldMethods);
      }
    }

    if (oldRenderRoot) {
      renderer.Mount._renderNewRootComponent = oldRenderRoot;
    }

    if (oldRenderComponent) {
      renderer.Mount.renderComponent = oldRenderComponent;
    }

    oldMethods = null;
    oldRenderRoot = null;
    oldRenderComponent = null;
  };

  extras.renderer = null;
  return extras;
}

function walkRoots(roots, onMount, onRoot, isPre013) {
  for (var name in roots) {
    walkNode(roots[name], onMount, isPre013);
    onRoot(roots[name]);
  }
}

function walkNode(internalInstance, onMount, isPre013) {
  var data = isPre013 ? getData012(internalInstance) : getData(internalInstance);

  if (data.children && Array.isArray(data.children)) {
    data.children.forEach(function (child) {
      return walkNode(child, onMount, isPre013);
    });
  }

  onMount(internalInstance, data);
}

function decorateResult(obj, attr, fn) {
  var old = obj[attr];

  obj[attr] = function (instance) {
    var res = old.apply(this, arguments);
    fn(res);
    return res;
  };

  return old;
}

function decorate(obj, attr, fn) {
  var old = obj[attr];

  obj[attr] = function (instance) {
    var res = old.apply(this, arguments);
    fn.apply(this, arguments);
    return res;
  };

  return old;
}

function decorateMany(source, fns) {
  var olds = {};

  for (var name in fns) {
    olds[name] = decorate(source, name, fns[name]);
  }

  return olds;
}

function restoreMany(source, olds) {
  for (var name in olds) {
    source[name] = olds[name];
  }
}

module.exports = attachRenderer;

/***/ }),

/***/ "../../backend/attachRendererFiber.js":
/*!*******************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/attachRendererFiber.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var semver = __webpack_require__(/*! semver */ "../../node_modules/semver/semver.js");

var copyWithSet = __webpack_require__(/*! ./copyWithSet */ "../../backend/copyWithSet.js");

var getDisplayName = __webpack_require__(/*! ./getDisplayName */ "../../backend/getDisplayName.js"); // Taken from ReactElement.


function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = Object.assign({}, baseProps);
    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

function getInternalReactConstants(version) {
  var ReactTypeOfWork;
  var ReactSymbols;
  var ReactTypeOfSideEffect; // **********************************************************
  // The section below is copied from files in React repo.
  // Keep it in sync, and add version guards if it changes.
  // **********************************************************

  if (semver.gte(version, '16.6.0-beta.0')) {
    ReactTypeOfWork = {
      ClassComponent: 1,
      ContextConsumer: 9,
      ContextProvider: 10,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      ForwardRef: 11,
      Fragment: 7,
      FunctionComponent: 0,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: 17,
      IndeterminateComponent: 2,
      LazyComponent: 16,
      MemoComponent: 14,
      Mode: 8,
      Profiler: 12,
      SimpleMemoComponent: 15,
      SuspenseComponent: 13,
      YieldComponent: -1 // Removed

    };
  } else if (semver.gte(version, '16.4.3-alpha')) {
    ReactTypeOfWork = {
      ClassComponent: 2,
      ContextConsumer: 11,
      ContextProvider: 12,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      ForwardRef: 13,
      Fragment: 9,
      FunctionComponent: 0,
      HostComponent: 7,
      HostPortal: 6,
      HostRoot: 5,
      HostText: 8,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 4,
      LazyComponent: -1,
      // Doesn't exist yet
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 10,
      Profiler: 15,
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      YieldComponent: -1 // Removed

    };
  } else {
    ReactTypeOfWork = {
      ClassComponent: 2,
      ContextConsumer: 12,
      ContextProvider: 13,
      CoroutineComponent: 7,
      CoroutineHandlerPhase: 8,
      ForwardRef: 14,
      Fragment: 10,
      FunctionComponent: 1,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 0,
      LazyComponent: -1,
      // Doesn't exist yet
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 11,
      Profiler: 15,
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      YieldComponent: 9
    };
  }

  ReactSymbols = {
    CONCURRENT_MODE_NUMBER: 0xeacf,
    CONCURRENT_MODE_SYMBOL_STRING: 'Symbol(react.concurrent_mode)',
    DEPRECATED_ASYNC_MODE_SYMBOL_STRING: 'Symbol(react.async_mode)',
    CONTEXT_CONSUMER_NUMBER: 0xeace,
    CONTEXT_CONSUMER_SYMBOL_STRING: 'Symbol(react.context)',
    CONTEXT_PROVIDER_NUMBER: 0xeacd,
    CONTEXT_PROVIDER_SYMBOL_STRING: 'Symbol(react.provider)',
    FORWARD_REF_NUMBER: 0xead0,
    FORWARD_REF_SYMBOL_STRING: 'Symbol(react.forward_ref)',
    MEMO_NUMBER: 0xead3,
    MEMO_SYMBOL_STRING: 'Symbol(react.memo)',
    PROFILER_NUMBER: 0xead2,
    PROFILER_SYMBOL_STRING: 'Symbol(react.profiler)',
    STRICT_MODE_NUMBER: 0xeacc,
    STRICT_MODE_SYMBOL_STRING: 'Symbol(react.strict_mode)',
    SUSPENSE_NUMBER: 0xead1,
    SUSPENSE_SYMBOL_STRING: 'Symbol(react.suspense)',
    DEPRECATED_PLACEHOLDER_SYMBOL_STRING: 'Symbol(react.placeholder)'
  };
  ReactTypeOfSideEffect = {
    PerformedWork: 1
  }; // **********************************************************
  // End of copied code.
  // **********************************************************

  return {
    ReactTypeOfWork: ReactTypeOfWork,
    ReactSymbols: ReactSymbols,
    ReactTypeOfSideEffect: ReactTypeOfSideEffect
  };
}

function attachRendererFiber(hook, rid, renderer) {
  var overrideProps = renderer.overrideProps;

  var _getInternalReactCons = getInternalReactConstants(renderer.version),
      ReactTypeOfWork = _getInternalReactCons.ReactTypeOfWork,
      ReactSymbols = _getInternalReactCons.ReactSymbols,
      ReactTypeOfSideEffect = _getInternalReactCons.ReactTypeOfSideEffect;

  var PerformedWork = ReactTypeOfSideEffect.PerformedWork;
  var FunctionComponent = ReactTypeOfWork.FunctionComponent,
      ClassComponent = ReactTypeOfWork.ClassComponent,
      ContextConsumer = ReactTypeOfWork.ContextConsumer,
      Fragment = ReactTypeOfWork.Fragment,
      ForwardRef = ReactTypeOfWork.ForwardRef,
      HostRoot = ReactTypeOfWork.HostRoot,
      HostPortal = ReactTypeOfWork.HostPortal,
      HostComponent = ReactTypeOfWork.HostComponent,
      HostText = ReactTypeOfWork.HostText,
      IncompleteClassComponent = ReactTypeOfWork.IncompleteClassComponent,
      IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent,
      MemoComponent = ReactTypeOfWork.MemoComponent,
      SimpleMemoComponent = ReactTypeOfWork.SimpleMemoComponent;
  var CONCURRENT_MODE_NUMBER = ReactSymbols.CONCURRENT_MODE_NUMBER,
      CONCURRENT_MODE_SYMBOL_STRING = ReactSymbols.CONCURRENT_MODE_SYMBOL_STRING,
      DEPRECATED_ASYNC_MODE_SYMBOL_STRING = ReactSymbols.DEPRECATED_ASYNC_MODE_SYMBOL_STRING,
      CONTEXT_CONSUMER_NUMBER = ReactSymbols.CONTEXT_CONSUMER_NUMBER,
      CONTEXT_CONSUMER_SYMBOL_STRING = ReactSymbols.CONTEXT_CONSUMER_SYMBOL_STRING,
      CONTEXT_PROVIDER_NUMBER = ReactSymbols.CONTEXT_PROVIDER_NUMBER,
      CONTEXT_PROVIDER_SYMBOL_STRING = ReactSymbols.CONTEXT_PROVIDER_SYMBOL_STRING,
      PROFILER_NUMBER = ReactSymbols.PROFILER_NUMBER,
      PROFILER_SYMBOL_STRING = ReactSymbols.PROFILER_SYMBOL_STRING,
      STRICT_MODE_NUMBER = ReactSymbols.STRICT_MODE_NUMBER,
      STRICT_MODE_SYMBOL_STRING = ReactSymbols.STRICT_MODE_SYMBOL_STRING,
      SUSPENSE_NUMBER = ReactSymbols.SUSPENSE_NUMBER,
      SUSPENSE_SYMBOL_STRING = ReactSymbols.SUSPENSE_SYMBOL_STRING,
      DEPRECATED_PLACEHOLDER_SYMBOL_STRING = ReactSymbols.DEPRECATED_PLACEHOLDER_SYMBOL_STRING; // TODO: we might want to change the data structure
  // once we no longer support Stack versions of `getData`.

  function getDataFiber(fiber) {
    var elementType = fiber.elementType;
    var type = fiber.type;
    var key = fiber.key;
    var ref = fiber.ref;
    var tag = fiber.tag;
    var source = fiber._debugSource;
    var publicInstance = null;
    var props = null;
    var state = null;
    var children = null;
    var context = null;
    var updater = null;
    var nodeType = null;
    var name = null;
    var text = null;
    var resolvedContext = null; // Tracing

    var memoizedInteractions = null; // Profiler

    var actualDuration = null;
    var actualStartTime = null;
    var treeBaseDuration = null; // Suspense

    var isTimedOutSuspense = false; // Hooks inspection

    var containsHooks = (tag === FunctionComponent || tag === SimpleMemoComponent || tag === ForwardRef) && !!fiber.memoizedState;
    var resolvedType = type;

    if (_typeof(type) === 'object' && type !== null) {
      if (typeof type.then === 'function') {
        resolvedType = type._reactResult;
      }
    }

    if (typeof overrideProps === 'function') {
      updater = {
        canUpdate: true,
        setState: null,
        setInProps: overrideProps.bind(null, fiber),
        setInState: null,
        setInContext: null
      };
    }

    switch (tag) {
      case ClassComponent:
      case FunctionComponent:
      case IncompleteClassComponent:
      case IndeterminateComponent:
        nodeType = 'Composite';
        name = getDisplayName(resolvedType);
        publicInstance = fiber.stateNode;
        props = fiber.memoizedProps;
        state = fiber.memoizedState;

        if (publicInstance != null) {
          context = publicInstance.context;

          if (context && Object.keys(context).length === 0) {
            context = null;
          }
        }

        var inst = publicInstance;

        if (inst) {
          updater = {
            canUpdate: true,
            setState: inst.setState && inst.setState.bind(inst),
            setInProps: inst.forceUpdate && setInProps.bind(null, fiber),
            setInState: inst.forceUpdate && setInState.bind(null, inst),
            setInContext: inst.forceUpdate && setInContext.bind(null, inst)
          };
        }

        children = [];
        break;

      case ForwardRef:
        var functionName = getDisplayName(resolvedType.render, '');
        nodeType = 'Special';
        name = resolvedType.displayName || (functionName !== '' ? "ForwardRef(".concat(functionName, ")") : 'ForwardRef');
        props = fiber.memoizedProps;
        state = fiber.memoizedState;
        children = [];
        break;

      case HostRoot:
        nodeType = 'Wrapper';
        children = [];
        memoizedInteractions = fiber.stateNode.memoizedInteractions;
        break;

      case HostPortal:
        nodeType = 'Portal';
        name = 'ReactPortal';
        props = {
          target: fiber.stateNode.containerInfo
        };
        children = [];
        break;

      case HostComponent:
        nodeType = 'Native';
        name = fiber.type; // TODO (bvaughn) we plan to remove this prefix anyway.
        // We can cut this special case out when it's gone.

        name = name.replace('topsecret-', '');
        publicInstance = fiber.stateNode;
        props = fiber.memoizedProps;

        if (typeof props.children === 'string' || typeof props.children === 'number') {
          children = props.children.toString();
        } else {
          children = [];
        }

        if (typeof fiber.stateNode.setNativeProps === 'function') {
          // For editing styles in RN
          updater = {
            setNativeProps: function setNativeProps(nativeProps) {
              fiber.stateNode.setNativeProps(nativeProps);
            }
          };
        }

        break;

      case HostText:
        nodeType = 'Text';
        publicInstance = fiber.stateNode;
        text = fiber.memoizedProps;
        break;

      case Fragment:
        nodeType = 'Wrapper';
        children = [];
        break;

      case MemoComponent:
      case SimpleMemoComponent:
        nodeType = 'Composite';

        if (elementType.displayName) {
          name = elementType.displayName;
        } else {
          var displayName = type.displayName || type.name;
          name = displayName ? "Memo(".concat(displayName, ")") : 'Memo';
        }

        props = fiber.memoizedProps;
        state = fiber.memoizedState;
        children = [];
        break;

      default:
        var symbolOrNumber = _typeof(type) === 'object' && type !== null ? type.$$typeof : type; // $FlowFixMe facebook/flow/issues/2362

        var switchValue = _typeof(symbolOrNumber) === 'symbol' ? symbolOrNumber.toString() : symbolOrNumber;

        switch (switchValue) {
          case CONCURRENT_MODE_NUMBER:
          case CONCURRENT_MODE_SYMBOL_STRING:
          case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
            nodeType = 'Special';
            name = 'ConcurrentMode';
            children = [];
            break;

          case CONTEXT_PROVIDER_NUMBER:
          case CONTEXT_PROVIDER_SYMBOL_STRING:
            nodeType = 'Special';
            props = fiber.memoizedProps; // 16.3.0 exposed the context object as "context"
            // PR #12501 changed it to "_context" for 16.3.1+

            resolvedContext = fiber.type._context || fiber.type.context;
            name = "".concat(resolvedContext.displayName || 'Context', ".Provider");
            children = [];
            break;

          case CONTEXT_CONSUMER_NUMBER:
          case CONTEXT_CONSUMER_SYMBOL_STRING:
            nodeType = 'Special';
            props = fiber.memoizedProps; // 16.3-16.5 read from "type" because the Consumer is the actual context object.
            // 16.6+ should read from "type._context" because Consumer can be different (in DEV).

            resolvedContext = fiber.type._context || fiber.type; // NOTE: TraceUpdatesBackendManager depends on the name ending in '.Consumer'
            // If you change the name, figure out a more resilient way to detect it.

            name = "".concat(resolvedContext.displayName || 'Context', ".Consumer");
            children = [];
            break;

          case STRICT_MODE_NUMBER:
          case STRICT_MODE_SYMBOL_STRING:
            nodeType = 'Special';
            name = 'StrictMode';
            children = [];
            break;

          case SUSPENSE_NUMBER:
          case SUSPENSE_SYMBOL_STRING:
          case DEPRECATED_PLACEHOLDER_SYMBOL_STRING:
            nodeType = 'Special';
            name = 'Suspense';
            props = fiber.memoizedProps;
            children = []; // Suspense components only have a non-null memoizedState if they're timed-out.

            isTimedOutSuspense = fiber.memoizedState !== null;
            break;

          case PROFILER_NUMBER:
          case PROFILER_SYMBOL_STRING:
            nodeType = 'Special';
            props = fiber.memoizedProps;
            name = "Profiler(".concat(fiber.memoizedProps.id, ")");
            children = [];
            break;

          default:
            nodeType = 'Native';
            props = fiber.memoizedProps;
            name = 'TODO_NOT_IMPLEMENTED_YET';
            children = [];
            break;
        }

        break;
    }

    if (props !== null && _typeof(fiber.elementType) !== undefined && fiber.type !== fiber.elementType) {
      props = resolveDefaultProps(fiber.type, props);
    }

    if (Array.isArray(children)) {
      if (isTimedOutSuspense) {
        // The behavior of timed-out Suspense trees is unique.
        // Rather than unmount the timed out content (and possibly lose important state),
        // React re-parents this content within a hidden Fragment while the fallback is showing.
        // This behavior doesn't need to be observable in the DevTools though.
        // It might even result in a bad user experience for e.g. node selection in the Elements panel.
        // The easiest fix is to strip out the intermediate Fragment fibers,
        // so the Elements panel and Profiler don't need to special case them.
        var primaryChildFragment = fiber.child;
        var primaryChild = primaryChildFragment.child;
        var fallbackChildFragment = primaryChildFragment.sibling;
        var fallbackChild = fallbackChildFragment.child;
        children.push(primaryChild);
        children.push(fallbackChild);
      } else {
        var child = fiber.child;

        while (child) {
          children.push(getOpaqueNode(child));
          child = child.sibling;
        }
      }
    }

    if (fiber.actualDuration !== undefined) {
      actualDuration = fiber.actualDuration;
      actualStartTime = fiber.actualStartTime;
      treeBaseDuration = fiber.treeBaseDuration;
    }

    if (publicInstance === null) {
      // publicInstance is used for $r.
      // If we have nothing useful to expose, at least give props and state.
      // This is an escape hatch to avoid a situation where there is useful
      // data in the tree but DevTools don't offer any way to get it through console.
      publicInstance = {
        props: props,
        state: state,
        type: type
      };
    } // $FlowFixMe


    return {
      nodeType: nodeType,
      type: type,
      key: key,
      ref: ref,
      source: source,
      name: name,
      props: props,
      state: state,
      context: context,
      children: children,
      text: text,
      updater: updater,
      publicInstance: publicInstance,
      // Tracing
      memoizedInteractions: memoizedInteractions,
      // Profiler data
      actualDuration: actualDuration,
      actualStartTime: actualStartTime,
      treeBaseDuration: treeBaseDuration,
      // Hooks inspection
      containsHooks: containsHooks
    };
  }

  function setInProps(fiber, path, value) {
    var inst = fiber.stateNode;
    fiber.pendingProps = copyWithSet(inst.props, path, value);

    if (fiber.alternate) {
      // We don't know which fiber is the current one because DevTools may bail out of getDataFiber() call,
      // and so the data object may refer to another version of the fiber. Therefore we update pendingProps
      // on both. I hope that this is safe.
      fiber.alternate.pendingProps = fiber.pendingProps;
    }

    fiber.stateNode.forceUpdate();
  }

  function setInState(inst, path, value) {
    setIn(inst.state, path, value);
    inst.forceUpdate();
  }

  function setInContext(inst, path, value) {
    setIn(inst.context, path, value);
    inst.forceUpdate();
  }

  function setIn(obj, path, value) {
    var last = path.pop();
    var parent = path.reduce(function (obj_, attr) {
      return obj_ ? obj_[attr] : null;
    }, obj);

    if (parent) {
      parent[last] = value;
    }
  } // This is a slightly annoying indirection.
  // It is currently necessary because DevTools wants
  // to use unique objects as keys for instances.
  // However fibers have two versions.
  // We use this set to remember first encountered fiber for
  // each conceptual instance.


  var opaqueNodes = new Set();

  function getOpaqueNode(fiber) {
    if (opaqueNodes.has(fiber)) {
      return fiber;
    }

    var alternate = fiber.alternate;

    if (alternate != null && opaqueNodes.has(alternate)) {
      return alternate;
    }

    opaqueNodes.add(fiber);
    return fiber;
  }

  function hasDataChanged(prevFiber, nextFiber) {
    switch (nextFiber.tag) {
      case ClassComponent:
      case FunctionComponent:
      case ContextConsumer:
      case MemoComponent:
      case SimpleMemoComponent:
        // For types that execute user code, we check PerformedWork effect.
        // We don't reflect bailouts (either referential or sCU) in DevTools.
        // eslint-disable-next-line no-bitwise
        return (nextFiber.effectTag & PerformedWork) === PerformedWork;
      // Note: ContextConsumer only gets PerformedWork effect in 16.3.3+
      // so it won't get highlighted with React 16.3.0 to 16.3.2.

      default:
        // For host components and other types, we compare inputs
        // to determine whether something is an update.
        return prevFiber.memoizedProps !== nextFiber.memoizedProps || prevFiber.memoizedState !== nextFiber.memoizedState || prevFiber.ref !== nextFiber.ref;
    }
  }

  function haveProfilerTimesChanged(prevFiber, nextFiber) {
    return prevFiber.actualDuration !== undefined && ( // Short-circuit check for non-profiling builds
    prevFiber.actualDuration !== nextFiber.actualDuration || prevFiber.actualStartTime !== nextFiber.actualStartTime || prevFiber.treeBaseDuration !== nextFiber.treeBaseDuration);
  }

  var pendingEvents = [];

  function flushPendingEvents() {
    var events = pendingEvents;
    pendingEvents = [];

    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      hook.emit(event.type, event);
    }
  }

  function enqueueMount(fiber) {
    pendingEvents.push({
      internalInstance: getOpaqueNode(fiber),
      data: getDataFiber(fiber),
      renderer: rid,
      type: 'mount'
    });
    var isRoot = fiber.tag === HostRoot;

    if (isRoot) {
      pendingEvents.push({
        internalInstance: getOpaqueNode(fiber),
        renderer: rid,
        type: 'root'
      });
    }
  }

  function enqueueUpdateIfNecessary(fiber, hasChildOrderChanged) {
    var data = getDataFiber(fiber);

    if (!hasChildOrderChanged && !hasDataChanged(fiber.alternate, fiber)) {
      // If only timing information has changed, we still need to update the nodes.
      // But we can do it in a faster way since we know it's safe to skip the children.
      // It's also important to avoid emitting an "update" signal for the node in this case,
      // Since that would indicate to the Profiler that it was part of the "commit" when it wasn't.
      if (haveProfilerTimesChanged(fiber.alternate, fiber)) {
        pendingEvents.push({
          internalInstance: getOpaqueNode(fiber),
          data: data,
          renderer: rid,
          type: 'updateProfileTimes'
        });
      }

      return;
    }

    pendingEvents.push({
      internalInstance: getOpaqueNode(fiber),
      data: data,
      renderer: rid,
      type: 'update'
    });
  }

  function enqueueUnmount(fiber) {
    var isRoot = fiber.tag === HostRoot;
    var opaqueNode = getOpaqueNode(fiber);
    var event = {
      internalInstance: opaqueNode,
      renderer: rid,
      type: 'unmount'
    };

    if (isRoot) {
      pendingEvents.push(event);
    } else {
      // Non-root fibers are deleted during the commit phase.
      // They are deleted in the child-first order. However
      // DevTools currently expects deletions to be parent-first.
      // This is why we unshift deletions rather than push them.
      pendingEvents.unshift(event);
    }

    opaqueNodes.delete(opaqueNode);
  }

  function markRootCommitted(fiber) {
    pendingEvents.push({
      internalInstance: getOpaqueNode(fiber),
      data: getDataFiber(fiber),
      renderer: rid,
      type: 'rootCommitted'
    });
  }

  function mountFiber(fiber) {
    // Depth-first.
    // Logs mounting of children first, parents later.
    var node = fiber;

    outer: while (true) {
      if (node.child) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      enqueueMount(node);

      if (node == fiber) {
        return;
      }

      if (node.sibling) {
        node.sibling.return = node.return;
        node = node.sibling;
        continue;
      }

      while (node.return) {
        node = node.return;
        enqueueMount(node);

        if (node == fiber) {
          return;
        }

        if (node.sibling) {
          node.sibling.return = node.return;
          node = node.sibling;
          continue outer;
        }
      }

      return;
    }
  }

  function updateFiber(nextFiber, prevFiber) {
    // Suspense components only have a non-null memoizedState if they're timed-out.
    var isTimedOutSuspense = nextFiber.tag === ReactTypeOfWork.SuspenseComponent && nextFiber.memoizedState !== null;

    if (isTimedOutSuspense) {
      // The behavior of timed-out Suspense trees is unique.
      // Rather than unmount the timed out content (and possibly lose important state),
      // React re-parents this content within a hidden Fragment while the fallback is showing.
      // This behavior doesn't need to be observable in the DevTools though.
      // It might even result in a bad user experience for e.g. node selection in the Elements panel.
      // The easiest fix is to strip out the intermediate Fragment fibers,
      // so the Elements panel and Profiler don't need to special case them.
      var primaryChildFragment = nextFiber.child;
      var fallbackChildFragment = primaryChildFragment.sibling;
      var fallbackChild = fallbackChildFragment.child; // The primary, hidden child is never actually updated in this case,
      // so we can skip any updates to its tree.
      // We only need to track updates to the Fallback UI for now.

      if (fallbackChild.alternate) {
        updateFiber(fallbackChild, fallbackChild.alternate);
      } else {
        mountFiber(fallbackChild);
      }

      enqueueUpdateIfNecessary(nextFiber, false);
    } else {
      var hasChildOrderChanged = false;

      if (nextFiber.child !== prevFiber.child) {
        // If the first child is different, we need to traverse them.
        // Each next child will be either a new child (mount) or an alternate (update).
        var nextChild = nextFiber.child;
        var prevChildAtSameIndex = prevFiber.child;

        while (nextChild) {
          // We already know children will be referentially different because
          // they are either new mounts or alternates of previous children.
          // Schedule updates and mounts depending on whether alternates exist.
          // We don't track deletions here because they are reported separately.
          if (nextChild.alternate) {
            var prevChild = nextChild.alternate;
            updateFiber(nextChild, prevChild); // However we also keep track if the order of the children matches
            // the previous order. They are always different referentially, but
            // if the instances line up conceptually we'll want to know that.

            if (!hasChildOrderChanged && prevChild !== prevChildAtSameIndex) {
              hasChildOrderChanged = true;
            }
          } else {
            mountFiber(nextChild);

            if (!hasChildOrderChanged) {
              hasChildOrderChanged = true;
            }
          } // Try the next child.


          nextChild = nextChild.sibling; // Advance the pointer in the previous list so that we can
          // keep comparing if they line up.

          if (!hasChildOrderChanged && prevChildAtSameIndex != null) {
            prevChildAtSameIndex = prevChildAtSameIndex.sibling;
          }
        } // If we have no more children, but used to, they don't line up.


        if (!hasChildOrderChanged && prevChildAtSameIndex != null) {
          hasChildOrderChanged = true;
        }
      }

      enqueueUpdateIfNecessary(nextFiber, hasChildOrderChanged);
    }
  }

  function walkTree() {
    hook.getFiberRoots(rid).forEach(function (root) {
      // Hydrate all the roots for the first time.
      mountFiber(root.current);
      markRootCommitted(root.current);
    });
    flushPendingEvents();
  }

  function cleanup() {// We don't patch any methods so there is no cleanup.
  }

  function handleCommitFiberUnmount(fiber) {
    // This is not recursive.
    // We can't traverse fibers after unmounting so instead
    // we rely on React telling us about each unmount.
    enqueueUnmount(fiber);
  }

  function handleSendFiberTree(fiberTreeInfo) {
    // This is not recursive.
    // We can't traverse fibers after unmounting so instead
    // we rely on React telling us about each unmount.
    pendingEvents.push({
      data: fiberTreeInfo,
      renderer: rid,
      type: 'sendFiberTree'
    });
    flushPendingEvents();
  }

  function handleCommitFiberRoot(root) {
    var current = root.current;
    var alternate = current.alternate;

    if (alternate) {
      // TODO: relying on this seems a bit fishy.
      var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
      var isMounted = current.memoizedState != null && current.memoizedState.element != null;

      if (!wasMounted && isMounted) {
        // Mount a new root.
        mountFiber(current);
      } else if (wasMounted && isMounted) {
        // Update an existing root.
        updateFiber(current, alternate);
      } else if (wasMounted && !isMounted) {
        // Unmount an existing root.
        enqueueUnmount(current);
      }
    } else {
      // Mount a new root.
      mountFiber(current);
    }

    markRootCommitted(current); // We're done here.

    flushPendingEvents();
  } // The naming is confusing.
  // They deal with opaque nodes (fibers), not elements.


  function getNativeFromReactElement(fiber) {
    try {
      var opaqueNode = fiber;
      var hostInstance = renderer.findHostInstanceByFiber(opaqueNode);
      return hostInstance;
    } catch (err) {
      // The fiber might have unmounted by now.
      return null;
    }
  }

  function getReactElementFromNative(hostInstance) {
    var fiber = renderer.findFiberByHostInstance(hostInstance);

    if (fiber != null) {
      // TODO: type fibers.
      var opaqueNode = getOpaqueNode(fiber);
      return opaqueNode;
    }

    return null;
  }

  return {
    getNativeFromReactElement: getNativeFromReactElement,
    getReactElementFromNative: getReactElementFromNative,
    handleCommitFiberRoot: handleCommitFiberRoot,
    handleCommitFiberUnmount: handleCommitFiberUnmount,
    handleSendFiberTree: handleSendFiberTree,
    cleanup: cleanup,
    walkTree: walkTree,
    renderer: renderer
  };
}

module.exports = attachRendererFiber;

/***/ }),

/***/ "../../backend/backend.js":
/*!*******************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/backend.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 *
 * This is the chrome devtools
 *
 * 1. Devtools sets the __REACT_DEVTOOLS_GLOBAL_HOOK__ global.
 * 2. React (if present) calls .inject() with the internal renderer
 * 3. Devtools sees the renderer, and then adds this backend, along with the Agent
 *    and whatever else is needed.
 * 4. The agent then calls `.emit('react-devtools', agent)`
 *
 * Now things are hooked up.
 *
 * When devtools closes, it calls `cleanup()` to remove the listeners
 * and any overhead caused by the backend.
 */


var attachRenderer = __webpack_require__(/*! ./attachRenderer */ "../../backend/attachRenderer.js");

module.exports = function setupBackend(hook) {
  var oldReact = window.React && window.React.__internals;

  if (oldReact && Object.keys(hook._renderers).length === 0) {
    hook.inject(oldReact);
  }

  for (var rid in hook._renderers) {
    hook.helpers[rid] = attachRenderer(hook, rid, hook._renderers[rid]);
    hook.emit('renderer-attached', {
      id: rid,
      renderer: hook._renderers[rid],
      helpers: hook.helpers[rid]
    });
  }

  hook.on('renderer', function (_ref) {
    var id = _ref.id,
        renderer = _ref.renderer;
    hook.helpers[id] = attachRenderer(hook, id, renderer);
    hook.emit('renderer-attached', {
      id: id,
      renderer: renderer,
      helpers: hook.helpers[id]
    });
  });

  var shutdown = function shutdown() {
    for (var id in hook.helpers) {
      hook.helpers[id].cleanup();
    }

    hook.off('shutdown', shutdown);
  };

  hook.on('shutdown', shutdown);
  hook.sendCachedFiberTree();
  return true;
};

/***/ }),

/***/ "../../backend/copyWithSet.js":
/*!***********************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/copyWithSet.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function copyWithSetImpl(obj, path, idx, value) {
  if (idx >= path.length) {
    return value;
  }

  var key = path[idx];
  var updated = Array.isArray(obj) ? obj.slice() : _objectSpread({}, obj); // $FlowFixMe number or string is fine here

  updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value);
  return updated;
}

function copyWithSet(obj, path, value) {
  return copyWithSetImpl(obj, path, 0, value);
}

module.exports = copyWithSet;

/***/ }),

/***/ "../../backend/getData.js":
/*!*******************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/getData.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
 // ----------------------------------------------------
// This is Stack-only version.
// The Fiber version is inlined in attachRendererFiber.
// ----------------------------------------------------

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var copyWithSet = __webpack_require__(/*! ./copyWithSet */ "../../backend/copyWithSet.js");

var getDisplayName = __webpack_require__(/*! ./getDisplayName */ "../../backend/getDisplayName.js");

var traverseAllChildrenImpl = __webpack_require__(/*! ./traverseAllChildrenImpl */ "../../backend/traverseAllChildrenImpl.js");
/**
 * Convert a react internal instance to a sanitized data object.
 */


function getData(internalInstance) {
  var children = null;
  var props = null;
  var state = null;
  var context = null;
  var updater = null;
  var name = null;
  var type = null;
  var key = null;
  var ref = null;
  var source = null;
  var text = null;
  var publicInstance = null;
  var nodeType = 'Native'; // If the parent is a native node without rendered children, but with
  // multiple string children, then the `element` that gets passed in here is
  // a plain value -- a string or number.

  if (_typeof(internalInstance) !== 'object') {
    nodeType = 'Text';
    text = internalInstance + '';
  } else if (internalInstance._currentElement === null || internalInstance._currentElement === false) {
    nodeType = 'Empty';
  } else if (internalInstance._renderedComponent) {
    nodeType = 'NativeWrapper';
    children = [internalInstance._renderedComponent];
    props = internalInstance._instance.props;
    state = internalInstance._instance.state;
    context = internalInstance._instance.context;

    if (context && Object.keys(context).length === 0) {
      context = null;
    }
  } else if (internalInstance._renderedChildren) {
    children = childrenList(internalInstance._renderedChildren);
  } else if (internalInstance._currentElement && internalInstance._currentElement.props) {
    // This is a native node without rendered children -- meaning the children
    // prop is the unfiltered list of children.
    // This may include 'null' or even other invalid values, so we need to
    // filter it the same way that ReactDOM does.
    // Instead of pulling in the whole React library, we just copied over the
    // 'traverseAllChildrenImpl' method.
    // https://github.com/facebook/react/blob/240b84ed8e1db715d759afaae85033718a0b24e1/src/isomorphic/children/ReactChildren.js#L112-L158
    var unfilteredChildren = internalInstance._currentElement.props.children;
    var filteredChildren = [];
    traverseAllChildrenImpl(unfilteredChildren, '', // nameSoFar
    function (_traverseContext, child) {
      var childType = _typeof(child);

      if (childType === 'string' || childType === 'number') {
        filteredChildren.push(child);
      }
    } // traverseContext
    );

    if (filteredChildren.length <= 1) {
      // children must be an array of nodes or a string or undefined
      // can't be an empty array
      children = filteredChildren.length ? String(filteredChildren[0]) : undefined;
    } else {
      children = filteredChildren;
    }
  }

  if (!props && internalInstance._currentElement && internalInstance._currentElement.props) {
    props = internalInstance._currentElement.props;
  } // != used deliberately here to catch undefined and null


  if (internalInstance._currentElement != null) {
    type = internalInstance._currentElement.type;

    if (internalInstance._currentElement.key) {
      key = String(internalInstance._currentElement.key);
    }

    source = internalInstance._currentElement._source;
    ref = internalInstance._currentElement.ref;

    if (typeof type === 'string') {
      name = type;

      if (internalInstance._nativeNode != null) {
        publicInstance = internalInstance._nativeNode;
      }

      if (internalInstance._hostNode != null) {
        publicInstance = internalInstance._hostNode;
      }
    } else if (typeof type === 'function') {
      nodeType = 'Composite';
      name = getDisplayName(type); // 0.14 top-level wrapper
      // TODO(jared): The backend should just act as if these don't exist.

      if (internalInstance._renderedComponent && (internalInstance._currentElement.props === internalInstance._renderedComponent._currentElement || internalInstance._currentElement.type.isReactTopLevelWrapper)) {
        nodeType = 'Wrapper';
      }

      if (name === null) {
        name = 'No display name';
      }
    } else if (typeof internalInstance._stringText === 'string') {
      nodeType = 'Text';
      text = internalInstance._stringText;
    } else {
      name = getDisplayName(type);
    }
  }

  if (internalInstance._instance) {
    var inst = internalInstance._instance; // A forceUpdate for stateless (functional) components.

    var forceUpdate = inst.forceUpdate || inst.updater && inst.updater.enqueueForceUpdate && function (cb) {
      inst.updater.enqueueForceUpdate(this, cb, 'forceUpdate');
    };

    updater = {
      canUpdate: true,
      setState: inst.setState && inst.setState.bind(inst),
      setInProps: forceUpdate && setInProps.bind(null, internalInstance, forceUpdate),
      setInState: inst.forceUpdate && setInState.bind(null, inst),
      setInContext: forceUpdate && setInContext.bind(null, inst, forceUpdate)
    };

    if (typeof type === 'function') {
      publicInstance = inst;
    } // TODO: React ART currently falls in this bucket, but this doesn't
    // actually make sense and we should clean this up after stabilizing our
    // API for backends


    if (inst._renderedChildren) {
      children = childrenList(inst._renderedChildren);
    }
  }

  if (typeof internalInstance.setNativeProps === 'function') {
    // For editing styles in RN
    updater = {
      setNativeProps: function setNativeProps(nativeProps) {
        internalInstance.setNativeProps(nativeProps);
      }
    };
  } // $FlowFixMe


  return {
    nodeType: nodeType,
    type: type,
    key: key,
    ref: ref,
    source: source,
    name: name,
    props: props,
    state: state,
    context: context,
    children: children,
    text: text,
    updater: updater,
    publicInstance: publicInstance
  };
}

function setInProps(internalInst, forceUpdate, path, value) {
  var element = internalInst._currentElement;
  internalInst._currentElement = _objectSpread({}, element, {
    props: copyWithSet(element.props, path, value)
  });
  forceUpdate.call(internalInst._instance);
}

function setInState(inst, path, value) {
  setIn(inst.state, path, value);
  inst.forceUpdate();
}

function setInContext(inst, forceUpdate, path, value) {
  setIn(inst.context, path, value);
  forceUpdate.call(inst);
}

function setIn(obj, path, value) {
  var last = path.pop();
  var parent = path.reduce(function (obj_, attr) {
    return obj_ ? obj_[attr] : null;
  }, obj);

  if (parent) {
    parent[last] = value;
  }
}

function childrenList(children) {
  var res = [];

  for (var name in children) {
    res.push(children[name]);
  }

  return res;
}

module.exports = getData;

/***/ }),

/***/ "../../backend/getData012.js":
/*!**********************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/getData012.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
 // ----------------------------------------------------
// This is Stack-only version.
// The Fiber version is inlined in attachRendererFiber.
// ----------------------------------------------------

var copyWithSet = __webpack_require__(/*! ./copyWithSet */ "../../backend/copyWithSet.js");

function getData012(internalInstance) {
  var children = null;
  var props = internalInstance.props;
  var state = internalInstance.state;
  var context = internalInstance.context;
  var updater = null;
  var name = null;
  var type = null;
  var key = null;
  var ref = null;
  var text = null;
  var publicInstance = null;
  var nodeType = 'Native';

  if (internalInstance._renderedComponent) {
    nodeType = 'Wrapper';
    children = [internalInstance._renderedComponent];

    if (context && Object.keys(context).length === 0) {
      context = null;
    }
  } else if (internalInstance._renderedChildren) {
    name = internalInstance.constructor.displayName;
    children = childrenList(internalInstance._renderedChildren);
  } else if (typeof props.children === 'string') {
    // string children
    name = internalInstance.constructor.displayName;
    children = props.children;
    nodeType = 'Native';
  }

  if (!props && internalInstance._currentElement && internalInstance._currentElement.props) {
    props = internalInstance._currentElement.props;
  }

  if (internalInstance._currentElement) {
    type = internalInstance._currentElement.type;

    if (internalInstance._currentElement.key) {
      key = String(internalInstance._currentElement.key);
    }

    ref = internalInstance._currentElement.ref;

    if (typeof type === 'string') {
      name = type;
    } else {
      nodeType = 'Composite';
      name = type.displayName;

      if (!name) {
        name = 'No display name';
      }
    }
  }

  if (!name) {
    name = internalInstance.constructor.displayName || 'No display name';
    nodeType = 'Composite';
  }

  if (typeof props === 'string') {
    nodeType = 'Text';
    text = props;
    props = null;
    name = null;
  }

  if (internalInstance.forceUpdate) {
    updater = {
      canUpdate: true,
      setState: internalInstance.setState.bind(internalInstance),
      setInProps: internalInstance.forceUpdate && setInProps.bind(null, internalInstance),
      setInState: internalInstance.forceUpdate && setInState.bind(null, internalInstance),
      setInContext: internalInstance.forceUpdate && setInContext.bind(null, internalInstance)
    };
    publicInstance = internalInstance;
  } // $FlowFixMe


  return {
    nodeType: nodeType,
    type: type,
    key: key,
    ref: ref,
    source: null,
    name: name,
    props: props,
    state: state,
    context: context,
    children: children,
    text: text,
    updater: updater,
    publicInstance: publicInstance
  };
}

function setInProps(inst, path, value) {
  inst.props = copyWithSet(inst.props, path, value);
  inst.forceUpdate();
}

function setInState(inst, path, value) {
  setIn(inst.state, path, value);
  inst.forceUpdate();
}

function setInContext(inst, path, value) {
  setIn(inst.context, path, value);
  inst.forceUpdate();
}

function setIn(obj, path, value) {
  var last = path.pop();
  var parent = path.reduce(function (obj_, attr) {
    return obj_ ? obj_[attr] : null;
  }, obj);

  if (parent) {
    parent[last] = value;
  }
}

function childrenList(children) {
  var res = [];

  for (var name in children) {
    res.push(children[name]);
  }

  return res;
}

module.exports = getData012;

/***/ }),

/***/ "../../backend/getDisplayName.js":
/*!**************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/getDisplayName.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var FB_MODULE_RE = /^(.*) \[from (.*)\]$/;
var cachedDisplayNames = new WeakMap();

function getDisplayName(type) {
  var fallbackName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';
  var nameFromCache = cachedDisplayNames.get(type);

  if (nameFromCache != null) {
    return nameFromCache;
  }

  var displayName; // The displayName property is not guaranteed to be a string.
  // It's only safe to use for our purposes if it's a string.
  // github.com/facebook/react-devtools/issues/803

  if (typeof type.displayName === 'string') {
    displayName = type.displayName;
  }

  if (!displayName) {
    displayName = type.name || fallbackName;
  } // Facebook-specific hack to turn "Image [from Image.react]" into just "Image".
  // We need displayName with module name for error reports but it clutters the DevTools.


  var match = displayName.match(FB_MODULE_RE);

  if (match) {
    var componentName = match[1];
    var moduleName = match[2];

    if (componentName && moduleName) {
      if (moduleName === componentName || moduleName.startsWith(componentName + '.')) {
        displayName = componentName;
      }
    }
  }

  cachedDisplayNames.set(type, displayName);
  return displayName;
}

module.exports = getDisplayName;

/***/ }),

/***/ "../../backend/installGlobalHook.js":
/*!*****************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/installGlobalHook.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * NOTE: This file cannot `require` any other modules. We `.toString()` the
 *       function in some places and inject the source into the page.
 */
function installGlobalHook(window) {
  if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    return;
  }

  function detectReactBuildType(renderer) {
    try {
      if (typeof renderer.version === 'string') {
        // React DOM Fiber (16+)
        if (renderer.bundleType > 0) {
          // This is not a production build.
          // We are currently only using 0 (PROD) and 1 (DEV)
          // but might add 2 (PROFILE) in the future.
          return 'development';
        } // React 16 uses flat bundles. If we report the bundle as production
        // version, it means we also minified and envified it ourselves.


        return 'production'; // Note: There is still a risk that the CommonJS entry point has not
        // been envified or uglified. In this case the user would have *both*
        // development and production bundle, but only the prod one would run.
        // This would be really bad. We have a separate check for this because
        // it happens *outside* of the renderer injection. See `checkDCE` below.
      }

      var toString = Function.prototype.toString;

      if (renderer.Mount && renderer.Mount._renderNewRootComponent) {
        // React DOM Stack
        var renderRootCode = toString.call(renderer.Mount._renderNewRootComponent); // Filter out bad results (if that is even possible):

        if (renderRootCode.indexOf('function') !== 0) {
          // Hope for the best if we're not sure.
          return 'production';
        } // Check for React DOM Stack < 15.1.0 in development.
        // If it contains "storedMeasure" call, it's wrapped in ReactPerf (DEV only).
        // This would be true even if it's minified, as method name still matches.


        if (renderRootCode.indexOf('storedMeasure') !== -1) {
          return 'development';
        } // For other versions (and configurations) it's not so easy.
        // Let's quickly exclude proper production builds.
        // If it contains a warning message, it's either a DEV build,
        // or an PROD build without proper dead code elimination.


        if (renderRootCode.indexOf('should be a pure function') !== -1) {
          // Now how do we tell a DEV build from a bad PROD build?
          // If we see NODE_ENV, we're going to assume this is a dev build
          // because most likely it is referring to an empty shim.
          if (renderRootCode.indexOf('NODE_ENV') !== -1) {
            return 'development';
          } // If we see "development", we're dealing with an envified DEV build
          // (such as the official React DEV UMD).


          if (renderRootCode.indexOf('development') !== -1) {
            return 'development';
          } // I've seen process.env.NODE_ENV !== 'production' being smartly
          // replaced by `true` in DEV by Webpack. I don't know how that
          // works but we can safely guard against it because `true` was
          // never used in the function source since it was written.


          if (renderRootCode.indexOf('true') !== -1) {
            return 'development';
          } // By now either it is a production build that has not been minified,
          // or (worse) this is a minified development build using non-standard
          // environment (e.g. "staging"). We're going to look at whether
          // the function argument name is mangled:


          if ( // 0.13 to 15
          renderRootCode.indexOf('nextElement') !== -1 || // 0.12
          renderRootCode.indexOf('nextComponent') !== -1) {
            // We can't be certain whether this is a development build or not,
            // but it is definitely unminified.
            return 'unminified';
          } else {
            // This is likely a minified development build.
            return 'development';
          }
        } // By now we know that it's envified and dead code elimination worked,
        // but what if it's still not minified? (Is this even possible?)
        // Let's check matches for the first argument name.


        if ( // 0.13 to 15
        renderRootCode.indexOf('nextElement') !== -1 || // 0.12
        renderRootCode.indexOf('nextComponent') !== -1) {
          return 'unminified';
        } // Seems like we're using the production version.
        // However, the branch above is Stack-only so this is 15 or earlier.


        return 'outdated';
      }
    } catch (err) {// Weird environments may exist.
      // This code needs a higher fault tolerance
      // because it runs even with closed DevTools.
      // TODO: should we catch errors in all injected code, and not just this part?
    }

    return 'production';
  }

  var hasDetectedBadDCE = false;
  var hook = {
    // Shared between Stack and Fiber:
    _renderers: {},
    helpers: {},
    cachedFiberTreeInfos: [],
    checkDCE: function checkDCE(fn) {
      // This runs for production versions of React.
      // Needs to be super safe.
      try {
        var toString = Function.prototype.toString;
        var code = toString.call(fn); // This is a string embedded in the passed function under DEV-only
        // condition. However the function executes only in PROD. Therefore,
        // if we see it, dead code elimination did not work.

        if (code.indexOf('^_^') > -1) {
          // Remember to report during next injection.
          hasDetectedBadDCE = true; // Bonus: throw an exception hoping that it gets picked up by
          // a reporting system. Not synchronously so that it doesn't break the
          // calling code.

          setTimeout(function () {
            throw new Error('React is running in production mode, but dead code ' + 'elimination has not been applied. Read how to correctly ' + 'configure React for production: ' + 'https://fb.me/react-perf-use-the-production-build');
          });
        }
      } catch (err) {}
    },
    inject: function inject(renderer) {
      var id = Math.random().toString(16).slice(2);
      hook._renderers[id] = renderer;
      var reactBuildType = hasDetectedBadDCE ? 'deadcode' : detectReactBuildType(renderer);
      hook.emit('renderer', {
        id: id,
        renderer: renderer,
        reactBuildType: reactBuildType
      });
      return id;
    },
    _listeners: {},
    sub: function sub(evt, fn) {
      hook.on(evt, fn);
      return function () {
        return hook.off(evt, fn);
      };
    },
    on: function on(evt, fn) {
      if (!hook._listeners[evt]) {
        hook._listeners[evt] = [];
      }

      hook._listeners[evt].push(fn);
    },
    off: function off(evt, fn) {
      if (!hook._listeners[evt]) {
        return;
      }

      var ix = hook._listeners[evt].indexOf(fn);

      if (ix !== -1) {
        hook._listeners[evt].splice(ix, 1);
      }

      if (!hook._listeners[evt].length) {
        hook._listeners[evt] = null;
      }
    },
    emit: function emit(evt, data) {
      if (hook._listeners[evt]) {
        hook._listeners[evt].map(function (fn) {
          return fn(data);
        });
      }
    },
    // Fiber-only:
    supportsFiber: true,
    _fiberRoots: {},
    getFiberRoots: function getFiberRoots(rendererID) {
      var roots = hook._fiberRoots;

      if (!roots[rendererID]) {
        roots[rendererID] = new Set();
      }

      return roots[rendererID];
    },
    onCommitFiberUnmount: function onCommitFiberUnmount(rendererID, fiber) {
      // TODO: can we use hook for roots too?
      if (hook.helpers[rendererID]) {
        hook.helpers[rendererID].handleCommitFiberUnmount(fiber);
      }
    },
    onCommitFiberRoot: function onCommitFiberRoot(rendererID, root) {
      var mountedRoots = hook.getFiberRoots(rendererID);
      var current = root.current;
      var isKnownRoot = mountedRoots.has(root);
      var isUnmounting = current.memoizedState == null || current.memoizedState.element == null; // Keep track of mounted roots so we can hydrate when DevTools connect.

      if (!isKnownRoot && !isUnmounting) {
        mountedRoots.add(root);
      } else if (isKnownRoot && isUnmounting) {
        mountedRoots.delete(root);
      }

      if (hook.helpers[rendererID]) {
        hook.helpers[rendererID].handleCommitFiberRoot(root);
      }
    },
    sendFiberTree: function sendFiberTree(rendererID, fiberTreeInfo) {
      // TODO: can we use hook for roots too?
      if (hook.helpers[rendererID]) {
        hook.helpers[rendererID].handleSendFiberTree(fiberTreeInfo);
      } else {
        fiberTreeInfo.rendererID = rendererID;
        hook.cachedFiberTreeInfos.push(fiberTreeInfo);
      }
    },
    sendCachedFiberTree: function sendCachedFiberTree() {
      hook.cachedFiberTreeInfos.forEach(function (fiberTreeInfo) {
        var rendererID = fiberTreeInfo.rendererID;

        if (hook.helpers[rendererID]) {
          hook.helpers[rendererID].handleSendFiberTree(fiberTreeInfo);
        }
      });
      hook.cachedFiberTreeInfos = [];
    }
  };
  Object.defineProperty(window, '__REACT_DEVTOOLS_GLOBAL_HOOK__', {
    value: hook
  });
}

module.exports = installGlobalHook;

/***/ }),

/***/ "../../backend/traverseAllChildrenImpl.js":
/*!***********************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/backend/traverseAllChildrenImpl.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../../node_modules/fbjs/lib/invariant.js");

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (_typeof(component) === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}
/**
 * We do a copied the 'traverseAllChildrenImpl' method from
 * `React.Children` so that we don't pull in the whole React library.
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = _typeof(children);

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' || // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];

    if (typeof iteratorFn === 'function') {
      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = ' If you meant to render a collection of children, use an array ' + 'instead.';
      var childrenString = '' + children;
      invariant(false, 'The React Devtools cannot render an object as a child. (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

module.exports = traverseAllChildrenImpl;

/***/ }),

/***/ "../../frontend/Highlighter/Highlighter.js":
/*!************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/frontend/Highlighter/Highlighter.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Overlay = __webpack_require__(/*! ./Overlay */ "../../frontend/Highlighter/Overlay.js");

var MultiOverlay = __webpack_require__(/*! ./MultiOverlay */ "../../frontend/Highlighter/MultiOverlay.js");
/**
 * Manages the highlighting of items on an html page, as well as
 * hover-to-inspect.
 */


var Highlighter =
/*#__PURE__*/
function () {
  function Highlighter(win, onSelect) {
    _classCallCheck(this, Highlighter);

    this._win = win;
    this._onSelect = onSelect;
    this._overlay = null;
    this._multiOverlay = null;
    this._subs = [];
  }

  _createClass(Highlighter, [{
    key: "startInspecting",
    value: function startInspecting() {
      this._inspecting = true;
      this._subs = [captureSubscription(this._win, 'mouseover', this.onHover.bind(this)), captureSubscription(this._win, 'mousedown', this.onMouseDown.bind(this)), captureSubscription(this._win, 'click', this.onClick.bind(this))];
    }
  }, {
    key: "stopInspecting",
    value: function stopInspecting() {
      this._subs.forEach(function (unsub) {
        return unsub();
      });

      this.hideHighlight();
    }
  }, {
    key: "remove",
    value: function remove() {
      this.stopInspecting();

      if (this._button && this._button.parentNode) {
        this._button.parentNode.removeChild(this._button);
      }
    }
  }, {
    key: "highlight",
    value: function highlight(node, name) {
      this.removeMultiOverlay();

      if (node.nodeType !== Node.COMMENT_NODE) {
        if (!this._overlay) {
          this._overlay = new Overlay(this._win);
        }

        this._overlay.inspect(node, name);
      }
    }
  }, {
    key: "highlightMany",
    value: function highlightMany(nodes) {
      this.removeOverlay();

      if (!this._multiOverlay) {
        this._multiOverlay = new MultiOverlay(this._win);
      }

      this._multiOverlay.highlightMany(nodes);
    }
  }, {
    key: "hideHighlight",
    value: function hideHighlight() {
      this._inspecting = false;
      this.removeOverlay();
      this.removeMultiOverlay();
    }
  }, {
    key: "refreshMultiOverlay",
    value: function refreshMultiOverlay() {
      if (!this._multiOverlay) {
        return;
      }

      this._multiOverlay.refresh();
    }
  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      if (!this._overlay) {
        return;
      }

      this._overlay.remove();

      this._overlay = null;
    }
  }, {
    key: "removeMultiOverlay",
    value: function removeMultiOverlay() {
      if (!this._multiOverlay) {
        return;
      }

      this._multiOverlay.remove();

      this._multiOverlay = null;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      if (!this._inspecting) {
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      evt.cancelBubble = true;

      this._onSelect(evt.target);
    }
  }, {
    key: "onClick",
    value: function onClick(evt) {
      if (!this._inspecting) {
        return;
      }

      this._subs.forEach(function (unsub) {
        return unsub();
      });

      evt.preventDefault();
      evt.stopPropagation();
      evt.cancelBubble = true;
      this.hideHighlight();
    }
  }, {
    key: "onHover",
    value: function onHover(evt) {
      if (!this._inspecting) {
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      evt.cancelBubble = true;
      this.highlight(evt.target);
    }
  }, {
    key: "injectButton",
    value: function injectButton() {
      this._button = makeMagnifier();
      this._button.onclick = this.startInspecting.bind(this);

      this._win.document.body.appendChild(this._button);
    }
  }]);

  return Highlighter;
}();

function captureSubscription(obj, evt, cb) {
  obj.addEventListener(evt, cb, true);
  return function () {
    return obj.removeEventListener(evt, cb, true);
  };
}

function makeMagnifier() {
  var button = window.document.createElement('button');
  button.innerHTML = '&#128269;';
  button.style.backgroundColor = 'transparent';
  button.style.border = 'none';
  button.style.outline = 'none';
  button.style.cursor = 'pointer';
  button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.fontSize = '30px';
  button.style.zIndex = 10000000;
  return button;
}

module.exports = Highlighter;

/***/ }),

/***/ "../../frontend/Highlighter/MultiOverlay.js":
/*!*************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/frontend/Highlighter/MultiOverlay.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var MultiOverlay =
/*#__PURE__*/
function () {
  function MultiOverlay(window) {
    _classCallCheck(this, MultiOverlay);

    this.win = window;
    var doc = window.document;
    this.container = doc.createElement('div');
    doc.body.appendChild(this.container);
    this._currentNodes = null;
  }

  _createClass(MultiOverlay, [{
    key: "highlightMany",
    value: function highlightMany(nodes) {
      var _this = this;

      this._currentNodes = nodes;
      this.container.innerHTML = '';
      nodes.forEach(function (node) {
        var div = _this.win.document.createElement('div');

        if (typeof node.getBoundingClientRect !== 'function') {
          return;
        }

        var box = node.getBoundingClientRect();

        if (box.bottom < 0 || box.top > window.innerHeight) {
          return;
        }

        assign(div.style, {
          top: box.top + 'px',
          left: box.left + 'px',
          width: box.width + 'px',
          height: box.height + 'px',
          border: '2px dotted rgba(200, 100, 100, .8)',
          boxSizing: 'border-box',
          backgroundColor: 'rgba(200, 100, 100, .2)',
          position: 'fixed',
          zIndex: 10000000,
          pointerEvents: 'none'
        });

        _this.container.appendChild(div);
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this._currentNodes) {
        this.highlightMany(this._currentNodes);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
        this._currentNodes = null;
      }
    }
  }]);

  return MultiOverlay;
}();

module.exports = MultiOverlay;

/***/ }),

/***/ "../../frontend/Highlighter/Overlay.js":
/*!********************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/frontend/Highlighter/Overlay.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var _require = __webpack_require__(/*! ../Themes/Fonts */ "../../frontend/Themes/Fonts.js"),
    monospace = _require.monospace;

/**
 * Note that this component is not affected by the active Theme,
 * Because it highlights elements in the main Chrome window (outside of devtools).
 * The colors below were chosen to roughly match those used by Chrome devtools.
 */
var Overlay =
/*#__PURE__*/
function () {
  function Overlay(window) {
    _classCallCheck(this, Overlay);

    var doc = window.document;
    this.win = window;
    this.container = doc.createElement('div');
    this.node = doc.createElement('div');
    this.border = doc.createElement('div');
    this.padding = doc.createElement('div');
    this.content = doc.createElement('div');
    this.border.style.borderColor = overlayStyles.border;
    this.padding.style.borderColor = overlayStyles.padding;
    this.content.style.backgroundColor = overlayStyles.background;
    assign(this.node.style, {
      borderColor: overlayStyles.margin,
      pointerEvents: 'none',
      position: 'fixed'
    });
    this.tip = doc.createElement('div');
    assign(this.tip.style, {
      backgroundColor: '#333740',
      borderRadius: '2px',
      fontFamily: monospace.family,
      fontWeight: 'bold',
      padding: '3px 5px',
      position: 'fixed',
      fontSize: monospace.sizes.normal + 'px'
    });
    this.nameSpan = doc.createElement('span');
    this.tip.appendChild(this.nameSpan);
    assign(this.nameSpan.style, {
      color: '#ee78e6',
      borderRight: '1px solid #aaaaaa',
      paddingRight: '0.5rem',
      marginRight: '0.5rem'
    });
    this.dimSpan = doc.createElement('span');
    this.tip.appendChild(this.dimSpan);
    assign(this.dimSpan.style, {
      color: '#d7d7d7'
    });
    this.container.style.zIndex = 10000000;
    this.node.style.zIndex = 10000000;
    this.tip.style.zIndex = 10000000;
    this.container.appendChild(this.node);
    this.container.appendChild(this.tip);
    this.node.appendChild(this.border);
    this.border.appendChild(this.padding);
    this.padding.appendChild(this.content);
    doc.body.appendChild(this.container);
  }

  _createClass(Overlay, [{
    key: "remove",
    value: function remove() {
      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  }, {
    key: "inspect",
    value: function inspect(node, name) {
      // We can't get the size of text nodes or comment nodes. React as of v15
      // heavily uses comment nodes to delimit text.
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }

      var box = getNestedBoundingClientRect(node, this.win);
      var dims = getElementDimensions(node);
      boxWrap(dims, 'margin', this.node);
      boxWrap(dims, 'border', this.border);
      boxWrap(dims, 'padding', this.padding);
      assign(this.content.style, {
        height: box.height - dims.borderTop - dims.borderBottom - dims.paddingTop - dims.paddingBottom + 'px',
        width: box.width - dims.borderLeft - dims.borderRight - dims.paddingLeft - dims.paddingRight + 'px'
      });
      assign(this.node.style, {
        top: box.top - dims.marginTop + 'px',
        left: box.left - dims.marginLeft + 'px'
      });
      this.nameSpan.textContent = name || node.nodeName.toLowerCase();
      this.dimSpan.textContent = box.width + 'px × ' + box.height + 'px';
      var tipPos = findTipPos({
        top: box.top - dims.marginTop,
        left: box.left - dims.marginLeft,
        height: box.height + dims.marginTop + dims.marginBottom,
        width: box.width + dims.marginLeft + dims.marginRight
      }, this.win);
      assign(this.tip.style, tipPos);
    }
  }]);

  return Overlay;
}();

function findTipPos(dims, win) {
  var tipHeight = 20;
  var margin = 5;
  var top;

  if (dims.top + dims.height + tipHeight <= win.innerHeight) {
    if (dims.top + dims.height < 0) {
      top = margin;
    } else {
      top = dims.top + dims.height + margin;
    }
  } else if (dims.top - tipHeight <= win.innerHeight) {
    if (dims.top - tipHeight - margin < margin) {
      top = margin;
    } else {
      top = dims.top - tipHeight - margin;
    }
  } else {
    top = win.innerHeight - tipHeight - margin;
  }

  top += 'px';

  if (dims.left < 0) {
    return {
      top: top,
      left: margin
    };
  }

  if (dims.left + 200 > win.innerWidth) {
    return {
      top: top,
      right: margin
    };
  }

  return {
    top: top,
    left: dims.left + margin + 'px'
  };
}

function getElementDimensions(domElement) {
  var calculatedStyle = window.getComputedStyle(domElement);
  return {
    borderLeft: +calculatedStyle.borderLeftWidth.match(/[0-9]*/)[0],
    borderRight: +calculatedStyle.borderRightWidth.match(/[0-9]*/)[0],
    borderTop: +calculatedStyle.borderTopWidth.match(/[0-9]*/)[0],
    borderBottom: +calculatedStyle.borderBottomWidth.match(/[0-9]*/)[0],
    marginLeft: +calculatedStyle.marginLeft.match(/[0-9]*/)[0],
    marginRight: +calculatedStyle.marginRight.match(/[0-9]*/)[0],
    marginTop: +calculatedStyle.marginTop.match(/[0-9]*/)[0],
    marginBottom: +calculatedStyle.marginBottom.match(/[0-9]*/)[0],
    paddingLeft: +calculatedStyle.paddingLeft.match(/[0-9]*/)[0],
    paddingRight: +calculatedStyle.paddingRight.match(/[0-9]*/)[0],
    paddingTop: +calculatedStyle.paddingTop.match(/[0-9]*/)[0],
    paddingBottom: +calculatedStyle.paddingBottom.match(/[0-9]*/)[0]
  };
} // Get the window object for the document that a node belongs to,
// or return null if it cannot be found (node not attached to DOM,
// etc).


function getOwnerWindow(node) {
  if (!node.ownerDocument) {
    return null;
  }

  return node.ownerDocument.defaultView;
} // Get the iframe containing a node, or return null if it cannot
// be found (node not within iframe, etc).


function getOwnerIframe(node) {
  var nodeWindow = getOwnerWindow(node);

  if (nodeWindow) {
    return nodeWindow.frameElement;
  }

  return null;
} // Get a bounding client rect for a node, with an
// offset added to compensate for its border.


function getBoundingClientRectWithBorderOffset(node) {
  var dimensions = getElementDimensions(node);
  return mergeRectOffsets([node.getBoundingClientRect(), {
    top: dimensions.borderTop,
    left: dimensions.borderLeft,
    bottom: dimensions.borderBottom,
    right: dimensions.borderRight,
    // This width and height won't get used by mergeRectOffsets (since this
    // is not the first rect in the array), but we set them so that this
    // object typechecks as a DOMRect.
    width: 0,
    height: 0
  }]);
} // Add together the top, left, bottom, and right properties of
// each DOMRect, but keep the width and height of the first one.


function mergeRectOffsets(rects) {
  return rects.reduce(function (previousRect, rect) {
    if (previousRect == null) {
      return rect;
    }

    return {
      top: previousRect.top + rect.top,
      left: previousRect.left + rect.left,
      width: previousRect.width,
      height: previousRect.height,
      bottom: previousRect.bottom + rect.bottom,
      right: previousRect.right + rect.right
    };
  });
} // Calculate a boundingClientRect for a node relative to boundaryWindow,
// taking into account any offsets caused by intermediate iframes.


function getNestedBoundingClientRect(node, boundaryWindow) {
  var ownerIframe = getOwnerIframe(node);

  if (ownerIframe && ownerIframe !== boundaryWindow) {
    var rects = [node.getBoundingClientRect()];
    var currentIframe = ownerIframe;
    var onlyOneMore = false;

    while (currentIframe) {
      var rect = getBoundingClientRectWithBorderOffset(currentIframe);
      rects.push(rect);
      currentIframe = getOwnerIframe(currentIframe);

      if (onlyOneMore) {
        break;
      } // We don't want to calculate iframe offsets upwards beyond
      // the iframe containing the boundaryWindow, but we
      // need to calculate the offset relative to the boundaryWindow.


      if (currentIframe && getOwnerWindow(currentIframe) === boundaryWindow) {
        onlyOneMore = true;
      }
    }

    return mergeRectOffsets(rects);
  } else {
    return node.getBoundingClientRect();
  }
}

function boxWrap(dims, what, node) {
  assign(node.style, {
    borderTopWidth: dims[what + 'Top'] + 'px',
    borderLeftWidth: dims[what + 'Left'] + 'px',
    borderRightWidth: dims[what + 'Right'] + 'px',
    borderBottomWidth: dims[what + 'Bottom'] + 'px',
    borderStyle: 'solid'
  });
}

var overlayStyles = {
  background: 'rgba(120, 170, 210, 0.7)',
  padding: 'rgba(77, 200, 0, 0.3)',
  margin: 'rgba(255, 155, 0, 0.3)',
  border: 'rgba(255, 200, 50, 0.3)'
};
module.exports = Overlay;

/***/ }),

/***/ "../../frontend/Highlighter/setup.js":
/*!******************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/frontend/Highlighter/setup.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var Highlighter = __webpack_require__(/*! ./Highlighter */ "../../frontend/Highlighter/Highlighter.js");

module.exports = function setup(agent) {
  var hl = new Highlighter(window, function (node) {
    agent.selectFromDOMNode(node);
  });
  agent.on('highlight', function (data) {
    return hl.highlight(data.node, data.name);
  });
  agent.on('highlightMany', function (nodes) {
    return hl.highlightMany(nodes);
  });
  agent.on('hideHighlight', function () {
    return hl.hideHighlight();
  });
  agent.on('refreshMultiOverlay', function () {
    return hl.refreshMultiOverlay();
  });
  agent.on('startInspecting', function () {
    return hl.startInspecting();
  });
  agent.on('stopInspecting', function () {
    return hl.stopInspecting();
  });
  agent.on('shutdown', function () {
    hl.remove();
  });
};

/***/ }),

/***/ "../../frontend/Themes/Fonts.js":
/*!*************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/frontend/Themes/Fonts.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


module.exports = {
  monospace: {
    family: 'Menlo, Consolas, monospace',
    sizes: {
      normal: 11,
      large: 14
    }
  },
  sansSerif: {
    family: '"Helvetica Neue", "Lucida Grande", -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, sans-serif',
    sizes: {
      small: 10,
      normal: 12,
      large: 14
    }
  }
};

/***/ }),

/***/ "../../node_modules/assert/assert.js":
/*!******************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/assert/assert.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) { // compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }

  if (y < x) {
    return 1;
  }

  return 0;
}

function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }

  return !!(b != null && b._isBuffer);
} // based on node assert, original notice:
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


var util = __webpack_require__(/*! util/ */ "../../node_modules/util/util.js");

var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;

var functionsHaveNames = function () {
  return function foo() {}.name === 'foo';
}();

function pToString(obj) {
  return Object.prototype.toString.call(obj);
}

function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }

  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }

  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }

  if (!arrbuf) {
    return false;
  }

  if (arrbuf instanceof DataView) {
    return true;
  }

  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }

  return false;
} // 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.


var assert = module.exports = ok; // 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/; // based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js

function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }

  if (functionsHaveNames) {
    return func.name;
  }

  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;

  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }

  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();

    if (err.stack) {
      var out = err.stack; // try to strip useless frames

      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);

      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
}; // assert.AssertionError instanceof Error


util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }

  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' + name + ']';
}

function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
} // At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.
// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.


function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
} // EXTENSION! allows for well behaved errors defined elsewhere.


assert.fail = fail; // 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}

assert.ok = ok; // 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
}; // 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);


assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
}; // 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);


assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0; // 7.2. If the expected value is a Date object, the actual value is
    // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime(); // 7.3 If the expected value is a RegExp object, the actual value is
    // equivalent if it is also a RegExp object with the same source and
    // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase; // 7.4. Other pairs that do not both pass typeof value == 'object',
    // equivalence is determined by ==.
  } else if ((actual === null || _typeof(actual) !== 'object') && (expected === null || _typeof(expected) !== 'object')) {
    return strict ? actual === expected : actual == expected; // If both values are instances of typed arrays, wrap their underlying
    // ArrayBuffers in a Buffer each to increase performance
    // This optimization requires the arrays to have the same type as checked by
    // Object.prototype.toString (aka pToString). Never perform binary
    // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
    // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0; // 7.5 For all other Object pairs, including Array objects, equivalence is
    // determined by having the same number of owned properties (as verified
    // with Object.prototype.hasOwnProperty.call), the same set of keys
    // (although not necessarily the same order), equivalent values for every
    // corresponding key, and an identical 'prototype' property. Note: this
    // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {
      actual: [],
      expected: []
    };
    var actualIndex = memos.actual.indexOf(actual);

    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);
    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined) return false; // if one is a primitive, the other must be same

  if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;

  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i; // having the same number of owned properties (keys incorporates
  // hasOwnProperty)

  if (ka.length !== kb.length) return false; //the same set of keys (although not necessarily the same order),

  ka.sort();
  kb.sort(); //~~~cheap key test

  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i]) return false;
  } //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test


  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
  }

  return true;
} // 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);


assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;

function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
} // 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);


assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
}; // 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);


assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {// Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;

  try {
    block();
  } catch (e) {
    error = e;
  }

  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);
  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
    throw actual;
  }
} // 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);


assert.throws = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(true, block, error, message);
}; // EXTENSION! This is annoying to write outside this module.


assert.doesNotThrow = function (block,
/*optional*/
error,
/*optional*/
message) {
  _throws(false, block, error, message);
};

assert.ifError = function (err) {
  if (err) throw err;
};

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }

  return keys;
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/d/index.js":
/*!************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/d/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assign = __webpack_require__(/*! es5-ext/object/assign */ "../../node_modules/es5-ext/object/assign/index.js"),
    normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "../../node_modules/es5-ext/object/normalize-options.js"),
    isCallable = __webpack_require__(/*! es5-ext/object/is-callable */ "../../node_modules/es5-ext/object/is-callable.js"),
    contains = __webpack_require__(/*! es5-ext/string/#/contains */ "../../node_modules/es5-ext/string/#/contains/index.js"),
    d;

d = module.exports = function (dscr, value
/*, options*/
) {
  var c, e, w, options, desc;

  if (arguments.length < 2 || typeof dscr !== 'string') {
    options = value;
    value = dscr;
    dscr = null;
  } else {
    options = arguments[2];
  }

  if (dscr == null) {
    c = w = true;
    e = false;
  } else {
    c = contains.call(dscr, 'c');
    e = contains.call(dscr, 'e');
    w = contains.call(dscr, 'w');
  }

  desc = {
    value: value,
    configurable: c,
    enumerable: e,
    writable: w
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};

d.gs = function (dscr, get, set
/*, options*/
) {
  var c, e, options, desc;

  if (typeof dscr !== 'string') {
    options = set;
    set = get;
    get = dscr;
    dscr = null;
  } else {
    options = arguments[3];
  }

  if (get == null) {
    get = undefined;
  } else if (!isCallable(get)) {
    options = get;
    get = set = undefined;
  } else if (set == null) {
    set = undefined;
  } else if (!isCallable(set)) {
    options = set;
    set = undefined;
  }

  if (dscr == null) {
    c = true;
    e = false;
  } else {
    c = contains.call(dscr, 'c');
    e = contains.call(dscr, 'e');
  }

  desc = {
    get: get,
    set: set,
    configurable: c,
    enumerable: e
  };
  return !options ? desc : assign(normalizeOpts(options), desc);
};

/***/ }),

/***/ "../../node_modules/error-stack-parser/error-stack-parser.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/error-stack-parser/error-stack-parser.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "../../node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);
      return filtered.map(function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }

        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame({
          functionName: functionName,
          fileName: fileName,
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);
      return filtered.map(function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame({
            functionName: line
          });
        } else {
          var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var matches = line.match(functionNameRegex);
          var functionName = matches && matches[1] ? matches[1] : undefined;
          var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));
          return new StackFrame({
            functionName: functionName,
            fileName: locationParts[0],
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
          });
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame({
            functionName: match[3] || undefined,
            fileName: match[2],
            lineNumber: match[1],
            source: lines[i]
          }));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = error.stack.split('\n').filter(function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);
      return filtered.map(function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame({
          functionName: functionName,
          args: args,
          fileName: locationParts[0],
          lineNumber: locationParts[1],
          columnNumber: locationParts[2],
          source: line
        });
      }, this);
    }
  };
});

/***/ }),

/***/ "../../node_modules/es5-ext/object/assign/index.js":
/*!********************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/assign/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__(/*! ./shim */ "../../node_modules/es5-ext/object/assign/shim.js");

/***/ }),

/***/ "../../node_modules/es5-ext/object/assign/is-implemented.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/assign/is-implemented.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var assign = Object.assign,
      obj;
  if (typeof assign !== 'function') return false;
  obj = {
    foo: 'raz'
  };
  assign(obj, {
    bar: 'dwa'
  }, {
    trzy: 'trzy'
  });
  return obj.foo + obj.bar + obj.trzy === 'razdwatrzy';
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/assign/shim.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/assign/shim.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! ../keys */ "../../node_modules/es5-ext/object/keys/index.js"),
    value = __webpack_require__(/*! ../valid-value */ "../../node_modules/es5-ext/object/valid-value.js"),
    max = Math.max;

module.exports = function (dest, src
/*, …srcn*/
) {
  var error,
      i,
      l = max(arguments.length, 2),
      assign;
  dest = Object(value(dest));

  assign = function assign(key) {
    try {
      dest[key] = src[key];
    } catch (e) {
      if (!error) error = e;
    }
  };

  for (i = 1; i < l; ++i) {
    src = arguments[i];
    keys(src).forEach(assign);
  }

  if (error !== undefined) throw error;
  return dest;
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/is-callable.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/is-callable.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Deprecated


module.exports = function (obj) {
  return typeof obj === 'function';
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/keys/index.js":
/*!******************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/keys/index.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "../../node_modules/es5-ext/object/keys/shim.js");

/***/ }),

/***/ "../../node_modules/es5-ext/object/keys/is-implemented.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/keys/is-implemented.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  try {
    Object.keys('primitive');
    return true;
  } catch (e) {
    return false;
  }
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/keys/shim.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/keys/shim.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = Object.keys;

module.exports = function (object) {
  return keys(object == null ? object : Object(object));
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/normalize-options.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/normalize-options.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = Array.prototype.forEach,
    create = Object.create;

var process = function process(src, obj) {
  var key;

  for (key in src) {
    obj[key] = src[key];
  }
};

module.exports = function (options
/*, …options*/
) {
  var result = create(null);
  forEach.call(arguments, function (options) {
    if (options == null) return;
    process(Object(options), result);
  });
  return result;
};

/***/ }),

/***/ "../../node_modules/es5-ext/object/valid-value.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/object/valid-value.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (value) {
  if (value == null) throw new TypeError("Cannot use null or undefined");
  return value;
};

/***/ }),

/***/ "../../node_modules/es5-ext/string/#/contains/index.js":
/*!************************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/string/#/contains/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es5-ext/string/#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "../../node_modules/es5-ext/string/#/contains/shim.js");

/***/ }),

/***/ "../../node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var str = 'razdwatrzy';

module.exports = function () {
  if (typeof str.contains !== 'function') return false;
  return str.contains('dwa') === true && str.contains('foo') === false;
};

/***/ }),

/***/ "../../node_modules/es5-ext/string/#/contains/shim.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es5-ext/string/#/contains/shim.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString
/*, position*/
) {
  return indexOf.call(this, searchString, arguments[1]) > -1;
};

/***/ }),

/***/ "../../node_modules/es6-symbol/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es6-symbol/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "../../node_modules/es6-symbol/is-implemented.js")() ? Symbol : __webpack_require__(/*! ./polyfill */ "../../node_modules/es6-symbol/polyfill.js");

/***/ }),

/***/ "../../node_modules/es6-symbol/is-implemented.js":
/*!******************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es6-symbol/is-implemented.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function () {
  var symbol;
  if (typeof Symbol !== 'function') return false;
  symbol = Symbol('test symbol');

  try {
    String(symbol);
  } catch (e) {
    return false;
  }

  if (_typeof(Symbol.iterator) === 'symbol') return true; // Return 'true' for polyfills

  if (_typeof(Symbol.isConcatSpreadable) !== 'object') return false;
  if (_typeof(Symbol.iterator) !== 'object') return false;
  if (_typeof(Symbol.toPrimitive) !== 'object') return false;
  if (_typeof(Symbol.toStringTag) !== 'object') return false;
  if (_typeof(Symbol.unscopables) !== 'object') return false;
  return true;
};

/***/ }),

/***/ "../../node_modules/es6-symbol/is-symbol.js":
/*!*************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es6-symbol/is-symbol.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (x) {
  return x && (_typeof(x) === 'symbol' || x['@@toStringTag'] === 'Symbol') || false;
};

/***/ }),

/***/ "../../node_modules/es6-symbol/polyfill.js":
/*!************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es6-symbol/polyfill.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// ES2015 Symbol polyfill for environments that do not support it (or partially support it_


var d = __webpack_require__(/*! d */ "../../node_modules/d/index.js"),
    validateSymbol = __webpack_require__(/*! ./validate-symbol */ "../../node_modules/es6-symbol/validate-symbol.js"),
    create = Object.create,
    defineProperties = Object.defineProperties,
    defineProperty = Object.defineProperty,
    objPrototype = Object.prototype,
    NativeSymbol,
    SymbolPolyfill,
    HiddenSymbol,
    globalSymbols = create(null);

if (typeof Symbol === 'function') NativeSymbol = Symbol;

var generateName = function () {
  var created = create(null);
  return function (desc) {
    var postfix = 0,
        name,
        ie11BugWorkaround;

    while (created[desc + (postfix || '')]) {
      ++postfix;
    }

    desc += postfix || '';
    created[desc] = true;
    name = '@@' + desc;
    defineProperty(objPrototype, name, d.gs(null, function (value) {
      // For IE11 issue see:
      // https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
      //    ie11-broken-getters-on-dom-objects
      // https://github.com/medikoo/es6-symbol/issues/12
      if (ie11BugWorkaround) return;
      ie11BugWorkaround = true;
      defineProperty(this, name, d(value));
      ie11BugWorkaround = false;
    }));
    return name;
  };
}(); // Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false


HiddenSymbol = function _Symbol(description) {
  if (this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
  return SymbolPolyfill(description);
}; // Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)


module.exports = SymbolPolyfill = function _Symbol2(description) {
  var symbol;
  if (this instanceof _Symbol2) throw new TypeError('TypeError: Symbol is not a constructor');
  symbol = create(HiddenSymbol.prototype);
  description = description === undefined ? '' : String(description);
  return defineProperties(symbol, {
    __description__: d('', description),
    __name__: d('', generateName(description))
  });
};

defineProperties(SymbolPolyfill, {
  for: d(function (key) {
    if (globalSymbols[key]) return globalSymbols[key];
    return globalSymbols[key] = SymbolPolyfill(String(key));
  }),
  keyFor: d(function (s) {
    var key;
    validateSymbol(s);

    for (key in globalSymbols) {
      if (globalSymbols[key] === s) return key;
    }
  }),
  // If there's native implementation of given symbol, let's fallback to it
  // to ensure proper interoperability with other native functions e.g. Array.from
  hasInstance: d('', NativeSymbol && NativeSymbol.hasInstance || SymbolPolyfill('hasInstance')),
  isConcatSpreadable: d('', NativeSymbol && NativeSymbol.isConcatSpreadable || SymbolPolyfill('isConcatSpreadable')),
  iterator: d('', NativeSymbol && NativeSymbol.iterator || SymbolPolyfill('iterator')),
  match: d('', NativeSymbol && NativeSymbol.match || SymbolPolyfill('match')),
  replace: d('', NativeSymbol && NativeSymbol.replace || SymbolPolyfill('replace')),
  search: d('', NativeSymbol && NativeSymbol.search || SymbolPolyfill('search')),
  species: d('', NativeSymbol && NativeSymbol.species || SymbolPolyfill('species')),
  split: d('', NativeSymbol && NativeSymbol.split || SymbolPolyfill('split')),
  toPrimitive: d('', NativeSymbol && NativeSymbol.toPrimitive || SymbolPolyfill('toPrimitive')),
  toStringTag: d('', NativeSymbol && NativeSymbol.toStringTag || SymbolPolyfill('toStringTag')),
  unscopables: d('', NativeSymbol && NativeSymbol.unscopables || SymbolPolyfill('unscopables'))
}); // Internal tweaks for real symbol producer

defineProperties(HiddenSymbol.prototype, {
  constructor: d(SymbolPolyfill),
  toString: d('', function () {
    return this.__name__;
  })
}); // Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype

defineProperties(SymbolPolyfill.prototype, {
  toString: d(function () {
    return 'Symbol (' + validateSymbol(this).__description__ + ')';
  }),
  valueOf: d(function () {
    return validateSymbol(this);
  })
});
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
  return validateSymbol(this);
}));
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol')); // Proper implementaton of toPrimitive and toStringTag for returned symbol instances

defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])); // Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149

defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive, d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));

/***/ }),

/***/ "../../node_modules/es6-symbol/validate-symbol.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/es6-symbol/validate-symbol.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "../../node_modules/es6-symbol/is-symbol.js");

module.exports = function (value) {
  if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
  return value;
};

/***/ }),

/***/ "../../node_modules/events/events.js":
/*!******************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/events/events.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

EventEmitter.defaultMaxListeners = 10; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.

EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;
  if (!this._events) this._events = {}; // If there is no 'error' event listener then throw.

  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];

      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];
  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;

      case 2:
        handler.call(this, arguments[1]);
        break;

      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower

      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;

    for (i = 0; i < len; i++) {
      listeners[i].apply(this, args);
    }
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events) this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".

  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
  if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);else // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener]; // Check for listener leak

  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);

      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);
  return this;
}; // emits a 'removeListener' event iff the listener was removed


EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events || !this._events[type]) return this;
  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;
  if (!this._events) return this; // not listening for removeListener, no need to emit

  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) {
      this.removeListener(type, listeners[listeners.length - 1]);
    }
  }

  delete this._events[type];
  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];
    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }

  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ }),

/***/ "../../node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),

/***/ "../../node_modules/fbjs/lib/invariant.js":
/*!***********************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/fbjs/lib/invariant.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

function invariant(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "../../node_modules/fbjs/lib/performance.js":
/*!*************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/fbjs/lib/performance.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performance
 * @typechecks
 */


var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ "../../node_modules/fbjs/lib/ExecutionEnvironment.js");

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};

/***/ }),

/***/ "../../node_modules/fbjs/lib/performanceNow.js":
/*!****************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/fbjs/lib/performanceNow.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performanceNow
 * @typechecks
 */


var performance = __webpack_require__(/*! ./performance */ "../../node_modules/fbjs/lib/performance.js");

var performanceNow;
/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */

if (performance.now) {
  performanceNow = function performanceNow() {
    return performance.now();
  };
} else {
  performanceNow = function performanceNow() {
    return Date.now();
  };
}

module.exports = performanceNow;

/***/ }),

/***/ "../../node_modules/inherits/inherits_browser.js":
/*!******************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/inherits/inherits_browser.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function TempCtor() {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "../../node_modules/nullthrows/nullthrows.js":
/*!**************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/nullthrows/nullthrows.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

exports.default = function nullthrows(x) {
  if (x != null) {
    return x;
  }

  throw new Error('Got unexpected null or undefined');
};

/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/object-assign/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable no-unused-vars */


var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

module.exports = Object.assign || function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (Object.getOwnPropertySymbols) {
      symbols = Object.getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!********************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/process/browser.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "../../node_modules/semver/semver.js":
/*!******************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/semver/semver.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports = module.exports = SemVer; // The debug function is excluded entirely from the minified version.

/* nomin */

var debug;
/* nomin */

if ((typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' &&
/* nomin */
process.env &&
/* nomin */
process.env.NODE_DEBUG &&
/* nomin */
/\bsemver\b/i.test(process.env.NODE_DEBUG))
  /* nomin */
  debug = function debug() {
    /* nomin */
    var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */

    args.unshift('SEMVER');
    /* nomin */

    console.log.apply(console, args);
    /* nomin */
  };
  /* nomin */
else
  /* nomin */
  debug = function debug() {}; // Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.

exports.SEMVER_SPEC_VERSION = '2.0.0';
var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991; // Max safe segment length for coercion.

var MAX_SAFE_COMPONENT_LENGTH = 16; // The actual regexps go on exports.re

var re = exports.re = [];
var src = exports.src = [];
var R = 0; // The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'; // ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'; // ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')'; // ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')'; // ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'; // ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'; // ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'; // ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
src[FULL] = '^' + FULLPLAIN + '$'; // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.

var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';
var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)'; // Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.

var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'; // Coercion.
// Extract anything that could conceivably be a part of a valid semver

var COERCE = R++;
src[COERCE] = '(?:^|[^\\d])' + '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:$|[^\\d])'; // Tilde ranges.
// Meaning is "reasonably at or greater than"

var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';
var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';
var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'; // Caret ranges.
// Meaning is "at least and backwards compatible with"

var LONECARET = R++;
src[LONECARET] = '(?:\\^)';
var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';
var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'; // A simple gt/lt/eq thing, or just "" to indicate "any version"

var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'; // An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`

var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'; // this one has to use the /g flag

re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.

var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$'; // Star ranges basically just allow anything at all.

var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*'; // Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.

for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i]) re[i] = new RegExp(src[i]);
}

exports.parse = parse;

function parse(version, loose) {
  if (version instanceof SemVer) return version;
  if (typeof version !== 'string') return null;
  if (version.length > MAX_LENGTH) return null;
  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version)) return null;

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;

function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}

exports.clean = clean;

function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose) return version;else version = version.version;
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH) throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
  if (!(this instanceof SemVer)) return new SemVer(version, loose);
  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);
  if (!m) throw new TypeError('Invalid Version: ' + version);
  this.raw = version; // these are actually numbers

  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];
  if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version'); // numberify any prerelease numeric ids

  if (!m[4]) this.prerelease = [];else this.prerelease = m[4].split('.').map(function (id) {
    if (/^[0-9]+$/.test(id)) {
      var num = +id;
      if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
    }

    return id;
  });
  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length) this.version += '-' + this.prerelease.join('.');
  return this.version;
};

SemVer.prototype.toString = function () {
  return this.version;
};

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose);
  return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) other = new SemVer(other, this.loose); // NOT having a prerelease is > having one

  if (this.prerelease.length && !other.prerelease.length) return -1;else if (!this.prerelease.length && other.prerelease.length) return 1;else if (!this.prerelease.length && !other.prerelease.length) return 0;
  var i = 0;

  do {
    var a = this.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined) return 0;else if (b === undefined) return 1;else if (a === undefined) return -1;else if (a === b) continue;else return compareIdentifiers(a, b);
  } while (++i);
}; // preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.


SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;

    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;

    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.

    case 'prerelease':
      if (this.prerelease.length === 0) this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;

    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
      this.patch = 0;
      this.prerelease = [];
      break;

    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) this.patch++;
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.

    case 'pre':
      if (this.prerelease.length === 0) this.prerelease = [0];else {
        var i = this.prerelease.length;

        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++;
            i = -2;
          }
        }

        if (i === -1) // didn't increment anything
          this.prerelease.push(0);
      }

      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) this.prerelease = [identifier, 0];
        } else this.prerelease = [identifier, 0];
      }

      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }

  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;

function inc(version, release, loose, identifier) {
  if (typeof loose === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;

function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);

    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre' + key;
          }
        }
      }

      return 'prerelease';
    }

    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;
var numeric = /^[0-9]+$/;

function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : a > b ? 1 : 0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;

function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;

function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;

function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;

function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;

function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;

function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;

function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;

function sort(list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;

function rsort(list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;

function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;

function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;

function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;

function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;

function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;

function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;

function cmp(a, op, b, loose) {
  var ret;

  switch (op) {
    case '===':
      if (_typeof(a) === 'object') a = a.version;
      if (_typeof(b) === 'object') b = b.version;
      ret = a === b;
      break;

    case '!==':
      if (_typeof(a) === 'object') a = a.version;
      if (_typeof(b) === 'object') b = b.version;
      ret = a !== b;
      break;

    case '':
    case '=':
    case '==':
      ret = eq(a, b, loose);
      break;

    case '!=':
      ret = neq(a, b, loose);
      break;

    case '>':
      ret = gt(a, b, loose);
      break;

    case '>=':
      ret = gte(a, b, loose);
      break;

    case '<':
      ret = lt(a, b, loose);
      break;

    case '<=':
      ret = lte(a, b, loose);
      break;

    default:
      throw new TypeError('Invalid operator: ' + op);
  }

  return ret;
}

exports.Comparator = Comparator;

function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose) return comp;else comp = comp.value;
  }

  if (!(this instanceof Comparator)) return new Comparator(comp, loose);
  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);
  if (this.semver === ANY) this.value = '';else this.value = this.operator + this.semver.version;
  debug('comp', this);
}

var ANY = {};

Comparator.prototype.parse = function (comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);
  if (!m) throw new TypeError('Invalid comparator: ' + comp);
  this.operator = m[1];
  if (this.operator === '=') this.operator = ''; // if it literally is just '>' or '' then allow anything.

  if (!m[2]) this.semver = ANY;else this.semver = new SemVer(m[2], this.loose);
};

Comparator.prototype.toString = function () {
  return this.value;
};

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.loose);
  if (this.semver === ANY) return true;
  if (typeof version === 'string') version = new SemVer(version, this.loose);
  return cmp(version, this.operator, this.semver, this.loose);
};

Comparator.prototype.intersects = function (comp, loose) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, loose);
    return satisfies(this.value, rangeTmp, loose);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, loose);
    return satisfies(comp.semver, rangeTmp, loose);
  }

  var sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, loose) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
  var oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, loose) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
  return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};

exports.Range = Range;

function Range(range, loose) {
  if (range instanceof Range) {
    if (range.loose === loose) {
      return range;
    } else {
      return new Range(range.raw, loose);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, loose);
  }

  if (!(this instanceof Range)) return new Range(range, loose);
  this.loose = loose; // First, split based on boolean or ||

  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim());
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function () {
  return this.range;
};

Range.prototype.parseRange = function (range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose); // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

  range = range.replace(re[TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

  range = range.replace(re[CARETTRIM], caretTrimReplace); // normalize spaces

  range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);

  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe);
    });
  }

  set = set.map(function (comp) {
    return new Comparator(comp, loose);
  });
  return set;
};

Range.prototype.intersects = function (range, loose) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, loose);
        });
      });
    });
  });
}; // Mostly just for testing and legacy API reasons


exports.toComparators = toComparators;

function toComparators(range, loose) {
  return new Range(range, loose).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
} // comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.


function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
} // ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0


function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;
    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-') pr = '-' + pr;
      ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
    } else // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
    debug('tilde return', ret);
    return ret;
  });
} // ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0


function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;
    if (isX(M)) ret = '';else if (isX(m)) ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';else if (isX(p)) {
      if (M === '0') ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';else ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-') pr = '-' + pr;

      if (M === '0') {
        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + M + '.' + (+m + 1) + '.0';
      } else ret = '>=' + M + '.' + m + '.' + p + pr + ' <' + (+M + 1) + '.0.0';
    } else {
      debug('no pr');

      if (M === '0') {
        if (m === '0') ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);else ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
      } else ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
    }
    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;
    if (gtlt === '=' && anyX) gtlt = '';

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm) m = 0;
      if (xp) p = 0;

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';

        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm) M = +M + 1;else m = +m + 1;
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);
    return ret;
  });
} // Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.


function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose); // Looseness is ignored here.  star is always as loose as it gets!

  return comp.trim().replace(re[STAR], '');
} // This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0


function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) from = '';else if (isX(fm)) from = '>=' + fM + '.0.0';else if (isX(fp)) from = '>=' + fM + '.' + fm + '.0';else from = '>=' + from;
  if (isX(tM)) to = '';else if (isX(tm)) to = '<' + (+tM + 1) + '.0.0';else if (isX(tp)) to = '<' + tM + '.' + (+tm + 1) + '.0';else if (tpr) to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;else to = '<=' + to;
  return (from + ' ' + to).trim();
} // if ANY of the sets match ALL of its comparators, then pass


Range.prototype.test = function (version) {
  if (!version) return false;
  if (typeof version === 'string') version = new SemVer(version, this.loose);

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version)) return true;
  }

  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) return false;
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY) continue;

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
      }
    } // Version has a -pre, but it's not one of the ones we like.


    return false;
  }

  return true;
}

exports.satisfies = satisfies;

function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }

  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;

function maxSatisfying(versions, range, loose) {
  var max = null;
  var maxSV = null;

  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, loose)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, loose);
      }
    }
  });
  return max;
}

exports.minSatisfying = minSatisfying;

function minSatisfying(versions, range, loose) {
  var min = null;
  var minSV = null;

  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }

  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, loose)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, loose);
      }
    }
  });
  return min;
}

exports.validRange = validRange;

function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
} // Determine if version is less than all the versions possible in the range


exports.ltr = ltr;

function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
} // Determine if version is greater than all the versions possible in the range.


exports.gtr = gtr;

function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;

function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);
  var gtfn, ltefn, ltfn, comp, ecomp;

  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;

    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;

    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  } // If it satisifes the range it is not outside


  if (satisfies(version, range, loose)) {
    return false;
  } // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.


  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];
    var high = null;
    var low = null;
    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }

      high = high || comparator;
      low = low || comparator;

      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    }); // If the edge version comparator has a operator then our version
    // isn't outside it

    if (high.operator === comp || high.operator === ecomp) {
      return false;
    } // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range


    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }

  return true;
}

exports.prerelease = prerelease;

function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
}

exports.intersects = intersects;

function intersects(r1, r2, loose) {
  r1 = new Range(r1, loose);
  r2 = new Range(r2, loose);
  return r1.intersects(r2);
}

exports.coerce = coerce;

function coerce(version) {
  if (version instanceof SemVer) return version;
  if (typeof version !== 'string') return null;
  var match = version.match(re[COERCE]);
  if (match == null) return null;
  return parse((match[1] || '0') + '.' + (match[2] || '0') + '.' + (match[3] || '0'));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/stackframe/stackframe.js":
/*!**************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/stackframe/stackframe.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  function _getter(p) {
    return function () {
      return this[p];
    };
  }

  var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
  var numericProps = ['columnNumber', 'lineNumber'];
  var stringProps = ['fileName', 'functionName', 'source'];
  var arrayProps = ['args'];
  var props = booleanProps.concat(numericProps, stringProps, arrayProps);

  function StackFrame(obj) {
    if (obj instanceof Object) {
      for (var i = 0; i < props.length; i++) {
        if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
          this['set' + _capitalize(props[i])](obj[props[i]]);
        }
      }
    }
  }

  StackFrame.prototype = {
    getArgs: function getArgs() {
      return this.args;
    },
    setArgs: function setArgs(v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    getEvalOrigin: function getEvalOrigin() {
      return this.evalOrigin;
    },
    setEvalOrigin: function setEvalOrigin(v) {
      if (v instanceof StackFrame) {
        this.evalOrigin = v;
      } else if (v instanceof Object) {
        this.evalOrigin = new StackFrame(v);
      } else {
        throw new TypeError('Eval Origin must be an Object or StackFrame');
      }
    },
    toString: function toString() {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };

  for (var i = 0; i < booleanProps.length; i++) {
    StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);

    StackFrame.prototype['set' + _capitalize(booleanProps[i])] = function (p) {
      return function (v) {
        this[p] = Boolean(v);
      };
    }(booleanProps[i]);
  }

  for (var j = 0; j < numericProps.length; j++) {
    StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);

    StackFrame.prototype['set' + _capitalize(numericProps[j])] = function (p) {
      return function (v) {
        if (!_isNumber(v)) {
          throw new TypeError(p + ' must be a Number');
        }

        this[p] = Number(v);
      };
    }(numericProps[j]);
  }

  for (var k = 0; k < stringProps.length; k++) {
    StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);

    StackFrame.prototype['set' + _capitalize(stringProps[k])] = function (p) {
      return function (v) {
        this[p] = String(v);
      };
    }(stringProps[k]);
  }

  return StackFrame;
});

/***/ }),

/***/ "../../node_modules/util/support/isBufferBrowser.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/util/support/isBufferBrowser.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function isBuffer(arg) {
  return arg && _typeof(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),

/***/ "../../node_modules/util/util.js":
/*!**************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/node_modules/util/util.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return _typeof(arg) === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = __webpack_require__(/*! inherits */ "../../node_modules/inherits/inherits_browser.js");

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "../../plugins/HooksInspector/backend.js":
/*!**********************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/plugins/HooksInspector/backend.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupHooksInspector; });
/* harmony import */ var _backend_ReactDebugHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../backend/ReactDebugHooks */ "../../backend/ReactDebugHooks.js");
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



function setupHooksInspector(bridge, agent) {
  var prevHooksTree = null;
  var selectedID = null;
  agent.on('selected', function (id) {
    selectedID = id;
    var data = agent.elementData.get(id);
    var hooksTree = null;

    if (data && data.containsHooks) {
      hooksTree = inspectHooksTree(id);
    }

    if (prevHooksTree !== hooksTree) {
      prevHooksTree = hooksTree;
      bridge.send('inspectedHooks', hooksTree);
    }
  });
  agent.on('update', function (data) {
    // If the element that was just updated is also being inspected, update the hooks values.
    if (selectedID !== null && prevHooksTree !== null && prevHooksTree.elementID === data.id) {
      var hooksTree = inspectHooksTree(data.id);

      if (prevHooksTree !== hooksTree) {
        prevHooksTree = hooksTree;
        bridge.send('inspectedHooks', hooksTree);
      }
    }
  });

  function inspectHooksTree(id) {
    var data = agent.elementData.get(id);
    var internalInstance = agent.internalInstancesById.get(id);

    if (internalInstance) {
      var rendererID = agent.renderers.get(id);

      if (rendererID) {
        var internals = agent.reactInternals[rendererID].renderer;

        if (internals && internals.currentDispatcherRef) {
          // HACK: This leaks Fiber-specific logic into the Agent which is not ideal.
          // $FlowFixMe
          var currentFiber = data.state === internalInstance.memoizedState ? internalInstance : internalInstance.alternate;
          var hooksTree = Object(_backend_ReactDebugHooks__WEBPACK_IMPORTED_MODULE_0__["inspectHooksOfFiber"])(currentFiber, internals.currentDispatcherRef); // It's also important to store the element ID,
          // so the frontend can avoid potentially showing the wrong hooks data for an element,
          // (since hooks inspection is done as part of a separate Bridge message).
          // But we can't store it as "id"– because the Bridge stores a map of "inspectable" data keyed by this field.
          // Use an id that won't conflict with the element itself (because we don't want to override data).
          // This is important if components have both inspectable props and inspectable hooks.

          return {
            elementID: id,
            id: 'hooksTree',
            hooksTree: hooksTree
          };
        }
      }
    }

    return null;
  }
}

/***/ }),

/***/ "../../plugins/Profiler/ProfileCollector.js":
/*!*************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/plugins/Profiler/ProfileCollector.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasNativePerformanceNow = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
/**
 * The Profiler UI displays the entire React tree, with timing info, for each commit.
 * The frontend store only has the latest tree at any given time though,
 * So the ProfileCollector stores snapshots of the immutable tree for each commit,
 * Along with timing information for nodes that were updated in that commit.
 * This information is saved in the ProfilerStore.
 */

var ProfileCollector =
/*#__PURE__*/
function () {
  function ProfileCollector(agent) {
    var _this = this;

    _classCallCheck(this, ProfileCollector);

    _defineProperty(this, "_committedNodes", new Set());

    _defineProperty(this, "_isRecording", false);

    _defineProperty(this, "_maxActualDuration", 0);

    _defineProperty(this, "_recordingStartTime", 0);

    _defineProperty(this, "_onIsRecording", function (isRecording) {
      _this._committedNodes = new Set();
      _this._isRecording = isRecording;
      _this._recordingStartTime = isRecording ? now() : 0;

      if (isRecording) {
        // Maybe in the future, we'll allow collecting multiple profiles and stepping through them.
        // For now, clear old snapshots when we start recording new data though.
        _this._agent.emit('clearSnapshots'); // Note that the Profiler doesn't need to do anything to turn profiling on in React.
        // Profiling-capable builds automatically profile all roots when DevTools is detected.

      }
    });

    _defineProperty(this, "_onMountOrUpdate", function (data) {
      if (!_this._isRecording || data.actualDuration === undefined) {
        return;
      }

      _this._committedNodes.add(data.id);

      _this._maxActualDuration = Math.max(_this._maxActualDuration, data.actualDuration);
    });

    _defineProperty(this, "_onRootCommitted", function (id, internalInstance, data) {
      if (!_this._isRecording) {
        return;
      } // Once all roots have been committed,
      // Take a snapshot of the current tree.


      _this._takeCommitSnapshotForRoot(id, data); // Then reset data for the next snapshot.


      _this._committedNodes = new Set();
      _this._maxActualDuration = 0;
    });

    _defineProperty(this, "_onUnmount", function (id) {
      _this._committedNodes.delete(id);
    });

    this._agent = agent;
    agent.on('isRecording', this._onIsRecording);
    agent.on('mount', this._onMountOrUpdate);
    agent.on('rootCommitted', this._onRootCommitted);
    agent.on('unmount', this._onUnmount);
    agent.on('update', this._onMountOrUpdate);
  }

  _createClass(ProfileCollector, [{
    key: "_takeCommitSnapshotForRoot",
    value: function _takeCommitSnapshotForRoot(id, data) {
      var _this2 = this;

      var interactionsArray = data.memoizedInteractions != null ? Array.from(data.memoizedInteractions) : []; // Map interaction start times to when we started profiling.
      // We clone (rather than mutate) the interactions in stateNode.memoizedInteractions,
      // Because we don't want to affect user code that might be consuming these Interactions via Profiler.

      var memoizedInteractions = interactionsArray.map(function (_ref) {
        var name = _ref.name,
            timestamp = _ref.timestamp;
        return {
          name: name,
          timestamp: timestamp - _this2._recordingStartTime
        };
      });
      var storeSnapshot = {
        memoizedInteractions: memoizedInteractions,
        committedNodes: Array.from(this._committedNodes),
        commitTime: now() - this._recordingStartTime,
        duration: this._maxActualDuration,
        root: id
      };

      this._agent.emit('storeSnapshot', storeSnapshot);
    }
  }]);

  return ProfileCollector;
}();

function init(agent) {
  return new ProfileCollector(agent);
}

module.exports = {
  init: init
};

/***/ }),

/***/ "../../plugins/Profiler/backend.js":
/*!****************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/plugins/Profiler/backend.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var emptyFunction = function emptyFunction() {};

module.exports = function (bridge, agent, hook) {
  var checkIfProfilingIsSupported = function checkIfProfilingIsSupported() {
    var profilingIsSupported = false; // Feature detection for profiling mode.
    // The presence of an "treeBaseDuration" field signifies:
    // 1) This is a new enough version of React (e.g. > 16.4 which was the initial profiling release)
    // 2) This is a profiling capable bundle (e.g. DEV or PROFILING)

    agent.roots.forEach(function (rootId) {
      var root = agent.internalInstancesById.get(rootId);

      if (root.hasOwnProperty('treeBaseDuration')) {
        profilingIsSupported = true;
      }
    });
    bridge.call('profiler:update', [profilingIsSupported], emptyFunction);
  }; // Wait for roots to be registered.
  // They might not yet exist at the time the plugin is initialized.
  // Also while the first root(s) may not be capable of profiling, later ones might.


  agent.on('root', checkIfProfilingIsSupported);
  agent.on('rootUnmounted', checkIfProfilingIsSupported); // Check once in case some roots have already been registered:

  checkIfProfilingIsSupported();
};

/***/ }),

/***/ "../../plugins/ReactNativeStyle/resolveBoxStyle.js":
/*!********************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/plugins/ReactNativeStyle/resolveBoxStyle.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * This is mirror from
 * https://github.com/facebook/react-native/blob/master/Libraries/Inspector/resolveBoxStyle.js
 *
 * Resolve a style property into it's component parts, e.g.
 *
 * resolveBoxStyle('margin', {margin: 5, marginBottom: 10})
 * ->
 * {top: 5, left: 5, right: 5, bottom: 10}
 *
 * If none are set, returns false.
 */
function resolveBoxStyle(prefix, style) {
  var res = {};
  var subs = ['top', 'left', 'bottom', 'right'];
  var set = false;
  subs.forEach(function (sub) {
    res[sub] = style[prefix] || 0;
  });

  if (style[prefix]) {
    set = true;
  }

  if (style[prefix + 'Vertical']) {
    res.top = res.bottom = style[prefix + 'Vertical'];
    set = true;
  }

  if (style[prefix + 'Horizontal']) {
    res.left = res.right = style[prefix + 'Horizontal'];
    set = true;
  }

  subs.forEach(function (sub) {
    var val = style[prefix + capFirst(sub)];

    if (val) {
      res[sub] = val;
      set = true;
    }
  });

  if (!set) {
    return null;
  }

  return res;
}

function capFirst(text) {
  return text[0].toUpperCase() + text.slice(1);
}

module.exports = resolveBoxStyle;

/***/ }),

/***/ "../../plugins/ReactNativeStyle/setupBackend.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/plugins/ReactNativeStyle/setupBackend.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var resolveBoxStyle = __webpack_require__(/*! ./resolveBoxStyle */ "../../plugins/ReactNativeStyle/resolveBoxStyle.js");

var styleOverridesByHostComponentId = {};

module.exports = function setupRNStyle(bridge, agent, resolveRNStyle) {
  bridge.onCall('rn-style:get', function (id) {
    var node = agent.elementData.get(id);

    if (!node || !node.props) {
      return null;
    }

    return resolveRNStyle(node.props.style);
  });
  bridge.on('rn-style:measure', function (id) {
    measureStyle(agent, bridge, resolveRNStyle, id);
  });
  bridge.on('rn-style:rename', function (_ref) {
    var id = _ref.id,
        oldName = _ref.oldName,
        newName = _ref.newName,
        val = _ref.val;
    renameStyle(agent, id, oldName, newName, val);
    setTimeout(function () {
      return measureStyle(agent, bridge, resolveRNStyle, id);
    });
  });
  bridge.on('rn-style:set', function (_ref2) {
    var id = _ref2.id,
        attr = _ref2.attr,
        val = _ref2.val;
    setStyle(agent, id, attr, val);
    setTimeout(function () {
      return measureStyle(agent, bridge, resolveRNStyle, id);
    });
  });
};

var blank = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

function measureStyle(agent, bridge, resolveRNStyle, id) {
  var node = agent.elementData.get(id);

  if (!node || !node.props) {
    bridge.send('rn-style:measure', {});
    return;
  }

  var style = resolveRNStyle(node.props.style); // If it's a host component we edited before, amend styles.

  if (styleOverridesByHostComponentId[id]) {
    style = Object.assign({}, style, styleOverridesByHostComponentId[id]);
  }

  var instance = node.publicInstance;

  if (!instance || !instance.measure) {
    bridge.send('rn-style:measure', {
      style: style
    });
    return;
  }

  instance.measure(function (x, y, width, height, left, top) {
    // RN Android sometimes returns undefined here. Don't send measurements in this case.
    // https://github.com/jhen0409/react-native-debugger/issues/84#issuecomment-304611817
    if (typeof x !== 'number') {
      bridge.send('rn-style:measure', {
        style: style
      });
      return;
    }

    var margin = style && resolveBoxStyle('margin', style) || blank;
    var padding = style && resolveBoxStyle('padding', style) || blank;
    bridge.send('rn-style:measure', {
      style: style,
      measuredLayout: {
        x: x,
        y: y,
        width: width,
        height: height,
        left: left,
        top: top,
        margin: margin,
        padding: padding
      }
    });
  });
}

function shallowClone(obj) {
  var nobj = {};

  for (var n in obj) {
    nobj[n] = obj[n];
  }

  return nobj;
}

function renameStyle(agent, id, oldName, newName, val) {
  var _ref3;

  var data = agent.elementData.get(id);
  var newStyle = newName ? (_ref3 = {}, _defineProperty(_ref3, oldName, undefined), _defineProperty(_ref3, newName, val), _ref3) : _defineProperty({}, oldName, undefined);

  if (data && data.updater && typeof data.updater.setInProps === 'function') {
    // First attempt: use setInProps().
    // We do this for composite components, and it works relatively well.
    var style = data && data.props && data.props.style;
    var customStyle;

    if (Array.isArray(style)) {
      var lastLength = style.length - 1;

      if (_typeof(style[lastLength]) === 'object' && !Array.isArray(style[lastLength])) {
        customStyle = shallowClone(style[lastLength]);
        delete customStyle[oldName];

        if (newName) {
          customStyle[newName] = val;
        } else {
          customStyle[oldName] = undefined;
        } // $FlowFixMe we know that updater is not null here


        data.updater.setInProps(['style', lastLength], customStyle);
      } else {
        style = style.concat([newStyle]); // $FlowFixMe we know that updater is not null here

        data.updater.setInProps(['style'], style);
      }
    } else {
      if (_typeof(style) === 'object') {
        customStyle = shallowClone(style);
        delete customStyle[oldName];

        if (newName) {
          customStyle[newName] = val;
        } else {
          customStyle[oldName] = undefined;
        } // $FlowFixMe we know that updater is not null here


        data.updater.setInProps(['style'], customStyle);
      } else {
        style = [style, newStyle];
        data.updater.setInProps(['style'], style);
      }
    }
  } else if (data && data.updater && typeof data.updater.setNativeProps === 'function') {
    // Fallback: use setNativeProps(). We're dealing with a host component.
    // Remember to "correct" resolved styles when we read them next time.
    if (!styleOverridesByHostComponentId[id]) {
      styleOverridesByHostComponentId[id] = newStyle;
    } else {
      Object.assign(styleOverridesByHostComponentId[id], newStyle);
    }

    data.updater.setNativeProps({
      style: newStyle
    });
  } else {
    return;
  }

  agent.emit('hideHighlight');
}

function setStyle(agent, id, attr, val) {
  var data = agent.elementData.get(id);

  var newStyle = _defineProperty({}, attr, val);

  if (data && data.updater && typeof data.updater.setInProps === 'function') {
    // First attempt: use setInProps().
    // We do this for composite components, and it works relatively well.
    var style = data.props && data.props.style;

    if (Array.isArray(style)) {
      var lastLength = style.length - 1;

      if (_typeof(style[lastLength]) === 'object' && !Array.isArray(style[lastLength])) {
        // $FlowFixMe we know that updater is not null here
        data.updater.setInProps(['style', lastLength, attr], val);
      } else {
        style = style.concat([newStyle]); // $FlowFixMe we know that updater is not null here

        data.updater.setInProps(['style'], style);
      }
    } else {
      style = [style, newStyle];
      data.updater.setInProps(['style'], style);
    }
  } else if (data && data.updater && typeof data.updater.setNativeProps === 'function') {
    // Fallback: use setNativeProps(). We're dealing with a host component.
    // Remember to "correct" resolved styles when we read them next time.
    if (!styleOverridesByHostComponentId[id]) {
      styleOverridesByHostComponentId[id] = newStyle;
    } else {
      Object.assign(styleOverridesByHostComponentId[id], newStyle);
    }

    data.updater.setNativeProps({
      style: newStyle
    });
  } else {
    return;
  }

  agent.emit('hideHighlight');
}

/***/ }),

/***/ "../../utils/guid.js":
/*!**************************************************************************************!*\
  !*** /Users/shengshuqiang/dream/AdvanceOnReactNative/react-devtools-p/utils/guid.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


function guid() {
  return 'g' + Math.random().toString(16).substr(2);
}

module.exports = guid;

/***/ }),

/***/ "./src/backend.js":
/*!************************!*\
  !*** ./src/backend.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var Agent = __webpack_require__(/*! ../../../agent/Agent */ "../../agent/Agent.js");

var Bridge = __webpack_require__(/*! ../../../agent/Bridge */ "../../agent/Bridge.js");

var ProfileCollector = __webpack_require__(/*! ../../../plugins/Profiler/ProfileCollector */ "../../plugins/Profiler/ProfileCollector.js");

var installGlobalHook = __webpack_require__(/*! ../../../backend/installGlobalHook */ "../../backend/installGlobalHook.js");

var inject = __webpack_require__(/*! ../../../agent/inject */ "../../agent/inject.js");

var invariant = __webpack_require__(/*! assert */ "../../node_modules/assert/assert.js");

var setupRNStyle = __webpack_require__(/*! ../../../plugins/ReactNativeStyle/setupBackend */ "../../plugins/ReactNativeStyle/setupBackend.js");

var setupHooksInspector = __webpack_require__(/*! ../../../plugins/HooksInspector/backend */ "../../plugins/HooksInspector/backend.js").default;

var setupProfiler = __webpack_require__(/*! ../../../plugins/Profiler/backend */ "../../plugins/Profiler/backend.js");

installGlobalHook(window);

if (window.document) {
  // This shell is universal, and might be used inside a web app.
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on('react-devtools', function (agent) {
    var setupHighlighter = __webpack_require__(/*! ../../../frontend/Highlighter/setup */ "../../frontend/Highlighter/setup.js");

    setupHighlighter(agent);
  });
}

function connectToDevTools(options) {
  var _ref = options || {},
      _ref$host = _ref.host,
      host = _ref$host === void 0 ? 'localhost' : _ref$host,
      _ref$port = _ref.port,
      port = _ref$port === void 0 ? 8097 : _ref$port,
      websocket = _ref.websocket,
      _ref$resolveRNStyle = _ref.resolveRNStyle,
      resolveRNStyle = _ref$resolveRNStyle === void 0 ? null : _ref$resolveRNStyle,
      _ref$isAppActive = _ref.isAppActive,
      isAppActive = _ref$isAppActive === void 0 ? function () {
    return true;
  } : _ref$isAppActive;

  function scheduleRetry() {
    // Two seconds because RN had issues with too fast retries.
    setTimeout(function () {
      return connectToDevTools(options);
    }, 2000);
  }

  if (!isAppActive()) {
    // If the app is in background, maybe retry later.
    // Don't actually attempt to connect until we're in foreground.
    scheduleRetry();
    return;
  }

  var messageListeners = [];
  var closeListeners = [];
  var uri = 'ws://' + host + ':' + port; // If existing websocket is passed, use it.
  // This is necessary to support our custom integrations.
  // See D6251744.

  var ws = websocket ? websocket : new window.WebSocket(uri);
  ws.onclose = handleClose;
  ws.onerror = handleFailed;
  ws.onmessage = handleMessage;

  ws.onopen = function () {
    var wall = {
      listen: function listen(fn) {
        messageListeners.push(fn);
      },
      onClose: function onClose(fn) {
        closeListeners.push(fn);
      },
      send: function send(data) {
        // console.log('SSU', 'wall.send', JSON.stringify(data));
        ws.send(JSON.stringify(data));
      }
    };
    setupBackend(wall, resolveRNStyle);
  };

  var hasClosed = false;

  function handleClose() {
    if (!hasClosed) {
      hasClosed = true;
      scheduleRetry();
      closeListeners.forEach(function (fn) {
        return fn();
      });
    }
  }

  function handleFailed() {
    if (!hasClosed) {
      hasClosed = true;
      closeListeners.forEach(function (fn) {
        return fn();
      });
    }
  }

  function handleMessage(evt) {
    var data;

    try {
      invariant(typeof evt.data === 'string');
      data = JSON.parse(evt.data);
    } catch (e) {
      console.error('failed to parse json: ' + String(evt.data));
      return;
    }

    messageListeners.forEach(function (fn) {
      try {
        fn(data);
      } catch (e) {
        // jsc doesn't play so well with tracebacks that go into eval'd code,
        // so the stack trace here will stop at the `eval()` call. Getting the
        // message that caused the error is the best we can do for now.
        console.log(data);
        throw e;
      }
    });
  }
}

function setupBackend(wall, resolveRNStyle) {
  wall.onClose(function () {
    if (agent) {
      agent.emit('shutdown');
    } // This appears necessary for plugin cleanup.


    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.emit('shutdown');

    bridge = null;
    agent = null;
    console.log('closing devtools');
  });
  var bridge = new Bridge(wall);
  var agent = new Agent(window, {
    rnStyle: !!resolveRNStyle,
    rnStyleMeasure: !!resolveRNStyle
  });
  agent.addBridge(bridge);

  if (resolveRNStyle) {
    setupRNStyle(bridge, agent, resolveRNStyle);
  }

  setupProfiler(bridge, agent, window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
  setupHooksInspector(bridge, agent);

  var _connectTimeout = setTimeout(function () {
    console.warn('react-devtools agent got no connection');
  }, 20000);

  agent.once('connected', function () {
    if (!agent) {
      return;
    }

    inject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__, agent);
    clearTimeout(_connectTimeout);
  });
  ProfileCollector.init(agent);
}

module.exports = {
  connectToDevTools: connectToDevTools
};

/***/ })

/******/ });
});
//# sourceMappingURL=backend.js.map