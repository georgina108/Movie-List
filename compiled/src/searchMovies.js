"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var newMovieList = [];
      var movies = this.props.movies;
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(this.state.value.toLowerCase())) {
          newMovieList.push(movies[i]);
        }
      }
      this.props.handleMovieListChanges(newMovieList);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", placeholder: "Search...", value: this.state.value, onChange: this.handleChange.bind(this) }),
        React.createElement("input", {
          type: "button",
          value: "Go!",
          onClick: this.handleClick.bind(this)
        })
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5ld01vdmllTGlzdCIsIm1vdmllcyIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUZpQjtBQUtsQjs7OztpQ0FFYUMsQyxFQUFHO0FBQ2YsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGVBQU1DLEVBQUVFLE1BQUYsQ0FBU0g7QUFESCxPQUFkO0FBR0Q7OztrQ0FFYztBQUNiLFVBQUlJLGVBQWUsRUFBbkI7QUFDQSxVQUFJQyxTQUFTLEtBQUtQLEtBQUwsQ0FBV08sTUFBeEI7QUFDQSxXQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJRCxPQUFPRSxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDbkMsWUFBR0QsT0FBT0MsQ0FBUCxFQUFVRSxLQUFWLENBQWdCQyxXQUFoQixHQUE4QkMsUUFBOUIsQ0FBdUMsS0FBS1gsS0FBTCxDQUFXQyxLQUFYLENBQWlCUyxXQUFqQixFQUF2QyxDQUFILEVBQTJFO0FBQ3pFTCx1QkFBYU8sSUFBYixDQUFrQk4sT0FBT0MsQ0FBUCxDQUFsQjtBQUNEO0FBQ0o7QUFDRCxXQUFLUixLQUFMLENBQVdjLHNCQUFYLENBQWtDUixZQUFsQztBQUNEOzs7NkJBR1M7QUFDUixhQUNHO0FBQUE7QUFBQTtBQUNDLHVDQUFPLE1BQUssTUFBWixFQUFtQixhQUFZLFdBQS9CLEVBQTJDLE9BQU8sS0FBS0wsS0FBTCxDQUFXQyxLQUE3RCxFQUFvRSxVQUFVLEtBQUthLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQTlFLEdBREQ7QUFFQztBQUNFLGdCQUFLLFFBRFA7QUFFRSxpQkFBTSxLQUZSO0FBR0UsbUJBQVMsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEI7QUFIWDtBQUZELE9BREg7QUFVRDs7OztFQXJDa0JFLE1BQU1DLFM7O0FBd0MzQkMsT0FBT3JCLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6InNlYXJjaE1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cbiAgXG4gIGhhbmRsZUNoYW5nZSAoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6ZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgKCkge1xuICAgIHZhciBuZXdNb3ZpZUxpc3QgPSBbXTtcbiAgICB2YXIgbW92aWVzID0gdGhpcy5wcm9wcy5tb3ZpZXNcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1vdmllc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBuZXdNb3ZpZUxpc3QucHVzaChtb3ZpZXNbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzKG5ld01vdmllTGlzdClcbiAgfVxuICBcblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhbHVlPVwiR28hXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=