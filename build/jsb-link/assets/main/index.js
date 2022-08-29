window.__require = function t(e, i, n) {
function s(a, c) {
if (!i[a]) {
if (!e[a]) {
var r = a.split("/");
r = r[r.length - 1];
if (!e[r]) {
var h = "function" == typeof __require && __require;
if (!c && h) return h(r, !0);
if (o) return o(r, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = r;
}
var l = i[a] = {
exports: {}
};
e[a][0].call(l.exports, function(t) {
return s(e[a][1][t] || t);
}, l, l.exports, t, e, i, n);
}
return i[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < n.length; a++) s(n[a]);
return s;
}({
1: [ function(t, e) {
var i, n, s = e.exports = {};
function o() {
throw new Error("setTimeout has not been defined");
}
function a() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
i = "function" == typeof setTimeout ? setTimeout : o;
} catch (t) {
i = o;
}
try {
n = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (t) {
n = a;
}
})();
function c(t) {
if (i === setTimeout) return setTimeout(t, 0);
if ((i === o || !i) && setTimeout) {
i = setTimeout;
return setTimeout(t, 0);
}
try {
return i(t, 0);
} catch (e) {
try {
return i.call(null, t, 0);
} catch (e) {
return i.call(this, t, 0);
}
}
}
function r(t) {
if (n === clearTimeout) return clearTimeout(t);
if ((n === a || !n) && clearTimeout) {
n = clearTimeout;
return clearTimeout(t);
}
try {
return n(t);
} catch (e) {
try {
return n.call(null, t);
} catch (e) {
return n.call(this, t);
}
}
}
var h, l = [], u = !1, m = -1;
function d() {
if (u && h) {
u = !1;
h.length ? l = h.concat(l) : m = -1;
l.length && p();
}
}
function p() {
if (!u) {
var t = c(d);
u = !0;
for (var e = l.length; e; ) {
h = l;
l = [];
for (;++m < e; ) h && h[m].run();
m = -1;
e = l.length;
}
h = null;
u = !1;
r(t);
}
}
s.nextTick = function(t) {
var e = new Array(arguments.length - 1);
if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
l.push(new g(t, e));
1 !== l.length || u || c(p);
};
function g(t, e) {
this.fun = t;
this.array = e;
}
g.prototype.run = function() {
this.fun.apply(null, this.array);
};
s.title = "browser";
s.browser = !0;
s.env = {};
s.argv = [];
s.version = "";
s.versions = {};
function f() {}
s.on = f;
s.addListener = f;
s.once = f;
s.off = f;
s.removeListener = f;
s.removeAllListeners = f;
s.emit = f;
s.prependListener = f;
s.prependOnceListener = f;
s.listeners = function() {
return [];
};
s.binding = function() {
throw new Error("process.binding is not supported");
};
s.cwd = function() {
return "/";
};
s.chdir = function() {
throw new Error("process.chdir is not supported");
};
s.umask = function() {
return 0;
};
}, {} ],
ActionRotateJerk: [ function(t, e) {
"use strict";
cc._RF.push(e, "763396pf7hMnaO8rEr45Ez2", "ActionRotateJerk");
cc.Class({
extends: cc.Component,
properties: {
_seq2: null
},
onLoad: function() {
var t = cc.sequence(cc.rotateTo(.5, -30), cc.rotateTo(.5, 30));
this._seq2 = t.clone().repeatForever();
},
runActionRotateJerk: function(t) {
t.runAction(cc.sequence(this._seq2, cc.delayTime(1)).bind(this));
}
});
cc._RF.pop();
}, {} ],
ActionRotate: [ function(t, e) {
"use strict";
cc._RF.push(e, "8201bPTvwFBGJDnQyU8Hphu", "ActionRotate");
cc.Enum({
MoveTop: 1,
MoveBottom: 2,
MoveLeft: 3,
MoveRight: 4
});
cc.Class({
extends: cc.Component,
properties: {
timer: 4
},
onLoad: function() {
var t = cc.rotateBy(this.timer, 360);
this.node.runAction(t.repeatForever());
}
});
cc._RF.pop();
}, {} ],
ActionScale: [ function(t, e) {
"use strict";
cc._RF.push(e, "c2bb5sgqExIgrS2J5v3PKDt", "ActionScale");
cc.Class({
extends: cc.Component,
properties: {},
onEnable: function() {
this.node.scale = 0;
this.node.runAction(cc.sequence(cc.scaleTo(.2, 1.05), cc.delayTime(.1), cc.scaleTo(.1, 1)));
}
});
cc._RF.pop();
}, {} ],
Actions: [ function(t, e) {
"use strict";
cc._RF.push(e, "c8e7b2w3IRIwoTM5Zhp6vyG", "Actions");
cc.Class({
extends: cc.VozBaseComponent,
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
onEnable: function() {
this.NodeRaise.active = !1;
this.Check.active = !1;
this.Call.active = !1;
this.Fold.active = !1;
this.Raise.active = !1;
this.Bet.active = !1;
},
initSlider: function(t, e, i) {
t <= 0 && (t = SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip);
this._max = i;
this._distance = t;
this._current = e;
this.updateSlider();
},
updateSlider: function() {
var t = this._current / this._max;
this.SliderRaise.progress = t;
this.lb_Current.string = Utils.formatCurrency(this._current);
},
eventPlus: function() {
this._current += this._distance;
this._current > this._max && (this._current = this._max);
this.updateSlider();
},
eventSub: function() {
this._current -= this._distance;
this._current < 0 && (this._current = 0);
this.updateSlider();
},
eventAllIn: function() {
this._current = this._max;
this.updateSlider();
},
onSliderRaise: function(t) {
var e = t.progress;
this._current = Math.floor(e.toFixed(1) * this._max);
this.lb_Current.string = Utils.addDotToNumber(this._current);
},
hideAllActions: function() {
this.NodeRaise.active = !1;
this.Check.active = !1;
this.Call.active = !1;
this.Fold.active = !1;
this.Raise.active = !1;
this.Bet.active = !1;
},
showCallRaise: function(t, e, i) {
this.Call.active = !0;
this.Fold.active = !0;
this.Raise.active = !0;
this.Bet.active = !1;
if (null != t) {
this.setLabelBettingChip(t + i);
e && this.initSlider(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip, t, e);
}
},
showCheck: function(t, e, i) {
this.Check.active = !0;
this.Fold.active = !0;
this.Raise.active = !0;
this.Bet.active = !0;
if (null != t) {
this.setLabelBettingChip(t + i);
e && this.initSlider(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip, t, e);
}
},
setLabelBettingChip: function(t) {
this.lb_bettingChip.string = Utils.formatCurrency(t.toFixed(0));
},
ActionBet: function() {
this.handleRaiseRequest(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip);
},
ActionCheck: function() {
this.handleRaiseRequest(0);
},
ActionCall: function() {
var t = new PokerRequest.CallRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
SmartFoxSDK.PokerController.ZoneInstance.send(t.toSRequest());
},
ActionSliderRaise: function() {
var t = this.NodeRaise.active;
this.NodeRaise.active = !t;
},
ActionRaise: function() {
this.ActionSliderRaise();
this.handleRaiseRequest(this._current);
},
ActionAllIn: function() {
var t = new PokerRequest.AllInRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
SmartFoxSDK.PokerController.ZoneInstance.send(t.toSRequest());
},
ActionFold: function() {
var t = new PokerRequest.FoldRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
SmartFoxSDK.PokerController.ZoneInstance.send(t.toSRequest());
},
raise_1_2Pot: function() {
this.handleRaiseRequest(SmartFoxSDK.PokerController.m_tableInfo.m_potChip / 2);
},
raisePot: function() {
this.handleRaiseRequest(SmartFoxSDK.PokerController.m_tableInfo.m_potChip);
},
handleRaiseRequest: function(t) {
var e = new PokerRequest.RaiseRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId).setBetChip(t);
SmartFoxSDK.PokerController.ZoneInstance.send(e.toSRequest());
}
});
cc._RF.pop();
}, {} ],
AnimationEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "3a45a/naWNJ75sLKgKIaSUl", "AnimationEvent");
cc.Class({
extends: cc.Component,
properties: {
_cb: null
},
onAnimCompleted: function() {
this.node.active = !1;
this._cb && this._cb();
},
addEventComplete: function(t) {
this._cb = t;
}
});
cc._RF.pop();
}, {} ],
BaccaratCard: [ function(t, e) {
"use strict";
cc._RF.push(e, "0cbae1yBtxOD5vgQIVnWzz4", "BaccaratCard");
var i = {
Heart: 0,
Diamond: 1,
Spade: 2,
Club: 3
}, n = [ 2, 3, 0, 1 ], s = "heart,diamond,spade,club".split(","), o = "2,3,4,5,6,7,8,9,10,11,12,13,1".split(","), a = "2,3,4,5,6,7,8,9,0,0,0,0,1".split(",");
function c(t) {
Object.defineProperties(this, {
point: {
value: t % 13,
writable: !1
},
suit: {
value: n[Math.floor(t / 13)],
writable: !1
},
id: {
value: t,
writable: !1
},
pointNumber: {
get: function() {
return parseInt(a[this.point]);
}
},
pointName: {
get: function() {
return o[this.point];
}
},
suitName: {
get: function() {
return s[this.suit];
}
},
nameFile: {
get: function() {
return parseInt(this.pointName) + 13 * this.suit;
}
},
color: {
get: function() {
return this.suit == i.Diamond || this.suit == i.Heart ? cc.Color.RED : cc.Color.BLACK;
}
}
});
}
c.prototype.toString = function() {
return this.pointName + " " + this.suitName;
};
e.exports = {
Card: c,
Suit: i
};
cc._RF.pop();
}, {} ],
BaccaratCauItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "05069bKKZBDgKZRTzG4pykL", "BaccaratCauItem");
cc.Class({
extends: cc.Component,
properties: {}
});
cc._RF.pop();
}, {} ],
BaccaratController: [ function(t, e) {
"use strict";
cc._RF.push(e, "e9744KaYgtCGKi7vCAoyyMZ", "BaccaratController");
var i = t("BaccaratEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: {},
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.HISTORY_DETAIL, this.HistoryDetailEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.HISTORY_DETAIL, this.HistoryDetailEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
}
},
onLoadGameEvent: function(t) {
this.preLoadUI({
pop: !0
}, function() {
this.m_tableInfo = new i.LoadGameEvent().fromEvent(t);
this.getUI().hideAll();
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
var e = [];
e.push(this.ZoneInstance.mySelf);
for (var n = 0; n < this.getRoom().getUserList().length; n++) {
var s = this.getRoom().getUserList()[n];
s.name != this.ZoneInstance.mySelf.name && e.length < 6 && e.push(s);
}
this.getUI().showListUsers(e);
this.getUI().updateCau(this.m_tableInfo.allCau);
if (this.m_tableInfo.isBetting) {
this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);
this.m_tableInfo.time >= 29 && this.getUI().showNoti("Bắt đầu cược");
this.getUI().runEffectGirl("1");
} else {
this.getUI()._turnOffTime();
this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);
this.getUI().resumeGame(this.m_tableInfo.cardPlayer, this.m_tableInfo.cardBanker, this.m_tableInfo.winpot, this.m_tableInfo.time, this.m_tableInfo.usersOnboard, this.m_tableInfo.chipUserOnBoard);
}
}.bind(this));
},
onUserBetEvent: function(t) {
var e = new i.BetEvent().fromEvent(t), n = e.userName, s = e.betChip, o = e.typePot;
this.m_tableInfo.listChipPot[o] += s;
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
if (this.ZoneInstance.mySelf.name == n) {
this.m_tableInfo.listMyChipPot[o] += s;
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
}
this.getUI().runActionChangeMoney(n, -s, 1);
this.getUI().actionFlyChipToPot(n, o, s);
var a = this.getRoom().getUserByName(n);
a && this.getUI().updateChip(a);
},
onEndBettingEvent: function(t) {
var e = new i.EndBetting().fromEvent(t);
this.m_tableInfo.isBetting = !1;
this.m_tableInfo.chipUserOnBoard = e.chipUserOnBoard;
this.m_tableInfo.usersOnboard = e.usersOnboard;
this.m_tableInfo.cardPlayer = e.cardPlayer;
this.m_tableInfo.cardBanker = e.cardBanker;
this.m_tableInfo.winpot = e.winpot;
this.getUI()._turnOffTime();
this.getUI()._turnOnTime(20, 20, this.m_tableInfo.isBetting);
this.getUI().showNoti("Dừng đặt cược");
this.getUI().showResult(this.m_tableInfo.cardPlayer, this.m_tableInfo.cardBanker, this.m_tableInfo.winpot, this.m_tableInfo.chipUserOnBoard, this.m_tableInfo.usersOnboard, 1);
},
onHistoryResultEvent: function() {},
HistoryDetailEvent: function(t) {
var e = new i.HistoryDetailEvent().fromEvent(t);
this.getUI().showSoiCau(e);
},
onHistoryEvent: function(t) {
var e = new i.HistoryEvent().fromEvent(t);
this.getUI().show("UIBaccaratTransaction", {
pop: !0,
src: "baccarat",
data: {
items: e
}
});
},
onLeaderBoardEvent: function(t) {
var e = new i.LeaderBoardEvent().fromEvent(t);
this.getUI().show("UIBaccaratRank", {
pop: !0,
src: "baccarat",
data: {
items: e
}
});
},
onPublicMessage: function(t) {
var e = t.sender, i = t.message, n = t.data, s = null != n ? {
dn: n.get("dn"),
fb: n.get("fb")
} : {
dn: "...",
fb: ""
}, o = {};
o.sender = e;
o.msg = i;
o.dataSender = s;
this.getUI().onPublicMessage(o);
}
}), s = null;
SmartFoxSDK.BaccaratController = e.exports = function() {
null == s && (s = new n("UIBaccarat", "baccarat"));
return s;
}();
cc._RF.pop();
}, {
BaccaratEvent: "BaccaratEvent"
} ],
BaccaratEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "5f7d0LDMzJAdqB0UqBHz68U", "BaccaratEvent");
var i = {
RESPONSE_NAME: {
LOAD_GAME_RES: "b1",
BET_RES: "b2",
END_BETTING: "b3",
HISTORY_RESULT: "b4",
HISTORY_DETAIL: "b5"
}
};
i.LoadGameEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LOAD_GAME_RES);
},
fromEvent: function(t) {
this.isBetting = t.getBool("b");
this.time = t.getInt("t");
this.listChipPot = t.getDoubleArray("lcp");
this.listMyChipPot = t.getDoubleArray("lmcp");
this.cardPlayer = t.getByteArray("cp");
this.cardBanker = t.getByteArray("cb");
this.usersOnboard = t.getUtfStringArray("lu");
if (!this.isBetting) {
this.winpot = t.getByteArray("wp");
this.chipUserOnBoard = t.getDoubleArray("lc");
}
var e = t.getSArray("h");
this.allCau = [];
for (var i = 0; i < e.size(); i++) {
var n = e.get(i).getObject();
n.getByteArray("rs");
this.allCau.push({
cai: n.getByte("pb"),
con: n.getByte("pp"),
type: n.getByteArray("rs")
});
}
return this;
}
});
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
},
fromEvent: function(t) {
this.userName = t.getUtfString("un");
this.betChip = t.getDouble("c");
this.typePot = t.getByte("t");
return this;
}
});
i.EndBetting = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.END_BETTING);
},
fromEvent: function(t) {
this.cardPlayer = t.getByteArray("cp");
this.cardBanker = t.getByteArray("cb");
this.winpot = t.getByteArray("wp");
this.chipUserOnBoard = t.getDoubleArray("lc");
this.usersOnboard = t.getUtfStringArray("lu");
return this;
}
});
i.HistoryResponse = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.HISTORY_RESULT);
},
fromEvent: function(t) {
this.result = t.getByteArray("lr");
return this;
}
});
i.HistoryDetailEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.HISTORY_DETAIL);
},
fromEvent: function(t) {
var e = t.getSArray("d");
this.allCau = [];
this.allScore = [];
for (var i = 0; i < e.size(); i++) {
var n = e.get(i).getObject();
this.allCau.push({
cai: n.getByte("pb"),
con: n.getByte("pp"),
type: n.getByteArray("rs")
});
}
return this.allCau;
}
});
i.HistoryEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
this.items = [];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) {
var n = e.get(i).getObject(), s = {};
s.session = n.getDouble("id").toFixed(0);
s.time = n.getUtfString("t");
s.bet = n.getDoubleArray("b");
s.win = n.getDoubleArray("w");
s.bankerIds = n.getIntArray("cb");
s.playerIds = n.getIntArray("cp");
s.bankerPoint = n.getInt("pb");
s.playerPoint = n.getInt("pp");
this.items.push(s);
}
return this.items;
}
});
i.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.LEADERBOARD_RES);
this.items = [];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) {
var n = e.get(i).getObject(), s = {};
s.session = i;
s.account = n.getUtfString("dn");
s.win = n.getDouble("m");
this.items.push(s);
}
return this.items;
}
});
window.BaccaratEvent = e.exports = i;
cc._RF.pop();
}, {} ],
BaccaratListCauItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "d2b7d7iMz5FiL029WzzPcUC", "BaccaratListCauItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
cauItem: cc.Prefab,
listCau: cc.Node
},
init: function(t) {
var e = this;
this.listCau.removeAllChildren(!0);
Promise.all(t.map(function(t) {
var i = cc.instantiate(e.cauItem);
e.listCau.addChild(i);
i.getComponent(i.name).init(t);
}));
}
});
cc._RF.pop();
}, {} ],
BaccaratRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "2ac96EVZCVJFZWhoobOgmCa", "BaccaratRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
listRank: [ cc.SpriteFrame ],
listFont: [ cc.Font ],
spRank: cc.Sprite,
lbRank: cc.Label,
lbName: cc.Label,
lbWin: cc.Label
},
init: function(t, e) {
if (e < 3) {
this.spRank.node.active = !0;
this.lbRank.node.active = !1;
this.spRank.spriteFrame = this.listRank[e];
this.lbRank.font = this.listFont[0];
this.lbWin.font = this.listFont[0];
this.lbName.font = this.listFont[0];
} else {
this.spRank.node.active = !1;
this.lbRank.node.active = !0;
this.lbRank.string = e + 1;
this.lbRank.font = this.listFont[1];
this.lbWin.font = this.listFont[1];
this.lbName.font = this.listFont[1];
}
this.lbName.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
BaccaratRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "58b6bO0mbZC6IfUJVYZ3QMf", "BaccaratRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "b2",
HISTORY_RESULT: "b4",
HISTORY_DETAIL: "b5"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.BaccaratController.ZoneInstance.getRoomByName("baccarat").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setTypePot: function(t) {
this._params.putByte("t", t);
return this;
},
setBetChip: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.HistoryRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.HISTORY_RESULT);
}
});
i.HistoryDetailRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.HISTORY_DETAIL);
}
});
window.BaccaratRequest = i;
cc._RF.pop();
}, {} ],
BaccaratSoiCauItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "8cbaeUw6shK9ZqTo7JJqS+S", "BaccaratSoiCauItem");
cc.Class({
extends: cc.Component,
properties: {
bgCauLe: cc.Node,
bgCauChan: cc.Node,
lbCau: cc.Label,
MaxCount: 4
},
init: function(t) {
if ((t = parseInt(t)) % 2 == 1) {
this.bgCauLe.active = !0;
this.bgCauChan.active = !1;
this.lbCau.string = t;
this.lbCau.node.color = cc.Color.WHITE;
} else {
this.bgCauLe.active = !1;
this.bgCauChan.active = !0;
this.lbCau.string = this.MaxCount - t;
this.lbCau.node.color = cc.Color.BLACK;
}
}
});
cc._RF.pop();
}, {} ],
BaccaratTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "5bfadsIr65FZZzJrSr22V7c", "BaccaratTransactionItem");
var i = t("BaccaratCard");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbPhien: cc.Label,
lbBetConDoi: cc.Label,
lbBetCon: cc.Label,
lbBetHoa: cc.Label,
lbBetCai: cc.Label,
lbBetCaiDoi: cc.Label,
lbWin: cc.Label,
baiCon: cc.Node,
baiCai: cc.Node,
lbTime: cc.Label
},
init: function(t) {
this.lbPhien.string = "#" + t.session;
this.lbBetConDoi.string = Utils.addDotToNumber(t.bet[0]);
this.lbBetCon.string = Utils.addDotToNumber(t.bet[1]);
this.lbBetHoa.string = Utils.addDotToNumber(t.bet[2]);
this.lbBetCai.string = Utils.addDotToNumber(t.bet[3]);
this.lbBetCaiDoi.string = Utils.addDotToNumber(t.bet[4]);
this.lbWin.string = Utils.addDotToNumber(this.getWin(t.win));
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
if (t.playerIds.length > 2) {
this.baiCon.getChildByName("card3").active = !0;
this.baiCon.getChildByName("card3").getComponent("ItemCard").init(new i.Card(t.playerIds[2]));
} else this.baiCon.getChildByName("card3").active = !1;
this.baiCon.getChildByName("card1").getComponent("ItemCard").init(new i.Card(t.playerIds[0]));
this.baiCon.getChildByName("card2").getComponent("ItemCard").init(new i.Card(t.playerIds[1]));
this.baiCai.getChildByName("card1").getComponent("ItemCard").init(new i.Card(t.bankerIds[0]));
this.baiCai.getChildByName("card2").getComponent("ItemCard").init(new i.Card(t.bankerIds[1]));
if (t.bankerIds.length > 2) {
this.baiCai.getChildByName("card3").active = !0;
this.baiCai.getChildByName("card3").getComponent("ItemCard").init(new i.Card(t.bankerIds[2]));
} else this.baiCai.getChildByName("card3").active = !1;
this.baiCon.getChildByName("lb_point").getComponent(cc.Label).string = t.playerPoint;
this.baiCai.getChildByName("lb_point").getComponent(cc.Label).string = t.bankerPoint;
},
getWin: function(t) {
for (var e = 0, i = 0; i < t.length; i++) e += t[i];
return e;
}
});
cc._RF.pop();
}, {
BaccaratCard: "BaccaratCard"
} ],
Ball: [ function(t, e) {
"use strict";
cc._RF.push(e, "da3c96DhmpDVoia4fePoHCi", "Ball");
cc.Class({
extends: cc.Component,
properties: {
_cbOnCollisionStay: null
},
onCollisionEnter: function(t) {
this._cbOnCollisionStay && this._cbOnCollisionStay(parseInt(t.tag));
},
addEventOnCollisionEnter: function(t) {
this._cbOnCollisionStay = t;
}
});
cc._RF.pop();
}, {} ],
BankLogItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "5b1cetNqDxIBIZWNzePjwSc", "BankLogItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lb_time: cc.Label,
lb_amount: cc.Label,
lb_chip: cc.Label,
lb_tax: cc.Label,
lb_des: cc.Label
},
init: function(t) {
this.lb_time.string = Utils.reFormatDisplayTime(t.time);
this.lb_des.string = t.des;
this.lb_tax.string = t.tax + "%";
var e = t.amount > 0 ? "+" : "-";
this.lb_amount.string = e + "" + Utils.addDotToNumber(Math.abs(t.amount));
this.lb_chip.string = Utils.addDotToNumber(Math.abs(t.chip));
}
});
cc._RF.pop();
}, {} ],
BaseController: [ function(t, e) {
"use strict";
cc._RF.push(e, "f030atiiq5OL57wworyoLv8", "BaseController");
var i = SmartFoxSDK.Class.extend({
room: null,
_nameUI: null,
_ui: null,
_src: "",
ZoneInstance: null,
zoneName: "",
_inited: !1,
un: "",
pass: "",
ctor: function(t, e) {
null == t && console.error("Undefine name UI");
this._nameUI = t;
this._src = e;
this.zoneName = this._src;
this._initialize();
setInterval(function() {
this.ZoneInstance && this.ZoneInstance.isConnected() && this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.PingPongRequest());
}.bind(this), 3e4);
},
_reset: function() {
mm.Loading.hide();
if (this.ZoneInstance) {
cc.currentUI = "";
this._inited = !1;
this.removeEvents();
this.ZoneInstance._reset(!1);
this.ZoneInstance._socketEngine.disconnect("disconnect");
this.ZoneInstance = new SmartFoxSDK.newInstance(Config.zoneConfig[this.zoneName]);
this.registerEvents();
}
},
_initialize: function() {
if (!this._inited) {
this._inited = !0;
if (Config.zoneConfig[this.zoneName]) {
this.ZoneInstance = new SmartFoxSDK.newInstance(Config.zoneConfig[this.zoneName]);
this.registerEvents();
}
}
},
loginZone: function(t, e) {
this.un = t;
this.pass = e;
if (this.ZoneInstance.isConnected()) if (this.ZoneInstance.getCurrentZone() == this.zoneName) this.onEventLogin({
status: !0
}); else {
var i = new SmartFoxSDK.SObject();
i.putUtfString("role", "user");
var n = new SmartFoxSDK.SmartFox.Requests.System.LoginRequest(t, e, this.zoneName, i);
this.ZoneInstance.send(n);
} else this.ZoneInstance.connect();
},
setRoom: function(t) {
this.room = t;
this._ui = null;
},
getRoom: function() {
return this.room;
},
getUI: function() {
if (null != this._ui) return this._ui;
if (!this._nameUI || !this._nameUI.startsWith("UI")) return null;
var t = cc.director.getScene(), e = cc.find(this._nameUI, t);
e && (this._ui = e.getComponent(this._nameUI));
return this._ui;
},
getUIByName: function(t) {
if (!t || !t.startsWith("UI")) return null;
var e = cc.director.getScene(), i = cc.find(t, e), n = null;
i && (n = i.getComponent(t));
return n;
},
preLoadUI: function(t, e) {
"" != this._src && (t.src = this._src);
var i = cc.director.getScene(), n = cc.find(this._nameUI, i);
if (n && n.active) {
if (e) {
e();
mm.Loading.hide();
}
} else UIManger.show(this._nameUI, t, function() {
if (e) {
e();
mm.Loading.hide();
}
});
},
registerEvents: function() {
this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.HISTORY_RES, this.onHistoryEvent, this);
this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES, this.onLeaderBoardEvent, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION, this.onEventConnection, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.LOGIN, this.onEventLogin, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.LOGIN_ERROR, this.onEventLoginError, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.PUBLIC_MESSAGE, this.onPublicMessage, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN, this.onEventRoomJoin, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.USER_ENTER_ROOM, this.onEventUserEnterRoom, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN_ERROR, this.onEventRoomJoinError, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.USER_EXIT_ROOM, this.onEventUserExitRoom, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION_LOST, this.onEventLost, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.DISCONNECT_REASON, this.onEventDisconnect, this);
this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.SOCKET_ERROR, this.onEventIOError, this);
},
removeEvents: function() {
this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.HISTORY_RES, this.onHistoryEvent, this);
this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES, this.onLeaderBoardEvent, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION, this.onEventConnection, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.LOGIN, this.onEventLogin, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.LOGIN_ERROR, this.onEventLoginError, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.PUBLIC_MESSAGE, this.onPublicMessage, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN, this.onEventRoomJoin, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.USER_ENTER_ROOM, this.onEventUserEnterRoom, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN_ERROR, this.onEventRoomJoinError, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.USER_EXIT_ROOM, this.onEventUserExitRoom, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION_LOST, this.onEventLost, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.DISCONNECT_REASON, this.onEventDisconnect, this);
this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.SOCKET_ERROR, this.onEventIOError, this);
},
onPublicMessage: function() {},
onHistoryEvent: function() {},
onLeaderBoardEvent: function() {},
_requestJoinRoom: function(t) {
this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.JoinRoomRequest(t));
},
onEventConnection: function(t) {
t.success ? this.loginZone(this.un, this.pass) : this._reset();
},
onEventLogin: function(t) {
"portal" == t.zone && this.onEventUpdateChip(0);
},
onEventLoginError: function(t) {
this._reset();
var e = this;
if (6 == t.id) {
var i = "Tài khoản " + t.msg[0] + " đã đăng nhập ở thiết bị khác";
UIManger.show("UIDialogOne", {
data: {
content: i,
cbYes: function() {
PortalManager.disconnectAll();
e.resetAllGameUI();
UIManger.show("UIHome");
}
},
pop: !0
});
} else if (3 == t.id) {
Config.clearUserPass();
mm.Toast.showToast(1, "Mật khẩu không đúng");
} else if (2 == t.id) {
Config.clearUserPass();
var n = t.msg[0];
mm.Toast.showToast(1, n);
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Tên đăng nhập hoặc mật khẩu không đúng");
}
},
onUserVariablesUpdate: function() {
for (var t = cc.director.getScene(), e = 0; e < t._children.length; e++) {
var i = t._children[e];
"UIHome" == i._name && "" == cc.currentUI && i.getComponent(i._name).updateUserVariable(0);
}
},
onEventUpdateChip: function(t) {
null != t && null != t || (t = 0);
for (var e = cc.director.getScene(), i = 0; i < e._children.length; i++) {
var n = e._children[i];
n._name.includes("UI") && n.active && n.getComponent(n._name).updateUserVariable(t);
}
},
onEventRoomJoin: function(t) {
this.setRoom(t.room);
},
onEventUserEnterRoom: function() {},
onEventRoomJoinError: function(t) {
mm.Loading.hide();
if (19 == t) {
this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(this.room));
mm.Loading.show();
}
},
onEventUserExitRoom: function(t) {
var e = t.user;
if (e.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UILobby", {
pop: !0,
data: {
game: this.zoneName,
ZoneInstance: this.ZoneInstance
}
});
} else this.getUI() && this.getUI().removePlayer([ e.name ]);
},
onEventLost: function() {
this._reset();
PortalManager.disconnectAll();
this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại.");
},
onEventDisconnect: function() {
this._reset();
PortalManager.disconnectAll();
this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
},
onEventIOError: function() {
this._reset();
PortalManager.disconnectAll();
this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
},
_showDialogDisconnect: function(t) {
var e = this;
UIManger.show("UIDialogOne", {
data: {
content: t,
cbYes: function() {
e.resetAllGameUI();
UIManger.show("UIHome");
}
},
pop: !0
});
},
resetAllGameUI: function() {
mm.isLogin = !1;
for (var t = cc.director.getScene(), e = 0; e < t.childrenCount; e++) {
var i = t.children[e];
i.name.startsWith("UI") && "UIHome" != i.name && i.destroy();
}
}
});
SmartFoxSDK.BaseController = i;
cc._RF.pop();
}, {} ],
BaseGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "ca0723sVk5KNYGPH7Sc5VSZ", "BaseGame");
cc.BaseGame = cc.Class({
extends: cc.VozBaseComponent,
properties: {
poses: {
default: [],
type: cc.Node
},
nodePlayers: cc.Node,
WaitingTimer: cc.Node,
BaseController: cc.Node,
prefabPlayer: cc.Prefab,
_number_desk: 4,
_CURRENT_POS: cc.Node,
controller: null,
_room: null,
lb_bet_title: cc.Label,
lb_id_table: cc.Label
},
requestLeaveRoom: function() {
mm.Loading.show();
this.controller.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(this._room));
},
setInfoTable: function(t, e) {
this.lb_id_table.string = t;
this.lb_bet_title.string = e;
},
eventBack: function() {},
setWaitingTimer: function(t, e, i) {
if (t) {
this.WaitingTimer.active = !0;
var n = this.WaitingTimer.getComponent(this.WaitingTimer.name);
n.setTotalProgress(e);
n.setCurrentProgress(i);
n.turnOnTimer();
} else this.WaitingTimer.active = !1;
},
showDeskEmpty: function() {
if (!this._isPlayer(this.controller.ZoneInstance.mySelf.name)) for (var t = 0; t < this._CURRENT_POS._children.length; t++) this._getJSPlayerById(t) || (this._CURRENT_POS._children[t].active = !0);
},
hideDeskEmpty: function() {
for (var t = 0; t < this._number_desk; t++) this._getJSPlayerById(t) || (this._CURRENT_POS._children[t].active = !1);
},
_changeToMyView: function() {
if (this._isPlayer(this.controller.ZoneInstance.mySelf.name)) for (var t = this._getPlayerId(this.controller.ZoneInstance.mySelf.name), e = this._number_desk, i = e - t, n = 0; n < e; n++) {
var s = this._getNodePlayerById(n);
if (cc.isValid(s)) {
var o = (n + i) % e;
s.position = this.poses[o];
var a = this._getJSPlayer(s);
a.newPos = o;
a.number_desk = this._number_desk;
a.updatePosHand();
}
}
},
_updateNodePlayers: function(t) {
for (var e = 0; e < t.length; e++) {
var i = t[e], n = this._getNodePlayerById(i.DeskId);
if (null == n) {
n = cc.instantiate(this.prefabPlayer);
this.nodePlayers.addChild(n);
}
n.position = this.poses[i.DeskId].position;
n.playerId = i.DeskId;
i.displayName = GameVariables.getDisplayName(this._room.getUserByName(i.UserName));
this._getJSPlayer(n).setDesk(i);
}
this._changeToMyView();
},
removePlayer: function(t) {
for (var e = 0; e < t.length; e++) {
var i = this._getJSPlayerByName(t);
if (i && i.getDesk().UserName == t[e]) {
this._removeNodePlayerById(i.getDesk().DeskId);
this.controller.m_tableInfo.m_listDesk.splice(this.controller.m_tableInfo.m_listDesk.indexOf(i.getDesk()), 1);
this.controller.m_tableInfo.m_listUser.splice(this.controller.m_tableInfo.m_listUser.indexOf(t[e]), 1);
}
}
},
turnOffAllTimerPlayers: function() {
if (this.controller.m_tableInfo && this.controller.m_tableInfo.m_listActiveUserName) for (var t = 0; t < this.controller.m_tableInfo.m_listActiveUserName.length; t++) {
var e = this._getJSPlayerByName(this.controller.m_tableInfo.m_listActiveUserName[t]);
e && e.turnOffTimer();
}
},
_getNodePlayerById: function(t) {
for (var e = 0; e < this.nodePlayers._children.length; e++) if (this.nodePlayers._children[e].playerId == t) return this.nodePlayers._children[e];
return null;
},
_removeNodePlayerById: function(t) {
for (var e = 0; e < this.nodePlayers._children.length; e++) if (this.nodePlayers._children[e].playerId == t) {
this.nodePlayers._children[e].active = !1;
this.nodePlayers.removeChild(this.nodePlayers._children[e], !0);
break;
}
},
_getJSPlayer: function(t) {
return t.getComponent(t.name);
},
_getJSPlayerById: function(t) {
var e = this._getNodePlayerById(t);
return cc.isValid(e) ? this._getJSPlayer(e) : null;
},
_getJSPlayerByName: function(t) {
var e = this._getPlayerId(t);
return this._getJSPlayerById(e);
},
_getPlayerId: function(t) {
if (this.controller.m_tableInfo && this.controller.m_tableInfo.m_listDesk) for (var e = 0; e < this.controller.m_tableInfo.m_listDesk.length; e++) {
var i = this.controller.m_tableInfo.m_listDesk[e];
if (i.UserName == t) return i.DeskId;
}
return -1;
},
_isPlayer: function(t) {
if (this.controller.m_tableInfo && this.controller.m_tableInfo.m_listDesk) for (var e = 0; e < this.controller.m_tableInfo.m_listDesk.length; e++) if (this.controller.m_tableInfo.m_listDesk[e].UserName == t) return !0;
return !1;
}
});
cc._RF.pop();
}, {} ],
BaseItemCustom: [ function(t, e) {
"use strict";
cc._RF.push(e, "fa9ebx6Fq9Lza7nAIGoXXOU", "BaseItemCustom");
var i = cc.Enum({
NONE: 0,
TOGGLE: 1,
SWITCH: 2
});
cc.BaseItemCustom = cc.Class({
editor: {
disallowMultiple: !1,
menu: "Custom component / List Item",
executionOrder: -5001
},
extends: cc.VozBaseComponent,
properties: {
selectedMode: {
default: i.NONE,
type: i,
tooltip: !1
},
selectedFlag: {
default: null,
type: cc.Node,
visible: function() {
var t = this.selectedMode > 0;
t || (this.selectedFlag = null);
return t;
}
},
selectedSpriteFrame: {
default: null,
type: cc.SpriteFrame,
visible: function() {
var t = this.selectedMode == i.SWITCH;
t || (this.selectedSpriteFrame = null);
return t;
}
},
adaptiveSize: {
default: !1,
tooltip: !1
},
_selected: !1,
selected: {
visible: !1,
get: function() {
return this._selected;
},
set: function(t) {
this._selected = t;
if (this.selectedFlag) switch (this.selectedMode) {
case i.TOGGLE:
this.selectedFlag.active = t;
break;

case i.SWITCH:
this.selectedFlag.spriteFrame = t ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
}
}
},
_btnCom: null,
btnCom: {
visible: !1,
get: function() {
this._btnCom || (this._btnCom = this.node.getComponent(cc.Button));
return this._btnCom;
}
}
},
onDestroy: function() {
this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
},
_registerEvent: function() {
if (!this.eventReg) {
this.btnCom && this._list.selectedMode > 0 && this.btnCom.clickEvents.unshift(this.createEvt(this, "onClickThis"));
this.adaptiveSize && this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
this.eventReg = !0;
}
},
_onSizeChange: function() {
this._list._onItemAdaptive(this.node);
},
createEvt: function(t, e, i) {
if (t.isValid) {
t.comName = t.comName || t.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, "");
var n = new cc.Component.EventHandler();
n.target = i || t.node;
n.component = t.comName;
n.handler = e;
return n;
}
},
showAni: function(t, e, i) {
var n, s = this;
switch (t) {
case 0:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, 2 * this.node.height) ];
break;

case 1:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 2 * this.node.width, 0) ];
break;

case 2:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, 0, -2 * this.node.height) ];
break;

case 3:
n = [ new cc.scaleTo(.2, .7), new cc.moveBy(.3, -2 * this.node.width, 0) ];
break;

default:
n = [ new cc.scaleTo(.3, .1) ];
}
(e || i) && n.push(new cc.CallFunc(function() {
if (i) {
s._list._delSingleItem(s.node);
for (var t = s._list.displayData.length - 1; t >= 0; t--) if (s._list.displayData[t].listId == s.node._listId) {
s._list.displayData.splice(t, 1);
break;
}
}
e();
}));
this.node.runAction(new cc.Sequence(n));
},
onClickThis: function() {
this._list.selectedId = this.node._listId;
}
});
cc._RF.pop();
}, {} ],
ButtonScaler: [ function(t, e) {
"use strict";
cc._RF.push(e, "bb22eEUm+xFCLENauSM/Z3P", "ButtonScaler");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
pressedScale: .9,
transDuration: .1,
sound: !1
},
onLoad: function() {
var t = this;
t.initScale = this.node.scale;
t.button = t.getComponent(cc.Button);
t.scaleDownAction = cc.scaleTo(.05, this.pressedScale);
t.scaleUpAction = cc.scaleTo(.05, t.initScale);
function e() {
this.stopAllActions();
this.runAction(t.scaleUpAction);
}
this.node.on("touchstart", function() {
this.stopAllActions();
this.runAction(t.scaleDownAction);
}, this.node);
this.node.on("touchend", e, this.node);
this.node.on("touchcancel", e, this.node);
}
});
cc._RF.pop();
}, {} ],
CandyController: [ function(t, e) {
"use strict";
cc._RF.push(e, "6d821hsMmlMerrkIGxYuFjC", "CandyController");
var i = t("CandyEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id").toFixed(0);
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.resultMap = s.getByteArray("rs");
o.linewin = s.getByteArray("lw");
i.push(o);
}
UIManger.show("UICandyTransaction", {
pop: !0,
src: "candy",
data: {
items: i
}
});
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
UIManger.show("UICandyRank", {
pop: !0,
src: "candy",
data: {
items: i
}
});
},
onEventRoomJoin: function(t) {
this._super(t);
this.preLoadUI({
pop: !0
}, function() {}.bind(this));
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
cc.currentUI = "";
mm.Loading.hide();
this.getUI().back();
}
},
onUserBetEvent: function(t) {
if (null != this.getUI()) {
var e = new i.BetEvent().fromEvent(t);
this.getUI().CandyRun(e);
}
}
}), s = null;
SmartFoxSDK.CandyController = e.exports = function() {
null == s && (s = new n("UICandy", "candy"));
return s;
}();
cc._RF.pop();
}, {
CandyEvent: "CandyEvent"
} ],
CandyEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "6b50dSWCiZBWoEXAVs+w7Gr", "CandyEvent");
var i = {
RESPONSE_NAME: {
BET_RES: "cd1"
}
};
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
this.freeSpin = 0;
this.freeGift = [];
},
fromEvent: function(t) {
this.status = 1;
this.winMoney = t.getDouble("w");
this.lineWin = t.getIntArray("lw");
this.isNohu = t.getBool("nh");
this.isThangLon = t.getBool("tl");
this.result = t.getIntArray("r");
t.containsKey("fs") && (this.freeSpin = t.getInt("fs"));
t.containsKey("fg") && (this.freeGift = t.getDoubleArray("fg"));
this.msg = t.getUtfString("ec");
null != this.msg && (this.status = 0);
return this;
}
});
window.CandyEvent = e.exports = i;
cc._RF.pop();
}, {} ],
CandyItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "2c2b9R9uDxPBJNa9FDo103e", "CandyItem");
cc.Class({
extends: cc.Component,
properties: {},
init: function(t, e) {
this.node.children[e].active = !0;
},
stop: function() {},
random: function() {
var t = ~~(6 * Math.random());
this.setIcon(t);
return t;
},
setIcon: function(t, e) {
var i = this;
void 0 === e && (e = !1);
Promise.all(this.node.children.map(function(t) {
t.active = !1;
})).then(function() {
i.node.children[t].active = !0;
e && (i.data = t);
}, this);
}
});
cc._RF.pop();
}, {} ],
CandyLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "589b5YV1SxKz7gIRZ0zhUo6", "CandyLine");
var i = t("Helper");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: cc.Node,
typeLine: 0
},
init: function(t) {
this.CDV = t;
this.eventSelectAll();
},
eventOpen: function() {
this.node.active = !0;
},
eventClose: function() {
var t = this.getTotalLineSelect();
this.node.active && t < 1 ? this.CDV.addNotice("Chọn ít nhất 1 dòng") : this.node.active = !1;
},
eventSelect: function(t, e) {
var n = parseInt(e);
i.setMaterialGray(t.target.getComponent(cc.Sprite), i.isMaterialGray(t.target.getComponent(cc.Sprite)));
this.data[n] = i.isMaterialGray(t.target.getComponent(cc.Sprite));
this.updateString();
this.typeLine = 3;
},
eventBoChon: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !0);
return !1;
})).then(function(e) {
t.data = e;
t.typeLine = -1;
});
},
eventSelectChan: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 1);
return e % 2 != 1;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 2;
},
eventSelectLe: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 0);
return e % 2 != 0;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 1;
},
eventSelectAll: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !1);
return !0;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 0;
},
updateString: function() {
var t = this.getTotalLineSelect();
this.CDV.setNumberLines(t);
},
getTotalLineSelect: function() {
for (var t = 0, e = 1; e < this.data.length; e++) this.data[e] && t++;
return t;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
CandyMainLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "5cf73OfJulPvKNsjWTyvDYr", "CandyMainLine");
cc.Class({
extends: cc.Component,
init: function() {
return this;
},
onEnable: function() {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
},
onDisable: function() {
this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
},
onhover: function() {
this.node.children[0].active = !0;
this.node.children[1].active = !0;
},
offhover: function() {
this.node.children[0].active = !1;
this.node.children[1].active = !1;
},
onEf: function() {
this.onhover();
this.node.pauseSystemEvents(!0);
},
offEf: function() {
this.offhover();
this.node.resumeSystemEvents(!0);
},
offAll: function() {}
});
cc._RF.pop();
}, {} ],
CandyRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "44eaadBqMZBmZM/NTjZ76z8", "CandyRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbStt: cc.Label,
lbTime: cc.Label,
lbAccount: cc.Label,
lbWin: cc.Label,
lbWinType: cc.Label
},
init: function(t) {
this.lbStt.string = t.session;
this.lbTime.string = t.time;
this.lbAccount.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
this.lbWinType.string = t.win_type;
}
});
cc._RF.pop();
}, {} ],
CandyReel: [ function(t, e) {
"use strict";
cc._RF.push(e, "827fc8EAylLFatmnoEMHgPy", "CandyReel");
cc.Class({
extends: cc.Component,
properties: {
HeightReel: 300
},
onLoad: function() {
this.HeightReel = this.node.height - 5;
},
init: function(t, e) {
var i = this;
this.CDV = t;
this.icons = [];
var n = this;
Promise.all(e.map(function(t) {
var e = cc.instantiate(n.CDV.iconPrefab);
n.node.addChild(e);
(e = e.getComponent("CandyItem")).init(n.CDV, t);
return e;
})).then(function(t) {
i.icons = t;
});
},
spin: function(t) {
var e = .4, i = 1;
if (this.CDV.isFast) {
e = .2;
i = .4;
}
this.node.stopAllActions();
var n = cc.moveTo(i, cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeOut(1)), s = cc.callFunc(function() {
0 === t && this.CDV.copy();
this.node.y = 0;
}, this);
if (2 === t) {
var o = cc.callFunc(function() {
this.node.y = 0;
this.CDV.runActionWon();
}, this);
this.node.runAction(cc.sequence(cc.delayTime(t * e), n, o));
} else this.node.runAction(cc.sequence(cc.delayTime(t * e), n, s));
},
stop: function() {
this.node.stopAllActions();
this.CDV.copy();
this.node.y = 0;
}
});
cc._RF.pop();
}, {} ],
CandyRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "60c61865f5BUY3khL1u9Au4", "CandyRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "cd1"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.CandyController.ZoneInstance.getRoomByName("candy").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t, e) {
this._params.putDouble("b", t);
void 0 !== e && this._params.putUtfString("cheat", e);
return this;
}
});
window.CandyRequest = i;
cc._RF.pop();
}, {} ],
CandyTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "b0360vAsI9HnoA5Zrwuwbf7", "CandyTransactionItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbStakes: cc.Label,
lbWin: cc.Label,
_dataRank: null
},
init: function(t) {
this._dataRank = t;
this.lbSession.string = t.session;
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
this.lbStakes.string = Utils.addDotToNumber(t.stakes);
this.lbWin.string = Utils.addDotToNumber(t.win);
},
eventDetail: function() {
this.show("UICandyTransactionDetail", {
src: "candy",
data: this._dataRank,
pop: !0
});
}
});
cc._RF.pop();
}, {} ],
CandyWinGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "4a59dE/seJEkaxHbYkXnQOc", "CandyWinGame");
var i, n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbMoneyWin: cc.Label,
lbNumberWin: cc.Label,
animationWin: cc.Node
},
onLoad: function() {
i = this;
},
init: function(t) {
this.CDV = t;
},
runWinGame: function() {
if (this.CDV.isThangLon && !this.CDV.isNoHu) this.runThangLon(); else if (this.CDV.isNoHu) this.runNoHu(); else {
if (this.CDV.winMoney > 0) {
this.CDV.setMoneyWin(this.CDV.winMoney);
this.lbMoneyWin.node.active = !0;
n.numberTo(this.lbMoneyWin, 0, this.CDV.winMoney, 1200, !0, function() {
i.CDV.updateChipAll();
i.scheduleOnce(function() {
i.lbMoneyWin.node.active = !1;
i.checkRunAgainWin();
}, 1);
});
this.CDV.winMoney = 0;
} else this.CDV.autoQuay();
i.CDV.finishSpin();
}
},
checkRunAgainWin: function() {
(this.CDV.winMoney > 0 || this.CDV.isNoHu || this.CDV.isThangLon || this.CDV.isAuto) && this.runWinGame();
},
runNoHu: function() {
this.animationWin.active = !0;
this.animationWin.getComponent(sp.Skeleton).setAnimation(0, "NoHu-112", !1);
this.lbNumberWin.node.active = !0;
n.numberTo(this.lbNumberWin, 0, this.CDV.winMoney, 1200, !0, function() {
this.scheduleOnce(function() {
var t = cc.moveTo(.5, cc.v2(-75, 170));
i.lbNumberWin.node.runAction(cc.sequence(t, cc.delayTime(1), cc.callFunc(function() {
i.lbNumberWin.node.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
this.scheduleOnce(function() {
i.animationWin.active = !1;
}, 2.5);
this.CDV.isNoHu = !1;
},
runThangLon: function() {
this.animationWin.active = !0;
this.animationWin.getComponent(sp.Skeleton).setAnimation(0, "ThangSieuLown-112", !1);
this.lbNumberWin.node.active = !0;
n.numberTo(this.lbNumberWin, 0, this.CDV.winMoney, 1200, !0, function() {
this.scheduleOnce(function() {
var t = cc.moveTo(.5, cc.v2(-75, 170));
i.lbNumberWin.node.runAction(cc.sequence(t, cc.delayTime(1), cc.callFunc(function() {
i.lbNumberWin.node.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
this.scheduleOnce(function() {
i.animationWin.active = !1;
}, 2.5);
this.CDV.isThangLon = !1;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
Card: [ function(t, e) {
"use strict";
cc._RF.push(e, "0576fWjH4dAXrjF8gIXbQyP", "Card");
cc.Class({
extends: cc.Component,
properties: {
_isSelected: !1,
bg: cc.Node,
_card: null,
_cbSelect: null,
_removeSelect: !0,
over: cc.Node
},
onLoad: function() {
this.over.active = !1;
},
showOver: function() {
this.over.active = !0;
},
hideOver: function() {
this.over.active = !1;
},
addEventSelect: function(t) {
this._cbSelect = t;
},
isSelected: function() {
return this._isSelected;
},
getCard: function() {
return this._card;
},
setCard: function(t) {
this._card = t;
},
_loadCardBack: function() {
cc.loader.loadRes("images/cards", cc.SpriteAtlas, function(t, e) {
t ? console.log(t) : this.bg.getComponent(cc.Sprite).spriteFrame = e.getSpriteFrame("-1");
}.bind(this));
},
_loadCard: function() {
cc.loader.loadRes("images/cards", cc.SpriteAtlas, function(t, e) {
t ? console.log(t) : this.bg.getComponent(cc.Sprite).spriteFrame = e.getSpriteFrame(this._card.nameFile);
}.bind(this));
},
init: function(t, e) {
this.node.active = !0;
this.hideOver();
if (null == t) this._loadCardBack(); else {
this._card = t;
this._removeSelect = null == e || e;
this._loadCard();
}
},
reveal: function(t, e) {
this.node.active = !0;
this.hideOver();
this._loadCardBack();
this._card = t;
var i = this, n = cc.callFunc(function() {
i._loadCard();
i.node.skewY = e ? 45 : 170;
});
if (e) {
i.node.skewY = 180;
var s = cc.skewBy(.225, 0, -35), o = cc.skewTo(.225, 0, 0);
i.node.runAction(cc.sequence(s, n, o));
} else {
i.node.skewY = 0;
var a = cc.skewBy(.225, 0, 10), c = cc.skewTo(.225, 0, 180);
i.node.runAction(cc.sequence(a, n, c));
}
},
switchCard: function(t) {
var e = this, i = cc.callFunc(function() {
e._loadCard();
e.node.skewY = t ? 45 : 170;
});
e.node.skewY = 0;
var n = cc.skewBy(.225, 0, 10), s = cc.skewTo(.225, 0, 180);
e.node.runAction(cc.sequence(n, i, s));
if (t) {
e.node.skewY = 180;
var o = cc.skewBy(.225, 0, -35), a = cc.skewTo(.225, 0, 0);
e.node.runAction(cc.sequence(o, i, a));
} else {
e.node.skewY = 0;
var c = cc.skewBy(.225, 0, 10), r = cc.skewTo(.225, 0, 180);
e.node.runAction(cc.sequence(c, i, r));
}
},
reset: function() {
this._loadCardBack();
this.hideOver();
this.node._zIndex = 0;
this.node.x = 0;
this.node.y = 0;
this._isSelected = !1;
this._card = null;
this._cbSelect = null;
this._removeSelect = !0;
},
eventSelect: function() {
if (!this._removeSelect) if (this._isSelected) {
this._isSelected = !1;
this.node.y = this.node.y - 20;
} else {
this._isSelected = !0;
this.node.y = this.node.y + 20;
this._cbSelect && this._cbSelect(this.getCard().id);
}
},
setScaleCard: function(t) {
this.node.width *= t;
this.node.height *= t;
}
});
cc._RF.pop();
}, {} ],
CasinoEnum: [ function(t, e) {
"use strict";
cc._RF.push(e, "f26a6v22n9Mzo/7W6j2DN/G", "CasinoEnum");
e.exports = {
DeskState: {
PLAYING: "PLAYING",
STOP_PLAYING: "STOP_PLAYING",
WAITING: "WAITING",
READY: "READY",
EMPTY: "EMPTYP",
SIT_ON: "SIT_ON"
},
PokerActionType: {
BET: "BET",
CALL: "CALL",
RAISE: "RAISE",
CHECK: "CHECK",
FOLD: "FOLD",
ALL_IN: "GOING_ALL_IN"
},
PokerGameTurn: {
BETTING: "BETTING",
FLOP: "FLOP",
TURN: "TURN",
RIVER: "RIVER",
END: "END"
},
RoomVariableDetail: {
DISPLAY_NAME: "display_name",
USER_CREATE: "user_create",
BET_CHIP: "bet_chip",
PASSWORD: "password",
MIN_CHIP: "min_chip",
MAX_CHIP: "max_chip",
NO_LIMIT: "no_limit",
STATUS: "status",
NUMB_OF_DESK: "numb_of_desk"
}
};
cc._RF.pop();
}, {} ],
CasinoEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "a7a6aG7GZpBKJ7uIZyJHbCK", "CasinoEvent");
var i = {
RESPONSE_NAME: {
GROUP_GAME_RES: "g1",
QUICK_JOIN_GAME_RES: "g2",
HISTORY_RES: "g4",
LEADER_BOARD_RES: "g5",
TRANSFER_MONEY_RES: "p1",
CHANGE_PASS_RES: "p2",
GIFT_CODE_RES: "p3",
LIST_AGENCY_RES: "p4"
}
};
i._BaseEvent = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._eventName = t;
},
getEventName: function() {
return this._eventName;
},
fromEvent: function() {
return this;
},
toEvent: function() {
return this;
}
});
i.HistoryEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.HISTORY_RES);
},
fromEvent: function(t) {
this.game = t.getUtfString("g");
this.data = t.getSArray("d");
return this;
}
});
i.LeaderboardEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LEADER_BOARD_RES);
},
fromEvent: function(t) {
this.game = t.getUtfString("g");
this.data = t.getSArray("d");
return this;
}
});
i.LoginEvent = i._BaseEvent.extend({
ctor: function() {
this._super(SmartFoxSDK.SmartFox.Event.LOGIN);
},
fromEvent: function(t) {
this.user = t.user;
this.data = t.data;
return this;
},
getUserInfo: function() {
return this.user;
},
getData: function() {
return this.data;
}
});
i.RoomJoinEvent = i._BaseEvent.extend({
ctor: function() {
this._super(SmartFoxSDK.SmartFox.Event.ROOM_JOIN);
},
fromEvent: function(t) {
this.room = t.room;
return this;
},
getRoomInfo: function() {
return this.room;
}
});
i.QuickJoinGameEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.QUICK_JOIN_GAME_RES);
},
fromEvent: function(t) {
this.roomId = t.getInt("id");
return this;
}
});
i.GroupGameEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.GROUP_GAME_RES);
},
fromEvent: function(t) {
this.groups = [];
for (var e = t.getSArray("groups"), i = 0; i < e.size(); i++) {
for (var n = e.get(i).getObject(), s = n.getUtfString("group"), o = n.getSArray("vars"), a = {}, c = 0; c < o.size(); c++) {
var r = SmartFoxSDK.SmartFox.Entities.Variables.RoomVariable.fromArray(o.get(c).getObject());
a[r.name] = r.value.value;
}
var h = {};
h.group_id = s;
h.group_vars = a;
this.groups.push(h);
}
this.groups.sort(function(t, e) {
return t.group_vars.bet_chip - e.group_vars.bet_chip;
});
return this;
}
});
i.TransferMoneyEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.TRANSFER_MONEY_RES);
},
fromEvent: function(t) {
this.code = t.getByte("c");
return this;
}
});
i.ChangePassEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.CHANGE_PASS_RES);
},
fromEvent: function(t) {
this.code = t.getByte("c");
return this;
}
});
i.GiftCodeEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.GIFT_CODE_RES);
},
fromEvent: function(t) {
null != t.getUtfString("ec") ? this.ec = t.getUtfString("ec") : this.gift_value = t.getDouble("c");
return this;
}
});
i.ListAgencyEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LIST_AGENCY_RES);
},
fromEvent: function(t) {
for (var e = [], i = t.getSArray("d"), n = 0; n < i.size(); n++) {
var s = i.get(n).getObject(), o = {};
o.username = s.getUtfString("un");
o.name = s.getUtfString("dn");
o.agName = s.getUtfString("ag");
o.zone = s.getUtfString("lo");
o.telegram = s.getUtfString("tl");
o.phone = s.getUtfString("p");
o.address = s.getUtfString("add");
o.face = s.getUtfString("fb");
o.stt = n + 1;
e.push(o);
}
return e;
}
});
i.HistoryEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.HISTORY_RES);
},
fromEvent: function() {
return this;
}
});
i.LeaderBoardEvent = i._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LEADER_BOARD_RES);
},
fromEvent: function() {
return this;
}
});
window.CasinoEvent = i;
cc._RF.pop();
}, {} ],
CasinoRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "547b3jMoGBIAa44EnqWG0wH", "CasinoRequest");
var i = {
REQUEST_NAME: {
GROUP_GAME_REQUEST: "g1",
QUICK_JOIN_GAME_REQUEST: "g2",
HISTORY_REQUEST: "g4",
LEADER_BOARD_REQUEST: "g5",
TRANSFER_MONEY_REQUEST: "p1",
CHANGE_PASS_REQUEST: "p2",
GIFT_CODE_REQUEST: "p3",
LIST_AGENCY_REQUEST: "p4"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._request = null;
this._params = new SmartFoxSDK.SObject();
this._roomId = void 0;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.HistoryRequest = i._BaseRequest.extend({
ctor: function(t) {
this._super(i.REQUEST_NAME.HISTORY_REQUEST);
this._roomId = t;
}
});
i.LeaderBoardRequest = i._BaseRequest.extend({
ctor: function(t) {
this._super(i.REQUEST_NAME.LEADER_BOARD_REQUEST);
this._roomId = t;
}
});
i.LoginRequest = i._BaseRequest.extend({
ctor: function(t, e, n, s) {
this._super(i.REQUEST_NAME.LOGIN_REQUEST);
this.name = t;
this.pass = e;
this.zone = n;
this.param = s;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.LoginRequest(this.name, this.pass, this.zone, this.param);
}
});
i.JoinRoomRequest = i._BaseRequest.extend({
ctor: function(t, e, n) {
this._super(i.REQUEST_NAME.JOIN_ROOM_REQUEST);
this.id = t;
this.pass = e;
this.isSpetator = n;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.JoinRoomRequest(this.id, this.pass, null, this.isSpetator);
}
});
i.GroupGameRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.GROUP_GAME_REQUEST);
},
setGame: function() {
return this;
}
});
i.QuickJoinGameRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.QUICK_JOIN_GAME_REQUEST);
},
setGame: function(t) {
this._params.putUtfString("game", t);
return this;
},
setGroup: function(t) {
this._params.putUtfString("group", t);
return this;
},
setSizeDesk: function(t) {
this._params.putInt("size", t);
return this;
}
});
i.TransferMoneyRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.TRANSFER_MONEY_REQUEST);
},
setUserRecived: function(t) {
this._params.putUtfString("ur", t);
return this;
},
setMoneyTransfer: function(t) {
this._params.putDouble("m", t);
return this;
}
});
i.ChangePassRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.CHANGE_PASS_REQUEST);
},
setNewPassword: function(t) {
this._params.putUtfString("p", t);
return this;
}
});
i.GiftCodeRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.GIFT_CODE_REQUEST);
},
setGiftCode: function(t) {
this._params.putUtfString("gc", t);
return this;
}
});
i.ListAgencyRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.LIST_AGENCY_REQUEST);
}
});
window.CasinoRequest = i;
cc._RF.pop();
}, {} ],
ChatEmojiLayer: [ function(t, e) {
"use strict";
cc._RF.push(e, "726b8jRLjxJaqkF84ifSurM", "ChatEmojiLayer");
cc.Class({
extends: cc.Component,
properties: {},
initController: function(t) {
this.chatController = t;
},
onEventSelect: function(t, e) {
t.target.parent.active = !1;
var i = "emoij_" + e;
this.sendMessage(i);
},
sendMessage: function(t) {
var e = new SmartFoxSDK.SObject();
e.putUtfString("fb", "");
e.putUtfString("dn", GameVariables.getDisplayName(this.chatController.mySelf));
this.chatController.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(t, e));
},
eventSendChat: function(t) {
var e = this.node.getChildByName("edtChat").getComponent(cc.EditBox);
if (e.string.length > 0) {
this.sendMessage(e.string);
e.string = "";
t.target.parent.active = !1;
}
}
});
cc._RF.pop();
}, {} ],
ChatLayer: [ function(t, e) {
"use strict";
cc._RF.push(e, "1b7c4kYnQJM84+fuMd0TjdB", "ChatLayer");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
ed_msg: cc.EditBox,
listview: i,
dataChat: null
},
onLoad: function() {
this.dataChat = [];
},
onDisable: function() {},
onEnable: function() {
this.listview.numItems = this.dataChat.length;
this.listview.scrollTo(0);
},
initChat: function(t) {
this.dataChat = t;
this.listview.numItems = this.dataChat.length;
this.listview.scrollTo(0);
},
sendMessage: function() {
if (this.ed_msg.string.length > 0) {
var t = new SmartFoxSDK.SObject();
t.putUtfString("fb", "");
t.putUtfString("dn", GameVariables.getDisplayName(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf));
SmartFoxSDK.TaiXiuController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.PublicMessageRequest(this.ed_msg.string, t));
this.ed_msg.string = "";
}
},
addMessage: function(t) {
this.dataChat.unshift(t);
this.listview.numItems = this.dataChat.length;
},
onListRender: function(t, e) {
var i = this.dataChat[e];
t.getComponent(t.name).init(i, e);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
CommunityCards: [ function(t, e) {
"use strict";
cc._RF.push(e, "f675coqnWtL06o3ZbZgYaBD", "CommunityCards");
var i = t("PokerCard");
cc.Class({
extends: cc.Component,
properties: {
cards: {
type: cc.Node,
default: []
}
},
onLoad: function() {
this.posCards = [];
for (var t = 0; t < this.cards.length; t++) this.posCards.push(this.cards[t].position);
this.reset();
},
dealFlop: function(t) {
if (3 != t.length) console.error("Size cards Flop != 3"); else {
for (var e = 0; e < 3; e++) {
this.cards[e].getComponent("Card").init(null);
this.cards[e].position = this.posCards[0];
this.cards[e].active = !0;
}
var n = this;
this.cards[0].runAction(cc.sequence(cc.moveTo(.2, this.posCards[0]), cc.callFunc(function() {
n.cards[0].getComponent("Card").reveal(new i.Card(t[0]));
})));
this.cards[1].runAction(cc.sequence(cc.moveTo(.2, this.posCards[1]), cc.callFunc(function() {
n.cards[1].getComponent("Card").reveal(new i.Card(t[1]));
})));
this.cards[2].runAction(cc.sequence(cc.moveTo(.2, this.posCards[2]), cc.callFunc(function() {
n.cards[2].getComponent("Card").reveal(new i.Card(t[2]));
})));
}
},
dealTurn: function(t) {
1 != t.length ? console.error("Size cards Turn != 1") : this.cards[3].getComponent("Card").reveal(new i.Card(t[0]));
},
dealRiver: function(t) {
1 != t.length ? console.error("Size cards River != 1") : this.cards[4].getComponent("Card").reveal(new i.Card(t[0]));
},
showDown: function(t) {
for (var e = 0; e < t.length; e++) {
var n = this.cards[e].getComponent("Card");
this.cards[e].active ? n.init(new i.Card(t[e])) : n.reveal(new i.Card(t[e]));
}
},
showCommunityCard: function(t) {
if (0 != t.length) for (var e = 0; e < this.cards.length; e++) if (t[e]) {
var n = this.cards[e].getComponent("Card");
this.cards[e].active ? n.init(new i.Card(t[e])) : n.reveal(new i.Card(t[e]));
}
},
showCommunityCardWin: function(t) {
for (var e = 0; e < this.cards.length; e++) {
var i = this.cards[e].getComponent("Card");
null != i._card && t.indexOf(i._card.id) < 0 && i.showOver();
}
},
reset: function() {
for (var t = 0; t < this.cards.length; t++) {
this.cards[t].getComponent("Card").hideOver();
this.cards[t].active = !1;
}
}
});
cc._RF.pop();
}, {
PokerCard: "PokerCard"
} ],
Config: [ function(t, e) {
"use strict";
cc._RF.push(e, "a40c0InVC1Lraf05u1kjNDU", "Config");
var i = {}, n = "gsv1.8668live.com";
i.zoneConfig = {
portal: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
taixiu: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
minipoker: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
candy: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
kimcuong: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
zeus: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
rongho: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
xocdia: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
bacay: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
tlmn: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
maubinh: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
baccarat: {
host: n,
port: 8443,
ssl: !1,
debug: !1
},
roulette: {
host: n,
port: 8443,
ssl: !1,
debug: !0
},
sieuxe: {
host: n,
port: 8443,
ssl: !1,
debug: !0
},
poker: {
host: n,
port: 8443,
ssl: !1,
debug: !0
},
vampire: {
host: n,
port: 8443,
ssl: !1,
debug: !0
},
sinbad: {
host: n,
port: 8443,
ssl: !1,
debug: !0
}
};
i.GAME_CONFIG = {
tlmn: {
src: "tlmn",
ui: "UITLMN"
},
bacay: {
src: "bacay",
ui: "UIBaCay"
},
maubinh: {
src: "maubinh",
ui: "UIMauBinh"
},
xocdia: {
src: "xocdia",
ui: "UIXocDia"
},
taixiu: {
src: "taixiu",
ui: "UITaiXiu"
},
kimcuong: {
src: "kimcuong",
ui: "UIKimCuong"
},
zeus: {
src: "zeus",
ui: "UIZeus"
},
minipoker: {
src: "minipoker",
ui: "UIMiniPoker"
},
rongho: {
src: "rongho",
ui: "UIRongHo"
},
candy: {
src: "candy",
ui: "UICandy"
},
baccarat: {
src: "baccarat",
ui: "UIBaccarat"
},
roulette: {
src: "roulette",
ui: "UIRoulette"
},
poker: {
src: "poker",
ui: "UIPoker"
},
sieuxe: {
src: "sieuxe",
ui: "UISieuXe"
},
sinbad: {
src: "sinbad",
ui: "UISinbad"
},
vampire: {
src: "vampire",
ui: "UIVampire"
}
};
i.getDefaultAvatar = function() {
var t = cc.sys.localStorage;
if (null === t.getItem("avatar") || void 0 === t.getItem("avatar")) {
var e = Math.floor(10 * Math.random()) + 1;
t.setItem("avatar", e);
}
return t.getItem("avatar");
};
i.saveUsername = function(t) {
cc.sys.localStorage.setItem("un", t);
};
i.getUsername = function() {
var t = cc.sys.localStorage;
null !== t.getItem("un") && void 0 !== t.getItem("un") || t.setItem("un", "");
return t.getItem("un");
};
i.savePass = function(t) {
cc.sys.localStorage.setItem("pwd", t);
};
i.getPass = function() {
var t = cc.sys.localStorage;
null !== t.getItem("pwd") && void 0 !== t.getItem("pwd") || t.setItem("pwd", "");
return t.getItem("pwd");
};
i.clearUserPass = function() {
var t = cc.sys.localStorage;
t.setItem("un", "");
t.setItem("pwd", "");
};
window.Config = i;
cc._RF.pop();
}, {} ],
DaiLyCKItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "3b9ce9coy1Ig6hUA/v95xVb", "DaiLyCKItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbName: cc.Label,
lbUserName: cc.Label,
lbSTT: cc.Label,
_isSelect: !1
},
onEnable: function() {
this._isSelect = !1;
var t = this.node.getChildByName("menuchon");
t.active = !1;
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
t.active = !0;
}, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
t.active = this._isSelect;
}, this);
},
showMenuChon: function(t) {
this._isSelect = t;
this.node.getChildByName("menuchon").active = t;
},
init: function(t) {
this.lbName.string = t.agName;
this.lbUserName.string = t.name;
this.lbSTT.string = t.stt;
}
});
cc._RF.pop();
}, {} ],
DaiLyCK: [ function(t, e) {
"use strict";
cc._RF.push(e, "4d6e5Mp9lhCY7n39obibtKI", "DaiLyCK");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listDaiLy = [];
this.listview.numItems = this.listDaiLy.length;
},
eventClose: function() {
this.back();
},
updateItems: function(t) {
this.listDaiLy = t;
this.listview.numItems = this.listDaiLy.length;
},
onListRender: function(t, e) {
var i = this.listDaiLy[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i) {
if (t && this.cb) {
e = parseInt(e);
this.cb(this.listDaiLy[e]);
t.getComponent(t.name).showMenuChon(!0);
if (null != i) {
i = parseInt(i);
this.listview.getItemByListId(i) && this.listview.getItemByListId(i).getComponent(t.name).showMenuChon(!1);
}
}
},
addEventSelect: function(t) {
this.cb = t;
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
DaiLyItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "f00195uiJhB/rndjDOxABTo", "DaiLyItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbStt: cc.Label,
lbName: cc.Label,
lbUserName: cc.Label,
lbAddress: cc.Label,
lbPhone: cc.Label,
_dataTransfer: null,
_cb: null
},
init: function(t, e) {
this._dataTransfer = t;
this.lbStt.string = e + 1;
this.lbName.string = t.agName;
this.lbUserName.string = t.name;
this.lbPhone.string = null == t.phone ? "" : t.phone;
this.lbAddress.string = t.address;
},
eventTransfer: function() {
mm.audio.playButton();
this._cb && this._cb(this._dataTransfer);
},
addEventSelect: function(t) {
this._cb = t;
},
eventZalo: function() {
mm.audio.playButton();
null != this._dataTransfer.phone && cc.sys.openURL("https://zalo.me/" + this._dataTransfer.phone);
},
eventFacebook: function() {
mm.audio.playButton();
null != this._dataTransfer.face && cc.sys.openURL(this._dataTransfer.face);
}
});
cc._RF.pop();
}, {} ],
GameVariables: [ function(t, e) {
"use strict";
cc._RF.push(e, "dab1dtwfGhKk75h/GdyA21b", "GameVariables");
var i = {
Poker: {}
};
i.Poker.getChip = function(t) {
return t instanceof SmartFoxSDK.SmartFox.Entities.User && t && t.getVariable("chip") ? t.getVariable("chip").value : 0;
};
i.Poker.getUserJson = function(t) {
return t instanceof SmartFoxSDK.SmartFox.Entities.User ? {
amount: this.getChip(t),
id: t.id,
username: t.username
} : {};
};
i.Poker.getDisplayName = function(t) {
return t instanceof SmartFoxSDK.SmartFox.Entities.User && t && t.getVariable("dn") ? t.getVariable("dn").value : "";
};
i.Poker.getBetChip = function(t) {
return t.getVariable("bet_chip").value;
};
i.Poker.getMinBuyIn = function(t) {
return t.getVariable("min_chip").value;
};
i.Poker.getMaxBuyIn = function(t) {
return t.getVariable("max_chip").value;
};
i.Poker.getNumberDesk = function(t) {
return t.getVariable("number_desk").value;
};
i.getBetChip = function(t) {
return t.getVariable("bet_chip").value;
};
i.getChip = function(t) {
return t instanceof SmartFoxSDK.SmartFox.Entities.User && t && t.getVariable("chip") ? t.getVariable("chip").value : 0;
};
i.getDisplayName = function(t) {
return t instanceof SmartFoxSDK.SmartFox.Entities.User && t && t.getVariable("dn") ? t.getVariable("dn").value : "";
};
i.getAccount = function(t) {
return t instanceof SmartFoxSDK.SmartFox.Entities.User && t && t.getVariable("ac") ? t.getVariable("ac").value : "....";
};
i.setChip = function(t, e) {
if (t && e instanceof SmartFoxSDK.SmartFox.Entities.User) {
var i = new SmartFoxSDK.SmartFox.Entities.Variables.UserVariable("chip", t, SmartFoxSDK.SmartFox.Entities.Variables.VariableType.DOUBLE);
e._setVariable(i);
}
};
window.GameVariables = i;
cc._RF.pop();
}, {} ],
Helper: [ function(t, e) {
"use strict";
cc._RF.push(e, "fd66dMV12lMhaqYMJjnkjMG", "Helper");
function i(t) {
if (t) {
var e = (t = parseInt(t)).toString().split(".");
return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."), e.join(".");
}
return "0";
}
e.exports = {
checkPhoneValid: function(t) {
return /^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|0))[0-9]{7,10}$/im.test(t);
},
nFormatter: function(t, e) {
for (var i = [ {
value: 1e18,
symbol: "E"
}, {
value: 1e15,
symbol: "P"
}, {
value: 1e12,
symbol: "T"
}, {
value: 1e9,
symbol: "G"
}, {
value: 1e6,
symbol: "M"
}, {
value: 1e3,
symbol: "k"
} ], n = /\.0+$|(\.[0-9]*[1-9])0+$/, s = 0; s < i.length; s++) if (t >= i[s].value) return (t / i[s].value).toFixed(e).replace(n, "$1") + i[s].symbol;
return t.toFixed(e).replace(n, "$1");
},
numberWithCommas: i,
isEmpty: function(t) {
return !t || 0 === t.length;
},
getOnlyNumberInString: function(t) {
var e = t.match(/\d+/g);
return e ? e.join("") : "";
},
numberPad: function(t, e) {
for (var i = "" + t; i.length < e; ) i = "0" + i;
return i;
},
inputNumber: function(t) {
var e = !1;
t.addEventListener("keydown", function(t) {
if (16 === t.keyCode) {
t.preventDefault();
e = !0;
}
});
t.addEventListener("keyup", function(t) {
if (16 === t.keyCode) {
t.preventDefault();
e = !1;
}
});
t.addEventListener("keydown", function(t) {
!e && (t.keyCode >= 48 && t.keyCode <= 57 || t.keyCode >= 96 && t.keyCode <= 105 || t.keyCode >= 37 && t.keyCode <= 40 || 107 === t.keyCode || 109 === t.keyCode || 189 === t.keyCode || 8 === t.keyCode || 13 === t.keyCode) || t.preventDefault();
});
},
anPhanTram: function(t, e, i, n) {
void 0 === n && (n = !1);
var s = n ? v1 : t;
return t * e - Math.ceil(s * i / 100);
},
numberTo: function(t, e, n, s, o, a) {
void 0 === o && (o = !1);
clearInterval(t.timer);
var c = n - e;
0 == c && (c = 1);
var r = Math.abs(Math.floor(s / c));
r = Math.max(r, 10);
var h = new Date().getTime() + s;
t.timer = setInterval(function() {
if (t.node) {
var e = new Date().getTime(), r = Math.max((h - e) / s, 0), l = n - r * c >> 0;
t.string = o ? i(l) : l;
if (l == n) {
a && a();
clearInterval(t.timer);
}
} else clearInterval(t.timer);
}, r);
},
getStringDateByTime: function(t) {
var e = new Date(t), i = e.getHours(), n = e.getMinutes(), s = e.getDate(), o = e.getMonth() + 1;
return i < 10 && (i = "0" + i), n < 10 && (n = "0" + n), s < 10 && (s = "0" + s), 
o < 10 && (o = "0" + o), i + ":" + n + " " + s + "/" + o + "/" + e.getFullYear();
},
getStringHourByTime: function(t) {
var e = new Date(t), i = e.getHours(), n = e.getMinutes(), s = e.getSeconds();
return i < 10 && (i = "0" + i), n < 10 && (n = "0" + n), s < 10 && (s = "0" + s), 
i + ":" + n + ":" + s;
},
numberToTime: function(t) {
t < 0 && (t = 0), t = parseInt(t);
var e = parseInt(t / 60), i = t % 60;
return e < 10 && (e = "0" + e), i < 10 && (i = "0" + i), e + ":" + i;
},
validateEmail: function(t) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t);
},
addZero10: function(t) {
t < 10 && (t = "0" + t);
return t;
},
setMaterialGray: function(t, e) {
e ? t.setMaterial(0, cc.MaterialVariant.createWithBuiltin(cc.Material.BUILTIN_NAME.GRAY_SPRITE)) : t.setMaterial(0, cc.MaterialVariant.createWithBuiltin(cc.Material.BUILTIN_NAME.SPRITE));
},
isMaterialGray: function(t) {
return t.getMaterial(0)._effectAsset.name.indexOf(cc.Material.BUILTIN_NAME.GRAY_SPRITE) < 0;
}
};
cc._RF.pop();
}, {} ],
HoiXoayServer: [ function(t, e) {
"use strict";
cc._RF.push(e, "a142cODeUJKKpMqkzrJRf9P", "HoiXoayServer");
var i = JSON.stringify({
packageUrl: "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/",
remoteManifestUrl: "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/project.manifest",
remoteVersionUrl: "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/version.manifest",
version: "1.10",
assets: {
"src/cocos2d-jsb.js": {
size: 3341465,
md5: "fafdde66bd0a81d1e096799fb8b7af95"
},
"src/project.dev.js": {
size: 97814,
md5: "ed7f5acd411a09d4d298db800b873b00"
},
"src/settings.js": {
size: 3849,
md5: "deb03998a4cfb8f8b468fba8575cb1c9"
},
"res/import/03/0379fb962.json": {
size: 1107,
md5: "d102d0f14ed6b6cb42cc28d88b3b9069"
},
"res/import/0c/0cd5de143.json": {
size: 80883,
md5: "f06347880038a1381043ed505d6f8a9a"
},
"res/import/0d/0d756af45.json": {
size: 10137,
md5: "02dc8b795e79b9fd62e00d4a2c70c8c1"
},
"res/import/0d/0dc6a4e59.json": {
size: 14970,
md5: "a500f696892df6869341dff5f31b1a33"
},
"res/import/41/4128b78b-00ae-4d8a-ae35-4e5ca5c5cde9.json": {
size: 76,
md5: "3f79d93ce8d42b186ecd43d868c8d023"
},
"res/import/49/49539cb0-3893-459a-b310-7cc1b7f6d335.json": {
size: 72,
md5: "8a36388cda7c3773b5bf7a53d8824535"
},
"res/import/9e/9e2ae507-fae5-4511-940b-f2e46f81b790.json": {
size: 74,
md5: "98f6b1d93a4ee3a1f2074be9ce00fbb2"
},
"res/raw-assets/0e/0ed8cf6e-8c04-4569-8d17-626a26e1099f.png": {
size: 4665,
md5: "9e8bf9af30ac7a9ea9d3b72f37a193e1"
},
"res/raw-assets/13/137d1ca6-e90c-440b-9fa2-4b9ffff569f7.png": {
size: 1627,
md5: "75060291e24294abd6a52553fa22317e"
},
"res/raw-assets/15/15d5f3f0-f965-4c00-945b-d2c8faee78b6.png": {
size: 3840,
md5: "cb525edab8063a845e6bd1e9d29b8cde"
},
"res/raw-assets/19/19509bb1-dc08-4cbf-ab8f-2460e207265c.png": {
size: 9638,
md5: "6e159c9cc1b971d3921bc8908071a70b"
},
"res/raw-assets/26/26e9a867-3d2f-4981-8a33-82d440de7aff.png": {
size: 6417,
md5: "5c139729708dd26bd461bcd3e8201823"
},
"res/raw-assets/2d/2ddfe005-2129-41d8-aeec-2b1f51f02962.png": {
size: 2290,
md5: "874dccfd88108a9f0188bda59c5df183"
},
"res/raw-assets/34/3459ab36-782c-4c4e-8aef-7280aff8b272.png": {
size: 18969,
md5: "3a810a636f3779b357e854155eafa4b6"
},
"res/raw-assets/36/36b6ea73-ff48-430e-a0c7-0e5e8defe341.png": {
size: 2711,
md5: "e64625aeb59a1de225e718a7126634ad"
},
"res/raw-assets/39/394bac82-54fb-472f-a27f-b5107821bfb8.png": {
size: 1641,
md5: "049d2201d7d99fc6dbdb017d8d8bd9b8"
},
"res/raw-assets/3c/3cedb8b4-8532-4037-a00e-b8d3e0013158.png": {
size: 94313,
md5: "a2e763866c1bdd6b189be69f3d37eedd"
},
"res/raw-assets/41/4128b78b-00ae-4d8a-ae35-4e5ca5c5cde9.manifest": {
size: 6358,
md5: "c1d18879851e567545ea04bf135a325f"
},
"res/raw-assets/49/49539cb0-3893-459a-b310-7cc1b7f6d335.mp3": {
size: 971644,
md5: "f45ec6666f06b729d8c0461bc89d4b94"
},
"res/raw-assets/4e/4e06c7f1-72ac-4e4e-90de-683e16905156.png": {
size: 2406,
md5: "5f0c28e0eed7ec0cb75e45f5937dd7c6"
},
"res/raw-assets/50/50da5486-dfa1-46d2-9d4f-686eb5527c1a.png": {
size: 6911,
md5: "51cf32529c923146f06019a58398c98d"
},
"res/raw-assets/52/5245e25c-010c-45fb-84a3-f3bce95793e7.png": {
size: 3963,
md5: "0f050ba45e09986b3d785b7b23ffcc1e"
},
"res/raw-assets/6d/6de06a23-d0de-4766-a9e1-a0314136d62e.png": {
size: 10878,
md5: "9f89eec7a1b0f615a3c1bab0857aefff"
},
"res/raw-assets/70/700faa17-11a6-46cd-aeb5-d6900bc264f8.png": {
size: 3765,
md5: "878e89a0a3e02b13beee9f3274f2ca39"
},
"res/raw-assets/71/71561142-4c83-4933-afca-cb7a17f67053.png": {
size: 1050,
md5: "c06a93f5f1a8a1c6edc4fd8b52e96cbf"
},
"res/raw-assets/80/8071df9d-029b-40e8-98f3-8eab08dbf6ca.png": {
size: 25205,
md5: "f688777a92fba11bfe85c3061a4476e5"
},
"res/raw-assets/82/82fe58d4-ae13-4806-9a41-2e73902ea811.png": {
size: 24298,
md5: "b807df8ffcb540f3dd20db75ac95b73b"
},
"res/raw-assets/83/83cc2086-d713-47a0-8d86-a8d6068b6258.png": {
size: 3782,
md5: "9827ce705349caa604e1aba1d53b0fd9"
},
"res/raw-assets/96/96e3e293-4e36-426d-a0a6-eb8d025c0d5b.png": {
size: 15379,
md5: "d6ce47aed38348a1ea0f003fa0063079"
},
"res/raw-assets/97/97a6316c-7fcb-4ffe-9045-35625bc6abf6.png": {
size: 2187,
md5: "f3f41b4c0783a751e561f1b84d91a70b"
},
"res/raw-assets/97/97bb9c9c-5568-4419-af04-4ed5a2969a02.png": {
size: 10370,
md5: "48ab94f1c34b0e9a047297cab1aeabc4"
},
"res/raw-assets/99/99170b0b-d210-46f1-b213-7d9e3f23098a.png": {
size: 1177,
md5: "d1118d133683bb4227d5e60c79c846b7"
},
"res/raw-assets/99/99acc716-33df-4c4c-879d-cc3407f0cd8c.png": {
size: 9754,
md5: "23e7221934021f3fbe6c6a52b023ded8"
},
"res/raw-assets/9e/9e2ae507-fae5-4511-940b-f2e46f81b790.mp3": {
size: 3179,
md5: "90d17b1a25200c90e292d9a3748c9fec"
},
"res/raw-assets/ac/ac11439d-3758-49f5-8728-81ed22c1ed96.png": {
size: 11935,
md5: "c20ae4a74c42b2aed28bb8c9247eb5d5"
},
"res/raw-assets/ae/ae4e2188-2b7b-42a9-85e1-8fb987600b04.png": {
size: 634171,
md5: "07b03f7145b75579708ae05ea2a2c029"
},
"res/raw-assets/af/afe329a6-e85e-46a0-98ed-8a34e128907b.png": {
size: 2209,
md5: "30ae2fe844c7c53f1d00291051230607"
},
"res/raw-assets/b2/b2037f34-04ff-4351-b9da-5be4bb557017.png": {
size: 1530,
md5: "bb96dacb8b09e0443d83462cc7b20095"
},
"res/raw-assets/b4/b43ff3c2-02bb-4874-81f7-f2dea6970f18.png": {
size: 1114,
md5: "83fcc9912e01ae5411c357651fb8b1cf"
},
"res/raw-assets/c3/c39ea496-96eb-4dc5-945a-e7c919b77c21.png": {
size: 2548,
md5: "ae7a04af25e238a5478170759b55a7ba"
},
"res/raw-assets/ca/caaaf9ff-5036-4232-a8a7-88b80b2e4c88.png": {
size: 1829,
md5: "94d761c4626df88053787f17fa09914d"
},
"res/raw-assets/ca/cacafa85-d8e9-4716-bcdb-7eba457e409c.png": {
size: 7380,
md5: "e6bb0f4d041257653f07da2dfe1edd09"
},
"res/raw-assets/ce/ce6d2de9-7056-4ba8-a1b1-40b00bb6f469.png": {
size: 10982,
md5: "52aa0df577edafe11de1cfdb44422895"
},
"res/raw-assets/cf/cfef78f1-c8df-49b7-8ed0-4c953ace2621.png": {
size: 1140,
md5: "a4b5953dffeb145b4b70072d91c4052b"
},
"res/raw-assets/d5/d5dfe6a8-eb19-4aae-a74f-83b71eaa57dc.png": {
size: 8755,
md5: "aeb1055ced334ce20fe030579e187494"
},
"res/raw-assets/da/da3e556f-1bce-4c31-87dc-897ea2d788e2.png": {
size: 11636,
md5: "d81124346c110eb1377f7b56346b31e4"
},
"res/raw-assets/e8/e851e89b-faa2-4484-bea6-5c01dd9f06e2.png": {
size: 1082,
md5: "90cf45d059d0408bec327f66eae5764c"
},
"res/raw-assets/ec/ec244ee5-6f1f-4920-9b69-d4df0e78ec2d.png": {
size: 55581,
md5: "68fdff7430b1b02f3a6e76bea92c6372"
},
"res/raw-assets/fc/fccc4d85-6ad4-496d-9b33-ea76e69da132.png": {
size: 82257,
md5: "df4359cdcb956f52f2e5b4ef777bbb7d"
}
},
searchPaths: []
});
cc.Class({
extends: cc.Component,
properties: {
manifestUrl: {
type: cc.Asset,
default: null
},
processLoad: cc.ProgressBar,
lbLoading: cc.Label,
lbUpdate: cc.Label,
_updating: !1,
_canRetry: !1,
_storagePath: "",
_addEventFinish: null
},
checkCb: function(t) {
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
break;

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this.processLoad.progress = 0;
this.lbLoading.string = "Đang cập nhật tài nguyên!";
break;

default:
return;
}
this._am.setEventCallback(null);
this._checkListener = null;
this._updating = !1;
},
updateCb: function(t) {
var e = !1, i = !1;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
var n = parseFloat(t.getPercent());
if (!isNaN(n)) {
this.processLoad.progress = n;
this.lbLoading.string = Math.floor(100 * n) + "%";
}
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
i = !0;
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
e = !0;
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
this._updating = !1;
this._canRetry = !0;
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
case jsb.EventAssetsManager.ERROR_DECOMPRESS:
}
if (i) {
this._am.setEventCallback(null);
this._updateListener = null;
this._updating = !1;
this._addEventFinish && this._addEventFinish();
}
if (e) {
this._am.setEventCallback(null);
this._updateListener = null;
var s = jsb.fileUtils.getSearchPaths(), o = this._am.getLocalManifest().getSearchPaths();
Array.prototype.unshift.apply(s, o);
cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(s));
jsb.fileUtils.setSearchPaths(s);
cc.audioEngine.stopAll();
cc.game.restart();
}
},
loadCustomManifest: function() {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = new jsb.Manifest(i, this._storagePath);
this._am.loadLocalManifest(t, this._storagePath);
}
},
retry: function() {
if (!this._updating && this._canRetry) {
this._canRetry = !1;
this._am.downloadFailedAssets();
}
},
checkUpdate: function() {
if (!this._updating) {
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var t = this.manifestUrl.nativeUrl;
cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
this._am.loadLocalManifest(t);
}
if (this._am.getLocalManifest() && this._am.getLocalManifest().isLoaded()) {
this._am.setEventCallback(this.checkCb.bind(this));
this._am.checkUpdate();
this._updating = !0;
}
}
},
hotUpdate: function(t) {
this.lbUpdate.string = "Cập nhật phiên bản mới!";
this._am && this._updating;
if (this._am && !this._updating) {
this._am.setEventCallback(this.updateCb.bind(this));
if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
var e = this.manifestUrl.nativeUrl;
cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e));
this._am.loadLocalManifest(e);
}
this._failCount = 0;
this._am.update();
this._updating = !0;
}
this._addEventFinish = t;
},
onLoad: function() {
if (cc.sys.isNative) {
this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
this.versionCompareHandle = function(t, e) {
for (var i = t.split("."), n = e.split("."), s = 0; s < i.length; ++s) {
var o = parseInt(i[s]), a = parseInt(n[s] || 0);
if (o !== a) return o - a;
}
return n.length > i.length ? -1 : 0;
};
this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
this._am.setVerifyCallback(function(t, e) {
e.compressed, e.md5, e.path, e.size;
return !0;
});
cc.sys.os === cc.sys.OS_ANDROID && this._am.setMaxConcurrentTask(2);
}
},
onDestroy: function() {
if (this._updateListener) {
this._am.setEventCallback(null);
this._updateListener = null;
}
}
});
cc._RF.pop();
}, {} ],
HttpHandler: [ function(t, e) {
"use strict";
cc._RF.push(e, "4d3fdjNiy1MuJDz4nNlTq/0", "HttpHandler");
var i = {
get: function(t, e) {
var i = new XMLHttpRequest();
i.onreadystatechange = function() {
if (4 == i.readyState && i.status >= 200 && i.status < 400) {
var t = i.responseText;
e && e(t);
}
};
i.open("GET", t, !0);
i.send();
},
post: function(t, e, i) {
console.log(t);
var n = cc.loader.getXMLHttpRequest();
n.open("POST", t, !0);
n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
n.onreadystatechange = function() {
if (4 == n.readyState && n.status >= 200 && n.status < 400) {
var t = JSON.parse(n.responseText);
i && i(t);
}
};
n.send(JSON.stringify(e));
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
HuLobby: [ function(t, e) {
"use strict";
cc._RF.push(e, "58b69emvVtCYYFPfXmaEGra", "HuLobby");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
content: cc.Node,
betLevel: "1l"
},
onLoad: function() {
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
updateJackpot: function() {
for (var t = 0; t < this.content._children.length; t++) {
var e = this.content._children[t], i = e.name + this.betLevel;
if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
var n = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(i);
if (n) {
var s = e.getChildByName("lb_money").getComponent(cc.Label), o = n.value, a = s.string;
a = a.split(".").join("");
var c = parseFloat(a);
Utils.numberTo(s, c, o, 1e3, !0);
}
}
}
},
eventToggleBetMoney: function(t) {
this.betLevel = t.node.name;
this.updateJackpot();
mm.audio.playButton();
}
});
cc._RF.pop();
}, {} ],
ItemCard: [ function(t, e) {
"use strict";
cc._RF.push(e, "7b49duTY1pDE6YIxipMMAVO", "ItemCard");
cc.Class({
extends: cc.Component,
properties: {
_isSelected: !1,
bg: cc.Node,
_card: null,
_cbSelect: null,
_removeSelect: !0
},
onLoad: function() {},
addEventSelect: function(t) {
this._cbSelect = t;
},
isSelected: function() {
return this._isSelected;
},
getCard: function() {
return this._card;
},
setCard: function(t) {
this._card = t;
},
loadCardBack: function(t) {
Utils.loadRes(this.bg.getComponent(cc.Sprite), "images/baccarat/cards/card_up", function() {
t && t();
});
},
_loadCard: function() {
Utils.loadRes(this.bg.getComponent(cc.Sprite), "images/baccarat/cards/" + this._card.nameFile);
},
init: function(t, e) {
this.node.active = !0;
if (null == t) this.loadCardBack(); else {
this._card = t;
this._removeSelect = null == e || e;
this._loadCard();
}
},
reveal: function(t, e, i) {
this.node.active = !0;
this.loadCardBack();
this._card = t;
var n = this, s = cc.callFunc(function() {
n._loadCard();
n.node.skewY = e ? 45 : 170;
});
if (e) {
n.node.skewY = 180;
var o = cc.skewBy(.225, 0, -35), a = cc.skewTo(.225, 0, 0);
n.node.runAction(cc.sequence(cc.delayTime(1), o, s, a, cc.delayTime(.5), cc.callFunc(function() {
i && i();
})));
} else {
n.node.skewY = 0;
var c = cc.skewBy(.225, 0, 10), r = cc.skewTo(.225, 0, 180);
n.node.runAction(cc.sequence(cc.delayTime(1), c, s, r, cc.delayTime(.5), cc.callFunc(function() {
i && i();
})));
}
},
switchCard: function(t) {
var e = this, i = cc.callFunc(function() {
e._loadCard();
e.node.skewY = t ? 45 : 170;
});
e.node.skewY = 0;
var n = cc.skewBy(.225, 0, 10), s = cc.skewTo(.225, 0, 180);
e.node.runAction(cc.sequence(n, i, s));
if (t) {
e.node.skewY = 180;
var o = cc.skewBy(.225, 0, -35), a = cc.skewTo(.225, 0, 0);
e.node.runAction(cc.sequence(o, i, a));
} else {
e.node.skewY = 0;
var c = cc.skewBy(.225, 0, 10), r = cc.skewTo(.225, 0, 180);
e.node.runAction(cc.sequence(c, i, r));
}
},
reset: function() {
this.loadCardBack();
this.node._zIndex = 0;
this.node.x = 0;
this.node.y = 0;
this._isSelected = !1;
this._card = null;
this._cbSelect = null;
this._removeSelect = !0;
},
eventSelect: function() {
mm.audio.playButton();
if (!this._removeSelect) if (this._isSelected) {
this._isSelected = !1;
this.node.y = this.node.y - 20;
} else {
this._isSelected = !0;
this.node.y = this.node.y + 20;
this._cbSelect && this._cbSelect(this.getCard().id);
}
},
setScaleCard: function(t) {
this.node.width *= t;
this.node.height *= t;
}
});
cc._RF.pop();
}, {} ],
ItemChat: [ function(t, e) {
"use strict";
cc._RF.push(e, "d572aGqd6RC44iX8j0ivaRH", "ItemChat");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
contentText: cc.RichText
},
init: function(t) {
"ADMIN" == t.dataSender.dn || "CSKH-Van-Hanh" == t.dataSender.dn || "test102" == t.dataSender.dn ? this.contentText.string = "<color=#00FF1F><b>" + t.dataSender.dn + "</b><br/></c><color=#FF0000><b>" + t.msg + "</b></color>" : this.contentText.string = "<color=#FBD200>" + t.dataSender.dn + ": </color>" + t.msg;
}
});
cc._RF.pop();
}, {} ],
ItemGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "ca997PrFhBFx7VjlAa/P1+c", "ItemGame");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
Icon: cc.Sprite
},
init: function() {}
});
cc._RF.pop();
}, {} ],
ItemRoom: [ function(t, e) {
"use strict";
cc._RF.push(e, "2804danCAZFh5fUBwb8be85", "ItemRoom");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
Id: cc.Label,
Bet: cc.Label,
Players: cc.Label
},
init: function(t) {
this.Bet.string = Utils.formatCurrency(t.group_vars.bet_chip);
}
});
cc._RF.pop();
}, {} ],
ItemRouletteRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "09f27lk1eZGrYdg3z8e0Zpv", "ItemRouletteRank");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
listRank: [ cc.SpriteFrame ],
spRank: cc.Sprite,
lbRank: cc.Label,
lbName: cc.Label,
lbWin: cc.Label
},
init: function(t, e) {
if (e < 3) {
this.spRank.node.active = !0;
this.lbRank.node.active = !1;
this.spRank.spriteFrame = this.listRank[e];
} else {
this.spRank.node.active = !1;
this.lbRank.node.active = !0;
this.lbRank.string = e + 1;
}
this.lbName.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
ItemRouletteTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "73dffsApsVOsbB18KNzdG1T", "ItemRouletteTransaction");
var i = [ "EVEN", "ODD", "RED", "BLACK", "1-18", "19-36", "1-12", "13-24", "25-36", "1SD", "2ND", "3RD" ];
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbBet: cc.Label,
lbResult: cc.Label,
lbBetValue: cc.Label,
lbRefund: cc.Label,
lbWin: cc.Label
},
init: function(t) {
this.lbSession.string = "#" + t.session;
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
this.lbWin.string = Utils.addDotToNumber(parseFloat(t.prizePot).toFixed(0));
this.lbBet.string = this.getTypePot(t.typePot);
this.lbBetValue.string = Utils.addDotToNumber(parseFloat(t.betPot).toFixed(0));
this.lbResult.string = t.result;
this.lbRefund.string = "0";
},
getTypePot: function(t) {
return t > 36 ? i[t % 37] : t;
}
});
cc._RF.pop();
}, {} ],
JackPotIcon: [ function(t, e) {
"use strict";
cc._RF.push(e, "3b47dtdF61EAYm1JNHgq0UZ", "JackPotIcon");
cc.Class({
extends: cc.Component,
properties: {
arr_lb_hu: {
type: cc.Label,
default: []
},
game: "kimcuong"
},
onLoad: function() {
var t = Math.floor(3 * Math.random()) + 1;
this.schedule(this.updateJackpot, t);
this.updateJackpot();
},
updateJackpot: function() {
for (var t = [ "1l", "1k", "10k" ], e = [], i = 0; i < t.length; i++) e[i] = this.game + t[i];
for (var n = 0; n < e.length; n++) {
var s = Math.floor(2 * Math.random());
if (SmartFoxSDK.PortalController.ZoneInstance.mySelf && 0 == s) {
var o = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(e[n]);
if (o) {
var a = o.value, c = this.arr_lb_hu[n], r = c.string;
r = r.split(".").join("");
var h = parseFloat(r);
Utils.numberTo(c, h, a, 1e3, !0);
}
}
}
}
});
cc._RF.pop();
}, {} ],
KimCuongController: [ function(t, e) {
"use strict";
cc._RF.push(e, "ed5f9lRH0tI7aSBBqX2nrlb", "KimCuongController");
var i = t("KimCuongEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventRoomJoin: function(t) {
this._super(t);
UIManger.show("UIKimCuongLobby", {
pop: !0,
src: "kimcuong"
});
},
onUserVariablesUpdate: function(t) {
this._super(t);
null != this.getUI() && this.getUI().updateUserVariableSlot(t);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id").toFixed(0);
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.resultMap = s.getByteArray("rs");
o.linewin = s.getByteArray("lw");
i.push(o);
}
UIManger.show("UIKimCuongHistoryTransaction", {
pop: !0,
src: "kimcuong",
data: {
items: i
}
});
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n + 1;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
UIManger.show("UIKimCuongRank", {
pop: !0,
src: "kimcuong",
data: {
items: i
}
});
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
}
},
onUserResultEvent: function(t) {
var e = new i.ResultEvent().fromEvent(t);
this.getUI().KimCuongRun(e);
}
}), s = null;
SmartFoxSDK.KimCuongController = e.exports = function() {
null == s && (s = new n("UIKimCuong", "kimcuong"));
return s;
}();
cc._RF.pop();
}, {
KimCuongEvent: "KimCuongEvent"
} ],
KimCuongEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "b10450FXRFEfadZP6AM2J3S", "KimCuongEvent");
var i = {
RESPONSE_NAME: {
RESULT_RES: "vqv2",
FREE_DAILY_RES: "vqv3",
MINIMIZE_RES: "vqv4",
AUTO_PLAY_RES: "vqv5",
STOP_AUTO_PLAY_RES: "vqv6"
}
};
i.ResultEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.RESULT_RES);
this.winMoney = 0;
this.freeGift = [];
this.lineWin = [];
this.result = [];
this.session = 0;
this.isFreeSpin = !1;
this.isBonus = !1;
this.freeSpin = 0;
this.type = 0;
this.haiSao = "";
this.ration = 0;
},
fromEvent: function(t) {
this.winMoney = t.getDouble("w");
this.lineWin = t.getIntArray("lw");
this.result = t.getIntArray("r");
this.session = t.getDouble("id");
this.isFreeSpin = t.getBool("fr");
this.freeSpin = t.getByte("ra");
this.type = t.getByte("rs");
this.haiSao = t.getUtfString("hs");
2 == this.type && (this.isThangLon = !0);
3 == this.type && (this.isNohu = !0);
4 == this.type && (this.isNohuX2 = !0);
if (5 == this.type) {
this.isBonus = !0;
for (var e = 1; e < this.haiSao.length; e += 2) this.freeGift.push(this.haiSao[e]);
}
return this;
}
});
window.KimCuongEvent = e.exports = i;
cc._RF.pop();
}, {} ],
KimCuongItemBonus: [ function(t, e) {
"use strict";
cc._RF.push(e, "8a106YLJi9FCa97JicRgEvS", "KimCuongItemBonus");
cc.Class({
extends: cc.Component,
properties: {
lbMoney: cc.Label,
spItem: sp.Skeleton
},
init: function() {}
});
cc._RF.pop();
}, {} ],
KimCuongItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "8f6329kwd5Csolzwm16hVvf", "KimCuongItem");
cc.Class({
extends: cc.Component,
properties: {},
init: function(t, e) {
this.node.children[e].active = !0;
},
stop: function() {},
random: function() {
var t = ~~(7 * Math.random());
this.setIcon(t);
return t;
},
setIcon: function(t, e) {
void 0 === e && (e = !1);
Promise.all(this.node.children.map(function(t) {
t.active = !1;
}));
this.node.children[t].active = !0;
e && (this.data = t);
}
});
cc._RF.pop();
}, {} ],
KimCuongLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "c7ab4ZKDyRDl79N2prVTU4i", "KimCuongLine");
var i = t("Helper");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: cc.Node,
typeLine: 0
},
init: function(t) {
this.KCV = t;
this.eventSelectAll();
},
eventOpen: function() {
this.node.active = !0;
},
eventClose: function() {
var t = this.getTotalLineSelect();
this.node.active && t < 1 ? this.KCV.addNotice("Chọn ít nhất 1 dòng") : this.node.active = !1;
},
eventSelect: function(t, e) {
var n = parseInt(e);
i.setMaterialGray(t.target.getComponent(cc.Sprite), i.isMaterialGray(t.target.getComponent(cc.Sprite)));
this.data[n] = i.isMaterialGray(t.target.getComponent(cc.Sprite));
this.updateString();
this.typeLine = 3;
},
eventBoChon: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !0);
return !1;
})).then(function(e) {
t.data = e;
t.typeLine = -1;
t.updateString();
});
},
eventSelectChan: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 1);
return e % 2 != 1;
})).then(function(e) {
t.data = e;
t.typeLine = 2;
t.updateString();
});
},
eventSelectLe: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 0);
return e % 2 != 0;
})).then(function(e) {
t.data = e;
t.typeLine = 1;
t.updateString();
});
},
eventSelectAll: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !1);
return !0;
})).then(function(e) {
t.typeLine = 0;
t.data = e;
t.updateString();
});
},
updateString: function() {
var t = this.getTotalLineSelect();
this.KCV.setNumberLines(t);
this.KCV.setNumberStake(t);
},
getTotalLineChan: function() {
return 10;
},
getTotalLineLe: function() {
return 10;
},
getTotalLine: function() {
return 20;
},
getTotalLineSelect: function() {
for (var t = 0, e = 1; e < this.data.length; e++) this.data[e] && t++;
return t;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
KimCuongMainLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "6b6c86BbR5MeoSMZRpqF98u", "KimCuongMainLine");
cc.Class({
extends: cc.Component,
init: function(t) {
this.KCV = t;
return this;
},
onEnable: function() {},
onDisable: function() {},
onhover: function() {
this.node.children[0].active = !0;
this.node.children[1].active = !0;
},
offhover: function() {
this.node.children[0].active = !1;
this.node.children[1].active = !1;
},
onEf: function() {
this.onhover();
this.node.pauseSystemEvents(!0);
},
offEf: function() {
this.offhover();
this.node.resumeSystemEvents(!0);
},
offAll: function() {}
});
cc._RF.pop();
}, {} ],
KimCuongRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "1cc7f3nrzZPoZVT5dKl2V8G", "KimCuongRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
bgRank: cc.Node,
lbStt: cc.Label,
lbWin: cc.Label,
lbAccount: cc.Label,
lbTime: cc.Label,
lbDes: cc.Label
},
init: function(t, e) {
this.bgRank.active = t % 2 == 1;
this.lbStt.string = "#" + e.session;
this.lbAccount.string = e.account;
this.lbTime.string = e.time;
this.lbDes.string = e.win_type;
this.lbWin.string = Utils.addDotToNumber(e.win);
}
});
cc._RF.pop();
}, {} ],
KimCuongReel: [ function(t, e) {
"use strict";
cc._RF.push(e, "15db43GnmdNKphB8PmhNtEr", "KimCuongReel");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
onEnable: function() {},
init: function(t, e) {
var i = this;
this.KCV = t;
this.icons = [];
var n = this;
Promise.all(e.map(function(t) {
var e = cc.instantiate(n.KCV.iconPrefab);
n.node.addChild(e);
(e = e.getComponent("KimCuongItem")).init(n.KCV, t);
return e;
})).then(function(t) {
i.icons = t;
});
},
spin: function(t) {
this.node.stopAllActions();
var e = .4, i = 1.8;
if (this.KCV.isFast) {
e = .2;
i = .9;
}
var n = cc.moveTo(i, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(1)), s = cc.callFunc(function() {
0 === t && this.KCV.copy();
this.node.y = 0;
}, this);
if (4 === t) {
var o = cc.callFunc(function() {
this.node.y = 0;
this.KCV.runActionWon();
}, this);
this.node.runAction(cc.sequence(cc.delayTime(t * e), n, o));
} else this.node.runAction(cc.sequence(cc.delayTime(t * e), n, s));
},
stop: function() {
this.node.stopAllActions();
this.KCV.copy();
this.node.y = 0;
}
});
cc._RF.pop();
}, {} ],
KimCuongRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "5f821cNl+lMt4Aq8lDzMbmk", "KimCuongRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "vqv1",
AUTO_PLAY_REQUEST: "vqv5",
STOP_AUTO_PLAY_REQUEST: "vqv6"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.KimCuongController.ZoneInstance.getRoomByName("kimcuong").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t, e) {
this._params.putDouble("b", t);
void 0 !== e && this._params.putUtfString("cheat", e);
return this;
}
});
i.AutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.AUTO_PLAY_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.StopAutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
window.KimCuongRequest = i;
cc._RF.pop();
}, {} ],
KimCuongTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "d1d58QdrrhLVo/dLlWg2cdD", "KimCuongTransactionItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbStakes: cc.Label,
lbWin: cc.Label,
_dataRank: null
},
init: function(t) {
this._dataRank = t;
this.lbSession.string = "#" + t.session;
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
this.lbStakes.string = Utils.addDotToNumber(t.stakes);
this.lbWin.string = Utils.addDotToNumber(t.win);
},
eventDetail: function() {
this.show("UIKimCuongHistoryDetail", {
pop: !0,
src: "kimcuong",
data: this._dataRank
});
}
});
cc._RF.pop();
}, {} ],
KimCuongWinGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "48f05ZuHIZHeI3pfLCV5Lqt", "KimCuongWinGame");
var i, n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbMoneyWin: cc.Label,
BonusFreeSpine: cc.Node,
KimCuongNoHuCoin: cc.Node,
KimCuongThangText: cc.Node,
KimCuongThangLonCoin: cc.Node,
FreeCount: cc.Node,
NumberFreeSpine: cc.Node
},
onLoad: function() {
i = this;
},
init: function(t) {
this.KCV = t;
},
runWinGame: function() {
var t = this.node.getChildByName("bg_all");
t.active = !0;
if (this.KCV.isThangLon && !this.KCV.isNoHu) {
this.KCV.playBigWin();
this.runKimCuongThangLon();
} else if (this.KCV.isNoHu) {
this.KCV.playJackpot();
this.runKimCuongNoHu();
} else if (this.KCV.isFree) this.runFreeSpine(); else if (this.KCV.isBonus) {
this.KCV.playBonus();
this.runBonusSpine();
} else {
console.log("updateFreeSpin");
i.KCV.setMoneyWin(i.KCV.winMoney);
i.updateFreeSpin();
if (this.KCV.winMoney > 0) {
this.KCV.playSpinWin();
this.lbMoneyWin.node.active = !0;
n.numberTo(this.lbMoneyWin, 0, this.KCV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
i.lbMoneyWin.node.active = !1;
t.active = !1;
i.KCV.autoQuay();
}, 1);
});
this.KCV.winMoney = 0;
} else {
t.active = !1;
i.KCV.autoQuay();
}
}
0 == this.KCV.type && this.KCV.playSpinMis();
},
updateFreeSpin: function() {
if (this.KCV.freeSpin < 1) this.FreeCount.active = !1; else {
this.FreeCount.active = !0;
i.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = i.KCV.freeSpin;
}
},
checkRunAgainWin: function() {
(this.KCV.isBonus || this.KCV.winMoney > 0 || this.KCV.isFree || this.KCV.isNoHu || this.KCV.isThangLon || this.KCV.isAuto) && this.runWinGame();
},
runFreeSpine: function() {
this.KCV.isFree = !1;
this.BonusFreeSpine.active = !0;
this.NumberFreeSpine.active = !0;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "FreeSpine", !0);
this.NumberFreeSpine.getChildByName("lb_number_free_spine").getComponent(cc.Label).string = this.KCV.freeSpin;
this.scheduleOnce(function() {
i.node.getChildByName("bg_all").active = !1;
i.BonusFreeSpine.active = !1;
i.NumberFreeSpine.active = !1;
i.FreeCount.active = !0;
i.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = i.KCV.freeSpin;
this.checkRunAgainWin();
}, 3);
},
runBonusSpine: function() {
this.KCV.isBonus = !1;
this.BonusFreeSpine.active = !0;
this.NumberFreeSpine.active = !1;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "Bonusgame", !0);
this.scheduleOnce(function() {
i.BonusFreeSpine.active = !1;
i.show("UIKimCuongBonusGame", {
src: "kimcuong",
pop: !0,
data: i.KCV.freeGift
});
}, 2);
},
runKimCuongNoHu: function() {
this.KCV.isNoHu = !1;
this.KimCuongNoHuCoin.active = !0;
this.KimCuongThangText.active = !0;
this.KimCuongThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", !0);
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, -160));
t.active = !0;
n.numberTo(t.getComponent(cc.Label), 0, this.KCV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 50));
t.runAction(cc.sequence(e, cc.delayTime(1), cc.callFunc(function() {
i.node.getChildByName("bg_all").active = !1;
i.KimCuongNoHuCoin.active = !1;
i.KimCuongThangText.active = !1;
t.active = !1;
i.checkRunAgainWin();
})));
}, 5);
});
},
runKimCuongThangLon: function() {
this.KCV.isThangLon = !1;
this.KimCuongThangLonCoin.active = !0;
this.KimCuongThangText.active = !0;
this.KimCuongThangText.getComponent(sp.Skeleton).setAnimation(0, "ThangLon", !0);
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, -100));
t.active = !0;
n.numberTo(t.getComponent(cc.Label), 0, this.KCV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 50));
t.runAction(cc.sequence(e, cc.delayTime(.5), cc.callFunc(function() {
t.active = !1;
i.node.getChildByName("bg_all").active = !1;
i.KimCuongThangLonCoin.active = !1;
i.KimCuongThangText.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
Listview: [ function(t, e) {
"use strict";
cc._RF.push(e, "89918rG0PdPhYMDa0KzPrcE", "Listview");
var i = cc.Enum({
NODE: 1,
PREFAB: 2
}), n = cc.Enum({
NORMAL: 1,
ADHERING: 2,
PAGE: 3
}), s = cc.Enum({
NONE: 0,
SINGLE: 1,
MULT: 2
});
cc.Class({
extends: cc.Component,
editor: {
disallowMultiple: !1,
menu: "Custom component / List",
requireComponent: cc.ScrollView,
executionOrder: -5e3
},
properties: {
templateType: {
default: i.NODE,
type: i
},
tmpNode: {
default: null,
type: cc.Node,
tooltip: !1,
visible: function() {
var t = this.templateType == i.NODE;
t || (this.tmpNode = null);
return t;
}
},
tmpPrefab: {
default: null,
type: cc.Prefab,
tooltip: !1,
visible: function() {
var t = this.templateType == i.PREFAB;
t || (this.tmpPrefab = null);
return t;
}
},
_slideMode: 1,
slideMode: {
type: n,
tooltip: !1,
get: function() {
return this._slideMode;
},
set: function(t) {
null != t && (this._slideMode = t);
}
},
pageDistance: {
default: .3,
type: cc.Float,
range: [ 0, 1, .1 ],
tooltip: !1,
slide: !0,
visible: function() {
return this._slideMode == n.PAGE;
}
},
pageChangeEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var t = this._slideMode == n.PAGE;
t || (this.pageChangeEvent = null);
return t;
}
},
_virtual: !0,
virtual: {
tooltip: !1,
get: function() {
return this._virtual;
},
set: function(t) {
null != t && (this._virtual = t);
0 != this._numItems && this._onScrolling();
}
},
cyclic: {
default: !1,
tooltip: !1,
visible: function() {
var t = this.virtual && this.slideMode == n.NORMAL;
t || (this.cyclic = !1);
return t;
}
},
lackCenter: {
default: !1,
tooltip: !1,
visible: function() {
return this.virtual;
}
},
lackSlide: {
default: !1,
tooltip: !1,
visible: function() {
var t = this.virtual && !this.lackCenter;
t || (this.lackSlide = !1);
return t;
}
},
_updateRate: 0,
updateRate: {
type: cc.Integer,
range: [ 0, 6, 1 ],
tooltip: !1,
slide: !0,
get: function() {
return this._updateRate;
},
set: function(t) {
t >= 0 && t <= 6 && (this._updateRate = t);
}
},
frameByFrameRenderNum: {
default: 0,
type: cc.Integer,
range: [ 0, 12, 1 ],
tooltip: !1,
slide: !0
},
renderEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1
},
selectedMode: {
default: s.NONE,
type: s,
tooltip: !1
},
repeatEventSingle: {
default: !1,
tooltip: !1,
visible: function() {
return this.selectedMode == s.SINGLE;
}
},
selectedEvent: {
default: null,
type: cc.Component.EventHandler,
tooltip: !1,
visible: function() {
var t = this.selectedMode > 0;
t || (this.selectedEvent = null);
return t;
}
},
_selectedId: -1,
selectedId: {
visible: !1,
get: function() {
return this._selectedId;
},
set: function(t) {
var e, i = this;
switch (i.selectedMode) {
case s.SINGLE:
if (!i.repeatEventSingle && t == i._selectedId) return;
e = i.getItemByListId(t);
i._selectedId >= 0 ? i._lastSelectedId = i._selectedId : i._lastSelectedId = null;
i._selectedId = t;
e && (e.listItem.selected = !0);
if (i._lastSelectedId >= 0 && i._lastSelectedId != i._selectedId) {
var n = i.getItemByListId(i._lastSelectedId);
n && (n.listItem.selected = !1);
}
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems);
break;

case s.MULT:
if (!(e = i.getItemByListId(t))) return;
i._selectedId >= 0 && (i._lastSelectedId = i._selectedId);
i._selectedId = t;
var o = !e.listItem.selected;
e.listItem.selected = o;
var a = i.multSelected.indexOf(t);
o && a < 0 ? i.multSelected.push(t) : !o && a >= 0 && i.multSelected.splice(a, 1);
i.selectedEvent && cc.Component.EventHandler.emitEvents([ i.selectedEvent ], e, t % this._actualNumItems, null == i._lastSelectedId ? null : i._lastSelectedId % this._actualNumItems, o);
}
}
},
_numItems: {
default: 0,
serializable: !1
},
numItems: {
visible: !1,
get: function() {
return this._actualNumItems;
},
set: function(t) {
var e = this;
if (e.checkInited()) if (null == t || t < 0) cc.error("numItems set the wrong::", t); else {
e._actualNumItems = e._numItems = t;
e._forceUpdate = !0;
if (e._virtual) {
e._resizeContent();
e.cyclic && (e._numItems = e._cyclicNum * e._numItems);
e._onScrolling();
e.frameByFrameRenderNum || e.slideMode != n.PAGE || (e.curPageNum = e.nearestListId);
} else {
var i = e.content.getComponent(cc.Layout);
i && (i.enabled = !0);
e._delRedundantItem();
e.firstListId = 0;
if (e.frameByFrameRenderNum > 0) {
for (var s = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum, o = 0; o < s; o++) e._createOrUpdateItem2(o);
if (e.frameByFrameRenderNum < e._numItems) {
e._updateCounter = e.frameByFrameRenderNum;
e._updateDone = !1;
}
} else {
for (var a = 0; a < t; a++) e._createOrUpdateItem2(a);
e.displayItemNum = t;
}
}
}
}
}
},
onLoad: function() {
this._init();
},
onDestroy: function() {
var t = this;
t._itemTmp && t._itemTmp.isValid && t._itemTmp.destroy();
t.tmpNode && t.tmpNode.isValid && t.tmpNode.destroy();
for (;t._pool.size(); ) t._pool.get().destroy();
},
onEnable: function() {
this._registerEvent();
this._init();
},
onDisable: function() {
this._unregisterEvent();
},
_registerEvent: function() {
var t = this;
t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0);
t.node.on("touch-up", t._onTouchUp, t, !0);
t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0);
t.node.on("scroll-began", t._onScrollBegan, t, !0);
t.node.on("scroll-ended", t._onScrollEnded, t, !0);
t.node.on("scrolling", t._onScrolling, t, !0);
t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
},
_unregisterEvent: function() {
var t = this;
t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0);
t.node.off("touch-up", t._onTouchUp, t, !0);
t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0);
t.node.off("scroll-began", t._onScrollBegan, t, !0);
t.node.off("scroll-ended", t._onScrollEnded, t, !0);
t.node.off("scrolling", t._onScrolling, t, !0);
t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
},
_init: function() {
var t = this;
if (!t._inited) {
t._scrollView = t.node.getComponent(cc.ScrollView);
t.content = t._scrollView.content;
if (t.content) {
t._layout = t.content.getComponent(cc.Layout);
t._align = t._layout.type;
t._resizeMode = t._layout.resizeMode;
t._startAxis = t._layout.startAxis;
t._topGap = t._layout.paddingTop;
t._rightGap = t._layout.paddingRight;
t._bottomGap = t._layout.paddingBottom;
t._leftGap = t._layout.paddingLeft;
t._columnGap = t._layout.spacingX;
t._lineGap = t._layout.spacingY;
t._colLineNum;
t._verticalDir = t._layout.verticalDirection;
t._horizontalDir = t._layout.horizontalDirection;
t.setTemplateItem(cc.instantiate(t.templateType == i.PREFAB ? t.tmpPrefab : t.tmpNode));
if (t._slideMode == n.ADHERING || t._slideMode == n.PAGE) {
t._scrollView.inertia = !1;
t._scrollView._onMouseWheel = function() {};
}
t.virtual || (t.lackCenter = !1);
t._lastDisplayData = [];
t.displayData = [];
t._pool = new cc.NodePool();
t._forceUpdate = !1;
t._updateCounter = 0;
t._updateDone = !0;
t.curPageNum = 0;
if (t.cyclic) {
t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
t._scrollView._startBounceBackIfNeeded = function() {
return !1;
};
}
switch (t._align) {
case cc.Layout.Type.HORIZONTAL:
switch (t._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
t._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
t._alignCalcType = 2;
}
break;

case cc.Layout.Type.VERTICAL:
switch (t._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
t._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
t._alignCalcType = 4;
}
break;

case cc.Layout.Type.GRID:
switch (t._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (t._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
t._alignCalcType = 3;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
t._alignCalcType = 4;
}
break;

case cc.Layout.AxisDirection.VERTICAL:
switch (t._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
t._alignCalcType = 1;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
t._alignCalcType = 2;
}
}
}
t.content.removeAllChildren();
t._inited = !0;
} else cc.error(t.node.name + "'s cc.ScrollView unset content!");
}
},
_processAutoScrolling: function(t) {
this._scrollView._autoScrollAccumulatedTime += 1 * t;
var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
if (this._scrollView._autoScrollAttenuate) {
var i = e - 1;
e = i * i * i * i * i + 1;
}
var n = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e)), s = this._scrollView.getScrollEndedEventTiming(), o = Math.abs(e - 1) <= s;
if (Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired) {
this._scrollView._dispatchEvent("scroll-ended-with-threshold");
this._scrollView._isScrollEndedWithThresholdEventFired = !0;
}
o && (this._scrollView._autoScrolling = !1);
var a = n.sub(this._scrollView.getContentPosition());
this._scrollView._moveContent(this._scrollView._clampDelta(a), o);
this._scrollView._dispatchEvent("scrolling");
if (!this._scrollView._autoScrolling) {
this._scrollView._isBouncing = !1;
this._scrollView._scrolling = !1;
this._scrollView._dispatchEvent("scroll-ended");
}
},
setTemplateItem: function(t) {
if (t) {
var e = this;
e._itemTmp = t;
e._resizeMode == cc.Layout.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = new cc.size(t.width, t.height);
var i = t.getComponent(t.name), n = !1;
i || (n = !0);
n && (e.selectedMode = s.NONE);
(i = t.getComponent(cc.Widget)) && i.enabled && (e._needUpdateWidget = !0);
e.selectedMode == s.MULT && (e.multSelected = []);
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
e._colLineNum = 1;
e._sizeType = !1;
break;

case cc.Layout.Type.VERTICAL:
e._colLineNum = 1;
e._sizeType = !0;
break;

case cc.Layout.Type.GRID:
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var o = e.content.width - e._leftGap - e._rightGap;
e._colLineNum = Math.floor((o + e._columnGap) / (e._itemSize.width + e._columnGap));
e._sizeType = !0;
break;

case cc.Layout.AxisDirection.VERTICAL:
var a = e.content.height - e._topGap - e._bottomGap;
e._colLineNum = Math.floor((a + e._lineGap) / (e._itemSize.height + e._lineGap));
e._sizeType = !1;
}
}
}
},
checkInited: function(t) {
t = null == t || t;
if (!this._inited) {
t && cc.error("List initialization not completed!");
return !1;
}
return !0;
},
_resizeContent: function() {
var t, e = this;
switch (e._align) {
case cc.Layout.Type.HORIZONTAL:
if (e._customSize) {
var i = e._getFixedSize();
t = e._leftGap + i.val + e._itemSize.width * (e._numItems - i.count) + e._columnGap * (e._numItems - 1) + e._rightGap;
} else t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
break;

case cc.Layout.Type.VERTICAL:
if (e._customSize) {
var n = e._getFixedSize();
t = e._topGap + n.val + e._itemSize.height * (e._numItems - n.count) + e._lineGap * (e._numItems - 1) + e._bottomGap;
} else t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
break;

case cc.Layout.Type.GRID:
e.lackCenter && (e.lackCenter = !1);
switch (e._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
var s = Math.ceil(e._numItems / e._colLineNum);
t = e._topGap + e._itemSize.height * s + e._lineGap * (s - 1) + e._bottomGap;
break;

case cc.Layout.AxisDirection.VERTICAL:
var o = Math.ceil(e._numItems / e._colLineNum);
t = e._leftGap + e._itemSize.width * o + e._columnGap * (o - 1) + e._rightGap;
}
}
var a = e.content.getComponent(cc.Layout);
a && (a.enabled = !1);
e._allItemSize = t;
e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap);
if (e.cyclic) {
var c = e._sizeType ? e.node.height : e.node.width;
e._cyclicPos1 = 0;
c -= e._cyclicPos1;
e._cyclicNum = Math.ceil(c / e._allItemSizeNoEdge) + 1;
var r = e._sizeType ? e._lineGap : e._columnGap;
e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + r;
e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + r * (e._cyclicNum - 1);
e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum;
e._cycilcAllItemSizeNoEdge += r * (e._cyclicNum - 1);
}
e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height : e.node.width);
var h = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0, l = e._lack ? (e._sizeType ? e.node.height : e.node.width) - h : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;
l < 0 && (l = 0);
e._sizeType ? e.content.height = l : e.content.width = l;
},
_onScrolling: function(t) {
null == this.frameCount && (this.frameCount = this._updateRate);
if (!this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) this.frameCount--; else {
this.frameCount = this._updateRate;
if (!this._aniDelRuning) {
if (this.cyclic) {
var e = this.content.getPosition();
e = this._sizeType ? e.y : e.x;
var i = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap), n = this._sizeType ? cc.v2(0, i) : cc.v2(i, 0);
switch (this._alignCalcType) {
case 1:
if (e > -this._cyclicPos1) {
this.content.x = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (e < -this._cyclicPos2) {
this.content.x = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
break;

case 2:
if (e < this._cyclicPos1) {
this.content.x = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (e > this._cyclicPos2) {
this.content.x = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 3:
if (e < this._cyclicPos1) {
this.content.y = this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
} else if (e > this._cyclicPos2) {
this.content.y = this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
}
break;

case 4:
if (e > -this._cyclicPos1) {
this.content.y = -this._cyclicPos2;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(n));
} else if (e < -this._cyclicPos2) {
this.content.y = -this._cyclicPos1;
this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(n));
}
}
}
this._calcViewPos();
var s, o, a, c;
if (this._sizeType) {
s = this.viewTop;
a = this.viewBottom;
} else {
o = this.viewRight;
c = this.viewLeft;
}
if (this._virtual) {
this.displayData = [];
var r, h = 0, l = this._numItems - 1;
if (this._customSize) for (var u = !1; h <= l && !u; h++) {
r = this._calcItemPos(h);
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
r.right >= c && r.left <= o ? this.displayData.push(r) : 0 != h && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.VERTICAL:
r.bottom <= s && r.top >= a ? this.displayData.push(r) : 0 != h && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.Type.GRID:
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
r.bottom <= s && r.top >= a ? this.displayData.push(r) : 0 != h && this.displayData.length > 0 && (u = !0);
break;

case cc.Layout.AxisDirection.VERTICAL:
r.right >= c && r.left <= o ? this.displayData.push(r) : 0 != h && this.displayData.length > 0 && (u = !0);
}
}
} else {
var m = this._itemSize.width + this._columnGap, d = this._itemSize.height + this._lineGap;
switch (this._alignCalcType) {
case 1:
h = (c + this._leftGap) / m;
l = (o + this._rightGap) / m;
break;

case 2:
h = (-o - this._rightGap) / m;
l = (-c - this._leftGap) / m;
break;

case 3:
h = (-s - this._topGap) / d;
l = (-a - this._bottomGap) / d;
break;

case 4:
h = (a + this._bottomGap) / d;
l = (s + this._topGap) / d;
}
h = Math.floor(h) * this._colLineNum;
l = Math.ceil(l) * this._colLineNum;
h < 0 && (h = 0);
--l >= this._numItems && (l = this._numItems - 1);
for (;h <= l; h++) this.displayData.push(this._calcItemPos(h));
}
this._delRedundantItem();
if (this.displayData.length <= 0 || !this._numItems) {
this._lastDisplayData = [];
return;
}
this.firstListId = this.displayData[0].id;
this.displayItemNum = this.displayData.length;
var p = this._lastDisplayData.length, g = this.displayItemNum != p;
if (g) {
this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(t, e) {
return t - e;
});
g = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[p - 1];
}
if (this._forceUpdate || g) if (this.frameByFrameRenderNum > 0) if (this._numItems > 0) {
this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0;
this._updateDone = !1;
} else {
this._updateCounter = 0;
this._updateDone = !0;
} else {
this._lastDisplayData = [];
for (var f = 0; f < this.displayItemNum; f++) this._createOrUpdateItem(this.displayData[f]);
this._forceUpdate = !1;
}
this._calcNearestItem();
}
}
}
},
_calcViewPos: function() {
var t = this.content.getPosition();
switch (this._alignCalcType) {
case 1:
this.elasticLeft = t.x > 0 ? t.x : 0;
this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft;
this.viewRight = this.viewLeft + this.node.width;
this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
this.viewRight += this.elasticRight;
break;

case 2:
this.elasticRight = t.x < 0 ? -t.x : 0;
this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight;
this.viewLeft = this.viewRight - this.node.width;
this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
this.viewLeft -= this.elasticLeft;
break;

case 3:
this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0;
this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop;
this.viewBottom = this.viewTop - this.node.height;
this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
this.viewBottom += this.elasticBottom;
break;

case 4:
this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0;
this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom;
this.viewTop = this.viewBottom + this.node.height;
this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
this.viewTop -= this.elasticTop;
}
},
getItemHeight: function() {},
_calcItemPos: function(t) {
var e, i, n, s, o, a, c, r;
switch (this._align) {
case cc.Layout.Type.HORIZONTAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
if (this._customSize) {
var h = this._getFixedSize(t);
o = this._leftGap + (this._itemSize.width + this._columnGap) * (t - h.count) + (h.val + this._columnGap * h.count);
var l = this._customSize[t];
e = l > 0 ? l : this._itemSize.width;
} else {
o = this._leftGap + (this._itemSize.width + this._columnGap) * t;
e = this._itemSize.width;
}
a = o + e;
if (this.lackCenter) {
var u = this.content.width / 2 - this._allItemSizeNoEdge / 2;
o += u;
a += u;
}
return {
id: t,
left: o,
right: a,
x: o + this._itemTmp.anchorX * e,
y: this._itemTmp.y
};

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
if (this._customSize) {
var m = this._getFixedSize(t);
a = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - m.count) - (m.val + this._columnGap * m.count);
var d = this._customSize[t];
e = d > 0 ? d : this._itemSize.width;
} else {
a = -this._rightGap - (this._itemSize.width + this._columnGap) * t;
e = this._itemSize.width;
}
o = a - e;
if (this.lackCenter) {
var p = this.content.width / 2 - this._allItemSizeNoEdge / 2;
o -= p;
a -= p;
}
return {
id: t,
right: a,
left: o,
x: o + this._itemTmp.anchorX * e,
y: this._itemTmp.y
};
}
break;

case cc.Layout.Type.VERTICAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
if (this._customSize) {
var g = this._getFixedSize(t);
n = -this._topGap - (this._itemSize.height + this._lineGap) * (t - g.count) - (g.val + this._lineGap * g.count);
var f = this._customSize[t];
s = n - (i = f > 0 ? f : this._itemSize.height);
} else {
n = -this._topGap - (this._itemSize.height + this._lineGap) * t;
i = this._itemSize.height;
}
s = n - i;
if (this.lackCenter) {
var _ = this.content.height / 2 - this._allItemSizeNoEdge / 2;
n -= _;
s -= _;
}
return {
id: t,
top: n,
bottom: s,
x: this._itemTmp.x,
y: s + this._itemTmp.anchorY * i
};

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
if (this._customSize) {
var S = this._getFixedSize(t);
s = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - S.count) + (S.val + this._lineGap * S.count);
var v = this._customSize[t];
i = v > 0 ? v : this._itemSize.height;
} else {
s = this._bottomGap + (this._itemSize.height + this._lineGap) * t;
i = this._itemSize.height;
}
n = s + i;
if (this.lackCenter) {
var C = this.content.height / 2 - this._allItemSizeNoEdge / 2;
n += C;
s += C;
}
return {
id: t,
top: n,
bottom: s,
x: this._itemTmp.x,
y: s + this._itemTmp.anchorY * i
};
}

case cc.Layout.Type.GRID:
var b = Math.floor(t / this._colLineNum);
switch (this._startAxis) {
case cc.Layout.AxisDirection.HORIZONTAL:
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
r = (s = (n = -this._topGap - (this._itemSize.height + this._lineGap) * b) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
n = (s = this._bottomGap + (this._itemSize.height + this._lineGap) * b) + this._itemSize.height;
r = s + this._itemTmp.anchorY * this._itemSize.height;
}
c = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap);
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
c += this._itemTmp.anchorX * this._itemSize.width;
c -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
c += (1 - this._itemTmp.anchorX) * this._itemSize.width;
c -= (1 - this.content.anchorX) * this.content.width;
c *= -1;
}
return {
id: t,
top: n,
bottom: s,
x: c,
y: r
};

case cc.Layout.AxisDirection.VERTICAL:
switch (this._horizontalDir) {
case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
a = (o = this._leftGap + (this._itemSize.width + this._columnGap) * b) + this._itemSize.width;
c = o + this._itemTmp.anchorX * this._itemSize.width;
c -= this.content.anchorX * this.content.width;
break;

case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
c = (o = (a = -this._rightGap - (this._itemSize.width + this._columnGap) * b) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width;
c += (1 - this.content.anchorX) * this.content.width;
}
r = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap);
switch (this._verticalDir) {
case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
r -= (1 - this._itemTmp.anchorY) * this._itemSize.height;
r += (1 - this.content.anchorY) * this.content.height;
break;

case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
r -= this._itemTmp.anchorY * this._itemSize.height;
r += this.content.anchorY * this.content.height;
r *= -1;
}
return {
id: t,
left: o,
right: a,
x: c,
y: r
};
}
}
},
_calcExistItemPos: function(t) {
var e = this.getItemByListId(t);
if (!e) return null;
var i = {
id: t,
x: e.x,
y: e.y
};
if (this._sizeType) {
i.top = e.y + e.height * (1 - e.anchorY);
i.bottom = e.y - e.height * e.anchorY;
} else {
i.left = e.x - e.width * e.anchorX;
i.right = e.x + e.width * (1 - e.anchorX);
}
return i;
},
getItemPos: function(t) {
return this._virtual ? this._calcItemPos(t) : this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t);
},
_getFixedSize: function(t) {
if (!this._customSize) return null;
null == t && (t = this._numItems);
var e = 0, i = 0;
for (var n in this._customSize) if (parseInt(n) < t) {
e += this._customSize[n];
i++;
}
return {
val: e,
count: i
};
},
_onScrollBegan: function() {
this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
},
_onScrollEnded: function() {
var t = this;
if (null != t.scrollToListId) {
var e = t.getItemByListId(t.scrollToListId);
t.scrollToListId = null;
e && e.runAction(new cc.sequence(new cc.scaleTo(.1, 1.06), new cc.scaleTo(.1, 1)));
}
t._onScrolling();
t._slideMode != n.ADHERING || t.adhering ? t._slideMode == n.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()) : t.adhere();
},
_onTouchStart: function(t, e) {
if (!this._scrollView._hasNestedViewGroup(t, e) && (t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)) {
for (var i = t.target; null == i._listId && i.parent; ) i = i.parent;
this._scrollItem = null != i._listId ? i : t.target;
}
},
_onTouchUp: function() {
var t = this;
t._scrollPos = null;
if (t._slideMode == n.ADHERING) {
t.adhering && (t._adheringBarrier = !0);
t.adhere();
} else t._slideMode == n.PAGE && (null != t._beganPos ? t._pageAdhere() : t.adhere());
this._scrollItem = null;
},
_onTouchCancelled: function(t, e) {
var i = this;
if (!i._scrollView._hasNestedViewGroup(t, e) && !t.simulate) {
i._scrollPos = null;
if (i._slideMode == n.ADHERING) {
i.adhering && (i._adheringBarrier = !0);
i.adhere();
} else i._slideMode == n.PAGE && (null != i._beganPos ? i._pageAdhere() : i.adhere());
this._scrollItem = null;
}
},
_onSizeChanged: function() {
this.checkInited(!1) && this._onScrolling();
},
_onItemAdaptive: function(t) {
if (!this._sizeType && t.width != this._itemSize.width || this._sizeType && t.height != this._itemSize.height) {
this._customSize || (this._customSize = {});
var e = this._sizeType ? t.height : t.width;
if (this._customSize[t._listId] != e) {
this._customSize[t._listId] = e;
this._resizeContent();
this.updateAll();
if (null != this._scrollToListId) {
this._scrollPos = null;
this.unschedule(this._scrollToSo);
this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3));
}
}
}
},
_pageAdhere: function() {
var t = this;
if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
var e = t._sizeType ? t.viewTop : t.viewLeft, i = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
if (Math.abs(t._beganPos - e) > i) switch (t._alignCalcType) {
case 1:
case 4:
t._beganPos > e ? t.prePage(.5) : t.nextPage(.5);
break;

case 2:
case 3:
t._beganPos < e ? t.prePage(.5) : t.nextPage(.5);
} else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
t._beganPos = null;
}
},
adhere: function() {
var t = this;
if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
t.adhering = !0;
t._calcNearestItem();
var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
t.scrollTo(t.nearestListId, .7, e);
}
},
update: function() {
if (!(this.frameByFrameRenderNum <= 0 || this._updateDone)) if (this._virtual) {
for (var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) {
var i = this.displayData[e];
i && this._createOrUpdateItem(i);
}
if (this._updateCounter >= this.displayItemNum - 1) if (this._doneAfterUpdate) {
this._updateCounter = 0;
this._updateDone = !1;
this._doneAfterUpdate = !1;
} else {
this._updateDone = !0;
this._delRedundantItem();
this._forceUpdate = !1;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
} else this._updateCounter += this.frameByFrameRenderNum;
} else if (this._updateCounter < this._numItems) {
for (var s = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, o = this._updateCounter; o < s; o++) this._createOrUpdateItem2(o);
this._updateCounter += this.frameByFrameRenderNum;
} else {
this._updateDone = !0;
this._calcNearestItem();
this.slideMode == n.PAGE && (this.curPageNum = this.nearestListId);
}
},
_createOrUpdateItem: function(t) {
var e = this.getItemByListId(t.id);
if (e) {
if (this._forceUpdate && this.renderEvent) {
e.setPosition(new cc.v2(t.x, t.y));
this._resetItemSize(e);
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], e, t.id % this._actualNumItems);
}
} else {
var i = this._pool.size() > 0;
if ((e = i ? this._pool.get() : cc.instantiate(this._itemTmp))._listId != t.id) {
e._listId = t.id;
e.setContentSize(this._itemSize);
}
e.setPosition(new cc.v2(t.x, t.y));
this._resetItemSize(e);
this.content.addChild(e);
if (i && this._needUpdateWidget) {
var n = e.getComponent(cc.Widget);
n && n.updateAlignment();
}
e.setSiblingIndex(this.content.childrenCount - 1);
var s = e.getComponent(e.name);
e.listItem = s;
if (s) {
s._list = this;
s._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], e, t.id % this._actualNumItems);
}
this._resetItemSize(e);
this._updateListItem(e.listItem);
this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id);
},
_createOrUpdateItem2: function(t) {
var e = this.content.children[t];
if (e) {
if (this._forceUpdate && this.renderEvent) {
e._listId = t;
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], e, t);
}
} else {
(e = cc.instantiate(this._itemTmp))._listId = t;
this.content.addChild(e);
var i = e.getComponent(ListItem);
e.listItem = i;
if (i) {
i._list = this;
i._registerEvent();
}
this.renderEvent && cc.Component.EventHandler.emitEvents([ this.renderEvent ], e, t);
}
this._updateListItem(e.listItem);
this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t);
},
_updateListItem: function(t) {
if (t && this.selectedMode > s.NONE) switch (this.selectedMode) {
case s.SINGLE:
t.selected = this.selectedId == t.node._listId;
break;

case s.MULT:
t.selected = this.multSelected.indexOf(t.node._listId) >= 0;
}
},
_resetItemSize: function(t) {
var e;
this._customSize && this._customSize[t._listId] ? e = this._customSize[t._listId] : this._colLineNum > 1 ? t.setContentSize(this._itemSize) : e = this._sizeType ? this._itemSize.height : this._itemSize.width;
e && (this._sizeType ? t.height = e : t.width = e);
},
_updateItemPos: function(t) {
var e = isNaN(t) ? t : this.getItemByListId(t), i = this.getItemPos(e._listId);
e.setPosition(i.x, i.y);
},
setMultSelected: function(t, e) {
var i = this;
if (i.checkInited()) {
Array.isArray(t) || (t = [ t ]);
if (null == e) i.multSelected = t; else {
var n, s;
if (e) for (var o = t.length - 1; o >= 0; o--) {
n = t[o];
(s = i.multSelected.indexOf(n)) < 0 && i.multSelected.push(n);
} else for (var a = t.length - 1; a >= 0; a--) {
n = t[a];
(s = i.multSelected.indexOf(n)) >= 0 && i.multSelected.splice(s, 1);
}
}
i._forceUpdate = !0;
i._onScrolling();
}
},
updateItem: function(t) {
if (this.checkInited()) {
Array.isArray(t) || (t = [ t ]);
for (var e = 0, i = t.length; e < i; e++) {
var n = t[e], s = this.getItemByListId(n);
s && cc.Component.EventHandler.emitEvents([ this.renderEvent ], s, n % this._actualNumItems);
}
}
},
updateAll: function() {
this.checkInited() && (this.numItems = this.numItems);
},
getItemByListId: function(t) {
for (var e = this.content.childrenCount - 1; e >= 0; e--) if (this.content.children[e]._listId == t) return this.content.children[e];
},
_getOutsideItem: function() {
for (var t, e = [], i = this.content.childrenCount - 1; i >= 0; i--) {
t = this.content.children[i];
this.displayData.find(function(e) {
return e.id == t._listId;
}) || e.push(t);
}
return e;
},
_delRedundantItem: function() {
if (this._virtual) for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) {
var i = t[e];
if (!this._scrollItem || i._listId != this._scrollItem._listId) {
this._pool.put(i);
for (var n = this._lastDisplayData.length - 1; n >= 0; n--) if (this._lastDisplayData[n] == i._listId) {
this._lastDisplayData.splice(n, 1);
break;
}
}
} else for (;this.content.childrenCount > this._numItems; ) this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
},
_delSingleItem: function(t) {
t.removeFromParent();
t.destroy && t.destroy();
t = null;
},
aniDelItem: function(t, e, i) {
var n = this;
if (!n.checkInited() || n.cyclic || !n._virtual) return cc.error("This function is not allowed to be called!");
if (n._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
var o = n.getItemByListId(t);
if (o) {
n._aniDelRuning = !0;
var a = n.displayData[n.displayData.length - 1].id, c = o.listItem.selected;
o.listItem.showAni(i, function() {
var i;
a < n._numItems - 2 && (i = a + 1);
if (null != i) {
var r = n._calcItemPos(i);
n.displayData.push(r);
n._virtual ? n._createOrUpdateItem(r) : n._createOrUpdateItem2(i);
} else n._numItems--;
if (n.selectedMode == s.SINGLE) c ? n._selectedId = -1 : n._selectedId - 1 >= 0 && n._selectedId--; else if (n.selectedMode == s.MULT && n.multSelected.length) {
var h = n.multSelected.indexOf(t);
h >= 0 && n.multSelected.splice(h, 1);
for (var l = n.multSelected.length - 1; l >= 0; l--) n.multSelected[l] >= t && n.multSelected[l]--;
}
if (n._customSize) {
n._customSize[t] && delete n._customSize[t];
var u, m = {};
for (var d in n._customSize) {
u = n._customSize[d];
m[(d = parseInt(d)) - (d >= t ? 1 : 0)] = u;
}
n._customSize = m;
}
for (var p, g, f = null != i ? i : a; f >= t + 1; f--) if (o = n.getItemByListId(f)) {
var _ = n._calcItemPos(f - 1);
p = [ new cc.moveTo(.2333, new cc.v2(_.x, _.y)) ];
if (f <= t + 1) {
g = !0;
p.push(new cc.CallFunc(function() {
n._aniDelRuning = !1;
e(t);
}));
}
p.length > 1 ? o.runAction(new cc.Sequence(p)) : o.runAction(p[0]);
}
if (!g) {
n._aniDelRuning = !1;
e(t);
}
}, !0);
} else e(t);
},
scrollTo: function(t, e, i, n) {
var s = this;
if (s.checkInited()) {
null == e ? e = .5 : e < 0 && (e = 0);
t < 0 ? t = 0 : t >= s._numItems && (t = s._numItems - 1);
!s._virtual && s._layout && s._layout.enabled && s._layout.updateLayout();
var o, a, c = s.getItemPos(t);
switch (s._alignCalcType) {
case 1:
o = c.left;
o -= null != i ? s.node.width * i : s._leftGap;
c = new cc.v2(o, 0);
break;

case 2:
o = c.right - s.node.width;
o += null != i ? s.node.width * i : s._rightGap;
c = new cc.v2(o + s.content.width, 0);
break;

case 3:
a = c.top;
a += null != i ? s.node.height * i : s._topGap;
c = new cc.v2(0, -a);
break;

case 4:
a = c.bottom + s.node.height;
a -= null != i ? s.node.height * i : s._bottomGap;
c = new cc.v2(0, -a + s.content.height);
}
var r = s.content.getPosition();
r = Math.abs(s._sizeType ? r.y : r.x);
var h = s._sizeType ? c.y : c.x;
if (Math.abs((null != s._scrollPos ? s._scrollPos : r) - h) > .5) {
s._scrollPos = h;
s._scrollToListId = t;
s._scrollToEndTime = new Date().getTime() / 1e3 + e;
s._scrollView.scrollToOffset(c, e);
s._scrollToSo = s.scheduleOnce(function() {
s._adheringBarrier || (s.adhering = s._adheringBarrier = !1);
s._scrollPos = s._scrollToListId = s._scrollToEndTime = s._scrollToSo = null;
if (n) {
var e = s.getItemByListId(t);
e && e.runAction(new cc.sequence(new cc.scaleTo(.1, 1.05), new cc.scaleTo(.1, 1)));
}
}, e + .1);
e <= 0 && s._onScrolling();
}
}
},
_calcNearestItem: function() {
var t, e, i, n, s, o, a = this;
a.nearestListId = null;
a._virtual && a._calcViewPos();
i = a.viewTop;
n = a.viewRight;
s = a.viewBottom;
o = a.viewLeft;
for (var c = !1, r = 0; r < a.content.childrenCount && !c; r += a._colLineNum) if (t = this._virtual ? this.displayData[r] : this._calcExistItemPos(r)) {
e = this._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;
switch (this._alignCalcType) {
case 1:
if (t.right >= o) {
this.nearestListId = t.id;
o > e && (this.nearestListId += this._colLineNum);
c = !0;
}
break;

case 2:
if (t.left <= n) {
this.nearestListId = t.id;
n < e && (this.nearestListId += this._colLineNum);
c = !0;
}
break;

case 3:
if (t.bottom <= i) {
this.nearestListId = t.id;
i < e && (this.nearestListId += this._colLineNum);
c = !0;
}
break;

case 4:
if (t.top >= s) {
this.nearestListId = t.id;
s > e && (this.nearestListId += this._colLineNum);
c = !0;
}
}
}
if ((t = this._virtual ? this.displayData[this.displayItemNum - 1] : this._calcExistItemPos(this._numItems - 1)) && t.id == a._numItems - 1) {
e = a._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2;
switch (a._alignCalcType) {
case 1:
n > e && (a.nearestListId = t.id);
break;

case 2:
o < e && (a.nearestListId = t.id);
break;

case 3:
s < e && (a.nearestListId = t.id);
break;

case 4:
i > e && (a.nearestListId = t.id);
}
}
},
prePage: function(t) {
if (this.checkInited()) {
null == t && (t = .5);
this.skipPage(this.curPageNum - 1, t);
}
},
nextPage: function(t) {
if (this.checkInited()) {
null == t && (t = .5);
this.skipPage(this.curPageNum + 1, t);
}
},
skipPage: function(t, e) {
var i = this;
if (i.checkInited()) {
if (i._slideMode != n.PAGE) return cc.error("This function is not allowed to be called, Must SlideMode = PAGE!");
if (!(t < 0 || t >= i._numItems) && i.curPageNum != t) {
i.curPageNum = t;
i.pageChangeEvent && cc.Component.EventHandler.emitEvents([ i.pageChangeEvent ], t);
i.scrollTo(t, e);
}
}
},
calcCustomSize: function(t) {
var e = this;
if (e.checkInited()) {
if (!e._itemTmp) return cc.error("Unset template item!");
if (!e.renderEvent) return cc.error("Unset Render-Event!");
e._customSize = {};
var i = cc.instantiate(e._itemTmp);
e.content.addChild(i);
for (var n = 0; n < t; n++) {
cc.Component.EventHandler.emitEvents([ e.renderEvent ], i, n);
i.height == e._itemSize.height && i.width == e._itemSize.width || (e._customSize[n] = e._sizeType ? i.height : i.width);
}
Object.keys(e._customSize).length || (e._customSize = null);
i.removeFromParent();
i.destroy && i.destroy();
return e._customSize;
}
}
});
cc._RF.pop();
}, {} ],
Loading: [ function(t, e) {
"use strict";
cc._RF.push(e, "05429VhJqJPza6444t1eZ5u", "Loading");
var i = cc.Class({
extends: cc.VozBaseComponent,
statics: {
inst: null
},
properties: {
icon_loading: cc.Node
},
onLoad: function() {
i.inst = this;
mm.Loading = this;
this.hide();
this.node.zIndex = 1e3;
},
show: function(t) {
this.node.active = !0;
if (null != t && t) this.icon_loading.active = !1; else {
this.icon_loading.active = !0;
this.icon_loading.runAction(cc.repeatForever(cc.rotateBy(.01, 10)));
}
},
hide: function() {
this.node.active = !1;
cc._selectGameNode && (cc._selectGameNode.getChildByName("load").active = !1);
}
});
cc._RF.pop();
}, {} ],
MM: [ function(t, e) {
"use strict";
cc._RF.push(e, "ca36bPSSa5MY5SgRP7rl+iX", "MM");
var i = cc.Class({
extends: cc.Component,
statics: {
inst: null
},
onLoad: function() {
i.inst = this;
var t = cc.find("MM");
t && cc.game.addPersistRootNode(t);
cc.lastZIndex = 0;
cc.currentUI = "";
},
start: function() {
cc.screen.fullScreen();
},
ltrim: function(t) {
return t.replace(/(^\s*)/g, "");
},
rtrim: function(t) {
return t.replace(/(\s*$)/g, "");
},
trim: function(t) {
return t.replace(/(^\s*)|(\s*$)/g, "");
}
});
window.mm = i;
cc._RF.pop();
}, {} ],
MiniGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "09f3fziL3hAtr4+JFrcPUSo", "MiniGame");
var i = cc.Class({
extends: cc.VozBaseComponent,
properties: {
bgAll: cc.Node,
BG: cc.Node,
ICON: cc.Node
},
statics: {
inst: null
},
onLoad: function() {
i.inst = this;
window.MiniGame = this;
this.BG.active = !1;
this.node.zIndex = cc.lastZIndex + 1;
this.ICON.active = !1;
this.bgAll.active = !1;
},
showIcon: function() {
this.ICON.active = !0;
},
eventClickMini: function(t) {
var e = t.target.getComponent("Move");
e && e.isMove() ? e._isMove = !1 : this.BG.active ? this.hideGames() : this.showGames();
},
showGames: function() {
this.BG.active = !0;
this.bgAll.active = !0;
var t = cc.rotateBy(.6, 2880), e = cc.scaleTo(.4, 1.1), i = cc.scaleTo(.2, 1), n = cc.fadeIn(.6), s = cc.fadeIn(.6);
this.BG.opacity = 0;
this.bgAll.opacity = 0;
this.BG.scale = 0;
var o = cc.spawn(t, e, n, cc.sequence(cc.delayTime(.4), i));
this.bgAll.runAction(s);
this.BG.runAction(o);
},
hideGames: function() {
var t = cc.rotateBy(.6, 2880), e = cc.scaleTo(.2, 1.1), i = cc.scaleTo(.4, 0), n = cc.fadeIn(.6), s = cc.fadeIn(.6), o = cc.spawn(t, e, n, cc.sequence(cc.delayTime(.2), i)), a = this;
this.bgAll.runAction(s);
this.BG.runAction(cc.sequence(o, cc.callFunc(function() {
a.BG.active = !1;
a.bgAll.active = !1;
})));
},
onSelectGame: function(t, e) {
this.hideGames();
if (mm.isLogin) {
var i = PortalManager.getGameController(e);
if (i) {
mm.Loading.show();
i.loginZone(Config.getUsername(), Config.getPass());
}
} else this.show("UILogin", {
pop: !0
});
}
});
cc._RF.pop();
}, {} ],
MiniPokerController: [ function(t, e) {
"use strict";
cc._RF.push(e, "19e3bEiYi9KToP2p9SX28cK", "MiniPokerController");
var i = t("MiniPokerEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id");
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.resultMap = s.getByteArray("rs");
o.linewin = s.getByteArray("lw");
i.push(o);
}
UIManger.show("UIMiniPokerTransaction", {
pop: !0,
src: "minipoker",
data: {
items: i
}
});
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n + 1;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
UIManger.show("UIMiniPokerRank", {
pop: !0,
src: "minipoker",
data: {
items: i
}
});
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
cc.currentUI = "";
mm.Loading.hide();
this.getUI().back();
}
},
onEventRoomJoin: function() {
this.preLoadUI({
pop: !0
}, function() {}.bind(this));
},
onUserBetEvent: function(t) {
if (null != this.getUI()) {
var e = new i.BetEvent().fromEvent(t);
this.getUI().MiniPokerRun(e);
}
}
}), s = null;
SmartFoxSDK.MiniPokerController = e.exports = function() {
null == s && (s = new n("UIMiniPoker", "minipoker"));
return s;
}();
cc._RF.pop();
}, {
MiniPokerEvent: "MiniPokerEvent"
} ],
MiniPokerEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "df44cUccU1CI5M73jN/ic5N", "MiniPokerEvent");
var i = {
RESPONSE_NAME: {
BET_RES: "mp1"
}
};
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
},
fromEvent: function(t) {
this.noHu = !1;
this.winMoney = t.getDouble("w");
this.handWinType = t.getByte("hw");
this.result = t.getByteArray("c");
t.containsKey("n") && (this.noHu = t.getBool("n"));
return this;
}
});
window.MiniPokerEvent = e.exports = i;
cc._RF.pop();
}, {} ],
MiniPokerItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "d9485vhHS9J+rnpQl9LAd6g", "MiniPokerItem");
cc.Class({
extends: cc.Component,
properties: {
card: cc.Sprite,
listCard: null
},
init: function(t, e) {
this.listCard = t.ListCard;
this.card.spriteFrame = this.listCard.getSpriteFrame(e);
},
stop: function() {},
setIcon: function(t, e) {
void 0 === e && (e = !1);
this.card.spriteFrame = this.listCard.getSpriteFrame(t);
e && (this.data = t);
}
});
cc._RF.pop();
}, {} ],
MiniPokerLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "9f07dXgZAVCLKVdme6WzfaT", "MiniPokerLine");
var i = t("Helper");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: cc.Node,
typeLine: 0
},
init: function(t) {
this.CDV = t;
this.eventSelectAll();
},
eventOpen: function() {
mm.audio.playButton();
this.node.active = !0;
},
eventClose: function() {
mm.audio.playButton();
var t = this.getTotalLineSelect();
this.node.active && t < 1 ? this.CDV.addNotice("Chọn ít nhất 1 dòng") : this.node.active = !1;
},
eventSelect: function(t, e) {
mm.audio.playButton();
var n = parseInt(e);
i.setMaterialGray(t.target.getComponent(cc.Sprite), i.isMaterialGray(t.target.getComponent(cc.Sprite)));
this.data[n] = i.isMaterialGray(t.target.getComponent(cc.Sprite));
this.updateString();
this.typeLine = 3;
},
eventBoChon: function() {
var t = this;
mm.audio.playButton();
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !0);
return !1;
})).then(function(e) {
t.data = e;
t.typeLine = -1;
});
},
eventSelectChan: function() {
var t = this;
mm.audio.playButton();
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 1);
return e % 2 != 1;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 2;
},
eventSelectLe: function() {
var t = this;
mm.audio.playButton();
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 0);
return e % 2 != 0;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 1;
},
eventSelectAll: function() {
var t = this;
mm.audio.playButton();
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !1);
return !0;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 0;
},
updateString: function() {
var t = this.getTotalLineSelect();
this.CDV.setNumberLines(t);
},
getTotalLineSelect: function() {
for (var t = 0, e = 1; e < this.data.length; e++) this.data[e] && t++;
return t;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
MiniPokerMainLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "7600avph1lGgI40exRa9hEc", "MiniPokerMainLine");
cc.Class({
extends: cc.Component,
init: function() {
return this;
},
onEnable: function() {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
},
onDisable: function() {
this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
},
onhover: function() {
this.node.children[0].active = !0;
this.node.children[1].active = !0;
},
offhover: function() {
this.node.children[0].active = !1;
this.node.children[1].active = !1;
},
onEf: function() {
this.onhover();
this.node.pauseSystemEvents(!0);
},
offEf: function() {
this.offhover();
this.node.resumeSystemEvents(!0);
},
offAll: function() {}
});
cc._RF.pop();
}, {} ],
MiniPokerRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "d74deKLKrZFUJxC2r3mrnfX", "MiniPokerRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lb_stt: cc.Label,
lbName: cc.Label,
lbWin: cc.Label
},
init: function(t) {
this.lb_stt.string = t.session;
this.lbName.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
MiniPokerReel: [ function(t, e) {
"use strict";
cc._RF.push(e, "e1af81InmlHHrH9JZzyBiCQ", "MiniPokerReel");
cc.Class({
extends: cc.Component,
properties: {
HeightReel: 144
},
onLoad: function() {
this.HeightReel = this.node.height - 5;
},
init: function(t, e) {
var i = this;
this.MNPK = t;
this.icons = [];
var n = this;
Promise.all(e.map(function(t) {
var e = cc.instantiate(n.MNPK.iconPrefab);
n.node.addChild(e);
(e = e.getComponent("MiniPokerItem")).init(n.MNPK, t);
return e;
})).then(function(t) {
i.icons = t;
});
},
spin: function(t) {
var e = 1;
this.MNPK.isFast && (e = .2);
this.node.stopAllActions();
var i = cc.moveTo(e * (t / 2 + 1), cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeOut(2)), n = cc.callFunc(function() {
0 === t && this.MNPK.copy();
this.node.y = 0;
}, this);
if (4 === t) {
var s = cc.callFunc(function() {
this.node.y = 0;
this.MNPK.runActionWon();
}, this);
this.node.runAction(cc.sequence(i, s));
} else this.node.runAction(cc.sequence(i, n));
},
stop: function() {
this.node.stopAllActions();
this.MNPK.copy();
this.node.y = 0;
}
});
cc._RF.pop();
}, {} ],
MiniPokerRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "a794fsr0whFK4jbUHv5rRrj", "MiniPokerRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "mp1"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.MiniPokerController.ZoneInstance.getRoomByName("minipoker").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
window.MiniPokerRequest = i;
cc._RF.pop();
}, {} ],
MiniPokerTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "342e0L42ZRPhbc9fD/cm/MF", "MiniPokerTransactionItem");
var i = t("PokerCard");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbMucDat: cc.Label,
listBoBai: cc.Node,
lbWin: cc.Label,
_dataRank: null
},
init: function(t) {
this._dataRank = t;
this.lbSession.string = "#" + t.session;
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
this.lbWin.string = t.win;
var e = this, i = this._convertPosCard(t.resultMap);
cc.loader.loadRes("images/minigame/minipoker/card2d", cc.SpriteAtlas, function(t, n) {
if (t) console.log(t); else {
e.ListCard = n;
Promise.all(e.listBoBai.children.map(function(t, n) {
t.getComponent("MiniPokerItem").init(e, i[n]);
}));
}
}.bind(this));
},
eventDetail: function() {
mm.audio.playButton();
},
_convertPosCard: function(t) {
for (var e = [], n = 0; n < t.length; n++) {
var s = new i.Card(t[n]);
e.push(s.nameFile);
}
return e;
}
});
cc._RF.pop();
}, {
PokerCard: "PokerCard"
} ],
MiniPokerWinGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "828d9yDIAJGU4V0lAKsZzMt", "MiniPokerWinGame");
var i, n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbMoneyWin: cc.Label,
lbNumberWin: cc.Label,
animationWin: cc.Node,
winText: cc.Node
},
onLoad: function() {
i = this;
},
init: function(t) {
this.MNPK = t;
},
runWinGame: function() {
var t = this;
this.winText.active = !1;
if (this.MNPK.isNoHu) this.runNoHu(); else if (this.MNPK.winMoney > 0) {
if (this.MNPK.handWinType > 0) {
this.winText.active = !0;
Promise.all(this.winText.children.map(function(t) {
t.active = !1;
})).then(function() {
i.winText.children[t.MNPK.handWinType].active = !0;
});
this.lbMoneyWin.node.y = -50;
} else this.lbMoneyWin.node.y = 0;
this.MNPK.setMoneyWin(this.MNPK.winMoney);
this.lbMoneyWin.node.active = !0;
n.numberTo(this.lbMoneyWin, 0, this.MNPK.winMoney, 1200, !0, function() {
i.MNPK.updateChipAll();
i.scheduleOnce(function() {
i.lbMoneyWin.node.active = !1;
i.winText.active = !1;
i.checkRunAgainWin();
}, 1);
});
this.MNPK.winMoney = 0;
} else this.MNPK.autoQuay();
},
checkRunAgainWin: function() {
(this.MNPK.winMoney > 0 || this.MNPK.isNoHu || this.MNPK.isAuto) && this.runWinGame();
},
runNoHu: function() {
this.animationWin.active = !0;
this.animationWin.getComponent(sp.Skeleton).setAnimation(0, "Idle", !1);
this.lbNumberWin.node.active = !0;
n.numberTo(this.lbNumberWin, 0, this.MNPK.winMoney, 1200, !0, function() {
this.scheduleOnce(function() {
var t = cc.moveTo(.5, cc.v2(-75, 170));
i.lbNumberWin.node.runAction(cc.sequence(t, cc.delayTime(1), cc.callFunc(function() {
i.lbNumberWin.node.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
this.scheduleOnce(function() {
i.animationWin.active = !1;
}, 4);
this.MNPK.isNoHu = !1;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
Move: [ function(t, e) {
"use strict";
cc._RF.push(e, "972c5O/HVZKw7Sap+T3eCiU", "Move");
cc.Class({
extends: cc.Component,
properties: {
_isMove: !1
},
onLoad: function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
e.currentTarget, e.getLocation();
var i = e.getDelta();
t.node.x += i.x;
t.node.y += i.y;
0 == i.x && 0 == i.y || (t._isMove = !0);
}, this);
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t._isMove = !1;
if (t.node.parent.zIndex <= cc.lastZIndex) {
cc.lastZIndex += 1;
t.node.parent.zIndex = cc.lastZIndex;
}
});
},
isMove: function() {
return this._isMove;
}
});
cc._RF.pop();
}, {} ],
MultiResolutionCompat: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1f5ddqjZcZJm5Y5gjbDKOXC", "MultiResolutionCompat");
i.__esModule = !0;
i.default = void 0;
var n, s, o;
function a(t, e) {
t.prototype = Object.create(e.prototype);
t.prototype.constructor = t;
c(t, e);
}
function c(t, e) {
return (c = Object.setPrototypeOf || function(t, e) {
t.__proto__ = e;
return t;
})(t, e);
}
var r = cc._decorator, h = r.ccclass, l = (r.property, h(n = (o = s = function(t) {
a(e, t);
function e() {
return t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.view.setDesignResolutionSize(e.DEFAULT_RESOLUTION_WIDTH, e.DEFAULT_RESOLUTION_HEIGHT, cc.ResolutionPolicy.SHOW_ALL);
};
e.getShowAllModeScale = function() {
return Math.min(cc.view.getCanvasSize().width / this.DEFAULT_RESOLUTION_WIDTH, cc.view.getCanvasSize().height / this.DEFAULT_RESOLUTION_HEIGHT);
};
e.getShowAllModeRealHeight = function() {
return this.DEFAULT_RESOLUTION_HEIGHT * this.getShowAllModeScale();
};
e.getShowAllModeRealWidth = function() {
return this.DEFAULT_RESOLUTION_WIDTH * this.getShowAllModeScale();
};
e.getShowAllModeVerticalBorderHeight = function() {
return cc.view.getCanvasSize().height - this.getShowAllModeRealHeight();
};
e.getShowAllModeHorizontalBorderWidth = function() {
return cc.view.getCanvasSize().width - this.getShowAllModeRealWidth();
};
e.getShowAllModeNodePositionCloseToBottom = function(t) {
var i = e.getShowAllModeScale(), n = e.getShowAllModeVerticalBorderHeight() / 2, s = (t.y * i - n) / i;
return cc.v2(t.x, s);
};
e.convertNodePosInDesignToNodePosInCanvas = function(t) {
return t.sub(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
};
e.convertNodePosInCanvasToNodePosInDesign = function(t) {
return t.div(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()));
};
e.convertWidthInDesignToWidthInCanvas = function(t) {
return t * this.getShowAllModeScale();
};
e.convertWidthInCanvasToWidthInDesign = function(t) {
return t / this.getShowAllModeScale();
};
e.convertHeightInDesignToHeightInCanvas = function(t) {
return t * this.getShowAllModeScale();
};
e.convertHeightInCanvasToHeightInDesign = function(t) {
return t / this.getShowAllModeScale();
};
return e;
}(cc.Component), s.DEFAULT_RESOLUTION_WIDTH = 720, s.DEFAULT_RESOLUTION_HEIGHT = 1280, 
o)) || n);
i.default = l;
e.exports = i.default;
cc._RF.pop();
}, {} ],
NodeEaseElasticInOut: [ function(t, e) {
"use strict";
cc._RF.push(e, "dc403oryetKh41rz7BAxqn9", "NodeEaseElasticInOut");
var i = cc.Enum({
MoveTop: 1,
MoveBottom: 2,
MoveLeft: 3,
MoveRight: 4
});
cc.Class({
extends: cc.Component,
properties: {
timeMoveIn: 1,
timeMoveOut: 1,
typeIn: {
default: i.MoveTop,
type: i
},
typeOut: {
default: i.MoveTop,
type: i
},
_currentPos: 0
},
onEnable: function() {
this._currentPos = this.node.position;
switch (this.typeIn) {
case i.MoveTop:
this.topIn(this.timeMoveIn);
break;

case i.MoveBottom:
this.bottomIn(this.timeMoveIn);
break;

case i.MoveLeft:
this.leftIn(this.timeMoveIn);
break;

case i.MoveRight:
this.rightIn(this.timeMoveIn);
break;

default:
this.topIn(this.timeMoveIn);
}
},
onDisable: function() {
this.node.stopAllActions();
this.node.position = this._currentPos;
},
runActionOutGame: function() {
this.node.stopAllActions();
},
topIn: function(t) {
t || (t = 1);
var e = this.node.position;
this.node.setPosition(e.x, cc.winSize.height);
var i = this.node.getComponent(cc.Widget);
if (i) {
i.isAlignBottom && (i.bottom += cc.winSize.height);
i.isAlignTop && (i.top -= cc.winSize.height);
i.updateAlignment();
}
var n = cc.moveTo(t, e).clone().easing(cc.easeElasticOut(.8));
this.node.runAction(n);
},
topOut: function(t) {
t || (t = 1);
var e = cc.moveTo(t, this.node.x, cc.winSize.height).clone().easing(cc.easeElasticIn(.6));
this.node.runAction(e);
},
bottomIn: function(t) {
t || (t = 1);
var e = this.node.position;
this.node.setPosition(e.x, -cc.winSize.height);
var i = this.node.getComponent(cc.Widget);
if (i) {
i.isAlignBottom && (i.bottom -= cc.winSize.height);
i.isAlignTop && (i.top += cc.winSize.height);
i.updateAlignment();
}
var n = cc.moveTo(t, e).clone().easing(cc.easeElasticOut(.8));
this.node.runAction(n);
},
bottomOut: function(t) {
t || (t = 1);
var e = cc.moveTo(t, this.node.x, -cc.winSize.height).clone().easing(cc.easeElasticIn(.6));
this.node.runAction(e);
},
leftIn: function(t) {
t || (t = 1);
var e = this.node.position;
this.node.setPosition(-cc.winSize.width, e.y);
var i = this.node.getComponent(cc.Widget);
if (i) {
i.isAlignLeft && (i.left -= cc.winSize.width);
i.isAlignRight && (i.right += cc.winSize.width);
i.updateAlignment();
}
var n = cc.moveTo(t, e).clone().easing(cc.easeElasticOut(.8));
this.node.runAction(n);
},
leftOut: function(t) {
t || (t = 1);
var e = cc.moveTo(t, -cc.winSize.width, this.node.y).clone().easing(cc.easeElasticIn(.6));
this.node.runAction(e);
},
rightIn: function(t) {
t || (t = 1);
var e = this.node.position;
this.node.setPosition(cc.winSize.width, e.y);
var i = this.node.getComponent(cc.Widget);
if (i) {
i.isAlignLeft && (i.left += cc.winSize.width);
i.isAlignRight && (i.right -= cc.winSize.width);
i.updateAlignment();
}
var n = cc.moveTo(t, e).clone().easing(cc.easeElasticOut(.8));
this.node.runAction(n);
},
rightOut: function(t) {
t || (t = 1);
var e = cc.moveTo(t, cc.winSize.width, this.node.y).clone().easing(cc.easeElasticIn(.6));
this.node.runAction(e);
}
});
cc._RF.pop();
}, {} ],
PlayerPoker: [ function(t, e) {
"use strict";
cc._RF.push(e, "1afa52ga29Bp6R6e9L7DpFh", "PlayerPoker");
var i = t("PokerCard");
cc.Class({
extends: cc.Player,
properties: {
cards: {
type: cc.Node,
default: []
},
Hands: cc.Node,
BigBlind: cc.Node,
SmallBlind: cc.Node,
BetChip: cc.Node,
_actionController: null,
m_total_bet: 0,
TypeOfHand: cc.Label
},
onEnable: function() {
this._super();
this.zoneName = "poker";
this.Hands.active = !1;
this.BigBlind.active = !1;
this.SmallBlind.active = !1;
this.BetChip.active = !1;
this.TypeOfHand.node.active = !1;
this.hideWinEffect();
},
onDisable: function() {
this.reset();
},
reset: function() {
this.Hands.active = !1;
this.BigBlind.active = !1;
this.SmallBlind.active = !1;
this.Status.active = !1;
this.BetChip.active = !1;
this.TypeOfHand.node.active = !1;
this.Status.active = !1;
this.hideWinEffect();
this.hideHoldem();
this.resetBet();
},
setActionController: function(t) {
this._actionController = t;
},
addCardHand: function(t) {
this.Hands.active = !0;
for (var e = 0; e < this.cards.length; e++) {
var n = this.cards[e].getComponent("Card");
t[e] < 0 ? n.init(null) : n.reveal(new i.Card(t[e]));
}
this.scaleHoldEm();
},
scaleHoldEm: function() {
this.isItMe() ? this.Hands.scale = 1 : this.Hands.scale = .75;
},
hideHoldem: function() {
this.Hands.active = !1;
},
onStartEvent: function(t) {
this.BigBlind.active = !1;
this.SmallBlind.active = !1;
this.Status.active = !1;
this.Hands.active = !0;
for (var e = 0; e < this.cards.length; e++) {
var n = this.cards[e].getComponent("Card");
this.cards[e].opacity = 255;
this.isItMe() ? n.reveal(new i.Card(t.m_listCard[e])) : n.init(null);
}
this.scaleHoldEm();
if (t.m_smallBlind == this._desk.UserName) {
this.SmallBlind.active = !0;
this.m_total_bet = t.m_betChipGame;
this.showBetChip(this.m_total_bet);
this._desk.UserChip -= t.m_betChipGame;
this.setMoney(this._desk.UserChip);
} else if (t.m_bigBlind == this._desk.UserName) {
this.BigBlind.active = !0;
this.m_total_bet = 2 * t.m_betChipGame;
this.showBetChip(this.m_total_bet);
this._desk.UserChip -= 2 * t.m_betChipGame;
this.setMoney(this._desk.UserChip);
}
if (t.m_currentUser == this._desk.UserName) {
var s = t.m_userTime / 1e3;
this.setTotalProgress(s);
this.setCurrentProgress(s);
this.setTimeWarning(5);
this.turnOnTimer();
cc.isValid(this._actionController) && this._actionController.showCallRaise(t.m_betChipGame, this._desk.UserChip, this.m_total_bet);
}
},
updatePosHand: function() {
null != this.newPos && (6 == this.number_desk ? 5 == this.newPos || 4 == this.newPos || 3 == this.newPos ? this.Hands.x = -110 : this.Hands.x = 115 : 5 == this.newPos || 6 == this.newPos || 7 == this.newPos ? this.Hands.x = -110 : this.Hands.x = 115);
},
onTurnEvent: function(t) {
this.Status.active = !1;
var e = t.m_time / 1e3;
this.setTotalProgress(e);
this.setCurrentProgress(e);
this.setTimeWarning(5);
this.turnOnTimer();
var i = t.m_betchip;
if (this.isItMe()) if (i > 0) {
if (cc.isValid(this._actionController)) {
i > this._desk.UserChip && (i = this._desk.UserChip);
this._actionController.showCallRaise(i, this._desk.UserChip, this.m_total_bet);
}
} else cc.isValid(this._actionController) && this._actionController.showCheck(i, this._desk.UserChip, this.m_total_bet); else cc.isValid(this._actionController) && this._actionController.hideAllActions();
},
onFoldEvent: function() {
Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/fold-tag");
this.turnOffTimer();
cc.isValid(this._actionController) && this._actionController.hideAllActions();
this.Hands.active = !1;
},
onCheckEvent: function() {
this.BetChip.active = !1;
Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/check-tag");
cc.isValid(this._actionController) && this._actionController.hideAllActions();
},
onCallEvent: function(t) {
Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/call-tag");
var e = t.m_chip;
this.m_total_bet += e;
this.showBetChip(this.m_total_bet);
this._desk.UserChip -= e;
this.setMoney(this._desk.UserChip);
cc.isValid(this._actionController) && this._actionController.hideAllActions();
},
onRaiseEvent: function(t) {
Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/rasie-tag");
var e = t.m_chip;
this.m_total_bet += e;
this.showBetChip(this.m_total_bet);
this._desk.UserChip -= e;
this.setMoney(this._desk.UserChip);
cc.isValid(this._actionController) && this._actionController.hideAllActions();
},
onAllInEvent: function(t) {
Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/all-in-tag");
var e = t.m_chip;
this.m_total_bet += e;
this.showBetChip(this.m_total_bet);
this._desk.UserChip -= e;
this.setMoney(this._desk.UserChip);
cc.isValid(this._actionController) && this._actionController.hideAllActions();
},
onShowDownEvent: function(t) {
this.turnOffTimer();
this.Hands.active = !0;
this.BetChip.active = !1;
for (var e = 0; e < this.cards.length; e++) {
var n = this.cards[e].getComponent("Card");
this.isItMe() ? n.init(new i.Card(t[e])) : n.reveal(new i.Card(t[e]));
}
},
onGameFinishEvent: function(t, e, i) {
this.turnOffTimer();
if (i > 0) {
this._desk.UserChip += i;
this.setMoney(this.getDesk().UserChip);
}
for (var n = 0; n < this.cards.length; n++) {
var s = this.cards[n].getComponent("Card");
s._card && t.indexOf(s._card.id) < 0 && s.showOver();
}
var o = {
HIGHCARD: "Mậu Thầu",
PAIR: "Một Đôi",
TWOPAIR: "Hai Đôi",
THREEOFAKIND: "Xám",
STRAIGHT: "Sảnh",
FLUSH: "Thùng",
FULLHOUSE: "Củ Lũ",
FOUROFAKIND: "Tứ Quý",
STRAIGHTFLUSH: "Sảnh Thùng",
ROYALFLUSH: "Thùng Phá Sảnh"
};
if (o[e]) {
this.TypeOfHand.node.active = !0;
this.TypeOfHand.string = o[e];
}
this.m_total_bet = 0;
},
onWinnerEvent: function() {
this.showWinEffect();
this.turnOffTimer();
},
showBetChip: function(t) {
if (!(t <= 0)) {
this.BetChip.active = !0;
this.BetChip.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(t.toFixed(0));
}
},
turnOffTimer: function() {
this._super();
cc.isValid(this._actionController) && this._actionController.hideAllActions();
},
showBetting: function() {
this.turnOnTimer();
cc.isValid(this._actionController) && this._actionController.showCheck(this.m_total_bet, this._desk.UserChip, this.m_total_bet);
},
resetBet: function() {
this.m_total_bet = 0;
this.BetChip.active = !1;
}
});
cc._RF.pop();
}, {
PokerCard: "PokerCard"
} ],
Player: [ function(t, e) {
"use strict";
cc._RF.push(e, "873b8/Bpl9O9p48P2WXbeiQ", "Player");
cc.Player = cc.Class({
extends: cc.VozBaseComponent,
properties: {
emoijNode: cc.Node,
state: cc.Node,
Status: cc.Node,
avatar: cc.Node,
progressBar: cc.ProgressBar,
sp_avatar: cc.Sprite,
_tick: 0,
_desk: null,
_totalTimeProgress: 30,
_remainTurnTime: 30,
_timeWarning: 5,
_cbCompleteProgress: null,
_cbWarning: null,
_isWarning: !1,
lb_name: cc.Label,
lb_money: cc.Label,
SitOut: cc.Node,
MoneyWin: cc.Label,
zoneName: "portal"
},
onLoad: function() {
this._totalTimeProgress = 30;
this._remainTurnTime = this._totalTimeProgress;
this._timeWarning = 5;
this._tick = 0;
},
onEnable: function() {
this.zoneName = "portal";
this.state.active = !1;
this.Status.active = !1;
this.SitOut.active = !1;
cc.isValid(this.MoneyWin) && (this.MoneyWin.active = !1);
},
showMoneyWinEffect: function(t) {
if (t > 0) {
this.showWinEffect();
this.showMoneyWin(t);
} else this.showMoneyWin(t);
},
showMoneyWin: function(t, e) {
var i = t > 0 ? "+" : "-";
this.MoneyWin.string = i + "" + Utils.addDotToNumber(Math.abs(t));
this.MoneyWin.node.active = !0;
this.MoneyWin.node.stopAllActions();
this.MoneyWin.node.position = cc.v2(0, 20);
var n = cc.v2(0, 120), s = this;
this.MoneyWin.node.runAction(cc.sequence(cc.moveTo(1, n).easing(cc.easeOut(.5)), cc.delayTime(2), cc.callFunc(function() {
s.MoneyWin.string = 0;
s.MoneyWin.node.active = !1;
e && e();
})));
},
setDesk: function(t) {
this.turnOffTimer();
this._desk = t;
this.updateDeskInfo();
},
showWinEffect: function() {
mm.audio.playWin();
this.node.getChildByName("PokerWinEffect").active = !0;
this.node.getChildByName("PokerWinEffect").getChildByName("Win1").getComponent(sp.Skeleton).setAnimation(0, "Idle", !0);
this.node.getChildByName("PokerWinEffect").getChildByName("Win2").getComponent(sp.Skeleton).setAnimation(0, "Idle", !0);
this.node.getChildByName("thang-text").active = !0;
},
hideWinEffect: function() {
this.node.getChildByName("PokerWinEffect").getChildByName("Win1").getComponent(sp.Skeleton).setAnimation(0, "NONE", !1);
this.node.getChildByName("PokerWinEffect").getChildByName("Win2").getComponent(sp.Skeleton).setAnimation(0, "NONE", !1);
this.node.getChildByName("PokerWinEffect").active = !1;
this.node.getChildByName("thang-text").active = !1;
},
updateDeskInfo: function() {
if (this._desk) {
this.setNameDisplay(this._desk.displayName);
this.setMoney(this._desk.UserChip);
this.isItMe() ? Utils.loadRes(this.sp_avatar, "images/avatar/" + Config.getDefaultAvatar()) : Utils.loadRes(this.sp_avatar, "images/avatar/" + (this._desk.DeskId + 1));
}
},
getDesk: function() {
return this._desk;
},
isItMe: function() {
return this._desk.UserName == PortalManager.getGameController(this.zoneName).ZoneInstance.mySelf.name;
},
setNameDisplay: function(t) {
this.lb_name.string = null == t || null == t ? "Guest" : Utils.formatText(t, 12);
},
setMoney: function(t) {
this.lb_money.string = Utils.addDotToNumber(t);
},
addEventTimerComplete: function(t) {
this._cbCompleteProgress = t;
},
addEventTimerWarning: function(t) {
this._cbWarning = t;
},
setTimeWarning: function(t) {
this._timeWarning = t;
},
setCurrentProgress: function(t) {
this._remainTurnTime = t;
},
setTotalProgress: function(t) {
this._totalTimeProgress = t;
},
setSitOut: function(t) {
this.SitOut.active = t;
},
turnOnTimer: function() {
this.turnOffTimer();
this.progressBar.node.active = !0;
this.progressBar.progress = 0;
this._tick = 1e3 * this._remainTurnTime + Date.now();
this.unschedule(this.updateTimer, .1);
this.schedule(this.updateTimer, .1);
},
turnOffTimer: function() {
this._cbCompleteProgress = null;
this._cbWarning = null;
this._isWarning = !1;
this.progressBar.node.active = !1;
this.unschedule(this.updateTimer, .1);
},
updateTimer: function() {
var t = (1e3 * this._totalTimeProgress + Date.now() - this._tick) / 1e3;
if (t <= this._totalTimeProgress) {
this.progressBar.progress = t / this._totalTimeProgress;
if (!this._isWarning && this._totalTimeProgress - t <= this._timeWarning) {
this._isWarning = !0;
this._cbWarning && this._cbWarning();
}
} else {
this._cbCompleteProgress && this._cbCompleteProgress();
this.turnOffTimer();
}
},
updatePosHand: function() {},
onPreStartEvent: function() {
this.reset();
},
onStartEvent: function() {},
onTurnEvent: function() {},
onFoldEvent: function() {},
reset: function() {
this.MoneyWin.node.active = !1;
this.state.active = !1;
this.Status.active = !1;
this.hideWinEffect();
},
onPublicMessage: function(t) {
if (null != this.emoijNode) {
var e = t.indexOf("emoij_") >= 0, i = this.emoijNode.getChildByName("EMOJ"), n = this.emoijNode.getChildByName("box");
i.active = !1;
n.active = !1;
if (e) {
i.active = !0;
i.opacity = 255;
var s = t.replace("emoij_", "");
i.stopAllActions();
i.getComponent(sp.Skeleton).setAnimation(0, s, !1);
i.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function() {
i.active = !1;
})));
} else {
n.active = !0;
n.opacity = 255;
n.stopAllActions();
n.getChildByName("lb_chat").getComponent(cc.Label).string = t;
n.getComponent(cc.Layout).updateLayout();
n.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function() {
n.active = !1;
})));
}
}
}
});
cc._RF.pop();
}, {} ],
PokerCard: [ function(t, e) {
"use strict";
cc._RF.push(e, "4755dZzhK9Puplv67j3dyWP", "PokerCard");
var i = {
Heart: 0,
Diamond: 1,
Spade: 2,
Club: 3
}, n = "heart,diamond,spade,club".split(","), s = "2,3,4,5,6,7,8,9,10,11,12,13,1".split(",");
function o(t) {
Object.defineProperties(this, {
point: {
value: t % 13,
writable: !1
},
suit: {
value: Math.floor(t / 13),
writable: !1
},
id: {
value: t,
writable: !1
},
pointName: {
get: function() {
return s[this.point];
}
},
suitName: {
get: function() {
return n[this.suit];
}
},
nameFile: {
get: function() {
return parseInt(this.pointName) + 13 * this.suit;
}
},
color: {
get: function() {
return this.suit == i.Diamond || this.suit == i.Heart ? cc.Color.RED : cc.Color.BLACK;
}
}
});
}
o.prototype.toString = function() {
return this.pointName + " " + this.suitName;
};
e.exports = {
Card: o,
Suit: i
};
cc._RF.pop();
}, {} ],
PokerController: [ function(t, e) {
"use strict";
cc._RF.push(e, "3b3b55n9AFBKJe6Zd+TQepU", "PokerController");
var i = t("PokerEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
QuickJoinRoomConfig: {},
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES, this.onGroupRoomEvent, this);
this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES, this.onQuickJoinRoom, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.LOAD_TABLE_INFO_RES, this.onLoadTableEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_SIT_ON_RES, this.onUserSitOn, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.PRE_START, this.onPreStart, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.START, this.onStartEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_TURN_RES, this.onUserTurn, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_SIT_OUT_RES, this.onUserSitOut, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.STAND_UP_RES, this.onUserStandUp, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_FOLD_RES, this.onUserFold, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_CALL_RES, this.onUserCall, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_CHECK_RES, this.onUserCheck, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_RAISE_RES, this.onUserRaise, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.USER_GOING_ALL_RES, this.onUserAllIn, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.GAME_TURN_RES, this.onGameTurn, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.SHOW_DOWN_RES, this.onShowDown, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.FINISH_GAME_RES, this.onFinishGame, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.KICK_USER_RES, this.onKickUser, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES, this.onGroupRoomEvent, this);
this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES, this.onQuickJoinRoom, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.LOAD_TABLE_INFO_RES, this.onLoadTableEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_SIT_ON_RES, this.onUserSitOn, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.PRE_START, this.onPreStart, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.START, this.onStartEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_TURN_RES, this.onUserTurn, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_SIT_OUT_RES, this.onUserSitOut, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.STAND_UP_RES, this.onUserStandUp, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_FOLD_RES, this.onUserFold, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_CALL_RES, this.onUserCall, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_CHECK_RES, this.onUserCheck, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_RAISE_RES, this.onUserRaise, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.USER_GOING_ALL_RES, this.onUserAllIn, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.GAME_TURN_RES, this.onGameTurn, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.SHOW_DOWN_RES, this.onShowDown, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.FINISH_GAME_RES, this.onFinishGame, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.KICK_USER_RES, this.onKickUser, this);
},
onEventLogin: function(t) {
this._super(t);
var e = new CasinoRequest.GroupGameRequest();
e.setGame(this.zoneName);
this.ZoneInstance.send(e.toSRequest());
},
getUILobby: function() {
var t = cc.director.getScene(), e = cc.find("UILobby", t);
return e.getComponent(e.name);
},
onLeaderBoardEvent: function(t) {
for (var e = [], i = t.getSArray("d"), n = 0; n < i.size(); n++) {
var s = i.get(n).getObject(), o = {};
o.session = n + 1;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
e.push(o);
}
this.getUILobby() && this.getUILobby().updateRank(e);
},
onGroupRoomEvent: function(t) {
var e = new CasinoEvent.GroupGameEvent().fromEvent(t);
null == mm.game && (mm.game = {});
mm.game[this.zoneName] = {};
mm.game[this.zoneName].groups = e.groups;
mm.game[this.zoneName].displayname = GameVariables.getDisplayName(this.ZoneInstance.mySelf);
mm.game[this.zoneName].chip = GameVariables.getChip(this.ZoneInstance.mySelf);
UIManger.show("UILobby", {
pop: !0,
data: {
game: this.zoneName,
ZoneInstance: this.ZoneInstance
}
}, function() {
var t = new CasinoRequest.LeaderBoardRequest();
this.ZoneInstance.send(t.toSRequest());
}.bind(this));
},
onQuickJoinRoom: function(t) {
var e = new CasinoEvent.QuickJoinGameEvent().fromEvent(t);
e.roomId >= 0 ? this.ZoneInstance.send(new CasinoRequest.JoinRoomRequest(e.roomId, "1", !0).toSRequest()) : mm.Toast.showToast(1, "Phòng đã đầy vui vòng chọn phòng khác");
},
onLoadTableEvent: function(t) {
var e = {
pop: !0,
data: {
room: this.room,
buy_in: this.QuickJoinRoomConfig.buy_in,
number_desk: this.QuickJoinRoomConfig.number_desk
}
};
this.preLoadUI(e, function() {
mm.Loading.hide();
this.getUI().controller = this;
this.QuickJoinRoomConfig.betChip = GameVariables.Poker.getBetChip(this.room);
this.QuickJoinRoomConfig.roomId = this.room.id;
this.getUI().setInfoTable("Poker / #" + this.room.id, Utils.formatCurrency(this.QuickJoinRoomConfig.betChip));
this.m_tableInfo = new i.LoadTableInfoEvent().fromEvent(t);
this.m_tableInfo.room = this.room;
(!this.m_tableInfo.m_isGameStart || this.m_tableInfo.m_listActiveUserName.indexOf(this.ZoneInstance.mySelf.name) < 0) && this.getUI().requestSitOn();
this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);
this.m_tableInfo.m_isPrestart && !this.m_tableInfo.m_isGameStart && this.getUI().setWaitingTimer(!0, 5, this.m_tableInfo.m_isPrestart / 100);
if (this.m_tableInfo.m_isGameStart) {
this.getUI().turnOffAllTimerPlayers();
this.getUI().getCommunityCard().showCommunityCard(mm.m_tableInfo.m_listCommunityCard);
for (var e = 0; e < this.m_tableInfo.m_listActiveUserName.length; e++) {
var n = this.getUI()._getJSPlayerByName(this.m_tableInfo.m_listActiveUserName[e]);
if (n) {
n.addCardHand(this.m_tableInfo.m_listHandCard[e]);
n.showBetChip(this.m_tableInfo.m_listBetChip[e]);
}
}
this.getUI().setMoneyPot(this.m_tableInfo.m_potChip);
}
this.getUI().hideDeskEmpty();
}.bind(this));
},
onUserSitOn: function(t) {
var e = new i.UserSitOnEvent().fromEvent(t), n = {};
n.DeskId = e.m_deskId;
n.UserName = e.m_userName;
n.DeskState = e.m_deskState;
n.UserChip = e.m_buyIn;
this.m_tableInfo.m_listDesk.push(n);
this.m_tableInfo.m_listUser.push(e.m_userName);
this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);
},
onPreStart: function(t) {
var e = new i.PreStartEvent().fromEvent(t);
this.m_tableInfo.m_isPrestart = e.m_isPrestart;
this.m_tableInfo.m_prestartTime = e.m_prestartTime;
this.m_tableInfo.m_isGameStart = !1;
this.getUI().getCommunityCard().reset();
this.getUI().setMoneyPot(-1);
this.m_tableInfo.m_total_bet = 0;
this.getUI().hidePokerTextWinner();
for (var n = 0; n < this.m_tableInfo.m_listDesk.length; n++) {
var s = this.m_tableInfo.m_listDesk[n];
this.getUI()._getJSPlayerById(s.DeskId).onPreStartEvent(e);
}
e.m_isPrestart && this.getUI().setWaitingTimer(!0, e.m_prestartTime / 1e3, e.m_prestartTime / 1e3);
this.getUI().showDeskEmpty();
this.m_tableInfo.m_listUserSitOut.indexOf(this.ZoneInstance.mySelf.name) >= 0 && this.getUI().requestLeaveRoom();
this.getUI().countOut >= 1 && this.getUI().requestLeaveRoom();
},
onStartEvent: function(t) {
this.getUI().countOut++;
this.getUI().setWaitingTimer(!1);
var e = new i.StartEvent().fromEvent(t);
this.m_tableInfo.m_dealer = e.m_dealer;
this.m_tableInfo.m_smallBlind = e.m_smallBlind;
this.m_tableInfo.m_bigBlind = e.m_bigBlind;
this.m_tableInfo.m_betChipGame = e.m_betChipGame;
this.m_tableInfo.m_currentUser = e.m_currentUser;
this.m_tableInfo.m_userTime = e.m_userTime;
this.m_tableInfo.m_isGameStart = !0;
if (this.m_tableInfo.m_listActiveUserName) {
for (var n = [], s = 0; s < this.m_tableInfo.m_listActiveUserName.length; s++) e.m_listActiveUserName.indexOf(this.m_tableInfo.m_listActiveUserName[s]) < 0 && n.push(this.m_tableInfo.m_listActiveUserName[s]);
this.getUI().removePlayer(n);
}
this.m_tableInfo.m_listActiveUserName = e.m_listActiveUserName;
this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);
if (this.getUI()._isPlayer(this.ZoneInstance.mySelf.name)) {
var o = this.getUI()._getPlayerId(this.ZoneInstance.mySelf.name);
this.getUI()._getJSPlayerById(o).setActionController(this.getUI().getAction());
}
for (var a = 0; a < this.m_tableInfo.m_listDesk.length; a++) {
var c = this.m_tableInfo.m_listDesk[a];
this.getUI()._getJSPlayerById(c.DeskId).onStartEvent(e);
}
this.getUI().hideDeskEmpty();
},
onUserTurn: function(t) {
this.getUI().turnOffAllTimerPlayers();
var e = new i.UserTurnEvent().fromEvent(t);
this.m_tableInfo.m_currentUser = e.m_username;
this.m_tableInfo.m_userTime = e.m_time;
var n = this.getUI()._getPlayerId(e.m_username), s = this.getUI()._getJSPlayerById(n);
s && s.onTurnEvent(e);
},
onGameTurn: function(t) {
this.getUI().turnOffAllTimerPlayers();
var e = new i.GameTurnEvent().fromEvent(t), n = e.m_currentUser, s = this.getUI().getCommunityCard(), o = e.m_currentGameTurn, a = !1;
this.getUI().processBetChipToPot(function() {
if (!a) {
a = !0;
"BETTING" == o || ("FLOP" == o ? s.dealFlop(e.m_listCommunityCard) : "TURN" == o ? s.dealTurn(e.m_listCommunityCard) : "RIVER" == o ? s.dealRiver(e.m_listCommunityCard) : "END" == o || console.log("UNKOWN TURN " + o));
}
});
var c = this.getUI()._getJSPlayerByName(n);
c && c.showBetting();
},
onUserFold: function(t) {
var e = new i.UserFoldEvent().fromEvent(t), n = this.getUI()._getJSPlayerByName(e.m_username);
n && n.onFoldEvent(e);
e.m_username == this.ZoneInstance.mySelf.name && (this.getUI().countOut = 0);
},
onUserCall: function(t) {
var e = new i.UserCallEvent().fromEvent(t), n = this.getUI()._getJSPlayerByName(e.m_username);
n && n.onCallEvent(e);
e.m_username == this.ZoneInstance.mySelf.name && (this.getUI().countOut = 0);
},
onUserCheck: function(t) {
var e = new i.UserCheckEvent().fromEvent(t), n = this.getUI()._getJSPlayerByName(e.m_username);
n && n.onCheckEvent(e);
e.m_username == this.ZoneInstance.mySelf.name && (this.getUI().countOut = 0);
},
onUserRaise: function(t) {
var e = new i.UserRaiseEvent().fromEvent(t), n = this.getUI()._getJSPlayerByName(e.m_username);
n && n.onRaiseEvent(e);
e.m_username == this.ZoneInstance.mySelf.name && (this.getUI().countOut = 0);
},
onUserAllIn: function(t) {
var e = new i.UserAllInEvent().fromEvent(t), n = this.getUI()._getJSPlayerByName(e.m_username);
n && n.onAllInEvent(e);
e.m_username == this.ZoneInstance.mySelf.name && (this.getUI().countOut = 0);
},
onShowDown: function(t) {
this.getUI().processBetChipToPot();
var e = new i.ShowDownEvent().fromEvent(t);
this.getUI().getCommunityCard().showDown(e.m_listComCard);
for (var n = 0; n < e.m_listUser.length; n++) {
var s = e.m_listUser[n], o = this.getUI()._getJSPlayerByName(s);
o && o.onShowDownEvent(e.m_listCard[n]);
}
},
onFinishGame: function(t) {
this.getUI().turnOffAllTimerPlayers();
var e = new i.FinishGameEvent().fromEvent(t);
this.getUI().getCommunityCard().showCommunityCardWin(e.m_listPokerHandCard);
for (var n = 0; n < e.m_listUser.length; n++) {
var s = e.m_listUser[n], o = this.getUI()._getJSPlayerByName(s);
if (o) {
if (e.m_listWinner.indexOf(s) >= 0) {
var a = e.m_listPokerHand[n];
this.getUI().showPokerTextWinner(a);
this.getUI().runActionPotChipToWinner(e.m_listChip[n], s, function(t, e) {
e.onWinnerEvent();
}, o);
}
o.onGameFinishEvent(e.m_listPokerHandCard, e.m_listPokerHand[n], e.m_listChip[n]);
}
}
this.m_tableInfo.m_potChip = 0;
this.m_tableInfo.m_isGameStart = !1;
this.getUI().setMoneyPot(this.m_tableInfo.m_potChip);
},
onUserSitOut: function(t) {
mm.Loading.hide();
var e = new i.UserSitOutEvent().fromEvent(t), n = this.m_tableInfo.m_listUserSitOut.indexOf(e.m_username);
n < 0 ? this.m_tableInfo.m_listUserSitOut.push(e.m_username) : e.m_isSitOut || this.m_tableInfo.m_listUserSitOut.splice(n, 1);
var s = this.getUI()._getJSPlayerByName(e.m_username);
s && s.setSitOut(e.m_isSitOut);
this.ZoneInstance.mySelf.name == e.m_username && (e.m_isSitOut ? mm.Toast.showToast(1, "Đăng ký rời bàn!") : mm.Toast.showToast(1, "Hủy rời bàn!"));
},
onKickUser: function(t) {
var e = new i.KickUserEvent().fromEvent(t);
if (2 == e.m_resType && null != this.getUI()._getJSPlayerByName(e.m_username)) {
this.getUI().removePlayer([ e.m_username ]);
this.ZoneInstance.mySelf.name == e.m_username && this.getUI().requestLeaveRoom();
}
},
onUserStandUp: function() {},
onPublicMessage: function(t) {
var e = t.sender, i = t.message, n = t.data, s = null != n ? {
dn: n.get("dn"),
fb: n.get("fb")
} : {
dn: "...",
fb: ""
}, o = {};
o.sender = e;
o.msg = i;
o.dataSender = s;
this.getUI().onPublicMessage(o);
}
}), s = null;
SmartFoxSDK.PokerController = e.exports = function() {
null == s && (s = new n("UIPoker", "poker"));
return s;
}();
cc._RF.pop();
}, {
PokerEvent: "PokerEvent"
} ],
PokerEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "dd14aRI+ihOm7BdSvbQCYJV", "PokerEvent");
var i = {
RESPONSE_NAME: {
FINISH_GAME_RES: "game_finish_res",
STAND_UP_RES: "stand_up_res",
LOAD_TABLE_INFO_RES: "load_table_info_res",
USER_SIT_ON_RES: "user_sit_on_res",
USER_SIT_OUT_RES: "user_sit_out_res",
START: "start_res",
PRE_START: "pre_start_res",
KICK_USER_RES: "kick_user_res",
USER_READY_RES: "user_ready_res",
SHOW_DOWN_RES: "show_down_res",
USER_BET_RES: "user_bet_res",
USER_CALL_RES: "user_call_res",
USER_CHECK_RES: "user_check_res",
USER_FOLD_RES: "user_fold_res",
USER_RAISE_RES: "user_raise_res",
USER_GOING_ALL_RES: "user_going_all_res",
GAME_TURN_RES: "game_turn_res",
USER_TURN_RES: "user_turn_res",
USER_BUY_IN_RES: "user_buy_in_res",
LEVEL_TURN_RES: "level_turn_res",
PAY_ANTE_RES: "pay_ante_res"
}
};
i.LoadTableInfoEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LOAD_TABLE_INFO_RES);
this.m_isGameStart = !1;
this.m_isPrestart = !1;
this.m_prestartTime = 0;
this.m_listDesk = [];
this.m_listUserSitOut = [];
this.m_listUser = [];
this.m_listActiveUserName = [];
this.m_listHandCard = [];
this.m_listBetChip = [];
this.m_listCommunityCard = [];
this.m_potChip = 0;
this.m_dealer = "";
this.m_smallBlind = 0;
this.m_bigBlind = 0;
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.LOAD_TABLE_INFO_RES);
this.m_isGameStart = e.getBool("is_game_start");
this.m_isPrestart = e.getBool("is_prestart");
this.m_prestartTime = e.getInt("prestart_time");
this.m_potChip = e.getDouble("pot_chip");
this.m_dealer = e.getUtfString("dealer");
this.m_smallBlind = e.getUtfString("small_blind");
this.m_bigBlind = e.getUtfString("big_blind");
for (var n = e.getSArray("list_desk"), s = 0; s < n.size(); s++) {
var o = this.deskFromSObject(n.get(s).getObject());
this.m_listDesk.push(o);
}
for (var a = e.getSArray("list_user_sit_out"), c = 0; c < a.size(); c++) this.m_listUserSitOut.push(a.get(c).getObject());
for (var r = e.getSArray("list_player"), h = 0; h < r.size(); h++) this.m_listUser.push(r.get(h).getObject());
for (var l = e.getSArray("list_active_user"), u = 0; u < l.size(); u++) this.m_listActiveUserName.push(l.get(u).getObject());
for (var m = e.getSArray("list_Hand_Card"), d = 0; d < m.size(); d++) {
for (var p = m.get(d).getObject(), g = [], f = 0; f < p.size(); f++) g.push(p.get(f).getObject());
this.m_listHandCard[d] = g;
}
for (var _ = e.getSArray("list_bet_chip"), S = 0; S < _.size(); S++) this.m_listBetChip.push(_.get(S).getObject());
for (var v = e.getSArray("list_comminity_card"), C = 0; C < v.size(); C++) this.m_listCommunityCard.push(v.get(C).getObject());
return this;
},
deskFromSObject: function(t) {
var e = {};
e.DeskId = t.getInt("deskID");
e.UserName = t.getUtfString("userName");
e.DeskState = t.getUtfString("deskState");
e.UserChip = t.getDouble("chip");
return e;
}
});
i.UserSitOnEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_SIT_ON_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_SIT_ON_RES);
this.m_deskId = e.getInt("deskID");
this.m_userName = e.getUtfString("username");
this.m_userChip = e.getDouble("chip");
this.m_buyIn = e.getDouble("buy_in");
this.m_deskState = e.getUtfString("deskState");
this.m_currentUser = e.getUtfString("currentUser");
return this;
}
});
i.UserSitOutEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_SIT_OUT_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_SIT_OUT_RES);
this.m_username = e.getUtfString("user_name");
this.m_isSitOut = e.getBool("is_sit_out");
return this;
}
});
i.PreStartEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.PRE_START);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.PRE_START);
this.m_isPrestart = e.getBool("is_prestart");
this.m_prestartTime = e.getInt("time");
return this;
}
});
i.StartEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.START);
this.m_listCard = [];
this.m_listActiveUserName = [];
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.START);
this.m_dealer = e.getUtfString("dealer");
this.m_smallBlind = e.getUtfString("small_blind");
this.m_bigBlind = e.getUtfString("big_blind");
this.m_currentUser = e.getUtfString("current_user");
this.m_userTime = e.getInt("user_time");
this.m_betChipGame = e.getDouble("bet_chip_game");
this.m_isTurnNextLevel = e.getBool("is_turn_next_level");
e.containsKey("level_time_life") ? this.m_levelTimeLife = e.getInt("level_time_life") : this.m_levelTimeLife = -1;
for (var n = e.getSArray("list_card"), s = 0; s < n.size(); s++) this.m_listCard.push(n.get(s).getObject());
for (var o = e.getSArray("list_active_user_name"), a = 0; a < o.size(); a++) this.m_listActiveUserName.push(o.get(a).getObject());
return this;
}
});
i.UserTurnEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_TURN_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_TURN_RES);
this.m_username = e.getUtfString("user_name");
this.m_betchip = e.getDouble("bet_chip");
this.m_time = e.getInt("time");
return this;
}
});
i.UserFoldEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_FOLD_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_FOLD_RES);
this.m_username = e.getUtfString("user_name");
return this;
}
});
i.UserCallEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_CALL_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_CALL_RES);
this.m_username = e.getUtfString("user_name");
this.m_chip = e.getDouble("chip");
return this;
}
});
i.UserCheckEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_CHECK_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_CHECK_RES);
this.m_username = e.getUtfString("user_name");
return this;
}
});
i.UserRaiseEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_RAISE_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_RAISE_RES);
this.m_username = e.getUtfString("user_name");
this.m_chip = e.getDouble("chip");
return this;
}
});
i.UserAllInEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.USER_GOING_ALL_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.USER_GOING_ALL_RES);
this.m_username = e.getUtfString("user_name");
this.m_chip = e.getDouble("chip");
return this;
}
});
i.GameTurnEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.GAME_TURN_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.GAME_TURN_RES);
this.m_currentUser = e.getUtfString("current_user");
this.m_currentGameTurn = e.getUtfString("current_game_turn");
this.m_time = e.getInt("time");
this.m_listCommunityCard = [];
for (var n = e.getSArray("list_community_card"), s = 0; s < n.size(); s++) this.m_listCommunityCard.push(n.get(s).getObject());
return this;
}
});
i.ShowDownEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.SHOW_DOWN_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.SHOW_DOWN_RES);
this.m_currentGameTurn = e.getUtfString("current_game_turn");
this.m_listUser = [];
for (var n = e.getSArray("list_user"), s = 0; s < n.size(); s++) this.m_listUser.push(n.get(s).getObject());
this.m_listCard = [];
for (var o = e.getSArray("list_card"), a = 0; a < o.size(); a++) {
for (var c = o.get(a).getObject(), r = [], h = 0; h < c.size(); h++) r.push(c.get(h).getObject());
this.m_listCard.push(r);
}
this.m_listComCard = [];
for (var l = e.getSArray("list_community_card"), u = 0; u < l.size(); u++) this.m_listComCard.push(l.get(u).getObject());
return this;
}
});
i.FinishGameEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.FINISH_GAME_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.FINISH_GAME_RES);
this.m_listUser = [];
for (var n = e.getSArray("list_user"), s = 0; s < n.size(); s++) this.m_listUser.push(n.get(s).getObject());
this.m_listPokerHand = [];
for (var o = e.getSArray("list_poker_Hand"), a = 0; a < o.size(); a++) this.m_listPokerHand.push(o.get(a).getObject());
this.m_listChip = [];
for (var c = e.getSArray("list_chip"), r = 0; r < c.size(); r++) this.m_listChip.push(c.get(r).getObject());
this.m_listPokerHandCard = [];
for (var h = e.getSArray("list_poker_hand_card"), l = 0; l < h.size(); l++) this.m_listPokerHandCard.push(h.get(l).getObject());
this.m_listWinner = [];
for (var u = e.getSArray("list_winner"), m = 0; m < u.size(); m++) this.m_listWinner.push(u.get(m).getObject());
return this;
}
});
i.KickUserEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.KICK_USER_RES);
},
fromEvent: function(t) {
var e = t.get(i.RESPONSE_NAME.KICK_USER_RES);
this.m_resType = e.getInt("response_type");
this.m_username = e.getUtfString("user_name");
return this;
}
});
window.PokerEvent = e.exports = i;
cc._RF.pop();
}, {} ],
PokerRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "e7f87GFHhxAeqSTT1R7ktC6", "PokerRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbAccount: cc.Label,
lbWin: cc.Label
},
init: function(t) {
this.lbSession.string = t.session;
this.lbAccount.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
PokerRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "b887dBbWNJHPpY0Na4t+Oaz", "PokerRequest");
var i = {
POKER_REQUEST_NAME: {
LEAVE_GAME_REQUEST: "leave_game_request",
DO_BET_REQUEST: "do_bet_request",
GAME_REPORTED_REQUEST: "game_reported_request",
SIT_ON_REQ: "sit_on_req",
SIT_OUT_REQ: "sit_out_req",
STAND_UP_REQ: "stand_up_req",
BET_REQ: "bet_req",
CALL_REQ: "call_req",
RAISE_REQ: "raise_req",
CHECK_REQ: "check_req",
FOLD_REQ: "fold_req",
GOING_ALL_REQ: "going_all_req",
CONFIRM_READY_GAME: "confirm_ready_game_req"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = void 0;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.SitOnRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.SIT_ON_REQ);
},
setDeskId: function(t) {
this._params.putInt(this.constructor.DESK_ID, t);
return this;
},
setBuyIn: function(t) {
this._params.putDouble(this.constructor.BUY_IN, t);
return this;
},
setAutoSitOn: function() {
this._params.putInt(this.constructor.AUTO_SIT_ON, -10);
return this;
}
});
i.SitOnRequest.DESK_ID = "deskid";
i.SitOnRequest.BUY_IN = "buy_in";
i.SitOnRequest.AUTO_SIT_ON = "auto_sit";
i.SitOutRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.SIT_OUT_REQ);
},
setSitOut: function(t) {
this._params.putBool(this.constructor.IS_SIT_OUT, t);
return this;
}
});
i.SitOutRequest.IS_SIT_OUT = "is_sit_out";
i.StandUpRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.STAND_UP_REQ);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.BET_REQ);
},
setBet: function(t) {
this._params.putDouble(this.constructor.BET_CHIP, t);
return this;
}
});
i.BetRequest.BET_CHIP = "bet_chip";
i.CallRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.CALL_REQ);
}
});
i.CheckRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.CHECK_REQ);
}
});
i.FoldRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.FOLD_REQ);
}
});
i.RaiseRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.RAISE_REQ);
},
setBetChip: function(t) {
this._params.putDouble(this.constructor.BET_CHIP, t);
return this;
}
});
i.RaiseRequest.BET_CHIP = "bet_chip";
i.AllInRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.GOING_ALL_REQ);
}
});
i.ConfirmReadyRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.CONFIRM_READY_GAME);
}
});
i.LeaveGameRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.POKER_REQUEST_NAME.LEAVE_GAME_REQUEST);
}
});
window.PokerRequest = i;
cc._RF.pop();
}, {} ],
PortalController: [ function(t, e) {
"use strict";
cc._RF.push(e, "24959Fm7pdDmb0wGbtw/yw8", "PortalController");
var i = t("UIManager"), n = SmartFoxSDK.BaseController.extend({
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES, this.onTransferMoney, this);
this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES, this.onChangePassword, this);
this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES, this.onGiftCode, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES, this.onTransferMoney, this);
this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES, this.onChangePassword, this);
this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES, this.onGiftCode, this);
},
onEventConnection: function(t) {
if (t.success) if (this.register) {
this.register = !1;
var e = i.getUIFromName("UIRegister");
e.getComponent(e.name).eventClickRegister();
} else this.loginZone(this.un, this.pass); else this._reset();
},
onEventLogin: function(t) {
this._super(t);
mm.isLogin = !0;
UIManger.show("UIHome");
Config.saveUsername(this.un);
Config.savePass(this.pass);
},
onHistoryEvent: function(t) {
mm.Loading.hide();
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n + 1;
o.time = s.getUtfString("t");
o.amount = s.getDouble("am");
o.chip = s.getDouble("c");
o.tax = s.getDouble("tx");
o.des = s.getUtfString("des");
i.push(o);
}
UIManger.show("UIBankLog", {
pop: !0,
src: "portal",
data: {
items: i
}
});
},
onTransferMoney: function(t) {
var e = new CasinoEvent.TransferMoneyEvent().fromEvent(t).code;
1 == e ? mm.Toast.showToast(1, "Chuyển tiền thành công") : 0 == e ? mm.Toast.showToast(1, "Tài khoản nhận không đúng") : 2 == e && mm.Toast.showToast(1, "Bạn không đủ số dư");
mm.Loading.hide();
},
onChangePassword: function(t) {
if (1 == new CasinoEvent.ChangePassEvent().fromEvent(t).code) {
Config.clearUserPass();
mm.Toast.showToast(1, "Đổi mật khẩu thành công");
} else mm.Toast.showToast(1, "Đổi mật khẩu thất bại");
},
onGiftCode: function(t) {
mm.Loading.hide();
var e = new CasinoEvent.GiftCodeEvent().fromEvent(t);
void 0 !== e.ec && null !== e.ec ? mm.Toast.showToast(1, e.ec) : mm.Toast.showToast(1, "Bạn được quà " + Utils.addDotToNumber(e.gift_value));
}
}), s = null;
SmartFoxSDK.PortalController = e.exports = function() {
null == s && (s = new n("UIPortal", "portal"));
return s;
}();
cc._RF.pop();
}, {
UIManager: "UIManager"
} ],
PortalManager: [ function(t, e) {
"use strict";
cc._RF.push(e, "aa39e/ZFQ5OvqWAEZkxOiaz", "PortalManager");
var i = {
getGameController: function(t) {
if ("portal" == t) return SmartFoxSDK.PortalController;
if ("poker" == t) return SmartFoxSDK.PokerController;
if ("tlmn" == t) return SmartFoxSDK.TLMNController;
if ("bacay" == t) return SmartFoxSDK.BaCayController;
if ("maubinh" == t) return SmartFoxSDK.MauBinhController;
if ("kimcuong" == t) return SmartFoxSDK.KimCuongController;
if ("zeus" == t) return SmartFoxSDK.ZeusController;
if ("minipoker" == t) return SmartFoxSDK.MiniPokerController;
if ("taixiu" == t) return SmartFoxSDK.TaiXiuController;
if ("xocdia" == t) return SmartFoxSDK.XocDiaController;
if ("rongho" == t) return SmartFoxSDK.RongHoController;
if ("candy" == t) return SmartFoxSDK.CandyController;
if ("minipoker" == t) return SmartFoxSDK.MiniPokerController;
if ("baccarat" == t) return SmartFoxSDK.BaccaratController;
if ("roulette" == t) return SmartFoxSDK.RouletteController;
if ("sieuxe" == t) return SmartFoxSDK.SieuXeController;
if ("sinbad" == t) return SmartFoxSDK.SinbadController;
if ("vampire" == t) return SmartFoxSDK.VampireController;
console.error("Dont exist game controler " + t);
return null;
},
disconnectAll: function() {
for (var t in Config.zoneConfig) {
var e = i.getGameController(t);
e && e._reset();
}
}
};
window.PortalManager = i;
cc._RF.pop();
}, {} ],
PortalMenu: [ function(t, e) {
"use strict";
cc._RF.push(e, "cce15CVz1BEWr7q5ojTTbkj", "PortalMenu");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
onClickMenu: function() {
mm.audio.playButton();
this.show("UIMenu", {
pop: !0,
src: "portal"
});
},
onClickPayment: function() {
mm.audio.playButton();
mm.isLogin ? this.show("UIPayment", {
pop: !0,
src: "portal",
data: {
nickname: null,
area: "ja"
}
}) : this.show("UILogin", {
pop: !0
});
},
onClickTelegram: function() {
mm.audio.playButton();
cc.sys.openURL("https://t.me/cskh");
},
onClickGiftCode: function() {
mm.audio.playButton();
mm.isLogin ? this.show("UIGiftCode", {
pop: !0,
src: "portal"
}) : this.show("UILogin", {
pop: !0
});
},
onClickDaiLy: function() {
mm.audio.playButton();
mm.isLogin ? this.show("UIDaiLy", {
pop: !0,
src: "portal"
}) : this.show("UILogin", {
pop: !0
});
},
onClickChuyenkhoan: function() {
mm.audio.playButton();
mm.isLogin ? this.show("UIPayment", {
pop: !0,
src: "portal",
data: {
nickname: null,
area: "ja"
}
}) : this.show("UILogin", {
pop: !0
});
},
onClickProfile: function() {
mm.audio.playButton();
mm.isLogin ? this.show("UIProfile", {
pop: !0,
src: "portal"
}) : this.show("UILogin", {
pop: !0
});
},
onClickGroup: function() {
mm.audio.playButton();
cc.sys.openURL("https://www.facebook.com");
},
onClickFacebook: function() {
mm.audio.playButton();
cc.sys.openURL("https://www.facebook.com");
},
onClickEvent: function() {
this.show("UITaiXiuDuaTop", {
pop: !0,
src: "taixiu",
data: "TheLe"
});
}
});
cc._RF.pop();
}, {} ],
RongHoController: [ function(t, e) {
"use strict";
cc._RF.push(e, "ce1f1W1Q3FHpK8BxD09rRTH", "RongHoController");
var i = t("RongHoEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
},
onHistoryEvent: function(t) {
var e = new i.HistoryEvent().fromEvent(t);
this.getUI().show("UIRongHoTransaction", {
pop: !0,
src: "rongho",
data: {
items: e.items
}
});
},
onLeaderBoardEvent: function(t) {
var e = new i.LeaderBoardEvent().fromEvent(t);
this.getUI().show("UIRongHoRank", {
pop: !0,
src: "rongho",
data: {
items: e.items
}
});
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventRoomJoin: function(t) {
this._super(t);
this.getUI() && this.getUI().updateUserCount();
},
onEventUserEnterRoom: function(t) {
this._super(t);
var e = t.user;
if (this.getUI()) {
this.getUI().updateUserCount();
this.getUI().addNodePlayerEnterRoom(e);
}
},
onEventUserExitRoom: function(t) {
var e = t.user;
if (e.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
} else if (this.getUI()) {
this.getUI().updateUserCount();
this.getUI().removeNodePlayer(e);
}
},
onLoadGameEvent: function(t) {
this.preLoadUI({
pop: !0
}, function() {
this.m_tableInfo = new i.LoadGameEvent().fromEvent(t);
this.getUI().controller = this;
cc.lastTime = this.m_tableInfo.time + new Date().getTime() / 1e3;
this.getUI().resetBetRongHo();
this.resumeGame();
}.bind(this));
},
resumeGame: function() {
if (null != this.m_tableInfo) {
this.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1e3);
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
var t = [];
t.push(this.ZoneInstance.mySelf);
for (var e = 0; e < this.getRoom().getUserList().length; e++) {
var i = this.getRoom().getUserList()[e];
i.name != this.ZoneInstance.mySelf.name && t.length < 6 && t.push(i);
}
this.getUI().showListUsers(t);
if (this.m_tableInfo.isBetting) {
this.getUI()._stopEffectWinPot();
this.getUI().ToastDatCua();
this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.isBetting);
} else {
this.getUI()._turnOffTime();
this.getUI().xocxoc(this.m_tableInfo.result, this.m_tableInfo.winpot, this.m_tableInfo.isWin);
}
}
},
onUserBetEvent: function(t) {
var e = new i.BetEvent().fromEvent(t), n = e.userName, s = e.betChip, o = e.typePot;
this.m_tableInfo.listChipPot[o] += s;
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
if (this.ZoneInstance.mySelf.name == n) {
this.m_tableInfo.listMyChipPot[o] += s;
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
}
this.getUI().actionFlyChipToPot(n, o, s);
var a = this.getRoom().getUserByName(n);
a && this.getUI().updateChip(a);
},
onEndBettingEvent: function(t) {
var e = new i.EndBetting().fromEvent(t);
this.m_tableInfo.isBetting = !1;
this.m_tableInfo.result = e.result;
this.m_tableInfo.winpot = e.winpot;
this.m_tableInfo.winChip = e.winChip;
this.getUI()._turnOffTime();
this.getUI().xocxoc(e.result, e.winpot, e.winChip > 0);
},
onPublicMessage: function(t) {
var e = t.sender, i = t.message, n = t.data, s = null != n ? {
dn: n.get("dn"),
fb: n.get("fb")
} : {
dn: "...",
fb: ""
}, o = {};
o.sender = e;
o.msg = i;
o.dataSender = s;
this.getUI().onPublicMessage(o);
}
}), s = null;
SmartFoxSDK.RongHoController = e.exports = function() {
null == s && (s = new n("UIRongHo", "rongho"));
return s;
}();
cc._RF.pop();
}, {
RongHoEvent: "RongHoEvent"
} ],
RongHoEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "7a00de1eQdHdKgPP7X+mSgC", "RongHoEvent");
var i = {
RESPONSE_NAME: {
LOAD_GAME_RES: "rh1",
BET_RES: "rh2",
END_BETTING: "rh3"
}
};
i.LoadGameEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LOAD_GAME_RES);
},
fromEvent: function(t) {
this.isBetting = t.getBool("b");
this.time = t.getInt("t");
this.listChipPot = t.getDoubleArray("lcp");
this.listMyChipPot = t.getDoubleArray("lmcp");
if (!this.isBetting) {
this.result = t.getByteArray("rs");
this.winpot = t.getByteArray("wp");
}
return this;
}
});
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
},
fromEvent: function(t) {
this.userName = t.getUtfString("un");
this.betChip = t.getDouble("c");
this.typePot = t.getByte("t");
return this;
}
});
i.EndBetting = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.END_BETTING);
},
fromEvent: function(t) {
this.result = t.getByteArray("rs");
this.winChip = t.getDouble("wc");
this.winpot = t.getByteArray("wp");
return this;
}
});
i.HistoryEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
this.items = [];
this.ITEM_NAME = [ "Rồng", "Hòa", "Hổ", "3 Trắng", "4 Đen", "4 Trắng" ];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) for (var n = e.get(i).getObject(), s = "#" + n.getDouble("id").toFixed(0), o = n.getUtfString("t"), a = n.getDoubleArray("b"), c = n.getIntArray("di"), r = n.getIntArray("rs"), h = n.getDoubleArray("w"), l = 0; l < a.length - 1; l++) if (a[l] >= 0) {
var u = {};
u.session = s;
u.time = o;
u.dices = c;
u.ketqua = r;
u.stakes = a[l];
u.win = h[l];
u.cuadat = this.ITEM_NAME[l];
u.hoan_tra = 0;
a[1] - a[0] > 0 ? 1 == l && (u.hoan_tra = 0) : 0 == l && (u.hoan_tra = 0);
this.items.push(u);
}
return this;
}
});
i.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES);
this.items = [];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) {
var n = e.get(i).getObject(), s = {};
s.session = i;
s.account = n.getUtfString("dn");
s.win = n.getDouble("m");
s.time = n.getUtfString("t");
this.items.push(s);
}
return this;
}
});
window.RongHoEvent = e.exports = i;
cc._RF.pop();
}, {} ],
RongHoItemRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "fde56TYwKFBkaMdN24wwGVr", "RongHoItemRank");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
listRank: [ cc.SpriteFrame ],
spRank: cc.Sprite,
lbRank: cc.Label,
lbName: cc.Label,
lbWin: cc.Label,
bgItem: cc.Node
},
init: function(t, e) {
if (e < 3) {
this.spRank.node.active = !0;
this.lbRank.node.active = !1;
this.spRank.spriteFrame = this.listRank[e];
} else {
this.spRank.node.active = !1;
this.lbRank.node.active = !0;
this.lbRank.string = e + 1;
}
this.bgItem.active = e % 2 == 0;
this.lbName.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
RongHoItemTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "9e226CcPRRKH66YJcKZFQOS", "RongHoItemTransaction");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lb_cua_dat: cc.Label,
lb_ketqua: cc.Label,
lb_tongdat: cc.Label,
lb_win: cc.Label,
_dataRank: null,
_listResult: []
},
onLoad: function() {
this._listResult = [ "Rồng", "Hòa", "Hổ", "Rô", "Cơ", "Tép", "Bích" ];
},
init: function(t) {
this._dataRank = t;
this.lbSession.string = t.session;
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
this.lb_cua_dat.string = t.cuadat;
this.lb_win.string = Utils.addDotToNumber(t.win);
var e = "";
if (t.ketqua.length > 1) {
var i = parseInt(t.ketqua[0]);
i >= 0 && (e = this._listResult[i]);
var n = parseInt(t.ketqua[1]);
n >= 0 && (e += ", " + this._listResult[n]);
}
this.lb_ketqua.string = e;
this.lb_tongdat.string = Utils.addDotToNumber(t.stakes);
}
});
cc._RF.pop();
}, {} ],
RongHoRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "accafw1O0VLhaWVz7Xl5REJ", "RongHoRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "rh2"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setTypePot: function(t) {
this._params.putByte("t", t);
return this;
},
setBetChip: function(t) {
this._params.putDouble("b", t);
return this;
}
});
window.RongHoRequest = i;
cc._RF.pop();
}, {} ],
RouletteController: [ function(t, e) {
"use strict";
cc._RF.push(e, "c6becu6MepCoaEfVitqr71V", "RouletteController");
var i = t("RouletteEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
}
},
onLoadGameEvent: function(t) {
this.preLoadUI({
pop: !0
}, function() {
this.m_tableInfo = new i.LoadGameEvent().fromEvent(t);
this.getUI().hideAll();
var e = [];
e.push(this.ZoneInstance.mySelf);
for (var n = 0; n < this.getRoom().getUserList().length; n++) {
var s = this.getRoom().getUserList()[n];
s.name != this.ZoneInstance.mySelf.name && e.length < 6 && e.push(s);
}
this.getUI().showListUsers(e);
if (this.m_tableInfo.isBetting) {
this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);
this.getUI().showNoti("Bắt đầu cược");
} else {
this.getUI()._turnOffTime();
this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);
this.getUI().resumeGame(this.m_tableInfo.winpot, this.m_tableInfo.time, this.m_tableInfo.usersOnboard, this.m_tableInfo.chipUserOnBoard, this.m_tableInfo.result, this.m_tableInfo.winChip);
}
this.getUI().updateTotalBet(this.m_tableInfo.totalUserBet);
this.getUI().addChipToPot(this.m_tableInfo.listTypePotBet, this.m_tableInfo.listMyChipPot);
}.bind(this));
},
onUserBetEvent: function(t) {
var e = new i.BetEvent().fromEvent(t), n = e.userName, s = e.betChip, o = e.typePot, a = e.totalBet;
this.ZoneInstance.mySelf.name == n && this.getUI().updateListChipBet(e.typePot, e.betChip);
this.getUI().updateTotalBet(a);
this.getUI().runActionChangeMoney(n, -s, 1);
this.getUI().actionFlyChipToPot(n, o, s);
var c = this.getRoom().getUserByName(n);
c && this.getUI().updateChip(c);
},
onEndBettingEvent: function(t) {
var e = new i.EndBetting().fromEvent(t);
this.m_tableInfo.isBetting = !1;
this.m_tableInfo.chipUserOnBoard = e.chipUserOnBoard;
this.m_tableInfo.usersOnboard = e.usersOnboard;
this.m_tableInfo.winpot = e.winpot;
this.m_tableInfo.winChip = e.winChip;
this.m_tableInfo.result = e.result;
this.getUI()._turnOffTime();
this.getUI()._turnOnTime(20, 20, this.m_tableInfo.isBetting);
this.getUI().showNoti("Kết thúc cược!");
this.getUI().showResult(this.m_tableInfo.result);
},
onHistoryResultEvent: function(t) {
var e = new i.HistoryResponse().fromEvent(t);
this.getUI().showSoiCau(e.result);
},
onHistoryEvent: function(t) {
var e = new i.HistoryEvent().fromEvent(t);
this.getUI().show("UIRouletteTransaction", {
pop: !0,
src: "roulette",
data: {
items: e.items
}
});
},
onLeaderBoardEvent: function(t) {
var e = new i.LeaderBoardEvent().fromEvent(t);
this.getUI().show("UIRouletteRank", {
pop: !0,
src: "roulette",
data: {
items: e.items
}
});
},
onPublicMessage: function(t) {
var e = t.sender, i = t.message, n = t.data, s = null != n ? {
dn: n.get("dn"),
fb: n.get("fb")
} : {
dn: "...",
fb: ""
}, o = {};
o.sender = e;
o.msg = i;
o.dataSender = s;
this.getUI().onPublicMessage(o);
}
}), s = null;
SmartFoxSDK.RouletteController = e.exports = function() {
null == s && (s = new n("UIRoulette", "roulette"));
return s;
}();
cc._RF.pop();
}, {
RouletteEvent: "RouletteEvent"
} ],
RouletteEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "a5b7f3fBq5PMLBDDylBJ3KZ", "RouletteEvent");
var i = {
RESPONSE_NAME: {
LOAD_GAME_RES: "rl1",
BET_RES: "rl2",
END_BETTING: "rl3",
HISTORY_RESULT: "rl4"
}
};
i.LoadGameEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LOAD_GAME_RES);
},
fromEvent: function(t) {
this.isBetting = t.getBool("b");
this.time = t.getInt("t");
this.totalUserBet = t.getDouble("tc");
this.listTypePotBet = t.getIntArray("lmtcp");
this.listMyChipPot = t.getDoubleArray("lmcp");
this.usersOnboard = t.getUtfStringArray("lu");
this.chipUserOnBoard = t.getDoubleArray("lc");
if (!this.isBetting) {
this.result = t.getByte("rs");
this.winpot = t.getByteArray("wp");
this.winChip = 1e3;
}
return this;
}
});
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
},
fromEvent: function(t) {
this.userName = t.getUtfString("un");
this.betChip = t.getDouble("c");
this.typePot = t.getByte("t");
this.totalBet = t.getDouble("tc");
return this;
}
});
i.EndBetting = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.END_BETTING);
},
fromEvent: function(t) {
this.result = t.getByte("rs");
this.winChip = t.getDouble("wc");
this.winpot = t.getByteArray("wp");
this.chipUserOnBoard = t.getDoubleArray("lc");
this.usersOnboard = t.getUtfStringArray("lu");
return this;
}
});
i.HistoryResponse = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RESULT);
},
fromEvent: function(t) {
this.result = t.getByteArray("lr");
return this;
}
});
i.HistoryEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
this.items = [];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) for (var n = e.get(i).getObject(), s = n.getDouble("id").toFixed(0), o = n.getUtfString("t"), a = n.getInt("rs"), c = n.getUtfString("bi").split(","), r = 0; r < c.length; r++) if (c[r].length > 0) {
var h = c[r].split("|"), l = {};
l.session = s;
l.time = o;
l.result = a;
l.typePot = h[0];
l.betPot = h[1];
l.prizePot = h[2];
this.items.push(l);
}
return this;
}
});
i.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.LEADERBOARD_RES);
this.items = [];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) {
var n = e.get(i).getObject(), s = {};
s.session = i;
s.account = n.getUtfString("dn");
s.win = n.getDouble("m");
s.time = n.getUtfString("t");
this.items.push(s);
}
return this;
}
});
window.RouletteEvent = e.exports = i;
cc._RF.pop();
}, {} ],
RouletteListCauItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "3be66XyU9JNJ4aipqcByYsz", "RouletteListCauItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
cauItem: cc.Prefab,
listCau: cc.Node
},
init: function(t) {
var e = this;
this.listCau.removeAllChildren(!0);
Promise.all(t.map(function(t) {
var i = cc.instantiate(e.cauItem);
e.listCau.addChild(i);
i.getComponent(i.name).init(t);
}));
}
});
cc._RF.pop();
}, {} ],
RouletteRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "442d2wPJFxKk7f1ASved6fo", "RouletteRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "rl2",
HISTORY_RESULT: "rl4"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.RouletteController.ZoneInstance.getRoomByName("roulette").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setTypePot: function(t) {
this._params.putByte("t", t);
return this;
},
setBetChip: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.HistoryRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.HISTORY_RESULT);
}
});
window.RouletteRequest = i;
cc._RF.pop();
}, {} ],
RouletteSoiCauItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "a76a5y2byBLv79pwjGpc9Sn", "RouletteSoiCauItem");
cc.Class({
extends: cc.Component,
properties: {
bgRed: cc.Node,
bgBlack: cc.Node,
lbCau: cc.Label,
MaxCount: 4,
_ListRed: []
},
onLoad: function() {
this._ListRed = [ 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36 ];
},
init: function(t) {
t = parseInt(t);
if (this._ListRed.indexOf(t) >= 0) {
this.bgRed.active = !0;
this.bgBlack.active = !1;
} else {
this.bgRed.active = !1;
this.bgBlack.active = !0;
}
this.lbCau.string = t;
}
});
cc._RF.pop();
}, {} ],
ScaleBackground: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4282d9E1k9CdrycrxLzXH6H", "ScaleBackground");
i.__esModule = !0;
i.default = void 0;
var n;
function s(t, e) {
t.prototype = Object.create(e.prototype);
t.prototype.constructor = t;
o(t, e);
}
function o(t, e) {
return (o = Object.setPrototypeOf || function(t, e) {
t.__proto__ = e;
return t;
})(t, e);
}
var a = cc._decorator, c = a.ccclass, r = (a.property, c(n = function(t) {
s(e, t);
function e() {
return t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
var t = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height), e = this.node.width * t, i = this.node.height * t;
this.node.scale = Math.max(cc.view.getCanvasSize().width / e, cc.view.getCanvasSize().height / i);
};
return e;
}(cc.Component)) || n);
i.default = r;
e.exports = i.default;
cc._RF.pop();
}, {} ],
ScaleContent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b9dceepbedCB551dgA7N8pN", "ScaleContent");
i.__esModule = !0;
i.default = void 0;
var n;
function s(t, e) {
t.prototype = Object.create(e.prototype);
t.prototype.constructor = t;
o(t, e);
}
function o(t, e) {
return (o = Object.setPrototypeOf || function(t, e) {
t.__proto__ = e;
return t;
})(t, e);
}
var a = cc._decorator, c = a.ccclass, r = (a.property, c(n = function(t) {
s(e, t);
function e() {
return t.apply(this, arguments) || this;
}
var i = e.prototype;
i.onLoad = function() {
var t = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height), e = this.node.width * t, i = this.node.height * t;
this.node.width = this.node.width * (cc.view.getCanvasSize().width / e);
this.node.height = this.node.height * (cc.view.getCanvasSize().height / i);
this._updateAllChildNodeWidget(this.node);
};
i._updateAllChildNodeWidget = function(t) {
var e = this;
if (null != t) {
var i = t.getComponent(cc.Widget);
null != i && i.updateAlignment();
0 !== t.childrenCount && t.children.forEach(function(t) {
e._updateAllChildNodeWidget(t);
});
}
};
return e;
}(cc.Component)) || n);
i.default = r;
e.exports = i.default;
cc._RF.pop();
}, {} ],
SieuXeController: [ function(t, e) {
"use strict";
cc._RF.push(e, "2b3dcv8V6RLDLFX0qAjXvm5", "SieuXeController");
var i = t("SieuXeEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id").toFixed(0);
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.resultMap = s.getByteArray("rs");
o.linewin = s.getByteArray("lw");
i.push(o);
}
UIManger.show("UISieuXeTransaction", {
pop: !0,
src: "sieuxe",
data: {
items: i
}
});
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
UIManger.show("UISieuXeRank", {
pop: !0,
src: "sieuxe",
data: {
items: i
}
});
},
onEventRoomJoin: function(t) {
this._super(t);
this.preLoadUI({
pop: !0
}, function() {
this.getUI().showGame();
}.bind(this));
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
cc.currentUI = "";
this.getUI().back();
}
},
onUserBetEvent: function(t) {
if (null != this.getUI()) {
var e = new i.BetEvent().fromEvent(t);
this.getUI().SieuXeRun(e);
}
}
}), s = null;
SmartFoxSDK.SieuXeController = e.exports = function() {
null == s && (s = new n("UISieuXe", "sieuxe"));
return s;
}();
cc._RF.pop();
}, {
SieuXeEvent: "SieuXeEvent"
} ],
SieuXeEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "ff615bPxEpGDKtUuoK1XkCm", "SieuXeEvent");
var i = {
RESPONSE_NAME: {
BET_RES: "sx1"
}
};
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
this.freeSpin = 0;
this.freeGift = [];
},
fromEvent: function(t) {
this.status = 1;
this.winMoney = t.getDouble("w");
this.lineWin = t.getIntArray("lw");
this.isNohu = t.getBool("nh");
this.isThangLon = t.getBool("tl");
this.result = t.getIntArray("r");
t.containsKey("fs") && (this.freeSpin = t.getInt("fs"));
t.containsKey("fg") && (this.freeGift = t.getDoubleArray("fg"));
return this;
}
});
window.SieuXeEvent = e.exports = i;
cc._RF.pop();
}, {} ],
SieuXeItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "79e5c9FwVZML4ak+PNWlLSJ", "SieuXeItem");
cc.Class({
extends: cc.Component,
properties: {},
init: function(t, e) {
this.node.children[e].active = !0;
this.node.height = this.node.children[e].height;
},
random: function() {
var t = ~~(6 * Math.random());
this.setIcon(t);
return t;
},
setIcon: function(t, e) {
var i = this;
void 0 === e && (e = !1);
Promise.all(this.node.children.map(function(t) {
t.active = !1;
})).then(function() {
i.node.children[t].active = !0;
e && (i.data = t);
}, this);
}
});
cc._RF.pop();
}, {} ],
SieuXeLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "01a7eZVmzRE6aWcTpfx9qra", "SieuXeLine");
var i = t("Helper");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: cc.Node,
typeLine: 0
},
init: function(t) {
this.lines = {
1: [ 0, 0, 0 ],
2: [ 0, 0, 1 ],
3: [ 0, 0, 2 ],
4: [ 0, 1, 0 ],
5: [ 0, 1, 1 ],
6: [ 0, 1, 2 ],
7: [ 0, 2, 0 ],
8: [ 0, 2, 1 ],
9: [ 0, 2, 2 ],
10: [ 1, 0, 0 ],
11: [ 1, 0, 1 ],
12: [ 1, 0, 2 ],
13: [ 1, 1, 0 ],
14: [ 1, 1, 1 ],
15: [ 1, 1, 2 ],
16: [ 1, 2, 0 ],
17: [ 1, 2, 1 ],
18: [ 1, 2, 2 ],
19: [ 2, 0, 0 ],
20: [ 2, 0, 1 ],
21: [ 2, 0, 2 ],
22: [ 2, 1, 0 ],
23: [ 2, 1, 1 ],
24: [ 2, 1, 2 ],
25: [ 2, 2, 0 ],
26: [ 2, 2, 1 ],
27: [ 2, 2, 2 ]
};
this.SXV = t;
this.eventSelectAll();
},
eventOpen: function() {
this.node.active = !0;
},
eventClose: function() {
var t = this.getTotalLineSelect();
this.node.active && t < 1 ? this.SXV.addNotice("Chọn ít nhất 1 dòng") : this.node.active = !1;
},
eventSelect: function(t, e) {
var n = parseInt(e);
i.setMaterialGray(t.target.getComponent(cc.Sprite), i.isMaterialGray(t.target.getComponent(cc.Sprite)));
this.data[n] = i.isMaterialGray(t.target.getComponent(cc.Sprite));
this.updateString();
this.typeLine = 3;
},
eventBoChon: function() {
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !0);
return !1;
}));
this.typeLine = -1;
this.updateString();
},
eventSelectChan: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 1);
return e % 2 != 1;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 2;
},
eventSelectLe: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 0);
return e % 2 != 0;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 1;
},
eventSelectAll: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !1);
return !0;
})).then(function(e) {
t.data = e;
t.updateString();
});
this.typeLine = 0;
},
updateString: function() {
var t = this.getTotalLineSelect();
this.SXV.setNumberLines(t);
this.SXV.setNumberStake(t);
},
getTotalLineSelect: function() {
for (var t = 0, e = 1; e < this.data.length; e++) this.data[e] && t++;
return t;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
SieuXeMainLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "ddf11ZyqedLoL32ynFBhdp3", "SieuXeMainLine");
cc.Class({
extends: cc.Component,
init: function(t) {
this.KCV = t;
return this;
},
onEnable: function() {
this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
},
onDisable: function() {
this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
},
onhover: function() {
this.node.children[0].active = !0;
this.node.children[1].active = !0;
},
offhover: function() {
this.node.children[0].active = !1;
this.node.children[1].active = !1;
},
onEf: function() {
this.onhover();
this.node.pauseSystemEvents(!0);
},
offEf: function() {
this.offhover();
this.node.resumeSystemEvents(!0);
},
offAll: function() {}
});
cc._RF.pop();
}, {} ],
SieuXeRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "301a9r8YHpKa5EJzNz+6ouX", "SieuXeRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbAccount: cc.Label,
lbWin: cc.Label,
lbWinType: cc.Label
},
init: function(t) {
this.lbSession.string = t.session;
this.lbTime.string = t.time;
this.lbAccount.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
this.lbWinType.string = t.win_type;
}
});
cc._RF.pop();
}, {} ],
SieuXeReel: [ function(t, e) {
"use strict";
cc._RF.push(e, "b2860cvS59Co5TTs1MoU1BF", "SieuXeReel");
cc.Class({
extends: cc.Component,
properties: {
HeightReel: 300
},
onLoad: function() {
this.HeightReel = this.node.height - 5;
},
init: function(t, e) {
var i = this;
this.SXV = t;
this.icons = [];
var n = this;
Promise.all(e.map(function(t) {
var e = cc.instantiate(n.SXV.iconPrefab);
n.node.addChild(e);
(e = e.getComponent("SieuXeItem")).init(n.SXV, t);
return e;
})).then(function(t) {
i.icons = t;
});
},
spin: function(t) {
var e = .2, i = 2;
if (this.SXV.isFast) {
e = .1;
i = .2;
}
this.node.stopAllActions();
var n = cc.moveTo(i, cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeInOut(.5)), s = cc.callFunc(function() {
0 === t && this.SXV.copy();
this.node.y = 0;
}, this);
if (4 === t) {
var o = cc.callFunc(function() {
this.node.y = 0;
this.SXV.runActionWon();
}, this);
this.node.runAction(cc.sequence(cc.delayTime(t * e), n, o));
} else this.node.runAction(cc.sequence(cc.delayTime(t * e), n, s));
},
stop: function() {
this.node.stopAllActions();
this.SXV.copy();
this.node.y = 0;
}
});
cc._RF.pop();
}, {} ],
SieuXeRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "c530eLlpBFBFaKDQLFz3Zod", "SieuXeRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "sx1"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.SieuXeController.ZoneInstance.getRoomByName("sieuxe").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t, e) {
this._params.putDouble("b", t);
void 0 !== e && this._params.putUtfString("cheat", e);
return this;
}
});
window.SieuXeRequest = i;
cc._RF.pop();
}, {} ],
SieuXeTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "efcdaujomZIK7Yg54aycUmB", "SieuXeTransactionItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbStakes: cc.Label,
lbWin: cc.Label,
_dataRank: null
},
init: function(t) {
this._dataRank = t;
this.lbSession.string = t.session;
this.lbTime.string = t.time;
this.lbStakes.string = Utils.addDotToNumber(t.stakes);
this.lbWin.string = Utils.addDotToNumber(t.win);
},
eventDetail: function() {
this.show("UISieuXeTransactionDetail", {
pop: !0,
src: "sieuxe",
data: {
map: this._dataRank.resultMap,
session: this._dataRank.session,
win: this._dataRank.win
}
});
}
});
cc._RF.pop();
}, {} ],
SieuXeWinGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "fba02tW1T1LaoB8evwgEJFg", "SieuXeWinGame");
var i, n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbMoneyWin: cc.Label,
lbNumberWin: cc.Label,
ThangText: cc.Node,
ThangLonCoin: cc.Node
},
onLoad: function() {
i = this;
},
init: function(t) {
this.SXV = t;
},
runWinGame: function() {
if (this.SXV.isThangLon && !this.SXV.isNoHu) this.runThangLon(); else if (this.SXV.isNoHu) this.runNoHu(); else {
if (this.SXV.winMoney > 0) {
this.SXV.setMoneyWin(this.SXV.winMoney);
this.lbMoneyWin.node.active = !0;
n.numberTo(this.lbMoneyWin, 0, this.SXV.winMoney, 1200, !0, function() {
i.SXV.updateChipAll();
i.scheduleOnce(function() {
i.lbMoneyWin.node.active = !1;
i.checkRunAgainWin();
}, 1);
});
this.SXV.winMoney = 0;
} else this.SXV.autoQuay();
i.SXV.finishSpin();
}
},
checkRunAgainWin: function() {
(this.SXV.winMoney > 0 || this.SXV.isNoHu || this.SXV.isThangLon || this.SXV.isAuto) && this.runWinGame();
},
runNoHu: function() {
this.ThangLonCoin.active = !0;
this.ThangText.active = !0;
this.ThangLonCoin.getComponent(sp.Skeleton).setAnimation(0, "NoHu", !1);
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", !1);
this.lbNumberWin.node.active = !0;
n.numberTo(this.lbNumberWin, 0, this.SXV.winMoney, 1200, !0, function() {
this.scheduleOnce(function() {
var t = cc.moveTo(.5, cc.v2(0, 50));
i.lbNumberWin.node.runAction(cc.sequence(t, cc.delayTime(1), cc.callFunc(function() {
i.lbNumberWin.node.active = !1;
i.checkRunAgainWin();
})));
}, 2.9);
});
this.scheduleOnce(function() {
i.ThangLonCoin.active = !1;
i.ThangText.active = !1;
}, 4);
this.SXV.isNoHu = !1;
},
runThangLon: function() {
this.ThangLonCoin.active = !0;
this.ThangText.active = !0;
this.ThangLonCoin.getComponent(sp.Skeleton).setAnimation(0, "Thang-Lon", !1);
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "Thang-Lon", !1);
this.lbNumberWin.node.active = !0;
n.numberTo(this.lbNumberWin, 0, this.SXV.winMoney, 1200, !0, function() {
this.scheduleOnce(function() {
var t = cc.moveTo(.5, cc.v2(0, 50));
i.lbNumberWin.node.runAction(cc.sequence(t, cc.delayTime(1), cc.callFunc(function() {
i.lbNumberWin.node.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
this.scheduleOnce(function() {
i.ThangLonCoin.active = !1;
i.ThangText.active = !1;
}, 2.5);
this.SXV.isThangLon = !1;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
SinbadController: [ function(t, e) {
"use strict";
cc._RF.push(e, "35f4fj59QlA07DAjGMiBcly", "SinbadController");
var i = t("SinbadEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventRoomJoin: function(t) {
this._super(t);
UIManger.show("UISinbadLobby", {
pop: !0,
src: "sinbad"
});
},
onUserVariablesUpdate: function(t) {
this._super(t);
null != this.getUI() && this.getUI().updateUserVariableSlot(t);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id").toFixed(0);
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.resultMap = s.getByteArray("rs");
o.linewin = s.getByteArray("lw");
i.push(o);
}
UIManger.show("UISinbadHistoryTransaction", {
pop: !0,
src: "sinbad",
data: {
items: i
}
});
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n + 1;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
UIManger.show("UISinbadRank", {
pop: !0,
src: "sinbad",
data: {
items: i
}
});
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
}
},
onUserResultEvent: function(t) {
var e = new i.ResultEvent().fromEvent(t);
this.getUI().SinbadRun(e);
}
}), s = null;
SmartFoxSDK.SinbadController = e.exports = function() {
null == s && (s = new n("UISinbad", "sinbad"));
return s;
}();
cc._RF.pop();
}, {
SinbadEvent: "SinbadEvent"
} ],
SinbadEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "f541eflLUBIeaDZkVLnYZjS", "SinbadEvent");
var i = {
RESPONSE_NAME: {
RESULT_RES: "sb2",
FREE_DAILY_RES: "sb3",
MINIMIZE_RES: "sb4",
AUTO_PLAY_RES: "sb5",
STOP_AUTO_PLAY_RES: "sb6"
}
};
i.ResultEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.RESULT_RES);
this.winMoney = 0;
this.freeGift = [];
this.lineWin = [];
this.result = [];
this.session = 0;
this.isFreeSpin = !1;
this.isBonus = !1;
this.freeSpin = 0;
this.type = 0;
this.haiSao = "";
this.ration = 0;
},
fromEvent: function(t) {
this.winMoney = t.getDouble("w");
this.lineWin = t.getIntArray("lw");
this.result = t.getIntArray("r");
this.session = t.getDouble("id");
this.isFreeSpin = t.getBool("fr");
this.freeSpin = t.getByte("ra");
this.type = t.getByte("rs");
this.haiSao = t.getUtfString("hs");
2 == this.type && (this.isThangLon = !0);
3 == this.type && (this.isNohu = !0);
4 == this.type && (this.isNohuX2 = !0);
if (5 == this.type) {
this.isBonus = !0;
for (var e = 1; e < this.haiSao.length; e += 2) this.freeGift.push(this.haiSao[e]);
}
return this;
}
});
window.SinbadEvent = e.exports = i;
cc._RF.pop();
}, {} ],
SinbadItemBonus: [ function(t, e) {
"use strict";
cc._RF.push(e, "ddcc358/DZBepNeDd2Nf3uV", "SinbadItemBonus");
cc.Class({
extends: cc.Component,
properties: {
lbMoney: cc.Label,
truotNode: cc.Node,
dauHoiNode: cc.Node
},
init: function() {}
});
cc._RF.pop();
}, {} ],
SinbadItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "a74cbWN+epB3KbhVQyzTY32", "SinbadItem");
cc.Class({
extends: cc.Component,
properties: {},
init: function(t, e) {
var i = this;
this.RedT = t;
Promise.all(this.node.children.map(function(t) {
t.active = !1;
})).then(function() {
i.node.children[e].active = !0;
});
},
stop: function() {},
random: function() {
var t = ~~(7 * Math.random());
this.setIcon(t);
return t;
},
setIcon: function(t, e) {
var i = this;
void 0 === e && (e = !1);
Promise.all(this.node.children.map(function(t) {
t.active = !1;
})).then(function() {
i.node.children[t].active = !0;
e && (i.data = t);
});
}
});
cc._RF.pop();
}, {} ],
SinbadLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "d89ceMvFbZFzJv37PqjxViB", "SinbadLine");
var i = t("Helper");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: cc.Node,
typeLine: 0
},
init: function(t) {
this.KCV = t;
this.eventSelectAll();
},
eventOpen: function() {
this.node.active = !0;
},
eventClose: function() {
var t = this.getTotalLineSelect();
this.node.active && t < 1 ? this.KCV.addNotice("Chọn ít nhất 1 dòng") : this.node.active = !1;
},
eventSelect: function(t, e) {
var n = parseInt(e);
i.setMaterialGray(t.target.getComponent(cc.Sprite), i.isMaterialGray(t.target.getComponent(cc.Sprite)));
this.data[n] = i.isMaterialGray(t.target.getComponent(cc.Sprite));
this.updateString();
this.typeLine = 3;
},
eventBoChon: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !0);
return !1;
})).then(function(e) {
t.data = e;
t.typeLine = -1;
t.updateString();
});
},
eventSelectChan: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 1);
return e % 2 != 1;
})).then(function(e) {
t.data = e;
t.typeLine = 2;
t.updateString();
});
},
eventSelectLe: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 0);
return e % 2 != 0;
})).then(function(e) {
t.data = e;
t.typeLine = 1;
t.updateString();
});
},
eventSelectAll: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !1);
return !0;
})).then(function(e) {
t.typeLine = 0;
t.data = e;
t.updateString();
});
},
updateString: function() {
var t = this.getTotalLineSelect();
this.KCV.setNumberLines(t);
this.KCV.setNumberStake(t);
},
getTotalLineChan: function() {
return 10;
},
getTotalLineLe: function() {
return 10;
},
getTotalLine: function() {
return 20;
},
getTotalLineSelect: function() {
for (var t = 0, e = 1; e < this.data.length; e++) this.data[e] && t++;
return t;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
SinbadMainLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "c40228Zh7RNQK/njdH8OqyO", "SinbadMainLine");
cc.Class({
extends: cc.Component,
init: function(t) {
this.SLV = t;
return this;
},
onEnable: function() {},
onDisable: function() {},
onhover: function() {
this.node.children[0].active = !0;
},
offhover: function() {
this.node.children[0].active = !1;
},
onEf: function() {
this.onhover();
this.node.pauseSystemEvents(!0);
},
offEf: function() {
this.offhover();
this.node.resumeSystemEvents(!0);
},
offAll: function() {}
});
cc._RF.pop();
}, {} ],
SinbadRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "8e3baaTjshBjrBxMbEWhQjz", "SinbadRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbAccount: cc.Label,
lbWin: cc.Label,
lbDes: cc.Label
},
init: function(t, e) {
this.lbTime.string = e.time;
this.lbSession.string = "#" + e.session;
this.lbAccount.string = e.account;
this.lbDes.string = e.win_type;
this.lbWin.string = Utils.addDotToNumber(e.win);
}
});
cc._RF.pop();
}, {} ],
SinbadReel: [ function(t, e) {
"use strict";
cc._RF.push(e, "3443aQFv7hDybagiJywFYa3", "SinbadReel");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
onEnable: function() {},
init: function(t, e) {
var i = this;
this.SLV = t;
this.icons = [];
var n = this;
Promise.all(e.map(function(t) {
var e = cc.instantiate(n.SLV.iconPrefab);
n.node.addChild(e);
(e = e.getComponent("SinbadItem")).init(n.SLV, t);
return e;
})).then(function(t) {
i.icons = t;
});
},
spin: function(t) {
this.node.stopAllActions();
var e = cc.moveTo(1.8, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(3)), i = cc.callFunc(function() {
0 === t && this.SLV.copy();
this.node.y = 0;
}, this);
if (4 === t) {
var n = cc.callFunc(function() {
this.node.y = 0;
this.SLV.runActionWon();
}, this);
this.node.runAction(cc.sequence(cc.delayTime(.2 * t), e, n));
} else this.node.runAction(cc.sequence(cc.delayTime(.2 * t), e, i));
},
stop: function() {
this.node.stopAllActions();
this.SLV.copy();
this.node.y = 0;
}
});
cc._RF.pop();
}, {} ],
SinbadRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "6b2c0BeZ6VKYKtDGIffPpIh", "SinbadRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "sb1",
AUTO_PLAY_REQUEST: "sb5",
STOP_AUTO_PLAY_REQUEST: "sb6"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.AutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.AUTO_PLAY_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t, e) {
this._params.putDouble("b", t);
void 0 !== e && this._params.putUtfString("cheat", e);
return this;
}
});
i.StopAutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
window.SinbadRequest = i;
cc._RF.pop();
}, {} ],
SinbadTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "412e1wgkQ5BV7u1nFVPdDoR", "SinbadTransactionItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbMucDat: cc.Label,
lbWin: cc.Label,
lbDetail: cc.Label,
_dataRank: null
},
init: function(t) {
this._dataRank = t;
this.lbSession.string = "#" + t.session;
this.lbTime.string = t.time;
this.lbMucDat.string = Utils.addDotToNumber(t.stakes);
this.lbWin.string = Utils.addDotToNumber(t.win);
},
eventDetail: function() {
this.show("UISinbadHistoryDetail", {
pop: !0,
src: "sinbad",
data: this._dataRank
});
}
});
cc._RF.pop();
}, {} ],
SinbadWinGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "c4f9aOPTllDGrZ4AF2CQyng", "SinbadWinGame");
var i, n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbMoneyWin: cc.Label,
BonusFreeSpine: cc.Node,
NoHuCoin: cc.Node,
ThangText: cc.Node,
ThangLonCoin: cc.Node,
FreeCount: cc.Node,
NumberFreeSpine: cc.Node
},
onLoad: function() {
i = this;
},
init: function(t) {
this.SLV = t;
},
runWinGame: function() {
var t = this.node.getChildByName("bg_all");
t.active = !0;
if (this.SLV.isThangLon && !this.SLV.isNoHu) {
this.SLV.playBigWin();
this.runZeusThangLon();
} else if (this.SLV.isNoHu) {
this.SLV.playJackpot();
this.runZeusNoHu();
} else if (this.SLV.isFree) this.runFreeSpine(); else if (this.SLV.isBonus) {
this.SLV.playBonus();
this.runBonusSpine();
} else {
i.SLV.setMoneyWin(i.SLV.winMoney);
i.updateFreeSpin();
if (this.SLV.winMoney > 0) {
this.SLV.playSpinWin();
this.lbMoneyWin.node.active = !0;
n.numberTo(this.lbMoneyWin, 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
i.lbMoneyWin.node.active = !1;
t.active = !1;
i.SLV.autoQuay();
}, 1);
});
this.SLV.winMoney = 0;
} else {
t.active = !1;
i.SLV.autoQuay();
}
}
0 == this.SLV.type && this.SLV.playSpinMis();
},
updateFreeSpin: function() {
if (this.SLV.freeSpin < 1) this.FreeCount.active = !1; else {
this.FreeCount.active = !0;
i.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = i.SLV.freeSpin;
}
},
checkRunAgainWin: function() {
(this.SLV.isBonus || this.SLV.winMoney > 0 || this.SLV.isFree || this.SLV.isNoHu || this.SLV.isThangLon || this.SLV.isAuto) && this.runWinGame();
},
runFreeSpine: function() {
this.SLV.isFree = !1;
this.BonusFreeSpine.active = !0;
this.NumberFreeSpine.active = !0;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "FreeSpine", !0);
this.NumberFreeSpine.getChildByName("lb_number_free_spine").getComponent(cc.Label).string = this.SLV.freeSpin;
this.scheduleOnce(function() {
i.node.getChildByName("bg_all").active = !1;
i.BonusFreeSpine.active = !1;
i.NumberFreeSpine.active = !1;
i.FreeCount.active = !0;
i.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = i.SLV.freeSpin;
this.checkRunAgainWin();
}, 3);
},
runBonusSpine: function() {
this.SLV.isBonus = !1;
this.BonusFreeSpine.active = !0;
this.NumberFreeSpine.active = !1;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "Bonus", !0);
this.scheduleOnce(function() {
i.BonusFreeSpine.active = !1;
i.show("UISinbadBonus", {
src: "sinbad",
pop: !0,
data: i.SLV.freeGift
});
}, 2);
},
runZeusNoHu: function() {
this.SLV.isNoHu = !1;
this.NoHuCoin.active = !0;
this.Text.active = !0;
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", !0);
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, 50));
t.active = !0;
n.numberTo(t.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 100));
t.runAction(cc.sequence(e, cc.delayTime(1), cc.callFunc(function() {
i.node.getChildByName("bg_all").active = !1;
i.NoHuCoin.active = !1;
i.ThangText.active = !1;
t.active = !1;
i.checkRunAgainWin();
})));
}, 5);
});
},
runZeusThangLon: function() {
this.SLV.isThangLon = !1;
this.ThangLonCoin.active = !0;
this.ThangText.active = !0;
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "ThangLon", !0);
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, 50));
t.active = !0;
n.numberTo(t.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 100));
t.runAction(cc.sequence(e, cc.delayTime(.5), cc.callFunc(function() {
t.active = !1;
i.node.getChildByName("bg_all").active = !1;
i.ThangLonCoin.active = !1;
i.ThangText.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
SmartFoxAudio: [ function(t, e) {
"use strict";
cc._RF.push(e, "113caQVBTVLFoU32a0NhZpN", "SmartFoxAudio");
var i = cc.Class({
extends: cc.Component,
statics: {
inst: null
},
properties: {
baoDenLuotChoi: {
default: null,
type: cc.AudioClip
},
chiaTien: {
default: null,
type: cc.AudioClip
},
chiaBai: {
default: null,
type: cc.AudioClip
},
chiaBai2: {
default: null,
type: cc.AudioClip
},
datCua: {
default: null,
type: cc.AudioClip
},
click: {
default: null,
type: cc.AudioClip
},
countDown: {
default: null,
type: cc.AudioClip
},
danhBai: {
default: null,
type: cc.AudioClip
},
pass: {
default: null,
type: cc.AudioClip
},
placeChip: {
default: null,
type: cc.AudioClip
},
ringRing: {
default: null,
type: cc.AudioClip
},
sendChip: {
default: null,
type: cc.AudioClip
},
themSong: {
default: null,
type: cc.AudioClip
},
win: {
default: null,
type: cc.AudioClip
},
xocDia: {
default: null,
type: cc.AudioClip
},
currentEffectId: 0,
_musicEnable: !0,
_soundEnable: !0,
_numberSound: 0,
_keyMusic: "smart_fox_music",
_keySound: "smart_fox_sound"
},
onLoad: function() {
i.inst = this;
mm.audio = this;
mm.audio._effectEnable = this.isSound();
},
isSound: function() {
var t = 1, e = cc.sys.localStorage.getItem(this._keySound);
null != e ? t = parseInt(e) : cc.sys.localStorage.setItem(this._keySound, "1");
return 1 == t;
},
isMusic: function() {
var t = 1, e = cc.sys.localStorage.getItem(this._keyMusic);
null != e ? t = parseInt(e) : cc.sys.localStorage.setItem(this._keyMusic, "1");
return 1 == t;
},
saveSound: function() {},
saveMusic: function() {},
playMusic: function() {
this.isMusic() ? void 0 !== mm.audio._audioIDMusic ? mm.audio.resumeMusic() : mm.audio._audioIDMusic = cc.audioEngine.play(mm.audio.themSong, !0, .5) : mm.audio.pauseMusic();
},
setMusicVolume: function(t) {
cc.audioEngine.setMusicVolume(t);
},
pauseMusic: function() {
void 0 !== mm.audio._audioIDMusic && cc.audioEngine.pause(mm.audio._audioIDMusic);
},
resumeMusic: function() {
void 0 !== mm.audio._audioIDMusic && cc.audioEngine.resume(mm.audio._audioIDMusic);
},
playBaoDenLuotChoi: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.baoDenLuotChoi);
},
playChiaTien: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.chiaTien);
},
playChiaBai: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.chiaBai);
},
playChiaBai2: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.chiaBai2);
},
playDatCua: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.datCua);
},
playCountDown: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.countDown);
},
playDanhBai: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.danhBai);
},
playPass: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.pass);
},
playPlaceChip: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.placeChip);
},
playRingRing: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.ringRing);
},
playSendChip: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.sendChip);
},
playWin: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.win);
},
playXocDia: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.xocDia);
},
playButton: function() {
this.currentEffectId = mm.audio._playSFX(mm.audio.click);
},
_playSFX: function(t) {
return this.isSound() ? cc.audioEngine.playEffect(t, !1) : this.currentEffectId;
},
_pauseAllSFX: function() {
cc.audioEngine.pauseAllEffects();
},
_pauseSFX: function() {
cc.audioEngine.pauseEffect(this.currentEffectId);
},
_stopAllSFX: function() {
cc.audioEngine.stopAllEffects();
},
_stopSFX: function() {
cc.audioEngine.stopEffect(this.currentEffectId);
}
});
cc._RF.pop();
}, {} ],
SystemMessage: [ function(t, e) {
"use strict";
cc._RF.push(e, "f32a3Tu2xVF6qzlD+Tsuu9p", "SystemMessage");
cc.Class({
extends: cc.Component,
properties: {
message: cc.RichText,
isRunning: !1
},
onEnable: function() {
this.messageBoxWidth = this.node.width;
if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
var t = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable("sysmsg");
t && t.value && this.runMessage(t.value);
} else this.runMessage("Chào mừng các bạn đến với cổng game Smart Fox! Cổng game quốc tế dành cho người Việt");
},
runMessage: function(t) {
if (t.length > 0 && !this.isRunning) {
this.isRunning = !0;
var e = this.node.width;
this.message.node.stopAllActions();
this.message.string = t;
this.message.node.x = e;
var i = e + this.message.node.width, n = i / 100, s = this;
this.message.node.runAction(cc.repeatForever(new cc.sequence(cc.moveTo(n, cc.v2(-i, 0)), cc.callFunc(function() {
s.message.node.x = e;
s.isRunning = !1;
}))));
}
}
});
cc._RF.pop();
}, {} ],
TXSessionDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "7e047XDGmtJ6LTOAeD9TJnQ", "TXSessionDetail");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbTime: cc.Label,
lbDat: cc.Label,
lbName: cc.Label
},
init: function(t) {
this.lbTime.string = Utils.reFormatDisplayTime(t.time).split(" ")[0];
this.lbDat.string = t.betTai > 0 ? Utils.addDotToNumber(t.betTai) : Utils.addDotToNumber(t.betXiu);
this.lbName.string = t.displayName;
}
});
cc._RF.pop();
}, {} ],
TaiXiuController: [ function(t, e) {
"use strict";
cc._RF.push(e, "8222d9/7m9Mbp+Qjjj1G4rC", "TaiXiuController");
var i = t("TaiXiuEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.SESSION_DETAIL, this.onSessionDetailEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.SOI_CAU_RES, this.onSoiCauEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.TAN_LOC, this.onTanLocEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.RUT_LOC, this.onRutLocEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.HISTORY_TAN_LOC, this.onHistoryTanLocEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.HISTORY_RUT_LOC, this.onHistoryRutLocEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.TOP_BET, this.onTopBetEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.TOP_BET_REWARD, this.onTopBetRewardEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.TOP_BET_RULE, this.onTopBetRuleEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.RANK_TAN_LOC, this.onRankTanLocEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.RANK_RUT_LOC, this.onRankRutLocEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.PUBLIC_MSG, this.onPublicMessageChat, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.TOP_REWARD_RES, this.onTopRewardResEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.UPDATE_STATE_POT, this.onUpdateStatePot, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.SESSION_DETAIL, this.onSessionDetailEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.SOI_CAU_RES, this.onSoiCauEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.TAN_LOC, this.onTanLocEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.RUT_LOC, this.onRutLocEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.HISTORY_TAN_LOC, this.onHistoryTanLocEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.HISTORY_RUT_LOC, this.onHistoryRutLocEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.TOP_BET, this.onTopBetEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.TOP_BET_REWARD, this.onTopBetRewardEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.TOP_BET_RULE, this.onTopBetRuleEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.RANK_TAN_LOC, this.onRankTanLocEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.RANK_RUT_LOC, this.onRankRutLocEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.PUBLIC_MSG, this.onPublicMessageChat, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.TOP_REWARD_RES, this.onTopRewardResEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.UPDATE_STATE_POT, this.onUpdateStatePot, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onPublicMessage: function(t) {
var e = t.sender, i = t.message, n = t.data, s = null != n ? {
dn: n.get("dn"),
fb: n.get("fb")
} : {
dn: "...",
fb: ""
}, o = {};
o.sender = e;
o.msg = i;
o.dataSender = s;
this.getUI().onPublicMessage(o);
},
onPublicMessageChat: function(t) {
var e = new i.PublicMessagecEvent().fromEvent(t), n = {}, s = {};
s.dn = e.un;
n.sender = s;
n.msg = e.msg;
n.dataSender = {};
n.dataSender.dn = s.dn;
this.getUI().onPublicMessage(n);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id").toFixed(0);
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.refund = s.getDouble("rf");
var a = s.getByteArray("rs");
o.result = a;
o.cua = this._getNameResult(a);
i.push(o);
}
this.getUI().updateDataHistory(i);
},
_getNameResult: function(t) {
for (var e = 0, i = 0; i < t.length; i++) e += t[i];
return e <= 10 ? "Xỉu" : "Tài";
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
this.getUI().updateDataRank(i);
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
cc.currentUI = "";
mm.Loading.hide();
this.getUI().back();
}
},
onLoadGameEvent: function(t) {
this.preLoadUI({
pop: !0
}, function() {
this.m_tableInfo = new i.LoadGameEvent().fromEvent(t);
cc.lastTime = this.m_tableInfo.time + new Date().getTime() / 1e3;
this.getUI().setPrepareBet([ "Đặt", "Đặt" ]);
this.getUI().controller = this;
this.getUI().showGame(this.m_tableInfo.allowRutlLoc, this.m_tableInfo.fundRutloc);
this.getUI().resetBetTaiXiu();
this.getUI().updateListChat(this.m_tableInfo.listChat);
this.getUI().showListUsers(this.m_tableInfo.listUsers);
this.getUI().updateSessionId(cc.listCau[cc.listCau.length - 1].sessionId);
this.getUI().updateListCau();
this.resumeGame();
}.bind(this));
},
resumeGame: function() {
if (null != this.m_tableInfo) {
this.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1e3);
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
this.getUI()._turnOfTime();
this.getUI().hideResultNumber();
this.getUI().hide3D();
this.getUI().stopEffectResult();
this.m_tableInfo.isBetting ? this.getUI()._turnOnTime(this.m_tableInfo.time) : this.getUI().cancua(this.m_tableInfo.time);
}
},
onUpdateStatePot: function(t) {
if (null != this.getUI()) {
var e = new i.UpdateStatePotEvent().fromEvent(t);
this.m_tableInfo.listChipPot[0] = e.potTai;
this.m_tableInfo.listChipPot[1] = e.potXiu;
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
this.getUI().showListUsers([ e.ccuTai, e.ccuXiu ]);
}
},
onUserBetEvent: function(t) {
if (null != this.getUI()) {
var e = new i.BetEvent().fromEvent(t), n = e.userName, s = e.betChip, o = e.typePot;
this.m_tableInfo.listChipPot[o] += s;
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
this.getUI().showListUsers(e.listUsers);
if (this.ZoneInstance.mySelf.name == n) {
this.m_tableInfo.listMyChipPot[o] += s;
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
this.getUI().setPrepareBet([ "Đặt", "Đặt" ]);
this.getUI()._currentBet = 0;
this.getUI().updateChipAll();
}
}
},
onEndBettingEvent: function(t) {
if (null != this.getUI()) {
var e = new i.EndBetting().fromEvent(t);
this.m_tableInfo.isBetting = !1;
this.m_tableInfo.refundChip = e.refundChip;
this.m_tableInfo.winChip = e.winChip;
this.m_tableInfo.result = e.result;
this.m_tableInfo.playType = e.playType;
this.getUI().updateThangThua(this.m_tableInfo.playType);
cc.lastTime = 16.5 + new Date().getTime() / 1e3;
this.getUI().updateDataCau();
this.getUI().isPlayedAnimation = !1;
this.resumeGame();
}
},
onSessionDetailEvent: function(t) {
if (null != this.getUI()) {
var e = new i.SessionDetail().fromEvent(t);
this.getUI().updateDataSessionDetail(e);
}
},
onSoiCauEvent: function(t) {
if (null != this.getUI()) {
var e = new i.SoiCauEvent().fromEvent(t);
this.getUI().updateTaiXiuSoiCau(e);
}
},
onTanLocEvent: function(t) {
if (null != this.getUI()) {
var e = new i.TanLocEvent().fromEvent(t), n = this.getUIByName("UITaiXiuTanLoc");
null != n && n.tanLocRes(e);
this.getUI().showGame(null, e.fund);
this.onEventUpdateChip(0);
}
},
onRutLocEvent: function(t) {
if (null != this.getUI()) {
var e = new i.RutLocEvent().fromEvent(t);
this.getUI().showResultRutLoc(e);
this.getUI().showGame(null, e.fund);
this.onEventUpdateChip(0);
}
},
onHistoryTanLocEvent: function(t) {
if (null != this.getUI()) {
var e = new i.HistoryTanLocEvent().fromEvent(t), n = this.getUIByName("UITaiXiuDuaTop");
null != n && n.updateDataList(e);
}
},
onHistoryRutLocEvent: function(t) {
if (null != this.getUI()) {
var e = new i.HistoryRutLocEvent().fromEvent(t), n = this.getUIByName("UITaiXiuDuaTop");
null != n && n.updateDataList(e);
}
},
onTopBetEvent: function(t) {
if (null != this.getUI()) {
var e = new i.TopBetEvent().fromEvent(t), n = this.getUIByName("UITaiXiuDuaTop");
null != n && n.updateDataList(e);
}
},
onTopBetRewardEvent: function(t) {
if (null != this.getUI()) {
var e = new i.TopBetRewardEvent().fromEvent(t);
null != this.getUI() && this.getUI().showReward(e);
}
},
onTopBetRuleEvent: function(t) {
if (null != this.getUI()) {
var e = new i.TopBetRuleEvent().fromEvent(t), n = this.getUIByName("UITaiXiuDuaTop");
null != n && n.updateDataList(e);
}
},
onRankTanLocEvent: function(t) {
if (null != this.getUI()) {
var e = new i.RankTanLocEvent().fromEvent(t), n = this.getUIByName("UITaiXiuDuaTop");
null != n && n.updateDataList(e);
}
},
onRankRutLocEvent: function(t) {
if (null != this.getUI()) {
var e = new i.RankRutLocEvent().fromEvent(t), n = this.getUIByName("UITaiXiuDuaTop");
null != n && n.updateDataList(e);
}
},
onTopRewardResEvent: function(t) {
if (null != this.getUI()) {
var e = new i.TopRewardResEvent().fromEvent(t), n = this.getUIByName("UITaiXiuDuaTop");
null != e && n.updateDataList(e);
}
}
}), s = null;
SmartFoxSDK.TaiXiuController = e.exports = function() {
null == s && (s = new n("UITaiXiu", "taixiu"));
return s;
}();
cc._RF.pop();
}, {
TaiXiuEvent: "TaiXiuEvent"
} ],
TaiXiuDuaTop: [ function(t, e) {
"use strict";
cc._RF.push(e, "ee6af1rUH1DE7BzpLWH9aT7", "TaiXiuDuaTop");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbTime: cc.Label,
lbName: cc.Label,
lbWin: cc.Label
},
init: function(t) {
this.lbTime.string = t.time;
this.lbName.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
TaiXiuEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "783ebqIZx1KcqbPVaJ2cEc2", "TaiXiuEvent");
var i = {
RESPONSE_NAME: {
LOAD_GAME_RES: "tx1",
BET_RES: "tx2",
END_BETTING: "tx3",
SESSION_DETAIL: "tx4",
SOI_CAU_RES: "tx5",
TAN_LOC: "tx6",
RUT_LOC: "tx7",
HISTORY_TAN_LOC: "tx8",
HISTORY_RUT_LOC: "tx9",
TOP_BET: "tx10",
TOP_BET_REWARD: "tx11",
TOP_BET_RULE: "tx12",
RANK_TAN_LOC: "tx13",
RANK_RUT_LOC: "tx14",
PUBLIC_MSG: "tx15",
TOP_REWARD_RES: "tx16",
UPDATE_STATE_POT: "tx17"
}
};
i.LoadGameEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LOAD_GAME_RES);
this.listCau = [];
},
fromEvent: function(t) {
this.isBetting = t.getBool("b");
this.time = t.getInt("t");
this.listChipPot = t.getDoubleArray("lcp");
this.listMyChipPot = t.getDoubleArray("lmcp");
this.listUsers = t.getIntArray("lu");
this.allowRutlLoc = t.getBool("rl");
this.fundRutloc = t.getDouble("frl");
this.isBetting ? this.time += 6.5 : this.result = t.getByteArray("rs");
if (t.containsKey("c")) {
for (var e = t.getSArray("c"), i = 0; i < e.size(); i++) {
var n = e.get(i).getObject(), s = {};
s.sessionId = n.getDouble("id").toFixed(0);
s.point = n.getByte("p");
this.listCau.push(s);
}
cc.listCau = this.listCau;
}
var o = t.getSArray("lc");
this.listChat = [];
for (var a = 0; a < o.size(); a++) {
var c = o.get(a).getObject(), r = {
dataSender: {}
};
r.dataSender.dn = c.getUtfString("un");
r.msg = c.getUtfString("msg");
this.listChat.unshift(r);
}
return this;
}
});
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
},
fromEvent: function(t) {
this.userName = t.getUtfString("un");
this.betChip = t.getDouble("c");
this.typePot = t.getByte("t");
this.listUsers = t.getIntArray("lu");
return this;
}
});
i.UpdateStatePotEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.UPDATE_STATE_POT);
},
fromEvent: function(t) {
this.potTai = t.getDouble("bt");
this.potXiu = t.getDouble("bx");
this.ccuTai = t.getInt("ut");
this.ccuXiu = t.getInt("ux");
return this;
}
});
i.EndBetting = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.END_BETTING);
},
fromEvent: function(t) {
this.result = t.getByteArray("rs");
this.winChip = t.getDouble("wc");
this.refundChip = t.getDouble("rc");
this.playType = t.getByte("te");
return this;
}
});
i.SessionDetail = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.SESSION_DETAIL);
},
fromEvent: function(t) {
var e = {};
e.dices = t.getByteArray("rs");
e.totalTai = t.getDouble("tt");
e.totalXiu = t.getDouble("tx");
e.refundTai = t.getDouble("rt");
e.refundXiu = t.getDouble("rx");
var i = t.getSArray("ub");
e.arrUserBetTai = [];
e.arrUserBetXiu = [];
for (var n = 0; n < i.size(); n++) {
var s = i.get(n).getObject(), o = {};
o.time = s.getUtfString("t");
o.displayName = s.getUtfString("dn");
o.betTai = s.getDouble("bt");
o.betXiu = s.getDouble("bx");
o.betTai > 0 && e.arrUserBetTai.push(o);
o.betXiu > 0 && e.arrUserBetXiu.push(o);
}
return e;
}
});
i.SoiCauEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.SOI_CAU_RES);
},
fromEvent: function(t) {
var e = t.getSArray("c");
this.listSoiCau = [];
for (var i = 0; i < e.size(); i++) {
var n = e.get(i).getObject(), s = {};
s.dices = n.getByteArray("d");
this.listSoiCau.push(s);
}
return this.listSoiCau;
}
});
i.TanLocEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.TAN_LOC);
},
fromEvent: function(t) {
var e = {};
e.chipTan = t.getDouble("c");
e.fund = t.getDouble("f");
e.mesTan = t.getUtfString("ec");
return e;
}
});
i.RutLocEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.RUT_LOC);
},
fromEvent: function(t) {
var e = {};
e.chipTan = t.getDouble("c");
e.fund = t.getDouble("f");
e.mesTan = t.getUtfString("ec");
return e;
}
});
i.HistoryTanLocEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.HISTORY_TAN_LOC);
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.account = s.getUtfString("u");
o.win = s.getDouble("c");
o.time = Utils.reFormatDisplayTime(s.getUtfString("t"));
i.push(o);
}
return i;
}
});
i.HistoryRutLocEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.HISTORY_RUT_LOC);
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.account = s.getUtfString("u");
o.win = s.getDouble("c");
o.time = Utils.reFormatDisplayTime(s.getUtfString("t"));
i.push(o);
}
return i;
}
});
i.TopBetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.TOP_BET);
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.account = s.getUtfString("u");
o.win = s.getDouble("c");
o.time = n + 1;
i.push(o);
}
return i;
}
});
i.TopBetRewardEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.TOP_BET_REWARD);
},
fromEvent: function(t) {
var e = {};
e.reward = t.getDouble("c");
e.top = t.getInt("t");
return e;
}
});
i.TopBetRuleEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.TOP_BET_RULE);
},
fromEvent: function(t) {
for (var e = t.getDoubleArray("d"), i = [], n = 0; n < e.length; n++) {
var s = {};
s.account = e[n];
s.win = "";
s.time = n + 1;
i.push(s);
}
return i;
}
});
i.RankRutLocEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.RANK_RUT_LOC);
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.account = s.getUtfString("u");
o.win = s.getDouble("c");
o.time = n + 1;
i.push(o);
}
return i;
}
});
i.RankTanLocEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.RANK_TAN_LOC);
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.account = s.getUtfString("u");
o.win = s.getDouble("c");
o.time = n + 1;
i.push(o);
}
return i;
}
});
i.PublicMessagecEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.PUBLIC_MSG);
},
fromEvent: function(t) {
this.un = t.getUtfString("un");
this.msg = t.getUtfString("msg");
return this;
}
});
i.TopRewardResEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.TOP_REWARD_RES);
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.account = s.getUtfString("u");
o.win = s.getDouble("c");
o.time = n + 1;
i.push(o);
}
return i;
}
});
window.TaiXiuEvent = e.exports = i;
cc._RF.pop();
}, {} ],
TaiXiuRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "46addziMv5OoKBZ7APa5FSX", "TaiXiuRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
listRank: [ cc.SpriteFrame ],
spRank: cc.Sprite,
lbRank: cc.Label,
lbName: cc.Label,
lbWin: cc.Label,
bgItem: cc.Node
},
init: function(t, e) {
if (e < 3) {
this.spRank.node.active = !0;
this.lbRank.node.active = !1;
this.spRank.spriteFrame = this.listRank[e];
} else {
this.spRank.node.active = !1;
this.lbRank.node.active = !0;
this.lbRank.string = e + 1;
}
this.bgItem.active = e % 2 == 0;
this.lbName.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
TaiXiuRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "44e56M9KuFB6pnqHb2NPffu", "TaiXiuRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "tx1",
SESSION_DETAIL: "tx4",
SOI_CAU_REQUEST: "tx5",
TAN_LOC_REQUEST: "tx6",
RUT_LOC_REQUEST: "tx7",
HISTORY_TAN_LOC_REQUEST: "tx8",
HISTORY_RUT_LOC_REQUEST: "tx9",
TOP_BET_REQUEST: "tx10",
TOP_BET_RULE_REQUEST: "tx12",
RANK_TAN_LOC_REQUEST: "tx13",
RANK_RUT_LOC_REQUEST: "tx14",
TOP_REWARD_RES_REQUEST: "tx16"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.TaiXiuController.ZoneInstance.getRoomByName("taixiu").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setTypePot: function(t) {
this._params.putByte("t", t);
return this;
},
setBetChip: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.SoiCauRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.SOI_CAU_REQUEST);
}
});
i.SessionDetailRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.SESSION_DETAIL);
},
setSessionId: function(t) {
this._params.putDouble("id", t);
return this;
}
});
i.TanLocRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.TAN_LOC_REQUEST);
},
setChip: function(t) {
this._params.putDouble("c", t);
return this;
}
});
i.RutLocRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.RUT_LOC_REQUEST);
}
});
i.HistoryTanLocRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.HISTORY_TAN_LOC_REQUEST);
}
});
i.HistoryRutLocRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.HISTORY_RUT_LOC_REQUEST);
}
});
i.TopBetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.TOP_BET_REQUEST);
}
});
i.TopBetRuleRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.TOP_BET_RULE_REQUEST);
}
});
i.RankRutLocRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.RANK_RUT_LOC_REQUEST);
}
});
i.TopRewardResRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.TOP_REWARD_RES_REQUEST);
}
});
i.RankTanLocRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.RANK_TAN_LOC_REQUEST);
}
});
window.TaiXiuRequest = i;
cc._RF.pop();
}, {} ],
TaiXiuTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "7b87ddeFVVHWIjXopjEyKPP", "TaiXiuTransactionItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbMucDat: cc.Label,
lbResult: cc.Label,
lbWin: cc.Label,
lbRefund: cc.Label
},
init: function(t) {
this.lbSession.string = "#" + t.session;
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
this.lbWin.string = Utils.addDotToNumber(t.win);
this.lbMucDat.string = Utils.addDotToNumber(t.stakes);
this.lbResult.string = t.result + " " + t.cua;
this.lbRefund.string = Utils.addDotToNumber(t.refund);
}
});
cc._RF.pop();
}, {} ],
TimeSubRoulette: [ function(t, e) {
"use strict";
cc._RF.push(e, "a8d0aPNht1K9ZXWnTiTT19O", "TimeSubRoulette");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
progressBar: cc.ProgressBar,
_tick: 0,
_totalTimeProgress: 30,
_remainTurnTime: 30,
_timeWarning: 5,
_cbCompleteProgress: null,
_cbWarning: null,
_isWarning: !1,
lb_time: cc.Label
},
onEnable: function() {
this._tick = 0;
this._totalTimeProgress = 30;
this._remainTurnTime = 30;
this.lb_time.node.active = !1;
},
addEventTimerComplete: function(t) {
this._cbCompleteProgress = t;
},
addEventTimerWarning: function(t) {
this._cbWarning = t;
},
setTimeWarning: function(t) {
this._timeWarning = t;
},
setCurrentProgress: function(t) {
this._remainTurnTime = t;
},
setTotalProgress: function(t) {
this._totalTimeProgress = t;
},
setTotalRemain: function(t) {
this._remainTurnTime = t;
},
turnOnTimer: function() {
this.turnOffTimer();
this.progressBar.node.active = !0;
this.progressBar.progress = 0;
this._tick = 1e3 * this._remainTurnTime + Date.now();
this.unschedule(this.updateTimer, .1);
this.schedule(this.updateTimer, .1);
},
turnOffTimer: function() {
this.lb_time.node.active = !1;
this._cbCompleteProgress = null;
this._cbWarning = null;
this._isWarning = !1;
this.progressBar.node.active = !1;
this.unschedule(this.updateTimer, .1);
},
updateTimer: function() {
var t = (this._tick - Date.now() - this._totalTimeProgress) / 1e3;
if (t > 0 && t <= this._totalTimeProgress) {
this.lb_time.node.active = !0;
this.lb_time.string = Math.ceil(t);
this.progressBar.progress = t / this._totalTimeProgress;
if (!this._isWarning && this._totalTimeProgress - t <= this._timeWarning) {
this._isWarning = !0;
this._cbWarning && this._cbWarning();
}
} else {
this._cbCompleteProgress && this._cbCompleteProgress();
this.turnOffTimer();
}
}
});
cc._RF.pop();
}, {} ],
TimeSub: [ function(t, e) {
"use strict";
cc._RF.push(e, "700a1GAnw1MsKGm7OpCTSip", "TimeSub");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
progressBar: cc.ProgressBar,
_tick: 0,
_totalTimeProgress: 30,
_remainTurnTime: 30,
_timeWarning: 5,
_cbCompleteProgress: null,
_cbWarning: null,
_isWarning: !1,
lb_time: cc.Label
},
onEnable: function() {
this._tick = 0;
this._totalTimeProgress = 30;
this._remainTurnTime = 30;
this.lb_time.node.active = !1;
},
addEventTimerComplete: function(t) {
this._cbCompleteProgress = t;
},
addEventTimerWarning: function(t) {
this._cbWarning = t;
},
setTimeWarning: function(t) {
this._timeWarning = t;
},
setCurrentProgress: function(t) {
this._remainTurnTime = t;
},
setTotalProgress: function(t) {
this._totalTimeProgress = t;
},
setTotalRemain: function(t) {
this._remainTurnTime = t;
},
turnOnTimer: function() {
this.turnOffTimer();
this.progressBar.node.active = !0;
this.progressBar.progress = 0;
this._tick = 1e3 * this._remainTurnTime + Date.now();
this.unschedule(this.updateTimer, .1);
this.schedule(this.updateTimer, .1);
},
turnOffTimer: function() {
this.lb_time.node.active = !1;
this._cbCompleteProgress = null;
this._cbWarning = null;
this._isWarning = !1;
this.progressBar.node.active = !1;
this.unschedule(this.updateTimer, .1);
},
updateTimer: function() {
var t = (this._tick - Date.now() - this._totalTimeProgress) / 1e3;
if (t > 0 && t <= this._totalTimeProgress) {
this.lb_time.node.active = !0;
this.lb_time.string = Math.ceil(t);
this.progressBar.progress = t / this._totalTimeProgress;
if (!this._isWarning && this._totalTimeProgress - t <= this._timeWarning) {
this._isWarning = !0;
this._cbWarning && this._cbWarning();
}
} else {
this._cbCompleteProgress && this._cbCompleteProgress();
this.turnOffTimer();
}
}
});
cc._RF.pop();
}, {} ],
Timer: [ function(t, e) {
"use strict";
cc._RF.push(e, "77bd8G8bZtE4pRjbtrbTTRM", "Timer");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
progressBar: cc.ProgressBar,
_tick: 0,
_totalTimeProgress: 10,
_remainTurnTime: 30,
_timeWarning: 5,
_cbCompleteProgress: null,
_cbWarning: null,
_isWarning: !1,
lb_time: cc.Label
},
onEnable: function() {
this._tick = 0;
this._totalTimeProgress = 10;
this._remainTurnTime = 10;
this.lb_time.node.active = !1;
},
addEventTimerComplete: function(t) {
this._cbCompleteProgress = t;
},
addEventTimerWarning: function(t) {
this._cbWarning = t;
},
setTimeWarning: function(t) {
this._timeWarning = t;
},
setCurrentProgress: function(t) {
this._remainTurnTime = t;
},
setTotalProgress: function(t) {
this._totalTimeProgress = t;
},
setTotalRemain: function(t) {
this._remainTurnTime = t;
},
turnOnTimer: function() {
this.turnOffTimer();
this.progressBar.node.active = !0;
this.progressBar.progress = 0;
this._tick = 1e3 * this._remainTurnTime + Date.now();
this.unschedule(this.updateTimer, .1);
this.schedule(this.updateTimer, .1);
},
turnOffTimer: function() {
this.lb_time.node.active = !1;
this._cbCompleteProgress = null;
this._cbWarning = null;
this._isWarning = !1;
this.progressBar.node.active = !1;
this.unschedule(this.updateTimer, .1);
},
updateTimer: function() {
var t = (1e3 * this._totalTimeProgress + Date.now() - this._tick) / 1e3;
if (t <= this._totalTimeProgress) {
this.lb_time.node.active = !0;
this.lb_time.string = this._totalTimeProgress - Math.floor(t);
this.progressBar.progress = t / this._totalTimeProgress;
if (!this._isWarning && this._totalTimeProgress - t <= this._timeWarning) {
this._isWarning = !0;
this._cbWarning && this._cbWarning();
}
} else {
this._cbCompleteProgress && this._cbCompleteProgress();
this.turnOffTimer();
}
}
});
cc._RF.pop();
}, {} ],
Toast: [ function(t, e) {
"use strict";
cc._RF.push(e, "03de5PVMXVCEI3J2p5dEfHb", "Toast");
var i = cc.Class({
extends: cc.VozBaseComponent,
properties: {
lb_msg: cc.Label
},
statics: {
inst: null
},
onLoad: function() {
i.inst = this;
mm.Toast = this;
this._hide();
this.node.zIndex = 500;
},
showToast: function(t, e, i) {
this.node.active = !0;
var n = this;
this.lb_msg.string = e;
null != i && null != i && (this.node.position = i);
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
n._hide();
})));
},
_hide: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
TrialResult: [ function(t, e) {
"use strict";
cc._RF.push(e, "15f47rqGEZBkJWG4G6YiUiH", "TrialResult");
var i = {
results: [ {
freeGift: [ 0, 1200, 1200, 1200, 1200, 3e3, 1200, 1200, 1200, 1200 ],
freeSpin: 0,
haiSao: [ 0, 0, 2, 1200, 2, 1200, 2, 1200, 2, 1200, 1, 3e3, 2, 1200, 2, 1200, 2, 1200, 2, 1200 ],
isBonus: !0,
isFreeSpin: 0,
lineWin: [ 2 ],
ration: 0,
result: [ 1, 1, 1, 1, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1088,
type: 5,
winMoney: 12600
}, {
freeGift: [],
freeSpin: 1,
haiSao: [],
isBonus: !1,
isFreeSpin: 1,
lineWin: [ 2 ],
ration: 0,
result: [ 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1068,
type: 0,
winMoney: 0
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [],
ration: 0,
result: [ 5, 2, 0, 5, 3, 6, 5, 3, 4, 0, 6, 6, 4, 0, 5 ],
session: 1054,
type: 0,
winMoney: 0
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 11, 17 ],
ration: 0,
result: [ 3, 0, 6, 5, 4, 3, 4, 1, 6, 6, 6, 3, 3, 5, 6 ],
session: 1052,
type: 1,
winMoney: 1e3
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 7, 10, 18, 17 ],
ration: 0,
result: [ 2, 4, 1, 4, 3, 4, 2, 1, 6, 5, 0, 5, 5, 5, 5 ],
session: 1053,
type: 1,
winMoney: 2800
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 6, 7, 9, 10, 13, 14, 18, 17, 20 ],
ration: 0,
result: [ 3, 3, 5, 5, 4, 6, 2, 3, 4, 5, 3, 5, 5, 3, 5 ],
session: 1055,
type: 1,
winMoney: 4400
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 18 ],
ration: 0,
result: [ 6, 4, 4, 6, 1, 5, 6, 3, 3, 4, 6, 6, 5, 3, 4 ],
session: 1056,
type: 1,
winMoney: 300
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 6, 12, 16 ],
ration: 0,
result: [ 5, 6, 2, 5, 6, 0, 4, 5, 5, 0, 4, 2, 5, 6, 6 ],
session: 1057,
type: 1,
winMoney: 600
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 7, 12, 20 ],
ration: 0,
result: [ 6, 5, 6, 2, 5, 5, 6, 4, 6, 3, 5, 6, 6, 4, 4 ],
session: 1058,
type: 1,
winMoney: 1200
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 10, 15 ],
ration: 0,
result: [ 4, 6, 6, 5, 2, 4, 4, 3, 3, 5, 6, 6, 5, 2, 3 ],
session: 1059,
type: 1,
winMoney: 600
}, {
freeGift: [ 1200, 1200, 1200, 1200, 1200, 0, 1200, 1200, 1200, 1200 ],
freeSpin: 0,
haiSao: [ 2, 1200, 2, 1200, 2, 1200, 2, 1200, 2, 1200, 0, 0, 2, 1200, 2, 1200, 2, 1200, 2, 1200 ],
isBonus: !0,
isFreeSpin: 0,
lineWin: [ 2 ],
ration: 0,
result: [ 1, 1, 1, 1, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1060,
type: 5,
winMoney: 10800
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 13 ],
ration: 0,
result: [ 6, 1, 1, 3, 5, 3, 5, 2, 4, 6, 6, 3, 6, 6, 4 ],
session: 1063,
type: 1,
winMoney: 400
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 9 ],
ration: 0,
result: [ 0, 3, 3, 5, 4, 0, 2, 6, 3, 1, 5, 4, 5, 2, 5 ],
session: 1064,
type: 1,
winMoney: 1200
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 1, 4, 5, 11, 13, 14 ],
ration: 0,
result: [ 0, 3, 4, 0, 1, 5, 0, 5, 5, 5, 4, 2, 2, 6, 4 ],
session: 1065,
type: 1,
winMoney: 2100
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 8, 17 ],
ration: 0,
result: [ 5, 5, 6, 4, 6, 6, 6, 0, 5, 5, 6, 6, 6, 6, 0 ],
session: 1066,
type: 1,
winMoney: 1800
}, {
freeGift: [],
freeSpin: 1,
haiSao: [],
isBonus: !1,
isFreeSpin: 1,
lineWin: [ 2 ],
ration: 0,
result: [ 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1068,
type: 0,
winMoney: 0
}, {
freeGift: [],
freeSpin: 1,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 2, 3, 7, 8, 9, 11, 19, 20 ],
ration: 0,
result: [ 5, 3, 5, 5, 6, 6, 6, 2, 1, 6, 5, 5, 4, 5, 5 ],
session: 1071,
type: 1,
winMoney: 4e3
}, {
freeGift: [],
freeSpin: 1,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 5, 10, 14, 17 ],
ration: 0,
result: [ 6, 5, 2, 3, 2, 4, 3, 4, 5, 5, 6, 6, 5, 5, 3 ],
session: 1075,
type: 1,
winMoney: 800
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
isThangLon: !0,
lineWin: [ 1, 2, 3, 6, 7, 8, 9, 18, 17 ],
ration: 0,
result: [ 3, 3, 3, 3, 3, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5 ],
session: 1084,
type: 2,
winMoney: 63e3
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
isThangLon: !0,
lineWin: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16, 18, 17 ],
ration: 0,
result: [ 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5 ],
session: 1085,
type: 2,
winMoney: 86600
} ],
getItemTrial: function(t) {
t = null != t && null != t && "" != t ? parseInt(t) : Math.floor(Math.random() * i.results.length);
return i.results[t];
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
TwoScrollView: [ function(t, e) {
"use strict";
cc._RF.push(e, "9a4f8BGOLxGoY0ou8QG16sf", "TwoScrollView");
cc.Class({
extends: cc.ViewGroup,
properties: {
scrollView: cc.ScrollView,
parentListView: cc.ScrollView,
cancelInnerEvents: {
default: !0,
animatable: !1
}
},
onLoad: function() {
this.direction = null;
this.start_loc = null;
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this, !0);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this, !0);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this, !0);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancelled, this, !0);
this.scrollView.stopAutoScroll();
},
update: function() {
if (this.parentListView.getContentPosition().y < 500) {
if (this.scrollView.vertical) {
this.scrollView.vertical = !1;
this.parentListView.vertical = !0;
}
} else if (this.scrollView.vertical) {
if (this.scrollView.getContentPosition().y < 5 && this.scrollView.vertical) {
this.scrollView.vertical = !1;
this.parentListView.vertical = !0;
}
} else {
this.scrollView.vertical = !0;
this.parentListView.vertical = !1;
}
},
_hasNestedViewGroup: function(t, e) {
if (t.eventPhase === cc.Event.CAPTURING_PHASE) {
if (e) for (var i = 0; i < e.length; ++i) {
var n = e[i];
if (this.node === n) return !!t.target.getComponent(cc.ViewGroup);
if (n.getComponent(cc.ViewGroup)) return !0;
}
return !1;
}
},
_stopPropagationIfTargetIsMe: function(t) {
t.eventPhase === cc.Event.AT_TARGET && t.target === this.node && t.stopPropagation();
},
_onTouchBegan: function(t, e) {
if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
var i = t.touch;
this.start_loc = t.touch.getLocation();
if (this.node) {
this.parentListView && this.parentListView._handlePressLogic(i);
this.scrollView && this.scrollView._handlePressLogic(i);
}
this._touchMoved = !1;
this._stopPropagationIfTargetIsMe(t);
}
},
_onTouchMoved: function(t, e) {
var i = t.touch.getLocation(), n = Math.abs(this.start_loc.x - i.x), s = Math.abs(this.start_loc.y - i.y);
(n > 5 || s > 5) && !this.direction && (this.direction = n < s ? "parent_scrollview_move" : "scrollview_move");
if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
var o = t.touch;
this.node && this._handleMoveLogic(o);
if (this.cancelInnerEvents) {
if (o.getLocation().sub(o.getStartLocation()).mag() > 7 && !this._touchMoved && t.target !== this.node) {
var a = new cc.Event.EventTouch(t.getTouches(), t.bubbles);
a.type = cc.Node.EventType.TOUCH_CANCEL;
a.touch = t.touch;
a.simulate = !0;
t.target.dispatchEvent(a);
this._touchMoved = !0;
}
this._stopPropagationIfTargetIsMe(t);
}
}
},
_onTouchEnded: function(t, e) {
this.direction = null;
if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
var i = t.touch;
this.node && this._handleReleaseLogic(i);
this.parentListView && this.parentListView._dispatchEvent("touch-up");
this.scrollView && this.scrollView._dispatchEvent("touch-up");
this._touchMoved ? t.stopPropagation() : this._stopPropagationIfTargetIsMe(t);
}
},
_onTouchCancelled: function(t, e) {
this.direction = null;
if (this.enabledInHierarchy && !this._hasNestedViewGroup(t, e)) {
if (!t.simulate) {
var i = t.touch;
this.node && this._handleReleaseLogic(i);
}
this._stopPropagationIfTargetIsMe(t);
}
},
_clampDelta: function(t) {
Math.abs(t.x) < Math.abs(t.y) ? t.x = 0 : t.y = 0;
return t;
},
_handleMoveLogic: function(t) {
var e = this._clampDelta(t.getDelta());
if ("parent_scrollview_move" === this.direction) this.parentListView && this.parentListView._processDeltaMove(e); else {
this.scrollView && this.scrollView._processDeltaMove(e);
this.parentListView && this.parentListView._processDeltaMove(e);
}
},
_handleReleaseLogic: function(t) {
var e = t.getDelta();
e = this._clampDelta(e);
if (this.parentListView) {
this.parentListView._gatherTouchMove(e);
this.parentListView._processInertiaScroll();
}
if (this.scrollView) {
this.scrollView._gatherTouchMove(e);
this.scrollView._processInertiaScroll();
}
}
});
cc._RF.pop();
}, {} ],
UIBaccaratHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "d5a52cM8CtFQaeaphTmxD6Z", "UIBaccaratHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
eventClose: function() {
mm.audio.playButton();
this.back();
}
});
cc._RF.pop();
}, {} ],
UIBaccaratRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "fa16dmSjtlBxqySRXZ1blzN", "UIBaccaratRank");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
mm.Loading.hide();
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIBaccaratSoiCau: [ function(t, e) {
"use strict";
cc._RF.push(e, "369b8hYrj1FiJNRTKiGltw+", "UIBaccaratSoiCau");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
dishRoad: cc.Node,
bigRoad: cc.Node,
thongKe: cc.Node,
scoreRoad: cc.Node,
bigEyeRoad: cc.Node,
smallRoad: cc.Node,
cockRoach: cc.Node,
allPage: cc.PageView,
_MaxRow: 6,
bgDishBoard: {
type: cc.SpriteFrame,
default: []
},
bgBigRoad: {
type: cc.SpriteFrame,
default: []
},
bgScoreRoad: {
type: cc.SpriteFrame,
default: []
},
bgCockRoad: {
type: cc.SpriteFrame,
default: []
},
listCauNew: [],
_lastType: 0,
listColor: {
type: cc.Color,
default: []
},
_isFirst: !0
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onEnable: function() {
mm.Loading.hide();
this.MaxRow = 6;
this.setDataDishRoad();
this.reformatDataCau(this._data);
this.setDatBigRoad();
this.setDataStatistical();
this._isFirst = !0;
this.allPage.node.on("scroll-ended", function() {
this.setDataForPage2();
}, this);
},
setDataDishRoad: function() {
var t = this, e = this._data.length, i = Math.ceil(e / this.MaxRow), n = e - 72;
n < 0 && (n = 0);
Promise.all(this.dishRoad.children.map(function(s, o) {
if (o < i) {
s.active || (s.active = !0);
Promise.all(s.children.map(function(i, s) {
i.active || (i.active = !0);
var a = n + o * t.MaxRow + s;
if (a < e) {
var c = t._data[a].type;
t.setCauInfo(c, i);
} else i.active = !1;
}));
} else s.active = !1;
}));
},
setDatBigRoad: function() {
var t = this, e = this.listCauNew.length, i = e - 29;
i < 0 && (i = 0);
Promise.all(this.bigRoad.children.map(function(n, s) {
if (s < e) {
n.active || (n.active = !0);
var o = t.listCauNew[s + i], a = o.length;
Promise.all(n.children.map(function(e, i) {
e.active || (e.active = !0);
i < a ? t.setCauBigInfo(o[i].type, e) : e.active = !1;
}));
} else n.active = !1;
}));
},
setDataStatistical: function() {
var t = 0, e = 0, i = 0, n = 0, s = 0, o = this._data.length, a = this;
Promise.all(this._data.map(function(o) {
Promise.all(o.type.map(function(o) {
1 == o && t++;
0 == o && e++;
2 == o && i++;
4 == o && n++;
3 == o && s++;
}));
})).then(function() {
a.thongKe.getChildByName("lb_cai_thang").getComponent(cc.Label).string = t;
a.thongKe.getChildByName("lb_con_thang").getComponent(cc.Label).string = e;
a.thongKe.getChildByName("lb_hoa").getComponent(cc.Label).string = i;
a.thongKe.getChildByName("lb_cai_doi").getComponent(cc.Label).string = n;
a.thongKe.getChildByName("lb_con_doi").getComponent(cc.Label).string = s;
a.thongKe.getChildByName("lb_total").getComponent(cc.Label).string = o;
a.thongKe.getChildByName("lb_cai_thang_percent").getComponent(cc.Label).string = Math.round(t / o * 100) + "%";
a.thongKe.getChildByName("lb_con_thang_percent").getComponent(cc.Label).string = Math.round(e / o * 100) + "%";
a.thongKe.getChildByName("lb_hoa_percent").getComponent(cc.Label).string = Math.round(i / o * 100) + "%";
a.thongKe.getChildByName("lb_cai_doi_percent").getComponent(cc.Label).string = Math.round(n / o * 100) + "%";
a.thongKe.getChildByName("lb_con_doi_percent").getComponent(cc.Label).string = Math.round(s / o * 100) + "%";
});
},
setDataSmallRoad: function() {
var t = this, e = this.listCauNew.length, i = e - 13;
i < 0 && (i = 0);
Promise.all(this.smallRoad.children.map(function(n, s) {
if (s < e) {
n.active || (n.active = !0);
var o = t.listCauNew[s + i], a = o.length;
Promise.all(n.children.map(function(e, i) {
e.active = !1;
if (i < a && 2 != t.getTypeCau(o[i].type)) {
t.setCauSmallInfo(o[i].type, e);
e.active = !0;
}
}));
} else n.active = !1;
}));
},
setBigEyeRoad: function() {
var t = this, e = this.listCauNew.length, i = e - 13;
i < 0 && (i = 0);
Promise.all(this.bigEyeRoad.children.map(function(n, s) {
if (s < e) {
n.active || (n.active = !0);
var o = t.listCauNew[s + i], a = o.length;
Promise.all(n.children.map(function(e, i) {
e.active = !1;
if (i < a && 2 != t.getTypeCau(o[i].type)) {
t.setCauBigEye(o[i].type, e);
e.active = !0;
}
}));
} else n.active = !1;
}));
},
setCockRoad: function() {
var t = this, e = this.listCauNew.length, i = e - 13;
i < 0 && (i = 0);
Promise.all(this.cockRoach.children.map(function(n, s) {
if (s < e) {
n.active || (n.active = !0);
var o = t.listCauNew[s + i], a = o.length;
Promise.all(n.children.map(function(e, i) {
e.active = !1;
if (i < a && 2 != t.getTypeCau(o[i].type)) {
t.setCauCockInfo(o[i].type, e);
e.active = !0;
}
}));
} else n.active = !1;
}));
},
setScoreRoad: function() {
var t = this, e = this.listCauNew.length, i = e - 13;
i < 0 && (i = 0);
Promise.all(this.scoreRoad.children.map(function(n, s) {
if (s < e) {
n.active || (n.active = !0);
var o = t.listCauNew[s + i], a = o.length;
Promise.all(n.children.map(function(e, i) {
e.active = !1;
if (i < a) {
t.setScoreInfo(o[i], e);
e.active = !0;
}
}));
} else n.active = !1;
}));
},
eventBackPage: function() {
mm.audio.playButton();
this.setDataForPage2();
this.allPage.scrollToPage((this.allPage.getCurrentPageIndex() + 1) % 2);
},
eventNextPage: function() {
mm.audio.playButton();
this.setDataForPage2();
this.allPage.scrollToPage((this.allPage.getCurrentPageIndex() + 1) % 2);
},
setDataForPage2: function() {
if (this._isFirst) {
this.setDataSmallRoad();
this.setCockRoad();
this.setBigEyeRoad();
this.setScoreRoad();
}
this._isFirst = !1;
},
reformatDataCau: function(t) {
this.listCauNew = [];
for (var e = [], i = -1, n = 0; n < t.length; n++) {
var s = t[n], o = this.getTypeCau(s.type);
if (i < 0) {
if (2 != o) {
e.push(s);
i = o;
}
} else if (2 == o) e.push(s); else if (o == i) e.push(s); else {
if (e.length <= this.MaxRow) this.listCauNew.push(e); else for (var a = Math.ceil(e.length / this.MaxRow), c = 0; c < a; c++) this.listCauNew.push(e.slice(c, c + this.MaxRow));
(e = []).push(s);
i = o;
}
}
if (e.length <= this.MaxRow) this.listCauNew.push(e); else for (var r = Math.ceil(e.length / this.MaxRow), h = 0; h < r; h++) this.listCauNew.push(e.slice(h, h + this.MaxRow));
},
getTypeCau: function(t) {
if (t.length < 2) return t[0];
for (var e = 0; e < t.length; e++) if (t[e] < 3) return t[e];
return 2;
},
setCauInfo: function(t, e) {
var i = e.getChildByName("cai"), n = e.getChildByName("con");
i.active = !1;
n.active = !1;
for (var s = 0; s < t.length; s++) t[s] > 2 ? 3 == t ? n.active = !0 : i.active = !0 : e.getComponent(cc.Sprite).spriteFrame = this.bgDishBoard[t[s]];
},
setCauSmallInfo: function(t, e) {
for (var i = 0; i < t.length; i++) t[i] < 2 && (e.getComponent(cc.Sprite).spriteFrame = this.bgDishBoard[t[i]]);
},
setCauBigInfo: function(t, e) {
var i = e.getChildByName("cai"), n = e.getChildByName("con");
i.active = !1;
n.active = !1;
for (var s = 0; s < t.length; s++) if (t[s] > 2) 3 == t ? n.active = !0 : i.active = !0; else {
2 == t[s] ? t[s] = this._lastType + 2 : t[s] < 2 && (this._lastType, t[s]);
e.getComponent(cc.Sprite).spriteFrame = this.bgBigRoad[t[s]];
}
},
setCauBigEye: function(t, e) {
for (var i = 0; i < t.length; i++) t[i] < 2 && (e.getComponent(cc.Sprite).spriteFrame = this.bgBigRoad[t[i]]);
},
setCauCockInfo: function(t, e) {
for (var i = 0; i < t.length; i++) t[i] < 2 && (e.getComponent(cc.Sprite).spriteFrame = this.bgCockRoad[t[i]]);
},
setScoreInfo: function(t, e) {
for (var i = t.type, n = 0; n < i.length; n++) if (i[n] < 3) {
e.getComponent(cc.Sprite).spriteFrame = this.bgScoreRoad[i[n]];
e.getChildByName("lb_win").color = this.listColor[i[n]];
e.getChildByName("lb_win").getComponent(cc.Label).string = t.con;
e.getChildByName("lb_lose").getComponent(cc.Label).string = t.cai;
}
}
});
cc._RF.pop();
}, {} ],
UIBaccaratTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "9276eVsOfNEmoVpH/L9V0ok", "UIBaccaratTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
mm.Loading.hide();
this.listTransaction = this._data.items;
this.listview.numItems = this.listTransaction.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listTransaction[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIBaccarat: [ function(t, e) {
"use strict";
cc._RF.push(e, "1529fvbqnNEu4C33AtKNA6l", "UIBaccarat");
var i = t("BaccaratCard");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
ChatEmojiLayer: cc.Node,
listCau: cc.Node,
threeCau: cc.Node,
lbSession: cc.Label,
listNodeBet: cc.Node,
scrollBet: cc.ScrollView,
bgThreeCau: {
type: cc.SpriteFrame,
default: []
},
bgListCau: {
type: cc.SpriteFrame,
default: []
},
listNodePot: {
type: cc.Node,
default: []
},
_currentType: -1,
_currentBet: 1e3,
menuNode: cc.Node,
Timer: cc.Node,
ChipPrefab: cc.Prefab,
baccaratPrefab: cc.Prefab,
PlayerPos: cc.Node,
Noti: cc.Node,
playerCard1: cc.Node,
playerCard2: cc.Node,
playerCard3: cc.Node,
playerCardUp: cc.Node,
playerBgPoint: cc.Node,
playerPoint: cc.Label,
bankerCard1: cc.Node,
bankerCard2: cc.Node,
bankerCard3: cc.Node,
bankerCardUp: cc.Node,
bankerBgPoint: cc.Node,
bankerPoint: cc.Label,
winNode: cc.Node,
playerNode: cc.Node,
bankerNode: cc.Node,
girl: cc.Node,
ListPosInGirl: cc.Node,
fontWin: cc.Font,
fontLose: cc.Font,
_currentTime: 0,
_dataCau: [],
_myChipBet: [],
_poolChip: [],
_poolCau: [],
_isDat: !1,
_isDatLast: !1,
_lastBet: null,
_currentPercent: 0
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
var t = this;
this._myChipBet = [];
this.ListChipImg = {
1e3: "ic_chip1_small",
2e3: "ic_chip2_small",
5e3: "ic_chip3_small",
1e4: "ic_chip4_small",
5e4: "ic_chip5_small",
1e5: "ic_chip6_small",
5e5: "ic_chip7_small",
1e6: "ic_chip8_small",
1e7: "ic_chip9_small"
};
this._currentBet = 1e3;
this._lastBet = this.listNodeBet.children[0];
this._isDat = !1;
this._isDatLast = !1;
this.poolChip = [];
for (var e = 0; e < 20; e++) {
var i = cc.instantiate(this.ChipPrefab);
this.node.addChild(i);
i.active = !1;
this.poolChip.push(i);
}
this.listMyChipBet = [];
this.listChipBet = [];
Promise.all(this.listNodePot.map(function(e, i) {
t.listMyChipBet.push(e.getChildByName("bg_cuoc_ca_nhan").getChildByName("mybet").getComponent(cc.Label));
t.listChipBet.push(e.getChildByName("bg_tongcuoc").getChildByName("pot").getComponent(cc.Label));
e.on(cc.Node.EventType.TOUCH_END, function(n) {
var s = e.getComponent(cc.PolygonCollider);
if (cc.Intersection.pointInPolygon(n.getLocation(), s.world.points)) {
if (!SmartFoxSDK.BaccaratController.m_tableInfo.isBetting) {
mm.Toast.showToast(1, "Không được cược");
return;
}
t._isDat = !0;
mm.audio.playDatCua();
t.sendRequestBet(t._currentBet, i);
}
});
}));
},
onEnable: function() {
this._dataCau = [];
this._currentPercent = 0;
this.hideAll();
this._stopEffectWinPot();
},
hideAll: function() {
this.Timer.active = !1;
this.Noti.active = !1;
Promise.all(this.listNodePot.map(function(t) {
Promise.all(t.children.map(function(t) {
t.active = !1;
}));
}));
this.playerCard1.active = !1;
this.playerCard2.active = !1;
this.playerCard3.active = !1;
this.playerCardUp.active = !1;
this.playerBgPoint.active = !1;
this.bankerCard1.active = !1;
this.bankerCard2.active = !1;
this.bankerCard3.active = !1;
this.bankerCardUp.active = !1;
this.bankerPoint.active = !1;
this.bankerBgPoint.active = !1;
this.winNode.active = !1;
this.menuNode.active = !1;
},
runActionChangeMoney: function(t, e, i) {
this.updateUserVariable(0);
e > 0 && mm.audio.playWin();
if (Math.abs(e) > 0) {
var n = e > 0 ? this.fontWin : this.fontLose, s = this.getPosFromName(t), o = this.PlayerPos.getChildByName("pos_" + s).getChildByName("money_win").getComponent(cc.Label);
o.node.stopAllActions();
o.node.active = !0;
o.node.stopAllActions();
o.node.position = cc.v2(0, 20);
o.font = n;
o.string = e > 0 ? "+" + Utils.addDotToNumber(Math.abs(e)) : "-" + Utils.addDotToNumber(Math.abs(e));
var a = cc.v2(0, 120);
s > 6 && (a = cc.v2(0, 50));
o.node.runAction(cc.sequence(cc.moveTo(.5 * i, a).easing(cc.easeOut(.5)), cc.delayTime(2 * i), cc.callFunc(function() {
o.node.active = !1;
})));
}
},
runEffectGirl: function(t) {
this._isDat = !1;
this.girl.getComponent(sp.Skeleton).setAnimation(0, t, !1);
},
showResult: function(t, e, n, s, o, a) {
var c = this;
this.runEffectGirl("2");
this.playerCardUp.active = !0;
this.bankerCardUp.active = !0;
this.bankerCardUp.position = cc.v2(-34, -46);
this.bankerCardUp.angle = 0;
this.bankerCardUp.opacity = 255;
this.bankerCardUp.stopAllActions();
this.playerCardUp.position = cc.v2(34, -46);
this.playerCardUp.angle = 0;
this.playerCardUp.opacity = 255;
this.playerCardUp.stopAllActions();
for (var r = [], h = [], l = 0; l < t.length; l++) r.push(new i.Card(t[l]));
for (var u = 0; u < e.length; u++) h.push(new i.Card(e[u]));
this.playerPoint.string = (r[0].pointNumber + r[1].pointNumber) % 10;
this.bankerPoint.string = (h[0].pointNumber + h[1].pointNumber) % 10;
this.playerCard2.getComponent("ItemCard").init(r[1]);
this.bankerCard2.getComponent("ItemCard").init(h[1]);
this.playerCard1.getComponent("ItemCard").reveal(r[0], !0);
this.bankerCard1.getComponent("ItemCard").reveal(h[0], !0, function() {
c.runActionOpenCard(c.playerCardUp, a, function() {
c.runActionShowPoint(c.playerBgPoint, a, function() {
c.runActionOpenCard(c.bankerCardUp, a, function() {
c.runActionShowPoint(c.bankerBgPoint, a, function() {
if (t.length > 2 || e.length > 2) {
3 == t.length && c.playerCard3.getComponent("ItemCard").reveal(r[2], !1, function() {
c.playerPoint.string = (r[0].pointNumber + r[1].pointNumber + r[2].pointNumber) % 10;
c.showWin(n, s, o, a);
});
3 == e.length && c.bankerCard3.getComponent("ItemCard").reveal(h[2], !1, function() {
c.bankerPoint.string = (h[0].pointNumber + h[1].pointNumber + h[2].pointNumber) % 10;
c.showWin(n, s, o, a);
});
} else c.showWin(n, s, o, a);
});
});
});
});
});
},
showEffectWinLose: function(t) {
this.winNode.active = !0;
var e = this.playerNode.position, i = "hoa";
if (0 == t || 3 == t) {
i = "thangcon_1";
e = this.playerNode.position;
} else if (1 == t || 4 == t) {
i = "thangcai_1";
e = this.bankerNode.position;
} else {
e = cc.v2(0, this.bankerNode.y);
i = "hoa_1";
}
this.winNode.position = e;
this.winNode.getComponent(sp.Skeleton).setAnimation(0, i, !1);
},
runActionOpenCard: function(t, e, i) {
var n = cc.rotateTo(.5 * e, 6), s = cc.rotateTo(1 * e, -6), o = cc.rotateTo(.5 * e, 0), a = cc.fadeOut(1.5 * e), c = cc.moveBy(1.5 * e, cc.v2(t.x + 50, t.y - 50));
t.runAction(cc.sequence(n, s, o, cc.spawn(a, c), cc.callFunc(function() {
i && i();
})));
},
runActionShowPoint: function(t, e, i) {
t.active || (t.active = !0);
t.stopAllActions();
t.scaleY = 0;
var n = cc.scaleTo(.2 * e, 1, 1);
t.runAction(cc.sequence(n, cc.callFunc(function() {
i && i();
})));
},
showWin: function(t, e, i, n) {
for (var s = this, o = 0; o < t.length; o++) {
var a = t[o], c = cc.blink(2 * n, 8), r = this.listNodePot[a].getChildByName("bg_win");
r.active = !0;
r.runAction(cc.sequence(c, cc.delayTime(1 * n), cc.callFunc(function() {
s.runActionToGirl(function() {
e.length > 0 && Promise.all(i.map(function(t, i) {
s.actionFlyChipToPlayer(t, e[i], n);
}));
});
})));
}
this.showEffectWinLose(t[0]);
},
getNumberCardFromChip: function(t) {
var e = Math.floor(t / 1e7);
t -= 1e7 * e;
var i = Math.floor(t / 1e6);
t -= 1e6 * i;
var n = Math.floor(t / 5e5);
t -= 5e5 * n;
var s = Math.floor(t / 1e5);
t -= 1e5 * s;
var o = Math.floor(t / 5e4);
t -= 5e4 * o;
var a = Math.floor(t / 1e4);
t -= 1e4 * a;
var c = Math.floor(t / 5e3);
t -= 5e3 * c;
var r = Math.floor(t / 2e3);
t -= 2e3 * r;
return [ Math.floor(t / 1e3), r, c, a, o, s, n, i, e ];
},
runActionToGirl: function(t) {
for (var e = this, i = 0, n = 0; n < this.poolChip.length; n++) this.poolChip[n].active && i++;
for (var s = 0, o = function(n) {
var o = null;
if (e.poolChip[n].active) {
s++;
(o = e.poolChip[n]).position = cc.v2(0, 0);
var a = e.getPositionInOtherNode(o, e.ListPosInGirl);
o.parent = e.ListPosInGirl;
o.position = a;
var c = cc.v2(50 * Math.random() - 20, 10 * Math.random() - 10);
o.runAction(cc.sequence(cc.moveTo(1, c).easing(cc.easeOut(.5)), cc.delayTime(.05 * n), cc.callFunc(function() {
o.stopAllActions();
o.active = !1;
o.removeFromParent(!0);
if (s >= i) {
s = -1;
t && t();
}
})));
}
}, a = 0; a < this.poolChip.length; a++) o(a);
},
resumeGame: function(t, e, i, n, s, o) {
this.showResult(t, e, i, o, s, n / 20);
},
getChipNode: function() {
for (var t = 0; t < this.poolChip.length; t++) if (!this.poolChip[t].active) {
this.poolChip[t].active = !0;
this.poolChip[t].position = cc.v2(0, 0);
this.poolChip[t].parent = this.node;
return this.poolChip[t];
}
var e = cc.instantiate(this.ChipPrefab);
this.node.addChild(e);
e.active = !0;
this.poolChip.push(e);
return e;
},
returnChipNode: function(t) {
t.active = !1;
},
_stopEffectWinPot: function() {},
showListUsers: function(t) {
for (var e = 0; e < 7; e++) {
var i = this.PlayerPos.getChildByName("pos_" + e), n = i.getChildByName("name").getComponent(cc.Label), s = i.getChildByName("money").getComponent(cc.Label), o = e >= t.length ? null : t[e];
if (o && "admin" != o.getVariable("role").value) {
i.active = !0;
i._username = o.name;
n.string = GameVariables.getDisplayName(o);
s.string = Utils.formatCurrency(GameVariables.getChip(o));
} else {
i.active = !1;
i._username = null;
}
}
},
getPosFromName: function(t) {
for (var e = 0; e < 7; e++) {
var i = this.PlayerPos.getChildByName("pos_" + e);
if (i.active && i._username && i._username == t) return e;
}
return 7;
},
updateChip: function(t) {
for (var e = 0; e < 7; e++) {
var i = this.PlayerPos.getChildByName("pos_" + e), n = i.getChildByName("money").getComponent(cc.Label);
if (i.active && i._username && i._username == t.name) {
n.string = Utils.formatCurrency(GameVariables.getChip(t));
return;
}
}
},
_turnOnTime: function(t, e) {
this.Timer.active = !0;
this.Timer.getComponent("TimeSub").setTotalProgress(e);
this.Timer.getComponent("TimeSub").setTotalRemain(t);
this.Timer.getComponent("TimeSub").turnOnTimer();
this._currentTime = t;
this._stopEffectWinPot();
},
_turnOffTime: function() {
this.Timer.getComponent("TimeSub").turnOffTimer();
this.Timer.active = !1;
},
showListMyChipBet: function(t) {
if (this._isHaveChipBet(t)) this._myChipBet = t; else {
this._isDatLast || (this._myChipBet = t);
this._isDatLast && (this._isDatLast = !1);
}
for (var e = 0; e < t.length; e++) if (t[e] > 0) {
this.listMyChipBet[e].node.parent.active || (this.listMyChipBet[e].node.parent.active = !0);
this.listMyChipBet[e].string = Utils.formatCurrency(t[e]);
} else this.listMyChipBet[e].node.parent.active = !1;
},
showListChipBet: function(t) {
for (var e = 0; e < t.length; e++) {
this.listChipBet[e].node.parent.active || (this.listChipBet[e].node.parent.active = !0);
this.listChipBet[e].string = Utils.formatCurrency(t[e]);
}
},
selectBetChip: function(t, e) {
mm.audio.playButton();
this._lastBet.getChildByName("bg_select").active = !1;
t.currentTarget.getChildByName("bg_select").active = !0;
this._lastBet = t.currentTarget;
this._currentBet = parseInt(e);
},
sendRequestBet: function(t, e) {
this._isDatLast = !0;
this._currentType = e;
if (this._currentType < 0 || this._currentType >= 6) mm.Toast.showToast(1, "Của đặt không hợp lệ"); else if (GameVariables.getChip(SmartFoxSDK.BaccaratController.ZoneInstance.mySelf) < t) mm.Toast.showToast(1, "Không đủ tiền!"); else {
var i = new BaccaratRequest.BetRequest();
i.setBetChip(t);
i.setTypePot(this._currentType);
SmartFoxSDK.BaccaratController.ZoneInstance.send(i.toSRequest());
}
},
actionFlyChipToPot: function(t, e, i) {
this.ListChipImg.hasOwnProperty(i) ? this.actionFlyOneChipToPot(t, e, i) : this.actionFlyMutiChipToPot(t, e, i);
},
actionFlyOneChipToPot: function(t, e, i) {
var n = this.getPosFromName(t), s = "ic_chip1_small";
if (this.ListChipImg.hasOwnProperty(i)) {
s = this.ListChipImg[i];
var o = this.getChipNode();
Utils.loadRes(o.getComponent(cc.Sprite), "images/baccarat/" + s);
var a = this.PlayerPos.getChildByName("pos_" + n);
o.position = a.position;
var c = this.getPosBet(e), r = this.getPositionInOtherNode(c, this.node);
o.runAction(cc.sequence(cc.moveTo(.5, cc.v2(r.x, r.y)).easing(cc.easeOut(1)), cc.callFunc(function() {
o.position = cc.v2(0, 0);
o.parent = c;
})));
}
},
actionFlyMutiChipToPot: function(t, e, i) {
var n = this, s = this.getNumberCardFromChip(i), o = Object.keys(this.ListChipImg);
Promise.all(o.map(function(i, o) {
if (s[o] > 0) for (var a = parseInt(i), c = 0; c < s[o]; c++) n.actionFlyOneChipToPot(t, e, a);
}));
},
actionFlyChipToPlayer: function(t, e, i) {
var n = this, s = this.getNumberCardFromChip(e), o = Object.keys(this.ListChipImg), a = n.getPosFromName(t), c = n.PlayerPos.getChildByName("pos_" + a).position, r = 0, h = [];
Promise.all(o.map(function(t, e) {
if (s[e] > 0) for (var i = parseInt(t), o = 0; o < s[e]; o++) {
var a = "ic_chip1_small";
n.ListChipImg.hasOwnProperty(i) && (a = n.ListChipImg[t]);
var c = n.getChipNode();
Utils.loadRes(c.getComponent(cc.Sprite), "images/baccarat/" + a);
c.position = cc.v2(50 * Math.random() - 20, 10 * Math.random() - 10);
h.push(c);
}
})).then(function() {
Promise.all(h.map(function(t) {
if (null != t) {
r++;
t.runAction(cc.sequence(cc.delayTime(.1 * r * i), cc.moveTo(1 * i, c).easing(cc.easeOut(1)), cc.callFunc(function() {
t.removeFromParent(!0);
t.active = !1;
})));
}
})).then(function() {
n.runActionChangeMoney(t, e, i);
});
});
},
getPosBet: function(t) {
var e = null;
if (t < 2) {
var i = this.listNodePot[t].getChildByName("Bet0"), n = this.listNodePot[t].getChildByName("Bet1"), s = this.listNodePot[t].getChildByName("Bet2");
e = i.childrenCount < n.childrenCount ? i : n.childrenCount < s.childrenCount ? n : s;
} else e = this.listNodePot[t].getChildByName("Bet0");
if (e.childrenCount > 8) {
var o = e.children[0];
o.removeFromParent(!0);
o.active = !1;
}
e.active || (e.active = !0);
return e;
},
eventCloseMenu: function() {
mm.audio.playButton();
this.menuNode.active = !1;
},
eventOpenMenu: function() {
mm.audio.playButton();
this.menuNode.active = !0;
},
eventRank: function() {
mm.audio.playButton();
mm.Loading.show();
this.menuNode.active = !1;
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.BaccaratController.ZoneInstance.send(t.toSRequest());
},
eventTransaction: function() {
mm.audio.playButton();
mm.Loading.show();
this.menuNode.active = !1;
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.BaccaratController.ZoneInstance.send(t.toSRequest());
},
clickExitRoom: function() {
var t = SmartFoxSDK.BaccaratController.ZoneInstance.getRoomByName("baccarat");
if (t) {
SmartFoxSDK.BaccaratController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t));
mm.Loading.show();
} else UIManger.show("UIHome");
},
eventHelper: function() {
mm.audio.playButton();
this.show("UIBaccaratHelper", {
pop: !0,
src: "baccarat"
});
},
eventSoiCau: function() {
mm.audio.playButton();
mm.Loading.show();
if (this._dataCau.length < 1) {
var t = new BaccaratRequest.HistoryDetailRequest();
SmartFoxSDK.BaccaratController.ZoneInstance.send(t.toSRequest());
} else this.showSoiCau(this._dataCau);
},
showSoiCau: function(t) {
this._dataCau = t;
this.show("UIBaccaratSoiCau", {
pop: !0,
src: "baccarat",
data: t
});
},
eventGapThep: function() {
mm.audio.playButton();
if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
this._isDat = !0;
for (var t = 0; t < this._myChipBet.length; t++) this._myChipBet[t] > 0 && this.sendRequestBet(2 * this._myChipBet[t], t);
} else mm.Toast.showToast(1, "Không có dữ liệu gấp thếp");
},
eventDatLai: function() {
mm.audio.playButton();
if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
this._isDat = !0;
for (var t = 0; t < this._myChipBet.length; t++) this._myChipBet[t] > 0 && this.sendRequestBet(this._myChipBet[t], t);
} else mm.Toast.showToast(1, "Không có dữ liệu đặt lại");
},
_isHaveChipBet: function(t) {
for (var e = !1, i = 0; i < t.length; i++) if (t[i] > 0) return !0;
return e;
},
eventScrollLeft: function() {
mm.audio.playButton();
this._currentPercent -= .5;
this._currentPercent < 0 && (this._currentPercent = 0);
this.scrollBet.scrollToPercentHorizontal(this._currentPercent, 1);
},
eventScrollRight: function() {
mm.audio.playButton();
this._currentPercent += .5;
this._currentPercent > 1 && (this._currentPercent = 1);
this.scrollBet.scrollToPercentHorizontal(this._currentPercent, 1);
},
showNoti: function(t) {
this.Noti.active = !0;
this.Noti.getChildByName("lb_noti_content").getComponent(cc.Label).string = t;
this.scheduleOnce(function() {
this.Noti.active = !1;
}, 1.5);
},
onListRender: function(t, e) {
var i = this.listCau[e];
t.getComponent(t.name).init(i);
},
updateCau: function(t) {
var e = this, i = t.length - this.listCau.childrenCount;
i < 0 && (i = 0);
Promise.all(this.listCau.children.map(function(n, s) {
if (i + s < t.length) {
var o = t[i + s].type;
e.setCauInfo(o, n);
} else n.active = !1;
}));
this.updateThreeCau(t);
},
updateThreeCau: function(t) {
var e = [], i = t.length;
if (i > 3) {
e.push(t[i - 3]);
e.push(t[i - 2]);
e.push(t[i - 1]);
} else e = t;
var n = this, s = e.length;
Promise.all(this.threeCau.children.map(function(t, i) {
if (i < s) {
var o = n.getTypeCau(e[i].type);
t.getComponent(cc.Sprite).spriteFrame = n.bgThreeCau[o];
t.getChildByName("lb_point").getComponent(cc.Label).string = 0 == o ? e[i].con : 1 == o ? e[i].cai : e[i].con;
} else t.active = !1;
}));
},
setCauInfo: function(t, e) {
var i = e.getChildByName("cai"), n = e.getChildByName("con");
i.active = !1;
n.active = !1;
for (var s = 0; s < t.length; s++) t[s] > 2 ? 3 == t ? n.active = !0 : i.active = !0 : e.getComponent(cc.Sprite).spriteFrame = this.bgListCau[t[s]];
},
getTypeCau: function(t) {
if (t.length < 2) return t[0];
for (var e = 0; e < t.length; e++) if (t[e] < 3) return t[e];
return 2;
},
eventShowChat: function() {
this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
this.ChatEmojiLayer.active && this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.BaccaratController.ZoneInstance);
},
onPublicMessage: function(t) {
var e = t.msg, i = this.getPosFromName(t.sender.name), n = this.PlayerPos.children[i].getChildByName("EMOJ");
if (null != n) {
var s = e.indexOf("emoij_") >= 0, o = n.getChildByName("EMOJ"), a = n.getChildByName("box");
o.active = !1;
a.active = !1;
if (s) {
o.active = !0;
o.opacity = 255;
var c = e.replace("emoij_", "");
o.stopAllActions();
o.getComponent(sp.Skeleton).setAnimation(0, c, !1);
o.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function() {
o.active = !1;
})));
} else {
a.active = !0;
a.opacity = 255;
a.stopAllActions();
a.getChildByName("lb_chat").getComponent(cc.Label).string = e;
a.getComponent(cc.Layout).updateLayout();
a.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function() {
a.active = !1;
})));
}
}
},
updateUserVariable: function(t) {
this.PlayerPos.children[0].getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(GameVariables.Poker.getChip(SmartFoxSDK.BaccaratController.ZoneInstance.mySelf) - t);
}
});
cc._RF.pop();
}, {
BaccaratCard: "BaccaratCard"
} ],
UIBankLog: [ function(t, e) {
"use strict";
cc._RF.push(e, "4b2fba6ajxAuLNeGszWH4MI", "UIBankLog");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listRank = [];
this.listview.numItems = this.listRank.length;
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIBaoMatOTP: [ function(t, e) {
"use strict";
cc._RF.push(e, "826abY87hRI442yZwTg/sWm", "UIBaoMatOTP");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
phone: cc.EditBox,
code_otp: cc.EditBox
},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
eventClose: function() {
this.back();
mm.audio.playButton();
},
eventUpdate: function() {
mm.audio.playButton();
}
});
cc._RF.pop();
}, {} ],
UICandyHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "13ba2NCuKtE9YsQAdXH7gmE", "UICandyHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {} ],
UICandyRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "d33f5yzFBNHJLAXySgDSj13", "UICandyRank");
var i = t("Listview"), n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
allRank: cc.Sprite,
allHu: cc.Sprite,
listRank: [],
listHu: []
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
eventClose: function() {
this.back();
},
eventAllRank: function() {
n.setMaterialGray(this.allRank, !1);
n.setMaterialGray(this.allHu, !0);
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
eventHu: function() {
n.setMaterialGray(this.allRank, !0);
n.setMaterialGray(this.allHu, !1);
if (this._data && this._data.items) {
this.listHu = [];
this.listview.numItems = this.listHu.length;
}
}
});
cc._RF.pop();
}, {
Helper: "Helper",
Listview: "Listview"
} ],
UICandyTransactionDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "44a08iIlj9ENZ6z1lkN8/FX", "UICandyTransactionDetail");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listItem: cc.Node,
lbSession: cc.Label,
lbMoneyWin: cc.Label
},
onEnable: function() {
var t = this._data.resultMap;
this.lbSession.string = "#" + this._data.session;
this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
Promise.all(this.listItem.children.map(function(e, i) {
e.getComponent("CandyItem").setIcon(t[i]);
}));
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
}
});
cc._RF.pop();
}, {} ],
UICandyTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "f98531e1DxDy5E4Lq5Kg57G", "UICandyTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
},
eventHistoryWin: function() {},
eventAll: function() {}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UICandy: [ function(t, e) {
"use strict";
cc._RF.push(e, "6eefaH7lo5GK6xFbXyC4tUQ", "UICandy");
var i = t("CandyWinGame"), n = t("Helper"), s = t("CandyReel"), o = t("CandyLine"), a = t("UtilsUI"), c = t("candyLanguage"), r = cc.Enum({
"1l": 100,
"1k": 1e3,
"5k": 5e3,
"10k": 1e4
});
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: s
},
listRoomNode: {
default: [],
type: cc.Toggle
},
iconPrefab: cc.Prefab,
noticeNode: cc.Node,
btnQuay: cc.Node,
btnQuayNhanh: cc.Node,
btnStopSieuToc: cc.Node,
btnStopQuay: cc.Node,
btnAutoQuay: cc.Node,
WinGame: i,
listMainLines: cc.Node,
numberLine: cc.Sprite,
edtCheat: cc.EditBox,
selectLines: o,
isAuto: !1,
isFast: !1,
isSpin: !1,
red: !0,
lastResult: [],
betSelect: 0,
roomNumber: 0,
posLineWin: 0,
totalLineWin: 0,
TotalItemRun: 30,
_TotalColumn: 3,
_totalLine: 20,
lb_hu: cc.Label,
betLevel: "1l"
},
onLoad: function() {
this.initCandy();
this.isSpin = !1;
this.WinGame.init(this);
this.selectLines.init(this);
this.betLevel = "1k";
this.roomNumber = r["1k"];
this.listRoomNode[1].isChecked = !0;
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
onEnable: function() {
if (this.node.zIndex <= cc.lastZIndex) {
cc.lastZIndex += 1;
this.node.zIndex = cc.lastZIndex;
}
cc.currentUI = "UICandy";
this._totalLine = 20;
},
onDisable: function() {
this.node.stopAllActions();
},
updateJackpot: function() {
var t = "candy" + this.betLevel;
if (SmartFoxSDK.CandyController.ZoneInstance.mySelf) {
var e = SmartFoxSDK.CandyController.ZoneInstance.mySelf.getVariable(t);
if (e) {
var i = e.value, n = this.lb_hu.string;
n = n.split(".").join("");
var s = parseFloat(n);
Utils.numberTo(this.lb_hu, s, i, 1e3, !0);
}
}
},
initCandy: function() {
var t = this, e = [], i = [], n = [];
Promise.all(this.reels.map(function(s) {
var o;
o = t.initRandomItems(t.TotalItemRun, 0, 6);
e.push(o[o.length - 1]);
i.push(o[o.length - 2]);
n.push(o[o.length - 3]);
s.init(t, o);
})).then(function() {
t.lastResult = n.concat(i).concat(e);
});
},
setMoneyWin: function() {},
updateDataPhong: function() {},
eventQuay: function() {
if (this.checkEnoughMoney()) {
this.isSpin = !0;
var t = new CandyRequest.BetRequest();
this.showLineWin(!1);
this.pauseSystemEventNode(this.btnQuay, !0);
this.setLinesBet(t);
t.setBet(this.roomNumber);
SmartFoxSDK.CandyController.ZoneInstance.send(t.toSRequest());
this.updateChipAll(this._totalLine * this.roomNumber);
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
setLinesBet: function(t) {
switch (this.selectLines.typeLine) {
case 1:
t.setLineLe();
break;

case 2:
t.setLineChan();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t.setLine(e);
}
},
eventSieuToc: function() {
if (this.checkEnoughMoney()) {
this.isFast = !0;
this.isAuto = !0;
this.btnStopSieuToc.active = !0;
this.btnStopQuay.active = !1;
this.isSpin = !0;
this.autoQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
eventAutoQuay: function() {
if (this.checkEnoughMoney()) {
this.isSpin = !0;
this.isAuto = !0;
this.isFast = !1;
this.btnStopQuay.active = !0;
this.btnStopSieuToc.active = !1;
this.pauseSystemEventNode(this.btnQuay, !0);
this.autoQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
eventStopAuto: function() {
this.isAuto = !1;
this.btnStopQuay.active = !1;
this.pauseSystemEventNode(this.btnQuay, !1);
},
eventStopSieuToc: function() {
this.isAuto = !1;
this.isFast = !1;
this.btnStopSieuToc.active = !1;
},
eventPhong: function(t, e) {
if (this.isSpin) {
100 == this.roomNumber ? this.listRoomNode[0].isChecked = !0 : 1e3 == this.roomNumber ? this.listRoomNode[1].isChecked = !0 : 5e3 == this.roomNumber ? this.listRoomNode[2].isChecked = !0 : 1e4 == this.roomNumber && (this.listRoomNode[3].isChecked = !0);
this.addNotice(c.getString("noti_is_playing"));
} else {
this.roomNumber = parseInt(e);
100 == this.roomNumber ? this.betLevel = "1l" : 1e3 == this.roomNumber ? this.betLevel = "1k" : 5e3 == this.roomNumber ? this.betLevel = "5k" : 1e4 == this.roomNumber && (this.betLevel = "10k");
this.updateJackpot();
}
},
eventSelectLines: function() {
this.isSpin ? this.addNotice(c.getString("noti_is_playing")) : this.selectLines.eventOpen();
},
checkEnoughMoney: function() {
return !(GameVariables.Poker.getChip(SmartFoxSDK.CandyController.ZoneInstance.mySelf) < this.roomNumber * this._totalLine);
},
pauseSystemEventNode: function(t, e) {
n.setMaterialGray(t.getComponent(cc.Sprite), e);
e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
},
eventBack: function() {
if (this.isSpin) this.addNotice(c.getString("noti_is_playing")); else {
var t = SmartFoxSDK.CandyController.ZoneInstance.getRoomByName("candy");
t ? SmartFoxSDK.CandyController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t)) : this.back();
}
},
eventSetting: function() {},
eventVinhDanh: function() {
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.CandyController.ZoneInstance.send(t.toSRequest());
},
eventLichSuGiaoDich: function() {
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.CandyController.ZoneInstance.send(t.toSRequest());
},
eventOpenHelper: function() {
this.show("UICandyHelper", {
pop: !0,
src: "candy"
});
},
finishSpin: function() {
this.isSpin = !1;
},
CandyRun: function(t) {
var e = this;
if (void 0 !== t.status) if (1 === t.status) {
t.result = this.getDataResult(t.result);
Promise.all(t.result.map(function(t, i) {
Promise.all(t.map(function(t, n) {
e.reels[i].icons[n].setIcon(t, !0);
}));
})).then(function() {
e.runReels();
});
this.lineWin = t.lineWin;
this.winMoney = t.winMoney;
this.isNoHu = t.isNohu;
this.isThangLon = t.isThangLon;
} else this.resetSpin(); else this.resetSpin();
},
initRandomItems: function(t, e, i) {
for (var n = [], s = 0; s < t; s++) n[s] = this.random(e, i);
return n;
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this._TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this._TotalColumn].push(t[n]);
for (var s = 0; s < this._TotalColumn; s++) {
var o = this.initRandomItems(this.TotalItemRun - 6, 0, 6);
e[s] = e[s].concat(o);
}
for (var a = 0; a < this.lastResult.length; a++) e[a % this._TotalColumn].push(this.lastResult[a]);
this.lastResult = t;
return e;
},
reformatResult: function(t, e) {
for (var i = [], n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
return i;
},
runActionWon: function() {
this.WinGame.runWinGame();
this.showLineWin(!0);
this.isAuto || this.pauseSystemEventNode(this.btnQuay, !1);
},
resume: function() {
this.winMoney > 0 ? this.scheduleOnce(function() {
this.WinGame.runWinGame();
}, .5) : this.WinGame.runWinGame();
},
autoQuay: function() {
this.checkEnoughMoney() ? this.isAuto && this.scheduleOnce(function() {
this.eventQuay();
}, .5) : mm.Toast.showToast(1, c.getString("noti_not_money"));
},
showLineWin: function(t) {
var e = this, i = this;
if (t) {
this.totalLineWin = this.lineWin.length;
this.posLineWin = 0;
if (this.totalLineWin > 0) {
Promise.all(this.lineWin.map(function(t) {
i.listMainLines.children[t].active = !0;
}));
this.scheduleOnce(function() {}, 2);
Promise.all(i.lineWin.map(function(t) {
i.listMainLines.children[t].active = !1;
})).then(function() {
i.schedule(e.showMainLine, 1.5);
});
}
} else {
for (var n = 0; n < this.listMainLines.childrenCount; n++) this.listMainLines.children[n].active && (this.listMainLines.children[n].active = !1);
i.unschedule(this.showMainLine);
}
},
showMainLine: function() {
var t = this;
Promise.all(this.listMainLines.children.map(function(t) {
t.active && (t.active = !1);
})).then(function() {
t.totalLineWin = t.lineWin.length;
if (t.totalLineWin > 0) {
t.posLineWin = (t.posLineWin + 1) % t.totalLineWin;
t.listMainLines.children[t.lineWin[t.posLineWin]].active = !0;
}
}, this);
},
runReels: function() {
Promise.all(this.reels.map(function(t, e) {
t.spin(e);
}));
},
copy: function() {
Promise.all(this.reels.map(function(t) {
t.icons[t.icons.length - 1].setIcon(t.icons[2].data);
t.icons[t.icons.length - 2].setIcon(t.icons[1].data);
t.icons[t.icons.length - 3].setIcon(t.icons[0].data);
}));
},
setNumberLines: function(t) {
this._totalLine = t;
a.loadImageRes(this.numberLine, "candy/img/number-button/" + t);
},
random: function(t, e) {
return t + ~~(Math.random() * e);
},
resetSpin: function() {
this.isSpin = !1;
this.isAuto = !1;
this.isFast = !1;
this.btnStopQuay.active = !1;
this.btnStopSieuToc.active = !1;
this.pauseSystemEventNode(this.btnQuay, !1);
mm.Toast.showToast(1, c.getString("noti_not_money"));
},
checkHasMoney: function() {
return !0;
},
addNotice: function(t) {
var e = this;
this.noticeNode.active = !0;
this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = t;
this.scheduleOnce(function() {
e.noticeNode.active = !1;
}, 1.5);
},
updateChipAll: function(t) {
SmartFoxSDK.CandyController.onEventUpdateChip(t);
}
});
cc._RF.pop();
}, {
CandyLine: "CandyLine",
CandyReel: "CandyReel",
CandyWinGame: "CandyWinGame",
Helper: "Helper",
UtilsUI: "UtilsUI",
candyLanguage: "candyLanguage"
} ],
UIChangePassword: [ function(t, e) {
"use strict";
cc._RF.push(e, "f86449gLZBIUrjN+7ifYFkd", "UIChangePassword");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
register_pass: cc.EditBox,
register_pass_again: cc.EditBox
},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
clickChangePassword: function() {
mm.audio.playButton();
if ("" != this.register_pass.string) if (this.register_pass.string == this.register_pass_again.string) if (this.register_pass.string.length < 6) mm.Toast.showToast(1, "Mật khẩu nhỏ hơn 6 kí tự"); else {
var t = new CasinoRequest.ChangePassRequest();
t.setNewPassword(this.register_pass.string);
SmartFoxSDK.PortalController.ZoneInstance.send(t.toSRequest());
} else mm.Toast.showToast(1, "Mật khẩu không khớp"); else mm.Toast.showToast(1, "Mật khẩu không được trống");
},
eventClose: function() {
this.back();
mm.audio.playButton();
}
});
cc._RF.pop();
}, {} ],
UIDaiLy: [ function(t, e) {
"use strict";
cc._RF.push(e, "7698dZ+jKBGNYlNkP0acvxs", "UIDaiLy");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
listArea: [ cc.Sprite ],
listBg: [ cc.SpriteFrame ],
_listArea: []
},
onLoad: function() {
this.listDaiLy = [];
this._listArea = [ "ja", "ko" ];
this.listview.numItems = this.listDaiLy.length;
},
onEnable: function() {
mm.Loading.show();
SmartFoxSDK.PortalController.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
var t = new CasinoRequest.ListAgencyRequest();
SmartFoxSDK.PortalController.ZoneInstance.send(t.toSRequest());
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
onDisable: function() {
SmartFoxSDK.PortalController.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListAgency: function(t) {
mm.Loading.hide();
var e = new CasinoEvent.ListAgencyEvent().fromEvent(t);
this.listBaseDaiLy = e;
this.listDaiLy = e;
console.log(e);
this.eventSelectArea(null, this.getLastArea());
},
onListRender: function(t, e) {
var i = this.listDaiLy[e];
t.getComponent(t.name).init(i, e);
t.getComponent(t.name).addEventSelect(function(t) {
mm.audio.playButton();
this.show("UIPayment", {
pop: !0,
src: "portal",
data: {
nickname: t.name,
agName: t.agName,
area: t.zone
}
});
});
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
},
eventSelectArea: function(t, e) {
null != t && mm.audio.playButton();
var i = this.getDailyInArea(e);
this.listDaiLy = i;
this.listview.numItems = i.length;
for (var n = 0; n < 3; n++) this.listArea[n].spriteFrame = this.listBg[0];
this.listArea[e].spriteFrame = this.listBg[1];
},
getDailyInArea: function(t) {
for (var e = this._listArea[t], i = [], n = 0; n < this.listBaseDaiLy.length; n++) this.listBaseDaiLy[n].zone == e && i.push(this.listBaseDaiLy[n]);
return i;
},
getLastArea: function() {
var t = cc.sys.localStorage;
null !== t.getItem("last_area") && void 0 !== t.getItem("last_area") || t.setItem("last_area", "ja");
return "ja" == t.getItem("last_area") ? 0 : 1;
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIDialogBuyIn: [ function(t, e) {
"use strict";
cc._RF.push(e, "b7796eLjnRGcL/r3+Y0QbkD", "UIDialogBuyIn");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
_distance: 100,
_current: 0,
_max: 0,
_min: 0,
_sizeDesk: 6,
_remainChip: 0,
lb_min: cc.Label,
lb_max: cc.Label,
lb_current: cc.Label,
lb_remain: cc.Label,
SliderRaise: cc.Slider,
cbYes: null
},
onEnable: function() {
this.cbYes = this._data.cbYes;
this.initSlider(this._data.distance, this._data.remainChip, this._data.currentChip, this._data.min, this._data.max);
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
initSlider: function(t, e, i, n, s) {
this._max = s;
this._min = n;
this._distance = t;
this._current = i;
this._remainChip = e;
this.lb_remain.string = Utils.formatCurrency(e);
this.updateSlider();
},
updateSlider: function() {
var t = this._current / this._max;
this.SliderRaise.progress = t;
this.lb_current.string = Utils.addDotToNumber(this._current);
this.lb_min.string = Utils.formatCurrency(this._min);
this.lb_max.string = Utils.formatCurrency(this._max);
},
eventPlus: function() {
mm.audio.playButton();
this._current += this._distance;
this._current > this._max && (this._current = this._max);
this.updateSlider();
},
eventSub: function() {
mm.audio.playButton();
this._current -= this._distance;
this._current < this._min && (this._current = this._min);
this.updateSlider();
},
onSliderRaise: function(t) {
var e = t.progress;
this._current = Math.floor(parseFloat(e).toFixed(1) * this._max);
this._current > this._remainChip && (this._current = this._remainChip);
this._current < this._min && (this._current = this._min);
this.lb_current.string = Utils.addDotToNumber(this._current);
},
onToggleGroup: function(t, e) {
mm.audio.playButton();
this._sizeDesk = e;
},
eventConfirm: function() {
mm.audio.playButton();
this.cbYes && this.cbYes.call(this);
},
getBuyIn: function() {
return this._current;
},
getMinBet: function() {
return this._distance;
},
eventCancel: function() {
mm.audio.playButton();
this.back();
}
});
cc._RF.pop();
}, {} ],
UIDialogOne: [ function(t, e) {
"use strict";
cc._RF.push(e, "bc69fyCGktKKJgDpKJdig1b", "UIDialogOne");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lb_content: cc.Label
},
onEnable: function() {
this._data.content && (this.lb_content.string = this._data.content);
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
eventConfirm: function() {
mm.audio.playButton();
this._data.cbYes && this._data.cbYes.call(this);
this.node.setSiblingIndex(0);
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
UIDialogTwo: [ function(t, e) {
"use strict";
cc._RF.push(e, "33288DCobhC34Lhvm6P2Ery", "UIDialogTwo");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lb_content: cc.Label
},
onEnable: function() {
this._data.content && (this.lb_content.string = this._data.content);
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
eventConfirm: function() {
mm.audio.playButton();
this._data.cbYes && this._data.cbYes.call(this);
this.node.setSiblingIndex(0);
},
eventCancel: function() {
mm.audio.playButton();
this.back();
}
});
cc._RF.pop();
}, {} ],
UIGiftCode: [ function(t, e) {
"use strict";
cc._RF.push(e, "a8cf0sM+3ND6apFBWLLFcpM", "UIGiftCode");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
edit_gc: cc.EditBox
},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
eventSend: function() {
mm.audio.playButton();
if ("" != this.edit_gc.string) {
var t = new CasinoRequest.GiftCodeRequest();
t.setGiftCode(this.edit_gc.string);
SmartFoxSDK.PortalController.ZoneInstance.send(t.toSRequest());
mm.Loading.show();
} else mm.Toast.showToast(1, "GiftCode không được trống");
},
eventClose: function() {
this.back();
mm.audio.playButton();
}
});
cc._RF.pop();
}, {} ],
UIHome: [ function(t, e) {
"use strict";
cc._RF.push(e, "b61e3usURxALbVo2C8WDS0x", "UIHome");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
TopHome: cc.Node,
TopLogin: cc.Node,
lb_name: cc.Label,
lb_chip: cc.Label,
Avatar: cc.Sprite,
ALL: {
type: cc.Node,
default: []
},
SLOT: {
type: cc.Node,
default: []
},
MINI: {
type: cc.Node,
default: []
},
CASINO: {
type: cc.Node,
default: []
}
},
onLoad: function() {
Utils.loadRes(this.Avatar, "images/avatar/" + Config.getDefaultAvatar());
MiniGame.showIcon();
cc.isFirstTx = !0;
},
onEnable: function() {
if (mm.isLogin) {
this.TopHome.active = !0;
this.TopLogin.active = !1;
} else {
this.TopHome.active = !1;
this.TopLogin.active = !0;
this.resetAllGameUI();
}
mm.audio.playMusic();
if (mm.isLogin && cc.isFirstTx) {
cc.isFirstTx = !1;
if (null == this.getUIFromName("UITaiXiu")) {
this._selectGame = "taixiu";
this.completeLoadUIGame(this._selectGame);
}
}
},
updateUserVariable: function(t) {
if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
this.lb_name.string = Utils.formatText(GameVariables.Poker.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf), 20);
this.lb_chip.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf) - t);
var e = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable("sysmsg");
if (e && e.value) {
var i = this.node.getChildByName("content").getChildByName("SystemMessage");
i.getComponent(i.name).runMessage(e.value);
}
}
},
onSelectGame: function(t, e) {
this._selectGame = e;
cc._selectGameNode = t.currentTarget;
this.onLoadSubGame();
mm.audio.playButton();
},
onSelectTXGame: function() {
GameVariables.Poker.getUserJson(SmartFoxSDK.PortalController.ZoneInstance.mySelf), 
jsb.reflection.callStaticMethod("CocosBridge", "openTXGame:", "");
},
onSelectXDGame: function() {
GameVariables.Poker.getUserJson(SmartFoxSDK.PortalController.ZoneInstance.mySelf), 
jsb.reflection.callStaticMethod("CocosBridge", "openXDGame:", "");
},
onToggleCategoryGame: function(t) {
mm.audio.playButton();
if ("All" == t.node.name) this._activeIconGame(this.ALL); else if ("Slot" == t.node.name) {
this._hideAllIconGame();
this._activeIconGame(this.SLOT);
} else if ("MiniGame" == t.node.name) {
this._hideAllIconGame();
this._activeIconGame(this.MINI);
} else if ("Casino" == t.node.name) {
this._hideAllIconGame();
this._activeIconGame(this.CASINO);
}
},
_hideAllIconGame: function() {
for (var t = 0; t < this.ALL.length; t++) this.ALL[t].active = !1;
},
_activeIconGame: function(t) {
for (var e = 0; e < t.length; e++) t[e].active = !0;
},
onLoadSubGame: function() {
var t = this._selectGame;
if (mm.isLogin) {
cc._selectGameNode.getChildByName("load").active = !0;
mm.Loading.show();
this.completeLoadUIGame(t);
} else this.show("UILogin", {
pop: !0
});
},
completeLoadUIGame: function(t) {
var e = PortalManager.getGameController(t);
e && e.loginZone(Config.getUsername(), Config.getPass());
},
onClickLogin: function() {
mm.audio.playButton();
this.show("UILogin", {
pop: !0
});
},
onClickRegister: function() {
mm.audio.playButton();
this.show("UIRegister", {
pop: !0
});
},
eventShowWarning: function() {
var t = this;
mm.audio.playButton();
UIManger.show("UIDialogTwo", {
data: {
content: "Bạn có muốn đăng xuất không?",
cbYes: function() {
t.TopHome.active = !1;
t.TopLogin.active = !0;
mm.isLogin = !1;
SmartFoxSDK.PortalController._reset();
PortalManager.disconnectAll();
t.resetAllGameUI();
}
},
pop: !0
});
},
resetAllGameUI: function() {
for (var t = cc.director.getScene(), e = 0; e < t.childrenCount; e++) {
var i = t.children[e];
i.name.startsWith("UI") && "UIHome" != i.name && i.destroy();
}
}
});
cc._RF.pop();
}, {} ],
UIKimCuongBonusGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "2df859DcplP5LRkXX1yZqV8", "UIKimCuongBonusGame");
var i = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbHeSoNhan: cc.Label,
lbTime: cc.Label,
lbLuotBoc: cc.Label,
lbMoneyWin: cc.Label,
resultWin: cc.Node,
totalSelect: 0,
totalTime: 15
},
onEnable: function() {
this.totalTime = 15;
this.resultWin.active = !1;
this.totalSelect = this._data.length;
this.lbHeSoNhan.string = "x" + Math.floor(30 * Math.random());
this.lbLuotBoc.string = this.totalSelect;
this.lbTime.string = this.totalTime;
this.schedule(this.countTime, 1);
},
countTime: function() {
this.totalTime--;
if (this.totalTime < 1) {
this.unschedule(this.countTime);
this.eventClose();
}
this.lbTime.string = this.totalTime;
},
showMoneyWin: function() {
var t = this;
this.resultWin.active = !0;
for (var e = 0, n = 0; n < this._data.length; n++) e += this._data[n];
this.lbMoneyWin.node.active = !0;
i.numberTo(this.lbMoneyWin, 0, e, 600, !0, function() {
setTimeout(function() {
t.eventClose();
t.resultWin.active = !1;
}, 1500);
});
},
eventSelect: function(t) {
if (this.totalSelect > 0) {
this.totalSelect--;
if (this._data[this.totalSelect] > 0) {
t.target.getChildByName("lb_money").active = !0;
t.target.getChildByName("KimCuongBonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack-KimCuong", !1);
i.numberTo(t.target.getChildByName("lb_money").getComponent(cc.Label), 0, this._data[this.totalSelect], 1200, !0);
} else t.target.getChildByName("KimCuongBonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack-Miss", !1);
this.lbLuotBoc.string = this.totalSelect;
0 == this.totalSelect && this.showMoneyWin();
}
},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
UIKimCuongHistoryDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "293dambNPhHXYKAoFTNzF93", "UIKimCuongHistoryDetail");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listItem: cc.Node,
lbSession: cc.Label,
lbMoneyWin: cc.Label
},
onEnable: function() {
var t = this._data.resultMap;
this.lbSession.string = "#" + this._data.session;
this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
Promise.all(this.listItem.children.map(function(e, i) {
e.getComponent("KimCuongItem").setIcon(t[i]);
}));
}
});
cc._RF.pop();
}, {} ],
UIKimCuongHistoryTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "c7d052LJhlNfoLv1LMTXkXD", "UIKimCuongHistoryTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listRank = [];
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIKimCuongLobby: [ function(t, e) {
"use strict";
cc._RF.push(e, "d91e3NpUr5Bxav9jYlxjD5u", "UIKimCuongLobby");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
arr_lb_hu: {
type: cc.Label,
default: []
}
},
onLoad: function() {
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
updateJackpot: function() {
for (var t = [ "kimcuong1l", "kimcuong1k", "kimcuong10k" ], e = 0; e < t.length; e++) if (SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) {
var i = SmartFoxSDK.KimCuongController.ZoneInstance.mySelf.getVariable(t[e]);
if (i) {
var n = i.value, s = this.arr_lb_hu[e], o = s.string;
o = o.split(".").join("");
var a = parseFloat(o);
Utils.numberTo(s, a, n, 1e3, !0);
}
}
},
eventPlayGame: function(t, e) {
cc.betLevel = e;
mm.Loading.show();
this.show("UIKimCuong", {
pop: !0,
src: "kimcuong"
});
},
eventSetting: function() {},
back: function() {
var t = SmartFoxSDK.KimCuongController.ZoneInstance.getRoomByName("kimcuong");
t ? SmartFoxSDK.KimCuongController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t)) : this.show("UIHome");
}
});
cc._RF.pop();
}, {} ],
UIKimCuongRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "48a34FzAUxMT7uWTPE0cZ4M", "UIKimCuongRank");
var i = t("Listview"), n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
lbTitle: cc.Label,
allRank: cc.Sprite,
allHu: cc.Sprite,
listRank: [],
listHu: []
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
this.lbTitle.string = "Bảng Vinh Danh";
}
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(e, i);
},
eventClose: function() {
this.back();
},
eventAllRank: function() {
this.lbTitle.string = "Bảng Vinh Danh";
n.setMaterialGray(this.allRank, !1);
n.setMaterialGray(this.allHu, !0);
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
eventHu: function() {
this.lbTitle.string = "Lịch Sử Hũ";
n.setMaterialGray(this.allRank, !0);
n.setMaterialGray(this.allHu, !1);
if (this._data && this._data.items) {
this.listHu = [];
this.listview.numItems = this.listHu.length;
}
}
});
cc._RF.pop();
}, {
Helper: "Helper",
Listview: "Listview"
} ],
UIKimCuong: [ function(t, e) {
"use strict";
cc._RF.push(e, "362d0FjdFFO55soj6Pzez87", "UIKimCuong");
var i = t("KimCuongWinGame"), n = t("Helper"), s = t("KimCuongReel"), o = t("KimCuongLine"), a = t("UtilsUI"), c = t("TrialResult"), r = t("kimcuongLanguage"), h = cc.Enum({
"1l": 1,
"1k": 2,
"10k": 3
});
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: s
},
iconPrefab: cc.Prefab,
noticeNode: cc.Node,
btnQuay: cc.Node,
btnQuayNhanh: cc.Node,
btnStopQuay: cc.Node,
btnAutoQuay: cc.Node,
bangThuong: cc.Node,
lbNumberLine: cc.Label,
lbNumberStake: cc.Label,
lbMoneyWin: cc.Label,
lbSession: cc.Label,
selectLines: o,
WinGame: i,
listMainLines: cc.Node,
isAuto: !1,
isFast: !1,
isSpin: !1,
isFreeSpin: !1,
red: !0,
lastResult: [],
betSelect: 0,
roomNumber: 0,
posLineWin: 0,
totalLineWin: 0,
_TotalColumn: 5,
lb_phong: cc.Label,
lb_sodu: cc.Label,
lb_hu: cc.Label,
toggleMusic: cc.Toggle,
toggleSound: cc.Toggle,
bgSound: cc.AudioClip,
soundSpinMis: cc.AudioClip,
soundSpinWin: cc.AudioClip,
soundBigWin: cc.AudioClip,
soundJackpot: cc.AudioClip,
soundBonus: cc.AudioClip,
soundClick: cc.AudioClip,
soundSpin: cc.AudioClip,
menuSetting: cc.Node,
_keyMusic: "music_kc",
_keySound: "sound_kc",
_musicSlotState: 0,
_soundSlotState: 0,
_isFreeTrial: !1,
_myMoneyTrial: 0,
_mySession: 0
},
onLoad: function() {
this._TotalColumn = 5;
this.TotalItemRun = 20;
this.totalSymbol = 7;
this.winMoney = 0;
this.freeSpin = 0;
this.init();
this.roomNumber = h["1l"];
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf));
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
this.initSound();
},
initSound: function() {
var t = cc.sys.localStorage.getItem(this._keyMusic);
if (null != t) this._musicSlotState = parseInt(t); else {
this._musicSlotState = 1;
cc.sys.localStorage.setItem(this._keyMusic, "1");
}
var e = cc.sys.localStorage.getItem(this._keySound);
if (null != e) this._soundSlotState = parseInt(e); else {
this._soundSlotState = 1;
cc.sys.localStorage.setItem(this._keySound, "1");
}
null == this.bgSound || this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : this.musicId = cc.audioEngine.play(this.bgSound, !0, 1);
},
onDisable: function() {
cc.audioEngine.pause(this.musicId);
},
eventMusic: function() {
this._musicSlotState = this.toggleSound.isChecked ? 0 : 1;
this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : cc.audioEngine.resume(this.musicId);
cc.sys.localStorage.setItem(this._keyMusic, this._musicSlotState);
},
eventSound: function() {
this._soundSlotState = this.toggleSound.isChecked ? 0 : 1;
cc.sys.localStorage.setItem(this._keySound, this._soundSlotState);
},
playSpin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpin, !1, 1);
},
playSpinMis: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinMis, !1, 1);
},
playSpinWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinWin, !1, 1);
},
playBigWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBigWin, !1, 1);
},
playJackpot: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundJackpot, !1, 1);
},
playBonus: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBonus, !1, 1);
},
playClick: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundClick, !1, 1);
},
updateJackpot: function() {
var t = "kimcuong" + cc.betLevel;
if (SmartFoxSDK.KimCuongController.ZoneInstance.mySelf && SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) {
var e = SmartFoxSDK.KimCuongController.ZoneInstance.mySelf.getVariable(t);
if (e) {
var i = e.value, n = this.lb_hu.string;
n = n.split(".").join("");
var s = parseFloat(n);
Utils.numberTo(this.lb_hu, s, i, 1e3, !0);
}
}
},
updateUserVariableSlot: function(t) {
var e = "fskimcuong" + cc.betLevel;
if (t.changedVars.indexOf(e) >= 0 && t.user.isItMe) {
var i = SmartFoxSDK.KimCuongController.ZoneInstance.mySelf.getVariable(e).value;
this.freeSpin = i;
this.WinGame.updateFreeSpin();
}
},
updateUserVariable: function(t) {
this._isFreeTrial || "" == cc.currentUI || (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) - t));
},
onEnable: function() {
mm.audio.pauseMusic();
if ("choithu" == cc.betLevel) {
this._isFreeTrial = !0;
this._myMoneyTrial = 5e7;
this.lb_sodu.string = Utils.addDotToNumber(5e7);
this._mySession = 0;
this.lbSession.string = "#" + this._mySession;
} else {
this._myMoneyTrial = 0;
this._isFreeTrial = !1;
}
this.roomNumber = h[cc.betLevel];
void 0 === this.roomNumber && (cc.betLevel = "1l");
this.roomNumber = h[cc.betLevel];
MiniGame;
this.roomNumber = this.roomNumber % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
a.loadImageRes(this.node.getChildByName("bgGame").getComponent(cc.Sprite), "images/kimcuong/mainGameBg" + this.roomNumber);
a.loadImageRes(this.node.getChildByName("borderGame").getComponent(cc.Sprite), "images/kimcuong/border-phong" + this.roomNumber);
this.selectLines.init(this);
this.WinGame.init(this);
this.lbMoneyWin.string = "0";
this.showLineWin(!1);
mm.Loading.hide();
},
init: function() {
var t = this, e = [], i = [], n = [];
Promise.all(this.reels.map(function(s) {
var o;
o = t.initRandomItems(t.TotalItemRun);
e.push(o[o.length - 1]);
i.push(o[o.length - 2]);
n.push(o[o.length - 3]);
s.init(t, o);
})).then(function() {
t.lastResult = n.concat(i).concat(e);
});
},
setNumberLines: function(t) {
this.lbNumberLine.string = t;
},
setNumberStake: function(t) {
this.lbNumberStake.string = n.numberWithCommas(t * this.getMoneyInRoom());
},
setMoneyWin: function(t) {
n.numberTo(this.lbMoneyWin, parseInt(this.lbMoneyWin.string), t, 1200, !0);
if (this._isFreeTrial) {
this._myMoneyTrial = this._myMoneyTrial + this.winMoney;
this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
} else this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf));
this.isSpin = !1;
},
updateDataPhong: function() {},
eventQuayNhanh: function() {
if (this._isFreeTrial) this.addNotice(r.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(r.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !0;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !0);
this.btnStopQuay.active = !0;
this.autoQuay();
} else this.addNotice(r.getString("noti_not_money"));
},
eventAutoQuay: function() {
if (this._isFreeTrial) this.addNotice(r.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(r.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !1;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !0);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
this.btnStopQuay.active = !0;
this.autoQuay();
} else this.addNotice(r.getString("noti_not_money"));
},
runQuay: function() {
if (this._isFreeTrial) {
this.isSpin = !0;
this._myMoneyTrial = this._myMoneyTrial - this.getTotalBet();
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial));
this._myMoneyTrial < 1 && this.addNotice(r.getString("noti_not_money"));
this._mySession++;
this.KimCuongRun(c.getItemTrial());
this.freeSpin--;
} else {
this.playSpin();
this.isSpin = !0;
var t = new KimCuongRequest.BetRequest();
this.showLineWin(!1);
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
this.addNotice(r.getString("noti_not_money"));
return;
}
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) - this.getTotalBet()));
SmartFoxSDK.KimCuongController.ZoneInstance.send(t.toSRequest());
}
},
eventStopQuay: function() {
this.isFast = !1;
this.isAuto = !1;
this.btnStopQuay.active = !1;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
var t = new KimCuongRequest.StopAutoPlayRequest();
SmartFoxSDK.KimCuongController.ZoneInstance.send(t.toSRequest());
},
eventPhong: function() {
if (this._isFreeTrial) this.addNotice(r.getString("noti_not_trial")); else if (this.isSpin || this.isAuto || this.isFast) this.addNotice(r.getString("noti_is_playing")); else {
this.roomNumber = (this.roomNumber + 1) % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
a.loadImageRes(this.node.getChildByName("bgGame").getComponent(cc.Sprite), "images/kimcuong/mainGameBg" + this.roomNumber);
a.loadImageRes(this.node.getChildByName("borderGame").getComponent(cc.Sprite), "images/kimcuong/border-phong" + this.roomNumber);
this.setNumberStake(this.selectLines.getTotalLineSelect());
1 == this.roomNumber ? cc.betLevel = "1l" : 2 == this.roomNumber ? cc.betLevel = "1k" : 3 == this.roomNumber && (cc.betLevel = "10k");
this.updateJackpot();
}
},
eventSelectLines: function() {
this._isFreeTrial ? this.addNotice(r.getString("noti_not_trial")) : this.isSpin || this.isAuto || this.isFast ? this.addNotice(r.getString("noti_is_playing")) : this.selectLines.eventOpen();
},
checkEnoughMoney: function() {
var t = 25 * this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 1:
t = 13 * this.getMoneyInRoom();
break;

case 2:
t = 12 * this.getMoneyInRoom();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t = this.getMoneyInRoom() * e.length;
}
return !(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) < t);
},
autoQuay: function() {
if (this._isFreeTrial) this.freeSpin > 0 && this.eventQuay(); else if (this.freeSpin < 1) {
if (this.isAuto) {
var t = new KimCuongRequest.AutoPlayRequest();
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
this.addNotice(r.getString("noti_not_money"));
return;
}
SmartFoxSDK.KimCuongController.ZoneInstance.send(t.toSRequest());
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) - this.getTotalBet());
}
} else this.eventQuay();
},
getTotalBet: function() {
var t = this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 0:
return this.selectLines.getTotalLine() * t;

case 1:
return this.selectLines.getTotalLineLe() * t;

case 2:
return this.selectLines.getTotalLineChan() * t;

case 3:
return this.selectLines.getTotalLineSelect() * t;
}
return t;
},
setLinesBet: function(t) {
switch (this.selectLines.typeLine) {
case 1:
t.setLineLe();
break;

case 2:
t.setLineChan();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t.setLine(e);
}
},
eventQuay: function() {
if (this._isFreeTrial || this.checkEnoughMoney()) {
this.pauseSystemEventNode(this.btnQuay, !0);
this.runQuay();
} else mm.Toast.showToast(1, r.getString("noti_not_money"));
},
pauseSystemEventNode: function(t, e) {
n.setMaterialGray(t.getComponent(cc.Sprite), e);
e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
},
eventBack: function() {
this.isSpin || this.isAuto || this.isFast ? this.addNotice(r.getString("noti_is_playing")) : UIManger.show("UIKimCuongLobby", {
pop: !0,
src: "kimcuong"
});
},
eventSetting: function() {
this.menuSetting.active = !this.menuSetting.active;
},
eventVinhDanh: function() {
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.KimCuongController.ZoneInstance.send(t.toSRequest());
},
eventLichSuGiaoDich: function() {
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.KimCuongController.ZoneInstance.send(t.toSRequest());
},
eventBangThuong: function() {
this.bangThuong.active = !0;
},
eventCloseBangThuong: function() {
this.bangThuong.active = !1;
},
KimCuongRun: function(t) {
this.showLineWin(!1);
var e = this, i = this.getDataResult(t.result);
Promise.all(i.map(function(t, i) {
Promise.all(t.map(function(t, n) {
e.reels[i].icons[n].setIcon(t, !0);
}));
}));
this.lineWin = t.lineWin;
this.winMoney = t.winMoney;
this.freeGift = t.freeGift;
this.isBonus = t.isBonus;
this.isFree = t.isFreeSpin;
this.session = t.session;
this.isNoHu = t.isNohu;
this.isThangLon = t.isThangLon;
this.freeSpin = t.freeSpin;
this.type = t.type;
this.runReels();
t.isFreeSpin || this.WinGame.updateFreeSpin();
this._isFreeTrial ? this.lbSession.string = "#" + this._mySession : this.lbSession.string = "#" + this.session;
},
initRandomItems: function(t) {
for (var e = [], i = 0; i < t; i++) e[i] = this.random();
return e;
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this._TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this._TotalColumn].push(t[n]);
for (var s = 0; s < this._TotalColumn; s++) {
var o = this.initRandomItems(this.TotalItemRun - 6);
e[s] = e[s].concat(o);
}
for (var a = 0; a < this.lastResult.length; a++) e[a % this._TotalColumn].push(this.lastResult[a]);
this.lastResult = t;
return e;
},
reformatResult: function(t, e) {
for (var i = [], n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
return i;
},
runActionWon: function() {
this.showLineWin(!0);
this.WinGame.runWinGame();
this.pauseSystemEventNode(this.btnQuay, !1);
},
resume: function() {
this.winMoney > 0 ? setTimeout(function() {
this.WinGame.runWinGame();
}.bind(this), 300) : this.WinGame.runWinGame();
},
setEventMainLine: function(t) {
Promise.all(this.listMainLines.children.map(function(e) {
t ? e.pauseSystemEvents(!0) : e.resumeSystemEvents(!0);
}));
},
showLineWin: function(t) {
var e = this;
if (t) {
this.setEventMainLine(t);
this.totalLineWin = this.lineWin.length;
this.posLineWin = 0;
if (this.totalLineWin > 0) {
Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("KimCuongMainLine").onEf();
}));
this.scheduleOnce(function() {
Promise.all(e.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("KimCuongMainLine").offEf();
}));
e.schedule(this.showMainLine, 1);
}, 2);
}
} else {
this.unschedule(this.showMainLine);
this.lineWin && this.lineWin.length > 0 && Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("KimCuongMainLine").offhover();
e.listMainLines.children[t].pauseSystemEvents(!0);
}));
}
},
showMainLine: function() {
if (this.lineWin.length > 0) {
null != this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("KimCuongMainLine").offEf();
this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
null != this.listMainLines.children[this.lineWin[this.posLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("KimCuongMainLine").onEf();
}
},
runReels: function() {
Promise.all(this.reels.map(function(t, e) {
t.spin(e);
}));
},
copy: function() {
Promise.all(this.reels.map(function(t) {
t.icons[t.icons.length - 1].setIcon(t.icons[2].data);
t.icons[t.icons.length - 2].setIcon(t.icons[1].data);
t.icons[t.icons.length - 3].setIcon(t.icons[0].data);
}));
},
random: function() {
return ~~(Math.random() * this.totalSymbol);
},
getMoneyInRoom: function() {
return 10 * Math.pow(10, this.roomNumber);
},
checkHasMoney: function() {
return !0;
},
addNotice: function(t) {
var e = this;
this.noticeNode.active = !0;
this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = t;
setTimeout(function() {
e.noticeNode.active = !1;
}, 1200);
}
});
cc._RF.pop();
}, {
Helper: "Helper",
KimCuongLine: "KimCuongLine",
KimCuongReel: "KimCuongReel",
KimCuongWinGame: "KimCuongWinGame",
TrialResult: "TrialResult",
UtilsUI: "UtilsUI",
kimcuongLanguage: "kimcuongLanguage"
} ],
UILobby: [ function(t, e) {
"use strict";
cc._RF.push(e, "35ba6fjfRFGgJuQ+BHrqfGw", "UILobby");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
roomList: i,
roomContent: [],
lb_name: cc.Label,
lb_chip: cc.Label,
_currentGroup: null,
Avatar: cc.Sprite,
titleGame: cc.Label,
UIPokerRank: cc.Node
},
onLoad: function() {
Utils.loadRes(this.Avatar, "images/avatar/" + Config.getDefaultAvatar());
},
onEnable: function() {
this.updateUserVariable(null);
if (mm.game && mm.game[this._data.game]) {
this.roomContent = mm.game[this._data.game].groups;
this.roomList.numItems = this.roomContent.length;
}
"poker" == this._data.game ? this.titleGame.string = "Poker" : "tlmn" == this._data.game ? this.titleGame.string = "TLMN" : "bacay" == this._data.game ? this.titleGame.string = "Ba Cây" : "maubinh" == this._data.game ? this.titleGame.string = "Mậu binh" : this.titleGame.string = "Casino";
mm.Loading.hide();
},
updateRank: function(t) {
this.UIPokerRank && this.UIPokerRank.getComponent(this.UIPokerRank.name).updateRank(t);
},
updateUserVariable: function(t) {
if (PortalManager.getGameController(this._data.game)) {
this.lb_name.string = Utils.formatText(GameVariables.Poker.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf), 20);
this.lb_chip.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf) - t);
}
},
back: function() {
mm.audio.playButton();
UIManger.show("UIHome");
},
onRenderLobby: function(t, e) {
t.getComponent(t.name).init(this.roomContent[e]);
},
onSelectRoom: function(t, e) {
mm.audio.playButton();
var i = this, n = this.roomContent[e].group_id, s = 100 * this.roomContent[e].group_vars.bet_chip;
if (GameVariables.Poker.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf) < s) mm.Toast.showToast(1, "Bạn cần tối thiểu " + Utils.addDotToNumber(s) + "đ"); else if (n.includes("poker")) {
var o = this.roomContent[e].group_vars.bet_chip, a = this.roomContent[e].group_vars.min_chip, c = this.roomContent[e].group_vars.max_chip, r = GameVariables.Poker.getChip(PortalManager.getGameController(this._data.game).ZoneInstance.mySelf), h = a, l = o;
if (GameVariables.Poker.getChip(PortalManager.getGameController(this._data.game).ZoneInstance.mySelf) < a) {
mm.Toast.showToast(1, "Bạn cần tối thiểu " + Utils.addDotToNumber(a) + " Chip ");
return;
}
this.show("UIDialogBuyIn", {
data: {
distance: l,
remainChip: r,
currentChip: h,
min: a,
max: c,
cbYes: function(t) {
if (t) mm.Toast.showToast(.5, t); else {
mm.Loading.show();
SmartFoxSDK.PokerController.QuickJoinRoomConfig.buy_in = this.getBuyIn();
SmartFoxSDK.PokerController.QuickJoinRoomConfig.number_desk = this._sizeDesk;
var e = new CasinoRequest.QuickJoinGameRequest();
e.setGame(i._data.game);
e.setSizeDesk(this._sizeDesk);
e.setGroup(n);
SmartFoxSDK.PokerController.ZoneInstance.send(e.toSRequest());
this.back();
}
}
},
pop: !0
});
} else {
mm.Loading.show();
var u = 4;
"bacay" == this._data.game && (u = 6);
var m = new CasinoRequest.QuickJoinGameRequest();
m.setGroup(n);
m.setSizeDesk(u);
PortalManager.getGameController(this._data.game).ZoneInstance.send(m.toSRequest());
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UILogin: [ function(t, e) {
"use strict";
cc._RF.push(e, "f426dsdhJNEq7agCY6Er4Ax", "UILogin");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
Login: cc.Node,
login_username: cc.EditBox,
login_pass: cc.EditBox
},
onEnable: function() {
this.login_username.string = Config.getUsername();
this.login_pass.string = Config.getPass();
},
clickLogin: function() {
mm.audio.playButton();
if ("" != this.login_username.string) if ("" != this.login_pass.string) {
mm.Loading.show();
var t = this.login_username.string, e = this.login_pass.string;
SmartFoxSDK.PortalController.loginZone(t, e);
Config.saveUsername(t);
Config.savePass(e);
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Mật khẩu không được trống");
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Tên đăng nhập không được trống");
}
},
eventClose: function() {
mm.audio.playButton();
this.back();
}
});
cc._RF.pop();
}, {} ],
UIManager: [ function(t, e) {
"use strict";
cc._RF.push(e, "9bdfa1o7QlJs4w16ipJkrXc", "UIManager");
var i = {
show: function(t, e, i) {
var n = this;
if (t && "" !== t) {
var s = cc.director.getScene(), o = cc.find(t, s);
if (o) {
o.active = !1;
this._setOption(o, e);
o.setSiblingIndex(-1);
o.active = !0;
if (!o._pop) {
var a = this._getUIFromIndex(-2);
a && a.name != cc.currentUI && (a.active = !1);
}
mm.Loading.hide();
i && i();
} else {
e && void 0 !== e.src && null !== e.src && (t = e.src + "/" + t);
cc.loader.loadRes(t, function(o, a) {
if (o) console.log(o); else if (cc.find(t, s)) i && i(); else {
cc.loader.setAutoReleaseRecursively(a, !0);
var c = cc.instantiate(a);
if (c) {
var r = n._getUIFromIndex(-1);
r && (r.active = !(!e || !e.pop));
n._setOption(c, e);
s.addChild(c);
mm.Loading.hide();
i && i();
} else cc.error("prefab instantiation failed!");
}
});
}
} else cc.error("name is empty!");
},
_getUIFromIndex: function(t) {
var e = cc.director.getScene();
Number.isInteger(t) || (t = e.childrenCount - 1);
t < 0 && (t += e.childrenCount);
if (t < 0 || t > e.childrenCount - 1) cc.log("_getUIFromIndex error, from = " + t + "!"); else for (var i = t; i >= 0; i--) {
var n = e.children[i];
if (n.name.startsWith("UI")) return n;
}
},
_setOption: function(t, e) {
if (e && void 0 !== e.data && null !== e.data) {
var i = t.getComponent(t.name);
i && (i._data = e.data);
}
t._pop = !(!e || !e.pop);
},
getUIFromName: function(t) {
if (t && t.startsWith("UI")) {
var e = cc.director.getScene();
return cc.find(t, e);
}
}
};
window.UIManger = e.exports = i;
cc._RF.pop();
}, {} ],
UIMenu: [ function(t, e) {
"use strict";
cc._RF.push(e, "5a6bdeigD1JCIIZXS1VOVNA", "UIMenu");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
toggleMusic: cc.Toggle,
toggleSound: cc.Toggle,
_keyMusic: "smart_fox_music",
_keySound: "smart_fox_sound"
},
onEnable: function() {
this.initSound();
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
clickLSGD: function() {
mm.audio.playButton();
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.PortalController.ZoneInstance.send(t.toSRequest());
},
clickBaoMat: function() {
mm.audio.playButton();
this.show("UIBaoMatOTP", {
pop: !0,
src: "portal"
});
},
clickHoTro: function() {
mm.audio.playButton();
cc.sys.openURL("https://t.me/cskh");
},
initSound: function() {
var t = cc.sys.localStorage.getItem(this._keyMusic);
if (null != t) this._musicState = parseInt(t); else {
this._musicState = 1;
cc.sys.localStorage.setItem(this._keyMusic, "1");
}
var e = cc.sys.localStorage.getItem(this._keySound);
if (null != e) this._soundState = parseInt(e); else {
this._soundState = 1;
cc.sys.localStorage.setItem(this._keySound, "1");
}
mm.audio.playMusic();
this.toggleMusic.isChecked = 0 == this._musicState;
this.toggleSound.isChecked = 0 == this._soundState;
},
eventMusic: function() {
this._musicState = this.toggleMusic.isChecked ? 0 : 1;
cc.sys.localStorage.setItem(this._keyMusic, this._musicState);
mm.audio.playMusic();
},
eventSound: function() {
this._soundState = this.toggleSound.isChecked ? 0 : 1;
cc.sys.localStorage.setItem(this._keySound, this._soundState);
}
});
cc._RF.pop();
}, {} ],
UIMiniPokerHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "6a11f08KnlM7qTKFIcO+Esh", "UIMiniPokerHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
eventClose: function() {
mm.audio.playButton();
this.back();
}
});
cc._RF.pop();
}, {} ],
UIMiniPokerRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "3212dp8p+VDbpxj1yBB7mj8", "UIMiniPokerRank");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listRank = [];
this.listview.numItems = this.listRank.length;
},
onEnable: function() {
mm.Loading.hide();
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
},
eventHistoryWin: function() {
mm.audio.playButton();
},
eventAll: function() {
mm.audio.playButton();
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIMiniPokerTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "48cb25ghjBDbpaDeyKvzI5v", "UIMiniPokerTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
ListCard: []
},
onLoad: function() {
this.listRank = [];
this.listview.numItems = this.listRank.length;
},
onEnable: function() {
mm.Loading.hide();
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIMiniPoker: [ function(t, e) {
"use strict";
cc._RF.push(e, "ae9f1M24aFHxKf97fCiKsbM", "UIMiniPoker");
var i = t("MiniPokerWinGame"), n = t("Helper"), s = t("MiniPokerReel"), o = (t("UtilsUI"), 
t("PokerCard")), a = t("sinbadLanguage"), c = cc.Enum({
"1l": 100,
"1k": 1e3,
"10k": 1e4
});
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: s
},
iconPrefab: cc.Prefab,
selectRoom: cc.Node,
noticeNode: cc.Node,
btnQuay: cc.Node,
btnQuayNhanh: cc.Node,
btnStopQuayNhanh: cc.Node,
btnAutoQuay: cc.Node,
btnStopAutoQuay: cc.Node,
WinGame: i,
isAuto: !1,
isFast: !1,
isSpin: !1,
red: !0,
lastResult: [],
betSelect: 0,
roomNumber: 0,
posLineWin: 0,
totalLineWin: 0,
TotalItemRun: 15,
_TotalColumn: 5,
ListCard: [],
_isQuay: !0,
lb_hu: cc.Label,
betLevel: "1l"
},
onLoad: function() {
this._TotalColumn = 5;
this.TotalItemRun = 15;
this.isFast = !1;
this._isQuay = !1;
this.isAuto = !1;
cc.loader.loadRes("images/minigame/minipoker/card2d", cc.SpriteAtlas, function(t, e) {
if (t) console.log(t); else {
this.ListCard = e;
this.initMiniPoker();
this.WinGame.init(this);
}
}.bind(this));
var t = this;
Promise.all(this.selectRoom.children.map(function(t) {
n.setMaterialGray(t.getComponent(cc.Sprite), !0);
})).then(function() {
n.setMaterialGray(t.selectRoom.children[0].getComponent(cc.Sprite), !1);
});
this.betLevel = "1l";
this.roomNumber = c["1l"];
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
onEnable: function() {
if (this.node.zIndex <= cc.lastZIndex) {
cc.lastZIndex += 1;
this.node.zIndex = cc.lastZIndex;
}
cc.currentUI = "UIMiniPoker";
mm.Loading.hide();
},
onDisable: function() {
this.node.stopAllActions();
},
updateJackpot: function() {
var t = "minipoker" + this.betLevel, e = SmartFoxSDK.MiniPokerController.ZoneInstance.mySelf.getVariable(t);
if (e) {
var i = e.value, n = this.lb_hu.string;
n = n.split(".").join("");
var s = parseFloat(n);
Utils.numberTo(this.lb_hu, s, i, 1e3, !0);
}
},
initMiniPoker: function() {
var t = this;
t.lastResult = [];
Promise.all(this.reels.map(function(e) {
var i = t.initRandomItems(t.TotalItemRun, 1, 52);
t.lastResult.push(i[i.length - 1]);
e.init(t, i);
}));
},
setMoneyWin: function() {},
updateDataPhong: function() {},
eventSieuToc: function() {
this.isFast = !0;
this.isAuto = !0;
this.btnStopAutoQuay.active = !1;
this.btnStopQuayNhanh.active = !0;
this.autoQuay();
},
eventAutoQuay: function() {
this.isAuto = !0;
this.isFast = !1;
this.btnStopAutoQuay.active = !0;
this.btnQuayNhanh.active = !0;
this.autoQuay();
},
eventStopAuto: function() {
this.isAuto = !1;
this.btnAutoQuay.active = !0;
this.btnStopAutoQuay.active = !1;
},
eventStopSieuToc: function() {
this.isFast = !1;
this.isAuto = !1;
this.btnQuayNhanh.active = !0;
this.btnStopQuayNhanh.active = !1;
},
eventPhong: function(t, e) {
mm.audio.playButton();
if (this._isQuay) this.addNotice(a.getString("noti_is_playing")); else {
Promise.all(this.selectRoom.children.map(function(t) {
n.setMaterialGray(t.getComponent(cc.Sprite), !0);
})).then(function() {
n.setMaterialGray(t.target.getComponent(cc.Sprite), !1);
});
this.roomNumber = parseInt(e);
100 == this.roomNumber ? this.betLevel = "1l" : 1e3 == this.roomNumber ? this.betLevel = "1k" : 1e4 == this.roomNumber && (this.betLevel = "10k");
this.updateJackpot();
}
},
checkEnoughMoney: function() {
return !(GameVariables.Poker.getChip(SmartFoxSDK.MiniPokerController.ZoneInstance.mySelf) < this.roomNumber);
},
eventQuay: function() {
if (this.checkEnoughMoney()) if (this._isQuay) this.addNotice(a.getString("noti_is_playing")); else {
this._isQuay = !0;
this.btnQuay.getComponent(sp.Skeleton).setAnimation(0, "Spine", !1);
var t = new MiniPokerRequest.BetRequest();
t.setBet(this.roomNumber);
this.updateChipAll(this.roomNumber);
SmartFoxSDK.MiniPokerController.ZoneInstance.send(t.toSRequest());
} else mm.Toast.showToast(1, a.getString("noti_not_money"));
},
pauseSystemEventNode: function(t, e) {
n.setMaterialGray(t.getComponent(cc.Sprite), e);
e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
},
eventBack: function() {
mm.audio.playButton();
if (this._isQuay) this.addNotice(a.getString("noti_is_playing")); else {
var t = SmartFoxSDK.MiniPokerController.ZoneInstance.getRoomByName("minipoker");
t ? SmartFoxSDK.MiniPokerController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t)) : this.back();
}
},
eventSetting: function() {
mm.audio.playButton();
},
eventVinhDanh: function() {
mm.audio.playButton();
mm.Loading.show();
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.MiniPokerController.ZoneInstance.send(t.toSRequest());
},
eventLichSuGiaoDich: function() {
mm.audio.playButton();
mm.Loading.show();
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.MiniPokerController.ZoneInstance.send(t.toSRequest());
},
eventOpenHelper: function() {
mm.audio.playButton();
this.show("UIMiniPokerHelper", {
pop: !0,
src: "minipoker"
});
},
MiniPokerRun: function(t) {
var e = this, i = this._convertPosCard(t.result);
i = this.getDataResult(i);
Promise.all(i.map(function(t, i) {
Promise.all(t.map(function(t, n) {
e.reels[i].icons[n].setIcon(t, !0);
}));
})).then(function() {
e.runReels();
});
this.winMoney = t.winMoney;
this.isNoHu = t.noHu;
this.handWinType = t.handWinType;
},
_convertPosCard: function(t) {
for (var e = [], i = 0; i < t.length; i++) {
var n = new o.Card(t[i]);
e.push(n.nameFile);
}
return e;
},
initRandomItems: function(t, e, i) {
for (var n = [], s = 0; s < t; s++) n[s] = this.random(e, i);
return n;
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this._TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this._TotalColumn].push(t[n]);
for (var s = 0; s < this._TotalColumn; s++) {
var o = this.initRandomItems(this.TotalItemRun - 2, 1, 52);
e[s] = e[s].concat(o);
}
for (var a = 0; a < this.lastResult.length; a++) e[a % this._TotalColumn].push(this.lastResult[a]);
this.lastResult = t;
return e;
},
reformatResult: function(t, e) {
for (var i = [], n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
return i;
},
runActionWon: function() {
this._isQuay = !1;
this.WinGame.runWinGame();
},
resume: function() {
this.winMoney > 0 ? setTimeout(function() {
this.WinGame.runWinGame();
}.bind(this), 300) : this.WinGame.runWinGame();
},
autoQuay: function() {
this.checkEnoughMoney() ? this.isAuto && this.eventQuay() : mm.Toast.showToast(1, a.getString("noti_not_money"));
},
runReels: function() {
Promise.all(this.reels.map(function(t, e) {
t.spin(e);
}));
},
copy: function() {
Promise.all(this.reels.map(function(t) {
t.icons[t.icons.length - 1].setIcon(t.icons[0].data);
}));
},
random: function(t, e) {
return t + ~~(Math.random() * e);
},
resetSpin: function() {},
checkHasMoney: function() {
return !0;
},
addNotice: function(t) {
var e = this;
this.noticeNode.active = !0;
this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = t;
setTimeout(function() {
e.noticeNode.active = !1;
}, 1200);
},
updateChipAll: function(t) {
SmartFoxSDK.MiniPokerController.onEventUpdateChip(t);
}
});
cc._RF.pop();
}, {
Helper: "Helper",
MiniPokerReel: "MiniPokerReel",
MiniPokerWinGame: "MiniPokerWinGame",
PokerCard: "PokerCard",
UtilsUI: "UtilsUI",
sinbadLanguage: "sinbadLanguage"
} ],
UIPayment: [ function(t, e) {
"use strict";
cc._RF.push(e, "abfc05QDbBCroaZ4Iewkmk2", "UIPayment");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
edit_user_re: cc.EditBox,
edit_user_re_again: cc.EditBox,
edit_money: cc.EditBox,
lbTyLe: cc.Label,
lbMyMoney: cc.Label,
lbMoneyRev: cc.Label,
lbTienTe: cc.Label,
lbDesTrans: cc.Label,
warningNode: cc.Node,
lbIsDaiLy: cc.Label,
lbNickName: cc.Label,
lbGold: cc.Label,
lbDes: cc.Label,
_area: "ja",
_moneyConvert: 0,
_isDaiLy: !1,
listDaiLy: []
},
onEnable: function() {
this.listDaiLy = [];
SmartFoxSDK.PortalController.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
var t = new CasinoRequest.ListAgencyRequest();
SmartFoxSDK.PortalController.ZoneInstance.send(t.toSRequest());
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
if (null != this._data.nickname) {
this.setLastArea(this._data.area);
this.updateDaiLyInfo(this._data.nickname, this._data.agName);
}
this.warningNode.active = !1;
this._area = this.getLastArea();
this.updateTyLe();
this.lbMyMoney.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));
},
onDisable: function() {
SmartFoxSDK.PortalController.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
},
onListAgency: function(t) {
mm.Loading.hide();
this.listDaiLy = new CasinoEvent.ListAgencyEvent().fromEvent(t);
},
changeMoney: function(t) {
this.lbMoneyRev.string = "" == t ? "0" : Utils.addDotToNumber(Math.floor(parseFloat(t)) / this._moneyConvert);
},
eventClose: function() {
this.back();
mm.audio.playButton();
},
updateDaiLyInfo: function(t, e) {
this.edit_user_re.string = t;
this.edit_user_re_again.string = t;
this.lbDesTrans.string = "Bán GOLD cho " + e;
this._data.agName = e;
},
updateTyLe: function() {
if ("ja" == this._area) {
this.lbTyLe.string = "Tỉ lệ quy đổi: 1YEN = 226.8";
this.lbTienTe.string = "YEN";
this._moneyConvert = 226.8;
} else {
this.lbTyLe.string = "Tỉ lệ quy đổi: 1WON = 20.52";
this.lbTienTe.string = "WON";
this._moneyConvert = 20.52;
}
},
clickTransferMoney: function() {
mm.audio.playButton();
"" != this.edit_user_re.string ? "" != this.edit_money.string ? parseInt(this.edit_money.string) < 1e4 ? mm.Toast.showToast(1, "Tiền phải lớn hơn 10.000") : this.showInfoWaring(this._data.agName) : mm.Toast.showToast(1, "Tiền không được trống") : mm.Toast.showToast(1, "Tên người nhận không được trống");
},
showInfoWaring: function(t) {
null == t && (t = "Không xác định!");
this.warningNode.active = !0;
this.lbIsDaiLy.node.active = !this._isDaiLy;
this.lbDes.string = "Chuyên GOLD cho " + t;
this.lbNickName.string = this.edit_user_re.string;
this.lbGold.string = Utils.addDotToNumber(this.edit_money.string) + " GOLD";
},
eventShowDaiLys: function() {
this.show("UIDaiLy", {
pop: !0,
src: "portal"
});
},
eventChangeArea: function() {
"ja" == this._area ? this.setLastArea("ko") : this.setLastArea("ja");
this._area = this.getLastArea();
this.updateTyLe();
this.changeMoney(this.edit_money.string);
},
setLastArea: function(t) {
cc.sys.localStorage.setItem("last_area", t);
},
getLastArea: function() {
var t = cc.sys.localStorage;
null !== t.getItem("last_area") && void 0 !== t.getItem("last_area") || t.setItem("last_area", "ja");
return t.getItem("last_area");
},
eventDongY: function() {
var t = new CasinoRequest.TransferMoneyRequest();
t.setMoneyTransfer(parseInt(this.edit_money.string));
t.setUserRecived(this.edit_user_re.string);
SmartFoxSDK.PortalController.ZoneInstance.send(t.toSRequest());
mm.Loading.show();
this.eventCancel();
},
eventCancel: function() {
this.warningNode.active = !1;
},
eventGetInfoDaiLy: function() {
this._isDaiLy = !1;
var t = this.edit_user_re.string;
if (this.listDaiLy.length > 0) for (var e = 0; e < this.listDaiLy.length; e++) if (t == this.listDaiLy[e].name) {
this._isDaiLy = !0;
this._area = this.listDaiLy[e].zone;
this.updateDaiLyInfo(this.listDaiLy[e].name, this.listDaiLy[e].agName);
this.updateTyLe();
this.lbMyMoney.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));
}
}
});
cc._RF.pop();
}, {} ],
UIPokerRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "e7646Q9hVJHWoaeuM57B/H8", "UIPokerRank");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listRank = [];
this.listview.numItems = this.listRank.length;
},
updateRank: function(t) {
if (t) {
this.listRank = t;
this.listview.numItems = this.listRank.length;
}
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIPoker: [ function(t, e) {
"use strict";
cc._RF.push(e, "e8debnA7Y5Kg47AGSDTbMUL", "UIPoker");
cc.Class({
extends: cc.BaseGame,
properties: {
ChatEmojiLayer: cc.Node,
Action: cc.Node,
CommunityCard: cc.Node,
lb_total_bet: cc.Label,
PokerTextWinner: cc.Node,
PotPrefab: cc.Prefab,
buy_in: 0,
bet: 500,
POS_6: cc.Node,
POS_9: cc.Node
},
onLoad: function() {
this.PoolPot = [];
for (var t = 0; t < 9; t++) {
var e = cc.instantiate(this.PotPrefab);
this.node.addChild(e);
e.active = !1;
this.PoolPot.push(e);
}
},
onEnable: function() {
this.buy_in = this._data.buy_in;
this._number_desk = this._data.number_desk;
this._room = this._data.room;
this.poses = [];
if (6 == this._number_desk) {
this.POS_6.active = !0;
this.POS_9.active = !1;
this._CURRENT_POS = this.POS_6;
} else {
this.POS_6.active = !1;
this.POS_9.active = !0;
this._CURRENT_POS = this.POS_9;
}
for (var t = 0; t < this._CURRENT_POS._children.length; t++) {
var e = this._CURRENT_POS._children[t];
this.poses.push(this._CURRENT_POS._children[t]);
e.on("touchend", function() {
this.requestSitOn();
}, this);
e.active = !1;
}
this.countOut = 0;
},
onDisable: function() {
this.nodePlayers.removeAllChildren(!0);
this.getCommunityCard().reset();
this.hideDeskEmpty();
this.lb_total_bet.node.parent.active = !1;
this.hidePokerTextWinner();
this.WaitingTimer.active = !1;
},
runActionChipToPot: function(t, e) {
if (t <= 0) e && e(); else for (var i = 0; i < this.controller.m_tableInfo.m_listUser.length; i++) {
var n = this._getJSPlayerByName(this.controller.m_tableInfo.m_listUser[i]), s = this.getPositionInOtherNode(n.BetChip, this.node), o = this.requestPoolPot();
o.position = s;
o.active = !0;
o.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(t);
o.runAction(cc.sequence(cc.moveTo(.3, this.lb_total_bet.node.parent.position), cc.callFunc(function() {
this.active = !1;
e && e();
}, o)));
}
},
hidePokerTextWinner: function() {
this.PokerTextWinner.active = !1;
this.PokerTextWinner.getComponent(sp.Skeleton).setAnimation(0, "NONE", !1);
},
showPokerTextWinner: function(t) {
var e = {
HIGHCARD: "Bai-Cao",
PAIR: "Mot-Doi",
TWOPAIR: "Hai-Doi",
THREEOFAKIND: "Xam",
STRAIGHT: "Sanh",
FLUSH: "Thung",
FULLHOUSE: "Cu-Lu",
FOUROFAKIND: "Tu-Quy",
STRAIGHTFLUSH: "Sanh-Thung",
ROYALFLUSH: "Thung_Pha-Sanh"
};
this.PokerTextWinner.active = !0;
var i = this.PokerTextWinner.getComponent(sp.Skeleton);
if ("Sanh-Thung" == t) {
i.setAnimation(0, "Sanh", !1);
i.setAnimation(1, "Thung", !1);
} else e[t] ? i.setAnimation(0, e[t], !0) : this.PokerTextWinner.active = !1;
},
eventBack: function() {
if (!this.controller.m_tableInfo.m_isGameStart || this.controller.m_tableInfo.m_listActiveUserName.length <= 1) this.requestLeaveRoom(); else {
var t = !0;
this.controller.m_tableInfo.m_listUserSitOut.indexOf(SmartFoxSDK.PokerController.ZoneInstance.mySelf.name) >= 0 && (t = !1);
var e = new PokerRequest.SitOutRequest();
e.setRoomId(this._room.id);
e.setSitOut(t);
SmartFoxSDK.PokerController.ZoneInstance.send(e.toSRequest());
}
},
requestSitOn: function() {
var t = SmartFoxSDK.PokerController.ZoneInstance.mySelf.name;
if (null == this._getJSPlayerByName(t)) {
var e = new PokerRequest.SitOnRequest().setRoomId(this._room.id).setAutoSitOn().setBuyIn(this.buy_in);
SmartFoxSDK.PokerController.ZoneInstance.send(e.toSRequest());
this.hideDeskEmpty();
}
},
getCommunityCard: function() {
return this.CommunityCard.getComponent(this.CommunityCard.name);
},
getAction: function() {
return this.Action.getComponent(this.Action.name);
},
setMoneyPot: function(t) {
if (t > 0) {
this.lb_total_bet.string = Utils.formatCurrency(t);
this.lb_total_bet.node.parent.active = !0;
} else this.lb_total_bet.node.parent.active = !1;
},
processBetChipToPot: function(t) {
for (var e = 0, i = 0; i < this.controller.m_tableInfo.m_listDesk.length; i++) {
var n = this.controller.m_tableInfo.m_listDesk[i], s = this._getJSPlayerById(n.DeskId);
if (s) {
e = s.m_total_bet;
this.controller.m_tableInfo.m_potChip += s.m_total_bet;
s.resetBet();
}
}
this.runActionChipToPot(e, function() {
this.lb_total_bet.string = Utils.formatCurrency(this.controller.m_tableInfo.m_potChip);
this.lb_total_bet.node.parent.active = !0;
t && t();
}.bind(this));
},
requestPoolPot: function() {
for (var t = 0; t < this.PoolPot.length; t++) if (!this.PoolPot[t].active) {
this.PoolPot[t].active = !0;
return this.PoolPot[t];
}
var e = cc.instantiate(this.PotPrefab);
this.node.addChild(e);
this.PoolPot.push(e);
return e;
},
runActionPotChipToWinner: function(t, e, i, n) {
var s = this._getJSPlayerByName(e);
if (s) {
var o = this.requestPoolPot(), a = this, c = this.getPositionInOtherNode(s.BetChip, this.node);
o.position = this.lb_total_bet.node.parent.position;
o.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(t);
o.runAction(cc.sequence(cc.moveTo(.5, c), cc.callFunc(function() {
this.active = !1;
a.lb_total_bet.node.parent.active = !1;
i && i(t, n);
}, o)));
}
},
eventShowChat: function() {
this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
this.ChatEmojiLayer.active && this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.PokerController.ZoneInstance);
},
onPublicMessage: function(t) {
var e = this._getJSPlayerByName(t.sender.name);
null != e && e.onPublicMessage(t.msg);
},
updateUserVariable: function(t) {
this._getJSPlayerByName(SmartFoxSDK.PokerController.ZoneInstance.mySelf.name).setMoney(GameVariables.Poker.getChip(SmartFoxSDK.PokerController.ZoneInstance.mySelf) - t);
}
});
cc._RF.pop();
}, {} ],
UIPortal: [ function(t, e) {
"use strict";
cc._RF.push(e, "f6ef9eiwYxF8IQ0CLghykqY", "UIPortal");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
hoiXoayDapXoay: cc.Node,
progressBar: cc.ProgressBar,
lb_loading: cc.Label,
lbUpdate: cc.Label
},
onEnable: function() {
cc.debug.setDisplayStats(!1);
this.updateProcess(0);
if (cc.sys.isNative) if (cc.isValid(this.hoiXoayDapXoay)) {
var t = this;
this.hoiXoayDapXoay.getComponent("HoiXoayServer").hotUpdate(function() {
t.scheduleOnce(t.loadResources, 0);
});
} else this.scheduleOnce(this.loadResources, 0); else this.scheduleOnce(this.loadResources, 0);
},
loadResources: function() {
var t = this, e = [];
this.lbUpdate.string = "Tải tài nguyên, không tốn dung lượng.";
e.push("UIHome");
e.push("UILogin");
e.push("taixiu/UITaiXiu");
e.push("taixiu/UITaiXiuSoiCau");
e.push("taixiu/UITaiXiuSessionDetail");
if (cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS) {
e.push("UIRegister");
e.push("UILobby");
e.push("UIDialogOne");
e.push("UIDialogBuyIn");
e.push("portal/UIMenu");
e.push("portal/UIPayment");
e.push("rongho/UIRongHo");
e.push("xocdia/UIXocDia");
e.push("tlmn/UITLMN");
e.push("bacay/UIBaCay");
e.push("maubinh/UIMauBinh");
e.push("baccarat/UIBaccarat");
e.push("zeus/UIZeus");
e.push("kimcuong/UIKimCuong");
e.push("minipoker/UIMiniPoker");
e.push("candy/UICandy");
e.push("roulette/UIRoulette");
e.push("baccarat/UIBaccarat");
}
cc.loader.loadResArray(e, cc.Asset, function(e, i) {
t.updateProcess(e / i);
}, function(e, i) {
if (e) {
console.log("load resource error: ", e);
t.loadFinish();
} else {
for (var n = 0; n < i.length; n++) cc.loader.setAutoReleaseRecursively(i[n], !0);
t.loadFinish();
}
});
},
updateProcess: function(t) {
var e = parseFloat(t);
this.progressBar.progress = e;
this.lb_loading.string = Math.floor(100 * e) + "%";
},
loadFinish: function() {
this.show("UIHome");
}
});
cc._RF.pop();
}, {} ],
UIProfile: [ function(t, e) {
"use strict";
cc._RF.push(e, "840b07WWMtDgKSV7eaNVymK", "UIProfile");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
username: cc.Label,
displayName: cc.Label,
money: cc.Label
},
onEnable: function() {
this.username.string = SmartFoxSDK.PortalController.ZoneInstance.mySelf.name;
this.displayName.string = GameVariables.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf);
this.money.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
eventChangePassword: function() {
mm.audio.playButton();
this.show("UIChangePassword", {
pop: !0,
src: "portal"
});
},
eventClose: function() {
this.back();
mm.audio.playButton();
}
});
cc._RF.pop();
}, {} ],
UIRegister: [ function(t, e) {
"use strict";
cc._RF.push(e, "50934MAymxEzreAVGDclpXU", "UIRegister");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
register_username: cc.EditBox,
register_diplayname: cc.EditBox,
register_pass: cc.EditBox,
register_pass_again: cc.EditBox
},
eventClickRegister: function() {
mm.audio.playButton();
if (SmartFoxSDK.PortalController.ZoneInstance.isConnected()) if ("" != this.register_username.string) if (Utils.validateString(this.register_username.string)) if (Utils.validateString(this.register_diplayname.string)) if ("" != this.register_diplayname.string) if (this.register_username.string.includes(" ")) {
Config.clearUserPass();
mm.Toast.showToast(1, "Tài khoản bao gồm khoảng trắng");
} else if (this.register_diplayname.string.includes(" ")) {
Config.clearUserPass();
mm.Toast.showToast(1, "Tên hiển thị bao gồm khoảng trắng");
} else if (this.register_username.string != this.register_diplayname.string) if ("" != this.register_pass.string) if (this.register_pass.string == this.register_pass_again.string) if (this.register_pass.string.length < 6) {
Config.clearUserPass();
mm.Toast.showToast(1, "Mật khẩu nhỏ hơn 6 kí tự");
} else {
var t = this.register_username.string, e = this.register_pass.string, i = new SmartFoxSDK.SObject();
i.putByte("rt", 4);
i.putUtfString("role", "user");
i.putUtfString("dn", this.register_diplayname.string);
var n = new CasinoRequest.LoginRequest(t, e, "portal", i);
SmartFoxSDK.PortalController.un = t;
SmartFoxSDK.PortalController.pass = e;
SmartFoxSDK.PortalController.ZoneInstance.send(n.toSRequest());
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Mật khẩu không khớp");
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Mật khẩu không được trống");
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Tài khoản và tên hiển thị trùng nhau");
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Tên hiển thị không được trống");
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Tên hiển thị chỉ chứa các ký tự A-Z, a-z, 0-9");
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Tên đăng nhập chỉ chứa các ký tự A-Z, a-z, 0-9");
} else {
Config.clearUserPass();
mm.Toast.showToast(1, "Tên đăng nhập không được trống");
} else {
SmartFoxSDK.PortalController.register = !0;
SmartFoxSDK.PortalController.ZoneInstance.connect();
}
},
eventClose: function() {
mm.audio.playButton();
this.back();
}
});
cc._RF.pop();
}, {} ],
UIRongHoHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "18673hPGvBMTJvGxnb59ar9", "UIRongHoHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {} ],
UIRongHoRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "32b80HpW6hOYYs9rKGAtfRP", "UIRongHoRank");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
mm.Loading.hide();
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
},
eventHistoryWin: function() {},
eventAll: function() {}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIRongHoTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "e239915Zz1C6ahqoqk8Oirz", "UIRongHoTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
mm.Loading.hide();
this.listTrans = this._data.items;
this.listview.numItems = this.listTrans.length;
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listTrans[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIRongHo: [ function(t, e) {
"use strict";
cc._RF.push(e, "d14dcVfmcFDAoag6EVbl0A/", "UIRongHo");
var i = t("PokerCard");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
ChatEmojiLayer: cc.Node,
listNodeBet: {
type: cc.Node,
default: []
},
listNodePot: {
type: cc.Node,
default: []
},
_myChipBet: [],
_currentType: -1,
_currentBet: 1e3,
Timer: cc.Node,
ChipPrefab: cc.Prefab,
POS: cc.Node,
Result: cc.Node,
CardRong: cc.Node,
CardHo: cc.Node,
ListMenu: cc.Node,
Notice: cc.Node,
Toast: cc.Node,
lb_countUser: cc.Label,
_isRongHo: -1
},
onLoad: function() {
this._currentBet = 1e3;
this._myChipBet = [];
this._isDat = !1;
this._isDatLast = !1;
this.poolChip = [];
for (var t = 0; t < 20; t++) {
var e = cc.instantiate(this.ChipPrefab);
this.node.addChild(e);
e.active = !1;
e.scale = .33;
this.poolChip.push(e);
}
cc.game.on(cc.game.EVENT_SHOW, function() {
null != this.node && SmartFoxSDK.RongHoController.resumeGame();
}.bind(this));
this._isRongHo = -1;
},
resetBetRongHo: function() {
this._isRongHo = -1;
},
onEnable: function() {
this.Timer.active = !1;
this.Result.active = !1;
this._stopEffectWinPot();
this.listMyChipBet = [];
for (var t = 0; t < this.listNodePot.length; t++) this.listMyChipBet.push(this.listNodePot[t].getChildByName("mybet").getComponent(cc.Label));
this.listChipBet = [];
for (var e = 0; e < this.listNodePot.length; e++) this.listChipBet.push(this.listNodePot[e].getChildByName("pot").getComponent(cc.Label));
},
getChipNode: function() {
for (var t = 0; t < this.poolChip.length; t++) if (!this.poolChip[t].active) {
this.poolChip[t].active = !0;
return this.poolChip[t];
}
var e = cc.instantiate(this.ChipPrefab);
this.node.addChild(e);
e.active = !0;
e.scale = .33;
this.poolChip.push(e);
return e;
},
returnChipNode: function(t) {
t.active = !1;
},
_stopEffectWinPot: function() {
for (var t = 0; t < this.listNodePot.length; t++) this.listNodePot[t].getChildByName("Line-1").active = !1;
},
showListUsers: function(t) {
for (var e = 0; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e), n = i.getChildByName("name").getComponent(cc.Label), s = i.getChildByName("money").getComponent(cc.Label), o = e >= t.length ? null : t[e];
if (o && "admin" != o.getVariable("role").value) {
i.active = !0;
i._username = o.name;
n.string = GameVariables.getDisplayName(o);
s.string = Utils.addDotToNumber(GameVariables.getChip(o));
if (o.isItMe) Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + Config.getDefaultAvatar()); else {
var a = Math.floor(9 * Math.random()) + 1;
Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + a);
}
} else {
i.active = !1;
i._username = null;
}
}
},
getPosFromName: function(t) {
for (var e = 0; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e);
if (i.active && i._username && i._username == t) return e;
}
return 6;
},
updateUserCount: function() {
var t = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho").getUserList().length;
t > 1 && cc.isValid(this.lb_countUser) && (this.lb_countUser.string = t);
},
showNotice: function(t, e, i) {
this.Notice.active = !0;
this.Notice.stopAllActions();
var n = this;
this.Notice.getChildByName("lb_noti").getComponent(cc.Label).string = e;
this.Notice.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
n.Notice.active = !1;
i && i();
})));
},
showToast: function(t, e) {
this.Toast.active = !0;
this.Toast.stopAllActions();
var i = this;
this.Toast.getChildByName("lb_noti").getComponent(cc.Label).string = e;
this.Toast.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
i.Toast.active = !1;
})));
},
ToastDatCua: function(t) {
this.isFirst = !0;
this.showNotice(2, "Đặt cửa", t);
},
removeNodePlayer: function(t) {
for (var e = 0; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e);
i._username == t.name && (i.active = !1);
}
},
addNodePlayerEnterRoom: function(t) {
if (t && "admin" != t.getVariable("role").value) for (var e = 1; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e), n = i.getChildByName("name").getComponent(cc.Label), s = i.getChildByName("money").getComponent(cc.Label);
if (!i.active) {
i.active = !0;
i._username = t.name;
n.string = GameVariables.getDisplayName(t);
s.string = Utils.addDotToNumber(GameVariables.getChip(t));
if (t.isItMe) Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + Config.getDefaultAvatar()); else {
var o = Math.floor(9 * Math.random()) + 1;
Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + o);
}
break;
}
}
},
updateChip: function(t) {
for (var e = 0; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e), n = i.getChildByName("money").getComponent(cc.Label);
if (i.active && i._username && i._username == t.name) {
n.string = Utils.addDotToNumber(GameVariables.getChip(t));
return;
}
}
},
xocxoc: function(t, e, n) {
this._runEffectPotWin(e, n);
this.Result.active = !0;
this.CardRong.getComponent("Card").reveal(new i.Card(t[0]));
this.CardHo.getComponent("Card").reveal(new i.Card(t[1]));
},
_runEffectPotWin: function(t, e) {
if (null != t) {
for (var i = 0; i < t.length; i++) if (t[i] >= 0 && t[i] <= 6) {
var n = this.listNodePot[t[i]].getChildByName("Line-1");
n.active = !0;
n.getComponent(sp.Skeleton).setAnimation(1, "Idle", !0);
}
if (e) {
var s = this.POS.children[0], o = s.getChildByName("InGame-Thang-2"), a = s.getChildByName("thang-text"), c = s.getChildByName("money_win");
c.position = cc.v2(0, 0);
c.getComponent(cc.Label).string = "+" + Utils.addDotToNumber(SmartFoxSDK.RongHoController.m_tableInfo.winChip);
c.active = !0;
o.active = !0;
a.active = !0;
o.getComponent(sp.Skeleton).setAnimation(0, "Idle", !0);
var r = cc.moveTo(1.5, cc.v2(0, 100)), h = cc.sequence(r, cc.delayTime(2.5), cc.callFunc(function() {
o.active = !1;
a.active = !1;
c.active = !1;
}));
c.runAction(h);
}
this._isDat = !1;
}
},
_turnOnTime: function(t) {
this.Timer.active = !0;
this.CardRong.getComponent("Card").init(null);
this.CardHo.getComponent("Card").init(null);
this._stopEffectWinPot();
var e = this.Timer.getComponent(this.Timer.name);
e.setTotalProgress(30);
e.setCurrentProgress(t);
e.turnOnTimer();
},
_turnOffTime: function() {
this.Timer.active = !1;
},
showListMyChipBet: function(t) {
if (this._isHaveChipBet(t)) this._myChipBet = t; else {
this._isDatLast || (this._myChipBet = t);
this._isDatLast && (this._isDatLast = !1);
}
for (var e = 0; e < t.length; e++) this.listMyChipBet[e].string = Utils.addDotToNumber(t[e]);
},
showListChipBet: function(t) {
for (var e = 0; e < t.length; e++) this.listChipBet[e].string = Utils.addDotToNumber(t[e]);
},
selectBetChip: function(t, e) {
for (var i = 0; i < this.listNodeBet.length; i++) {
this.listNodeBet[i].scale = 1;
this.listNodeBet[i].getChildByName("label").color = cc.Color.WHITE;
}
this._currentBet = e;
t.currentTarget.scale = 1.3;
t.currentTarget.getChildByName("label").color = cc.Color.YELLOW;
},
requestBet: function(t, e) {
if (SmartFoxSDK.RongHoController.m_tableInfo.isBetting) {
if (0 == (e = parseInt(e)) || 2 == e) {
if (this._isRongHo >= 0 && e !== this._isRongHo) {
this.showToast(1, "Không được phép đặt nhiều cửa");
return;
}
this._isRongHo = e;
}
this._isDat = !0;
mm.audio.playDatCua();
this.sendRequestBet(this._currentBet, e);
} else this.showToast(1, "Đang mở bài không được đặt");
},
sendRequestBet: function(t, e) {
this._currentType = e;
this._isDatLast = !0;
if (this._currentType < 0 || this._currentType >= 7) this.showToast(1, "Của đặt không hợp lệ"); else if (GameVariables.getChip(SmartFoxSDK.RongHoController.ZoneInstance.mySelf) < t) this.showToast(1, "Không đủ tiền!"); else {
var i = new RongHoRequest.BetRequest();
i.setBetChip(t);
i.setTypePot(this._currentType);
SmartFoxSDK.RongHoController.ZoneInstance.send(i.toSRequest());
}
},
actionFlyChipToPot: function(t, e, i) {
var n = this, s = this.getPosFromName(t), o = "chip2";
i >= 1e3 && i < 5e3 ? o = "chip1" : i >= 5e3 && i < 2e4 ? o = "chip2" : i >= 2e4 && i < 5e4 ? o = "chip3" : i >= 1e5 && i < 5e5 ? o = "chip4" : i >= 5e5 && (o = "chip5");
for (var a = function(t) {
var i = n.getChipNode();
Utils.loadRes(i.getComponent(cc.Sprite), "images/xocdia/" + o);
var a = n.POS.getChildByName("pos_" + s);
i.position = a.position;
var c = n.listNodePot[e], r = n.getPositionInOtherNode(c, n.node), h = n;
i.runAction(cc.sequence(cc.delayTime(.06 * t), cc.moveTo(.2, cc.v2(r.x, r.y)), cc.callFunc(function() {
h.returnChipNode(this);
}, i)));
}, c = 0; c < 3; c++) a(c);
},
clickExitRoom: function() {
var t = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho");
if (t) {
SmartFoxSDK.RongHoController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t));
mm.Loading.show();
} else UIManger.show("UIHome");
},
eventShowMenu: function() {
this.ListMenu.active = !this.ListMenu.active;
},
eventRank: function() {
mm.Loading.show();
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.RongHoController.ZoneInstance.send(t.toSRequest());
},
eventHelper: function() {
this.show("UIRongHoHelper", {
pop: !0,
src: "rongho"
});
},
eventHistory: function() {
mm.Loading.show();
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.RongHoController.ZoneInstance.send(t.toSRequest());
},
eventGapThep: function() {
if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
if (!SmartFoxSDK.RongHoController.m_tableInfo.isBetting) {
this.showToast(1, "Đang trả thưởng, không được cược");
return;
}
this._isDat = !0;
for (var t = 0; t < this._myChipBet.length; t++) this._myChipBet[t] > 0 && this.sendRequestBet(2 * this._myChipBet[t], t);
}
},
eventDatLai: function() {
if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
if (!SmartFoxSDK.RongHoController.m_tableInfo.isBetting) {
this.showToast(1, "Đang trả thưởng, không được cược");
return;
}
this._isDat = !0;
for (var t = 0; t < this._myChipBet.length; t++) this._myChipBet[t] > 0 && this.sendRequestBet(this._myChipBet[t], t);
}
},
_isHaveChipBet: function(t) {
for (var e = !1, i = 0; i < t.length; i++) if (t[i] > 0) return !0;
return e;
},
eventShowChat: function() {
this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
this.ChatEmojiLayer.active && this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.RongHoController.ZoneInstance);
},
onPublicMessage: function(t) {
var e = t.msg, i = this.getPosFromName(t.sender.name), n = this.POS.children[i].getChildByName("EMOJ");
if (null != n) {
var s = e.indexOf("emoij_") >= 0, o = n.getChildByName("EMOJ"), a = n.getChildByName("box");
o.active = !1;
a.active = !1;
if (s) {
o.active = !0;
o.opacity = 255;
var c = e.replace("emoij_", "");
o.stopAllActions();
o.getComponent(sp.Skeleton).setAnimation(0, c, !1);
o.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function() {
o.active = !1;
})));
} else {
a.active = !0;
a.opacity = 255;
a.stopAllActions();
a.getChildByName("lb_chat").getComponent(cc.Label).string = e;
a.getComponent(cc.Layout).updateLayout();
a.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function() {
a.active = !1;
})));
}
}
},
updateUserVariable: function(t) {
this.POS.children[0].getChildByName("money").getComponent(cc.Label).string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.RongHoController.ZoneInstance.mySelf) - t);
}
});
cc._RF.pop();
}, {
PokerCard: "PokerCard"
} ],
UIRouletteRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "ce1b2S7grVPP48pHR8pKwhT", "UIRouletteRank");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listRank = [];
this.listview.numItems = this.listRank.length;
},
onEnable: function() {
mm.Loading.hide();
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIRouletteTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "8afe49fZYBET5yoqw5KoFiP", "UIRouletteTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listRank = [];
this.listview.numItems = this.listRank.length;
},
onEnable: function() {
mm.Loading.hide();
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIRoulette: [ function(t, e) {
"use strict";
cc._RF.push(e, "3187bQ/8idCz414/y8vl4tl", "UIRoulette");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
ChatEmojiLayer: cc.Node,
lbSession: cc.Label,
lbRoom: cc.Label,
lbTotalBet: cc.Label,
listNodeBet: cc.Node,
listPosBet: cc.Node,
rouletteXoay: cc.Node,
Timer: cc.Node,
Ball: cc.Node,
canXoay: cc.Node,
boarXoay: cc.Node,
menu: cc.Node,
soiCau: cc.Node,
listviewCau: i,
_currentType: -1,
_currentBet: 1e3,
ChipPrefab: cc.Prefab,
PlayerPos: cc.Node,
Noti: cc.Node,
listCauTop: cc.Node,
fontWin: cc.Font,
fontLose: cc.Font,
_currentTime: 0,
_dataCau: [],
_isDat: !1,
_lastBet: null,
_currentPercent: 0,
_resultPos: 0,
_totalBet: 0,
_listChipBet: [],
_listTypeBet: [],
listDataCau: [],
_ListRed: [],
_isShowCau: !1
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
this._listTypeBet = [];
this._listChipBet = [];
this.ListChipImg = {
1e3: "1k",
5e3: "5k",
1e4: "10k",
5e5: "500k",
1e6: "1m",
5e6: "5m"
};
this._currentBet = 1e3;
this._lastBet = this.listNodeBet.children[0];
this.listNodePot = this.listPosBet.children;
this._isDat = !1;
this.poolChip = [];
for (var t = 0; t < 20; t++) {
var e = cc.instantiate(this.ChipPrefab);
e.scale = .33;
this.node.addChild(e);
e.active = !1;
this.poolChip.push(e);
}
this.listMyChipBet = [];
this._ListRed = [ 1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36 ];
},
onDisable: function() {
cc.director.getCollisionManager().enabled = !1;
},
onEnable: function() {
cc.director.getCollisionManager().enabled = !0;
this._dataCau = [];
this._currentPercent = 0;
this.hideAll();
this.Ball.getComponent("Ball").addEventOnCollisionEnter(function(t) {
if (t == this._resultPos) {
this.rouletteXoay.stopAllActions();
this.canXoay.stopAllActions();
this.Ball.stopAllActions();
this.scheduleOnce(this.showResultWin, 2);
}
}.bind(this));
this._isShowCau = !1;
this.sendRequestSoiCau();
},
eventBet: function(t, e) {
mm.audio.playButton();
if (SmartFoxSDK.RouletteController.m_tableInfo.isBetting) {
if (!this._isDat) {
this._listTypeBet = [];
this._listChipBet = [];
}
this._isDat = !0;
mm.audio.playDatCua();
this.sendRequestBet(this._currentBet, e);
} else this.showNoti("Không được cược!");
},
hideAll: function() {
this._isDat = !1;
this.Noti.active = !1;
this.Timer.active = !1;
this.rouletteXoay.stopAllActions();
this.canXoay.stopAllActions();
this.Ball.stopAllActions();
this.boarXoay.stopAllActions();
this.updateTotalBet(0);
this.rouletteXoay.active = !1;
Promise.all(this.listNodePot.map(function(t) {
t.getChildByName("bg_win").active = !1;
}));
Promise.all(this.poolChip.map(function(t) {
if (t.active) {
t.removeFromParent(!0);
t.active = !1;
}
}));
},
runActionChangeMoney: function(t, e, i) {
var n = e > 0 ? this.fontWin : this.fontLose, s = this.getPosFromName(t), o = this.PlayerPos.getChildByName("pos_" + s);
if (o) {
var a = o.getChildByName("money_win").getComponent(cc.Label);
a.node.active && (e += this.getMoneyFromString(a.string));
if (0 == e) return;
a.node.active = !0;
a.node.stopAllActions();
a.node.position = cc.v2(0, 20);
a.font = n;
a.string = e > 0 ? "+" + Utils.addDotToNumber(e) : Utils.addDotToNumber(e);
var c = cc.v2(0, 120);
s > 6 && (c = cc.v2(0, 50));
a.node.runAction(cc.sequence(cc.moveTo(.5 * i, c).easing(cc.easeOut(.5)), cc.delayTime(1.5 * i), cc.callFunc(function() {
a.string = 0;
a.node.active = !1;
})));
this.updateMoney(e, o);
}
},
getMoneyFromString: function(t) {
t = (t = t.replace("+", "")).split(".").join("");
return parseFloat(t);
},
showResult: function(t) {
this._dataCau.length > this.listCauTop.length && this._dataCau.shift();
this._dataCau.push(t);
this.runActionRotationBall(t);
},
getNumberCardFromChip: function(t) {
var e = Math.floor(t / 5e6);
t -= 5e6 * e;
var i = Math.floor(t / 1e6);
t -= 1e6 * i;
var n = Math.floor(t / 5e5);
t -= 5e5 * n;
var s = Math.floor(t / 1e4);
t -= 1e4 * s;
var o = Math.floor(t / 5e3);
t -= 5e3 * o;
return [ Math.floor(t / 1e3), o, s, n, i, e ];
},
addChipToPot: function(t, e) {
for (var i = 0; i < t.length; i++) this.actionFlyChipToPot(SmartFoxSDK.RouletteController.ZoneInstance.mySelf, t[i], e[i]);
},
resumeGame: function(t, e, i, n, s) {
this._dataCau.length > this.listCauTop.length && this._dataCau.shift();
this._dataCau.push(s);
e <= 10 ? this.showResultWin() : this.showResult(s);
},
getChipNode: function() {
for (var t = 0; t < this.poolChip.length; t++) if (!this.poolChip[t].active) {
this.poolChip[t].active = !0;
this.poolChip[t].position = cc.v2(0, 0);
this.poolChip[t].parent = this.node;
return this.poolChip[t];
}
var e = cc.instantiate(this.ChipPrefab);
this.node.addChild(e);
e.scale = .33;
e.active = !0;
this.poolChip.push(e);
return e;
},
returnChipNode: function(t) {
t.active = !1;
},
showListUsers: function(t) {
for (var e = 0; e < this.PlayerPos.childrenCount - 1; e++) {
var i = this.PlayerPos.getChildByName("pos_" + e), n = i.getChildByName("user_frame").getChildByName("name").getComponent(cc.Label), s = e >= t.length ? null : t[e];
if (s && "admin" != s.getVariable("role").value) {
i.active = !0;
i._username = s.name;
n.string = GameVariables.getDisplayName(s);
this.updateMoney(GameVariables.getChip(s), i);
} else {
i.active = !1;
i._username = null;
}
}
},
getPosFromName: function(t) {
for (var e = 0; e < this.PlayerPos.childrenCount - 1; e++) {
var i = this.PlayerPos.getChildByName("pos_" + e);
if (i.active && i._username && i._username == t) return e;
}
return this.PlayerPos.childrenCount - 1;
},
updateChip: function(t) {
for (var e = 0; e < this.PlayerPos.childrenCount - 1; e++) {
var i = this.PlayerPos.getChildByName("pos_" + e);
if (i.active && i._username && i._username == t.name) {
this.updateMoney(GameVariables.getChip(t), i);
return;
}
}
},
updateListChipBet: function(t, e) {
this._listTypeBet.push(t);
this._listChipBet.push(e);
},
selectBetChip: function(t, e) {
mm.audio.playButton();
this._lastBet.getChildByName("bg_select").active = !1;
t.currentTarget.getChildByName("bg_select").active = !0;
this._lastBet = t.currentTarget;
this._currentBet = parseInt(e);
},
updateTotalBet: function(t) {
this.lbTotalBet.string = Utils.addDotToNumber(Math.abs(t));
},
sendRequestBet: function(t, e) {
this._currentType = e;
if (this._currentType < 0 || this._currentType > 48) this.showNoti("Chọn lại giá trị cược"); else if (GameVariables.getChip(SmartFoxSDK.RouletteController.ZoneInstance.mySelf) < t) this.showNoti("Không đủ tiền cược!"); else {
var i = new RouletteRequest.BetRequest();
i.setBetChip(t);
i.setTypePot(this._currentType);
SmartFoxSDK.RouletteController.ZoneInstance.send(i.toSRequest());
}
},
actionFlyChipToPot: function(t, e, i) {
this.ListChipImg.hasOwnProperty(i) ? this.actionFlyOneChipToPot(t, e, i) : this.actionFlyMutiChipToPot(t, e, i);
},
runActionToGirl: function(t) {
for (var e = this, i = 0, n = 0; n < this.poolChip.length; n++) this.poolChip[n].active && i++;
for (var s = 0, o = function(n) {
var o = null;
if (e.poolChip[n].active) {
s++;
o = e.poolChip[n];
var a = e.getPositionInOtherNode(o, e.node);
o.parent = e.node;
o.position = a;
var c = cc.v2(50 * Math.random() - 25, 50 * Math.random() - 25);
o.runAction(cc.sequence(cc.moveTo(1, c), cc.delayTime(.05 * n), cc.callFunc(function() {
o.stopAllActions();
o.active = !1;
o.removeFromParent(!0);
if (s >= i) {
s = -1;
t && t();
}
})));
}
}, a = 0; a < this.poolChip.length; a++) o(a);
},
actionFlyOneChipToPot: function(t, e, i) {
var n = this.getPosFromName(t), s = "1k";
if (this.ListChipImg.hasOwnProperty(i)) {
s = this.ListChipImg[i];
var o = this.getChipNode();
Utils.loadRes(o.getComponent(cc.Sprite), "roulette/phinh/" + s);
var a = this.PlayerPos.getChildByName("pos_" + n);
o.position = a.position;
var c = this.getPosBet(e), r = this.getPositionInOtherNode(c, this.node);
o.runAction(cc.sequence(cc.moveTo(.5, cc.v2(r.x, r.y)).easing(cc.easeOut(1)), cc.callFunc(function() {
o.position = cc.v2(Math.random() * c.width - c.width / 2, Math.random() * c.height - c.height / 2);
o.parent = c;
})));
}
},
actionFlyMutiChipToPot: function(t, e, i) {
var n = this, s = this.getNumberCardFromChip(i), o = Object.keys(this.ListChipImg);
Promise.all(o.map(function(i, o) {
if (s[o] > 0) for (var a = parseInt(i), c = 0; c < s[o]; c++) n.actionFlyOneChipToPot(t, e, a);
}));
},
actionFlyChipToPlayer: function(t, e, i) {
var n = this, s = this.getNumberCardFromChip(e), o = Object.keys(this.ListChipImg), a = n.getPosFromName(t), c = n.PlayerPos.getChildByName("pos_" + a).position, r = 0, h = [];
Promise.all(o.map(function(t, e) {
if (s[e] > 0) for (var i = parseInt(t), o = 0; o < s[e]; o++) {
var a = "1k";
n.ListChipImg.hasOwnProperty(i) && (a = n.ListChipImg[t]);
var c = n.getChipNode();
Utils.loadRes(c.getComponent(cc.Sprite), "roulette/phinh/" + a);
c.position = cc.v2(50 * Math.random() - 20, 10 * Math.random() - 10);
h.push(c);
}
})).then(function() {
Promise.all(h.map(function(t) {
if (null != t) {
r++;
t.runAction(cc.sequence(cc.delayTime(.1 * r * i), cc.moveTo(1 * i, c).easing(cc.easeOut(1)), cc.callFunc(function() {
t.removeFromParent(!0);
t.active = !1;
})));
}
})).then(function() {
n.runActionChangeMoney(t, e, i);
});
});
},
getPosBet: function(t) {
var e = this.listNodePot[t].getChildByName("nodeBet");
if (e.childrenCount > 30) {
var i = e.children[0];
i.removeFromParent(!0);
i.active = !1;
}
e.active || (e.active = !0);
return e;
},
clickExitRoom: function() {
mm.audio.playButton();
var t = SmartFoxSDK.RouletteController.ZoneInstance.getRoomByName("roulette");
if (t) {
SmartFoxSDK.RouletteController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t));
mm.Loading.show();
} else UIManger.show("UIHome");
},
eventHelper: function() {
mm.audio.playButton();
this.show("UIRouletteHelper", {
pop: !0,
src: "roulette"
});
},
eventSoiCau: function() {
mm.audio.playButton();
this._isShowCau = !0;
if (this.soiCau.active) this.soiCau.active = !1; else if (this._dataCau.length < 1) {
mm.Loading.show();
this.sendRequestSoiCau();
} else this.showSoiCau(this._dataCau);
},
sendRequestSoiCau: function() {
var t = new RouletteRequest.HistoryRequest();
SmartFoxSDK.RouletteController.ZoneInstance.send(t.toSRequest());
},
showSoiCau: function(t) {
mm.Loading.hide();
this._dataCau = t;
if (this._isShowCau || this.soiCau.active) {
this._reformatDataCau();
this.soiCau.active = !0;
this.listviewCau.numItems = this.listDataCau.length;
this.listviewCau.node.getComponent(cc.ScrollView).scrollToRight(1);
}
this.updateListCauTop();
this._isShowCau = !1;
},
eventGapThep: function() {
mm.audio.playButton();
if (this._listTypeBet.length > 0 && !this._isDat) {
this._isDat = !0;
for (var t = 0; t < this._listTypeBet.length; t++) this.sendRequestBet(2 * this._listChipBet[t], this._listTypeBet[t]);
this._listChipBet = [];
this._listTypeBet = [];
} else this.showNoti("No data!");
},
eventDatLai: function() {
mm.audio.playButton();
if (this._listTypeBet.length > 0 && !this._isDat) {
this._isDat = !0;
for (var t = 0; t < this._listTypeBet.length; t++) this.sendRequestBet(this._listChipBet[t], this._listTypeBet[t]);
this._listChipBet = [];
this._listTypeBet = [];
} else this.showNoti("Không có dữ liệu cược!");
},
showNoti: function(t) {
this.Noti.active = !0;
this.Noti.getChildByName("lb_noti_content").getComponent(cc.Label).string = t;
this.scheduleOnce(function() {
this.Noti.active = !1;
}, 1.5);
},
onListRender: function(t, e) {
var i = this.listDataCau[e];
t.getComponent(t.name).init(i);
},
showResultWin: function() {
var t = this, e = this;
this.showSoiCau(this._dataCau);
this.rouletteXoay.active = !1;
var i = SmartFoxSDK.RouletteController.m_tableInfo.winpot, n = SmartFoxSDK.RouletteController.m_tableInfo.usersOnboard, s = SmartFoxSDK.RouletteController.m_tableInfo.chipUserOnBoard;
null != i && function() {
for (var o = !0, a = 0; a < i.length; a++) {
var c = i[a], r = cc.blink(2, 8), h = t.listNodePot[c].getChildByName("bg_win");
h.active = !0;
h.runAction(cc.sequence(r, cc.delayTime(1), cc.callFunc(function() {
if (o) {
o = !1;
e.runActionToGirl(function() {
s.length > 0 && Promise.all(n.map(function(t, i) {
e.actionFlyChipToPlayer(t, s[i], 1);
}));
});
}
})));
}
}();
},
runActionRotationBall: function(t) {
var e = this;
this._resultPos = t;
this.rouletteXoay.active = !0;
this.rouletteXoay.scale = 0;
this.boarXoay.stopAllActions();
this.canXoay.stopAllActions();
this.Ball.stopAllActions();
var i = cc.scaleTo(.3, 1);
this.rouletteXoay.runAction(cc.sequence(i, cc.delayTime(.2), cc.callFunc(function() {
var t = cc.v2(376, 0), i = cc.v2(324, 0), n = cc.v2(212, 0), s = cc.moveTo(1, i), o = cc.moveTo(1, n), a = cc.rotateBy(4, 360), c = cc.rotateBy(1, -360), r = cc.rotateBy(1.5, -360), h = cc.rotateBy(2, -360), l = cc.jumpBy(.5, cc.v2(0, 0), 20, 5);
e.boarXoay.runAction(a.repeatForever());
e.Ball.position = t;
e.canXoay.runAction(cc.sequence(c.repeat(3), cc.callFunc(function() {
e.Ball.runAction(s);
e.canXoay.runAction(cc.sequence(r.repeat(.05), cc.callFunc(function() {
e.Ball.runAction(cc.sequence(o, cc.delayTime(.5), l));
e.canXoay.runAction(h.repeat(2));
})));
})));
})));
},
eventOpenMenu: function() {
mm.audio.playButton();
this.menu.active = !this.menu.active;
},
updateListCauTop: function() {
var t, e = this, i = this._dataCau.length;
t = this._dataCau.length <= this.listCauTop.childrenCount ? 0 : this._dataCau.length - this.listCauTop.childrenCount;
Promise.all(this.listCauTop.children.map(function(n, s) {
n.active = !1;
if (s < i) {
n.active = !0;
n.getComponent(cc.Label).string = e._dataCau[t + s];
n.color = e._ListRed.indexOf(e._dataCau[t + s]) > 0 ? cc.Color.RED : cc.Color.BLACK;
}
}));
},
_reformatDataCau: function() {
this.MaxRow = 4;
this.listDataCau = [];
for (var t = Math.ceil(this._dataCau.length / this.MaxRow), e = 0; e < t; e++) this.listDataCau.push(this._dataCau.slice(e * this.MaxRow, (e + 1) * this.MaxRow));
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
},
eventRank: function() {
mm.audio.playButton();
mm.Loading.show();
this.menu.active = !1;
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.RouletteController.ZoneInstance.send(t.toSRequest());
},
eventHistory: function() {
mm.audio.playButton();
mm.Loading.show();
this.menu.active = !1;
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.RouletteController.ZoneInstance.send(t.toSRequest());
},
_turnOnTime: function(t, e) {
this.Timer.active = !0;
this.Timer.getComponent("TimeSubRoulette").setTotalProgress(e);
this.Timer.getComponent("TimeSubRoulette").setTotalRemain(t);
this.Timer.getComponent("TimeSubRoulette").turnOnTimer();
this._currentTime = t;
},
_turnOffTime: function() {
this.Timer.getComponent("TimeSubRoulette").turnOffTimer();
this.Timer.active = !1;
},
eventShowChat: function() {
mm.audio.playButton();
this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
this.ChatEmojiLayer.active && this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.RouletteController.ZoneInstance);
},
onPublicMessage: function(t) {
var e = t.msg, i = this.getPosFromName(t.sender.name), n = this.PlayerPos.children[i].getChildByName("EMOJ");
if (null != n) {
var s = e.indexOf("emoij_") >= 0, o = n.getChildByName("EMOJ"), a = n.getChildByName("box");
o.active = !1;
a.active = !1;
if (s) {
o.active = !0;
o.opacity = 255;
var c = e.replace("emoij_", "");
o.stopAllActions();
o.getComponent(sp.Skeleton).setAnimation(0, c, !1);
o.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function() {
o.active = !1;
})));
} else {
a.active = !0;
a.opacity = 255;
a.stopAllActions();
a.getChildByName("lb_chat").getComponent(cc.Label).string = e;
a.getComponent(cc.Layout).updateLayout();
a.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function() {
a.active = !1;
})));
}
}
},
updateUserVariable: function(t) {
this.updateMoney(GameVariables.Poker.getChip(SmartFoxSDK.RouletteController.ZoneInstance.mySelf) - t, this.PlayerPos.children[0]);
},
updateMoney: function(t, e) {
e.getChildByName("user_frame").getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(t);
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UISieuXeHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "2c740bo341LhZk4g0X7OWaB", "UISieuXeHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {} ],
UISieuXeRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "30fc2XOcLhDeqlWuYNuog4D", "UISieuXeRank");
var i = t("Listview"), n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
allRank: cc.Sprite,
allHu: cc.Sprite,
listRank: [],
listHu: []
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
eventClose: function() {
this.back();
},
eventAllRank: function() {
n.setMaterialGray(this.allRank, !1);
n.setMaterialGray(this.allHu, !0);
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
eventHu: function() {
n.setMaterialGray(this.allRank, !0);
n.setMaterialGray(this.allHu, !1);
if (this._data && this._data.items) {
this.listHu = [];
this.listview.numItems = this.listHu.length;
}
}
});
cc._RF.pop();
}, {
Helper: "Helper",
Listview: "Listview"
} ],
UISieuXeTransactionDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "78611ZfwltNUJrAyJOj63zL", "UISieuXeTransactionDetail");
t("SieuXeReel");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: cc.Node
},
lbSession: cc.Label,
lbTotalWin: cc.Label,
TotalItemRun: 20,
TotalColumn: 5
},
onEnable: function() {
this.TotalItemRun = 20;
this.lbSession.string = "#" + this._data.session;
this.lbTotalWin.string = Utils.addDotToNumber(this._data.win);
for (var t = this._data.map, e = 0; e < t.length; e++) e % 5 > 2 && (t[e] = t[e] + 1);
t = this.getDataResult(t);
Promise.all(this.reels.map(function(e, i) {
Promise.all(e.children.map(function(e, n) {
e.getComponent("SieuXeItem").init(this, t[i][n]);
}));
}));
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this.TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this.TotalColumn].push(t[n]);
return e;
},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {
SieuXeReel: "SieuXeReel"
} ],
UISieuXeTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "758e6busOFMHbKUjQc/8vW2", "UISieuXeTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UISieuXe: [ function(t, e) {
"use strict";
cc._RF.push(e, "963ff+MhhRHILpPWMNfXlWl", "UISieuXe");
var i = t("SieuXeWinGame"), n = t("Helper"), s = t("SieuXeReel"), o = t("sieuxeLanguage"), a = cc.Enum({
"1l": 100,
"1k": 1e3,
"5k": 5e3,
"10k": 1e4
});
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: s
},
listRoomNode: {
default: [],
type: cc.Toggle
},
iconPrefab: cc.Prefab,
noticeNode: cc.Node,
btnQuay: cc.Node,
btnQuayNhanh: cc.Node,
btnStopSieuToc: cc.Node,
btnStopQuay: cc.Node,
btnAutoQuay: cc.Node,
WinGame: i,
listMainLines: cc.Node,
edtCheat: cc.EditBox,
isAuto: !1,
isFast: !1,
isSpin: !1,
red: !0,
lastResult: [],
betSelect: 0,
roomNumber: 0,
posLineWin: 0,
totalLineWin: 0,
TotalItemRun: 15,
TotalColumn: 5,
lb_hu: cc.Label,
betLevel: "1l"
},
onLoad: function() {
this.initSieuXe();
this.WinGame.init(this);
this.betLevel = "1k";
this.roomNumber = a["1k"];
this.listRoomNode[1].isChecked = !0;
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
onEnable: function() {
if (this.node.zIndex <= cc.lastZIndex) {
cc.lastZIndex += 1;
this.node.zIndex = cc.lastZIndex;
}
cc.currentUI = "UISieuXe";
},
showGame: function() {
this.node.getChildByName("content").active = !0;
},
updateJackpot: function() {
var t = "sieuxe" + this.betLevel;
if (SmartFoxSDK.SieuXeController.ZoneInstance.mySelf) {
var e = SmartFoxSDK.SieuXeController.ZoneInstance.mySelf.getVariable(t);
if (e) {
var i = e.value, n = this.lb_hu.string;
n = n.split(".").join("");
var s = parseFloat(n);
Utils.numberTo(this.lb_hu, s, i, 1e3, !0);
}
}
},
onDisable: function() {
this.node.stopAllActions();
},
initSieuXe: function() {
var t = this, e = [], i = [], n = [];
Promise.all(this.reels.map(function(s, o) {
var a;
a = o < 3 ? t.initRandomItems(t.TotalItemRun, 0, 6) : t.initRandomItems(t.TotalItemRun, 6, 4);
e.push(a[a.length - 1]);
i.push(a[a.length - 2]);
n.push(a[a.length - 3]);
s.init(t, a);
})).then(function() {
t.lastResult = n.concat(i).concat(e);
});
},
setMoneyWin: function() {},
updateDataPhong: function() {},
eventSieuToc: function() {
if (this.checkEnoughMoney()) {
this.isSpin = !0;
this.isFast = !0;
this.isAuto = !0;
this.btnStopSieuToc.active = !0;
this.btnStopQuay.active = !1;
this.pauseSystemEventNode(this.btnQuay, !0);
this.autoQuay();
} else mm.Toast.showToast(1, o.getString("noti_not_money"));
},
eventAutoQuay: function() {
if (this.checkEnoughMoney()) {
this.isSpin = !0;
this.isAuto = !0;
this.isFast = !1;
this.btnStopSieuToc.active = !1;
this.btnStopQuay.active = !0;
this.pauseSystemEventNode(this.btnQuay, !0);
this.autoQuay();
} else mm.Toast.showToast(1, o.getString("noti_not_money"));
},
eventStopAuto: function() {
this.isAuto = !1;
this.btnStopQuay.active = !1;
this.pauseSystemEventNode(this.btnQuay, !1);
},
eventStopSieuToc: function() {
this.isFast = !1;
this.isAuto = !1;
this.btnStopSieuToc.active = !1;
this.pauseSystemEventNode(this.btnQuay, !1);
},
eventPhong: function(t, e) {
if (this.isSpin) {
100 == this.roomNumber ? this.listRoomNode[0].isChecked = !0 : 1e3 == this.roomNumber ? this.listRoomNode[1].isChecked = !0 : 5e3 == this.roomNumber ? this.listRoomNode[2].isChecked = !0 : 1e4 == this.roomNumber && (this.listRoomNode[3].isChecked = !0);
this.addNotice(o.getString("noti_is_playing"));
} else {
this.roomNumber = parseInt(e);
100 == this.roomNumber ? this.betLevel = "1l" : 1e3 == this.roomNumber ? this.betLevel = "1k" : 5e3 == this.roomNumber ? this.betLevel = "5k" : 1e4 == this.roomNumber && (this.betLevel = "10k");
this.updateJackpot();
}
},
checkEnoughMoney: function() {
return !(GameVariables.Poker.getChip(SmartFoxSDK.SieuXeController.ZoneInstance.mySelf) < this.roomNumber);
},
eventQuay: function() {
if (this.checkEnoughMoney()) {
this.isSpin = !0;
var t = new SieuXeRequest.BetRequest();
this.showLineWin(!1);
this.pauseSystemEventNode(this.btnQuay, !0);
t.setBet(this.roomNumber);
SmartFoxSDK.SieuXeController.ZoneInstance.send(t.toSRequest());
this.updateChipAll(this.roomNumber);
} else mm.Toast.showToast(1, o.getString("noti_not_money"));
},
pauseSystemEventNode: function(t, e) {
n.setMaterialGray(t.getComponent(cc.Sprite), e);
e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
},
eventBack: function() {
if (this.isSpin) this.addNotice(o.getString("noti_is_playing")); else {
var t = SmartFoxSDK.SieuXeController.ZoneInstance.getRoomByName("sieuxe");
t ? SmartFoxSDK.SieuXeController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t)) : this.back();
}
},
eventSetting: function() {},
eventVinhDanh: function() {
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.SieuXeController.ZoneInstance.send(t.toSRequest());
},
eventLichSuGiaoDich: function() {
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.SieuXeController.ZoneInstance.send(t.toSRequest());
},
eventOpenHelper: function() {
this.show("UISieuXeHelper", {
pop: !0,
src: "sieuxe"
});
},
finishSpin: function() {
this.isSpin = !1;
},
SieuXeRun: function(t) {
var e = this;
if (void 0 !== t.status) if (1 === t.status) {
for (var i = 0; i < t.result.length; i++) i % 5 > 2 && (t.result[i] = t.result[i] + 1);
t.result = this.getDataResult(t.result);
Promise.all(t.result.map(function(t, i) {
Promise.all(t.map(function(t, n) {
e.reels[i].icons[n].setIcon(t, !0);
}));
})).then(function() {
e.runReels();
});
this.lineWin = t.lineWin;
this.winMoney = t.winMoney;
this.isNoHu = t.isNohu;
this.isThangLon = t.isThangLon;
} else this.resetSpin();
},
initRandomItems: function(t, e, i) {
for (var n = [], s = 0; s < t; s++) n[s] = this.random(e, i);
return n;
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this.TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this.TotalColumn].push(t[n]);
for (var s = 0; s < this.TotalColumn; s++) {
var o;
o = s < 3 ? this.initRandomItems(this.TotalItemRun - 6, 0, 6) : this.initRandomItems(this.TotalItemRun - 6, 6, 4);
e[s] = e[s].concat(o);
}
for (var a = 0; a < this.lastResult.length; a++) e[a % this.TotalColumn].push(this.lastResult[a]);
this.lastResult = t;
return e;
},
reformatResult: function(t, e) {
for (var i = [], n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
return i;
},
runActionWon: function() {
this.WinGame.runWinGame();
this.showLineWin(!0);
this.isAuto || this.pauseSystemEventNode(this.btnQuay, !1);
},
resume: function() {
this.winMoney > 0 ? setTimeout(function() {
this.WinGame.runWinGame();
}.bind(this), 300) : this.WinGame.runWinGame();
},
autoQuay: function() {
this.isAuto && (this.timeOut = setTimeout(function() {
this.eventQuay();
}.bind(this), 500));
},
showLineWin: function(t) {
var e = this, i = this;
if (t) {
this.totalLineWin = this.lineWin.length;
this.posLineWin = 0;
if (this.totalLineWin > 0) {
Promise.all(this.lineWin.map(function(t) {
i.listMainLines.children[t].active = !0;
}));
this.scheduleOnce(function() {}, 2);
Promise.all(i.lineWin.map(function(t) {
i.listMainLines.children[t].active = !1;
})).then(function() {
i.schedule(e.showMainLine, 1.5);
});
}
} else {
for (var n = 0; n < this.listMainLines.childrenCount; n++) this.listMainLines.children[n].active && (this.listMainLines.children[n].active = !1);
i.unschedule(this.showMainLine);
}
},
showMainLine: function() {
var t = this;
Promise.all(this.listMainLines.children.map(function(t) {
t.active && (t.active = !1);
})).then(function() {
t.totalLineWin = t.lineWin.length;
if (t.totalLineWin > 0) {
t.posLineWin = (t.posLineWin + 1) % t.totalLineWin;
t.listMainLines.children[t.lineWin[t.posLineWin]].active = !0;
}
}, this);
},
runReels: function() {
Promise.all(this.reels.map(function(t, e) {
t.spin(e);
}));
},
copy: function() {
Promise.all(this.reels.map(function(t) {
t.icons[t.icons.length - 1].setIcon(t.icons[2].data);
t.icons[t.icons.length - 2].setIcon(t.icons[1].data);
t.icons[t.icons.length - 3].setIcon(t.icons[0].data);
}));
},
random: function(t, e) {
return t + ~~(Math.random() * e);
},
resetSpin: function() {},
checkHasMoney: function() {
return !0;
},
addNotice: function(t) {
var e = this;
this.noticeNode.active = !0;
this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = t;
setTimeout(function() {
e.noticeNode.active = !1;
}, 1200);
},
updateChipAll: function(t) {
SmartFoxSDK.SieuXeController.onEventUpdateChip(t);
}
});
cc._RF.pop();
}, {
Helper: "Helper",
SieuXeReel: "SieuXeReel",
SieuXeWinGame: "SieuXeWinGame",
sieuxeLanguage: "sieuxeLanguage"
} ],
UISinbadBonus: [ function(t, e) {
"use strict";
cc._RF.push(e, "c4ec0rTDwJKGKQqtws24dkN", "UISinbadBonus");
var i = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
character: sp.Skeleton,
lbHeSoNhan: cc.Label,
lbTime: cc.Label,
lbLuotBoc: cc.Label,
lbMoneyWin: cc.Label,
totalSelect: 0,
totalTime: 15,
resultBonus: cc.Node,
vongTronNode: cc.Node
},
onEnable: function() {
this.totalTime = 30;
this.totalSelect = this._data.length;
this.lbLuotBoc.string = this.totalSelect;
this.lbTime.string = this.totalTime;
this.schedule(this.countTime, 1);
var t = cc.rotateBy(20, 360);
this.actionQuay = t.repeatForever();
this.vongTronNode.runAction(this.actionQuay);
},
countTime: function() {
this.totalTime--;
if (this.totalTime < 1) {
this.unschedule(this.countTime);
this.eventClose();
}
this.lbTime.string = this.totalTime;
},
showMoneyWin: function() {
var t = this;
t.resultBonus.active = !0;
for (var e = 0, n = 0; n < this._data.length; n++) e += this._data[n];
this.lbMoneyWin.node.active = !0;
i.numberTo(this.lbMoneyWin, 0, e, 1200, !0, function() {
setTimeout(function() {
t.eventClose();
}, 2e3);
});
},
eventSelect: function(t) {
if (t.target.getChildByName("dauhoi").active && this.totalSelect > 0) {
var e = this.character.setAnimation(0, "PhiTieu", !1);
this.character.setTrackCompleteListener(e, function() {
this.vongTronNode.stopAction(this.actionQuay);
this.totalSelect--;
if (this._data[this.totalSelect] > 0) {
t.target.getChildByName("lb_money").active = !0;
t.target.getChildByName("dauhoi").active = !1;
t.target.getChildByName("truot").active = !1;
this.character.setAnimation(0, "Thang", !1);
i.numberTo(t.target.getChildByName("lb_money").getComponent(cc.Label), 0, this._data[this.totalSelect], 1300, !0, function() {
this.vongTronNode.runAction(this.actionQuay);
}.bind(this));
} else {
t.target.getChildByName("dauhoi").active = !1;
t.target.getChildByName("truot").active = !0;
this.character.setAnimation(0, "Idle", !1);
this.vongTronNode.runAction(this.actionQuay);
}
this.lbLuotBoc.string = this.totalSelect;
0 == this.totalSelect && this.showMoneyWin();
}.bind(this));
}
},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
UISinbadHistoryDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "027f0XkPChA9rtB0ME6QuQu", "UISinbadHistoryDetail");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listItem: cc.Node,
lbSession: cc.Label,
lbMoneyWin: cc.Label
},
onEnable: function() {
var t = this._data.resultMap;
this.lbSession.string = "#" + this._data.session;
this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
Promise.all(this.listItem.children.map(function(e, i) {
e.getComponent("SinbadItem").setIcon(t[i]);
}));
}
});
cc._RF.pop();
}, {} ],
UISinbadHistoryTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "2d0cfAstC5MnplBOYUrsRWa", "UISinbadHistoryTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onLoad: function() {
this.listTransaction = [ {
session: "1234567",
time: "22/07/2020 19: 04",
stakes: "1000",
win: "10.000"
}, {
session: "1234567",
time: "22/07/2020 19: 04",
stakes: "1000",
win: "10.000"
}, {
session: "1234567",
time: "22/07/2020 19: 04",
stakes: "1000",
win: "10.000"
}, {
session: "1234567",
time: "22/07/2020 19: 04",
stakes: "1000",
win: "10.000"
}, {
session: "1234567",
time: "22/07/2020 19: 04",
stakes: "1000",
win: "10.000"
}, {
session: "1234567",
time: "22/07/2020 19: 04",
stakes: "1000",
win: "10.000"
} ];
this.listview.numItems = this.listTransaction.length;
},
onEnable: function() {
if (this._data && this._data.items) {
this.listTransaction = this._data.items;
this.listview.numItems = this.listTransaction.length;
}
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listTransaction[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
},
eventHistoryWin: function() {},
eventAll: function() {}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UISinbadLobby: [ function(t, e) {
"use strict";
cc._RF.push(e, "4921eyuWttMwad/CmxtoYog", "UISinbadLobby");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
arr_lb_hu: {
type: cc.Label,
default: []
},
lb_sodu: cc.Label
},
onLoad: function() {
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
onEnable: function() {
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
},
updateJackpot: function() {
for (var t = [ "sinbad1l", "sinbad1k", "sinbad10k" ], e = 0; e < t.length; e++) if (SmartFoxSDK.SinbadController.ZoneInstance.mySelf) {
var i = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(t[e]);
if (i) {
var n = i.value, s = this.arr_lb_hu[e], o = s.string;
o = o.split(".").join("");
var a = parseFloat(o);
Utils.numberTo(s, a, n, 1e3, !0);
}
}
},
eventPlayGame: function(t, e) {
cc.betLevel = e;
mm.Loading.show();
this.show("UISinbad", {
pop: !0,
src: "sinbad"
});
},
eventSetting: function() {},
back: function() {
var t = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad");
t ? SmartFoxSDK.SinbadController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t)) : this.show("UIHome");
},
updateUserVariable: function(t) {
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - t);
}
});
cc._RF.pop();
}, {} ],
UISinbadRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "e41b0UlffxD6ZvdHoZHP5tl", "UISinbadRank");
var i = t("Listview"), n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
allRank: cc.Sprite,
allHu: cc.Sprite,
listRank: [],
listHu: []
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(e, i);
},
eventClose: function() {
this.back();
},
eventAllRank: function() {
n.setMaterialGray(this.allRank, !1);
n.setMaterialGray(this.allHu, !0);
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
eventHu: function() {
n.setMaterialGray(this.allRank, !0);
n.setMaterialGray(this.allHu, !1);
if (this._data && this._data.items) {
this.listHu = [];
this.listview.numItems = this.listHu.length;
}
}
});
cc._RF.pop();
}, {
Helper: "Helper",
Listview: "Listview"
} ],
UISinbad: [ function(t, e) {
"use strict";
cc._RF.push(e, "69978sfarxAeYye/Zjm+Ihs", "UISinbad");
var i = t("SinbadWinGame"), n = t("Helper"), s = t("SinbadReel"), o = t("SinbadLine"), a = t("UtilsUI"), c = t("TrialResult"), r = t("sinbadLanguage"), h = cc.Enum({
"1l": 1,
"1k": 2,
"10k": 3
});
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: s
},
iconPrefab: cc.Prefab,
noticeNode: cc.Node,
bgBangThuong: cc.Node,
btnQuay: cc.Node,
btnQuayNhanh: cc.Node,
btnStopQuay: cc.Node,
btnAutoQuay: cc.Node,
lbNumberLine: cc.Label,
lbNumberStake: cc.Label,
lbMoneyWin: cc.Label,
lbSession: cc.Label,
selectLines: o,
WinGame: i,
listMainLines: cc.Node,
isAuto: !1,
isFast: !1,
isSpin: !1,
isFreeSpin: !1,
red: !0,
lastResult: [],
betSelect: 0,
roomNumber: 0,
posLineWin: 0,
totalLineWin: 0,
_TotalColumn: 5,
lb_phong: cc.Label,
lb_sodu: cc.Label,
lb_hu: cc.Label,
toggleMusic: cc.Toggle,
toggleSound: cc.Toggle,
bgSound: cc.AudioClip,
soundSpinMis: cc.AudioClip,
soundSpinWin: cc.AudioClip,
soundBigWin: cc.AudioClip,
soundJackpot: cc.AudioClip,
soundBonus: cc.AudioClip,
soundClick: cc.AudioClip,
soundSpin: cc.AudioClip,
menuSetting: cc.Node,
_keyMusic: "music_kc",
_keySound: "sound_kc",
_musicSlotState: 0,
_soundSlotState: 0,
_isFreeTrial: !1,
_myMoneyTrial: 0,
_mySession: 0
},
onLoad: function() {
this._TotalColumn = 5;
this.TotalItemRun = 20;
this.totalSymbol = 7;
this.winMoney = 0;
this.freeSpin = 0;
this.init();
this.roomNumber = h["1l"];
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
this.initSound();
},
initSound: function() {
var t = cc.sys.localStorage.getItem(this._keyMusic);
if (null != t) this._musicSlotState = parseInt(t); else {
this._musicSlotState = 1;
cc.sys.localStorage.setItem(this._keyMusic, "1");
}
var e = cc.sys.localStorage.getItem(this._keySound);
if (null != e) this._soundSlotState = parseInt(e); else {
this._soundSlotState = 1;
cc.sys.localStorage.setItem(this._keySound, "1");
}
null == this.bgSound || this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : this.musicId = cc.audioEngine.play(this.bgSound, !0, 1);
},
onDisable: function() {
cc.audioEngine.pause(this.musicId);
},
eventMusic: function() {
this._musicSlotState = this.toggleSound.isChecked ? 0 : 1;
this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : cc.audioEngine.resume(this.musicId);
cc.sys.localStorage.setItem(this._keyMusic, this._musicSlotState);
},
eventSound: function() {
this._soundSlotState = this.toggleSound.isChecked ? 0 : 1;
cc.sys.localStorage.setItem(this._keySound, this._soundSlotState);
},
playSpin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpin, !1, 1);
},
playSpinMis: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinMis, !1, 1);
},
playSpinWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinWin, !1, 1);
},
playBigWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBigWin, !1, 1);
},
playJackpot: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundJackpot, !1, 1);
},
playBonus: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBonus, !1, 1);
},
playClick: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundClick, !1, 1);
},
updateJackpot: function() {
var t = "sinbad" + cc.betLevel;
if (SmartFoxSDK.SinbadController.ZoneInstance.mySelf && SmartFoxSDK.SinbadController.ZoneInstance.mySelf) {
var e = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(t);
if (e) {
var i = e.value, n = this.lb_hu.string;
n = n.split(".").join("");
var s = parseFloat(n);
Utils.numberTo(this.lb_hu, s, i, 1e3, !0);
}
}
},
updateUserVariableSlot: function(t) {
var e = "fssinbad" + cc.betLevel;
if (t.changedVars.indexOf(e) >= 0 && t.user.isItMe) {
var i = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(e).value;
this.freeSpin = i;
this.WinGame.updateFreeSpin();
}
},
updateUserVariable: function(t) {
this._isFreeTrial || "" == cc.currentUI || (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - t));
},
onEnable: function() {
mm.audio.pauseMusic();
if ("choithu" == cc.betLevel) {
this._isFreeTrial = !0;
this._myMoneyTrial = 5e7;
this.lb_sodu.string = Utils.addDotToNumber(5e7);
this._mySession = 0;
this.lbSession.string = "#" + this._mySession;
} else {
this._myMoneyTrial = 0;
this._isFreeTrial = !1;
}
this.roomNumber = h[cc.betLevel];
void 0 === this.roomNumber && (cc.betLevel = "1l");
this.roomNumber = h[cc.betLevel];
this.roomNumber = this.roomNumber % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
this.selectLines.init(this);
this.WinGame.init(this);
this.lbMoneyWin.string = "0";
this.showLineWin(!1);
mm.Loading.hide();
},
init: function() {
var t = this, e = [], i = [], n = [];
Promise.all(this.reels.map(function(s) {
var o;
o = t.initRandomItems(t.TotalItemRun);
e.push(o[o.length - 1]);
i.push(o[o.length - 2]);
n.push(o[o.length - 3]);
s.init(t, o);
})).then(function() {
t.lastResult = n.concat(i).concat(e);
});
},
setNumberLines: function(t) {
this.lbNumberLine.string = t;
},
setNumberStake: function(t) {
this.lbNumberStake.string = n.numberWithCommas(t * this.getMoneyInRoom());
},
setMoneyWin: function(t) {
n.numberTo(this.lbMoneyWin, parseInt(this.lbMoneyWin.string), t, 1200, !0);
if (this._isFreeTrial) {
this._myMoneyTrial = this._myMoneyTrial + this.winMoney;
this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
} else this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
this.isSpin = !1;
},
updateDataPhong: function() {},
eventQuayNhanh: function() {
if (this._isFreeTrial) this.addNotice(r.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(r.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !0;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !0);
this.btnStopQuay.active = !0;
this.autoQuay();
} else mm.Toast.showToast(1, r.getString("noti_not_money"));
},
eventAutoQuay: function() {
if (this._isFreeTrial) this.addNotice(r.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(r.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !1;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !0);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
this.btnStopQuay.active = !0;
this.autoQuay();
} else mm.Toast.showToast(1, r.getString("noti_not_money"));
},
runQuay: function() {
if (this._isFreeTrial) {
this.isSpin = !0;
this._myMoneyTrial = this._myMoneyTrial - this.getTotalBet();
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial));
this._myMoneyTrial < 1 && mm.Toast.showToast(1, r.getString("noti_not_money"));
this._mySession++;
this.SinbadRun(c.getItemTrial());
this.freeSpin--;
} else {
this.playSpin();
this.isSpin = !0;
var t = new SinbadRequest.BetRequest();
this.showLineWin(!1);
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
mm.Toast.showToast(1, r.getString("noti_not_money"));
return;
}
SmartFoxSDK.SinbadController.ZoneInstance.send(t.toSRequest());
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - this.getTotalBet()));
}
},
eventStopQuay: function() {
this.isFast = !1;
this.isAuto = !1;
this.btnStopQuay.active = !1;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
var t = new SinbadRequest.StopAutoPlayRequest();
SmartFoxSDK.SinbadController.ZoneInstance.send(t.toSRequest());
},
eventPhong: function() {
if (this._isFreeTrial) this.addNotice(r.getString("noti_not_trial")); else if (this.isSpin || this.isAuto || this.isFast) this.addNotice(r.getString("noti_is_playing")); else {
this.roomNumber = (this.roomNumber + 1) % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
a.loadImageRes(this.node.getChildByName("bgGame").getComponent(cc.Sprite), "images/sinbad/mainGameBg" + this.roomNumber);
a.loadImageRes(this.node.getChildByName("borderGame").getComponent(cc.Sprite), "images/sinbad/border-phong" + this.roomNumber);
this.setNumberStake(this.selectLines.getTotalLineSelect());
1 == this.roomNumber ? cc.betLevel = "1l" : 2 == this.roomNumber ? cc.betLevel = "1k" : 3 == this.roomNumber && (cc.betLevel = "10k");
this.updateJackpot();
}
},
eventSelectLines: function() {
this._isFreeTrial ? this.addNotice(r.getString("noti_not_trial")) : this.isSpin || this.isAuto || this.isFast ? this.addNotice(r.getString("noti_is_playing")) : this.selectLines.eventOpen();
},
checkEnoughMoney: function() {
var t = 25 * this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 1:
t = 13 * this.getMoneyInRoom();
break;

case 2:
t = 12 * this.getMoneyInRoom();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t = this.getMoneyInRoom() * e.length;
}
return !(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) < t);
},
autoQuay: function() {
if (this._isFreeTrial) this.freeSpin > 0 && this.eventQuay(); else if (this.freeSpin < 1) {
if (this.isAuto) {
var t = new SinbadRequest.AutoPlayRequest();
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
mm.Toast.showToast(1, r.getString("noti_not_money"));
return;
}
SmartFoxSDK.SinbadController.ZoneInstance.send(t.toSRequest());
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - this.getTotalBet());
}
} else this.eventQuay();
},
getTotalBet: function() {
var t = this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 0:
return this.selectLines.getTotalLine() * t;

case 1:
return this.selectLines.getTotalLineLe() * t;

case 2:
return this.selectLines.getTotalLineChan() * t;

case 3:
return this.selectLines.getTotalLineSelect() * t;
}
return t;
},
setLinesBet: function(t) {
switch (this.selectLines.typeLine) {
case 1:
t.setLineLe();
break;

case 2:
t.setLineChan();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t.setLine(e);
}
},
eventQuay: function() {
if (this._isFreeTrial || this.checkEnoughMoney()) {
this.pauseSystemEventNode(this.btnQuay, !0);
this.runQuay();
} else mm.Toast.showToast(1, r.getString("noti_not_money"));
},
pauseSystemEventNode: function(t, e) {
n.setMaterialGray(t.getComponent(cc.Sprite), e);
e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
},
eventBack: function() {
this.isSpin || this.isAuto || this.isFast ? this.addNotice(r.getString("noti_is_playing")) : UIManger.show("UISinbadLobby", {
pop: !0,
src: "sinbad"
});
},
eventSetting: function() {
this.menuSetting.active = !this.menuSetting.active;
},
eventVinhDanh: function() {
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.SinbadController.ZoneInstance.send(t.toSRequest());
},
eventLichSuGiaoDich: function() {
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.SinbadController.ZoneInstance.send(t.toSRequest());
},
eventBangThuong: function() {
this.bgBangThuong.active = !0;
},
eventCloseBangThuong: function() {
this.bgBangThuong.active = !1;
},
SinbadRun: function(t) {
this.showLineWin(!1);
var e = this, i = this.getDataResult(t.result);
Promise.all(i.map(function(t, i) {
Promise.all(t.map(function(t, n) {
e.reels[i].icons[n].setIcon(t, !0);
}));
}));
this.lineWin = t.lineWin;
this.winMoney = t.winMoney;
this.freeGift = t.freeGift;
this.isBonus = t.isBonus;
this.isFree = t.isFreeSpin;
this.session = t.session;
this.isNoHu = t.isNohu;
this.isThangLon = t.isThangLon;
this.freeSpin = t.freeSpin;
this.type = t.type;
this.runReels();
t.isFreeSpin || this.WinGame.updateFreeSpin();
this._isFreeTrial ? this.lbSession.string = "#" + this._mySession : this.lbSession.string = "#" + this.session;
},
initRandomItems: function(t) {
for (var e = [], i = 0; i < t; i++) e[i] = this.random();
return e;
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this._TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this._TotalColumn].push(t[n]);
for (var s = 0; s < this._TotalColumn; s++) {
var o = this.initRandomItems(this.TotalItemRun - 6);
e[s] = e[s].concat(o);
}
for (var a = 0; a < this.lastResult.length; a++) e[a % this._TotalColumn].push(this.lastResult[a]);
this.lastResult = t;
return e;
},
reformatResult: function(t, e) {
for (var i = [], n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
return i;
},
runActionWon: function() {
this.showLineWin(!0);
this.WinGame.runWinGame();
this.pauseSystemEventNode(this.btnQuay, !1);
},
resume: function() {
this.winMoney > 0 ? setTimeout(function() {
this.WinGame.runWinGame();
}.bind(this), 300) : this.WinGame.runWinGame();
},
setEventMainLine: function(t) {
Promise.all(this.listMainLines.children.map(function(e) {
t ? e.pauseSystemEvents(!0) : e.resumeSystemEvents(!0);
}));
},
showLineWin: function(t) {
var e = this;
if (t) {
this.setEventMainLine(t);
this.totalLineWin = this.lineWin.length;
this.posLineWin = 0;
if (this.totalLineWin > 0) {
Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("SinbadMainLine").onEf();
}));
this.scheduleOnce(function() {
Promise.all(e.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("SinbadMainLine").offEf();
}));
e.schedule(this.showMainLine, 1);
}, 2);
}
} else {
this.unschedule(this.showMainLine);
this.lineWin && this.lineWin.length > 0 && Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("SinbadMainLine").offhover();
e.listMainLines.children[t].pauseSystemEvents(!0);
}));
}
},
showMainLine: function() {
if (this.lineWin.length > 0) {
null != this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("SinbadMainLine").offEf();
this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
null != this.listMainLines.children[this.lineWin[this.posLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("SinbadMainLine").onEf();
}
},
runReels: function() {
Promise.all(this.reels.map(function(t, e) {
t.spin(e);
}));
},
copy: function() {
Promise.all(this.reels.map(function(t) {
t.icons[t.icons.length - 1].setIcon(t.icons[2].data);
t.icons[t.icons.length - 2].setIcon(t.icons[1].data);
t.icons[t.icons.length - 3].setIcon(t.icons[0].data);
}));
},
random: function() {
return ~~(Math.random() * this.totalSymbol);
},
getMoneyInRoom: function() {
return 10 * Math.pow(10, this.roomNumber);
},
checkHasMoney: function() {
return !0;
},
addNotice: function(t) {
var e = this;
this.noticeNode.active = !0;
this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = t;
setTimeout(function() {
e.noticeNode.active = !1;
}, 1200);
}
});
cc._RF.pop();
}, {
Helper: "Helper",
SinbadLine: "SinbadLine",
SinbadReel: "SinbadReel",
SinbadWinGame: "SinbadWinGame",
TrialResult: "TrialResult",
UtilsUI: "UtilsUI",
sinbadLanguage: "sinbadLanguage"
} ],
UISplash: [ function(t, e) {
"use strict";
cc._RF.push(e, "63fe0aI/sFDUpVbzTV9FG4l", "UISplash");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
hoiXoayDapXoay: cc.Node,
progressBar: cc.ProgressBar,
lb_loading: cc.Label
},
onLoad: function() {
this.progressBar.progress = 0;
if (cc.sys.isNative) if (cc.isValid(this.hoiXoayDapXoay)) {
var t = this;
this.hoiXoayDapXoay.getComponent("HoiXoayServer").hotUpdate(function() {
t.scheduleOnce(t.initGame, 0);
});
} else this.scheduleOnce(this.initGame, 0); else this.scheduleOnce(this.initGame, 0);
},
initGame: function() {
this.show("UIPortal", {
pop: !0
});
}
});
cc._RF.pop();
}, {} ],
UITaiXiuDuaTop: [ function(t, e) {
"use strict";
cc._RF.push(e, "4808cF0F4ZKL7GtszlZ74j6", "UITaiXiuDuaTop");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
theLeContent: cc.Node,
lbTheLeContent: cc.Label,
rankContent: cc.Node,
lbTime: cc.Label,
lbAccount: cc.Label,
lbValue: cc.Label,
lbVinhDanh: cc.Label,
lbLichSu: cc.Label,
listview: i,
listBgLeft: [ cc.SpriteFrame ],
listBgTop: [ cc.SpriteFrame ],
listTabLef: [ cc.Sprite ],
listTabTop: [ cc.Sprite ],
_tabLeft: 0,
_tabTop: "TheLe",
_listTheLe: []
},
onLoad: function() {
this._listTheLe = [ "Thể lệ đua top Tài Xỉu:\nHàng ngày, hệ thống sẽ lọc ra 50 người chơi có số tiền cược tổng các phiên tài xỉu cao nhất trong ngày để trao thưởng.\nLưu ý: Chỉ ghi nhận tiền cược sau khi được cân cửa, phần tiền trả lại sẽ không được tính.\nThời gian trao thưởng: 00h01 ngày hôm sau\nCách thức nhận thưởng: Hệ thống tự động cộng vào tài khoản người chơi", "Khi thắng game, người chơi muốn tán lộc cho anh em chơi cùng có thể vào chức năng tán lộc để chuyển tiền vào quỹ lộc. \nMột lần tối đa 10 triệu Coin\nKhông giới hạn số lần tán lộc", "Người chơi khi hết tiền có thể vào chức năng rút lộc để nhận lộc từ người chơi khác.\nGiới hạn 10 phút 1 lần\nChỉ những user đã từng tiêu tiền mới được rút lộc\n1 lần rút lộc tương đương ngẫu nhiên 1-10% giá trị quỹ" ];
},
onEnable: function() {
this._tabLeft = 0;
this._tabTop = this._data;
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
this.requestData();
this.setUITab();
},
setUITab: function() {
var t = this;
Promise.all(this.listTabLef.map(function(e, i) {
t._tabLeft == i ? e.spriteFrame = t.listBgLeft[1] : e.spriteFrame = t.listBgLeft[0];
}));
Promise.all(this.listTabTop.map(function(e) {
e.node.name == t._tabTop ? e.spriteFrame = t.listBgTop[1] : e.spriteFrame = t.listBgTop[0];
}));
},
requestData: function() {
switch (this._tabTop) {
case "TheLe":
this.theLeContent.active = !0;
this.rankContent.active = !1;
0 == this._tabLeft ? this.setTextDuaTop() : this.setTextTanRut();
this.lbTheLeContent.string = this._listTheLe[this._tabLeft];
break;

case "VinhDanh":
this.lbTime.string = "STT";
this.lbAccount.string = "TÊN TÀI KHOẢN";
this.lbValue.string = "TRỊ GIÁ";
this.theLeContent.active = !1;
this.rankContent.active = !0;
switch (this._tabLeft) {
case 0:
this.setTextDuaTop();
mm.Loading.show();
var t = new TaiXiuRequest.TopBetRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(t.toSRequest());
break;

case 1:
this.setTextTanRut();
mm.Loading.show();
var e = new TaiXiuRequest.RankTanLocRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(e.toSRequest());
break;

case 2:
this.setTextTanRut();
mm.Loading.show();
var i = new TaiXiuRequest.RankRutLocRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(i.toSRequest());
}
break;

case "LichSu":
this.theLeContent.active = !1;
this.rankContent.active = !0;
this.lbTime.string = "THỜI GIAN";
this.lbAccount.string = "TÊN TÀI KHOẢN";
this.lbValue.string = "TRỊ GIÁ";
switch (this._tabLeft) {
case 0:
this.setTextDuaTop();
this.lbAccount.string = "TÊN TÀI KHOẢN";
this.lbValue.string = "PHẦN THƯỞNG";
this.lbTime.string = "STT";
mm.Loading.show();
var n = new TaiXiuRequest.TopRewardResRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(n.toSRequest());
break;

case 1:
this.setTextTanRut();
mm.Loading.show();
var s = new TaiXiuRequest.HistoryTanLocRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(s.toSRequest());
this.rankContent.active = !0;
break;

case 2:
this.setTextTanRut();
mm.Loading.show();
var o = new TaiXiuRequest.HistoryRutLocRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(o.toSRequest());
this.rankContent.active = !0;
}
}
},
setTextTanRut: function() {
this.lbVinhDanh.string = "VINH DANH";
this.lbLichSu.string = "LỊCH SỬ";
},
setTextDuaTop: function() {
this.lbVinhDanh.string = "TOP CƯỢC";
this.lbLichSu.string = "THƯỞNG TOP";
},
updateDataList: function(t) {
this.listRank = this.removeChimmoi(t);
this.listview.numItems = this.listRank.length;
mm.Loading.hide();
},
removeChimmoi: function(t) {
var e = [];
if (t.length > 0) for (var i = "number" == typeof t[0].time, n = 1, s = 0; s < t.length; s++) if (t[s].account.indexOf("chimmoi") < 0) {
e.push(t[s]);
i && (t[s].time = n++);
}
return e;
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
},
eventTabLeft: function(t, e) {
this._tabLeft = parseInt(e);
this.requestData();
this.setUITab();
},
eventTheLe: function() {
this._tabTop = "TheLe";
this.requestData();
this.setUITab();
},
eventRank: function() {
this._tabTop = "VinhDanh";
this.requestData();
this.setUITab();
},
eventHistory: function() {
this._tabTop = "LichSu";
this.requestData();
this.setUITab();
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UITaiXiuHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "88a8apaHLJPbJhUVAyFSPIk", "UITaiXiuHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
}
});
cc._RF.pop();
}, {} ],
UITaiXiuRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "cfdf1heouZIur8R+1seb+OH", "UITaiXiuRank");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(t.toSRequest());
},
updateData: function(t) {
mm.Loading.hide();
this.listRank = t;
this.listview.numItems = this.listRank.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UITaiXiuSessionDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "7e065/by1RDmqfIDXx/zqas", "UITaiXiuSessionDetail");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbPhien: cc.Label,
lbNgay: cc.Label,
taiWin: cc.Node,
xiuWin: cc.Node,
lightWin: cc.Node,
lbResult: cc.Label,
listDice: [ cc.SpriteFrame ],
listDiceResultNode: [ cc.Sprite ],
lbTaiTongDat: cc.Label,
lbXiuTongDat: cc.Label,
listTai: i,
listXiu: i,
txCurrentSession: 0
},
onEnable: function() {
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
this.txCurrentSession = this._data;
this.getDataSession();
},
init: function(t) {
var e = this;
this.lbPhien.string = "#" + this.txCurrentSession;
this.lbTaiTongDat.string = Utils.addDotToNumber(t.totalTai);
this.lbXiuTongDat.string = Utils.addDotToNumber(t.totalXiu);
var i = 0;
Promise.all(this.listDiceResultNode.map(function(n, s) {
n.spriteFrame = e.listDice[t.dices[s] - 1];
i += t.dices[s];
})).then(function() {
e.lbResult.string = " =" + i + " ";
e.lightWin.position = i <= 10 ? e.xiuWin.position : e.taiWin.position;
var t = cc.fadeOut(.1), n = cc.fadeIn(.1);
e.lightWin.active = !0;
e.lightWin.runAction(cc.repeatForever(cc.sequence(t, n)));
});
this.arrUserBetTai = t.arrUserBetTai;
this.listTai.numItems = this.arrUserBetTai.length;
this.arrUserBetXiu = t.arrUserBetXiu;
this.listXiu.numItems = this.arrUserBetXiu.length;
var n = null;
t.arrUserBetXiu.length > 0 ? n = t.arrUserBetXiu[0] : t.arrUserBetTai.length > 0 && (n = t.arrUserBetTai[0]);
if (null != n) {
var s = n.time.split(" ")[0].split("-");
this.lbNgay.string = s[2] + "/" + s[1] + "/" + s[0];
}
mm.Loading.hide();
},
onDisable: function() {
this.lightWin.stopAllActions();
},
eventClose: function() {
this.back();
},
onListRenderTai: function(t, e) {
var i = this.arrUserBetTai[e];
t.getComponent("TXSessionDetail").init(i, e);
},
onListRenderXiu: function(t, e) {
var i = this.arrUserBetXiu[e];
t.getComponent("TXSessionDetail").init(i, e);
},
eventBackSession: function() {
this.txCurrentSession = parseInt(this.txCurrentSession) - 1;
this.getDataSession();
},
eventNextSession: function() {
this.txCurrentSession = parseInt(this.txCurrentSession) + 1;
this.getDataSession();
},
getDataSession: function() {
mm.Loading.show();
var t = new TaiXiuRequest.SessionDetailRequest();
t.setSessionId(parseInt(this.txCurrentSession));
SmartFoxSDK.TaiXiuController.ZoneInstance.send(t.toSRequest());
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UITaiXiuSoiCau: [ function(t, e) {
"use strict";
cc._RF.push(e, "32d33URebVHxqrvT4tzjP6Q", "UITaiXiuSoiCau");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
totalTai: cc.Label,
totalXiu: cc.Label,
cauTai: cc.SpriteFrame,
cauXiu: cc.SpriteFrame,
listviewCau1: i,
listviewCau2: i,
lineTemplate: cc.Node,
iconXX1Template: cc.Node,
iconXX2Template: cc.Node,
iconXX3Template: cc.Node,
iconTaiTemplate: cc.Node,
iconXiuTemplate: cc.Node,
xx1Draw: cc.Node,
xx2Draw: cc.Node,
xx3Draw: cc.Node,
xx123Draw: cc.Node,
btnBack: cc.Node,
btnNext: cc.Node,
soiCau1: cc.Node,
soiCau2: cc.Node,
listCau1: null,
listCau2: null,
totalTaiValue: 0,
totalXiuValue: 0,
_isDraw2: !1
},
onEnable: function() {
this._isDraw2 = !1;
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
this.drawPage2();
this.btnBack.active = !1;
this.btnNext.active = !0;
this.eventGetAllCau();
},
eventGetAllCau: function() {
var t = new TaiXiuRequest.SoiCauRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(t.toSRequest());
},
drawPage2: function() {
var t = this, e = this;
this.listCau1 = [];
this.listCau2 = [];
var i = [], n = [], s = 0;
this.totalTaiValue = 0;
this.totalXiuValue = 0;
Promise.all(this._data.map(function(t) {
s = 0;
for (var o = 0; o < t.dices.length; o++) s += t.dices[o];
if (i.length < 4) i.push(s); else {
i.push(s);
e.listCau1.push(i);
i = [];
}
if (s <= 10) {
e.totalXiuValue++;
if (n.length > 0) if (n[0] <= 10) n.push(s); else {
if (n.length < 7) e.listCau2.push(n); else for (var a = 0; a < n.length; a += 6) e.listCau2.push(n.slice(a, a + 6));
(n = []).push(s);
} else n.push(s);
} else {
e.totalTaiValue++;
if (n.length > 0) if (n[0] > 10) n.push(s); else {
if (n.length < 7) e.listCau2.push(n); else for (var c = 0; c < n.length; c += 6) e.listCau2.push(n.slice(c, c + 6));
(n = []).push(s);
} else n.push(s);
}
})).then(function() {
i.length > 0 && e.listCau1.push(i);
if (n.length < 7) e.listCau2.push(n); else for (var s = 0; s < n.length; s += 6) e.listCau2.push(n.slice(s, s + 6));
e.listviewCau1.numItems = t.listCau1.length;
e.listviewCau2.numItems = t.listCau2.length;
e.totalXiu.string = e.totalXiuValue;
e.totalTai.string = e.totalTaiValue;
e.listviewCau2.node.getComponent(cc.ScrollView).scrollToRight(1);
});
},
setAllCau: function(t) {
mm.Loading.hide();
this._data = t;
this.drawPage1();
this.drawPage2();
},
updateDataCau: function(t) {
this._data.push({
dices: t
});
this._data.shift();
this.drawPage1();
this.drawPage2();
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRenderCau1: function(t, e) {
var i = this, n = this.listCau1[e];
Promise.all(t.children.map(function(t) {
t.active = !1;
})).then(function() {
Promise.all(n.map(function(e, n) {
t.children[n].active = !0;
t.children[n].getComponent(cc.Sprite).spriteFrame = e <= 10 ? i.cauXiu : i.cauTai;
}));
});
},
onListRenderCau2: function(t, e) {
var i = this, n = this.listCau2[e];
Promise.all(t.children.map(function(t) {
t.active = !1;
})).then(function() {
Promise.all(n.map(function(e, n) {
t.children[n].active = !0;
var s = t.children[n].getChildByName("lbResult");
s.getComponent(cc.Label).string = e;
if (e < 11) {
s.color = cc.Color.BLACK;
t.children[n].getComponent(cc.Sprite).spriteFrame = i.cauXiu;
} else {
s.color = cc.Color.WHITE;
t.children[n].getComponent(cc.Sprite).spriteFrame = i.cauTai;
}
}));
});
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
},
eventShowHideCau3: function(t) {
this.xx123Draw.active = t.isChecked;
},
eventShowHideCau41: function(t) {
this.xx1Draw.active = t.isChecked;
},
eventShowHideCau42: function(t) {
this.xx2Draw.active = t.isChecked;
},
eventShowHideCau43: function(t) {
this.xx3Draw.active = t.isChecked;
},
drawPage1: function() {
this._isDraw2 = !0;
var t = this._data, e = 0;
this.xx1Draw.removeAllChildren();
this.xx2Draw.removeAllChildren();
this.xx3Draw.removeAllChildren();
this.xx123Draw.removeAllChildren();
for (var i = t.length - 1; i >= 0; i--) {
var n = t[i].dices, s = n[0] + n[1] + n[2], o = cc.v2(422 - 38 * e, 38 * (n[0] - 1) - 222), a = cc.v2(422 - 38 * e, 38 * (n[1] - 1) - 222), c = cc.v2(422 - 38 * e, 38 * (n[2] - 1) - 222), r = cc.v2(422 - 38 * e, 16 + 38 / 3 * (s - 3)), h = cc.instantiate(this.iconXX1Template);
h.parent = this.xx1Draw;
h.position = o;
var l = cc.instantiate(this.iconXX2Template);
l.parent = this.xx2Draw;
l.position = a;
var u = cc.instantiate(this.iconXX3Template);
u.parent = this.xx3Draw;
u.position = c;
var m = cc.instantiate(s >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
m.parent = this.xx123Draw;
m.position = r;
if (e > 0) {
s = (n = t[i + 1].dices)[0] + n[1] + n[2];
var d = cc.v2(422 - 38 * (e - 1), 38 * (n[0] - 1) - 222), p = cc.v2(422 - 38 * (e - 1), 38 * (n[1] - 1) - 222), g = cc.v2(422 - 38 * (e - 1), 38 * (n[2] - 1) - 222), f = cc.v2(422 - 38 * (e - 1), 16 + 38 / 3 * (s - 3)), _ = cc.instantiate(this.lineTemplate);
_.parent = this.xx1Draw;
_.width = Utils.v2Distance(o, d);
_.position = o;
_.angle = Utils.v2Degrees(o, d);
_.color = cc.Color.BLACK.fromHEX("#ed145b");
_.zIndex = 0;
(_ = cc.instantiate(this.lineTemplate)).parent = this.xx2Draw;
_.width = Utils.v2Distance(a, p);
_.position = a;
_.angle = Utils.v2Degrees(a, p);
_.color = cc.Color.BLACK.fromHEX("#598527");
_.zIndex = 0;
(_ = cc.instantiate(this.lineTemplate)).parent = this.xx3Draw;
_.width = Utils.v2Distance(c, g);
_.position = c;
_.angle = Utils.v2Degrees(c, g);
_.color = cc.Color.BLACK.fromHEX("#f06eaa");
_.zIndex = 0;
(_ = cc.instantiate(this.lineTemplate)).parent = this.xx123Draw;
_.width = Utils.v2Distance(r, f);
_.position = r;
_.angle = Utils.v2Degrees(r, f);
_.color = cc.Color.BLACK.fromHEX("#fedd99");
_.zIndex = -1;
}
e++;
}
},
eventGotoPage2: function() {
this.soiCau1.active = !1;
this.soiCau2.active = !0;
this.btnBack.active = !0;
this.btnNext.active = !1;
this._isDraw2 || this.drawPage1();
},
eventGotoPage1: function() {
this.btnBack.active = !1;
this.btnNext.active = !0;
this.soiCau1.active = !0;
this.soiCau2.active = !1;
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UITaiXiuTanLoc: [ function(t, e) {
"use strict";
cc._RF.push(e, "1daf1TMa/RH14YEUuQ9IzmW", "UITaiXiuTanLoc");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
edtTanLoc: cc.EditBox,
tanLoc: cc.Node
},
onEnable: function() {
this.edtTanLoc.string = "0";
this.tanLoc.active = !1;
if (this.node.zIndex <= cc.lastZIndex) {
cc.lastZIndex += 1;
this.node.zIndex = cc.lastZIndex;
}
},
eventClose: function() {
this.back();
},
eventBetLoc: function(t, e) {
this.edtTanLoc.string = e;
},
eventTanLoc: function() {
var t = this.edtTanLoc.string;
if ((t = parseInt(t)) > 0) {
var e = new TaiXiuRequest.TanLocRequest();
e.setChip(t);
SmartFoxSDK.TaiXiuController.ZoneInstance.send(e.toSRequest());
} else this.showToast("Tiền tán lộc phải lớn hơn 0");
},
tanLocRes: function(t) {
null == t.mesTan ? this.showToast("Tán lộc thành công.\nChúc bạn may mắn") : this.showToast(t.mesTan);
},
showToast: function(t) {
this.tanLoc.active = !0;
this.tanLoc.getChildByName("lbNoti").getComponent(cc.Label).string = t;
this.scheduleOnce(function() {
this.tanLoc.active = !1;
}, 2);
}
});
cc._RF.pop();
}, {} ],
UITaiXiuTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "02a87MT4T5N255G4NPOVlKG", "UITaiXiuTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex);
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(t.toSRequest());
},
updateData: function(t) {
mm.Loading.hide();
this.listRank = t;
this.listview.numItems = this.listRank.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t) {
if (t) {
var e = t.listItem._list;
e.node.name;
e.selectedMode;
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UITaiXiu: [ function(t, e) {
"use strict";
cc._RF.push(e, "3c82dNTzG1LeLxL3rRvmYq/", "UITaiXiu");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
TableBet: cc.Node,
TanLoc: cc.Node,
btnXinLoc: cc.Node,
rutLocInfo: cc.Node,
lbDayThang: cc.Label,
lbDayThangMax: cc.Label,
lbDayThua: cc.Label,
lbDayThuaMax: cc.Label,
DiceAnimation: cc.Animation,
D1: cc.Node,
D2: cc.Node,
D3: cc.Node,
Timer: cc.Label,
ResultNumber: cc.Node,
_time: 0,
_currentBet: 0,
_currentTypeBet: 0,
listChipBet: {
type: cc.Label,
default: []
},
listMyChipBet: {
type: cc.Label,
default: []
},
listPrepareBet: {
type: cc.Label,
default: []
},
listUsers: {
type: cc.Label,
default: []
},
CauNode: cc.Node,
imgTai: cc.Node,
imgXiu: cc.Node,
BetSelect: cc.Node,
BetOther: cc.Node,
controller: null,
nodeChat: cc.Node,
toggleChat: cc.Toggle,
listDicesNode: [ cc.SpriteFrame ],
listTaiXiuSprite: [ cc.SpriteFrame ],
notiNode: cc.Node,
toastNode: cc.Node,
timeEndNode: cc.Node,
moBatNode: cc.Node,
animUpBat: cc.Node,
quayBatNode: cc.Node,
bgSession: cc.Node,
lbSession: cc.Label,
lbTimeEnd: cc.Label,
moneyWin: cc.Node,
lbMoneyWin: cc.Label,
_isNan: !1,
_isBetTaiXiu: -1,
_totalTimeEnd: 0,
_totalDayThang: 0,
_totalDayThua: 0,
isPlayedAnimation: !1
},
onLoad: function() {
this.schedule(this.updateTimer, 1);
var t = this;
cc.game.on(cc.game.EVENT_SHOW, function() {
null != t.node && t.resumeGame();
});
this.moBatNode.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
var e = t.getDelta();
this.moBatNode.x += e.x;
this.moBatNode.y += e.y;
}, this);
},
onEnable: function() {
this.content = this.node.getChildByName("content");
this.hide3D();
this.DiceAnimation.node.active = !1;
this.TableBet.active = !1;
this.TanLoc.active = !0;
this.DiceAnimation.node.getComponent("AnimationEvent").addEventComplete(function() {
this.onCompletedAnimationDice(10);
}.bind(this));
this._isNan = !1;
this.quayBatNode.active = !1;
this.nodeChat.active = !this.toggleChat.isChecked;
if (this.node.zIndex <= cc.lastZIndex) {
cc.lastZIndex += 1;
this.node.zIndex = cc.lastZIndex;
}
cc.currentUI = "UITaiXiu";
this._totalDayThang = 0;
this._totalDayThua = 0;
this.setThangThua();
this.isPlayedAnimation = !1;
},
setThangThua: function() {
var t = this.getMaxDayThang(), e = this.getMaxDayThang();
if (this._totalDayThang > t) {
t = this._totalDayThang;
this.setMaxDayThang(t);
}
if (this._totalDayThua > e) {
e = this._totalDayThua;
this.setMaxDayThua(e);
}
this.lbDayThang.string = this._totalDayThang;
this.lbDayThangMax.string = t;
this.lbDayThua.string = this._totalDayThua;
this.lbDayThuaMax.string = e;
},
updateListChat: function(t) {
t.length > 0 && this.nodeChat.getComponent(this.nodeChat.name).initChat(t);
},
onPublicMessage: function(t) {
this.nodeChat.getComponent(this.nodeChat.name).addMessage(t);
},
resetBetTaiXiu: function() {
this._isBetTaiXiu = -1;
this.toastNode.active = !1;
this.notiNode.active = !1;
},
showGame: function(t, e) {
null != t && (this.btnXinLoc.getComponent(cc.Button).interactable = t);
this.rutLocInfo.getChildByName("lbMaxNumberTxt").getComponent(cc.Label).string = Utils.addDotToNumber(e);
},
updateDataCau: function() {
if (SmartFoxSDK.TaiXiuController.m_tableInfo) {
var t = {}, e = SmartFoxSDK.TaiXiuController.m_tableInfo.result;
cc.listCau.length > 0 ? t.sessionId = parseInt(cc.listCau[cc.listCau.length - 1].sessionId) + 1 : t.sessionId = 1;
t.point = e[0] + e[1] + e[2];
cc.listCau.push(t);
cc.listCau.shift();
}
},
updateListCau: function() {
if (SmartFoxSDK.TaiXiuController.m_tableInfo && null != this.CauNode) {
var t = cc.listCau, e = this.CauNode._children.length;
t.length > 16 && (t = t.slice(t.length - 16, t.length));
for (var i = 0; i < t.length; i++) if (i < e) {
var n = this.CauNode._children[i], s = t[i];
n.txSessionId = s.sessionId;
s.point >= 11 ? n.getComponent(cc.Sprite).spriteFrame = this.listTaiXiuSprite[0] : n.getComponent(cc.Sprite).spriteFrame = this.listTaiXiuSprite[1];
}
var o = cc.fadeOut(.2), a = cc.fadeIn(.2);
this.bgSession.runAction(cc.repeat(cc.sequence(o, a), 5));
}
},
updateSessionId: function(t) {
this.lbSession.string = "#" + (parseInt(t) + 1);
},
eventSessionDetail: function(t) {
mm.Loading.show();
UIManger.show("UITaiXiuSessionDetail", {
pop: !0,
src: "taixiu",
data: t.target.txSessionId
});
},
updateDataSessionDetail: function(t) {
var e = this.getUIFromName("UITaiXiuSessionDetail");
"UITaiXiuSessionDetail" == e.name && e.getComponent(e.name).init(t);
},
eventSoiCau: function() {
mm.Loading.show();
UIManger.show("UITaiXiuSoiCau", {
pop: !0,
src: "taixiu",
data: []
});
},
updateTaiXiuSoiCau: function(t) {
var e = this.getUIFromName("UITaiXiuSoiCau");
"UITaiXiuSoiCau" == e.name && e.getComponent(e.name).setAllCau(t);
},
onDisable: function() {
this.node.stopAllActions();
},
setPrepareBet: function(t) {
if (2 == t.length) {
if (null != this.listPrepareBet) for (var e = 0; e < this.listPrepareBet.length; e++) this.listPrepareBet[e].string = t[e];
} else console.error("Error Lenght " + t.length);
},
runEffectMoneyWin: function(t, e) {
var i = this;
this.moneyWin.active = !0;
this.moneyWin.y = 0;
this.moneyWin.opacity = 255;
this.lbMoneyWin.string = "+" + Utils.addDotToNumber(e);
var n = cc.moveTo(2, cc.v2(this.moneyWin.x, this.moneyWin.y + 100)), s = cc.fadeOut(.1);
this.moneyWin.stopAllActions();
this.moneyWin.runAction(cc.sequence(cc.delayTime(t), n, s, cc.callFunc(function() {
i.moneyWin.active = !1;
})));
this.updateChipAll(0);
},
runEffectRefundWin: function(t, e, i) {
var n = this;
this.moneyWin.active = !0;
this.moneyWin.y = 0;
this.moneyWin.opacity = 255;
this.lbMoneyWin.string = "+" + Utils.addDotToNumber(e);
var s = cc.moveTo(2, cc.v2(this.moneyWin.x, this.moneyWin.y + 100)), o = cc.fadeOut(.1);
this.moneyWin.stopAllActions();
this.moneyWin.runAction(cc.sequence(cc.delayTime(t), s, o, cc.callFunc(function() {
n.moneyWin.active = !1;
})));
this.updateChipAll(i);
},
runEffectResult: function(t) {
var e = cc.fadeOut(.1), i = cc.fadeIn(.1);
t <= 10 && this.imgXiu.runAction(cc.repeatForever(cc.sequence(e, i)));
t >= 11 && t <= 18 && this.imgTai.runAction(cc.repeatForever(cc.sequence(e, i)));
},
stopEffectResult: function() {
this.imgTai.stopAllActions();
this.imgXiu.stopAllActions();
this.DiceAnimation.node.active = !1;
this.timeEndNode.active = !1;
this.imgXiu.opacity = 255;
this.imgTai.opacity = 255;
},
eventToggleChat: function(t) {
this.nodeChat.active = !t.isChecked;
},
eventNan: function(t) {
this._isNan = !t.isChecked;
},
onCompletedAnimationDice: function(t) {
if (SmartFoxSDK.TaiXiuController.m_tableInfo.result) {
this.D1.getComponent(cc.Sprite).spriteFrame = this.listDicesNode[SmartFoxSDK.TaiXiuController.m_tableInfo.result[0] - 1];
this.D2.getComponent(cc.Sprite).spriteFrame = this.listDicesNode[SmartFoxSDK.TaiXiuController.m_tableInfo.result[1] - 1];
this.D3.getComponent(cc.Sprite).spriteFrame = this.listDicesNode[SmartFoxSDK.TaiXiuController.m_tableInfo.result[2] - 1];
if (this._isNan) {
var e = this;
this.moBatNode.position = cc.v2(4.213, -43.589);
this.moBatNode.active = !0;
var i = cc.fadeIn(.5);
this.moBatNode.opacity = 255;
this.moBatNode.runAction(cc.sequence(cc.delayTime(.2), i, cc.callFunc(function() {
e.animUpBat.active = !1;
})));
} else this.showResultTaiXiu();
this.D1.active = !0;
this.D2.active = !0;
this.D3.active = !0;
this._totalTimeEnd = t;
this.timeEndNode.active = t > 0;
this._totalTimeEnd < 10 ? this.lbTimeEnd.string = "00:0" + this._totalTimeEnd : this.lbTimeEnd.string = "00:" + this._totalTimeEnd;
}
},
showResultTaiXiu: function() {
if (SmartFoxSDK.TaiXiuController.m_tableInfo.result) {
for (var t = 0, e = 0; e < SmartFoxSDK.TaiXiuController.m_tableInfo.result.length; e++) t += SmartFoxSDK.TaiXiuController.m_tableInfo.result[e];
this.showResultNumber(t);
this.runEffectResult(t);
this.updateListCau();
this.setThangThua();
var i = this._getUIFromIndex(-1);
"UITaiXiuSoiCau" == i.name && i.getComponent("UITaiXiuSoiCau").eventGetAllCau();
SmartFoxSDK.TaiXiuController.m_tableInfo.winChip > 0 && this.runEffectMoneyWin(1, SmartFoxSDK.TaiXiuController.m_tableInfo.winChip);
}
},
updateTimer: function() {
if (null != this.Timer) {
this._time--;
if (this._time >= 0) if (this._time < 10) {
this.Timer.string = "0" + this._time;
this._time <= 5 && (this.Timer.node.color = cc.Color.RED);
} else this.Timer.string = this._time; else {
this.Timer.node.active && (this.Timer.node.active = !1);
this._totalTimeEnd--;
if (this._totalTimeEnd >= 0) {
this.timeEndNode.active = !0;
this._totalTimeEnd < 10 ? this.lbTimeEnd.string = "00:0" + this._totalTimeEnd : this.lbTimeEnd.string = "00:" + this._totalTimeEnd;
if (this._isNan && this._totalTimeEnd < 5 && this.moBatNode.active) {
this.moBatNode.active = !1;
this.showResultTaiXiu();
}
} else this.timeEndNode.active = !1;
}
null != this.controller && null != this.controller.m_tableInfo && (this.quayBatNode.active = this.controller.m_tableInfo.isBetting && this._time >= 0 && this._time <= 30);
}
},
_turnOnTime: function(t) {
if (null != this.Timer) {
this.Timer.node.active = t > 0;
this.Timer.node.color = t <= 5 ? cc.Color.RED : cc.Color.WHITE;
this._time = t;
this._time >= 0 && this._time < 10 ? this.Timer.string = "0" + this._time : this.Timer.string = this._time;
}
},
_turnOfTime: function() {
null != this.Timer && (this.Timer.node.active = !1);
},
showListChipBet: function(t) {
if (null != this.listChipBet) for (var e = 0; e < t.length; e++) this.listChipBet[e].string = Utils.addDotToNumber(t[e]);
},
updateThangThua: function(t) {
if (t > 0) if (1 == t) {
this._totalDayThang++;
this._totalDayThua = 0;
} else {
this._totalDayThang = 0;
this._totalDayThua++;
}
},
resumeGame: function() {
if (null != SmartFoxSDK.TaiXiuController.m_tableInfo) {
SmartFoxSDK.TaiXiuController.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1e3);
this._turnOfTime();
this.hideResultNumber();
this.hide3D();
this.stopEffectResult();
SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting ? this._turnOnTime(SmartFoxSDK.TaiXiuController.m_tableInfo.time) : this.cancua(SmartFoxSDK.TaiXiuController.m_tableInfo.time);
}
},
cancua: function(t) {
this._turnOnTime(t - 10);
this.scheduleOnce(function() {
if (!SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
var t = this.listChipBet[0].string, e = this.listChipBet[1].string, i = Math.min(parseFloat(t.split(".").join("")), parseFloat(e.split(".").join("")));
this.listChipBet[0].string = Utils.addDotToNumber(i);
this.listChipBet[1].string = Utils.addDotToNumber(i);
SmartFoxSDK.TaiXiuController.m_tableInfo.refundChip > 0 && this.runEffectRefundWin(1, this.controller.m_tableInfo.refundChip, this.controller.m_tableInfo.winChip);
}
}, 1.2);
t > 14 && this.showNoti(1, "Bắt đầu cân cửa");
if (t > 10) this.scheduleOnce(function() {
if (!SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
this.Timer.node.active = !1;
this.runDiceAnimation();
}
}, t - 10); else {
this.DiceAnimation.stop();
this.onCompletedAnimationDice(t);
}
},
showListMyChipBet: function(t) {
if (null != this.listMyChipBet) for (var e = 0; e < t.length; e++) this.listMyChipBet[e].string = Utils.addDotToNumber(t[e]);
},
showListUsers: function(t) {
if (null != this.listUsers) for (var e = 0; e < t.length; e++) this.listUsers[e].string = "(" + t[e] + ")";
},
showResultNumber: function(t) {
this.ResultNumber.active = !0;
this.ResultNumber.getChildByName("result").getComponent(cc.Label).string = t;
},
hideResultNumber: function() {
this.moBatNode.active = !1;
this.ResultNumber.active = !1;
},
hide3D: function() {
this.D1.active = !1;
this.D2.active = !1;
this.D3.active = !1;
},
runDiceAnimation: function() {
if (!this.isPlayedAnimation) {
this.isPlayedAnimation = !0;
this.hide3D();
this.DiceAnimation.stop();
this.DiceAnimation.node.active = !0;
this.DiceAnimation.play();
this.scheduleOnce(function() {
this.animUpBat.active = !0;
this.animUpBat.getComponent(sp.Skeleton).setAnimation(0, "Idle", !1);
}, .2);
}
},
clickBet: function(t, e) {
if (this.controller.m_tableInfo.isBetting) {
e = parseInt(e);
if (this._isBetTaiXiu >= 0 && this._isBetTaiXiu != e) this.showToast(1, "Không được phép đặt nhiều cửa"); else {
this.TableBet.active = !0;
this.TanLoc.active = !1;
this.BetSelect.active = !0;
this.BetOther.active = !1;
this._currentBet = 0;
this.showListMyChipBet(SmartFoxSDK.TaiXiuController.m_tableInfo.listMyChipPot);
this._currentTypeBet = e;
if (0 == this._currentTypeBet) {
this.listPrepareBet[0].string = "0";
this.listPrepareBet[1].string = "Đặt";
} else if (1 == this._currentTypeBet) {
this.listPrepareBet[0].string = "Đặt";
this.listPrepareBet[1].string = "0";
}
}
} else this.showToast(1, "Hết thời gian đặt cược");
},
clickHuy: function() {
this.TableBet.active = !1;
this.TanLoc.active = !0;
this.showListMyChipBet(SmartFoxSDK.TaiXiuController.m_tableInfo.listMyChipPot);
this.setPrepareBet([ "Đặt", "Đặt" ]);
},
clickDongY: function() {
if (SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) if (this._currentBet > 0) {
var t = new TaiXiuRequest.BetRequest();
t.setBetChip(this._currentBet);
t.setTypePot(this._currentTypeBet);
this._isBetTaiXiu = this._currentTypeBet;
SmartFoxSDK.TaiXiuController.ZoneInstance.send(t.toSRequest());
this.TableBet.active = !1;
this.TanLoc.active = !0;
} else this.showToast(1, "Tiền cược phải lớn hơn 0"); else this.showToast(1, "Hết thời gian đặt cược");
},
selectBet: function(t, e) {
if (GameVariables.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf) < this._currentBet + parseInt(e)) this.showToast(1, "Bạn không đủ Chip"); else if (SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
this._currentBet += parseInt(e);
this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(this._currentBet);
} else this.showToast(1, "Hết thời gian đặt cược");
},
selectBetOther: function(t, e) {
"0" != this.listPrepareBet[this._currentTypeBet].string && "Đặt" != this.listPrepareBet[this._currentTypeBet].string || (this.listPrepareBet[this._currentTypeBet].string = "");
var i = "";
if ("del" == e) {
i = (i = (i = this.listPrepareBet[this._currentTypeBet].string).split(".").join("")).substr(0, i.length - 1);
this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(i);
} else {
i = (i = this.listPrepareBet[this._currentTypeBet].string).split(".").join("");
i += e;
this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(i);
}
this._currentBet = parseInt(i);
if (this._currentBet > GameVariables.Poker.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf)) {
this.showToast(1, "Số dư không đủ");
this._currentBet = GameVariables.Poker.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf);
this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(this._currentBet);
}
},
clickOtherNumber: function() {
this.BetSelect.active = !1;
this.BetOther.active = !0;
this.listPrepareBet[this._currentTypeBet].string = "0";
},
clickExitRoom: function() {
var t = SmartFoxSDK.TaiXiuController.ZoneInstance.getRoomByName("taixiu");
if (t) {
SmartFoxSDK.TaiXiuController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t));
mm.Loading.show();
} else this.back();
},
clickHelper: function() {
this.show("UITaiXiuHelper", {
pop: !0,
src: "taixiu"
});
},
clickHistory: function() {
mm.Loading.show();
UIManger.show("UITaiXiuTransaction", {
pop: !0,
src: "taixiu",
data: {
items: []
}
});
},
updateDataHistory: function(t) {
var e = this.getUIFromName("UITaiXiuTransaction");
null != e && "UITaiXiuTransaction" == e.name && e.getComponent(e.name).updateData(t);
},
clickRank: function() {
mm.Loading.show();
UIManger.show("UITaiXiuRank", {
pop: !0,
src: "taixiu",
data: {
items: []
}
});
},
updateDataRank: function(t) {
var e = this.getUIFromName("UITaiXiuRank");
null != e && "UITaiXiuRank" == e.name && e.getComponent(e.name).updateData(t);
},
showNoti: function(t, e) {
this.notiNode.active = !0;
this.notiNode.getChildByName("lbNoti").getComponent(cc.Label).string = e;
this.scheduleOnce(function() {
this.notiNode.active = !1;
}, t);
},
showToast: function(t, e) {
this.toastNode.active = !0;
this.toastNode.getChildByName("lbNoti").getComponent(cc.Label).string = e;
this.scheduleOnce(function() {
this.toastNode.active = !1;
}, t);
},
eventAllIn: function() {
if (SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
this._currentBet = GameVariables.Poker.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf);
if (this._currentBet > 0) {
var t = this;
UIManger.show("UIDialogTwo", {
data: {
content: "Bạn có muốn đặt toàn bộ số tiền?",
cbYes: function() {
var e = new TaiXiuRequest.BetRequest();
e.setBetChip(t._currentBet);
e.setTypePot(t._currentTypeBet);
t._isBetTaiXiu = t._currentTypeBet;
SmartFoxSDK.TaiXiuController.ZoneInstance.send(e.toSRequest());
t.TableBet.active = !1;
t.TanLoc.active = !0;
t.back();
}
},
pop: !0
});
} else this.showToast(1, "Bạn không đủ Chip");
} else this.showToast(1, "Hết thời gian đặt cược");
},
eventShowDuaTop: function() {
this.show("UITaiXiuDuaTop", {
pop: !0,
src: "taixiu",
data: "TheLe"
});
},
eventXinLoc: function() {
var t = new TaiXiuRequest.RutLocRequest();
SmartFoxSDK.TaiXiuController.ZoneInstance.send(t.toSRequest());
this.btnXinLoc.getComponent(cc.Button).interactable = !1;
},
eventTanLoc: function() {
this.show("UITaiXiuTanLoc", {
pop: !0,
src: "taixiu"
});
},
eventRankTanLoc: function() {
this.show("UITaiXiuDuaTop", {
pop: !0,
src: "taixiu",
data: "VinhDanh"
});
},
eventHistoryTanLoc: function() {
this.show("UITaiXiuDuaTop", {
pop: !0,
src: "taixiu",
data: "LichSu"
});
},
getMaxDayThang: function() {
var t = cc.sys.localStorage;
null !== t.getItem("f68_day_thang_max") && void 0 !== t.getItem("f68_day_thang_max") || t.setItem("f68_day_thang_max", "0");
return parseInt(t.getItem("f68_day_thang_max"));
},
setMaxDayThang: function(t) {
localStorage.setItem("f68_day_thang_max", t);
},
getMaxDayThua: function() {
var t = cc.sys.localStorage;
null !== t.getItem("f68_day_thua_max") && void 0 !== t.getItem("f68_day_thua_max") || t.setItem("f68_day_thua_max", "0");
return parseInt(t.getItem("f68_day_thua_max"));
},
setMaxDayThua: function(t) {
localStorage.setItem("f68_day_thua_max", t);
},
showResultRutLoc: function(t) {
t.chipTan > 0 ? this.showToast(3, "Bạn đã nhận được lộc trị giá: " + Utils.addDotToNumber(t.chipTan) + "đ") : this.showToast(3, t.mesTan);
},
updateChipAll: function(t) {
SmartFoxSDK.TaiXiuController.onEventUpdateChip(t);
},
showReward: function(t) {
var e = "Bạn đã nhận được phần thường sự kiện đua TOP \n Vị trí: " + t.top + "\nPhần thưởng: " + Utils.addDotToNumber(t.reward);
UIManger.show("UIDialogOne", {
data: {
content: e,
cbYes: function() {}
},
pop: !0
});
}
});
cc._RF.pop();
}, {} ],
UITransferMoney: [ function(t, e) {
"use strict";
cc._RF.push(e, "3a937EMmSVFOKP3XluYEeEw", "UITransferMoney");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
edit_user_re: cc.EditBox,
edit_user_re_again: cc.EditBox,
edit_money: cc.EditBox,
edit_reason: cc.EditBox,
DailyCK: cc.Node
},
onEnable: function() {
this.DailyCK.getComponent(this.DailyCK.name).addEventSelect(function(t) {
this.updateDaiLyInfo(t.name);
}.bind(this));
this.node.zIndex <= cc.lastZIndex && (this.node.zIndex = cc.lastZIndex + 1);
},
updateDaiLyInfo: function(t) {
this.edit_user_re.string = t;
this.edit_user_re_again.string = t;
},
clickTransferMoney: function() {
mm.audio.playButton();
if ("" != this.edit_user_re.string) if ("" != this.edit_money.string) if (parseInt(this.edit_money.string) < 1e4) mm.Toast.showToast(1, "Tiền phải lớn hơn 10.000"); else {
var t = new CasinoRequest.TransferMoneyRequest();
t.setMoneyTransfer(parseInt(this.edit_money.string));
t.setUserRecived(this.edit_user_re.string);
SmartFoxSDK.PortalController.ZoneInstance.send(t.toSRequest());
mm.Loading.show();
} else mm.Toast.showToast(1, "Tiền không được trống"); else mm.Toast.showToast(1, "Tên người nhận không được trống");
},
updateListAgency: function(t) {
this.DailyCK.getComponent(this.DailyCK.name).updateItems(t);
}
});
cc._RF.pop();
}, {} ],
UIVampireBonus: [ function(t, e) {
"use strict";
cc._RF.push(e, "57a06mQcIpGQaAVDCSxZ5Dg", "UIVampireBonus");
var i = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbTime: cc.Label,
lbLuotBoc: cc.Label,
lbMoneyWin: cc.Label,
lbTotalWin: cc.Label,
resultWin: cc.Node,
totalSelect: 0,
totalTime: 15
},
onEnable: function() {
this.totalTime = 30;
this.resultWin.active = !1;
this.totalSelect = this._data.length;
this.lbLuotBoc.string = this.totalSelect;
this.lbTime.string = this.totalTime;
this.schedule(this.countTime, 1);
},
countTime: function() {
this.totalTime--;
if (this.totalTime < 1) {
this.unschedule(this.countTime);
this.eventClose();
}
this.lbTime.string = this.totalTime;
},
showMoneyWin: function() {
for (var t = 0, e = 0; e < this._data.length; e++) t += this._data[e];
this.resultWin.active = !0;
i.numberTo(this.lbTotalWin, 0, t, 1200, !0);
this.scheduleOnce(function() {
this.eventClose();
}, 3);
},
eventSelect: function(t) {
var e = this;
if (this.totalSelect > 0) {
this.totalSelect--;
if (this._data[this.totalSelect] > 0) {
t.target.getChildByName("lb_money").active = !0;
t.target.getChildByName("Vampire-BonusGame-1-1").getComponent(sp.Skeleton).setAnimation(0, "Attack", !1);
t.target.getChildByName("Vampire-BonusGame-1-1").getComponent(sp.Skeleton).setCompleteListener(function() {
i.numberTo(t.target.getChildByName("lb_money").getComponent(cc.Label), 0, e._data[e.totalSelect], 1200, !0);
});
}
for (var n = 0, s = this._data.length - 1; s > this.totalSelect; s--) n += this._data[s];
i.numberTo(this.lbMoneyWin, 0, n, 1200, !0);
this.lbLuotBoc.string = this.totalSelect;
0 == this.totalSelect && this.showMoneyWin();
}
},
eventClose: function() {
this.back();
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
UIVampireHistoryDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "73ceeniwy9EQ7w7NPmsRltV", "UIVampireHistoryDetail");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listItem: cc.Node,
lbSession: cc.Label,
lbMoneyWin: cc.Label
},
onEnable: function() {
var t = this._data.resultMap;
this.lbSession.string = "#" + this._data.session;
this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
Promise.all(this.listItem.children.map(function(e, i) {
e.getComponent("VampireItem").setIcon(t[i]);
}));
}
});
cc._RF.pop();
}, {} ],
UIVampireHistoryTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "dec891DBAVHNKiIi/fo7/XM", "UIVampireHistoryTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
if (this._data && this._data.items) {
this.listTransaction = this._data.items;
this.listview.numItems = this.listTransaction.length;
}
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listTransaction[e];
t.getComponent(t.name).init(e, i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIVampireLobby: [ function(t, e) {
"use strict";
cc._RF.push(e, "5c6c3SXQsBIFohKdPuKuB7m", "UIVampireLobby");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
arr_lb_hu: {
type: cc.Label,
default: []
}
},
onLoad: function() {
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
updateJackpot: function() {
for (var t = [ "vampire1l", "vampire1k", "vampire10k" ], e = 0; e < t.length; e++) if (SmartFoxSDK.VampireController.ZoneInstance.mySelf) {
var i = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(t[e]);
if (i) {
var n = i.value, s = this.arr_lb_hu[e], o = s.string;
o = o.split(".").join("");
var a = parseFloat(o);
Utils.numberTo(s, a, n, 1e3, !0);
}
}
},
eventPlayGame: function(t, e) {
cc.betLevel = e;
mm.Loading.show();
this.show("UIVampire", {
pop: !0,
src: "vampire"
});
},
eventSetting: function() {},
back: function() {
var t = SmartFoxSDK.VampireController.ZoneInstance.getRoomByName("vampire");
t ? SmartFoxSDK.VampireController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t)) : this.show("UIHome");
},
updateUserVariable: function() {}
});
cc._RF.pop();
}, {} ],
UIVampireRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "d1f24jPKQBLV61BryLaP0+J", "UIVampireRank");
var i = t("Listview"), n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
allRank: cc.Sprite,
allHu: cc.Sprite,
listRank: [],
listHu: []
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(e, i);
},
eventClose: function() {
this.back();
},
eventAllRank: function() {
n.setMaterialGray(this.allRank, !1);
n.setMaterialGray(this.allHu, !0);
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
eventHu: function() {
n.setMaterialGray(this.allRank, !0);
n.setMaterialGray(this.allHu, !1);
if (this._data && this._data.items) {
this.listHu = [];
this.listview.numItems = this.listHu.length;
}
}
});
cc._RF.pop();
}, {
Helper: "Helper",
Listview: "Listview"
} ],
UIVampire: [ function(t, e) {
"use strict";
cc._RF.push(e, "7de3eA7U7hPfoKuuY4sIL9i", "UIVampire");
var i = t("VampireWinGame"), n = t("Helper"), s = t("VampireReel"), o = t("VampireLine"), a = t("TrialResult"), c = t("vampireLanguage"), r = cc.Enum({
"1l": 1,
"1k": 2,
"10k": 3
});
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: s
},
iconPrefab: cc.Prefab,
noticeNode: cc.Node,
bgBangThuong: cc.Node,
btnQuay: cc.Node,
btnQuayNhanh: cc.Node,
btnStopQuay: cc.Node,
btnAutoQuay: cc.Node,
lbNumberLine: cc.Label,
lbNumberStake: cc.Label,
lbMoneyWin: cc.Label,
lbSession: cc.Label,
selectLines: o,
WinGame: i,
listMainLines: cc.Node,
isAuto: !1,
isFast: !1,
isSpin: !1,
isFreeSpin: !1,
red: !0,
lastResult: [],
betSelect: 0,
roomNumber: 0,
posLineWin: 0,
totalLineWin: 0,
_TotalColumn: 5,
lb_phong: cc.Label,
lb_sodu: cc.Label,
lb_hu: cc.Label,
toggleMusic: cc.Toggle,
toggleSound: cc.Toggle,
bgSound: cc.AudioClip,
soundSpinMis: cc.AudioClip,
soundSpinWin: cc.AudioClip,
soundBigWin: cc.AudioClip,
soundJackpot: cc.AudioClip,
soundBonus: cc.AudioClip,
soundClick: cc.AudioClip,
soundSpin: cc.AudioClip,
menuSetting: cc.Node,
_keyMusic: "music_kc",
_keySound: "sound_kc",
_musicSlotState: 0,
_soundSlotState: 0,
_isFreeTrial: !1,
_myMoneyTrial: 0,
_mySession: 0
},
onLoad: function() {
this._TotalColumn = 5;
this.TotalItemRun = 20;
this.totalSymbol = 7;
this.winMoney = 0;
this.freeSpin = 0;
this.init();
this.roomNumber = r["1l"];
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf));
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
this.initSound();
},
initSound: function() {
var t = cc.sys.localStorage.getItem(this._keyMusic);
if (null != t) this._musicSlotState = parseInt(t); else {
this._musicSlotState = 1;
cc.sys.localStorage.setItem(this._keyMusic, "1");
}
var e = cc.sys.localStorage.getItem(this._keySound);
if (null != e) this._soundSlotState = parseInt(e); else {
this._soundSlotState = 1;
cc.sys.localStorage.setItem(this._keySound, "1");
}
null == this.bgSound || this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : this.musicId = cc.audioEngine.play(this.bgSound, !0, 1);
},
onDisable: function() {
cc.audioEngine.pause(this.musicId);
},
eventMusic: function() {
this._musicSlotState = this.toggleSound.isChecked ? 0 : 1;
this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : cc.audioEngine.resume(this.musicId);
cc.sys.localStorage.setItem(this._keyMusic, this._musicSlotState);
},
eventSound: function() {
this._soundSlotState = this.toggleSound.isChecked ? 0 : 1;
cc.sys.localStorage.setItem(this._keySound, this._soundSlotState);
},
playSpin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpin, !1, 1);
},
playSpinMis: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinMis, !1, 1);
},
playSpinWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinWin, !1, 1);
},
playBigWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBigWin, !1, 1);
},
playJackpot: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundJackpot, !1, 1);
},
playBonus: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBonus, !1, 1);
},
playClick: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundClick, !1, 1);
},
updateJackpot: function() {
var t = "vampire" + cc.betLevel;
if (SmartFoxSDK.VampireController.ZoneInstance.mySelf && SmartFoxSDK.VampireController.ZoneInstance.mySelf) {
var e = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(t);
if (e) {
var i = e.value, n = this.lb_hu.string;
n = n.split(".").join("");
var s = parseFloat(n);
Utils.numberTo(this.lb_hu, s, i, 1e3, !0);
}
}
},
updateUserVariableSlot: function(t) {
var e = "fsvampire" + cc.betLevel;
if (t.changedVars.indexOf(e) >= 0 && t.user.isItMe) {
var i = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(e).value;
this.freeSpin = i;
this.WinGame.updateFreeSpin();
}
},
updateUserVariable: function(t) {
this._isFreeTrial || "" == cc.currentUI || (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - t));
},
onEnable: function() {
mm.audio.pauseMusic();
if ("choithu" == cc.betLevel) {
this._isFreeTrial = !0;
this._myMoneyTrial = 5e7;
this.lb_sodu.string = Utils.addDotToNumber(5e7);
this._mySession = 0;
this.lbSession.string = "#" + this._mySession;
} else {
this._myMoneyTrial = 0;
this._isFreeTrial = !1;
}
this.roomNumber = r[cc.betLevel];
void 0 === this.roomNumber && (cc.betLevel = "1l");
this.roomNumber = r[cc.betLevel];
this.roomNumber = this.roomNumber % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
this.selectLines.init(this);
this.WinGame.init(this);
this.lbMoneyWin.string = "0";
this.showLineWin(!1);
mm.Loading.hide();
},
init: function() {
var t = this, e = [], i = [], n = [];
Promise.all(this.reels.map(function(s) {
var o;
o = t.initRandomItems(t.TotalItemRun);
e.push(o[o.length - 1]);
i.push(o[o.length - 2]);
n.push(o[o.length - 3]);
s.init(t, o);
})).then(function() {
t.lastResult = n.concat(i).concat(e);
});
},
setNumberLines: function(t) {
this.lbNumberLine.string = t;
},
setNumberStake: function(t) {
this.lbNumberStake.string = n.numberWithCommas(t * this.getMoneyInRoom());
},
setMoneyWin: function(t) {
n.numberTo(this.lbMoneyWin, parseInt(this.lbMoneyWin.string), t, 1200, !0);
if (this._isFreeTrial) {
this._myMoneyTrial = this._myMoneyTrial + this.winMoney;
this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
} else this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf));
this.isSpin = !1;
},
updateDataPhong: function() {},
eventQuayNhanh: function() {
if (this._isFreeTrial) this.addNotice(c.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(c.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !0;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !0);
this.btnStopQuay.active = !0;
this.autoQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
eventAutoQuay: function() {
if (this._isFreeTrial) this.addNotice(c.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(c.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !1;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !0);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
this.btnStopQuay.active = !0;
this.autoQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
runQuay: function() {
if (this._isFreeTrial) {
this.isSpin = !0;
this._myMoneyTrial = this._myMoneyTrial - this.getTotalBet();
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial));
this._myMoneyTrial < 1 && mm.Toast.showToast(1, c.getString("noti_not_money"));
this._mySession++;
this.VampireRun(a.getItemTrial());
this.freeSpin--;
} else {
this.playSpin();
this.isSpin = !0;
var t = new VampireRequest.BetRequest();
this.showLineWin(!1);
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
mm.Toast.showToast(1, c.getString("noti_not_money"));
return;
}
SmartFoxSDK.VampireController.ZoneInstance.send(t.toSRequest());
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - this.getTotalBet()));
}
},
eventStopQuay: function() {
this.isFast = !1;
this.isAuto = !1;
this.btnStopQuay.active = !1;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
var t = new VampireRequest.StopAutoPlayRequest();
SmartFoxSDK.VampireController.ZoneInstance.send(t.toSRequest());
},
eventPhong: function() {
if (this._isFreeTrial) this.addNotice(c.getString("noti_not_trial")); else if (this.isSpin || this.isAuto || this.isFast) this.addNotice(c.getString("noti_is_playing")); else {
this.roomNumber = (this.roomNumber + 1) % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
this.setNumberStake(this.selectLines.getTotalLineSelect());
1 == this.roomNumber ? cc.betLevel = "1l" : 2 == this.roomNumber ? cc.betLevel = "1k" : 3 == this.roomNumber && (cc.betLevel = "10k");
this.updateJackpot();
}
},
eventSelectLines: function() {
this._isFreeTrial ? this.addNotice(c.getString("noti_not_trial")) : this.isSpin || this.isAuto || this.isFast ? this.addNotice(c.getString("noti_is_playing")) : this.selectLines.eventOpen();
},
checkEnoughMoney: function() {
var t = 25 * this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 1:
t = 13 * this.getMoneyInRoom();
break;

case 2:
t = 12 * this.getMoneyInRoom();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t = this.getMoneyInRoom() * e.length;
}
return !(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) < t);
},
autoQuay: function() {
if (this._isFreeTrial) this.freeSpin > 0 && this.eventQuay(); else if (this.freeSpin < 1) {
if (this.isAuto) {
var t = new VampireRequest.AutoPlayRequest();
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
mm.Toast.showToast(1, c.getString("noti_not_money"));
return;
}
SmartFoxSDK.VampireController.ZoneInstance.send(t.toSRequest());
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - this.getTotalBet());
}
} else this.eventQuay();
},
getTotalBet: function() {
var t = this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 0:
return this.selectLines.getTotalLine() * t;

case 1:
return this.selectLines.getTotalLineLe() * t;

case 2:
return this.selectLines.getTotalLineChan() * t;

case 3:
return this.selectLines.getTotalLineSelect() * t;
}
return t;
},
setLinesBet: function(t) {
switch (this.selectLines.typeLine) {
case 1:
t.setLineLe();
break;

case 2:
t.setLineChan();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t.setLine(e);
}
},
eventQuay: function() {
if (this._isFreeTrial || this.checkEnoughMoney()) {
this.pauseSystemEventNode(this.btnQuay, !0);
this.runQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
pauseSystemEventNode: function(t, e) {
n.setMaterialGray(t.getComponent(cc.Sprite), e);
e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
},
eventBack: function() {
this.isSpin || this.isAuto || this.isFast ? this.addNotice(c.getString("noti_is_playing")) : UIManger.show("UIVampireLobby", {
pop: !0,
src: "vampire"
});
},
eventSetting: function() {
this.menuSetting.active = !this.menuSetting.active;
},
eventVinhDanh: function() {
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.VampireController.ZoneInstance.send(t.toSRequest());
},
eventLichSuGiaoDich: function() {
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.VampireController.ZoneInstance.send(t.toSRequest());
},
eventBangThuong: function() {
this.bgBangThuong.active = !0;
},
eventCloseBangThuong: function() {
this.bgBangThuong.active = !1;
},
VampireRun: function(t) {
this.showLineWin(!1);
var e = this, i = this.getDataResult(t.result);
Promise.all(i.map(function(t, i) {
Promise.all(t.map(function(t, n) {
e.reels[i].icons[n].setIcon(t, !0);
}));
}));
this.lineWin = t.lineWin;
this.winMoney = t.winMoney;
this.freeGift = t.freeGift;
this.isBonus = t.isBonus;
this.isFree = t.isFreeSpin;
this.session = t.session;
this.isNoHu = t.isNohu;
this.isThangLon = t.isThangLon;
this.freeSpin = t.freeSpin;
this.type = t.type;
this.runReels();
t.isFreeSpin || this.WinGame.updateFreeSpin();
this._isFreeTrial ? this.lbSession.string = "#" + this._mySession : this.lbSession.string = "#" + this.session;
},
initRandomItems: function(t) {
for (var e = [], i = 0; i < t; i++) e[i] = this.random();
return e;
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this._TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this._TotalColumn].push(t[n]);
for (var s = 0; s < this._TotalColumn; s++) {
var o = this.initRandomItems(this.TotalItemRun - 6);
e[s] = e[s].concat(o);
}
for (var a = 0; a < this.lastResult.length; a++) e[a % this._TotalColumn].push(this.lastResult[a]);
this.lastResult = t;
return e;
},
reformatResult: function(t, e) {
for (var i = [], n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
return i;
},
runActionWon: function() {
this.showLineWin(!0);
this.WinGame.runWinGame();
this.pauseSystemEventNode(this.btnQuay, !1);
},
resume: function() {
this.winMoney > 0 ? setTimeout(function() {
this.WinGame.runWinGame();
}.bind(this), 300) : this.WinGame.runWinGame();
},
setEventMainLine: function(t) {
Promise.all(this.listMainLines.children.map(function(e) {
t ? e.pauseSystemEvents(!0) : e.resumeSystemEvents(!0);
}));
},
showLineWin: function(t) {
var e = this;
if (t) {
this.setEventMainLine(t);
this.totalLineWin = this.lineWin.length;
this.posLineWin = 0;
if (this.totalLineWin > 0) {
Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("VampireMainLine").onEf();
}));
this.scheduleOnce(function() {
Promise.all(e.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("VampireMainLine").offEf();
}));
e.schedule(this.showMainLine, 1);
}, 2);
}
} else {
this.unschedule(this.showMainLine);
this.lineWin && this.lineWin.length > 0 && Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("VampireMainLine").offhover();
e.listMainLines.children[t].pauseSystemEvents(!0);
}));
}
},
showMainLine: function() {
if (this.lineWin.length > 0) {
null != this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("VampireMainLine").offEf();
this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
null != this.listMainLines.children[this.lineWin[this.posLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("VampireMainLine").onEf();
}
},
runReels: function() {
Promise.all(this.reels.map(function(t, e) {
t.spin(e);
}));
},
copy: function() {
Promise.all(this.reels.map(function(t) {
t.icons[t.icons.length - 1].setIcon(t.icons[2].data);
t.icons[t.icons.length - 2].setIcon(t.icons[1].data);
t.icons[t.icons.length - 3].setIcon(t.icons[0].data);
}));
},
random: function() {
return ~~(Math.random() * this.totalSymbol);
},
getMoneyInRoom: function() {
return 10 * Math.pow(10, this.roomNumber);
},
checkHasMoney: function() {
return !0;
},
addNotice: function(t) {
var e = this;
this.noticeNode.active = !0;
this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = t;
setTimeout(function() {
e.noticeNode.active = !1;
}, 1200);
}
});
cc._RF.pop();
}, {
Helper: "Helper",
TrialResult: "TrialResult",
VampireLine: "VampireLine",
VampireReel: "VampireReel",
VampireWinGame: "VampireWinGame",
vampireLanguage: "vampireLanguage"
} ],
UIXocDiaHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "952eesdz9BDxZsNeGcLh/i1", "UIXocDiaHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {},
eventClose: function() {
mm.audio.playButton();
this.back();
}
});
cc._RF.pop();
}, {} ],
UIXocDiaRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "a4ddcqvLqVM657uunwm0gwG", "UIXocDiaRank");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
mm.Loading.hide();
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(i, e);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
},
eventHistoryWin: function() {
mm.audio.playButton();
},
eventAll: function() {
mm.audio.playButton();
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIXocDiaSoiCau: [ function(t, e) {
"use strict";
cc._RF.push(e, "45cb2a+6MRD9q9mtU7iInxH", "UIXocDiaSoiCau");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
MaxRow: 5
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onEnable: function() {
mm.Loading.hide();
this._reformatDataCau();
this.listview.numItems = this.listCau.length;
this.listview.node.getComponent(cc.ScrollView).scrollToRight(1);
},
_reformatDataCau: function() {
this.listCau = [];
var t = [], e = !0;
e = this._data[0] % 2 == 0;
t.push(this._data[0]);
for (var i = 1; i < this._data.length; i++) if (e) if (e = this._data[i] % 2 == 0) t.push(this._data[i]); else {
if (t.length <= this.MaxRow) this.listCau.push(t); else {
for (var n = Math.ceil(t.length / this.MaxRow), s = 0; s < n; s++) this.listCau.push(t.slice(s * this.MaxRow, (s + 1) * this.MaxRow));
t.length > n * this.MaxRow && this.listCau.push(t.slice(n * this.MaxRow, t.length));
}
(t = []).push(this._data[i]);
} else if (e = this._data[i] % 2 == 0) {
if (t.length <= this.MaxRow) this.listCau.push(t); else {
for (var o = Math.ceil(t.length / this.MaxRow), a = 0; a < o; a++) this.listCau.push(t.slice(a * this.MaxRow, (a + 1) * this.MaxRow));
t.length > o * this.MaxRow && this.listCau.push(t.slice(o * this.MaxRow, t.length));
}
(t = []).push(this._data[i]);
} else t.push(this._data[i]);
if (t.length <= this.MaxRow) this.listCau.push(t); else {
for (var c = Math.ceil(t.length / this.MaxRow), r = 0; r < c; r++) this.listCau.push(t.slice(r * this.MaxRow, (r + 1) * this.MaxRow));
t.length > c * this.MaxRow && this.listCau.push(t.slice(c * this.MaxRow, t.length));
}
},
onListRender: function(t, e) {
var i = this.listCau[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIXocDiaTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "d6386qfl9lItLDf/mWiMEbf", "UIXocDiaTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
mm.Loading.hide();
this.listTrans = this._data.items;
this.listview.numItems = this.listTrans.length;
},
eventClose: function() {
mm.audio.playButton();
this.back();
},
onListRender: function(t, e) {
var i = this.listTrans[e];
t.getComponent(t.name).init(i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIXocDia: [ function(t, e) {
"use strict";
cc._RF.push(e, "13624LjH8lLHbXfT535k/0O", "UIXocDia");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
ChatEmojiLayer: cc.Node,
listNodeBet: {
type: cc.Node,
default: []
},
listNodePot: {
type: cc.Node,
default: []
},
_currentType: -1,
_currentBet: 5e3,
Timer: cc.Node,
XocXocBat: cc.Node,
openBat: cc.Node,
Result: cc.Node,
ChipPrefab: cc.Prefab,
POS: cc.Node,
isNan: cc.Toggle,
_currentTime: 0,
_isOpen: !1,
_TimeWaitOpenBat: 3,
_dataCau: [],
_myChipBet: [],
_isDat: !1,
_isDatLast: !1,
lb_countUser: cc.Label,
Notice: cc.Node,
ListMenu: cc.Node
},
onLoad: function() {
cc.director.getCollisionManager().enabled = !0;
this._myChipBet = [];
this._currentBet = 5e3;
this._isDat = !1;
this._isDatLast = !1;
this.poolChip = [];
this.isNan.isChecked = !1;
for (var t = 0; t < 20; t++) {
var e = cc.instantiate(this.ChipPrefab);
e.scale = .33;
this.node.addChild(e);
e.active = !1;
this.poolChip.push(e);
}
this.isFirst = !0;
this.openBat.on(cc.Node.EventType.TOUCH_MOVE, function(t) {
this.openBat.position = this.openBat.parent.convertToNodeSpaceAR(t.getLocation());
this._isOpen = !cc.Intersection.pointInPolygon(t.getLocation(), this.XocXocBat.getComponent(cc.BoxCollider).world.points);
if (this.isFirst && this._isOpen) {
this.isFirst = !1;
this.showNotice(1, "Trả thưởng!");
this._openBat(SmartFoxSDK.XocDiaController.m_tableInfo.winpot, 0, SmartFoxSDK.XocDiaController.m_tableInfo.isWin);
this.openBat.stopAllActions();
}
}, this);
cc.game.on(cc.game.EVENT_SHOW, function() {
null != this.node && SmartFoxSDK.XocDiaController.resumeGame();
}.bind(this));
},
onEnable: function() {
this._dataCau = [];
this.Notice.active = !1;
this.Timer.active = !1;
this._stopEffectWinPot();
this.XocXocBat.active = !1;
this.Result.active = !1;
this.listMyChipBet = [];
for (var t = 0; t < this.listNodePot.length; t++) this.listMyChipBet.push(this.listNodePot[t].getChildByName("mybet").getComponent(cc.Label));
this.listChipBet = [];
for (var e = 0; e < this.listNodePot.length; e++) this.listChipBet.push(this.listNodePot[e].getChildByName("pot").getComponent(cc.Label));
this.updateUserCount();
this.suggestBetChip();
},
suggestBetChip: function() {
for (var t = 0; t < this.listNodeBet.length; t++) {
this.listNodeBet[t].scale = 1;
this.listNodeBet[t].getChildByName("label").color = cc.Color.WHITE;
}
var e = 0;
this._currentBet = 5e3;
if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 5e7) {
e = this.listNodeBet.length - 1;
this._currentBet = 1e6;
} else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 1e7) {
e = this.listNodeBet.length - 2;
this._currentBet = 5e5;
} else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 5e6) {
e = this.listNodeBet.length - 3;
this._currentBet = 1e5;
} else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 1e5) {
e = this.listNodeBet.length - 4;
this._currentBet = 2e4;
} else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 5e4) {
e = this.listNodeBet.length - 5;
this._currentBet = 5e3;
}
if (e >= 0 && e < this.listNodeBet.length) {
var i = this.listNodeBet[e];
i.scale = 1.3;
i.getChildByName("label").color = cc.Color.YELLOW;
}
},
renewRound: function() {
this.isFirst = !0;
if (SmartFoxSDK.XocDiaController.m_tableInfo.isBetting) {
this.Result.active = !1;
for (var t = 0; t < this.listNodePot.length; t++) this.listNodePot[t].getChildByName("Line-1").active = !1;
}
},
updateUserCount: function() {
var t = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia").getUserList().length;
if (t > 5) {
this.POS.children[6].active = !0;
cc.isValid(this.lb_countUser) && (this.lb_countUser.string = t - 5);
} else this.POS.children[6].active = !1;
},
showNotice: function(t, e, i) {
this.Notice.active = !0;
this.Notice.stopAllActions();
var n = this;
this.Notice.getChildByName("lb_noti").getComponent(cc.Label).string = e;
this.Notice.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
n.Notice.active = !1;
i && i();
})));
},
ToastCanCua: function(t, e) {
var i = this;
this.showNotice(e, "Bắt đầu cân cửa!", function() {
SmartFoxSDK.XocDiaController.m_tableInfo.refund > 0 ? i.updateRefundChip(function() {
t && t();
}) : t && t();
});
var n = this.listChipBet[0].string, s = this.listChipBet[1].string, o = Math.min(parseFloat(n.split(".").join("")), parseFloat(s.split(".").join("")));
this.listChipBet[0].string = Utils.addDotToNumber(o);
this.listChipBet[1].string = Utils.addDotToNumber(o);
},
ToastDatCua: function(t) {
this.isFirst = !0;
this.showNotice(1, "Đặt cửa", t);
},
getChipNode: function() {
for (var t = 0; t < this.poolChip.length; t++) if (!this.poolChip[t].active) {
this.poolChip[t].active = !0;
return this.poolChip[t];
}
var e = cc.instantiate(this.ChipPrefab);
e.scale = .33;
this.node.addChild(e);
e.active = !0;
this.poolChip.push(e);
return e;
},
returnChipNode: function(t) {
t.active = !1;
},
_stopEffectWinPot: function() {
for (var t = 0; t < this.listNodePot.length; t++) this.listNodePot[t].getChildByName("Line-1").active = !1;
},
updateUserVariable: function(t) {
this.updateChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf, t);
},
showListUsers: function(t) {
for (var e = 0; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e), n = i.getChildByName("name").getComponent(cc.Label), s = i.getChildByName("money").getComponent(cc.Label), o = e >= t.length ? null : t[e];
if (o && "admin" != o.getVariable("role").value) {
i.active = !0;
i._username = o.name;
n.string = GameVariables.getDisplayName(o);
s.string = Utils.addDotToNumber(GameVariables.getChip(o));
if (o.isItMe) Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + Config.getDefaultAvatar()); else {
var a = Math.floor(9 * Math.random()) + 1;
Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + a);
}
} else {
i.active = !1;
i._username = null;
}
}
},
removeNodePlayer: function(t) {
for (var e = 0; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e);
i._username == t.name && (i.active = !1);
}
},
addNodePlayerEnterRoom: function(t) {
if (t && "admin" != t.getVariable("role").value) for (var e = 1; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e), n = i.getChildByName("name").getComponent(cc.Label), s = i.getChildByName("money").getComponent(cc.Label);
if (!i.active) {
i.active = !0;
i._username = t.name;
n.string = GameVariables.getDisplayName(t);
s.string = Utils.addDotToNumber(GameVariables.getChip(t));
if (t.isItMe) Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + Config.getDefaultAvatar()); else {
var o = Math.floor(9 * Math.random()) + 1;
Utils.loadRes(i.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + o);
}
break;
}
}
},
getPosFromName: function(t) {
for (var e = 0; e < 6; e++) {
var i = this.POS.getChildByName("pos_" + e);
if (i.active && i._username && i._username == t) return e;
}
return 6;
},
updateChip: function(t, e) {
if (t) for (var i = 0; i < 6; i++) {
var n = this.POS.getChildByName("pos_" + i), s = n.getChildByName("money").getComponent(cc.Label);
if (n.active && n._username && n._username == t.name) {
s.string = Utils.addDotToNumber(GameVariables.getChip(t) - e);
return;
}
}
},
updateRefundChip: function(t) {
if (SmartFoxSDK.XocDiaController.m_tableInfo && SmartFoxSDK.XocDiaController.m_tableInfo.refund) {
var e = SmartFoxSDK.XocDiaController.m_tableInfo.refund, i = this.POS.children[0], n = i.getChildByName("money_win");
n.getComponent(cc.Label).string = "+" + Utils.addDotToNumber(e);
n.active = !0;
var s = i.getChildByName("money").getComponent(cc.Label), o = s.string.split(".").join("");
o = parseFloat(o) + e;
s.string = Utils.addDotToNumber(o);
var a = cc.moveTo(1, cc.v2(0, 100)), c = cc.sequence(a, cc.callFunc(function() {
n.active = !1;
t && t();
}));
n.stopAllActions();
n.runAction(c);
} else t && t();
},
showResult: function() {
var t = SmartFoxSDK.XocDiaController.m_tableInfo.result;
if (t) {
this.Result.active = !0;
for (var e = 0; e < this.Result._children.length; e++) {
var i = this.Result._children[e];
0 == t[e] ? Utils.loadRes(i.getComponent(cc.Sprite), "/images/xocdia/den-result") : Utils.loadRes(i.getComponent(cc.Sprite), "/images/xocdia/trang-result");
}
}
},
xocxoc: function(t, e, i) {
var n = this;
this._stopEffectWinPot();
this._isOpen = !1;
this.openBat.active = !1;
this.XocXocBat.active = !0;
this.showNotice(1, "Mở bát!", function() {
this.XocXocBat.getComponent(sp.Skeleton).setAnimation(0, "Atack-1", !1);
this.scheduleOnce(function() {
this.XocXocBat.getComponent(sp.Skeleton).setAnimation(0, "Atack-3", !1);
this.openBat.active = !0;
this.openBat.position = cc.v2(0, 0);
this.openBat.stopAllActions();
this.showResult();
this.isNan.isChecked ? this.openBat.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(function() {
n._openBat(e, 0, i);
}))) : this.openBat.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(function() {
n._openBat(e, 0, i);
})));
}, 1.4);
}.bind(this));
},
resumeXocXoc: function(t, e, i, n) {
this._isOpen = !1;
this.openBat.active = !1;
this.XocXocBat.active = !0;
this.XocXocBat.getComponent(sp.Skeleton).setAnimation(1, "Atack-3", !0);
this.Result.active = !0;
for (var s = 0; s < this.Result._children.length; s++) {
var o = this.Result._children[s];
Utils.loadRes(o.getComponent(cc.Sprite), "/images/xocdia/" + (0 == t[s] ? "den-result" : "trang-result"));
}
this._openBat(e, 0, n);
},
_openBat: function(t, e, i) {
var n = this;
this.openBat.position = cc.v2(0, 0);
this.openBat.active = !0;
var s = cc.moveTo(1, cc.v2(146, 88)).easing(cc.easeIn(2));
if (this.isNan.isChecked) {
n._runEffectPotWin(t, i);
n.openBat.active = !1;
} else {
this.openBat.stopAllActions();
this.openBat.runAction(cc.sequence(s, cc.callFunc(function() {
n._runEffectPotWin(t, i);
n.openBat.active = !1;
})));
}
},
_runEffectPotWin: function(t, e) {
if (!SmartFoxSDK.XocDiaController.m_tableInfo.isBetting && t && null != e) {
for (var i = 0; i < t.length; i++) if (t[i] >= 0 && t[i] < 6) {
var n = this.listNodePot[t[i]].getChildByName("Line-1");
n.active = !0;
n.getComponent(sp.Skeleton).setAnimation(0, "Idle", !0);
}
if (e) {
var s = this.POS.children[0], o = s.getChildByName("InGame-Thang-2"), a = s.getChildByName("thang-text"), c = s.getChildByName("money_win");
c.position = cc.v2(0, 0);
c.getComponent(cc.Label).string = "+" + Utils.addDotToNumber(SmartFoxSDK.XocDiaController.m_tableInfo.winChip);
c.active = !0;
o.active = !0;
a.active = !0;
o.getComponent(sp.Skeleton).setAnimation(0, "Idle", !0);
var r = cc.moveTo(1.5, cc.v2(0, 100)), h = cc.sequence(r, cc.delayTime(2.5), cc.callFunc(function() {
o.active = !1;
a.active = !1;
c.active = !1;
}));
c.runAction(h);
this.updateUserVariable(0);
}
this._isDat = !1;
}
},
_runCountTimer: function() {
this._currentTime > 0 && this._currentTime--;
this._currentTime < 6 ? this.Timer.color = cc.Color.RED : this.Timer.color = cc.Color.WHITE;
this._currentTime < 10 ? this.Timer.getComponent(cc.Label).string = "0" + this._currentTime : this.Timer.getComponent(cc.Label).string = this._currentTime;
},
_turnOnTime: function(t) {
this.Timer.active = !0;
this.XocXocBat.active = !1;
this.Result.active = !1;
this._currentTime = t;
this._runCountTimer();
this._stopEffectWinPot();
this.schedule(this._runCountTimer, 1);
},
_turnOffTime: function() {
this.Timer.active = !1;
this.unschedule(this._runCountTimer);
},
showListMyChipBet: function(t) {
if (this._isHaveChipBet(t)) this._myChipBet = t; else {
this._isDatLast || (this._myChipBet = t);
this._isDatLast && (this._isDatLast = !1);
}
for (var e = 0; e < t.length; e++) this.listMyChipBet[e].string = "(" + Utils.addDotToNumber(t[e]) + ")";
},
showListChipBet: function(t) {
for (var e = 0; e < t.length; e++) this.listChipBet[e].string = Utils.addDotToNumber(t[e]);
},
selectBetChip: function(t, e) {
for (var i = 0; i < this.listNodeBet.length; i++) {
this.listNodeBet[i].scale = 1;
this.listNodeBet[i].getChildByName("label").color = cc.Color.WHITE;
}
this._currentBet = e;
t.currentTarget.scale = 1.3;
t.currentTarget.getChildByName("label").color = cc.Color.YELLOW;
},
requestBet: function(t, e) {
if (this.XocXocBat.active) mm.Toast.showToast(1, "Đang mở bát không được đặt"); else {
this._isDat = !0;
mm.audio.playDatCua();
this.sendRequestBet(this._currentBet, e);
}
},
sendRequestBet: function(t, e) {
this._isDatLast = !0;
this._currentType = e;
if (this._currentType < 0 || this._currentType >= 6) mm.Toast.showToast(1, "Của đặt không hợp lệ"); else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) < t) mm.Toast.showToast(1, "Không đủ tiền!"); else {
var i = new XocDiaRequest.BetRequest();
i.setBetChip(t);
i.setTypePot(this._currentType);
SmartFoxSDK.XocDiaController.ZoneInstance.send(i.toSRequest());
}
},
actionFlyChipToPot: function(t, e, i) {
var n = this, s = this.getPosFromName(t), o = "chip1";
i > 1e3 && i <= 5e3 ? o = "chip1" : i > 5e3 && i <= 2e4 ? o = "chip2" : i > 2e4 && i <= 1e5 ? o = "chip3" : i > 1e5 && i <= 5e5 ? o = "chip4" : i > 5e5 && (o = "chip5");
for (var a = function(t) {
var i = n.getChipNode();
Utils.loadRes(i.getComponent(cc.Sprite), "images/xocdia/" + o);
var a = n.POS.getChildByName("pos_" + s);
i.position = a.position;
var c = n.listNodePot[e], r = n.getPositionInOtherNode(c, n.node), h = n;
i.runAction(cc.sequence(cc.delayTime(.1 * t), cc.moveTo(.3, cc.v2(r.x, r.y)).easing(cc.easeOut(3)), cc.callFunc(function() {
h.returnChipNode(this);
}, i)));
}, c = 0; c < 5; c++) a(c);
},
clickExitRoom: function() {
var t = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia");
if (t) {
SmartFoxSDK.XocDiaController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t));
mm.Loading.show();
} else UIManger.show("UIHome");
},
eventSoiCau: function() {
mm.audio.playButton();
mm.Loading.show();
var t = new XocDiaRequest.HistoryResultRequest();
SmartFoxSDK.XocDiaController.ZoneInstance.send(t.toSRequest());
},
showSoiCau: function(t) {
this._dataCau = t;
console.log(t);
this.show("UIXocDiaSoiCau", {
pop: !0,
src: "xocdia",
data: t
});
},
eventGapThep: function() {
mm.audio.playButton();
if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
if (this.XocXocBat.active) {
mm.Toast.showToast(1, "Đang mở bát không được đặt");
return;
}
this._isDat = !0;
for (var t = 0; t < this._myChipBet.length; t++) this._myChipBet[t] > 0 && this.sendRequestBet(2 * this._myChipBet[t], t);
}
},
eventDatLai: function() {
mm.audio.playButton();
if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
if (this.XocXocBat.active) {
mm.Toast.showToast(1, "Đang mở bát không được đặt");
return;
}
this._isDat = !0;
for (var t = 0; t < this._myChipBet.length; t++) this._myChipBet[t] > 0 && this.sendRequestBet(this._myChipBet[t], t);
}
},
_isHaveChipBet: function(t) {
for (var e = !1, i = 0; i < t.length; i++) if (t[i] > 0) return !0;
return e;
},
eventNan: function() {
mm.audio.playButton();
},
eventShowMenu: function() {
mm.audio.playButton();
this.ListMenu.active = !this.ListMenu.active;
},
eventRank: function() {
mm.audio.playButton();
mm.Loading.show();
this.ListMenu.active = !1;
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.XocDiaController.ZoneInstance.send(t.toSRequest());
},
eventHelper: function() {
mm.audio.playButton();
this.ListMenu.active = !1;
this.show("UIXocDiaHelper", {
pop: !0,
src: "xocdia"
});
},
eventHistory: function() {
mm.audio.playButton();
mm.Loading.show();
this.ListMenu.active = !1;
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.XocDiaController.ZoneInstance.send(t.toSRequest());
},
eventShowChat: function() {
mm.audio.playButton();
this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
this.ChatEmojiLayer.active && this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.XocDiaController.ZoneInstance);
},
onPublicMessage: function(t) {
var e = t.msg, i = this.getPosFromName(t.sender.name), n = this.POS.children[i].getChildByName("EMOJ");
if (null != n) {
var s = e.indexOf("emoij_") >= 0, o = n.getChildByName("EMOJ"), a = n.getChildByName("box");
o.active = !1;
a.active = !1;
if (s) {
o.active = !0;
o.opacity = 255;
var c = e.replace("emoij_", "");
o.stopAllActions();
o.getComponent(sp.Skeleton).setAnimation(0, c, !1);
o.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function() {
o.active = !1;
})));
} else {
a.active = !0;
a.opacity = 255;
a.stopAllActions();
a.getChildByName("lb_chat").getComponent(cc.Label).string = e;
a.getComponent(cc.Layout).updateLayout();
a.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function() {
a.active = !1;
})));
}
}
}
});
cc._RF.pop();
}, {} ],
UIZeusBonus: [ function(t, e) {
"use strict";
cc._RF.push(e, "f9e8bpyjAVNmoOJW0dkn31Q", "UIZeusBonus");
var i = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbTime: cc.Label,
lbMoneyWin: cc.Label,
lbTotalWin: cc.Label,
specialSelect: cc.Node,
resultWin: cc.Node,
totalMoneyWin: 0,
totalSelect: 0,
totalTime: 15,
listItemX: {
type: cc.Node,
default: []
},
listXSpecial: {
type: cc.SpriteFrame,
default: []
},
gifts: [],
xSpecial: 0
},
onEnable: function() {
this.gifts = this._data.gifts;
this.xSpecial = this._data.xSpecial;
this.totalTime = 20;
this.totalMoneyWin = 0;
this.specialSelect.active = !1;
this.resultWin.active = !1;
this.totalSelect = this.gifts.length;
this.lbTime.string = this.totalTime;
this.schedule(this.countTime, 1);
},
countTime: function() {
this.totalTime--;
if (this.totalTime < 1) {
this.unschedule(this.countTime);
this.eventClose();
}
this.lbTime.string = this.totalTime;
},
showMoneyWin: function() {
this.scheduleOnce(function() {
this.specialSelect.active = !0;
Promise.all(this.listItemX.map(function(t) {
t.active = !0;
}));
}, 1);
},
eventSelect: function(t) {
if (this.totalSelect > 0) {
this.totalSelect--;
if (this.gifts[this.totalSelect] > 0) {
t.target.getChildByName("lb_money").active = !0;
t.target.getChildByName("Zeus-BonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack", !1);
var e = this.totalMoneyWin;
this.totalMoneyWin += this.gifts[this.totalSelect];
i.numberTo(t.target.getChildByName("lb_money").getComponent(cc.Label), 0, this.gifts[this.totalSelect], 1200, !0);
i.numberTo(this.lbMoneyWin, e, this.totalMoneyWin, 1200, !0);
} else t.target.getChildByName("Zeus-BonusGame").getComponent(sp.Skeleton).setAnimation(0, "Idle-Miss", !1);
0 == this.totalSelect && this.showMoneyWin();
}
},
eventClose: function() {
this.back();
},
eventSelectSpecial: function(t, e) {
var n = this, s = parseInt(e);
this.listItemX[s].getComponent(sp.Skeleton).setAnimation(0, "Attack", !1);
this.listItemX[s].getComponent(sp.Skeleton).setCompleteListener(function() {
var t = n.listItemX[s].getChildByName("xSpecial");
t.active = !0;
t.getComponent(cc.Sprite).spriteFrame = n.listXSpecial[n.xSpecial - 1];
n.scheduleOnce(function() {
Promise.all(this.listItemX.map(function(t) {
t.active = !1;
}));
i.numberTo(n.lbTotalWin, 0, n._data.total, 500, !0);
n.resultWin.active = !0;
n.scheduleOnce(function() {
n.eventClose();
}, 2);
}, 2);
});
n.scheduleOnce(function() {
for (var t = function(t) {
if (t != s) {
n.listItemX[t].getComponent(sp.Skeleton).setAnimation(0, "Attack", !1);
n.listItemX[t].getComponent(sp.Skeleton).setCompleteListener(function() {
var e = n.listItemX[t].getChildByName("xSpecial");
e.active = !0;
var i = Math.floor(5 * Math.random());
e.getComponent(cc.Sprite).spriteFrame = n.listXSpecial[i];
});
}
}, e = 0; e < n.listItemX.length; e++) t(e);
}, .5);
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
UIZeusHelper: [ function(t, e) {
"use strict";
cc._RF.push(e, "569a0hfmHhHS6Z7otbFzfYD", "UIZeusHelper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
helperNode: cc.Node
},
onEnable: function() {
this.helperNode.getChildByName("pageview").getComponent(cc.PageView).scrollToPage(0, 0);
},
eventClose: function() {
this.back();
},
eventHelperLeft: function() {
var t = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
t.scrollToPage((t.getCurrentPageIndex() + 4) % 5, .2);
},
eventHelperRight: function() {
var t = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
t.scrollToPage((t.getCurrentPageIndex() + 1) % 5, .2);
}
});
cc._RF.pop();
}, {} ],
UIZeusHistoryDetail: [ function(t, e) {
"use strict";
cc._RF.push(e, "cafd0/tZ8hLXLDrY0MQcqPI", "UIZeusHistoryDetail");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listItem: cc.Node,
lbSession: cc.Label,
lbMoneyWin: cc.Label
},
onEnable: function() {
var t = this._data.resultMap;
this.lbSession.string = "#" + this._data.session;
this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
Promise.all(this.listItem.children.map(function(e, i) {
e.getComponent("ZeusItem").setIcon(t[i]);
}));
}
});
cc._RF.pop();
}, {} ],
UIZeusHistoryTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "b4f2e7NY6ZFMbYBbFvDC2Si", "UIZeusHistoryTransaction");
var i = t("Listview");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i
},
onEnable: function() {
if (this._data && this._data.items) {
this.listTransaction = this._data.items;
this.listview.numItems = this.listTransaction.length;
}
},
eventClose: function() {
this.back();
},
onListRender: function(t, e) {
var i = this.listTransaction[e];
t.getComponent(t.name).init(e, i);
},
onListSelected: function(t, e, i, n) {
if (t) {
var s = t.listItem._list, o = "Danh sách hoạt động hiện tại là:" + s.node.name + "，Lựa chọn hiện tại là：" + e + "，Lựa chọn cuối cùng là：" + i;
2 == s.selectedMode && (o += "，Giá trị hiện tại：" + n);
console.log(o);
}
}
});
cc._RF.pop();
}, {
Listview: "Listview"
} ],
UIZeusLobby: [ function(t, e) {
"use strict";
cc._RF.push(e, "68a77TTRL1Jr6sFN6WXGsGU", "UIZeusLobby");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbSoDu: cc.Label,
arr_lb_hu: {
type: cc.Label,
default: []
}
},
onLoad: function() {
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
},
onEnable: function() {
this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
},
updateJackpot: function() {
for (var t = [ "zeus1l", "zeus1k", "zeus10k" ], e = 0; e < t.length; e++) {
var i = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(t[e]);
if (i) {
var n = i.value, s = this.arr_lb_hu[e], o = s.string;
o = o.split(".").join("");
var a = parseFloat(o);
Utils.numberTo(s, a, n, 1e3, !0);
}
}
},
eventPlayGame: function(t, e) {
cc.betLevel = e;
mm.Loading.show();
this.show("UIZeus", {
pop: !0,
src: "zeus"
});
},
eventBack: function() {
var t = SmartFoxSDK.ZeusController.ZoneInstance.getRoomByName("zeus");
t ? SmartFoxSDK.ZeusController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(t)) : this.show("UIHome");
},
updateUserVariable: function(t) {
this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - t);
}
});
cc._RF.pop();
}, {} ],
UIZeusRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "75d2fBZiIhIlb+h5pRW1ZGU", "UIZeusRank");
var i = t("Listview"), n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
listview: i,
allRank: cc.Sprite,
allHu: cc.Sprite,
listRank: [],
listHu: []
},
onEnable: function() {
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
onListRender: function(t, e) {
var i = this.listRank[e];
t.getComponent(t.name).init(e, i);
},
eventClose: function() {
this.back();
},
eventAllRank: function() {
n.setMaterialGray(this.allRank, !1);
n.setMaterialGray(this.allHu, !0);
if (this._data && this._data.items) {
this.listRank = this._data.items;
this.listview.numItems = this.listRank.length;
}
},
eventHu: function() {
n.setMaterialGray(this.allRank, !0);
n.setMaterialGray(this.allHu, !1);
if (this._data && this._data.items) {
this.listHu = [];
this.listview.numItems = this.listHu.length;
}
}
});
cc._RF.pop();
}, {
Helper: "Helper",
Listview: "Listview"
} ],
UIZeus: [ function(t, e) {
"use strict";
cc._RF.push(e, "2a374jURU5KXaNA1qEki+6u", "UIZeus");
var i = t("ZeusWinGame"), n = t("Helper"), s = t("ZeusReel"), o = t("ZeusLine"), a = t("ZeusTrialResult"), c = t("zeusLanguage"), r = cc.Enum({
"1l": 1,
"1k": 2,
"10k": 3
});
cc.Class({
extends: cc.VozBaseComponent,
properties: {
reels: {
default: [],
type: s
},
iconPrefab: cc.Prefab,
noticeNode: cc.Node,
btnQuay: cc.Node,
btnQuayNhanh: cc.Node,
btnStopQuay: cc.Node,
btnAutoQuay: cc.Node,
lbNumberLine: cc.Label,
lbNumberStake: cc.Label,
lbMoneyWin: cc.Label,
lbSession: cc.Label,
selectLines: o,
WinGame: i,
listMainLines: cc.Node,
isAuto: !1,
isFast: !1,
isSpin: !1,
isFreeSpin: !1,
red: !0,
lastResult: [],
betSelect: 0,
roomNumber: 0,
posLineWin: 0,
totalLineWin: 0,
_TotalColumn: 5,
lb_phong: cc.Label,
lb_sodu: cc.Label,
lb_hu: cc.Label,
toggleMusic: cc.Toggle,
toggleSound: cc.Toggle,
bgSound: cc.AudioClip,
soundSpinMis: cc.AudioClip,
soundSpinWin: cc.AudioClip,
soundBigWin: cc.AudioClip,
soundJackpot: cc.AudioClip,
soundBonus: cc.AudioClip,
soundClick: cc.AudioClip,
soundSpin: cc.AudioClip,
menuSetting: cc.Node,
_keyMusic: "music_kc",
_keySound: "sound_kc",
_musicSlotState: 0,
_soundSlotState: 0,
_isFreeTrial: !1,
_myMoneyTrial: 0,
_mySession: 0
},
onLoad: function() {
this._TotalColumn = 5;
this.TotalItemRun = 20;
this.totalSymbol = 7;
this.winMoney = 0;
this.freeSpin = 0;
this.init();
this.roomNumber = r["1l"];
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
this.schedule(this.updateJackpot, 3);
this.updateJackpot();
this.initSound();
},
initSound: function() {
var t = cc.sys.localStorage.getItem(this._keyMusic);
if (null != t) this._musicSlotState = parseInt(t); else {
this._musicSlotState = 1;
cc.sys.localStorage.setItem(this._keyMusic, "1");
}
var e = cc.sys.localStorage.getItem(this._keySound);
if (null != e) this._soundSlotState = parseInt(e); else {
this._soundSlotState = 1;
cc.sys.localStorage.setItem(this._keySound, "1");
}
null == this.bgSound || this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : this.musicId = cc.audioEngine.play(this.bgSound, !0, 1);
},
onDisable: function() {
cc.audioEngine.pause(this.musicId);
},
eventMusic: function() {
this._musicSlotState = this.toggleSound.isChecked ? 0 : 1;
this.toggleMusic.isChecked ? cc.audioEngine.pause(this.musicId) : cc.audioEngine.resume(this.musicId);
cc.sys.localStorage.setItem(this._keyMusic, this._musicSlotState);
},
eventSound: function() {
this._soundSlotState = this.toggleSound.isChecked ? 0 : 1;
cc.sys.localStorage.setItem(this._keySound, this._soundSlotState);
},
playSpin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpin, !1, 1);
},
playSpinMis: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinMis, !1, 1);
},
playSpinWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundSpinWin, !1, 1);
},
playBigWin: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBigWin, !1, 1);
},
playJackpot: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundJackpot, !1, 1);
},
playBonus: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundBonus, !1, 1);
},
playClick: function() {
1 == this._soundSlotState && cc.audioEngine.play(this.soundClick, !1, 1);
},
updateJackpot: function() {
var t = "zeus" + cc.betLevel;
if (SmartFoxSDK.ZeusController.ZoneInstance.mySelf && SmartFoxSDK.ZeusController.ZoneInstance.mySelf) {
var e = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(t);
if (e) {
var i = e.value, n = this.lb_hu.string;
n = n.split(".").join("");
var s = parseFloat(n);
Utils.numberTo(this.lb_hu, s, i, 1e3, !0);
}
}
},
updateUserVariableSlot: function(t) {
var e = "fszeus" + cc.betLevel;
if (t.changedVars.indexOf(e) >= 0 && t.user.isItMe) {
var i = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(e).value;
this.freeSpin = i;
this.WinGame.updateFreeSpin();
}
},
updateUserVariable: function(t) {
this._isFreeTrial || "" == cc.currentUI || (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - t));
},
onEnable: function() {
mm.audio.pauseMusic();
mm.Loading.hide();
if ("choithu" == cc.betLevel) {
this._isFreeTrial = !0;
this._myMoneyTrial = 5e7;
this.lb_sodu.string = Utils.addDotToNumber(5e7);
this._mySession = 0;
this.lbSession.string = "#" + this._mySession;
} else {
this._myMoneyTrial = 0;
this._isFreeTrial = !1;
}
this.roomNumber = r[cc.betLevel];
void 0 === this.roomNumber && (cc.betLevel = "1l");
this.roomNumber = r[cc.betLevel];
this.roomNumber = this.roomNumber % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
this.selectLines.init(this);
this.WinGame.init(this);
this.lbMoneyWin.string = "0";
this.showLineWin(!1);
},
init: function() {
var t = this, e = [], i = [], n = [];
Promise.all(this.reels.map(function(s) {
var o;
o = t.initRandomItems(t.TotalItemRun);
e.push(o[o.length - 1]);
i.push(o[o.length - 2]);
n.push(o[o.length - 3]);
s.init(t, o);
})).then(function() {
t.lastResult = n.concat(i).concat(e);
});
},
setNumberLines: function(t) {
this.lbNumberLine.string = t;
},
setNumberStake: function(t) {
this.lbNumberStake.string = n.numberWithCommas(t * this.getMoneyInRoom());
},
setMoneyWin: function(t) {
n.numberTo(this.lbMoneyWin, parseInt(this.lbMoneyWin.string), t, 1200, !0);
if (this._isFreeTrial) {
this._myMoneyTrial = this._myMoneyTrial + t;
this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
} else this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
this.isSpin = !1;
},
updateDataPhong: function() {},
eventQuayNhanh: function() {
if (this._isFreeTrial) this.addNotice(c.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(c.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !0;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !0);
this.btnStopQuay.active = !0;
this.autoQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
eventAutoQuay: function() {
if (this._isFreeTrial) this.addNotice(c.getString("noti_not_trial")); else if (this.checkEnoughMoney()) if (this.isSpin) this.addNotice(c.getString("noti_is_playing")); else {
this.isSpin = !0;
this.isFast = !1;
this.isAuto = !0;
this.pauseSystemEventNode(this.btnAutoQuay, !0);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
this.btnStopQuay.active = !0;
this.autoQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
runQuay: function() {
if (this._isFreeTrial) {
this.isSpin = !0;
this._myMoneyTrial = this._myMoneyTrial - this.getTotalBet();
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial));
this._myMoneyTrial < 1 && mm.Toast.showToast(1, c.getString("noti_not_money"));
this._mySession++;
this.ZeusRun(a.getItemTrial());
this.freeSpin--;
} else {
this.playSpin();
this.isSpin = !0;
var t = new ZeusRequest.BetRequest();
this.showLineWin(!1);
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
mm.Toast.showToast(1, c.getString("noti_not_money"));
return;
}
SmartFoxSDK.ZeusController.ZoneInstance.send(t.toSRequest());
this.freeSpin < 1 && (this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - this.getTotalBet()));
}
},
eventStopQuay: function() {
this.isFast = !1;
this.isAuto = !1;
this.btnStopQuay.active = !1;
this.pauseSystemEventNode(this.btnAutoQuay, !1);
this.pauseSystemEventNode(this.btnQuayNhanh, !1);
var t = new ZeusRequest.StopAutoPlayRequest();
SmartFoxSDK.ZeusController.ZoneInstance.send(t.toSRequest());
},
eventPhong: function() {
if (this._isFreeTrial) this.addNotice(c.getString("noti_not_trial")); else if (this.isSpin || this.isAuto || this.isFast) this.addNotice(c.getString("noti_is_playing")); else {
this.roomNumber = (this.roomNumber + 1) % 4;
this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
this.lb_phong.string = n.numberWithCommas(this.getMoneyInRoom());
this.setNumberStake(this.selectLines.getTotalLineSelect());
1 == this.roomNumber ? cc.betLevel = "1l" : 2 == this.roomNumber ? cc.betLevel = "1k" : 3 == this.roomNumber && (cc.betLevel = "10k");
this.updateJackpot();
}
},
eventSelectLines: function() {
this._isFreeTrial ? this.addNotice(c.getString("noti_not_trial")) : this.isSpin || this.isAuto || this.isFast ? this.addNotice(c.getString("noti_is_playing")) : this.selectLines.eventOpen();
},
checkEnoughMoney: function() {
var t = 25 * this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 1:
t = 13 * this.getMoneyInRoom();
break;

case 2:
t = 12 * this.getMoneyInRoom();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t = this.getMoneyInRoom() * e.length;
}
return !(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) < t);
},
autoQuay: function() {
if (this._isFreeTrial) this.freeSpin > 0 && this.eventQuay(); else if (this.freeSpin < 1) {
if (this.isAuto) {
var t = new ZeusRequest.AutoPlayRequest();
t.setBet(this.getMoneyInRoom());
this.setLinesBet(t);
if (!this.checkEnoughMoney()) {
mm.Toast.showToast(1, c.getString("noti_not_money"));
return;
}
SmartFoxSDK.ZeusController.ZoneInstance.send(t.toSRequest());
this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - this.getTotalBet());
}
} else this.eventQuay();
},
getTotalBet: function() {
var t = this.getMoneyInRoom();
switch (this.selectLines.typeLine) {
case 0:
return this.selectLines.getTotalLine() * t;

case 1:
return this.selectLines.getTotalLineLe() * t;

case 2:
return this.selectLines.getTotalLineChan() * t;

case 3:
return this.selectLines.getTotalLineSelect() * t;
}
return t;
},
setLinesBet: function(t) {
switch (this.selectLines.typeLine) {
case 1:
t.setLineLe();
break;

case 2:
t.setLineChan();
break;

case 3:
for (var e = [], i = 1; i < this.selectLines.data.length; i++) this.selectLines.data[i] && e.push(i);
t.setLine(e);
}
},
eventQuay: function() {
if (this._isFreeTrial || this.checkEnoughMoney()) {
this.pauseSystemEventNode(this.btnQuay, !0);
this.runQuay();
} else mm.Toast.showToast(1, c.getString("noti_not_money"));
},
pauseSystemEventNode: function(t, e) {
n.setMaterialGray(t.getComponent(cc.Sprite), e);
e ? t.pauseSystemEvents(!0) : t.resumeSystemEvents(!0);
},
eventBack: function() {
this.isSpin || this.isAuto || this.isFast ? this.addNotice(c.getString("noti_is_playing")) : UIManger.show("UIZeusLobby", {
pop: !0,
src: "zeus"
});
},
eventSetting: function() {
this.menuSetting.active = !this.menuSetting.active;
},
eventVinhDanh: function() {
var t = new CasinoRequest.LeaderBoardRequest();
SmartFoxSDK.ZeusController.ZoneInstance.send(t.toSRequest());
},
eventLichSuGiaoDich: function() {
var t = new CasinoRequest.HistoryRequest();
SmartFoxSDK.ZeusController.ZoneInstance.send(t.toSRequest());
},
eventBangThuong: function() {
this.show("UIZeusHelper", {
pop: !0,
src: "zeus"
});
},
ZeusRun: function(t) {
this.showLineWin(!1);
var e = this, i = this.getDataResult(t.result);
Promise.all(i.map(function(t, i) {
Promise.all(t.map(function(t, n) {
e.reels[i].icons[n].setIcon(t, !0);
}));
}));
this.lineWin = t.lineWin;
this.winMoney = t.winMoney;
this.freeGift = t.freeGift;
this.xSpecial = t.xSpecial;
this.isBonus = t.isBonus;
this.isFree = t.isFreeSpin;
this.session = t.session;
this.isNoHu = t.isNohu;
this.isThangLon = t.isThangLon;
this.freeSpin = t.freeSpin;
this.type = t.type;
this.runReels();
t.isFreeSpin || this.WinGame.updateFreeSpin();
this._isFreeTrial ? this.lbSession.string = "#" + this._mySession : this.lbSession.string = "#" + this.session;
},
initRandomItems: function(t) {
for (var e = [], i = 0; i < t; i++) e[i] = this.random();
return e;
},
getDataResult: function(t) {
for (var e = [], i = 0; i < this._TotalColumn; i++) e[i] = [];
for (var n = 0; n < t.length; n++) e[n % this._TotalColumn].push(t[n]);
for (var s = 0; s < this._TotalColumn; s++) {
var o = this.initRandomItems(this.TotalItemRun - 6);
e[s] = e[s].concat(o);
}
for (var a = 0; a < this.lastResult.length; a++) e[a % this._TotalColumn].push(this.lastResult[a]);
this.lastResult = t;
return e;
},
reformatResult: function(t, e) {
for (var i = [], n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
return i;
},
runActionWon: function() {
this.showLineWin(!0);
this.WinGame.runWinGame();
this.pauseSystemEventNode(this.btnQuay, !1);
},
resume: function() {
this.winMoney > 0 ? setTimeout(function() {
this.WinGame.runWinGame();
}.bind(this), 300) : this.WinGame.runWinGame();
},
setEventMainLine: function(t) {
Promise.all(this.listMainLines.children.map(function(e) {
t ? e.pauseSystemEvents(!0) : e.resumeSystemEvents(!0);
}));
},
showLineWin: function(t) {
var e = this;
if (t) {
this.setEventMainLine(t);
this.totalLineWin = this.lineWin.length;
this.posLineWin = 0;
if (this.totalLineWin > 0) {
Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("ZeusMainLine").onEf();
}));
this.scheduleOnce(function() {
Promise.all(e.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("ZeusMainLine").offEf();
}));
e.schedule(this.showMainLine, 1);
}, 2);
}
} else {
this.unschedule(this.showMainLine);
this.lineWin && this.lineWin.length > 0 && Promise.all(this.lineWin.map(function(t) {
e.listMainLines.children[t].getComponent("ZeusMainLine").offhover();
e.listMainLines.children[t].pauseSystemEvents(!0);
}));
}
},
showMainLine: function() {
if (this.lineWin.length > 0) {
null != this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("ZeusMainLine").offEf();
this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
null != this.listMainLines.children[this.lineWin[this.posLineWin]] && this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("ZeusMainLine").onEf();
}
},
runReels: function() {
Promise.all(this.reels.map(function(t, e) {
t.spin(e);
}));
},
copy: function() {
Promise.all(this.reels.map(function(t) {
t.icons[t.icons.length - 1].setIcon(t.icons[2].data);
t.icons[t.icons.length - 2].setIcon(t.icons[1].data);
t.icons[t.icons.length - 3].setIcon(t.icons[0].data);
}));
},
random: function() {
return ~~(Math.random() * this.totalSymbol);
},
getMoneyInRoom: function() {
return 10 * Math.pow(10, this.roomNumber);
},
checkHasMoney: function() {
return !0;
},
addNotice: function(t) {
var e = this;
this.noticeNode.active = !0;
this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = t;
setTimeout(function() {
e.noticeNode.active = !1;
}, 1200);
}
});
cc._RF.pop();
}, {
Helper: "Helper",
ZeusLine: "ZeusLine",
ZeusReel: "ZeusReel",
ZeusTrialResult: "ZeusTrialResult",
ZeusWinGame: "ZeusWinGame",
zeusLanguage: "zeusLanguage"
} ],
UtilsUI: [ function(t, e) {
"use strict";
cc._RF.push(e, "36367CtJ7JH0IcN1lK1XCUM", "UtilsUI");
var i = {
loadImageLink: function(t, e, i) {
e ? cc.loader.load({
url: t,
type: "png"
}, function(t, n) {
if (t) console.log(t); else {
cc.isValid(e) && (e.spriteFrame = new cc.SpriteFrame(n));
i && i(e);
}
}) : console.log("Loi sprite");
},
loadImageRes: function(t, e) {
cc.loader.loadRes(e, cc.SpriteFrame, function(e, i) {
if (e) console.log(e); else if (cc.isValid(t)) {
t.spriteFrame = i;
t.node.active = !0;
}
});
},
loadPlist: function(t, e, i) {
cc.loader.loadRes(e, cc.SpriteAtlas, function(e, n) {
if (!e) {
var s = n.getSpriteFrame(i);
if (cc.isValid(t)) {
t.spriteFrame = s;
t.node.active = !0;
}
}
});
},
addDotToNumber: function(t) {
return t <= 0 ? 0 : t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
},
formatCurrency: function(t) {
return t <= 0 ? 0 : mm.KythanhUserVariable.isBet() ? t >= Math.pow(10, 4) && t < Math.pow(10, 6) ? t / Math.pow(10, 3) + "K" : t >= Math.pow(10, 6) && t < Math.pow(10, 9) ? (t = Math.floor(t / Math.pow(10, 4)) / 100) + "M" : t >= Math.pow(10, 9) && t < Math.pow(10, 12) ? (t = Math.floor(t / Math.pow(10, 7)) / 100) + "B" : t >= Math.pow(10, 12) && t <= Math.pow(10, 15) ? (t = Math.floor(t / Math.pow(10, 10)) / 100) + "Q" : t >= Math.pow(10, 15) ? (t = Math.floor(t / Math.pow(10, 13)) / 100) + "~~" : Utils.addDotToNumber(t) : Math.floor(t / 500);
},
formatNumber: function(t, e) {
var i = Math.pow(10, e);
t /= i;
return (t = Math.floor(t)) * i;
},
formatTimeToString: function(t) {
var e = Math.floor(t / 60), i = Math.floor(t % 60);
e < 10 && (e = "0" + e);
i < 10 && (i = "0" + i);
return e + ":" + i;
},
convertTimeStampToDate: function(t) {
var e = new Date(t), i = e.getFullYear(), n = e.getMonth(), s = e.getDay();
e.getHours(), e.getMinutes(), e.getSeconds();
return s + "/" + n + "/" + i;
},
convertTimeStampToTime: function(t) {
var e = new Date(t), i = e.getFullYear(), n = e.getMonth(), s = e.getDay();
e.getHours(), e.getMinutes(), e.getSeconds();
return s + "/" + n + "/" + i;
},
convertDateToTimestamp: function(t) {
if (3 != (t = t.split("-")).length) return null;
var e = t[1] + "/" + t[0] + "/" + t[2];
return new Date(e).getTime();
},
formatText: function(t, e) {
if (null == t || null == t || "" == t) return "Error: Empty";
void 0 === e && (e = 10);
var i = "";
t.length >= e && (i = "..");
return (t = t.substring(0, e - i.length)) + i;
},
formatRelativeTime: function(t) {
return !Number.isInteger(t) || +t <= 0 ? "0 day" : Math.floor(t / 86400) + " days";
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
Utils: [ function(t, e) {
"use strict";
cc._RF.push(e, "06278nBc6dA1q2o+6DwImvI", "Utils");
var i = {
loadRes: function(t, e, i) {
cc.loader.loadRes(e, cc.SpriteFrame, function(e, n) {
if (e) console.log(e); else {
if (cc.isValid(t)) {
t.spriteFrame = n;
t.node.active = !0;
} else console.log("Loi sprite");
i && i();
}
});
},
addDotToNumber: function(t) {
if (void 0 === t) return "";
var e = "";
if (t < 0) {
e = "-";
t = Math.abs(t);
}
"number" == typeof t && (t = t.toFixed(0));
return e + t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
},
formatCurrency: function(t) {
return t <= 0 ? 0 : t >= 1e3 && t < Math.pow(10, 6) ? (t /= Math.pow(10, 3)).toFixed(0) + "K" : t >= Math.pow(10, 6) && t < Math.pow(10, 9) ? (t = Math.floor(t / Math.pow(10, 4)) / 100).toFixed(1) + "M" : t >= Math.pow(10, 9) && t < Math.pow(10, 12) ? (t = Math.floor(t / Math.pow(10, 7)) / 100).toFixed(1) + "B" : t >= Math.pow(10, 12) && t <= Math.pow(10, 15) ? (t = Math.floor(t / Math.pow(10, 10)) / 100).toFixed(1) + "Q" : t >= Math.pow(10, 15) ? (t = Math.floor(t / Math.pow(10, 13)) / 100).toFixed(1) + "~~" : i.addDotToNumber(t);
},
formatNumber: function(t, e) {
var i = Math.pow(10, e);
t /= i;
return (t = Math.floor(t)) * i;
},
reFormatDisplayTime: function(t) {
var e = t.split(" ");
if (2 != e.length) return t;
var i = e[0].split("-"), n = i[2] + "/" + i[1] + "/" + i[0];
return (i = e[1].split("."))[0] + " " + n;
},
formatTimeToString: function(t) {
var e = Math.floor(t / 60), i = Math.floor(t % 60);
e < 10 && (e = "0" + e);
i < 10 && (i = "0" + i);
return e + ":" + i;
},
convertTimeStampToDate: function(t) {
var e = new Date(t), i = e.getFullYear(), n = e.getMonth(), s = e.getDay();
e.getHours(), e.getMinutes(), e.getSeconds();
return s + "/" + n + "/" + i;
},
convertTimeStampToTime: function(t) {
var e = new Date(t), i = e.getFullYear(), n = e.getMonth(), s = e.getDay();
e.getHours(), e.getMinutes(), e.getSeconds();
return s + "/" + n + "/" + i;
},
convertDateToTimeStample: function(t) {
if (3 != (t = t.split("-")).length) return null;
var e = t[1] + "/" + t[0] + "/" + t[2];
return new Date(e).getTime();
},
formatText: function(t, e) {
void 0 === e && (e = 10);
var i = "";
t.length >= e && (i = "..");
return (t = t.substring(0, e - i.length)) + i;
},
numberTo: function(t, e, i, s, o, a) {
void 0 === o && (o = !1);
clearInterval(t.timer);
var c = i - e;
0 == c && (c = 1);
var r = Math.abs(Math.floor(s / c));
r = Math.max(r, 10);
var h = new Date().getTime() + s;
t.timer = setInterval(function() {
if (t.node) {
var e = new Date().getTime(), r = Math.max((h - e) / s, 0), l = i - r * c >> 0, u = o ? n(l) : l;
t.string = u + " ";
if (l == i) {
a && a();
clearInterval(t.timer);
}
} else clearInterval(t.timer);
}, r);
},
v2Distance: function(t, e) {
return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
},
v2Degrees: function(t, e) {
return 180 * Math.atan2(e.y - t.y, e.x - t.x) / Math.PI;
},
validateString: function(t) {
return t.match(/^[A-Za-z0-9]+$/);
}
};
function n(t) {
if (t) {
var e = (t = parseInt(t)).toString().split(".");
return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."), e.join(".");
}
return "0";
}
window.Utils = i;
cc._RF.pop();
}, {} ],
VampireController: [ function(t, e) {
"use strict";
cc._RF.push(e, "e0945uEP3FNqrz9E+Qg4zYZ", "VampireController");
var i = t("VampireEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventRoomJoin: function(t) {
this._super(t);
UIManger.show("UIVampireLobby", {
pop: !0,
src: "vampire"
});
},
onUserVariablesUpdate: function(t) {
this._super(t);
null != this.getUI() && this.getUI().updateUserVariableSlot(t);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id").toFixed(0);
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.resultMap = s.getByteArray("rs");
o.linewin = s.getByteArray("lw");
i.push(o);
}
UIManger.show("UIVampireHistoryTransaction", {
pop: !0,
src: "vampire",
data: {
items: i
}
});
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n + 1;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
UIManger.show("UIVampireRank", {
pop: !0,
src: "vampire",
data: {
items: i
}
});
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
}
},
onUserResultEvent: function(t) {
var e = new i.ResultEvent().fromEvent(t);
this.getUI().VampireRun(e);
}
}), s = null;
SmartFoxSDK.VampireController = e.exports = function() {
null == s && (s = new n("UIVampire", "vampire"));
return s;
}();
cc._RF.pop();
}, {
VampireEvent: "VampireEvent"
} ],
VampireEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "07f7djEvcJDIataCOBZfhoL", "VampireEvent");
var i = {
RESPONSE_NAME: {
RESULT_RES: "vp2",
FREE_DAILY_RES: "vp3",
MINIMIZE_RES: "vp4",
AUTO_PLAY_RES: "vp5",
STOP_AUTO_PLAY_RES: "vp6"
}
};
i.ResultEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.RESULT_RES);
this.winMoney = 0;
this.freeGift = [];
this.lineWin = [];
this.result = [];
this.session = 0;
this.isFreeSpin = !1;
this.isBonus = !1;
this.freeSpin = 0;
this.type = 0;
this.haiSao = "";
this.ration = 0;
},
fromEvent: function(t) {
this.winMoney = t.getDouble("w");
this.lineWin = t.getIntArray("lw");
this.result = t.getIntArray("r");
this.session = t.getDouble("id");
this.isFreeSpin = t.getBool("fr");
this.freeSpin = t.getByte("ra");
this.type = t.getByte("rs");
this.haiSao = t.getUtfString("hs");
2 == this.type && (this.isThangLon = !0);
3 == this.type && (this.isNohu = !0);
4 == this.type && (this.isNohuX2 = !0);
if (5 == this.type) {
this.isBonus = !0;
for (var e = 1; e < this.haiSao.length; e += 2) this.freeGift.push(this.haiSao[e]);
}
return this;
}
});
window.VampireEvent = e.exports = i;
cc._RF.pop();
}, {} ],
VampireItemBonus: [ function(t, e) {
"use strict";
cc._RF.push(e, "e6aeaEKSUtC47y/mT8Hcyqm", "VampireItemBonus");
cc.Class({
extends: cc.Component,
properties: {
lbMoney: cc.Label,
spItem: sp.Skeleton
},
init: function() {}
});
cc._RF.pop();
}, {} ],
VampireItemLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "a778cs3d8xG04PVuCsGQ3+T", "VampireItemLine");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {}
});
cc._RF.pop();
}, {} ],
VampireItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "565b6mXw05EG7JF3cEWRyAE", "VampireItem");
cc.Class({
extends: cc.Component,
properties: {},
init: function(t, e) {
this.RedT = t;
this.node.children[e].active = !0;
},
stop: function() {},
random: function() {
var t = ~~(7 * Math.random());
this.setIcon(t);
return t;
},
setIcon: function(t, e) {
void 0 === e && (e = !1);
Promise.all(this.node.children.map(function(t) {
t.active = !1;
}));
this.node.children[t].active = !0;
e && (this.data = t);
}
});
cc._RF.pop();
}, {} ],
VampireLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "2da47wmmcRFHaVnPnrjp8Gh", "VampireLine");
var i = t("Helper");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: cc.Node,
typeLine: 0
},
init: function(t) {
this.KCV = t;
this.eventSelectAll();
},
eventOpen: function() {
this.node.active = !0;
},
eventClose: function() {
var t = this.getTotalLineSelect();
this.node.active && t < 1 ? this.KCV.addNotice("Chọn ít nhất 1 dòng") : this.node.active = !1;
},
eventSelect: function(t, e) {
var n = parseInt(e);
i.setMaterialGray(t.target.getComponent(cc.Sprite), i.isMaterialGray(t.target.getComponent(cc.Sprite)));
this.data[n] = i.isMaterialGray(t.target.getComponent(cc.Sprite));
this.updateString();
this.typeLine = 3;
},
eventBoChon: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !0);
return !1;
})).then(function(e) {
t.data = e;
t.typeLine = -1;
t.updateString();
});
},
eventSelectChan: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 1);
return e % 2 != 1;
})).then(function(e) {
t.data = e;
t.typeLine = 2;
t.updateString();
});
},
eventSelectLe: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 0);
return e % 2 != 0;
})).then(function(e) {
t.data = e;
t.typeLine = 1;
t.updateString();
});
},
eventSelectAll: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !1);
return !0;
})).then(function(e) {
t.typeLine = 0;
t.data = e;
t.updateString();
});
},
updateString: function() {
var t = this.getTotalLineSelect();
this.KCV.setNumberLines(t);
this.KCV.setNumberStake(t);
},
getTotalLineChan: function() {
return 12;
},
getTotalLineLe: function() {
return 13;
},
getTotalLine: function() {
return 25;
},
getTotalLineSelect: function() {
for (var t = 0, e = 1; e < this.data.length; e++) this.data[e] && t++;
return t;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
VampireMainLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "9307cScMi1Ne44gMf5xrgre", "VampireMainLine");
cc.Class({
extends: cc.Component,
init: function() {
return this;
},
onEnable: function() {},
onDisable: function() {},
onhover: function() {
this.node.children[0].active = !0;
this.node.children[1].active = !0;
},
offhover: function() {
this.node.children[0].active = !1;
this.node.children[1].active = !1;
},
onEf: function() {
this.onhover();
this.node.pauseSystemEvents(!0);
},
offEf: function() {
this.offhover();
this.node.resumeSystemEvents(!0);
},
offAll: function() {}
});
cc._RF.pop();
}, {} ],
VampireRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "1da4fr1BO1M56OOEwvO8c3n", "VampireRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbAccount: cc.Label,
lbWin: cc.Label,
lbDes: cc.Label
},
init: function(t, e) {
this.lbTime.string = e.time;
this.lbSession.string = e.session;
this.lbAccount.string = e.account;
this.lbWin.string = Utils.addDotToNumber(e.win);
}
});
cc._RF.pop();
}, {} ],
VampireReel: [ function(t, e) {
"use strict";
cc._RF.push(e, "4aa6aTnCmVHmKQ/V/OOpr1u", "VampireReel");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
onEnable: function() {},
init: function(t, e) {
var i = this;
this.SLV = t;
this.icons = [];
var n = this;
Promise.all(e.map(function(t) {
var e = cc.instantiate(n.SLV.iconPrefab);
n.node.addChild(e);
(e = e.getComponent("VampireItem")).init(n.SLV, t);
return e;
})).then(function(t) {
i.icons = t;
});
},
spin: function(t) {
this.node.stopAllActions();
var e = cc.moveTo(1.8, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(3)), i = cc.callFunc(function() {
0 === t && this.SLV.copy();
this.node.y = 0;
}, this);
if (4 === t) {
var n = cc.callFunc(function() {
this.node.y = 0;
this.SLV.runActionWon();
}, this);
this.node.runAction(cc.sequence(cc.delayTime(.2 * t), e, n));
} else this.node.runAction(cc.sequence(cc.delayTime(.2 * t), e, i));
},
stop: function() {
this.node.stopAllActions();
this.SLV.copy();
this.node.y = 0;
}
});
cc._RF.pop();
}, {} ],
VampireRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "8ed9dtqAk1OI6Jc5XxWuMER", "VampireRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "vp1",
AUTO_PLAY_REQUEST: "vp5",
STOP_AUTO_PLAY_REQUEST: "vp6"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.VampireController.ZoneInstance.getRoomByName("vampire").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t, e) {
this._params.putDouble("b", t);
void 0 !== e && this._params.putUtfString("cheat", e);
return this;
}
});
i.AutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.AUTO_PLAY_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.StopAutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
window.VampireRequest = i;
cc._RF.pop();
}, {} ],
VampireTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "e67cauYkXNE8KbOSZ73WR9f", "VampireTransactionItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbMucDat: cc.Label,
lbWin: cc.Label,
lbDetail: cc.Label,
_dataRank: null
},
init: function(t, e) {
this._dataRank = e;
this.lbSession.string = "#" + e.session;
this.lbTime.string = e.time;
this.lbMucDat.string = Utils.addDotToNumber(e.stakes);
this.lbWin.string = Utils.addDotToNumber(e.win);
},
eventDetail: function() {
this.show("UIVampireHistoryDetail", {
pop: !0,
src: "vampire",
data: this._dataRank
});
}
});
cc._RF.pop();
}, {} ],
VampireWinGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "95032aiuwpMcZuPQHYGOf97", "VampireWinGame");
var i, n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbMoneyWin: cc.Label,
BonusFreeSpine: cc.Node,
NoHuCoin: cc.Node,
ThangText: cc.Node,
ThangLonCoin: cc.Node,
FreeCount: cc.Node,
NumberFreeSpine: cc.Node
},
onLoad: function() {
i = this;
},
init: function(t) {
this.SLV = t;
},
runWinGame: function() {
var t = this.node.getChildByName("bg_all");
t.active = !0;
if (this.SLV.isThangLon && !this.SLV.isNoHu) {
this.SLV.playBigWin();
this.runVampireThangLon();
} else if (this.SLV.isNoHu) {
this.SLV.playJackpot();
this.runVampireNoHu();
} else if (this.SLV.isFree) this.runFreeSpine(); else if (this.SLV.isBonus) {
this.SLV.playBonus();
this.runBonusSpine();
} else {
i.SLV.setMoneyWin(i.SLV.winMoney);
i.updateFreeSpin();
if (this.SLV.winMoney > 0) {
this.SLV.playSpinWin();
this.lbMoneyWin.node.active = !0;
n.numberTo(this.lbMoneyWin, 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
i.lbMoneyWin.node.active = !1;
t.active = !1;
i.SLV.autoQuay();
}, 1);
});
this.SLV.winMoney = 0;
} else {
t.active = !1;
i.SLV.autoQuay();
}
}
0 == this.SLV.type && this.SLV.playSpinMis();
},
updateFreeSpin: function() {
if (this.SLV.freeSpin < 1) this.FreeCount.active = !1; else {
this.FreeCount.active = !0;
i.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = i.SLV.freeSpin;
}
},
checkRunAgainWin: function() {
(this.SLV.isBonus || this.SLV.winMoney > 0 || this.SLV.isFree || this.SLV.isNoHu || this.SLV.isThangLon || this.SLV.isAuto) && this.runWinGame();
},
runFreeSpine: function() {
this.SLV.isFree = !1;
this.BonusFreeSpine.active = !0;
this.NumberFreeSpine.active = !0;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "FreeSpine", !0);
this.NumberFreeSpine.getChildByName("lb_number_free_spine").getComponent(cc.Label).string = this.SLV.freeSpin;
this.scheduleOnce(function() {
i.node.getChildByName("bg_all").active = !1;
i.BonusFreeSpine.active = !1;
i.NumberFreeSpine.active = !1;
i.FreeCount.active = !0;
i.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = i.SLV.freeSpin;
this.checkRunAgainWin();
}, 3);
},
runBonusSpine: function() {
this.SLV.isBonus = !1;
this.BonusFreeSpine.active = !0;
this.NumberFreeSpine.active = !1;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "Bonusgame", !0);
this.scheduleOnce(function() {
i.BonusFreeSpine.active = !1;
i.show("UIVampireBonus", {
src: "vampire",
pop: !0,
data: i.SLV.freeGift
});
}, 2);
},
runVampireNoHu: function() {
this.SLV.isNoHu = !1;
this.NoHuCoin.active = !0;
this.Text.active = !0;
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", !0);
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, -160));
t.active = !0;
n.numberTo(t.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 50));
t.runAction(cc.sequence(e, cc.delayTime(1), cc.callFunc(function() {
i.node.getChildByName("bg_all").active = !1;
i.NoHuCoin.active = !1;
i.ThangText.active = !1;
t.active = !1;
i.checkRunAgainWin();
})));
}, 5);
});
},
runVampireThangLon: function() {
this.SLV.isThangLon = !1;
this.ThangLonCoin.active = !0;
this.ThangText.active = !0;
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "ThangLon", !0);
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, -100));
t.active = !0;
n.numberTo(t.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 50));
t.runAction(cc.sequence(e, cc.delayTime(.5), cc.callFunc(function() {
t.active = !1;
i.node.getChildByName("bg_all").active = !1;
i.ThangLonCoin.active = !1;
i.ThangText.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
VozBaseComponent: [ function(t, e) {
"use strict";
cc._RF.push(e, "5c257J0xqFK/rnC395+zKFq", "VozBaseComponent");
cc.VozBaseComponent = cc.Class({
extends: cc.Component,
statics: {},
properties: {
_data: null
},
onLoad: function() {
cc.debug.setDisplayStats(!1);
},
updateUserVariable: function() {},
eventBackDevice: function() {},
setting: function() {},
_getUIFromIndex: function(t) {
var e = cc.director.getScene();
Number.isInteger(t) || (t = e.childrenCount - 1);
t < 0 && (t += e.childrenCount);
if (t < 0 || t > e.childrenCount - 1) cc.log("_getUIFromIndex error, from = " + t + "!"); else for (var i = t; i >= 0; i--) {
var n = e.children[i];
if (n.name.startsWith("UI")) return n;
}
},
_setOption: function(t, e) {
if (e && void 0 !== e.data && null !== e.data) {
var i = t.getComponent(t.name);
i && (i._data = e.data);
}
t._pop = !(!e || !e.pop);
},
show: function(t, e, i) {
var n = this;
if (t && "" !== t) {
var s = cc.director.getScene(), o = cc.find(t, s);
if (o) {
o.active = !1;
this._setOption(o, e);
o.setSiblingIndex(-1);
o.active = !0;
if (!o._pop) {
var a = this._getUIFromIndex(-2);
a && (a.active = !1);
}
i && i();
var c = o.getComponent(o.name);
c && c.resume();
} else {
e && void 0 !== e.src && null !== e.src && (t = e.src + "/" + t);
cc.loader.loadRes(t, function(o, a) {
if (o) console.log(o); else if (cc.find(t, s)) i && i(); else {
cc.loader.setAutoReleaseRecursively(a, !0);
var c = cc.instantiate(a);
if (c) {
var r = n._getUIFromIndex(-1);
r && (r.active = !(!e || !e.pop));
n._setOption(c, e);
s.addChild(c);
i && i();
} else cc.error("prefab instantiation failed!");
}
});
}
} else cc.error("name is empty!");
},
hide: function(t) {
if (t && "" !== t) {
var e = cc.find(t);
e && (e.active = !1);
} else this.node.active = !1;
},
refresh: function() {},
getUIFromName: function(t) {
if (t && t.startsWith("UI")) {
var e = cc.director.getScene();
return cc.find(t, e);
}
},
goTo: function(t, e) {
var i = this.getUIFromName(t);
if (i) {
var n = i.getSiblingIndex();
if (e) {
if (!(i = this._getUIFromIndex(n - 1))) return;
n = i.getSiblingIndex();
}
for (var s = cc.director.getScene(), o = s.childrenCount - 1; o > n; o--) s.children[o].destroy();
i.active = !0;
}
},
back: function() {
var t = this._getUIFromIndexBack(-1);
if (t) {
t.destroy();
if (t = this._getUIFromIndex(t.getSiblingIndex() - 1)) {
t.active = !0;
var e = t.getComponent(t.name);
e && e.resume();
}
}
},
_getUIFromIndexBack: function(t) {
var e = cc.director.getScene();
Number.isInteger(t) || (t = e.childrenCount - 1);
t < 0 && (t += e.childrenCount);
if (t < 0 || t > e.childrenCount - 1) cc.log("_getUIFromIndex error, from = " + t + "!"); else for (var i = t; i >= 0; i--) {
var n = e.children[i];
if (n.name.startsWith("UI") && cc.currentUI != n.name) return n;
}
},
resume: function() {},
getPositionInOtherNode: function(t, e) {
if (null == t.parent) {
var i = t.convertToWorldSpaceAR(t.getPosition());
return e.convertToNodeSpaceAR(i);
}
var n = t.parent.convertToWorldSpaceAR(t.getPosition());
return e.convertToNodeSpaceAR(n);
},
setLanguage: function(e, i) {
var n = "portal";
e && void 0 !== e.src && null !== e.src && (n = e.src);
t(n + "Language").changeLanguage(i);
}
});
cc._RF.pop();
}, {} ],
XocDiaController: [ function(t, e) {
"use strict";
cc._RF.push(e, "5ec5cXKwLBIIa8zDzEVyEFS", "XocDiaController");
var i = t("XocDiaEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
},
onHistoryEvent: function(t) {
var e = new i.HistoryEvent().fromEvent(t);
this.getUI().show("UIXocDiaTransaction", {
pop: !0,
src: "xocdia",
data: {
items: e.items
}
});
},
onLeaderBoardEvent: function(t) {
var e = new i.LeaderBoardEvent().fromEvent(t);
this.getUI().show("UIXocDiaRank", {
pop: !0,
src: "xocdia",
data: {
items: e.items
}
});
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventRoomJoin: function(t) {
this._super(t);
this.getUI() && this.getUI().updateUserCount();
},
onEventUserEnterRoom: function(t) {
this._super(t);
var e = t.user;
if (this.getUI()) {
this.getUI().updateUserCount();
this.getUI().addNodePlayerEnterRoom(e);
}
},
onEventUserExitRoom: function(t) {
var e = t.user;
if (e.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
} else if (this.getUI()) {
this.getUI().updateUserCount();
this.getUI().removeNodePlayer(e);
}
},
onLoadGameEvent: function(t) {
this.preLoadUI({
pop: !0
}, function() {
this.m_tableInfo || (this.m_tableInfo = {});
var e = new i.LoadGameEvent().fromEvent(t);
this.m_tableInfo.listMyChipPot = e.listMyChipPot;
this.m_tableInfo.listChipPot = e.listChipPot;
this.m_tableInfo.isBetting = e.isBetting;
this.m_tableInfo.time = e.time + 1;
e.result && (this.m_tableInfo.result = e.result);
e.winpot && (this.m_tableInfo.winpot = e.winpot);
cc.lastTime = this.m_tableInfo.time + new Date().getTime() / 1e3;
this.getUI().controller = this;
this.resumeGame();
}.bind(this));
},
resumeGame: function() {
if (null != this.m_tableInfo) {
this.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1e3);
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
var t = [];
t.push(this.ZoneInstance.mySelf);
for (var e = 0; e < this.getRoom().getUserList().length; e++) {
var i = this.getRoom().getUserList()[e];
i.name != this.ZoneInstance.mySelf.name && t.length < 6 && t.push(i);
}
this.getUI().showListUsers(t);
if (this.m_tableInfo.isBetting) {
this.getUI()._stopEffectWinPot();
this.getUI().ToastDatCua();
this.getUI()._turnOffTime();
this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.isBetting);
} else {
this.getUI()._turnOffTime();
this.getUI().resumeXocXoc(this.m_tableInfo.result, this.m_tableInfo.winpot, this.m_tableInfo.time, this.m_tableInfo.isWin);
}
}
},
onUserBetEvent: function(t) {
if (this.m_tableInfo) {
var e = new i.BetEvent().fromEvent(t), n = e.userName, s = e.betChip, o = e.typePot;
this.m_tableInfo.listChipPot[o] += s;
this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
if (this.ZoneInstance.mySelf.name == n) {
this.m_tableInfo.listMyChipPot[o] += s;
this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
}
this.getUI().actionFlyChipToPot(n, o, s);
var a = this.getRoom().getUserByName(n);
a && this.getUI().updateChip(a, 0);
}
},
onEndBettingEvent: function(t) {
var e = new i.EndBetting().fromEvent(t);
this.m_tableInfo || (this.m_tableInfo = {});
this.m_tableInfo.isBetting = !1;
this.m_tableInfo.result = e.result;
this.m_tableInfo.winpot = e.winpot;
this.m_tableInfo.winChip = e.winChip;
this.m_tableInfo.isWin = e.winChip > 0;
this.m_tableInfo.refund = e.refund;
this.getUI()._turnOffTime();
this.getUI().xocxoc(e.result, e.winpot, e.winChip > 0);
},
onHistoryResultEvent: function(t) {
var e = new i.HistoryResponse().fromEvent(t);
console.log(e.result);
this.getUI().showSoiCau(e.result);
},
onPublicMessage: function(t) {
var e = t.sender, i = t.message, n = t.data, s = null != n ? {
dn: n.get("dn"),
fb: n.get("fb")
} : {
dn: "...",
fb: ""
}, o = {};
o.sender = e;
o.msg = i;
o.dataSender = s;
this.getUI().onPublicMessage(o);
}
}), s = null;
SmartFoxSDK.XocDiaController = e.exports = function() {
null == s && (s = new n("UIXocDia", "xocdia"));
return s;
}();
cc._RF.pop();
}, {
XocDiaEvent: "XocDiaEvent"
} ],
XocDiaEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "39815boodxAQ7qhNAUCAPeG", "XocDiaEvent");
var i = {
RESPONSE_NAME: {
LOAD_GAME_RES: "xd1",
BET_RES: "xd2",
END_BETTING: "xd3",
HISTORY_RESULT: "xd4"
}
};
i.LoadGameEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.LOAD_GAME_RES);
},
fromEvent: function(t) {
this.isBetting = t.getBool("b");
this.time = t.getInt("t");
this.listChipPot = t.getDoubleArray("lcp");
this.listMyChipPot = t.getDoubleArray("lmcp");
if (!this.isBetting) {
this.result = t.getByteArray("rs");
this.winpot = t.getByteArray("wp");
}
return this;
}
});
i.BetEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.BET_RES);
},
fromEvent: function(t) {
this.userName = t.getUtfString("un");
this.betChip = t.getDouble("c");
this.typePot = t.getByte("t");
return this;
}
});
i.EndBetting = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.END_BETTING);
},
fromEvent: function(t) {
this.result = t.getByteArray("rs");
this.winChip = t.getDouble("wc");
this.winpot = t.getByteArray("wp");
this.refund = t.getDouble("rfc");
return this;
}
});
i.HistoryResponse = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.HISTORY_RESULT);
},
fromEvent: function(t) {
this.result = t.getByteArray("lr");
return this;
}
});
i.HistoryEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
this.items = [];
this.ITEM_NAME = [ "Lẻ", "Chẵn", "3 Đen", "3 Trắng", "4 Đen", "4 Trắng" ];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) for (var n = e.get(i).getObject(), s = "#" + n.getDouble("id").toFixed(0), o = n.getUtfString("t"), a = n.getDouble("rf"), c = this.getKeQua(n.getIntArray("rs")), r = n.getDoubleArray("b"), h = n.getDoubleArray("w"), l = 0; l < r.length; l++) if (r[l] > 0) {
var u = {};
u.session = s;
u.time = o;
u.ketqua = c;
u.stakes = r[l];
u.win = h[l];
u.cuadat = this.ITEM_NAME[l];
u.hoan_tra = 0;
r[1] - r[0] > 0 ? 1 == l && (u.hoan_tra = a) : 0 == l && (u.hoan_tra = a);
this.items.push(u);
}
return this;
},
getKeQua: function(t) {
for (var e = "", i = 0, n = 0; n < t.length; n++) 0 != t[n] && i++;
e = i % 2 == 0 ? "Chẵn " : "Lẻ ";
3 == i && (e += "3 Trắng");
4 == i && (e += "4 Trắng");
0 == i && (e += "4 Đen");
1 == i && (e += "3 Đen");
return e;
}
});
i.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES);
this.items = [];
},
fromEvent: function(t) {
for (var e = t.getSArray("d"), i = 0; i < e.size(); i++) {
var n = e.get(i).getObject(), s = {};
s.session = i;
s.account = n.getUtfString("dn");
s.win = n.getDouble("m");
s.time = n.getUtfString("t");
this.items.push(s);
}
return this;
}
});
window.XocDiaEvent = e.exports = i;
cc._RF.pop();
}, {} ],
XocDiaItemRank: [ function(t, e) {
"use strict";
cc._RF.push(e, "b257dv/3TtE8J97K+eMOEBc", "XocDiaItemRank");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
listRank: [ cc.SpriteFrame ],
spRank: cc.Sprite,
lbRank: cc.Label,
lbName: cc.Label,
lbWin: cc.Label,
bgItem: cc.Node
},
init: function(t, e) {
if (e < 3) {
this.spRank.node.active = !0;
this.lbRank.node.active = !1;
this.spRank.spriteFrame = this.listRank[e];
} else {
this.spRank.node.active = !1;
this.lbRank.node.active = !0;
this.lbRank.string = e + 1;
}
this.bgItem.active = e % 2 == 0;
this.lbName.string = t.account;
this.lbWin.string = Utils.addDotToNumber(t.win);
}
});
cc._RF.pop();
}, {} ],
XocDiaItemTransaction: [ function(t, e) {
"use strict";
cc._RF.push(e, "649d1zpIAVJTagGV0gBAK2D", "XocDiaItemTransaction");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lb_cua_dat: cc.Label,
lb_ketqua: cc.Label,
lb_tongdat: cc.Label,
lb_hoan_tra: cc.Label,
lb_thuc_nhan: cc.Label,
_dataRank: null
},
init: function(t) {
this._dataRank = t;
this.lbSession.string = t.session;
this.lbTime.string = Utils.reFormatDisplayTime(t.time);
this.lb_cua_dat.string = t.cuadat;
this.lb_thuc_nhan.string = Utils.addDotToNumber(t.win);
this.lb_ketqua.string = t.ketqua;
this.lb_tongdat.string = Utils.addDotToNumber(t.stakes);
this.lb_hoan_tra.string = Utils.addDotToNumber(t.hoan_tra);
}
});
cc._RF.pop();
}, {} ],
XocDiaListCauItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "a8389W/wytOaoy9cNi1sADz", "XocDiaListCauItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
cauItem: cc.Prefab,
listCau: cc.Node
},
init: function(t) {
var e = this;
this.listCau.removeAllChildren(!0);
Promise.all(t.map(function(t) {
var i = cc.instantiate(e.cauItem);
e.listCau.addChild(i);
i.getComponent(i.name).init(t);
}));
}
});
cc._RF.pop();
}, {} ],
XocDiaRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "77ff6mK23pEzanbeKctxfRt", "XocDiaRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "xd2",
HISTORY_RESULT: "xd4"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setTypePot: function(t) {
this._params.putByte("t", t);
return this;
},
setBetChip: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.HistoryResultRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.HISTORY_RESULT);
}
});
window.XocDiaRequest = i;
cc._RF.pop();
}, {} ],
XocDiaSoiCauItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "69c92IEkJRDeafCU1znnby7", "XocDiaSoiCauItem");
cc.Class({
extends: cc.Component,
properties: {
bgCauLe: cc.Node,
bgCauChan: cc.Node,
lbCau: cc.Label,
MaxCount: 4
},
init: function(t) {
if ((t = parseInt(t)) % 2 == 1) {
this.bgCauLe.active = !0;
this.bgCauChan.active = !1;
this.lbCau.string = t;
this.lbCau.node.color = cc.Color.WHITE;
} else {
this.bgCauLe.active = !1;
this.bgCauChan.active = !0;
this.lbCau.string = this.MaxCount - t;
this.lbCau.node.color = cc.Color.BLACK;
}
}
});
cc._RF.pop();
}, {} ],
ZeusController: [ function(t, e) {
"use strict";
cc._RF.push(e, "9ee23AZ5WJFC5kMSVV5v/mP", "ZeusController");
var i = t("ZeusEvent"), n = SmartFoxSDK.BaseController.extend({
m_tableInfo: null,
registerEvents: function() {
this._super();
this.ZoneInstance.addEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
removeEvents: function() {
this._super();
this.ZoneInstance.removeEventListenerExtension(i.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
},
onEventLogin: function(t) {
this._super(t);
this._requestJoinRoom(this.zoneName);
},
onEventRoomJoin: function(t) {
this._super(t);
UIManger.show("UIZeusLobby", {
pop: !0,
src: "zeus"
});
},
onUserVariablesUpdate: function(t) {
this._super(t);
null != this.getUI() && this.getUI().updateUserVariableSlot(t);
},
onHistoryEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = s.getDouble("id").toFixed(0);
o.time = s.getUtfString("t");
o.stakes = s.getDouble("b");
o.win = s.getDouble("w");
o.resultMap = s.getByteArray("rs");
o.linewin = s.getByteArray("lw");
i.push(o);
}
UIManger.show("UIZeusHistoryTransaction", {
pop: !0,
src: "zeus",
data: {
items: i
}
});
},
onLeaderBoardEvent: function(t) {
for (var e = t.getSArray("d"), i = [], n = 0; n < e.size(); n++) {
var s = e.get(n).getObject(), o = {};
o.session = n + 1;
o.account = s.getUtfString("dn");
o.win = s.getDouble("m");
o.time = s.getUtfString("t");
o.win_type = "Thắng";
i.push(o);
}
UIManger.show("UIZeusRank", {
pop: !0,
src: "zeus",
data: {
items: i
}
});
},
onEventUserExitRoom: function(t) {
if (t.user.isItMe) {
null != this.getUI() && (this.getUI().node.active = !1);
UIManger.show("UIHome");
}
},
onUserResultEvent: function(t) {
var e = new i.ResultEvent().fromEvent(t);
this.getUI().ZeusRun(e);
}
}), s = null;
SmartFoxSDK.ZeusController = e.exports = function() {
null == s && (s = new n("UIZeus", "zeus"));
return s;
}();
cc._RF.pop();
}, {
ZeusEvent: "ZeusEvent"
} ],
ZeusEvent: [ function(t, e) {
"use strict";
cc._RF.push(e, "efd24RLQ9NNU7Tlkma2LEQH", "ZeusEvent");
var i = {
RESPONSE_NAME: {
RESULT_RES: "zu2",
FREE_DAILY_RES: "zu3",
MINIMIZE_RES: "zu4",
AUTO_PLAY_RES: "zu5",
STOP_AUTO_PLAY_RES: "zu6"
}
};
i.ResultEvent = CasinoEvent._BaseEvent.extend({
ctor: function() {
this._super(i.RESPONSE_NAME.RESULT_RES);
this.winMoney = 0;
this.freeGift = [];
this.lineWin = [];
this.result = [];
this.session = 0;
this.isFreeSpin = !1;
this.isBonus = !1;
this.freeSpin = 0;
this.type = 0;
this.xSpecial = 0;
this.haiSao = "";
this.ration = 0;
},
fromEvent: function(t) {
this.winMoney = t.getDouble("w");
this.lineWin = t.getIntArray("lw");
this.result = t.getIntArray("r");
this.session = t.getDouble("id");
this.isFreeSpin = t.getBool("fr");
this.freeSpin = t.getByte("ra");
this.type = t.getByte("rs");
this.haiSao = t.getUtfString("hs");
2 == this.type && (this.isThangLon = !0);
3 == this.type && (this.isNohu = !0);
4 == this.type && (this.isNohuX2 = !0);
if (5 == this.type) {
this.isBonus = !0;
for (var e = 0; e < this.haiSao[this.haiSao.length - 1]; e++) this.freeGift.push(this.haiSao[e]);
this.freeGift.push(0);
this.xSpecial = this.haiSao[this.haiSao.length - 2];
}
return this;
}
});
window.ZeusEvent = e.exports = i;
cc._RF.pop();
}, {} ],
ZeusItemBonus: [ function(t, e) {
"use strict";
cc._RF.push(e, "2ae002OQKJG7ZocU2Ogeaf0", "ZeusItemBonus");
cc.Class({
extends: cc.Component,
properties: {
lbMoney: cc.Label,
spItem: sp.Skeleton
},
init: function() {}
});
cc._RF.pop();
}, {} ],
ZeusItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "f72a0nXxyhMEJ+UQ0MG/OuN", "ZeusItem");
cc.Class({
extends: cc.Component,
properties: {},
init: function(t, e) {
var i = this;
this.RedT = t;
Promise.all(this.node.children.map(function(t) {
t.active = !1;
})).then(function() {
i.node.children[e].active = !0;
});
},
stop: function() {},
random: function() {
var t = ~~(11 * Math.random());
this.setIcon(t);
return t;
},
setIcon: function(t, e) {
void 0 === e && (e = !1);
Promise.all(this.node.children.map(function(t) {
t.active = !1;
}));
this.node.children[t].active = !0;
e && (this.data = t);
}
});
cc._RF.pop();
}, {} ],
ZeusLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "5b01cl0TKRCW7zQ71n2Uct5", "ZeusLine");
var i = t("Helper");
cc.Class({
extends: cc.Component,
properties: {
nodeLine: cc.Node,
typeLine: 0
},
init: function(t) {
this.KCV = t;
this.eventSelectAll();
},
eventOpen: function() {
this.node.active = !0;
},
eventClose: function() {
var t = this.getTotalLineSelect();
this.node.active && t < 1 ? this.KCV.addNotice("Chọn ít nhất 1 dòng") : this.node.active = !1;
},
eventSelect: function(t, e) {
var n = parseInt(e);
i.setMaterialGray(t.target.getComponent(cc.Sprite), i.isMaterialGray(t.target.getComponent(cc.Sprite)));
this.data[n] = i.isMaterialGray(t.target.getComponent(cc.Sprite));
this.updateString();
this.typeLine = 3;
},
eventBoChon: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !0);
return !1;
})).then(function(e) {
t.data = e;
t.typeLine = -1;
t.updateString();
});
},
eventSelectChan: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 1);
return e % 2 != 1;
})).then(function(e) {
t.data = e;
t.typeLine = 2;
t.updateString();
});
},
eventSelectLe: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t, e) {
i.setMaterialGray(t.getComponent(cc.Sprite), e % 2 == 0);
return e % 2 != 0;
})).then(function(e) {
t.data = e;
t.typeLine = 1;
t.updateString();
});
},
eventSelectAll: function() {
var t = this;
Promise.all(this.nodeLine.children.map(function(t) {
i.setMaterialGray(t.getComponent(cc.Sprite), !1);
return !0;
})).then(function(e) {
t.typeLine = 0;
t.data = e;
t.updateString();
});
},
updateString: function() {
var t = this.getTotalLineSelect();
this.KCV.setNumberLines(t);
this.KCV.setNumberStake(t);
},
getTotalLineChan: function() {
return 12;
},
getTotalLineLe: function() {
return 13;
},
getTotalLine: function() {
return 25;
},
getTotalLineSelect: function() {
for (var t = 0, e = 1; e < this.data.length; e++) this.data[e] && t++;
return t;
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
ZeusMainLine: [ function(t, e) {
"use strict";
cc._RF.push(e, "201d5GLsDVCWq3vFVfxB+5M", "ZeusMainLine");
cc.Class({
extends: cc.Component,
init: function() {
return this;
},
onEnable: function() {},
onDisable: function() {},
onhover: function() {
this.node.active = !0;
},
offhover: function() {
this.node.active = !1;
},
onEf: function() {
this.onhover();
this.node.pauseSystemEvents(!0);
},
offEf: function() {
this.offhover();
this.node.resumeSystemEvents(!0);
},
offAll: function() {}
});
cc._RF.pop();
}, {} ],
ZeusRankItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "67567IO8ytEOLx19xqvyNTX", "ZeusRankItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
lbSession: cc.Label,
lbTime: cc.Label,
lbAccount: cc.Label,
lbWin: cc.Label,
lbDes: cc.Label
},
init: function(t, e) {
this.lbTime.string = e.time;
this.lbSession.string = "#" + e.session;
this.lbAccount.string = e.account;
this.lbDes.string = e.win_type;
this.lbWin.string = Utils.addDotToNumber(e.win);
}
});
cc._RF.pop();
}, {} ],
ZeusReel: [ function(t, e) {
"use strict";
cc._RF.push(e, "4300e0hteBBP5YX06aNN+Dp", "ZeusReel");
cc.Class({
extends: cc.Component,
properties: {},
init: function(t, e) {
var i = this;
this.SLV = t;
this.icons = [];
var n = this;
Promise.all(e.map(function(t) {
var e = cc.instantiate(n.SLV.iconPrefab);
n.node.addChild(e);
(e = e.getComponent("ZeusItem")).init(n.SLV, t);
return e;
})).then(function(t) {
i.icons = t;
});
},
spin: function(t) {
this.node.stopAllActions();
var e = .4, i = 2;
if (this.SLV.isFast) {
e = .2;
i = 1;
}
var n = cc.moveTo(i, cc.v2(this.node.x, -(this.node.height - 420))).easing(cc.easeInOut(1)), s = cc.callFunc(function() {
0 === t && this.SLV.copy();
this.node.y = 0;
}, this);
if (4 === t) {
var o = cc.callFunc(function() {
this.node.y = 0;
this.SLV.runActionWon();
}, this);
this.node.runAction(cc.sequence(cc.delayTime(t * e), n, o));
} else this.node.runAction(cc.sequence(cc.delayTime(t * e), n, s));
},
stop: function() {
this.node.stopAllActions();
this.SLV.copy();
this.node.y = 0;
}
});
cc._RF.pop();
}, {} ],
ZeusRequest: [ function(t, e) {
"use strict";
cc._RF.push(e, "7a2bdjwJVpHPrTQ9okwYufo", "ZeusRequest");
var i = {
REQUEST_NAME: {
BET_REQUEST: "zu1",
AUTO_PLAY_REQUEST: "zu5",
STOP_AUTO_PLAY_REQUEST: "zu6"
}
};
i._BaseRequest = SmartFoxSDK.Class.extend({
ctor: function(t) {
this._requestName = t;
this._params = new SmartFoxSDK.SObject();
this._roomId = SmartFoxSDK.ZeusController.ZoneInstance.getRoomByName("zeus").id;
},
setRoomId: function(t) {
this._roomId = t;
return this;
},
getRequestName: function() {
return this._requestName;
},
toSRequest: function() {
return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
}
});
i.BetRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.BET_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t, e) {
this._params.putDouble("b", t);
void 0 !== e && this._params.putUtfString("cheat", e);
return this;
}
});
i.AutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.AUTO_PLAY_REQUEST);
},
setLineChan: function() {
this._params.putBool("lc", !0);
return this;
},
setLineLe: function() {
this._params.putBool("ll", !0);
return this;
},
setLine: function(t) {
this._params.putIntArray("la", t);
return this;
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
i.StopAutoPlayRequest = i._BaseRequest.extend({
ctor: function() {
this._super(i.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
},
setBet: function(t) {
this._params.putDouble("b", t);
return this;
}
});
window.ZeusRequest = i;
cc._RF.pop();
}, {} ],
ZeusTransactionItem: [ function(t, e) {
"use strict";
cc._RF.push(e, "8b771omZChDF7cu6tIKECgV", "ZeusTransactionItem");
cc.Class({
extends: cc.BaseItemCustom,
properties: {
bgItem: cc.Node,
lbSession: cc.Label,
lbTime: cc.Label,
lbMucDat: cc.Label,
lbWin: cc.Label,
_dataRank: null
},
init: function(t, e) {
this._dataRank = e;
this.bgItem.active = t % 2 == 1;
this.lbSession.string = "#" + e.session;
this.lbTime.string = Utils.reFormatDisplayTime(e.time);
this.lbMucDat.string = Utils.addDotToNumber(e.stakes);
this.lbWin.string = Utils.addDotToNumber(e.win);
},
eventDetail: function() {
this.show("UIZeusHistoryDetail", {
pop: !0,
src: "zeus",
data: this._dataRank
});
}
});
cc._RF.pop();
}, {} ],
ZeusTrialResult: [ function(t, e) {
"use strict";
cc._RF.push(e, "3386fhLFg5M27x5sHahpZ+M", "ZeusTrialResult");
var i = {
results: [ {
freeGift: [ 1200, 1e3, 1200, 1200 ],
freeSpin: 0,
haiSao: [ 1200, 1e3, 1200, 1200, 2, 4 ],
isBonus: !0,
isFreeSpin: 0,
lineWin: [ 2 ],
ration: 0,
result: [ 1, 1, 1, 1, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1088,
type: 5,
xSpecial: 2,
winMoney: 12600
}, {
freeGift: [],
freeSpin: 2,
haiSao: [],
isBonus: !1,
isFreeSpin: 1,
lineWin: [ 2 ],
ration: 0,
result: [ 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1068,
type: 0,
winMoney: 0
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [],
ration: 0,
result: [ 5, 2, 0, 5, 3, 6, 5, 3, 4, 0, 6, 6, 4, 0, 5 ],
session: 1054,
type: 0,
winMoney: 0
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 11, 17 ],
ration: 0,
result: [ 3, 0, 6, 5, 4, 3, 4, 1, 6, 6, 6, 3, 3, 5, 6 ],
session: 1052,
type: 1,
winMoney: 1e3
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 7, 10, 18, 17 ],
ration: 0,
result: [ 2, 4, 1, 4, 3, 4, 2, 1, 6, 5, 0, 5, 5, 5, 5 ],
session: 1053,
type: 1,
winMoney: 2800
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 6, 7, 9, 10, 13, 14, 18, 17, 20 ],
ration: 0,
result: [ 3, 3, 5, 5, 4, 6, 2, 3, 4, 5, 3, 5, 5, 3, 5 ],
session: 1055,
type: 1,
winMoney: 4400
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 18 ],
ration: 0,
result: [ 6, 4, 4, 6, 1, 5, 6, 3, 3, 4, 6, 6, 5, 3, 4 ],
session: 1056,
type: 1,
winMoney: 300
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 6, 12, 16 ],
ration: 0,
result: [ 5, 6, 2, 5, 6, 0, 4, 5, 5, 0, 4, 2, 5, 6, 6 ],
session: 1057,
type: 1,
winMoney: 600
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 7, 12, 20 ],
ration: 0,
result: [ 6, 5, 6, 2, 5, 5, 6, 4, 6, 3, 5, 6, 6, 4, 4 ],
session: 1058,
type: 1,
winMoney: 1200
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 10, 15 ],
ration: 0,
result: [ 4, 6, 6, 5, 2, 4, 4, 3, 3, 5, 6, 6, 5, 2, 3 ],
session: 1059,
type: 1,
winMoney: 600
}, {
freeGift: [ 2200, 1e3, 1200 ],
freeSpin: 0,
haiSao: [ 2200, 1e3, 1200, 3, 3 ],
isBonus: !0,
isFreeSpin: 0,
lineWin: [ 2 ],
ration: 0,
result: [ 1, 1, 1, 1, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1060,
type: 5,
xSpecial: 3,
winMoney: 10800
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 13 ],
ration: 0,
result: [ 6, 1, 1, 3, 5, 3, 5, 2, 4, 6, 6, 3, 6, 6, 4 ],
session: 1063,
type: 1,
winMoney: 400
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 9 ],
ration: 0,
result: [ 0, 3, 3, 5, 4, 0, 2, 6, 3, 1, 5, 4, 5, 2, 5 ],
session: 1064,
type: 1,
winMoney: 1200
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 1, 4, 5, 11, 13, 14 ],
ration: 0,
result: [ 0, 3, 4, 0, 1, 5, 0, 5, 5, 5, 4, 2, 2, 6, 4 ],
session: 1065,
type: 1,
winMoney: 2100
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 3, 8, 17 ],
ration: 0,
result: [ 5, 5, 6, 4, 6, 6, 6, 0, 5, 5, 6, 6, 6, 6, 0 ],
session: 1066,
type: 1,
winMoney: 1800
}, {
freeGift: [],
freeSpin: 4,
haiSao: [],
isBonus: !1,
isFreeSpin: 1,
lineWin: [ 2 ],
ration: 0,
result: [ 2, 2, 2, 2, 2, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ],
session: 1068,
type: 0,
winMoney: 0
}, {
freeGift: [],
freeSpin: 3,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 2, 3, 7, 8, 9, 11, 19, 20 ],
ration: 0,
result: [ 5, 3, 5, 5, 6, 6, 6, 2, 1, 6, 5, 5, 4, 5, 5 ],
session: 1071,
type: 1,
winMoney: 4e3
}, {
freeGift: [],
freeSpin: 8,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
lineWin: [ 5, 10, 14, 17 ],
ration: 0,
result: [ 6, 5, 2, 3, 2, 4, 3, 4, 5, 5, 6, 6, 5, 5, 3 ],
session: 1075,
type: 1,
winMoney: 800
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
isNohu: !0,
lineWin: [ 1, 2, 3, 6, 7, 8, 9, 18, 17 ],
ration: 0,
result: [ 3, 3, 3, 3, 3, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5 ],
session: 1084,
type: 2,
winMoney: 505190
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
isNohu: !0,
lineWin: [ 1, 2, 3, 6, 7, 8, 9, 18, 17 ],
ration: 0,
result: [ 3, 3, 3, 3, 3, 0, 0, 0, 4, 5, 5, 5, 5, 5, 5 ],
session: 1084,
type: 2,
winMoney: 510480
}, {
freeGift: [],
freeSpin: 0,
haiSao: [],
isBonus: !1,
isFreeSpin: 0,
isThangLon: !0,
lineWin: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 14, 15, 16, 18, 17 ],
ration: 0,
result: [ 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5 ],
session: 1085,
type: 2,
winMoney: 86600
} ],
getItemTrial: function(t) {
t = null != t && null != t && "" != t ? parseInt(t) : Math.floor(Math.random() * i.results.length);
return i.results[t];
}
};
e.exports = i;
cc._RF.pop();
}, {} ],
ZeusWinGame: [ function(t, e) {
"use strict";
cc._RF.push(e, "085daivgA1Gcb7x7OQmBeqt", "ZeusWinGame");
var i, n = t("Helper");
cc.Class({
extends: cc.VozBaseComponent,
properties: {
lbMoneyWin: cc.Label,
BonusFreeSpine: cc.Node,
NoHuCoin: cc.Node,
ThangText: cc.Node,
ThangLonCoin: cc.Node,
FreeCount: cc.Node
},
onLoad: function() {
i = this;
},
init: function(t) {
this.SLV = t;
},
runWinGame: function() {
var t = this.node.getChildByName("bg_all");
t.active = !0;
if (this.SLV.isThangLon && !this.SLV.isNoHu) {
this.SLV.playBigWin();
this.runZeusThangLon();
} else if (this.SLV.isNoHu) {
this.SLV.playJackpot();
this.runZeusNoHu();
} else if (this.SLV.isFree) this.runFreeSpine(); else if (this.SLV.isBonus) {
this.SLV.playBonus();
this.runBonusSpine();
} else {
i.SLV.setMoneyWin(i.SLV.winMoney);
i.updateFreeSpin();
if (this.SLV.winMoney > 0) {
this.SLV.playSpinWin();
this.lbMoneyWin.node.active = !0;
n.numberTo(this.lbMoneyWin, 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
i.lbMoneyWin.node.active = !1;
t.active = !1;
i.SLV.autoQuay();
}, 1);
});
this.SLV.winMoney = 0;
} else {
t.active = !1;
i.SLV.autoQuay();
}
}
0 == this.SLV.type && this.SLV.playSpinMis();
},
updateFreeSpin: function() {
if (this.SLV.freeSpin < 1) this.FreeCount.active = !1; else {
this.FreeCount.active = !0;
this.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = this.SLV.freeSpin;
}
},
checkRunAgainWin: function() {
(this.SLV.isBonus || this.SLV.winMoney > 0 || this.SLV.isFree || this.SLV.isNoHu || this.SLV.isThangLon || this.SLV.isAuto) && this.runWinGame();
},
runFreeSpine: function() {
this.SLV.isFree = !1;
this.BonusFreeSpine.active = !0;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "FreeSpine", !0);
this.scheduleOnce(function() {
i.node.getChildByName("bg_all").active = !1;
i.BonusFreeSpine.active = !1;
i.FreeCount.active = !0;
i.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = i.SLV.freeSpin;
i.checkRunAgainWin();
}, 3);
},
runBonusSpine: function() {
this.SLV.isBonus = !1;
this.BonusFreeSpine.active = !0;
this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, "BonusGame", !0);
this.scheduleOnce(function() {
i.BonusFreeSpine.active = !1;
i.show("UIZeusBonus", {
src: "zeus",
pop: !0,
data: {
gifts: i.SLV.freeGift,
xSpecial: i.SLV.xSpecial,
total: i.SLV.winMoney
}
});
}, 2);
},
runZeusNoHu: function() {
this.SLV.isNoHu = !1;
this.NoHuCoin.active = !0;
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, -50));
t.active = !0;
this.ThangText.active = !0;
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", !0);
n.numberTo(t.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 190));
t.runAction(cc.sequence(e, cc.delayTime(1), cc.callFunc(function() {
i.node.getChildByName("bg_all").active = !1;
i.NoHuCoin.active = !1;
i.ThangText.active = !1;
t.active = !1;
i.checkRunAgainWin();
})));
}, 5);
});
},
runZeusThangLon: function() {
this.SLV.isThangLon = !1;
this.ThangLonCoin.active = !0;
this.ThangText.active = !0;
this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "ThangLon", !0);
var t = i.node.getChildByName("lb_number_win");
t.setPosition(cc.v2(0, -30));
t.active = !0;
n.numberTo(t.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, !0, function() {
i.scheduleOnce(function() {
var e = cc.moveTo(.5, cc.v2(0, 170));
t.runAction(cc.sequence(e, cc.delayTime(.5), cc.callFunc(function() {
t.active = !1;
i.node.getChildByName("bg_all").active = !1;
i.ThangLonCoin.active = !1;
i.ThangText.active = !1;
i.checkRunAgainWin();
})));
}, 3);
});
}
});
cc._RF.pop();
}, {
Helper: "Helper"
} ],
bacayLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "28fc0psf1lHUYopm1vgE1uM", "bacayLanguage");
var i = {
LANGUAGE_VN: {
lb_muc_cuoc: "Mức cược:",
lb_chuong: "Chương",
lb_dat_ga: "Đặt Gà",
lb_them: "Thêm",
lb_tim_bet: "Bắt Đầu Đặt Cược",
lb_tim_start: "Chuẩn Bị Bắt Đầu",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
baccaratLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "fb41apTwF9L7psdiX105MPI", "baccaratLanguage");
var i = {
LANGUAGE_VN: {
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
candyLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "51aa1MI6HdLxbskwijQcy94", "candyLanguage");
var i = {
LANGUAGE_VN: {
lb_title_select_line: "DÒNG ĐẶT CƯỢC",
lb_stt: "STT",
lb_thoi_gian: "THỜI GIAN",
lb_tai_khoan: "TÀI KHOẢN",
lb_no_thang: "THẮNG",
lb_loai: "LOẠI",
lb_phien: "PHIÊN",
lb_phong: "PHÒNG",
lb_chitiet: "CHI TIẾT",
lbPhienTxt: "Phiên",
lbMoneyTxt: "Tổng thắng",
noti_not_trial: "Chức năng này không có ở chế độ chơi thử",
noti_not_money: "Không đủ số dư",
noti_is_playing: "Hiện đang trong tiến trình quay",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("en");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
return i.LANGUAGE_VN;
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
kimcuongLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "e1f4fBxiy5FFrMmuClJlA3J", "kimcuongLanguage");
var i = {
LANGUAGE_VN: {
lb_text_so_du: "Số dư:",
lb_hu_kim_cuong: "Hũ Kim Cương",
lb_title_select_line: "CHỌN DÒNG",
lb_chan: "Chẵn",
lb_le: "Lẻ",
lb_tat_ca: "Tất cả",
lb_bo_chon: "Bỏ chọn",
lb_so_luot_quay_mien_phi: "Số lượt quay miễn phí: ",
lb_free_spine_2: "lượt quay miễn phí",
lb_thang: "Thắng",
lb_tien_cuoc: "Tiền cược",
lb_luot_boc: "Số lượt bốc: ",
lb_phien: "Phiên: ",
lb_money_win: "Số tiền thắng:",
lb_phien_1: "Phiên",
lb_thoi_gian: "Thời Gian",
lb_dat: "Đặt",
lb_chitiet: "Chi tiết",
lb_name: "Tên Nhân Vật",
lb_des: "Mô Tả",
noti_not_trial: "Chức năng này không có ở chế độ chơi thử",
noti_not_money: "Không đủ số dư",
noti_is_playing: "Hiện đang trong tiến trình quay",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("en");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
return i.LANGUAGE_VN;
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
locthuLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "4ca5bEHzeFFe6dIWZWL/T7+", "locthuLanguage");
var i = {
LANGUAGE_VN: {
lb_bet: "Đặt",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
maubinhLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "3aa3aiw4O1DN6jMJX5d8rS4", "maubinhLanguage");
var i = {
LANGUAGE_VN: {
lb_xep_bai: "Xếp bài",
lb_so_bai: "So bài",
lb_bao_binh: "Báo binh",
xep_xong: "Xếp Xong",
bao_binh: "Báo Binh",
sap_ba_chi: "Sập 3 chi",
binh_lung: "Binh Lủng",
mau_thau: "Mậu Thầu",
mot_doi: "Một Đôi",
hai_doi: "Hai Đôi",
xam_co: "Xám Cô",
sanh: "Sảnh",
sanh_lon: "Sảnh Lớn",
thung: "Thùng",
cu_lu: "Cù Lũ",
tu_quy: "Tứ Quý",
thung_pha_sanh: "Thùng Phá Sảnh",
thung_pha_sanh_lon: "Thùng Phá Sảnh Lơn",
cu_lu_chi2: "Cù Lũ Chi 2",
xam_chi_cuoi: "Sám Chi Cuối",
tu_quy_chi2: "Tứ Quý Chi 2",
tu_quy_chi_dau: "Tứ Quý Chi Đầu",
thung_pha_sanh_chi2: "Thùng Phá Sảnh Chi 2",
thung_pha_sanh_chi_dau: "Thùng Phá Sảnh Chi Đầu",
noti_phong_day: "Phòng đã đầy vui vòng chọn phòng khác",
dang_ky_roi_ban: "Đăng ký rời bàn!",
huy_roi_ban: "Hủy rời bàn!",
home_setting: "xxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
md5: [ function(require, module, exports) {
(function(process, global) {
"use strict";
cc._RF.push(module, "c22711sJV5Hl6M0PefWx2sK", "md5");
null == typeof global && (window.global = {});
(function() {
var ERROR = "input is invalid type", WINDOW = "object" == typeof window, root = WINDOW ? window : {};
root.JS_MD5_NO_WINDOW && (WINDOW = !1);
var WEB_WORKER = !WINDOW && "object" == typeof self, NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
NODE_JS ? root = global : WEB_WORKER && (root = self);
var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports, AMD = "function" == typeof define && define.amd, ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [ 128, 32768, 8388608, -2147483648 ], SHIFT = [ 0, 8, 16, 24 ], OUTPUT_TYPES = [ "hex", "array", "digest", "buffer", "arrayBuffer", "base64" ], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8;
if (ARRAY_BUFFER) {
var buffer = new ArrayBuffer(68);
buffer8 = new Uint8Array(buffer);
blocks = new Uint32Array(buffer);
}
!root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(t) {
return "[object Array]" === Object.prototype.toString.call(t);
});
var createOutputMethod = function(t) {
return function(e) {
return new Md5(!0).update(e)[t]();
};
}, createMethod = function() {
var t = createOutputMethod("hex");
NODE_JS && (t = nodeWrap(t));
t.create = function() {
return new Md5();
};
t.update = function(e) {
return t.create().update(e);
};
for (var e = 0; e < OUTPUT_TYPES.length; ++e) {
var i = OUTPUT_TYPES[e];
t[i] = createOutputMethod(i);
}
return t;
}, nodeWrap = function nodeWrap(method) {
var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), nodeMethod = function(t) {
if ("string" == typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex");
if (null == t) throw ERROR;
t.constructor === ArrayBuffer && (t = new Uint8Array(t));
return Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t);
};
return nodeMethod;
};
function Md5(t) {
if (t) {
blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
this.blocks = blocks;
this.buffer8 = buffer8;
} else if (ARRAY_BUFFER) {
var e = new ArrayBuffer(68);
this.buffer8 = new Uint8Array(e);
this.blocks = new Uint32Array(e);
} else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = 0;
this.finalized = this.hashed = !1;
this.first = !0;
}
Md5.prototype.update = function(t) {
if (!this.finalized) {
var e = "string" != typeof t;
if (e) {
if (null == t) throw ERROR;
t.constructor === root.ArrayBuffer && (t = new Uint8Array(t));
}
var i = t.length;
if (e && ("number" != typeof i || !Array.isArray(t) && (!ARRAY_BUFFER || !ArrayBuffer.isView(t)))) throw ERROR;
for (var n, s, o = 0, a = this.blocks, c = this.buffer8; o < i; ) {
if (this.hashed) {
this.hashed = !1;
a[0] = a[16];
a[16] = a[1] = a[2] = a[3] = a[4] = a[5] = a[6] = a[7] = a[8] = a[9] = a[10] = a[11] = a[12] = a[13] = a[14] = a[15] = 0;
}
if (e) if (ARRAY_BUFFER) for (s = this.start; o < i && s < 64; ++o) c[s++] = t[o]; else for (s = this.start; o < i && s < 64; ++o) a[s >> 2] |= t[o] << SHIFT[3 & s++]; else if (ARRAY_BUFFER) for (s = this.start; o < i && s < 64; ++o) if ((n = t.charCodeAt(o)) < 128) c[s++] = n; else if (n < 2048) {
c[s++] = 192 | n >> 6;
c[s++] = 128 | 63 & n;
} else if (n < 55296 || n >= 57344) {
c[s++] = 224 | n >> 12;
c[s++] = 128 | n >> 6 & 63;
c[s++] = 128 | 63 & n;
} else {
n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++o));
c[s++] = 240 | n >> 18;
c[s++] = 128 | n >> 12 & 63;
c[s++] = 128 | n >> 6 & 63;
c[s++] = 128 | 63 & n;
} else for (s = this.start; o < i && s < 64; ++o) if ((n = t.charCodeAt(o)) < 128) a[s >> 2] |= n << SHIFT[3 & s++]; else if (n < 2048) {
a[s >> 2] |= (192 | n >> 6) << SHIFT[3 & s++];
a[s >> 2] |= (128 | 63 & n) << SHIFT[3 & s++];
} else if (n < 55296 || n >= 57344) {
a[s >> 2] |= (224 | n >> 12) << SHIFT[3 & s++];
a[s >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & s++];
a[s >> 2] |= (128 | 63 & n) << SHIFT[3 & s++];
} else {
n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(++o));
a[s >> 2] |= (240 | n >> 18) << SHIFT[3 & s++];
a[s >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & s++];
a[s >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & s++];
a[s >> 2] |= (128 | 63 & n) << SHIFT[3 & s++];
}
this.lastByteIndex = s;
this.bytes += s - this.start;
if (s >= 64) {
this.start = s - 64;
this.hash();
this.hashed = !0;
} else this.start = s;
}
return this;
}
};
Md5.prototype.finalize = function() {
if (!this.finalized) {
this.finalized = !0;
var t = this.blocks, e = this.lastByteIndex;
t[e >> 2] |= EXTRA[3 & e];
if (e >= 56) {
this.hashed || this.hash();
t[0] = t[16];
t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0;
}
t[14] = this.bytes << 3;
this.hash();
}
};
Md5.prototype.hash = function() {
var t, e, i, n, s, o, a = this.blocks;
if (this.first) e = ((e = ((t = ((t = a[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (i = ((i = (-271733879 ^ (n = ((n = (-1732584194 ^ 2004318071 & t) + a[1] - 117830708) << 12 | n >>> 20) + t << 0) & (-271733879 ^ t)) + a[2] - 1126478375) << 17 | i >>> 15) + n << 0) & (n ^ t)) + a[3] - 1316259209) << 22 | e >>> 10) + i << 0; else {
t = this.h0;
e = this.h1;
i = this.h2;
e = ((e += ((t = ((t += ((n = this.h3) ^ e & (i ^ n)) + a[0] - 680876936) << 7 | t >>> 25) + e << 0) ^ (i = ((i += (e ^ (n = ((n += (i ^ t & (e ^ i)) + a[1] - 389564586) << 12 | n >>> 20) + t << 0) & (t ^ e)) + a[2] + 606105819) << 17 | i >>> 15) + n << 0) & (n ^ t)) + a[3] - 1044525330) << 22 | e >>> 10) + i << 0;
}
e = ((e += ((t = ((t += (n ^ e & (i ^ n)) + a[4] - 176418897) << 7 | t >>> 25) + e << 0) ^ (i = ((i += (e ^ (n = ((n += (i ^ t & (e ^ i)) + a[5] + 1200080426) << 12 | n >>> 20) + t << 0) & (t ^ e)) + a[6] - 1473231341) << 17 | i >>> 15) + n << 0) & (n ^ t)) + a[7] - 45705983) << 22 | e >>> 10) + i << 0;
e = ((e += ((t = ((t += (n ^ e & (i ^ n)) + a[8] + 1770035416) << 7 | t >>> 25) + e << 0) ^ (i = ((i += (e ^ (n = ((n += (i ^ t & (e ^ i)) + a[9] - 1958414417) << 12 | n >>> 20) + t << 0) & (t ^ e)) + a[10] - 42063) << 17 | i >>> 15) + n << 0) & (n ^ t)) + a[11] - 1990404162) << 22 | e >>> 10) + i << 0;
e = ((e += ((t = ((t += (n ^ e & (i ^ n)) + a[12] + 1804603682) << 7 | t >>> 25) + e << 0) ^ (i = ((i += (e ^ (n = ((n += (i ^ t & (e ^ i)) + a[13] - 40341101) << 12 | n >>> 20) + t << 0) & (t ^ e)) + a[14] - 1502002290) << 17 | i >>> 15) + n << 0) & (n ^ t)) + a[15] + 1236535329) << 22 | e >>> 10) + i << 0;
e = ((e += ((n = ((n += (e ^ i & ((t = ((t += (i ^ n & (e ^ i)) + a[1] - 165796510) << 5 | t >>> 27) + e << 0) ^ e)) + a[6] - 1069501632) << 9 | n >>> 23) + t << 0) ^ t & ((i = ((i += (t ^ e & (n ^ t)) + a[11] + 643717713) << 14 | i >>> 18) + n << 0) ^ n)) + a[0] - 373897302) << 20 | e >>> 12) + i << 0;
e = ((e += ((n = ((n += (e ^ i & ((t = ((t += (i ^ n & (e ^ i)) + a[5] - 701558691) << 5 | t >>> 27) + e << 0) ^ e)) + a[10] + 38016083) << 9 | n >>> 23) + t << 0) ^ t & ((i = ((i += (t ^ e & (n ^ t)) + a[15] - 660478335) << 14 | i >>> 18) + n << 0) ^ n)) + a[4] - 405537848) << 20 | e >>> 12) + i << 0;
e = ((e += ((n = ((n += (e ^ i & ((t = ((t += (i ^ n & (e ^ i)) + a[9] + 568446438) << 5 | t >>> 27) + e << 0) ^ e)) + a[14] - 1019803690) << 9 | n >>> 23) + t << 0) ^ t & ((i = ((i += (t ^ e & (n ^ t)) + a[3] - 187363961) << 14 | i >>> 18) + n << 0) ^ n)) + a[8] + 1163531501) << 20 | e >>> 12) + i << 0;
e = ((e += ((n = ((n += (e ^ i & ((t = ((t += (i ^ n & (e ^ i)) + a[13] - 1444681467) << 5 | t >>> 27) + e << 0) ^ e)) + a[2] - 51403784) << 9 | n >>> 23) + t << 0) ^ t & ((i = ((i += (t ^ e & (n ^ t)) + a[7] + 1735328473) << 14 | i >>> 18) + n << 0) ^ n)) + a[12] - 1926607734) << 20 | e >>> 12) + i << 0;
e = ((e += ((o = (n = ((n += ((s = e ^ i) ^ (t = ((t += (s ^ n) + a[5] - 378558) << 4 | t >>> 28) + e << 0)) + a[8] - 2022574463) << 11 | n >>> 21) + t << 0) ^ t) ^ (i = ((i += (o ^ e) + a[11] + 1839030562) << 16 | i >>> 16) + n << 0)) + a[14] - 35309556) << 23 | e >>> 9) + i << 0;
e = ((e += ((o = (n = ((n += ((s = e ^ i) ^ (t = ((t += (s ^ n) + a[1] - 1530992060) << 4 | t >>> 28) + e << 0)) + a[4] + 1272893353) << 11 | n >>> 21) + t << 0) ^ t) ^ (i = ((i += (o ^ e) + a[7] - 155497632) << 16 | i >>> 16) + n << 0)) + a[10] - 1094730640) << 23 | e >>> 9) + i << 0;
e = ((e += ((o = (n = ((n += ((s = e ^ i) ^ (t = ((t += (s ^ n) + a[13] + 681279174) << 4 | t >>> 28) + e << 0)) + a[0] - 358537222) << 11 | n >>> 21) + t << 0) ^ t) ^ (i = ((i += (o ^ e) + a[3] - 722521979) << 16 | i >>> 16) + n << 0)) + a[6] + 76029189) << 23 | e >>> 9) + i << 0;
e = ((e += ((o = (n = ((n += ((s = e ^ i) ^ (t = ((t += (s ^ n) + a[9] - 640364487) << 4 | t >>> 28) + e << 0)) + a[12] - 421815835) << 11 | n >>> 21) + t << 0) ^ t) ^ (i = ((i += (o ^ e) + a[15] + 530742520) << 16 | i >>> 16) + n << 0)) + a[2] - 995338651) << 23 | e >>> 9) + i << 0;
e = ((e += ((n = ((n += (e ^ ((t = ((t += (i ^ (e | ~n)) + a[0] - 198630844) << 6 | t >>> 26) + e << 0) | ~i)) + a[7] + 1126891415) << 10 | n >>> 22) + t << 0) ^ ((i = ((i += (t ^ (n | ~e)) + a[14] - 1416354905) << 15 | i >>> 17) + n << 0) | ~t)) + a[5] - 57434055) << 21 | e >>> 11) + i << 0;
e = ((e += ((n = ((n += (e ^ ((t = ((t += (i ^ (e | ~n)) + a[12] + 1700485571) << 6 | t >>> 26) + e << 0) | ~i)) + a[3] - 1894986606) << 10 | n >>> 22) + t << 0) ^ ((i = ((i += (t ^ (n | ~e)) + a[10] - 1051523) << 15 | i >>> 17) + n << 0) | ~t)) + a[1] - 2054922799) << 21 | e >>> 11) + i << 0;
e = ((e += ((n = ((n += (e ^ ((t = ((t += (i ^ (e | ~n)) + a[8] + 1873313359) << 6 | t >>> 26) + e << 0) | ~i)) + a[15] - 30611744) << 10 | n >>> 22) + t << 0) ^ ((i = ((i += (t ^ (n | ~e)) + a[6] - 1560198380) << 15 | i >>> 17) + n << 0) | ~t)) + a[13] + 1309151649) << 21 | e >>> 11) + i << 0;
e = ((e += ((n = ((n += (e ^ ((t = ((t += (i ^ (e | ~n)) + a[4] - 145523070) << 6 | t >>> 26) + e << 0) | ~i)) + a[11] - 1120210379) << 10 | n >>> 22) + t << 0) ^ ((i = ((i += (t ^ (n | ~e)) + a[2] + 718787259) << 15 | i >>> 17) + n << 0) | ~t)) + a[9] - 343485551) << 21 | e >>> 11) + i << 0;
if (this.first) {
this.h0 = t + 1732584193 << 0;
this.h1 = e - 271733879 << 0;
this.h2 = i - 1732584194 << 0;
this.h3 = n + 271733878 << 0;
this.first = !1;
} else {
this.h0 = this.h0 + t << 0;
this.h1 = this.h1 + e << 0;
this.h2 = this.h2 + i << 0;
this.h3 = this.h3 + n << 0;
}
};
Md5.prototype.hex = function() {
this.finalize();
var t = this.h0, e = this.h1, i = this.h2, n = this.h3;
return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15];
};
Md5.prototype.toString = Md5.prototype.hex;
Md5.prototype.digest = function() {
this.finalize();
var t = this.h0, e = this.h1, i = this.h2, n = this.h3;
return [ 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255 ];
};
Md5.prototype.array = Md5.prototype.digest;
Md5.prototype.arrayBuffer = function() {
this.finalize();
var t = new ArrayBuffer(16), e = new Uint32Array(t);
e[0] = this.h0;
e[1] = this.h1;
e[2] = this.h2;
e[3] = this.h3;
return t;
};
Md5.prototype.buffer = Md5.prototype.arrayBuffer;
Md5.prototype.base64 = function() {
for (var t, e, i, n = "", s = this.array(), o = 0; o < 15; ) {
t = s[o++];
e = s[o++];
i = s[o++];
n += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | e >>> 4)] + BASE64_ENCODE_CHAR[63 & (e << 2 | i >>> 6)] + BASE64_ENCODE_CHAR[63 & i];
}
t = s[o];
return n + (BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==");
};
var exports = createMethod();
if (COMMON_JS) module.exports = exports; else {
root.md5 = exports;
AMD && define(function() {
return exports;
});
}
})();
cc._RF.pop();
}).call(this, require("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
_process: 1
} ],
minipokerLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "aa49cUNvIhFCbSIdDPOqCap", "minipokerLanguage");
var i = {
LANGUAGE_VN: {
lb_huong_dan: "HƯỚNG DẪN",
lb_bang_vinh_danh: "BẢNG VINH DANH ",
lb_thoi_gian: "THỜI GIAN",
lb_name: "TÊN NHÂN VẬT",
lb_no_dat: "MỨC ĐẶT",
lb_no_thang: "THẮNG",
lb_bo_bai: "BỘ BÀI",
lb_phien: "PHIÊN",
noti_not_trial: "Chức năng này không có ở chế độ chơi thử",
noti_not_money: "Không đủ số dư",
noti_is_playing: "Hiện đang trong tiến trình quay",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("en");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
return i.LANGUAGE_VN;
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
pokerLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "d5195hjGu9AGKa5KD8zPP3c", "pokerLanguage");
var i = {
LANGUAGE_VN: {
lb_muc_cuoc: "Mức cược:",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
portalLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "e06827Bf1xO24g8fQFEeJ8p", "portalLanguage");
var i = {
LANGUAGE_VN: {
lb_tai_xiu: "TÀI XỈU",
lb_sieu_xe: "SIÊU XE",
lb_loc_thu: "LỘC THÚ",
lb_thien_dia: "THIÊN ĐỊA",
lb_lich_su_giao_dich: "LỊCH SỬ GIAO DỊCH",
lb_thoi_gian: "THỜI GIAN",
lb_phat_sinh: "PHÁT SINH",
lb_so_du: "SỐ DƯ",
lb_tax: "THUẾ",
lb_mieu_ta: "MIÊU TẢ",
lb_bao_mat_otp: "Bảo Mật OTP",
lb_nhap_sdt: "Nhập số điện thoại",
lb_ma_otp: "Mã OTP",
lb_doi_mat_khau: "Đổi mật khẩu",
lb_mat_khau_moi: "Mật khẩu mới",
lb_nhap_lai_mk: "Nhập lại mật khẩu",
lb_ten_dai_ly: "TÊN ĐẠI LÝ",
lb_khu_vuc: "KHU VỰC",
lb_nhap_gift_code: "Nhập Giftcode",
lb_ho_tro: "Hỗ trợ",
lb_bao_mat: "Bảo mật",
lb_lich_su_gd: "Lịch sử GD",
lb_chon_menh_gia: "Vui lòng chọn mênh giá",
lb_nhap_seri: "Nhập số Seri",
lb_nhap_ma_the: "Mã thẻ",
lb_thong_tin: "Thông tin",
lb_tai_khoan: "Tài khoản :",
lb_ten_hien_thi: "Tên hiển thị :",
lb_so_du_1: "Số dư :",
lb_ten_dang_nhap: "Tên đăng nhập",
lb_ten_hien_thi_1: "Tên hiển thị",
lb_mat_khau: "Mật khẩu",
lb_bang_xep_hang: "Bảng xếp hạng",
lb_them: "Thêm",
lb_so_du_con_lai: "Số dư còn lại:",
lb_6_nguoi: "6 người",
lb_9_nguoi: "9 người",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
ronghoLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "2dce59gjoxPJIgQL7MAfl9f", "ronghoLanguage");
var i = {
LANGUAGE_VN: {
lb_rong: "RỒng",
lb_ho: "Hổ",
lb_rong1x2: "RỒNG 1x2",
lb_hoa1x16: "Hòa 1x16",
lb_ho1x2: "Hổ 1x2",
lb_rong_ho1x15: "RỒNG HỔ (1x15)",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
sieuxeLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "55957LLLBZIb54SwbJ29LZP", "sieuxeLanguage");
var i = {
LANGUAGE_VN: {
lb_title_select_line: "DÒNG ĐẶT CƯỢC",
lb_stt: "STT",
lb_thoi_gian: "THỜI GIAN",
lb_tai_khoan: "TÀI KHOẢN",
lb_no_thang: "THẮNG",
lb_loai: "LOẠI",
lb_phien: "PHIÊN",
lb_phong: "PHÒNG",
lb_chitiet: "CHI TIẾT",
lbPhienTxt: "Phiên",
lb_session: "Phiên:",
lbMoneyTxt: "Tổng thắng",
lb_tong_so_thang: "TỔNG SỐ THẮNG: ",
noti_not_trial: "Chức năng này không có ở chế độ chơi thử",
noti_not_money: "Không đủ số dư",
noti_is_playing: "Hiện đang trong tiến trình quay",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("en");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
return i.LANGUAGE_VN;
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
sinbadLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "effee4N5eVGTZLGxt3DvaqT", "sinbadLanguage");
var i = {
LANGUAGE_VN: {
lb_win: "Thắng: ",
lb_cuoc: "Tổng cược: ",
lb_phien: "Phiên:",
lb_free_spine_3: "Sô lượt quay miễn phí: ",
lb_receive: "Bạn nhận được ",
lb_free_spine_2: "lượt quay miễn phí",
lb_title_select_line: "CHỌN DÒNG",
lb_from_bonus: "từ Bonus Game",
lb_chi_tiet_lich_su_giao_dich: "Chi Tiết Lịch Sử Giao Dịch",
lb_so_tien_thang: "Số tiền thắng:",
lb_lichsugiaodich: "Lịch Sử Giao Dịch",
lb_stt: "STT",
lb_thoi_gian: "THỜI GIAN",
lb_tai_khoan: "TÀI KHOẢN",
lb_no_dat: "ĐẶT",
lb_no_thang: "THẮNG",
lb_loai: "LOẠI",
lb_session: "PHIÊN",
lb_detail: "CHI TIẾT",
lb_account: "TÀI KHOẢN",
lb_des: "MÔ TẢ",
noti_not_trial: "Chức năng này không có ở chế độ chơi thử",
noti_not_money: "Không đủ số dư",
noti_is_playing: "Hiện đang trong tiến trình quay",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("en");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
return i.LANGUAGE_VN;
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
taixiuLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "b74dcrea2NKGaoHaBzI/mds", "taixiuLanguage");
var i = {
LANGUAGE_VN: {
lb_dat: "Đặt",
lb_huong_dan: "HƯỚNG DẪN",
lb_bang_xep_hang: "BẢNG XẾP HẠNG",
lb_rank: "HẠNG",
lb_name: "TÊN TÀI KHOẢN",
lb_win: "THẮNG",
lb_thoi_gian: "THỜI GIAN",
lb_ten: "TÊN",
lb_dat1: "ĐẶT",
lb_tong: "Tổng",
lb_soi_cau: "SOI CẦU",
lb_tai: "TÀI:",
lb_xiu: "XỈU:",
lb_ketqua: "KẾT QUẢ",
lb_hoan_tra: "HOÀN TRẢ",
lb_lichsu: "LỊCH SỬ GIAO DỊCH",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
thiendiaLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "34cea8WQjhNGJA1VhzSOwnQ", "thiendiaLanguage");
var i = {
LANGUAGE_VN: {
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
tlmnLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "81401MN6d1DRYpSPzZXQsn9", "tlmnLanguage");
var i = {
LANGUAGE_VN: {
lb_start: "Bắt đầu ván mới",
lb_muc_cuoc: "Mức cược:",
xxxxxxxxxxx: "xxxxxxxxxxx"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("vn");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return i.LANGUAGE_VN;

case "en":
return i.LANGUAGE_EN;

case "zh":
return i.LANGUAGE_ZH;

default:
return i.LANGUAGE_VN;
}
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(t, e) {
"use strict";
cc._RF.push(e, "f1f07iHpsdKf4Y4UswWY/u5", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ],
vampireLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "6d0efqrGalId5Vmi1CiN7xb", "vampireLanguage");
var i = {
LANGUAGE_VN: {
lb_text_so_du: "Số dư:",
lb_hu_kim_cuong: "Hũ Kim Cương",
lb_title_select_line: "CHỌN DÒNG",
lb_chan: "Chẵn",
lb_le: "Lẻ",
lb_tat_ca: "Tất cả",
lb_bo_chon: "Bỏ chọn",
lb_so_luot_quay_mien_phi: "Số lượt quay miễn phí: ",
lb_free_spine_2: "lượt quay miễn phí",
lb_thang: "Thắng",
lb_tien_cuoc: "Tiền cược",
lb_luot_boc: "Số lượt bốc: ",
lb_phien: "Phiên: ",
lb_money_win: "Số tiền thắng:",
lb_session: "PHIÊN",
lb_thoi_gian: "THỜI GIAN",
lb_no_dat: "ĐẶT",
lb_no_thang: "THẮNG",
lb_chitiet: "Chi tiết",
lb_name: "Tên Nhân Vật",
lb_account: "TÀI KHOẢN",
lb_des: "Mô Tả",
lb_helper: "HƯỚNG DẪN",
lb_ban_vua_thang: "BẠN VỪA THẮNG",
lb_game_bonus: "TRONG GAME BONUS",
lb_lichsugiaodich: "Lịch sử giao dịch",
lb_total_win: "Tổng thắng:",
noti_not_trial: "Chức năng này không có ở chế độ chơi thử",
noti_not_money: "Không đủ số dư",
noti_is_playing: "Hiện đang trong tiến trình quay"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("en");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
return i.LANGUAGE_VN;
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ],
xocdiaLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "1d50aoitENOcIQxJEvfEhcZ", "xocdiaLanguage");
var i, n = {};
n.LANGUAGE_VN = ((i = {
lb_le198: "LẺ 1x1.98",
lb_chan198: "CHẴN 1x1.98",
xxxxxxxxxxx: "xxxxxxxxxxx"
}).xxxxxxxxxxx = "xxxxxxxxxxx", i);
n.LANGUAGE_EN = n.LANGUAGE_VN;
n.LANGUAGE_ZH = {
home_setting: "xxxxxxxx"
};
n.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || n.setCurrentLanguage("vn");
return t.getItem("current_language");
};
n.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
n.LANGUAGE = function() {
switch (this.getCurrentLanguage()) {
case "vn":
return n.LANGUAGE_VN;

case "en":
return n.LANGUAGE_EN;

case "zh":
return n.LANGUAGE_ZH;

default:
return n.LANGUAGE_VN;
}
};
n.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
n.getString = function(t) {
return this.LANGUAGE()[t];
};
n.setLanguage = function(t) {
void 0 !== n.LANGUAGE()[t.node.name] && (t.string = n.LANGUAGE()[t.node.name]);
};
e.exports = n;
cc._RF.pop();
}, {} ],
zeusLanguage: [ function(t, e) {
"use strict";
cc._RF.push(e, "7221ee5YS1BvaBoDvZyKZUn", "zeusLanguage");
var i = {
LANGUAGE_VN: {
lb_win: "Thắng: ",
lb_cuoc: "Tổng cược: ",
lb_phien: "Phiên:",
lb_free_spine_3: "LƯỢT QUAY MIỄN PHÍ: ",
lb_receive: "Bạn nhận được ",
lb_free_spine_2: "lượt quay miễn phí",
lb_title_select_line: "CHỌN DÒNG",
lb_chan: "Chẵn",
lb_le: "Lẻ",
lb_tat_ca: "Tất cả",
lb_bo_chon: "Bỏ chọn",
lb_ban_vua_thang: "BẠN VỪA THẮNG",
lb_game_bonus: "TRONG GAME\nBẢO VỆ OLYMPUS",
lb_chi_tiet_lich_su_giao_dich: "Chi Tiết Lịch Sử Giao Dịch",
lb_so_tien_thang: "Số tiền thắng:",
lb_lichsugiaodich: "Lịch Sử Giao Dịch",
lb_stt: "STT",
lb_thoi_gian: "THỜI GIAN",
lb_tai_khoan: "TÀI KHOẢN",
lb_no_dat: "ĐẶT",
lb_no_thang: "THẮNG",
lb_loai: "LOẠI",
lb_session: "PHIÊN",
lb_detail: "CHI TIẾT",
lb_account: "TÀI KHOẢN",
lb_des: "MÔ TẢ",
noti_not_trial: "Chức năng này không có ở chế độ chơi thử",
noti_not_money: "Không đủ số dư",
noti_is_playing: "Hiện đang trong tiến trình quay"
}
};
i.LANGUAGE_EN = i.LANGUAGE_VN;
i.getCurrentLanguage = function() {
var t = cc.sys.localStorage;
null !== t.getItem("current_language") && void 0 !== t.getItem("current_language") || i.setCurrentLanguage("en");
return t.getItem("current_language");
};
i.setCurrentLanguage = function(t) {
cc.sys.localStorage.setItem("current_language", t);
};
i.LANGUAGE = function() {
return i.LANGUAGE_VN;
};
i.changeLanguage = function(t) {
for (var e = t.getComponentsInChildren(cc.Label), i = t.getComponentsInChildren(cc.RichText), n = 0; n < e.length; n++) this.setLanguage(e[n]);
for (var s = 0; s < i.length; s++) this.setLanguage(i[s]);
};
i.getString = function(t) {
return this.LANGUAGE()[t];
};
i.setLanguage = function(t) {
void 0 !== i.LANGUAGE()[t.node.name] && (t.string = i.LANGUAGE()[t.node.name]);
};
e.exports = i;
cc._RF.pop();
}, {} ]
}, {}, [ "TwoScrollView", "UtilsUI", "VozBaseComponent", "ActionRotate", "ActionRotateJerk", "ActionScale", "ButtonScaler", "NodeEaseElasticInOut", "md5", "MultiResolutionCompat", "ScaleBackground", "ScaleContent", "HoiXoayServer", "use_v2.1-2.2.1_cc.Toggle_event", "AnimationEvent", "CasinoEvent", "CasinoRequest", "Config", "GameVariables", "Helper", "MiniGame", "Move", "SmartFoxAudio", "BaseController", "BaseGame", "BaseItemCustom", "Card", "ChatEmojiLayer", "ChatLayer", "HttpHandler", "ItemChat", "Listview", "Loading", "MM", "Player", "Toast", "UIManager", "Utils", "BaccaratCard", "BaccaratCauItem", "BaccaratController", "BaccaratEvent", "BaccaratListCauItem", "BaccaratRankItem", "BaccaratRequest", "BaccaratSoiCauItem", "BaccaratTransactionItem", "ItemCard", "TimeSub", "UIBaccarat", "UIBaccaratHelper", "UIBaccaratRank", "UIBaccaratSoiCau", "UIBaccaratTransaction", "CandyController", "CandyEvent", "CandyItem", "CandyLine", "CandyMainLine", "CandyRankItem", "CandyReel", "CandyRequest", "CandyTransactionItem", "CandyWinGame", "UICandy", "UICandyHelper", "UICandyRank", "UICandyTransaction", "UICandyTransactionDetail", "HuLobby", "ItemGame", "ItemRoom", "JackPotIcon", "SystemMessage", "CasinoEnum", "KimCuongController", "KimCuongEvent", "KimCuongItem", "KimCuongItemBonus", "KimCuongLine", "KimCuongMainLine", "KimCuongRankItem", "KimCuongReel", "KimCuongRequest", "KimCuongTransactionItem", "KimCuongWinGame", "TrialResult", "UIKimCuong", "UIKimCuongBonusGame", "UIKimCuongHistoryDetail", "UIKimCuongHistoryTransaction", "UIKimCuongLobby", "UIKimCuongRank", "bacayLanguage", "baccaratLanguage", "candyLanguage", "kimcuongLanguage", "locthuLanguage", "maubinhLanguage", "minipokerLanguage", "pokerLanguage", "portalLanguage", "ronghoLanguage", "sieuxeLanguage", "sinbadLanguage", "taixiuLanguage", "thiendiaLanguage", "tlmnLanguage", "vampireLanguage", "xocdiaLanguage", "zeusLanguage", "MiniPokerController", "MiniPokerEvent", "MiniPokerItem", "MiniPokerLine", "MiniPokerMainLine", "MiniPokerRankItem", "MiniPokerReel", "MiniPokerRequest", "MiniPokerTransactionItem", "MiniPokerWinGame", "UIMiniPoker", "UIMiniPokerHelper", "UIMiniPokerRank", "UIMiniPokerTransaction", "Actions", "CommunityCards", "PlayerPoker", "PokerCard", "PokerController", "PokerEvent", "PokerRankItem", "PokerRequest", "Timer", "UIPoker", "UIPokerRank", "BankLogItem", "DaiLyCK", "DaiLyCKItem", "DaiLyItem", "PortalController", "PortalManager", "PortalMenu", "UIBankLog", "UIBaoMatOTP", "UIChangePassword", "UIDaiLy", "UIGiftCode", "UIMenu", "UIPayment", "UIPortal", "UIProfile", "UITransferMoney", "RongHoController", "RongHoEvent", "RongHoItemRank", "RongHoItemTransaction", "RongHoRequest", "UIRongHo", "UIRongHoHelper", "UIRongHoRank", "UIRongHoTransaction", "Ball", "ItemRouletteRank", "ItemRouletteTransaction", "RouletteController", "RouletteEvent", "RouletteListCauItem", "RouletteRequest", "RouletteSoiCauItem", "TimeSubRoulette", "UIRoulette", "UIRouletteRank", "UIRouletteTransaction", "SieuXeController", "SieuXeEvent", "SieuXeItem", "SieuXeLine", "SieuXeMainLine", "SieuXeRankItem", "SieuXeReel", "SieuXeRequest", "SieuXeTransactionItem", "SieuXeWinGame", "UISieuXe", "UISieuXeHelper", "UISieuXeRank", "UISieuXeTransaction", "UISieuXeTransactionDetail", "SinbadController", "SinbadEvent", "SinbadItem", "SinbadItemBonus", "SinbadLine", "SinbadMainLine", "SinbadRankItem", "SinbadReel", "SinbadRequest", "SinbadTransactionItem", "SinbadWinGame", "UISinbad", "UISinbadBonus", "UISinbadHistoryDetail", "UISinbadHistoryTransaction", "UISinbadLobby", "UISinbadRank", "TXSessionDetail", "TaiXiuController", "TaiXiuDuaTop", "TaiXiuEvent", "TaiXiuRankItem", "TaiXiuRequest", "TaiXiuTransactionItem", "UITaiXiu", "UITaiXiuDuaTop", "UITaiXiuHelper", "UITaiXiuRank", "UITaiXiuSessionDetail", "UITaiXiuSoiCau", "UITaiXiuTanLoc", "UITaiXiuTransaction", "UIDialogBuyIn", "UIDialogOne", "UIDialogTwo", "UIHome", "UILobby", "UILogin", "UIRegister", "UISplash", "UIVampire", "UIVampireBonus", "UIVampireHistoryDetail", "UIVampireHistoryTransaction", "UIVampireLobby", "UIVampireRank", "VampireController", "VampireEvent", "VampireItem", "VampireItemBonus", "VampireItemLine", "VampireLine", "VampireMainLine", "VampireRankItem", "VampireReel", "VampireRequest", "VampireTransactionItem", "VampireWinGame", "UIXocDia", "UIXocDiaHelper", "UIXocDiaRank", "UIXocDiaSoiCau", "UIXocDiaTransaction", "XocDiaController", "XocDiaEvent", "XocDiaItemRank", "XocDiaItemTransaction", "XocDiaListCauItem", "XocDiaRequest", "XocDiaSoiCauItem", "UIZeus", "UIZeusBonus", "UIZeusHelper", "UIZeusHistoryDetail", "UIZeusHistoryTransaction", "UIZeusLobby", "UIZeusRank", "ZeusController", "ZeusEvent", "ZeusItem", "ZeusItemBonus", "ZeusLine", "ZeusMainLine", "ZeusRankItem", "ZeusReel", "ZeusRequest", "ZeusTransactionItem", "ZeusTrialResult", "ZeusWinGame" ]);