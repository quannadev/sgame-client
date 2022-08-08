
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/kimcuongLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1f4fBxiy5FFrMmuClJlA3J', 'kimcuongLanguage');
// scripts/language/kimcuongLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_text_so_du": "Số dư:",
  "lb_hu_kim_cuong": "Hũ Kim Cương",
  "lb_title_select_line": "CHỌN DÒNG",
  "lb_chan": "Chẵn",
  "lb_le": "Lẻ",
  "lb_tat_ca": "Tất cả",
  "lb_bo_chon": "Bỏ chọn",
  "lb_so_luot_quay_mien_phi": "Số lượt quay miễn phí: ",
  "lb_free_spine_2": "lượt quay miễn phí",
  "lb_thang": "Thắng",
  "lb_tien_cuoc": "Tiền cược",
  "lb_luot_boc": "Số lượt bốc: ",
  "lb_phien": "Phiên: ",
  "lb_money_win": "Số tiền thắng:",
  "lb_phien_1": "Phiên",
  "lb_thoi_gian": "Thời Gian",
  "lb_dat": "Đặt",
  "lb_chitiet": "Chi tiết",
  "lb_name": "Tên Nhân Vật",
  "lb_des": "Mô Tả",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL2tpbWN1b25nTGFuZ3VhZ2UuanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2UiLCJMQU5HVUFHRV9WTiIsIkxBTkdVQUdFX0VOIiwiTEFOR1VBR0VfWkgiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsbUJBQWlCLFFBREU7QUFFbkIscUJBQW1CLGNBRkE7QUFHbkIsMEJBQXdCLFdBSEw7QUFJbkIsYUFBVyxNQUpRO0FBS25CLFdBQVMsSUFMVTtBQU1uQixlQUFhLFFBTk07QUFPbkIsZ0JBQWMsU0FQSztBQVFuQiw4QkFBNEIseUJBUlQ7QUFTbkIscUJBQW1CLG9CQVRBO0FBVW5CLGNBQVksT0FWTztBQVduQixrQkFBZ0IsV0FYRztBQVluQixpQkFBZSxlQVpJO0FBYW5CLGNBQVksU0FiTztBQWNuQixrQkFBZ0IsZ0JBZEc7QUFlbkIsZ0JBQWMsT0FmSztBQWdCbkIsa0JBQWdCLFdBaEJHO0FBaUJuQixZQUFVLEtBakJTO0FBa0JuQixnQkFBYyxVQWxCSztBQW1CbkIsYUFBVyxjQW5CUTtBQW9CbkIsWUFBVSxPQXBCUztBQXFCbkIsb0JBQWtCLDBDQXJCQztBQXNCbkIsb0JBQWtCLGdCQXRCQztBQXVCbkIscUJBQW1CLGlDQXZCQTtBQXdCbkIsaUJBQWU7QUF4QkksQ0FBdkI7QUEwQkFELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxXQUFoQztBQUVBRCxRQUFRLENBQUNHLFdBQVQsR0FBdUI7QUFDbkIsa0JBQWdCO0FBREcsQ0FBdkI7O0FBR0FILFFBQVEsQ0FBQ0ksa0JBQVQsR0FBOEIsWUFBVTtBQUNwQyxNQUFJQyxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjs7QUFDQSxNQUFHQSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDLElBQTdDLElBQXFESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDQyxTQUFyRyxFQUErRztBQUMzR1QsSUFBQUEsUUFBUSxDQUFDVSxrQkFBVCxDQUE0QixJQUE1QjtBQUNIOztBQUNELFNBQU9MLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsQ0FBUDtBQUNILENBTkQ7O0FBT0FSLFFBQVEsQ0FBQ1Usa0JBQVQsR0FBOEIsVUFBU0MsZUFBVCxFQUEwQjtBQUNwRCxNQUFJTixZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjtBQUNBQSxFQUFBQSxZQUFZLENBQUNPLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDRCxlQUF6QztBQUNILENBSEQ7O0FBSUFYLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQixZQUFVO0FBQzFCLFNBQU9iLFFBQVEsQ0FBQ0MsV0FBaEIsQ0FEMEIsQ0FFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FqQkQ7O0FBa0JBRCxRQUFRLENBQUNjLGNBQVQsR0FBMEIsVUFBU0MsUUFBVCxFQUFtQjtBQUN6QyxNQUFJQyxTQUFTLEdBQVNELFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ1ksS0FBckMsQ0FBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQU1KLFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ2MsUUFBckMsQ0FBdEI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUVMLFNBQVMsQ0FBQ00sTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsU0FBS0UsV0FBTCxDQUFpQlAsU0FBUyxDQUFDSyxDQUFELENBQTFCO0FBQ0g7O0FBQ0QsT0FBSyxJQUFJQSxFQUFDLEdBQUMsQ0FBWCxFQUFjQSxFQUFDLEdBQUVGLFlBQVksQ0FBQ0csTUFBOUIsRUFBc0NELEVBQUMsRUFBdkMsRUFBMEM7QUFDdEMsU0FBS0UsV0FBTCxDQUFpQkosWUFBWSxDQUFDRSxFQUFELENBQTdCO0FBQ0g7QUFDSixDQVREOztBQVVBckIsUUFBUSxDQUFDd0IsU0FBVCxHQUFxQixVQUFTQyxHQUFULEVBQWM7QUFDL0IsU0FBTyxLQUFLWixRQUFMLEdBQWdCWSxHQUFoQixDQUFQO0FBQ0gsQ0FGRDs7QUFHQXpCLFFBQVEsQ0FBQ3VCLFdBQVQsR0FBdUIsVUFBU0csT0FBVCxFQUFrQjtBQUNyQyxNQUFJMUIsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsTUFBMENuQixTQUE5QyxFQUF3RDtBQUNwRGlCLElBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQjdCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLENBQWpCO0FBQ0g7QUFDSixDQUpEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcbiAgICBcImxiX3RleHRfc29fZHVcIjogXCJT4buRIGTGsDpcIixcbiAgICBcImxiX2h1X2tpbV9jdW9uZ1wiOiBcIkjFqSBLaW0gQ8awxqFuZ1wiLFxuICAgIFwibGJfdGl0bGVfc2VsZWN0X2xpbmVcIjogXCJDSOG7jE4gRMOSTkdcIixcbiAgICBcImxiX2NoYW5cIjogXCJDaOG6tW5cIixcbiAgICBcImxiX2xlXCI6IFwiTOG6u1wiLFxuICAgIFwibGJfdGF0X2NhXCI6IFwiVOG6pXQgY+G6o1wiLFxuICAgIFwibGJfYm9fY2hvblwiOiBcIkLhu48gY2jhu41uXCIsXG4gICAgXCJsYl9zb19sdW90X3F1YXlfbWllbl9waGlcIjogXCJT4buRIGzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrTogXCIsXG4gICAgXCJsYl9mcmVlX3NwaW5lXzJcIjogXCJsxrDhu6N0IHF1YXkgbWnhu4VuIHBow61cIixcbiAgICBcImxiX3RoYW5nXCI6IFwiVGjhuq9uZ1wiLFxuICAgIFwibGJfdGllbl9jdW9jXCI6IFwiVGnhu4FuIGPGsOG7o2NcIixcbiAgICBcImxiX2x1b3RfYm9jXCI6IFwiU+G7kSBsxrDhu6N0IGLhu5FjOiBcIixcbiAgICBcImxiX3BoaWVuXCI6IFwiUGhpw6puOiBcIixcbiAgICBcImxiX21vbmV5X3dpblwiOiBcIlPhu5EgdGnhu4FuIHRo4bqvbmc6XCIsXG4gICAgXCJsYl9waGllbl8xXCI6IFwiUGhpw6puXCIsXG4gICAgXCJsYl90aG9pX2dpYW5cIjogXCJUaOG7nWkgR2lhblwiLFxuICAgIFwibGJfZGF0XCI6IFwixJDhurd0XCIsXG4gICAgXCJsYl9jaGl0aWV0XCI6IFwiQ2hpIHRp4bq/dFwiLFxuICAgIFwibGJfbmFtZVwiOiBcIlTDqm4gTmjDom4gVuG6rXRcIixcbiAgICBcImxiX2Rlc1wiOiBcIk3DtCBU4bqjXCIsXG4gICAgXCJub3RpX25vdF90cmlhbFwiOiBcIkNo4bupYyBuxINuZyBuw6B5IGtow7RuZyBjw7Mg4bufIGNo4bq/IMSR4buZIGNoxqFpIHRo4butXCIsXG4gICAgXCJub3RpX25vdF9tb25leVwiOiBcIktow7RuZyDEkeG7pyBz4buRIGTGsFwiLFxuICAgIFwibm90aV9pc19wbGF5aW5nXCI6IFwiSGnhu4duIMSRYW5nIHRyb25nIHRp4bq/biB0csOsbmggcXVheVwiLFxuICAgIFwieHh4eHh4eHh4eHhcIjogXCJ4eHh4eHh4eHh4eFwiLFxufTtcbkxhbmd1YWdlLkxBTkdVQUdFX0VOID0gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG5cbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcbn07XG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcImVuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xufTtcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xufTtcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgLy8gbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XG4gICAgLy8gc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAvLyAgICAgY2FzZSBcInZuXCI6e1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNhc2UgXCJlblwiOntcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjYXNlIFwiemhcIjoge1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGRlZmF1bHQ6IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn07XG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xuICAgIH1cbn07XG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XG59O1xuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XG4iXX0=