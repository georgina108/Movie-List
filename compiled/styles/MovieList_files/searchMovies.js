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
      return React.createElement("div", null, React.createElement("input", { type: "text", placeholder: "Search...", value: this.state.value, onChange: this.handleChange.bind(this) }), React.createElement("input", {
        type: "button",
        value: "Go!",
        onClick: this.handleClick.bind(this)
      }));
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwidmFsdWUiLCJlIiwibmV3TW92aWVMaXN0IiwibW92aWVzIiwiaSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsUzs7O0FBQ0osV0FBQSxNQUFBLENBQUEsS0FBQSxFQUFtQjtBQUFBLG9CQUFBLElBQUEsRUFBQSxNQUFBOztBQUFBLFFBQUEsUUFBQSwyQkFBQSxJQUFBLEVBQUEsQ0FBQSxPQUFBLFNBQUEsSUFBQSxPQUFBLGNBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxJQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBOztBQUVqQixVQUFBLEtBQUEsR0FBYTtBQUNYRyxhQUFPO0FBREksS0FBYjtBQUZpQixXQUFBLEtBQUE7QUFLbEI7Ozs7aUNBRWFDLEMsRUFBRztBQUNmLFdBQUEsUUFBQSxDQUFjO0FBQ1pELGVBQU1DLEVBQUFBLE1BQUFBLENBQVNEO0FBREgsT0FBZDtBQUdEOzs7a0NBRWM7QUFDYixVQUFJRSxlQUFKLEVBQUE7QUFDQSxVQUFJQyxTQUFTLEtBQUEsS0FBQSxDQUFiLE1BQUE7QUFDQSxXQUFJLElBQUlDLElBQVIsQ0FBQSxFQUFlQSxJQUFJRCxPQUFuQixNQUFBLEVBQUEsR0FBQSxFQUF1QztBQUNuQyxZQUFHQSxPQUFBQSxDQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxXQUFBQSxHQUFBQSxRQUFBQSxDQUF1QyxLQUFBLEtBQUEsQ0FBQSxLQUFBLENBQTFDLFdBQTBDLEVBQXZDQSxDQUFILEVBQTJFO0FBQ3pFRCx1QkFBQUEsSUFBQUEsQ0FBa0JDLE9BQWxCRCxDQUFrQkMsQ0FBbEJEO0FBQ0Q7QUFDSjtBQUNELFdBQUEsS0FBQSxDQUFBLHNCQUFBLENBQUEsWUFBQTtBQUNEOzs7NkJBRVM7QUFDUixhQUNHLE1BQUEsYUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLEVBQ0MsTUFBQSxhQUFBLENBQUEsT0FBQSxFQUFBLEVBQU8sTUFBUCxNQUFBLEVBQW1CLGFBQW5CLFdBQUEsRUFBMkMsT0FBTyxLQUFBLEtBQUEsQ0FBbEQsS0FBQSxFQUFvRSxVQUFVLEtBQUEsWUFBQSxDQUFBLElBQUEsQ0FEL0UsSUFDK0UsQ0FBOUUsRUFBQSxDQURELEVBRUMsTUFBQSxhQUFBLENBQUEsT0FBQSxFQUFBO0FBQ0UsY0FERixRQUFBO0FBRUUsZUFGRixLQUFBO0FBR0UsaUJBQVMsS0FBQSxXQUFBLENBQUEsSUFBQSxDQUFBLElBQUE7QUFIWCxPQUFBLENBRkQsQ0FESDtBQVVEOzs7O0VBcENrQkosTUFBTUMsUzs7QUF1QzNCTSxPQUFBQSxNQUFBQSxHQUFBQSxNQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cbiAgXG4gIGhhbmRsZUNoYW5nZSAoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6ZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgKCkge1xuICAgIHZhciBuZXdNb3ZpZUxpc3QgPSBbXTtcbiAgICB2YXIgbW92aWVzID0gdGhpcy5wcm9wcy5tb3ZpZXNcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbW92aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG1vdmllc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBuZXdNb3ZpZUxpc3QucHVzaChtb3ZpZXNbaV0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVNb3ZpZUxpc3RDaGFuZ2VzKG5ld01vdmllTGlzdClcbiAgfVxuICBcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YWx1ZT1cIkdvIVwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19