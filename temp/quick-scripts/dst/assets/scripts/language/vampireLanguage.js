
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL3ZhbXBpcmVMYW5ndWFnZS5qcyJdLCJuYW1lcyI6WyJMYW5ndWFnZSIsIkxBTkdVQUdFX1ZOIiwiTEFOR1VBR0VfRU4iLCJMQU5HVUFHRV9aSCIsImdldEN1cnJlbnRMYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsImNjIiwic3lzIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEN1cnJlbnRMYW5ndWFnZSIsImN1cnJlbnRMYW5ndWFnZSIsInNldEl0ZW0iLCJMQU5HVUFHRSIsImNoYW5nZUxhbmd1YWdlIiwibm9kZVRyZWUiLCJsaXN0TGFiZWwiLCJnZXRDb21wb25lbnRzSW5DaGlsZHJlbiIsIkxhYmVsIiwibGlzdFJpY2hUZXh0IiwiUmljaFRleHQiLCJpIiwibGVuZ3RoIiwic2V0TGFuZ3VhZ2UiLCJnZXRTdHJpbmciLCJrZXkiLCJzdWJOb2RlIiwibm9kZSIsIm5hbWUiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFFBQVEsR0FBRyxFQUFmO0FBQ0FBLFFBQVEsQ0FBQ0MsV0FBVCxHQUF1QjtBQUNuQixtQkFBaUIsUUFERTtBQUVuQixxQkFBbUIsY0FGQTtBQUduQiwwQkFBd0IsV0FITDtBQUluQixhQUFXLE1BSlE7QUFLbkIsV0FBUyxJQUxVO0FBTW5CLGVBQWEsUUFOTTtBQU9uQixnQkFBYyxTQVBLO0FBUW5CLDhCQUE0Qix5QkFSVDtBQVNuQixxQkFBbUIsb0JBVEE7QUFVbkIsY0FBWSxPQVZPO0FBV25CLGtCQUFnQixXQVhHO0FBWW5CLGlCQUFlLGVBWkk7QUFhbkIsY0FBWSxTQWJPO0FBY25CLGtCQUFnQixnQkFkRztBQWVuQixnQkFBYyxPQWZLO0FBZ0JuQixrQkFBZ0IsV0FoQkc7QUFpQm5CLGVBQWEsS0FqQk07QUFrQm5CLGlCQUFlLE9BbEJJO0FBbUJuQixnQkFBYyxVQW5CSztBQW9CbkIsYUFBVyxjQXBCUTtBQXFC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bnQiOlsibGV0IExhbmd1YWdlID0ge307XG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcbiAgICBcImxiX3RleHRfc29fZHVcIjogXCJT4buRIGTGsDpcIixcbiAgICBcImxiX2h1X2tpbV9jdW9uZ1wiOiBcIkjFqSBLaW0gQ8awxqFuZ1wiLFxuICAgIFwibGJfdGl0bGVfc2VsZWN0X2xpbmVcIjogXCJDSOG7jE4gRMOSTkdcIixcbiAgICBcImxiX2NoYW5cIjogXCJDaOG6tW5cIixcbiAgICBcImxiX2xlXCI6IFwiTOG6u1wiLFxuICAgIFwibGJfdGF0X2NhXCI6IFwiVOG6pXQgY+G6o1wiLFxuICAgIFwibGJfYm9fY2hvblwiOiBcIkLhu48gY2jhu41uXCIsXG4gICAgXCJsYl9zb19sdW90X3F1YXlfbWllbl9waGlcIjogXCJT4buRIGzGsOG7o3QgcXVheSBtaeG7hW4gcGjDrTogXCIsXG4gICAgXCJsYl9mcmVlX3NwaW5lXzJcIjogXCJsxrDhu6N0IHF1YXkgbWnhu4VuIHBow61cIixcbiAgICBcImxiX3RoYW5nXCI6IFwiVGjhuq9uZ1wiLFxuICAgIFwibGJfdGllbl9jdW9jXCI6IFwiVGnhu4FuIGPGsOG7o2NcIixcbiAgICBcImxiX2x1b3RfYm9jXCI6IFwiU+G7kSBsxrDhu6N0IGLhu5FjOiBcIixcbiAgICBcImxiX3BoaWVuXCI6IFwiUGhpw6puOiBcIixcbiAgICBcImxiX21vbmV5X3dpblwiOiBcIlPhu5EgdGnhu4FuIHRo4bqvbmc6XCIsXG4gICAgXCJsYl9zZXNzaW9uXCI6IFwiUEhJw4pOXCIsXG4gICAgXCJsYl90aG9pX2dpYW5cIjogXCJUSOG7nEkgR0lBTlwiLFxuICAgIFwibGJfbm9fZGF0XCI6IFwixJDhurZUXCIsXG4gICAgXCJsYl9ub190aGFuZ1wiOiBcIlRI4bquTkdcIixcbiAgICBcImxiX2NoaXRpZXRcIjogXCJDaGkgdGnhur90XCIsXG4gICAgXCJsYl9uYW1lXCI6IFwiVMOqbiBOaMOibiBW4bqtdFwiLFxuICAgIFwibGJfYWNjb3VudFwiOiBcIlTDgEkgS0hP4bqiTlwiLFxuICAgIFwibGJfZGVzXCI6IFwiTcO0IFThuqNcIixcbiAgICBcImxiX2hlbHBlclwiOiBcIkjGr+G7mk5HIEThuqpOXCIsXG4gICAgXCJsYl9iYW5fdnVhX3RoYW5nXCI6IFwiQuG6oE4gVuG7qkEgVEjhuq5OR1wiLFxuICAgIFwibGJfZ2FtZV9ib251c1wiOiBcIlRST05HIEdBTUUgQk9OVVNcIixcbiAgICBcImxiX2xpY2hzdWdpYW9kaWNoXCI6IFwiTOG7i2NoIHPhu60gZ2lhbyBk4buLY2hcIixcbiAgICBcImxiX3RvdGFsX3dpblwiOiBcIlThu5VuZyB0aOG6r25nOlwiLFxuICAgIFwibm90aV9ub3RfdHJpYWxcIjogXCJDaOG7qWMgbsSDbmcgbsOgeSBraMO0bmcgY8OzIOG7nyBjaOG6vyDEkeG7mSBjaMahaSB0aOG7rVwiLFxuICAgIFwibm90aV9ub3RfbW9uZXlcIjogXCJLaMO0bmcgxJHhu6cgc+G7kSBkxrBcIixcbiAgICBcIm5vdGlfaXNfcGxheWluZ1wiOiBcIkhp4buHbiDEkWFuZyB0cm9uZyB0aeG6v24gdHLDrG5oIHF1YXlcIlxufTtcbkxhbmd1YWdlLkxBTkdVQUdFX0VOID0gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG5cbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xuICAgIFwiaG9tZV9zZXR0aW5nXCI6IFwieHh4eHh4eHhcIixcbn07XG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcImVuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpO1xufTtcbkxhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZSA9IGZ1bmN0aW9uKGN1cnJlbnRMYW5ndWFnZSkge1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xufTtcbkxhbmd1YWdlLkxBTkdVQUdFID0gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XG4gICAgLy8gbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XG4gICAgLy8gc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAvLyAgICAgY2FzZSBcInZuXCI6e1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNhc2UgXCJlblwiOntcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBjYXNlIFwiemhcIjoge1xuICAgIC8vICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGRlZmF1bHQ6IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn07XG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xuICAgIH1cbn07XG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XG59O1xuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XG4iXX0=