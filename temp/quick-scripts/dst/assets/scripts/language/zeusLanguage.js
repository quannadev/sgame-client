
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/zeusLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7221ee5YS1BvaBoDvZyKZUn', 'zeusLanguage');
// scripts/language/zeusLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_win": "Thắng: ",
  "lb_cuoc": "Tổng cược: ",
  "lb_phien": "Phiên:",
  "lb_free_spine_3": "LƯỢT QUAY MIỄN PHÍ: ",
  "lb_receive": "Bạn nhận được ",
  "lb_free_spine_2": "lượt quay miễn phí",
  "lb_title_select_line": "CHỌN DÒNG",
  "lb_chan": "Chẵn",
  "lb_le": "Lẻ",
  "lb_tat_ca": "Tất cả",
  "lb_bo_chon": "Bỏ chọn",
  "lb_ban_vua_thang": "BẠN VỪA THẮNG",
  "lb_game_bonus": "TRONG GAME\n" + "BẢO VỆ OLYMPUS",
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
  "noti_is_playing": "Hiện đang trong tiến trình quay"
};
Language.LANGUAGE_EN = Language.LANGUAGE_VN;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHpldXNMYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZSIsIkxBTkdVQUdFX1ZOIiwiTEFOR1VBR0VfRU4iLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsWUFBVSxTQURTO0FBRW5CLGFBQVcsYUFGUTtBQUduQixjQUFZLFFBSE87QUFJbkIscUJBQW1CLHNCQUpBO0FBS25CLGdCQUFjLGdCQUxLO0FBTW5CLHFCQUFtQixvQkFOQTtBQU9uQiwwQkFBd0IsV0FQTDtBQVFuQixhQUFXLE1BUlE7QUFTbkIsV0FBUyxJQVRVO0FBVW5CLGVBQWEsUUFWTTtBQVduQixnQkFBYyxTQVhLO0FBWW5CLHNCQUFvQixlQVpEO0FBYW5CLG1CQUFpQixpQkFDYixnQkFkZTtBQWVuQixtQ0FBaUMsNEJBZmQ7QUFnQm5CLHNCQUFvQixnQkFoQkQ7QUFpQm5CLHVCQUFxQixtQkFqQkY7QUFrQm5CLFlBQVUsS0FsQlM7QUFtQm5CLGtCQUFnQixXQW5CRztBQW9CbkIsa0JBQWdCLFdBcEJHO0FBcUJuQixlQUFhLEtBckJNO0FBc0JuQixpQkFBZSxPQXRCSTtBQXVCbkIsYUFBVyxNQXZCUTtBQXdCbkIsZ0JBQWMsT0F4Qks7QUF5Qm5CLGVBQWEsVUF6Qk07QUEwQm5CLGdCQUFjLFdBMUJLO0FBMkJuQixZQUFVLE9BM0JTO0FBNEJuQixvQkFBa0IsMENBNUJDO0FBNkJuQixvQkFBa0IsZ0JBN0JDO0FBOEJuQixxQkFBbUI7QUE5QkEsQ0FBdkI7QUFnQ0FELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxXQUFoQzs7QUFFQUQsUUFBUSxDQUFDRyxrQkFBVCxHQUE4QixZQUFVO0FBQ3BDLE1BQUlDLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkMsSUFBN0MsSUFBcURILFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkNDLFNBQXJHLEVBQStHO0FBQzNHUixJQUFBQSxRQUFRLENBQUNTLGtCQUFULENBQTRCLElBQTVCO0FBQ0g7O0FBQ0QsU0FBT0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixDQUFQO0FBQ0gsQ0FORDs7QUFPQVAsUUFBUSxDQUFDUyxrQkFBVCxHQUE4QixVQUFTQyxlQUFULEVBQTBCO0FBQ3BELE1BQUlOLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixrQkFBckIsRUFBeUNELGVBQXpDO0FBQ0gsQ0FIRDs7QUFJQVYsUUFBUSxDQUFDWSxRQUFULEdBQW9CLFlBQVU7QUFDMUIsU0FBT1osUUFBUSxDQUFDQyxXQUFoQixDQUQwQixDQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWpCRDs7QUFrQkFELFFBQVEsQ0FBQ2EsY0FBVCxHQUEwQixVQUFTQyxRQUFULEVBQW1CO0FBQ3pDLE1BQUlDLFNBQVMsR0FBU0QsUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDWSxLQUFyQyxDQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBTUosUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDYyxRQUFyQyxDQUF0Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUwsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxTQUFLRSxXQUFMLENBQWlCUCxTQUFTLENBQUNLLENBQUQsQ0FBMUI7QUFDSDs7QUFDRCxPQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsWUFBWSxDQUFDRyxNQUE5QixFQUFzQ0QsRUFBQyxFQUF2QyxFQUEwQztBQUN0QyxTQUFLRSxXQUFMLENBQWlCSixZQUFZLENBQUNFLEVBQUQsQ0FBN0I7QUFDSDtBQUNKLENBVEQ7O0FBVUFwQixRQUFRLENBQUN1QixTQUFULEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQixTQUFPLEtBQUtaLFFBQUwsR0FBZ0JZLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUdBeEIsUUFBUSxDQUFDc0IsV0FBVCxHQUF1QixVQUFTRyxPQUFULEVBQWtCO0FBQ3JDLE1BQUl6QixRQUFRLENBQUNZLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxNQUEwQ25CLFNBQTlDLEVBQXdEO0FBQ3BEaUIsSUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCNUIsUUFBUSxDQUFDWSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsQ0FBakI7QUFDSDtBQUNKLENBSkQ7O0FBS0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjlCLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTGFuZ3VhZ2UgPSB7fTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfVk4gPSB7XHJcbiAgICBcImxiX3dpblwiOiBcIlRo4bqvbmc6IFwiLFxyXG4gICAgXCJsYl9jdW9jXCI6IFwiVOG7lW5nIGPGsOG7o2M6IFwiLFxyXG4gICAgXCJsYl9waGllblwiOiBcIlBoacOqbjpcIixcclxuICAgIFwibGJfZnJlZV9zcGluZV8zXCI6IFwiTMav4buiVCBRVUFZIE1J4buETiBQSMONOiBcIixcclxuICAgIFwibGJfcmVjZWl2ZVwiOiBcIkLhuqFuIG5o4bqtbiDEkcaw4bujYyBcIixcclxuICAgIFwibGJfZnJlZV9zcGluZV8yXCI6IFwibMaw4bujdCBxdWF5IG1p4buFbiBwaMOtXCIsXHJcbiAgICBcImxiX3RpdGxlX3NlbGVjdF9saW5lXCI6IFwiQ0jhu4xOIETDkk5HXCIsXHJcbiAgICBcImxiX2NoYW5cIjogXCJDaOG6tW5cIixcclxuICAgIFwibGJfbGVcIjogXCJM4bq7XCIsXHJcbiAgICBcImxiX3RhdF9jYVwiOiBcIlThuqV0IGPhuqNcIixcclxuICAgIFwibGJfYm9fY2hvblwiOiBcIkLhu48gY2jhu41uXCIsXHJcbiAgICBcImxiX2Jhbl92dWFfdGhhbmdcIjogXCJC4bqgTiBW4buqQSBUSOG6rk5HXCIsXHJcbiAgICBcImxiX2dhbWVfYm9udXNcIjogXCJUUk9ORyBHQU1FXFxuXCIgK1xyXG4gICAgICAgIFwiQuG6ok8gVuG7hiBPTFlNUFVTXCIsXHJcbiAgICBcImxiX2NoaV90aWV0X2xpY2hfc3VfZ2lhb19kaWNoXCI6IFwiQ2hpIFRp4bq/dCBM4buLY2ggU+G7rSBHaWFvIEThu4tjaFwiLFxyXG4gICAgXCJsYl9zb190aWVuX3RoYW5nXCI6IFwiU+G7kSB0aeG7gW4gdGjhuq9uZzpcIixcclxuICAgIFwibGJfbGljaHN1Z2lhb2RpY2hcIjogXCJM4buLY2ggU+G7rSBHaWFvIEThu4tjaFwiLFxyXG4gICAgXCJsYl9zdHRcIjogXCJTVFRcIixcclxuICAgIFwibGJfdGhvaV9naWFuXCI6IFwiVEjhu5xJIEdJQU5cIixcclxuICAgIFwibGJfdGFpX2tob2FuXCI6IFwiVMOASSBLSE/huqJOXCIsXHJcbiAgICBcImxiX25vX2RhdFwiOiBcIsSQ4bq2VFwiLFxyXG4gICAgXCJsYl9ub190aGFuZ1wiOiBcIlRI4bquTkdcIixcclxuICAgIFwibGJfbG9haVwiOiBcIkxP4bqgSVwiLFxyXG4gICAgXCJsYl9zZXNzaW9uXCI6IFwiUEhJw4pOXCIsXHJcbiAgICBcImxiX2RldGFpbFwiOiBcIkNISSBUSeG6vlRcIixcclxuICAgIFwibGJfYWNjb3VudFwiOiBcIlTDgEkgS0hP4bqiTlwiLFxyXG4gICAgXCJsYl9kZXNcIjogXCJNw5QgVOG6olwiLFxyXG4gICAgXCJub3RpX25vdF90cmlhbFwiOiBcIkNo4bupYyBuxINuZyBuw6B5IGtow7RuZyBjw7Mg4bufIGNo4bq/IMSR4buZIGNoxqFpIHRo4butXCIsXHJcbiAgICBcIm5vdGlfbm90X21vbmV5XCI6IFwiS2jDtG5nIMSR4bunIHPhu5EgZMawXCIsXHJcbiAgICBcIm5vdGlfaXNfcGxheWluZ1wiOiBcIkhp4buHbiDEkWFuZyB0cm9uZyB0aeG6v24gdHLDrG5oIHF1YXlcIlxyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG5cclxuTGFuZ3VhZ2UuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBMYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UoXCJlblwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIik7XHJcbn07XHJcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIiwgY3VycmVudExhbmd1YWdlKTtcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0UgPSBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XHJcbiAgICAvLyBzd2l0Y2ggKGN1cnJlbnRMYW5ndWFnZSkge1xyXG4gICAgLy8gICAgIGNhc2UgXCJ2blwiOntcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjYXNlIFwiZW5cIjp7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY2FzZSBcInpoXCI6IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBkZWZhdWx0OiB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn07XHJcbkxhbmd1YWdlLmNoYW5nZUxhbmd1YWdlID0gZnVuY3Rpb24obm9kZVRyZWUpIHtcclxuICAgIGxldCBsaXN0TGFiZWwgICAgICAgPSBub2RlVHJlZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbiAoY2MuTGFiZWwpO1xyXG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RMYWJlbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0TGFiZWxbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0UmljaFRleHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobGlzdFJpY2hUZXh0W2ldKTtcclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuZ2V0U3RyaW5nID0gZnVuY3Rpb24oa2V5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XHJcbn07XHJcbkxhbmd1YWdlLnNldExhbmd1YWdlID0gZnVuY3Rpb24oc3ViTm9kZSkge1xyXG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgc3ViTm9kZS5zdHJpbmcgPSBMYW5ndWFnZS5MQU5HVUFHRSgpW3N1Yk5vZGUubm9kZS5uYW1lXTtcclxuICAgIH1cclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBMYW5ndWFnZTtcclxuIl19