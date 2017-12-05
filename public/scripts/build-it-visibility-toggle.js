'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityApp = function (_React$Component) {
  _inherits(VisibilityApp, _React$Component);

  function VisibilityApp(props) {
    _classCallCheck(this, VisibilityApp);

    var _this = _possibleConstructorReturn(this, (VisibilityApp.__proto__ || Object.getPrototypeOf(VisibilityApp)).call(this, props));

    _this.handleVisToggle = _this.handleVisToggle.bind(_this);
    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(VisibilityApp, [{
    key: 'handleVisToggle',
    value: function handleVisToggle() {
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
          'Visibility Toggle App'
        ),
        React.createElement(
          'button',
          { onClick: this.handleVisToggle },
          this.state.visibility ? 'Hide' : 'Show',
          ' Details'
        ),
        this.state.visibility && React.createElement(
          'p',
          null,
          'DETAILS!'
        )
      );
    }
  }]);

  return VisibilityApp;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityApp, null), document.getElementById('app'));

// const details = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'];
//
// let state = {
//   visibility: false // hidden by default
// };
//
// const onToggle = () => {
//   state.visibility = !state.visibility;
//   renderToggleApp();
// };
//
// const renderToggleApp = () => {
//   const visiToggle = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle} disabled={details.length === 0}>
//         {state.visibility ? 'Hide' : 'Show'} Details
//       </button>
//       {state.visibility && (<p>{details[0]}</p>)}
//     </div>
//   );
//
//   ReactDOM.render(visiToggle, document.getElementById('app'));
// };
//
// renderToggleApp();