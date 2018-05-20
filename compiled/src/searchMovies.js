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
      console.log(this.state.value);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", value: this.state.value, onChange: this.handleChange }),
        React.createElement("input", {
          type: "button",
          value: "Go!",
          onClick: this.handleClick
        })
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUZpQjtBQUtsQjs7OztpQ0FFYUMsQyxFQUFHO0FBQ2YsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGVBQU1DLEVBQUVFLE1BQUYsQ0FBU0g7QUFESCxPQUFkO0FBR0Q7OztrQ0FFYztBQUNiSSxjQUFRQyxHQUFSLENBQVksS0FBS04sS0FBTCxDQUFXQyxLQUF2QjtBQUNEOzs7NkJBR1M7QUFDUixhQUNHO0FBQUE7QUFBQTtBQUNDLHVDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBckMsRUFBNEMsVUFBVSxLQUFLTSxZQUEzRCxHQUREO0FBRUM7QUFDRSxnQkFBSyxRQURQO0FBRUUsaUJBQU0sS0FGUjtBQUdFLG1CQUFTLEtBQUtDO0FBSGhCO0FBRkQsT0FESDtBQVVEOzs7O0VBOUJrQkMsTUFBTUMsUzs7QUFpQzNCQyxPQUFPYixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJzZWFyY2hNb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG4gIFxuICBoYW5kbGVDaGFuZ2UgKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOmUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNsaWNrICgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnZhbHVlKVxuICB9XG4gIFxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YWx1ZT1cIkdvIVwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==