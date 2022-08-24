"use strict";
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