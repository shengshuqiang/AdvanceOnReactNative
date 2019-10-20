"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _decorate = _interopRequireDefault(require("../../frontend/decorate"));

var _FiberTree = _interopRequireDefault(require("./FiberTree.2.0"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _instanceof(left, right) {
    if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
    ) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }
    return self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: true, configurable: true }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
    return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var CONTENT_SIZE = 10000;
var InitRatio = 1.0 * 0.58;
var RatioStep = InitRatio * 0.2;
var LifecycleMethods = [
    "constructor",
    "componentWillMount",
    "UNSAFE_componentWillMount",
    "componentWillReceiveProps",
    "UNSAFE_componentWillReceiveProps",
    "shouldComponentUpdate",
    "componentWillUpdate",
    "UNSAFE_componentWillUpdate",
    "render",
    "getSnapshotBeforeUpdate",
    "componentDidMount",
    "componentDidUpdate",
    "componentWillUnmount"
];
var ComponentPrototypes = [
    "isReactComponent",
    "setState",
    "forceUpdate",
    "getDerivedStateFromProps"
];

var IndexComponent = function IndexComponent(_ref) {
    var runRecordRootNodes = _ref.runRecordRootNodes,
        onPress = _ref.onPress,
        curRecordIndex = _ref.curRecordIndex;
    var component = null;

    if (runRecordRootNodes) {
        var groups = [];
        var items = [];
        var rootRecord = null;
        runRecordRootNodes.forEach(function(runRecordRootNode, recordIndex) {
            if (rootRecord === null || runRecordRootNode.title !== rootRecord) {
                rootRecord = runRecordRootNode.title; // console.log('SSU', 'IndexComponent', `${recordIndex}-${rootRecord}`, 'groups.push');

                if (items.length > 0) {
                    groups.push(
                        _react.default.createElement(
                            "div",
                            {
                                style: {
                                    display: "flex",
                                    overflow: "scroll"
                                }
                            },
                            items
                        )
                    );
                    items = [];
                }
            }

            items.push(
                _react.default.createElement(
                    "div",
                    {
                        style: {
                            backgroundColor:
                                curRecordIndex === recordIndex ? "purple" : "gray",
                            borderRadius: 15,
                            fontSize: 25,
                            textAlign: "center",
                            verticalAlign: "middle",
                            padding: 15,
                            display: "inline-block",
                            marginLeft: 10,
                            color: "blue"
                        },
                        onClick: function onClick() {
                            return onPress(recordIndex);
                        }
                    },
                    recordIndex
                )
            ); // console.log('SSU', 'IndexComponent', `${recordIndex}-${rootRecord}`, 'items.push');
        });

        if (items.length > 0) {
            // console.log('SSU', 'IndexComponent', `${-1}-${rootRecord}`, 'groups.push');
            groups.push(
                _react.default.createElement(
                    "div",
                    {
                        style: {
                            display: "flex",
                            overflow: "scroll"
                        }
                    },
                    items
                )
            );
        }

        component = _react.default.createElement(
            "div",
            {
                style: {
                    width: CONTENT_SIZE
                }
            },
            groups
        );
    } // console.log('SSU', 'IndexComponent', component);

    return component;
};

var FiberTreeTab20 =
    /*#__PURE__*/
    (function(_React$Component) {
        _inherits(FiberTreeTab20, _React$Component);

        function FiberTreeTab20(props) {
            var _this;

            _classCallCheck(this, FiberTreeTab20);

            _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(FiberTreeTab20).call(this, props)
            );

            _defineProperty(_assertThisInitialized(_this), "runRecordRootNodes", []);

            _defineProperty(
                _assertThisInitialized(_this),
                "onPressRatioAdd",
                function() {
                    _this.setState({
                        ratio: _this.state.ratio + RatioStep
                    });
                }
            );

            _defineProperty(
                _assertThisInitialized(_this),
                "onPressRatioSub",
                function() {
                    _this.setState({
                        ratio: _this.state.ratio - RatioStep
                    });
                }
            );

            _defineProperty(_assertThisInitialized(_this), "onPressRecord", function(
                recordIndex
            ) {
                _this.setState({
                    recordIndex: recordIndex
                });
            });

            _defineProperty(_assertThisInitialized(_this), "onPressPlay", function() {
                _this.play(0);
            });

            _defineProperty(_assertThisInitialized(_this), "play", function(
                recordIndex
            ) {
                _this.setState({
                    recordIndex: recordIndex
                });

                if (recordIndex < _this.props.fiberTreeInfos.length - 1) {
                    setTimeout(function() {
                        _this.play(recordIndex + 1);
                    }, 300);
                }
            });

            _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(e) {
                var recordIndex = _this.state.recordIndex;

                switch (e.keyCode) {
                    case 37: //左

                    case 38:
                        //上
                        recordIndex--;
                        break;

                    case 39: //右

                    case 40:
                        //下
                        recordIndex++;
                        break;
                }

                var fiberTreeInfosLength = _this.props.fiberTreeInfos
                    ? _this.props.fiberTreeInfos.length
                    : 0;
                recordIndex += fiberTreeInfosLength;
                recordIndex %= fiberTreeInfosLength;

                _this.setState({
                    recordIndex: recordIndex
                });
            });

            _this.state = {
                ratio: InitRatio,
                recordIndex: _this.props.fiberTreeInfos
                    ? _this.props.fiberTreeInfos.length - 1
                    : -1
            };

            _this.refershRunRecordRootNodes(props.fiberTreeInfos);

            return _this;
        }

        _createClass(FiberTreeTab20, [
            {
                key: "draw",
                value: function draw(
                    currentFiberIDs,
                    fibers,
                    doms,
                    runRecordRootNode,
                    ratio
                ) {
                    // console.log('SSU', 'drawFiberTree', JSON.stringify(fibers));
                    (0, _FiberTree.default)(
                        currentFiberIDs,
                        fibers,
                        doms,
                        runRecordRootNode,
                        ratio
                    );
                }
            },
            {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps, nextContext) {
                    // console.log('SSU', 'componentWillReceiveProps', `${this.props.fiberTreeInfo ? this.props.fiberTreeInfo.index : -1}_${nextProps.fiberTreeInfo ? nextProps.fiberTreeInfo.index : -1}`);
                    if (nextProps.fiberTreeInfos) {
                        this.setState({
                            recordIndex: nextProps.fiberTreeInfos.length - 1
                        });
                    }

                    if (
                        this.runRecordRootNodes.length !== nextProps.fiberTreeInfos.length
                    ) {
                        this.refershRunRecordRootNodes(nextProps.fiberTreeInfos);
                    }
                }
            },
            {
                key: "componentDidMount",
                value: function componentDidMount() {
                    document.addEventListener("keydown", this.onKeyDown);
                }
            },
            {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                    document.removeEventListener("keydown", this.onKeyDown);
                }
            },
            {
                key: "getMatchRunRecordTitle",
                value: function getMatchRunRecordTitle(title) {
                    if (title) {
                        var index = title.indexOf("(");

                        if (index != -1) {
                            return title.substring(0, index);
                        }
                    }

                    return title;
                }
            },
            {
                key: "isRunRecordTitleEqual",
                value: function isRunRecordTitleEqual(title1, title2) {
                    return (
                        this.getMatchRunRecordTitle(title1) ===
                        this.getMatchRunRecordTitle(title2)
                    );
                }
            },
            {
                key: "buildRunRecordBoxColor",
                value: function buildRunRecordBoxColor(runRecord) {
                    if (LifecycleMethods.includes(runRecord)) {
                        return "red";
                    } else if (ComponentPrototypes.includes(runRecord)) {
                        return "#ff8c00";
                    } else if (runRecord.startsWith("createFiber(")) {
                        return "#32cd32";
                    } else if (
                        runRecord.startsWith("expirationTime=(") ||
                        runRecord.startsWith("childExpirationTime=(")
                    ) {
                        return "#87cefa";
                    } else if (runRecord.startsWith("UIManager.")) {
                        return "blue";
                    } else if (runRecord.includes(".effectTag")) {
                        return "green";
                    } else if (runRecord.includes("diff算法:")) {
                        return "#2f4f4f";
                    }

                    return null;
                }
            },
            {
                key: "refershRunRecordRootNodes",
                value: function refershRunRecordRootNodes(fiberTreeInfos) {
                    var _this2 = this;

                    this.runRecordRootNodes = [];
                    fiberTreeInfos &&
                    fiberTreeInfos.forEach(function(fiberTreeInfo, index) {
                        if (index >= _this2.runRecordRootNodes.length) {
                            var preRunRecordHistory =
                                index > 0 ? fiberTreeInfos[index - 1].runRecordHistory : null;
                            var runRecordHistory = fiberTreeInfo.runRecordHistory;

                            var runRecordRootNode = _this2.buildRunRecordHistoryTree(
                                runRecordHistory,
                                preRunRecordHistory ? preRunRecordHistory.length : -1
                            );

                            _this2.runRecordRootNodes.push(runRecordRootNode);
                        }
                    });
                }
            },
            {
                key: "buildRunRecordHistoryTree",
                value: function buildRunRecordHistoryTree(
                    runRecordHistory,
                    preHistoryCount
                ) {
                    var _this3 = this;

                    var runRecordRootNode = null; // let runRecordRootNode = {
                    //     title: '起点',
                    //     parent: null,
                    //     children: [],
                    // };

                    var runRecordParentNode = runRecordRootNode;

                    if (runRecordHistory && runRecordHistory.length) {
                        runRecordHistory.forEach(function(runRecord, index) {
                            var boxColor = _this3.buildRunRecordBoxColor(runRecord);

                            var isPatch = index > preHistoryCount;
                            var runRecordNode;

                            if ("pop()" === runRecord) {
                                runRecordNode = runRecordParentNode;
                                runRecordNode.highLight = false;
                                runRecordNode.isPatch = isPatch;
                                runRecordParentNode = runRecordNode.parent;
                            } else {
                                if (runRecordParentNode) {
                                    runRecordNode = runRecordParentNode.children.find(function(
                                        child
                                    ) {
                                        return _this3.isRunRecordTitleEqual(child.title, runRecord);
                                    });

                                    if (runRecordNode) {
                                        // do nothing
                                        runRecordNode.title = runRecord;
                                        runRecordNode.index = index;
                                        runRecordNode.count++;
                                    } else {
                                        runRecordNode = {
                                            title: runRecord,
                                            parent: runRecordParentNode,
                                            children: [],
                                            highLight: true,
                                            count: 1,
                                            index: index,
                                            boxColor: boxColor,
                                            isPatch: false
                                        };
                                        runRecordParentNode.children.push(runRecordNode);
                                    }

                                    runRecordNode.highLight = true;
                                    runRecordNode.isPatch = false;
                                    runRecordParentNode = runRecordNode;
                                } else {
                                    runRecordNode = {
                                        title: runRecord,
                                        parent: null,
                                        children: [],
                                        highLight: true,
                                        count: 1,
                                        index: index,
                                        boxColor: boxColor,
                                        isPatch: false
                                    };
                                    runRecordRootNode = runRecordNode;
                                    runRecordParentNode = runRecordNode;
                                }
                            }
                        });
                    }

                    return runRecordRootNode;
                }
            },
            {
                key: "render",
                value: function render() {
                    var _this4 = this;

                    var _ref2 = this.props.fiberTreeInfos
                        ? this.state.recordIndex >= 0 &&
                        this.state.recordIndex < this.props.fiberTreeInfos.length
                            ? this.props.fiberTreeInfos[this.state.recordIndex]
                            : this.props.fiberTreeInfos[
                            this.props.fiberTreeInfos.length - 1
                                ]
                        : {},
                        currentFiberIDs = _ref2.currentFiberIDs,
                        _ref2$fibers = _ref2.fibers,
                        fibers = _ref2$fibers === void 0 ? null : _ref2$fibers,
                        _ref2$doms = _ref2.doms,
                        doms = _ref2$doms === void 0 ? null : _ref2$doms,
                        _ref2$runRecordHistor = _ref2.runRecordHistory,
                        runRecordHistory =
                            _ref2$runRecordHistor === void 0 ? null : _ref2$runRecordHistor,
                        _ref2$desc = _ref2.desc,
                        desc = _ref2$desc === void 0 ? null : _ref2$desc;

                    var runRecordRootNode =
                        this.state.recordIndex >= 0
                            ? this.runRecordRootNodes[this.state.recordIndex]
                            : null;
                    console.log("SSU", "render", "fiberTreeInfos", {
                        fibers: fibers,
                        doms: doms,
                        runRecordHistory: runRecordHistory,
                        runRecordRootNode: runRecordRootNode
                    });
                    setTimeout(function() {
                        return _this4.draw(
                            currentFiberIDs,
                            fibers,
                            doms,
                            runRecordRootNode,
                            _this4.state.ratio
                        );
                    }, 0);
                    return _react.default.createElement(
                        "div",
                        {
                            style: {
                                overflow: "scroll"
                            }
                        },
                        _react.default.createElement(
                            "div",
                            {
                                style: {
                                    display: "flex",
                                    width: CONTENT_SIZE
                                }
                            },
                            _react.default.createElement(
                                "div",
                                {
                                    style: {
                                        width: 30,
                                        height: 30,
                                        backgroundColor: "orange",
                                        borderRadius: 15,
                                        fontSize: 25,
                                        textAlign: "center",
                                        color: "red"
                                    },
                                    onClick: this.onPressRatioAdd
                                },
                                "+"
                            ),
                            _react.default.createElement(
                                "div",
                                {
                                    style: {
                                        width: 60,
                                        height: 30,
                                        backgroundColor: "gray",
                                        borderRadius: 15,
                                        fontSize: 25,
                                        textAlign: "center",
                                        color: "red"
                                    }
                                },
                                this.state.ratio.toFixed(2)
                            ),
                            _react.default.createElement(
                                "div",
                                {
                                    style: {
                                        width: 30,
                                        height: 30,
                                        backgroundColor: "orange",
                                        borderRadius: 15,
                                        fontSize: 25,
                                        textAlign: "center",
                                        color: "red"
                                    },
                                    onClick: this.onPressRatioSub
                                },
                                "-"
                            ),
                            _react.default.createElement(
                                "div",
                                {
                                    style: {
                                        width: 100,
                                        height: 30,
                                        backgroundColor: "purple",
                                        borderRadius: 15,
                                        marginLeft: 10,
                                        fontSize: 25,
                                        textAlign: "center",
                                        color: "red"
                                    },
                                    onClick: this.onPressPlay
                                },
                                "Play"
                            ),
                            _react.default.createElement(
                                "div",
                                null,
                                "\u3010"
                                    .concat(this.state.recordIndex, "/")
                                    .concat(
                                        this.props.fiberTreeInfos
                                            ? this.props.fiberTreeInfos.length - 1
                                            : 0,
                                        "\u3011"
                                    )
                                    .concat(desc)
                            )
                        ),
                        _react.default.createElement(IndexComponent, {
                            runRecordRootNodes: this.runRecordRootNodes,
                            onPress: this.onPressRecord,
                            curRecordIndex: this.state.recordIndex
                        }),
                        _react.default.createElement(
                            "canvas",
                            {
                                id: "myCanvas",
                                width: CONTENT_SIZE,
                                height: CONTENT_SIZE
                            },
                            "Your browser does not support the canvas element."
                        )
                    );
                }
            }
        ]);

        return FiberTreeTab20;
    })(_react.default.Component);

var _default = (0, _decorate.default)(
    {
        store: "fiberTreeStore",
        listeners: function listeners() {
            return ["sendFiberTree"];
        },        _inherits(FiberTreeTab20, _React$Component);

function FiberTreeTab20(props) {
    var _this;

    _classCallCheck(this, FiberTreeTab20);

    _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(FiberTreeTab20).call(this, props)
    );

    _defineProperty(_assertThisInitialized(_this), "runRecordRootNodes", []);

    _defineProperty(
        _assertThisInitialized(_this),
        "onPressRatioAdd",
        function() {
            _this.setState({
                ratio: _this.state.ratio + RatioStep
            });
        }
    );

    _defineProperty(
        _assertThisInitialized(_this),
        "onPressRatioSub",
        function() {
            _this.setState({
                ratio: _this.state.ratio - RatioStep
            });
        }
    );

    _defineProperty(_assertThisInitialized(_this), "onPressRecord", function(
        recordIndex
    ) {
        _this.setState({
            recordIndex: recordIndex
        });
    });

    _defineProperty(_assertThisInitialized(_this), "onPressPlay", function() {
        _this.play(0);
    });

    _defineProperty(_assertThisInitialized(_this), "play", function(
        recordIndex
    ) {
        _this.setState({
            recordIndex: recordIndex
        });

        if (recordIndex < _this.props.fiberTreeInfos.length - 1) {
            setTimeout(function() {
                _this.play(recordIndex + 1);
            }, 300);
        }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(e) {
        var recordIndex = _this.state.recordIndex;

        switch (e.keyCode) {
            case 37: //左

            case 38:
                //上
                recordIndex--;
                break;

            case 39: //右

            case 40:
                //下
                recordIndex++;
                break;
        }

        var fiberTreeInfosLength = _this.props.fiberTreeInfos
            ? _this.props.fiberTreeInfos.length
            : 0;
        recordIndex += fiberTreeInfosLength;
        recordIndex %= fiberTreeInfosLength;

        _this.setState({
            recordIndex: recordIndex
        });
    });

    _this.state = {
        ratio: InitRatio,
        recordIndex: _this.props.fiberTreeInfos
            ? _this.props.fiberTreeInfos.length - 1
            : -1
    };

    _this.refershRunRecordRootNodes(props.fiberTreeInfos);

    return _this;
}

_createClass(FiberTreeTab20, [
    {
        key: "draw",
        value: function draw(
            currentFiberIDs,
            fibers,
            doms,
            runRecordRootNode,
            ratio
        ) {
            // console.log('SSU', 'drawFiberTree', JSON.stringify(fibers));
            (0, _FiberTree.default)(
                currentFiberIDs,
                fibers,
                doms,
                runRecordRootNode,
                ratio
            );
        }
    },
    {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps, nextContext) {
            // console.log('SSU', 'componentWillReceiveProps', `${this.props.fiberTreeInfo ? this.props.fiberTreeInfo.index : -1}_${nextProps.fiberTreeInfo ? nextProps.fiberTreeInfo.index : -1}`);
            if (nextProps.fiberTreeInfos) {
                this.setState({
                    recordIndex: nextProps.fiberTreeInfos.length - 1
                });
            }

            if (
                this.runRecordRootNodes.length !== nextProps.fiberTreeInfos.length
            ) {
                this.refershRunRecordRootNodes(nextProps.fiberTreeInfos);
            }
        }
    },
    {
        key: "componentDidMount",
        value: function componentDidMount() {
            document.addEventListener("keydown", this.onKeyDown);
        }
    },
    {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            document.removeEventListener("keydown", this.onKeyDown);
        }
    },
    {
        key: "getMatchRunRecordTitle",
        value: function getMatchRunRecordTitle(title) {
            if (title) {
                var index = title.indexOf("(");

                if (index != -1) {
                    return title.substring(0, index);
                }
            }

            return title;
        }
    },
    {
        key: "isRunRecordTitleEqual",
        value: function isRunRecordTitleEqual(title1, title2) {
            return (
                this.getMatchRunRecordTitle(title1) ===
                this.getMatchRunRecordTitle(title2)
            );
        }
    },
    {
        key: "buildRunRecordBoxColor",
        value: function buildRunRecordBoxColor(runRecord) {
            if (LifecycleMethods.includes(runRecord)) {
                return "red";
            } else if (ComponentPrototypes.includes(runRecord)) {
                return "#ff8c00";
            } else if (runRecord.startsWith("createFiber(")) {
                return "#32cd32";
            } else if (
                runRecord.startsWith("expirationTime=(") ||
                runRecord.startsWith("childExpirationTime=(")
            ) {
                return "#87cefa";
            } else if (runRecord.startsWith("UIManager.")) {
                return "blue";
            } else if (runRecord.includes(".effectTag")) {
                return "green";
            } else if (runRecord.includes("diff算法:")) {
                return "#2f4f4f";
            }

            return null;
        }
    },
    {
        key: "refershRunRecordRootNodes",
        value: function refershRunRecordRootNodes(fiberTreeInfos) {
            var _this2 = this;

            this.runRecordRootNodes = [];
            fiberTreeInfos &&
            fiberTreeInfos.forEach(function(fiberTreeInfo, index) {
                if (index >= _this2.runRecordRootNodes.length) {
                    var preRunRecordHistory =
                        index > 0 ? fiberTreeInfos[index - 1].runRecordHistory : null;
                    var runRecordHistory = fiberTreeInfo.runRecordHistory;

                    var runRecordRootNode = _this2.buildRunRecordHistoryTree(
                        runRecordHistory,
                        preRunRecordHistory ? preRunRecordHistory.length : -1
                    );

                    _this2.runRecordRootNodes.push(runRecordRootNode);
                }
            });
        }
    },
    {
        key: "buildRunRecordHistoryTree",
        value: function buildRunRecordHistoryTree(
            runRecordHistory,
            preHistoryCount
        ) {
            var _this3 = this;

            var runRecordRootNode = null; // let runRecordRootNode = {
            //     title: '起点',
            //     parent: null,
            //     children: [],
            // };

            var runRecordParentNode = runRecordRootNode;

            if (runRecordHistory && runRecordHistory.length) {
                runRecordHistory.forEach(function(runRecord, index) {
                    var boxColor = _this3.buildRunRecordBoxColor(runRecord);

                    var isPatch = index > preHistoryCount;
                    var runRecordNode;

                    if ("pop()" === runRecord) {
                        runRecordNode = runRecordParentNode;
                        runRecordNode.highLight = false;
                        runRecordNode.isPatch = isPatch;
                        runRecordParentNode = runRecordNode.parent;
                    } else {
                        if (runRecordParentNode) {
                            runRecordNode = runRecordParentNode.children.find(function(
                                child
                            ) {
                                return _this3.isRunRecordTitleEqual(child.title, runRecord);
                            });

                            if (runRecordNode) {
                                // do nothing
                                runRecordNode.title = runRecord;
                                runRecordNode.index = index;
                                runRecordNode.count++;
                            } else {
                                runRecordNode = {
                                    title: runRecord,
                                    parent: runRecordParentNode,
                                    children: [],
                                    highLight: true,
                                    count: 1,
                                    index: index,
                                    boxColor: boxColor,
                                    isPatch: false
                                };
                                runRecordParentNode.children.push(runRecordNode);
                            }

                            runRecordNode.highLight = true;
                            runRecordNode.isPatch = false;
                            runRecordParentNode = runRecordNode;
                        } else {
                            runRecordNode = {
                                title: runRecord,
                                parent: null,
                                children: [],
                                highLight: true,
                                count: 1,
                                index: index,
                                boxColor: boxColor,
                                isPatch: false
                            };
                            runRecordRootNode = runRecordNode;
                            runRecordParentNode = runRecordNode;
                        }
                    }
                });
            }

            return runRecordRootNode;
        }
    },
    {
        key: "render",
        value: function render() {
            var _this4 = this;

            var _ref2 = this.props.fiberTreeInfos
                ? this.state.recordIndex >= 0 &&
                this.state.recordIndex < this.props.fiberTreeInfos.length
                    ? this.props.fiberTreeInfos[this.state.recordIndex]
                    : this.props.fiberTreeInfos[
                    this.props.fiberTreeInfos.length - 1
                        ]
                : {},
                currentFiberIDs = _ref2.currentFiberIDs,
                _ref2$fibers = _ref2.fibers,
                fibers = _ref2$fibers === void 0 ? null : _ref2$fibers,
                _ref2$doms = _ref2.doms,
                doms = _ref2$doms === void 0 ? null : _ref2$doms,
                _ref2$runRecordHistor = _ref2.runRecordHistory,
                runRecordHistory =
                    _ref2$runRecordHistor === void 0 ? null : _ref2$runRecordHistor,
                _ref2$desc = _ref2.desc,
                desc = _ref2$desc === void 0 ? null : _ref2$desc;

            var runRecordRootNode =
                this.state.recordIndex >= 0
                    ? this.runRecordRootNodes[this.state.recordIndex]
                    : null;
            console.log("SSU", "render", "fiberTreeInfos", {
                fibers: fibers,
                doms: doms,
                runRecordHistory: runRecordHistory,
                runRecordRootNode: runRecordRootNode
            });
            setTimeout(function() {
                return _this4.draw(
                    currentFiberIDs,
                    fibers,
                    doms,
                    runRecordRootNode,
                    _this4.state.ratio
                );
            }, 0);
            return _react.default.createElement(
                "div",
                {
                    style: {
                        overflow: "scroll"
                    }
                },
                _react.default.createElement(
                    "div",
                    {
                        style: {
                            display: "flex",
                            width: CONTENT_SIZE
                        }
                    },
                    _react.default.createElement(
                        "div",
                        {
                            style: {
                                width: 30,
                                height: 30,
                                backgroundColor: "orange",
                                borderRadius: 15,
                                fontSize: 25,
                                textAlign: "center",
                                color: "red"
                            },
                            onClick: this.onPressRatioAdd
                        },
                        "+"
                    ),
                    _react.default.createElement(
                        "div",
                        {
                            style: {
                                width: 60,
                                height: 30,
                                backgroundColor: "gray",
                                borderRadius: 15,
                                fontSize: 25,
                                textAlign: "center",
                                color: "red"
                            }
                        },
                        this.state.ratio.toFixed(2)
                    ),
                    _react.default.createElement(
                        "div",
                        {
                            style: {
                                width: 30,
                                height: 30,
                                backgroundColor: "orange",
                                borderRadius: 15,
                                fontSize: 25,
                                textAlign: "center",
                                color: "red"
                            },
                            onClick: this.onPressRatioSub
                        },
                        "-"
                    ),
                    _react.default.createElement(
                        "div",
                        {
                            style: {
                                width: 100,
                                height: 30,
                                backgroundColor: "purple",
                                borderRadius: 15,
                                marginLeft: 10,
                                fontSize: 25,
                                textAlign: "center",
                                color: "red"
                            },
                            onClick: this.onPressPlay
                        },
                        "Play"
                    ),
                    _react.default.createElement(
                        "div",
                        null,
                        "\u3010"
                            .concat(this.state.recordIndex, "/")
                            .concat(
                                this.props.fiberTreeInfos
                                    ? this.props.fiberTreeInfos.length - 1
                                    : 0,
                                "\u3011"
                            )
                            .concat(desc)
                    )
                ),
                _react.default.createElement(IndexComponent, {
                    runRecordRootNodes: this.runRecordRootNodes,
                    onPress: this.onPressRecord,
                    curRecordIndex: this.state.recordIndex
                }),
                _react.default.createElement(
                    "canvas",
                    {
                        id: "myCanvas",
                        width: CONTENT_SIZE,
                        height: CONTENT_SIZE
                    },
                    "Your browser does not support the canvas element."
                )
            );
        }
    }
]);

return FiberTreeTab20;

props: function props(store) {
            return {
                fiberTreeInfos: store.fiberTreeInfos
            };
        }
    },
    FiberTreeTab20
);

exports.default = _default;
