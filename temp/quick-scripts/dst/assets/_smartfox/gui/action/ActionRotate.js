
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/action/ActionRotate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8201bPTvwFBGJDnQyU8Hphu', 'ActionRotate');
// _smartfox/gui/action/ActionRotate.js

"use strict";

var MOVE_TYPE = cc.Enum({
  MoveTop: 1,
  MoveBottom: 2,
  MoveLeft: 3,
  MoveRight: 4
});
cc.Class({
  "extends": cc.Component,
  properties: {
    timer: 4
  },
  onLoad: function onLoad() {
    var actionBy = cc.rotateBy(this.timer, 360);
    this.node.runAction(actionBy.repeatForever());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL2FjdGlvbi9BY3Rpb25Sb3RhdGUuanMiXSwibmFtZXMiOlsiTU9WRV9UWVBFIiwiY2MiLCJFbnVtIiwiTW92ZVRvcCIsIk1vdmVCb3R0b20iLCJNb3ZlTGVmdCIsIk1vdmVSaWdodCIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpbWVyIiwib25Mb2FkIiwiYWN0aW9uQnkiLCJyb3RhdGVCeSIsIm5vZGUiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDdEJDLEVBQUFBLE9BQU8sRUFBUyxDQURNO0FBRXRCQyxFQUFBQSxVQUFVLEVBQU0sQ0FGTTtBQUd0QkMsRUFBQUEsUUFBUSxFQUFRLENBSE07QUFJdEJDLEVBQUFBLFNBQVMsRUFBTztBQUpNLENBQVIsQ0FBbEI7QUFPQUwsRUFBRSxDQUFDTSxLQUFILENBQVM7QUFDTCxhQUFTTixFQUFFLENBQUNPLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBVztBQURSLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLSztBQUNOLFFBQUlDLFFBQVEsR0FBR1gsRUFBRSxDQUFDWSxRQUFILENBQVksS0FBS0gsS0FBakIsRUFBd0IsR0FBeEIsQ0FBZjtBQUNBLFNBQUtJLElBQUwsQ0FBVUMsU0FBVixDQUFvQkgsUUFBUSxDQUFDSSxhQUFULEVBQXBCO0FBQ0g7QUFSSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNT1ZFX1RZUEUgPSBjYy5FbnVtKHtcbiAgICBNb3ZlVG9wICAgICAgIDogMSxcbiAgICBNb3ZlQm90dG9tICAgIDogMixcbiAgICBNb3ZlTGVmdCAgICAgIDogMyxcbiAgICBNb3ZlUmlnaHQgICAgIDogNCxcbn0pO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgdGltZXIgICAgICAgICA6IDQsXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBsZXQgYWN0aW9uQnkgPSBjYy5yb3RhdGVCeSh0aGlzLnRpbWVyLCAzNjApO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbkJ5LnJlcGVhdEZvcmV2ZXIoKSk7XG4gICAgfVxufSk7XG4iXX0=