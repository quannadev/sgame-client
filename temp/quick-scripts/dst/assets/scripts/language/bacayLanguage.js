
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL2JhY2F5TGFuZ3VhZ2UuanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2UiLCJMQU5HVUFHRV9WTiIsIkxBTkdVQUdFX0VOIiwiTEFOR1VBR0VfWkgiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsaUJBQWUsV0FESTtBQUVuQixlQUFhLFFBRk07QUFHbkIsZUFBYSxRQUhNO0FBSW5CLGFBQVcsTUFKUTtBQUtuQixnQkFBYyxrQkFMSztBQU1uQixrQkFBZ0Isa0JBTkc7QUFPbkIsaUJBQWU7QUFQSSxDQUF2QjtBQVNBRCxRQUFRLENBQUNFLFdBQVQsR0FBdUJGLFFBQVEsQ0FBQ0MsV0FBaEM7QUFFQUQsUUFBUSxDQUFDRyxXQUFULEdBQXVCO0FBQ25CLGtCQUFnQjtBQURHLENBQXZCOztBQUdBSCxRQUFRLENBQUNJLGtCQUFULEdBQThCLFlBQVU7QUFDcEMsTUFBSUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7O0FBQ0EsTUFBR0EsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2QyxJQUE3QyxJQUFxREgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2Q0MsU0FBckcsRUFBK0c7QUFDM0dULElBQUFBLFFBQVEsQ0FBQ1Usa0JBQVQsQ0FBNEIsSUFBNUI7QUFDSDs7QUFDRCxTQUFPTCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLENBQVA7QUFDSCxDQU5EOztBQU9BUixRQUFRLENBQUNVLGtCQUFULEdBQThCLFVBQVNDLGVBQVQsRUFBMEI7QUFDcEQsTUFBSU4sWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7QUFDQUEsRUFBQUEsWUFBWSxDQUFDTyxPQUFiLENBQXFCLGtCQUFyQixFQUF5Q0QsZUFBekM7QUFDSCxDQUhEOztBQUlBWCxRQUFRLENBQUNhLFFBQVQsR0FBb0IsWUFBVTtBQUMxQixNQUFJRixlQUFlLEdBQUcsS0FBS1Asa0JBQUwsRUFBdEI7O0FBQ0EsVUFBUU8sZUFBUjtBQUNJLFNBQUssSUFBTDtBQUFVO0FBQ04sZUFBT1gsUUFBUSxDQUFDQyxXQUFoQjtBQUNIOztBQUNELFNBQUssSUFBTDtBQUFVO0FBQ04sZUFBT0QsUUFBUSxDQUFDRSxXQUFoQjtBQUNIOztBQUNELFNBQUssSUFBTDtBQUFXO0FBQ1AsZUFBT0YsUUFBUSxDQUFDRyxXQUFoQjtBQUNIOztBQUNEO0FBQVM7QUFDTCxlQUFPSCxRQUFRLENBQUNDLFdBQWhCO0FBQ0g7QUFaTDtBQWNILENBaEJEOztBQWlCQUQsUUFBUSxDQUFDYyxjQUFULEdBQTBCLFVBQVNDLFFBQVQsRUFBbUI7QUFDekMsTUFBSUMsU0FBUyxHQUFTRCxRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNZLEtBQXJDLENBQXRCO0FBQ0EsTUFBSUMsWUFBWSxHQUFNSixRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNjLFFBQXJDLENBQXRCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFFTCxTQUFTLENBQUNNLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXVDO0FBQ25DLFNBQUtFLFdBQUwsQ0FBaUJQLFNBQVMsQ0FBQ0ssQ0FBRCxDQUExQjtBQUNIOztBQUNELE9BQUssSUFBSUEsRUFBQyxHQUFDLENBQVgsRUFBY0EsRUFBQyxHQUFFRixZQUFZLENBQUNHLE1BQTlCLEVBQXNDRCxFQUFDLEVBQXZDLEVBQTBDO0FBQ3RDLFNBQUtFLFdBQUwsQ0FBaUJKLFlBQVksQ0FBQ0UsRUFBRCxDQUE3QjtBQUNIO0FBQ0osQ0FURDs7QUFVQXJCLFFBQVEsQ0FBQ3dCLFNBQVQsR0FBcUIsVUFBU0MsR0FBVCxFQUFjO0FBQy9CLFNBQU8sS0FBS1osUUFBTCxHQUFnQlksR0FBaEIsQ0FBUDtBQUNILENBRkQ7O0FBR0F6QixRQUFRLENBQUN1QixXQUFULEdBQXVCLFVBQVNHLE9BQVQsRUFBa0I7QUFDckMsTUFBSTFCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLE1BQTBDbkIsU0FBOUMsRUFBd0Q7QUFDcERpQixJQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUI3QixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxDQUFqQjtBQUNIO0FBQ0osQ0FKRDs7QUFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0IsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMYW5ndWFnZSA9IHt9O1xuTGFuZ3VhZ2UuTEFOR1VBR0VfVk4gPSB7XG4gICAgXCJsYl9tdWNfY3VvY1wiOiBcIk3hu6ljIGPGsOG7o2M6XCIsXG4gICAgXCJsYl9jaHVvbmdcIjogXCJDaMawxqFuZ1wiLFxuICAgIFwibGJfZGF0X2dhXCI6IFwixJDhurd0IEfDoFwiLFxuICAgIFwibGJfdGhlbVwiOiBcIlRow6ptXCIsXG4gICAgXCJsYl90aW1fYmV0XCI6IFwiQuG6r3QgxJDhuqd1IMSQ4bq3dCBDxrDhu6NjXCIsXG4gICAgXCJsYl90aW1fc3RhcnRcIjogXCJDaHXhuqluIELhu4sgQuG6r3QgxJDhuqd1XCIsXG4gICAgXCJ4eHh4eHh4eHh4eFwiOiBcInh4eHh4eHh4eHh4XCIsXG59O1xuTGFuZ3VhZ2UuTEFOR1VBR0VfRU4gPSBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcblxuTGFuZ3VhZ2UuTEFOR1VBR0VfWkggPSB7XG4gICAgXCJob21lX3NldHRpbmdcIjogXCJ4eHh4eHh4eFwiLFxufTtcbkxhbmd1YWdlLmdldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlKFwidm5cIik7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIik7XG59O1xuTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oY3VycmVudExhbmd1YWdlKSB7XG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIsIGN1cnJlbnRMYW5ndWFnZSk7XG59O1xuTGFuZ3VhZ2UuTEFOR1VBR0UgPSBmdW5jdGlvbigpe1xuICAgIGxldCBjdXJyZW50TGFuZ3VhZ2UgPSB0aGlzLmdldEN1cnJlbnRMYW5ndWFnZSgpO1xuICAgIHN3aXRjaCAoY3VycmVudExhbmd1YWdlKSB7XG4gICAgICAgIGNhc2UgXCJ2blwiOntcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiZW5cIjp7XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfRU47XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcInpoXCI6IHtcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9aSDtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgICAgIH1cbiAgICB9XG59O1xuTGFuZ3VhZ2UuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihub2RlVHJlZSkge1xuICAgIGxldCBsaXN0TGFiZWwgICAgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuTGFiZWwpO1xuICAgIGxldCBsaXN0UmljaFRleHQgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuUmljaFRleHQpO1xuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdExhYmVsLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0TGFiZWxbaV0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RSaWNoVGV4dC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdFJpY2hUZXh0W2ldKTtcbiAgICB9XG59O1xuTGFuZ3VhZ2UuZ2V0U3RyaW5nID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuTEFOR1VBR0UoKVtrZXldO1xufTtcbkxhbmd1YWdlLnNldExhbmd1YWdlID0gZnVuY3Rpb24oc3ViTm9kZSkge1xuICAgIGlmIChMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXSE9PSB1bmRlZmluZWQpe1xuICAgICAgICBzdWJOb2RlLnN0cmluZyA9IExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdO1xuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IExhbmd1YWdlO1xuIl19