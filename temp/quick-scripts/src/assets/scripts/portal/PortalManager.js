"use strict";
cc._RF.push(module, 'aa39e/ZFQ5OvqWAEZkxOiaz', 'PortalManager');
// scripts/portal/PortalManager.js

"use strict";

var PortalManager = {};

PortalManager.getGameController = function (game) {
  if (game == "portal") {
    return SmartFoxSDK.PortalController;
  } else if (game == "poker") {
    return SmartFoxSDK.PokerController;
  } else if (game == "tlmn") {
    return SmartFoxSDK.TLMNController;
  } else if (game == "bacay") {
    return SmartFoxSDK.BaCayController;
  } else if (game == "maubinh") {
    return SmartFoxSDK.MauBinhController;
  } else if (game == "kimcuong") {
    return SmartFoxSDK.KimCuongController;
  } else if (game == "zeus") {
    return SmartFoxSDK.ZeusController;
  } else if (game == "minipoker") {
    return SmartFoxSDK.MiniPokerController;
  } else if (game == "taixiu") {
    return SmartFoxSDK.TaiXiuController;
  } else if (game == "xocdia") {
    return SmartFoxSDK.XocDiaController;
  } else if (game == "rongho") {
    return SmartFoxSDK.RongHoController;
  } else if (game == "candy") {
    return SmartFoxSDK.CandyController;
  } else if (game == "minipoker") {
    return SmartFoxSDK.MiniPokerController;
  } else if (game == "baccarat") {
    return SmartFoxSDK.BaccaratController;
  } else if (game == "roulette") {
    return SmartFoxSDK.RouletteController;
  } else if (game == "sieuxe") {
    return SmartFoxSDK.SieuXeController;
  } else if (game == "sinbad") {
    return SmartFoxSDK.SinbadController;
  } else if (game == "vampire") {
    return SmartFoxSDK.VampireController;
  }

  console.error("Dont exist game controler " + game);
  return null;
};

PortalManager.disconnectAll = function () {
  for (var game in Config.zoneConfig) {
    var controller = PortalManager.getGameController(game);

    if (controller) {
      controller._reset();
    }
  }
};

window.PortalManager = PortalManager;

cc._RF.pop();