"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var newMovieList = [];
      var movies = this.props.movies;
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(this.state.value.toLowerCase())) {
          newMovieList.push(movies[i]);
        }
      }
      this.props.handleMovieListChanges(newMovieList);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", value: this.state.value, onChange: this.handleChange.bind(this) }),
        React.createElement("input", {
          type: "button",
          value: "Go!",
          onClick: this.handleClick.bind(this)
        })
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5ld01vdmllTGlzdCIsIm1vdmllcyIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUZpQjtBQUtsQjs7OztpQ0FFYUMsQyxFQUFHO0FBQ2YsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGVBQU1DLEVBQUVFLE1BQUYsQ0FBU0g7QUFESCxPQUFkO0FBR0Q7OztrQ0FFYztBQUNiLFVBQUlJLGVBQWUsRUFBbkI7QUFDQSxVQUFJQyxTQUFTLEtBQUtQLEtBQUwsQ0FBV08sTUFBeEI7QUFDQSxXQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJRCxPQUFPRSxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDbkMsWUFBR0QsT0FBT0MsQ0FBUCxFQUFVRSxLQUFWLENBQWdCQyxXQUFoQixHQUE4QkMsUUFBOUIsQ0FBdUMsS0FBS1gsS0FBTCxDQUFXQyxLQUFYLENBQWlCUyxXQUFqQixFQUF2QyxDQUFILEVBQTJFO0FBQ3pFTCx1QkFBYU8sSUFBYixDQUFrQk4sT0FBT0MsQ0FBUCxDQUFsQjtBQUNEO0FBQ0o7QUFDRCxXQUFLUixLQUFMLENBQVdjLHNCQUFYLENBQWtDUixZQUFsQztBQUNEOzs7NkJBR1M7QUFDUixhQUNHO0FBQUE7QUFBQTtBQUNDLHVDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtMLEtBQUwsQ0FBV0MsS0FBckMsRUFBNEMsVUFBVSxLQUFLYSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUF0RCxHQUREO0FBRUM7QUFDRSxnQkFBSyxRQURQO0FBRUUsaUJBQU0sS0FGUjtBQUdFLG1CQUFTLEtBQUtDLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCO0FBSFg7QUFGRCxPQURIO0FBVUQ7Ozs7RUFyQ2tCRSxNQUFNQyxTOztBQXdDM0JDLE9BQU9yQixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJzZWFyY2hNb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG4gIFxuICBoYW5kbGVDaGFuZ2UgKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOmUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNsaWNrICgpIHtcbiAgICB2YXIgbmV3TW92aWVMaXN0ID0gW107XG4gICAgdmFyIG1vdmllcyA9IHRoaXMucHJvcHMubW92aWVzXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG1vdmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihtb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLnZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgbmV3TW92aWVMaXN0LnB1c2gobW92aWVzW2ldKVxuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMuaGFuZGxlTW92aWVMaXN0Q2hhbmdlcyhuZXdNb3ZpZUxpc3QpXG4gIH1cbiAgXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9XCJHbyFcIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==