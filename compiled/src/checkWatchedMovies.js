"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckWatchedMovies = function (_React$Component) {
  _inherits(CheckWatchedMovies, _React$Component);

  function CheckWatchedMovies(props) {
    _classCallCheck(this, CheckWatchedMovies);

    var _this = _possibleConstructorReturn(this, (CheckWatchedMovies.__proto__ || Object.getPrototypeOf(CheckWatchedMovies)).call(this, props));

    _this.state = {
      movies: _this.props.movies
    };
    return _this;
  }

  _createClass(CheckWatchedMovies, [{
    key: "filterAllWatched",
    value: function filterAllWatched(e) {
      var arr = [];
      this.state.movies.forEach(function (movie) {
        console.log(key);
      });
    }
  }, {
    key: "filterAllToWatch",
    value: function filterAllToWatch() {
      console.log(this.state.movies);
    }
  }, {
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
                  { className: "button1", onClick: this.filterAllWatched.bind(this) },
                  "Watched"
                )
              ),
              React.createElement(
                "th",
                { className: "toWatch" },
                React.createElement(
                  "button",
                  { className: "button2", onClick: this.filterAllToWatch.bind(this) },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jaGVja1dhdGNoZWRNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIkNoZWNrV2F0Y2hlZE1vdmllcyIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJlIiwiYXJyIiwiZm9yRWFjaCIsIm1vdmllIiwiY29uc29sZSIsImxvZyIsImtleSIsImZpbHRlckFsbFdhdGNoZWQiLCJiaW5kIiwiZmlsdGVyQWxsVG9XYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGtCOzs7QUFDSiw4QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdJQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBTyxNQUFLRixLQUFMLENBQVdFO0FBRFAsS0FBYjtBQUZpQjtBQUtsQjs7OztxQ0FFZ0JDLEMsRUFBRztBQUNsQixVQUFJQyxNQUFNLEVBQVY7QUFDQSxXQUFLSCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JHLE9BQWxCLENBQTBCLFVBQVNDLEtBQVQsRUFBZTtBQUN2Q0MsZ0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNELE9BRkQ7QUFHRDs7O3VDQUVrQjtBQUNuQkYsY0FBUUMsR0FBUixDQUFZLEtBQUtQLEtBQUwsQ0FBV0MsTUFBdkI7QUFDQzs7OzZCQUVRO0FBQ1AsYUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBTyxXQUFVLGdCQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQSxrQkFBSSxXQUFVLFNBQWQ7QUFDRTtBQUFBO0FBQUEsb0JBQVEsV0FBVSxTQUFsQixFQUE0QixTQUFTLEtBQUtRLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUFyQztBQUFBO0FBQUE7QUFERixlQURBO0FBSUE7QUFBQTtBQUFBLGtCQUFJLFdBQVUsU0FBZDtBQUNFO0FBQUE7QUFBQSxvQkFBUSxXQUFVLFNBQWxCLEVBQTRCLFNBQVMsS0FBS0MsZ0JBQUwsQ0FBc0JELElBQXRCLENBQTJCLElBQTNCLENBQXJDO0FBQUE7QUFBQTtBQURGO0FBSkE7QUFERjtBQURGO0FBREYsT0FEQTtBQWdCRDs7OztFQXBDOEJFLE1BQU1DLFM7O0FBd0N2Q0MsT0FBT2hCLGtCQUFQLEdBQTRCQSxrQkFBNUIiLCJmaWxlIjoiY2hlY2tXYXRjaGVkTW92aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2hlY2tXYXRjaGVkTW92aWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcykgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczp0aGlzLnByb3BzLm1vdmllc1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckFsbFdhdGNoZWQoZSkge1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICB0aGlzLnN0YXRlLm1vdmllcy5mb3JFYWNoKGZ1bmN0aW9uKG1vdmllKXtcbiAgICAgIGNvbnNvbGUubG9nKGtleSlcbiAgICB9KVxuICB9XG5cbiAgZmlsdGVyQWxsVG9XYXRjaCgpIHtcbiAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tb3ZpZXMpXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgIDx0ZD5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJpbm5lck1vc3RUYWJsZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ3YXRjaGVkXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbjFcIiBvbkNsaWNrPXt0aGlzLmZpbHRlckFsbFdhdGNoZWQuYmluZCh0aGlzKX0+V2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRvV2F0Y2hcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uMlwiIG9uQ2xpY2s9e3RoaXMuZmlsdGVyQWxsVG9XYXRjaC5iaW5kKHRoaXMpfT5Ub1dhdGNoPC9idXR0b24+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC90ZD5cbiAgICApXG4gIH1cbn1cblxuXG53aW5kb3cuQ2hlY2tXYXRjaGVkTW92aWVzID0gQ2hlY2tXYXRjaGVkTW92aWVzO1xuIl19