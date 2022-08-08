
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd89ceMvFbZFzJv37PqjxViB', 'SinbadLine');
// scripts/sinbad/SinbadLine.js

"use strict";

var helper = require('Helper');

cc.Class({
  "extends": cc.Component,
  properties: {
    nodeLine: cc.Node,
    typeLine: 0
  },
  init: function init(obj) {
    this.KCV = obj;
    this.eventSelectAll();
  },
  eventOpen: function eventOpen() {
    this.node.active = true;
  },
  eventClose: function eventClose() {
    var total = this.getTotalLineSelect();

    if (this.node.active && total < 1) {
      this.KCV.addNotice('Chọn ít nhất 1 dòng');
    } else {
      this.node.active = false;
    }
  },
  eventSelect: function eventSelect(event, numberStr) {
    var numberLine = parseInt(numberStr);
    helper.setMaterialGray(event.target.getComponent(cc.Sprite), helper.isMaterialGray(event.target.getComponent(cc.Sprite)));
    this.data[numberLine] = helper.isMaterialGray(event.target.getComponent(cc.Sprite));
    this.updateString();
    this.typeLine = 3;
  },
  eventBoChon: function eventBoChon() {
    var _this = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), true);
      return false;
    })).then(function (result) {
      _this.data = result;
      _this.typeLine = -1;

      _this.updateString();
    });
  },
  eventSelectChan: function eventSelectChan() {
    var _this2 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 1);
      return index % 2 != 1;
    })).then(function (result) {
      _this2.data = result;
      _this2.typeLine = 2;

      _this2.updateString();
    });
  },
  eventSelectLe: function eventSelectLe() {
    var _this3 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 0);
      return index % 2 != 0;
    })).then(function (result) {
      _this3.data = result;
      _this3.typeLine = 1;

      _this3.updateString();
    });
  },
  eventSelectAll: function eventSelectAll(e, select) {
    var _this4 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), false);
      return true;
    })).then(function (result) {
      _this4.typeLine = 0;
      _this4.data = result;

      _this4.updateString();
    });
  },
  updateString: function updateString() {
    var total = this.getTotalLineSelect();
    this.KCV.setNumberLines(total);
    this.KCV.setNumberStake(total);
  },
  getTotalLineChan: function getTotalLineChan() {
    return 10;
  },
  getTotalLineLe: function getTotalLineLe() {
    return 10;
  },
  getTotalLine: function getTotalLine() {
    return 20;
  },
  getTotalLineSelect: function getTotalLineSelect() {
    var total = 0;

    for (var i = 1; i < this.data.length; i++) {
      if (this.data[i]) total++;
    }

    return total;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRMaW5lLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5vZGVMaW5lIiwiTm9kZSIsInR5cGVMaW5lIiwiaW5pdCIsIm9iaiIsIktDViIsImV2ZW50U2VsZWN0QWxsIiwiZXZlbnRPcGVuIiwibm9kZSIsImFjdGl2ZSIsImV2ZW50Q2xvc2UiLCJ0b3RhbCIsImdldFRvdGFsTGluZVNlbGVjdCIsImFkZE5vdGljZSIsImV2ZW50U2VsZWN0IiwiZXZlbnQiLCJudW1iZXJTdHIiLCJudW1iZXJMaW5lIiwicGFyc2VJbnQiLCJzZXRNYXRlcmlhbEdyYXkiLCJ0YXJnZXQiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJpc01hdGVyaWFsR3JheSIsImRhdGEiLCJ1cGRhdGVTdHJpbmciLCJldmVudEJvQ2hvbiIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsImxpbmUiLCJpbmRleCIsInRoZW4iLCJyZXN1bHQiLCJldmVudFNlbGVjdENoYW4iLCJldmVudFNlbGVjdExlIiwiZSIsInNlbGVjdCIsInNldE51bWJlckxpbmVzIiwic2V0TnVtYmVyU3Rha2UiLCJnZXRUb3RhbExpbmVDaGFuIiwiZ2V0VG90YWxMaW5lTGUiLCJnZXRUb3RhbExpbmUiLCJpIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBRUFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUlKLEVBQUUsQ0FBQ0ssSUFEUDtBQUVSQyxJQUFBQSxRQUFRLEVBQUU7QUFGRixHQUhQO0FBT0xDLEVBQUFBLElBQUksRUFBRSxjQUFTQyxHQUFU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LFFBQUlkLEtBQUssR0FBRyxLQUFLQyxrQkFBTCxFQUFaO0FBQ0EsU0FBS1AsR0FBTCxDQUFTa0MsY0FBVCxDQUF3QjVCLEtBQXhCO0FBQ0EsU0FBS04sR0FBTCxDQUFTbUMsY0FBVCxDQUF3QjdCLEtBQXhCO0FBQ0gsR0ExRUk7QUEyRUw4QixFQUFBQSxnQkEzRUssOEJBMkVjO0FBQ2YsV0FBTyxFQUFQO0FBQ0gsR0E3RUk7QUE4RUxDLEVBQUFBLGNBOUVLLDRCQThFWTtBQUNiLFdBQU8sRUFBUDtBQUNILEdBaEZJO0FBaUZMQyxFQUFBQSxZQWpGSywwQkFpRlU7QUFDWCxXQUFPLEVBQVA7QUFDSCxHQW5GSTtBQW9GTC9CLEVBQUFBLGtCQUFrQixFQUFFLDhCQUFZO0FBQzVCLFFBQUlELEtBQUssR0FBRyxDQUFaOztBQUNBLFNBQUssSUFBSWlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRSxLQUFLcEIsSUFBTCxDQUFVcUIsTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsVUFBSSxLQUFLcEIsSUFBTCxDQUFVb0IsQ0FBVixDQUFKLEVBQ0lqQyxLQUFLO0FBQ1o7O0FBQ0QsV0FBT0EsS0FBUDtBQUNIO0FBM0ZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBub2RlTGluZTogICBjYy5Ob2RlLFxuICAgICAgICB0eXBlTGluZTogMFxuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24ob2JqKXtcbiAgICAgICAgdGhpcy5LQ1YgPSBvYmo7XG4gICAgICAgIHRoaXMuZXZlbnRTZWxlY3RBbGwoKTtcbiAgICB9LFxuICAgIGV2ZW50T3BlbjogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBldmVudENsb3NlOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLmdldFRvdGFsTGluZVNlbGVjdCgpO1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSAmJiB0b3RhbCA8IDEpIHtcbiAgICAgICAgICAgIHRoaXMuS0NWLmFkZE5vdGljZSgnQ2jhu41uIMOtdCBuaOG6pXQgMSBkw7JuZycpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRTZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50LCBudW1iZXJTdHIpIHtcbiAgICAgICAgbGV0IG51bWJlckxpbmUgPSBwYXJzZUludChudW1iZXJTdHIpO1xuICAgICAgICBoZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KGV2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgaGVscGVyLmlzTWF0ZXJpYWxHcmF5KGV2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkpO1xuICAgICAgICB0aGlzLmRhdGFbbnVtYmVyTGluZV0gPSBoZWxwZXIuaXNNYXRlcmlhbEdyYXkoZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcbiAgICAgICAgdGhpcy50eXBlTGluZSA9IDM7XG4gICAgfSxcbiAgICBldmVudEJvQ2hvbjogZnVuY3Rpb24oKXtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlTGluZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xuICAgICAgICAgICAgaGVscGVyLnNldE1hdGVyaWFsR3JheShsaW5lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMudHlwZUxpbmUgPSAtMTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZXZlbnRTZWxlY3RDaGFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlTGluZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xuICAgICAgICAgICAgaGVscGVyLnNldE1hdGVyaWFsR3JheShsaW5lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpbmRleCUyID09MSk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXglMiAhPTE7XG4gICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLnR5cGVMaW5lID0gMjtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZXZlbnRTZWxlY3RMZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubm9kZUxpbmUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGxpbmUsIGluZGV4KXtcbiAgICAgICAgICAgIGhlbHBlci5zZXRNYXRlcmlhbEdyYXkobGluZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgaW5kZXglMiA9PTApO1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4JTIgIT0gMDtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMudHlwZUxpbmUgPSAxO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBldmVudFNlbGVjdEFsbDogZnVuY3Rpb24oZSwgc2VsZWN0KSB7XG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubm9kZUxpbmUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGxpbmUsIGluZGV4KXtcbiAgICAgICAgICAgIGhlbHBlci5zZXRNYXRlcmlhbEdyYXkobGluZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLnR5cGVMaW5lID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RyaW5nKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSxcbiAgICB1cGRhdGVTdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5nZXRUb3RhbExpbmVTZWxlY3QoKTtcbiAgICAgICAgdGhpcy5LQ1Yuc2V0TnVtYmVyTGluZXModG90YWwpO1xuICAgICAgICB0aGlzLktDVi5zZXROdW1iZXJTdGFrZSh0b3RhbCk7XG4gICAgfSxcbiAgICBnZXRUb3RhbExpbmVDaGFuKCkge1xuICAgICAgICByZXR1cm4gMTA7XG4gICAgfSxcbiAgICBnZXRUb3RhbExpbmVMZSgpIHtcbiAgICAgICAgcmV0dXJuIDEwO1xuICAgIH0sXG4gICAgZ2V0VG90YWxMaW5lKCkge1xuICAgICAgICByZXR1cm4gMjA7XG4gICAgfSxcbiAgICBnZXRUb3RhbExpbmVTZWxlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgZm9yIChsZXQgaT0xOyBpPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVtpXSlcbiAgICAgICAgICAgICAgICB0b3RhbCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9XG59KTtcbiJdfQ==