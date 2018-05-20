"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieList = function (_React$Component) {
  _inherits(MovieList, _React$Component);

  function MovieList(props) {
    _classCallCheck(this, MovieList);

    var _this = _possibleConstructorReturn(this, (MovieList.__proto__ || Object.getPrototypeOf(MovieList)).call(this, props));

    _this.state = {
      movies: _this.props.movies
    };
    return _this;
  }

  _createClass(MovieList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            React.createElement(Search, { movies: this.state.movies })
          )
        ),
        this.state.movies.map(function (movie, i) {
          return React.createElement(
            "tr",
            { key: i },
            React.createElement(
              "td",
              null,
              movie.title
            )
          );
        })
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJtYXAiLCJtb3ZpZSIsImkiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUixLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQyxNQUFELElBQVEsUUFBUSxLQUFLRCxLQUFMLENBQVdDLE1BQTNCO0FBREY7QUFERixTQURGO0FBTUssYUFBS0QsS0FBTCxDQUFXQyxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxpQkFDckI7QUFBQTtBQUFBLGNBQUksS0FBS0EsQ0FBVDtBQUNFO0FBQUE7QUFBQTtBQUFLRCxvQkFBTUU7QUFBWDtBQURGLFdBRHFCO0FBQUEsU0FBdEI7QUFOTCxPQURGO0FBZUQ7Ozs7RUF4QnFCQyxNQUFNQyxTOztBQTZCOUJDLE9BQU9WLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiBcbiAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICA8dGQ+e21vdmllLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9IFxuICAgICAgPC90Ym9keT5cblxuICAgICkgXG4gIH1cblxufVxuXG5cbndpbmRvdy5Nb3ZpZUxpc3QgPSBNb3ZpZUxpc3Q7XG5cblxuICBcbiJdfQ==