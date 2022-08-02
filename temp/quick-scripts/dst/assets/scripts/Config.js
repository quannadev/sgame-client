
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

var host = "127.0.0.1";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkNvbmZpZyIsImRlYnVnIiwiaG9zdCIsImlzU1NMIiwiem9uZUNvbmZpZyIsIkdBTUVfQ09ORklHIiwiZ2V0RGVmYXVsdEF2YXRhciIsImxvY2FsU3RvcmFnZSIsImNjIiwic3lzIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsImlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0SXRlbSIsInNhdmVVc2VybmFtZSIsInVzZXJuYW1lIiwiZ2V0VXNlcm5hbWUiLCJzYXZlUGFzcyIsInBhc3MiLCJnZXRQYXNzIiwiY2xlYXJVc2VyUGFzcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUcsRUFBYjtBQUNBLElBQUlDLEtBQUssR0FBRyxLQUFaLEVBQ0E7O0FBQ0EsSUFBSUMsSUFBSSxHQUFJLFdBQVo7QUFDQSxJQUFJQyxLQUFLLEdBQUcsS0FBWjtBQUNBSCxNQUFNLENBQUNJLFVBQVAsR0FBb0I7QUFDaEIsWUFBVTtBQUNOLFlBQVFGLElBREY7QUFFTixZQUFRLElBRkY7QUFHTixXQUFPQyxLQUhEO0FBSU4sYUFBU0Y7QUFKSCxHQURNO0FBT2hCLFlBQVU7QUFDTixZQUFRQyxJQURGO0FBRU4sWUFBUSxJQUZGO0FBR04sV0FBT0MsS0FIRDtBQUlOLGFBQVNGO0FBSkgsR0FQTTtBQWFoQixlQUFhO0FBQ1QsWUFBUUMsSUFEQztBQUVULFlBQVEsSUFGQztBQUdULFdBQU9DLEtBSEU7QUFJVCxhQUFTRjtBQUpBLEdBYkc7QUFtQmhCLFdBQVM7QUFDTCxZQUFRQyxJQURIO0FBRUwsWUFBUSxJQUZIO0FBR0wsV0FBT0MsS0FIRjtBQUlMLGFBQVNGO0FBSkosR0FuQk87QUF5QmhCLGNBQVk7QUFDUixZQUFRQyxJQURBO0FBRVIsWUFBUSxJQUZBO0FBR1IsV0FBT0MsS0FIQztBQUlSLGFBQVNGO0FBSkQsR0F6Qkk7QUErQmhCLFVBQVE7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QU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixLQUFyQixFQUE0QkssSUFBNUI7QUFDSCxDQUhEOztBQUlBckIsTUFBTSxDQUFDc0IsT0FBUCxHQUFpQixZQUFVO0FBQ3ZCLE1BQUlmLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCOztBQUNBLE1BQUdBLFlBQVksQ0FBQ0csT0FBYixDQUFxQixLQUFyQixNQUFnQyxJQUFoQyxJQUF3Q0gsWUFBWSxDQUFDRyxPQUFiLENBQXFCLEtBQXJCLE1BQWdDQyxTQUEzRSxFQUFxRjtBQUNqRkosSUFBQUEsWUFBWSxDQUFDUyxPQUFiLENBQXFCLEtBQXJCLEVBQTRCLEVBQTVCO0FBQ0g7O0FBQ0QsU0FBT1QsWUFBWSxDQUFDRyxPQUFiLENBQXFCLEtBQXJCLENBQVA7QUFDSCxDQU5EOztBQU9BVixNQUFNLENBQUN1QixhQUFQLEdBQXVCLFlBQVU7QUFDN0IsTUFBSWhCLFlBQVksR0FBR0MsRUFBRSxDQUFDQyxHQUFILENBQU9GLFlBQTFCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ1MsT0FBYixDQUFxQixJQUFyQixFQUEyQixFQUEzQjtBQUNBVCxFQUFBQSxZQUFZLENBQUNTLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsRUFBNUI7QUFDSCxDQUpEOztBQUtBUSxNQUFNLENBQUN4QixNQUFQLEdBQWdCQSxNQUFoQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IENvbmZpZyA9IHt9O1xyXG5sZXQgZGVidWcgPSBmYWxzZTtcclxuLy8gbGV0IGhvc3QgID0gXCIxOTIuNDYuMjMwLjEzN1wiO1xyXG5sZXQgaG9zdCAgPSBcIjEyNy4wLjAuMVwiO1xyXG5sZXQgaXNTU0wgPSBmYWxzZTtcclxuQ29uZmlnLnpvbmVDb25maWcgPSB7XHJcbiAgICBcInBvcnRhbFwiOiB7XHJcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXHJcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXHJcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXHJcbiAgICAgICAgXCJkZWJ1Z1wiOiBkZWJ1Z1xyXG4gICAgfSxcclxuICAgIFwidGFpeGl1XCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXHJcbiAgICB9LFxyXG4gICAgXCJtaW5pcG9rZXJcIjoge1xyXG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxyXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxyXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxyXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcclxuICAgIH0sXHJcbiAgICBcImNhbmR5XCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXHJcbiAgICB9LFxyXG4gICAgXCJraW1jdW9uZ1wiOiB7XHJcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXHJcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXHJcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXHJcbiAgICAgICAgXCJkZWJ1Z1wiOiBkZWJ1Z1xyXG4gICAgfSxcclxuICAgIFwiemV1c1wiOiB7XHJcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXHJcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXHJcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXHJcbiAgICAgICAgXCJkZWJ1Z1wiOiBkZWJ1Z1xyXG4gICAgfSxcclxuICAgIFwicm9uZ2hvXCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXHJcbiAgICB9LFxyXG4gICAgXCJ4b2NkaWFcIjoge1xyXG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxyXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxyXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxyXG4gICAgICAgIFwiZGVidWdcIjogZGVidWdcclxuICAgIH0sXHJcbiAgICBcImJhY2F5XCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXHJcbiAgICB9LFxyXG4gICAgXCJ0bG1uXCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXHJcbiAgICB9LFxyXG4gICAgXCJtYXViaW5oXCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IGRlYnVnXHJcbiAgICB9LFxyXG4gICAgXCJiYWNjYXJhdFwiOiB7XHJcbiAgICAgICAgXCJob3N0XCI6IGhvc3QsXHJcbiAgICAgICAgXCJwb3J0XCI6IDg0NDMsXHJcbiAgICAgICAgXCJzc2xcIjogaXNTU0wsXHJcbiAgICAgICAgXCJkZWJ1Z1wiOiBkZWJ1Z1xyXG4gICAgfSxcclxuICAgIFwicm91bGV0dGVcIjoge1xyXG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxyXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxyXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxyXG4gICAgICAgIFwiZGVidWdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFwic2lldXhlXCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBcInBva2VyXCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IHRydWVcclxuICAgIH0sXHJcbiAgICBcInZhbXBpcmVcIjoge1xyXG4gICAgICAgIFwiaG9zdFwiOiBob3N0LFxyXG4gICAgICAgIFwicG9ydFwiOiA4NDQzLFxyXG4gICAgICAgIFwic3NsXCI6IGlzU1NMLFxyXG4gICAgICAgIFwiZGVidWdcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIFwic2luYmFkXCI6IHtcclxuICAgICAgICBcImhvc3RcIjogaG9zdCxcclxuICAgICAgICBcInBvcnRcIjogODQ0MyxcclxuICAgICAgICBcInNzbFwiOiBpc1NTTCxcclxuICAgICAgICBcImRlYnVnXCI6IHRydWVcclxuICAgIH0sXHJcbn1cclxuQ29uZmlnLkdBTUVfQ09ORklHID0ge1xyXG4gICAgXCJ0bG1uXCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcInRsbW5cIixcclxuICAgICAgICBcInVpXCI6IFwiVUlUTE1OXCJcclxuICAgIH0sXHJcbiAgICBcImJhY2F5XCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcImJhY2F5XCIsXHJcbiAgICAgICAgXCJ1aVwiOiBcIlVJQmFDYXlcIlxyXG4gICAgfSxcclxuICAgIFwibWF1YmluaFwiOntcclxuICAgICAgICBcInNyY1wiOiBcIm1hdWJpbmhcIixcclxuICAgICAgICBcInVpXCI6IFwiVUlNYXVCaW5oXCJcclxuICAgIH0sXHJcbiAgICBcInhvY2RpYVwiOiB7XHJcbiAgICAgICAgXCJzcmNcIjogXCJ4b2NkaWFcIixcclxuICAgICAgICBcInVpXCI6IFwiVUlYb2NEaWFcIlxyXG4gICAgfSxcclxuICAgIFwidGFpeGl1XCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcInRhaXhpdVwiLFxyXG4gICAgICAgIFwidWlcIjogXCJVSVRhaVhpdVwiXHJcbiAgICB9LFxyXG4gICAgXCJraW1jdW9uZ1wiOiB7XHJcbiAgICAgICAgXCJzcmNcIjogXCJraW1jdW9uZ1wiLFxyXG4gICAgICAgIFwidWlcIjogXCJVSUtpbUN1b25nXCJcclxuICAgIH0sXHJcbiAgICBcInpldXNcIjoge1xyXG4gICAgICAgIFwic3JjXCI6IFwiemV1c1wiLFxyXG4gICAgICAgIFwidWlcIjogXCJVSVpldXNcIlxyXG4gICAgfSxcclxuICAgIFwibWluaXBva2VyXCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcIm1pbmlwb2tlclwiLFxyXG4gICAgICAgIFwidWlcIjogXCJVSU1pbmlQb2tlclwiXHJcbiAgICB9LFxyXG4gICAgXCJyb25naG9cIjoge1xyXG4gICAgICAgIFwic3JjXCI6IFwicm9uZ2hvXCIsXHJcbiAgICAgICAgXCJ1aVwiOiBcIlVJUm9uZ0hvXCJcclxuICAgIH0sXHJcbiAgICBcImNhbmR5XCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcImNhbmR5XCIsXHJcbiAgICAgICAgXCJ1aVwiOiBcIlVJQ2FuZHlcIlxyXG4gICAgfSxcclxuICAgIFwiYmFjY2FyYXRcIjoge1xyXG4gICAgICAgIFwic3JjXCI6IFwiYmFjY2FyYXRcIixcclxuICAgICAgICBcInVpXCI6IFwiVUlCYWNjYXJhdFwiXHJcbiAgICB9LFxyXG4gICAgXCJyb3VsZXR0ZVwiOiB7XHJcbiAgICAgICAgXCJzcmNcIjogXCJyb3VsZXR0ZVwiLFxyXG4gICAgICAgIFwidWlcIjogXCJVSVJvdWxldHRlXCJcclxuICAgIH0sXHJcbiAgICBcInBva2VyXCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcInBva2VyXCIsXHJcbiAgICAgICAgXCJ1aVwiOiBcIlVJUG9rZXJcIlxyXG4gICAgfSxcclxuICAgIFwic2lldXhlXCI6IHtcclxuICAgICAgICBcInNyY1wiOiBcInNpZXV4ZVwiLFxyXG4gICAgICAgIFwidWlcIjogXCJVSVNpZXVYZVwiXHJcbiAgICB9LFxyXG4gICAgXCJzaW5iYWRcIjoge1xyXG4gICAgICAgIFwic3JjXCI6IFwic2luYmFkXCIsXHJcbiAgICAgICAgXCJ1aVwiOiBcIlVJU2luYmFkXCJcclxuICAgIH0sXHJcbiAgICBcInZhbXBpcmVcIjoge1xyXG4gICAgICAgIFwic3JjXCI6IFwidmFtcGlyZVwiLFxyXG4gICAgICAgIFwidWlcIjogXCJVSVZhbXBpcmVcIlxyXG4gICAgfSxcclxufTtcclxuQ29uZmlnLmdldERlZmF1bHRBdmF0YXIgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF2YXRhclwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF2YXRhclwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBsZXQgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApICsgMTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF2YXRhclwiLCBpZCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdmF0YXJcIik7XHJcbn1cclxuQ29uZmlnLnNhdmVVc2VybmFtZSA9IGZ1bmN0aW9uKHVzZXJuYW1lKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1blwiLCB1c2VybmFtZSk7XHJcbn1cclxuQ29uZmlnLmdldFVzZXJuYW1lID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1blwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVuXCIpID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidW5cIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1blwiKTtcclxufVxyXG5Db25maWcuc2F2ZVBhc3MgPSBmdW5jdGlvbihwYXNzKXtcclxuICAgIGxldCBsb2NhbFN0b3JhZ2UgPSBjYy5zeXMubG9jYWxTdG9yYWdlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwd2RcIiwgcGFzcyk7XHJcbn1cclxuQ29uZmlnLmdldFBhc3MgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB3ZFwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB3ZFwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInB3ZFwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB3ZFwiKTtcclxufVxyXG5Db25maWcuY2xlYXJVc2VyUGFzcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlID0gY2Muc3lzLmxvY2FsU3RvcmFnZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidW5cIiwgXCJcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInB3ZFwiLCBcIlwiKTtcclxufVxyXG53aW5kb3cuQ29uZmlnID0gQ29uZmlnO1xyXG4iXX0=