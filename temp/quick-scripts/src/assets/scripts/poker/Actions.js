"use strict";
cc._RF.push(module, 'c8e7b2w3IRIwoTM5Zhp6vyG', 'Actions');
// scripts/poker/Actions.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    NodeRaise: cc.Node,
    Check: cc.Node,
    Call: cc.Node,
    Fold: cc.Node,
    Raise: cc.Node,
    Bet: cc.Node,
    SliderRaise: cc.Slider,
    lb_Current: cc.Label,
    _distance: 100,
    _current: 0,
    _max: 0,
    lb_bettingChip: cc.Label
  },
  onEnable: function onEnable() {
    this.NodeRaise.active = false;
    this.Check.active = false;
    this.Call.active = false;
    this.Fold.active = false;
    this.Raise.active = false;
    this.Bet.active = false;
  },
  initSlider: function initSlider(distance, current, max) {
    if (distance <= 0) distance = SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip;
    this._max = max;
    this._distance = distance;
    this._current = current;
    this.updateSlider();
  },
  updateSlider: function updateSlider() {
    var currentProcess = this._current / this._max;
    this.SliderRaise.progress = currentProcess;
    this.lb_Current.string = Utils.formatCurrency(this._current);
  },
  eventPlus: function eventPlus() {
    this._current += this._distance;

    if (this._current > this._max) {
      this._current = this._max;
    }

    this.updateSlider();
  },
  eventSub: function eventSub() {
    this._current -= this._distance;

    if (this._current < 0) {
      this._current = 0;
    }

    this.updateSlider();
  },
  eventAllIn: function eventAllIn() {
    this._current = this._max;
    this.updateSlider();
  },
  onSliderRaise: function onSliderRaise(slider) {
    var process = slider.progress;
    this._current = Math.floor(process.toFixed(1) * this._max);
    this.lb_Current.string = Utils.addDotToNumber(this._current);
  },
  hideAllActions: function hideAllActions() {
    this.NodeRaise.active = false;
    this.Check.active = false;
    this.Call.active = false;
    this.Fold.active = false;
    this.Raise.active = false;
    this.Bet.active = false;
  },
  showCallRaise: function showCallRaise(betchip, max, currentMyBet) {
    this.Call.active = true;
    this.Fold.active = true;
    this.Raise.active = true;
    this.Bet.active = false;

    if (betchip != undefined) {
      this.setLabelBettingChip(betchip + currentMyBet);

      if (max) {
        this.initSlider(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip, betchip, max);
      }
    }
  },
  showCheck: function showCheck(betchip, max, currentMyBet) {
    this.Check.active = true;
    this.Fold.active = true;
    this.Raise.active = true;
    this.Bet.active = true;

    if (betchip != undefined) {
      this.setLabelBettingChip(betchip + currentMyBet);

      if (max) {
        this.initSlider(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip, betchip, max);
      }
    }
  },
  setLabelBettingChip: function setLabelBettingChip(chip) {
    this.lb_bettingChip.string = Utils.formatCurrency(chip.toFixed(0));
  },
  ActionBet: function ActionBet() {
    this.handleRaiseRequest(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip);
  },
  ActionCheck: function ActionCheck() {
    this.handleRaiseRequest(0);
  },
  ActionCall: function ActionCall() {
    var callRequest = new PokerRequest.CallRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
    SmartFoxSDK.PokerController.ZoneInstance.send(callRequest.toSRequest());
  },
  ActionSliderRaise: function ActionSliderRaise() {
    var isActive = this.NodeRaise.active;
    this.NodeRaise.active = !isActive;
  },
  ActionRaise: function ActionRaise() {
    this.ActionSliderRaise();
    this.handleRaiseRequest(this._current);
  },
  ActionAllIn: function ActionAllIn() {
    var allInRequest = new PokerRequest.AllInRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
    SmartFoxSDK.PokerController.ZoneInstance.send(allInRequest.toSRequest());
  },
  ActionFold: function ActionFold() {
    var foldRequest = new PokerRequest.FoldRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
    SmartFoxSDK.PokerController.ZoneInstance.send(foldRequest.toSRequest());
  },
  raise_1_2Pot: function raise_1_2Pot() {
    this.handleRaiseRequest(SmartFoxSDK.PokerController.m_tableInfo.m_potChip / 2);
  },
  raisePot: function raisePot() {
    this.handleRaiseRequest(SmartFoxSDK.PokerController.m_tableInfo.m_potChip);
  },
  handleRaiseRequest: function handleRaiseRequest(chip) {
    var raiseRequest = new PokerRequest.RaiseRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId).setBetChip(chip);
    SmartFoxSDK.PokerController.ZoneInstance.send(raiseRequest.toSRequest());
  }
});

cc._RF.pop();