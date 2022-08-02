"use strict";
cc._RF.push(module, '2dce59gjoxPJIgQL7MAfl9f', 'ronghoLanguage');
// scripts/language/ronghoLanguage.js

"use strict";

var Language = {};
Language.LANGUAGE_VN = {
  "lb_rong": "RỒng",
  "lb_ho": "Hổ",
  "lb_rong1x2": "RỒNG 1x2",
  "lb_hoa1x16": "Hòa 1x16",
  "lb_ho1x2": "Hổ 1x2",
  "lb_rong_ho1x15": "RỒNG HỔ (1x15)",
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