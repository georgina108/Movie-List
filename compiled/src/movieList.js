"use strict";

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;
  return React.createElement(
    "tbody",
    null,
    movies.map(function (movie, i) {
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
};

window.MovieList = MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwiaSIsInRpdGxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0VBLFdBQU9DLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxhQUNYO0FBQUE7QUFBQSxVQUFJLEtBQUtBLENBQVQ7QUFDQztBQUFBO0FBQUE7QUFBS0QsZ0JBQU1FO0FBQVg7QUFERCxPQURXO0FBQUEsS0FBWDtBQURGLEdBRGE7QUFBQSxDQUFoQjs7QUFXQUMsT0FBT04sU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoibW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1vdmllTGlzdCA9ICh7bW92aWVzfSkgPT4gKFxuICAgPHRib2R5PlxuICAgIHttb3ZpZXMubWFwKChtb3ZpZSwgaSkgPT4gXG4gICAgIDx0ciBrZXk9e2l9PlxuICAgICAgPHRkPnttb3ZpZS50aXRsZX08L3RkPlxuICAgICA8L3RyPlxuICAgICl9IFxuICAgPC90Ym9keT5cblxuKVxuXG53aW5kb3cuTW92aWVMaXN0ID0gTW92aWVMaXN0O1xuXG4iXX0=