
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/vampireLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d0efqrGalId5Vmi1CiN7xb', 'vampireLanguage');
// scripts/language/vampireLanguage.js

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
  "lb_session": "PHIÊN",
  "lb_thoi_gian": "THỜI GIAN",
  "lb_no_dat": "ĐẶT",
  "lb_no_thang": "THẮNG",
  "lb_chitiet": "Chi tiết",
  "lb_name": "Tên Nhân Vật",
  "lb_account": "TÀI KHOẢN",
  "lb_des": "Mô Tả",
  "lb_helper": "HƯỚNG DẪN",
  "lb_ban_vua_thang": "BẠN VỪA THẮNG",
  "lb_game_bonus": "TRONG GAME BONUS",
  "lb_lichsugiaodich": "Lịch sử giao dịch",
  "lb_total_win": "Tổng thắng:",
  "noti_not_trial": "Chức năng này không có ở chế độ chơi thử",
  "noti_not_money": "Không đủ số dư",
  "noti_is_playing": "Hiện đang trong tiến trình quay"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHZhbXBpcmVMYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZSIsIkxBTkdVQUdFX1ZOIiwiTEFOR1VBR0VfRU4iLCJMQU5HVUFHRV9aSCIsImdldEN1cnJlbnRMYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsImNjIiwic3lzIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEN1cnJlbnRMYW5ndWFnZSIsImN1cnJlbnRMYW5ndWFnZSIsInNldEl0ZW0iLCJMQU5HVUFHRSIsImNoYW5nZUxhbmd1YWdlIiwibm9kZVRyZWUiLCJsaXN0TGFiZWwiLCJnZXRDb21wb25lbnRzSW5DaGlsZHJlbiIsIkxhYmVsIiwibGlzdFJpY2hUZXh0IiwiUmljaFRleHQiLCJpIiwibGVuZ3RoIiwic2V0TGFuZ3VhZ2UiLCJnZXRTdHJpbmciLCJrZXkiLCJzdWJOb2RlIiwibm9kZSIsIm5hbWUiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBRyxFQUFmO0FBQ0FBLFFBQVEsQ0FBQ0MsV0FBVCxHQUF1QjtBQUNuQixtQkFBaUIsUUFERTtBQUVuQixxQkFBbUIsY0FGQTtBQUduQiwwQkFBd0IsV0FITDtBQUluQixhQUFXLE1BSlE7QUFLbkIsV0FBUyxJQUxVO0FBTW5CLGVBQWEsUUFOTTtBQU9uQixnQkFBYyxTQVBLO0FBUW5CLDhCQUE0Qix5QkFSVDtBQVNuQixxQkFBbUIsb0JBVEE7QUFVbkIsY0FBWSxPQVZPO0FBV25CLGtCQUFnQixXQVhHO0FBWW5CLGlCQUFlLGVBWkk7QUFhbkIsY0FBWSxTQWJPO0FBY25CLGtCQUFnQixnQkFkRztBQWVuQixnQkFBYyxPQWZLO0FBZ0JuQixrQkFBZ0IsV0FoQkc7QUFpQm5CLGVBQWEsS0FqQk07QUFrQm5CLGlCQUFlLE9BbEJJO0FBbUJuQixnQkFBYyxVQW5CSztBQW9CbkIsYUFBVyxjQXBCUTtB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bnRlbnQiOlsibGV0IExhbmd1YWdlID0ge307XHJcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xyXG4gICAgXCJsYl90ZXh0X3NvX2R1XCI6IFwiU+G7kSBkxrA6XCIsXHJcbiAgICBcImxiX2h1X2tpbV9jdW9uZ1wiOiBcIkjFqSBLaW0gQ8awxqFuZ1wiLFxyXG4gICAgXCJsYl90aXRsZV9zZWxlY3RfbGluZVwiOiBcIkNI4buMTiBEw5JOR1wiLFxyXG4gICAgXCJsYl9jaGFuXCI6IFwiQ2jhurVuXCIsXHJcbiAgICBcImxiX2xlXCI6IFwiTOG6u1wiLFxyXG4gICAgXCJsYl90YXRfY2FcIjogXCJU4bqldCBj4bqjXCIsXHJcbiAgICBcImxiX2JvX2Nob25cIjogXCJC4buPIGNo4buNblwiLFxyXG4gICAgXCJsYl9zb19sdW90X3F1YXlfbWllbl9waGlcIjogXCJT4buRIGzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrTogXCIsXHJcbiAgICBcImxiX2ZyZWVfc3BpbmVfMlwiOiBcImzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrVwiLFxyXG4gICAgXCJsYl90aGFuZ1wiOiBcIlRo4bqvbmdcIixcclxuICAgIFwibGJfdGllbl9jdW9jXCI6IFwiVGnhu4FuIGPGsOG7o2NcIixcclxuICAgIFwibGJfbHVvdF9ib2NcIjogXCJT4buRIGzGsOG7o3QgYuG7kWM6IFwiLFxyXG4gICAgXCJsYl9waGllblwiOiBcIlBoacOqbjogXCIsXHJcbiAgICBcImxiX21vbmV5X3dpblwiOiBcIlPhu5EgdGnhu4FuIHRo4bqvbmc6XCIsXHJcbiAgICBcImxiX3Nlc3Npb25cIjogXCJQSEnDik5cIixcclxuICAgIFwibGJfdGhvaV9naWFuXCI6IFwiVEjhu5xJIEdJQU5cIixcclxuICAgIFwibGJfbm9fZGF0XCI6IFwixJDhurZUXCIsXHJcbiAgICBcImxiX25vX3RoYW5nXCI6IFwiVEjhuq5OR1wiLFxyXG4gICAgXCJsYl9jaGl0aWV0XCI6IFwiQ2hpIHRp4bq/dFwiLFxyXG4gICAgXCJsYl9uYW1lXCI6IFwiVMOqbiBOaMOibiBW4bqtdFwiLFxyXG4gICAgXCJsYl9hY2NvdW50XCI6IFwiVMOASSBLSE/huqJOXCIsXHJcbiAgICBcImxiX2Rlc1wiOiBcIk3DtCBU4bqjXCIsXHJcbiAgICBcImxiX2hlbHBlclwiOiBcIkjGr+G7mk5HIEThuqpOXCIsXHJcbiAgICBcImxiX2Jhbl92dWFfdGhhbmdcIjogXCJC4bqgTiBW4buqQSBUSOG6rk5HXCIsXHJcbiAgICBcImxiX2dhbWVfYm9udXNcIjogXCJUUk9ORyBHQU1FIEJPTlVTXCIsXHJcbiAgICBcImxiX2xpY2hzdWdpYW9kaWNoXCI6IFwiTOG7i2NoIHPhu60gZ2lhbyBk4buLY2hcIixcclxuICAgIFwibGJfdG90YWxfd2luXCI6IFwiVOG7lW5nIHRo4bqvbmc6XCIsXHJcbiAgICBcIm5vdGlfbm90X3RyaWFsXCI6IFwiQ2jhu6ljIG7Eg25nIG7DoHkga2jDtG5nIGPDsyDhu58gY2jhur8gxJHhu5kgY2jGoWkgdGjhu61cIixcclxuICAgIFwibm90aV9ub3RfbW9uZXlcIjogXCJLaMO0bmcgxJHhu6cgc+G7kSBkxrBcIixcclxuICAgIFwibm90aV9pc19wbGF5aW5nXCI6IFwiSGnhu4duIMSRYW5nIHRyb25nIHRp4bq/biB0csOsbmggcXVheVwiXHJcbn07XHJcbkxhbmd1YWdlLkxBTkdVQUdFX0VOID0gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcblxyXG5MYW5ndWFnZS5MQU5HVUFHRV9aSCA9IHtcclxuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcclxufTtcclxuTGFuZ3VhZ2UuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBMYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UoXCJlblwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIik7XHJcbn07XHJcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIiwgY3VycmVudExhbmd1YWdlKTtcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0UgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAvLyBzd2l0Y2ggKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgLy8gICAgIGNhc2UgXCJ2blwiOntcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYXNlIFwiZW5cIjp7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2FzZSBcInpoXCI6IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBkZWZhdWx0OiB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn07XHJcbkxhbmd1YWdlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obm9kZVRyZWUpIHtcclxuICAgIGxldCBsaXN0TGFiZWwgICAgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuTGFiZWwpO1xyXG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RMYWJlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0TGFiZWxbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0UmljaFRleHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdFJpY2hUZXh0W2ldKTtcclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuZ2V0U3RyaW5nID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XHJcbn07XHJcbkxhbmd1YWdlLnNldExhbmd1YWdlID0gZnVuY3Rpb24oc3ViTm9kZSkge1xyXG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgc3ViTm9kZS5zdHJpbmcgPSBMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXTtcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBMYW5ndWFnZTtcclxuIl19