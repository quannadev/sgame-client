
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/UtilsUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36367CtJ7JH0IcN1lK1XCUM', 'UtilsUI');
// _smartfox/gui/UtilsUI.js

"use strict";

var UtilsUI = {};

UtilsUI.loadImageLink = function (link, sprite, complete) {
  if (!sprite) {
    console.log("Loi sprite");
    return;
  }

  cc.loader.load({
    url: link,
    type: 'png'
  }, function (err, texture) {
    if (err) {
      console.log(err);
      return;
    }

    if (cc.isValid(sprite)) sprite.spriteFrame = new cc.SpriteFrame(texture);
    if (complete) complete(sprite);
  });
};

UtilsUI.loadImageRes = function (sprite, url) {
  cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
    if (err) {
      console.log(err);
      return;
    }

    if (cc.isValid(sprite)) {
      sprite.spriteFrame = spriteFrame;
      sprite.node.active = true;
    }
  });
};

UtilsUI.loadPlist = function (sprite, url, name) {
  cc.loader.loadRes(url, cc.SpriteAtlas, function (err, atlas) {
    if (err) {
      return;
    }

    var frame = atlas.getSpriteFrame(name);

    if (cc.isValid(sprite)) {
      sprite.spriteFrame = frame;
      sprite.node.active = true;
    }
  });
};

UtilsUI.addDotToNumber = function (value) {
  if (value <= 0) return 0;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

UtilsUI.formatCurrency = function (money) {
  if (money <= 0) return 0;

  if (!mm.KythanhUserVariable.isBet()) {
    return Math.floor(money / 500);
  }

  if (money >= Math.pow(10, 4) && money < Math.pow(10, 6)) {
    return money / Math.pow(10, 3) + "K";
  } else if (money >= Math.pow(10, 6) && money < Math.pow(10, 9)) {
    money = Math.floor(money / Math.pow(10, 4)) / 100;
    return money + "M";
  } else if (money >= Math.pow(10, 9) && money < Math.pow(10, 12)) {
    money = Math.floor(money / Math.pow(10, 7)) / 100;
    return money + "B";
  } else if (money >= Math.pow(10, 12) && money <= Math.pow(10, 15)) {
    money = Math.floor(money / Math.pow(10, 10)) / 100;
    return money + "Q";
  } else if (money >= Math.pow(10, 15)) {
    money = Math.floor(money / Math.pow(10, 13)) / 100;
    return money + "~~";
  }

  return Utils.addDotToNumber(money);
};

UtilsUI.formatNumber = function (number, point) {
  var numberPoint = Math.pow(10, point);
  number = number / numberPoint;
  number = Math.floor(number);
  number = number * numberPoint;
  return number;
};

UtilsUI.formatTimeToString = function (time) {
  var minute = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (seconds < 10) seconds = "0" + seconds;
  return minute + ":" + seconds;
};

UtilsUI.convertTimeStampToDate = function (timeStamp) {
  var date = new Date(timeStamp);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds(); // return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return day + "/" + month + "/" + year;
};

UtilsUI.convertTimeStampToTime = function (timeStamp, language) {
  //+ " " + Language.LANGUAGE()["txt_minute"];
  var date = new Date(timeStamp);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return day + "/" + month + "/" + year;
};

UtilsUI.convertDateToTimestamp = function (myDate) {
  myDate = myDate.split("-");
  if (myDate.length != 3) return null;
  var newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];
  var time = new Date(newDate).getTime();
  return time;
};

UtilsUI.formatText = function (text, maxLength) {
  if (text == undefined || text == null || text == '') return "Error: Empty";
  if (maxLength === undefined) maxLength = 10;
  var pre = "";
  if (text.length >= maxLength) pre = "..";
  text = text.substring(0, maxLength - pre.length);
  text += pre;
  return text;
};

UtilsUI.formatRelativeTime = function (seconds) {
  if (!Number.isInteger(seconds) || +seconds <= 0) {
    return '0 day';
  } else {
    var days = Math.floor(seconds / (24 * 60 * 60));
    return days + ' days';
  }
};

module.exports = UtilsUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL1V0aWxzVUkuanMiXSwibmFtZXMiOlsiVXRpbHNVSSIsImxvYWRJbWFnZUxpbmsiLCJsaW5rIiwic3ByaXRlIiwiY29tcGxldGUiLCJjb25zb2xlIiwibG9nIiwiY2MiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwidHlwZSIsImVyciIsInRleHR1cmUiLCJpc1ZhbGlkIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsImxvYWRJbWFnZVJlcyIsImxvYWRSZXMiLCJub2RlIiwiYWN0aXZlIiwibG9hZFBsaXN0IiwibmFtZSIsIlNwcml0ZUF0bGFzIiwiYXRsYXMiLCJmcmFtZSIsImdldFNwcml0ZUZyYW1lIiwiYWRkRG90VG9OdW1iZXIiLCJ2YWx1ZSIsInRvU3RyaW5nIiwicmVwbGFjZSIsImZvcm1hdEN1cnJlbmN5IiwibW9uZXkiLCJtbSIsIkt5dGhhbmhVc2VyVmFyaWFibGUiLCJpc0JldCIsIk1hdGgiLCJmbG9vciIsInBvdyIsIlV0aWxzIiwiZm9ybWF0TnVtYmVyIiwibnVtYmVyIiwicG9pbnQiLCJudW1iZXJQb2ludCIsImZvcm1hdFRpbWVUb1N0cmluZyIsInRpbWUiLCJtaW51dGUiLCJzZWNvbmRzIiwiY29udmVydFRpbWVTdGFtcFRvRGF0ZSIsInRpbWVTdGFtcCIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERheSIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJjb252ZXJ0VGltZVN0YW1wVG9UaW1lIiwibGFuZ3VhZ2UiLCJjb252ZXJ0RGF0ZVRvVGltZXN0YW1wIiwibXlEYXRlIiwic3BsaXQiLCJsZW5ndGgiLCJuZXdEYXRlIiwiZ2V0VGltZSIsImZvcm1hdFRleHQiLCJ0ZXh0IiwibWF4TGVuZ3RoIiwidW5kZWZpbmVkIiwicHJlIiwic3Vic3RyaW5nIiwiZm9ybWF0UmVs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QSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ksU0FBTCxDQUFlLENBQWYsRUFBa0JILFNBQVMsR0FBR0UsR0FBRyxDQUFDUCxNQUFsQyxDQUFQO0FBQ0FJLEVBQUFBLElBQUksSUFBSUcsR0FBUjtBQUNBLFNBQU9ILElBQVA7QUFDSCxDQVhEOztBQVlBeEUsT0FBTyxDQUFDNkUsa0JBQVIsR0FBNkIsVUFBUzlCLE9BQVQsRUFBa0I7QUFDM0MsTUFBSSxDQUFDK0IsTUFBTSxDQUFDQyxTQUFQLENBQWlCaEMsT0FBakIsQ0FBRCxJQUErQixDQUFDQSxPQUFELElBQVksQ0FBL0MsRUFBbUQ7QUFDL0MsV0FBTyxPQUFQO0FBQ0gsR0FGRCxNQUVRO0FBQ0osUUFBSWlDLElBQUksR0FBRzVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVSxPQUFPLElBQUksS0FBSyxFQUFMLEdBQVUsRUFBZCxDQUFsQixDQUFYO0FBRUEsV0FBT2lDLElBQUksR0FBRyxPQUFkO0FBQ0g7QUFDSixDQVJEOztBQVNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsRixPQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0ICBVdGlsc1VJID0gIHt9O1xuVXRpbHNVSS5sb2FkSW1hZ2VMaW5rID0gZnVuY3Rpb24gKGxpbmssIHNwcml0ZSwgY29tcGxldGUpIHtcbiAgICBpZighc3ByaXRlKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2kgc3ByaXRlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNjLmxvYWRlci5sb2FkKHt1cmw6IGxpbmssIHR5cGU6ICdwbmcnfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmKGNjLmlzVmFsaWQoc3ByaXRlKSlcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgaWYoY29tcGxldGUpXG4gICAgICAgICAgICBjb21wbGV0ZShzcHJpdGUpO1xuICAgIH0pO1xufTtcblV0aWxzVUkubG9hZEltYWdlUmVzID0gZnVuY3Rpb24oc3ByaXRlLCB1cmwpe1xuICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNjLmlzVmFsaWQoc3ByaXRlKSl7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KVxufTtcblV0aWxzVUkubG9hZFBsaXN0ID0gZnVuY3Rpb24oc3ByaXRlLCB1cmwsIG5hbWUpe1xuICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XG4gICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZyYW1lID0gYXRsYXMuZ2V0U3ByaXRlRnJhbWUobmFtZSk7XG4gICAgICAgIGlmKGNjLmlzVmFsaWQoc3ByaXRlKSl7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5VdGlsc1VJLmFkZERvdFRvTnVtYmVyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZih2YWx1ZSA8PSAwKVxuICAgICAgICByZXR1cm4gMDtcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIi5cIik7XG59O1xuVXRpbHNVSS5mb3JtYXRDdXJyZW5jeSA9IGZ1bmN0aW9uIChtb25leSlcbntcbiAgICBpZihtb25leSA8PSAwKVxuICAgICAgICByZXR1cm4gMDtcbiAgICBpZighbW0uS3l0aGFuaFVzZXJWYXJpYWJsZS5pc0JldCgpKXtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IobW9uZXkgLyA1MDApO1xuICAgIH1cbiAgICBpZihtb25leSA+PSBNYXRoLnBvdygxMCwgNCkgJiYgbW9uZXkgPCBNYXRoLnBvdygxMCwgNikpe1xuICAgICAgICByZXR1cm4gbW9uZXkvTWF0aC5wb3coMTAsMykgKyBcIktcIjtcbiAgICB9ZWxzZSAgaWYobW9uZXkgPj0gTWF0aC5wb3coMTAsNikgJiYgbW9uZXkgPCBNYXRoLnBvdygxMCw5KSl7XG4gICAgICAgIG1vbmV5ID0gTWF0aC5mbG9vcihtb25leS9NYXRoLnBvdygxMCw0KSkvMTAwO1xuICAgICAgICByZXR1cm4gbW9uZXkgKyBcIk1cIjtcbiAgICB9ZWxzZSBpZihtb25leSA+PSBNYXRoLnBvdygxMCw5KSAmJiBtb25leSA8IE1hdGgucG93KDEwLDEyKSl7XG4gICAgICAgIG1vbmV5ID0gTWF0aC5mbG9vcihtb25leS9NYXRoLnBvdygxMCw3KSkvMTAwO1xuICAgICAgICByZXR1cm4gbW9uZXkgKyBcIkJcIjtcbiAgICB9ZWxzZSBpZihtb25leSA+PSBNYXRoLnBvdygxMCwxMikgJiYgbW9uZXkgPD0gTWF0aC5wb3coMTAsMTUpKXtcbiAgICAgICAgbW9uZXkgPSBNYXRoLmZsb29yKG1vbmV5L01hdGgucG93KDEwLDEwKSkvMTAwO1xuICAgICAgICByZXR1cm4gIG1vbmV5ICsgXCJRXCI7XG4gICAgfWVsc2UgaWYobW9uZXkgPj0gTWF0aC5wb3coMTAsIDE1KSl7XG4gICAgICAgIG1vbmV5ID0gTWF0aC5mbG9vcihtb25leS9NYXRoLnBvdygxMCwxMykpLzEwMDtcbiAgICAgICAgcmV0dXJuIG1vbmV5K1wifn5cIjtcbiAgICB9XG4gICAgcmV0dXJuIFV0aWxzLmFkZERvdFRvTnVtYmVyKG1vbmV5KTtcbn07XG5VdGlsc1VJLmZvcm1hdE51bWJlcj0gZnVuY3Rpb24gKG51bWJlciwgcG9pbnQpIHtcbiAgICBsZXQgbnVtYmVyUG9pbnQgPSBNYXRoLnBvdygxMCwgcG9pbnQpO1xuICAgIG51bWJlciA9IG51bWJlci9udW1iZXJQb2ludDtcbiAgICBudW1iZXIgPSBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgbnVtYmVyID0gbnVtYmVyKm51bWJlclBvaW50O1xuICAgIHJldHVybiBudW1iZXI7XG59O1xuVXRpbHNVSS5mb3JtYXRUaW1lVG9TdHJpbmcgPSBmdW5jdGlvbih0aW1lKXtcbiAgICBsZXQgbWludXRlID0gTWF0aC5mbG9vcih0aW1lLzYwKTtcbiAgICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSU2MCk7XG4gICAgaWYgKG1pbnV0ZSA8IDEwKSB7XG4gICAgICAgIG1pbnV0ZSA9IFwiMFwiK21pbnV0ZTtcbiAgICB9XG4gICAgaWYoc2Vjb25kcyA8IDEwKVxuICAgICAgICBzZWNvbmRzID0gXCIwXCIrc2Vjb25kcztcbiAgICByZXR1cm4gbWludXRlK1wiOlwiK3NlY29uZHM7XG59O1xuVXRpbHNVSS5jb252ZXJ0VGltZVN0YW1wVG9EYXRlPSBmdW5jdGlvbiAodGltZVN0YW1wKSB7XG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lU3RhbXApO1xuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBtb250aD0gZGF0ZS5nZXRNb250aCgpO1xuICAgIGxldCBkYXkgID0gZGF0ZS5nZXREYXkoKTtcbiAgICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IG1pbnV0ZXMgPSBcIjBcIiArIGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGxldCBzZWNvbmRzID0gXCIwXCIgKyBkYXRlLmdldFNlY29uZHMoKTtcbiAgICAvLyByZXR1cm4gaG91cnMgKyAnOicgKyBtaW51dGVzLnN1YnN0cigtMikgKyAnOicgKyBzZWNvbmRzLnN1YnN0cigtMik7XG4gICAgcmV0dXJuIGRheSArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIHllYXI7XG59O1xuVXRpbHNVSS5jb252ZXJ0VGltZVN0YW1wVG9UaW1lPSBmdW5jdGlvbiAodGltZVN0YW1wLCBsYW5ndWFnZSkgey8vKyBcIiBcIiArIExhbmd1YWdlLkxBTkdVQUdFKClbXCJ0eHRfbWludXRlXCJdO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUodGltZVN0YW1wKTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgbW9udGg9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBsZXQgZGF5ICA9IGRhdGUuZ2V0RGF5KCk7XG5cbiAgICBsZXQgaG91cnMgICA9ICAgZGF0ZS5nZXRIb3VycygpO1xuICAgIGxldCBtaW51dGVzID0gICBkYXRlLmdldE1pbnV0ZXMoKTtcbiAgICBsZXQgc2Vjb25kcyA9ICAgZGF0ZS5nZXRTZWNvbmRzKCk7XG4gICAgcmV0dXJuIGRheSArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIHllYXI7XG59O1xuVXRpbHNVSS5jb252ZXJ0RGF0ZVRvVGltZXN0YW1wPSBmdW5jdGlvbiAobXlEYXRlKSB7XG4gICAgbXlEYXRlPW15RGF0ZS5zcGxpdChcIi1cIik7XG4gICAgaWYobXlEYXRlLmxlbmd0aCAhPSAzKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICBsZXQgbmV3RGF0ZT1teURhdGVbMV0rXCIvXCIrbXlEYXRlWzBdK1wiL1wiK215RGF0ZVsyXTtcbiAgICBsZXQgdGltZSA9IG5ldyBEYXRlKG5ld0RhdGUpLmdldFRpbWUoKTtcbiAgICByZXR1cm4gdGltZTtcbn07XG5VdGlsc1VJLmZvcm1hdFRleHQgPSBmdW5jdGlvbih0ZXh0LCBtYXhMZW5ndGgpIHtcbiAgICBpZih0ZXh0ID09IHVuZGVmaW5lZCB8fCB0ZXh0ID09IG51bGwgfHwgdGV4dCA9PSAnJylcbiAgICAgICAgcmV0dXJuIFwiRXJyb3I6IEVtcHR5XCI7XG4gICAgaWYgKG1heExlbmd0aCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBtYXhMZW5ndGggPSAxMDtcbiAgICBsZXQgcHJlID0gXCJcIjtcbiAgICBpZih0ZXh0Lmxlbmd0aCA+PSBtYXhMZW5ndGgpXG4gICAgICAgIHByZSA9IFwiLi5cIjtcbiAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgbWF4TGVuZ3RoIC0gcHJlLmxlbmd0aCk7XG4gICAgdGV4dCArPSBwcmU7XG4gICAgcmV0dXJuIHRleHQ7XG59O1xuVXRpbHNVSS5mb3JtYXRSZWxhdGl2ZVRpbWUgPSBmdW5jdGlvbihzZWNvbmRzKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHNlY29uZHMpIHx8ICgrc2Vjb25kcyA8PSAwKSkge1xuICAgICAgICByZXR1cm4gJzAgZGF5J1xuICAgIH0gZWxzZSAge1xuICAgICAgICBsZXQgZGF5cyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvICgyNCAqIDYwICogNjApKTtcblxuICAgICAgICByZXR1cm4gZGF5cyArICcgZGF5cydcbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBVdGlsc1VJOyJdfQ==