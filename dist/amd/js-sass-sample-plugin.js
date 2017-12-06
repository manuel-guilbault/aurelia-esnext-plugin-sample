define(['exports', './hello-world', 'aurelia-pal'], function (exports, _helloWorld, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HelloWorld = undefined;
  Object.defineProperty(exports, 'HelloWorld', {
    enumerable: true,
    get: function () {
      return _helloWorld.HelloWorld;
    }
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources([_aureliaPal.PLATFORM.moduleName('./hello-world')]);
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLXNhc3Mtc2FtcGxlLXBsdWdpbi5qcyJdLCJuYW1lcyI6WyJIZWxsb1dvcmxkIiwiY29uZmlndXJlIiwiY29uZmlnIiwiZ2xvYmFsUmVzb3VyY2VzIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozt5QkFFU0EsVTs7O1VBRU9DLFMsR0FBQUEsUztBQUFULFdBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ2hDQSxXQUFPQyxlQUFQLENBQXVCLENBQ3JCLHFCQUFTQyxVQUFULENBQW9CLGVBQXBCLENBRHFCLENBQXZCO0FBR0QiLCJmaWxlIjoianMtc2Fzcy1zYW1wbGUtcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmV4cG9ydCB7IEhlbGxvV29ybGQgfSBmcm9tICcuL2hlbGxvLXdvcmxkJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWcpIHtcbiAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9oZWxsby13b3JsZCcpXG4gIF0pO1xufVxuIl19
