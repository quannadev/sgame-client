
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UISplash.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63fe0aI/sFDUpVbzTV9FG4l', 'UISplash');
// scripts/ui/UISplash.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    hoiXoayDapXoay: cc.Node,
    progressBar: cc.ProgressBar,
    lb_loading: cc.Label
  },
  onLoad: function onLoad() {
    this.progressBar.progress = 0;

    if (!cc.sys.isNative) {
      this.scheduleOnce(this.initGame, 0);
    } else {
      if (cc.isValid(this.hoiXoayDapXoay)) {
        var self = this;
        var script = this.hoiXoayDapXoay.getComponent("HoiXoayServer");
        script.hotUpdate(function () {
          self.scheduleOnce(self.initGame, 0);
        });
      } else {
        this.scheduleOnce(this.initGame, 0);
      }
    }
  },
  initGame: function initGame() {
    var self = this;
    this.show('UIPortal', {
      pop: true
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJU3BsYXNoLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhvaVhvYXlEYXBYb2F5IiwiTm9kZSIsInByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NCYXIiLCJsYl9sb2FkaW5nIiwiTGFiZWwiLCJvbkxvYWQiLCJwcm9ncmVzcyIsInN5cyIsImlzTmF0aXZlIiwic2NoZWR1bGVPbmNlIiwiaW5pdEdhbWUiLCJpc1ZhbGlkIiwic2VsZiIsInNjcmlwdCIsImdldENvbXBvbmVudCIsImhvdFVwZGF0ZSIsInNob3ciLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsY0FBYyxFQUFFSixFQUFFLENBQUNLLElBRFg7QUFFUkMsSUFBQUEsV0FBVyxFQUFFTixFQUFFLENBQUNPLFdBRlI7QUFHUkMsSUFBQUEsVUFBVSxFQUFFUixFQUFFLENBQUNTO0FBSFAsR0FIUDtBQVFMQyxFQUFBQSxNQVJLLG9CQVFHO0FBQ0osU0FBS0osV0FBTCxDQUFpQkssUUFBakIsR0FBNEIsQ0FBNUI7O0FBQ0EsUUFBSSxDQUFDWCxFQUFFLENBQUNZLEdBQUgsQ0FBT0MsUUFBWixFQUFzQjtBQUNsQixXQUFLQyxZQUFMLENBQWtCLEtBQUtDLFFBQXZCLEVBQWlDLENBQWpDO0FBQ0gsS0FGRCxNQUVNO0FBQ0YsVUFBR2YsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXLEtBQUtaLGNBQWhCLENBQUgsRUFBbUM7QUFDL0IsWUFBSWEsSUFBSSxHQUFHLElBQVg7QUFDQSxZQUFJQyxNQUFNLEdBQUcsS0FBS2QsY0FBTCxDQUFvQmUsWUFBcEIsQ0FBaUMsZUFBakMsQ0FBYjtBQUNBRCxRQUFBQSxNQUFNLENBQUNFLFNBQVAsQ0FBaUIsWUFBWTtBQUN6QkgsVUFBQUEsSUFBSSxDQUFDSCxZQUFMLENBQWtCRyxJQUFJLENBQUNGLFFBQXZCLEVBQWlDLENBQWpDO0FBQ0gsU0FGRDtBQUdILE9BTkQsTUFNTTtBQUNGLGFBQUtELFlBQUwsQ0FBa0IsS0FBS0MsUUFBdkIsRUFBaUMsQ0FBakM7QUFDSDtBQUNKO0FBQ0osR0F2Qkk7QUF3QkxBLEVBQUFBLFFBeEJLLHNCQXdCSztBQUNOLFFBQUlFLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS0ksSUFBTCxDQUFVLFVBQVYsRUFBc0I7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFO0FBQU4sS0FBdEI7QUFDSDtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBob2lYb2F5RGFwWG9heTogY2MuTm9kZSxcclxuICAgICAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgbGJfbG9hZGluZzogY2MuTGFiZWxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMDtcclxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLmluaXRHYW1lLCAwKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQodGhpcy5ob2lYb2F5RGFwWG9heSkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjcmlwdCA9IHRoaXMuaG9pWG9heURhcFhvYXkuZ2V0Q29tcG9uZW50KFwiSG9pWG9heVNlcnZlclwiKTtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5ob3RVcGRhdGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NoZWR1bGVPbmNlKHNlbGYuaW5pdEdhbWUsIDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuaW5pdEdhbWUsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRHYW1lKCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2hvdygnVUlQb3J0YWwnLCB7cG9wOiB0cnVlfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=