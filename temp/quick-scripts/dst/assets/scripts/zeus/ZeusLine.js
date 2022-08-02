
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b01cl0TKRCW7zQ71n2Uct5', 'ZeusLine');
// scripts/zeus/ZeusLine.js

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
    return 12;
  },
  getTotalLineLe: function getTotalLineLe() {
    return 13;
  },
  getTotalLine: function getTotalLine() {
    return 25;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcWmV1c0xpbmUuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZUxpbmUiLCJOb2RlIiwidHlwZUxpbmUiLCJpbml0Iiwib2JqIiwiS0NWIiwiZXZlbnRTZWxlY3RBbGwiLCJldmVudE9wZW4iLCJub2RlIiwiYWN0aXZlIiwiZXZlbnRDbG9zZSIsInRvdGFsIiwiZ2V0VG90YWxMaW5lU2VsZWN0IiwiYWRkTm90aWNlIiwiZXZlbnRTZWxlY3QiLCJldmVudCIsIm51bWJlclN0ciIsIm51bWJlckxpbmUiLCJwYXJzZUludCIsInNldE1hdGVyaWFsR3JheSIsInRhcmdldCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImlzTWF0ZXJpYWxHcmF5IiwiZGF0YSIsInVwZGF0ZVN0cmluZyIsImV2ZW50Qm9DaG9uIiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwibGluZSIsImluZGV4IiwidGhlbiIsInJlc3VsdCIsImV2ZW50U2VsZWN0Q2hhbiIsImV2ZW50U2VsZWN0TGUiLCJlIiwic2VsZWN0Iiwic2V0TnVtYmVyTGluZXMiLCJzZXROdW1iZXJTdGFrZSIsImdldFRvdGFsTGluZUNoYW4iLCJnZXRUb3RhbExpbmVMZSIsImdldFRvdGFsTGluZSIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBSUosRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGLEdBSFA7QUFPTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVNDLEdBQVQs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UUFBSWQsS0FBSyxHQUFHLEtBQUtDLGtCQUFMLEVBQVo7QUFDQSxTQUFLUCxHQUFMLENBQVNrQyxjQUFULENBQXdCNUIsS0FBeEI7QUFDQSxTQUFLTixHQUFMLENBQVNtQyxjQUFULENBQXdCN0IsS0FBeEI7QUFDSCxHQTFFSTtBQTJFTDhCLEVBQUFBLGdCQTNFSyw4QkEyRWM7QUFDZixXQUFPLEVBQVA7QUFDSCxHQTdFSTtBQThFTEMsRUFBQUEsY0E5RUssNEJBOEVZO0FBQ2IsV0FBTyxFQUFQO0FBQ0gsR0FoRkk7QUFpRkxDLEVBQUFBLFlBakZLLDBCQWlGVTtBQUNYLFdBQU8sRUFBUDtBQUNILEdBbkZJO0FBb0ZML0IsRUFBQUEsa0JBQWtCLEVBQUUsOEJBQVk7QUFDNUIsUUFBSUQsS0FBSyxHQUFHLENBQVo7O0FBQ0EsU0FBSyxJQUFJaUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFFLEtBQUtwQixJQUFMLENBQVVxQixNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxVQUFJLEtBQUtwQixJQUFMLENBQVVvQixDQUFWLENBQUosRUFDSWpDLEtBQUs7QUFDWjs7QUFDRCxXQUFPQSxLQUFQO0FBQ0g7QUEzRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbm9kZUxpbmU6ICAgY2MuTm9kZSxcclxuICAgICAgICB0eXBlTGluZTogMFxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgdGhpcy5LQ1YgPSBvYmo7XHJcbiAgICAgICAgdGhpcy5ldmVudFNlbGVjdEFsbCgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50T3BlbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCB0b3RhbCA9IHRoaXMuZ2V0VG90YWxMaW5lU2VsZWN0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgJiYgdG90YWwgPCAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuS0NWLmFkZE5vdGljZSgnQ2jhu41uIMOtdCBuaOG6pXQgMSBkw7JuZycpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50U2VsZWN0OiBmdW5jdGlvbihldmVudCwgbnVtYmVyU3RyKSB7XHJcbiAgICAgICAgbGV0IG51bWJlckxpbmUgPSBwYXJzZUludChudW1iZXJTdHIpO1xyXG4gICAgICAgIGhlbHBlci5zZXRNYXRlcmlhbEdyYXkoZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBoZWxwZXIuaXNNYXRlcmlhbEdyYXkoZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XHJcbiAgICAgICAgdGhpcy5kYXRhW251bWJlckxpbmVdID0gaGVscGVyLmlzTWF0ZXJpYWxHcmF5KGV2ZW50LnRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnR5cGVMaW5lID0gMztcclxuICAgIH0sXHJcbiAgICBldmVudEJvQ2hvbjogZnVuY3Rpb24oKXtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGVMaW5lLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGhlbHBlci5zZXRNYXRlcmlhbEdyYXkobGluZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUxpbmUgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBldmVudFNlbGVjdENoYW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubm9kZUxpbmUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGxpbmUsIGluZGV4KXtcclxuICAgICAgICAgICAgaGVscGVyLnNldE1hdGVyaWFsR3JheShsaW5lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpbmRleCUyID09MSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCUyICE9MTtcclxuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZUxpbmUgPSAyO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0cmluZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2VsZWN0TGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubm9kZUxpbmUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGxpbmUsIGluZGV4KXtcclxuICAgICAgICAgICAgaGVscGVyLnNldE1hdGVyaWFsR3JheShsaW5lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpbmRleCUyID09MCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCUyICE9IDA7XHJcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB0aGlzLnR5cGVMaW5lID0gMTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBldmVudFNlbGVjdEFsbDogZnVuY3Rpb24oZSwgc2VsZWN0KSB7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlTGluZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBoZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KGxpbmUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy50eXBlTGluZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU3RyaW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gdGhpcy5nZXRUb3RhbExpbmVTZWxlY3QoKTtcclxuICAgICAgICB0aGlzLktDVi5zZXROdW1iZXJMaW5lcyh0b3RhbCk7XHJcbiAgICAgICAgdGhpcy5LQ1Yuc2V0TnVtYmVyU3Rha2UodG90YWwpO1xyXG4gICAgfSxcclxuICAgIGdldFRvdGFsTGluZUNoYW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIDEyO1xyXG4gICAgfSxcclxuICAgIGdldFRvdGFsTGluZUxlKCkge1xyXG4gICAgICAgIHJldHVybiAxMztcclxuICAgIH0sXHJcbiAgICBnZXRUb3RhbExpbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIDI1O1xyXG4gICAgfSxcclxuICAgIGdldFRvdGFsTGluZVNlbGVjdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaT0xOyBpPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhW2ldKVxyXG4gICAgICAgICAgICAgICAgdG90YWwrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfVxyXG59KTtcclxuIl19