'use strict';

System.register(['aurelia-pal', './hello-world'], function (_export, _context) {
  "use strict";

  var PLATFORM;
  function configure(config) {
    config.globalResources([PLATFORM.moduleName('./hello-world')]);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_helloWorld) {
      var _exportObj = {};
      _exportObj.HelloWorld = _helloWorld.HelloWorld;

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLXNhc3Mtc2FtcGxlLXBsdWdpbi5qcyJdLCJuYW1lcyI6WyJjb25maWd1cmUiLCJjb25maWciLCJnbG9iYWxSZXNvdXJjZXMiLCJQTEFURk9STSIsIm1vZHVsZU5hbWUiLCJIZWxsb1dvcmxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJTyxXQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUNoQ0EsV0FBT0MsZUFBUCxDQUF1QixDQUNyQkMsU0FBU0MsVUFBVCxDQUFvQixlQUFwQixDQURxQixDQUF2QjtBQUdEOzt1QkFKZUosUzs7OztBQUpQRyxjLGVBQUFBLFE7OztpQkFFQUUsVSxlQUFBQSxVIiwiZmlsZSI6ImpzLXNhc3Mtc2FtcGxlLXBsdWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgeyBIZWxsb1dvcmxkIH0gZnJvbSAnLi9oZWxsby13b3JsZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG4gIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vaGVsbG8td29ybGQnKVxuICBdKTtcbn1cbiJdfQ==
