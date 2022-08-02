
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/multiResolution/MultiResolutionCompat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f5ddqjZcZJm5Y5gjbDKOXC', 'MultiResolutionCompat');
// _smartfox/gui/multiResolution/MultiResolutionCompat.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _class, _class2, _temp;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
/**
 * 未完成
 */

var MultiResolutionCompat = ccclass(_class = (_temp = _class2 = /*#__PURE__*/function (_cc$Component) {
  _inheritsLoose(MultiResolutionCompat, _cc$Component);

  function MultiResolutionCompat() {
    return _cc$Component.apply(this, arguments) || this;
  }

  var _proto = MultiResolutionCompat.prototype;

  _proto.onLoad = function onLoad() {
    // 第一种：全屏拉伸，iPhoneX或平板类的会拉伸变形
    // cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.EXACT_FIT);
    // 第二种：1比1显示，iPhoneX上下有黑边、平板左右有黑边，但不会变形（推荐）
    // cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.EXACT_FIT);
    // var canvasSize = cc.view.getCanvasSize();
    // var proportion = canvasSize.width / canvasSize.height;
    // if (proportion >= 0.6) {
    //     cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_HEIGHT);
    // } else {
    //     cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.FIXED_WIDTH);
    // }
    // // 第三种：按照官方说明的设计分辨率宽高比和屏幕分辨率宽高比来适配
    // let canvasSize = cc.view.getCanvasSize();
    // let screenResolution = canvasSize.width / canvasSize.height;
    // let designResolutionWidth = 720;
    // let designResolutionHeight = 1280;
    // let designResolution = designResolutionWidth / designResolutionHeight;
    // if (CC_DEBUG) {
    //     cc.log(`设计分辨率（${designResolutionWidth}x${designResolutionHeight}) 宽高比：${designResolution}`);
    //     cc.log(`屏幕分辨率（${canvasSize.width}x${canvasSize.height}) 宽高比：${screenResolution}`);
    //     if (designResolution > screenResolution) {
    //         cc.log(
    //             `设计分辨率缩放至于屏幕分辨率等高后的分辨率 (${designResolutionWidth * (canvasSize.height / designResolutionHeight)}x${
    //                 canvasSize.height
    //             })`
    //         );
    //         cc.log("设计分辨率宽高比大于屏幕分辨率，按照官方说法，此时应该采用(Fit Height)，实际应用后，会裁剪掉游戏左右两边的部分内容");
    //     } else if (designResolution < screenResolution) {
    //         cc.log(
    //             `设计分辨率缩放至于屏幕分辨率等宽后的分辨率 (${canvasSize.width}x${designResolutionHeight *
    //                 (canvasSize.width / designResolutionWidth)})`
    //         );
    //         cc.log("设计分辨率宽高比小于屏幕分辨率，按照官方说法，此时应该采用(Fit Width)，实际应用后，会裁剪掉游戏上下两边的部分内容");
    //     } else {
    //         cc.log("设计分辨率宽高比等于屏幕分辨率");
    //     }
    // }
    // if (designResolution > screenResolution) {
    //     cc.view.setDesignResolutionSize(
    //         designResolutionWidth,
    //         designResolutionHeight,
    //         cc.ResolutionPolicy.FIXED_HEIGHT
    //     );
    // } else {
    //     cc.view.setDesignResolutionSize(
    //         designResolutionWidth,
    //         designResolutionHeight,
    //         cc.ResolutionPolicy.FIXED_WIDTH
    //     );
    // }
    // 第四种：直接等比例缩放至屏幕上宽高最短的那条边，后续控制背景拉伸
    cc.view.setDesignResolutionSize(MultiResolutionCompat.DEFAULT_RESOLUTION_WIDTH, MultiResolutionCompat.DEFAULT_RESOLUTION_HEIGHT, cc.ResolutionPolicy.SHOW_ALL); // this.node.scale = 1.1
    // this.node.position = cc.v2(0, -100)
    // this.node.position = this.node.position.sub(cc.v2(0, 100))
    // if (CC_DEBUG) {
    //     cc.log(`屏幕分辨率: ${cc.view.getCanvasSize().width} x ${cc.view.getCanvasSize().height}`);
    //     cc.log(`视图窗口可见区域分辨率: ${cc.view.getVisibleSize().width} x ${cc.view.getVisibleSize().height}`);
    //     cc.log(`视图中边框尺寸: ${cc.view.getFrameSize().width} x ${cc.view.getFrameSize().height}`);
    //     cc.log(`设备或浏览器像素比例: ${cc.view.getDevicePixelRatio()}`);
    //     cc.log("调整前");
    //     cc.log(`节点宽高: ${this.node.width} x ${this.node.height}`);
    //     cc.log(`节点缩放: ${this.node.scaleX} x ${this.node.scaleY}`);
    // }
    // if (cc.view.getCanvasSize().width > cc.view.getCanvasSize().height) {
    //     this.backgroundNode.scale = cc.view.getCanvasSize().width / 720;
    // } else {
    //     this.backgroundNode.scale = cc.view.getCanvasSize().height / 1280;
    // }
    // if (CC_DEBUG) {
    //     cc.log("调整后");
    //     cc.log(`节点宽高: ${this.node.width} x ${this.node.height}`);
    //     cc.log(`节点缩放: ${this.node.scaleX} x ${this.node.scaleY}`);
    // }
  }
  /**
   * 计算当前游戏设计分辨率在ShowAll模式适配后，设计分辨率做出的缩放值
   */
  ;

  MultiResolutionCompat.getShowAllModeScale = function getShowAllModeScale() {
    return Math.min(cc.view.getCanvasSize().width / this.DEFAULT_RESOLUTION_WIDTH, cc.view.getCanvasSize().height / this.DEFAULT_RESOLUTION_HEIGHT);
  }
  /**
   * 计算当前游戏设计分辨率在ShowAll模式适配后，设计分辨率下的界面在实际画布中的实际高度
   */
  ;

  MultiResolutionCompat.getShowAllModeRealHeight = function getShowAllModeRealHeight() {
    return this.DEFAULT_RESOLUTION_HEIGHT * this.getShowAllModeScale();
  }
  /**
   * 计算当前游戏设计分辨率在ShowAll模式适配后，设计分辨率下的界面在实际画布中的实际宽度
   */
  ;

  MultiResolutionCompat.getShowAllModeRealWidth = function getShowAllModeRealWidth() {
    return this.DEFAULT_RESOLUTION_WIDTH * this.getShowAllModeScale();
  }
  /**
   * 计算当前游戏设计分辨率在ShowAll模式适配后，上下边界的黑边之和在实际画布中的长度
   */
  ;

  MultiResolutionCompat.getShowAllModeVerticalBorderHeight = function getShowAllModeVerticalBorderHeight() {
    return cc.view.getCanvasSize().height - this.getShowAllModeRealHeight();
  }
  /**
   * 计算当前游戏设计分辨率在ShowAll模式适配后，左右边界的黑边之和在实际画布中的长度
   */
  ;

  MultiResolutionCompat.getShowAllModeHorizontalBorderWidth = function getShowAllModeHorizontalBorderWidth() {
    return cc.view.getCanvasSize().width - this.getShowAllModeRealWidth();
  }
  /**
   * 计算当前游戏设计分辨率在ShowAll模式适配后，传入来的原始坐标在ShowAll模式下的「贴近屏幕底部」实际坐标值
   */
  ;

  MultiResolutionCompat.getShowAllModeNodePositionCloseToBottom = function getShowAllModeNodePositionCloseToBottom(nodePosInDesign) {
    var srcScaleForShowAll = MultiResolutionCompat.getShowAllModeScale();
    var bottomBorderHeightInCanvas = MultiResolutionCompat.getShowAllModeVerticalBorderHeight() / 2;
    var srcNodePosYInCanvas = nodePosInDesign.y * srcScaleForShowAll;
    var finalNodePosYInCanvas = srcNodePosYInCanvas - bottomBorderHeightInCanvas;
    var nodePosYInDesign = finalNodePosYInCanvas / srcScaleForShowAll;
    return cc.v2(nodePosInDesign.x, nodePosYInDesign);
  }
  /**
   * 将节点在设计分辨率中的坐标转换为节点在实际画布中的坐标
   */
  ;

  MultiResolutionCompat.convertNodePosInDesignToNodePosInCanvas = function convertNodePosInDesignToNodePosInCanvas(nodePosInDesign) {
    return nodePosInDesign.sub(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
  }
  /**
   * 将节点在实际画布中的坐标转换为节点在设计分辨率中的坐标
   */
  ;

  MultiResolutionCompat.convertNodePosInCanvasToNodePosInDesign = function convertNodePosInCanvasToNodePosInDesign(nodePosInCanvas) {
    return nodePosInCanvas.div(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
  }
  /**
   * 将设计分辨率下的宽度转换为实际画布中的宽度
   *
   * @param widthInDesign 设计分辨率下的宽度
   */
  ;

  MultiResolutionCompat.convertWidthInDesignToWidthInCanvas = function convertWidthInDesignToWidthInCanvas(widthInDesign) {
    return widthInDesign * this.getShowAllModeScale();
  }
  /**
   * 将实际画布中的宽度转换为设计分辨率下的宽度
   *
   * @param widthInCanvas 画布中的宽度
   */
  ;

  MultiResolutionCompat.convertWidthInCanvasToWidthInDesign = function convertWidthInCanvasToWidthInDesign(widthInCanvas) {
    return widthInCanvas / this.getShowAllModeScale();
  }
  /**
   * 将设计分辨率下的高度转换为实际画布中的高度
   *
   * @param heightInDesign 设计分辨率下的高度
   */
  ;

  MultiResolutionCompat.convertHeightInDesignToHeightInCanvas = function convertHeightInDesignToHeightInCanvas(heightInDesign) {
    return heightInDesign * this.getShowAllModeScale();
  }
  /**
   * 将实际画布中的高度转换为设计分辨率下的宽度
   * @param heightIncanvas 画布中的高度
   */
  ;

  MultiResolutionCompat.convertHeightInCanvasToHeightInDesign = function convertHeightInCanvasToHeightInDesign(heightIncanvas) {
    return heightIncanvas / this.getShowAllModeScale();
  };

  return MultiResolutionCompat;
}(cc.Component), _class2.DEFAULT_RESOLUTION_WIDTH = 720, _class2.DEFAULT_RESOLUTION_HEIGHT = 1280, _temp)) || _class;

exports["default"] = MultiResolutionCompat;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxndWlcXG11bHRpUmVzb2x1dGlvblxcTXVsdGlSZXNvbHV0aW9uQ29tcGF0LmpzIl0sIm5hbWVzIjpbImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk11bHRpUmVzb2x1dGlvbkNvbXBhdCIsIm9uTG9hZCIsInZpZXciLCJzZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSIsIkRFRkFVTFRfUkVTT0xVVElPTl9XSURUSCIsIkRFRkFVTFRfUkVTT0xVVElPTl9IRUlHSFQiLCJSZXNvbHV0aW9uUG9saWN5IiwiU0hPV19BTEwiLCJnZXRTaG93QWxsTW9kZVNjYWxlIiwiTWF0aCIsIm1pbiIsImdldENhbnZhc1NpemUiLCJ3aWR0aCIsImhlaWdodCIsImdldFNob3dBbGxNb2RlUmVhbEhlaWdodCIsImdldFNob3dBbGxNb2RlUmVhbFdpZHRoIiwiZ2V0U2hvd0FsbE1vZGVWZXJ0aWNhbEJvcmRlckhlaWdodCIsImdldFNob3dBbGxNb2RlSG9yaXpvbnRhbEJvcmRlcldpZHRoIiwiZ2V0U2hvd0FsbE1vZGVOb2RlUG9zaXRpb25DbG9zZVRvQm90dG9tIiwibm9kZVBvc0luRGVzaWduIiwic3JjU2NhbGVGb3JTaG93QWxsIiwiYm90dG9tQm9yZGVySGVpZ2h0SW5DYW52YXMiLCJzcmNOb2RlUG9zWUluQ2FudmFzIiwieSIsImZpbmFsTm9kZVBvc1lJbkNhbnZhcyIsIm5vZGVQb3NZSW5EZXNpZ24iLCJ2MiIsIngiLCJjb252ZXJ0Tm9kZVBvc0luRGVzaWduVG9Ob2RlUG9zSW5DYW52YXMiLCJzdWIiLCJjb252ZXJ0Tm9kZVBvc0luQ2FudmFzVG9Ob2RlUG9zSW5EZXNpZ24iLCJub2RlUG9zSW5DYW52YXMiLCJkaXYiLCJjb252ZXJ0V2lkdGhJbkRlc2lnblRvV2lkdGhJbkNhbnZhcyIsIndpZHRoSW5EZXNpZ24iLCJjb252ZXJ0V2lkdGhJbkNhbnZhc1RvV2lkdGhJbkRlc2lnbiIsIndpZHRoSW5DYW52YXMiLCJjb252ZXJ0SGVpZ2h0SW5EZXNpZ25Ub0hlaWdodEluQ2FudmFzIiwiaGVpZ2h0SW5EZXNpZ24iLCJjb252ZXJ0SGVpZ2h0SW5DYW52YXNUb0hlaWdodEluRGVzaWduIiwiaGVpZ2h0SW5jYW52YXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFBOEJBLEVBQUUsQ0FBQ0M7SUFBekJDLHlCQUFBQTtJQUFTQywwQkFBQUE7QUFFakI7Ozs7SUFJcUJDLHdCQURwQkY7Ozs7Ozs7OztTQUtHRyxTQUFBLGtCQUFTO0FBQ0w7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FMLElBQUFBLEVBQUUsQ0FBQ00sSUFBSCxDQUFRQyx1QkFBUixDQUNJSCxxQkFBcUIsQ0FBQ0ksd0JBRDFCLEVBRUlKLHFCQUFxQixDQUFDSyx5QkFGMUIsRUFHSVQsRUFBRSxDQUFDVSxnQkFBSCxDQUFvQkMsUUFIeEIsRUF2REssQ0E2REw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUVEOzs7Ozt3QkFHT0Msc0JBQVAsK0JBQTZCO0FBQ3pCLFdBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUNIZCxFQUFFLENBQUNNLElBQUgsQ0FBUVMsYUFBUixHQUF3QkMsS0FBeEIsR0FBZ0MsS0FBS1Isd0JBRGxDLEVBRUhSLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxhQUFSLEdBQXdCRSxNQUF4QixHQUFpQyxLQUFLUix5QkFGbkMsQ0FBUDtBQUlIO0FBRUQ7Ozs7O3dCQUdPUywyQkFBUCxvQ0FBa0M7QUFDOUIsV0FBTyxLQUFLVCx5QkFBTCxHQUFpQyxLQUFLRyxtQkFBTCxFQUF4QztBQUNIO0FBRUQ7Ozs7O3dCQUdPTywwQkFBUCxtQ0FBaUM7QUFDN0IsV0FBTyxLQUFLWCx3QkFBTCxHQUFnQyxLQUFLSSxtQkFBTCxFQUF2QztBQUNIO0FBRUQ7Ozs7O3dCQUdPUSxxQ0FBUCw4Q0FBNEM7QUFDeEMsV0FBT3BCLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxhQUFSLEdBQXdCRSxNQUF4QixHQUFpQyxLQUFLQyx3QkFBTCxFQUF4QztBQUNIO0FBRUQ7Ozs7O3dCQUdPRyxzQ0FBUCwrQ0FBNkM7QUFDekMsV0FBT3JCLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxhQUFSLEdBQXdCQyxLQUF4QixHQUFnQyxLQUFLRyx1QkFBTCxFQUF2QztBQUNIO0FBRUQ7Ozs7O3dCQUdPRywwQ0FBUCxpREFBK0NDLGVBQS9DLEVBQWdFO0FBQzVELFFBQUlDLGtCQUFrQixHQUFHcEIscUJBQXFCLENBQUNRLG1CQUF0QixFQUF6QjtBQUNBLFFBQUlhLDBCQUEwQixHQUFHckIscUJBQXFCLENBQUNnQixrQ0FBdEIsS0FBNkQsQ0FBOUY7QUFDQSxRQUFJTSxtQkFBbUIsR0FBR0gsZUFBZSxDQUFDSSxDQUFoQixHQUFvQkgsa0JBQTlDO0FBQ0EsUUFBSUkscUJBQXFCLEdBQUdGLG1CQUFtQixHQUFHRCwwQkFBbEQ7QUFDQSxRQUFJSSxnQkFBZ0IsR0FBR0QscUJBQXFCLEdBQUdKLGtCQUEvQztBQUNBLFdBQU94QixFQUFFLENBQUM4QixFQUFILENBQU1QLGVBQWUsQ0FBQ1EsQ0FBdEIsRUFBeUJGLGdCQUF6QixDQUFQO0FBQ0g7QUFFRDs7Ozs7d0JBR09HLDBDQUFQLGlEQUErQ1QsZUFBL0MsRUFBZ0U7QUFDNUQsV0FBT0EsZUFBZSxDQUFDVSxHQUFoQixDQUFvQmpDLEVBQUUsQ0FBQzhCLEVBQUgsQ0FBTSxLQUFLbEIsbUJBQUwsRUFBTixFQUFrQyxLQUFLQSxtQkFBTCxFQUFsQyxDQUFwQixDQUFQO0FBQ0g7QUFFRDs7Ozs7d0JBR09zQiwwQ0FBUCxpREFBK0NDLGVBQS9DLEVBQWdFO0FBQzVELFdBQU9BLGVBQWUsQ0FBQ0MsR0FBaEIsQ0FBb0JwQyxFQUFFLENBQUM4QixFQUFILENBQU0sS0FBS2xCLG1CQUFMLEVBQU4sRUFBa0MsS0FBS0EsbUJBQUwsRUFBbEMsQ0FBcEIsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7d0JBS095QixzQ0FBUCw2Q0FBMkNDLGFBQTNDLEVBQTBEO0FBQ3RELFdBQU9BLGFBQWEsR0FBRyxLQUFLMUIsbUJBQUwsRUFBdkI7QUFDSDtBQUVEOzs7Ozs7O3dCQUtPMkIsc0NBQVAsNkNBQTJDQyxhQUEzQyxFQUEwRDtBQUN0RCxXQUFPQSxhQUFhLEdBQUcsS0FBSzVCLG1CQUFMLEVBQXZCO0FBQ0g7QUFFRDs7Ozs7Ozt3QkFLTzZCLHdDQUFQLCtDQUE2Q0MsY0FBN0MsRUFBNkQ7QUFDekQsV0FBT0EsY0FBYyxHQUFHLEtBQUs5QixtQkFBTCxFQUF4QjtBQUNIO0FBRUQ7Ozs7Ozt3QkFJTytCLHdDQUFQLCtDQUE2Q0MsY0FBN0MsRUFBNkQ7QUFDekQsV0FBT0EsY0FBYyxHQUFHLEtBQUtoQyxtQkFBTCxFQUF4QjtBQUNIOzs7RUExTDhDWixFQUFFLENBQUM2QyxvQkFDM0NyQywyQkFBMkIsYUFDM0JDLDRCQUE0QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDmnKrlrozmiJBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpUmVzb2x1dGlvbkNvbXBhdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgREVGQVVMVF9SRVNPTFVUSU9OX1dJRFRIID0gNzIwO1xyXG4gICAgc3RhdGljIERFRkFVTFRfUkVTT0xVVElPTl9IRUlHSFQgPSAxMjgwO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyDnrKzkuIDnp43vvJrlhajlsY/mi4nkvLjvvIxpUGhvbmVY5oiW5bmz5p2/57G755qE5Lya5ouJ5Ly45Y+Y5b2iXHJcbiAgICAgICAgLy8gY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuRVhBQ1RfRklUKTtcclxuXHJcbiAgICAgICAgLy8g56ys5LqM56eN77yaMeavlDHmmL7npLrvvIxpUGhvbmVY5LiK5LiL5pyJ6buR6L6544CB5bmz5p2/5bem5Y+z5pyJ6buR6L6577yM5L2G5LiN5Lya5Y+Y5b2i77yI5o6o6I2Q77yJXHJcbiAgICAgICAgLy8gY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuRVhBQ1RfRklUKTtcclxuICAgICAgICAvLyB2YXIgY2FudmFzU2l6ZSA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIC8vIHZhciBwcm9wb3J0aW9uID0gY2FudmFzU2l6ZS53aWR0aCAvIGNhbnZhc1NpemUuaGVpZ2h0O1xyXG4gICAgICAgIC8vIGlmIChwcm9wb3J0aW9uID49IDAuNikge1xyXG4gICAgICAgIC8vICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFQpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoNzIwLCAxMjgwLCBjYy5SZXNvbHV0aW9uUG9saWN5LkZJWEVEX1dJRFRIKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIC8vIOesrOS4ieenje+8muaMieeFp+WumOaWueivtOaYjueahOiuvuiuoeWIhui+qOeOh+WuvemrmOavlOWSjOWxj+W5leWIhui+qOeOh+WuvemrmOavlOadpemAgumFjVxyXG4gICAgICAgIC8vIGxldCBjYW52YXNTaXplID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCk7XHJcbiAgICAgICAgLy8gbGV0IHNjcmVlblJlc29sdXRpb24gPSBjYW52YXNTaXplLndpZHRoIC8gY2FudmFzU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgLy8gbGV0IGRlc2lnblJlc29sdXRpb25XaWR0aCA9IDcyMDtcclxuICAgICAgICAvLyBsZXQgZGVzaWduUmVzb2x1dGlvbkhlaWdodCA9IDEyODA7XHJcbiAgICAgICAgLy8gbGV0IGRlc2lnblJlc29sdXRpb24gPSBkZXNpZ25SZXNvbHV0aW9uV2lkdGggLyBkZXNpZ25SZXNvbHV0aW9uSGVpZ2h0O1xyXG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOiuvuiuoeWIhui+qOeOh++8iCR7ZGVzaWduUmVzb2x1dGlvbldpZHRofXgke2Rlc2lnblJlc29sdXRpb25IZWlnaHR9KSDlrr3pq5jmr5TvvJoke2Rlc2lnblJlc29sdXRpb259YCk7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg5bGP5bmV5YiG6L6o546H77yIJHtjYW52YXNTaXplLndpZHRofXgke2NhbnZhc1NpemUuaGVpZ2h0fSkg5a696auY5q+U77yaJHtzY3JlZW5SZXNvbHV0aW9ufWApO1xyXG4gICAgICAgIC8vICAgICBpZiAoZGVzaWduUmVzb2x1dGlvbiA+IHNjcmVlblJlc29sdXRpb24pIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvZyhcclxuICAgICAgICAvLyAgICAgICAgICAgICBg6K6+6K6h5YiG6L6o546H57yp5pS+6Iez5LqO5bGP5bmV5YiG6L6o546H562J6auY5ZCO55qE5YiG6L6o546HICgke2Rlc2lnblJlc29sdXRpb25XaWR0aCAqIChjYW52YXNTaXplLmhlaWdodCAvIGRlc2lnblJlc29sdXRpb25IZWlnaHQpfXgke1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjYW52YXNTaXplLmhlaWdodFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pYFxyXG4gICAgICAgIC8vICAgICAgICAgKTtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvZyhcIuiuvuiuoeWIhui+qOeOh+WuvemrmOavlOWkp+S6juWxj+W5leWIhui+qOeOh++8jOaMieeFp+WumOaWueivtOazle+8jOatpOaXtuW6lOivpemHh+eUqChGaXQgSGVpZ2h0Ke+8jOWunumZheW6lOeUqOWQju+8jOS8muijgeWJquaOiea4uOaIj+W3puWPs+S4pOi+ueeahOmDqOWIhuWGheWuuVwiKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChkZXNpZ25SZXNvbHV0aW9uIDwgc2NyZWVuUmVzb2x1dGlvbikge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9nKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGDorr7orqHliIbovqjnjofnvKnmlL7oh7Pkuo7lsY/luZXliIbovqjnjofnrYnlrr3lkI7nmoTliIbovqjnjocgKCR7Y2FudmFzU2l6ZS53aWR0aH14JHtkZXNpZ25SZXNvbHV0aW9uSGVpZ2h0ICpcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgKGNhbnZhc1NpemUud2lkdGggLyBkZXNpZ25SZXNvbHV0aW9uV2lkdGgpfSlgXHJcbiAgICAgICAgLy8gICAgICAgICApO1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9nKFwi6K6+6K6h5YiG6L6o546H5a696auY5q+U5bCP5LqO5bGP5bmV5YiG6L6o546H77yM5oyJ54Wn5a6Y5pa56K+05rOV77yM5q2k5pe25bqU6K+l6YeH55SoKEZpdCBXaWR0aCnvvIzlrp7pmYXlupTnlKjlkI7vvIzkvJroo4HliarmjonmuLjmiI/kuIrkuIvkuKTovrnnmoTpg6jliIblhoXlrrlcIik7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYy5sb2coXCLorr7orqHliIbovqjnjoflrr3pq5jmr5TnrYnkuo7lsY/luZXliIbovqjnjodcIik7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGRlc2lnblJlc29sdXRpb24gPiBzY3JlZW5SZXNvbHV0aW9uKSB7XHJcbiAgICAgICAgLy8gICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoXHJcbiAgICAgICAgLy8gICAgICAgICBkZXNpZ25SZXNvbHV0aW9uV2lkdGgsXHJcbiAgICAgICAgLy8gICAgICAgICBkZXNpZ25SZXNvbHV0aW9uSGVpZ2h0LFxyXG4gICAgICAgIC8vICAgICAgICAgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFRcclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKFxyXG4gICAgICAgIC8vICAgICAgICAgZGVzaWduUmVzb2x1dGlvbldpZHRoLFxyXG4gICAgICAgIC8vICAgICAgICAgZGVzaWduUmVzb2x1dGlvbkhlaWdodCxcclxuICAgICAgICAvLyAgICAgICAgIGNjLlJlc29sdXRpb25Qb2xpY3kuRklYRURfV0lEVEhcclxuICAgICAgICAvLyAgICAgKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIOesrOWbm+enje+8muebtOaOpeetieavlOS+i+e8qeaUvuiHs+Wxj+W5leS4iuWuvemrmOacgOefreeahOmCo+adoei+ue+8jOWQjue7reaOp+WItuiDjOaZr+aLieS8uFxyXG4gICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoXHJcbiAgICAgICAgICAgIE11bHRpUmVzb2x1dGlvbkNvbXBhdC5ERUZBVUxUX1JFU09MVVRJT05fV0lEVEgsXHJcbiAgICAgICAgICAgIE11bHRpUmVzb2x1dGlvbkNvbXBhdC5ERUZBVUxUX1JFU09MVVRJT05fSEVJR0hULFxyXG4gICAgICAgICAgICBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlID0gMS4xXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIoMCwgLTEwMClcclxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKGNjLnYyKDAsIDEwMCkpXHJcbiAgICAgICAgLy8gaWYgKENDX0RFQlVHKSB7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg5bGP5bmV5YiG6L6o546HOiAke2NjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRofSB4ICR7Y2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0fWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOinhuWbvueql+WPo+WPr+ingeWMuuWfn+WIhui+qOeOhzogJHtjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGh9IHggJHtjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0fWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOinhuWbvuS4rei+ueahhuWwuuWvuDogJHtjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRofSB4ICR7Y2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHR9YCk7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6K6+5aSH5oiW5rWP6KeI5Zmo5YOP57Sg5q+U5L6LOiAke2NjLnZpZXcuZ2V0RGV2aWNlUGl4ZWxSYXRpbygpfWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCLosIPmlbTliY1cIik7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K55a696auYOiAke3RoaXMubm9kZS53aWR0aH0geCAke3RoaXMubm9kZS5oZWlnaHR9YCk7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K557yp5pS+OiAke3RoaXMubm9kZS5zY2FsZVh9IHggJHt0aGlzLm5vZGUuc2NhbGVZfWApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggPiBjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5iYWNrZ3JvdW5kTm9kZS5zY2FsZSA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoIC8gNzIwO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYmFja2dyb3VuZE5vZGUuc2NhbGUgPSBjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHQgLyAxMjgwO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoQ0NfREVCVUcpIHtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwi6LCD5pW05ZCOXCIpO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCueWuvemrmDogJHt0aGlzLm5vZGUud2lkdGh9IHggJHt0aGlzLm5vZGUuaGVpZ2h0fWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCuee8qeaUvjogJHt0aGlzLm5vZGUuc2NhbGVYfSB4ICR7dGhpcy5ub2RlLnNjYWxlWX1gKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflvZPliY3muLjmiI/orr7orqHliIbovqjnjoflnKhTaG93QWxs5qih5byP6YCC6YWN5ZCO77yM6K6+6K6h5YiG6L6o546H5YGa5Ye655qE57yp5pS+5YC8XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRTaG93QWxsTW9kZVNjYWxlKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihcclxuICAgICAgICAgICAgY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyB0aGlzLkRFRkFVTFRfUkVTT0xVVElPTl9XSURUSCxcclxuICAgICAgICAgICAgY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gdGhpcy5ERUZBVUxUX1JFU09MVVRJT05fSEVJR0hUXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+W9k+WJjea4uOaIj+iuvuiuoeWIhui+qOeOh+WcqFNob3dBbGzmqKHlvI/pgILphY3lkI7vvIzorr7orqHliIbovqjnjofkuIvnmoTnlYzpnaLlnKjlrp7pmYXnlLvluIPkuK3nmoTlrp7pmYXpq5jluqZcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFNob3dBbGxNb2RlUmVhbEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ERUZBVUxUX1JFU09MVVRJT05fSEVJR0hUICogdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflvZPliY3muLjmiI/orr7orqHliIbovqjnjoflnKhTaG93QWxs5qih5byP6YCC6YWN5ZCO77yM6K6+6K6h5YiG6L6o546H5LiL55qE55WM6Z2i5Zyo5a6e6ZmF55S75biD5Lit55qE5a6e6ZmF5a695bqmXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRTaG93QWxsTW9kZVJlYWxXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ERUZBVUxUX1JFU09MVVRJT05fV0lEVEggKiB0aGlzLmdldFNob3dBbGxNb2RlU2NhbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+W9k+WJjea4uOaIj+iuvuiuoeWIhui+qOeOh+WcqFNob3dBbGzmqKHlvI/pgILphY3lkI7vvIzkuIrkuIvovrnnlYznmoTpu5HovrnkuYvlkozlnKjlrp7pmYXnlLvluIPkuK3nmoTplb/luqZcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldFNob3dBbGxNb2RlVmVydGljYWxCb3JkZXJIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAtIHRoaXMuZ2V0U2hvd0FsbE1vZGVSZWFsSGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflvZPliY3muLjmiI/orr7orqHliIbovqjnjoflnKhTaG93QWxs5qih5byP6YCC6YWN5ZCO77yM5bem5Y+z6L6555WM55qE6buR6L655LmL5ZKM5Zyo5a6e6ZmF55S75biD5Lit55qE6ZW/5bqmXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRTaG93QWxsTW9kZUhvcml6b250YWxCb3JkZXJXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLSB0aGlzLmdldFNob3dBbGxNb2RlUmVhbFdpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpflvZPliY3muLjmiI/orr7orqHliIbovqjnjoflnKhTaG93QWxs5qih5byP6YCC6YWN5ZCO77yM5Lyg5YWl5p2l55qE5Y6f5aeL5Z2Q5qCH5ZyoU2hvd0FsbOaooeW8j+S4i+eahOOAjOi0tOi/keWxj+W5leW6lemDqOOAjeWunumZheWdkOagh+WAvFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0U2hvd0FsbE1vZGVOb2RlUG9zaXRpb25DbG9zZVRvQm90dG9tKG5vZGVQb3NJbkRlc2lnbikge1xyXG4gICAgICAgIGxldCBzcmNTY2FsZUZvclNob3dBbGwgPSBNdWx0aVJlc29sdXRpb25Db21wYXQuZ2V0U2hvd0FsbE1vZGVTY2FsZSgpO1xyXG4gICAgICAgIGxldCBib3R0b21Cb3JkZXJIZWlnaHRJbkNhbnZhcyA9IE11bHRpUmVzb2x1dGlvbkNvbXBhdC5nZXRTaG93QWxsTW9kZVZlcnRpY2FsQm9yZGVySGVpZ2h0KCkgLyAyO1xyXG4gICAgICAgIGxldCBzcmNOb2RlUG9zWUluQ2FudmFzID0gbm9kZVBvc0luRGVzaWduLnkgKiBzcmNTY2FsZUZvclNob3dBbGw7XHJcbiAgICAgICAgbGV0IGZpbmFsTm9kZVBvc1lJbkNhbnZhcyA9IHNyY05vZGVQb3NZSW5DYW52YXMgLSBib3R0b21Cb3JkZXJIZWlnaHRJbkNhbnZhcztcclxuICAgICAgICBsZXQgbm9kZVBvc1lJbkRlc2lnbiA9IGZpbmFsTm9kZVBvc1lJbkNhbnZhcyAvIHNyY1NjYWxlRm9yU2hvd0FsbDtcclxuICAgICAgICByZXR1cm4gY2MudjIobm9kZVBvc0luRGVzaWduLngsIG5vZGVQb3NZSW5EZXNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCG6IqC54K55Zyo6K6+6K6h5YiG6L6o546H5Lit55qE5Z2Q5qCH6L2s5o2i5Li66IqC54K55Zyo5a6e6ZmF55S75biD5Lit55qE5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb252ZXJ0Tm9kZVBvc0luRGVzaWduVG9Ob2RlUG9zSW5DYW52YXMobm9kZVBvc0luRGVzaWduKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGVQb3NJbkRlc2lnbi5zdWIoY2MudjIodGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCksIHRoaXMuZ2V0U2hvd0FsbE1vZGVTY2FsZSgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIboioLngrnlnKjlrp7pmYXnlLvluIPkuK3nmoTlnZDmoIfovazmjaLkuLroioLngrnlnKjorr7orqHliIbovqjnjofkuK3nmoTlnZDmoIdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbnZlcnROb2RlUG9zSW5DYW52YXNUb05vZGVQb3NJbkRlc2lnbihub2RlUG9zSW5DYW52YXMpIHtcclxuICAgICAgICByZXR1cm4gbm9kZVBvc0luQ2FudmFzLmRpdihjYy52Mih0aGlzLmdldFNob3dBbGxNb2RlU2NhbGUoKSwgdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwhuiuvuiuoeWIhui+qOeOh+S4i+eahOWuveW6pui9rOaNouS4uuWunumZheeUu+W4g+S4reeahOWuveW6plxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB3aWR0aEluRGVzaWduIOiuvuiuoeWIhui+qOeOh+S4i+eahOWuveW6plxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29udmVydFdpZHRoSW5EZXNpZ25Ub1dpZHRoSW5DYW52YXMod2lkdGhJbkRlc2lnbikge1xyXG4gICAgICAgIHJldHVybiB3aWR0aEluRGVzaWduICogdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIblrp7pmYXnlLvluIPkuK3nmoTlrr3luqbovazmjaLkuLrorr7orqHliIbovqjnjofkuIvnmoTlrr3luqZcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gd2lkdGhJbkNhbnZhcyDnlLvluIPkuK3nmoTlrr3luqZcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbnZlcnRXaWR0aEluQ2FudmFzVG9XaWR0aEluRGVzaWduKHdpZHRoSW5DYW52YXMpIHtcclxuICAgICAgICByZXR1cm4gd2lkdGhJbkNhbnZhcyAvIHRoaXMuZ2V0U2hvd0FsbE1vZGVTY2FsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCG6K6+6K6h5YiG6L6o546H5LiL55qE6auY5bqm6L2s5o2i5Li65a6e6ZmF55S75biD5Lit55qE6auY5bqmXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGhlaWdodEluRGVzaWduIOiuvuiuoeWIhui+qOeOh+S4i+eahOmrmOW6plxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29udmVydEhlaWdodEluRGVzaWduVG9IZWlnaHRJbkNhbnZhcyhoZWlnaHRJbkRlc2lnbikge1xyXG4gICAgICAgIHJldHVybiBoZWlnaHRJbkRlc2lnbiAqIHRoaXMuZ2V0U2hvd0FsbE1vZGVTY2FsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCG5a6e6ZmF55S75biD5Lit55qE6auY5bqm6L2s5o2i5Li66K6+6K6h5YiG6L6o546H5LiL55qE5a695bqmXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0SW5jYW52YXMg55S75biD5Lit55qE6auY5bqmXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBjb252ZXJ0SGVpZ2h0SW5DYW52YXNUb0hlaWdodEluRGVzaWduKGhlaWdodEluY2FudmFzKSB7XHJcbiAgICAgICAgcmV0dXJuIGhlaWdodEluY2FudmFzIC8gdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19