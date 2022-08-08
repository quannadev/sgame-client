
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/language/portalLanguage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e06827Bf1xO24g8fQFEeJ8p', 'portalLanguage');
// scripts/language/portalLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_tai_xiu": "TÀI XỈU",
  "lb_sieu_xe": "SIÊU XE",
  "lb_loc_thu": "LỘC THÚ",
  "lb_thien_dia": "THIÊN ĐỊA",
  "lb_lich_su_giao_dich": "LỊCH SỬ GIAO DỊCH",
  "lb_thoi_gian": "THỜI GIAN",
  "lb_phat_sinh": "PHÁT SINH",
  "lb_so_du": "SỐ DƯ",
  "lb_tax": "THUẾ",
  "lb_mieu_ta": "MIÊU TẢ",
  "lb_bao_mat_otp": "Bảo Mật OTP",
  "lb_nhap_sdt": "Nhập số điện thoại",
  "lb_ma_otp": "Mã OTP",
  "lb_doi_mat_khau": "Đổi mật khẩu",
  "lb_mat_khau_moi": "Mật khẩu mới",
  "lb_nhap_lai_mk": "Nhập lại mật khẩu",
  "lb_ten_dai_ly": "TÊN ĐẠI LÝ",
  "lb_khu_vuc": "KHU VỰC",
  "lb_nhap_gift_code": "Nhập Giftcode",
  "lb_ho_tro": "Hỗ trợ",
  "lb_bao_mat": "Bảo mật",
  "lb_lich_su_gd": "Lịch sử GD",
  "lb_chon_menh_gia": "Vui lòng chọn mênh giá",
  "lb_nhap_seri": "Nhập số Seri",
  "lb_nhap_ma_the": "Mã thẻ",
  "lb_thong_tin": "Thông tin",
  "lb_tai_khoan": "Tài khoản :",
  "lb_ten_hien_thi": "Tên hiển thị :",
  "lb_so_du_1": "Số dư :",
  "lb_ten_dang_nhap": "Tên đăng nhập",
  "lb_ten_hien_thi_1": "Tên hiển thị",
  "lb_mat_khau": "Mật khẩu",
  "lb_bang_xep_hang": "Bảng xếp hạng",
  "lb_them": "Thêm",
  "lb_so_du_con_lai": "Số dư còn lại:",
  "lb_6_nguoi": "6 người",
  "lb_9_nguoi": "9 người",
  "xxxxxxxxxxx": "xxxxxxxxxxx"
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2xhbmd1YWdlL3BvcnRhbExhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLGdCQUFjLFNBREs7QUFFbkIsZ0JBQWMsU0FGSztBQUduQixnQkFBYyxTQUhLO0FBSW5CLGtCQUFnQixXQUpHO0FBS25CLDBCQUF3QixtQkFMTDtBQU1uQixrQkFBZ0IsV0FORztBQU9uQixrQkFBZ0IsV0FQRztBQVFuQixjQUFZLE9BUk87QUFTbkIsWUFBVSxNQVRTO0FBVW5CLGdCQUFjLFNBVks7QUFXbkIsb0JBQWtCLGFBWEM7QUFZbkIsaUJBQWUsb0JBWkk7QUFhbkIsZUFBYSxRQWJNO0FBY25CLHFCQUFtQixjQWRBO0FBZW5CLHFCQUFtQixjQWZBO0FBZ0JuQixvQkFBa0IsbUJBaEJDO0FBaUJuQixtQkFBaUIsWUFqQkU7QUFrQm5CLGdCQUFjLFNBbEJLO0FBbUJuQix1QkFBcUIsZUFuQkY7QUFvQm5CLGVBQWEsUUFwQk07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LENBRkQ7O0FBR0F6QixRQUFRLENBQUN1QixXQUFULEdBQXVCLFVBQVNHLE9BQVQsRUFBa0I7QUFDckMsTUFBSTFCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLE1BQTBDbkIsU0FBOUMsRUFBd0Q7QUFDcERpQixJQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUI3QixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxDQUFqQjtBQUNIO0FBQ0osQ0FKRDs7QUFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0IsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMYW5ndWFnZSA9IHt9O1xuTGFuZ3VhZ2UuTEFOR1VBR0VfVk4gPSB7XG4gICAgXCJsYl90YWlfeGl1XCI6IFwiVMOASSBY4buIVVwiLFxuICAgIFwibGJfc2lldV94ZVwiOiBcIlNJw4pVIFhFXCIsXG4gICAgXCJsYl9sb2NfdGh1XCI6IFwiTOG7mEMgVEjDmlwiLFxuICAgIFwibGJfdGhpZW5fZGlhXCI6IFwiVEhJw4pOIMSQ4buKQVwiLFxuICAgIFwibGJfbGljaF9zdV9naWFvX2RpY2hcIjogXCJM4buKQ0ggU+G7rCBHSUFPIEThu4pDSFwiLFxuICAgIFwibGJfdGhvaV9naWFuXCI6IFwiVEjhu5xJIEdJQU5cIixcbiAgICBcImxiX3BoYXRfc2luaFwiOiBcIlBIw4FUIFNJTkhcIixcbiAgICBcImxiX3NvX2R1XCI6IFwiU+G7kCBExq9cIixcbiAgICBcImxiX3RheFwiOiBcIlRIVeG6vlwiLFxuICAgIFwibGJfbWlldV90YVwiOiBcIk1Jw4pVIFThuqJcIixcbiAgICBcImxiX2Jhb19tYXRfb3RwXCI6IFwiQuG6o28gTeG6rXQgT1RQXCIsXG4gICAgXCJsYl9uaGFwX3NkdFwiOiBcIk5o4bqtcCBz4buRIMSRaeG7h24gdGhv4bqhaVwiLFxuICAgIFwibGJfbWFfb3RwXCI6IFwiTcOjIE9UUFwiLFxuICAgIFwibGJfZG9pX21hdF9raGF1XCI6IFwixJDhu5VpIG3huq10IGto4bqpdVwiLFxuICAgIFwibGJfbWF0X2toYXVfbW9pXCI6IFwiTeG6rXQga2jhuql1IG3hu5tpXCIsXG4gICAgXCJsYl9uaGFwX2xhaV9ta1wiOiBcIk5o4bqtcCBs4bqhaSBt4bqtdCBraOG6qXVcIixcbiAgICBcImxiX3Rlbl9kYWlfbHlcIjogXCJUw4pOIMSQ4bqgSSBMw51cIixcbiAgICBcImxiX2todV92dWNcIjogXCJLSFUgVuG7sENcIixcbiAgICBcImxiX25oYXBfZ2lmdF9jb2RlXCI6IFwiTmjhuq1wIEdpZnRjb2RlXCIsXG4gICAgXCJsYl9ob190cm9cIjogXCJI4buXIHRy4bujXCIsXG4gICAgXCJsYl9iYW9fbWF0XCI6IFwiQuG6o28gbeG6rXRcIixcbiAgICBcImxiX2xpY2hfc3VfZ2RcIjogXCJM4buLY2ggc+G7rSBHRFwiLFxuICAgIFwibGJfY2hvbl9tZW5oX2dpYVwiOiBcIlZ1aSBsw7JuZyBjaOG7jW4gbcOqbmggZ2nDoVwiLFxuICAgIFwibGJfbmhhcF9zZXJpXCI6IFwiTmjhuq1wIHPhu5EgU2VyaVwiLFxuICAgIFwibGJfbmhhcF9tYV90aGVcIjogXCJNw6MgdGjhurtcIixcbiAgICBcImxiX3Rob25nX3RpblwiOiBcIlRow7RuZyB0aW5cIixcbiAgICBcImxiX3RhaV9raG9hblwiOiBcIlTDoGkga2hv4bqjbiA6XCIsXG4gICAgXCJsYl90ZW5faGllbl90aGlcIjogXCJUw6puIGhp4buDbiB0aOG7iyA6XCIsXG4gICAgXCJsYl9zb19kdV8xXCI6IFwiU+G7kSBkxrAgOlwiLFxuICAgIFwibGJfdGVuX2RhbmdfbmhhcFwiOiBcIlTDqm4gxJHEg25nIG5o4bqtcFwiLFxuICAgIFwibGJfdGVuX2hpZW5fdGhpXzFcIjogXCJUw6puIGhp4buDbiB0aOG7i1wiLFxuICAgIFwibGJfbWF0X2toYXVcIjogXCJN4bqtdCBraOG6qXVcIixcbiAgICBcImxiX2JhbmdfeGVwX2hhbmdcIjogXCJC4bqjbmcgeOG6v3AgaOG6oW5nXCIsXG4gICAgXCJsYl90aGVtXCI6IFwiVGjDqm1cIixcbiAgICBcImxiX3NvX2R1X2Nvbl9sYWlcIjogXCJT4buRIGTGsCBjw7JuIGzhuqFpOlwiLFxuICAgIFwibGJfNl9uZ3VvaVwiOiBcIjYgbmfGsOG7nWlcIixcbiAgICBcImxiXzlfbmd1b2lcIjogXCI5IG5nxrDhu51pXCIsXG4gICAgXCJ4eHh4eHh4eHh4eFwiOiBcInh4eHh4eHh4eHh4XCJcbn07XG5MYW5ndWFnZS5MQU5HVUFHRV9FTiA9IExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuXG5MYW5ndWFnZS5MQU5HVUFHRV9aSCA9IHtcbiAgICBcImhvbWVfc2V0dGluZ1wiOiBcInh4eHh4eHh4XCIsXG59O1xuTGFuZ3VhZ2UuZ2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSB1bmRlZmluZWQpe1xuICAgICAgICBMYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UoXCJ2blwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKTtcbn07XG5MYW5ndWFnZS5zZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbihjdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIiwgY3VycmVudExhbmd1YWdlKTtcbn07XG5MYW5ndWFnZS5MQU5HVUFHRSA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGN1cnJlbnRMYW5ndWFnZSA9IHRoaXMuZ2V0Q3VycmVudExhbmd1YWdlKCk7XG4gICAgc3dpdGNoIChjdXJyZW50TGFuZ3VhZ2UpIHtcbiAgICAgICAgY2FzZSBcInZuXCI6e1xuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJlblwiOntcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9FTjtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiemhcIjoge1xuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1pIO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5MYW5ndWFnZS5jaGFuZ2VMYW5ndWFnZSA9IGZ1bmN0aW9uKG5vZGVUcmVlKSB7XG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XG4gICAgbGV0IGxpc3RSaWNoVGV4dCAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5SaWNoVGV4dCk7XG4gICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0TGFiZWwubGVuZ3RoOyBpKyspe1xuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdFJpY2hUZXh0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xuICAgIH1cbn07XG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5MQU5HVUFHRSgpW2tleV07XG59O1xuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XG4gICAgaWYgKExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdIT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHN1Yk5vZGUuc3RyaW5nID0gTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV07XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gTGFuZ3VhZ2U7XG4iXX0=