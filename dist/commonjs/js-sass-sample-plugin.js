'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloWorld = undefined;

var _helloWorld = require('./hello-world');

Object.defineProperty(exports, 'HelloWorld', {
  enumerable: true,
  get: function get() {
    return _helloWorld.HelloWorld;
  }
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

function configure(config) {
  config.globalResources([_aureliaPal.PLATFORM.moduleName('./hello-world')]);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLXNhc3Mtc2FtcGxlLXBsdWdpbi5qcyJdLCJuYW1lcyI6WyJIZWxsb1dvcmxkIiwiY29uZmlndXJlIiwiY29uZmlnIiwiZ2xvYmFsUmVzb3VyY2VzIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3VCQUVTQSxVOzs7UUFFT0MsUyxHQUFBQSxTOztBQUpoQjs7QUFJTyxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUNoQ0EsU0FBT0MsZUFBUCxDQUF1QixDQUNyQixxQkFBU0MsVUFBVCxDQUFvQixlQUFwQixDQURxQixDQUF2QjtBQUdEIiwiZmlsZSI6ImpzLXNhc3Mtc2FtcGxlLXBsdWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgeyBIZWxsb1dvcmxkIH0gZnJvbSAnLi9oZWxsby13b3JsZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG4gIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vaGVsbG8td29ybGQnKVxuICBdKTtcbn1cbiJdfQ==
