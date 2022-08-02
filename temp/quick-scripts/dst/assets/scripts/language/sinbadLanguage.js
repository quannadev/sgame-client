
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/sinbadLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'effee4N5eVGTZLGxt3DvaqT', 'sinbadLanguage');
// scripts/language/sinbadLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_win": "Thắng: ",
  "lb_cuoc": "Tổng cược: ",
  "lb_phien": "Phiên:",
  "lb_free_spine_3": "Sô lượt quay miễn phí: ",
  "lb_receive": "Bạn nhận được ",
  "lb_free_spine_2": "lượt quay miễn phí",
  "lb_title_select_line": "CHỌN DÒNG",
  "lb_from_bonus": "từ Bonus Game",
  "lb_chi_tiet_lich_su_giao_dich": "Chi Tiết Lịch Sử Giao Dịch",
  "lb_so_tien_thang": "Số tiền thắng:",
  "lb_lichsugiaodich": "Lịch Sử Giao Dịch",
  "lb_stt": "STT",
  "lb_thoi_gian": "THỜI GIAN",
  "lb_tai_khoan": "TÀI KHOẢN",
  "lb_no_dat": "ĐẶT",
  "lb_no_thang": "THẮNG",
  "lb_loai": "LOẠI",
  "lb_session": "PHIÊN",
  "lb_detail": "CHI TIẾT",
  "lb_account": "TÀI KHOẢN",
  "lb_des": "MÔ TẢ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHNpbmJhZExhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLFlBQVUsU0FEUztBQUVuQixhQUFXLGFBRlE7QUFHbkIsY0FBWSxRQUhPO0FBSW5CLHFCQUFtQix5QkFKQTtBQUtuQixnQkFBYyxnQkFMSztBQU1uQixxQkFBbUIsb0JBTkE7QUFPbkIsMEJBQXdCLFdBUEw7QUFRbkIsbUJBQWlCLGVBUkU7QUFTbkIsbUNBQWlDLDRCQVRkO0FBVW5CLHNCQUFvQixnQkFWRDtBQVduQix1QkFBcUIsbUJBWEY7QUFZbkIsWUFBVSxLQVpTO0FBYW5CLGtCQUFnQixXQWJHO0FBY25CLGtCQUFnQixXQWRHO0FBZW5CLGVBQWEsS0FmTTtBQWdCbkIsaUJBQWUsT0FoQkk7QUFpQm5CLGFBQVcsTUFqQlE7QUFrQm5CLGdCQUFjLE9BbEJLO0FBbUJuQixlQUFhLFVBbkJNO0FBb0JuQixnQkFBYyxXQXBCSztBQXFCbkIsWUFBVSxPQXJCUztBQXNCbkIsb0JBQWtCLDBDQXRCQztBQXVCbkIsb0JBQWtCLGdCQXZCQztBQXdCbkIscUJBQW1CLGlDQXhCQTtBQXlCbkIsaUJBQWU7QUF6QkksQ0FBdkI7QUEyQkFELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxXQUFoQztBQUVBRCxRQUFRLENBQUNHLFdBQVQsR0FBdUI7QUFDbkIsa0JBQWdCO0FBREcsQ0FBdkI7O0FBR0FILFFBQVEsQ0FBQ0ksa0JBQVQsR0FBOEIsWUFBVTtBQUNwQyxNQUFJQyxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjs7QUFDQSxNQUFHQSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDLElBQTdDLElBQXFESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDQyxTQUFyRyxFQUErRztBQUMzR1QsSUFBQUEsUUFBUSxDQUFDVSxrQkFBVCxDQUE0QixJQUE1QjtBQUNIOztBQUNELFNBQU9MLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsQ0FBUDtBQUNILENBTkQ7O0FBT0FSLFFBQVEsQ0FBQ1Usa0JBQVQsR0FBOEIsVUFBU0MsZUFBVCxFQUEwQjtBQUNwRCxNQUFJTixZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjtBQUNBQSxFQUFBQSxZQUFZLENBQUNPLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDRCxlQUF6QztBQUNILENBSEQ7O0FBSUFYLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQixZQUFVO0FBQzFCLFNBQU9iLFFBQVEsQ0FBQ0MsV0FBaEIsQ0FEMEIsQ0FFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FqQkQ7O0FBa0JBRCxRQUFRLENBQUNjLGNBQVQsR0FBMEIsVUFBU0MsUUFBVCxFQUFtQjtBQUN6QyxNQUFJQyxTQUFTLEdBQVNELFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ1ksS0FBckMsQ0FBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQU1KLFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ2MsUUFBckMsQ0FBdEI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUVMLFNBQVMsQ0FBQ00sTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsU0FBS0UsV0FBTCxDQUFpQlAsU0FBUyxDQUFDSyxDQUFELENBQTFCO0FBQ0g7O0FBQ0QsT0FBSyxJQUFJQSxFQUFDLEdBQUMsQ0FBWCxFQUFjQSxFQUFDLEdBQUVGLFlBQVksQ0FBQ0csTUFBOUIsRUFBc0NELEVBQUMsRUFBdkMsRUFBMEM7QUFDdEMsU0FBS0UsV0FBTCxDQUFpQkosWUFBWSxDQUFDRSxFQUFELENBQTdCO0FBQ0g7QUFDSixDQVREOztBQVVBckIsUUFBUSxDQUFDd0IsU0FBVCxHQUFxQixVQUFTQyxHQUFULEVBQWM7QUFDL0IsU0FBTyxLQUFLWixRQUFMLEdBQWdCWSxHQUFoQixDQUFQO0FBQ0gsQ0FGRDs7QUFHQXpCLFFBQVEsQ0FBQ3VCLFdBQVQsR0FBdUIsVUFBU0csT0FBVCxFQUFrQjtBQUNyQyxNQUFJMUIsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsTUFBMENuQixTQUE5QyxFQUF3RDtBQUNwRGlCLElBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQjdCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLENBQWpCO0FBQ0g7QUFDSixDQUpEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XHJcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xyXG4gICAgXCJsYl93aW5cIjogXCJUaOG6r25nOiBcIixcclxuICAgIFwibGJfY3VvY1wiOiBcIlThu5VuZyBjxrDhu6NjOiBcIixcclxuICAgIFwibGJfcGhpZW5cIjogXCJQaGnDqm46XCIsXHJcbiAgICBcImxiX2ZyZWVfc3BpbmVfM1wiOiBcIlPDtCBsxrDhu6N0IHF1YXkgbWnhu4VuIHBow606IFwiLFxyXG4gICAgXCJsYl9yZWNlaXZlXCI6IFwiQuG6oW4gbmjhuq1uIMSRxrDhu6NjIFwiLFxyXG4gICAgXCJsYl9mcmVlX3NwaW5lXzJcIjogXCJsxrDhu6N0IHF1YXkgbWnhu4VuIHBow61cIixcclxuICAgIFwibGJfdGl0bGVfc2VsZWN0X2xpbmVcIjogXCJDSOG7jE4gRMOSTkdcIixcclxuICAgIFwibGJfZnJvbV9ib251c1wiOiBcInThu6sgQm9udXMgR2FtZVwiLFxyXG4gICAgXCJsYl9jaGlfdGlldF9saWNoX3N1X2dpYW9fZGljaFwiOiBcIkNoaSBUaeG6v3QgTOG7i2NoIFPhu60gR2lhbyBE4buLY2hcIixcclxuICAgIFwibGJfc29fdGllbl90aGFuZ1wiOiBcIlPhu5EgdGnhu4FuIHRo4bqvbmc6XCIsXHJcbiAgICBcImxiX2xpY2hzdWdpYW9kaWNoXCI6IFwiTOG7i2NoIFPhu60gR2lhbyBE4buLY2hcIixcclxuICAgIFwibGJfc3R0XCI6IFwiU1RUXCIsXHJcbiAgICBcImxiX3Rob2lfZ2lhblwiOiBcIlRI4bucSSBHSUFOXCIsXHJcbiAgICBcImxiX3RhaV9raG9hblwiOiBcIlTDgEkgS0hP4bqiTlwiLFxyXG4gICAgXCJsYl9ub19kYXRcIjogXCLEkOG6tlRcIixcclxuICAgIFwibGJfbm9fdGhhbmdcIjogXCJUSOG6rk5HXCIsXHJcbiAgICBcImxiX2xvYWlcIjogXCJMT+G6oElcIixcclxuICAgIFwibGJfc2Vzc2lvblwiOiBcIlBIScOKTlwiLFxyXG4gICAgXCJsYl9kZXRhaWxcIjogXCJDSEkgVEnhur5UXCIsXHJcbiAgICBcImxiX2FjY291bnRcIjogXCJUw4BJIEtIT+G6ok5cIixcclxuICAgIFwibGJfZGVzXCI6IFwiTcOUIFThuqJcIixcclxuICAgIFwibm90aV9ub3RfdHJpYWxcIjogXCJDaOG7qWMgbsSDbmcgbsOgeSBraMO0bmcgY8OzIOG7nyBjaOG6vyDEkeG7mSBjaMahaSB0aOG7rVwiLFxyXG4gICAgXCJub3RpX25vdF9tb25leVwiOiBcIktow7RuZyDEkeG7pyBz4buRIGTGsFwiLFxyXG4gICAgXCJub3RpX2lzX3BsYXlpbmdcIjogXCJIaeG7h24gxJFhbmcgdHJvbmcgdGnhur9uIHRyw6xuaCBxdWF5XCIsXHJcbiAgICBcInh4eHh4eHh4eHh4XCI6IFwieHh4eHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfRU4gPSBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuXHJcbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xyXG4gICAgXCJob21lX3NldHRpbmdcIjogXCJ4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcImVuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRSA9IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAvLyBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgIC8vIHN3aXRjaCAoY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAvLyAgICAgY2FzZSBcInZuXCI6e1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNhc2UgXCJlblwiOntcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX0VOO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYXNlIFwiemhcIjoge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfWkg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGRlZmF1bHQ6IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufTtcclxuTGFuZ3VhZ2UuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihub2RlVHJlZSkge1xyXG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XHJcbiAgICBsZXQgbGlzdFJpY2hUZXh0ICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLlJpY2hUZXh0KTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdExhYmVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RSaWNoVGV4dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xyXG4gICAgfVxyXG59O1xyXG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLkxBTkdVQUdFKClba2V5XTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XHJcbiAgICBpZiAoTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV0hPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBzdWJOb2RlLnN0cmluZyA9IExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IExhbmd1YWdlO1xyXG4iXX0=