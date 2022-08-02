
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/pokerLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5195hjGu9AGKa5KD8zPP3c', 'pokerLanguage');
// scripts/language/pokerLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_muc_cuoc": "Mức cược:",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHBva2VyTGFuZ3VhZ2UuanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2UiLCJMQU5HVUFHRV9WTiIsIkxBTkdVQUdFX0VOIiwiTEFOR1VBR0VfWkgiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsaUJBQWUsV0FESTtBQUVuQixpQkFBZTtBQUZJLENBQXZCO0FBSUFELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxXQUFoQztBQUVBRCxRQUFRLENBQUNHLFdBQVQsR0FBdUI7QUFDbkIsa0JBQWdCO0FBREcsQ0FBdkI7O0FBR0FILFFBQVEsQ0FBQ0ksa0JBQVQsR0FBOEIsWUFBVTtBQUNwQyxNQUFJQyxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjs7QUFDQSxNQUFHQSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDLElBQTdDLElBQXFESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDQyxTQUFyRyxFQUErRztBQUMzR1QsSUFBQUEsUUFBUSxDQUFDVSxrQkFBVCxDQUE0QixJQUE1QjtBQUNIOztBQUNELFNBQU9MLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsQ0FBUDtBQUNILENBTkQ7O0FBT0FSLFFBQVEsQ0FBQ1Usa0JBQVQsR0FBOEIsVUFBU0MsZUFBVCxFQUEwQjtBQUNwRCxNQUFJTixZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjtBQUNBQSxFQUFBQSxZQUFZLENBQUNPLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDRCxlQUF6QztBQUNILENBSEQ7O0FBSUFYLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQixZQUFVO0FBQzFCLE1BQUlGLGVBQWUsR0FBRyxLQUFLUCxrQkFBTCxFQUF0Qjs7QUFDQSxVQUFRTyxlQUFSO0FBQ0ksU0FBSyxJQUFMO0FBQVU7QUFDTixlQUFPWCxRQUFRLENBQUNDLFdBQWhCO0FBQ0g7O0FBQ0QsU0FBSyxJQUFMO0FBQVU7QUFDTixlQUFPRCxRQUFRLENBQUNFLFdBQWhCO0FBQ0g7O0FBQ0QsU0FBSyxJQUFMO0FBQVc7QUFDUCxlQUFPRixRQUFRLENBQUNHLFdBQWhCO0FBQ0g7O0FBQ0Q7QUFBUztBQUNMLGVBQU9ILFFBQVEsQ0FBQ0MsV0FBaEI7QUFDSDtBQVpMO0FBY0gsQ0FoQkQ7O0FBaUJBRCxRQUFRLENBQUNjLGNBQVQsR0FBMEIsVUFBU0MsUUFBVCxFQUFtQjtBQUN6QyxNQUFJQyxTQUFTLEdBQVNELFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ1ksS0FBckMsQ0FBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQU1KLFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ2MsUUFBckMsQ0FBdEI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUVMLFNBQVMsQ0FBQ00sTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsU0FBS0UsV0FBTCxDQUFpQlAsU0FBUyxDQUFDSyxDQUFELENBQTFCO0FBQ0g7O0FBQ0QsT0FBSyxJQUFJQSxFQUFDLEdBQUMsQ0FBWCxFQUFjQSxFQUFDLEdBQUVGLFlBQVksQ0FBQ0csTUFBOUIsRUFBc0NELEVBQUMsRUFBdkMsRUFBMEM7QUFDdEMsU0FBS0UsV0FBTCxDQUFpQkosWUFBWSxDQUFDRSxFQUFELENBQTdCO0FBQ0g7QUFDSixDQVREOztBQVVBckIsUUFBUSxDQUFDd0IsU0FBVCxHQUFxQixVQUFTQyxHQUFULEVBQWM7QUFDL0IsU0FBTyxLQUFLWixRQUFMLEdBQWdCWSxHQUFoQixDQUFQO0FBQ0gsQ0FGRDs7QUFHQXpCLFFBQVEsQ0FBQ3VCLFdBQVQsR0FBdUIsVUFBU0csT0FBVCxFQUFrQjtBQUNyQyxNQUFJMUIsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsTUFBMENuQixTQUE5QyxFQUF3RDtBQUNwRGlCLElBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQjdCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLENBQWpCO0FBQ0g7QUFDSixDQUpEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XHJcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xyXG4gICAgXCJsYl9tdWNfY3VvY1wiOiBcIk3hu6ljIGPGsOG7o2M6XCIsXHJcbiAgICBcInh4eHh4eHh4eHh4XCI6IFwieHh4eHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfRU4gPSBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuXHJcbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xyXG4gICAgXCJob21lX3NldHRpbmdcIjogXCJ4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcInZuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgIHN3aXRjaCAoY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgY2FzZSBcInZuXCI6e1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJlblwiOntcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX0VOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiemhcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfWkg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihub2RlVHJlZSkge1xyXG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XHJcbiAgICBsZXQgbGlzdFJpY2hUZXh0ICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLlJpY2hUZXh0KTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdExhYmVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RSaWNoVGV4dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xyXG4gICAgfVxyXG59O1xyXG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLkxBTkdVQUdFKClba2V5XTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XHJcbiAgICBpZiAoTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV0hPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBzdWJOb2RlLnN0cmluZyA9IExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IExhbmd1YWdlO1xyXG4iXX0=