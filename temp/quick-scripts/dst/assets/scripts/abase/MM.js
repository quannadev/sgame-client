
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/MM.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca36bPSSa5MY5SgRP7rl+iX', 'MM');
// scripts/abase/MM.js

"use strict";

var MM = cc.Class({
  "extends": cc.Component,
  statics: {
    inst: null
  },
  // use this for initialization
  onLoad: function onLoad() {
    MM.inst = this;
    var gameObj = cc.find('MM');

    if (gameObj) {
      cc.game.addPersistRootNode(gameObj);
    }

    cc.lastZIndex = 0;
    cc.currentUI = "";
  },
  start: function start() {
    cc.screen.fullScreen();
  },
  //去左空格;
  ltrim: function ltrim(s) {
    return s.replace(/(^\s*)/g, "");
  },
  //去右空格;
  rtrim: function rtrim(s) {
    return s.replace(/(\s*$)/g, "");
  },
  //去左右空格;
  trim: function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }
});
window.mm = MM;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXE1NLmpzIl0sIm5hbWVzIjpbIk1NIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJpbnN0Iiwib25Mb2FkIiwiZ2FtZU9iaiIsImZpbmQiLCJnYW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibGFzdFpJbmRleCIsImN1cnJlbnRVSSIsInN0YXJ0Iiwic2NyZWVuIiwiZnVsbFNjcmVlbiIsImx0cmltIiwicyIsInJlcGxhY2UiLCJydHJpbSIsInRyaW0iLCJ3aW5kb3ciLCJtbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxFQUFFLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2QsYUFBU0QsRUFBRSxDQUFDRSxTQURFO0FBRWRDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUU7QUFERCxHQUZLO0FBS2Q7QUFDQUMsRUFBQUEsTUFOYyxvQkFNSjtBQUNOTixJQUFBQSxFQUFFLENBQUNLLElBQUgsR0FBVSxJQUFWO0FBQ0EsUUFBSUUsT0FBTyxHQUFHTixFQUFFLENBQUNPLElBQUgsQ0FBUSxJQUFSLENBQWQ7O0FBQ0EsUUFBSUQsT0FBSixFQUFhO0FBQ1ROLE1BQUFBLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxrQkFBUixDQUEyQkgsT0FBM0I7QUFDSDs7QUFDRE4sSUFBQUEsRUFBRSxDQUFDVSxVQUFILEdBQWdCLENBQWhCO0FBQ0FWLElBQUFBLEVBQUUsQ0FBQ1csU0FBSCxHQUFnQixFQUFoQjtBQUNILEdBZGE7QUFnQmRDLEVBQUFBLEtBaEJjLG1CQWdCTDtBQUNMWixJQUFBQSxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsVUFBVjtBQUNILEdBbEJhO0FBbUJkO0FBQ0FDLEVBQUFBLEtBcEJjLGlCQW9CUEMsQ0FwQk8sRUFvQko7QUFDTixXQUFPQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxTQUFWLEVBQXFCLEVBQXJCLENBQVA7QUFDSCxHQXRCYTtBQXVCZDtBQUNBQyxFQUFBQSxLQXhCYyxpQkF3QlBGLENBeEJPLEVBd0JKO0FBQ04sV0FBT0EsQ0FBQyxDQUFDQyxPQUFGLENBQVUsU0FBVixFQUFxQixFQUFyQixDQUFQO0FBQ0gsR0ExQmE7QUEyQmQ7QUFDQUUsRUFBQUEsSUE1QmMsZ0JBNEJSSCxDQTVCUSxFQTRCTDtBQUNMLFdBQU9BLENBQUMsQ0FBQ0MsT0FBRixDQUFVLGdCQUFWLEVBQTRCLEVBQTVCLENBQVA7QUFDSDtBQTlCYSxDQUFULENBQVQ7QUFnQ0FHLE1BQU0sQ0FBQ0MsRUFBUCxHQUFZdEIsRUFBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1NID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgc3RhdGljczoge1xyXG4gICAgICAgIGluc3Q6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIE1NLmluc3QgPSB0aGlzO1xyXG4gICAgICAgIGxldCBnYW1lT2JqID0gY2MuZmluZCgnTU0nKVxyXG4gICAgICAgIGlmIChnYW1lT2JqKSB7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuYWRkUGVyc2lzdFJvb3ROb2RlKGdhbWVPYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sYXN0WkluZGV4ID0gMDtcclxuICAgICAgICBjYy5jdXJyZW50VUkgID0gXCJcIjtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNjLnNjcmVlbi5mdWxsU2NyZWVuKCk7XHJcbiAgICB9LFxyXG4gICAgLy/ljrvlt6bnqbrmoLw7XHJcbiAgICBsdHJpbSAocykge1xyXG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoLyheXFxzKikvZywgXCJcIik7XHJcbiAgICB9LFxyXG4gICAgLy/ljrvlj7PnqbrmoLw7XHJcbiAgICBydHJpbSAocykge1xyXG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoLyhcXHMqJCkvZywgXCJcIik7XHJcbiAgICB9LFxyXG4gICAgLy/ljrvlt6blj7PnqbrmoLw7XHJcbiAgICB0cmltIChzKSB7XHJcbiAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xyXG4gICAgfVxyXG59KTtcclxud2luZG93Lm1tID0gTU07XHJcbiJdfQ==