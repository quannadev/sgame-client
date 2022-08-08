
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvaG90dXBkYXRlL0hvaVhvYXlTZXJ2ZXIuanMiXSwibmFtZXMiOlsiY3VzdG9tTWFuaWZlc3RTdHIiLCJKU09OIiwic3RyaW5naWZ5IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtYW5pZmVzdFVybCIsInR5cGUiLCJBc3NldCIsInByb2Nlc3NMb2FkIiwiUHJvZ3Jlc3NCYXIiLCJsYkxvYWRpbmciLCJMYWJlbCIsImxiVXBkYXRlIiwiX3VwZGF0aW5nIiwiX2NhblJldHJ5IiwiX3N0b3JhZ2VQYXRoIiwiX2FkZEV2ZW50RmluaXNoIiwiY2hlY2tDYiIsImV2ZW50IiwiZ2V0RXZlbnRDb2RlIiwianNiIiwiRXZlbnRBc3NldHNNYW5hZ2VyIiwiRVJST1JfTk9fTE9DQUxfTUFOSUZFU1QiLCJFUlJPUl9ET1dOTE9BRF9NQU5JRkVTVCIsIkVSUk9SX1BBUlNFX01BTklGRVNUIiwiQUxSRUFEWV9VUF9UT19EQVRFIiwiTkVXX1ZFUlNJT05fRk9VTkQiLCJwcm9ncmVzcyIsInN0cmluZyIsIl9hbSIsInNldEV2ZW50Q2FsbGJhY2siLCJfY2hlY2tMaXN0ZW5lciIsInVwZGF0ZUNiIiwibmVlZFJlc3RhcnQiLCJmYWlsZWQiLCJVUERBVEVfUFJPR1JFU1NJT04iLCJwZXJjZW50IiwicGFyc2VGbG9hdCIsImdldFBlcmNlbnQiLCJpc05hTiIsIk1hdGgiLCJmbG9vciIsIlVQREFURV9GSU5JU0hFRCIsIlVQREFURV9GQUlMRUQiLCJFUlJPUl9VUERBVElORyIsIkVSUk9SX0RFQ09NUFJFU1MiLCJfdXBkYXRlTGlzdGVuZXIiLCJzZWFyY2hQYXRocyIsImZpbGVVdGlscyIsImdldFNlYXJjaFBhdGhzIiwibmV3UGF0aHMiLCJnZXRMb2NhbE1hbmlmZXN0IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJ1bnNoaWZ0IiwiYXBwbHkiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0U2VhcmNoUGF0aHMiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJnYW1lIiwicmVzdGFydCIsImxvYWRDdXN0b21NYW5pZmVzdCIsImdldFN0YXRlIiwiQXNzZXRzTWFuYWdlciIsIlN0YXRlIiwiVU5JTklURUQiLCJtYW5pZmVzdCIsIk1hbmlmZXN0IiwibG9hZExvY2FsTWFuaWZlc3QiLCJyZXRyeSIsImRvd25sb2FkRmFpbGVkQXNzZXRzIiwiY2hlY2tVcGRhdGUiLCJ1cmwiLCJuYXRpdmVVcmwiLCJsb2FkZXIiLCJtZDVQaXBlIiwidHJhbnNmb3JtVVJMIiwiaXNMb2FkZWQiLCJiaW5kIiwiaG90VXBkYXRlIiwiY2IiLCJpc09rZSIsIl9mYWlsQ291bnQiLCJ1cGRhdGUiLCJvbkxvYWQiLCJpc05hdGl2ZSIsImdldFdyaXRhYmxlUGF0aCIsInZlcnNpb25Db21wYXJlSGFuZGxlIiwidmVyc2lvbkEiLCJ2ZXJzaW9uQiIsInZBIiwic3BsaXQiLCJ2QiIsImkiLCJsZW5ndGgiLCJhIiwicGFyc2VJbnQiLCJiIiwic2V0VmVyaWZ5Q2FsbGJhY2siLCJwYXRoIiwiYXNzZXQiLCJjb21wcmVzc2VkIiwiZXhwZWN0ZWRNRDUiLCJtZDUiLCJyZWxhdGl2ZVBhdGgiLCJzaXplIiwib3MiLCJPU19BTkRST0lEIiwic2V0TWF4Q29uY3VycmVudFRhc2siLCJvbkRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxpQkFBaUIsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkMsZ0JBQWMsK0RBRHFCO0FBRW5DLHVCQUFxQiwrRUFGYztBQUduQyxzQkFBb0IsK0VBSGU7QUFJbkMsYUFBVyxNQUp3QjtBQUtuQyxZQUFVO0FBQ04sMEJBQXNCO0FBQ2xCLGNBQVEsT0FEVTtBQUVsQixhQUFPO0FBRlcsS0FEaEI7QUFLTiwwQkFBc0I7QUFDbEIsY0FBUSxLQURVO0FBRWxCLGFBQU87QUFGVyxLQUxoQjtBQVNOLHVCQUFtQjtBQUNmLGNBQVEsSUFETztBQUVmLGFBQU87QUFGUSxLQVRiO0FBYU4sb0NBQWdDO0FBQzVCLGNBQVEsSUFEb0I7QUFFNUIsYUFBTztBQUZxQixLQWIxQjtBQWlCTixvQ0FBZ0M7QUFDNUIsY0FBUSxLQURvQjtBQUU1QixhQUFPO0FBRnFCLEtBakIxQjtBQXFCTixvQ0FBZ0M7QUFDNUIsY0FBUSxLQURvQjtBQUU1QixhQUFPO0FBRnFCLEtBckIxQjtBQXlCTixvQ0FBZ0M7QUFDNUIsY0FBUSxLQURvQjtBQUU1QixhQUFPO0FBRnFCLEtBekIxQjtBQTZCTiwrREFBMkQ7QUFDdkQsY0FBUSxFQUQrQztBQUV2RCxhQUFPO0FBRmdELEtBN0JyRDtBQWlDTiwrREFBMkQ7QUFDdkQsY0FBUSxFQUQrQztBQUV2RCxhQUFPO0FBRmdELEtBakNyRDtBQXFDTiwrREFBMkQ7QUFDdkQsY0FBUSxFQUQrQztBQUV2RCxhQUFPO0FBRmdELEtBckNyRDtBQXlDTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekN4RDtBQTZDTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0N4RDtBQWlETixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakR4RDtBQXFETixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckR4RDtBQXlETixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekR4RDtBQTZETixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0R4RDtBQWlFTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakV4RDtBQXFFTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckV4RDtBQXlFTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekV4RDtBQTZFTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0V4RDtBQWlGTix1RUFBbUU7QUFDL0QsY0FBUSxJQUR1RDtBQUUvRCxhQUFPO0FBRndELEtBakY3RDtBQXFGTixrRUFBOEQ7QUFDMUQsY0FBUSxNQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckZ4RDtBQXlGTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekZ4RDtBQTZGTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0Z4RDtBQWlHTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakd4RDtBQXFHTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckd4RDtBQXlHTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekd4RDtBQTZHTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0d4RDtBQWlITixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakh4RDtBQXFITixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckh4RDtBQXlITixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekh4RDtBQTZITixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0h4RDtBQWlJTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakl4RDtBQXFJTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckl4RDtBQXlJTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekl4RDtBQTZJTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0l4RDtBQWlKTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakp4RDtBQXFKTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckp4RDtBQXlKTixrRUFBOEQ7QUFDMUQsY0FBUSxNQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekp4RDtBQTZKTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0p4RDtBQWlLTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakt4RDtBQXFLTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckt4RDtBQXlLTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekt4RDtBQTZLTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0t4RDtBQWlMTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBakx4RDtBQXFMTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBckx4RDtBQXlMTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBekx4RDtBQTZMTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBN0x4RDtBQWlNTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBak14RDtBQXFNTixrRUFBOEQ7QUFDMUQsY0FBUSxJQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBck14RDtBQXlNTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1ELEtBek14RDtBQTZNTixrRUFBOEQ7QUFDMUQsY0FBUSxLQURrRDtBQUUxRCxhQUFPO0FBRm1EO0FBN014RCxHQUx5QjtBQXVObkMsaUJBQWU7QUF2Tm9CLENBQWYsQ0FBeEI7QUEwTkFDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLEtBREE7QUFFVCxpQkFBUztBQUZBLEtBREw7QUFLUkMsSUFBQUEsV0FBVyxFQUFFUCxFQUFFLENBQUNRLFdBTFI7QUFNUkMsSUFBQUEsU0FBUyxFQUFFVCxFQUFFLENBQUNVLEtBTk47QUFPUkMsSUFBQUEsUUFBUSxFQUFFWCxFQUFFLENBQUNVLEtBUEw7QUFRUkUsSUFBQUEsU0FBUyxFQUFFLEtBUkg7QUFTUkMsSUFBQUEsU0FBUyxFQUFFLEtBVEg7QUFVUkMsSUFBQUEsWUFBWSxFQUFFLEVBVk47QUFXUkMsSUFBQUEsZUFBZSxFQUFFO0FBWFQsR0FIUDtBQWlCTEMsRUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxLQUFWLEVBQWlCO0FBQ3RCO0FBQ0EsWUFBUUEsS0FBSyxDQUFDQyxZQUFOLEVBQVI7QUFFSSxXQUFLQyxHQUFHLENBQUNDLGtCQUFKLENBQXVCQyx1QkFBNUI7QUFDSTtBQUNBOztBQUNKLFdBQUtGLEdBQUcsQ0FBQ0Msa0JBQUosQ0FBdUJFLHVCQUE1QjtBQUNBLFdBQUtILEdBQUcsQ0FBQ0Msa0JBQUosQ0FBdUJHLG9CQUE1QjtBQUNJO0FBQ0E7O0FBQ0osV0FBS0osR0FBRyxDQUFDQyxrQkFBSixDQUF1Qkksa0JBQTVCO0FBQ0k7QUFDQTs7QUFDSixXQUFLTCxHQUFHLENBQUNDLGtCQUFKLENBQXVCSyxpQkFBNUI7QUFDSTtBQUNBO0FBQ0EsYUFBS2xCLFdBQUwsQ0FBaUJtQixRQUFqQixHQUE0QixDQUE1QjtBQUNBLGFBQUtqQixTQUFMLENBQWVrQixNQUFmLEdBQXdCLDJCQUF4QjtBQUNBOztBQUNKO0FBQ0k7QUFuQlI7O0FBc0JBLFNBQUtDLEdBQUwsQ0FBU0MsZ0JBQVQsQ0FBMEIsSUFBMUI7O0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtsQixTQUFMLEdBQWlCLEtBQWpCO0FBQ0gsR0E1Q0k7QUE4Q0xtQixFQUFBQSxRQUFRLEVBQUUsa0JBQVVkLEtBQVYsRUFBaUI7QUFDdkIsUUFBSWUsV0FBVyxHQUFHLEtBQWxCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLEtBQWI7O0FBQ0EsWUFBUWhCLEtBQUssQ0FBQ0MsWUFBTixFQUFSO0FBRUksV0FBS0MsR0FBRyxDQUFDQyxrQkFBSixDQUF1QkMsdUJBQTVCO0FBQ0k7QUFDQVksUUFBQUEsTUFBTSxHQUFHLElBQVQ7QUFDQTs7QUFDSixXQUFLZCxHQUFHLENBQUNDLGtCQUFKLENBQXVCYyxrQkFBNUI7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSUMsT0FBTyxHQUFHQyxVQUFVLENBQUVuQixLQUFLLENBQUNvQixVQUFOLEVBQUYsQ0FBeEI7O0FBQ0EsWUFBSSxDQUFDQyxLQUFLLENBQUNILE9BQUQsQ0FBVixFQUFvQjtBQUNoQixlQUFLNUIsV0FBTCxDQUFpQm1CLFFBQWpCLEdBQTRCUyxPQUE1QjtBQUNBLGVBQUsxQixTQUFMLENBQWVrQixNQUFmLEdBQTZCWSxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsT0FBTyxHQUFHLEdBQXJCLElBQTRCLEdBQXpEO0FBQ0g7O0FBQ0Q7O0FBQ0osV0FBS2hCLEdBQUcsQ0FBQ0Msa0JBQUosQ0FBdUJFLHVCQUE1QjtBQUNBLFdBQUtILEdBQUcsQ0FBQ0Msa0JBQUosQ0FBdUJHLG9CQUE1QjtBQUNJO0FBQ0FVLFFBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0E7O0FBQ0osV0FBS2QsR0FBRyxDQUFDQyxrQkFBSixDQUF1Qkksa0JBQTVCO0FBQ0k7QUFDQVMsUUFBQUEsTUFBTSxHQUFHLElBQVQ7QUFDQTs7QUFDSixXQUFLZCxHQUFHLENBQUNDLGtCQUFKLENBQXVCcUIsZUFBNUI7QUFDSTtBQUNBVCxRQUFBQSxXQUFXLEdBQUcsSUFBZDtBQUNBOztBQUNKLFdBQUtiLEdBQUcsQ0FBQ0Msa0JBQUosQ0FBdUJzQixhQUE1QjtBQUNJO0FBQ0EsYUFBSzlCLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0E7O0FBQ0osV0FBS00sR0FBRyxDQUFDQyxrQkFBSixDQUF1QnVCLGNBQTVCO0FBQ0k7QUFDQTs7QUFDSixXQUFLeEIsR0FBRyxDQUFDQyxrQkFBSixDQUF1QndCLGdCQUE1QjtBQUNJO0FBQ0E7O0FBQ0o7QUFDSTtBQTNDUjs7QUE2Q0EsUUFBSVgsTUFBSixFQUFZO0FBQ1IsV0FBS0wsR0FBTCxDQUFTQyxnQkFBVCxDQUEwQixJQUExQjs7QUFDQSxXQUFLZ0IsZUFBTCxHQUF1QixJQUF2QjtBQUNBLFdBQUtqQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsVUFBSSxLQUFLRyxlQUFULEVBQ0ksS0FBS0EsZUFBTDtBQUNQOztBQUVELFFBQUlpQixXQUFKLEVBQWlCO0FBQ2IsV0FBS0osR0FBTCxDQUFTQyxnQkFBVCxDQUEwQixJQUExQjs7QUFDQSxXQUFLZ0IsZUFBTCxHQUF1QixJQUF2QixDQUZhLENBR2I7O0FBQ0EsVUFBSUMsV0FBVyxHQUFHM0IsR0FBRyxDQUFDNEIsU0FBSixDQUFjQyxjQUFkLEVBQWxCOztBQUNBLFVBQUlDLFFBQVEsR0FBRyxLQUFLckIsR0FBTCxDQUFTc0IsZ0JBQVQsR0FBNEJGLGNBQTVCLEVBQWYsQ0FMYSxDQU1iOzs7QUFDQUcsTUFBQUEsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBeEIsQ0FBOEJSLFdBQTlCLEVBQTJDRyxRQUEzQyxFQVBhLENBUWI7QUFDQTtBQUNBOztBQUNBakQsTUFBQUEsRUFBRSxDQUFDdUQsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixzQkFBNUIsRUFBb0QzRCxJQUFJLENBQUNDLFNBQUwsQ0FBZStDLFdBQWYsQ0FBcEQ7QUFDQTNCLE1BQUFBLEdBQUcsQ0FBQzRCLFNBQUosQ0FBY1csY0FBZCxDQUE2QlosV0FBN0I7QUFFQTlDLE1BQUFBLEVBQUUsQ0FBQzJELFdBQUgsQ0FBZUMsT0FBZjtBQUNBNUQsTUFBQUEsRUFBRSxDQUFDNkQsSUFBSCxDQUFRQyxPQUFSO0FBQ0g7QUFDSixHQXZISTtBQXlITEMsRUFBQUEsa0JBQWtCLEVBQUUsOEJBQVk7QUFDNUIsUUFBSSxLQUFLbkMsR0FBTCxDQUFTb0MsUUFBVCxPQUF3QjdDLEdBQUcsQ0FBQzhDLGFBQUosQ0FBa0JDLEtBQWxCLENBQXdCQyxRQUFwRCxFQUE4RDtBQUMxRCxVQUFJQyxRQUFRLEdBQUcsSUFBSWpELEdBQUcsQ0FBQ2tELFFBQVIsQ0FBaUJ4RSxpQkFBakIsRUFBb0MsS0FBS2lCLFlBQXpDLENBQWY7O0FBQ0EsV0FBS2MsR0FBTCxDQUFTMEMsaUJBQVQsQ0FBMkJGLFFBQTNCLEVBQXFDLEtBQUt0RCxZQUExQyxFQUYwRCxDQUcxRDs7QUFDSDtBQUNKLEdBL0hJO0FBaUlMeUQsRUFBQUEsS0FBSyxFQUFFLGlCQUFZO0FBQ2YsUUFBSSxDQUFDLEtBQUszRCxTQUFOLElBQW1CLEtBQUtDLFNBQTVCLEVBQXVDO0FBQ25DLFdBQUtBLFNBQUwsR0FBaUIsS0FBakIsQ0FEbUMsQ0FFbkM7O0FBQ0EsV0FBS2UsR0FBTCxDQUFTNEMsb0JBQVQ7QUFDSDtBQUNKLEdBdklJO0FBeUlMQyxFQUFBQSxXQUFXLEVBQUUsdUJBQVk7QUFDckIsUUFBSSxLQUFLN0QsU0FBVCxFQUFvQjtBQUNoQjtBQUNBO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLZ0IsR0FBTCxDQUFTb0MsUUFBVCxPQUF3QjdDLEdBQUcsQ0FBQzhDLGFBQUosQ0FBa0JDLEtBQWxCLENBQXdCQyxRQUFwRCxFQUE4RDtBQUMxRDtBQUNBLFVBQUlPLEdBQUcsR0FBRyxLQUFLdEUsV0FBTCxDQUFpQnVFLFNBQTNCOztBQUNBLFVBQUkzRSxFQUFFLENBQUM0RSxNQUFILENBQVVDLE9BQWQsRUFBdUI7QUFDbkJILFFBQUFBLEdBQUcsR0FBRzFFLEVBQUUsQ0FBQzRFLE1BQUgsQ0FBVUMsT0FBVixDQUFrQkMsWUFBbEIsQ0FBK0JKLEdBQS9CLENBQU47QUFDSDs7QUFDRCxXQUFLOUMsR0FBTCxDQUFTMEMsaUJBQVQsQ0FBMkJJLEdBQTNCO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDLEtBQUs5QyxHQUFMLENBQVNzQixnQkFBVCxFQUFELElBQWdDLENBQUMsS0FBS3RCLEdBQUwsQ0FBU3NCLGdCQUFULEdBQTRCNkIsUUFBNUIsRUFBckMsRUFBNkU7QUFDekU7QUFDQTtBQUNIOztBQUNELFNBQUtuRCxHQUFMLENBQVNDLGdCQUFULENBQTBCLEtBQUtiLE9BQUwsQ0FBYWdFLElBQWIsQ0FBa0IsSUFBbEIsQ0FBMUI7O0FBRUEsU0FBS3BELEdBQUwsQ0FBUzZDLFdBQVQ7O0FBQ0EsU0FBSzdELFNBQUwsR0FBaUIsSUFBakI7QUFDSCxHQTlKSTtBQWdLTHFFLEVBQUFBLFNBQVMsRUFBRSxtQkFBVUMsRUFBVixFQUFjO0FBQ3JCLFNBQUt2RSxRQUFMLENBQWNnQixNQUFkLEdBQXVCLHlCQUF2QjtBQUNBLFFBQUl3RCxLQUFLLEdBQUcsS0FBS3ZELEdBQUwsSUFBWSxDQUFDLEtBQUtoQixTQUE5Qjs7QUFDQSxRQUFJLEtBQUtnQixHQUFMLElBQVksQ0FBQyxLQUFLaEIsU0FBdEIsRUFBaUM7QUFDN0IsV0FBS2dCLEdBQUwsQ0FBU0MsZ0JBQVQsQ0FBMEIsS0FBS0UsUUFBTCxDQUFjaUQsSUFBZCxDQUFtQixJQUFuQixDQUExQjs7QUFFQSxVQUFJLEtBQUtwRCxHQUFMLENBQVNvQyxRQUFULE9BQXdCN0MsR0FBRyxDQUFDOEMsYUFBSixDQUFrQkMsS0FBbEIsQ0FBd0JDLFFBQXBELEVBQThEO0FBQzFEO0FBQ0EsWUFBSU8sR0FBRyxHQUFHLEtBQUt0RSxXQUFMLENBQWlCdUUsU0FBM0I7O0FBQ0EsWUFBSTNFLEVBQUUsQ0FBQzRFLE1BQUgsQ0FBVUMsT0FBZCxFQUF1QjtBQUNuQkgsVUFBQUEsR0FBRyxHQUFHMUUsRUFBRSxDQUFDNEUsTUFBSCxDQUFVQyxPQUFWLENBQWtCQyxZQUFsQixDQUErQkosR0FBL0IsQ0FBTjtBQUNIOztBQUNELGFBQUs5QyxHQUFMLENBQVMwQyxpQkFBVCxDQUEyQkksR0FBM0I7QUFDSDs7QUFFRCxXQUFLVSxVQUFMLEdBQWtCLENBQWxCOztBQUNBLFdBQUt4RCxHQUFMLENBQVN5RCxNQUFUOztBQUNBLFdBQUt6RSxTQUFMLEdBQWlCLElBQWpCO0FBQ0g7O0FBQ0QsU0FBS0csZUFBTCxHQUF1Qm1FLEVBQXZCO0FBQ0gsR0FwTEk7QUFxTEw7QUFDQUksRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0EsUUFBSSxDQUFDdEYsRUFBRSxDQUFDdUQsR0FBSCxDQUFPZ0MsUUFBWixFQUFzQjtBQUNsQjtBQUNIOztBQUNELFNBQUt6RSxZQUFMLEdBQXFCLENBQUNLLEdBQUcsQ0FBQzRCLFNBQUosR0FBZ0I1QixHQUFHLENBQUM0QixTQUFKLENBQWN5QyxlQUFkLEVBQWhCLEdBQWtELEdBQW5ELElBQTBELHdCQUEvRSxDQUxnQixDQU1oQjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQUtDLG9CQUFMLEdBQTRCLFVBQVVDLFFBQVYsRUFBb0JDLFFBQXBCLEVBQThCO0FBQ3REO0FBQ0EsVUFBSUMsRUFBRSxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxHQUFmLENBQVQ7QUFDQSxVQUFJQyxFQUFFLEdBQUdILFFBQVEsQ0FBQ0UsS0FBVCxDQUFlLEdBQWYsQ0FBVDs7QUFDQSxXQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEVBQUUsQ0FBQ0ksTUFBdkIsRUFBK0IsRUFBRUQsQ0FBakMsRUFBb0M7QUFDaEMsWUFBSUUsQ0FBQyxHQUFHQyxRQUFRLENBQUNOLEVBQUUsQ0FBQ0csQ0FBRCxDQUFILENBQWhCO0FBQ0EsWUFBSUksQ0FBQyxHQUFHRCxRQUFRLENBQUNKLEVBQUUsQ0FBQ0MsQ0FBRCxDQUFGLElBQVMsQ0FBVixDQUFoQjs7QUFDQSxZQUFJRSxDQUFDLEtBQUtFLENBQVYsRUFBYTtBQUNUO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsaUJBQU9GLENBQUMsR0FBR0UsQ0FBWDtBQUNIO0FBQ0o7O0FBQ0QsVUFBSUwsRUFBRSxDQUFDRSxNQUFILEdBQVlKLEVBQUUsQ0FBQ0ksTUFBbkIsRUFBMkI7QUFDdkIsZUFBTyxDQUFDLENBQVI7QUFDSCxPQUZELE1BR0s7QUFDRCxlQUFPLENBQVA7QUFDSDtBQUNKLEtBcEJELENBWmdCLENBa0NoQjs7O0FBQ0EsU0FBS3BFLEdBQUwsR0FBVyxJQUFJVCxHQUFHLENBQUM4QyxhQUFSLENBQXNCLEVBQXRCLEVBQTBCLEtBQUtuRCxZQUEvQixFQUE2QyxLQUFLMkUsb0JBQWxELENBQVgsQ0FuQ2dCLENBb0NoQjtBQUNBOztBQUNBLFNBQUs3RCxHQUFMLENBQVN3RSxpQkFBVCxDQUEyQixVQUFVQyxJQUFWLEVBQWdCQyxLQUFoQixFQUF1QjtBQUM5QztBQUNBLFVBQUlDLFVBQVUsR0FBR0QsS0FBSyxDQUFDQyxVQUF2QixDQUY4QyxDQUc5Qzs7QUFDQSxVQUFJQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ0csR0FBeEIsQ0FKOEMsQ0FLOUM7O0FBQ0EsVUFBSUMsWUFBWSxHQUFHSixLQUFLLENBQUNELElBQXpCLENBTjhDLENBTzlDOztBQUNBLFVBQUlNLElBQUksR0FBR0wsS0FBSyxDQUFDSyxJQUFqQjs7QUFDQSxVQUFJSixVQUFKLEVBQWdCO0FBQ1o7QUFDQSxlQUFPLElBQVA7QUFDSCxPQUhELE1BSUs7QUFDRDtBQUNBLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FqQkQsRUF0Q2dCLENBd0RoQjs7O0FBQ0EsUUFBSXZHLEVBQUUsQ0FBQ3VELEdBQUgsQ0FBT3FELEVBQVAsS0FBYzVHLEVBQUUsQ0FBQ3VELEdBQUgsQ0FBT3NELFVBQXpCLEVBQXFDO0FBQ2pDO0FBQ0E7QUFDQSxXQUFLakYsR0FBTCxDQUFTa0Ysb0JBQVQsQ0FBOEIsQ0FBOUI7QUFDSDtBQUNKLEdBcFBJO0FBc1BMQyxFQUFBQSxTQUFTLEVBQUUscUJBQVk7QUFDbkIsUUFBSSxLQUFLbEUsZUFBVCxFQUEwQjtBQUN0QixXQUFLakIsR0FBTCxDQUFTQyxnQkFBVCxDQUEwQixJQUExQjs7QUFDQSxXQUFLZ0IsZUFBTCxHQUF1QixJQUF2QjtBQUNIO0FBQ0o7QUEzUEksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIG1hbmlmZXN0IHJlbW92ZWQgdGhlIGZvbGxvd2luZyBhc3NldHM6XG4vLyAxLiByZXMvcmF3LWFzc2V0cy8yYS8yYTQwZTVlNy00YzRhLTQzNTAtOWU1ZC03Njc1Nzc1NWNkZDIucG5nXG4vLyAyLiByZXMvcmF3LWFzc2V0cy8yZC8yZDg2YTg1NC02M2M0LTRiOTAtOGI4OC1hNDMyOGI4NTI2YzIucG5nXG4vLyBTbyB3aGVuIGN1c3RvbSBtYW5pZmVzdCB1c2VkLCB5b3Ugc2hvdWxkIGJlIGFibGUgdG8gZmluZCB0aGVtIGluIGRvd25sb2FkZWQgcmVtb3RlIGFzc2V0c1xudmFyIGN1c3RvbU1hbmlmZXN0U3RyID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgIFwicGFja2FnZVVybFwiOiBcImh0dHA6Ly8xOTIuMTY4LjUwLjIyMDo1NTU1L3R1dG9yaWFsLWhvdC11cGRhdGUvcmVtb3RlLWFzc2V0cy9cIixcbiAgICBcInJlbW90ZU1hbmlmZXN0VXJsXCI6IFwiaHR0cDovLzE5Mi4xNjguNTAuMjIwOjU1NTUvdHV0b3JpYWwtaG90LXVwZGF0ZS9yZW1vdGUtYXNzZXRzL3Byb2plY3QubWFuaWZlc3RcIixcbiAgICBcInJlbW90ZVZlcnNpb25VcmxcIjogXCJodHRwOi8vMTkyLjE2OC41MC4yMjA6NTU1NS90dXRvcmlhbC1ob3QtdXBkYXRlL3JlbW90ZS1hc3NldHMvdmVyc2lvbi5tYW5pZmVzdFwiLFxuICAgIFwidmVyc2lvblwiOiBcIjEuMTBcIixcbiAgICBcImFzc2V0c1wiOiB7XG4gICAgICAgIFwic3JjL2NvY29zMmQtanNiLmpzXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAzMzQxNDY1LFxuICAgICAgICAgICAgXCJtZDVcIjogXCJmYWZkZGU2NmJkMGE4MWQxZTA5Njc5OWZiOGI3YWY5NVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwic3JjL3Byb2plY3QuZGV2LmpzXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA5NzgxNCxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiZWQ3ZjVhY2Q0MTFhMDlkNGQyOThkYjgwMGI4NzNiMDBcIlxuICAgICAgICB9LFxuICAgICAgICBcInNyYy9zZXR0aW5ncy5qc1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMzg0OSxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiZGViMDM5OThhNGNmYjhmOGI0NjhmYmE4NTc1Y2IxYzlcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9pbXBvcnQvMDMvMDM3OWZiOTYyLmpzb25cIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDExMDcsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImQxMDJkMGYxNGVkNmI2Y2I0MmNjMjhkODhiM2I5MDY5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvaW1wb3J0LzBjLzBjZDVkZTE0My5qc29uXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA4MDg4MyxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiZjA2MzQ3ODgwMDM4YTEzODEwNDNlZDUwNWQ2ZjhhOWFcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9pbXBvcnQvMGQvMGQ3NTZhZjQ1Lmpzb25cIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDEwMTM3LFxuICAgICAgICAgICAgXCJtZDVcIjogXCIwMmRjOGI3OTVlNzliOWZkNjJlMDBkNGEyYzcwYzhjMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL2ltcG9ydC8wZC8wZGM2YTRlNTkuanNvblwiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMTQ5NzAsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImE1MDBmNjk2ODkyZGY2ODY5MzQxZGZmNWYzMWIxYTMzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvaW1wb3J0LzQxLzQxMjhiNzhiLTAwYWUtNGQ4YS1hZTM1LTRlNWNhNWM1Y2RlOS5qc29uXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA3NixcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiM2Y3OWQ5M2NlOGQ0MmIxODZlY2Q0M2Q4NjhjOGQwMjNcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9pbXBvcnQvNDkvNDk1MzljYjAtMzg5My00NTlhLWIzMTAtN2NjMWI3ZjZkMzM1Lmpzb25cIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDcyLFxuICAgICAgICAgICAgXCJtZDVcIjogXCI4YTM2Mzg4Y2RhN2MzNzczYjViZjdhNTNkODgyNDUzNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL2ltcG9ydC85ZS85ZTJhZTUwNy1mYWU1LTQ1MTEtOTQwYi1mMmU0NmY4MWI3OTAuanNvblwiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogNzQsXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjk4ZjZiMWQ5M2E0ZWUzYTFmMjA3NGJlOWNlMDBmYmIyXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy8wZS8wZWQ4Y2Y2ZS04YzA0LTQ1NjktOGQxNy02MjZhMjZlMTA5OWYucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA0NjY1LFxuICAgICAgICAgICAgXCJtZDVcIjogXCI5ZThiZjlhZjMwYWM3YTllYTlkM2I3MmYzN2ExOTNlMVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMTMvMTM3ZDFjYTYtZTkwYy00NDBiLTlmYTItNGI5ZmZmZjU2OWY3LnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMTYyNyxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiNzUwNjAyOTFlMjQyOTRhYmQ2YTUyNTUzZmEyMjMxN2VcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzE1LzE1ZDVmM2YwLWY5NjUtNGMwMC05NDViLWQyYzhmYWVlNzhiNi5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDM4NDAsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImNiNTI1ZWRhYjgwNjNhODQ1ZTZiZDFlOWQyOWI4Y2RlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy8xOS8xOTUwOWJiMS1kYzA4LTRjYmYtYWI4Zi0yNDYwZTIwNzI2NWMucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA5NjM4LFxuICAgICAgICAgICAgXCJtZDVcIjogXCI2ZTE1OWM5Y2MxYjk3MWQzOTIxYmM4OTA4MDcxYTcwYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvMjYvMjZlOWE4NjctM2QyZi00OTgxLThhMzMtODJkNDQwZGU3YWZmLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogNjQxNyxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiNWMxMzk3Mjk3MDhkZDI2YmQ0NjFiY2QzZTgyMDE4MjNcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzJkLzJkZGZlMDA1LTIxMjktNDFkOC1hZWVjLTJiMWY1MWYwMjk2Mi5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDIyOTAsXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjg3NGRjY2ZkODgxMDhhOWYwMTg4YmRhNTljNWRmMTgzXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy8zNC8zNDU5YWIzNi03ODJjLTRjNGUtOGFlZi03MjgwYWZmOGIyNzIucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxODk2OSxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiM2E4MTBhNjM2ZjM3NzliMzU3ZTg1NDE1NWVhZmE0YjZcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzM2LzM2YjZlYTczLWZmNDgtNDMwZS1hMGM3LTBlNWU4ZGVmZTM0MS5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDI3MTEsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImU2NDYyNWFlYjU5YTFkZTIyNWU3MThhNzEyNjYzNGFkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy8zOS8zOTRiYWM4Mi01NGZiLTQ3MmYtYTI3Zi1iNTEwNzgyMWJmYjgucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxNjQxLFxuICAgICAgICAgICAgXCJtZDVcIjogXCIwNDlkMjIwMWQ3ZDk5ZmM2ZGJkYjAxN2Q4ZDhiZDliOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvM2MvM2NlZGI4YjQtODUzMi00MDM3LWEwMGUtYjhkM2UwMDEzMTU4LnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogOTQzMTMsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImEyZTc2Mzg2NmMxYmRkNmIxODliZTY5ZjNkMzdlZWRkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy80MS80MTI4Yjc4Yi0wMGFlLTRkOGEtYWUzNS00ZTVjYTVjNWNkZTkubWFuaWZlc3RcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDYzNTgsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImMxZDE4ODc5ODUxZTU2NzU0NWVhMDRiZjEzNWEzMjVmXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy80OS80OTUzOWNiMC0zODkzLTQ1OWEtYjMxMC03Y2MxYjdmNmQzMzUubXAzXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA5NzE2NDQsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImY0NWVjNjY2NmYwNmI3MjlkOGMwNDYxYmM4OWQ0Yjk0XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy80ZS80ZTA2YzdmMS03MmFjLTRlNGUtOTBkZS02ODNlMTY5MDUxNTYucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAyNDA2LFxuICAgICAgICAgICAgXCJtZDVcIjogXCI1ZjBjMjhlMGVlZDdlYzBjYjc1ZTQ1ZjU5MzdkZDdjNlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvNTAvNTBkYTU0ODYtZGZhMS00NmQyLTlkNGYtNjg2ZWI1NTI3YzFhLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogNjkxMSxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiNTFjZjMyNTI5YzkyMzE0NmYwNjAxOWE1ODM5OGM5OGRcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzUyLzUyNDVlMjVjLTAxMGMtNDVmYi04NGEzLWYzYmNlOTU3OTNlNy5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDM5NjMsXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjBmMDUwYmE0NWUwOTk4NmIzZDc4NWI3YjIzZmZjYzFlXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy82ZC82ZGUwNmEyMy1kMGRlLTQ3NjYtYTllMS1hMDMxNDEzNmQ2MmUucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMDg3OCxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiOWY4OWVlYzdhMWIwZjYxNWEzYzFiYWIwODU3YWVmZmZcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzcwLzcwMGZhYTE3LTExYTYtNDZjZC1hZWI1LWQ2OTAwYmMyNjRmOC5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDM3NjUsXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjg3OGU4OWEwYTNlMDJiMTNiZWVlOWYzMjc0ZjJjYTM5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy83MS83MTU2MTE0Mi00YzgzLTQ5MzMtYWZjYS1jYjdhMTdmNjcwNTMucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMDUwLFxuICAgICAgICAgICAgXCJtZDVcIjogXCJjMDZhOTNmNWYxYThhMWM2ZWRjNGZkOGI1MmU5NmNiZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvODAvODA3MWRmOWQtMDI5Yi00MGU4LTk4ZjMtOGVhYjA4ZGJmNmNhLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMjUyMDUsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImY2ODg3NzdhOTJmYmExMWJmZTg1YzMwNjFhNDQ3NmU1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy84Mi84MmZlNThkNC1hZTEzLTQ4MDYtOWE0MS0yZTczOTAyZWE4MTEucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAyNDI5OCxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiYjgwN2RmOGZmY2I1NDBmM2RkMjBkYjc1YWM5NWI3M2JcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzgzLzgzY2MyMDg2LWQ3MTMtNDdhMC04ZDg2LWE4ZDYwNjhiNjI1OC5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDM3ODIsXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjk4MjdjZTcwNTM0OWNhYTYwNGUxYWJhMWQ1M2IwZmQ5XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy85Ni85NmUzZTI5My00ZTM2LTQyNmQtYTBhNi1lYjhkMDI1YzBkNWIucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxNTM3OSxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiZDZjZTQ3YWVkMzgzNDhhMWVhMGYwMDNmYTAwNjMwNzlcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzk3Lzk3YTYzMTZjLTdmY2ItNGZmZS05MDQ1LTM1NjI1YmM2YWJmNi5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDIxODcsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImYzZjQxYjRjMDc4M2E3NTFlNTYxZjFiODRkOTFhNzBiXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy85Ny85N2JiOWM5Yy01NTY4LTQ0MTktYWYwNC00ZWQ1YTI5NjlhMDIucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMDM3MCxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiNDhhYjk0ZjFjMzRiMGU5YTA0NzI5N2NhYjFhZWFiYzRcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzLzk5Lzk5MTcwYjBiLWQyMTAtNDZmMS1iMjEzLTdkOWUzZjIzMDk4YS5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDExNzcsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImQxMTE4ZDEzMzY4M2JiNDIyN2Q1ZTYwYzc5Yzg0NmI3XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy85OS85OWFjYzcxNi0zM2RmLTRjNGMtODc5ZC1jYzM0MDdmMGNkOGMucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA5NzU0LFxuICAgICAgICAgICAgXCJtZDVcIjogXCIyM2U3MjIxOTM0MDIxZjNmYmU2YzZhNTJiMDIzZGVkOFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvOWUvOWUyYWU1MDctZmFlNS00NTExLTk0MGItZjJlNDZmODFiNzkwLm1wM1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMzE3OSxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiOTBkMTdiMWEyNTIwMGM5MGUyOTJkOWEzNzQ4YzlmZWNcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzL2FjL2FjMTE0MzlkLTM3NTgtNDlmNS04NzI4LTgxZWQyMmMxZWQ5Ni5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDExOTM1LFxuICAgICAgICAgICAgXCJtZDVcIjogXCJjMjBhZTRhNzRjNDJiMmFlZDI4YmI4YzkyNDdlYjVkNVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvYWUvYWU0ZTIxODgtMmI3Yi00MmE5LTg1ZTEtOGZiOTg3NjAwYjA0LnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogNjM0MTcxLFxuICAgICAgICAgICAgXCJtZDVcIjogXCIwN2IwM2Y3MTQ1Yjc1NTc5NzA4YWUwNWVhMmEyYzAyOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvYWYvYWZlMzI5YTYtZTg1ZS00NmEwLTk4ZWQtOGEzNGUxMjg5MDdiLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMjIwOSxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiMzBhZTJmZTg0NGM3YzUzZjFkMDAyOTEwNTEyMzA2MDdcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzL2IyL2IyMDM3ZjM0LTA0ZmYtNDM1MS1iOWRhLTViZTRiYjU1NzAxNy5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDE1MzAsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImJiOTZkYWNiOGIwOWUwNDQzZDgzNDYyY2M3YjIwMDk1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9iNC9iNDNmZjNjMi0wMmJiLTQ4NzQtODFmNy1mMmRlYTY5NzBmMTgucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMTE0LFxuICAgICAgICAgICAgXCJtZDVcIjogXCI4M2ZjYzk5MTJlMDFhZTU0MTFjMzU3NjUxZmI4YjFjZlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvYzMvYzM5ZWE0OTYtOTZlYi00ZGM1LTk0NWEtZTdjOTE5Yjc3YzIxLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMjU0OCxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiYWU3YTA0YWYyNWUyMzhhNTQ3ODE3MDc1OWI1NWE3YmFcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzL2NhL2NhYWFmOWZmLTUwMzYtNDIzMi1hOGE3LTg4YjgwYjJlNGM4OC5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDE4MjksXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjk0ZDc2MWM0NjI2ZGY4ODA1Mzc4N2YxN2ZhMDk5MTRkXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9jYS9jYWNhZmE4NS1kOGU5LTQ3MTYtYmNkYi03ZWJhNDU3ZTQwOWMucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiA3MzgwLFxuICAgICAgICAgICAgXCJtZDVcIjogXCJlNmJiMGY0ZDA0MTI1NzY1M2YwN2RhMmRmZTFlZGQwOVwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvY2UvY2U2ZDJkZTktNzA1Ni00YmE4LWExYjEtNDBiMDBiYjZmNDY5LnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMTA5ODIsXG4gICAgICAgICAgICBcIm1kNVwiOiBcIjUyYWEwZGY1NzdlZGFmZTExZGUxY2ZkYjQ0NDIyODk1XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJyZXMvcmF3LWFzc2V0cy9jZi9jZmVmNzhmMS1jOGRmLTQ5YjctOGVkMC00Yzk1M2FjZTI2MjEucG5nXCI6IHtcbiAgICAgICAgICAgIFwic2l6ZVwiOiAxMTQwLFxuICAgICAgICAgICAgXCJtZDVcIjogXCJhNGI1OTUzZGZmZWIxNDViNGI3MDA3MmQ5MWM0MDUyYlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvZDUvZDVkZmU2YTgtZWIxOS00YWFlLWE3NGYtODNiNzFlYWE1N2RjLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogODc1NSxcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiYWViMTA1NWNlZDMzNGNlMjBmZTAzMDU3OWUxODc0OTRcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzL2RhL2RhM2U1NTZmLTFiY2UtNGMzMS04N2RjLTg5N2VhMmQ3ODhlMi5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDExNjM2LFxuICAgICAgICAgICAgXCJtZDVcIjogXCJkODExMjQzNDZjMTEwZWIxMzc3ZjdiNTYzNDZiMzFlNFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvZTgvZTg1MWU4OWItZmFhMi00NDg0LWJlYTYtNWMwMWRkOWYwNmUyLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogMTA4MixcbiAgICAgICAgICAgIFwibWQ1XCI6IFwiOTBjZjQ1ZDA1OWQwNDA4YmVjMzI3ZjY2ZWFlNTc2NGNcIlxuICAgICAgICB9LFxuICAgICAgICBcInJlcy9yYXctYXNzZXRzL2VjL2VjMjQ0ZWU1LTZmMWYtNDkyMC05YjY5LWQ0ZGYwZTc4ZWMyZC5wbmdcIjoge1xuICAgICAgICAgICAgXCJzaXplXCI6IDU1NTgxLFxuICAgICAgICAgICAgXCJtZDVcIjogXCI2OGZkZmY3NDMwYjFiMDJmM2E2ZTc2YmVhOTJjNjM3MlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicmVzL3Jhdy1hc3NldHMvZmMvZmNjYzRkODUtNmFkNC00OTZkLTliMzMtZWE3NmU2OWRhMTMyLnBuZ1wiOiB7XG4gICAgICAgICAgICBcInNpemVcIjogODIyNTcsXG4gICAgICAgICAgICBcIm1kNVwiOiBcImRmNDM1OWNkY2I5NTZmNTJmMmU1YjRlZjc3N2JiYjdkXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJzZWFyY2hQYXRoc1wiOiBbXVxufSk7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIG1hbmlmZXN0VXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Bc3NldCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvY2Vzc0xvYWQ6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICBsYkxvYWRpbmc6IGNjLkxhYmVsLFxuICAgICAgICBsYlVwZGF0ZTogY2MuTGFiZWwsXG4gICAgICAgIF91cGRhdGluZzogZmFsc2UsXG4gICAgICAgIF9jYW5SZXRyeTogZmFsc2UsXG4gICAgICAgIF9zdG9yYWdlUGF0aDogJycsXG4gICAgICAgIF9hZGRFdmVudEZpbmlzaDogbnVsbCxcbiAgICB9LFxuXG4gICAgY2hlY2tDYjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb2RlIDEyMzogJyArIGV2ZW50LmdldEV2ZW50Q29kZSgpKTtcbiAgICAgICAgc3dpdGNoIChldmVudC5nZXRFdmVudENvZGUoKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX05PX0xPQ0FMX01BTklGRVNUOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm8gbG9jYWwgbWFuaWZlc3QgZmlsZSBmb3VuZCwgaG90IHVwZGF0ZSBza2lwcGVkLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ET1dOTE9BRF9NQU5JRkVTVDpcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9QQVJTRV9NQU5JRkVTVDpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggXCJGYWlsIHRvIGRvd25sb2FkIG1hbmlmZXN0IGZpbGUsIGhvdCB1cGRhdGUgc2tpcHBlZC5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuQUxSRUFEWV9VUF9UT19EQVRFOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCBcIkFscmVhZHkgdXAgdG8gZGF0ZSB3aXRoIHRoZSBsYXRlc3QgcmVtb3RlIHZlcnNpb24uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLk5FV19WRVJTSU9OX0ZPVU5EOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCAnTmV3IHZlcnNpb24gZm91bmQsIHBsZWFzZSB0cnkgdG8gdXBkYXRlLiAoJyArIHRoaXMuX2FtLmdldFRvdGFsQnl0ZXMoKSArICcpJyk7XG4gICAgICAgICAgICAgICAgLy8gcHJvY2VzcyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTG9hZC5wcm9ncmVzcyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5sYkxvYWRpbmcuc3RyaW5nID0gXCLEkGFuZyBj4bqtcCBuaOG6rXQgdMOgaSBuZ3V5w6puIVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICB0aGlzLl9jaGVja0xpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlQ2I6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbmVlZFJlc3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZhaWxlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfTk9fTE9DQUxfTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ05vIGxvY2FsIG1hbmlmZXN0IGZpbGUgZm91bmQsIGhvdCB1cGRhdGUgc2tpcHBlZC4nKTtcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLlVQREFURV9QUk9HUkVTU0lPTjpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5nZXRQZXJjZW50KCkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmdldFBlcmNlbnRCeUZpbGUoKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIGV2ZW50LmdldERvd25sb2FkZWRGaWxlcygpICsgJyAvICcgKyBldmVudC5nZXRUb3RhbEZpbGVzKCkpXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIGV2ZW50LmdldERvd25sb2FkZWRCeXRlcygpICsgJyAvICcgKyBldmVudC5nZXRUb3RhbEJ5dGVzKCkpXG4gICAgICAgICAgICAgICAgLy8gdmFyIG1zZyA9IGV2ZW50LmdldE1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICBsZXQgcGVyY2VudCA9IHBhcnNlRmxvYXQoIGV2ZW50LmdldFBlcmNlbnQoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTihwZXJjZW50KSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0xvYWQucHJvZ3Jlc3MgPSBwZXJjZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiTG9hZGluZy5zdHJpbmcgICAgID0gIE1hdGguZmxvb3IocGVyY2VudCAqIDEwMCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfRE9XTkxPQURfTUFOSUZFU1Q6XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfUEFSU0VfTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZhaWwgdG8gZG93bmxvYWQgbWFuaWZlc3QgZmlsZSwgaG90IHVwZGF0ZSBza2lwcGVkLicpO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuQUxSRUFEWV9VUF9UT19EQVRFOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBbHJlYWR5IHVwIHRvIGRhdGUgd2l0aCB0aGUgbGF0ZXN0IHJlbW90ZSB2ZXJzaW9uLicpO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZJTklTSEVEOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdVcGRhdGUgZmluaXNoZWQuICcgKyBldmVudC5nZXRNZXNzYWdlKCkpO1xuICAgICAgICAgICAgICAgIG5lZWRSZXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfRkFJTEVEOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCAnVXBkYXRlIGZhaWxlZC4gJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5SZXRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfVVBEQVRJTkc6XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coICAnQXNzZXQgdXBkYXRlIGVycm9yOiAnICsgZXZlbnQuZ2V0QXNzZXRJZCgpICsgJywgJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfREVDT01QUkVTUzpcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5nZXRNZXNzYWdlKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFpbGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hZGRFdmVudEZpbmlzaClcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRFdmVudEZpbmlzaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5lZWRSZXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgLy8gUHJlcGVuZCB0aGUgbWFuaWZlc3QncyBzZWFyY2ggcGF0aFxuICAgICAgICAgICAgdmFyIHNlYXJjaFBhdGhzID0ganNiLmZpbGVVdGlscy5nZXRTZWFyY2hQYXRocygpO1xuICAgICAgICAgICAgdmFyIG5ld1BhdGhzID0gdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpLmdldFNlYXJjaFBhdGhzKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShuZXdQYXRocykpO1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoc2VhcmNoUGF0aHMsIG5ld1BhdGhzKTtcbiAgICAgICAgICAgIC8vIFRoaXMgdmFsdWUgd2lsbCBiZSByZXRyaWV2ZWQgYW5kIGFwcGVuZGVkIHRvIHRoZSBkZWZhdWx0IHNlYXJjaCBwYXRoIGR1cmluZyBnYW1lIHN0YXJ0dXAsXG4gICAgICAgICAgICAvLyBwbGVhc2UgcmVmZXIgdG8gc2FtcGxlcy9qcy10ZXN0cy9tYWluLmpzIGZvciBkZXRhaWxlZCB1c2FnZS5cbiAgICAgICAgICAgIC8vICEhISBSZS1hZGQgdGhlIHNlYXJjaCBwYXRocyBpbiBtYWluLmpzIGlzIHZlcnkgaW1wb3J0YW50LCBvdGhlcndpc2UsIG5ldyBzY3JpcHRzIHdvbid0IHRha2UgZWZmZWN0LlxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIb3RVcGRhdGVTZWFyY2hQYXRocycsIEpTT04uc3RyaW5naWZ5KHNlYXJjaFBhdGhzKSk7XG4gICAgICAgICAgICBqc2IuZmlsZVV0aWxzLnNldFNlYXJjaFBhdGhzKHNlYXJjaFBhdGhzKTtcblxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICAgICAgY2MuZ2FtZS5yZXN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZEN1c3RvbU1hbmlmZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9hbS5nZXRTdGF0ZSgpID09PSBqc2IuQXNzZXRzTWFuYWdlci5TdGF0ZS5VTklOSVRFRCkge1xuICAgICAgICAgICAgdmFyIG1hbmlmZXN0ID0gbmV3IGpzYi5NYW5pZmVzdChjdXN0b21NYW5pZmVzdFN0ciwgdGhpcy5fc3RvcmFnZVBhdGgpO1xuICAgICAgICAgICAgdGhpcy5fYW0ubG9hZExvY2FsTWFuaWZlc3QobWFuaWZlc3QsIHRoaXMuX3N0b3JhZ2VQYXRoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCAnVXNpbmcgY3VzdG9tIG1hbmlmZXN0Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmV0cnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl91cGRhdGluZyAmJiB0aGlzLl9jYW5SZXRyeSkge1xuICAgICAgICAgICAgdGhpcy5fY2FuUmV0cnkgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCAnUmV0cnkgZmFpbGVkIEFzc2V0cy4uLicpO1xuICAgICAgICAgICAgdGhpcy5fYW0uZG93bmxvYWRGYWlsZWRBc3NldHMoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjaGVja1VwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fdXBkYXRpbmcpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDaGVja2luZyBvciB1cGRhdGluZyAuLi4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgbWQ1IHVybFxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMubWFuaWZlc3RVcmwubmF0aXZlVXJsO1xuICAgICAgICAgICAgaWYgKGNjLmxvYWRlci5tZDVQaXBlKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gY2MubG9hZGVyLm1kNVBpcGUudHJhbnNmb3JtVVJMKHVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpIHx8ICF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuaXNMb2FkZWQoKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb2FkIGxvY2FsIG1hbmlmZXN0IC4uLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sodGhpcy5jaGVja0NiLmJpbmQodGhpcykpO1xuXG4gICAgICAgIHRoaXMuX2FtLmNoZWNrVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0aW5nID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgaG90VXBkYXRlOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdGhpcy5sYlVwZGF0ZS5zdHJpbmcgPSBcIkPhuq1wIG5o4bqtdCBwaGnDqm4gYuG6o24gbeG7m2khXCI7XG4gICAgICAgIGxldCBpc09rZSA9IHRoaXMuX2FtICYmICF0aGlzLl91cGRhdGluZztcbiAgICAgICAgaWYgKHRoaXMuX2FtICYmICF0aGlzLl91cGRhdGluZykge1xuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLnVwZGF0ZUNiLmJpbmQodGhpcykpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fYW0uZ2V0U3RhdGUoKSA9PT0ganNiLkFzc2V0c01hbmFnZXIuU3RhdGUuVU5JTklURUQpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIG1kNSB1cmxcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdGhpcy5tYW5pZmVzdFVybC5uYXRpdmVVcmw7XG4gICAgICAgICAgICAgICAgaWYgKGNjLmxvYWRlci5tZDVQaXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGNjLmxvYWRlci5tZDVQaXBlLnRyYW5zZm9ybVVSTCh1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdCh1cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9mYWlsQ291bnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5fYW0udXBkYXRlKCk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWRkRXZlbnRGaW5pc2ggPSBjYjtcbiAgICB9LFxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBIb3QgdXBkYXRlIGlzIG9ubHkgYXZhaWxhYmxlIGluIE5hdGl2ZSBidWlsZFxuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3N0b3JhZ2VQYXRoID0gKChqc2IuZmlsZVV0aWxzID8ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSA6ICcvJykgKyAnYmxhY2tqYWNrLXJlbW90ZS1hc3NldCcpO1xuICAgICAgICAvLyBjYy5sb2coJ1N0b3JhZ2UgcGF0aCBmb3IgcmVtb3RlIGFzc2V0IDogJyArIHRoaXMuX3N0b3JhZ2VQYXRoKTtcblxuICAgICAgICAvLyBTZXR1cCB5b3VyIG93biB2ZXJzaW9uIGNvbXBhcmUgaGFuZGxlciwgdmVyc2lvbkEgYW5kIEIgaXMgdmVyc2lvbnMgaW4gc3RyaW5nXG4gICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgZ3JlYXRlciB0aGFuIDAsIHZlcnNpb25BIGlzIGdyZWF0ZXIgdGhhbiBCLFxuICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIGVxdWFscyAwLCB2ZXJzaW9uQSBlcXVhbHMgdG8gQixcbiAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBzbWFsbGVyIHRoYW4gMCwgdmVyc2lvbkEgaXMgc21hbGxlciB0aGFuIEIuXG4gICAgICAgIHRoaXMudmVyc2lvbkNvbXBhcmVIYW5kbGUgPSBmdW5jdGlvbiAodmVyc2lvbkEsIHZlcnNpb25CKSB7XG4gICAgICAgICAgICAvLyBjYy5sb2coXCJKUyBDdXN0b20gVmVyc2lvbiBDb21wYXJlOiB2ZXJzaW9uIEEgaXMgXCIgKyB2ZXJzaW9uQSArICcsIHZlcnNpb24gQiBpcyAnICsgdmVyc2lvbkIpO1xuICAgICAgICAgICAgdmFyIHZBID0gdmVyc2lvbkEuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIHZhciB2QiA9IHZlcnNpb25CLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZBLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBwYXJzZUludCh2QVtpXSk7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSBwYXJzZUludCh2QltpXSB8fCAwKTtcbiAgICAgICAgICAgICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodkIubGVuZ3RoID4gdkEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSW5pdCB3aXRoIGVtcHR5IG1hbmlmZXN0IHVybCBmb3IgdGVzdGluZyBjdXN0b20gbWFuaWZlc3RcbiAgICAgICAgdGhpcy5fYW0gPSBuZXcganNiLkFzc2V0c01hbmFnZXIoJycsIHRoaXMuX3N0b3JhZ2VQYXRoLCB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlKTtcbiAgICAgICAgLy8gU2V0dXAgdGhlIHZlcmlmaWNhdGlvbiBjYWxsYmFjaywgYnV0IHdlIGRvbid0IGhhdmUgbWQ1IGNoZWNrIGZ1bmN0aW9uIHlldCwgc28gb25seSBwcmludCBzb21lIG1lc3NhZ2VcbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgdGhlIHZlcmlmaWNhdGlvbiBwYXNzZWQsIG90aGVyd2lzZSByZXR1cm4gZmFsc2VcbiAgICAgICAgdGhpcy5fYW0uc2V0VmVyaWZ5Q2FsbGJhY2soZnVuY3Rpb24gKHBhdGgsIGFzc2V0KSB7XG4gICAgICAgICAgICAvLyBXaGVuIGFzc2V0IGlzIGNvbXByZXNzZWQsIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgaXRzIG1kNSwgYmVjYXVzZSB6aXAgZmlsZSBoYXZlIGJlZW4gZGVsZXRlZC5cbiAgICAgICAgICAgIHZhciBjb21wcmVzc2VkID0gYXNzZXQuY29tcHJlc3NlZDtcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBjb3JyZWN0IG1kNSB2YWx1ZS5cbiAgICAgICAgICAgIHZhciBleHBlY3RlZE1ENSA9IGFzc2V0Lm1kNTtcbiAgICAgICAgICAgIC8vIGFzc2V0LnBhdGggaXMgcmVsYXRpdmUgcGF0aCBhbmQgcGF0aCBpcyBhYnNvbHV0ZS5cbiAgICAgICAgICAgIHZhciByZWxhdGl2ZVBhdGggPSBhc3NldC5wYXRoO1xuICAgICAgICAgICAgLy8gVGhlIHNpemUgb2YgYXNzZXQgZmlsZSwgYnV0IHRoaXMgdmFsdWUgY291bGQgYmUgYWJzZW50LlxuICAgICAgICAgICAgdmFyIHNpemUgPSBhc3NldC5zaXplO1xuICAgICAgICAgICAgaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZlcmlmaWNhdGlvbiBwYXNzZWQgOiBcIiArIHJlbGF0aXZlUGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZlcmlmaWNhdGlvbiBwYXNzZWQgOiBcIiArIHJlbGF0aXZlUGF0aCArICcgKCcgKyBleHBlY3RlZE1ENSArICcpJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSG90IHVwZGF0ZSBpcyByZWFkeSwgcGxlYXNlIGNoZWNrIG9yIGRpcmVjdGx5IHVwZGF0ZS4nKTtcbiAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIC8vIFNvbWUgQW5kcm9pZCBkZXZpY2UgbWF5IHNsb3cgZG93biB0aGUgZG93bmxvYWQgcHJvY2VzcyB3aGVuIGNvbmN1cnJlbnQgdGFza3MgaXMgdG9vIG11Y2guXG4gICAgICAgICAgICAvLyBUaGUgdmFsdWUgbWF5IG5vdCBiZSBhY2N1cmF0ZSwgcGxlYXNlIGRvIG1vcmUgdGVzdCBhbmQgZmluZCB3aGF0J3MgbW9zdCBzdWl0YWJsZSBmb3IgeW91ciBnYW1lLlxuICAgICAgICAgICAgdGhpcy5fYW0uc2V0TWF4Q29uY3VycmVudFRhc2soMik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25EZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19