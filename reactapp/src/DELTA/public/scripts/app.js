'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zavrsniRad = {
    nazivTeme: 'Blockchain',
    mentor: 'Mujo Mujic',
    sazetak: 'Blockchain je nova tehnologija....'
};

var PredmetZavrsni = function (_React$Component) {
    _inherits(PredmetZavrsni, _React$Component);

    function PredmetZavrsni(props) {
        _classCallCheck(this, PredmetZavrsni);

        var _this = _possibleConstructorReturn(this, (PredmetZavrsni.__proto__ || Object.getPrototypeOf(PredmetZavrsni)).call(this, props));

        _this.state = {
            nazivTeme: 'Blockchain',
            mentor: 'Mujo Mujic',
            sazetak: 'Blockchain je nova tehnologija....'
        };
        return _this;
    }

    _createClass(PredmetZavrsni, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Naziv teme: ',
                    this.state.nazivTeme
                ),
                React.createElement(
                    'p',
                    null,
                    'Mentor: ',
                    this.state.mentor
                ),
                React.createElement(
                    'p',
                    null,
                    'Sazetak teme: ',
                    this.state.sazetak
                )
            );
        }
    }]);

    return PredmetZavrsni;
}(React.Component);

ReactDOM.render(React.createElement(PredmetZavrsni, null), document.getElementById('app'));
