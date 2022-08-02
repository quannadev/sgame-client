
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/SystemMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f32a3Tu2xVF6qzlD+Tsuu9p', 'SystemMessage');
// scripts/components/SystemMessage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    message: cc.RichText,
    isRunning: false
  },
  onEnable: function onEnable() {
    // this.runMessage("Mua game liên hệ telegram: @mrteoem");
    this.messageBoxWidth = this.node.width;

    if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
      var msg = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable("sysmsg");

      if (msg && msg.value) {
        this.runMessage(msg.value);
      }
    } else {
      this.runMessage("Chào mừng các bạn đến với cổng game Smart Fox! Cổng game quốc tế dành cho người Việt");
    }
  },
  runMessage: function runMessage(msg) {
    if (msg.length > 0 && !this.isRunning) {
      this.isRunning = true;
      var messageBoxWidth = this.node.width;
      this.message.node.stopAllActions();
      this.message.string = msg;
      this.message.node.x = messageBoxWidth;
      var moveWidth = messageBoxWidth + this.message.node.width;
      var duration = moveWidth / 100.0;
      var self = this;
      this.message.node.runAction(cc.repeatForever(new cc.sequence(cc.moveTo(duration, cc.v2(-moveWidth, 0)), cc.callFunc(function () {
        self.message.node.x = messageBoxWidth;
        self.isRunning = false;
      }))));
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tcG9uZW50c1xcU3lzdGVtTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1lc3NhZ2UiLCJSaWNoVGV4dCIsImlzUnVubmluZyIsIm9uRW5hYmxlIiwibWVzc2FnZUJveFdpZHRoIiwibm9kZSIsIndpZHRoIiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwibXNnIiwiZ2V0VmFyaWFibGUiLCJ2YWx1ZSIsInJ1bk1lc3NhZ2UiLCJsZW5ndGgiLCJzdG9wQWxsQWN0aW9ucyIsInN0cmluZyIsIngiLCJtb3ZlV2lkdGgiLCJkdXJhdGlvbiIsInNlbGYiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJtb3ZlVG8iLCJ2MiIsImNhbGxGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFSixFQUFFLENBQUNLLFFBREo7QUFFUkMsSUFBQUEsU0FBUyxFQUFFO0FBRkgsR0FIUDtBQU9MQyxFQUFBQSxRQVBLLHNCQU9LO0FBQ047QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtDLElBQUwsQ0FBVUMsS0FBakM7O0FBQ0EsUUFBR0MsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQTdDLEVBQW9EO0FBQ2hELFVBQUlDLEdBQUcsR0FBR0osV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQTFDLENBQWlERSxXQUFqRCxDQUE2RCxRQUE3RCxDQUFWOztBQUNBLFVBQUdELEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxLQUFkLEVBQW9CO0FBQ2hCLGFBQUtDLFVBQUwsQ0FBZ0JILEdBQUcsQ0FBQ0UsS0FBcEI7QUFDSDtBQUNKLEtBTEQsTUFLSztBQUNELFdBQUtDLFVBQUwsQ0FBZ0Isc0ZBQWhCO0FBQ0g7QUFDSixHQWxCSTtBQW1CTEEsRUFBQUEsVUFuQkssc0JBbUJNSCxHQW5CTixFQW1CVTtBQUNYLFFBQUlBLEdBQUcsQ0FBQ0ksTUFBSixHQUFhLENBQWIsSUFBa0IsQ0FBQyxLQUFLYixTQUE1QixFQUF1QztBQUNuQyxXQUFLQSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBSUUsZUFBZSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsS0FBaEM7QUFDQSxXQUFLTixPQUFMLENBQWFLLElBQWIsQ0FBa0JXLGNBQWxCO0FBQ0EsV0FBS2hCLE9BQUwsQ0FBYWlCLE1BQWIsR0FBc0JOLEdBQXRCO0FBQ0EsV0FBS1gsT0FBTCxDQUFhSyxJQUFiLENBQWtCYSxDQUFsQixHQUFzQmQsZUFBdEI7QUFDQSxVQUFJZSxTQUFTLEdBQUdmLGVBQWUsR0FBRyxLQUFLSixPQUFMLENBQWFLLElBQWIsQ0FBa0JDLEtBQXBEO0FBQ0EsVUFBSWMsUUFBUSxHQUFHRCxTQUFTLEdBQUcsS0FBM0I7QUFDQSxVQUFJRSxJQUFJLEdBQUcsSUFBWDtBQUNBLFdBQUtyQixPQUFMLENBQWFLLElBQWIsQ0FBa0JpQixTQUFsQixDQUE0QjFCLEVBQUUsQ0FBQzJCLGFBQUgsQ0FBaUIsSUFBSTNCLEVBQUUsQ0FBQzRCLFFBQVAsQ0FDekM1QixFQUFFLENBQUM2QixNQUFILENBQVVMLFFBQVYsRUFBb0J4QixFQUFFLENBQUM4QixFQUFILENBQU0sQ0FBQ1AsU0FBUCxFQUFrQixDQUFsQixDQUFwQixDQUR5QyxFQUV6Q3ZCLEVBQUUsQ0FBQytCLFFBQUgsQ0FBWSxZQUFZO0FBQ3BCTixRQUFBQSxJQUFJLENBQUNyQixPQUFMLENBQWFLLElBQWIsQ0FBa0JhLENBQWxCLEdBQXNCZCxlQUF0QjtBQUNBaUIsUUFBQUEsSUFBSSxDQUFDbkIsU0FBTCxHQUFpQixLQUFqQjtBQUNILE9BSEQsQ0FGeUMsQ0FBakIsQ0FBNUI7QUFPSDtBQUNKO0FBckNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbWVzc2FnZTogY2MuUmljaFRleHQsXHJcbiAgICAgICAgaXNSdW5uaW5nOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgLy8gdGhpcy5ydW5NZXNzYWdlKFwiTXVhIGdhbWUgbGnDqm4gaOG7hyB0ZWxlZ3JhbTogQG1ydGVvZW1cIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQm94V2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgaWYoU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShcInN5c21zZ1wiKTtcclxuICAgICAgICAgICAgaWYobXNnICYmIG1zZy52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bk1lc3NhZ2UobXNnLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJ1bk1lc3NhZ2UoXCJDaMOgbyBt4burbmcgY8OhYyBi4bqhbiDEkeG6v24gduG7m2kgY+G7lW5nIGdhbWUgU21hcnQgRm94ISBD4buVbmcgZ2FtZSBxdeG7kWMgdOG6vyBkw6BuaCBjaG8gbmfGsOG7nWkgVmnhu4d0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBydW5NZXNzYWdlKG1zZyl7XHJcbiAgICAgICAgaWYgKG1zZy5sZW5ndGggPiAwICYmICF0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlQm94V2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5zdHJpbmcgPSBtc2c7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5ub2RlLnggPSBtZXNzYWdlQm94V2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlV2lkdGggPSBtZXNzYWdlQm94V2lkdGggKyB0aGlzLm1lc3NhZ2Uubm9kZS53aWR0aDtcclxuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gbW92ZVdpZHRoIC8gMTAwLjA7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLm5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIobmV3IGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKGR1cmF0aW9uLCBjYy52MigtbW92ZVdpZHRoLCAwKSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5tZXNzYWdlLm5vZGUueCA9IG1lc3NhZ2VCb3hXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==