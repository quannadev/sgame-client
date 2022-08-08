
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/multiResolution/ScaleContent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9dceepbedCB551dgA7N8pN', 'ScaleContent');
// _smartfox/gui/multiResolution/ScaleContent.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _class;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *                  ___====-_  _-====___
 *            _--^^^#####//      \\#####^^^--_
 *         _-^##########// (    ) \\##########^-_
 *        -############//  |\^^/|  \\############-
 *      _/############//   (@::@)   \\############\_
 *     /#############((     \\//     ))#############\
 *    -###############\\    (oo)    //###############-
 *   -#################\\  / VV \  //#################-
 *  -###################\\/      \//###################-
 * _#/|##########/\######(   /\   )######/\##########|\#_
 * |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 * `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *    `   `  `      `   / | |  | | \   '      '  '   '
 *                     (  | |  | |  )
 *                    __\ | |  | | /__
 *                   (vvv(VVV)(VVV)vvv)
 *                        神兽保佑
 *                       代码无BUG!
 */
var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
/**
 * @classdesc  游戏主内容节点自适应所有分辨率的脚本
 * @author caizhitao
 * @version 0.1.0
 * @since 2018-11-30
 * @description
 *
 * 用法：
 *      1. 将本组件挂载在节点上即可
 *
 * 适配原理：
 *      1. 将游戏主内容节点的宽高调整为画布的大小，以进行Size适配
 *
 * 注意：
 *      1. 挂载这个脚本的节点不能加入Widget组件，不然这个适配是没有效果的
 *      2. 目前只支持 SHOW_ALL 模式下的背景缩放适配，不支持其他模式的背景缩放
 *
 *  @example
 ```
 // e.g.
 // 代码中设置 SHOW_ALL 模式的参考代码
 cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);

 // 或者 Canvas 组件中，同时勾选 Fit Width 和 Fit Height
 ```
 */

var ContentAdapter = ccclass(_class = /*#__PURE__*/function (_cc$Component) {
  _inheritsLoose(ContentAdapter, _cc$Component);

  function ContentAdapter() {
    return _cc$Component.apply(this, arguments) || this;
  }

  var _proto = ContentAdapter.prototype;

  _proto.onLoad = function onLoad() {
    // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
    var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
    var realWidth = this.node.width * srcScaleForShowAll;
    var realHeight = this.node.height * srcScaleForShowAll; // 2. 基于第一步的数据，再做节点宽高适配

    this.node.width = this.node.width * (cc.view.getCanvasSize().width / realWidth);
    this.node.height = this.node.height * (cc.view.getCanvasSize().height / realHeight); // // 3. 因为本节点的宽高发生了改变，所以要手动更新剩下子节点的宽高

    this._updateAllChildNodeWidget(this.node);
  };

  _proto._updateAllChildNodeWidget = function _updateAllChildNodeWidget(parentNode) {
    var _this = this;

    if (parentNode == null) {
      return;
    }

    var widget = parentNode.getComponent(cc.Widget);

    if (widget != null) {
      widget.updateAlignment();
    }

    if (parentNode.childrenCount === 0) {
      return;
    }

    parentNode.children.forEach(function (childNode) {
      _this._updateAllChildNodeWidget(childNode);
    });
  };

  return ContentAdapter;
}(cc.Component)) || _class;

exports["default"] = ContentAdapter;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL211bHRpUmVzb2x1dGlvbi9TY2FsZUNvbnRlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ29udGVudEFkYXB0ZXIiLCJvbkxvYWQiLCJzcmNTY2FsZUZvclNob3dBbGwiLCJNYXRoIiwibWluIiwidmlldyIsImdldENhbnZhc1NpemUiLCJ3aWR0aCIsIm5vZGUiLCJoZWlnaHQiLCJyZWFsV2lkdGgiLCJyZWFsSGVpZ2h0IiwiX3VwZGF0ZUFsbENoaWxkTm9kZVdpZGdldCIsInBhcmVudE5vZGUiLCJ3aWRnZXQiLCJnZXRDb21wb25lbnQiLCJXaWRnZXQiLCJ1cGRhdGVBbGlnbm1lbnQiLCJjaGlsZHJlbkNvdW50IiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBOEJBLEVBQUUsQ0FBQ0MsVUFBakM7QUFBQSxJQUFRQyxPQUFSLGtCQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFFBQWpCLGtCQUFpQkEsUUFBakI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkMsaUJBRHBCRjs7Ozs7Ozs7O1NBRUdHLFNBQUEsa0JBQVM7QUFFTDtBQUNBLFFBQUlDLGtCQUFrQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsRUFBRSxDQUFDUyxJQUFILENBQVFDLGFBQVIsR0FBd0JDLEtBQXhCLEdBQWdDLEtBQUtDLElBQUwsQ0FBVUQsS0FBbkQsRUFBMERYLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxhQUFSLEdBQXdCRyxNQUF4QixHQUFpQyxLQUFLRCxJQUFMLENBQVVDLE1BQXJHLENBQXpCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtGLElBQUwsQ0FBVUQsS0FBVixHQUFrQkwsa0JBQWxDO0FBQ0EsUUFBSVMsVUFBVSxHQUFHLEtBQUtILElBQUwsQ0FBVUMsTUFBVixHQUFtQlAsa0JBQXBDLENBTEssQ0FPTDs7QUFDQSxTQUFLTSxJQUFMLENBQVVELEtBQVYsR0FBa0IsS0FBS0MsSUFBTCxDQUFVRCxLQUFWLElBQW1CWCxFQUFFLENBQUNTLElBQUgsQ0FBUUMsYUFBUixHQUF3QkMsS0FBeEIsR0FBZ0NHLFNBQW5ELENBQWxCO0FBQ0EsU0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQUtELElBQUwsQ0FBVUMsTUFBVixJQUFvQmIsRUFBRSxDQUFDUyxJQUFILENBQVFDLGFBQVIsR0FBd0JHLE1BQXhCLEdBQWlDRSxVQUFyRCxDQUFuQixDQVRLLENBV0w7O0FBQ0EsU0FBS0MseUJBQUwsQ0FBK0IsS0FBS0osSUFBcEM7QUFDSDs7U0FFREksNEJBQUEsbUNBQTBCQyxVQUExQixFQUFzQztBQUFBOztBQUNsQyxRQUFJQSxVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDcEI7QUFDSDs7QUFDRCxRQUFJQyxNQUFNLEdBQUdELFVBQVUsQ0FBQ0UsWUFBWCxDQUF3Qm5CLEVBQUUsQ0FBQ29CLE1BQTNCLENBQWI7O0FBQ0EsUUFBSUYsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDaEJBLE1BQUFBLE1BQU0sQ0FBQ0csZUFBUDtBQUNIOztBQUNELFFBQUlKLFVBQVUsQ0FBQ0ssYUFBWCxLQUE2QixDQUFqQyxFQUFvQztBQUNoQztBQUNIOztBQUNETCxJQUFBQSxVQUFVLENBQUNNLFFBQVgsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQUNDLFNBQUQsRUFBZTtBQUN2QyxNQUFBLEtBQUksQ0FBQ1QseUJBQUwsQ0FBK0JTLFNBQS9CO0FBQ0gsS0FGRDtBQUdIOzs7RUE5QnVDekIsRUFBRSxDQUFDMEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogICAgICAgICAgICAgICAgICBfX189PT09LV8gIF8tPT09PV9fX1xuICogICAgICAgICAgICBfLS1eXl4jIyMjIy8vICAgICAgXFxcXCMjIyMjXl5eLS1fXG4gKiAgICAgICAgIF8tXiMjIyMjIyMjIyMvLyAoICAgICkgXFxcXCMjIyMjIyMjIyNeLV9cbiAqICAgICAgICAtIyMjIyMjIyMjIyMjLy8gIHxcXF5eL3wgIFxcXFwjIyMjIyMjIyMjIyMtXG4gKiAgICAgIF8vIyMjIyMjIyMjIyMjLy8gICAoQDo6QCkgICBcXFxcIyMjIyMjIyMjIyMjXFxfXG4gKiAgICAgLyMjIyMjIyMjIyMjIyMoKCAgICAgXFxcXC8vICAgICApKSMjIyMjIyMjIyMjIyNcXFxuICogICAgLSMjIyMjIyMjIyMjIyMjI1xcXFwgICAgKG9vKSAgICAvLyMjIyMjIyMjIyMjIyMjIy1cbiAqICAgLSMjIyMjIyMjIyMjIyMjIyMjXFxcXCAgLyBWViBcXCAgLy8jIyMjIyMjIyMjIyMjIyMjIy1cbiAqICAtIyMjIyMjIyMjIyMjIyMjIyMjI1xcXFwvICAgICAgXFwvLyMjIyMjIyMjIyMjIyMjIyMjIyMtXG4gKiBfIy98IyMjIyMjIyMjIy9cXCMjIyMjIyggICAvXFwgICApIyMjIyMjL1xcIyMjIyMjIyMjI3xcXCNfXG4gKiB8LyB8Iy9cXCMvXFwjL1xcLyAgXFwjL1xcIyNcXCAgfCAgfCAgLyMjL1xcIy8gIFxcL1xcIy9cXCMvXFwjfCBcXHxcbiAqIGAgIHwvICBWICBWICBgICAgViAgXFwjXFx8IHwgIHwgfC8jLyAgViAgICcgIFYgIFYgIFxcfCAgJ1xuICogICAgYCAgIGAgIGAgICAgICBgICAgLyB8IHwgIHwgfCBcXCAgICcgICAgICAnICAnICAgJ1xuICogICAgICAgICAgICAgICAgICAgICAoICB8IHwgIHwgfCAgKVxuICogICAgICAgICAgICAgICAgICAgIF9fXFwgfCB8ICB8IHwgL19fXG4gKiAgICAgICAgICAgICAgICAgICAodnZ2KFZWVikoVlZWKXZ2dilcbiAqICAgICAgICAgICAgICAgICAgICAgICAg56We5YW95L+d5L2RXG4gKiAgICAgICAgICAgICAgICAgICAgICAg5Luj56CB5pegQlVHIVxuICovXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgIOa4uOaIj+S4u+WGheWuueiKgueCueiHqumAguW6lOaJgOacieWIhui+qOeOh+eahOiEmuacrFxuICogQGF1dGhvciBjYWl6aGl0YW9cbiAqIEB2ZXJzaW9uIDAuMS4wXG4gKiBAc2luY2UgMjAxOC0xMS0zMFxuICogQGRlc2NyaXB0aW9uXG4gKlxuICog55So5rOV77yaXG4gKiAgICAgIDEuIOWwhuacrOe7hOS7tuaMgui9veWcqOiKgueCueS4iuWNs+WPr1xuICpcbiAqIOmAgumFjeWOn+eQhu+8mlxuICogICAgICAxLiDlsIbmuLjmiI/kuLvlhoXlrrnoioLngrnnmoTlrr3pq5josIPmlbTkuLrnlLvluIPnmoTlpKflsI/vvIzku6Xov5vooYxTaXpl6YCC6YWNXG4gKlxuICog5rOo5oSP77yaXG4gKiAgICAgIDEuIOaMgui9vei/meS4quiEmuacrOeahOiKgueCueS4jeiDveWKoOWFpVdpZGdldOe7hOS7tu+8jOS4jeeEtui/meS4qumAgumFjeaYr+ayoeacieaViOaenOeahFxuICogICAgICAyLiDnm67liY3lj6rmlK/mjIEgU0hPV19BTEwg5qih5byP5LiL55qE6IOM5pmv57yp5pS+6YCC6YWN77yM5LiN5pSv5oyB5YW25LuW5qih5byP55qE6IOM5pmv57yp5pS+XG4gKlxuICogIEBleGFtcGxlXG4gYGBgXG4gLy8gZS5nLlxuIC8vIOS7o+eggeS4reiuvue9riBTSE9XX0FMTCDmqKHlvI/nmoTlj4LogIPku6PnoIFcbiBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTCk7XG5cbiAvLyDmiJbogIUgQ2FudmFzIOe7hOS7tuS4re+8jOWQjOaXtuWLvumAiSBGaXQgV2lkdGgg5ZKMIEZpdCBIZWlnaHRcbiBgYGBcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRBZGFwdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQoKSB7XG5cbiAgICAgICAgLy8gMS4g5YWI5om+5YiwIFNIT1dfQUxMIOaooeW8j+mAgumFjeS5i+WQju+8jOacrOiKgueCueeahOWunumZheWuvemrmOS7peWPiuWIneWni+e8qeaUvuWAvFxuICAgICAgICBsZXQgc3JjU2NhbGVGb3JTaG93QWxsID0gTWF0aC5taW4oY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyB0aGlzLm5vZGUud2lkdGgsIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHRoaXMubm9kZS5oZWlnaHQpO1xuICAgICAgICBsZXQgcmVhbFdpZHRoID0gdGhpcy5ub2RlLndpZHRoICogc3JjU2NhbGVGb3JTaG93QWxsO1xuICAgICAgICBsZXQgcmVhbEhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgKiBzcmNTY2FsZUZvclNob3dBbGw7XG5cbiAgICAgICAgLy8gMi4g5Z+65LqO56ys5LiA5q2l55qE5pWw5o2u77yM5YaN5YGa6IqC54K55a696auY6YCC6YWNXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aCAqIChjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCAvIHJlYWxXaWR0aCk7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0ICogKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHJlYWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIC8vIDMuIOWboOS4uuacrOiKgueCueeahOWuvemrmOWPkeeUn+S6huaUueWPmO+8jOaJgOS7peimgeaJi+WKqOabtOaWsOWJqeS4i+WtkOiKgueCueeahOWuvemrmFxuICAgICAgICB0aGlzLl91cGRhdGVBbGxDaGlsZE5vZGVXaWRnZXQodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlQWxsQ2hpbGROb2RlV2lkZ2V0KHBhcmVudE5vZGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3aWRnZXQgPSBwYXJlbnROb2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAod2lkZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZHJlbkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFsbENoaWxkTm9kZVdpZGdldChjaGlsZE5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=