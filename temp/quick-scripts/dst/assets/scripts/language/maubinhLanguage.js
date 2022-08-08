
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL21hdWJpbmhMYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZSIsIkxBTkdVQUdFX1ZOIiwiTEFOR1VBR0VfRU4iLCJMQU5HVUFHRV9aSCIsImdldEN1cnJlbnRMYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsImNjIiwic3lzIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEN1cnJlbnRMYW5ndWFnZSIsImN1cnJlbnRMYW5ndWFnZSIsInNldEl0ZW0iLCJMQU5HVUFHRSIsImNoYW5nZUxhbmd1YWdlIiwibm9kZVRyZWUiLCJsaXN0TGFiZWwiLCJnZXRDb21wb25lbnRzSW5DaGlsZHJlbiIsIkxhYmVsIiwibGlzdFJpY2hUZXh0IiwiUmljaFRleHQiLCJpIiwibGVuZ3RoIiwic2V0TGFuZ3VhZ2UiLCJnZXRTdHJpbmciLCJrZXkiLCJzdWJOb2RlIiwibm9kZSIsIm5hbWUiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBRyxFQUFmO0FBQ0FBLFFBQVEsQ0FBQ0MsV0FBVCxHQUF1QjtBQUNuQixnQkFBYyxTQURLO0FBRW5CLGVBQWEsUUFGTTtBQUduQixpQkFBZSxVQUhJO0FBSW5CLGNBQVksVUFKTztBQUtuQixjQUFZLFVBTE87QUFNbkIsZ0JBQWMsV0FOSztBQU9uQixlQUFhLFdBUE07QUFRbkIsY0FBWSxVQVJPO0FBU25CLGFBQVcsU0FUUTtBQVVuQixhQUFXLFNBVlE7QUFXbkIsWUFBVSxRQVhTO0FBWW5CLFVBQVEsTUFaVztBQWFuQixjQUFZLFVBYk87QUFjbkIsV0FBUyxPQWRVO0FBZW5CLFdBQVMsT0FmVTtBQWdCbkIsWUFBVSxRQWhCUztBQWlCbkIsb0JBQWtCLGdCQWpCQztBQWtCbkIsd0JBQXNCLG9CQWxCSDtBQW1CbkIsZ0JBQWMsYUFuQks7QUFvQm5CLGtCQUFnQixjQXBCRztBQXFCbkIsaUJBQWUsY0Fy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QyxJQUFSLENBQWFDLElBQWpDLENBQWpCO0FBQ0g7QUFDSixDQUpEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcbiAgICBcImxiX3hlcF9iYWlcIjogXCJY4bq/cCBiw6BpXCIsXG4gICAgXCJsYl9zb19iYWlcIjogXCJTbyBiw6BpXCIsXG4gICAgXCJsYl9iYW9fYmluaFwiOiBcIkLDoW8gYmluaFwiLFxuICAgIFwieGVwX3hvbmdcIjogXCJY4bq/cCBYb25nXCIsXG4gICAgXCJiYW9fYmluaFwiOiBcIkLDoW8gQmluaFwiLFxuICAgIFwic2FwX2JhX2NoaVwiOiBcIlPhuq1wIDMgY2hpXCIsXG4gICAgXCJiaW5oX2x1bmdcIjogXCJCaW5oIEzhu6duZ1wiLFxuICAgIFwibWF1X3RoYXVcIjogXCJN4bqtdSBUaOG6p3VcIixcbiAgICBcIm1vdF9kb2lcIjogXCJN4buZdCDEkMO0aVwiLFxuICAgIFwiaGFpX2RvaVwiOiBcIkhhaSDEkMO0aVwiLFxuICAgIFwieGFtX2NvXCI6IFwiWMOhbSBDw7RcIixcbiAgICBcInNhbmhcIjogXCJT4bqjbmhcIixcbiAgICBcInNhbmhfbG9uXCI6IFwiU+G6o25oIEzhu5tuXCIsXG4gICAgXCJ0aHVuZ1wiOiBcIlRow7luZ1wiLFxuICAgIFwiY3VfbHVcIjogXCJDw7kgTMWpXCIsXG4gICAgXCJ0dV9xdXlcIjogXCJU4bupIFF1w71cIixcbiAgICBcInRodW5nX3BoYV9zYW5oXCI6IFwiVGjDuW5nIFBow6EgU+G6o25oXCIsXG4gICAgXCJ0aHVuZ19waGFfc2FuaF9sb25cIjogXCJUaMO5bmcgUGjDoSBT4bqjbmggTMahblwiLFxuICAgIFwiY3VfbHVfY2hpMlwiOiBcIkPDuSBMxakgQ2hpIDJcIixcbiAgICBcInhhbV9jaGlfY3VvaVwiOiBcIlPDoW0gQ2hpIEN14buRaVwiLFxuICAgIFwidHVfcXV5X2NoaTJcIjogXCJU4bupIFF1w70gQ2hpIDJcIixcbiAgICBcInR1X3F1eV9jaGlfZGF1XCI6IFwiVOG7qSBRdcO9IENoaSDEkOG6p3VcIixcbiAgICBcInRodW5nX3BoYV9zYW5oX2NoaTJcIjogXCJUaMO5bmcgUGjDoSBT4bqjbmggQ2hpIDJcIixcbiAgICBcInRodW5nX3BoYV9zYW5oX2NoaV9kYXVcIjogXCJUaMO5bmcgUGjDoSBT4bqjbmggQ2hpIMSQ4bqndVwiLFxuICAgIFwibm90aV9waG9uZ19kYXlcIjogXCJQaMOybmcgxJHDoyDEkeG6p3kgdnVpIHbDsm5nIGNo4buNbiBwaMOybmcga2jDoWNcIixcbiAgICBcImRhbmdfa3lfcm9pX2JhblwiOiBcIsSQxINuZyBrw70gcuG7nWkgYsOgbiFcIixcbiAgICBcImh1eV9yb2lfYmFuXCI6IFwiSOG7p3kgcuG7nWkgYsOgbiFcIixcbiAgICBcImhvbWVfc2V0dGluZ1wiOiBcInh4eHh4eHh4XCIsXG59O1xuTGFuZ3VhZ2UuTEFOR1VBR0VfRU4gPSBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcbn07XG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcInZuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xufTtcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xufTtcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKTtcbiAgICBzd2l0Y2ggKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidm5cIjp7XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImVuXCI6e1xuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX0VOO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ6aFwiOiB7XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfWkg7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgICAgICB9XG4gICAgfVxufTtcbkxhbmd1YWdlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obm9kZVRyZWUpIHtcbiAgICBsZXQgbGlzdExhYmVsICAgICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLkxhYmVsKTtcbiAgICBsZXQgbGlzdFJpY2hUZXh0ICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLlJpY2hUZXh0KTtcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RMYWJlbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdExhYmVsW2ldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0UmljaFRleHQubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RSaWNoVGV4dFtpXSk7XG4gICAgfVxufTtcbkxhbmd1YWdlLmdldFN0cmluZyA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLkxBTkdVQUdFKClba2V5XTtcbn07XG5MYW5ndWFnZS5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uKHN1Yk5vZGUpIHtcbiAgICBpZiAoTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV0hPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgc3ViTm9kZS5zdHJpbmcgPSBMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXTtcbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBMYW5ndWFnZTtcbiJdfQ==