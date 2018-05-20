"use strict";

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies,
      handleSearch = _ref.handleSearch;
  return React.createElement(
    "tbody",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement(
        "th",
        null,
        React.createElement(Search, { handleSearch: handleSearch })
      )
    ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1vdmllTGlzdCIsIm1vdmllcyIsImhhbmRsZVNlYXJjaCIsIm1hcCIsIm1vdmllIiwiaSIsInRpdGxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUVDLE1BQUYsUUFBRUEsTUFBRjtBQUFBLE1BQVVDLFlBQVYsUUFBVUEsWUFBVjtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLGNBQWNBLFlBQXRCO0FBREY7QUFERCxLQURBO0FBTUVELFdBQU9FLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxhQUNYO0FBQUE7QUFBQSxVQUFJLEtBQUtBLENBQVQ7QUFDQztBQUFBO0FBQUE7QUFBS0QsZ0JBQU1FO0FBQVg7QUFERCxPQURXO0FBQUEsS0FBWDtBQU5GLEdBRGE7QUFBQSxDQUFoQjs7QUFnQkFDLE9BQU9QLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6Im1vdmllTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3QgPSAoe21vdmllcywgaGFuZGxlU2VhcmNofSkgPT4gKFxuICAgPHRib2R5PlxuICAgPHRyPlxuICAgIDx0aD5cbiAgICAgIDxTZWFyY2ggaGFuZGxlU2VhcmNoPXtoYW5kbGVTZWFyY2h9Lz5cbiAgICA8L3RoPlxuICAgPC90cj5cbiAgICB7bW92aWVzLm1hcCgobW92aWUsIGkpID0+IFxuICAgICA8dHIga2V5PXtpfT5cbiAgICAgIDx0ZD57bW92aWUudGl0bGV9PC90ZD5cbiAgICAgPC90cj5cbiAgICApfSBcbiAgIDwvdGJvZHk+XG5cbilcblxud2luZG93Lk1vdmllTGlzdCA9IE1vdmllTGlzdDtcblxuIl19