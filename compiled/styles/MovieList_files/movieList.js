"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

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
      return React.createElement("tbody", null, React.createElement("tr", null, React.createElement("th", null, React.createElement(CreateMovieList, { handleMovieAdditions: this.handleMovieAdditions.bind(this) }))), React.createElement("tr", { className: "tableHeader" }, React.createElement("th", null, React.createElement("button", { style: "width:30%" })), React.createElement("th", null, React.createElement("button", { style: "width:30%" })), React.createElement("th", null, React.createElement(Search, { movies: this.state.movies, handleMovieListChanges: this.handleMovieListChanges.bind(this) }))), this.state.movies.map(function (movie, i) {
        return React.createElement("tr", { key: i }, React.createElement("td", null, movie.title), React.createElement("td", null, React.createElement("button", { name: "watched" })));
      }));
    }
  }]);

  return MovieList;
}(React.Component);

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibW92aWVzIiwiYWRkaXRpb24iLCJuZXdTdGF0ZSIsInRpdGxlIiwibmV3TGlzdCIsIm1vdmllIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFNQSxZOzs7QUFDSixXQUFBLFNBQUEsQ0FBQSxLQUFBLEVBQW1CO0FBQUEsb0JBQUEsSUFBQSxFQUFBLFNBQUE7O0FBQUEsUUFBQSxRQUFBLDJCQUFBLElBQUEsRUFBQSxDQUFBLFVBQUEsU0FBQSxJQUFBLE9BQUEsY0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLElBQUEsQ0FBQSxJQUFBLEVBQUEsS0FBQSxDQUFBLENBQUE7O0FBRWpCLFVBQUEsS0FBQSxHQUFhO0FBQ1hHLGNBQVEsTUFBQSxLQUFBLENBQVdBO0FBRFIsS0FBYjtBQUZpQixXQUFBLEtBQUE7QUFLbEI7Ozs7eUNBRWtCQyxRLEVBQVU7QUFDN0IsVUFBSUMsV0FBVyxLQUFBLEtBQUEsQ0FBZixNQUFBO0FBQ0FBLGVBQUFBLElBQUFBLENBQWMsRUFBQ0MsT0FBZkQsUUFBYyxFQUFkQTtBQUNBLFdBQUEsUUFBQSxDQUFjO0FBQ1pGLGdCQUFRRTtBQURJLE9BQWQ7QUFHRDs7OzJDQUVzQkUsTyxFQUFTO0FBQzVCLFVBQUdBLFFBQUFBLE1BQUFBLEdBQUgsQ0FBQSxFQUF1QjtBQUNyQixhQUFBLFFBQUEsQ0FBYztBQUNaSixrQkFBUUk7QUFESSxTQUFkO0FBREYsT0FBQSxNQUlPO0FBQ0wsYUFBQSxRQUFBLENBQWM7QUFDWkosa0JBQVEsQ0FBQyxFQUFDRyxPQUFGLDZCQUFDLEVBQUQ7QUFESSxTQUFkO0FBR0Q7QUFDRjs7OzZCQUVTO0FBQ1IsYUFDRSxNQUFBLGFBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxFQUNHLE1BQUEsYUFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQ0MsTUFBQSxhQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsRUFDRSxNQUFBLGFBQUEsQ0FBQSxlQUFBLEVBQUEsRUFBaUIsc0JBQXNCLEtBQUEsb0JBQUEsQ0FBQSxJQUFBLENBQXZDLElBQXVDLENBQXZDLEVBQUEsQ0FERixDQURELENBREgsRUFNRSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBQUEsRUFBSSxXQUFKLGFBQUEsRUFBQSxFQUNFLE1BQUEsYUFBQSxDQUFBLElBQUEsRUFBQSxJQUFBLEVBQ0UsTUFBQSxhQUFBLENBQUEsUUFBQSxFQUFBLEVBQVEsT0FBUixXQUFBLEVBQUEsQ0FERixDQURGLEVBSUUsTUFBQSxhQUFBLENBQUEsSUFBQSxFQUFBLElBQUEsRUFDRSxNQUFBLGFBQUEsQ0FBQSxRQUFBLEVBQUEsRUFBUSxPQUFSLFdBQUEsRUFBQSxDQURGLENBSkYsRUFPRSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUNFLE1BQUEsYUFBQSxDQUFBLE1BQUEsRUFBQSxFQUFRLFFBQVEsS0FBQSxLQUFBLENBQWhCLE1BQUEsRUFBbUMsd0JBQTBCLEtBQUEsc0JBQUEsQ0FBQSxJQUFBLENBQTdELElBQTZELENBQTdELEVBQUEsQ0FERixDQVBGLENBTkYsRUFpQkssS0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBc0IsVUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBO0FBQUEsZUFDckIsTUFBQSxhQUFBLENBQUEsSUFBQSxFQUFBLEVBQUksS0FBSixDQUFBLEVBQUEsRUFDRSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFLRSxNQUFNRixLQUFYLENBREYsRUFFRSxNQUFBLGFBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFJLE1BQUEsYUFBQSxDQUFBLFFBQUEsRUFBQSxFQUFRLE1BQVIsU0FBQSxFQUFBLENBQUosQ0FGRixDQURxQjtBQUF0QixPQUFBLENBakJMLENBREY7QUEyQkQ7Ozs7RUF4RHFCTCxNQUFNQyxTOztBQTZEOUJPLE9BQUFBLFNBQUFBLEdBQUFBLFNBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiB0aGlzLnByb3BzLm1vdmllc1xuICAgIH1cbiAgfVxuXG5oYW5kbGVNb3ZpZUFkZGl0aW9ucyhhZGRpdGlvbikge1xuICB2YXIgbmV3U3RhdGUgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgbmV3U3RhdGUucHVzaCh7dGl0bGU6YWRkaXRpb259KTtcbiAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgbW92aWVzOiBuZXdTdGF0ZVxuICB9KVxufVxuXG5oYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzKG5ld0xpc3QpIHtcbiAgICBpZihuZXdMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXM6IG5ld0xpc3RcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3ZpZXM6IFt7dGl0bGU6XCJObyBtb3ZpZSBieSB0aGF0IG5hbWUgZm91bmRcIn1dXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0Ym9keT5cbiAgICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8Q3JlYXRlTW92aWVMaXN0IGhhbmRsZU1vdmllQWRkaXRpb25zPXt0aGlzLmhhbmRsZU1vdmllQWRkaXRpb25zLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3NOYW1lPVwidGFibGVIZWFkZXJcIj5cbiAgICAgICAgICA8dGg+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPVwid2lkdGg6MzAlXCIvPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoPlxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT1cIndpZHRoOjMwJVwiLz5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgIDxTZWFyY2ggbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyA9IHt0aGlzLmhhbmRsZU1vdmllTGlzdENoYW5nZXMuYmluZCh0aGlzKX0vPlxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICAgICAge3RoaXMuc3RhdGUubW92aWVzLm1hcCgobW92aWUsIGkpID0+IFxuICAgICAgICAgICAgPHRyIGtleT17aX0+XG4gICAgICAgICAgICAgIDx0ZD57bW92aWUudGl0bGV9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPjxidXR0b24gbmFtZT1cIndhdGNoZWRcIi8+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKX0gXG4gICAgICA8L3Rib2R5PlxuXG4gICAgKSBcbiAgfVxuXG59XG5cblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDtcblxuXG4gIFxuIl19