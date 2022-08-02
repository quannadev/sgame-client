
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/ItemRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2804danCAZFh5fUBwb8be85', 'ItemRoom');
// scripts/components/ItemRoom.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    Id: cc.Label,
    Bet: cc.Label,
    Players: cc.Label
  },
  init: function init(data) {
    this.Bet.string = Utils.formatCurrency(data.group_vars.bet_chip);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tcG9uZW50c1xcSXRlbVJvb20uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsIklkIiwiTGFiZWwiLCJCZXQiLCJQbGF5ZXJzIiwiaW5pdCIsImRhdGEiLCJzdHJpbmciLCJVdGlscyIsImZvcm1hdEN1cnJlbmN5IiwiZ3JvdXBfdmFycyIsImJldF9jaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFSixFQUFFLENBQUNLLEtBREM7QUFFUkMsSUFBQUEsR0FBRyxFQUFFTixFQUFFLENBQUNLLEtBRkE7QUFHUkUsSUFBQUEsT0FBTyxFQUFFUCxFQUFFLENBQUNLO0FBSEosR0FIUDtBQVFMRyxFQUFBQSxJQVJLLGdCQVFBQyxJQVJBLEVBUUs7QUFDTixTQUFLSCxHQUFMLENBQVNJLE1BQVQsR0FBa0JDLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkgsSUFBSSxDQUFDSSxVQUFMLENBQWdCQyxRQUFyQyxDQUFsQjtBQUNIO0FBVkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBJZDogY2MuTGFiZWwsXHJcbiAgICAgICAgQmV0OiBjYy5MYWJlbCxcclxuICAgICAgICBQbGF5ZXJzOiBjYy5MYWJlbFxyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YSl7XHJcbiAgICAgICAgdGhpcy5CZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q3VycmVuY3koZGF0YS5ncm91cF92YXJzLmJldF9jaGlwKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==