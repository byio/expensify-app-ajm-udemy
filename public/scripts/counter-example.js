'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    // binding methods to the 'this' of the current React.Component instance
    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    // setting state
    _this.state = {
      count: 0
    };
    return _this;
  }
  // Lifecycle methods for Counter component


  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var data = localStorage.getItem('num');
      var num = parseInt(data, 10);
      if (!isNaN(num)) {
        this.setState(function () {
          return {
            count: num
          };
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('num', this.state.count);
      }
      console.log('updated');
    }
  }, {
    key: 'handleAddOne',
    value: function handleAddOne() {
      // console.log('handleAddOne fired!');
      // console.log(`handleAddOne: ${this.props}`);
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      // console.log('handleMinusOne fired!');
      // console.log(`handleMinusOne: ${this.props}`);
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      // console.log('handleReset fired!');
      // console.log(`handleReset: ${this.props}`);
      this.setState(function () {
        return {
          count: 0
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
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
//   console.log('addOne fired');
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   console.log('minusOne fired');
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
//   console.log('reset fired');
// }
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const counterApp = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+ 1</button>
//       <button onClick={minusOne}>- 1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
//   ReactDOM.render(counterApp, appRoot);
// }
//
// renderCounterApp();