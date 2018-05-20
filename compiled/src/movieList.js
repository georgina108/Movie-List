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
          null,
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
            )
          );
        })
      );
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJhZGRpdGlvbiIsIm5ld1N0YXRlIiwicHVzaCIsInRpdGxlIiwic2V0U3RhdGUiLCJuZXdMaXN0IiwibGVuZ3RoIiwiaGFuZGxlTW92aWVBZGRpdGlvbnMiLCJiaW5kIiwiaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyIsIm1hcCIsIm1vdmllIiwiaSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLE1BQUtGLEtBQUwsQ0FBV0U7QUFEUixLQUFiO0FBRmlCO0FBS2xCOzs7O3lDQUVrQkMsUSxFQUFVO0FBQzdCLFVBQUlDLFdBQVcsS0FBS0gsS0FBTCxDQUFXQyxNQUExQjtBQUNBRSxlQUFTQyxJQUFULENBQWMsRUFBQ0MsT0FBTUgsUUFBUCxFQUFkO0FBQ0EsV0FBS0ksUUFBTCxDQUFjO0FBQ1pMLGdCQUFRRTtBQURJLE9BQWQ7QUFHRDs7OzJDQUVzQkksTyxFQUFTO0FBQzVCLFVBQUdBLFFBQVFDLE1BQVIsR0FBaUIsQ0FBcEIsRUFBdUI7QUFDckIsYUFBS0YsUUFBTCxDQUFjO0FBQ1pMLGtCQUFRTTtBQURJLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxhQUFLRCxRQUFMLENBQWM7QUFDWkwsa0JBQVEsQ0FBQyxFQUFDSSxPQUFNLDZCQUFQLEVBQUQ7QUFESSxTQUFkO0FBR0Q7QUFDRjs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFDRSxnQ0FBQyxlQUFELElBQWlCLHNCQUFzQixLQUFLSSxvQkFBTCxDQUEwQkMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBdkM7QUFERjtBQURELFNBREg7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQyxNQUFELElBQVEsUUFBUSxLQUFLVixLQUFMLENBQVdDLE1BQTNCLEVBQW1DLHdCQUEwQixLQUFLVSxzQkFBTCxDQUE0QkQsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBN0Q7QUFERjtBQURGLFNBTkY7QUFXSyxhQUFLVixLQUFMLENBQVdDLE1BQVgsQ0FBa0JXLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGlCQUNyQjtBQUFBO0FBQUEsY0FBSSxLQUFLQSxDQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUtELG9CQUFNUjtBQUFYO0FBREYsV0FEcUI7QUFBQSxTQUF0QjtBQVhMLE9BREY7QUFvQkQ7Ozs7RUFqRHFCVSxNQUFNQyxTOztBQXNEOUJDLE9BQU9uQixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJtb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG4gICAgfVxuICB9XG5cbmhhbmRsZU1vdmllQWRkaXRpb25zKGFkZGl0aW9uKSB7XG4gIHZhciBuZXdTdGF0ZSA9IHRoaXMuc3RhdGUubW92aWVzO1xuICBuZXdTdGF0ZS5wdXNoKHt0aXRsZTphZGRpdGlvbn0pO1xuICB0aGlzLnNldFN0YXRlKHtcbiAgICBtb3ZpZXM6IG5ld1N0YXRlXG4gIH0pXG59XG5cbmhhbmRsZU1vdmllTGlzdENoYW5nZXMobmV3TGlzdCkge1xuICAgIGlmKG5ld0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogbmV3TGlzdFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogW3t0aXRsZTpcIk5vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZFwifV1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRib2R5PlxuICAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxDcmVhdGVNb3ZpZUxpc3QgaGFuZGxlTW92aWVBZGRpdGlvbnM9e3RoaXMuaGFuZGxlTW92aWVBZGRpdGlvbnMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGhhbmRsZU1vdmllTGlzdENoYW5nZXMgPSB7dGhpcy5oYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiBcbiAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICA8dGQ+e21vdmllLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9IFxuICAgICAgPC90Ym9keT5cblxuICAgICkgXG4gIH1cblxufVxuXG5cbndpbmRvdy5Nb3ZpZUxpc3QgPSBNb3ZpZUxpc3Q7XG5cblxuICBcbiJdfQ==