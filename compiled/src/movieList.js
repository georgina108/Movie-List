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
    key: "showAllWatched",
    value: function showAllWatched() {}
  }, {
    key: "showAllToWatch",
    value: function showAllToWatch() {}
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
          React.createElement(CheckWatchedMovies, { movies: this.state.movies, showAllWatched: this.showAllWatched.bind(this), showAllToWatch: this.showAllToWatch.bind(this) })
        ),
        this.state.movies.length ? this.state.movies.map(function (movie, i) {
          return React.createElement(
            "tr",
            { key: i++ },
            React.createElement(
              "td",
              null,
              movie.title
            ),
            React.createElement(
              "td",
              null,
              React.createElement(ToggleFromWatchedToWatch, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJub3RGb3VuZCIsImFkZGl0aW9uIiwibmV3U3RhdGUiLCJwdXNoIiwidGl0bGUiLCJzZXRTdGF0ZSIsIm5ld0xpc3QiLCJoYW5kbGVNb3ZpZUFkZGl0aW9ucyIsImJpbmQiLCJoYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzIiwic2hvd0FsbFdhdGNoZWQiLCJzaG93QWxsVG9XYXRjaCIsImxlbmd0aCIsIm1hcCIsIm1vdmllIiwiaSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLE1BQUtGLEtBQUwsQ0FBV0UsTUFEUjtBQUVYQyxnQkFBVTtBQUZDLEtBQWI7QUFGaUI7QUFNbEI7Ozs7eUNBRWtCQyxRLEVBQVU7QUFDN0IsVUFBSUMsV0FBVyxLQUFLSixLQUFMLENBQVdDLE1BQTFCO0FBQ0FHLGVBQVNDLElBQVQsQ0FBYyxFQUFDQyxPQUFNSCxRQUFQLEVBQWQ7QUFDQSxXQUFLSSxRQUFMLENBQWM7QUFDWk4sZ0JBQVFHO0FBREksT0FBZDtBQUdEOzs7MkNBR3NCSSxPLEVBQVM7QUFDMUIsV0FBS0QsUUFBTCxDQUFjO0FBQ1pOLGdCQUFRTztBQURJLE9BQWQ7QUFHSDs7O3FDQUdjLENBR2hCOzs7cUNBRWdCLENBRWhCOzs7NkJBRVc7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNFLGdDQUFDLGVBQUQsSUFBaUIsc0JBQXNCLEtBQUtDLG9CQUFMLENBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUF2QztBQURGO0FBREQsU0FESDtBQU1FO0FBQUE7QUFBQSxZQUFJLFdBQVUsUUFBZDtBQUNFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtWLEtBQUwsQ0FBV0MsTUFBM0IsRUFBbUMsd0JBQTBCLEtBQUtVLHNCQUFMLENBQTRCRCxJQUE1QixDQUFpQyxJQUFqQyxDQUE3RDtBQURGO0FBREYsU0FORjtBQVdFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLGtCQUFELElBQW9CLFFBQVEsS0FBS1YsS0FBTCxDQUFXQyxNQUF2QyxFQUErQyxnQkFBZ0IsS0FBS1csY0FBTCxDQUFvQkYsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBL0QsRUFBK0YsZ0JBQWdCLEtBQUtHLGNBQUwsQ0FBb0JILElBQXBCLENBQXlCLElBQXpCLENBQS9HO0FBREYsU0FYRjtBQWVHLGFBQUtWLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmEsTUFBbEIsR0FBNEIsS0FBS2QsS0FBTCxDQUFXQyxNQUFYLENBQWtCYyxHQUFsQixDQUFzQixVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxpQkFDM0M7QUFBQTtBQUFBLGNBQUksS0FBS0EsR0FBVDtBQUNDO0FBQUE7QUFBQTtBQUFLRCxvQkFBTVY7QUFBWCxhQUREO0FBRUM7QUFBQTtBQUFBO0FBQ0Usa0NBQUMsd0JBQUQ7QUFERjtBQUZELFdBRDJDO0FBQUEsU0FBdEIsQ0FBNUIsR0FRQztBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBSyxpQkFBS04sS0FBTCxDQUFXRTtBQUFoQjtBQURKO0FBdkJKLE9BREY7QUFpQ0Q7Ozs7RUFwRXFCZ0IsTUFBTUMsUzs7QUF5RTlCQyxPQUFPdEIsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoibW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiB0aGlzLnByb3BzLm1vdmllcyxcbiAgICAgIG5vdEZvdW5kOiBcIk5vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZFwiXG4gICAgfVxuICB9XG5cbmhhbmRsZU1vdmllQWRkaXRpb25zKGFkZGl0aW9uKSB7XG4gIHZhciBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUubW92aWVzO1xuICBuZXdTdGF0ZS5wdXNoKHt0aXRsZTphZGRpdGlvbn0pO1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICBtb3ZpZXM6IG5ld1N0YXRlXG4gIH0pXG59XG5cblxuaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyhuZXdMaXN0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbW92aWVzOiBuZXdMaXN0XG4gICAgICB9KVxuICB9XG5cblxuc2hvd0FsbFdhdGNoZWQoKSB7XG5cblxufVxuXG5zaG93QWxsVG9XYXRjaCgpIHtcbiBcbn1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGJvZHk+XG4gICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPENyZWF0ZU1vdmllTGlzdCBoYW5kbGVNb3ZpZUFkZGl0aW9ucz17dGhpcy5oYW5kbGVNb3ZpZUFkZGl0aW9ucy5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyA9IHt0aGlzLmhhbmRsZU1vdmllTGlzdENoYW5nZXMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8Q2hlY2tXYXRjaGVkTW92aWVzIG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IHNob3dBbGxXYXRjaGVkPXt0aGlzLnNob3dBbGxXYXRjaGVkLmJpbmQodGhpcyl9IHNob3dBbGxUb1dhdGNoPXt0aGlzLnNob3dBbGxUb1dhdGNoLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC90cj5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5tb3ZpZXMubGVuZ3RoID8gIHRoaXMuc3RhdGUubW92aWVzLm1hcCgobW92aWUsIGkpID0+IFxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e2krK30+XG4gICAgICAgICAgICAgICAgIDx0ZD57bW92aWUudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgIDxUb2dnbGVGcm9tV2F0Y2hlZFRvV2F0Y2gvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSA6IFxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPnt0aGlzLnN0YXRlLm5vdEZvdW5kfTwvdGQ+XG4gICAgICAgICAgPC90cj5cblxuXG4gICAgICAgIH1cbiAgICAgIDwvdGJvZHk+XG5cbiAgICApIFxuICB9XG5cbn1cblxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0O1xuXG5cbiAgXG4iXX0=