"use strict";
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