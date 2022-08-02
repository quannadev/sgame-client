
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHRhaXhpdUxhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLFlBQVUsS0FEUztBQUVuQixrQkFBZ0IsV0FGRztBQUduQixzQkFBb0IsZUFIRDtBQUluQixhQUFXLE1BSlE7QUFLbkIsYUFBVyxlQUxRO0FBTW5CLFlBQVUsT0FOUztBQU9uQixrQkFBZ0IsV0FQRztBQVFuQixZQUFVLEtBUlM7QUFTbkIsYUFBVyxLQVRRO0FBVW5CLGFBQVcsTUFWUTtBQVduQixnQkFBYyxTQVhLO0FBWW5CLFlBQVUsTUFaUztBQWFuQixZQUFVLE1BYlM7QUFjbkIsZUFBYSxTQWRNO0FBZW5CLGlCQUFlLFVBZkk7QUFnQm5CLGVBQWEsbUJBaEJNO0FBaUJuQixpQkFBZTtBQWpCSSxDQUF2QjtBQW1CQUQsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNDLFdBQWhDO0FBRUFELFFBQVEsQ0FBQ0csV0FBVCxHQUF1QjtBQUNuQixrQkFBZ0I7QUFERyxDQUF2Qjs7QUFHQUgsUUFBUSxDQUFDSSxrQkFBVCxHQUE4QixZQUFVO0FBQ3BDLE1BQUlDLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkMsSUFBN0MsSUFBcURILFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkNDLFNBQXJHLEVBQStHO0FBQzNHVCxJQUFBQSxRQUFRLENBQUNVLGtCQUFULENBQTRCLElBQTVCO0FBQ0g7O0FBQ0QsU0FBT0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixDQUFQO0FBQ0gsQ0FORDs7QUFPQVIsUUFBUSxDQUFDVSxrQkFBVCxHQUE4QixVQUFTQyxlQUFULEVBQTBCO0FBQ3BELE1BQUlOLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixrQkFBckIsRUFBeUNELGVBQXpDO0FBQ0gsQ0FIRDs7QUFJQVgsUUFBUSxDQUFDYSxRQUFULEdBQW9CLFlBQVU7QUFDMUIsTUFBSUYsZUFBZSxHQUFHLEtBQUtQLGtCQUFMLEVBQXRCOztBQUNBLFVBQVFPLGVBQVI7QUFDSSxTQUFLLElBQUw7QUFBVTtBQUNOLGVBQU9YLFFBQVEsQ0FBQ0MsV0FBaEI7QUFDSDs7QUFDRCxTQUFLLElBQUw7QUFBVTtBQUNOLGVBQU9ELFFBQVEsQ0FBQ0UsV0FBaEI7QUFDSDs7QUFDRCxTQUFLLElBQUw7QUFBVztBQUNQLGVBQU9GLFFBQVEsQ0FBQ0csV0FBaEI7QUFDSDs7QUFDRDtBQUFTO0FBQ0wsZUFBT0gsUUFBUSxDQUFDQyxXQUFoQjtBQUNIO0FBWkw7QUFjSCxDQWhCRDs7QUFpQkFELFFBQVEsQ0FBQ2MsY0FBVCxHQUEwQixVQUFTQyxRQUFULEVBQW1CO0FBQ3pDLE1BQUlDLFNBQVMsR0FBU0QsUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDWSxLQUFyQyxDQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBTUosUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDYyxRQUFyQyxDQUF0Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUwsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxTQUFLRSxXQUFMLENBQWlCUCxTQUFTLENBQUNLLENBQUQsQ0FBMUI7QUFDSDs7QUFDRCxPQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsWUFBWSxDQUFDRyxNQUE5QixFQUFzQ0QsRUFBQyxFQUF2QyxFQUEwQztBQUN0QyxTQUFLRSxXQUFMLENBQWlCSixZQUFZLENBQUNFLEVBQUQsQ0FBN0I7QUFDSDtBQUNKLENBVEQ7O0FBVUFyQixRQUFRLENBQUN3QixTQUFULEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQixTQUFPLEtBQUtaLFFBQUwsR0FBZ0JZLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUdBekIsUUFBUSxDQUFDdUIsV0FBVCxHQUF1QixVQUFTRyxPQUFULEVBQWtCO0FBQ3JDLE1BQUkxQixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxNQUEwQ25CLFNBQTlDLEVBQXdEO0FBQ3BEaUIsSUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCN0IsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsQ0FBakI7QUFDSDtBQUNKLENBSkQ7O0FBS0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9CLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTGFuZ3VhZ2UgPSB7fTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfVk4gPSB7XHJcbiAgICBcImxiX2RhdFwiOiBcIsSQ4bq3dFwiLFxyXG4gICAgXCJsYl9odW9uZ19kYW5cIjogXCJIxq/hu5pORyBE4bqqTlwiLFxyXG4gICAgXCJsYl9iYW5nX3hlcF9oYW5nXCI6IFwiQuG6ok5HIFjhur5QIEjhuqBOR1wiLFxyXG4gICAgXCJsYl9yYW5rXCI6IFwiSOG6oE5HXCIsXHJcbiAgICBcImxiX25hbWVcIjogXCJUw4pOIFTDgEkgS0hP4bqiTlwiLFxyXG4gICAgXCJsYl93aW5cIjogXCJUSOG6rk5HXCIsXHJcbiAgICBcImxiX3Rob2lfZ2lhblwiOiBcIlRI4bucSSBHSUFOXCIsXHJcbiAgICBcImxiX3RlblwiOiBcIlTDik5cIixcclxuICAgIFwibGJfZGF0MVwiOiBcIsSQ4bq2VFwiLFxyXG4gICAgXCJsYl90b25nXCI6IFwiVOG7lW5nXCIsXHJcbiAgICBcImxiX3NvaV9jYXVcIjogXCJTT0kgQ+G6plVcIixcclxuICAgIFwibGJfdGFpXCI6IFwiVMOASTpcIixcclxuICAgIFwibGJfeGl1XCI6IFwiWOG7iFU6XCIsXHJcbiAgICBcImxiX2tldHF1YVwiOiBcIkvhur5UIFFV4bqiXCIsXHJcbiAgICBcImxiX2hvYW5fdHJhXCI6IFwiSE/DgE4gVFLhuqJcIixcclxuICAgIFwibGJfbGljaHN1XCI6IFwiTOG7ikNIIFPhu6wgR0lBTyBE4buKQ0hcIixcclxuICAgIFwieHh4eHh4eHh4eHhcIjogXCJ4eHh4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG5cclxuTGFuZ3VhZ2UuTEFOR1VBR0VfWkggPSB7XHJcbiAgICBcImhvbWVfc2V0dGluZ1wiOiBcInh4eHh4eHh4XCIsXHJcbn07XHJcbkxhbmd1YWdlLmdldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlKFwidm5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xyXG59O1xyXG5MYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbihjdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIsIGN1cnJlbnRMYW5ndWFnZSk7XHJcbn07XHJcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLmdldEN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICBjYXNlIFwidm5cIjp7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImVuXCI6e1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfRU47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJ6aFwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9aSDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XHJcbiAgICBsZXQgbGlzdExhYmVsICAgICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLkxhYmVsKTtcclxuICAgIGxldCBsaXN0UmljaFRleHQgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuUmljaFRleHQpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdExhYmVsW2ldKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RSaWNoVGV4dFtpXSk7XHJcbiAgICB9XHJcbn07XHJcbkxhbmd1YWdlLmdldFN0cmluZyA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuTEFOR1VBR0UoKVtrZXldO1xyXG59O1xyXG5MYW5ndWFnZS5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uKHN1Yk5vZGUpIHtcclxuICAgIGlmIChMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXSE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XHJcbiAgICB9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XHJcbiJdfQ==