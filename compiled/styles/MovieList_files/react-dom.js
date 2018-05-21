"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * ReactDOM v0.14.9
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
// Based off https://github.com/ForbesLindesay/umd/blob/master/template.js
;(function (f) {
  // CommonJS
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f(require('react'));

    // RequireJS
  } else if (typeof define === "function" && define.amd) {
    define(['react'], f);

    // <script>
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      // works providing we're not in "use strict";
      // needed for Java 8 Nashorn
      // see https://github.com/facebook/react/issues/3037
      g = this;
    }
    g.ReactDOM = f(g.React);
  }
})(function (React) {
  return React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9Nb3ZpZUxpc3RfZmlsZXMvcmVhY3QtZG9tLmpzIl0sIm5hbWVzIjpbImYiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImRlZmluZSIsImFtZCIsImciLCJ3aW5kb3ciLCJnbG9iYWwiLCJzZWxmIiwiUmVhY3RET00iLCJSZWFjdCIsIl9fU0VDUkVUX0RPTV9ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQSxDQUFDLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1o7QUFDQSxNQUFJLFFBQU9DLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsT0FBT0MsTUFBUCxLQUFrQixXQUFyRCxFQUFrRTtBQUNoRUEsV0FBT0QsT0FBUCxHQUFpQkQsRUFBRUcsUUFBUSxPQUFSLENBQUYsQ0FBakI7O0FBRUY7QUFDQyxHQUpELE1BSU8sSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxPQUFPQyxHQUEzQyxFQUFnRDtBQUNyREQsV0FBTyxDQUFDLE9BQUQsQ0FBUCxFQUFrQkosQ0FBbEI7O0FBRUY7QUFDQyxHQUpNLE1BSUE7QUFDTCxRQUFJTSxDQUFKO0FBQ0EsUUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDRCxVQUFJQyxNQUFKO0FBQ0QsS0FGRCxNQUVPLElBQUksT0FBT0MsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUN4Q0YsVUFBSUUsTUFBSjtBQUNELEtBRk0sTUFFQSxJQUFJLE9BQU9DLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDdENILFVBQUlHLElBQUo7QUFDRCxLQUZNLE1BRUE7QUFDTDtBQUNBO0FBQ0E7QUFDQUgsVUFBSSxJQUFKO0FBQ0Q7QUFDREEsTUFBRUksUUFBRixHQUFhVixFQUFFTSxFQUFFSyxLQUFKLENBQWI7QUFDRDtBQUVGLENBM0JBLEVBMkJFLFVBQVNBLEtBQVQsRUFBZ0I7QUFDakIsU0FBT0EsTUFBTUMsNENBQWI7QUFDRCxDQTdCQSIsImZpbGUiOiJyZWFjdC1kb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0RE9NIHYwLjE0LjlcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG4vLyBCYXNlZCBvZmYgaHR0cHM6Ly9naXRodWIuY29tL0ZvcmJlc0xpbmRlc2F5L3VtZC9ibG9iL21hc3Rlci90ZW1wbGF0ZS5qc1xuOyhmdW5jdGlvbihmKSB7XG4gIC8vIENvbW1vbkpTXG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmKHJlcXVpcmUoJ3JlYWN0JykpO1xuXG4gIC8vIFJlcXVpcmVKU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsncmVhY3QnXSwgZik7XG5cbiAgLy8gPHNjcmlwdD5cbiAgfSBlbHNlIHtcbiAgICB2YXIgZztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZyA9IHdpbmRvdztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGcgPSBnbG9iYWw7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgZyA9IHNlbGY7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdvcmtzIHByb3ZpZGluZyB3ZSdyZSBub3QgaW4gXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAvLyBuZWVkZWQgZm9yIEphdmEgOCBOYXNob3JuXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMDM3XG4gICAgICBnID0gdGhpcztcbiAgICB9XG4gICAgZy5SZWFjdERPTSA9IGYoZy5SZWFjdCk7XG4gIH1cblxufSkoZnVuY3Rpb24oUmVhY3QpIHtcbiAgcmV0dXJuIFJlYWN0Ll9fU0VDUkVUX0RPTV9ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xufSk7XG4iXX0=