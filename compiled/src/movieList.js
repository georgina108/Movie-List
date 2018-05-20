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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJuZXdMaXN0IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJ0aXRsZSIsImhhbmRsZU1vdmllTGlzdENoYW5nZXMiLCJiaW5kIiwibWFwIiwibW92aWUiLCJpIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsTUFBS0YsS0FBTCxDQUFXRTtBQURSLEtBQWI7QUFGaUI7QUFLbEI7Ozs7MkNBRXFCQyxPLEVBQVM7QUFDN0IsVUFBR0EsUUFBUUMsTUFBUixHQUFpQixDQUFwQixFQUF1QjtBQUNyQixhQUFLQyxRQUFMLENBQWM7QUFDWkgsa0JBQVFDO0FBREksU0FBZDtBQUdELE9BSkQsTUFJTztBQUNMLGFBQUtFLFFBQUwsQ0FBYztBQUNaSCxrQkFBUSxDQUFDLEVBQUNJLE9BQU0sNkJBQVAsRUFBRDtBQURJLFNBQWQ7QUFHRDtBQUNGOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLGdDQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtMLEtBQUwsQ0FBV0MsTUFBM0IsRUFBbUMsd0JBQTBCLEtBQUtLLHNCQUFMLENBQTRCQyxJQUE1QixDQUFpQyxJQUFqQyxDQUE3RDtBQURGO0FBREYsU0FERjtBQU1LLGFBQUtQLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sR0FBbEIsQ0FBc0IsVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsaUJBQ3JCO0FBQUE7QUFBQSxjQUFJLEtBQUtBLENBQVQ7QUFDRTtBQUFBO0FBQUE7QUFBS0Qsb0JBQU1KO0FBQVg7QUFERixXQURxQjtBQUFBLFNBQXRCO0FBTkwsT0FERjtBQWVEOzs7O0VBcENxQk0sTUFBTUMsUzs7QUF5QzlCQyxPQUFPZixTQUFQLEdBQW1CQSxTQUFuQiIsImZpbGUiOiJtb3ZpZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IHRoaXMucHJvcHMubW92aWVzXG4gICAgfVxuICB9XG5cbiBoYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzKG5ld0xpc3QpIHtcbiAgICBpZihuZXdMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXM6IG5ld0xpc3RcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXM6IFt7dGl0bGU6XCJObyBtb3ZpZSBieSB0aGF0IG5hbWUgZm91bmRcIn1dXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyA9IHt0aGlzLmhhbmRsZU1vdmllTGlzdENoYW5nZXMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgICAge3RoaXMuc3RhdGUubW92aWVzLm1hcCgobW92aWUsIGkpID0+IFxuICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgIDx0ZD57bW92aWUudGl0bGV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKX0gXG4gICAgICA8L3Rib2R5PlxuXG4gICAgKSBcbiAgfVxuXG59XG5cblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDtcblxuXG4gIFxuIl19