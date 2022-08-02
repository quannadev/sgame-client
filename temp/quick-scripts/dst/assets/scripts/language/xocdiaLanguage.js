
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/xocdiaLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d50aoitENOcIQxJEvfEhcZ', 'xocdiaLanguage');
// scripts/language/xocdiaLanguage.js

"use strict";

var _Language$LANGUAGE_VN;

var Language = {};
Language.LANGUAGE_VN = (_Language$LANGUAGE_VN = {
  "lb_le198": "LẺ 1x1.98",
  "lb_chan198": "CHẴN 1x1.98",
  "xxxxxxxxxxx": "xxxxxxxxxxx"
}, _Language$LANGUAGE_VN["xxxxxxxxxxx"] = "xxxxxxxxxxx", _Language$LANGUAGE_VN);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHhvY2RpYUxhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQ7QUFDSSxjQUFZLFdBRGhCO0FBRUksZ0JBQWMsYUFGbEI7QUFHSSxpQkFBZTtBQUhuQiwwQ0FJbUIsYUFKbkI7QUFNQUQsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNDLFdBQWhDO0FBRUFELFFBQVEsQ0FBQ0csV0FBVCxHQUF1QjtBQUNuQixrQkFBZ0I7QUFERyxDQUF2Qjs7QUFHQUgsUUFBUSxDQUFDSSxrQkFBVCxHQUE4QixZQUFVO0FBQ3BDLE1BQUlDLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkMsSUFBN0MsSUFBcURILFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkNDLFNBQXJHLEVBQStHO0FBQzNHVCxJQUFBQSxRQUFRLENBQUNVLGtCQUFULENBQTRCLElBQTVCO0FBQ0g7O0FBQ0QsU0FBT0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixDQUFQO0FBQ0gsQ0FORDs7QUFPQVIsUUFBUSxDQUFDVSxrQkFBVCxHQUE4QixVQUFTQyxlQUFULEVBQTBCO0FBQ3BELE1BQUlOLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixrQkFBckIsRUFBeUNELGVBQXpDO0FBQ0gsQ0FIRDs7QUFJQVgsUUFBUSxDQUFDYSxRQUFULEdBQW9CLFlBQVU7QUFDMUIsTUFBSUYsZUFBZSxHQUFHLEtBQUtQLGtCQUFMLEVBQXRCOztBQUNBLFVBQVFPLGVBQVI7QUFDSSxTQUFLLElBQUw7QUFBVTtBQUNOLGVBQU9YLFFBQVEsQ0FBQ0MsV0FBaEI7QUFDSDs7QUFDRCxTQUFLLElBQUw7QUFBVTtBQUNOLGVBQU9ELFFBQVEsQ0FBQ0UsV0FBaEI7QUFDSDs7QUFDRCxTQUFLLElBQUw7QUFBVztBQUNQLGVBQU9GLFFBQVEsQ0FBQ0csV0FBaEI7QUFDSDs7QUFDRDtBQUFTO0FBQ0wsZUFBT0gsUUFBUSxDQUFDQyxXQUFoQjtBQUNIO0FBWkw7QUFjSCxDQWhCRDs7QUFpQkFELFFBQVEsQ0FBQ2MsY0FBVCxHQUEwQixVQUFTQyxRQUFULEVBQW1CO0FBQ3pDLE1BQUlDLFNBQVMsR0FBU0QsUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDWSxLQUFyQyxDQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBTUosUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDYyxRQUFyQyxDQUF0Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUwsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxTQUFLRSxXQUFMLENBQWlCUCxTQUFTLENBQUNLLENBQUQsQ0FBMUI7QUFDSDs7QUFDRCxPQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsWUFBWSxDQUFDRyxNQUE5QixFQUFzQ0QsRUFBQyxFQUF2QyxFQUEwQztBQUN0QyxTQUFLRSxXQUFMLENBQWlCSixZQUFZLENBQUNFLEVBQUQsQ0FBN0I7QUFDSDtBQUNKLENBVEQ7O0FBVUFyQixRQUFRLENBQUN3QixTQUFULEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQixTQUFPLEtBQUtaLFFBQUwsR0FBZ0JZLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUdBekIsUUFBUSxDQUFDdUIsV0FBVCxHQUF1QixVQUFTRyxPQUFULEVBQWtCO0FBQ3JDLE1BQUkxQixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxNQUEwQ25CLFNBQTlDLEVBQXdEO0FBQ3BEaUIsSUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCN0IsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsQ0FBakI7QUFDSDtBQUNKLENBSkQ7O0FBS0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9CLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTGFuZ3VhZ2UgPSB7fTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfVk4gPSB7XHJcbiAgICBcImxiX2xlMTk4XCI6IFwiTOG6uiAxeDEuOThcIixcclxuICAgIFwibGJfY2hhbjE5OFwiOiBcIkNI4bq0TiAxeDEuOThcIixcclxuICAgIFwieHh4eHh4eHh4eHhcIjogXCJ4eHh4eHh4eHh4eFwiLFxyXG4gICAgXCJ4eHh4eHh4eHh4eFwiOiBcInh4eHh4eHh4eHh4XCIsXHJcbn07XHJcbkxhbmd1YWdlLkxBTkdVQUdFX0VOID0gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcblxyXG5MYW5ndWFnZS5MQU5HVUFHRV9aSCA9IHtcclxuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBMYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UoXCJ2blwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIik7XHJcbn07XHJcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIiwgY3VycmVudExhbmd1YWdlKTtcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0UgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XHJcbiAgICBzd2l0Y2ggKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgICAgIGNhc2UgXCJ2blwiOntcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiZW5cIjp7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBcInpoXCI6IHtcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbkxhbmd1YWdlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obm9kZVRyZWUpIHtcclxuICAgIGxldCBsaXN0TGFiZWwgICAgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuTGFiZWwpO1xyXG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RMYWJlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0TGFiZWxbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0UmljaFRleHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdFJpY2hUZXh0W2ldKTtcclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuZ2V0U3RyaW5nID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XHJcbn07XHJcbkxhbmd1YWdlLnNldExhbmd1YWdlID0gZnVuY3Rpb24oc3ViTm9kZSkge1xyXG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgc3ViTm9kZS5zdHJpbmcgPSBMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXTtcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBMYW5ndWFnZTtcclxuIl19