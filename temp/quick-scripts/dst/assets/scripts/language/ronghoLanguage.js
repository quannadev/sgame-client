
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/ronghoLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2dce59gjoxPJIgQL7MAfl9f', 'ronghoLanguage');
// scripts/language/ronghoLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_rong": "RỒng",
  "lb_ho": "Hổ",
  "lb_rong1x2": "RỒNG 1x2",
  "lb_hoa1x16": "Hòa 1x16",
  "lb_ho1x2": "Hổ 1x2",
  "lb_rong_ho1x15": "RỒNG HỔ (1x15)",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHJvbmdob0xhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLGFBQVcsTUFEUTtBQUVuQixXQUFTLElBRlU7QUFHbkIsZ0JBQWMsVUFISztBQUluQixnQkFBYyxVQUpLO0FBS25CLGNBQVksUUFMTztBQU1uQixvQkFBa0IsZ0JBTkM7QUFPbkIsaUJBQWU7QUFQSSxDQUF2QjtBQVNBRCxRQUFRLENBQUNFLFdBQVQsR0FBdUJGLFFBQVEsQ0FBQ0MsV0FBaEM7QUFFQUQsUUFBUSxDQUFDRyxXQUFULEdBQXVCO0FBQ25CLGtCQUFnQjtBQURHLENBQXZCOztBQUdBSCxRQUFRLENBQUNJLGtCQUFULEdBQThCLFlBQVU7QUFDcEMsTUFBSUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7O0FBQ0EsTUFBR0EsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2QyxJQUE3QyxJQUFxREgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2Q0MsU0FBckcsRUFBK0c7QUFDM0dULElBQUFBLFFBQVEsQ0FBQ1Usa0JBQVQsQ0FBNEIsSUFBNUI7QUFDSDs7QUFDRCxTQUFPTCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLENBQVA7QUFDSCxDQU5EOztBQU9BUixRQUFRLENBQUNVLGtCQUFULEdBQThCLFVBQVNDLGVBQVQsRUFBMEI7QUFDcEQsTUFBSU4sWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7QUFDQUEsRUFBQUEsWUFBWSxDQUFDTyxPQUFiLENBQXFCLGtCQUFyQixFQUF5Q0QsZUFBekM7QUFDSCxDQUhEOztBQUlBWCxRQUFRLENBQUNhLFFBQVQsR0FBb0IsWUFBVTtBQUMxQixNQUFJRixlQUFlLEdBQUcsS0FBS1Asa0JBQUwsRUFBdEI7O0FBQ0EsVUFBUU8sZUFBUjtBQUNJLFNBQUssSUFBTDtBQUFVO0FBQ04sZUFBT1gsUUFBUSxDQUFDQyxXQUFoQjtBQUNIOztBQUNELFNBQUssSUFBTDtBQUFVO0FBQ04sZUFBT0QsUUFBUSxDQUFDRSxXQUFoQjtBQUNIOztBQUNELFNBQUssSUFBTDtBQUFXO0FBQ1AsZUFBT0YsUUFBUSxDQUFDRyxXQUFoQjtBQUNIOztBQUNEO0FBQVM7QUFDTCxlQUFPSCxRQUFRLENBQUNDLFdBQWhCO0FBQ0g7QUFaTDtBQWNILENBaEJEOztBQWlCQUQsUUFBUSxDQUFDYyxjQUFULEdBQTBCLFVBQVNDLFFBQVQsRUFBbUI7QUFDekMsTUFBSUMsU0FBUyxHQUFTRCxRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNZLEtBQXJDLENBQXRCO0FBQ0EsTUFBSUMsWUFBWSxHQUFNSixRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNjLFFBQXJDLENBQXRCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFFTCxTQUFTLENBQUNNLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXVDO0FBQ25DLFNBQUtFLFdBQUwsQ0FBaUJQLFNBQVMsQ0FBQ0ssQ0FBRCxDQUExQjtBQUNIOztBQUNELE9BQUssSUFBSUEsRUFBQyxHQUFDLENBQVgsRUFBY0EsRUFBQyxHQUFFRixZQUFZLENBQUNHLE1BQTlCLEVBQXNDRCxFQUFDLEVBQXZDLEVBQTBDO0FBQ3RDLFNBQUtFLFdBQUwsQ0FBaUJKLFlBQVksQ0FBQ0UsRUFBRCxDQUE3QjtBQUNIO0FBQ0osQ0FURDs7QUFVQXJCLFFBQVEsQ0FBQ3dCLFNBQVQsR0FBcUIsVUFBU0MsR0FBVCxFQUFjO0FBQy9CLFNBQU8sS0FBS1osUUFBTCxHQUFnQlksR0FBaEIsQ0FBUDtBQUNILENBRkQ7O0FBR0F6QixRQUFRLENBQUN1QixXQUFULEdBQXVCLFVBQVNHLE9BQVQsRUFBa0I7QUFDckMsTUFBSTFCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLE1BQTBDbkIsU0FBOUMsRUFBd0Q7QUFDcERpQixJQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUI3QixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxDQUFqQjtBQUNIO0FBQ0osQ0FKRDs7QUFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0IsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMYW5ndWFnZSA9IHt9O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcclxuICAgIFwibGJfcm9uZ1wiOiBcIlLhu5JuZ1wiLFxyXG4gICAgXCJsYl9ob1wiOiBcIkjhu5VcIixcclxuICAgIFwibGJfcm9uZzF4MlwiOiBcIlLhu5JORyAxeDJcIixcclxuICAgIFwibGJfaG9hMXgxNlwiOiBcIkjDsmEgMXgxNlwiLFxyXG4gICAgXCJsYl9obzF4MlwiOiBcIkjhu5UgMXgyXCIsXHJcbiAgICBcImxiX3JvbmdfaG8xeDE1XCI6IFwiUuG7kk5HIEjhu5QgKDF4MTUpXCIsXHJcbiAgICBcInh4eHh4eHh4eHh4XCI6IFwieHh4eHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfRU4gPSBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuXHJcbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xyXG4gICAgXCJob21lX3NldHRpbmdcIjogXCJ4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcInZuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgIHN3aXRjaCAoY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgY2FzZSBcInZuXCI6e1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJlblwiOntcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX0VOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiemhcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfWkg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihub2RlVHJlZSkge1xyXG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XHJcbiAgICBsZXQgbGlzdFJpY2hUZXh0ICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLlJpY2hUZXh0KTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdExhYmVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RSaWNoVGV4dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xyXG4gICAgfVxyXG59O1xyXG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLkxBTkdVQUdFKClba2V5XTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XHJcbiAgICBpZiAoTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV0hPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBzdWJOb2RlLnN0cmluZyA9IExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IExhbmd1YWdlO1xyXG4iXX0=