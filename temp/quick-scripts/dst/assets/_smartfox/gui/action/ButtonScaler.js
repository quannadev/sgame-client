
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxndWlcXGFjdGlvblxcQnV0dG9uU2NhbGVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByZXNzZWRTY2FsZSIsInRyYW5zRHVyYXRpb24iLCJzb3VuZCIsIm9uTG9hZCIsInNlbGYiLCJpbml0U2NhbGUiLCJub2RlIiwic2NhbGUiLCJidXR0b24iLCJnZXRDb21wb25lbnQiLCJCdXR0b24iLCJzY2FsZURvd25BY3Rpb24iLCJzY2FsZVRvIiwic2NhbGVVcEFjdGlvbiIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsIm9uVG91Y2hVcCIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFlBQVksRUFBRSxHQUROO0FBRVJDLElBQUFBLGFBQWEsRUFBRSxHQUZQO0FBR1JDLElBQUFBLEtBQUssRUFBRztBQUhBLEdBSFA7QUFTTEMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0FBLElBQUFBLElBQUksQ0FBQ0MsU0FBTCxHQUFpQixLQUFLQyxJQUFMLENBQVVDLEtBQTNCO0FBQ0FILElBQUFBLElBQUksQ0FBQ0ksTUFBTCxHQUFjSixJQUFJLENBQUNLLFlBQUwsQ0FBa0JiLEVBQUUsQ0FBQ2MsTUFBckIsQ0FBZDtBQUNBTixJQUFBQSxJQUFJLENBQUNPLGVBQUwsR0FBdUJmLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBVyxJQUFYLEVBQWlCLEtBQUtaLFlBQXRCLENBQXZCO0FBQ0FJLElBQUFBLElBQUksQ0FBQ1MsYUFBTCxHQUFxQmpCLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBVyxJQUFYLEVBQWlCUixJQUFJLENBQUNDLFNBQXRCLENBQXJCOztBQUNBLGFBQVNTLFdBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pCLFdBQUtDLGNBQUw7QUFDQSxXQUFLQyxTQUFMLENBQWViLElBQUksQ0FBQ08sZUFBcEI7QUFDSDs7QUFDRCxhQUFTTyxTQUFULENBQW9CSCxLQUFwQixFQUEyQjtBQUN2QixXQUFLQyxjQUFMO0FBQ0EsV0FBS0MsU0FBTCxDQUFlYixJQUFJLENBQUNTLGFBQXBCO0FBQ0g7O0FBQ0QsU0FBS1AsSUFBTCxDQUFVYSxFQUFWLENBQWEsWUFBYixFQUEyQkwsV0FBM0IsRUFBd0MsS0FBS1IsSUFBN0M7QUFDQSxTQUFLQSxJQUFMLENBQVVhLEVBQVYsQ0FBYSxVQUFiLEVBQXlCRCxTQUF6QixFQUFvQyxLQUFLWixJQUF6QztBQUNBLFNBQUtBLElBQUwsQ0FBVWEsRUFBVixDQUFhLGFBQWIsRUFBNEJELFNBQTVCLEVBQXVDLEtBQUtaLElBQTVDO0FBQ0g7QUExQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcHJlc3NlZFNjYWxlOiAwLjksXHJcbiAgICAgICAgdHJhbnNEdXJhdGlvbjogMC4xLFxyXG4gICAgICAgIHNvdW5kIDogZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5pbml0U2NhbGUgPSB0aGlzLm5vZGUuc2NhbGU7XHJcbiAgICAgICAgc2VsZi5idXR0b24gPSBzZWxmLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHNlbGYuc2NhbGVEb3duQWN0aW9uID0gY2Muc2NhbGVUbygwLjA1LCB0aGlzLnByZXNzZWRTY2FsZSk7XHJcbiAgICAgICAgc2VsZi5zY2FsZVVwQWN0aW9uID0gY2Muc2NhbGVUbygwLjA1LCBzZWxmLmluaXRTY2FsZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gb25Ub3VjaERvd24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oc2VsZi5zY2FsZURvd25BY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBvblRvdWNoVXAgKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5ydW5BY3Rpb24oc2VsZi5zY2FsZVVwQWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaERvd24sIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIG9uVG91Y2hVcCwgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoY2FuY2VsJywgb25Ub3VjaFVwLCB0aGlzLm5vZGUpO1xyXG4gICAgfSxcclxufSk7Il19