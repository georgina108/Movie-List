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
            React.createElement(CreateMovieList, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJuZXdMaXN0IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJ0aXRsZSIsImhhbmRsZU1vdmllTGlzdENoYW5nZXMiLCJiaW5kIiwibWFwIiwibW92aWUiLCJpIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsTUFBS0YsS0FBTCxDQUFXRTtBQURSLEtBQWI7QUFGaUI7QUFLbEI7Ozs7MkNBRXFCQyxPLEVBQVM7QUFDN0IsVUFBR0EsUUFBUUMsTUFBUixHQUFpQixDQUFwQixFQUF1QjtBQUNyQixhQUFLQyxRQUFMLENBQWM7QUFDWkgsa0JBQVFDO0FBREksU0FBZDtBQUdELE9BSkQsTUFJTztBQUNMLGFBQUtFLFFBQUwsQ0FBYztBQUNaSCxrQkFBUSxDQUFDLEVBQUNJLE9BQU0sNkJBQVAsRUFBRDtBQURJLFNBQWQ7QUFHRDtBQUNGOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNFLGdDQUFDLGVBQUQ7QUFERjtBQURELFNBREg7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQ0FBQyxNQUFELElBQVEsUUFBUSxLQUFLTCxLQUFMLENBQVdDLE1BQTNCLEVBQW1DLHdCQUEwQixLQUFLSyxzQkFBTCxDQUE0QkMsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBN0Q7QUFERjtBQURGLFNBTkY7QUFXSyxhQUFLUCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JPLEdBQWxCLENBQXNCLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGlCQUNyQjtBQUFBO0FBQUEsY0FBSSxLQUFLQSxDQUFUO0FBQ0U7QUFBQTtBQUFBO0FBQUtELG9CQUFNSjtBQUFYO0FBREYsV0FEcUI7QUFBQSxTQUF0QjtBQVhMLE9BREY7QUFvQkQ7Ozs7RUF6Q3FCTSxNQUFNQyxTOztBQThDOUJDLE9BQU9mLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdmllczogdGhpcy5wcm9wcy5tb3ZpZXNcbiAgICB9XG4gIH1cblxuIGhhbmRsZU1vdmllTGlzdENoYW5nZXMobmV3TGlzdCkge1xuICAgIGlmKG5ld0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogbmV3TGlzdFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1vdmllczogW3t0aXRsZTpcIk5vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZFwifV1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRib2R5PlxuICAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxDcmVhdGVNb3ZpZUxpc3QvPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8U2VhcmNoIG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IGhhbmRsZU1vdmllTGlzdENoYW5nZXMgPSB7dGhpcy5oYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICAgIHt0aGlzLnN0YXRlLm1vdmllcy5tYXAoKG1vdmllLCBpKSA9PiBcbiAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxuICAgICAgICAgICAgICA8dGQ+e21vdmllLnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICl9IFxuICAgICAgPC90Ym9keT5cblxuICAgICkgXG4gIH1cblxufVxuXG5cbndpbmRvdy5Nb3ZpZUxpc3QgPSBNb3ZpZUxpc3Q7XG5cblxuICBcbiJdfQ==