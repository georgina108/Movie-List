"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateMovieList = function (_React$Component) {
  _inherits(CreateMovieList, _React$Component);

  function CreateMovieList(props) {
    _classCallCheck(this, CreateMovieList);

    return _possibleConstructorReturn(this, (CreateMovieList.__proto__ || Object.getPrototypeOf(CreateMovieList)).call(this, props));
  }

  _createClass(CreateMovieList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", placeholder: "Add movie title here" }),
        React.createElement("input", {
          className: "button",
          type: "button",
          value: "Add"
        })
      );
    }
  }]);

  return CreateMovieList;
}(React.Component);

window.CreateMovieList = CreateMovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVNb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZU1vdmllTGlzdCIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsZTs7O0FBQ0wsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2SEFDWkEsS0FEWTtBQUVsQjs7Ozs2QkFFUTtBQUNOLGFBQ0c7QUFBQTtBQUFBO0FBQ0MsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksc0JBQS9CLEdBREQ7QUFFQztBQUNFLHFCQUFVLFFBRFo7QUFFRSxnQkFBSyxRQUZQO0FBR0UsaUJBQU07QUFIUjtBQUZELE9BREg7QUFVRDs7OztFQWhCMkJDLE1BQU1DLFM7O0FBb0JwQ0MsT0FBT0osZUFBUCxHQUF5QkEsZUFBekIiLCJmaWxlIjoiY3JlYXRlTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3JlYXRlTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBzdXBlcihwcm9wcykgXG4gfVxuXG5yZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGQgbW92aWUgdGl0bGUgaGVyZVwiLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPSdidXR0b24nXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFsdWU9XCJBZGRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxud2luZG93LkNyZWF0ZU1vdmllTGlzdCA9IENyZWF0ZU1vdmllTGlzdDsiXX0=