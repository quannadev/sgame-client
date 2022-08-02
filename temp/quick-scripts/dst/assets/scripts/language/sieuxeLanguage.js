
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/sieuxeLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55957LLLBZIb54SwbJ29LZP', 'sieuxeLanguage');
// scripts/language/sieuxeLanguage.js

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
  "lb_session": "Phiên:",
  "lbMoneyTxt": "Tổng thắng",
  "lb_tong_so_thang": "TỔNG SỐ THẮNG: ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHNpZXV4ZUxhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLDBCQUF3QixlQURMO0FBRW5CLFlBQVUsS0FGUztBQUduQixrQkFBZ0IsV0FIRztBQUluQixrQkFBZ0IsV0FKRztBQUtuQixpQkFBZSxPQUxJO0FBTW5CLGFBQVcsTUFOUTtBQU9uQixjQUFZLE9BUE87QUFRbkIsY0FBWSxPQVJPO0FBU25CLGdCQUFjLFVBVEs7QUFVbkIsZ0JBQWMsT0FWSztBQVduQixnQkFBYyxRQVhLO0FBWW5CLGdCQUFjLFlBWks7QUFhbkIsc0JBQW9CLGlCQWJEO0FBY25CLG9CQUFrQiwwQ0FkQztBQWVuQixvQkFBa0IsZ0JBZkM7QUFnQm5CLHFCQUFtQixpQ0FoQkE7QUFpQm5CLGlCQUFlO0FBakJJLENBQXZCO0FBbUJBRCxRQUFRLENBQUNFLFdBQVQsR0FBdUJGLFFBQVEsQ0FBQ0MsV0FBaEM7QUFFQUQsUUFBUSxDQUFDRyxXQUFULEdBQXVCO0FBQ25CLGtCQUFnQjtBQURHLENBQXZCOztBQUdBSCxRQUFRLENBQUNJLGtCQUFULEdBQThCLFlBQVU7QUFDcEMsTUFBSUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7O0FBQ0EsTUFBR0EsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2QyxJQUE3QyxJQUFxREgsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixNQUE2Q0MsU0FBckcsRUFBK0c7QUFDM0dULElBQUFBLFFBQVEsQ0FBQ1Usa0JBQVQsQ0FBNEIsSUFBNUI7QUFDSDs7QUFDRCxTQUFPTCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLENBQVA7QUFDSCxDQU5EOztBQU9BUixRQUFRLENBQUNVLGtCQUFULEdBQThCLFVBQVNDLGVBQVQsRUFBMEI7QUFDcEQsTUFBSU4sWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7QUFDQUEsRUFBQUEsWUFBWSxDQUFDTyxPQUFiLENBQXFCLGtCQUFyQixFQUF5Q0QsZUFBekM7QUFDSCxDQUhEOztBQUlBWCxRQUFRLENBQUNhLFFBQVQsR0FBb0IsWUFBVTtBQUMxQixTQUFPYixRQUFRLENBQUNDLFdBQWhCLENBRDBCLENBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILENBakJEOztBQWtCQUQsUUFBUSxDQUFDYyxjQUFULEdBQTBCLFVBQVNDLFFBQVQsRUFBbUI7QUFDekMsTUFBSUMsU0FBUyxHQUFTRCxRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNZLEtBQXJDLENBQXRCO0FBQ0EsTUFBSUMsWUFBWSxHQUFNSixRQUFRLENBQUNFLHVCQUFULENBQWtDWCxFQUFFLENBQUNjLFFBQXJDLENBQXRCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFFTCxTQUFTLENBQUNNLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXVDO0FBQ25DLFNBQUtFLFdBQUwsQ0FBaUJQLFNBQVMsQ0FBQ0ssQ0FBRCxDQUExQjtBQUNIOztBQUNELE9BQUssSUFBSUEsRUFBQyxHQUFDLENBQVgsRUFBY0EsRUFBQyxHQUFFRixZQUFZLENBQUNHLE1BQTlCLEVBQXNDRCxFQUFDLEVBQXZDLEVBQTBDO0FBQ3RDLFNBQUtFLFdBQUwsQ0FBaUJKLFlBQVksQ0FBQ0UsRUFBRCxDQUE3QjtBQUNIO0FBQ0osQ0FURDs7QUFVQXJCLFFBQVEsQ0FBQ3dCLFNBQVQsR0FBcUIsVUFBU0MsR0FBVCxFQUFjO0FBQy9CLFNBQU8sS0FBS1osUUFBTCxHQUFnQlksR0FBaEIsQ0FBUDtBQUNILENBRkQ7O0FBR0F6QixRQUFRLENBQUN1QixXQUFULEdBQXVCLFVBQVNHLE9BQVQsRUFBa0I7QUFDckMsTUFBSTFCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLE1BQTBDbkIsU0FBOUMsRUFBd0Q7QUFDcERpQixJQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUI3QixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxDQUFqQjtBQUNIO0FBQ0osQ0FKRDs7QUFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0IsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMYW5ndWFnZSA9IHt9O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcclxuICAgIFwibGJfdGl0bGVfc2VsZWN0X2xpbmVcIjogXCJEw5JORyDEkOG6tlQgQ8av4buiQ1wiLFxyXG4gICAgXCJsYl9zdHRcIjogXCJTVFRcIixcclxuICAgIFwibGJfdGhvaV9naWFuXCI6IFwiVEjhu5xJIEdJQU5cIixcclxuICAgIFwibGJfdGFpX2tob2FuXCI6IFwiVMOASSBLSE/huqJOXCIsXHJcbiAgICBcImxiX25vX3RoYW5nXCI6IFwiVEjhuq5OR1wiLFxyXG4gICAgXCJsYl9sb2FpXCI6IFwiTE/huqBJXCIsXHJcbiAgICBcImxiX3BoaWVuXCI6IFwiUEhJw4pOXCIsXHJcbiAgICBcImxiX3Bob25nXCI6IFwiUEjDkk5HXCIsXHJcbiAgICBcImxiX2NoaXRpZXRcIjogXCJDSEkgVEnhur5UXCIsXHJcbiAgICBcImxiUGhpZW5UeHRcIjogXCJQaGnDqm5cIixcclxuICAgIFwibGJfc2Vzc2lvblwiOiBcIlBoacOqbjpcIixcclxuICAgIFwibGJNb25leVR4dFwiOiBcIlThu5VuZyB0aOG6r25nXCIsXHJcbiAgICBcImxiX3Rvbmdfc29fdGhhbmdcIjogXCJU4buUTkcgU+G7kCBUSOG6rk5HOiBcIixcclxuICAgIFwibm90aV9ub3RfdHJpYWxcIjogXCJDaOG7qWMgbsSDbmcgbsOgeSBraMO0bmcgY8OzIOG7nyBjaOG6vyDEkeG7mSBjaMahaSB0aOG7rVwiLFxyXG4gICAgXCJub3RpX25vdF9tb25leVwiOiBcIktow7RuZyDEkeG7pyBz4buRIGTGsFwiLFxyXG4gICAgXCJub3RpX2lzX3BsYXlpbmdcIjogXCJIaeG7h24gxJFhbmcgdHJvbmcgdGnhur9uIHRyw6xuaCBxdWF5XCIsXHJcbiAgICBcInh4eHh4eHh4eHh4XCI6IFwieHh4eHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfRU4gPSBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuXHJcbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xyXG4gICAgXCJob21lX3NldHRpbmdcIjogXCJ4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcImVuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRSA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAvLyBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgIC8vIHN3aXRjaCAoY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAvLyAgICAgY2FzZSBcInZuXCI6e1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNhc2UgXCJlblwiOntcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX0VOO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYXNlIFwiemhcIjoge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfWkg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGRlZmF1bHQ6IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufTtcclxuTGFuZ3VhZ2UuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihub2RlVHJlZSkge1xyXG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XHJcbiAgICBsZXQgbGlzdFJpY2hUZXh0ICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLlJpY2hUZXh0KTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdExhYmVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RSaWNoVGV4dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xyXG4gICAgfVxyXG59O1xyXG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLkxBTkdVQUdFKClba2V5XTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XHJcbiAgICBpZiAoTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV0hPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBzdWJOb2RlLnN0cmluZyA9IExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IExhbmd1YWdlO1xyXG4iXX0=