
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

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL211bHRpUmVzb2x1dGlvbi9NdWx0aVJlc29sdXRpb25Db21wYXQuanMiXSwibmFtZXMiOlsiY2MiLCJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiTXVsdGlSZXNvbHV0aW9uQ29tcGF0Iiwib25Mb2FkIiwidmlldyIsInNldERlc2lnblJlc29sdXRpb25TaXplIiwiREVGQVVMVF9SRVNPTFVUSU9OX1dJRFRIIiwiREVGQVVMVF9SRVNPTFVUSU9OX0hFSUdIVCIsIlJlc29sdXRpb25Qb2xpY3kiLCJTSE9XX0FMTCIsImdldFNob3dBbGxNb2RlU2NhbGUiLCJNYXRoIiwibWluIiwiZ2V0Q2FudmFzU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2V0U2hvd0FsbE1vZGVSZWFsSGVpZ2h0IiwiZ2V0U2hvd0FsbE1vZGVSZWFsV2lkdGgiLCJnZXRTaG93QWxsTW9kZVZlcnRpY2FsQm9yZGVySGVpZ2h0IiwiZ2V0U2hvd0FsbE1vZGVIb3Jpem9udGFsQm9yZGVyV2lkdGgiLCJnZXRTaG93QWxsTW9kZU5vZGVQb3NpdGlvbkNsb3NlVG9Cb3R0b20iLCJub2RlUG9zSW5EZXNpZ24iLCJzcmNTY2FsZUZvclNob3dBbGwiLCJib3R0b21Cb3JkZXJIZWlnaHRJbkNhbnZhcyIsInNyY05vZGVQb3NZSW5DYW52YXMiLCJ5IiwiZmluYWxOb2RlUG9zWUluQ2FudmFzIiwibm9kZVBvc1lJbkRlc2lnbiIsInYyIiwieCIsImNvbnZlcnROb2RlUG9zSW5EZXNpZ25Ub05vZGVQb3NJbkNhbnZhcyIsInN1YiIsImNvbnZlcnROb2RlUG9zSW5DYW52YXNUb05vZGVQb3NJbkRlc2lnbiIsIm5vZGVQb3NJbkNhbnZhcyIsImRpdiIsImNvbnZlcnRXaWR0aEluRGVzaWduVG9XaWR0aEluQ2FudmFzIiwid2lkdGhJbkRlc2lnbiIsImNvbnZlcnRXaWR0aEluQ2FudmFzVG9XaWR0aEluRGVzaWduIiwid2lkdGhJbkNhbnZhcyIsImNvbnZlcnRIZWlnaHRJbkRlc2lnblRvSGVpZ2h0SW5DYW52YXMiLCJoZWlnaHRJbkRlc2lnbiIsImNvbnZlcnRIZWlnaHRJbkNhbnZhc1RvSGVpZ2h0SW5EZXNpZ24iLCJoZWlnaHRJbmNhbnZhcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBOEJBLEVBQUUsQ0FBQ0MsVUFBakM7QUFBQSxJQUFRQyxPQUFSLGtCQUFRQSxPQUFSO0FBQUEsSUFBaUJDLFFBQWpCLGtCQUFpQkEsUUFBakI7QUFFQTtBQUNBO0FBQ0E7O0lBRXFCQyx3QkFEcEJGOzs7Ozs7Ozs7U0FLR0csU0FBQSxrQkFBUztBQUNMO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBTCxJQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUUMsdUJBQVIsQ0FDSUgscUJBQXFCLENBQUNJLHdCQUQxQixFQUVJSixxQkFBcUIsQ0FBQ0sseUJBRjFCLEVBR0lULEVBQUUsQ0FBQ1UsZ0JBQUgsQ0FBb0JDLFFBSHhCLEVBdkRLLENBNkRMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozt3QkFDV0Msc0JBQVAsK0JBQTZCO0FBQ3pCLFdBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUNIZCxFQUFFLENBQUNNLElBQUgsQ0FBUVMsYUFBUixHQUF3QkMsS0FBeEIsR0FBZ0MsS0FBS1Isd0JBRGxDLEVBRUhSLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxhQUFSLEdBQXdCRSxNQUF4QixHQUFpQyxLQUFLUix5QkFGbkMsQ0FBUDtBQUlIO0FBRUQ7QUFDSjtBQUNBOzs7d0JBQ1dTLDJCQUFQLG9DQUFrQztBQUM5QixXQUFPLEtBQUtULHlCQUFMLEdBQWlDLEtBQUtHLG1CQUFMLEVBQXhDO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozt3QkFDV08sMEJBQVAsbUNBQWlDO0FBQzdCLFdBQU8sS0FBS1gsd0JBQUwsR0FBZ0MsS0FBS0ksbUJBQUwsRUFBdkM7QUFDSDtBQUVEO0FBQ0o7QUFDQTs7O3dCQUNXUSxxQ0FBUCw4Q0FBNEM7QUFDeEMsV0FBT3BCLEVBQUUsQ0FBQ00sSUFBSCxDQUFRUyxhQUFSLEdBQXdCRSxNQUF4QixHQUFpQyxLQUFLQyx3QkFBTCxFQUF4QztBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7d0JBQ1dHLHNDQUFQLCtDQUE2QztBQUN6QyxXQUFPckIsRUFBRSxDQUFDTSxJQUFILENBQVFTLGFBQVIsR0FBd0JDLEtBQXhCLEdBQWdDLEtBQUtHLHVCQUFMLEVBQXZDO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozt3QkFDV0csMENBQVAsaURBQStDQyxlQUEvQyxFQUFnRTtBQUM1RCxRQUFJQyxrQkFBa0IsR0FBR3BCLHFCQUFxQixDQUFDUSxtQkFBdEIsRUFBekI7QUFDQSxRQUFJYSwwQkFBMEIsR0FBR3JCLHFCQUFxQixDQUFDZ0Isa0NBQXRCLEtBQTZELENBQTlGO0FBQ0EsUUFBSU0sbUJBQW1CLEdBQUdILGVBQWUsQ0FBQ0ksQ0FBaEIsR0FBb0JILGtCQUE5QztBQUNBLFFBQUlJLHFCQUFxQixHQUFHRixtQkFBbUIsR0FBR0QsMEJBQWxEO0FBQ0EsUUFBSUksZ0JBQWdCLEdBQUdELHFCQUFxQixHQUFHSixrQkFBL0M7QUFDQSxXQUFPeEIsRUFBRSxDQUFDOEIsRUFBSCxDQUFNUCxlQUFlLENBQUNRLENBQXRCLEVBQXlCRixnQkFBekIsQ0FBUDtBQUNIO0FBRUQ7QUFDSjtBQUNBOzs7d0JBQ1dHLDBDQUFQLGlEQUErQ1QsZUFBL0MsRUFBZ0U7QUFDNUQsV0FBT0EsZUFBZSxDQUFDVSxHQUFoQixDQUFvQmpDLEVBQUUsQ0FBQzhCLEVBQUgsQ0FBTSxLQUFLbEIsbUJBQUwsRUFBTixFQUFrQyxLQUFLQSxtQkFBTCxFQUFsQyxDQUFwQixDQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7Ozt3QkFDV3NCLDBDQUFQLGlEQUErQ0MsZUFBL0MsRUFBZ0U7QUFDNUQsV0FBT0EsZUFBZSxDQUFDQyxHQUFoQixDQUFvQnBDLEVBQUUsQ0FBQzhCLEVBQUgsQ0FBTSxLQUFLbEIsbUJBQUwsRUFBTixFQUFrQyxLQUFLQSxtQkFBTCxFQUFsQyxDQUFwQixDQUFQO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7d0JBQ1d5QixzQ0FBUCw2Q0FBMkNDLGFBQTNDLEVBQTBEO0FBQ3RELFdBQU9BLGFBQWEsR0FBRyxLQUFLMUIsbUJBQUwsRUFBdkI7QUFDSDtBQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozt3QkFDVzJCLHNDQUFQLDZDQUEyQ0MsYUFBM0MsRUFBMEQ7QUFDdEQsV0FBT0EsYUFBYSxHQUFHLEtBQUs1QixtQkFBTCxFQUF2QjtBQUNIO0FBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7O3dCQUNXNkIsd0NBQVAsK0NBQTZDQyxjQUE3QyxFQUE2RDtBQUN6RCxXQUFPQSxjQUFjLEdBQUcsS0FBSzlCLG1CQUFMLEVBQXhCO0FBQ0g7QUFFRDtBQUNKO0FBQ0E7QUFDQTs7O3dCQUNXK0Isd0NBQVAsK0NBQTZDQyxjQUE3QyxFQUE2RDtBQUN6RCxXQUFPQSxjQUFjLEdBQUcsS0FBS2hDLG1CQUFMLEVBQXhCO0FBQ0g7OztFQTFMOENaLEVBQUUsQ0FBQzZDLG9CQUMzQ3JDLDJCQUEyQixhQUMzQkMsNEJBQTRCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOacquWujOaIkFxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlSZXNvbHV0aW9uQ29tcGF0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgREVGQVVMVF9SRVNPTFVUSU9OX1dJRFRIID0gNzIwO1xuICAgIHN0YXRpYyBERUZBVUxUX1JFU09MVVRJT05fSEVJR0hUID0gMTI4MDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g56ys5LiA56eN77ya5YWo5bGP5ouJ5Ly477yMaVBob25lWOaIluW5s+adv+exu+eahOS8muaLieS8uOWPmOW9olxuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5FWEFDVF9GSVQpO1xuXG4gICAgICAgIC8vIOesrOS6jOenje+8mjHmr5Qx5pi+56S677yMaVBob25lWOS4iuS4i+aciem7kei+ueOAgeW5s+adv+W3puWPs+aciem7kei+ue+8jOS9huS4jeS8muWPmOW9ou+8iOaOqOiNkO+8iVxuICAgICAgICAvLyBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5FWEFDVF9GSVQpO1xuICAgICAgICAvLyB2YXIgY2FudmFzU2l6ZSA9IGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpO1xuICAgICAgICAvLyB2YXIgcHJvcG9ydGlvbiA9IGNhbnZhc1NpemUud2lkdGggLyBjYW52YXNTaXplLmhlaWdodDtcbiAgICAgICAgLy8gaWYgKHByb3BvcnRpb24gPj0gMC42KSB7XG4gICAgICAgIC8vICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDcyMCwgMTI4MCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFQpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuRklYRURfV0lEVEgpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLy8g56ys5LiJ56eN77ya5oyJ54Wn5a6Y5pa56K+05piO55qE6K6+6K6h5YiG6L6o546H5a696auY5q+U5ZKM5bGP5bmV5YiG6L6o546H5a696auY5q+U5p2l6YCC6YWNXG4gICAgICAgIC8vIGxldCBjYW52YXNTaXplID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCk7XG4gICAgICAgIC8vIGxldCBzY3JlZW5SZXNvbHV0aW9uID0gY2FudmFzU2l6ZS53aWR0aCAvIGNhbnZhc1NpemUuaGVpZ2h0O1xuICAgICAgICAvLyBsZXQgZGVzaWduUmVzb2x1dGlvbldpZHRoID0gNzIwO1xuICAgICAgICAvLyBsZXQgZGVzaWduUmVzb2x1dGlvbkhlaWdodCA9IDEyODA7XG4gICAgICAgIC8vIGxldCBkZXNpZ25SZXNvbHV0aW9uID0gZGVzaWduUmVzb2x1dGlvbldpZHRoIC8gZGVzaWduUmVzb2x1dGlvbkhlaWdodDtcbiAgICAgICAgLy8gaWYgKENDX0RFQlVHKSB7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOiuvuiuoeWIhui+qOeOh++8iCR7ZGVzaWduUmVzb2x1dGlvbldpZHRofXgke2Rlc2lnblJlc29sdXRpb25IZWlnaHR9KSDlrr3pq5jmr5TvvJoke2Rlc2lnblJlc29sdXRpb259YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOWxj+W5leWIhui+qOeOh++8iCR7Y2FudmFzU2l6ZS53aWR0aH14JHtjYW52YXNTaXplLmhlaWdodH0pIOWuvemrmOavlO+8miR7c2NyZWVuUmVzb2x1dGlvbn1gKTtcbiAgICAgICAgLy8gICAgIGlmIChkZXNpZ25SZXNvbHV0aW9uID4gc2NyZWVuUmVzb2x1dGlvbikge1xuICAgICAgICAvLyAgICAgICAgIGNjLmxvZyhcbiAgICAgICAgLy8gICAgICAgICAgICAgYOiuvuiuoeWIhui+qOeOh+e8qeaUvuiHs+S6juWxj+W5leWIhui+qOeOh+etiemrmOWQjueahOWIhui+qOeOhyAoJHtkZXNpZ25SZXNvbHV0aW9uV2lkdGggKiAoY2FudmFzU2l6ZS5oZWlnaHQgLyBkZXNpZ25SZXNvbHV0aW9uSGVpZ2h0KX14JHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNhbnZhc1NpemUuaGVpZ2h0XG4gICAgICAgIC8vICAgICAgICAgICAgIH0pYFxuICAgICAgICAvLyAgICAgICAgICk7XG4gICAgICAgIC8vICAgICAgICAgY2MubG9nKFwi6K6+6K6h5YiG6L6o546H5a696auY5q+U5aSn5LqO5bGP5bmV5YiG6L6o546H77yM5oyJ54Wn5a6Y5pa56K+05rOV77yM5q2k5pe25bqU6K+l6YeH55SoKEZpdCBIZWlnaHQp77yM5a6e6ZmF5bqU55So5ZCO77yM5Lya6KOB5Ymq5o6J5ri45oiP5bem5Y+z5Lik6L6555qE6YOo5YiG5YaF5a65XCIpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmIChkZXNpZ25SZXNvbHV0aW9uIDwgc2NyZWVuUmVzb2x1dGlvbikge1xuICAgICAgICAvLyAgICAgICAgIGNjLmxvZyhcbiAgICAgICAgLy8gICAgICAgICAgICAgYOiuvuiuoeWIhui+qOeOh+e8qeaUvuiHs+S6juWxj+W5leWIhui+qOeOh+etieWuveWQjueahOWIhui+qOeOhyAoJHtjYW52YXNTaXplLndpZHRofXgke2Rlc2lnblJlc29sdXRpb25IZWlnaHQgKlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgKGNhbnZhc1NpemUud2lkdGggLyBkZXNpZ25SZXNvbHV0aW9uV2lkdGgpfSlgXG4gICAgICAgIC8vICAgICAgICAgKTtcbiAgICAgICAgLy8gICAgICAgICBjYy5sb2coXCLorr7orqHliIbovqjnjoflrr3pq5jmr5TlsI/kuo7lsY/luZXliIbovqjnjofvvIzmjInnhaflrpjmlrnor7Tms5XvvIzmraTml7blupTor6Xph4fnlKgoRml0IFdpZHRoKe+8jOWunumZheW6lOeUqOWQju+8jOS8muijgeWJquaOiea4uOaIj+S4iuS4i+S4pOi+ueeahOmDqOWIhuWGheWuuVwiKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgY2MubG9nKFwi6K6+6K6h5YiG6L6o546H5a696auY5q+U562J5LqO5bGP5bmV5YiG6L6o546HXCIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChkZXNpZ25SZXNvbHV0aW9uID4gc2NyZWVuUmVzb2x1dGlvbikge1xuICAgICAgICAvLyAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZShcbiAgICAgICAgLy8gICAgICAgICBkZXNpZ25SZXNvbHV0aW9uV2lkdGgsXG4gICAgICAgIC8vICAgICAgICAgZGVzaWduUmVzb2x1dGlvbkhlaWdodCxcbiAgICAgICAgLy8gICAgICAgICBjYy5SZXNvbHV0aW9uUG9saWN5LkZJWEVEX0hFSUdIVFxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoXG4gICAgICAgIC8vICAgICAgICAgZGVzaWduUmVzb2x1dGlvbldpZHRoLFxuICAgICAgICAvLyAgICAgICAgIGRlc2lnblJlc29sdXRpb25IZWlnaHQsXG4gICAgICAgIC8vICAgICAgICAgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9XSURUSFxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIOesrOWbm+enje+8muebtOaOpeetieavlOS+i+e8qeaUvuiHs+Wxj+W5leS4iuWuvemrmOacgOefreeahOmCo+adoei+ue+8jOWQjue7reaOp+WItuiDjOaZr+aLieS8uFxuICAgICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKFxuICAgICAgICAgICAgTXVsdGlSZXNvbHV0aW9uQ29tcGF0LkRFRkFVTFRfUkVTT0xVVElPTl9XSURUSCxcbiAgICAgICAgICAgIE11bHRpUmVzb2x1dGlvbkNvbXBhdC5ERUZBVUxUX1JFU09MVVRJT05fSEVJR0hULFxuICAgICAgICAgICAgY2MuUmVzb2x1dGlvblBvbGljeS5TSE9XX0FMTFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZSA9IDEuMVxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MigwLCAtMTAwKVxuICAgICAgICAvLyB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKGNjLnYyKDAsIDEwMCkpXG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xuICAgICAgICAvLyAgICAgY2MubG9nKGDlsY/luZXliIbovqjnjoc6ICR7Y2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGh9IHggJHtjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHR9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOinhuWbvueql+WPo+WPr+ingeWMuuWfn+WIhui+qOeOhzogJHtjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGh9IHggJHtjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDop4blm77kuK3ovrnmoYblsLrlr7g6ICR7Y2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDorr7lpIfmiJbmtY/op4jlmajlg4/ntKDmr5Tkvos6ICR7Y2Mudmlldy5nZXREZXZpY2VQaXhlbFJhdGlvKCl9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coXCLosIPmlbTliY1cIik7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCueWuvemrmDogJHt0aGlzLm5vZGUud2lkdGh9IHggJHt0aGlzLm5vZGUuaGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnnvKnmlL46ICR7dGhpcy5ub2RlLnNjYWxlWH0geCAke3RoaXMubm9kZS5zY2FsZVl9YCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLmJhY2tncm91bmROb2RlLnNjYWxlID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyA3MjA7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmJhY2tncm91bmROb2RlLnNjYWxlID0gY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gMTI4MDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoQ0NfREVCVUcpIHtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIuiwg+aVtOWQjlwiKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K55a696auYOiAke3RoaXMubm9kZS53aWR0aH0geCAke3RoaXMubm9kZS5oZWlnaHR9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCuee8qeaUvjogJHt0aGlzLm5vZGUuc2NhbGVYfSB4ICR7dGhpcy5ub2RlLnNjYWxlWX1gKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuoeeul+W9k+WJjea4uOaIj+iuvuiuoeWIhui+qOeOh+WcqFNob3dBbGzmqKHlvI/pgILphY3lkI7vvIzorr7orqHliIbovqjnjoflgZrlh7rnmoTnvKnmlL7lgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0U2hvd0FsbE1vZGVTY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKFxuICAgICAgICAgICAgY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyB0aGlzLkRFRkFVTFRfUkVTT0xVVElPTl9XSURUSCxcbiAgICAgICAgICAgIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHRoaXMuREVGQVVMVF9SRVNPTFVUSU9OX0hFSUdIVFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuoeeul+W9k+WJjea4uOaIj+iuvuiuoeWIhui+qOeOh+WcqFNob3dBbGzmqKHlvI/pgILphY3lkI7vvIzorr7orqHliIbovqjnjofkuIvnmoTnlYzpnaLlnKjlrp7pmYXnlLvluIPkuK3nmoTlrp7pmYXpq5jluqZcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0U2hvd0FsbE1vZGVSZWFsSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ERUZBVUxUX1JFU09MVVRJT05fSEVJR0hUICogdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6h566X5b2T5YmN5ri45oiP6K6+6K6h5YiG6L6o546H5ZyoU2hvd0FsbOaooeW8j+mAgumFjeWQju+8jOiuvuiuoeWIhui+qOeOh+S4i+eahOeVjOmdouWcqOWunumZheeUu+W4g+S4reeahOWunumZheWuveW6plxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTaG93QWxsTW9kZVJlYWxXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuREVGQVVMVF9SRVNPTFVUSU9OX1dJRFRIICogdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6h566X5b2T5YmN5ri45oiP6K6+6K6h5YiG6L6o546H5ZyoU2hvd0FsbOaooeW8j+mAgumFjeWQju+8jOS4iuS4i+i+ueeVjOeahOm7kei+ueS5i+WSjOWcqOWunumZheeUu+W4g+S4reeahOmVv+W6plxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTaG93QWxsTW9kZVZlcnRpY2FsQm9yZGVySGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC0gdGhpcy5nZXRTaG93QWxsTW9kZVJlYWxIZWlnaHQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorqHnrpflvZPliY3muLjmiI/orr7orqHliIbovqjnjoflnKhTaG93QWxs5qih5byP6YCC6YWN5ZCO77yM5bem5Y+z6L6555WM55qE6buR6L655LmL5ZKM5Zyo5a6e6ZmF55S75biD5Lit55qE6ZW/5bqmXG4gICAgICovXG4gICAgc3RhdGljIGdldFNob3dBbGxNb2RlSG9yaXpvbnRhbEJvcmRlcldpZHRoKCkge1xuICAgICAgICByZXR1cm4gY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLSB0aGlzLmdldFNob3dBbGxNb2RlUmVhbFdpZHRoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6h566X5b2T5YmN5ri45oiP6K6+6K6h5YiG6L6o546H5ZyoU2hvd0FsbOaooeW8j+mAgumFjeWQju+8jOS8oOWFpeadpeeahOWOn+Wni+WdkOagh+WcqFNob3dBbGzmqKHlvI/kuIvnmoTjgIzotLTov5HlsY/luZXlupXpg6jjgI3lrp7pmYXlnZDmoIflgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0U2hvd0FsbE1vZGVOb2RlUG9zaXRpb25DbG9zZVRvQm90dG9tKG5vZGVQb3NJbkRlc2lnbikge1xuICAgICAgICBsZXQgc3JjU2NhbGVGb3JTaG93QWxsID0gTXVsdGlSZXNvbHV0aW9uQ29tcGF0LmdldFNob3dBbGxNb2RlU2NhbGUoKTtcbiAgICAgICAgbGV0IGJvdHRvbUJvcmRlckhlaWdodEluQ2FudmFzID0gTXVsdGlSZXNvbHV0aW9uQ29tcGF0LmdldFNob3dBbGxNb2RlVmVydGljYWxCb3JkZXJIZWlnaHQoKSAvIDI7XG4gICAgICAgIGxldCBzcmNOb2RlUG9zWUluQ2FudmFzID0gbm9kZVBvc0luRGVzaWduLnkgKiBzcmNTY2FsZUZvclNob3dBbGw7XG4gICAgICAgIGxldCBmaW5hbE5vZGVQb3NZSW5DYW52YXMgPSBzcmNOb2RlUG9zWUluQ2FudmFzIC0gYm90dG9tQm9yZGVySGVpZ2h0SW5DYW52YXM7XG4gICAgICAgIGxldCBub2RlUG9zWUluRGVzaWduID0gZmluYWxOb2RlUG9zWUluQ2FudmFzIC8gc3JjU2NhbGVGb3JTaG93QWxsO1xuICAgICAgICByZXR1cm4gY2MudjIobm9kZVBvc0luRGVzaWduLngsIG5vZGVQb3NZSW5EZXNpZ24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuiKgueCueWcqOiuvuiuoeWIhui+qOeOh+S4reeahOWdkOagh+i9rOaNouS4uuiKgueCueWcqOWunumZheeUu+W4g+S4reeahOWdkOagh1xuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0Tm9kZVBvc0luRGVzaWduVG9Ob2RlUG9zSW5DYW52YXMobm9kZVBvc0luRGVzaWduKSB7XG4gICAgICAgIHJldHVybiBub2RlUG9zSW5EZXNpZ24uc3ViKGNjLnYyKHRoaXMuZ2V0U2hvd0FsbE1vZGVTY2FsZSgpLCB0aGlzLmdldFNob3dBbGxNb2RlU2NhbGUoKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuiKgueCueWcqOWunumZheeUu+W4g+S4reeahOWdkOagh+i9rOaNouS4uuiKgueCueWcqOiuvuiuoeWIhui+qOeOh+S4reeahOWdkOagh1xuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0Tm9kZVBvc0luQ2FudmFzVG9Ob2RlUG9zSW5EZXNpZ24obm9kZVBvc0luQ2FudmFzKSB7XG4gICAgICAgIHJldHVybiBub2RlUG9zSW5DYW52YXMuZGl2KGNjLnYyKHRoaXMuZ2V0U2hvd0FsbE1vZGVTY2FsZSgpLCB0aGlzLmdldFNob3dBbGxNb2RlU2NhbGUoKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWwhuiuvuiuoeWIhui+qOeOh+S4i+eahOWuveW6pui9rOaNouS4uuWunumZheeUu+W4g+S4reeahOWuveW6plxuICAgICAqXG4gICAgICogQHBhcmFtIHdpZHRoSW5EZXNpZ24g6K6+6K6h5YiG6L6o546H5LiL55qE5a695bqmXG4gICAgICovXG4gICAgc3RhdGljIGNvbnZlcnRXaWR0aEluRGVzaWduVG9XaWR0aEluQ2FudmFzKHdpZHRoSW5EZXNpZ24pIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoSW5EZXNpZ24gKiB0aGlzLmdldFNob3dBbGxNb2RlU2NhbGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIblrp7pmYXnlLvluIPkuK3nmoTlrr3luqbovazmjaLkuLrorr7orqHliIbovqjnjofkuIvnmoTlrr3luqZcbiAgICAgKlxuICAgICAqIEBwYXJhbSB3aWR0aEluQ2FudmFzIOeUu+W4g+S4reeahOWuveW6plxuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0V2lkdGhJbkNhbnZhc1RvV2lkdGhJbkRlc2lnbih3aWR0aEluQ2FudmFzKSB7XG4gICAgICAgIHJldHVybiB3aWR0aEluQ2FudmFzIC8gdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG6K6+6K6h5YiG6L6o546H5LiL55qE6auY5bqm6L2s5o2i5Li65a6e6ZmF55S75biD5Lit55qE6auY5bqmXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaGVpZ2h0SW5EZXNpZ24g6K6+6K6h5YiG6L6o546H5LiL55qE6auY5bqmXG4gICAgICovXG4gICAgc3RhdGljIGNvbnZlcnRIZWlnaHRJbkRlc2lnblRvSGVpZ2h0SW5DYW52YXMoaGVpZ2h0SW5EZXNpZ24pIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodEluRGVzaWduICogdGhpcy5nZXRTaG93QWxsTW9kZVNjYWxlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bCG5a6e6ZmF55S75biD5Lit55qE6auY5bqm6L2s5o2i5Li66K6+6K6h5YiG6L6o546H5LiL55qE5a695bqmXG4gICAgICogQHBhcmFtIGhlaWdodEluY2FudmFzIOeUu+W4g+S4reeahOmrmOW6plxuICAgICAqL1xuICAgIHN0YXRpYyBjb252ZXJ0SGVpZ2h0SW5DYW52YXNUb0hlaWdodEluRGVzaWduKGhlaWdodEluY2FudmFzKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHRJbmNhbnZhcyAvIHRoaXMuZ2V0U2hvd0FsbE1vZGVTY2FsZSgpO1xuICAgIH1cbn1cbiJdfQ==