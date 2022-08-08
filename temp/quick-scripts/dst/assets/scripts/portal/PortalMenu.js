
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9Qb3J0YWxNZW51LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uQ2xpY2tNZW51IiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJzaG93IiwicG9wIiwic3JjIiwib25DbGlja1BheW1lbnQiLCJpc0xvZ2luIiwiZGF0YSIsIm5pY2tuYW1lIiwiYXJlYSIsIm9uQ2xpY2tUZWxlZ3JhbSIsInN5cyIsIm9wZW5VUkwiLCJvbkNsaWNrR2lmdENvZGUiLCJvbkNsaWNrRGFpTHkiLCJvbkNsaWNrQ2h1eWVua2hvYW4iLCJvbkNsaWNrUHJvZmlsZSIsImV2ZW50Iiwib25DbGlja0dyb3VwIiwib25DbGlja0ZhY2Vib29rIiwib25DbGlja0V2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFLTEMsRUFBQUEsV0FMSyx5QkFLUTtBQUNUQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNBLFNBQUtDLElBQUwsQ0FBVSxRQUFWLEVBQW9CO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRTtBQUFqQixLQUFwQjtBQUNILEdBUkk7QUFTTEMsRUFBQUEsY0FUSyw0QkFTVztBQUNaTixJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDs7QUFDQSxRQUFHRixFQUFFLENBQUNPLE9BQU4sRUFBYztBQUNWLFdBQUtKLElBQUwsQ0FBVSxXQUFWLEVBQXVCO0FBQUNDLFFBQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLFFBQUFBLEdBQUcsRUFBRSxRQUFqQjtBQUEyQkcsUUFBQUEsSUFBSSxFQUFHO0FBQUNDLFVBQUFBLFFBQVEsRUFBRSxJQUFYO0FB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LFNBQUtsQixJQUFMLENBQVUsZ0JBQVYsRUFBNEI7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFLElBQU47QUFBWUMsTUFBQUEsR0FBRyxFQUFFLFFBQWpCO0FBQTJCRyxNQUFBQSxJQUFJLEVBQUU7QUFBakMsS0FBNUI7QUFDSDtBQS9ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuICAgIG9uQ2xpY2tNZW51KCl7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgdGhpcy5zaG93KFwiVUlNZW51XCIsIHtwb3A6IHRydWUsIHNyYzogXCJwb3J0YWxcIn0pO1xuICAgIH0sXG4gICAgb25DbGlja1BheW1lbnQoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBpZihtbS5pc0xvZ2luKXtcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlQYXltZW50Jywge3BvcDogdHJ1ZSwgc3JjOiAncG9ydGFsJywgZGF0YSA6IHtuaWNrbmFtZTogbnVsbCwgYXJlYSA6ICdqYSd9fSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zaG93KFwiVUlMb2dpblwiLCB7cG9wOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2tUZWxlZ3JhbSgpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly90Lm1lL2Nza2hcIik7XG4gICAgfSxcbiAgICBvbkNsaWNrR2lmdENvZGUoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBpZihtbS5pc0xvZ2luKXtcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlHaWZ0Q29kZScsIHtwb3A6IHRydWUsIHNyYzogJ3BvcnRhbCd9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNob3coXCJVSUxvZ2luXCIsIHtwb3A6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25DbGlja0RhaUx5KCl7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgaWYobW0uaXNMb2dpbil7XG4gICAgICAgICAgICB0aGlzLnNob3coXCJVSURhaUx5XCIsIHtwb3A6IHRydWUsIHNyYzogJ3BvcnRhbCd9KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnNob3coXCJVSUxvZ2luXCIsIHtwb3A6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25DbGlja0NodXllbmtob2FuKCl7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgaWYobW0uaXNMb2dpbil7XG4gICAgICAgICAgICB0aGlzLnNob3coJ1VJUGF5bWVudCcsIHtwb3A6IHRydWUsIHNyYzogJ3BvcnRhbCcsIGRhdGEgOiB7bmlja25hbWU6IG51bGwsIGFyZWEgOiAnamEnfX0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhcIlVJTG9naW5cIiwge3BvcDogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrUHJvZmlsZShldmVudCl7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgaWYobW0uaXNMb2dpbil7XG4gICAgICAgICAgICB0aGlzLnNob3coXCJVSVByb2ZpbGVcIiwge3BvcDogdHJ1ZSwgc3JjOiAncG9ydGFsJ30pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvdyhcIlVJTG9naW5cIiwge3BvcDogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrR3JvdXAoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbVwiKTtcbiAgICB9LFxuICAgIG9uQ2xpY2tGYWNlYm9vaygpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tXCIpO1xuICAgIH0sXG4gICAgb25DbGlja0V2ZW50KCkge1xuICAgICAgICB0aGlzLnNob3coXCJVSVRhaVhpdUR1YVRvcFwiLCB7cG9wOiB0cnVlLCBzcmM6ICd0YWl4aXUnLCBkYXRhOiBcIlRoZUxlXCJ9KTtcbiAgICB9XG59KTtcbiJdfQ==