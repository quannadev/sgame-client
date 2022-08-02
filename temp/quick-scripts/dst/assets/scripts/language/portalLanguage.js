
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGFuZ3VhZ2VcXHBvcnRhbExhbmd1YWdlLmpzIl0sIm5hbWVzIjpbIkxhbmd1YWdlIiwiTEFOR1VBR0VfVk4iLCJMQU5HVUFHRV9FTiIsIkxBTkdVQUdFX1pIIiwiZ2V0Q3VycmVudExhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiY2MiLCJzeXMiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0Q3VycmVudExhbmd1YWdlIiwiY3VycmVudExhbmd1YWdlIiwic2V0SXRlbSIsIkxBTkdVQUdFIiwiY2hhbmdlTGFuZ3VhZ2UiLCJub2RlVHJlZSIsImxpc3RMYWJlbCIsImdldENvbXBvbmVudHNJbkNoaWxkcmVuIiwiTGFiZWwiLCJsaXN0UmljaFRleHQiLCJSaWNoVGV4dCIsImkiLCJsZW5ndGgiLCJzZXRMYW5ndWFnZSIsImdldFN0cmluZyIsImtleSIsInN1Yk5vZGUiLCJub2RlIiwibmFtZSIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLEVBQWY7QUFDQUEsUUFBUSxDQUFDQyxXQUFULEdBQXVCO0FBQ25CLGdCQUFjLFNBREs7QUFFbkIsZ0JBQWMsU0FGSztBQUduQixnQkFBYyxTQUhLO0FBSW5CLGtCQUFnQixXQUpHO0FBS25CLDBCQUF3QixtQkFMTDtBQU1uQixrQkFBZ0IsV0FORztBQU9uQixrQkFBZ0IsV0FQRztBQVFuQixjQUFZLE9BUk87QUFTbkIsWUFBVSxNQVRTO0FBVW5CLGdCQUFjLFNBVks7QUFXbkIsb0JBQWtCLGFBWEM7QUFZbkIsaUJBQWUsb0JBWkk7QUFhbkIsZUFBYSxRQWJNO0FBY25CLHFCQUFtQixjQWRBO0FBZW5CLHFCQUFtQixjQWZBO0FBZ0JuQixvQkFBa0IsbUJBaEJDO0FBaUJuQixtQkFBaUIsWUFqQkU7QUFrQm5CLGdCQUFjLFNBbEJLO0FBbUJuQix1QkFBcUIsZUFuQkY7QUFvQm5CLGVBQWEsUUFw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QUNILENBRkQ7O0FBR0F6QixRQUFRLENBQUN1QixXQUFULEdBQXVCLFVBQVNHLE9BQVQsRUFBa0I7QUFDckMsTUFBSTFCLFFBQVEsQ0FBQ2EsUUFBVCxHQUFvQmEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLElBQWpDLE1BQTBDbkIsU0FBOUMsRUFBd0Q7QUFDcERpQixJQUFBQSxPQUFPLENBQUNHLE1BQVIsR0FBaUI3QixRQUFRLENBQUNhLFFBQVQsR0FBb0JhLE9BQU8sQ0FBQ0MsSUFBUixDQUFhQyxJQUFqQyxDQUFqQjtBQUNIO0FBQ0osQ0FKRDs7QUFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0IsUUFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBMYW5ndWFnZSA9IHt9O1xyXG5MYW5ndWFnZS5MQU5HVUFHRV9WTiA9IHtcclxuICAgIFwibGJfdGFpX3hpdVwiOiBcIlTDgEkgWOG7iFVcIixcclxuICAgIFwibGJfc2lldV94ZVwiOiBcIlNJw4pVIFhFXCIsXHJcbiAgICBcImxiX2xvY190aHVcIjogXCJM4buYQyBUSMOaXCIsXHJcbiAgICBcImxiX3RoaWVuX2RpYVwiOiBcIlRIScOKTiDEkOG7ikFcIixcclxuICAgIFwibGJfbGljaF9zdV9naWFvX2RpY2hcIjogXCJM4buKQ0ggU+G7rCBHSUFPIEThu4pDSFwiLFxyXG4gICAgXCJsYl90aG9pX2dpYW5cIjogXCJUSOG7nEkgR0lBTlwiLFxyXG4gICAgXCJsYl9waGF0X3NpbmhcIjogXCJQSMOBVCBTSU5IXCIsXHJcbiAgICBcImxiX3NvX2R1XCI6IFwiU+G7kCBExq9cIixcclxuICAgIFwibGJfdGF4XCI6IFwiVEhV4bq+XCIsXHJcbiAgICBcImxiX21pZXVfdGFcIjogXCJNScOKVSBU4bqiXCIsXHJcbiAgICBcImxiX2Jhb19tYXRfb3RwXCI6IFwiQuG6o28gTeG6rXQgT1RQXCIsXHJcbiAgICBcImxiX25oYXBfc2R0XCI6IFwiTmjhuq1wIHPhu5EgxJFp4buHbiB0aG/huqFpXCIsXHJcbiAgICBcImxiX21hX290cFwiOiBcIk3DoyBPVFBcIixcclxuICAgIFwibGJfZG9pX21hdF9raGF1XCI6IFwixJDhu5VpIG3huq10IGto4bqpdVwiLFxyXG4gICAgXCJsYl9tYXRfa2hhdV9tb2lcIjogXCJN4bqtdCBraOG6qXUgbeG7m2lcIixcclxuICAgIFwibGJfbmhhcF9sYWlfbWtcIjogXCJOaOG6rXAgbOG6oWkgbeG6rXQga2jhuql1XCIsXHJcbiAgICBcImxiX3Rlbl9kYWlfbHlcIjogXCJUw4pOIMSQ4bqgSSBMw51cIixcclxuICAgIFwibGJfa2h1X3Z1Y1wiOiBcIktIVSBW4buwQ1wiLFxyXG4gICAgXCJsYl9uaGFwX2dpZnRfY29kZVwiOiBcIk5o4bqtcCBHaWZ0Y29kZVwiLFxyXG4gICAgXCJsYl9ob190cm9cIjogXCJI4buXIHRy4bujXCIsXHJcbiAgICBcImxiX2Jhb19tYXRcIjogXCJC4bqjbyBt4bqtdFwiLFxyXG4gICAgXCJsYl9saWNoX3N1X2dkXCI6IFwiTOG7i2NoIHPhu60gR0RcIixcclxuICAgIFwibGJfY2hvbl9tZW5oX2dpYVwiOiBcIlZ1aSBsw7JuZyBjaOG7jW4gbcOqbmggZ2nDoVwiLFxyXG4gICAgXCJsYl9uaGFwX3NlcmlcIjogXCJOaOG6rXAgc+G7kSBTZXJpXCIsXHJcbiAgICBcImxiX25oYXBfbWFfdGhlXCI6IFwiTcOjIHRo4bq7XCIsXHJcbiAgICBcImxiX3Rob25nX3RpblwiOiBcIlRow7RuZyB0aW5cIixcclxuICAgIFwibGJfdGFpX2tob2FuXCI6IFwiVMOgaSBraG/huqNuIDpcIixcclxuICAgIFwibGJfdGVuX2hpZW5fdGhpXCI6IFwiVMOqbiBoaeG7g24gdGjhu4sgOlwiLFxyXG4gICAgXCJsYl9zb19kdV8xXCI6IFwiU+G7kSBkxrAgOlwiLFxyXG4gICAgXCJsYl90ZW5fZGFuZ19uaGFwXCI6IFwiVMOqbiDEkcSDbmcgbmjhuq1wXCIsXHJcbiAgICBcImxiX3Rlbl9oaWVuX3RoaV8xXCI6IFwiVMOqbiBoaeG7g24gdGjhu4tcIixcclxuICAgIFwibGJfbWF0X2toYXVcIjogXCJN4bqtdCBraOG6qXVcIixcclxuICAgIFwibGJfYmFuZ194ZXBfaGFuZ1wiOiBcIkLhuqNuZyB44bq/cCBo4bqhbmdcIixcclxuICAgIFwibGJfdGhlbVwiOiBcIlRow6ptXCIsXHJcbiAgICBcImxiX3NvX2R1X2Nvbl9sYWlcIjogXCJT4buRIGTGsCBjw7JuIGzhuqFpOlwiLFxyXG4gICAgXCJsYl82X25ndW9pXCI6IFwiNiBuZ8aw4budaVwiLFxyXG4gICAgXCJsYl85X25ndW9pXCI6IFwiOSBuZ8aw4budaVwiLFxyXG4gICAgXCJ4eHh4eHh4eHh4eFwiOiBcInh4eHh4eHh4eHh4XCJcclxufTtcclxuTGFuZ3VhZ2UuTEFOR1VBR0VfRU4gPSBMYW5ndWFnZS5MQU5HVUFHRV9WTjtcclxuXHJcbkxhbmd1YWdlLkxBTkdVQUdFX1pIID0ge1xyXG4gICAgXCJob21lX3NldHRpbmdcIjogXCJ4eHh4eHh4eFwiLFxyXG59O1xyXG5MYW5ndWFnZS5nZXRDdXJyZW50TGFuZ3VhZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRfbGFuZ3VhZ2VcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50X2xhbmd1YWdlXCIpID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIExhbmd1YWdlLnNldEN1cnJlbnRMYW5ndWFnZShcInZuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiKTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0Q3VycmVudExhbmd1YWdlID0gZnVuY3Rpb24oY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudF9sYW5ndWFnZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xyXG59O1xyXG5MYW5ndWFnZS5MQU5HVUFHRSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgY3VycmVudExhbmd1YWdlID0gdGhpcy5nZXRDdXJyZW50TGFuZ3VhZ2UoKTtcclxuICAgIHN3aXRjaCAoY3VycmVudExhbmd1YWdlKSB7XHJcbiAgICAgICAgY2FzZSBcInZuXCI6e1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfVk47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJlblwiOntcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX0VOO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFwiemhcIjoge1xyXG4gICAgICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTEFOR1VBR0VfWkg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLkxBTkdVQUdFX1ZOO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuTGFuZ3VhZ2UuY2hhbmdlTGFuZ3VhZ2UgPSBmdW5jdGlvbihub2RlVHJlZSkge1xyXG4gICAgbGV0IGxpc3RMYWJlbCAgICAgICA9IG5vZGVUcmVlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuIChjYy5MYWJlbCk7XHJcbiAgICBsZXQgbGlzdFJpY2hUZXh0ICAgID0gbm9kZVRyZWUuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4gKGNjLlJpY2hUZXh0KTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdExhYmVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICB0aGlzLnNldExhbmd1YWdlKGxpc3RMYWJlbFtpXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RSaWNoVGV4dC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgdGhpcy5zZXRMYW5ndWFnZShsaXN0UmljaFRleHRbaV0pO1xyXG4gICAgfVxyXG59O1xyXG5MYW5ndWFnZS5nZXRTdHJpbmcgPSBmdW5jdGlvbihrZXkpIHtcclxuICAgIHJldHVybiB0aGlzLkxBTkdVQUdFKClba2V5XTtcclxufTtcclxuTGFuZ3VhZ2Uuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbihzdWJOb2RlKSB7XHJcbiAgICBpZiAoTGFuZ3VhZ2UuTEFOR1VBR0UoKVtzdWJOb2RlLm5vZGUubmFtZV0hPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBzdWJOb2RlLnN0cmluZyA9IExhbmd1YWdlLkxBTkdVQUdFKClbc3ViTm9kZS5ub2RlLm5hbWVdO1xyXG4gICAgfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IExhbmd1YWdlO1xyXG4iXX0=