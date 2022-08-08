
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL2NhbmR5TGFuZ3VhZ2UuanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2UiLCJMQU5HVUFHRV9WTiIsIkxBTkdVQUdFX0VOIiwiTEFOR1VBR0VfWkgiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsMEJBQXdCLGVBREw7QUFFbkIsWUFBVSxLQUZTO0FBR25CLGtCQUFnQixXQUhHO0FBSW5CLGtCQUFnQixXQUpHO0FBS25CLGlCQUFlLE9BTEk7QUFNbkIsYUFBVyxNQU5RO0FBT25CLGNBQVksT0FQTztBQVFuQixjQUFZLE9BUk87QUFTbkIsZ0JBQWMsVUFUSztBQVVuQixnQkFBYyxPQVZLO0FBV25CLGdCQUFjLFlBWEs7QUFZbkIsb0JBQWtCLDBDQVpDO0FBYW5CLG9CQUFrQixnQkFiQztBQWNuQixxQkFBbUIsaUNBZEE7QUFlbkIsaUJBQWU7QUFmSSxDQUF2QjtBQWlCQUQsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNDLFdBQWhDO0FBRUFELFFBQVEsQ0FBQ0csV0FBVCxHQUF1QjtBQUNuQixrQkFBZ0I7QUFERyxDQUF2Qjs7QUFHQUgsUUFBUSxDQUFDSSxrQkFBVCxHQUE4QixZQUFVO0FBQ3BDLE1BQUlDLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkMsSUFBN0MsSUFBcURILFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkNDLFNBQXJHLEVBQStHO0FBQzNHVCxJQUFBQSxRQUFRLENBQUNVLGtCQUFULENBQTRCLElBQTVCO0FBQ0g7O0FBQ0QsU0FBT0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixDQUFQO0FBQ0gsQ0FORDs7QUFPQVIsUUFBUSxDQUFDVSxrQkFBVCxHQUE4QixVQUFTQyxlQUFULEVBQTBCO0FBQ3BELE1BQUlOLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixrQkFBckIsRUFBeUNELGVBQXpDO0FBQ0gsQ0FIRDs7QUFJQVgsUUFBUSxDQUFDYSxRQUFULEdBQW9CLFlBQVU7QUFDMUIsU0FBT2IsUUFBUSxDQUFDQyxXQUFoQixDQUQwQixDQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWpCRDs7QUFrQkFELFFBQVEsQ0FBQ2MsY0FBVCxHQUEwQixVQUFTQyxRQUFULEVBQW1CO0FBQ3pDLE1BQUlDLFNBQVMsR0FBU0QsUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDWSxLQUFyQyxDQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBTUosUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDYyxRQUFyQyxDQUF0Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUwsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxTQUFLRSxXQUFMLENBQWlCUCxTQUFTLENBQUNLLENBQUQsQ0FBMUI7QUFDSDs7QUFDRCxPQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsWUFBWSxDQUFDRyxNQUE5QixFQUFzQ0QsRUFBQyxFQUF2QyxFQUEwQztBQUN0QyxTQUFLRSxXQUFMLENBQWlCSixZQUFZLENBQUNFLEVBQUQsQ0FBN0I7QUFDSDtBQUNKLENBVEQ7O0FBVUFyQixRQUFRLENBQUN3QixTQUFULEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQixTQUFPLEtBQUtaLFFBQUwsR0FBZ0JZLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUdBekIsUUFBUSxDQUFDdUIsV0FBVCxHQUF1QixVQUFTRyxPQUFULEVBQWtCO0FBQ3JDLE1BQUkxQixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxNQUEwQ25CLFNBQTlDLEVBQXdEO0FBQ3BEaUIsSUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCN0IsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsQ0FBakI7QUFDSDtBQUNKLENBSkQ7O0FBS0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9CLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTGFuZ3VhZ2UgPSB7fTtcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xuICAgIFwibGJfdGl0bGVfc2VsZWN0X2xpbmVcIjogXCJEw5JORyDEkOG6tlQgQ8av4buiQ1wiLFxuICAgIFwibGJfc3R0XCI6IFwiU1RUXCIsXG4gICAgXCJsYl90aG9pX2dpYW5cIjogXCJUSOG7nEkgR0lBTlwiLFxuICAgIFwibGJfdGFpX2tob2FuXCI6IFwiVMOASSBLSE/huqJOXCIsXG4gICAgXCJsYl9ub190aGFuZ1wiOiBcIlRI4bquTkdcIixcbiAgICBcImxiX2xvYWlcIjogXCJMT+G6oElcIixcbiAgICBcImxiX3BoaWVuXCI6IFwiUEhJw4pOXCIsXG4gICAgXCJsYl9waG9uZ1wiOiBcIlBIw5JOR1wiLFxuICAgIFwibGJfY2hpdGlldFwiOiBcIkNISSBUSeG6vlRcIixcbiAgICBcImxiUGhpZW5UeHRcIjogXCJQaGnDqm5cIixcbiAgICBcImxiTW9uZXlUeHRcIjogXCJU4buVbmcgdGjhuq9uZ1wiLFxuICAgIFwibm90aV9ub3RfdHJpYWxcIjogXCJDaOG7qWMgbsSDbmcgbsOgeSBraMO0bmcgY8OzIOG7nyBjaOG6vyDEkeG7mSBjaMahaSB0aOG7rVwiLFxuICAgIFwibm90aV9ub3RfbW9uZXlcIjogXCJLaMO0bmcgxJHhu6cgc+G7kSBkxrBcIixcbiAgICBcIm5vdGlfaXNfcGxheWluZ1wiOiBcIkhp4buHbiDEkWFuZyB0cm9uZyB0aeG6v24gdHLDrG5oIHF1YXlcIixcbiAgICBcInh4eHh4eHh4eHh4XCI6IFwieHh4eHh4eHh4eHhcIixcbn07XG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuXG5MYW5ndWFnZS5MQU5HVUFHRV9aSCA9IHtcbiAgICBcImhvbWVfc2V0dGluZ1wiOiBcInh4eHh4eHh4XCIsXG59O1xuTGFuZ3VhZ2UuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSB1bmRlZmluZWQpe1xuICAgICAgICBMYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UoXCJlblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKTtcbn07XG5MYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbihjdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIiwgY3VycmVudExhbmd1YWdlKTtcbn07XG5MYW5ndWFnZS5MQU5HVUFHRSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgIC8vIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLmdldEN1cnJlbnRMYW5ndWFnZSgpO1xuICAgIC8vIHN3aXRjaCAoY3VycmVudExhbmd1YWdlKSB7XG4gICAgLy8gICAgIGNhc2UgXCJ2blwiOntcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjYXNlIFwiZW5cIjp7XG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfRU47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgY2FzZSBcInpoXCI6IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9aSDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBkZWZhdWx0OiB7XG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59O1xuTGFuZ3VhZ2UuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihub2RlVHJlZSkge1xuICAgIGxldCBsaXN0TGFiZWwgICAgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuTGFiZWwpO1xuICAgIGxldCBsaXN0UmljaFRleHQgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuUmljaFRleHQpO1xuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdExhYmVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0TGFiZWxbaV0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RSaWNoVGV4dC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdFJpY2hUZXh0W2ldKTtcbiAgICB9XG59O1xuTGFuZ3VhZ2UuZ2V0U3RyaW5nID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuTEFOR1VBR0UoKVtrZXldO1xufTtcbkxhbmd1YWdlLnNldExhbmd1YWdlID0gZnVuY3Rpb24oc3ViTm9kZSkge1xuICAgIGlmIChMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXSE9PSB1bmRlZmluZWQpe1xuICAgICAgICBzdWJOb2RlLnN0cmluZyA9IExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdO1xuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IExhbmd1YWdlO1xuIl19