
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL01NLmpzIl0sIm5hbWVzIjpbIk1NIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJpbnN0Iiwib25Mb2FkIiwiZ2FtZU9iaiIsImZpbmQiLCJnYW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwibGFzdFpJbmRleCIsImN1cnJlbnRVSSIsInN0YXJ0Iiwic2NyZWVuIiwiZnVsbFNjcmVlbiIsImx0cmltIiwicyIsInJlcGxhY2UiLCJydHJpbSIsInRyaW0iLCJ3aW5kb3ciLCJtbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxFQUFFLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ2QsYUFBU0QsRUFBRSxDQUFDRSxTQURFO0FBRWRDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxJQUFJLEVBQUU7QUFERCxHQUZLO0FBS2Q7QUFDQUMsRUFBQUEsTUFOYyxvQkFNSjtBQUNOTixJQUFBQSxFQUFFLENBQUNLLElBQUgsR0FBVSxJQUFWO0FBQ0EsUUFBSUUsT0FBTyxHQUFHTixFQUFFLENBQUNPLElBQUgsQ0FBUSxJQUFSLENBQWQ7O0FBQ0EsUUFBSUQsT0FBSixFQUFhO0FBQ1ROLE1BQUFBLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxrQkFBUixDQUEyQkgsT0FBM0I7QUFDSDs7QUFDRE4sSUFBQUEsRUFBRSxDQUFDVSxVQUFILEdBQWdCLENBQWhCO0FBQ0FWLElBQUFBLEVBQUUsQ0FBQ1csU0FBSCxHQUFnQixFQUFoQjtBQUNILEdBZGE7QUFnQmRDLEVBQUFBLEtBaEJjLG1CQWdCTDtBQUNMWixJQUFBQSxFQUFFLENBQUNhLE1BQUgsQ0FBVUMsVUFBVjtBQUNILEdBbEJhO0FBbUJkO0FBQ0FDLEVBQUFBLEtBcEJjLGlCQW9CUEMsQ0FwQk8sRUFvQko7QUFDTixXQUFPQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxTQUFWLEVBQXFCLEVBQXJCLENBQVA7QUFDSCxHQXRCYTtBQXVCZDtBQUNBQyxFQUFBQSxLQXhCYyxpQkF3QlBGLENBeEJPLEVBd0JKO0FBQ04sV0FBT0EsQ0FBQyxDQUFDQyxPQUFGLENBQVUsU0FBVixFQUFxQixFQUFyQixDQUFQO0FBQ0gsR0ExQmE7QUEyQmQ7QUFDQUUsRUFBQUEsSUE1QmMsZ0JBNEJSSCxDQTVCUSxFQTRCTDtBQUNMLFdBQU9BLENBQUMsQ0FBQ0MsT0FBRixDQUFVLGdCQUFWLEVBQTRCLEVBQTVCLENBQVA7QUFDSDtBQTlCYSxDQUFULENBQVQ7QUFnQ0FHLE1BQU0sQ0FBQ0MsRUFBUCxHQUFZdEIsRUFBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1NID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBzdGF0aWNzOiB7XG4gICAgICAgIGluc3Q6IG51bGwsXG4gICAgfSxcbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBNTS5pbnN0ID0gdGhpcztcbiAgICAgICAgbGV0IGdhbWVPYmogPSBjYy5maW5kKCdNTScpXG4gICAgICAgIGlmIChnYW1lT2JqKSB7XG4gICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShnYW1lT2JqKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5sYXN0WkluZGV4ID0gMDtcbiAgICAgICAgY2MuY3VycmVudFVJICA9IFwiXCI7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2Muc2NyZWVuLmZ1bGxTY3JlZW4oKTtcbiAgICB9LFxuICAgIC8v5Y675bem56m65qC8O1xuICAgIGx0cmltIChzKSB7XG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoLyheXFxzKikvZywgXCJcIik7XG4gICAgfSxcbiAgICAvL+WOu+WPs+epuuagvDtcbiAgICBydHJpbSAocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8oXFxzKiQpL2csIFwiXCIpO1xuICAgIH0sXG4gICAgLy/ljrvlt6blj7PnqbrmoLw7XG4gICAgdHJpbSAocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgXCJcIik7XG4gICAgfVxufSk7XG53aW5kb3cubW0gPSBNTTtcbiJdfQ==