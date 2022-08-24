
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a40c0InVC1Lraf05u1kjNDU', 'Config');
// scripts/Config.js

"use strict";

var Config = {};
var debug = false; // let host  = "192.46.230.137";

var host = "gsv1.8668live.com";
var isSSL = false;
Config.zoneConfig = {
  "portal": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "taixiu": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "minipoker": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "candy": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "kimcuong": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "zeus": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "rongho": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "xocdia": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "bacay": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "tlmn": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "maubinh": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "baccarat": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": debug
  },
  "roulette": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": true
  },
  "sieuxe": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": true
  },
  "poker": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": true
  },
  "vampire": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": true
  },
  "sinbad": {
    "host": host,
    "port": 8443,
    "ssl": isSSL,
    "debug": true
  }
};
Config.GAME_CONFIG = {
  "tlmn": {
    "src": "tlmn",
    "ui": "UITLMN"
  },
  "bacay": {
    "src": "bacay",
    "ui": "UIBaCay"
  },
  "maubinh": {
    "src": "maubinh",
    "ui": "UIMauBinh"
  },
  "xocdia": {
    "src": "xocdia",
    "ui": "UIXocDia"
  },
  "taixiu": {
    "src": "taixiu",
    "ui": "UITaiXiu"
  },
  "kimcuong": {
    "src": "kimcuong",
    "ui": "UIKimCuong"
  },
  "zeus": {
    "src": "zeus",
    "ui": "UIZeus"
  },
  "minipoker": {
    "src": "minipoker",
    "ui": "UIMiniPoker"
  },
  "rongho": {
    "src": "rongho",
    "ui": "UIRongHo"
  },
  "candy": {
    "src": "candy",
    "ui": "UICandy"
  },
  "baccarat": {
    "src": "baccarat",
    "ui": "UIBaccarat"
  },
  "roulette": {
    "src": "roulette",
    "ui": "UIRoulette"
  },
  "poker": {
    "src": "poker",
    "ui": "UIPoker"
  },
  "sieuxe": {
    "src": "sieuxe",
    "ui": "UISieuXe"
  },
  "sinbad": {
    "src": "sinbad",
    "ui": "UISinbad"
  },
  "vampire": {
    "src": "vampire",
    "ui": "UIVampire"
  }
};

Config.getDefaultAvatar = function () {
  var localStorage = cc.sys.localStorage;

  if (localStorage.getItem("avatar") === null || localStorage.getItem("avatar") === undefined) {
    var id = Math.floor(Math.random() * 10) + 1;
    localStorage.setItem("avatar", id);
  }

  return localStorage.getItem("avatar");
};

Config.saveUsername = function (username) {
  var localStorage = cc.sys.localStorage;
  localStorage.setItem("un", username);
};

Config.getUsername = function () {
  var localStorage = cc.sys.localStorage;

  if (localStorage.getItem("un") === null || localStorage.getItem("un") === undefined) {
    localStorage.setItem("un", "");
  }

  return localStorage.getItem("un");
};

Config.savePass = function (pass) {
  var localStorage = cc.sys.localStorage;
  localStorage.setItem("pwd", pass);
};

Config.getPass = function () {
  var localStorage = cc.sys.localStorage;

  if (localStorage.getItem("pwd") === null || localStorage.getItem("pwd") === undefined) {
    localStorage.setItem("pwd", "");
  }

  return localStorage.getItem("pwd");
};

Config.clearUserPass = function () {
  var localStorage = cc.sys.localStorage;
  localStorage.setItem("un", "");
  localStorage.setItem("pwd", "");
};

window.Config = Config;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0NvbmZpZy5qcyJdLCJuYW1lcyI6WyJDb25maWciLCJkZWJ1ZyIsImhvc3QiLCJpc1NTTCIsInpvbmVDb25maWciLCJHQU1FX0NPTkZJRyIsImdldERlZmF1bHRBdmF0YXIiLCJsb2NhbFN0b3JhZ2UiLCJjYyIsInN5cyIsImdldEl0ZW0iLCJ1bmRlZmluZWQiLCJpZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldEl0ZW0iLCJzYXZlVXNlcm5hbWUiLCJ1c2VybmFtZSIsImdldFVzZXJuYW1lIiwic2F2ZVBhc3MiLCJwYXNzIiwiZ2V0UGFzcyIsImNsZWFyVXNlclBhc3MiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHLEVBQWI7QUFDQSxJQUFJQyxLQUFLLEdBQUcsS0FBWixFQUNBOztBQUNBLElBQUlDLElBQUksR0FBSSxtQkFBWjtBQUNBLElBQUlDLEtBQUssR0FBRyxLQUFaO0FBQ0FILE1BQU0sQ0FBQ0ksVUFBUCxHQUFvQjtBQUNoQixZQUFVO0FBQ04sWUFBUUYsSUFERjtBQUVOLFlBQVEsSUFGRjtBQUdOLFdBQU9DLEtBSEQ7QUFJTixhQUFTRjtBQUpILEdBRE07QUFPaEIsWUFBVTtBQUNOLFlBQVFDLElBREY7QUFFTixZQUFRLElBRkY7QUFHTixXQUFPQyxLQUhEO0FBSU4sYUFBU0Y7QUFKSCxHQVBNO0FBYWhCLGVBQWE7QUFDVCxZQUFRQyxJQURDO0FBRVQsWUFBUSxJQUZDO0FBR1QsV0FBT0MsS0FIRTtBQUlULGFBQVNGO0FBSkEsR0FiRztBQW1CaEIsV0FBUztBQUNMLFlBQVFDLElBREg7QUFFTCxZQUFRLElBRkg7QUFHTCxXQUFPQyxLQUhGO0FBSUwsYUFBU0Y7QUFKSixHQW5CTztBQXlCaEIsY0FBWTtBQUNSLFlBQVFDLElBREE7QUFFUixZQUFRLElBRkE7QUFHUixXQUFPQyxLQUhDO0FBSVIsYUFBU0Y7QUFKRCxHQXpCSTtBQStCaEIsVUFBUTtB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T0YsWUFBMUI7QUFDQUEsRUFBQUEsWUFBWSxDQUFDUyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCSyxJQUE1QjtBQUNILENBSEQ7O0FBSUFyQixNQUFNLENBQUNzQixPQUFQLEdBQWlCLFlBQVU7QUFDdkIsTUFBSWYsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7O0FBQ0EsTUFBR0EsWUFBWSxDQUFDRyxPQUFiLENBQXFCLEtBQXJCLE1BQWdDLElBQWhDLElBQXdDSCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsS0FBckIsTUFBZ0NDLFNBQTNFLEVBQXFGO0FBQ2pGSixJQUFBQSxZQUFZLENBQUNTLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsRUFBNUI7QUFDSDs7QUFDRCxTQUFPVCxZQUFZLENBQUNHLE9BQWIsQ0FBcUIsS0FBckIsQ0FBUDtBQUNILENBTkQ7O0FBT0FWLE1BQU0sQ0FBQ3VCLGFBQVAsR0FBdUIsWUFBVTtBQUM3QixNQUFJaEIsWUFBWSxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0YsWUFBMUI7QUFDQUEsRUFBQUEsWUFBWSxDQUFDUyxPQUFiLENBQXFCLElBQXJCLEVBQTJCLEVBQTNCO0FBQ0FULEVBQUFBLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixLQUFyQixFQUE0QixFQUE1QjtBQUNILENBSkQ7O0FBS0FRLE1BQU0sQ0FBQ3hCLE1BQVAsR0FBZ0JBLE1BQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQ29uZmlnID0ge307XG5sZXQgZGVidWcgPSBmYWxzZTtcbi8vIGxldCBob3N0ICA9IFwiMTkyLjQ2LjIzMC4xMzdcIjtcbmxldCBob3N0ICA9IFwiZ3N2MS44NjY4bGl2ZS5jb21cIjtcbmxldCBpc1NTTCA9IGZhbHNlO1xuQ29uZmlnLnpvbmVDb25maWcgPSB7XG4gICAgXCJwb3J0YWxcIjoge1xuICAgICAgICBcImhvc3RcIjogaG9zdCxcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXG4gICAgfSxcbiAgICBcInRhaXhpdVwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcbiAgICB9LFxuICAgIFwibWluaXBva2VyXCI6IHtcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcbiAgICAgICAgXCJkZWJ1Z1wiOiBkZWJ1Z1xuICAgIH0sXG4gICAgXCJjYW5keVwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcbiAgICB9LFxuICAgIFwia2ltY3VvbmdcIjoge1xuICAgICAgICBcImhvc3RcIjogaG9zdCxcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXG4gICAgfSxcbiAgICBcInpldXNcIjoge1xuICAgICAgICBcImhvc3RcIjogaG9zdCxcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXG4gICAgfSxcbiAgICBcInJvbmdob1wiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcbiAgICB9LFxuICAgIFwieG9jZGlhXCI6IHtcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcbiAgICAgICAgXCJkZWJ1Z1wiOiBkZWJ1Z1xuICAgIH0sXG4gICAgXCJiYWNheVwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcbiAgICB9LFxuICAgIFwidGxtblwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcbiAgICB9LFxuICAgIFwibWF1YmluaFwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcbiAgICB9LFxuICAgIFwiYmFjY2FyYXRcIjoge1xuICAgICAgICBcImhvc3RcIjogaG9zdCxcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXG4gICAgfSxcbiAgICBcInJvdWxldHRlXCI6IHtcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcbiAgICAgICAgXCJkZWJ1Z1wiOiB0cnVlXG4gICAgfSxcbiAgICBcInNpZXV4ZVwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJwb2tlclwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJ2YW1waXJlXCI6IHtcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcbiAgICAgICAgXCJkZWJ1Z1wiOiB0cnVlXG4gICAgfSxcbiAgICBcInNpbmJhZFwiOiB7XG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxuICAgICAgICBcInBvcnRcIjogODQ0MyxcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXG4gICAgICAgIFwiZGVidWdcIjogdHJ1ZVxuICAgIH0sXG59XG5Db25maWcuR0FNRV9DT05GSUcgPSB7XG4gICAgXCJ0bG1uXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJ0bG1uXCIsXG4gICAgICAgIFwidWlcIjogXCJVSVRMTU5cIlxuICAgIH0sXG4gICAgXCJiYWNheVwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiYmFjYXlcIixcbiAgICAgICAgXCJ1aVwiOiBcIlVJQmFDYXlcIlxuICAgIH0sXG4gICAgXCJtYXViaW5oXCI6e1xuICAgICAgICBcInNyY1wiOiBcIm1hdWJpbmhcIixcbiAgICAgICAgXCJ1aVwiOiBcIlVJTWF1QmluaFwiXG4gICAgfSxcbiAgICBcInhvY2RpYVwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwieG9jZGlhXCIsXG4gICAgICAgIFwidWlcIjogXCJVSVhvY0RpYVwiXG4gICAgfSxcbiAgICBcInRhaXhpdVwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwidGFpeGl1XCIsXG4gICAgICAgIFwidWlcIjogXCJVSVRhaVhpdVwiXG4gICAgfSxcbiAgICBcImtpbWN1b25nXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJraW1jdW9uZ1wiLFxuICAgICAgICBcInVpXCI6IFwiVUlLaW1DdW9uZ1wiXG4gICAgfSxcbiAgICBcInpldXNcIjoge1xuICAgICAgICBcInNyY1wiOiBcInpldXNcIixcbiAgICAgICAgXCJ1aVwiOiBcIlVJWmV1c1wiXG4gICAgfSxcbiAgICBcIm1pbmlwb2tlclwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwibWluaXBva2VyXCIsXG4gICAgICAgIFwidWlcIjogXCJVSU1pbmlQb2tlclwiXG4gICAgfSxcbiAgICBcInJvbmdob1wiOiB7XG4gICAgICAgIFwic3JjXCI6IFwicm9uZ2hvXCIsXG4gICAgICAgIFwidWlcIjogXCJVSVJvbmdIb1wiXG4gICAgfSxcbiAgICBcImNhbmR5XCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJjYW5keVwiLFxuICAgICAgICBcInVpXCI6IFwiVUlDYW5keVwiXG4gICAgfSxcbiAgICBcImJhY2NhcmF0XCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJiYWNjYXJhdFwiLFxuICAgICAgICBcInVpXCI6IFwiVUlCYWNjYXJhdFwiXG4gICAgfSxcbiAgICBcInJvdWxldHRlXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJyb3VsZXR0ZVwiLFxuICAgICAgICBcInVpXCI6IFwiVUlSb3VsZXR0ZVwiXG4gICAgfSxcbiAgICBcInBva2VyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJwb2tlclwiLFxuICAgICAgICBcInVpXCI6IFwiVUlQb2tlclwiXG4gICAgfSxcbiAgICBcInNpZXV4ZVwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwic2lldXhlXCIsXG4gICAgICAgIFwidWlcIjogXCJVSVNpZXVYZVwiXG4gICAgfSxcbiAgICBcInNpbmJhZFwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwic2luYmFkXCIsXG4gICAgICAgIFwidWlcIjogXCJVSVNpbmJhZFwiXG4gICAgfSxcbiAgICBcInZhbXBpcmVcIjoge1xuICAgICAgICBcInNyY1wiOiBcInZhbXBpcmVcIixcbiAgICAgICAgXCJ1aVwiOiBcIlVJVmFtcGlyZVwiXG4gICAgfSxcbn07XG5Db25maWcuZ2V0RGVmYXVsdEF2YXRhciA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdmF0YXJcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdmF0YXJcIikgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGxldCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCkgKyAxO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF2YXRhclwiLCBpZCk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF2YXRhclwiKTtcbn1cbkNvbmZpZy5zYXZlVXNlcm5hbWUgPSBmdW5jdGlvbih1c2VybmFtZSl7XG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1blwiLCB1c2VybmFtZSk7XG59XG5Db25maWcuZ2V0VXNlcm5hbWUgPSBmdW5jdGlvbigpe1xuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidW5cIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1blwiKSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1blwiLCBcIlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidW5cIik7XG59XG5Db25maWcuc2F2ZVBhc3MgPSBmdW5jdGlvbihwYXNzKXtcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInB3ZFwiLCBwYXNzKTtcbn1cbkNvbmZpZy5nZXRQYXNzID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB3ZFwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB3ZFwiKSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwd2RcIiwgXCJcIik7XG4gICAgfVxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB3ZFwiKTtcbn1cbkNvbmZpZy5jbGVhclVzZXJQYXNzID0gZnVuY3Rpb24oKXtcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVuXCIsIFwiXCIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHdkXCIsIFwiXCIpO1xufVxud2luZG93LkNvbmZpZyA9IENvbmZpZztcbiJdfQ==