
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/hotupdate/HoiXoayServer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a142cODeUJKKpMqkzrJRf9P', 'HoiXoayServer');
// _smartfox/hotupdate/HoiXoayServer.js

"use strict";

// Custom manifest removed the following assets:
// 1. res/raw-assets/2a/2a40e5e7-4c4a-4350-9e5d-76757755cdd2.png
// 2. res/raw-assets/2d/2d86a854-63c4-4b90-8b88-a4328b8526c2.png
// So when custom manifest used, you should be able to find them in downloaded remote assets
var customManifestStr = JSON.stringify({
  "packageUrl": "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/",
  "remoteManifestUrl": "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/project.manifest",
  "remoteVersionUrl": "http://192.168.50.220:5555/tutorial-hot-update/remote-assets/version.manifest",
  "version": "1.10",
  "assets": {
    "src/cocos2d-jsb.js": {
      "size": 3341465,
      "md5": "fafdde66bd0a81d1e096799fb8b7af95"
    },
    "src/project.dev.js": {
      "size": 97814,
      "md5": "ed7f5acd411a09d4d298db800b873b00"
    },
    "src/settings.js": {
      "size": 3849,
      "md5": "deb03998a4cfb8f8b468fba8575cb1c9"
    },
    "res/import/03/0379fb962.json": {
      "size": 1107,
      "md5": "d102d0f14ed6b6cb42cc28d88b3b9069"
    },
    "res/import/0c/0cd5de143.json": {
      "size": 80883,
      "md5": "f06347880038a1381043ed505d6f8a9a"
    },
    "res/import/0d/0d756af45.json": {
      "size": 10137,
      "md5": "02dc8b795e79b9fd62e00d4a2c70c8c1"
    },
    "res/import/0d/0dc6a4e59.json": {
      "size": 14970,
      "md5": "a500f696892df6869341dff5f31b1a33"
    },
    "res/import/41/4128b78b-00ae-4d8a-ae35-4e5ca5c5cde9.json": {
      "size": 76,
      "md5": "3f79d93ce8d42b186ecd43d868c8d023"
    },
    "res/import/49/49539cb0-3893-459a-b310-7cc1b7f6d335.json": {
      "size": 72,
      "md5": "8a36388cda7c3773b5bf7a53d8824535"
    },
    "res/import/9e/9e2ae507-fae5-4511-940b-f2e46f81b790.json": {
      "size": 74,
      "md5": "98f6b1d93a4ee3a1f2074be9ce00fbb2"
    },
    "res/raw-assets/0e/0ed8cf6e-8c04-4569-8d17-626a26e1099f.png": {
      "size": 4665,
      "md5": "9e8bf9af30ac7a9ea9d3b72f37a193e1"
    },
    "res/raw-assets/13/137d1ca6-e90c-440b-9fa2-4b9ffff569f7.png": {
      "size": 1627,
      "md5": "75060291e24294abd6a52553fa22317e"
    },
    "res/raw-assets/15/15d5f3f0-f965-4c00-945b-d2c8faee78b6.png": {
      "size": 3840,
      "md5": "cb525edab8063a845e6bd1e9d29b8cde"
    },
    "res/raw-assets/19/19509bb1-dc08-4cbf-ab8f-2460e207265c.png": {
      "size": 9638,
      "md5": "6e159c9cc1b971d3921bc8908071a70b"
    },
    "res/raw-assets/26/26e9a867-3d2f-4981-8a33-82d440de7aff.png": {
      "size": 6417,
      "md5": "5c139729708dd26bd461bcd3e8201823"
    },
    "res/raw-assets/2d/2ddfe005-2129-41d8-aeec-2b1f51f02962.png": {
      "size": 2290,
      "md5": "874dccfd88108a9f0188bda59c5df183"
    },
    "res/raw-assets/34/3459ab36-782c-4c4e-8aef-7280aff8b272.png": {
      "size": 18969,
      "md5": "3a810a636f3779b357e854155eafa4b6"
    },
    "res/raw-assets/36/36b6ea73-ff48-430e-a0c7-0e5e8defe341.png": {
      "size": 2711,
      "md5": "e64625aeb59a1de225e718a7126634ad"
    },
    "res/raw-assets/39/394bac82-54fb-472f-a27f-b5107821bfb8.png": {
      "size": 1641,
      "md5": "049d2201d7d99fc6dbdb017d8d8bd9b8"
    },
    "res/raw-assets/3c/3cedb8b4-8532-4037-a00e-b8d3e0013158.png": {
      "size": 94313,
      "md5": "a2e763866c1bdd6b189be69f3d37eedd"
    },
    "res/raw-assets/41/4128b78b-00ae-4d8a-ae35-4e5ca5c5cde9.manifest": {
      "size": 6358,
      "md5": "c1d18879851e567545ea04bf135a325f"
    },
    "res/raw-assets/49/49539cb0-3893-459a-b310-7cc1b7f6d335.mp3": {
      "size": 971644,
      "md5": "f45ec6666f06b729d8c0461bc89d4b94"
    },
    "res/raw-assets/4e/4e06c7f1-72ac-4e4e-90de-683e16905156.png": {
      "size": 2406,
      "md5": "5f0c28e0eed7ec0cb75e45f5937dd7c6"
    },
    "res/raw-assets/50/50da5486-dfa1-46d2-9d4f-686eb5527c1a.png": {
      "size": 6911,
      "md5": "51cf32529c923146f06019a58398c98d"
    },
    "res/raw-assets/52/5245e25c-010c-45fb-84a3-f3bce95793e7.png": {
      "size": 3963,
      "md5": "0f050ba45e09986b3d785b7b23ffcc1e"
    },
    "res/raw-assets/6d/6de06a23-d0de-4766-a9e1-a0314136d62e.png": {
      "size": 10878,
      "md5": "9f89eec7a1b0f615a3c1bab0857aefff"
    },
    "res/raw-assets/70/700faa17-11a6-46cd-aeb5-d6900bc264f8.png": {
      "size": 3765,
      "md5": "878e89a0a3e02b13beee9f3274f2ca39"
    },
    "res/raw-assets/71/71561142-4c83-4933-afca-cb7a17f67053.png": {
      "size": 1050,
      "md5": "c06a93f5f1a8a1c6edc4fd8b52e96cbf"
    },
    "res/raw-assets/80/8071df9d-029b-40e8-98f3-8eab08dbf6ca.png": {
      "size": 25205,
      "md5": "f688777a92fba11bfe85c3061a4476e5"
    },
    "res/raw-assets/82/82fe58d4-ae13-4806-9a41-2e73902ea811.png": {
      "size": 24298,
      "md5": "b807df8ffcb540f3dd20db75ac95b73b"
    },
    "res/raw-assets/83/83cc2086-d713-47a0-8d86-a8d6068b6258.png": {
      "size": 3782,
      "md5": "9827ce705349caa604e1aba1d53b0fd9"
    },
    "res/raw-assets/96/96e3e293-4e36-426d-a0a6-eb8d025c0d5b.png": {
      "size": 15379,
      "md5": "d6ce47aed38348a1ea0f003fa0063079"
    },
    "res/raw-assets/97/97a6316c-7fcb-4ffe-9045-35625bc6abf6.png": {
      "size": 2187,
      "md5": "f3f41b4c0783a751e561f1b84d91a70b"
    },
    "res/raw-assets/97/97bb9c9c-5568-4419-af04-4ed5a2969a02.png": {
      "size": 10370,
      "md5": "48ab94f1c34b0e9a047297cab1aeabc4"
    },
    "res/raw-assets/99/99170b0b-d210-46f1-b213-7d9e3f23098a.png": {
      "size": 1177,
      "md5": "d1118d133683bb4227d5e60c79c846b7"
    },
    "res/raw-assets/99/99acc716-33df-4c4c-879d-cc3407f0cd8c.png": {
      "size": 9754,
      "md5": "23e7221934021f3fbe6c6a52b023ded8"
    },
    "res/raw-assets/9e/9e2ae507-fae5-4511-940b-f2e46f81b790.mp3": {
      "size": 3179,
      "md5": "90d17b1a25200c90e292d9a3748c9fec"
    },
    "res/raw-assets/ac/ac11439d-3758-49f5-8728-81ed22c1ed96.png": {
      "size": 11935,
      "md5": "c20ae4a74c42b2aed28bb8c9247eb5d5"
    },
    "res/raw-assets/ae/ae4e2188-2b7b-42a9-85e1-8fb987600b04.png": {
      "size": 634171,
      "md5": "07b03f7145b75579708ae05ea2a2c029"
    },
    "res/raw-assets/af/afe329a6-e85e-46a0-98ed-8a34e128907b.png": {
      "size": 2209,
      "md5": "30ae2fe844c7c53f1d00291051230607"
    },
    "res/raw-assets/b2/b2037f34-04ff-4351-b9da-5be4bb557017.png": {
      "size": 1530,
      "md5": "bb96dacb8b09e0443d83462cc7b20095"
    },
    "res/raw-assets/b4/b43ff3c2-02bb-4874-81f7-f2dea6970f18.png": {
      "size": 1114,
      "md5": "83fcc9912e01ae5411c357651fb8b1cf"
    },
    "res/raw-assets/c3/c39ea496-96eb-4dc5-945a-e7c919b77c21.png": {
      "size": 2548,
      "md5": "ae7a04af25e238a5478170759b55a7ba"
    },
    "res/raw-assets/ca/caaaf9ff-5036-4232-a8a7-88b80b2e4c88.png": {
      "size": 1829,
      "md5": "94d761c4626df88053787f17fa09914d"
    },
    "res/raw-assets/ca/cacafa85-d8e9-4716-bcdb-7eba457e409c.png": {
      "size": 7380,
      "md5": "e6bb0f4d041257653f07da2dfe1edd09"
    },
    "res/raw-assets/ce/ce6d2de9-7056-4ba8-a1b1-40b00bb6f469.png": {
      "size": 10982,
      "md5": "52aa0df577edafe11de1cfdb44422895"
    },
    "res/raw-assets/cf/cfef78f1-c8df-49b7-8ed0-4c953ace2621.png": {
      "size": 1140,
      "md5": "a4b5953dffeb145b4b70072d91c4052b"
    },
    "res/raw-assets/d5/d5dfe6a8-eb19-4aae-a74f-83b71eaa57dc.png": {
      "size": 8755,
      "md5": "aeb1055ced334ce20fe030579e187494"
    },
    "res/raw-assets/da/da3e556f-1bce-4c31-87dc-897ea2d788e2.png": {
      "size": 11636,
      "md5": "d81124346c110eb1377f7b56346b31e4"
    },
    "res/raw-assets/e8/e851e89b-faa2-4484-bea6-5c01dd9f06e2.png": {
      "size": 1082,
      "md5": "90cf45d059d0408bec327f66eae5764c"
    },
    "res/raw-assets/ec/ec244ee5-6f1f-4920-9b69-d4df0e78ec2d.png": {
      "size": 55581,
      "md5": "68fdff7430b1b02f3a6e76bea92c6372"
    },
    "res/raw-assets/fc/fccc4d85-6ad4-496d-9b33-ea76e69da132.png": {
      "size": 82257,
      "md5": "df4359cdcb956f52f2e5b4ef777bbb7d"
    }
  },
  "searchPaths": []
});
cc.Class({
  "extends": cc.Component,
  properties: {
    manifestUrl: {
      type: cc.Asset,
      "default": null
    },
    processLoad: cc.ProgressBar,
    lbLoading: cc.Label,
    lbUpdate: cc.Label,
    _updating: false,
    _canRetry: false,
    _storagePath: '',
    _addEventFinish: null
  },
  checkCb: function checkCb(event) {
    // console.log('Code 123: ' + event.getEventCode());
    switch (event.getEventCode()) {
      case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
        // console.log("No local manifest file found, hot update skipped.");
        break;

      case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
      case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
        // console.log( "Fail to download manifest file, hot update skipped.");
        break;

      case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
        // console.log( "Already up to date with the latest remote version.");
        break;

      case jsb.EventAssetsManager.NEW_VERSION_FOUND:
        // console.log( 'New version found, please try to update. (' + this._am.getTotalBytes() + ')');
        // process = 0;
        this.processLoad.progress = 0;
        this.lbLoading.string = "Đang cập nhật tài nguyên!";
        break;

      default:
        return;
    }

    this._am.setEventCallback(null);

    this._checkListener = null;
    this._updating = false;
  },
  updateCb: function updateCb(event) {
    var needRestart = false;
    var failed = false;

    switch (event.getEventCode()) {
      case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
        // console.log('No local manifest file found, hot update skipped.');
        failed = true;
        break;

      case jsb.EventAssetsManager.UPDATE_PROGRESSION:
        // console.log(event.getPercent());
        // console.log(event.getPercentByFile());
        // console.log( event.getDownloadedFiles() + ' / ' + event.getTotalFiles())
        // console.log( event.getDownloadedBytes() + ' / ' + event.getTotalBytes())
        // var msg = event.getMessage();
        var percent = parseFloat(event.getPercent());

        if (!isNaN(percent)) {
          this.processLoad.progress = percent;
          this.lbLoading.string = Math.floor(percent * 100) + "%";
        }

        break;

      case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
      case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
        // console.log('Fail to download manifest file, hot update skipped.');
        failed = true;
        break;

      case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
        // console.log('Already up to date with the latest remote version.');
        failed = true;
        break;

      case jsb.EventAssetsManager.UPDATE_FINISHED:
        // console.log('Update finished. ' + event.getMessage());
        needRestart = true;
        break;

      case jsb.EventAssetsManager.UPDATE_FAILED:
        // console.log( 'Update failed. ' + event.getMessage());
        this._updating = false;
        this._canRetry = true;
        break;

      case jsb.EventAssetsManager.ERROR_UPDATING:
        // console.log(  'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage());
        break;

      case jsb.EventAssetsManager.ERROR_DECOMPRESS:
        // console.log(event.getMessage());
        break;

      default:
        break;
    }

    if (failed) {
      this._am.setEventCallback(null);

      this._updateListener = null;
      this._updating = false;
      if (this._addEventFinish) this._addEventFinish();
    }

    if (needRestart) {
      this._am.setEventCallback(null);

      this._updateListener = null; // Prepend the manifest's search path

      var searchPaths = jsb.fileUtils.getSearchPaths();

      var newPaths = this._am.getLocalManifest().getSearchPaths(); // console.log(JSON.stringify(newPaths));


      Array.prototype.unshift.apply(searchPaths, newPaths); // This value will be retrieved and appended to the default search path during game startup,
      // please refer to samples/js-tests/main.js for detailed usage.
      // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.

      cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
      jsb.fileUtils.setSearchPaths(searchPaths);
      cc.audioEngine.stopAll();
      cc.game.restart();
    }
  },
  loadCustomManifest: function loadCustomManifest() {
    if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
      var manifest = new jsb.Manifest(customManifestStr, this._storagePath);

      this._am.loadLocalManifest(manifest, this._storagePath); // console.log( 'Using custom manifest');

    }
  },
  retry: function retry() {
    if (!this._updating && this._canRetry) {
      this._canRetry = false; // console.log( 'Retry failed Assets...');

      this._am.downloadFailedAssets();
    }
  },
  checkUpdate: function checkUpdate() {
    if (this._updating) {
      // console.log('Checking or updating ...');
      return;
    }

    if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
      // Resolve md5 url
      var url = this.manifestUrl.nativeUrl;

      if (cc.loader.md5Pipe) {
        url = cc.loader.md5Pipe.transformURL(url);
      }

      this._am.loadLocalManifest(url);
    }

    if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
      // console.log('Failed to load local manifest ...');
      return;
    }

    this._am.setEventCallback(this.checkCb.bind(this));

    this._am.checkUpdate();

    this._updating = true;
  },
  hotUpdate: function hotUpdate(cb) {
    this.lbUpdate.string = "Cập nhật phiên bản mới!";
    var isOke = this._am && !this._updating;

    if (this._am && !this._updating) {
      this._am.setEventCallback(this.updateCb.bind(this));

      if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
        // Resolve md5 url
        var url = this.manifestUrl.nativeUrl;

        if (cc.loader.md5Pipe) {
          url = cc.loader.md5Pipe.transformURL(url);
        }

        this._am.loadLocalManifest(url);
      }

      this._failCount = 0;

      this._am.update();

      this._updating = true;
    }

    this._addEventFinish = cb;
  },
  // use this for initialization
  onLoad: function onLoad() {
    // Hot update is only available in Native build
    if (!cc.sys.isNative) {
      return;
    }

    this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset'; // cc.log('Storage path for remote asset : ' + this._storagePath);
    // Setup your own version compare handler, versionA and B is versions in string
    // if the return value greater than 0, versionA is greater than B,
    // if the return value equals 0, versionA equals to B,
    // if the return value smaller than 0, versionA is smaller than B.

    this.versionCompareHandle = function (versionA, versionB) {
      // cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
      var vA = versionA.split('.');
      var vB = versionB.split('.');

      for (var i = 0; i < vA.length; ++i) {
        var a = parseInt(vA[i]);
        var b = parseInt(vB[i] || 0);

        if (a === b) {
          continue;
        } else {
          return a - b;
        }
      }

      if (vB.length > vA.length) {
        return -1;
      } else {
        return 0;
      }
    }; // Init with empty manifest url for testing custom manifest


    this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle); // Setup the verification callback, but we don't have md5 check function yet, so only print some message
    // Return true if the verification passed, otherwise return false

    this._am.setVerifyCallback(function (path, asset) {
      // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
      var compressed = asset.compressed; // Retrieve the correct md5 value.

      var expectedMD5 = asset.md5; // asset.path is relative path and path is absolute.

      var relativePath = asset.path; // The size of asset file, but this value could be absent.

      var size = asset.size;

      if (compressed) {
        // console.log("Verification passed : " + relativePath);
        return true;
      } else {
        // console.log("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
        return true;
      }
    }); // console.log('Hot update is ready, please check or directly update.');


    if (cc.sys.os === cc.sys.OS_ANDROID) {
      // Some Android device may slow down the download process when concurrent tasks is too much.
      // The value may not be accurate, please do more test and find what's most suitable for your game.
      this._am.setMaxConcurrentTask(2);
    }
  },
  onDestroy: function onDestroy() {
    if (this._updateListener) {
      this._am.setEventCallback(null);

      this._updateListener = null;
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxob3R1cGRhdGVcXEhvaVhvYXlTZXJ2ZXIuanMiXSwibmFtZXMiOlsiY3VzdG9tTWFuaWZlc3RTdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYW5pZmVzdFVybCIsInR5cGUiLCJBc3NldCIsInByb2Nlc3NMb2FkIiwiUHJvZ3Jlc3NCYXIiLCJsYkxvYWRpbmciLCJMYWJlbCIsImxiVXBkYXRlIiwiX3VwZGF0aW5nIiwiX2NhblJldHJ5IiwiX3N0b3JhZ2VQYXRoIiwiX2FkZEV2ZW50RmluaXNoIiwiY2hlY2tDYiIsImV2ZW50IiwiZ2V0RXZlbnRDb2RlIiwianNiIiwiRXZlbnRBc3NldHNNYW5hZ2VyIiwiRVJST1JfTk9fTE9DQUxfTUFOSUZFU1QiLCJFUlJPUl9ET1dOTE9BRF9NQU5JRkVTVCIsIkVSUk9SX1BBUlNFX01BTklGRVNUIiwiQUxSRUFEWV9VUF9UT19EQVRFIiwiTkVXX1ZFUlNJT05fRk9VTkQiLCJwcm9ncmVzcyIsInN0cmluZyIsIl9hbSIsInNldEV2ZW50Q2FsbGJhY2siLCJfY2hlY2tMaXN0ZW5lciIsInVwZGF0ZUNiIiwibmVlZFJlc3RhcnQiLCJmYWlsZWQiLCJVUERBVEVfUFJPR1JFU1NJT04iLCJwZXJjZW50IiwicGFyc2VGbG9hdCIsImdldFBlcmNlbnQiLCJpc05hTiIsIk1hdGgiLCJmbG9vciIsIlVQREFURV9GSU5JU0hFRCIsIlVQREFURV9GQUlMRUQiLCJFUlJPUl9VUERBVElORyIsIkVSUk9SX0RFQ09NUFJFU1MiLCJfdXBkYXRlTGlzdGVuZXIiLCJzZWFyY2hQYXRocyIsImZpbGVVdGlscyIsImdldFNlYXJjaFBhdGhzIiwibmV3UGF0aHMiLCJnZXRMb2NhbE1hbmlmZXN0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bnNoaWZ0IiwiYXBwbHkiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0U2VhcmNoUGF0aHMiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJnYW1lIiwicmVzdGFydCIsImxvYWRDdXN0b21NYW5pZmVzdCIsImdldFN0YXRlIiwiQXNzZXRzTWFuYWdlciIsIlN0YXRlIiwiVU5JTklURUQiLCJtYW5pZmVzdCIsIk1hbmlmZXN0IiwibG9hZExvY2FsTWFuaWZlc3QiLCJyZXRyeSIsImRvd25sb2FkRmFpbGVkQXNzZXRzIiwiY2hlY2tVcGRhdGUiLCJ1cmwiLCJuYXRpdmVVcmwiLCJsb2FkZXIiLCJtZDVQaXBlIiwidHJhbnNmb3JtVVJMIiwiaXNMb2FkZWQiLCJiaW5kIiwiaG90VXBkYXRlIiwiY2IiLCJpc09rZSIsIl9mYWlsQ291bnQiLCJ1cGRhdGUiLCJvbkxvYWQiLCJpc05hdGl2ZSIsImdldFdyaXRhYmxlUGF0aCIsInZlcnNpb25Db21wYXJlSGFuZGxlIiwidmVyc2lvbkEiLCJ2ZXJzaW9uQiIsInZBIiwic3BsaXQiLCJ2QiIsImkiLCJsZW5ndGgiLCJhIiwicGFyc2VJbnQiLCJiIiwic2V0VmVyaWZ5Q2FsbGJhY2siLCJwYXRoIiwiYXNzZXQiLCJjb21wcmVzc2VkIiwiZXhwZWN0ZWRNRDUiLCJtZDUiLCJyZWxhdGl2ZVBhdGgiLCJzaXplIiwib3MiLCJPU19BTkRST0lEIiwic2V0TWF4Q29uY3VycmVudFRhc2siLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxpQkFBaUIsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkMsZ0JBQWMsK0RBRHFCO0FBRW5DLHVCQUFxQiwrRUFGYztBQUduQyxzQkFBb0IsK0VBSGU7QUFJbkMsYUFBVyxNQUp3QjtBQUtuQyxZQUFVO0FBQ04sMEJBQXNCO0FBQ2xCLGNBQVEsT0FEVTtBQUVsQixhQUFPO0FBRlcsS0FEaEI7QUFLTiwwQkFBc0I7QUFDbEIsY0FBUSxLQURVO0FBRWxCLGFBQU87QUFGVyxLQUxoQjtBQVNOLHVCQUFtQjtBQUNmLGNBQVEsSUFETztB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dXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIG1hbmlmZXN0IHJlbW92ZWQgdGhlIGZvbGxvd2luZyBhc3NldHM6XHJcbi8vIDEuIHJlcy9yYXctYXNzZXRzLzJhLzJhNDBlNWU3LTRjNGEtNDM1MC05ZTVkLTc2NzU3NzU1Y2RkMi5wbmdcclxuLy8gMi4gcmVzL3Jhdy1hc3NldHMvMmQvMmQ4NmE4NTQtNjNjNC00YjkwLThiODgtYTQzMjhiODUyNmMyLnBuZ1xyXG4vLyBTbyB3aGVuIGN1c3RvbSBtYW5pZmVzdCB1c2VkLCB5b3Ugc2hvdWxkIGJlIGFibGUgdG8gZmluZCB0aGVtIGluIGRvd25sb2FkZWQgcmVtb3RlIGFzc2V0c1xyXG52YXIgY3VzdG9tTWFuaWZlc3RTdHIgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICBcInBhY2thZ2VVcmxcIjogXCJodHRwOi8vMTkyLjE2OC41MC4yMjA6NTU1NS90dXRvcmlhbC1ob3QtdXBkYXRlL3JlbW90ZS1hc3NldHMvXCIsXHJcbiAgICBcInJlbW90ZU1hbmlmZXN0VXJsXCI6IFwiaHR0cDovLzE5Mi4xNjguNTAuMjIwOjU1NTUvdHV0b3JpYWwtaG90LXVwZGF0ZS9yZW1vdGUtYXNzZXRzL3Byb2plY3QubWFuaWZlc3RcIixcclxuICAgIFwicmVtb3RlVmVyc2lvblVybFwiOiBcImh0dHA6Ly8xOTIuMTY4LjUwLjIyMDo1NTU1L3R1dG9yaWFsLWhvdC11cGRhdGUvcmVtb3RlLWFzc2V0cy92ZXJzaW9uLm1hbmlmZXN0XCIsXHJcbiAgICBcInZlcnNpb25cIjogXCIxLjEwXCIsXHJcbiAgICBcImFzc2V0c1wiOiB7XHJcbiAgICAgICAgXCJzcmMvY29jb3MyZC1qc2IuanNcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMzM0MTQ2NSxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJmYWZkZGU2NmJkMGE4MWQxZTA5Njc5OWZiOGI3YWY5NVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNyYy9wcm9qZWN0LmRldi5qc1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA5NzgxNCxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJlZDdmNWFjZDQxMWEwOWQ0ZDI5OGRiODAwYjg3M2IwMFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNyYy9zZXR0aW5ncy5qc1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAzODQ5LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImRlYjAzOTk4YTRjZmI4ZjhiNDY4ZmJhODU3NWNiMWM5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL2ltcG9ydC8wMy8wMzc5ZmI5NjIuanNvblwiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMTA3LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImQxMDJkMGYxNGVkNmI2Y2I0MmNjMjhkODhiM2I5MDY5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL2ltcG9ydC8wYy8wY2Q1ZGUxNDMuanNvblwiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA4MDg4MyxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJmMDYzNDc4ODAwMzhhMTM4MTA0M2VkNTA1ZDZmOGE5YVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9pbXBvcnQvMGQvMGQ3NTZhZjQ1Lmpzb25cIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMTAxMzcsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiMDJkYzhiNzk1ZTc5YjlmZDYyZTAwZDRhMmM3MGM4YzFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvaW1wb3J0LzBkLzBkYzZhNGU1OS5qc29uXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDE0OTcwLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImE1MDBmNjk2ODkyZGY2ODY5MzQxZGZmNWYzMWIxYTMzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL2ltcG9ydC80MS80MTI4Yjc4Yi0wMGFlLTRkOGEtYWUzNS00ZTVjYTVjNWNkZTkuanNvblwiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA3NixcclxuICAgICAgICAgICAgXCJtZDVcIjogXCIzZjc5ZDkzY2U4ZDQyYjE4NmVjZDQzZDg2OGM4ZDAyM1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9pbXBvcnQvNDkvNDk1MzljYjAtMzg5My00NTlhLWIzMTAtN2NjMWI3ZjZkMzM1Lmpzb25cIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogNzIsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiOGEzNjM4OGNkYTdjMzc3M2I1YmY3YTUzZDg4MjQ1MzVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvaW1wb3J0LzllLzllMmFlNTA3LWZhZTUtNDUxMS05NDBiLWYyZTQ2ZjgxYjc5MC5qc29uXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDc0LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjk4ZjZiMWQ5M2E0ZWUzYTFmMjA3NGJlOWNlMDBmYmIyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMGUvMGVkOGNmNmUtOGMwNC00NTY5LThkMTctNjI2YTI2ZTEwOTlmLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA0NjY1LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjllOGJmOWFmMzBhYzdhOWVhOWQzYjcyZjM3YTE5M2UxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMTMvMTM3ZDFjYTYtZTkwYy00NDBiLTlmYTItNGI5ZmZmZjU2OWY3LnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxNjI3LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjc1MDYwMjkxZTI0Mjk0YWJkNmE1MjU1M2ZhMjIzMTdlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMTUvMTVkNWYzZjAtZjk2NS00YzAwLTk0NWItZDJjOGZhZWU3OGI2LnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAzODQwLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImNiNTI1ZWRhYjgwNjNhODQ1ZTZiZDFlOWQyOWI4Y2RlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMTkvMTk1MDliYjEtZGMwOC00Y2JmLWFiOGYtMjQ2MGUyMDcyNjVjLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA5NjM4LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjZlMTU5YzljYzFiOTcxZDM5MjFiYzg5MDgwNzFhNzBiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMjYvMjZlOWE4NjctM2QyZi00OTgxLThhMzMtODJkNDQwZGU3YWZmLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA2NDE3LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjVjMTM5NzI5NzA4ZGQyNmJkNDYxYmNkM2U4MjAxODIzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMmQvMmRkZmUwMDUtMjEyOS00MWQ4LWFlZWMtMmIxZjUxZjAyOTYyLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAyMjkwLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjg3NGRjY2ZkODgxMDhhOWYwMTg4YmRhNTljNWRmMTgzXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMzQvMzQ1OWFiMzYtNzgyYy00YzRlLThhZWYtNzI4MGFmZjhiMjcyLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxODk2OSxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCIzYTgxMGE2MzZmMzc3OWIzNTdlODU0MTU1ZWFmYTRiNlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzM2LzM2YjZlYTczLWZmNDgtNDMwZS1hMGM3LTBlNWU4ZGVmZTM0MS5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMjcxMSxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJlNjQ2MjVhZWI1OWExZGUyMjVlNzE4YTcxMjY2MzRhZFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzM5LzM5NGJhYzgyLTU0ZmItNDcyZi1hMjdmLWI1MTA3ODIxYmZiOC5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMTY0MSxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCIwNDlkMjIwMWQ3ZDk5ZmM2ZGJkYjAxN2Q4ZDhiZDliOFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzNjLzNjZWRiOGI0LTg1MzItNDAzNy1hMDBlLWI4ZDNlMDAxMzE1OC5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogOTQzMTMsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiYTJlNzYzODY2YzFiZGQ2YjE4OWJlNjlmM2QzN2VlZGRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy80MS80MTI4Yjc4Yi0wMGFlLTRkOGEtYWUzNS00ZTVjYTVjNWNkZTkubWFuaWZlc3RcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogNjM1OCxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJjMWQxODg3OTg1MWU1Njc1NDVlYTA0YmYxMzVhMzI1ZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzQ5LzQ5NTM5Y2IwLTM4OTMtNDU5YS1iMzEwLTdjYzFiN2Y2ZDMzNS5tcDNcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogOTcxNjQ0LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImY0NWVjNjY2NmYwNmI3MjlkOGMwNDYxYmM4OWQ0Yjk0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvNGUvNGUwNmM3ZjEtNzJhYy00ZTRlLTkwZGUtNjgzZTE2OTA1MTU2LnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAyNDA2LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjVmMGMyOGUwZWVkN2VjMGNiNzVlNDVmNTkzN2RkN2M2XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvNTAvNTBkYTU0ODYtZGZhMS00NmQyLTlkNGYtNjg2ZWI1NTI3YzFhLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA2OTExLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjUxY2YzMjUyOWM5MjMxNDZmMDYwMTlhNTgzOThjOThkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvNTIvNTI0NWUyNWMtMDEwYy00NWZiLTg0YTMtZjNiY2U5NTc5M2U3LnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAzOTYzLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjBmMDUwYmE0NWUwOTk4NmIzZDc4NWI3YjIzZmZjYzFlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvNmQvNmRlMDZhMjMtZDBkZS00NzY2LWE5ZTEtYTAzMTQxMzZkNjJlLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMDg3OCxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCI5Zjg5ZWVjN2ExYjBmNjE1YTNjMWJhYjA4NTdhZWZmZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzcwLzcwMGZhYTE3LTExYTYtNDZjZC1hZWI1LWQ2OTAwYmMyNjRmOC5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMzc2NSxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCI4NzhlODlhMGEzZTAyYjEzYmVlZTlmMzI3NGYyY2EzOVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzcxLzcxNTYxMTQyLTRjODMtNDkzMy1hZmNhLWNiN2ExN2Y2NzA1My5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMTA1MCxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJjMDZhOTNmNWYxYThhMWM2ZWRjNGZkOGI1MmU5NmNiZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzgwLzgwNzFkZjlkLTAyOWItNDBlOC05OGYzLThlYWIwOGRiZjZjYS5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMjUyMDUsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiZjY4ODc3N2E5MmZiYTExYmZlODVjMzA2MWE0NDc2ZTVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy84Mi84MmZlNThkNC1hZTEzLTQ4MDYtOWE0MS0yZTczOTAyZWE4MTEucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDI0Mjk4LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImI4MDdkZjhmZmNiNTQwZjNkZDIwZGI3NWFjOTViNzNiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvODMvODNjYzIwODYtZDcxMy00N2EwLThkODYtYThkNjA2OGI2MjU4LnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAzNzgyLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjk4MjdjZTcwNTM0OWNhYTYwNGUxYWJhMWQ1M2IwZmQ5XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvOTYvOTZlM2UyOTMtNGUzNi00MjZkLWEwYTYtZWI4ZDAyNWMwZDViLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxNTM3OSxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJkNmNlNDdhZWQzODM0OGExZWEwZjAwM2ZhMDA2MzA3OVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzk3Lzk3YTYzMTZjLTdmY2ItNGZmZS05MDQ1LTM1NjI1YmM2YWJmNi5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMjE4NyxcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJmM2Y0MWI0YzA3ODNhNzUxZTU2MWYxYjg0ZDkxYTcwYlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzk3Lzk3YmI5YzljLTU1NjgtNDQxOS1hZjA0LTRlZDVhMjk2OWEwMi5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMTAzNzAsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiNDhhYjk0ZjFjMzRiMGU5YTA0NzI5N2NhYjFhZWFiYzRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy85OS85OTE3MGIwYi1kMjEwLTQ2ZjEtYjIxMy03ZDllM2YyMzA5OGEucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDExNzcsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiZDExMThkMTMzNjgzYmI0MjI3ZDVlNjBjNzljODQ2YjdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy85OS85OWFjYzcxNi0zM2RmLTRjNGMtODc5ZC1jYzM0MDdmMGNkOGMucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDk3NTQsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiMjNlNzIyMTkzNDAyMWYzZmJlNmM2YTUyYjAyM2RlZDhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy85ZS85ZTJhZTUwNy1mYWU1LTQ1MTEtOTQwYi1mMmU0NmY4MWI3OTAubXAzXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDMxNzksXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiOTBkMTdiMWEyNTIwMGM5MGUyOTJkOWEzNzQ4YzlmZWNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9hYy9hYzExNDM5ZC0zNzU4LTQ5ZjUtODcyOC04MWVkMjJjMWVkOTYucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDExOTM1LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImMyMGFlNGE3NGM0MmIyYWVkMjhiYjhjOTI0N2ViNWQ1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvYWUvYWU0ZTIxODgtMmI3Yi00MmE5LTg1ZTEtOGZiOTg3NjAwYjA0LnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA2MzQxNzEsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiMDdiMDNmNzE0NWI3NTU3OTcwOGFlMDVlYTJhMmMwMjlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9hZi9hZmUzMjlhNi1lODVlLTQ2YTAtOThlZC04YTM0ZTEyODkwN2IucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDIyMDksXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiMzBhZTJmZTg0NGM3YzUzZjFkMDAyOTEwNTEyMzA2MDdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9iMi9iMjAzN2YzNC0wNGZmLTQzNTEtYjlkYS01YmU0YmI1NTcwMTcucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDE1MzAsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiYmI5NmRhY2I4YjA5ZTA0NDNkODM0NjJjYzdiMjAwOTVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9iNC9iNDNmZjNjMi0wMmJiLTQ4NzQtODFmNy1mMmRlYTY5NzBmMTgucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDExMTQsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiODNmY2M5OTEyZTAxYWU1NDExYzM1NzY1MWZiOGIxY2ZcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9jMy9jMzllYTQ5Ni05NmViLTRkYzUtOTQ1YS1lN2M5MTliNzdjMjEucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDI1NDgsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiYWU3YTA0YWYyNWUyMzhhNTQ3ODE3MDc1OWI1NWE3YmFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9jYS9jYWFhZjlmZi01MDM2LTQyMzItYThhNy04OGI4MGIyZTRjODgucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDE4MjksXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiOTRkNzYxYzQ2MjZkZjg4MDUzNzg3ZjE3ZmEwOTkxNGRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9jYS9jYWNhZmE4NS1kOGU5LTQ3MTYtYmNkYi03ZWJhNDU3ZTQwOWMucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDczODAsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiZTZiYjBmNGQwNDEyNTc2NTNmMDdkYTJkZmUxZWRkMDlcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9jZS9jZTZkMmRlOS03MDU2LTRiYTgtYTFiMS00MGIwMGJiNmY0NjkucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDEwOTgyLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjUyYWEwZGY1NzdlZGFmZTExZGUxY2ZkYjQ0NDIyODk1XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvY2YvY2ZlZjc4ZjEtYzhkZi00OWI3LThlZDAtNGM5NTNhY2UyNjIxLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMTQwLFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImE0YjU5NTNkZmZlYjE0NWI0YjcwMDcyZDkxYzQwNTJiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvZDUvZDVkZmU2YTgtZWIxOS00YWFlLWE3NGYtODNiNzFlYWE1N2RjLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA4NzU1LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImFlYjEwNTVjZWQzMzRjZTIwZmUwMzA1NzllMTg3NDk0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvZGEvZGEzZTU1NmYtMWJjZS00YzMxLTg3ZGMtODk3ZWEyZDc4OGUyLnBuZ1wiOiB7XHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMTYzNixcclxuICAgICAgICAgICAgXCJtZDVcIjogXCJkODExMjQzNDZjMTEwZWIxMzc3ZjdiNTYzNDZiMzFlNFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzL2U4L2U4NTFlODliLWZhYTItNDQ4NC1iZWE2LTVjMDFkZDlmMDZlMi5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogMTA4MixcclxuICAgICAgICAgICAgXCJtZDVcIjogXCI5MGNmNDVkMDU5ZDA0MDhiZWMzMjdmNjZlYWU1NzY0Y1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJlcy9yYXctYXNzZXRzL2VjL2VjMjQ0ZWU1LTZmMWYtNDkyMC05YjY5LWQ0ZGYwZTc4ZWMyZC5wbmdcIjoge1xyXG4gICAgICAgICAgICBcInNpemVcIjogNTU1ODEsXHJcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiNjhmZGZmNzQzMGIxYjAyZjNhNmU3NmJlYTkyYzYzNzJcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9mYy9mY2NjNGQ4NS02YWQ0LTQ5NmQtOWIzMy1lYTc2ZTY5ZGExMzIucG5nXCI6IHtcclxuICAgICAgICAgICAgXCJzaXplXCI6IDgyMjU3LFxyXG4gICAgICAgICAgICBcIm1kNVwiOiBcImRmNDM1OWNkY2I5NTZmNTJmMmU1YjRlZjc3N2JiYjdkXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCJzZWFyY2hQYXRoc1wiOiBbXVxyXG59KTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbWFuaWZlc3RVcmw6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuQXNzZXQsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb2Nlc3NMb2FkOiBjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICBsYkxvYWRpbmc6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVXBkYXRlOiBjYy5MYWJlbCxcclxuICAgICAgICBfdXBkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIF9jYW5SZXRyeTogZmFsc2UsXHJcbiAgICAgICAgX3N0b3JhZ2VQYXRoOiAnJyxcclxuICAgICAgICBfYWRkRXZlbnRGaW5pc2g6IG51bGwsXHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrQ2I6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb2RlIDEyMzogJyArIGV2ZW50LmdldEV2ZW50Q29kZSgpKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX05PX0xPQ0FMX01BTklGRVNUOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJObyBsb2NhbCBtYW5pZmVzdCBmaWxlIGZvdW5kLCBob3QgdXBkYXRlIHNraXBwZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ET1dOTE9BRF9NQU5JRkVTVDpcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX1BBUlNFX01BTklGRVNUOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIFwiRmFpbCB0byBkb3dubG9hZCBtYW5pZmVzdCBmaWxlLCBob3QgdXBkYXRlIHNraXBwZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJBbHJlYWR5IHVwIHRvIGRhdGUgd2l0aCB0aGUgbGF0ZXN0IHJlbW90ZSB2ZXJzaW9uLlwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuTkVXX1ZFUlNJT05fRk9VTkQ6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggJ05ldyB2ZXJzaW9uIGZvdW5kLCBwbGVhc2UgdHJ5IHRvIHVwZGF0ZS4gKCcgKyB0aGlzLl9hbS5nZXRUb3RhbEJ5dGVzKCkgKyAnKScpO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJvY2VzcyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NMb2FkLnByb2dyZXNzID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubGJMb2FkaW5nLnN0cmluZyA9IFwixJBhbmcgY+G6rXAgbmjhuq10IHTDoGkgbmd1ecOqbiFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsKTtcclxuICAgICAgICB0aGlzLl9jaGVja0xpc3RlbmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVDYjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIG5lZWRSZXN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZ2V0RXZlbnRDb2RlKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfTk9fTE9DQUxfTUFOSUZFU1Q6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTm8gbG9jYWwgbWFuaWZlc3QgZmlsZSBmb3VuZCwgaG90IHVwZGF0ZSBza2lwcGVkLicpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX1BST0dSRVNTSU9OOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQuZ2V0UGVyY2VudCgpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmdldFBlcmNlbnRCeUZpbGUoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggZXZlbnQuZ2V0RG93bmxvYWRlZEZpbGVzKCkgKyAnIC8gJyArIGV2ZW50LmdldFRvdGFsRmlsZXMoKSlcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBldmVudC5nZXREb3dubG9hZGVkQnl0ZXMoKSArICcgLyAnICsgZXZlbnQuZ2V0VG90YWxCeXRlcygpKVxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIG1zZyA9IGV2ZW50LmdldE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGxldCBwZXJjZW50ID0gcGFyc2VGbG9hdCggZXZlbnQuZ2V0UGVyY2VudCgpKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGVyY2VudCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0xvYWQucHJvZ3Jlc3MgPSBwZXJjZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJMb2FkaW5nLnN0cmluZyAgICAgPSAgTWF0aC5mbG9vcihwZXJjZW50ICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ET1dOTE9BRF9NQU5JRkVTVDpcclxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX1BBUlNFX01BTklGRVNUOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZhaWwgdG8gZG93bmxvYWQgbWFuaWZlc3QgZmlsZSwgaG90IHVwZGF0ZSBza2lwcGVkLicpO1xyXG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuQUxSRUFEWV9VUF9UT19EQVRFOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FscmVhZHkgdXAgdG8gZGF0ZSB3aXRoIHRoZSBsYXRlc3QgcmVtb3RlIHZlcnNpb24uJyk7XHJcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfRklOSVNIRUQ6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnVXBkYXRlIGZpbmlzaGVkLiAnICsgZXZlbnQuZ2V0TWVzc2FnZSgpKTtcclxuICAgICAgICAgICAgICAgIG5lZWRSZXN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZBSUxFRDpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCAnVXBkYXRlIGZhaWxlZC4gJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuUmV0cnkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9VUERBVElORzpcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCAgJ0Fzc2V0IHVwZGF0ZSBlcnJvcjogJyArIGV2ZW50LmdldEFzc2V0SWQoKSArICcsICcgKyBldmVudC5nZXRNZXNzYWdlKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ERUNPTVBSRVNTOlxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQuZ2V0TWVzc2FnZSgpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmYWlsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWRkRXZlbnRGaW5pc2gpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRFdmVudEZpbmlzaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcclxuICAgICAgICAgICAgLy8gUHJlcGVuZCB0aGUgbWFuaWZlc3QncyBzZWFyY2ggcGF0aFxyXG4gICAgICAgICAgICB2YXIgc2VhcmNoUGF0aHMgPSBqc2IuZmlsZVV0aWxzLmdldFNlYXJjaFBhdGhzKCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdQYXRocyA9IHRoaXMuX2FtLmdldExvY2FsTWFuaWZlc3QoKS5nZXRTZWFyY2hQYXRocygpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShuZXdQYXRocykpO1xyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShzZWFyY2hQYXRocywgbmV3UGF0aHMpO1xyXG4gICAgICAgICAgICAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgcmV0cmlldmVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZGVmYXVsdCBzZWFyY2ggcGF0aCBkdXJpbmcgZ2FtZSBzdGFydHVwLFxyXG4gICAgICAgICAgICAvLyBwbGVhc2UgcmVmZXIgdG8gc2FtcGxlcy9qcy10ZXN0cy9tYWluLmpzIGZvciBkZXRhaWxlZCB1c2FnZS5cclxuICAgICAgICAgICAgLy8gISEhIFJlLWFkZCB0aGUgc2VhcmNoIHBhdGhzIGluIG1haW4uanMgaXMgdmVyeSBpbXBvcnRhbnQsIG90aGVyd2lzZSwgbmV3IHNjcmlwdHMgd29uJ3QgdGFrZSBlZmZlY3QuXHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSG90VXBkYXRlU2VhcmNoUGF0aHMnLCBKU09OLnN0cmluZ2lmeShzZWFyY2hQYXRocykpO1xyXG4gICAgICAgICAgICBqc2IuZmlsZVV0aWxzLnNldFNlYXJjaFBhdGhzKHNlYXJjaFBhdGhzKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5yZXN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkQ3VzdG9tTWFuaWZlc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcclxuICAgICAgICAgICAgdmFyIG1hbmlmZXN0ID0gbmV3IGpzYi5NYW5pZmVzdChjdXN0b21NYW5pZmVzdFN0ciwgdGhpcy5fc3RvcmFnZVBhdGgpO1xyXG4gICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdChtYW5pZmVzdCwgdGhpcy5fc3RvcmFnZVBhdGgpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggJ1VzaW5nIGN1c3RvbSBtYW5pZmVzdCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmV0cnk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3VwZGF0aW5nICYmIHRoaXMuX2NhblJldHJ5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhblJldHJ5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCAnUmV0cnkgZmFpbGVkIEFzc2V0cy4uLicpO1xyXG4gICAgICAgICAgICB0aGlzLl9hbS5kb3dubG9hZEZhaWxlZEFzc2V0cygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tVcGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdXBkYXRpbmcpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NoZWNraW5nIG9yIHVwZGF0aW5nIC4uLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9hbS5nZXRTdGF0ZSgpID09PSBqc2IuQXNzZXRzTWFuYWdlci5TdGF0ZS5VTklOSVRFRCkge1xyXG4gICAgICAgICAgICAvLyBSZXNvbHZlIG1kNSB1cmxcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMubWFuaWZlc3RVcmwubmF0aXZlVXJsO1xyXG4gICAgICAgICAgICBpZiAoY2MubG9hZGVyLm1kNVBpcGUpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IGNjLmxvYWRlci5tZDVQaXBlLnRyYW5zZm9ybVVSTCh1cmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLmxvYWRMb2NhbE1hbmlmZXN0KHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpIHx8ICF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuaXNMb2FkZWQoKSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvYWQgbG9jYWwgbWFuaWZlc3QgLi4uJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLmNoZWNrQ2IuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2FtLmNoZWNrVXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBob3RVcGRhdGU6IGZ1bmN0aW9uIChjYikge1xyXG4gICAgICAgIHRoaXMubGJVcGRhdGUuc3RyaW5nID0gXCJD4bqtcCBuaOG6rXQgcGhpw6puIGLhuqNuIG3hu5tpIVwiO1xyXG4gICAgICAgIGxldCBpc09rZSA9IHRoaXMuX2FtICYmICF0aGlzLl91cGRhdGluZztcclxuICAgICAgICBpZiAodGhpcy5fYW0gJiYgIXRoaXMuX3VwZGF0aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sodGhpcy51cGRhdGVDYi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbS5nZXRTdGF0ZSgpID09PSBqc2IuQXNzZXRzTWFuYWdlci5TdGF0ZS5VTklOSVRFRCkge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBtZDUgdXJsXHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5tYW5pZmVzdFVybC5uYXRpdmVVcmw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MubG9hZGVyLm1kNVBpcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBjYy5sb2FkZXIubWQ1UGlwZS50cmFuc2Zvcm1VUkwodXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuX2FtLmxvYWRMb2NhbE1hbmlmZXN0KHVybCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2ZhaWxDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50RmluaXNoID0gY2I7XHJcbiAgICB9LFxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBIb3QgdXBkYXRlIGlzIG9ubHkgYXZhaWxhYmxlIGluIE5hdGl2ZSBidWlsZFxyXG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc3RvcmFnZVBhdGggPSAoKGpzYi5maWxlVXRpbHMgPyBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpIDogJy8nKSArICdibGFja2phY2stcmVtb3RlLWFzc2V0Jyk7XHJcbiAgICAgICAgLy8gY2MubG9nKCdTdG9yYWdlIHBhdGggZm9yIHJlbW90ZSBhc3NldCA6ICcgKyB0aGlzLl9zdG9yYWdlUGF0aCk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIHlvdXIgb3duIHZlcnNpb24gY29tcGFyZSBoYW5kbGVyLCB2ZXJzaW9uQSBhbmQgQiBpcyB2ZXJzaW9ucyBpbiBzdHJpbmdcclxuICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIGdyZWF0ZXIgdGhhbiAwLCB2ZXJzaW9uQSBpcyBncmVhdGVyIHRoYW4gQixcclxuICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIGVxdWFscyAwLCB2ZXJzaW9uQSBlcXVhbHMgdG8gQixcclxuICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIHNtYWxsZXIgdGhhbiAwLCB2ZXJzaW9uQSBpcyBzbWFsbGVyIHRoYW4gQi5cclxuICAgICAgICB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlID0gZnVuY3Rpb24gKHZlcnNpb25BLCB2ZXJzaW9uQikge1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coXCJKUyBDdXN0b20gVmVyc2lvbiBDb21wYXJlOiB2ZXJzaW9uIEEgaXMgXCIgKyB2ZXJzaW9uQSArICcsIHZlcnNpb24gQiBpcyAnICsgdmVyc2lvbkIpO1xyXG4gICAgICAgICAgICB2YXIgdkEgPSB2ZXJzaW9uQS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICB2YXIgdkIgPSB2ZXJzaW9uQi5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZBLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHBhcnNlSW50KHZBW2ldKTtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gcGFyc2VJbnQodkJbaV0gfHwgMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2Qi5sZW5ndGggPiB2QS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSW5pdCB3aXRoIGVtcHR5IG1hbmlmZXN0IHVybCBmb3IgdGVzdGluZyBjdXN0b20gbWFuaWZlc3RcclxuICAgICAgICB0aGlzLl9hbSA9IG5ldyBqc2IuQXNzZXRzTWFuYWdlcignJywgdGhpcy5fc3RvcmFnZVBhdGgsIHRoaXMudmVyc2lvbkNvbXBhcmVIYW5kbGUpO1xyXG4gICAgICAgIC8vIFNldHVwIHRoZSB2ZXJpZmljYXRpb24gY2FsbGJhY2ssIGJ1dCB3ZSBkb24ndCBoYXZlIG1kNSBjaGVjayBmdW5jdGlvbiB5ZXQsIHNvIG9ubHkgcHJpbnQgc29tZSBtZXNzYWdlXHJcbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlIHZlcmlmaWNhdGlvbiBwYXNzZWQsIG90aGVyd2lzZSByZXR1cm4gZmFsc2VcclxuICAgICAgICB0aGlzLl9hbS5zZXRWZXJpZnlDYWxsYmFjayhmdW5jdGlvbiAocGF0aCwgYXNzZXQpIHtcclxuICAgICAgICAgICAgLy8gV2hlbiBhc3NldCBpcyBjb21wcmVzc2VkLCB3ZSBkb24ndCBuZWVkIHRvIGNoZWNrIGl0cyBtZDUsIGJlY2F1c2UgemlwIGZpbGUgaGF2ZSBiZWVuIGRlbGV0ZWQuXHJcbiAgICAgICAgICAgIHZhciBjb21wcmVzc2VkID0gYXNzZXQuY29tcHJlc3NlZDtcclxuICAgICAgICAgICAgLy8gUmV0cmlldmUgdGhlIGNvcnJlY3QgbWQ1IHZhbHVlLlxyXG4gICAgICAgICAgICB2YXIgZXhwZWN0ZWRNRDUgPSBhc3NldC5tZDU7XHJcbiAgICAgICAgICAgIC8vIGFzc2V0LnBhdGggaXMgcmVsYXRpdmUgcGF0aCBhbmQgcGF0aCBpcyBhYnNvbHV0ZS5cclxuICAgICAgICAgICAgdmFyIHJlbGF0aXZlUGF0aCA9IGFzc2V0LnBhdGg7XHJcbiAgICAgICAgICAgIC8vIFRoZSBzaXplIG9mIGFzc2V0IGZpbGUsIGJ1dCB0aGlzIHZhbHVlIGNvdWxkIGJlIGFic2VudC5cclxuICAgICAgICAgICAgdmFyIHNpemUgPSBhc3NldC5zaXplO1xyXG4gICAgICAgICAgICBpZiAoY29tcHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJWZXJpZmljYXRpb24gcGFzc2VkIDogXCIgKyByZWxhdGl2ZVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZlcmlmaWNhdGlvbiBwYXNzZWQgOiBcIiArIHJlbGF0aXZlUGF0aCArICcgKCcgKyBleHBlY3RlZE1ENSArICcpJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdIb3QgdXBkYXRlIGlzIHJlYWR5LCBwbGVhc2UgY2hlY2sgb3IgZGlyZWN0bHkgdXBkYXRlLicpO1xyXG4gICAgICAgIGlmIChjYy5zeXMub3MgPT09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgIC8vIFNvbWUgQW5kcm9pZCBkZXZpY2UgbWF5IHNsb3cgZG93biB0aGUgZG93bmxvYWQgcHJvY2VzcyB3aGVuIGNvbmN1cnJlbnQgdGFza3MgaXMgdG9vIG11Y2guXHJcbiAgICAgICAgICAgIC8vIFRoZSB2YWx1ZSBtYXkgbm90IGJlIGFjY3VyYXRlLCBwbGVhc2UgZG8gbW9yZSB0ZXN0IGFuZCBmaW5kIHdoYXQncyBtb3N0IHN1aXRhYmxlIGZvciB5b3VyIGdhbWUuXHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldE1heENvbmN1cnJlbnRUYXNrKDIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sobnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=