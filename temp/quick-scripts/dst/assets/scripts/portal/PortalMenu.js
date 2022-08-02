
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/PortalMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cce15CVz1BEWr7q5ojTTbkj', 'PortalMenu');
// scripts/portal/PortalMenu.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {},
  onClickMenu: function onClickMenu() {
    mm.audio.playButton();
    this.show("UIMenu", {
      pop: true,
      src: "portal"
    });
  },
  onClickPayment: function onClickPayment() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show('UIPayment', {
        pop: true,
        src: 'portal',
        data: {
          nickname: null,
          area: 'ja'
        }
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickTelegram: function onClickTelegram() {
    mm.audio.playButton();
    cc.sys.openURL("https://t.me/cskh");
  },
  onClickGiftCode: function onClickGiftCode() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show('UIGiftCode', {
        pop: true,
        src: 'portal'
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickDaiLy: function onClickDaiLy() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show("UIDaiLy", {
        pop: true,
        src: 'portal'
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickChuyenkhoan: function onClickChuyenkhoan() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show('UIPayment', {
        pop: true,
        src: 'portal',
        data: {
          nickname: null,
          area: 'ja'
        }
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickProfile: function onClickProfile(event) {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show("UIProfile", {
        pop: true,
        src: 'portal'
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickGroup: function onClickGroup() {
    mm.audio.playButton();
    cc.sys.openURL("https://www.facebook.com");
  },
  onClickFacebook: function onClickFacebook() {
    mm.audio.playButton();
    cc.sys.openURL("https://www.facebook.com");
  },
  onClickEvent: function onClickEvent() {
    this.show("UITaiXiuDuaTop", {
      pop: true,
      src: 'taixiu',
      data: "TheLe"
    });
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxQb3J0YWxNZW51LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uQ2xpY2tNZW51IiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJzaG93IiwicG9wIiwic3JjIiwib25DbGlja1BheW1lbnQiLCJpc0xvZ2luIiwiZGF0YSIsIm5pY2tuYW1lIiwiYXJlYSIsIm9uQ2xpY2tUZWxlZ3JhbSIsInN5cyIsIm9wZW5VUkwiLCJvbkNsaWNrR2lmdENvZGUiLCJvbkNsaWNrRGFpTHkiLCJvbkNsaWNrQ2h1eWVua2hvYW4iLCJvbkNsaWNrUHJvZmlsZSIsImV2ZW50Iiwib25DbGlja0dyb3VwIiwib25DbGlja0ZhY2Vib29rIiwib25DbGlja0V2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFLTEMsRUFBQUEsV0FMSyx5QkFLUTtBQUNUQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNBLFNBQUtDLElBQUwsQ0FBVSxRQUFWLEVBQW9CO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRTtBQUFqQixLQUFwQjtBQUNILEdBUkk7QUFTTEMsRUFBQUEsY0FUSyw0QkFTVztBQUNaTixJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDs7QUFDQSxRQUFHRixFQUFFLENBQUNPLE9BQU4sRUFBYztBQUNWLFdBQUtKLElBQUwsQ0FBVSxXQUFWLEVBQXVCO0FBQUNDLFFBQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLFFBQUFBLEdBQUcsRUFBRSxRQUFqQjtBQUEyQkcsUUFBQUEsSUFBSSxFQUFHO0FBQUNDLFVBQUFBLFFBQVEsRUFBRSxJQUFY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QUNYLFNBQUtsQixJQUFMLENBQVUsZ0JBQVYsRUFBNEI7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFLElBQU47QUFBWUMsTUFBQUEsR0FBRyxFQUFFLFFBQWpCO0FBQTJCRyxNQUFBQSxJQUFJLEVBQUU7QUFBakMsS0FBNUI7QUFDSDtBQS9ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrTWVudSgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLnNob3coXCJVSU1lbnVcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInBvcnRhbFwifSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGlja1BheW1lbnQoKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgaWYobW0uaXNMb2dpbil7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlQYXltZW50Jywge3BvcDogdHJ1ZSwgc3JjOiAncG9ydGFsJywgZGF0YSA6IHtuaWNrbmFtZTogbnVsbCwgYXJlYSA6ICdqYSd9fSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhcIlVJTG9naW5cIiwge3BvcDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsaWNrVGVsZWdyYW0oKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3QubWUvY3NraFwiKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrR2lmdENvZGUoKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgaWYobW0uaXNMb2dpbil7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlHaWZ0Q29kZScsIHtwb3A6IHRydWUsIHNyYzogJ3BvcnRhbCd9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93KFwiVUlMb2dpblwiLCB7cG9wOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tEYWlMeSgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZihtbS5pc0xvZ2luKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93KFwiVUlEYWlMeVwiLCB7cG9wOiB0cnVlLCBzcmM6ICdwb3J0YWwnfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhcIlVJTG9naW5cIiwge3BvcDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsaWNrQ2h1eWVua2hvYW4oKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgaWYobW0uaXNMb2dpbil7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlQYXltZW50Jywge3BvcDogdHJ1ZSwgc3JjOiAncG9ydGFsJywgZGF0YSA6IHtuaWNrbmFtZTogbnVsbCwgYXJlYSA6ICdqYSd9fSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhcIlVJTG9naW5cIiwge3BvcDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsaWNrUHJvZmlsZShldmVudCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGlmKG1tLmlzTG9naW4pe1xyXG4gICAgICAgICAgICB0aGlzLnNob3coXCJVSVByb2ZpbGVcIiwge3BvcDogdHJ1ZSwgc3JjOiAncG9ydGFsJ30pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3coXCJVSUxvZ2luXCIsIHtwb3A6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DbGlja0dyb3VwKCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIpO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tGYWNlYm9vaygpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbVwiKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93KFwiVUlUYWlYaXVEdWFUb3BcIiwge3BvcDogdHJ1ZSwgc3JjOiAndGFpeGl1JywgZGF0YTogXCJUaGVMZVwifSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=