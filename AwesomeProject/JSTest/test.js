var A = {
    a: 123
};

class B {

}

var bb = new B();

function C() {
    c: 123
}

var cc = new C();

console.log(A);
console.log(B);
console.log(bb);
console.log(C);
console.log(cc);
console.log('SSU');


(0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
        console.log('SSU', 'App#Render Phase NormalLifecycle Methods#render()', {
            count: this.state.count
        }, this.props, this.state);
        var isText = true || this.state.count % 2 === 0;
        return _react.default.createElement(
            _reactNative.TouchableWithoutFeedback,
            { onPress: this.onPress, __source: { fileName: _jsxFileName, lineNumber: 209 } },
            _react.default.createElement(
                _reactNative.View,
                { style: { width: 300, height: 150, backgroundColor: 'red' }, __source: { fileName: _jsxFileName, lineNumber: 210 } },
                isText
                    ?
                    _react.default.createElement(
                        _reactNative.Text,
                        { style: styles.txt, __source: { fileName: _jsxFileName, lineNumber: 211 } },
                        "\u70B9\u51FB\u6570" + this.state.count
                    )
                    :
                    _react.default.createElement(
                        _reactNative.Image,
                        { style: styles.img, source: { uri: 'http://demo.sc.chinaz.com/Files/pic/icons/5918/c12.png' }, __source: { fileName: _jsxFileName, lineNumber: 212 } }
                    )
            )
        );
    }
}]);
