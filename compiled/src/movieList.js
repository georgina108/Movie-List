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
      movies: _this.props.movies,
      notFound: "No movie by that name found"
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
      this.setState({
        movies: newList
      });
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
          { className: "search" },
          React.createElement(
            "th",
            null,
            React.createElement(Search, { movies: this.state.movies, handleMovieListChanges: this.handleMovieListChanges.bind(this) })
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(CheckWatchedMovies, null)
        ),
        this.state.movies.length ? this.state.movies.map(function (movie, i) {
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
              React.createElement(
                "button",
                { text: "watched", className: "watchedButton" },
                "watched"
              )
            )
          );
        }) : React.createElement(
          "tr",
          null,
          React.createElement(
            "td",
            null,
            this.state.notFound
          )
        )
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJub3RGb3VuZCIsImFkZGl0aW9uIiwibmV3U3RhdGUiLCJwdXNoIiwidGl0bGUiLCJzZXRTdGF0ZSIsIm5ld0xpc3QiLCJoYW5kbGVNb3ZpZUFkZGl0aW9ucyIsImJpbmQiLCJoYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzIiwibGVuZ3RoIiwibWFwIiwibW92aWUiLCJpIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsTUFBS0YsS0FBTCxDQUFXRSxNQURSO0FBRVhDLGdCQUFVO0FBRkMsS0FBYjtBQUZpQjtBQU1sQjs7Ozt5Q0FFa0JDLFEsRUFBVTtBQUM3QixVQUFJQyxXQUFXLEtBQUtKLEtBQUwsQ0FBV0MsTUFBMUI7QUFDQUcsZUFBU0MsSUFBVCxDQUFjLEVBQUNDLE9BQU1ILFFBQVAsRUFBZDtBQUNBLFdBQUtJLFFBQUwsQ0FBYztBQUNaTixnQkFBUUc7QUFESSxPQUFkO0FBR0Q7OzsyQ0FFc0JJLE8sRUFBUztBQUMxQixXQUFLRCxRQUFMLENBQWM7QUFDWk4sZ0JBQVFPO0FBREksT0FBZDtBQUdIOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNFLGdDQUFDLGVBQUQsSUFBaUIsc0JBQXNCLEtBQUtDLG9CQUFMLENBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUF2QztBQURGO0FBREQsU0FESDtBQU1FO0FBQUE7QUFBQSxZQUFJLFdBQVUsUUFBZDtBQUNFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtWLEtBQUwsQ0FBV0MsTUFBM0IsRUFBbUMsd0JBQTBCLEtBQUtVLHNCQUFMLENBQTRCRCxJQUE1QixDQUFpQyxJQUFqQyxDQUE3RDtBQURGO0FBREYsU0FORjtBQVdFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLGtCQUFEO0FBREYsU0FYRjtBQWVHLGFBQUtWLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQlcsTUFBbEIsR0FBNEIsS0FBS1osS0FBTCxDQUFXQyxNQUFYLENBQWtCWSxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxpQkFDM0M7QUFBQTtBQUFBLGNBQUksS0FBS0EsQ0FBVDtBQUNDO0FBQUE7QUFBQTtBQUFLRCxvQkFBTVI7QUFBWCxhQUREO0FBRUM7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE1BQUssU0FBYixFQUF1QixXQUFVLGVBQWpDO0FBQUE7QUFBQTtBQURGO0FBRkQsV0FEMkM7QUFBQSxTQUF0QixDQUE1QixHQU9TO0FBQUE7QUFBQTtBQUNKO0FBQUE7QUFBQTtBQUFLLGlCQUFLTixLQUFMLENBQVdFO0FBQWhCO0FBREk7QUF0QlosT0FERjtBQWdDRDs7OztFQXhEcUJjLE1BQU1DLFM7O0FBNkQ5QkMsT0FBT3BCLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXMsXG4gICAgICBub3RGb3VuZDogXCJObyBtb3ZpZSBieSB0aGF0IG5hbWUgZm91bmRcIlxuICAgIH1cbiAgfVxuXG5oYW5kbGVNb3ZpZUFkZGl0aW9ucyhhZGRpdGlvbikge1xuICB2YXIgbmV3U3RhdGUgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgbmV3U3RhdGUucHVzaCh7dGl0bGU6YWRkaXRpb259KTtcbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgbW92aWVzOiBuZXdTdGF0ZVxuICB9KVxufVxuXG5oYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzKG5ld0xpc3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXM6IG5ld0xpc3RcbiAgICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGJvZHk+XG4gICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPENyZWF0ZU1vdmllTGlzdCBoYW5kbGVNb3ZpZUFkZGl0aW9ucz17dGhpcy5oYW5kbGVNb3ZpZUFkZGl0aW9ucy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyA9IHt0aGlzLmhhbmRsZU1vdmllTGlzdENoYW5nZXMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8Q2hlY2tXYXRjaGVkTW92aWVzLz5cbiAgICAgICAgPC90cj5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoID8gIHRoaXMuc3RhdGUubW92aWVzLm1hcCgobW92aWUsIGkpID0+IFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICA8dGQ+e21vdmllLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRleHQ9XCJ3YXRjaGVkXCIgY2xhc3NOYW1lPVwid2F0Y2hlZEJ1dHRvblwiPndhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkgOiA8dHI+XG4gICAgICAgICAgICAgIDx0ZD57dGhpcy5zdGF0ZS5ub3RGb3VuZH08L3RkPlxuICAgICAgICAgIDwvdHI+XG5cblxuICAgICAgICB9XG4gICAgICA8L3Rib2R5PlxuXG4gICAgKSBcbiAgfVxuXG59XG5cblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDtcblxuXG4gIFxuIl19