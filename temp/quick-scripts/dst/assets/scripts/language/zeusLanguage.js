
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL3pldXNMYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZSIsIkxBTkdVQUdFX1ZOIiwiTEFOR1VBR0VfRU4iLCJnZXRDdXJyZW50TGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRJdGVtIiwiTEFOR1VBR0UiLCJjaGFuZ2VMYW5ndWFnZSIsIm5vZGVUcmVlIiwibGlzdExhYmVsIiwiZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4iLCJMYWJlbCIsImxpc3RSaWNoVGV4dCIsIlJpY2hUZXh0IiwiaSIsImxlbmd0aCIsInNldExhbmd1YWdlIiwiZ2V0U3RyaW5nIiwia2V5Iiwic3ViTm9kZSIsIm5vZGUiLCJuYW1lIiwic3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxRQUFRLEdBQUcsRUFBZjtBQUNBQSxRQUFRLENBQUNDLFdBQVQsR0FBdUI7QUFDbkIsWUFBVSxTQURTO0FBRW5CLGFBQVcsYUFGUTtBQUduQixjQUFZLFFBSE87QUFJbkIscUJBQW1CLHNCQUpBO0FBS25CLGdCQUFjLGdCQUxLO0FBTW5CLHFCQUFtQixvQkFOQTtBQU9uQiwwQkFBd0IsV0FQTDtBQVFuQixhQUFXLE1BUlE7QUFTbkIsV0FBUyxJQVRVO0FBVW5CLGVBQWEsUUFWTTtBQVduQixnQkFBYyxTQVhLO0FBWW5CLHNCQUFvQixlQVpEO0FBYW5CLG1CQUFpQixpQkFDYixnQkFkZTtBQWVuQixtQ0FBaUMsNEJBZmQ7QUFnQm5CLHNCQUFvQixnQkFoQkQ7QUFpQm5CLHVCQUFxQixtQkFqQkY7QUFrQm5CLFlBQVUsS0FsQlM7QUFtQm5CLGtCQUFnQixXQW5CRztBQW9CbkIsa0JBQWdCLFdBcEJHO0FBcUJuQixlQUFhLEtBckJNO0FBc0JuQixpQkFBZSxPQXRCSTtBQXVCbkIsYUFBVyxNQXZCUTtBQXdCbkIsZ0JBQWMsT0F4Qks7QUF5Qm5CLGVBQWEsVUF6Qk07QUEwQm5CLGdCQUFjLFdBMUJLO0FBMkJuQixZQUFVLE9BM0JTO0FBNEJuQixvQkFBa0IsMENBNUJDO0FBNkJuQixvQkFBa0IsZ0JBN0JDO0FBOEJuQixxQkFBbUI7QUE5QkEsQ0FBdkI7QUFnQ0FELFFBQVEsQ0FBQ0UsV0FBVCxHQUF1QkYsUUFBUSxDQUFDQyxXQUFoQzs7QUFFQUQsUUFBUSxDQUFDRyxrQkFBVCxHQUE4QixZQUFVO0FBQ3BDLE1BQUlDLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkMsSUFBN0MsSUFBcURILFlBQVksQ0FBQ0csT0FBYixDQUFxQixrQkFBckIsTUFBNkNDLFNBQXJHLEVBQStHO0FBQzNHUixJQUFBQSxRQUFRLENBQUNTLGtCQUFULENBQTRCLElBQTVCO0FBQ0g7O0FBQ0QsU0FBT0wsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGtCQUFyQixDQUFQO0FBQ0gsQ0FORDs7QUFPQVAsUUFBUSxDQUFDUyxrQkFBVCxHQUE4QixVQUFTQyxlQUFULEVBQTBCO0FBQ3BELE1BQUlOLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ08sT0FBYixDQUFxQixrQkFBckIsRUFBeUNELGVBQXpDO0FBQ0gsQ0FIRDs7QUFJQVYsUUFBUSxDQUFDWSxRQUFULEdBQW9CLFlBQVU7QUFDMUIsU0FBT1osUUFBUSxDQUFDQyxXQUFoQixDQUQwQixDQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxDQWpCRDs7QUFrQkFELFFBQVEsQ0FBQ2EsY0FBVCxHQUEwQixVQUFTQyxRQUFULEVBQW1CO0FBQ3pDLE1BQUlDLFNBQVMsR0FBU0QsUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDWSxLQUFyQyxDQUF0QjtBQUNBLE1BQUlDLFlBQVksR0FBTUosUUFBUSxDQUFDRSx1QkFBVCxDQUFrQ1gsRUFBRSxDQUFDYyxRQUFyQyxDQUF0Qjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUwsU0FBUyxDQUFDTSxNQUEzQixFQUFtQ0QsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxTQUFLRSxXQUFMLENBQWlCUCxTQUFTLENBQUNLLENBQUQsQ0FBMUI7QUFDSDs7QUFDRCxPQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsWUFBWSxDQUFDRyxNQUE5QixFQUFzQ0QsRUFBQyxFQUF2QyxFQUEwQztBQUN0QyxTQUFLRSxXQUFMLENBQWlCSixZQUFZLENBQUNFLEVBQUQsQ0FBN0I7QUFDSDtBQUNKLENBVEQ7O0FBVUFwQixRQUFRLENBQUN1QixTQUFULEdBQXFCLFVBQVNDLEdBQVQsRUFBYztBQUMvQixTQUFPLEtBQUtaLFFBQUwsR0FBZ0JZLEdBQWhCLENBQVA7QUFDSCxDQUZEOztBQUdBeEIsUUFBUSxDQUFDc0IsV0FBVCxHQUF1QixVQUFTRyxPQUFULEVBQWtCO0FBQ3JDLE1BQUl6QixRQUFRLENBQUNZLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxNQUEwQ25CLFNBQTlDLEVBQXdEO0FBQ3BEaUIsSUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCNUIsUUFBUSxDQUFDWSxRQUFULEdBQW9CYSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBakMsQ0FBakI7QUFDSDtBQUNKLENBSkQ7O0FBS0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjlCLFFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTGFuZ3VhZ2UgPSB7fTtcbkxhbmd1YWdlLkxBTkdVQUdFX1ZOID0ge1xuICAgIFwibGJfd2luXCI6IFwiVGjhuq9uZzogXCIsXG4gICAgXCJsYl9jdW9jXCI6IFwiVOG7lW5nIGPGsOG7o2M6IFwiLFxuICAgIFwibGJfcGhpZW5cIjogXCJQaGnDqm46XCIsXG4gICAgXCJsYl9mcmVlX3NwaW5lXzNcIjogXCJMxq/hu6JUIFFVQVkgTUnhu4ROIFBIw406IFwiLFxuICAgIFwibGJfcmVjZWl2ZVwiOiBcIkLhuqFuIG5o4bqtbiDEkcaw4bujYyBcIixcbiAgICBcImxiX2ZyZWVfc3BpbmVfMlwiOiBcImzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrVwiLFxuICAgIFwibGJfdGl0bGVfc2VsZWN0X2xpbmVcIjogXCJDSOG7jE4gRMOSTkdcIixcbiAgICBcImxiX2NoYW5cIjogXCJDaOG6tW5cIixcbiAgICBcImxiX2xlXCI6IFwiTOG6u1wiLFxuICAgIFwibGJfdGF0X2NhXCI6IFwiVOG6pXQgY+G6o1wiLFxuICAgIFwibGJfYm9fY2hvblwiOiBcIkLhu48gY2jhu41uXCIsXG4gICAgXCJsYl9iYW5fdnVhX3RoYW5nXCI6IFwiQuG6oE4gVuG7qkEgVEjhuq5OR1wiLFxuICAgIFwibGJfZ2FtZV9ib251c1wiOiBcIlRST05HIEdBTUVcXG5cIiArXG4gICAgICAgIFwiQuG6ok8gVuG7hiBPTFlNUFVTXCIsXG4gICAgXCJsYl9jaGlfdGlldF9saWNoX3N1X2dpYW9fZGljaFwiOiBcIkNoaSBUaeG6v3QgTOG7i2NoIFPhu60gR2lhbyBE4buLY2hcIixcbiAgICBcImxiX3NvX3RpZW5fdGhhbmdcIjogXCJT4buRIHRp4buBbiB0aOG6r25nOlwiLFxuICAgIFwibGJfbGljaHN1Z2lhb2RpY2hcIjogXCJM4buLY2ggU+G7rSBHaWFvIEThu4tjaFwiLFxuICAgIFwibGJfc3R0XCI6IFwiU1RUXCIsXG4gICAgXCJsYl90aG9pX2dpYW5cIjogXCJUSOG7nEkgR0lBTlwiLFxuICAgIFwibGJfdGFpX2tob2FuXCI6IFwiVMOASSBLSE/huqJOXCIsXG4gICAgXCJsYl9ub19kYXRcIjogXCLEkOG6tlRcIixcbiAgICBcImxiX25vX3RoYW5nXCI6IFwiVEjhuq5OR1wiLFxuICAgIFwibGJfbG9haVwiOiBcIkxP4bqgSVwiLFxuICAgIFwibGJfc2Vzc2lvblwiOiBcIlBIScOKTlwiLFxuICAgIFwibGJfZGV0YWlsXCI6IFwiQ0hJIFRJ4bq+VFwiLFxuICAgIFwibGJfYWNjb3VudFwiOiBcIlTDgEkgS0hP4bqiTlwiLFxuICAgIFwibGJfZGVzXCI6IFwiTcOUIFThuqJcIixcbiAgICBcIm5vdGlfbm90X3RyaWFsXCI6IFwiQ2jhu6ljIG7Eg25nIG7DoHkga2jDtG5nIGPDsyDhu58gY2jhur8gxJHhu5kgY2jGoWkgdGjhu61cIixcbiAgICBcIm5vdGlfbm90X21vbmV5XCI6IFwiS2jDtG5nIMSR4bunIHPhu5EgZMawXCIsXG4gICAgXCJub3RpX2lzX3BsYXlpbmdcIjogXCJIaeG7h24gxJFhbmcgdHJvbmcgdGnhur9uIHRyw6xuaCBxdWF5XCJcbn07XG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuXG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcImVuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xufTtcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xufTtcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgLy8gbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XG4gICAgLy8gc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAvLyAgICAgY2FzZSBcInZuXCI6e1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNhc2UgXCJlblwiOntcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjYXNlIFwiemhcIjoge1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGRlZmF1bHQ6IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn07XG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xuICAgIH1cbn07XG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XG59O1xuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XG4iXX0=