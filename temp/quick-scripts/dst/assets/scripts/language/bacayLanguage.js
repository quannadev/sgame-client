
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/bacayLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28fc0psf1lHUYopm1vgE1uM', 'bacayLanguage');
// scripts/language/bacayLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_muc_cuoc": "Mức cược:",
  "lb_chuong": "Chương",
  "lb_dat_ga": "Đặt Gà",
  "lb_them": "Thêm",
  "lb_tim_bet": "Bắt Đầu Đặt Cược",
  "lb_tim_start": "Chuẩn Bị Bắt Đầu",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXGJhY2F5TGFuZ3VhZ2UuanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2UiLCJMQU5HVUFHRV9WTiIsIkxBTkdVQUdFX0VOIiwiTEFOR1VBR0VfWkgiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsaUJBQWUsV0FESTtBQUVuQixlQUFhLFFBRk07QUFHbkIsZUFBYSxRQUhNO0FBSW5CLGFBQVcsTUFKUTtBQUtuQixnQkFBYyxrQkFMSztBQU1uQixrQkFBZ0Isa0JBTkc7QUFPbkIsaUJBQWU7QUFQSSxDQUF2QjtBQVNBRCxRQUFRLENBQUNFLFdBQVQsR0FBdUJGLFFBQVEsQ0FBQ0MsV0FBaEM7QUFFQUQsUUFBUSxDQUFDRyxXQUFULEdBQXVCO0FBQ25CLGtCQUFnQjtBQURHLENBQXZCOztBQUdBSCxRQUFRLENBQUNJLGtCQUFULEdBQThCLFlBQVU7QUFDcEMsTUFBSUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7O0FBQ0EsTUFBR0EsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2QyxJQUE3QyxJQUFxREgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2Q0MsU0FBckcsRUFBK0c7QUFDM0dULElBQUFBLFFBQVEsQ0FBQ1Usa0JBQVQsQ0FBNEIsSUFBNUI7QUFDSDs7QUFDRCxTQUFPTCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLENBQVA7QUFDSCxDQU5EOztBQU9BUixRQUFRLENBQUNVLGtCQUFULEdBQThCLFVBQVNDLGVBQVQsRUFBMEI7QUFDcEQsTUFBSU4sWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7QUFDQUEsRUFBQUEsWUFBWSxDQUFDTyxPQUFiLENBQXFCLGtCQUFyQixFQUF5Q0QsZUFBekM7QUFDSCxDQUhEOztBQUlBWCxRQUFRLENBQUNhLFFBQVQsR0FBb0IsWUFBVTtBQUMxQixNQUFJRixlQUFlLEdBQUcsS0FBS1Asa0JBQUwsRUFBdEI7O0FBQ0EsVUFBUU8sZUFBUjtBQUNJLFNBQUssSUFBTDtBQUFVO0FBQ04sZUFBT1gsUUFBUSxDQUFDQyxXQUFoQjtBQUNIOztBQUNELFNBQUssSUFBTDtBQUFVO0FBQ04sZUFBT0QsUUFBUSxDQUFDRSxXQUFoQjtBQUNIOztBQUNELFNBQUssSUFBTDtBQUFXO0FBQ1AsZUFBT0YsUUFBUSxDQUFDRyxXQUFoQjtBQUNIOztBQUNEO0FBQVM7QUFDTCxlQUFPSCxRQUFRLENBQUNDLFdBQWhCO0FBQ0g7QUFaTDtBQWNILENBaEJEOztBQWlCQUQsUUFBUSxDQUFDYyxjQUFULEdBQTBCLFVBQVNDLFFBQVQsRUFBbUI7QUFDekMsTUFBSUMsU0FBUyxHQUFTRCxRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNZLEtBQXJDLENBQXRCO0FBQ0EsTUFBSUMsWUFBWSxHQUFNSixRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNjLFFBQXJDLENBQXRCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFFTCxTQUFTLENBQUNNLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXVDO0FBQ25DLFNBQUtFLFdBQUwsQ0FBaUJQLFNBQVMsQ0FBQ0ssQ0FBRCxDQUExQjtBQUNIOztBQUNELE9BQUssSUFBSUEsRUFBQyxHQUFDLENBQVgsRUFBY0EsRUFBQyxHQUFFRixZQUFZLENBQUNHLE1BQTlCLEVBQXNDRCxFQUFDLEVBQXZDLEVBQTBDO0FBQ3RDLFNBQUtFLFdBQUwsQ0FBaUJKLFlBQVksQ0FBQ0UsRUFBRCxDQUE3QjtBQUNIO0FBQ0osQ0FURDs7QUFVQXJCLFFBQVEsQ0FBQ3dCLFNBQVQsR0FBcUIsVUFBU0MsR0FBVCxFQUFjO0FBQy9CLFNBQU8sS0FBS1osUUFBTCxHQUFnQlksR0FBaEIsQ0FBUDtBQUNILENBRkQ7O0FBR0F6QixRQUFRLENBQUN1QixXQUFULEdBQXVCLFVBQVNHLE9BQVQsRUFBa0I7QUFDckMsTUFBSTFCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLE1BQTBDbkIsU0FBOUMsRUFBd0Q7QUFDcERpQixJQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUI3QixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxDQUFqQjtBQUNIO0FBQ0osQ0FKRDs7QUFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0IsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMYW5ndWFnZSA9IHt9O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcclxuICAgIFwibGJfbXVjX2N1b2NcIjogXCJN4bupYyBjxrDhu6NjOlwiLFxyXG4gICAgXCJsYl9jaHVvbmdcIjogXCJDaMawxqFuZ1wiLFxyXG4gICAgXCJsYl9kYXRfZ2FcIjogXCLEkOG6t3QgR8OgXCIsXHJcbiAgICBcImxiX3RoZW1cIjogXCJUaMOqbVwiLFxyXG4gICAgXCJsYl90aW1fYmV0XCI6IFwiQuG6r3QgxJDhuqd1IMSQ4bq3dCBDxrDhu6NjXCIsXHJcbiAgICBcImxiX3RpbV9zdGFydFwiOiBcIkNodeG6qW4gQuG7iyBC4bqvdCDEkOG6p3VcIixcclxuICAgIFwieHh4eHh4eHh4eHhcIjogXCJ4eHh4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG5cclxuTGFuZ3VhZ2UuTEFOR1VBR0VfWkggPSB7XHJcbiAgICBcImhvbWVfc2V0dGluZ1wiOiBcInh4eHh4eHh4XCIsXHJcbn07XHJcbkxhbmd1YWdlLmdldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlKFwidm5cIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xyXG59O1xyXG5MYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbihjdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIsIGN1cnJlbnRMYW5ndWFnZSk7XHJcbn07XHJcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLmdldEN1cnJlbnRMYW5ndWFnZSgpO1xyXG4gICAgc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcclxuICAgICAgICBjYXNlIFwidm5cIjp7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcImVuXCI6e1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfRU47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJ6aFwiOiB7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9aSDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XHJcbiAgICBsZXQgbGlzdExhYmVsICAgICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLkxhYmVsKTtcclxuICAgIGxldCBsaXN0UmljaFRleHQgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuUmljaFRleHQpO1xyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdExhYmVsW2ldKTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RSaWNoVGV4dFtpXSk7XHJcbiAgICB9XHJcbn07XHJcbkxhbmd1YWdlLmdldFN0cmluZyA9IGZ1bmN0aW9uKGtleSkge1xyXG4gICAgcmV0dXJuIHRoaXMuTEFOR1VBR0UoKVtrZXldO1xyXG59O1xyXG5MYW5ndWFnZS5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uKHN1Yk5vZGUpIHtcclxuICAgIGlmIChMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXSE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XHJcbiAgICB9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XHJcbiJdfQ==