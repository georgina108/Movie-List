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
      value: '',
      moviesToList: []
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
      this.state.moviesToList = newMovieList;
      console.log(this.state.moviesToList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZWFyY2hNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic3RhdGUiLCJ2YWx1ZSIsIm1vdmllc1RvTGlzdCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5ld01vdmllTGlzdCIsIm1vdmllcyIsImkiLCJsZW5ndGgiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsb0JBQWE7QUFGRixLQUFiO0FBRmlCO0FBTWxCOzs7O2lDQUVhQyxDLEVBQUc7QUFDZixXQUFLQyxRQUFMLENBQWM7QUFDWkgsZUFBTUUsRUFBRUUsTUFBRixDQUFTSjtBQURILE9BQWQ7QUFHRDs7O2tDQUVjO0FBQ2IsVUFBSUssZUFBZSxFQUFuQjtBQUNBLFVBQUlDLFNBQVMsS0FBS1IsS0FBTCxDQUFXUSxNQUF4QjtBQUNBLFdBQUksSUFBSUMsSUFBSSxDQUFaLEVBQWVBLElBQUlELE9BQU9FLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNuQyxZQUFHRCxPQUFPQyxDQUFQLEVBQVVFLEtBQVYsQ0FBZ0JDLFdBQWhCLEdBQThCQyxRQUE5QixDQUF1QyxLQUFLWixLQUFMLENBQVdDLEtBQVgsQ0FBaUJVLFdBQWpCLEVBQXZDLENBQUgsRUFBMkU7QUFDekVMLHVCQUFhTyxJQUFiLENBQWtCTixPQUFPQyxDQUFQLENBQWxCO0FBQ0Q7QUFDSjtBQUNELFdBQUtSLEtBQUwsQ0FBV0UsWUFBWCxHQUEwQkksWUFBMUI7QUFDQVEsY0FBUUMsR0FBUixDQUFZLEtBQUtmLEtBQUwsQ0FBV0UsWUFBdkI7QUFDRDs7OzZCQUdTO0FBQ1IsYUFDRztBQUFBO0FBQUE7QUFDQyx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLRixLQUFMLENBQVdDLEtBQXJDLEVBQTRDLFVBQVUsS0FBS2UsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdEQsR0FERDtBQUVDO0FBQ0UsZ0JBQUssUUFEUDtBQUVFLGlCQUFNLEtBRlI7QUFHRSxtQkFBUyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QjtBQUhYO0FBRkQsT0FESDtBQVVEOzs7O0VBdkNrQkUsTUFBTUMsUzs7QUEwQzNCQyxPQUFPdkIsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoic2VhcmNoTW92aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIG1vdmllc1RvTGlzdDpbXVxuICAgIH1cbiAgfVxuICBcbiAgaGFuZGxlQ2hhbmdlIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTplLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVDbGljayAoKSB7XG4gICAgdmFyIG5ld01vdmllTGlzdCA9IFtdO1xuICAgIHZhciBtb3ZpZXMgPSB0aGlzLnByb3BzLm1vdmllc1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtb3ZpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYobW92aWVzW2ldLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIG5ld01vdmllTGlzdC5wdXNoKG1vdmllc1tpXSlcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN0YXRlLm1vdmllc1RvTGlzdCA9IG5ld01vdmllTGlzdFxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubW92aWVzVG9MaXN0KVxuICB9XG4gIFxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhbHVlPVwiR28hXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDsiXX0=