
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

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxndWlcXG11bHRpUmVzb2x1dGlvblxcU2NhbGVDb250ZW50LmpzIl0sIm5hbWVzIjpbImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNvbnRlbnRBZGFwdGVyIiwib25Mb2FkIiwic3JjU2NhbGVGb3JTaG93QWxsIiwiTWF0aCIsIm1pbiIsInZpZXciLCJnZXRDYW52YXNTaXplIiwid2lkdGgiLCJub2RlIiwiaGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsIl91cGRhdGVBbGxDaGlsZE5vZGVXaWRnZXQiLCJwYXJlbnROb2RlIiwid2lkZ2V0IiwiZ2V0Q29tcG9uZW50IiwiV2lkZ2V0IiwidXBkYXRlQWxpZ25tZW50IiwiY2hpbGRyZW5Db3VudCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQW9COEJBLEVBQUUsQ0FBQ0M7SUFBekJDLHlCQUFBQTtJQUFTQywwQkFBQUE7QUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCcUJDLGlCQURwQkY7Ozs7Ozs7OztTQUVHRyxTQUFBLGtCQUFTO0FBRUw7QUFDQSxRQUFJQyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxhQUFSLEdBQXdCQyxLQUF4QixHQUFnQyxLQUFLQyxJQUFMLENBQVVELEtBQW5ELEVBQTBEWCxFQUFFLENBQUNTLElBQUgsQ0FBUUMsYUFBUixHQUF3QkcsTUFBeEIsR0FBaUMsS0FBS0QsSUFBTCxDQUFVQyxNQUFyRyxDQUF6QjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLRixJQUFMLENBQVVELEtBQVYsR0FBa0JMLGtCQUFsQztBQUNBLFFBQUlTLFVBQVUsR0FBRyxLQUFLSCxJQUFMLENBQVVDLE1BQVYsR0FBbUJQLGtCQUFwQyxDQUxLLENBT0w7O0FBQ0EsU0FBS00sSUFBTCxDQUFVRCxLQUFWLEdBQWtCLEtBQUtDLElBQUwsQ0FBVUQsS0FBVixJQUFtQlgsRUFBRSxDQUFDUyxJQUFILENBQVFDLGFBQVIsR0FBd0JDLEtBQXhCLEdBQWdDRyxTQUFuRCxDQUFsQjtBQUNBLFNBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFLRCxJQUFMLENBQVVDLE1BQVYsSUFBb0JiLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxhQUFSLEdBQXdCRyxNQUF4QixHQUFpQ0UsVUFBckQsQ0FBbkIsQ0FUSyxDQVdMOztBQUNBLFNBQUtDLHlCQUFMLENBQStCLEtBQUtKLElBQXBDO0FBQ0g7O1NBRURJLDRCQUFBLG1DQUEwQkMsVUFBMUIsRUFBc0M7QUFBQTs7QUFDbEMsUUFBSUEsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3BCO0FBQ0g7O0FBQ0QsUUFBSUMsTUFBTSxHQUFHRCxVQUFVLENBQUNFLFlBQVgsQ0FBd0JuQixFQUFFLENBQUNvQixNQUEzQixDQUFiOztBQUNBLFFBQUlGLE1BQU0sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCQSxNQUFBQSxNQUFNLENBQUNHLGVBQVA7QUFDSDs7QUFDRCxRQUFJSixVQUFVLENBQUNLLGFBQVgsS0FBNkIsQ0FBakMsRUFBb0M7QUFDaEM7QUFDSDs7QUFDREwsSUFBQUEsVUFBVSxDQUFDTSxRQUFYLENBQW9CQyxPQUFwQixDQUE0QixVQUFDQyxTQUFELEVBQWU7QUFDdkMsTUFBQSxLQUFJLENBQUNULHlCQUFMLENBQStCUyxTQUEvQjtBQUNILEtBRkQ7QUFHSDs7O0VBOUJ1Q3pCLEVBQUUsQ0FBQzBCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogICAgICAgICAgICAgICAgICBfX189PT09LV8gIF8tPT09PV9fX1xyXG4gKiAgICAgICAgICAgIF8tLV5eXiMjIyMjLy8gICAgICBcXFxcIyMjIyNeXl4tLV9cclxuICogICAgICAgICBfLV4jIyMjIyMjIyMjLy8gKCAgICApIFxcXFwjIyMjIyMjIyMjXi1fXHJcbiAqICAgICAgICAtIyMjIyMjIyMjIyMjLy8gIHxcXF5eL3wgIFxcXFwjIyMjIyMjIyMjIyMtXHJcbiAqICAgICAgXy8jIyMjIyMjIyMjIyMvLyAgIChAOjpAKSAgIFxcXFwjIyMjIyMjIyMjIyNcXF9cclxuICogICAgIC8jIyMjIyMjIyMjIyMjKCggICAgIFxcXFwvLyAgICAgKSkjIyMjIyMjIyMjIyMjXFxcclxuICogICAgLSMjIyMjIyMjIyMjIyMjI1xcXFwgICAgKG9vKSAgICAvLyMjIyMjIyMjIyMjIyMjIy1cclxuICogICAtIyMjIyMjIyMjIyMjIyMjIyNcXFxcICAvIFZWIFxcICAvLyMjIyMjIyMjIyMjIyMjIyMjLVxyXG4gKiAgLSMjIyMjIyMjIyMjIyMjIyMjIyNcXFxcLyAgICAgIFxcLy8jIyMjIyMjIyMjIyMjIyMjIyMjLVxyXG4gKiBfIy98IyMjIyMjIyMjIy9cXCMjIyMjIyggICAvXFwgICApIyMjIyMjL1xcIyMjIyMjIyMjI3xcXCNfXHJcbiAqIHwvIHwjL1xcIy9cXCMvXFwvICBcXCMvXFwjI1xcICB8ICB8ICAvIyMvXFwjLyAgXFwvXFwjL1xcIy9cXCN8IFxcfFxyXG4gKiBgICB8LyAgViAgViAgYCAgIFYgIFxcI1xcfCB8ICB8IHwvIy8gIFYgICAnICBWICBWICBcXHwgICdcclxuICogICAgYCAgIGAgIGAgICAgICBgICAgLyB8IHwgIHwgfCBcXCAgICcgICAgICAnICAnICAgJ1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICggIHwgfCAgfCB8ICApXHJcbiAqICAgICAgICAgICAgICAgICAgICBfX1xcIHwgfCAgfCB8IC9fX1xyXG4gKiAgICAgICAgICAgICAgICAgICAodnZ2KFZWVikoVlZWKXZ2dilcclxuICogICAgICAgICAgICAgICAgICAgICAgICDnpZ7lhb3kv53kvZFcclxuICogICAgICAgICAgICAgICAgICAgICAgIOS7o+eggeaXoEJVRyFcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyAg5ri45oiP5Li75YaF5a656IqC54K56Ieq6YCC5bqU5omA5pyJ5YiG6L6o546H55qE6ISa5pysXHJcbiAqIEBhdXRob3IgY2FpemhpdGFvXHJcbiAqIEB2ZXJzaW9uIDAuMS4wXHJcbiAqIEBzaW5jZSAyMDE4LTExLTMwXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiDnlKjms5XvvJpcclxuICogICAgICAxLiDlsIbmnKznu4Tku7bmjILovb3lnKjoioLngrnkuIrljbPlj69cclxuICpcclxuICog6YCC6YWN5Y6f55CG77yaXHJcbiAqICAgICAgMS4g5bCG5ri45oiP5Li75YaF5a656IqC54K555qE5a696auY6LCD5pW05Li655S75biD55qE5aSn5bCP77yM5Lul6L+b6KGMU2l6ZemAgumFjVxyXG4gKlxyXG4gKiDms6jmhI/vvJpcclxuICogICAgICAxLiDmjILovb3ov5nkuKrohJrmnKznmoToioLngrnkuI3og73liqDlhaVXaWRnZXTnu4Tku7bvvIzkuI3nhLbov5nkuKrpgILphY3mmK/msqHmnInmlYjmnpznmoRcclxuICogICAgICAyLiDnm67liY3lj6rmlK/mjIEgU0hPV19BTEwg5qih5byP5LiL55qE6IOM5pmv57yp5pS+6YCC6YWN77yM5LiN5pSv5oyB5YW25LuW5qih5byP55qE6IOM5pmv57yp5pS+XHJcbiAqXHJcbiAqICBAZXhhbXBsZVxyXG4gYGBgXHJcbiAvLyBlLmcuXHJcbiAvLyDku6PnoIHkuK3orr7nva4gU0hPV19BTEwg5qih5byP55qE5Y+C6ICD5Luj56CBXHJcbiBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTCk7XHJcblxyXG4gLy8g5oiW6ICFIENhbnZhcyDnu4Tku7bkuK3vvIzlkIzml7bli77pgIkgRml0IFdpZHRoIOWSjCBGaXQgSGVpZ2h0XHJcbiBgYGBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRBZGFwdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgLy8gMS4g5YWI5om+5YiwIFNIT1dfQUxMIOaooeW8j+mAgumFjeS5i+WQju+8jOacrOiKgueCueeahOWunumZheWuvemrmOS7peWPiuWIneWni+e8qeaUvuWAvFxyXG4gICAgICAgIGxldCBzcmNTY2FsZUZvclNob3dBbGwgPSBNYXRoLm1pbihjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCAvIHRoaXMubm9kZS53aWR0aCwgY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gdGhpcy5ub2RlLmhlaWdodCk7XHJcbiAgICAgICAgbGV0IHJlYWxXaWR0aCA9IHRoaXMubm9kZS53aWR0aCAqIHNyY1NjYWxlRm9yU2hvd0FsbDtcclxuICAgICAgICBsZXQgcmVhbEhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgKiBzcmNTY2FsZUZvclNob3dBbGw7XHJcblxyXG4gICAgICAgIC8vIDIuIOWfuuS6juesrOS4gOatpeeahOaVsOaNru+8jOWGjeWBmuiKgueCueWuvemrmOmAgumFjVxyXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aCAqIChjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCAvIHJlYWxXaWR0aCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgKiAoY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gcmVhbEhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIC8vIDMuIOWboOS4uuacrOiKgueCueeahOWuvemrmOWPkeeUn+S6huaUueWPmO+8jOaJgOS7peimgeaJi+WKqOabtOaWsOWJqeS4i+WtkOiKgueCueeahOWuvemrmFxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUFsbENoaWxkTm9kZVdpZGdldCh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVBbGxDaGlsZE5vZGVXaWRnZXQocGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgd2lkZ2V0ID0gcGFyZW50Tm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBpZiAod2lkZ2V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFyZW50Tm9kZS5jaGlsZHJlbkNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlQWxsQ2hpbGROb2RlV2lkZ2V0KGNoaWxkTm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19