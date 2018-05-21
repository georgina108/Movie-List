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
    key: "handleMovieAdditions",
    value: function handleMovieAdditions(addition) {
      var newState = this.state.movies;
      newState.push({ title: addition });
      this.setState({
        movies: newState
      });
    }
  }, {
    key: "handleMovieListChanges",
    value: function handleMovieListChanges(newList) {
      if (newList.length > 0) {
        this.setState({
          movies: newList
        });
      } else {
        this.setState({
          movies: [{ title: "No movie by that name found" }]
        });
      }
    }
  }, {
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
            React.createElement(CreateMovieList, { handleMovieAdditions: this.handleMovieAdditions.bind(this) })
          )
        ),
        React.createElement(
          "tr",
          { className: "tableHeader" },
          React.createElement(
            "th",
            null,
            React.createElement("button", { style: "width:30%" })
          ),
          React.createElement(
            "th",
            null,
            React.createElement("button", { style: "width:30%" })
          ),
          React.createElement(
            "th",
            null,
            React.createElement(Search, { movies: this.state.movies, handleMovieListChanges: this.handleMovieListChanges.bind(this) })
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
            ),
            React.createElement(
              "td",
              null,
              React.createElement("button", { name: "watched" })
            )
          );
        })
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJhZGRpdGlvbiIsIm5ld1N0YXRlIiwicHVzaCIsInRpdGxlIiwic2V0U3RhdGUiLCJuZXdMaXN0IiwibGVuZ3RoIiwiaGFuZGxlTW92aWVBZGRpdGlvbnMiLCJiaW5kIiwiaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyIsIm1hcCIsIm1vdmllIiwiaSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUixLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVrQkMsUSxFQUFVO0FBQzdCLFVBQUlDLFdBQVcsS0FBS0gsS0FBTCxDQUFXQyxNQUExQjtBQUNBRSxlQUFTQyxJQUFULENBQWMsRUFBQ0MsT0FBTUgsUUFBUCxFQUFkO0FBQ0EsV0FBS0ksUUFBTCxDQUFjO0FBQ1pMLGdCQUFRRTtBQURJLE9BQWQ7QUFHRDs7OzJDQUVzQkksTyxFQUFTO0FBQzVCLFVBQUdBLFFBQVFDLE1BQVIsR0FBaUIsQ0FBcEIsRUFBdUI7QUFDckIsYUFBS0YsUUFBTCxDQUFjO0FBQ1pMLGtCQUFRTTtBQURJLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxhQUFLRCxRQUFMLENBQWM7QUFDWkwsa0JBQVEsQ0FBQyxFQUFDSSxPQUFNLDZCQUFQLEVBQUQ7QUFESSxTQUFkO0FBR0Q7QUFDRjs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFDRSxnQ0FBQyxlQUFELElBQWlCLHNCQUFzQixLQUFLSSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBdkM7QUFERjtBQURELFNBREg7QUFNRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGFBQWQ7QUFDRTtBQUFBO0FBQUE7QUFDRSw0Q0FBUSxPQUFNLFdBQWQ7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsNENBQVEsT0FBTSxXQUFkO0FBREYsV0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFLGdDQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtWLEtBQUwsQ0FBV0MsTUFBM0IsRUFBbUMsd0JBQTBCLEtBQUtVLHNCQUFMLENBQTRCRCxJQUE1QixDQUFpQyxJQUFqQyxDQUE3RDtBQURGO0FBUEYsU0FORjtBQWlCSyxhQUFLVixLQUFMLENBQVdDLE1BQVgsQ0FBa0JXLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGlCQUNyQjtBQUFBO0FBQUEsY0FBSSxLQUFLQSxDQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUtELG9CQUFNUjtBQUFYLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBSSw4Q0FBUSxNQUFLLFNBQWI7QUFBSjtBQUZGLFdBRHFCO0FBQUEsU0FBdEI7QUFqQkwsT0FERjtBQTJCRDs7OztFQXhEcUJVLE1BQU1DLFM7O0FBNkQ5QkMsT0FBT25CLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcbiAgICB9XG4gIH1cblxuaGFuZGxlTW92aWVBZGRpdGlvbnMoYWRkaXRpb24pIHtcbiAgdmFyIG5ld1N0YXRlID0gdGhpcy5zdGF0ZS5tb3ZpZXM7XG4gIG5ld1N0YXRlLnB1c2goe3RpdGxlOmFkZGl0aW9ufSk7XG4gIHRoaXMuc2V0U3RhdGUoe1xuICAgIG1vdmllczogbmV3U3RhdGVcbiAgfSlcbn1cblxuaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyhuZXdMaXN0KSB7XG4gICAgaWYobmV3TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiBuZXdMaXN0XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiBbe3RpdGxlOlwiTm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kXCJ9XVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGJvZHk+XG4gICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPENyZWF0ZU1vdmllTGlzdCBoYW5kbGVNb3ZpZUFkZGl0aW9ucz17dGhpcy5oYW5kbGVNb3ZpZUFkZGl0aW9ucy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlSGVhZGVyXCI+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIndpZHRoOjMwJVwiLz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9XCJ3aWR0aDozMCVcIi8+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGhhbmRsZU1vdmllTGlzdENoYW5nZXMgPSB7dGhpcy5oYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiBcbiAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICA8dGQ+e21vdmllLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD48YnV0dG9uIG5hbWU9XCJ3YXRjaGVkXCIvPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9IFxuICAgICAgPC90Ym9keT5cblxuICAgICkgXG4gIH1cblxufVxuXG5cbndpbmRvdy5Nb3ZpZUxpc3QgPSBNb3ZpZUxpc3Q7XG5cblxuICBcbiJdfQ==