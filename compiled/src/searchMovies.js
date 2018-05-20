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
      this.props.handleSearch(this.state.value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "search-bar form-inline" },
        React.createElement("input", {
          className: "form-control",
          type: "text",
          value: this.state.value
          // onChange={this.handleChange.bind(this)}
        }),
        React.createElement(
          "button",
          { className: "btn hidden-sm-down", id: "searchButton", onClick: this.handleChange.bind(this) },
          React.createElement("span", { className: "glyphicon glyphicon-search" })
        )
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImhhbmRsZVNlYXJjaCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxNOzs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7aUNBSWFDLEMsRUFBRztBQUNmLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixlQUFPQyxFQUFFRSxNQUFGLENBQVNIO0FBREosT0FBZDtBQUdBLFdBQUtGLEtBQUwsQ0FBV00sWUFBWCxDQUF3QixLQUFLTCxLQUFMLENBQVdDLEtBQW5DO0FBQ0Q7Ozs2QkFHUztBQUNSLGFBQ0c7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNDO0FBQ0UscUJBQVUsY0FEWjtBQUVFLGdCQUFLLE1BRlA7QUFHRSxpQkFBTyxLQUFLRCxLQUFMLENBQVdDO0FBQ2xCO0FBSkYsVUFERDtBQU9DO0FBQUE7QUFBQSxZQUFRLFdBQVUsb0JBQWxCLEVBQXVDLElBQUcsY0FBMUMsRUFBeUQsU0FBUyxLQUFLSyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFsRTtBQUNBLHdDQUFNLFdBQVUsNEJBQWhCO0FBREE7QUFQRCxPQURIO0FBYUQ7Ozs7RUFoQ2tCQyxNQUFNQyxTOztBQW1DM0JDLE9BQU9aLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6InNlYXJjaE1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBcbiAgaGFuZGxlQ2hhbmdlIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVNlYXJjaCh0aGlzLnN0YXRlLnZhbHVlKVxuICB9XG4gIFxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgLy8gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCIgaWQ9XCJzZWFyY2hCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19