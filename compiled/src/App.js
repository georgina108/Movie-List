"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      movies: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          { className: "mainTable" },
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { className: "header" },
                "MovieList"
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "table",
                  { className: "innerTable" },
                  React.createElement(MovieList, { movies: this.state.movies })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRO0FBREcsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLFlBQU8sV0FBVSxXQUFqQjtBQUNDO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSSxXQUFVLFFBQWQ7QUFBQTtBQUFBO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxvQkFBTyxXQUFVLFlBQWpCO0FBQ0Usc0NBQUMsU0FBRCxJQUFXLFFBQVEsS0FBS0QsS0FBTCxDQUFXQyxNQUE5QjtBQURGO0FBREY7QUFERjtBQUpGO0FBREQ7QUFERCxPQURGO0FBa0JEOzs7O0VBM0JlQyxNQUFNQyxTOztBQStCeEJDLE9BQU9OLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWFpblRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiaGVhZGVyXCI+TW92aWVMaXN0PC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImlubmVyVGFibGVcIj5cbiAgICAgICAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbndpbmRvdy5BcHAgPSBBcHA7Il19