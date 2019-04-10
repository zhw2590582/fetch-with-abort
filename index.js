(function(window, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define(factory);
  } else {
    window.fetchWithAbort = factory();
  }
})(this, function() {
  return function fetchWithAbort() {
    if (!window.AbortController) {
      throw new Error('Your browser does not support AbortController function.');
    }

    if (!window.fetch) {
      throw new Error('Your browser does not support fetch function.');
    }

    var controller = new AbortController();
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === "string") {
      if (!args[1]) {
        args[1] = {
          signal: controller.signal
        };
      } else if (typeof args[1] === "object") {
        args[1].signal = controller.signal;
      }
    } else if (typeof args[0] === "object") {
      args[0].signal = controller.signal;
    }

    var result = window.fetch.apply(null, args);
    Object.defineProperty(result, "controller", {
      value: controller
    });
    return result;
  };
});
