
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/action/ActionRotateJerk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '763396pf7hMnaO8rEr45Ez2', 'ActionRotateJerk');
// _smartfox/gui/action/ActionRotateJerk.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _seq2: null
  },
  onLoad: function onLoad() {
    var seq = cc.sequence(cc.rotateTo(0.5, -30), cc.rotateTo(0.5, 30));
    this._seq2 = seq.clone().repeatForever();
  },
  runActionRotateJerk: function runActionRotateJerk(nodeRun) {
    nodeRun.runAction(cc.sequence(this._seq2, cc.delayTime(1)).bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxndWlcXGFjdGlvblxcQWN0aW9uUm90YXRlSmVyay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9zZXEyIiwib25Mb2FkIiwic2VxIiwic2VxdWVuY2UiLCJyb3RhdGVUbyIsImNsb25lIiwicmVwZWF0Rm9yZXZlciIsInJ1bkFjdGlvblJvdGF0ZUplcmsiLCJub2RlUnVuIiwicnVuQWN0aW9uIiwiZGVsYXlUaW1lIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQURDLEdBRlA7QUFLTEMsRUFBQUEsTUFMSyxvQkFLSztBQUNOLFFBQU1DLEdBQUcsR0FBR04sRUFBRSxDQUFDTyxRQUFILENBQ1JQLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZLEdBQVosRUFBaUIsQ0FBQyxFQUFsQixDQURRLEVBRVJSLEVBQUUsQ0FBQ1EsUUFBSCxDQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FGUSxDQUFaO0FBSUEsU0FBS0osS0FBTCxHQUFhRSxHQUFHLENBQUNHLEtBQUosR0FBWUMsYUFBWixFQUFiO0FBQ0gsR0FYSTtBQVlMQyxFQUFBQSxtQkFaSywrQkFZZUMsT0FaZixFQVl3QjtBQUN6QkEsSUFBQUEsT0FBTyxDQUFDQyxTQUFSLENBQ0liLEVBQUUsQ0FBQ08sUUFBSCxDQUNJLEtBQUtILEtBRFQsRUFFSUosRUFBRSxDQUFDYyxTQUFILENBQWEsQ0FBYixDQUZKLEVBR0VDLElBSEYsQ0FHTyxJQUhQLENBREo7QUFLSDtBQWxCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgX3NlcTI6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjb25zdCBzZXEgPSBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Mucm90YXRlVG8oMC41LCAtMzApLFxyXG4gICAgICAgICAgICBjYy5yb3RhdGVUbygwLjUsIDMwKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5fc2VxMiA9IHNlcS5jbG9uZSgpLnJlcGVhdEZvcmV2ZXIoKTtcclxuICAgIH0sXHJcbiAgICBydW5BY3Rpb25Sb3RhdGVKZXJrKG5vZGVSdW4pIHtcclxuICAgICAgICBub2RlUnVuLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXEyLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpXHJcbiAgICAgICAgICAgICkuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=