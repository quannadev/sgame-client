
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06278nBc6dA1q2o+6DwImvI', 'Utils');
// scripts/abase/Utils.js

"use strict";

var Utils = {};

Utils.loadRes = function (sprite, url, cb) {
  cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
    if (err) {
      console.log(err);
      return;
    }

    if (cc.isValid(sprite)) {
      sprite.spriteFrame = spriteFrame;
      sprite.node.active = true;
    } else {
      console.log('Loi sprite');
    }

    if (cb) cb();
  });
};

Utils.addDotToNumber = function (value) {
  if (value === undefined) {
    return "";
  }

  var sub = "";

  if (value < 0) {
    sub = "-";
    value = Math.abs(value);
  }

  if (typeof value === "number") value = value.toFixed(0);
  return sub + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

Utils.formatCurrency = function (money) {
  if (money <= 0) return 0;

  if (money >= 1000 && money < Math.pow(10, 6)) {
    money = money / Math.pow(10, 3);
    return money.toFixed(0) + "K";
  } else if (money >= Math.pow(10, 6) && money < Math.pow(10, 9)) {
    money = Math.floor(money / Math.pow(10, 4)) / 100;
    return money.toFixed(1) + "M";
  } else if (money >= Math.pow(10, 9) && money < Math.pow(10, 12)) {
    money = Math.floor(money / Math.pow(10, 7)) / 100;
    return money.toFixed(1) + "B";
  } else if (money >= Math.pow(10, 12) && money <= Math.pow(10, 15)) {
    money = Math.floor(money / Math.pow(10, 10)) / 100;
    return money.toFixed(1) + "Q";
  } else if (money >= Math.pow(10, 15)) {
    money = Math.floor(money / Math.pow(10, 13)) / 100;
    return money.toFixed(1) + "~~";
  }

  return Utils.addDotToNumber(money);
};

Utils.formatNumber = function (number, point) {
  var numberPoint = Math.pow(10, point);
  number = number / numberPoint;
  number = Math.floor(number);
  number = number * numberPoint;
  return number;
};

Utils.reFormatDisplayTime = function (time) {
  var dateHour = time.split(" ");
  if (dateHour.length != 2) return time; //Day

  var formatDay = dateHour[0].split("-");
  var newDay = formatDay[2] + "/" + formatDay[1] + "/" + formatDay[0]; //Hour

  formatDay = dateHour[1].split(".");
  var newHour = formatDay[0];
  return newHour + " " + newDay;
};

Utils.formatTimeToString = function (time) {
  var minute = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (seconds < 10) seconds = "0" + seconds;
  return minute + ":" + seconds;
};

Utils.convertTimeStampToDate = function (timeStamp) {
  var date = new Date(timeStamp);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds(); // return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  return day + "/" + month + "/" + year;
};

Utils.convertTimeStampToTime = function (timeStamp, language) {
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

Utils.convertDateToTimeStample = function (myDate) {
  myDate = myDate.split("-");
  if (myDate.length != 3) return null;
  var newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];
  var time = new Date(newDate).getTime();
  return time;
};

Utils.formatText = function (text, maxLength) {
  if (maxLength === undefined) maxLength = 10;
  var pre = "";
  if (text.length >= maxLength) pre = "..";
  text = text.substring(0, maxLength - pre.length);
  text += pre;
  return text;
};

Utils.numberTo = function (obj, start, end, duration, currency, cb) {
  if (currency === void 0) {
    currency = false;
  }

  clearInterval(obj.timer);
  var range = end - start;
  if (range == 0) range = 1;
  var minTimer = 10;
  var stepTime = Math.abs(Math.floor(duration / range));
  stepTime = Math.max(stepTime, minTimer);
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  obj.timer = setInterval(function () {
    if (!!obj.node) {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = end - remaining * range >> 0;
      var txt = currency ? numberWithCommas(value) : value;
      obj.string = txt + " ";

      if (value == end) {
        if (cb) cb();
        clearInterval(obj.timer);
      }
    } else clearInterval(obj.timer);
  }, stepTime);
};

Utils.v2Distance = function (v1, v2) {
  return Math.sqrt(Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2));
};

Utils.v2Degrees = function (v1, v2) {
  return Math.atan2(v2.y - v1.y, v2.x - v1.x) * 180 / Math.PI;
};

Utils.validateString = function (name) {
  var letters = /^[A-Za-z0-9]+$/;
  return name.match(letters);
};

function numberWithCommas(number) {
  if (number) {
    var result = (number = parseInt(number)).toString().split(".");
    return result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."), result.join(".");
  }

  return "0";
}

window.Utils = Utils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXFV0aWxzLmpzIl0sIm5hbWVzIjpbIlV0aWxzIiwibG9hZFJlcyIsInNwcml0ZSIsInVybCIsImNiIiwiY2MiLCJsb2FkZXIiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiY29uc29sZSIsImxvZyIsImlzVmFsaWQiLCJub2RlIiwiYWN0aXZlIiwiYWRkRG90VG9OdW1iZXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInN1YiIsIk1hdGgiLCJhYnMiLCJ0b0ZpeGVkIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZm9ybWF0Q3VycmVuY3kiLCJtb25leSIsInBvdyIsImZsb29yIiwiZm9ybWF0TnVtYmVyIiwibnVtYmVyIiwicG9pbnQiLCJudW1iZXJQb2ludCIsInJlRm9ybWF0RGlzcGxheVRpbWUiLCJ0aW1lIiwiZGF0ZUhvdXIiLCJzcGxpdCIsImxlbmd0aCIsImZvcm1hdERheSIsIm5ld0RheSIsIm5ld0hvdXIiLCJmb3JtYXRUaW1lVG9TdHJpbmciLCJtaW51dGUiLCJzZWNvbmRzIiwiY29udmVydFRpbWVTdGFtcFRvRGF0ZSIsInRpbWVTdGFtcCIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERheSIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJjb252ZXJ0VGltZVN0YW1wVG9UaW1lIiwibGFuZ3VhZ2UiLCJjb252ZXJ0RGF0ZVRvVGltZVN0YW1wbGUiLCJteURhdGUiLCJuZXdEYXRlIiwiZ2V0VGltZSIsImZvcm1hdFRleHQiLCJ0ZXh0IiwibWF4TGVuZ3RoIiwicHJlIiwic3Vic3RyaW5nIiwibnVtYmVyVG8iLCJvYmoiLCJzdGFydCIsImVuZCIsImR1cmF0aW9uIiwiY3VycmVuY3kiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJyYW5nZSIsIm1pblRpbWVyIiwic3RlcFRpbWUiLCJtYXgiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJyZW1haW5pbmciLCJ0eHQiLCJudW1iZXJXaXRoQ29tbWFzIiwic3RyaW5nIiwidjJEaXN0YW5jZSIsInYxIiwidjIiLCJzcXJ0IiwieCIsInkiLCJ2MkRlZ3JlZXMiLCJhdGFuMiIsIlBJIiwidmFsaWRhdGVTdHJpbmciLCJuYW1lIiwibGV0dGVycyIsIm1hdGNoIiwicmVzdWx0IiwicGFyc2VJbnQiLCJqb2luIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEtBQUssR0FBRyxFQUFaOztBQUNBQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsVUFBU0MsTUFBVCxFQUFpQkMsR0FBakIsRUFBc0JDLEVBQXRCLEVBQXlCO0FBQ3JDQyxFQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVUwsT0FBVixDQUFrQkUsR0FBbEIsRUFBdUJFLEVBQUUsQ0FBQ0UsV0FBMUIsRUFBdUMsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQy9ELFFBQUdELEdBQUgsRUFBTztBQUNIRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBO0FBQ0g7O0FBQ0QsUUFBR0gsRUFBRSxDQUFDTyxPQUFILENBQVdWLE1BQVgsQ0FBSCxFQUFzQjtBQUNsQkEsTUFBQUEsTUFBTSxDQUFDTyxXQUFQLEdBQXFCQSxXQUFyQjtBQUNBUCxNQUFBQSxNQUFNLENBQUNXLElBQVAsQ0FBWUMsTUFBWixHQUFxQixJQUFyQjtBQUNILEtBSEQsTUFHTTtBQUNGSixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0g7O0FBQ0QsUUFBR1AsRUFBSCxFQUNJQSxFQUFFO0FBQ1QsR0FiRDtBQWNILENBZkQ7O0FBZ0JBSixLQUFLLENBQUNlLGNBQU4sR0FBdUIsVUFBU0MsS0FBVCxFQUFnQjtBQUNuQyxNQUFHQSxLQUFLLEtBQUtDLFNBQWIsRUFBdUI7QUFDbkIsV0FBTyxFQUFQO0FB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QUF2QyxHQUE2QzFFLElBQUksQ0FBQzhFLEVBQXpEO0FBQ0gsQ0FGRDs7QUFHQWpHLEtBQUssQ0FBQ2tHLGNBQU4sR0FBdUIsVUFBVUMsSUFBVixFQUFnQjtBQUNuQyxNQUFJQyxPQUFPLEdBQUcsZ0JBQWQ7QUFDQSxTQUFPRCxJQUFJLENBQUNFLEtBQUwsQ0FBV0QsT0FBWCxDQUFQO0FBQ0gsQ0FIRDs7QUFJQSxTQUFTYixnQkFBVCxDQUEwQjFELE1BQTFCLEVBQWtDO0FBQzlCLE1BQUlBLE1BQUosRUFBWTtBQUNSLFFBQUl5RSxNQUFNLEdBQUcsQ0FBQ3pFLE1BQU0sR0FBRzBFLFFBQVEsQ0FBQzFFLE1BQUQsQ0FBbEIsRUFBNEJQLFFBQTVCLEdBQXVDYSxLQUF2QyxDQUE2QyxHQUE3QyxDQUFiO0FBQ0EsV0FBT21FLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWUEsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVL0UsT0FBVixDQUFrQix1QkFBbEIsRUFBMkMsR0FBM0MsQ0FBWixFQUNIK0UsTUFBTSxDQUFDRSxJQUFQLENBQVksR0FBWixDQURKO0FBRUg7O0FBQ0QsU0FBTyxHQUFQO0FBQ0g7O0FBQ0RDLE1BQU0sQ0FBQ3pHLEtBQVAsR0FBZUEsS0FBZiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFV0aWxzID0ge307XHJcblV0aWxzLmxvYWRSZXMgPSBmdW5jdGlvbihzcHJpdGUsIHVybCwgY2Ipe1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGNjLmlzVmFsaWQoc3ByaXRlKSl7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvaSBzcHJpdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2IpXHJcbiAgICAgICAgICAgIGNiKCk7XHJcbiAgICB9KVxyXG59O1xyXG5VdGlscy5hZGREb3RUb051bWJlciA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGxldCBzdWIgPSBcIlwiO1xyXG4gICAgaWYodmFsdWUgPCAwKXtcclxuICAgICAgICBzdWIgPSBcIi1cIjtcclxuICAgICAgICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvRml4ZWQoMCk7XHJcbiAgICByZXR1cm4gc3ViK3ZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpO1xyXG59XHJcblV0aWxzLmZvcm1hdEN1cnJlbmN5ID0gZnVuY3Rpb24gKG1vbmV5KVxyXG57XHJcbiAgICBpZihtb25leSA8PSAwKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgaWYobW9uZXkgPj0gMTAwMCAmJiBtb25leSA8IE1hdGgucG93KDEwLCA2KSl7XHJcbiAgICAgICAgbW9uZXkgPSBtb25leS9NYXRoLnBvdygxMCwzKTtcclxuICAgICAgICByZXR1cm4gbW9uZXkudG9GaXhlZCgwKSArIFwiS1wiO1xyXG4gICAgfWVsc2UgIGlmKG1vbmV5ID49IE1hdGgucG93KDEwLDYpICYmIG1vbmV5IDwgTWF0aC5wb3coMTAsOSkpe1xyXG4gICAgICAgIG1vbmV5ID0gTWF0aC5mbG9vcihtb25leS9NYXRoLnBvdygxMCw0KSkvMTAwO1xyXG4gICAgICAgIHJldHVybiBtb25leS50b0ZpeGVkKDEpICsgXCJNXCI7XHJcbiAgICB9ZWxzZSBpZihtb25leSA+PSBNYXRoLnBvdygxMCw5KSAmJiBtb25leSA8IE1hdGgucG93KDEwLDEyKSl7XHJcbiAgICAgICAgbW9uZXkgPSBNYXRoLmZsb29yKG1vbmV5L01hdGgucG93KDEwLDcpKS8xMDA7XHJcbiAgICAgICAgcmV0dXJuIG1vbmV5LnRvRml4ZWQoMSkgKyBcIkJcIjtcclxuICAgIH1lbHNlIGlmKG1vbmV5ID49IE1hdGgucG93KDEwLDEyKSAmJiBtb25leSA8PSBNYXRoLnBvdygxMCwxNSkpe1xyXG4gICAgICAgIG1vbmV5ID0gTWF0aC5mbG9vcihtb25leS9NYXRoLnBvdygxMCwxMCkpLzEwMDtcclxuICAgICAgICByZXR1cm4gIG1vbmV5LnRvRml4ZWQoMSkgKyBcIlFcIjtcclxuICAgIH1lbHNlIGlmKG1vbmV5ID49IE1hdGgucG93KDEwLCAxNSkpe1xyXG4gICAgICAgIG1vbmV5ID0gTWF0aC5mbG9vcihtb25leS9NYXRoLnBvdygxMCwxMykpLzEwMDtcclxuICAgICAgICByZXR1cm4gbW9uZXkudG9GaXhlZCgxKStcIn5+XCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVXRpbHMuYWRkRG90VG9OdW1iZXIobW9uZXkpO1xyXG59O1xyXG5VdGlscy5mb3JtYXROdW1iZXI9IGZ1bmN0aW9uIChudW1iZXIsIHBvaW50KSB7XHJcbiAgICBsZXQgbnVtYmVyUG9pbnQgPSBNYXRoLnBvdygxMCwgcG9pbnQpO1xyXG4gICAgbnVtYmVyID0gbnVtYmVyL251bWJlclBvaW50O1xyXG4gICAgbnVtYmVyID0gTWF0aC5mbG9vcihudW1iZXIpO1xyXG4gICAgbnVtYmVyID0gbnVtYmVyKm51bWJlclBvaW50O1xyXG4gICAgcmV0dXJuIG51bWJlcjtcclxufTtcclxuVXRpbHMucmVGb3JtYXREaXNwbGF5VGltZT0gZnVuY3Rpb24gKHRpbWUpIHtcclxuICAgIGxldCBkYXRlSG91ciA9IHRpbWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgaWYoZGF0ZUhvdXIubGVuZ3RoICE9IDIpXHJcbiAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICAvL0RheVxyXG4gICAgbGV0IGZvcm1hdERheSA9IGRhdGVIb3VyWzBdLnNwbGl0KFwiLVwiKTtcclxuICAgIGxldCBuZXdEYXkgICAgPSBmb3JtYXREYXlbMl0rXCIvXCIrZm9ybWF0RGF5WzFdK1wiL1wiK2Zvcm1hdERheVswXTtcclxuICAgIC8vSG91clxyXG4gICAgZm9ybWF0RGF5ICAgICA9IGRhdGVIb3VyWzFdLnNwbGl0KFwiLlwiKTtcclxuICAgIGxldCBuZXdIb3VyICAgPSBmb3JtYXREYXlbMF1cclxuICAgIHJldHVybiBuZXdIb3VyICsgXCIgXCIrIG5ld0RheTtcclxufTtcclxuVXRpbHMuZm9ybWF0VGltZVRvU3RyaW5nID0gZnVuY3Rpb24odGltZSl7XHJcbiAgICBsZXQgbWludXRlID0gTWF0aC5mbG9vcih0aW1lLzYwKTtcclxuICAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lJTYwKTtcclxuICAgIGlmIChtaW51dGUgPCAxMCkge1xyXG4gICAgICAgIG1pbnV0ZSA9IFwiMFwiK21pbnV0ZTtcclxuICAgIH1cclxuICAgIGlmKHNlY29uZHMgPCAxMClcclxuICAgICAgICBzZWNvbmRzID0gXCIwXCIrc2Vjb25kcztcclxuICAgIHJldHVybiBtaW51dGUrXCI6XCIrc2Vjb25kcztcclxufVxyXG5VdGlscy5jb252ZXJ0VGltZVN0YW1wVG9EYXRlPSBmdW5jdGlvbiAodGltZVN0YW1wKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XHJcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxldCBtb250aD0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgbGV0IGRheSAgPSBkYXRlLmdldERheSgpO1xyXG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSBcIjBcIiArIGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgbGV0IHNlY29uZHMgPSBcIjBcIiArIGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgLy8gcmV0dXJuIGhvdXJzICsgJzonICsgbWludXRlcy5zdWJzdHIoLTIpICsgJzonICsgc2Vjb25kcy5zdWJzdHIoLTIpO1xyXG4gICAgcmV0dXJuIGRheSArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIHllYXI7XHJcbn07XHJcblV0aWxzLmNvbnZlcnRUaW1lU3RhbXBUb1RpbWU9IGZ1bmN0aW9uICh0aW1lU3RhbXAsIGxhbmd1YWdlKSB7Ly8rIFwiIFwiICsgTGFuZ3VhZ2UuTEFOR1VBR0UoKVtcInR4dF9taW51dGVcIl07XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWVTdGFtcCk7XHJcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIGxldCBtb250aD0gZGF0ZS5nZXRNb250aCgpO1xyXG4gICAgbGV0IGRheSAgPSBkYXRlLmdldERheSgpO1xyXG5cclxuICAgIGxldCBob3VycyAgID0gICBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICBsZXQgbWludXRlcyA9ICAgZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICBsZXQgc2Vjb25kcyA9ICAgZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICByZXR1cm4gZGF5ICsgXCIvXCIgKyBtb250aCArIFwiL1wiICsgeWVhcjtcclxufTtcclxuVXRpbHMuY29udmVydERhdGVUb1RpbWVTdGFtcGxlPSBmdW5jdGlvbiAobXlEYXRlKSB7XHJcbiAgICBteURhdGU9bXlEYXRlLnNwbGl0KFwiLVwiKTtcclxuICAgIGlmKG15RGF0ZS5sZW5ndGggIT0gMylcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGxldCBuZXdEYXRlPW15RGF0ZVsxXStcIi9cIitteURhdGVbMF0rXCIvXCIrbXlEYXRlWzJdO1xyXG4gICAgbGV0IHRpbWUgPSBuZXcgRGF0ZShuZXdEYXRlKS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gdGltZTtcclxufTtcclxuVXRpbHMuZm9ybWF0VGV4dCA9IGZ1bmN0aW9uKHRleHQsIG1heExlbmd0aCkge1xyXG4gICAgaWYgKG1heExlbmd0aCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIG1heExlbmd0aCA9IDEwO1xyXG4gICAgbGV0IHByZSA9IFwiXCI7XHJcbiAgICBpZih0ZXh0Lmxlbmd0aCA+PSBtYXhMZW5ndGgpXHJcbiAgICAgICAgcHJlID0gXCIuLlwiO1xyXG4gICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIG1heExlbmd0aCAtIHByZS5sZW5ndGgpO1xyXG4gICAgdGV4dCArPSBwcmU7XHJcbiAgICByZXR1cm4gdGV4dDtcclxufTtcclxuVXRpbHMubnVtYmVyVG8gPSBmdW5jdGlvbihvYmosIHN0YXJ0LCBlbmQsIGR1cmF0aW9uLCBjdXJyZW5jeSA9IGZhbHNlLCBjYil7XHJcbiAgICBjbGVhckludGVydmFsKG9iai50aW1lcik7XHJcbiAgICB2YXIgcmFuZ2UgPSBlbmQgLSBzdGFydDtcclxuICAgIGlmIChyYW5nZSA9PSAwKVxyXG4gICAgICAgIHJhbmdlID0gMTtcclxuICAgIHZhciBtaW5UaW1lciA9IDEwO1xyXG4gICAgdmFyIHN0ZXBUaW1lID0gTWF0aC5hYnMoTWF0aC5mbG9vcihkdXJhdGlvbiAvIHJhbmdlKSk7XHJcbiAgICBzdGVwVGltZSA9IE1hdGgubWF4KHN0ZXBUaW1lLCBtaW5UaW1lcik7XHJcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgZW5kVGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xyXG5cclxuICAgIG9iai50aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKCEhb2JqLm5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgcmVtYWluaW5nID0gTWF0aC5tYXgoKGVuZFRpbWUgLSBub3cpIC8gZHVyYXRpb24sIDApO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAoZW5kIC0gKHJlbWFpbmluZyAqIHJhbmdlKSk+PjA7XHJcbiAgICAgICAgICAgIGxldCB0eHQgPSBjdXJyZW5jeSA/IG51bWJlcldpdGhDb21tYXModmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIG9iai5zdHJpbmcgPSB0eHQgKyBcIiBcIjtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNiKVxyXG4gICAgICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG9iai50aW1lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBjbGVhckludGVydmFsKG9iai50aW1lcik7XHJcbiAgICB9LCBzdGVwVGltZSk7XHJcbn1cclxuVXRpbHMudjJEaXN0YW5jZSA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codjIueCAtIHYxLngsIDIpICsgTWF0aC5wb3codjIueSAtIHYxLnksIDIpKTtcclxufVxyXG5cclxuVXRpbHMudjJEZWdyZWVzID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgcmV0dXJuIE1hdGguYXRhbjIodjIueSAtIHYxLnksIHYyLnggLSB2MS54KSAqIDE4MCAvIE1hdGguUEk7XHJcbn1cclxuVXRpbHMudmFsaWRhdGVTdHJpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgbGV0IGxldHRlcnMgPSAvXltBLVphLXowLTldKyQvO1xyXG4gICAgcmV0dXJuIG5hbWUubWF0Y2gobGV0dGVycyk7XHJcbn1cclxuZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyhudW1iZXIpIHtcclxuICAgIGlmIChudW1iZXIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gKG51bWJlciA9IHBhcnNlSW50KG51bWJlcikpLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRbMF0gPSByZXN1bHRbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpLFxyXG4gICAgICAgICAgICByZXN1bHQuam9pbihcIi5cIilcclxuICAgIH1cclxuICAgIHJldHVybiBcIjBcIlxyXG59XHJcbndpbmRvdy5VdGlscyA9IFV0aWxzO1xyXG4iXX0=