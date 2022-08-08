
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/Ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da3c96DhmpDVoia4fePoHCi', 'Ball');
// scripts/roulette/Ball.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _cbOnCollisionStay: null
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this._cbOnCollisionStay) this._cbOnCollisionStay(parseInt(other.tag));
  },
  addEventOnCollisionEnter: function addEventOnCollisionEnter(cb) {
    this._cbOnCollisionStay = cb;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JvdWxldHRlL0JhbGwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfY2JPbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwicGFyc2VJbnQiLCJ0YWciLCJhZGRFdmVudE9uQ29sbGlzaW9uRW50ZXIiLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGtCQUFrQixFQUFFO0FBRFosR0FIUDtBQU1MQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBSSxLQUFLSCxrQkFBVCxFQUNJLEtBQUtBLGtCQUFMLENBQXdCSSxRQUFRLENBQUNGLEtBQUssQ0FBQ0csR0FBUCxDQUFoQztBQUNQLEdBVEk7QUFVTEMsRUFBQUEsd0JBVkssb0NBVW9CQyxFQVZwQixFQVV3QjtBQUN6QixTQUFLUCxrQkFBTCxHQUEwQk8sRUFBMUI7QUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9jYk9uQ29sbGlzaW9uU3RheTogbnVsbFxuICAgIH0sXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmICh0aGlzLl9jYk9uQ29sbGlzaW9uU3RheSlcbiAgICAgICAgICAgIHRoaXMuX2NiT25Db2xsaXNpb25TdGF5KHBhcnNlSW50KG90aGVyLnRhZykpO1xuICAgIH0sXG4gICAgYWRkRXZlbnRPbkNvbGxpc2lvbkVudGVyKGNiKSB7XG4gICAgICAgIHRoaXMuX2NiT25Db2xsaXNpb25TdGF5ID0gY2I7XG4gICAgfVxufSk7XG4iXX0=