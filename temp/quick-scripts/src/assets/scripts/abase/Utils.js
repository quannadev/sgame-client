"use strict";
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