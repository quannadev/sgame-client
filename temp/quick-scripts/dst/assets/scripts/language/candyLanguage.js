
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/candyLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51aa1MI6HdLxbskwijQcy94', 'candyLanguage');
// scripts/language/candyLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_title_select_line": "DÒNG ĐẶT CƯỢC",
  "lb_stt": "STT",
  "lb_thoi_gian": "THỜI GIAN",
  "lb_tai_khoan": "TÀI KHOẢN",
  "lb_no_thang": "THẮNG",
  "lb_loai": "LOẠI",
  "lb_phien": "PHIÊN",
  "lb_phong": "PHÒNG",
  "lb_chitiet": "CHI TIẾT",
  "lbPhienTxt": "Phiên",
  "lbMoneyTxt": "Tổng thắng",
  "noti_not_trial": "Chức năng này không có ở chế độ chơi thử",
  "noti_not_money": "Không đủ số dư",
  "noti_is_playing": "Hiện đang trong tiến trình quay",
  "xxxxxxxxxxx": "xxxxxxxxxxx"
};
Language.LANGUAGE_EN = Language.LANGUAGE_VN;
Language.LANGUAGE_ZH = {
  "home_setting": "xxxxxxxx"
};

Language.getCurrentLanguage = function () {
  var localStorage = cc.sys.localStorage;

  if (localStorage.getItem("current_language") === null || localStorage.getItem("current_language") === undefined) {
    Language.setCurrentLanguage("en");
  }

  return localStorage.getItem("current_language");
};

Language.setCurrentLanguage = function (currentLanguage) {
  var localStorage = cc.sys.localStorage;
  localStorage.setItem("current_language", currentLanguage);
};

Language.LANGUAGE = function () {
  return Language.LANGUAGE_VN; // let currentLanguage = this.getCurrentLanguage();
  // switch (currentLanguage) {
  //     case "vn":{
  //         return Language.LANGUAGE_VN;
  //     }
  //     case "en":{
  //         return Language.LANGUAGE_EN;
  //     }
  //     case "zh": {
  //         return Language.LANGUAGE_ZH;
  //     }
  //     default: {
  //         return Language.LANGUAGE_VN;
  //     }
  // }
};

Language.changeLanguage = function (nodeTree) {
  var listLabel = nodeTree.getComponentsInChildren(cc.Label);
  var listRichText = nodeTree.getComponentsInChildren(cc.RichText);

  for (var i = 0; i < listLabel.length; i++) {
    this.setLanguage(listLabel[i]);
  }

  for (var _i = 0; _i < listRichText.length; _i++) {
    this.setLanguage(listRichText[_i]);
  }
};

Language.getString = function (key) {
  return this.LANGUAGE()[key];
};

Language.setLanguage = function (subNode) {
  if (Language.LANGUAGE()[subNode.node.name] !== undefined) {
    subNode.string = Language.LANGUAGE()[subNode.node.name];
  }
};

module.exports = Language;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXGNhbmR5TGFuZ3VhZ2UuanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2UiLCJMQU5HVUFHRV9WTiIsIkxBTkdVQUdFX0VOIiwiTEFOR1VBR0VfWkgiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsMEJBQXdCLGVBREw7QUFFbkIsWUFBVSxLQUZTO0FBR25CLGtCQUFnQixXQUhHO0FBSW5CLGtCQUFnQixXQUpHO0FBS25CLGlCQUFlLE9BTEk7QUFNbkIsYUFBVyxNQU5RO0FBT25CLGNBQVksT0FQTztBQVFuQixjQUFZLE9BUk87QUFTbkIsZ0JBQWMsVUFUSztBQVVuQixnQkFBYyxPQVZLO0FBV25CLGdCQUFjLFlBWEs7QUFZbkIsb0JBQWtCLDBDQVpDO0FBYW5CLG9CQUFrQixnQkFiQztBQWNuQixxQkFBbUIsaUNBZEE7QUFlbkIsaUJBQWU7QUFmSSxDQUF2QjtBQWlCQUQsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNDLFdBQWhDO0FBRUFELFFBQVEsQ0FBQ0csV0FBVCxHQUF1QjtBQUNuQixrQkFBZ0I7QUFERyxDQUF2Qjs7QUFHQUgsUUFBUSxDQUFDSSxrQkFBVCxHQUE4QixZQUFVO0FBQ3BDLE1BQUlDLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkMsSUFBN0MsSUFBcURILFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkNDLFNBQXJHLEVBQStHO0FBQzNHVCxJQUFBQSxRQUFRLENBQUNVLGtCQUFULENBQTRCLElBQTVCO0FBQ0g7O0FBQ0QsU0FBT0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixDQUFQO0FBQ0gsQ0FORDs7QUFPQVIsUUFBUSxDQUFDVSxrQkFBVCxHQUE4QixVQUFTQyxlQUFULEVBQTBCO0FBQ3BELE1BQUlOLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixrQkFBckIsRUFBeUNELGVBQXpDO0FBQ0gsQ0FIRDs7QUFJQVgsUUFBUSxDQUFDYSxRQUFULEdBQW9CLFlBQVU7QUFDMUIsU0FBT2IsUUFBUSxDQUFDQyxXQUFoQixDQUQwQixDQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWpCRDs7QUFrQkFELFFBQVEsQ0FBQ2MsY0FBVCxHQUEwQixVQUFTQyxRQUFULEVBQW1CO0FBQ3pDLE1BQUlDLFNBQVMsR0FBU0QsUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDWSxLQUFyQyxDQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBTUosUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDYyxRQUFyQyxDQUF0Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUwsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxTQUFLRSxXQUFMLENBQWlCUCxTQUFTLENBQUNLLENBQUQsQ0FBMUI7QUFDSDs7QUFDRCxPQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsWUFBWSxDQUFDRyxNQUE5QixFQUFzQ0QsRUFBQyxFQUF2QyxFQUEwQztBQUN0QyxTQUFLRSxXQUFMLENBQWlCSixZQUFZLENBQUNFLEVBQUQsQ0FBN0I7QUFDSDtBQUNKLENBVEQ7O0FBVUFyQixRQUFRLENBQUN3QixTQUFULEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQixTQUFPLEtBQUtaLFFBQUwsR0FBZ0JZLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUdBekIsUUFBUSxDQUFDdUIsV0FBVCxHQUF1QixVQUFTRyxPQUFULEVBQWtCO0FBQ3JDLE1BQUkxQixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxNQUEwQ25CLFNBQTlDLEVBQXdEO0FBQ3BEaUIsSUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCN0IsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsQ0FBakI7QUFDSDtBQUNKLENBSkQ7O0FBS0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9CLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTGFuZ3VhZ2UgPSB7fTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfVk4gPSB7XHJcbiAgICBcImxiX3RpdGxlX3NlbGVjdF9saW5lXCI6IFwiRMOSTkcgxJDhurZUIEPGr+G7okNcIixcclxuICAgIFwibGJfc3R0XCI6IFwiU1RUXCIsXHJcbiAgICBcImxiX3Rob2lfZ2lhblwiOiBcIlRI4bucSSBHSUFOXCIsXHJcbiAgICBcImxiX3RhaV9raG9hblwiOiBcIlTDgEkgS0hP4bqiTlwiLFxyXG4gICAgXCJsYl9ub190aGFuZ1wiOiBcIlRI4bquTkdcIixcclxuICAgIFwibGJfbG9haVwiOiBcIkxP4bqgSVwiLFxyXG4gICAgXCJsYl9waGllblwiOiBcIlBIScOKTlwiLFxyXG4gICAgXCJsYl9waG9uZ1wiOiBcIlBIw5JOR1wiLFxyXG4gICAgXCJsYl9jaGl0aWV0XCI6IFwiQ0hJIFRJ4bq+VFwiLFxyXG4gICAgXCJsYlBoaWVuVHh0XCI6IFwiUGhpw6puXCIsXHJcbiAgICBcImxiTW9uZXlUeHRcIjogXCJU4buVbmcgdGjhuq9uZ1wiLFxyXG4gICAgXCJub3RpX25vdF90cmlhbFwiOiBcIkNo4bupYyBuxINuZyBuw6B5IGtow7RuZyBjw7Mg4bufIGNo4bq/IMSR4buZIGNoxqFpIHRo4butXCIsXHJcbiAgICBcIm5vdGlfbm90X21vbmV5XCI6IFwiS2jDtG5nIMSR4bunIHPhu5EgZMawXCIsXHJcbiAgICBcIm5vdGlfaXNfcGxheWluZ1wiOiBcIkhp4buHbiDEkWFuZyB0cm9uZyB0aeG6v24gdHLDrG5oIHF1YXlcIixcclxuICAgIFwieHh4eHh4eHh4eHhcIjogXCJ4eHh4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG5cclxuTGFuZ3VhZ2UuTEFOR1VBR0VfWkggPSB7XHJcbiAgICBcImhvbWVfc2V0dGluZ1wiOiBcInh4eHh4eHh4XCIsXHJcbn07XHJcbkxhbmd1YWdlLmdldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlKFwiZW5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xyXG59O1xyXG5MYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbihjdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIsIGN1cnJlbnRMYW5ndWFnZSk7XHJcbn07XHJcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgIC8vIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLmdldEN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgLy8gc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgIC8vICAgICBjYXNlIFwidm5cIjp7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2FzZSBcImVuXCI6e1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfRU47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNhc2UgXCJ6aFwiOiB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9aSDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZGVmYXVsdDoge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG59O1xyXG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XHJcbiAgICBsZXQgbGlzdExhYmVsICAgICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLkxhYmVsKTtcclxuICAgIGxldCBsaXN0UmljaFRleHQgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuUmljaFRleHQpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdExhYmVsW2ldKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RSaWNoVGV4dFtpXSk7XHJcbiAgICB9XHJcbn07XHJcbkxhbmd1YWdlLmdldFN0cmluZyA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuTEFOR1VBR0UoKVtrZXldO1xyXG59O1xyXG5MYW5ndWFnZS5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uKHN1Yk5vZGUpIHtcclxuICAgIGlmIChMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXSE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XHJcbiAgICB9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XHJcbiJdfQ==