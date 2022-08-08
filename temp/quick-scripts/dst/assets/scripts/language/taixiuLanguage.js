
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/taixiuLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b74dcrea2NKGaoHaBzI/mds', 'taixiuLanguage');
// scripts/language/taixiuLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_dat": "Đặt",
  "lb_huong_dan": "HƯỚNG DẪN",
  "lb_bang_xep_hang": "BẢNG XẾP HẠNG",
  "lb_rank": "HẠNG",
  "lb_name": "TÊN TÀI KHOẢN",
  "lb_win": "THẮNG",
  "lb_thoi_gian": "THỜI GIAN",
  "lb_ten": "TÊN",
  "lb_dat1": "ĐẶT",
  "lb_tong": "Tổng",
  "lb_soi_cau": "SOI CẦU",
  "lb_tai": "TÀI:",
  "lb_xiu": "XỈU:",
  "lb_ketqua": "KẾT QUẢ",
  "lb_hoan_tra": "HOÀN TRẢ",
  "lb_lichsu": "LỊCH SỬ GIAO DỊCH",
  "xxxxxxxxxxx": "xxxxxxxxxxx"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL3RhaXhpdUxhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLFlBQVUsS0FEUztBQUVuQixrQkFBZ0IsV0FGRztBQUduQixzQkFBb0IsZUFIRDtBQUluQixhQUFXLE1BSlE7QUFLbkIsYUFBVyxlQUxRO0FBTW5CLFlBQVUsT0FOUztBQU9uQixrQkFBZ0IsV0FQRztBQVFuQixZQUFVLEtBUlM7QUFTbkIsYUFBVyxLQVRRO0FBVW5CLGFBQVcsTUFWUTtBQVduQixnQkFBYyxTQVhLO0FBWW5CLFlBQVUsTUFaUztBQWFuQixZQUFVLE1BYlM7QUFjbkIsZUFBYSxTQWRNO0FBZW5CLGlCQUFlLFVBZkk7QUFnQm5CLGVBQWEsbUJBaEJNO0FBaUJuQixpQkFBZTtBQWpCSSxDQUF2QjtBQW1CQUQsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNDLFdBQWhDO0FBRUFELFFBQVEsQ0FBQ0csV0FBVCxHQUF1QjtBQUNuQixrQkFBZ0I7QUFERyxDQUF2Qjs7QUFHQUgsUUFBUSxDQUFDSSxrQkFBVCxHQUE4QixZQUFVO0FBQ3BDLE1BQUlDLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkMsSUFBN0MsSUFBcURILFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkNDLFNBQXJHLEVBQStHO0FBQzNHVCxJQUFBQSxRQUFRLENBQUNVLGtCQUFULENBQTRCLElBQTVCO0FBQ0g7O0FBQ0QsU0FBT0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixDQUFQO0FBQ0gsQ0FORDs7QUFPQVIsUUFBUSxDQUFDVSxrQkFBVCxHQUE4QixVQUFTQyxlQUFULEVBQTBCO0FBQ3BELE1BQUlOLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixrQkFBckIsRUFBeUNELGVBQXpDO0FBQ0gsQ0FIRDs7QUFJQVgsUUFBUSxDQUFDYSxRQUFULEdBQW9CLFlBQVU7QUFDMUIsTUFBSUYsZUFBZSxHQUFHLEtBQUtQLGtCQUFMLEVBQXRCOztBQUNBLFVBQVFPLGVBQVI7QUFDSSxTQUFLLElBQUw7QUFBVTtBQUNOLGVBQU9YLFFBQVEsQ0FBQ0MsV0FBaEI7QUFDSDs7QUFDRCxTQUFLLElBQUw7QUFBVTtBQUNOLGVBQU9ELFFBQVEsQ0FBQ0UsV0FBaEI7QUFDSDs7QUFDRCxTQUFLLElBQUw7QUFBVztBQUNQLGVBQU9GLFFBQVEsQ0FBQ0csV0FBaEI7QUFDSDs7QUFDRDtBQUFTO0FBQ0wsZUFBT0gsUUFBUSxDQUFDQyxXQUFoQjtBQUNIO0FBWkw7QUFjSCxDQWhCRDs7QUFpQkFELFFBQVEsQ0FBQ2MsY0FBVCxHQUEwQixVQUFTQyxRQUFULEVBQW1CO0FBQ3pDLE1BQUlDLFNBQVMsR0FBU0QsUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDWSxLQUFyQyxDQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBTUosUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDYyxRQUFyQyxDQUF0Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUwsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxTQUFLRSxXQUFMLENBQWlCUCxTQUFTLENBQUNLLENBQUQsQ0FBMUI7QUFDSDs7QUFDRCxPQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsWUFBWSxDQUFDRyxNQUE5QixFQUFzQ0QsRUFBQyxFQUF2QyxFQUEwQztBQUN0QyxTQUFLRSxXQUFMLENBQWlCSixZQUFZLENBQUNFLEVBQUQsQ0FBN0I7QUFDSDtBQUNKLENBVEQ7O0FBVUFyQixRQUFRLENBQUN3QixTQUFULEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQixTQUFPLEtBQUtaLFFBQUwsR0FBZ0JZLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUdBekIsUUFBUSxDQUFDdUIsV0FBVCxHQUF1QixVQUFTRyxPQUFULEVBQWtCO0FBQ3JDLE1BQUkxQixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxNQUEwQ25CLFNBQTlDLEVBQXdEO0FBQ3BEaUIsSUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCN0IsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsQ0FBakI7QUFDSDtBQUNKLENBSkQ7O0FBS0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9CLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTGFuZ3VhZ2UgPSB7fTtcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xuICAgIFwibGJfZGF0XCI6IFwixJDhurd0XCIsXG4gICAgXCJsYl9odW9uZ19kYW5cIjogXCJIxq/hu5pORyBE4bqqTlwiLFxuICAgIFwibGJfYmFuZ194ZXBfaGFuZ1wiOiBcIkLhuqJORyBY4bq+UCBI4bqgTkdcIixcbiAgICBcImxiX3JhbmtcIjogXCJI4bqgTkdcIixcbiAgICBcImxiX25hbWVcIjogXCJUw4pOIFTDgEkgS0hP4bqiTlwiLFxuICAgIFwibGJfd2luXCI6IFwiVEjhuq5OR1wiLFxuICAgIFwibGJfdGhvaV9naWFuXCI6IFwiVEjhu5xJIEdJQU5cIixcbiAgICBcImxiX3RlblwiOiBcIlTDik5cIixcbiAgICBcImxiX2RhdDFcIjogXCLEkOG6tlRcIixcbiAgICBcImxiX3RvbmdcIjogXCJU4buVbmdcIixcbiAgICBcImxiX3NvaV9jYXVcIjogXCJTT0kgQ+G6plVcIixcbiAgICBcImxiX3RhaVwiOiBcIlTDgEk6XCIsXG4gICAgXCJsYl94aXVcIjogXCJY4buIVTpcIixcbiAgICBcImxiX2tldHF1YVwiOiBcIkvhur5UIFFV4bqiXCIsXG4gICAgXCJsYl9ob2FuX3RyYVwiOiBcIkhPw4BOIFRS4bqiXCIsXG4gICAgXCJsYl9saWNoc3VcIjogXCJM4buKQ0ggU+G7rCBHSUFPIEThu4pDSFwiLFxuICAgIFwieHh4eHh4eHh4eHhcIjogXCJ4eHh4eHh4eHh4eFwiLFxufTtcbkxhbmd1YWdlLkxBTkdVQUdFX0VOID0gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG5cbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcbn07XG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcInZuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xufTtcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xufTtcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKTtcbiAgICBzd2l0Y2ggKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgICAgICBjYXNlIFwidm5cIjp7XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcImVuXCI6e1xuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX0VOO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJ6aFwiOiB7XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfWkg7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgICAgICB9XG4gICAgfVxufTtcbkxhbmd1YWdlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obm9kZVRyZWUpIHtcbiAgICBsZXQgbGlzdExhYmVsICAgICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLkxhYmVsKTtcbiAgICBsZXQgbGlzdFJpY2hUZXh0ICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLlJpY2hUZXh0KTtcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RMYWJlbC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdExhYmVsW2ldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0UmljaFRleHQubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RSaWNoVGV4dFtpXSk7XG4gICAgfVxufTtcbkxhbmd1YWdlLmdldFN0cmluZyA9IGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB0aGlzLkxBTkdVQUdFKClba2V5XTtcbn07XG5MYW5ndWFnZS5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uKHN1Yk5vZGUpIHtcbiAgICBpZiAoTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV0hPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgc3ViTm9kZS5zdHJpbmcgPSBMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXTtcbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBMYW5ndWFnZTtcbiJdfQ==