"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckWatchedMovies = function (_React$Component) {
  _inherits(CheckWatchedMovies, _React$Component);

  function CheckWatchedMovies(props) {
    _classCallCheck(this, CheckWatchedMovies);

    return _possibleConstructorReturn(this, (CheckWatchedMovies.__proto__ || Object.getPrototypeOf(CheckWatchedMovies)).call(this, props));
  }

  _createClass(CheckWatchedMovies, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "td",
        null,
        React.createElement(
          "table",
          { className: "innerMostTable" },
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "th",
                { className: "watched" },
                React.createElement(
                  "button",
                  { className: "button1" },
                  "Watched"
                )
              ),
              React.createElement(
                "th",
                { className: "toWatch" },
                React.createElement(
                  "button",
                  { className: "button2" },
                  "ToWatch"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CheckWatchedMovies;
}(React.Component);

window.CheckWatchedMovies = CheckWatchedMovies;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja1dhdGNoZWRNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIkNoZWNrV2F0Y2hlZE1vdmllcyIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsa0I7OztBQUNKLDhCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUlBQ1hBLEtBRFc7QUFHbEI7Ozs7NkJBRVE7QUFDUCxhQUNBO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFPLFdBQVUsZ0JBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLGtCQUFJLFdBQVUsU0FBZDtBQUNFO0FBQUE7QUFBQSxvQkFBUSxXQUFVLFNBQWxCO0FBQUE7QUFBQTtBQURGLGVBREE7QUFJQTtBQUFBO0FBQUEsa0JBQUksV0FBVSxTQUFkO0FBQ0U7QUFBQTtBQUFBLG9CQUFRLFdBQVUsU0FBbEI7QUFBQTtBQUFBO0FBREY7QUFKQTtBQURGO0FBREY7QUFERixPQURBO0FBZ0JEOzs7O0VBdkI4QkMsTUFBTUMsUzs7QUEyQnZDQyxPQUFPSixrQkFBUCxHQUE0QkEsa0JBQTVCIiwiZmlsZSI6ImNoZWNrV2F0Y2hlZE1vdmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENoZWNrV2F0Y2hlZE1vdmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpIFxuICAgIFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPHRkPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImlubmVyTW9zdFRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cIndhdGNoZWRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uMVwiPldhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0b1dhdGNoXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbjJcIj5Ub1dhdGNoPC9idXR0b24+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC90ZD5cbiAgICApXG4gIH1cbn1cblxuXG53aW5kb3cuQ2hlY2tXYXRjaGVkTW92aWVzID0gQ2hlY2tXYXRjaGVkTW92aWVzO1xuIl19