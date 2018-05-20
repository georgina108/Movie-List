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
    key: "handleSearch",
    value: function handleSearch(selection) {
      var searched = selection;
      this.checkMovieNames(searched);
    }
  }, {
    key: "checkMovieNames",
    value: function checkMovieNames(search) {
      var queue = [];
      this.state.movies.forEach(function (movie) {
        if (movie.title.includes(search)) {
          queue.push(movie);
        }
      });
      this.changeMoviesListOnSearch(queue);
    }
  }, {
    key: "changeMovieListOnSearch",
    value: function changeMovieListOnSearch(movieList) {
      if (movieList.length) {
        this.setState({
          movies: movieList
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
                  React.createElement(MovieList, { movies: this.state.movies, handleSearch: this.handleSearch.bind(this) })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJtb3ZpZUxpc3REYXRhIiwic2VsZWN0aW9uIiwic2VhcmNoZWQiLCJjaGVja01vdmllTmFtZXMiLCJzZWFyY2giLCJxdWV1ZSIsImZvckVhY2giLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJwdXNoIiwiY2hhbmdlTW92aWVzTGlzdE9uU2VhcmNoIiwibW92aWVMaXN0IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJoYW5kbGVTZWFyY2giLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsY0FBUUM7QUFERyxLQUFiO0FBRmlCO0FBS2xCOzs7O2lDQUdZQyxTLEVBQVc7QUFDdEIsVUFBSUMsV0FBV0QsU0FBZjtBQUNBLFdBQUtFLGVBQUwsQ0FBcUJELFFBQXJCO0FBQ0Q7OztvQ0FFZUUsTSxFQUFRO0FBQ3RCLFVBQUlDLFFBQVEsRUFBWjtBQUNBLFdBQUtQLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQk8sT0FBbEIsQ0FBMEIsVUFBU0MsS0FBVCxFQUFnQjtBQUN4QyxZQUFHQSxNQUFNQyxLQUFOLENBQVlDLFFBQVosQ0FBcUJMLE1BQXJCLENBQUgsRUFBaUM7QUFDL0JDLGdCQUFNSyxJQUFOLENBQVdILEtBQVg7QUFDRDtBQUNGLE9BSkQ7QUFLQSxXQUFLSSx3QkFBTCxDQUE4Qk4sS0FBOUI7QUFDRDs7OzRDQUV1Qk8sUyxFQUFXO0FBQ2pDLFVBQUdBLFVBQVVDLE1BQWIsRUFBcUI7QUFDbkIsYUFBS0MsUUFBTCxDQUFjO0FBQ1ZmLGtCQUFRYTtBQURFLFNBQWQ7QUFHRCxPQUpELE1BSU87QUFDTCxhQUFLRSxRQUFMLENBQWM7QUFDVmYsa0JBQU8sQ0FBQyxFQUFDUyxPQUFPLDZCQUFSLEVBQUQ7QUFERyxTQUFkO0FBR0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsWUFBTyxXQUFVLFdBQWpCO0FBQ0M7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUE7QUFERixhQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLG9CQUFPLFdBQVUsWUFBakI7QUFDRSxzQ0FBQyxTQUFELElBQVcsUUFBUSxLQUFLVixLQUFMLENBQVdDLE1BQTlCLEVBQXNDLGNBQWMsS0FBS2dCLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBEO0FBREY7QUFERjtBQURGO0FBSkY7QUFERDtBQURELE9BREY7QUFrQkQ7Ozs7RUF2RGVDLE1BQU1DLFM7O0FBMkR4QkMsT0FBT3ZCLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZXM6IG1vdmllTGlzdERhdGFcbiAgICB9O1xuICB9XG5cblxuICBoYW5kbGVTZWFyY2goc2VsZWN0aW9uKSB7XG4gICAgdmFyIHNlYXJjaGVkID0gc2VsZWN0aW9uXG4gICAgdGhpcy5jaGVja01vdmllTmFtZXMoc2VhcmNoZWQpO1xuICB9XG5cbiAgY2hlY2tNb3ZpZU5hbWVzKHNlYXJjaCkge1xuICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgIHRoaXMuc3RhdGUubW92aWVzLmZvckVhY2goZnVuY3Rpb24obW92aWUpIHtcbiAgICAgIGlmKG1vdmllLnRpdGxlLmluY2x1ZGVzKHNlYXJjaCkpIHtcbiAgICAgICAgcXVldWUucHVzaChtb3ZpZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuY2hhbmdlTW92aWVzTGlzdE9uU2VhcmNoKHF1ZXVlKVxuICB9XG5cbiAgY2hhbmdlTW92aWVMaXN0T25TZWFyY2gobW92aWVMaXN0KSB7XG4gICAgaWYobW92aWVMaXN0Lmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW92aWVzOiBtb3ZpZUxpc3RcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG1vdmllczpbe3RpdGxlOiBcIk5vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZFwifV1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtYWluVGFibGVcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJoZWFkZXJcIj5Nb3ZpZUxpc3Q8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiaW5uZXJUYWJsZVwiPlxuICAgICAgICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gaGFuZGxlU2VhcmNoPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==