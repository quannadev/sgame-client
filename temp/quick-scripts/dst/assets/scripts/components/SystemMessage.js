
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvU3lzdGVtTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1lc3NhZ2UiLCJSaWNoVGV4dCIsImlzUnVubmluZyIsIm9uRW5hYmxlIiwibWVzc2FnZUJveFdpZHRoIiwibm9kZSIsIndpZHRoIiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwibXNnIiwiZ2V0VmFyaWFibGUiLCJ2YWx1ZSIsInJ1bk1lc3NhZ2UiLCJsZW5ndGgiLCJzdG9wQWxsQWN0aW9ucyIsInN0cmluZyIsIngiLCJtb3ZlV2lkdGgiLCJkdXJhdGlvbiIsInNlbGYiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJtb3ZlVG8iLCJ2MiIsImNhbGxGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFSixFQUFFLENBQUNLLFFBREo7QUFFUkMsSUFBQUEsU0FBUyxFQUFFO0FBRkgsR0FIUDtBQU9MQyxFQUFBQSxRQVBLLHNCQU9LO0FBQ047QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtDLElBQUwsQ0FBVUMsS0FBakM7O0FBQ0EsUUFBR0MsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQTdDLEVBQW9EO0FBQ2hELFVBQUlDLEdBQUcsR0FBR0osV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQTFDLENBQWlERSxXQUFqRCxDQUE2RCxRQUE3RCxDQUFWOztBQUNBLFVBQUdELEdBQUcsSUFBSUEsR0FBRyxDQUFDRSxLQUFkLEVBQW9CO0FBQ2hCLGFBQUtDLFVBQUwsQ0FBZ0JILEdBQUcsQ0FBQ0UsS0FBcEI7QUFDSDtBQUNKLEtBTEQsTUFLSztBQUNELFdBQUtDLFVBQUwsQ0FBZ0Isc0ZBQWhCO0FBQ0g7QUFDSixHQWxCSTtBQW1CTEEsRUFBQUEsVUFuQkssc0JBbUJNSCxHQW5CTixFQW1CVTtBQUNYLFFBQUlBLEdBQUcsQ0FBQ0ksTUFBSixHQUFhLENBQWIsSUFBa0IsQ0FBQyxLQUFLYixTQUE1QixFQUF1QztBQUNuQyxXQUFLQSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBSUUsZUFBZSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsS0FBaEM7QUFDQSxXQUFLTixPQUFMLENBQWFLLElBQWIsQ0FBa0JXLGNBQWxCO0FBQ0EsV0FBS2hCLE9BQUwsQ0FBYWlCLE1BQWIsR0FBc0JOLEdBQXRCO0FBQ0EsV0FBS1gsT0FBTCxDQUFhSyxJQUFiLENBQWtCYSxDQUFsQixHQUFzQmQsZUFBdEI7QUFDQSxVQUFJZSxTQUFTLEdBQUdmLGVBQWUsR0FBRyxLQUFLSixPQUFMLENBQWFLLElBQWIsQ0FBa0JDLEtBQXBEO0FBQ0EsVUFBSWMsUUFBUSxHQUFHRCxTQUFTLEdBQUcsS0FBM0I7QUFDQSxVQUFJRSxJQUFJLEdBQUcsSUFBWDtBQUNBLFdBQUtyQixPQUFMLENBQWFLLElBQWIsQ0FBa0JpQixTQUFsQixDQUE0QjFCLEVBQUUsQ0FBQzJCLGFBQUgsQ0FBaUIsSUFBSTNCLEVBQUUsQ0FBQzRCLFFBQVAsQ0FDekM1QixFQUFFLENBQUM2QixNQUFILENBQVVMLFFBQVYsRUFBb0J4QixFQUFFLENBQUM4QixFQUFILENBQU0sQ0FBQ1AsU0FBUCxFQUFrQixDQUFsQixDQUFwQixDQUR5QyxFQUV6Q3ZCLEVBQUUsQ0FBQytCLFFBQUgsQ0FBWSxZQUFZO0FBQ3BCTixRQUFBQSxJQUFJLENBQUNyQixPQUFMLENBQWFLLElBQWIsQ0FBa0JhLENBQWxCLEdBQXNCZCxlQUF0QjtBQUNBaUIsUUFBQUEsSUFBSSxDQUFDbkIsU0FBTCxHQUFpQixLQUFqQjtBQUNILE9BSEQsQ0FGeUMsQ0FBakIsQ0FBNUI7QUFPSDtBQUNKO0FBckNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1lc3NhZ2U6IGNjLlJpY2hUZXh0LFxuICAgICAgICBpc1J1bm5pbmc6IGZhbHNlXG4gICAgfSxcbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICAvLyB0aGlzLnJ1bk1lc3NhZ2UoXCJNdWEgZ2FtZSBsacOqbiBo4buHIHRlbGVncmFtOiBAbXJ0ZW9lbVwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlQm94V2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGlmKFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZil7XG4gICAgICAgICAgICBsZXQgbXNnID0gU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKFwic3lzbXNnXCIpO1xuICAgICAgICAgICAgaWYobXNnICYmIG1zZy52YWx1ZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5NZXNzYWdlKG1zZy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5ydW5NZXNzYWdlKFwiQ2jDoG8gbeG7q25nIGPDoWMgYuG6oW4gxJHhur9uIHbhu5tpIGPhu5VuZyBnYW1lIFNtYXJ0IEZveCEgQ+G7lW5nIGdhbWUgcXXhu5FjIHThur8gZMOgbmggY2hvIG5nxrDhu51pIFZp4buHdFwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcnVuTWVzc2FnZShtc2cpe1xuICAgICAgICBpZiAobXNnLmxlbmd0aCA+IDAgJiYgIXRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZUJveFdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5zdHJpbmcgPSBtc2c7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2Uubm9kZS54ID0gbWVzc2FnZUJveFdpZHRoO1xuICAgICAgICAgICAgbGV0IG1vdmVXaWR0aCA9IG1lc3NhZ2VCb3hXaWR0aCArIHRoaXMubWVzc2FnZS5ub2RlLndpZHRoO1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gbW92ZVdpZHRoIC8gMTAwLjA7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2Uubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihuZXcgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKGR1cmF0aW9uLCBjYy52MigtbW92ZVdpZHRoLCAwKSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1lc3NhZ2Uubm9kZS54ID0gbWVzc2FnZUJveFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==