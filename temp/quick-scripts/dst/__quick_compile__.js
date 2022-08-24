
(function () {
var scripts = [{"deps":{"./assets/scripts/CasinoEvent":3,"./assets/scripts/CasinoRequest":26,"./assets/scripts/Config":29,"./assets/scripts/GameVariables":30,"./assets/scripts/Helper":27,"./assets/scripts/MiniGame":32,"./assets/scripts/Move":28,"./assets/scripts/SmartFoxAudio":34,"./assets/scripts/AnimationEvent":31,"./assets/scripts/abase/BaseGame":1,"./assets/scripts/abase/BaseItemCustom":37,"./assets/scripts/abase/Card":33,"./assets/scripts/abase/ChatEmojiLayer":57,"./assets/scripts/abase/ChatLayer":35,"./assets/scripts/abase/HttpHandler":49,"./assets/scripts/abase/ItemChat":72,"./assets/scripts/abase/Listview":66,"./assets/scripts/abase/Loading":39,"./assets/scripts/abase/MM":48,"./assets/scripts/abase/Player":41,"./assets/scripts/abase/Toast":36,"./assets/scripts/abase/UIManager":38,"./assets/scripts/abase/Utils":90,"./assets/scripts/abase/BaseController":40,"./assets/scripts/baccarat/BaccaratCauItem":4,"./assets/scripts/baccarat/BaccaratController":45,"./assets/scripts/baccarat/BaccaratEvent":46,"./assets/scripts/baccarat/BaccaratListCauItem":107,"./assets/scripts/baccarat/BaccaratRankItem":44,"./assets/scripts/baccarat/BaccaratRequest":42,"./assets/scripts/baccarat/BaccaratSoiCauItem":43,"./assets/scripts/baccarat/BaccaratTransactionItem":47,"./assets/scripts/baccarat/ItemCard":64,"./assets/scripts/baccarat/TimeSub":50,"./assets/scripts/baccarat/UIBaccarat":51,"./assets/scripts/baccarat/UIBaccaratHelper":67,"./assets/scripts/baccarat/UIBaccaratRank":53,"./assets/scripts/baccarat/UIBaccaratSoiCau":52,"./assets/scripts/baccarat/UIBaccaratTransaction":65,"./assets/scripts/baccarat/BaccaratCard":54,"./assets/scripts/candy/CandyEvent":5,"./assets/scripts/candy/CandyItem":61,"./assets/scripts/candy/CandyLine":62,"./assets/scripts/candy/CandyMainLine":55,"./assets/scripts/candy/CandyRankItem":59,"./assets/scripts/candy/CandyReel":58,"./assets/scripts/candy/CandyRequest":56,"./assets/scripts/candy/CandyTransactionItem":63,"./assets/scripts/candy/CandyWinGame":60,"./assets/scripts/candy/UICandy":69,"./assets/scripts/candy/UICandyHelper":112,"./assets/scripts/candy/UICandyRank":68,"./assets/scripts/candy/UICandyTransaction":70,"./assets/scripts/candy/UICandyTransactionDetail":71,"./assets/scripts/candy/CandyController":74,"./assets/scripts/components/ItemGame":6,"./assets/scripts/components/ItemRoom":77,"./assets/scripts/components/JackPotIcon":85,"./assets/scripts/components/SystemMessage":73,"./assets/scripts/components/HuLobby":81,"./assets/scripts/enum/CasinoEnum":8,"./assets/scripts/kimcuong/KimCuongEvent":7,"./assets/scripts/kimcuong/KimCuongItem":75,"./assets/scripts/kimcuong/KimCuongItemBonus":76,"./assets/scripts/kimcuong/KimCuongLine":78,"./assets/scripts/kimcuong/KimCuongMainLine":125,"./assets/scripts/kimcuong/KimCuongRankItem":79,"./assets/scripts/kimcuong/KimCuongReel":80,"./assets/scripts/kimcuong/KimCuongRequest":83,"./assets/scripts/kimcuong/KimCuongTransactionItem":82,"./assets/scripts/kimcuong/KimCuongWinGame":84,"./assets/scripts/kimcuong/TrialResult":86,"./assets/scripts/kimcuong/UIKimCuong":88,"./assets/scripts/kimcuong/UIKimCuongBonusGame":87,"./assets/scripts/kimcuong/UIKimCuongHistoryDetail":89,"./assets/scripts/kimcuong/UIKimCuongHistoryTransaction":91,"./assets/scripts/kimcuong/UIKimCuongLobby":96,"./assets/scripts/kimcuong/UIKimCuongRank":113,"./assets/scripts/kimcuong/KimCuongController":141,"./assets/scripts/language/baccaratLanguage":9,"./assets/scripts/language/candyLanguage":99,"./assets/scripts/language/kimcuongLanguage":104,"./assets/scripts/language/locthuLanguage":92,"./assets/scripts/language/maubinhLanguage":94,"./assets/scripts/language/minipokerLanguage":93,"./assets/scripts/language/pokerLanguage":95,"./assets/scripts/language/portalLanguage":100,"./assets/scripts/language/ronghoLanguage":98,"./assets/scripts/language/sieuxeLanguage":97,"./assets/scripts/language/sinbadLanguage":102,"./assets/scripts/language/taixiuLanguage":103,"./assets/scripts/language/thiendiaLanguage":101,"./assets/scripts/language/tlmnLanguage":105,"./assets/scripts/language/vampireLanguage":106,"./assets/scripts/language/xocdiaLanguage":108,"./assets/scripts/language/zeusLanguage":111,"./assets/scripts/language/bacayLanguage":110,"./assets/scripts/minipoker/MiniPokerEvent":10,"./assets/scripts/minipoker/MiniPokerItem":109,"./assets/scripts/minipoker/MiniPokerLine":114,"./assets/scripts/minipoker/MiniPokerMainLine":138,"./assets/scripts/minipoker/MiniPokerRankItem":150,"./assets/scripts/minipoker/MiniPokerReel":116,"./assets/scripts/minipoker/MiniPokerRequest":119,"./assets/scripts/minipoker/MiniPokerTransactionItem":117,"./assets/scripts/minipoker/MiniPokerWinGame":118,"./assets/scripts/minipoker/UIMiniPoker":122,"./assets/scripts/minipoker/UIMiniPokerHelper":115,"./assets/scripts/minipoker/UIMiniPokerRank":121,"./assets/scripts/minipoker/UIMiniPokerTransaction":120,"./assets/scripts/minipoker/MiniPokerController":123,"./assets/scripts/poker/CommunityCards":11,"./assets/scripts/poker/PlayerPoker":131,"./assets/scripts/poker/PokerCard":128,"./assets/scripts/poker/PokerController":135,"./assets/scripts/poker/PokerEvent":130,"./assets/scripts/poker/PokerRankItem":147,"./assets/scripts/poker/PokerRequest":124,"./assets/scripts/poker/Timer":126,"./assets/scripts/poker/UIPoker":273,"./assets/scripts/poker/UIPokerRank":127,"./assets/scripts/poker/Actions":129,"./assets/scripts/portal/DaiLyCK":12,"./assets/scripts/portal/DaiLyCKItem":132,"./assets/scripts/portal/DaiLyItem":182,"./assets/scripts/portal/PortalController":134,"./assets/scripts/portal/PortalManager":133,"./assets/scripts/portal/PortalMenu":137,"./assets/scripts/portal/UIBankLog":136,"./assets/scripts/portal/UIBaoMatOTP":154,"./assets/scripts/portal/UIChangePassword":140,"./assets/scripts/portal/UIDaiLy":139,"./assets/scripts/portal/UIGiftCode":143,"./assets/scripts/portal/UIMenu":142,"./assets/scripts/portal/UIPayment":144,"./assets/scripts/portal/UIPortal":145,"./assets/scripts/portal/UIProfile":148,"./assets/scripts/portal/UITransferMoney":170,"./assets/scripts/portal/BankLogItem":146,"./assets/scripts/rongho/RongHoEvent":151,"./assets/scripts/rongho/RongHoItemRank":193,"./assets/scripts/rongho/RongHoItemTransaction":13,"./assets/scripts/rongho/RongHoRequest":184,"./assets/scripts/rongho/UIRongHo":149,"./assets/scripts/rongho/UIRongHoHelper":185,"./assets/scripts/rongho/UIRongHoRank":275,"./assets/scripts/rongho/UIRongHoTransaction":152,"./assets/scripts/rongho/RongHoController":153,"./assets/scripts/roulette/ItemRouletteRank":14,"./assets/scripts/roulette/ItemRouletteTransaction":158,"./assets/scripts/roulette/RouletteController":155,"./assets/scripts/roulette/RouletteEvent":160,"./assets/scripts/roulette/RouletteListCauItem":156,"./assets/scripts/roulette/RouletteRequest":157,"./assets/scripts/roulette/RouletteSoiCauItem":159,"./assets/scripts/roulette/TimeSubRoulette":161,"./assets/scripts/roulette/UIRoulette":164,"./assets/scripts/roulette/UIRouletteRank":162,"./assets/scripts/roulette/UIRouletteTransaction":163,"./assets/scripts/roulette/Ball":166,"./assets/scripts/sieuxe/SieuXeEvent":15,"./assets/scripts/sieuxe/SieuXeItem":165,"./assets/scripts/sieuxe/SieuXeLine":167,"./assets/scripts/sieuxe/SieuXeMainLine":180,"./assets/scripts/sieuxe/SieuXeRankItem":173,"./assets/scripts/sieuxe/SieuXeReel":168,"./assets/scripts/sieuxe/SieuXeRequest":174,"./assets/scripts/sieuxe/SieuXeTransactionItem":169,"./assets/scripts/sieuxe/SieuXeWinGame":171,"./assets/scripts/sieuxe/UISieuXe":172,"./assets/scripts/sieuxe/UISieuXeHelper":177,"./assets/scripts/sieuxe/UISieuXeRank":175,"./assets/scripts/sieuxe/UISieuXeTransaction":176,"./assets/scripts/sieuxe/UISieuXeTransactionDetail":178,"./assets/scripts/sieuxe/SieuXeController":179,"./assets/scripts/sinbad/SinbadEvent":189,"./assets/scripts/sinbad/SinbadItem":16,"./assets/scripts/sinbad/SinbadItemBonus":181,"./assets/scripts/sinbad/SinbadLine":183,"./assets/scripts/sinbad/SinbadMainLine":186,"./assets/scripts/sinbad/SinbadRankItem":188,"./assets/scripts/sinbad/SinbadReel":187,"./assets/scripts/sinbad/SinbadRequest":190,"./assets/scripts/sinbad/SinbadTransactionItem":227,"./assets/scripts/sinbad/SinbadWinGame":191,"./assets/scripts/sinbad/UISinbad":196,"./assets/scripts/sinbad/UISinbadBonus":192,"./assets/scripts/sinbad/UISinbadHistoryDetail":194,"./assets/scripts/sinbad/UISinbadHistoryTransaction":195,"./assets/scripts/sinbad/UISinbadLobby":197,"./assets/scripts/sinbad/UISinbadRank":198,"./assets/scripts/sinbad/SinbadController":199,"./assets/scripts/taixiu/TaiXiuController":246,"./assets/scripts/taixiu/TaiXiuDuaTop":17,"./assets/scripts/taixiu/TaiXiuEvent":201,"./assets/scripts/taixiu/TaiXiuRankItem":247,"./assets/scripts/taixiu/TaiXiuRequest":202,"./assets/scripts/taixiu/TaiXiuTransactionItem":200,"./assets/scripts/taixiu/UITaiXiu":206,"./assets/scripts/taixiu/UITaiXiuDuaTop":205,"./assets/scripts/taixiu/UITaiXiuHelper":203,"./assets/scripts/taixiu/UITaiXiuRank":204,"./assets/scripts/taixiu/UITaiXiuSessionDetail":207,"./assets/scripts/taixiu/UITaiXiuSoiCau":210,"./assets/scripts/taixiu/UITaiXiuTanLoc":208,"./assets/scripts/taixiu/UITaiXiuTransaction":209,"./assets/scripts/taixiu/TXSessionDetail":211,"./assets/scripts/ui/UIDialogOne":20,"./assets/scripts/ui/UIDialogTwo":212,"./assets/scripts/ui/UIHome":213,"./assets/scripts/ui/UILobby":214,"./assets/scripts/ui/UILogin":215,"./assets/scripts/ui/UIRegister":216,"./assets/scripts/ui/UISplash":217,"./assets/scripts/ui/UIDialogBuyIn":218,"./assets/scripts/vampire/UIVampireBonus":222,"./assets/scripts/vampire/UIVampireHistoryDetail":18,"./assets/scripts/vampire/UIVampireHistoryTransaction":219,"./assets/scripts/vampire/UIVampireLobby":221,"./assets/scripts/vampire/UIVampireRank":224,"./assets/scripts/vampire/VampireController":220,"./assets/scripts/vampire/VampireEvent":223,"./assets/scripts/vampire/VampireItem":274,"./assets/scripts/vampire/VampireItemBonus":225,"./assets/scripts/vampire/VampireItemLine":226,"./assets/scripts/vampire/VampireLine":229,"./assets/scripts/vampire/VampireMainLine":228,"./assets/scripts/vampire/VampireRankItem":230,"./assets/scripts/vampire/VampireReel":233,"./assets/scripts/vampire/VampireRequest":231,"./assets/scripts/vampire/VampireTransactionItem":232,"./assets/scripts/vampire/VampireWinGame":235,"./assets/scripts/vampire/UIVampire":245,"./assets/scripts/xocdia/UIXocDiaHelper":19,"./assets/scripts/xocdia/UIXocDiaRank":234,"./assets/scripts/xocdia/UIXocDiaSoiCau":237,"./assets/scripts/xocdia/UIXocDiaTransaction":236,"./assets/scripts/xocdia/XocDiaController":239,"./assets/scripts/xocdia/XocDiaEvent":240,"./assets/scripts/xocdia/XocDiaItemRank":238,"./assets/scripts/xocdia/XocDiaItemTransaction":242,"./assets/scripts/xocdia/XocDiaListCauItem":241,"./assets/scripts/xocdia/XocDiaRequest":244,"./assets/scripts/xocdia/XocDiaSoiCauItem":243,"./assets/scripts/xocdia/UIXocDia":251,"./assets/scripts/zeus/UIZeusBonus":21,"./assets/scripts/zeus/UIZeusHelper":248,"./assets/scripts/zeus/UIZeusHistoryDetail":249,"./assets/scripts/zeus/UIZeusHistoryTransaction":250,"./assets/scripts/zeus/UIZeusLobby":256,"./assets/scripts/zeus/UIZeusRank":252,"./assets/scripts/zeus/ZeusController":253,"./assets/scripts/zeus/ZeusEvent":255,"./assets/scripts/zeus/ZeusItem":254,"./assets/scripts/zeus/ZeusItemBonus":264,"./assets/scripts/zeus/ZeusLine":257,"./assets/scripts/zeus/ZeusMainLine":258,"./assets/scripts/zeus/ZeusRankItem":259,"./assets/scripts/zeus/ZeusReel":260,"./assets/scripts/zeus/ZeusRequest":261,"./assets/scripts/zeus/ZeusTransactionItem":262,"./assets/scripts/zeus/ZeusTrialResult":263,"./assets/scripts/zeus/ZeusWinGame":265,"./assets/scripts/zeus/UIZeus":266,"./assets/_smartfox/gui/VozBaseComponent":268,"./assets/_smartfox/gui/md5":22,"./assets/_smartfox/gui/TwoScrollView":267,"./assets/_smartfox/gui/action/ActionRotateJerk":276,"./assets/_smartfox/gui/action/ActionScale":278,"./assets/_smartfox/gui/action/ButtonScaler":277,"./assets/_smartfox/gui/action/NodeEaseElasticInOut":270,"./assets/_smartfox/gui/action/ActionRotate":2,"./assets/_smartfox/gui/multiResolution/ScaleBackground":271,"./assets/_smartfox/gui/multiResolution/ScaleContent":272,"./assets/_smartfox/gui/multiResolution/MultiResolutionCompat":23,"./assets/_smartfox/hotupdate/HoiXoayServer":25,"./assets/_smartfox/gui/UtilsUI":269,"./assets/migration/use_v2.1-2.2.1_cc.Toggle_event":24},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseGame.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionRotate.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CasinoEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/ItemGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/enum/CasinoEnum.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/baccaratLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerEvent.js"},{"deps":{"PokerCard":128},"path":"preview-scripts/assets/scripts/poker/CommunityCards.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/portal/DaiLyCK.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoItemTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/ItemRouletteRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuDuaTop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/UIVampireHistoryDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogOne.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/zeus/UIZeusBonus.js"},{"deps":{"../../../../../../../../../../../Applications/CocosCreator/Creator/2.4.9/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js":279},"path":"preview-scripts/assets/_smartfox/gui/md5.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/MultiResolutionCompat.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/hotupdate/HoiXoayServer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CasinoRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Helper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Move.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Config.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameVariables.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AnimationEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MiniGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Card.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SmartFoxAudio.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/abase/ChatLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Toast.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseItemCustom.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Loading.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratSoiCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratRankItem.js"},{"deps":{"BaccaratEvent":46},"path":"preview-scripts/assets/scripts/baccarat/BaccaratController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratEvent.js"},{"deps":{"BaccaratCard":54},"path":"preview-scripts/assets/scripts/baccarat/BaccaratTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/MM.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/HttpHandler.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/TimeSub.js"},{"deps":{"BaccaratCard":54},"path":"preview-scripts/assets/scripts/baccarat/UIBaccarat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratSoiCau.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/ChatEmojiLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyRankItem.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/candy/CandyWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyItem.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/candy/CandyLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/ItemCard.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Listview.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratHelper.js"},{"deps":{"Listview":66,"Helper":27},"path":"preview-scripts/assets/scripts/candy/UICandyRank.js"},{"deps":{"CandyWinGame":60,"Helper":27,"CandyReel":58,"CandyLine":62,"UtilsUI":269,"candyLanguage":99},"path":"preview-scripts/assets/scripts/candy/UICandy.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/candy/UICandyTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/UICandyTransactionDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/ItemChat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/SystemMessage.js"},{"deps":{"CandyEvent":5},"path":"preview-scripts/assets/scripts/candy/CandyController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/ItemRoom.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/HuLobby.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongRequest.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/JackPotIcon.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/TrialResult.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongBonusGame.js"},{"deps":{"KimCuongWinGame":84,"Helper":27,"KimCuongReel":80,"KimCuongLine":78,"UtilsUI":269,"TrialResult":86,"kimcuongLanguage":104},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuong.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Utils.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/locthuLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/minipokerLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/maubinhLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/pokerLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongLobby.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/sieuxeLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/ronghoLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/candyLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/portalLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/thiendiaLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/sinbadLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/taixiuLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/kimcuongLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/tlmnLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/vampireLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratListCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/xocdiaLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/bacayLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/zeusLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/UICandyHelper.js"},{"deps":{"Listview":66,"Helper":27},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongRank.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerReel.js"},{"deps":{"PokerCard":128},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerTransactionItem.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerRequest.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerTransaction.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerRank.js"},{"deps":{"MiniPokerWinGame":118,"Helper":27,"MiniPokerReel":116,"UtilsUI":269,"PokerCard":128,"sinbadLanguage":102},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPoker.js"},{"deps":{"MiniPokerEvent":10},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/Timer.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/poker/UIPokerRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/Actions.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerEvent.js"},{"deps":{"PokerCard":128},"path":"preview-scripts/assets/scripts/poker/PlayerPoker.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/DaiLyCKItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/PortalManager.js"},{"deps":{"UIManager":38},"path":"preview-scripts/assets/scripts/portal/PortalController.js"},{"deps":{"PokerEvent":130},"path":"preview-scripts/assets/scripts/poker/PokerController.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/portal/UIBankLog.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/PortalMenu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerMainLine.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/portal/UIDaiLy.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIChangePassword.js"},{"deps":{"KimCuongEvent":7},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIMenu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIGiftCode.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIPayment.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIPortal.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/BankLogItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIProfile.js"},{"deps":{"PokerCard":128},"path":"preview-scripts/assets/scripts/rongho/UIRongHo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoEvent.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/rongho/UIRongHoTransaction.js"},{"deps":{"RongHoEvent":151},"path":"preview-scripts/assets/scripts/rongho/RongHoController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIBaoMatOTP.js"},{"deps":{"RouletteEvent":160},"path":"preview-scripts/assets/scripts/roulette/RouletteController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteListCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/ItemRouletteTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteSoiCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/TimeSubRoulette.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/roulette/UIRouletteRank.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/roulette/UIRouletteTransaction.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/roulette/UIRoulette.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/Ball.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UITransferMoney.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeWinGame.js"},{"deps":{"SieuXeWinGame":171,"Helper":27,"SieuXeReel":168,"sieuxeLanguage":97},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXe.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeRequest.js"},{"deps":{"Listview":66,"Helper":27},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeRank.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeHelper.js"},{"deps":{"SieuXeReel":168},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeTransactionDetail.js"},{"deps":{"SieuXeEvent":15},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/DaiLyItem.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/sinbad/SinbadLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/UIRongHoHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadRequest.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/sinbad/SinbadWinGame.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/sinbad/UISinbadBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoItemRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/UISinbadHistoryDetail.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/sinbad/UISinbadHistoryTransaction.js"},{"deps":{"SinbadWinGame":191,"Helper":27,"SinbadReel":187,"SinbadLine":183,"UtilsUI":269,"TrialResult":86,"sinbadLanguage":102},"path":"preview-scripts/assets/scripts/sinbad/UISinbad.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/UISinbadLobby.js"},{"deps":{"Listview":66,"Helper":27},"path":"preview-scripts/assets/scripts/sinbad/UISinbadRank.js"},{"deps":{"SinbadEvent":189},"path":"preview-scripts/assets/scripts/sinbad/SinbadController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuHelper.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuRank.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuDuaTop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiu.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuSessionDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuTanLoc.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuTransaction.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuSoiCau.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TXSessionDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogTwo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIHome.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/ui/UILobby.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UILogin.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIRegister.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UISplash.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogBuyIn.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/vampire/UIVampireHistoryTransaction.js"},{"deps":{"VampireEvent":223},"path":"preview-scripts/assets/scripts/vampire/VampireController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/UIVampireLobby.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/vampire/UIVampireBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireEvent.js"},{"deps":{"Listview":66,"Helper":27},"path":"preview-scripts/assets/scripts/vampire/UIVampireRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItemLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireMainLine.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/vampire/VampireLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireReel.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaRank.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/vampire/VampireWinGame.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaTransaction.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaSoiCau.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaItemRank.js"},{"deps":{"XocDiaEvent":240},"path":"preview-scripts/assets/scripts/xocdia/XocDiaController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaListCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaItemTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaSoiCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaRequest.js"},{"deps":{"VampireWinGame":235,"Helper":27,"VampireReel":233,"VampireLine":229,"TrialResult":86,"vampireLanguage":106},"path":"preview-scripts/assets/scripts/vampire/UIVampire.js"},{"deps":{"TaiXiuEvent":201},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusHistoryDetail.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/zeus/UIZeusHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/UIXocDia.js"},{"deps":{"Listview":66,"Helper":27},"path":"preview-scripts/assets/scripts/zeus/UIZeusRank.js"},{"deps":{"ZeusEvent":255},"path":"preview-scripts/assets/scripts/zeus/ZeusController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusLobby.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/zeus/ZeusLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusTrialResult.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusItemBonus.js"},{"deps":{"Helper":27},"path":"preview-scripts/assets/scripts/zeus/ZeusWinGame.js"},{"deps":{"ZeusWinGame":265,"Helper":27,"ZeusReel":260,"ZeusLine":257,"ZeusTrialResult":263,"zeusLanguage":111},"path":"preview-scripts/assets/scripts/zeus/UIZeus.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/TwoScrollView.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/VozBaseComponent.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/UtilsUI.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/NodeEaseElasticInOut.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/ScaleBackground.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/ScaleContent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/UIPoker.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItem.js"},{"deps":{"Listview":66},"path":"preview-scripts/assets/scripts/rongho/UIRongHoRank.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionRotateJerk.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ButtonScaler.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionScale.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    