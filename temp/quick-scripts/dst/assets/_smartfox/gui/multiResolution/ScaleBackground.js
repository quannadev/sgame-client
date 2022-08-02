
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/multiResolution/ScaleBackground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4282d9E1k9CdrycrxLzXH6H', 'ScaleBackground');
// _smartfox/gui/multiResolution/ScaleBackground.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _class;

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 *
 *
 *                                                    __----~~~~~~~~~~~------___
 *                                   .  .   ~~//====......          __--~ ~~
 *                   -.            \_|//     |||\\  ~~~~~~::::... /~
 *                ___-==_       _-~o~  \/    |||  \\            _/~~-
 *        __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
 *    _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
 *  .~       .~       |   \\ -_    /  /-   /   ||      \   /
 * /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
 * |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
 *          '         ~-|      /|    |-~\~~       __--~~
 *                      |-~~-_/ |    |   ~\_   _-~            /\
 *                           /  \     \__   \/~                \__
 *                       _--~ _/ | .-~~____--~-/                  ~~==.
 *                      ((->/~   '.|||' -_|    ~~-/ ,              . _||
 *                                 -_     ~\      ~~---l__i__i__i--~~_/
 *                                 _-~-__   ~)  \--______________--~~
 *                               //.-~~~-~_--~- |-------~~~~~~~~
 *                                      //.-~~~--\
 *                               神兽保佑
 *                              代码无BUG!
 */
var _cc$_decorator = cc._decorator,
    ccclass = _cc$_decorator.ccclass,
    property = _cc$_decorator.property;
/**
 * @classdesc 背景自适应所有分辨率的脚本
 * @author caizhitao
 * @version 0.1.0
 * @since 2018-11-30
 * @description
 *
 * 用法：
 *
 *      1. 将本组件挂载在节点上即可
 *
 * 注意：
 *
 *      1. 挂载这个脚本的节点不能加入Widget组件，不然这个适配是没有效果的
 *      2. 目前只支持 SHOW_ALL 模式下的背景缩放适配，不支持其他模式的背景缩放
 *
 * @example
 ```
 // e.g.
 // 代码中设置 SHOW_ALL 模式的参考代码
 cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);

 // 或者 Canvas 组件中，同时勾选 Fit Width 和 Fit Height
 ```
 */

var ScaleBackground = ccclass(_class = /*#__PURE__*/function (_cc$Component) {
  _inheritsLoose(ScaleBackground, _cc$Component);

  function ScaleBackground() {
    return _cc$Component.apply(this, arguments) || this;
  }

  var _proto = ScaleBackground.prototype;

  _proto.onLoad = function onLoad() {
    // if (CC_DEBUG) {
    //     cc.log("调整前");
    //     cc.log(`屏幕分辨率: ${cc.view.getCanvasSize().width} x ${cc.view.getCanvasSize().height}`);
    //     cc.log(`视图窗口可见区域分辨率: ${cc.view.getVisibleSize().width} x ${cc.view.getVisibleSize().height}`);
    //     cc.log(`视图中边框尺寸: ${cc.view.getFrameSize().width} x ${cc.view.getFrameSize().height}`);
    //     cc.log(`设备或浏览器像素比例: ${cc.view.getDevicePixelRatio()}`);
    //     cc.log(`画布X:设计X=${cc.view.getScaleX()} ，画布Y:设计Y=${cc.view.getScaleY()}`);
    //     cc.log(`节点宽高: ${this.node.width} x ${this.node.height}`);
    //     cc.log(`节点缩放: ${this.node.scaleX} x ${this.node.scaleY}`);
    // }
    // this.node.scale = Math.max(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
    // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
    var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
    var realWidth = this.node.width * srcScaleForShowAll;
    var realHeight = this.node.height * srcScaleForShowAll; // 2. 基于第一步的数据，再做缩放适配

    this.node.scale = Math.max(cc.view.getCanvasSize().width / realWidth, cc.view.getCanvasSize().height / realHeight); // if (CC_DEBUG) {
    //     cc.log(`节点在SHOW_ALL模式下展示的宽高: ${realWidth} x ${realHeight}`);
    //     cc.log(`节点在SHOW_ALL模式下展示的缩放: ${srcScaleForShowAll}`);
    //     cc.log(`节点在SHOW_ALL模式下还需要进行的缩放: ${this.node.scale} 才能达到全屏`);
    // }
  };

  return ScaleBackground;
}(cc.Component)) || _class;

exports["default"] = ScaleBackground;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxndWlcXG11bHRpUmVzb2x1dGlvblxcU2NhbGVCYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbImNjIiwiX2RlY29yYXRvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNjYWxlQmFja2dyb3VuZCIsIm9uTG9hZCIsInNyY1NjYWxlRm9yU2hvd0FsbCIsIk1hdGgiLCJtaW4iLCJ2aWV3IiwiZ2V0Q2FudmFzU2l6ZSIsIndpZHRoIiwibm9kZSIsImhlaWdodCIsInJlYWxXaWR0aCIsInJlYWxIZWlnaHQiLCJzY2FsZSIsIm1heCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkF3QjhCQSxFQUFFLENBQUNDO0lBQXpCQyx5QkFBQUE7SUFBU0MsMEJBQUFBO0FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTJCcUJDLGtCQURwQkY7Ozs7Ozs7OztTQUVHRyxTQUFBLGtCQUFTO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsUUFBSUMsa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixFQUFFLENBQUNTLElBQUgsQ0FBUUMsYUFBUixHQUF3QkMsS0FBeEIsR0FBZ0MsS0FBS0MsSUFBTCxDQUFVRCxLQUFuRCxFQUEwRFgsRUFBRSxDQUFDUyxJQUFILENBQVFDLGFBQVIsR0FBd0JHLE1BQXhCLEdBQWlDLEtBQUtELElBQUwsQ0FBVUMsTUFBckcsQ0FBekI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0YsSUFBTCxDQUFVRCxLQUFWLEdBQWtCTCxrQkFBbEM7QUFDQSxRQUFJUyxVQUFVLEdBQUcsS0FBS0gsSUFBTCxDQUFVQyxNQUFWLEdBQW1CUCxrQkFBcEMsQ0FoQkssQ0FrQkw7O0FBQ0EsU0FBS00sSUFBTCxDQUFVSSxLQUFWLEdBQWtCVCxJQUFJLENBQUNVLEdBQUwsQ0FBU2pCLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxhQUFSLEdBQXdCQyxLQUF4QixHQUFnQ0csU0FBekMsRUFBb0RkLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxhQUFSLEdBQXdCRyxNQUF4QixHQUFpQ0UsVUFBckYsQ0FBbEIsQ0FuQkssQ0FxQkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7RUEzQndDZixFQUFFLENBQUNrQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqXHJcbiAqXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fLS0tLX5+fn5+fn5+fn5+LS0tLS0tX19fXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuICAuICAgfn4vLz09PT0uLi4uLi4gICAgICAgICAgX18tLX4gfn5cclxuICogICAgICAgICAgICAgICAgICAgLS4gICAgICAgICAgICBcXF98Ly8gICAgIHx8fFxcXFwgIH5+fn5+fjo6OjouLi4gL35cclxuICogICAgICAgICAgICAgICAgX19fLT09XyAgICAgICBfLX5vfiAgXFwvICAgIHx8fCAgXFxcXCAgICAgICAgICAgIF8vfn4tXHJcbiAqICAgICAgICBfXy0tLX5+fi49PX58fFxcPV8gICAgLV8tLX4vXy1+fC0gICB8XFxcXCAgIFxcXFwgICAgICAgIF8vflxyXG4gKiAgICBfLX5+ICAgICAuPX4gICAgfCAgXFxcXC1fICAgICctfjcgIC8tICAgLyAgfHwgICAgXFwgICAgICAvXHJcbiAqICAufiAgICAgICAufiAgICAgICB8ICAgXFxcXCAtXyAgICAvICAvLSAgIC8gICB8fCAgICAgIFxcICAgL1xyXG4gKiAvICBfX19fICAvICAgICAgICAgfCAgICAgXFxcXCB+LV8vICAvfC0gXy8gICAufHwgICAgICAgXFwgL1xyXG4gKiB8fn4gICAgfn58LS1+fn5+LS1fIFxcICAgICB+PT0tLyAgIHwgXFx+LS09PT1+fiAgICAgICAgLlxcXHJcbiAqICAgICAgICAgICcgICAgICAgICB+LXwgICAgICAvfCAgICB8LX5cXH5+ICAgICAgIF9fLS1+flxyXG4gKiAgICAgICAgICAgICAgICAgICAgICB8LX5+LV8vIHwgICAgfCAgIH5cXF8gICBfLX4gICAgICAgICAgICAvXFxcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAvICBcXCAgICAgXFxfXyAgIFxcL34gICAgICAgICAgICAgICAgXFxfX1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgXy0tfiBfLyB8IC4tfn5fX19fLS1+LS8gICAgICAgICAgICAgICAgICB+fj09LlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAoKC0+L34gICAnLnx8fCcgLV98ICAgIH5+LS8gLCAgICAgICAgICAgICAgLiBffHxcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtXyAgICAgflxcICAgICAgfn4tLS1sX19pX19pX19pLS1+fl8vXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy1+LV9fICAgfikgIFxcLS1fX19fX19fX19fX19fXy0tfn5cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8uLX5+fi1+Xy0tfi0gfC0tLS0tLS1+fn5+fn5+flxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8uLX5+fi0tXFxcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg56We5YW95L+d5L2RXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Luj56CB5pegQlVHIVxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjIOiDjOaZr+iHqumAguW6lOaJgOacieWIhui+qOeOh+eahOiEmuacrFxyXG4gKiBAYXV0aG9yIGNhaXpoaXRhb1xyXG4gKiBAdmVyc2lvbiAwLjEuMFxyXG4gKiBAc2luY2UgMjAxOC0xMS0zMFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICog55So5rOV77yaXHJcbiAqXHJcbiAqICAgICAgMS4g5bCG5pys57uE5Lu25oyC6L295Zyo6IqC54K55LiK5Y2z5Y+vXHJcbiAqXHJcbiAqIOazqOaEj++8mlxyXG4gKlxyXG4gKiAgICAgIDEuIOaMgui9vei/meS4quiEmuacrOeahOiKgueCueS4jeiDveWKoOWFpVdpZGdldOe7hOS7tu+8jOS4jeeEtui/meS4qumAgumFjeaYr+ayoeacieaViOaenOeahFxyXG4gKiAgICAgIDIuIOebruWJjeWPquaUr+aMgSBTSE9XX0FMTCDmqKHlvI/kuIvnmoTog4zmma/nvKnmlL7pgILphY3vvIzkuI3mlK/mjIHlhbbku5bmqKHlvI/nmoTog4zmma/nvKnmlL5cclxuICpcclxuICogQGV4YW1wbGVcclxuIGBgYFxyXG4gLy8gZS5nLlxyXG4gLy8g5Luj56CB5Lit6K6+572uIFNIT1dfQUxMIOaooeW8j+eahOWPguiAg+S7o+eggVxyXG4gY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTEwpO1xyXG5cclxuIC8vIOaIluiAhSBDYW52YXMg57uE5Lu25Lit77yM5ZCM5pe25Yu+6YCJIEZpdCBXaWR0aCDlkowgRml0IEhlaWdodFxyXG4gYGBgXHJcbiAqL1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NhbGVCYWNrZ3JvdW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBpZiAoQ0NfREVCVUcpIHtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwi6LCD5pW05YmNXCIpO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOWxj+W5leWIhui+qOeOhzogJHtjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodH1gKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGDop4blm77nqpflj6Plj6/op4HljLrln5/liIbovqjnjoc6ICR7Y2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRofSB4ICR7Y2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodH1gKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGDop4blm77kuK3ovrnmoYblsLrlr7g6ICR7Y2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0fWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOiuvuWkh+aIlua1j+iniOWZqOWDj+e0oOavlOS+izogJHtjYy52aWV3LmdldERldmljZVBpeGVsUmF0aW8oKX1gKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGDnlLvluINYOuiuvuiuoVg9JHtjYy52aWV3LmdldFNjYWxlWCgpfSDvvIznlLvluINZOuiuvuiuoVk9JHtjYy52aWV3LmdldFNjYWxlWSgpfWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCueWuvemrmDogJHt0aGlzLm5vZGUud2lkdGh9IHggJHt0aGlzLm5vZGUuaGVpZ2h0fWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCuee8qeaUvjogJHt0aGlzLm5vZGUuc2NhbGVYfSB4ICR7dGhpcy5ub2RlLnNjYWxlWX1gKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZSA9IE1hdGgubWF4KGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoIC8gdGhpcy5ub2RlLndpZHRoLCBjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHQgLyB0aGlzLm5vZGUuaGVpZ2h0KTtcclxuICAgICAgICAvLyAxLiDlhYjmib7liLAgU0hPV19BTEwg5qih5byP6YCC6YWN5LmL5ZCO77yM5pys6IqC54K555qE5a6e6ZmF5a696auY5Lul5Y+K5Yid5aeL57yp5pS+5YC8XHJcbiAgICAgICAgbGV0IHNyY1NjYWxlRm9yU2hvd0FsbCA9IE1hdGgubWluKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRoIC8gdGhpcy5ub2RlLndpZHRoLCBjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHQgLyB0aGlzLm5vZGUuaGVpZ2h0KTtcclxuICAgICAgICBsZXQgcmVhbFdpZHRoID0gdGhpcy5ub2RlLndpZHRoICogc3JjU2NhbGVGb3JTaG93QWxsO1xyXG4gICAgICAgIGxldCByZWFsSGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodCAqIHNyY1NjYWxlRm9yU2hvd0FsbDtcclxuXHJcbiAgICAgICAgLy8gMi4g5Z+65LqO56ys5LiA5q2l55qE5pWw5o2u77yM5YaN5YGa57yp5pS+6YCC6YWNXHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gTWF0aC5tYXgoY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyByZWFsV2lkdGgsIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHJlYWxIZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBpZiAoQ0NfREVCVUcpIHtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WxleekuueahOWuvemrmDogJHtyZWFsV2lkdGh9IHggJHtyZWFsSGVpZ2h0fWApO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCueWcqFNIT1dfQUxM5qih5byP5LiL5bGV56S655qE57yp5pS+OiAke3NyY1NjYWxlRm9yU2hvd0FsbH1gKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+i/mOmcgOimgei/m+ihjOeahOe8qeaUvjogJHt0aGlzLm5vZGUuc2NhbGV9IOaJjeiDvei+vuWIsOWFqOWxj2ApO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=