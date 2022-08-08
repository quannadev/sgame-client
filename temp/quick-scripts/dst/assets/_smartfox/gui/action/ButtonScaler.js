
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/action/ButtonScaler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb22eEUm+xFCLENauSM/Z3P', 'ButtonScaler');
// _smartfox/gui/action/ButtonScaler.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    pressedScale: 0.9,
    transDuration: 0.1,
    sound: false
  },
  onLoad: function onLoad() {
    var self = this;
    self.initScale = this.node.scale;
    self.button = self.getComponent(cc.Button);
    self.scaleDownAction = cc.scaleTo(0.05, this.pressedScale);
    self.scaleUpAction = cc.scaleTo(0.05, self.initScale);

    function onTouchDown(event) {
      this.stopAllActions();
      this.runAction(self.scaleDownAction);
    }

    function onTouchUp(event) {
      this.stopAllActions();
      this.runAction(self.scaleUpAction);
    }

    this.node.on('touchstart', onTouchDown, this.node);
    this.node.on('touchend', onTouchUp, this.node);
    this.node.on('touchcancel', onTouchUp, this.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL2FjdGlvbi9CdXR0b25TY2FsZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJlc3NlZFNjYWxlIiwidHJhbnNEdXJhdGlvbiIsInNvdW5kIiwib25Mb2FkIiwic2VsZiIsImluaXRTY2FsZSIsIm5vZGUiLCJzY2FsZSIsImJ1dHRvbiIsImdldENvbXBvbmVudCIsIkJ1dHRvbiIsInNjYWxlRG93bkFjdGlvbiIsInNjYWxlVG8iLCJzY2FsZVVwQWN0aW9uIiwib25Ub3VjaERvd24iLCJldmVudCIsInN0b3BBbGxBY3Rpb25zIiwicnVuQWN0aW9uIiwib25Ub3VjaFVwIiwib24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFFLEdBRE47QUFFUkMsSUFBQUEsYUFBYSxFQUFFLEdBRlA7QUFHUkMsSUFBQUEsS0FBSyxFQUFHO0FBSEEsR0FIUDtBQVNMQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQUEsSUFBQUEsSUFBSSxDQUFDQyxTQUFMLEdBQWlCLEtBQUtDLElBQUwsQ0FBVUMsS0FBM0I7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxNQUFMLEdBQWNKLElBQUksQ0FBQ0ssWUFBTCxDQUFrQmIsRUFBRSxDQUFDYyxNQUFyQixDQUFkO0FBQ0FOLElBQUFBLElBQUksQ0FBQ08sZUFBTCxHQUF1QmYsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXLElBQVgsRUFBaUIsS0FBS1osWUFBdEIsQ0FBdkI7QUFDQUksSUFBQUEsSUFBSSxDQUFDUyxhQUFMLEdBQXFCakIsRUFBRSxDQUFDZ0IsT0FBSCxDQUFXLElBQVgsRUFBaUJSLElBQUksQ0FBQ0MsU0FBdEIsQ0FBckI7O0FBQ0EsYUFBU1MsV0FBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDekIsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLFNBQUwsQ0FBZWIsSUFBSSxDQUFDTyxlQUFwQjtBQUNIOztBQUNELGFBQVNPLFNBQVQsQ0FBb0JILEtBQXBCLEVBQTJCO0FBQ3ZCLFdBQUtDLGNBQUw7QUFDQSxXQUFLQyxTQUFMLENBQWViLElBQUksQ0FBQ1MsYUFBcEI7QUFDSDs7QUFDRCxTQUFLUCxJQUFMLENBQVVhLEVBQVYsQ0FBYSxZQUFiLEVBQTJCTCxXQUEzQixFQUF3QyxLQUFLUixJQUE3QztBQUNBLFNBQUtBLElBQUwsQ0FBVWEsRUFBVixDQUFhLFVBQWIsRUFBeUJELFNBQXpCLEVBQW9DLEtBQUtaLElBQXpDO0FBQ0EsU0FBS0EsSUFBTCxDQUFVYSxFQUFWLENBQWEsYUFBYixFQUE0QkQsU0FBNUIsRUFBdUMsS0FBS1osSUFBNUM7QUFDSDtBQTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJlc3NlZFNjYWxlOiAwLjksXG4gICAgICAgIHRyYW5zRHVyYXRpb246IDAuMSxcbiAgICAgICAgc291bmQgOiBmYWxzZVxuICAgIH0sXG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaW5pdFNjYWxlID0gdGhpcy5ub2RlLnNjYWxlO1xuICAgICAgICBzZWxmLmJ1dHRvbiA9IHNlbGYuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHNlbGYuc2NhbGVEb3duQWN0aW9uID0gY2Muc2NhbGVUbygwLjA1LCB0aGlzLnByZXNzZWRTY2FsZSk7XG4gICAgICAgIHNlbGYuc2NhbGVVcEFjdGlvbiA9IGNjLnNjYWxlVG8oMC4wNSwgc2VsZi5pbml0U2NhbGUpO1xuICAgICAgICBmdW5jdGlvbiBvblRvdWNoRG93biAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMucnVuQWN0aW9uKHNlbGYuc2NhbGVEb3duQWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBvblRvdWNoVXAgKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bkFjdGlvbihzZWxmLnNjYWxlVXBBY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIG9uVG91Y2hEb3duLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgb25Ub3VjaFVwLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoY2FuY2VsJywgb25Ub3VjaFVwLCB0aGlzLm5vZGUpO1xuICAgIH0sXG59KTsiXX0=