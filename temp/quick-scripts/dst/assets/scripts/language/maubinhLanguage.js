
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/maubinhLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3aa3aiw4O1DN6jMJX5d8rS4', 'maubinhLanguage');
// scripts/language/maubinhLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_xep_bai": "Xếp bài",
  "lb_so_bai": "So bài",
  "lb_bao_binh": "Báo binh",
  "xep_xong": "Xếp Xong",
  "bao_binh": "Báo Binh",
  "sap_ba_chi": "Sập 3 chi",
  "binh_lung": "Binh Lủng",
  "mau_thau": "Mậu Thầu",
  "mot_doi": "Một Đôi",
  "hai_doi": "Hai Đôi",
  "xam_co": "Xám Cô",
  "sanh": "Sảnh",
  "sanh_lon": "Sảnh Lớn",
  "thung": "Thùng",
  "cu_lu": "Cù Lũ",
  "tu_quy": "Tứ Quý",
  "thung_pha_sanh": "Thùng Phá Sảnh",
  "thung_pha_sanh_lon": "Thùng Phá Sảnh Lơn",
  "cu_lu_chi2": "Cù Lũ Chi 2",
  "xam_chi_cuoi": "Sám Chi Cuối",
  "tu_quy_chi2": "Tứ Quý Chi 2",
  "tu_quy_chi_dau": "Tứ Quý Chi Đầu",
  "thung_pha_sanh_chi2": "Thùng Phá Sảnh Chi 2",
  "thung_pha_sanh_chi_dau": "Thùng Phá Sảnh Chi Đầu",
  "noti_phong_day": "Phòng đã đầy vui vòng chọn phòng khác",
  "dang_ky_roi_ban": "Đăng ký rời bàn!",
  "huy_roi_ban": "Hủy rời bàn!",
  "home_setting": "xxxxxxxx"
};
Language.LANGUAGE_EN = Language.LANGUAGE_VN;
Language.LANGUAGE_ZH = {
  "home_setting": "xxxxxxxx"
};

Language.getCurrentLanguage = function () {
  var localStorage = cc.sys.localStorage;

  if (localStorage.getItem("current_language") === null || localStorage.getItem("current_language") === undefined) {
    Language.setCurrentLanguage("vn");
  }

  return localStorage.getItem("current_language");
};

Language.setCurrentLanguage = function (currentLanguage) {
  var localStorage = cc.sys.localStorage;
  localStorage.setItem("current_language", currentLanguage);
};

Language.LANGUAGE = function () {
  var currentLanguage = this.getCurrentLanguage();

  switch (currentLanguage) {
    case "vn":
      {
        return Language.LANGUAGE_VN;
      }

    case "en":
      {
        return Language.LANGUAGE_EN;
      }

    case "zh":
      {
        return Language.LANGUAGE_ZH;
      }

    default:
      {
        return Language.LANGUAGE_VN;
      }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXG1hdWJpbmhMYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZSIsIkxBTkdVQUdFX1ZOIiwiTEFOR1VBR0VfRU4iLCJMQU5HVUFHRV9aSCIsImdldEN1cnJlbnRMYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsImNjIiwic3lzIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEN1cnJlbnRMYW5ndWFnZSIsImN1cnJlbnRMYW5ndWFnZSIsInNldEl0ZW0iLCJMQU5HVUFHRSIsImNoYW5nZUxhbmd1YWdlIiwibm9kZVRyZWUiLCJsaXN0TGFiZWwiLCJnZXRDb21wb25lbnRzSW5DaGlsZHJlbiIsIkxhYmVsIiwibGlzdFJpY2hUZXh0IiwiUmljaFRleHQiLCJpIiwibGVuZ3RoIiwic2V0TGFuZ3VhZ2UiLCJnZXRTdHJpbmciLCJrZXkiLCJzdWJOb2RlIiwibm9kZSIsIm5hbWUiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBRyxFQUFmO0FBQ0FBLFFBQVEsQ0FBQ0MsV0FBVCxHQUF1QjtBQUNuQixnQkFBYyxTQURLO0FBRW5CLGVBQWEsUUFGTTtBQUduQixpQkFBZSxVQUhJO0FBSW5CLGNBQVksVUFKTztBQUtuQixjQUFZLFVBTE87QUFNbkIsZ0JBQWMsV0FOSztBQU9uQixlQUFhLFdBUE07QUFRbkIsY0FBWSxVQVJPO0FBU25CLGFBQVcsU0FUUTtBQVVuQixhQUFXLFNBVlE7QUFXbkIsWUFBVSxRQVhTO0FBWW5CLFVBQVEsTUFaVztBQWFuQixjQUFZLFVBYk87QUFjbkIsV0FBUyxPQWRVO0FBZW5CLFdBQVMsT0FmVTtBQWdCbkIsWUFBVSxRQWhCUztBQWlCbkIsb0JBQWtCLGdCQWpCQztBQWtCbkIsd0JBQXNCLG9CQWxCSDtBQW1CbkIsZ0JBQWMsYUFuQks7QUFvQm5CLGtCQUFnQixjQXBCRztBQXFCbkIsaUJBQWUs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QUFDQyxJQUFSLENBQWFDLElBQWpDLENBQWpCO0FBQ0g7QUFDSixDQUpEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XHJcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xyXG4gICAgXCJsYl94ZXBfYmFpXCI6IFwiWOG6v3AgYsOgaVwiLFxyXG4gICAgXCJsYl9zb19iYWlcIjogXCJTbyBiw6BpXCIsXHJcbiAgICBcImxiX2Jhb19iaW5oXCI6IFwiQsOhbyBiaW5oXCIsXHJcbiAgICBcInhlcF94b25nXCI6IFwiWOG6v3AgWG9uZ1wiLFxyXG4gICAgXCJiYW9fYmluaFwiOiBcIkLDoW8gQmluaFwiLFxyXG4gICAgXCJzYXBfYmFfY2hpXCI6IFwiU+G6rXAgMyBjaGlcIixcclxuICAgIFwiYmluaF9sdW5nXCI6IFwiQmluaCBM4bunbmdcIixcclxuICAgIFwibWF1X3RoYXVcIjogXCJN4bqtdSBUaOG6p3VcIixcclxuICAgIFwibW90X2RvaVwiOiBcIk3hu5l0IMSQw7RpXCIsXHJcbiAgICBcImhhaV9kb2lcIjogXCJIYWkgxJDDtGlcIixcclxuICAgIFwieGFtX2NvXCI6IFwiWMOhbSBDw7RcIixcclxuICAgIFwic2FuaFwiOiBcIlPhuqNuaFwiLFxyXG4gICAgXCJzYW5oX2xvblwiOiBcIlPhuqNuaCBM4bubblwiLFxyXG4gICAgXCJ0aHVuZ1wiOiBcIlRow7luZ1wiLFxyXG4gICAgXCJjdV9sdVwiOiBcIkPDuSBMxalcIixcclxuICAgIFwidHVfcXV5XCI6IFwiVOG7qSBRdcO9XCIsXHJcbiAgICBcInRodW5nX3BoYV9zYW5oXCI6IFwiVGjDuW5nIFBow6EgU+G6o25oXCIsXHJcbiAgICBcInRodW5nX3BoYV9zYW5oX2xvblwiOiBcIlRow7luZyBQaMOhIFPhuqNuaCBMxqFuXCIsXHJcbiAgICBcImN1X2x1X2NoaTJcIjogXCJDw7kgTMWpIENoaSAyXCIsXHJcbiAgICBcInhhbV9jaGlfY3VvaVwiOiBcIlPDoW0gQ2hpIEN14buRaVwiLFxyXG4gICAgXCJ0dV9xdXlfY2hpMlwiOiBcIlThu6kgUXXDvSBDaGkgMlwiLFxyXG4gICAgXCJ0dV9xdXlfY2hpX2RhdVwiOiBcIlThu6kgUXXDvSBDaGkgxJDhuqd1XCIsXHJcbiAgICBcInRodW5nX3BoYV9zYW5oX2NoaTJcIjogXCJUaMO5bmcgUGjDoSBT4bqjbmggQ2hpIDJcIixcclxuICAgIFwidGh1bmdfcGhhX3NhbmhfY2hpX2RhdVwiOiBcIlRow7luZyBQaMOhIFPhuqNuaCBDaGkgxJDhuqd1XCIsXHJcbiAgICBcIm5vdGlfcGhvbmdfZGF5XCI6IFwiUGjDsm5nIMSRw6MgxJHhuqd5IHZ1aSB2w7JuZyBjaOG7jW4gcGjDsm5nIGtow6FjXCIsXHJcbiAgICBcImRhbmdfa3lfcm9pX2JhblwiOiBcIsSQxINuZyBrw70gcuG7nWkgYsOgbiFcIixcclxuICAgIFwiaHV5X3JvaV9iYW5cIjogXCJI4buneSBy4budaSBiw6BuIVwiLFxyXG4gICAgXCJob21lX3NldHRpbmdcIjogXCJ4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9aSCA9IHtcclxuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBMYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UoXCJ2blwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIik7XHJcbn07XHJcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIiwgY3VycmVudExhbmd1YWdlKTtcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0UgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgICAgIGNhc2UgXCJ2blwiOntcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiZW5cIjp7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInpoXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbkxhbmd1YWdlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obm9kZVRyZWUpIHtcclxuICAgIGxldCBsaXN0TGFiZWwgICAgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuTGFiZWwpO1xyXG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RMYWJlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0TGFiZWxbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0UmljaFRleHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdFJpY2hUZXh0W2ldKTtcclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuZ2V0U3RyaW5nID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XHJcbn07XHJcbkxhbmd1YWdlLnNldExhbmd1YWdlID0gZnVuY3Rpb24oc3ViTm9kZSkge1xyXG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgc3ViTm9kZS5zdHJpbmcgPSBMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXTtcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBMYW5ndWFnZTtcclxuIl19