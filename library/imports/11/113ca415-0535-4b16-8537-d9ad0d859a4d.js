"use strict";
cc._RF.push(module, '113caQVBTVLFoU32a0NhZpN', 'SmartFoxAudio');
// scripts/SmartFoxAudio.js

"use strict";

var SmartFoxAudio = cc.Class({
  "extends": cc.Component,
  statics: {
    inst: null
  },
  properties: {
    baoDenLuotChoi: {
      "default": null,
      type: cc.AudioClip
    },
    chiaTien: {
      "default": null,
      type: cc.AudioClip
    },
    chiaBai: {
      "default": null,
      type: cc.AudioClip
    },
    chiaBai2: {
      "default": null,
      type: cc.AudioClip
    },
    datCua: {
      "default": null,
      type: cc.AudioClip
    },
    click: {
      "default": null,
      type: cc.AudioClip
    },
    countDown: {
      "default": null,
      type: cc.AudioClip
    },
    danhBai: {
      "default": null,
      type: cc.AudioClip
    },
    pass: {
      "default": null,
      type: cc.AudioClip
    },
    placeChip: {
      "default": null,
      type: cc.AudioClip
    },
    ringRing: {
      "default": null,
      type: cc.AudioClip
    },
    sendChip: {
      "default": null,
      type: cc.AudioClip
    },
    themSong: {
      "default": null,
      type: cc.AudioClip
    },
    win: {
      "default": null,
      type: cc.AudioClip
    },
    xocDia: {
      "default": null,
      type: cc.AudioClip
    },
    currentEffectId: 0,
    _musicEnable: true,
    _soundEnable: true,
    _numberSound: 0,
    _keyMusic: "smart_fox_music",
    _keySound: "smart_fox_sound"
  },
  onLoad: function onLoad() {
    SmartFoxAudio.inst = this;
    mm.audio = this;
    mm.audio._effectEnable = this.isSound();
  },
  isSound: function isSound() {
    var sound = 1;
    var soundSave = cc.sys.localStorage.getItem(this._keySound);

    if (soundSave != null) {
      sound = parseInt(soundSave);
    } else {
      cc.sys.localStorage.setItem(this._keySound, "1");
    }

    return sound == 1;
  },
  isMusic: function isMusic() {
    var music = 1;
    var musicSave = cc.sys.localStorage.getItem(this._keyMusic);

    if (musicSave != null) {
      music = parseInt(musicSave);
    } else {
      cc.sys.localStorage.setItem(this._keyMusic, "1");
    }

    return music == 1;
  },
  saveSound: function saveSound() {},
  saveMusic: function saveMusic() {},
  playMusic: function playMusic() {
    var isMusic = this.isMusic();

    if (isMusic) {
      if (mm.audio._audioIDMusic !== undefined) {
        mm.audio.resumeMusic();
      } else {
        mm.audio._audioIDMusic = cc.audioEngine.play(mm.audio.themSong, true, 0.5);
      }
    } else {
      mm.audio.pauseMusic();
    }
  },
  setMusicVolume: function setMusicVolume(numberVolume) {
    cc.audioEngine.setMusicVolume(numberVolume);
  },
  pauseMusic: function pauseMusic() {
    if (mm.audio._audioIDMusic !== undefined) cc.audioEngine.pause(mm.audio._audioIDMusic);
  },
  resumeMusic: function resumeMusic() {
    if (mm.audio._audioIDMusic !== undefined) cc.audioEngine.resume(mm.audio._audioIDMusic);
  },
  playBaoDenLuotChoi: function playBaoDenLuotChoi() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.baoDenLuotChoi);
  },
  playChiaTien: function playChiaTien() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.chiaTien);
  },
  playChiaBai: function playChiaBai() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.chiaBai);
  },
  playChiaBai2: function playChiaBai2() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.chiaBai2);
  },
  playDatCua: function playDatCua() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.datCua);
  },
  playCountDown: function playCountDown() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.countDown);
  },
  playDanhBai: function playDanhBai() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.danhBai);
  },
  playPass: function playPass() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.pass);
  },
  playPlaceChip: function playPlaceChip() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.placeChip);
  },
  playRingRing: function playRingRing() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.ringRing);
  },
  playSendChip: function playSendChip() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.sendChip);
  },
  playWin: function playWin() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.win);
  },
  playXocDia: function playXocDia() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.xocDia);
  },
  playButton: function playButton() {
    this.currentEffectId = mm.audio._playSFX(mm.audio.click);
  },
  _playSFX: function _playSFX(clip) {
    var isSound = this.isSound();
    if (isSound) return cc.audioEngine.playEffect(clip, false);
    return this.currentEffectId;
  },
  _pauseAllSFX: function _pauseAllSFX() {
    cc.audioEngine.pauseAllEffects();
  },
  _pauseSFX: function _pauseSFX() {
    cc.audioEngine.pauseEffect(this.currentEffectId);
  },
  _stopAllSFX: function _stopAllSFX() {
    cc.audioEngine.stopAllEffects();
  },
  _stopSFX: function _stopSFX() {
    cc.audioEngine.stopEffect(this.currentEffectId);
  }
});

cc._RF.pop();