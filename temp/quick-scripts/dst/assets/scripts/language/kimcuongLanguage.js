
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXGtpbWN1b25nTGFuZ3VhZ2UuanMiXSwibmFtZXMiOlsiTGFuZ3VhZ2UiLCJMQU5HVUFHRV9WTiIsIkxBTkdVQUdFX0VOIiwiTEFOR1VBR0VfWkgiLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsbUJBQWlCLFFBREU7QUFFbkIscUJBQW1CLGNBRkE7QUFHbkIsMEJBQXdCLFdBSEw7QUFJbkIsYUFBVyxNQUpRO0FBS25CLFdBQVMsSUFMVTtBQU1uQixlQUFhLFFBTk07QUFPbkIsZ0JBQWMsU0FQSztBQVFuQiw4QkFBNEIseUJBUlQ7QUFTbkIscUJBQW1CLG9CQVRBO0FBVW5CLGNBQVksT0FWTztBQVduQixrQkFBZ0IsV0FYRztBQVluQixpQkFBZSxlQVpJO0FBYW5CLGNBQVksU0FiTztBQWNuQixrQkFBZ0IsZ0JBZEc7QUFlbkIsZ0JBQWMsT0FmSztBQWdCbkIsa0JBQWdCLFdBaEJHO0FBaUJuQixZQUFVLEtBakJTO0FBa0JuQixnQkFBYyxVQWxCSztBQW1CbkIsYUFBVyxjQW5CUTtBQW9CbkIsWUFBVSxPQXBCUztBQXFCbkIsb0JBQWtCLDBDQXJCQztBQXNCbkIsb0JBQWtCLGdCQXRCQztBQXVCbkIscUJBQW1CLGlDQXZCQTtBQXdCbkIsaUJBQWU7QUF4QkksQ0FBdkI7QUEwQkFELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxXQUFoQztBQUVBRCxRQUFRLENBQUNHLFdBQVQsR0FBdUI7QUFDbkIsa0JBQWdCO0FBREcsQ0FBdkI7O0FBR0FILFFBQVEsQ0FBQ0ksa0JBQVQsR0FBOEIsWUFBVTtBQUNwQyxNQUFJQyxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjs7QUFDQSxNQUFHQSxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDLElBQTdDLElBQXFESCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsa0JBQXJCLE1BQTZDQyxTQUFyRyxFQUErRztBQUMzR1QsSUFBQUEsUUFBUSxDQUFDVSxrQkFBVCxDQUE0QixJQUE1QjtBQUNIOztBQUNELFNBQU9MLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsQ0FBUDtBQUNILENBTkQ7O0FBT0FSLFFBQVEsQ0FBQ1Usa0JBQVQsR0FBOEIsVUFBU0MsZUFBVCxFQUEwQjtBQUNwRCxNQUFJTixZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRixZQUExQjtBQUNBQSxFQUFBQSxZQUFZLENBQUNPLE9BQWIsQ0FBcUIsa0JBQXJCLEVBQXlDRCxlQUF6QztBQUNILENBSEQ7O0FBSUFYLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQixZQUFVO0FBQzFCLFNBQU9iLFFBQVEsQ0FBQ0MsV0FBaEIsQ0FEMEIsQ0FFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FqQkQ7O0FBa0JBRCxRQUFRLENBQUNjLGNBQVQsR0FBMEIsVUFBU0MsUUFBVCxFQUFtQjtBQUN6QyxNQUFJQyxTQUFTLEdBQVNELFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ1ksS0FBckMsQ0FBdEI7QUFDQSxNQUFJQyxZQUFZLEdBQU1KLFFBQVEsQ0FBQ0UsdUJBQVQsQ0FBa0NYLEVBQUUsQ0FBQ2MsUUFBckMsQ0FBdEI7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUMsQ0FBWCxFQUFjQSxDQUFDLEdBQUVMLFNBQVMsQ0FBQ00sTUFBM0IsRUFBbUNELENBQUMsRUFBcEMsRUFBdUM7QUFDbkMsU0FBS0UsV0FBTCxDQUFpQlAsU0FBUyxDQUFDSyxDQUFELENBQTFCO0FBQ0g7O0FBQ0QsT0FBSyxJQUFJQSxFQUFDLEdBQUMsQ0FBWCxFQUFjQSxFQUFDLEdBQUVGLFlBQVksQ0FBQ0csTUFBOUIsRUFBc0NELEVBQUMsRUFBdkMsRUFBMEM7QUFDdEMsU0FBS0UsV0FBTCxDQUFpQkosWUFBWSxDQUFDRSxFQUFELENBQTdCO0FBQ0g7QUFDSixDQVREOztBQVVBckIsUUFBUSxDQUFDd0IsU0FBVCxHQUFxQixVQUFTQyxHQUFULEVBQWM7QUFDL0IsU0FBTyxLQUFLWixRQUFMLEdBQWdCWSxHQUFoQixDQUFQO0FBQ0gsQ0FGRDs7QUFHQXpCLFFBQVEsQ0FBQ3VCLFdBQVQsR0FBdUIsVUFBU0csT0FBVCxFQUFrQjtBQUNyQyxNQUFJMUIsUUFBUSxDQUFDYSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsTUFBMENuQixTQUE5QyxFQUF3RDtBQUNwRGlCLElBQUFBLE9BQU8sQ0FBQ0csTUFBUixHQUFpQjdCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLENBQWpCO0FBQ0g7QUFDSixDQUpEOztBQUtBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixRQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XHJcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xyXG4gICAgXCJsYl90ZXh0X3NvX2R1XCI6IFwiU+G7kSBkxrA6XCIsXHJcbiAgICBcImxiX2h1X2tpbV9jdW9uZ1wiOiBcIkjFqSBLaW0gQ8awxqFuZ1wiLFxyXG4gICAgXCJsYl90aXRsZV9zZWxlY3RfbGluZVwiOiBcIkNI4buMTiBEw5JOR1wiLFxyXG4gICAgXCJsYl9jaGFuXCI6IFwiQ2jhurVuXCIsXHJcbiAgICBcImxiX2xlXCI6IFwiTOG6u1wiLFxyXG4gICAgXCJsYl90YXRfY2FcIjogXCJU4bqldCBj4bqjXCIsXHJcbiAgICBcImxiX2JvX2Nob25cIjogXCJC4buPIGNo4buNblwiLFxyXG4gICAgXCJsYl9zb19sdW90X3F1YXlfbWllbl9waGlcIjogXCJT4buRIGzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrTogXCIsXHJcbiAgICBcImxiX2ZyZWVfc3BpbmVfMlwiOiBcImzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrVwiLFxyXG4gICAgXCJsYl90aGFuZ1wiOiBcIlRo4bqvbmdcIixcclxuICAgIFwibGJfdGllbl9jdW9jXCI6IFwiVGnhu4FuIGPGsOG7o2NcIixcclxuICAgIFwibGJfbHVvdF9ib2NcIjogXCJT4buRIGzGsOG7o3QgYuG7kWM6IFwiLFxyXG4gICAgXCJsYl9waGllblwiOiBcIlBoacOqbjogXCIsXHJcbiAgICBcImxiX21vbmV5X3dpblwiOiBcIlPhu5EgdGnhu4FuIHRo4bqvbmc6XCIsXHJcbiAgICBcImxiX3BoaWVuXzFcIjogXCJQaGnDqm5cIixcclxuICAgIFwibGJfdGhvaV9naWFuXCI6IFwiVGjhu51pIEdpYW5cIixcclxuICAgIFwibGJfZGF0XCI6IFwixJDhurd0XCIsXHJcbiAgICBcImxiX2NoaXRpZXRcIjogXCJDaGkgdGnhur90XCIsXHJcbiAgICBcImxiX25hbWVcIjogXCJUw6puIE5ow6JuIFbhuq10XCIsXHJcbiAgICBcImxiX2Rlc1wiOiBcIk3DtCBU4bqjXCIsXHJcbiAgICBcIm5vdGlfbm90X3RyaWFsXCI6IFwiQ2jhu6ljIG7Eg25nIG7DoHkga2jDtG5nIGPDsyDhu58gY2jhur8gxJHhu5kgY2jGoWkgdGjhu61cIixcclxuICAgIFwibm90aV9ub3RfbW9uZXlcIjogXCJLaMO0bmcgxJHhu6cgc+G7kSBkxrBcIixcclxuICAgIFwibm90aV9pc19wbGF5aW5nXCI6IFwiSGnhu4duIMSRYW5nIHRyb25nIHRp4bq/biB0csOsbmggcXVheVwiLFxyXG4gICAgXCJ4eHh4eHh4eHh4eFwiOiBcInh4eHh4eHh4eHh4XCIsXHJcbn07XHJcbkxhbmd1YWdlLkxBTkdVQUdFX0VOID0gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcblxyXG5MYW5ndWFnZS5MQU5HVUFHRV9aSCA9IHtcclxuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBMYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UoXCJlblwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIik7XHJcbn07XHJcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIiwgY3VycmVudExhbmd1YWdlKTtcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0UgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAvLyBzd2l0Y2ggKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgLy8gICAgIGNhc2UgXCJ2blwiOntcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYXNlIFwiZW5cIjp7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2FzZSBcInpoXCI6IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBkZWZhdWx0OiB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn07XHJcbkxhbmd1YWdlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obm9kZVRyZWUpIHtcclxuICAgIGxldCBsaXN0TGFiZWwgICAgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuTGFiZWwpO1xyXG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RMYWJlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0TGFiZWxbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0UmljaFRleHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdFJpY2hUZXh0W2ldKTtcclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuZ2V0U3RyaW5nID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XHJcbn07XHJcbkxhbmd1YWdlLnNldExhbmd1YWdlID0gZnVuY3Rpb24oc3ViTm9kZSkge1xyXG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgc3ViTm9kZS5zdHJpbmcgPSBMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXTtcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBMYW5ndWFnZTtcclxuIl19