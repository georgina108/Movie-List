'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleFromWatchedToWatch = function (_React$Component) {
  _inherits(ToggleFromWatchedToWatch, _React$Component);

  function ToggleFromWatchedToWatch(props) {
    _classCallCheck(this, ToggleFromWatchedToWatch);

    var _this = _possibleConstructorReturn(this, (ToggleFromWatchedToWatch.__proto__ || Object.getPrototypeOf(ToggleFromWatchedToWatch)).call(this, props));

    _this.state = {
      status: ''
    };

    return _this;
  }

  _createClass(ToggleFromWatchedToWatch, [{
    key: 'handleToggle',
    value: function handleToggle(e) {
      if (e.target.value === 'true') {
        e.target.innerText = 'watched';
        e.target.value = 'false';
      } else {
        e.target.value === 'false';
        e.target.innerText = 'toWatch';
        e.target.value = 'true';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { text: 'watched', value: 'true', className: 'watchedButton', onClick: this.handleToggle.bind(this) },
        'ToWatch'
      );
    }
  }]);

  return ToggleFromWatchedToWatch;
}(React.Component);

window.ToggleFromWatchedToWatch = ToggleFromWatchedToWatch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2dnbGVGcm9tV2F0Y2hlZFRvV2F0Y2guanN4Il0sIm5hbWVzIjpbIlRvZ2dsZUZyb21XYXRjaGVkVG9XYXRjaCIsInByb3BzIiwic3RhdGUiLCJzdGF0dXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJpbm5lclRleHQiLCJoYW5kbGVUb2dnbGUiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsd0I7OztBQUNKLG9DQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0pBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxjQUFRO0FBREMsS0FBYjs7QUFGaUI7QUFNbEI7Ozs7aUNBSWFDLEMsRUFBRztBQUNmLFVBQUdBLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQixNQUF0QixFQUE4QjtBQUMxQkYsVUFBRUMsTUFBRixDQUFTRSxTQUFULEdBQXFCLFNBQXJCO0FBQ0FILFVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxHQUFpQixPQUFqQjtBQUNILE9BSEQsTUFHTztBQUNKRixVQUFFQyxNQUFGLENBQVNDLEtBQVQsS0FBbUIsT0FBcEI7QUFDRUYsVUFBRUMsTUFBRixDQUFTRSxTQUFULEdBQXFCLFNBQXJCO0FBQ0FILFVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxHQUFpQixNQUFqQjtBQUNIO0FBQ0Y7Ozs2QkFLUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQVEsTUFBSyxTQUFiLEVBQXVCLE9BQU0sTUFBN0IsRUFBb0MsV0FBVSxlQUE5QyxFQUE4RCxTQUFTLEtBQUtFLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXZFO0FBQUE7QUFBQSxPQURGO0FBR0Q7Ozs7RUE3Qm9DQyxNQUFNQyxTOztBQWlDN0NDLE9BQU9aLHdCQUFQLEdBQWtDQSx3QkFBbEMiLCJmaWxlIjoiVG9nZ2xlRnJvbVdhdGNoZWRUb1dhdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9nZ2xlRnJvbVdhdGNoZWRUb1dhdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcykgXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc3RhdHVzOiAnJ1xuICAgIH1cbiAgXG4gIH1cblxuXG4gXG4gIGhhbmRsZVRvZ2dsZSAoZSkge1xuICAgIGlmKGUudGFyZ2V0LnZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ3dhdGNoZWQnXG4gICAgICAgIGUudGFyZ2V0LnZhbHVlID0gJ2ZhbHNlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAoZS50YXJnZXQudmFsdWUgPT09ICdmYWxzZScpIFxuICAgICAgICBlLnRhcmdldC5pbm5lclRleHQgPSAndG9XYXRjaCdcbiAgICAgICAgZS50YXJnZXQudmFsdWUgPSAndHJ1ZSdcbiAgICB9XG4gIH1cblxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gdGV4dD1cIndhdGNoZWRcIiB2YWx1ZT1cInRydWVcIiBjbGFzc05hbWU9XCJ3YXRjaGVkQnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGUuYmluZCh0aGlzKX0+VG9XYXRjaDwvYnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG5cbndpbmRvdy5Ub2dnbGVGcm9tV2F0Y2hlZFRvV2F0Y2ggPSBUb2dnbGVGcm9tV2F0Y2hlZFRvV2F0Y2g7XG4iXX0=