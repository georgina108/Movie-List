'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CreateMovieList = function (_React$Component) {
  _inherits(CreateMovieList, _React$Component);

  function CreateMovieList(props) {
    _classCallCheck(this, CreateMovieList);

    var _this = _possibleConstructorReturn(this, (CreateMovieList.__proto__ || Object.getPrototypeOf(CreateMovieList)).call(this, props));

    _this.state = {
      input: ''
    };
    return _this;
  }

  _createClass(CreateMovieList, [{
    key: 'handleAddTitle',
    value: function handleAddTitle(e) {
      this.setState({
        input: e.target.value
      });
    }
  }, {
    key: 'handleClickAdd',
    value: function handleClickAdd() {
      var arr = this.state.input.split(' ');
      var camelCaseStr = arr.map(function (word) {
        word = word.split('');
        word[0] = word[0].toUpperCase();
        return word.join('');
      }).join(' ');
      this.props.handleMovieAdditions(camelCaseStr);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', null, React.createElement('input', { type: 'text', placeholder: 'Add movie title here', onChange: this.handleAddTitle.bind(this) }), React.createElement('input', {
        className: 'button',
        type: 'button',
        value: 'Add',
        onClick: this.handleClickAdd.bind(this)
      }));
    }
  }]);

  return CreateMovieList;
}(React.Component);

window.CreateMovieList = CreateMovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVNb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZU1vdmllTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaW5wdXQiLCJlIiwidmFsdWUiLCJhcnIiLCJjYW1lbENhc2VTdHIiLCJ3b3JkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxrQjs7O0FBQ0wsV0FBQSxlQUFBLENBQUEsS0FBQSxFQUFtQjtBQUFBLG9CQUFBLElBQUEsRUFBQSxlQUFBOztBQUFBLFFBQUEsUUFBQSwyQkFBQSxJQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLElBQUEsT0FBQSxjQUFBLENBQUEsZUFBQSxDQUFBLEVBQUEsSUFBQSxDQUFBLElBQUEsRUFBQSxLQUFBLENBQUEsQ0FBQTs7QUFFbEIsVUFBQSxLQUFBLEdBQWE7QUFDWEcsYUFBTztBQURJLEtBQWI7QUFGa0IsV0FBQSxLQUFBO0FBS2xCOzs7O21DQUVlQyxDLEVBQUc7QUFDaEIsV0FBQSxRQUFBLENBQWM7QUFDWkQsZUFBTUMsRUFBQUEsTUFBQUEsQ0FBU0M7QUFESCxPQUFkO0FBR0Q7OztxQ0FFZ0I7QUFDZixVQUFJQyxNQUFNLEtBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQVYsR0FBVSxDQUFWO0FBQ0EsVUFBSUMsZUFBZSxJQUFBLEdBQUEsQ0FBUSxVQUFBLElBQUEsRUFBZTtBQUN6Q0MsZUFBT0EsS0FBQUEsS0FBQUEsQ0FBUEEsRUFBT0EsQ0FBUEE7QUFDQUEsYUFBQUEsQ0FBQUEsSUFBU0EsS0FBQUEsQ0FBQUEsRUFBVEEsV0FBU0EsRUFBVEE7QUFDQSxlQUFPQSxLQUFBQSxJQUFBQSxDQUFQLEVBQU9BLENBQVA7QUFIa0IsT0FBQSxFQUFBLElBQUEsQ0FBbkIsR0FBbUIsQ0FBbkI7QUFLQSxXQUFBLEtBQUEsQ0FBQSxvQkFBQSxDQUFBLFlBQUE7QUFDRDs7OzZCQUVPO0FBQ04sYUFDRyxNQUFBLGFBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxFQUNDLE1BQUEsYUFBQSxDQUFBLE9BQUEsRUFBQSxFQUFPLE1BQVAsTUFBQSxFQUFtQixhQUFuQixzQkFBQSxFQUFzRCxVQUFVLEtBQUEsY0FBQSxDQUFBLElBQUEsQ0FEakUsSUFDaUUsQ0FBaEUsRUFBQSxDQURELEVBRUMsTUFBQSxhQUFBLENBQUEsT0FBQSxFQUFBO0FBQ0UsbUJBREYsUUFBQTtBQUVFLGNBRkYsUUFBQTtBQUdFLGVBSEYsS0FBQTtBQUlFLGlCQUFTLEtBQUEsY0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBO0FBSlgsT0FBQSxDQUZELENBREg7QUFXRDs7OztFQXBDMkJQLE1BQU1DLFM7O0FBd0NwQ08sT0FBQUEsZUFBQUEsR0FBQUEsZUFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDcmVhdGVNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gIHN1cGVyKHByb3BzKSBcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBpbnB1dDogJydcbiAgfVxuIH1cblxuIGhhbmRsZUFkZFRpdGxlIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDplLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVDbGlja0FkZCgpIHtcbiAgICB2YXIgYXJyID0gdGhpcy5zdGF0ZS5pbnB1dC5zcGxpdCgnICcpO1xuICAgIHZhciBjYW1lbENhc2VTdHIgPSBhcnIubWFwKGZ1bmN0aW9uKHdvcmQpIHtcbiAgICAgd29yZCA9IHdvcmQuc3BsaXQoJycpO1xuICAgICB3b3JkWzBdPSB3b3JkWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgIHJldHVybiB3b3JkLmpvaW4oJycpIFxuICAgIH0pLmpvaW4oJyAnKTtcbiAgICB0aGlzLnByb3BzLmhhbmRsZU1vdmllQWRkaXRpb25zKGNhbWVsQ2FzZVN0cilcbiAgfVxuXG5yZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgbW92aWUgdGl0bGUgaGVyZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFkZFRpdGxlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9XCJBZGRcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tBZGQuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbndpbmRvdy5DcmVhdGVNb3ZpZUxpc3QgPSBDcmVhdGVNb3ZpZUxpc3Q7Il19