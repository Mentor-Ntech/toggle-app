'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById("app");

// let visibility = false;

// const checkBtn = () => {
//     visibility = !visibility
//     renderTemplate()
// }

// const renderTemplate = () => {
//     const template =(<div>

//     <h1>Hello world</h1>

//     <button onClick = {checkBtn}>{visibility ? 'Hide details' : 'Show details'}</button>
//     {visibility ?<p>Here are your details...</p> : null}
// </div>)

// ReactDOM.render(template, appRoot)

// }
// renderTemplate()

var ToggleApp = function (_React$Component) {
    _inherits(ToggleApp, _React$Component);

    function ToggleApp(props) {
        _classCallCheck(this, ToggleApp);

        var _this = _possibleConstructorReturn(this, (ToggleApp.__proto__ || Object.getPrototypeOf(ToggleApp)).call(this, props));

        _this.checkBtn = _this.checkBtn.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(ToggleApp, [{
        key: 'checkBtn',
        value: function checkBtn() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello world'
                ),
                React.createElement(
                    'button',
                    { onClick: this.checkBtn },
                    this.state.visibility ? 'Hide details' : 'Show details'
                ),
                this.state.visibility ? React.createElement(
                    'p',
                    null,
                    'Here are your details...'
                ) : null
            );
        }
    }]);

    return ToggleApp;
}(React.Component);

ReactDOM.render(React.createElement(ToggleApp, null), appRoot);
