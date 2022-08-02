
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/ItemChat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd572aGqd6RC44iX8j0ivaRH', 'ItemChat');
// scripts/abase/ItemChat.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    contentText: cc.RichText
  },
  init: function init(data, idx) {
    if (data.dataSender.dn == "ADMIN" || data.dataSender.dn == "CSKH-Van-Hanh" || data.dataSender.dn == "test102") {
      this.contentText.string = "<color=#00FF1F><b>" + data.dataSender.dn + "</b><br/></c><color=#FF0000><b>" + data.msg + "</b></color>";
    } else {
      this.contentText.string = "<color=#FBD200>" + data.dataSender.dn + ": </color>" + data.msg;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXEl0ZW1DaGF0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJjb250ZW50VGV4dCIsIlJpY2hUZXh0IiwiaW5pdCIsImRhdGEiLCJpZHgiLCJkYXRhU2VuZGVyIiwiZG4iLCJzdHJpbmciLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUdKLEVBQUUsQ0FBQ0s7QUFEVCxHQUZQO0FBS0xDLEVBQUFBLElBTEssZ0JBS0FDLElBTEEsRUFLTUMsR0FMTixFQUtXO0FBQ1osUUFBSUQsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxFQUFoQixJQUFzQixPQUF0QixJQUFpQ0gsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxFQUFoQixJQUFzQixlQUF2RCxJQUEwRUgsSUFBSSxDQUFDRSxVQUFMLENBQWdCQyxFQUFoQixJQUFzQixTQUFwRyxFQUE4RztBQUMxRyxXQUFLTixXQUFMLENBQWlCTyxNQUFqQixHQUEwQix1QkFBc0JKLElBQUksQ0FBQ0UsVUFBTCxDQUFnQkMsRUFBdEMsR0FBeUMsaUNBQXpDLEdBQTJFSCxJQUFJLENBQUNLLEdBQWhGLEdBQW9GLGNBQTlHO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS1IsV0FBTCxDQUFpQk8sTUFBakIsR0FBOEIsb0JBQW1CSixJQUFJLENBQUNFLFVBQUwsQ0FBZ0JDLEVBQW5DLEdBQXNDLFlBQXRDLEdBQW1ESCxJQUFJLENBQUNLLEdBQXRGO0FBQ0g7QUFDSjtBQVhJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNvbnRlbnRUZXh0IDogY2MuUmljaFRleHQsXHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhLCBpZHgpIHtcclxuICAgICAgICBpZiAoZGF0YS5kYXRhU2VuZGVyLmRuID09IFwiQURNSU5cIiB8fCBkYXRhLmRhdGFTZW5kZXIuZG4gPT0gXCJDU0tILVZhbi1IYW5oXCIgfHwgZGF0YS5kYXRhU2VuZGVyLmRuID09IFwidGVzdDEwMlwiKXtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50VGV4dC5zdHJpbmcgPSBcIjxjb2xvcj0jMDBGRjFGPjxiPlwiKyBkYXRhLmRhdGFTZW5kZXIuZG4rXCI8L2I+PGJyLz48L2M+PGNvbG9yPSNGRjAwMDA+PGI+XCIrZGF0YS5tc2crXCI8L2I+PC9jb2xvcj5cIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50VGV4dC5zdHJpbmcgICAgID0gXCI8Y29sb3I9I0ZCRDIwMD5cIisgZGF0YS5kYXRhU2VuZGVyLmRuK1wiOiA8L2NvbG9yPlwiK2RhdGEubXNnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==