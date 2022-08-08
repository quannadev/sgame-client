
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL3NpbmJhZExhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLFlBQVUsU0FEUztBQUVuQixhQUFXLGFBRlE7QUFHbkIsY0FBWSxRQUhPO0FBSW5CLHFCQUFtQix5QkFKQTtBQUtuQixnQkFBYyxnQkFMSztBQU1uQixxQkFBbUIsb0JBTkE7QUFPbkIsMEJBQXdCLFdBUEw7QUFRbkIsbUJBQWlCLGVBUkU7QUFTbkIsbUNBQWlDLDRCQVRkO0FBVW5CLHNCQUFvQixnQkFWRDtBQVduQix1QkFBcUIsbUJBWEY7QUFZbkIsWUFBVSxLQVpTO0FBYW5CLGtCQUFnQixXQWJHO0FBY25CLGtCQUFnQixXQWRHO0FBZW5CLGVBQWEsS0FmTTtBQWdCbkIsaUJBQWUsT0FoQkk7QUFpQm5CLGFBQVcsTUFqQlE7QUFrQm5CLGdCQUFjLE9BbEJLO0FBbUJuQixlQUFhLFVBbkJNO0FBb0JuQixnQkFBYyxXQXBCSztBQXFCbkIsWUFBVSxPQXJCUztBQXNCbkIsb0JBQWtCLDBDQXRCQztBQXVCbkIsb0JBQWtCLGdCQXZCQztBQXdCbkIscUJBQW1CLGlDQXhCQTtBQXlCbkIsaUJBQWU7QUF6QkksQ0FBdkI7QUEyQkFELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxXQUFoQztBQUVBRCxRQUFRLENBQUNHLFdBQVQsR0FBdUI7QUFDbkIsa0JBQWdCO0FBREcsQ0FBdkI7O0FBR0FILFFBQVEsQ0FBQ0ksa0JBQVQsR0FBOEIsWUFBVTtBQUNwQyxNQUFJQyxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjs7QUFDQSxNQUFHQSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDLElBQTdDLElBQXFESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDQyxTQUFyRyxFQUErRztBQUMzR1QsSUFBQUEsUUFBUSxDQUFDVSxrQkFBVCxDQUE0QixJQUE1QjtBQUNIOztBQUNELFNBQU9MLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsQ0FBUDtBQUNILENBTkQ7O0FBT0FSLFFBQVEsQ0FBQ1Usa0JBQVQsR0FBOEIsVUFBU0MsZUFBVCxFQUEwQjtBQUNwRCxNQUFJTixZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjtBQUNBQSxFQUFBQSxZQUFZLENBQUNPLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDRCxlQUF6QztBQUNILENBSEQ7O0FBSUFYLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQixZQUFVO0FBQzFCLFNBQU9iLFFBQVEsQ0FBQ0MsV0FBaEIsQ0FEMEIsQ0FFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FqQkQ7O0FBa0JBRCxRQUFRLENBQUNjLGNBQVQsR0FBMEIsVUFBU0MsUUFBVCxFQUFtQjtBQUN6QyxNQUFJQyxTQUFTLEdBQVNELFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ1ksS0FBckMsQ0FBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQU1KLFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ2MsUUFBckMsQ0FBdEI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUVMLFNBQVMsQ0FBQ00sTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsU0FBS0UsV0FBTCxDQUFpQlAsU0FBUyxDQUFDSyxDQUFELENBQTFCO0FBQ0g7O0FBQ0QsT0FBSyxJQUFJQSxFQUFDLEdBQUMsQ0FBWCxFQUFjQSxFQUFDLEdBQUVGLFlBQVksQ0FBQ0csTUFBOUIsRUFBc0NELEVBQUMsRUFBdkMsRUFBMEM7QUFDdEMsU0FBS0UsV0FBTCxDQUFpQkosWUFBWSxDQUFDRSxFQUFELENBQTdCO0FBQ0g7QUFDSixDQVREOztBQVVBckIsUUFBUSxDQUFDd0IsU0FBVCxHQUFxQixVQUFTQyxHQUFULEVBQWM7QUFDL0IsU0FBTyxLQUFLWixRQUFMLEdBQWdCWSxHQUFoQixDQUFQO0FBQ0gsQ0FGRDs7QUFHQXpCLFFBQVEsQ0FBQ3VCLFdBQVQsR0FBdUIsVUFBU0csT0FBVCxFQUFrQjtBQUNyQyxNQUFJMUIsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsTUFBMENuQixTQUE5QyxFQUF3RDtBQUNwRGlCLElBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQjdCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLENBQWpCO0FBQ0g7QUFDSixDQUpEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcbiAgICBcImxiX3dpblwiOiBcIlRo4bqvbmc6IFwiLFxuICAgIFwibGJfY3VvY1wiOiBcIlThu5VuZyBjxrDhu6NjOiBcIixcbiAgICBcImxiX3BoaWVuXCI6IFwiUGhpw6puOlwiLFxuICAgIFwibGJfZnJlZV9zcGluZV8zXCI6IFwiU8O0IGzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrTogXCIsXG4gICAgXCJsYl9yZWNlaXZlXCI6IFwiQuG6oW4gbmjhuq1uIMSRxrDhu6NjIFwiLFxuICAgIFwibGJfZnJlZV9zcGluZV8yXCI6IFwibMaw4bujdCBxdWF5IG1p4buFbiBwaMOtXCIsXG4gICAgXCJsYl90aXRsZV9zZWxlY3RfbGluZVwiOiBcIkNI4buMTiBEw5JOR1wiLFxuICAgIFwibGJfZnJvbV9ib251c1wiOiBcInThu6sgQm9udXMgR2FtZVwiLFxuICAgIFwibGJfY2hpX3RpZXRfbGljaF9zdV9naWFvX2RpY2hcIjogXCJDaGkgVGnhur90IEzhu4tjaCBT4butIEdpYW8gROG7i2NoXCIsXG4gICAgXCJsYl9zb190aWVuX3RoYW5nXCI6IFwiU+G7kSB0aeG7gW4gdGjhuq9uZzpcIixcbiAgICBcImxiX2xpY2hzdWdpYW9kaWNoXCI6IFwiTOG7i2NoIFPhu60gR2lhbyBE4buLY2hcIixcbiAgICBcImxiX3N0dFwiOiBcIlNUVFwiLFxuICAgIFwibGJfdGhvaV9naWFuXCI6IFwiVEjhu5xJIEdJQU5cIixcbiAgICBcImxiX3RhaV9raG9hblwiOiBcIlTDgEkgS0hP4bqiTlwiLFxuICAgIFwibGJfbm9fZGF0XCI6IFwixJDhurZUXCIsXG4gICAgXCJsYl9ub190aGFuZ1wiOiBcIlRI4bquTkdcIixcbiAgICBcImxiX2xvYWlcIjogXCJMT+G6oElcIixcbiAgICBcImxiX3Nlc3Npb25cIjogXCJQSEnDik5cIixcbiAgICBcImxiX2RldGFpbFwiOiBcIkNISSBUSeG6vlRcIixcbiAgICBcImxiX2FjY291bnRcIjogXCJUw4BJIEtIT+G6ok5cIixcbiAgICBcImxiX2Rlc1wiOiBcIk3DlCBU4bqiXCIsXG4gICAgXCJub3RpX25vdF90cmlhbFwiOiBcIkNo4bupYyBuxINuZyBuw6B5IGtow7RuZyBjw7Mg4bufIGNo4bq/IMSR4buZIGNoxqFpIHRo4butXCIsXG4gICAgXCJub3RpX25vdF9tb25leVwiOiBcIktow7RuZyDEkeG7pyBz4buRIGTGsFwiLFxuICAgIFwibm90aV9pc19wbGF5aW5nXCI6IFwiSGnhu4duIMSRYW5nIHRyb25nIHRp4bq/biB0csOsbmggcXVheVwiLFxuICAgIFwieHh4eHh4eHh4eHhcIjogXCJ4eHh4eHh4eHh4eFwiLFxufTtcbkxhbmd1YWdlLkxBTkdVQUdFX0VOID0gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG5cbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcbn07XG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcImVuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xufTtcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xufTtcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgLy8gbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XG4gICAgLy8gc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAvLyAgICAgY2FzZSBcInZuXCI6e1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNhc2UgXCJlblwiOntcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjYXNlIFwiemhcIjoge1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGRlZmF1bHQ6IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn07XG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xuICAgIH1cbn07XG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XG59O1xuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XG4iXX0=