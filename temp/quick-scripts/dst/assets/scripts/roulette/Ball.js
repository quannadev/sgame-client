
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm91bGV0dGVcXEJhbGwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfY2JPbkNvbGxpc2lvblN0YXkiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwicGFyc2VJbnQiLCJ0YWciLCJhZGRFdmVudE9uQ29sbGlzaW9uRW50ZXIiLCJjYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGtCQUFrQixFQUFFO0FBRFosR0FIUDtBQU1MQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBSSxLQUFLSCxrQkFBVCxFQUNJLEtBQUtBLGtCQUFMLENBQXdCSSxRQUFRLENBQUNGLEtBQUssQ0FBQ0csR0FBUCxDQUFoQztBQUNQLEdBVEk7QUFVTEMsRUFBQUEsd0JBVkssb0NBVW9CQyxFQVZwQixFQVV3QjtBQUN6QixTQUFLUCxrQkFBTCxHQUEwQk8sRUFBMUI7QUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgX2NiT25Db2xsaXNpb25TdGF5OiBudWxsXHJcbiAgICB9LFxyXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NiT25Db2xsaXNpb25TdGF5KVxyXG4gICAgICAgICAgICB0aGlzLl9jYk9uQ29sbGlzaW9uU3RheShwYXJzZUludChvdGhlci50YWcpKTtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudE9uQ29sbGlzaW9uRW50ZXIoY2IpIHtcclxuICAgICAgICB0aGlzLl9jYk9uQ29sbGlzaW9uU3RheSA9IGNiO1xyXG4gICAgfVxyXG59KTtcclxuIl19