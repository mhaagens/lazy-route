'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsyncRoute = function (_Component) {
	_inherits(AsyncRoute, _Component);

	function AsyncRoute(props) {
		_classCallCheck(this, AsyncRoute);

		var _this = _possibleConstructorReturn(this, (AsyncRoute.__proto__ || Object.getPrototypeOf(AsyncRoute)).call(this, props));

		_this.state = {
			loaded: false,
			showLoader: false
		};
		return _this;
	}

	_createClass(AsyncRoute, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			this.props.component.then(function (module) {
				_this2.component = module.default;
				_this2.setState({ loaded: true });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var loaded = this.state.loaded;

			if (loaded === true) {
				return _react2.default.createElement(this.component, this.props);
			} else {
				return _react2.default.createElement('div', null);
			}
		}
	}]);

	return AsyncRoute;
}(_react.Component);

exports.default = AsyncRoute;
