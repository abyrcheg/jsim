// Generated by CoffeeScript 1.6.3
(function() {
  var Test;

  Test = {
    time: function(fn) {
      var end, start;
      start = +new Date();
      fn();
      end = +new Date();
      return end - start;
    }
  };

}).call(this);

/*
//@ sourceMappingURL=test.map
*/
