"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateMovieList = function (_React$Component) {
  _inherits(CreateMovieList, _React$Component);

  function CreateMovieList(props) {
    _classCallCheck(this, CreateMovieList);

    var _this = _possibleConstructorReturn(this, (CreateMovieList.__proto__ || Object.getPrototypeOf(CreateMovieList)).call(this, props));

    _this.state = {
      input: ''
    };
    return _this;
  }

  _createClass(CreateMovieList, [{
    key: "handleAddTitle",
    value: function handleAddTitle(e) {
      this.setState({
        input: e.target.value
      });
    }
  }, {
    key: "handleClickAdd",
    value: function handleClickAdd() {
      this.props.handleMovieAdditions(this.state.input);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", placeholder: "Add movie title here", onChange: this.handleAddTitle.bind(this) }),
        React.createElement("input", {
          className: "button",
          type: "button",
          value: "Add",
          onClick: this.handleClickAdd.bind(this)
        })
      );
    }
  }]);

  return CreateMovieList;
}(React.Component);

window.CreateMovieList = CreateMovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcmVhdGVNb3ZpZUxpc3QuanN4Il0sIm5hbWVzIjpbIkNyZWF0ZU1vdmllTGlzdCIsInByb3BzIiwic3RhdGUiLCJpbnB1dCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTW92aWVBZGRpdGlvbnMiLCJoYW5kbGVBZGRUaXRsZSIsImJpbmQiLCJoYW5kbGVDbGlja0FkZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLGU7OztBQUNMLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1pBLEtBRFk7O0FBRWxCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUZrQjtBQUtsQjs7OzttQ0FFZUMsQyxFQUFHO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYztBQUNaRixlQUFNQyxFQUFFRSxNQUFGLENBQVNDO0FBREgsT0FBZDtBQUdEOzs7cUNBRWdCO0FBQ2YsV0FBS04sS0FBTCxDQUFXTyxvQkFBWCxDQUFnQyxLQUFLTixLQUFMLENBQVdDLEtBQTNDO0FBQ0Q7Ozs2QkFFTztBQUNOLGFBQ0c7QUFBQTtBQUFBO0FBQ0MsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLGFBQVksc0JBQS9CLEVBQXNELFVBQVUsS0FBS00sY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBaEUsR0FERDtBQUVDO0FBQ0UscUJBQVUsUUFEWjtBQUVFLGdCQUFLLFFBRlA7QUFHRSxpQkFBTSxLQUhSO0FBSUUsbUJBQVMsS0FBS0MsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBeUIsSUFBekI7QUFKWDtBQUZELE9BREg7QUFXRDs7OztFQTlCMkJFLE1BQU1DLFM7O0FBa0NwQ0MsT0FBT2QsZUFBUCxHQUF5QkEsZUFBekIiLCJmaWxlIjoiY3JlYXRlTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ3JlYXRlTW92aWVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICBzdXBlcihwcm9wcykgXG4gIHRoaXMuc3RhdGUgPSB7XG4gICAgaW5wdXQ6ICcnXG4gIH1cbiB9XG5cbiBoYW5kbGVBZGRUaXRsZSAoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXQ6ZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlQ2xpY2tBZGQoKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVNb3ZpZUFkZGl0aW9ucyh0aGlzLnN0YXRlLmlucHV0KVxuICB9XG5cbnJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBtb3ZpZSB0aXRsZSBoZXJlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQWRkVGl0bGUuYmluZCh0aGlzKX0vPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9J2J1dHRvbidcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YWx1ZT1cIkFkZFwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja0FkZC5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxud2luZG93LkNyZWF0ZU1vdmllTGlzdCA9IENyZWF0ZU1vdmllTGlzdDsiXX0=