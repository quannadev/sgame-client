
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2da47wmmcRFHaVnPnrjp8Gh', 'VampireLine');
// scripts/vampire/VampireLine.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVmFtcGlyZUxpbmUuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZUxpbmUiLCJOb2RlIiwidHlwZUxpbmUiLCJpbml0Iiwib2JqIiwiS0NWIiwiZXZlbnRTZWxlY3RBbGwiLCJldmVudE9wZW4iLCJub2RlIiwiYWN0aXZlIiwiZXZlbnRDbG9zZSIsInRvdGFsIiwiZ2V0VG90YWxMaW5lU2VsZWN0IiwiYWRkTm90aWNlIiwiZXZlbnRTZWxlY3QiLCJldmVudCIsIm51bWJlclN0ciIsIm51bWJlckxpbmUiLCJwYXJzZUludCIsInNldE1hdGVyaWFsR3JheSIsInRhcmdldCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImlzTWF0ZXJpYWxHcmF5IiwiZGF0YSIsInVwZGF0ZVN0cmluZyIsImV2ZW50Qm9DaG9uIiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwibGluZSIsImluZGV4IiwidGhlbiIsInJlc3VsdCIsImV2ZW50U2VsZWN0Q2hhbiIsImV2ZW50U2VsZWN0TGUiLCJlIiwic2VsZWN0Iiwic2V0TnVtYmVyTGluZXMiLCJzZXROdW1iZXJTdGFrZSIsImdldFRvdGFsTGluZUNoYW4iLCJnZXRUb3RhbExpbmVMZSIsImdldFRvdGFsTGluZSIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFFQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBSUosRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFFBQVEsRUFBRTtBQUZGLEdBSFA7QUFPTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVNDLEdB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dEIsUUFBSWQsS0FBSyxHQUFHLEtBQUtDLGtCQUFMLEVBQVo7QUFDQSxTQUFLUCxHQUFMLENBQVNrQyxjQUFULENBQXdCNUIsS0FBeEI7QUFDQSxTQUFLTixHQUFMLENBQVNtQyxjQUFULENBQXdCN0IsS0FBeEI7QUFDSCxHQTFFSTtBQTJFTDhCLEVBQUFBLGdCQTNFSyw4QkEyRWM7QUFDZixXQUFPLEVBQVA7QUFDSCxHQTdFSTtBQThFTEMsRUFBQUEsY0E5RUssNEJBOEVZO0FBQ2IsV0FBTyxFQUFQO0FBQ0gsR0FoRkk7QUFpRkxDLEVBQUFBLFlBakZLLDBCQWlGVTtBQUNYLFdBQU8sRUFBUDtBQUNILEdBbkZJO0FBb0ZML0IsRUFBQUEsa0JBQWtCLEVBQUUsOEJBQVk7QUFDNUIsUUFBSUQsS0FBSyxHQUFHLENBQVo7O0FBQ0EsU0FBSyxJQUFJaUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFFLEtBQUtwQixJQUFMLENBQVVxQixNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxVQUFJLEtBQUtwQixJQUFMLENBQVVvQixDQUFWLENBQUosRUFDSWpDLEtBQUs7QUFDWjs7QUFDRCxXQUFPQSxLQUFQO0FBQ0g7QUEzRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG5vZGVMaW5lOiAgIGNjLk5vZGUsXG4gICAgICAgIHR5cGVMaW5lOiAwXG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xuICAgICAgICB0aGlzLktDViA9IG9iajtcbiAgICAgICAgdGhpcy5ldmVudFNlbGVjdEFsbCgpO1xuICAgIH0sXG4gICAgZXZlbnRPcGVuOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGV2ZW50Q2xvc2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCB0b3RhbCA9IHRoaXMuZ2V0VG90YWxMaW5lU2VsZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlICYmIHRvdGFsIDwgMSkge1xuICAgICAgICAgICAgdGhpcy5LQ1YuYWRkTm90aWNlKCdDaOG7jW4gw610IG5o4bqldCAxIGTDsm5nJyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudFNlbGVjdDogZnVuY3Rpb24oZXZlbnQsIG51bWJlclN0cikge1xuICAgICAgICBsZXQgbnVtYmVyTGluZSA9IHBhcnNlSW50KG51bWJlclN0cik7XG4gICAgICAgIGhlbHBlci5zZXRNYXRlcmlhbEdyYXkoZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBoZWxwZXIuaXNNYXRlcmlhbEdyYXkoZXZlbnQudGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpKSk7XG4gICAgICAgIHRoaXMuZGF0YVtudW1iZXJMaW5lXSA9IGhlbHBlci5pc01hdGVyaWFsR3JheShldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0cmluZygpO1xuICAgICAgICB0aGlzLnR5cGVMaW5lID0gMztcbiAgICB9LFxuICAgIGV2ZW50Qm9DaG9uOiBmdW5jdGlvbigpe1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGVMaW5lLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lLCBpbmRleCl7XG4gICAgICAgICAgICBoZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KGxpbmUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy50eXBlTGluZSA9IC0xO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBldmVudFNlbGVjdENoYW46IGZ1bmN0aW9uKCkge1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGVMaW5lLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lLCBpbmRleCl7XG4gICAgICAgICAgICBoZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KGxpbmUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIGluZGV4JTIgPT0xKTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCUyICE9MTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3VsdDtcbiAgICAgICAgICAgIHRoaXMudHlwZUxpbmUgPSAyO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBldmVudFNlbGVjdExlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlTGluZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xuICAgICAgICAgICAgaGVscGVyLnNldE1hdGVyaWFsR3JheShsaW5lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpbmRleCUyID09MCk7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXglMiAhPSAwO1xuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy50eXBlTGluZSA9IDE7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0cmluZygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGV2ZW50U2VsZWN0QWxsOiBmdW5jdGlvbihlLCBzZWxlY3QpIHtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlTGluZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xuICAgICAgICAgICAgaGVscGVyLnNldE1hdGVyaWFsR3JheShsaW5lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMudHlwZUxpbmUgPSAwO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJpbmcoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9LFxuICAgIHVwZGF0ZVN0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdG90YWwgPSB0aGlzLmdldFRvdGFsTGluZVNlbGVjdCgpO1xuICAgICAgICB0aGlzLktDVi5zZXROdW1iZXJMaW5lcyh0b3RhbCk7XG4gICAgICAgIHRoaXMuS0NWLnNldE51bWJlclN0YWtlKHRvdGFsKTtcbiAgICB9LFxuICAgIGdldFRvdGFsTGluZUNoYW4oKSB7XG4gICAgICAgIHJldHVybiAxMjtcbiAgICB9LFxuICAgIGdldFRvdGFsTGluZUxlKCkge1xuICAgICAgICByZXR1cm4gMTM7XG4gICAgfSxcbiAgICBnZXRUb3RhbExpbmUoKSB7XG4gICAgICAgIHJldHVybiAyNTtcbiAgICB9LFxuICAgIGdldFRvdGFsTGluZVNlbGVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBmb3IgKGxldCBpPTE7IGk8IHRoaXMuZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhW2ldKVxuICAgICAgICAgICAgICAgIHRvdGFsKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH1cbn0pO1xuIl19