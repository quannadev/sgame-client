
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

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL211bHRpUmVzb2x1dGlvbi9TY2FsZUJhY2tncm91bmQuanMiXSwibmFtZXMiOlsiY2MiLCJfZGVjb3JhdG9yIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiU2NhbGVCYWNrZ3JvdW5kIiwib25Mb2FkIiwic3JjU2NhbGVGb3JTaG93QWxsIiwiTWF0aCIsIm1pbiIsInZpZXciLCJnZXRDYW52YXNTaXplIiwid2lkdGgiLCJub2RlIiwiaGVpZ2h0IiwicmVhbFdpZHRoIiwicmVhbEhlaWdodCIsInNjYWxlIiwibWF4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUE4QkEsRUFBRSxDQUFDQyxVQUFqQztBQUFBLElBQVFDLE9BQVIsa0JBQVFBLE9BQVI7QUFBQSxJQUFpQkMsUUFBakIsa0JBQWlCQSxRQUFqQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdxQkMsa0JBRHBCRjs7Ozs7Ozs7O1NBRUdHLFNBQUEsa0JBQVM7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxRQUFJQyxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxhQUFSLEdBQXdCQyxLQUF4QixHQUFnQyxLQUFLQyxJQUFMLENBQVVELEtBQW5ELEVBQTBEWCxFQUFFLENBQUNTLElBQUgsQ0FBUUMsYUFBUixHQUF3QkcsTUFBeEIsR0FBaUMsS0FBS0QsSUFBTCxDQUFVQyxNQUFyRyxDQUF6QjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLRixJQUFMLENBQVVELEtBQVYsR0FBa0JMLGtCQUFsQztBQUNBLFFBQUlTLFVBQVUsR0FBRyxLQUFLSCxJQUFMLENBQVVDLE1BQVYsR0FBbUJQLGtCQUFwQyxDQWhCSyxDQWtCTDs7QUFDQSxTQUFLTSxJQUFMLENBQVVJLEtBQVYsR0FBa0JULElBQUksQ0FBQ1UsR0FBTCxDQUFTakIsRUFBRSxDQUFDUyxJQUFILENBQVFDLGFBQVIsR0FBd0JDLEtBQXhCLEdBQWdDRyxTQUF6QyxFQUFvRGQsRUFBRSxDQUFDUyxJQUFILENBQVFDLGFBQVIsR0FBd0JHLE1BQXhCLEdBQWlDRSxVQUFyRixDQUFsQixDQW5CSyxDQXFCTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OztFQTNCd0NmLEVBQUUsQ0FBQ2tCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqXG4gKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX18tLS0tfn5+fn5+fn5+fn4tLS0tLS1fX19cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuICAuICAgfn4vLz09PT0uLi4uLi4gICAgICAgICAgX18tLX4gfn5cbiAqICAgICAgICAgICAgICAgICAgIC0uICAgICAgICAgICAgXFxffC8vICAgICB8fHxcXFxcICB+fn5+fn46Ojo6Li4uIC9+XG4gKiAgICAgICAgICAgICAgICBfX18tPT1fICAgICAgIF8tfm9+ICBcXC8gICAgfHx8ICBcXFxcICAgICAgICAgICAgXy9+fi1cbiAqICAgICAgICBfXy0tLX5+fi49PX58fFxcPV8gICAgLV8tLX4vXy1+fC0gICB8XFxcXCAgIFxcXFwgICAgICAgIF8vflxuICogICAgXy1+fiAgICAgLj1+ICAgIHwgIFxcXFwtXyAgICAnLX43ICAvLSAgIC8gIHx8ICAgIFxcICAgICAgL1xuICogIC5+ICAgICAgIC5+ICAgICAgIHwgICBcXFxcIC1fICAgIC8gIC8tICAgLyAgIHx8ICAgICAgXFwgICAvXG4gKiAvICBfX19fICAvICAgICAgICAgfCAgICAgXFxcXCB+LV8vICAvfC0gXy8gICAufHwgICAgICAgXFwgL1xuICogfH5+ICAgIH5+fC0tfn5+fi0tXyBcXCAgICAgfj09LS8gICB8IFxcfi0tPT09fn4gICAgICAgIC5cXFxuICogICAgICAgICAgJyAgICAgICAgIH4tfCAgICAgIC98ICAgIHwtflxcfn4gICAgICAgX18tLX5+XG4gKiAgICAgICAgICAgICAgICAgICAgICB8LX5+LV8vIHwgICAgfCAgIH5cXF8gICBfLX4gICAgICAgICAgICAvXFxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgLyAgXFwgICAgIFxcX18gICBcXC9+ICAgICAgICAgICAgICAgIFxcX19cbiAqICAgICAgICAgICAgICAgICAgICAgICBfLS1+IF8vIHwgLi1+fl9fX18tLX4tLyAgICAgICAgICAgICAgICAgIH5+PT0uXG4gKiAgICAgICAgICAgICAgICAgICAgICAoKC0+L34gICAnLnx8fCcgLV98ICAgIH5+LS8gLCAgICAgICAgICAgICAgLiBffHxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLV8gICAgIH5cXCAgICAgIH5+LS0tbF9faV9faV9faS0tfn5fL1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLX4tX18gICB+KSAgXFwtLV9fX19fX19fX19fX19fLS1+flxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8uLX5+fi1+Xy0tfi0gfC0tLS0tLS1+fn5+fn5+flxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLi1+fn4tLVxcXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDnpZ7lhb3kv53kvZFcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Luj56CB5pegQlVHIVxuICovXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2Mg6IOM5pmv6Ieq6YCC5bqU5omA5pyJ5YiG6L6o546H55qE6ISa5pysXG4gKiBAYXV0aG9yIGNhaXpoaXRhb1xuICogQHZlcnNpb24gMC4xLjBcbiAqIEBzaW5jZSAyMDE4LTExLTMwXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiDnlKjms5XvvJpcbiAqXG4gKiAgICAgIDEuIOWwhuacrOe7hOS7tuaMgui9veWcqOiKgueCueS4iuWNs+WPr1xuICpcbiAqIOazqOaEj++8mlxuICpcbiAqICAgICAgMS4g5oyC6L296L+Z5Liq6ISa5pys55qE6IqC54K55LiN6IO95Yqg5YWlV2lkZ2V057uE5Lu277yM5LiN54S26L+Z5Liq6YCC6YWN5piv5rKh5pyJ5pWI5p6c55qEXG4gKiAgICAgIDIuIOebruWJjeWPquaUr+aMgSBTSE9XX0FMTCDmqKHlvI/kuIvnmoTog4zmma/nvKnmlL7pgILphY3vvIzkuI3mlK/mjIHlhbbku5bmqKHlvI/nmoTog4zmma/nvKnmlL5cbiAqXG4gKiBAZXhhbXBsZVxuIGBgYFxuIC8vIGUuZy5cbiAvLyDku6PnoIHkuK3orr7nva4gU0hPV19BTEwg5qih5byP55qE5Y+C6ICD5Luj56CBXG4gY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSg3MjAsIDEyODAsIGNjLlJlc29sdXRpb25Qb2xpY3kuU0hPV19BTEwpO1xuXG4gLy8g5oiW6ICFIENhbnZhcyDnu4Tku7bkuK3vvIzlkIzml7bli77pgIkgRml0IFdpZHRoIOWSjCBGaXQgSGVpZ2h0XG4gYGBgXG4gKi9cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYWxlQmFja2dyb3VuZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyBpZiAoQ0NfREVCVUcpIHtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIuiwg+aVtOWJjVwiKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg5bGP5bmV5YiG6L6o546HOiAke2NjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLndpZHRofSB4ICR7Y2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDop4blm77nqpflj6Plj6/op4HljLrln5/liIbovqjnjoc6ICR7Y2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLndpZHRofSB4ICR7Y2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodH1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6KeG5Zu+5Lit6L655qGG5bC65a+4OiAke2NjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGh9IHggJHtjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodH1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6K6+5aSH5oiW5rWP6KeI5Zmo5YOP57Sg5q+U5L6LOiAke2NjLnZpZXcuZ2V0RGV2aWNlUGl4ZWxSYXRpbygpfWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDnlLvluINYOuiuvuiuoVg9JHtjYy52aWV3LmdldFNjYWxlWCgpfSDvvIznlLvluINZOuiuvuiuoVk9JHtjYy52aWV3LmdldFNjYWxlWSgpfWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlrr3pq5g6ICR7dGhpcy5ub2RlLndpZHRofSB4ICR7dGhpcy5ub2RlLmhlaWdodH1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K557yp5pS+OiAke3RoaXMubm9kZS5zY2FsZVh9IHggJHt0aGlzLm5vZGUuc2NhbGVZfWApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlID0gTWF0aC5tYXgoY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyB0aGlzLm5vZGUud2lkdGgsIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHRoaXMubm9kZS5oZWlnaHQpO1xuICAgICAgICAvLyAxLiDlhYjmib7liLAgU0hPV19BTEwg5qih5byP6YCC6YWN5LmL5ZCO77yM5pys6IqC54K555qE5a6e6ZmF5a696auY5Lul5Y+K5Yid5aeL57yp5pS+5YC8XG4gICAgICAgIGxldCBzcmNTY2FsZUZvclNob3dBbGwgPSBNYXRoLm1pbihjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCAvIHRoaXMubm9kZS53aWR0aCwgY2Mudmlldy5nZXRDYW52YXNTaXplKCkuaGVpZ2h0IC8gdGhpcy5ub2RlLmhlaWdodCk7XG4gICAgICAgIGxldCByZWFsV2lkdGggPSB0aGlzLm5vZGUud2lkdGggKiBzcmNTY2FsZUZvclNob3dBbGw7XG4gICAgICAgIGxldCByZWFsSGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodCAqIHNyY1NjYWxlRm9yU2hvd0FsbDtcblxuICAgICAgICAvLyAyLiDln7rkuo7nrKzkuIDmraXnmoTmlbDmja7vvIzlho3lgZrnvKnmlL7pgILphY1cbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gTWF0aC5tYXgoY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyByZWFsV2lkdGgsIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHJlYWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WxleekuueahOWuvemrmDogJHtyZWFsV2lkdGh9IHggJHtyZWFsSGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WxleekuueahOe8qeaUvjogJHtzcmNTY2FsZUZvclNob3dBbGx9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCueWcqFNIT1dfQUxM5qih5byP5LiL6L+Y6ZyA6KaB6L+b6KGM55qE57yp5pS+OiAke3RoaXMubm9kZS5zY2FsZX0g5omN6IO96L6+5Yiw5YWo5bGPYCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG4iXX0=