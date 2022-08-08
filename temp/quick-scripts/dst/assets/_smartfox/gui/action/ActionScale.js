
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/action/ActionScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2bb5sgqExIgrS2J5v3PKDt', 'ActionScale');
// _smartfox/gui/action/ActionScale.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onEnable: function onEnable() {
    this.node.scale = 0;
    this.node.runAction(cc.sequence(cc.scaleTo(0.2, 1.05), cc.delayTime(0.1), cc.scaleTo(0.1, 1)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL2FjdGlvbi9BY3Rpb25TY2FsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uRW5hYmxlIiwibm9kZSIsInNjYWxlIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJzY2FsZVRvIiwiZGVsYXlUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MQyxFQUFBQSxRQU5LLHNCQU1PO0FBQ1IsU0FBS0MsSUFBTCxDQUFVQyxLQUFWLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0QsSUFBTCxDQUFVRSxTQUFWLENBQ0lQLEVBQUUsQ0FBQ1EsUUFBSCxDQUNJUixFQUFFLENBQUNTLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLElBQWhCLENBREosRUFFSVQsRUFBRSxDQUFDVSxTQUFILENBQWEsR0FBYixDQUZKLEVBR0lWLEVBQUUsQ0FBQ1MsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FISixDQURKO0FBT0g7QUFmSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcbiAgICBvbkVuYWJsZSAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMS4wNSksXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSxcbn0pO1xuIl19