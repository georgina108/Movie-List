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
      movies: movieListData
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJtb3ZpZUxpc3REYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUUM7QUFERyxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsWUFBTyxXQUFVLFdBQWpCO0FBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUE7QUFERixhQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLG9CQUFPLFdBQVUsWUFBakI7QUFDRSxzQ0FBQyxTQUFELElBQVcsUUFBUSxLQUFLRixLQUFMLENBQVdDLE1BQTlCO0FBREY7QUFERjtBQURGO0FBSkY7QUFERDtBQURELE9BREY7QUFrQkQ7Ozs7RUEzQmVFLE1BQU1DLFM7O0FBK0J4QkMsT0FBT1AsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogbW92aWVMaXN0RGF0YVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1haW5UYWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImhlYWRlclwiPk1vdmllTGlzdDwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJpbm5lclRhYmxlXCI+XG4gICAgICAgICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfS8+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==