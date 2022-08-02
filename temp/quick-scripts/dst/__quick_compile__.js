
(function () {
var scripts = [{"deps":{"./assets/scripts/CasinoEvent":33,"./assets/scripts/CasinoRequest":35,"./assets/scripts/GameVariables":37,"./assets/scripts/Config":21,"./assets/scripts/MiniGame":32,"./assets/scripts/Helper":31,"./assets/scripts/Move":34,"./assets/scripts/SmartFoxAudio":36,"./assets/scripts/AnimationEvent":41,"./assets/scripts/abase/BaseController":277,"./assets/scripts/abase/ChatEmojiLayer":40,"./assets/scripts/abase/BaseItemCustom":49,"./assets/scripts/abase/Card":9,"./assets/scripts/abase/ChatLayer":39,"./assets/scripts/abase/HttpHandler":42,"./assets/scripts/abase/ItemChat":43,"./assets/scripts/abase/Listview":278,"./assets/scripts/abase/Loading":44,"./assets/scripts/abase/MM":47,"./assets/scripts/abase/Toast":45,"./assets/scripts/abase/Player":46,"./assets/scripts/abase/Utils":48,"./assets/scripts/abase/UIManager":50,"./assets/scripts/abase/BaseGame":38,"./assets/scripts/baccarat/BaccaratCauItem":66,"./assets/scripts/baccarat/BaccaratEvent":52,"./assets/scripts/baccarat/BaccaratController":56,"./assets/scripts/baccarat/BaccaratListCauItem":55,"./assets/scripts/baccarat/BaccaratRankItem":54,"./assets/scripts/baccarat/BaccaratRequest":58,"./assets/scripts/baccarat/BaccaratSoiCauItem":57,"./assets/scripts/baccarat/ItemCard":60,"./assets/scripts/baccarat/BaccaratTransactionItem":64,"./assets/scripts/baccarat/UIBaccarat":53,"./assets/scripts/baccarat/TimeSub":61,"./assets/scripts/baccarat/UIBaccaratHelper":62,"./assets/scripts/baccarat/UIBaccaratSoiCau":1,"./assets/scripts/baccarat/UIBaccaratTransaction":59,"./assets/scripts/baccarat/UIBaccaratRank":68,"./assets/scripts/baccarat/BaccaratCard":51,"./assets/scripts/candy/CandyEvent":82,"./assets/scripts/candy/CandyLine":63,"./assets/scripts/candy/CandyController":65,"./assets/scripts/candy/CandyMainLine":69,"./assets/scripts/candy/CandyRankItem":70,"./assets/scripts/candy/CandyReel":71,"./assets/scripts/candy/CandyRequest":74,"./assets/scripts/candy/CandyWinGame":75,"./assets/scripts/candy/CandyTransactionItem":72,"./assets/scripts/candy/UICandy":2,"./assets/scripts/candy/UICandyHelper":77,"./assets/scripts/candy/UICandyTransaction":79,"./assets/scripts/candy/UICandyRank":78,"./assets/scripts/candy/UICandyTransactionDetail":83,"./assets/scripts/candy/CandyItem":67,"./assets/scripts/components/ItemRoom":80,"./assets/scripts/components/ItemGame":23,"./assets/scripts/components/JackPotIcon":76,"./assets/scripts/components/SystemMessage":73,"./assets/scripts/components/HuLobby":87,"./assets/scripts/kimcuong/KimCuongController":100,"./assets/scripts/kimcuong/KimCuongItemBonus":84,"./assets/scripts/kimcuong/KimCuongItem":81,"./assets/scripts/kimcuong/KimCuongLine":85,"./assets/scripts/kimcuong/KimCuongRankItem":90,"./assets/scripts/kimcuong/KimCuongMainLine":88,"./assets/scripts/kimcuong/KimCuongRequest":91,"./assets/scripts/kimcuong/KimCuongReel":89,"./assets/scripts/kimcuong/KimCuongTransactionItem":93,"./assets/scripts/kimcuong/TrialResult":94,"./assets/scripts/kimcuong/KimCuongWinGame":92,"./assets/scripts/kimcuong/UIKimCuongHistoryDetail":96,"./assets/scripts/kimcuong/UIKimCuong":10,"./assets/scripts/kimcuong/UIKimCuongBonusGame":95,"./assets/scripts/kimcuong/UIKimCuongHistoryTransaction":97,"./assets/scripts/kimcuong/UIKimCuongLobby":99,"./assets/scripts/kimcuong/UIKimCuongRank":101,"./assets/scripts/kimcuong/KimCuongEvent":86,"./assets/scripts/enum/CasinoEnum":22,"./assets/scripts/language/candyLanguage":24,"./assets/scripts/language/bacayLanguage":102,"./assets/scripts/language/locthuLanguage":98,"./assets/scripts/language/kimcuongLanguage":103,"./assets/scripts/language/maubinhLanguage":105,"./assets/scripts/language/minipokerLanguage":104,"./assets/scripts/language/pokerLanguage":108,"./assets/scripts/language/ronghoLanguage":107,"./assets/scripts/language/portalLanguage":106,"./assets/scripts/language/sinbadLanguage":109,"./assets/scripts/language/sieuxeLanguage":110,"./assets/scripts/language/taixiuLanguage":111,"./assets/scripts/language/thiendiaLanguage":112,"./assets/scripts/language/tlmnLanguage":115,"./assets/scripts/language/vampireLanguage":114,"./assets/scripts/language/xocdiaLanguage":113,"./assets/scripts/language/zeusLanguage":118,"./assets/scripts/language/baccaratLanguage":117,"./assets/scripts/minipoker/MiniPokerController":130,"./assets/scripts/minipoker/MiniPokerItem":120,"./assets/scripts/minipoker/MiniPokerMainLine":123,"./assets/scripts/minipoker/MiniPokerRankItem":124,"./assets/scripts/minipoker/MiniPokerLine":121,"./assets/scripts/minipoker/MiniPokerReel":119,"./assets/scripts/minipoker/MiniPokerRequest":125,"./assets/scripts/minipoker/MiniPokerWinGame":126,"./assets/scripts/minipoker/MiniPokerTransactionItem":128,"./assets/scripts/minipoker/UIMiniPoker":3,"./assets/scripts/minipoker/UIMiniPokerHelper":129,"./assets/scripts/minipoker/UIMiniPokerRank":127,"./assets/scripts/minipoker/UIMiniPokerTransaction":132,"./assets/scripts/minipoker/MiniPokerEvent":116,"./assets/scripts/poker/PlayerPoker":4,"./assets/scripts/poker/PokerCard":136,"./assets/scripts/poker/CommunityCards":122,"./assets/scripts/poker/PokerEvent":11,"./assets/scripts/poker/PokerRequest":134,"./assets/scripts/poker/PokerController":25,"./assets/scripts/poker/PokerRankItem":133,"./assets/scripts/poker/Timer":131,"./assets/scripts/poker/UIPokerRank":135,"./assets/scripts/poker/UIPoker":139,"./assets/scripts/poker/Actions":138,"./assets/scripts/portal/DaiLyCK":137,"./assets/scripts/portal/BankLogItem":26,"./assets/scripts/portal/DaiLyCKItem":152,"./assets/scripts/portal/PortalManager":143,"./assets/scripts/portal/PortalMenu":140,"./assets/scripts/portal/PortalController":141,"./assets/scripts/portal/UIBankLog":142,"./assets/scripts/portal/UIBaoMatOTP":145,"./assets/scripts/portal/UIChangePassword":148,"./assets/scripts/portal/UIDaiLy":146,"./assets/scripts/portal/UIMenu":147,"./assets/scripts/portal/UIGiftCode":153,"./assets/scripts/portal/UIPayment":149,"./assets/scripts/portal/UIPortal":151,"./assets/scripts/portal/UITransferMoney":156,"./assets/scripts/portal/UIProfile":150,"./assets/scripts/portal/DaiLyItem":144,"./assets/scripts/rongho/RongHoController":163,"./assets/scripts/rongho/RongHoItemRank":158,"./assets/scripts/rongho/RongHoItemTransaction":157,"./assets/scripts/rongho/RongHoRequest":154,"./assets/scripts/rongho/UIRongHo":5,"./assets/scripts/rongho/UIRongHoRank":162,"./assets/scripts/rongho/UIRongHoHelper":159,"./assets/scripts/rongho/UIRongHoTransaction":164,"./assets/scripts/rongho/RongHoEvent":155,"./assets/scripts/roulette/RouletteEvent":167,"./assets/scripts/roulette/ItemRouletteRank":173,"./assets/scripts/roulette/ItemRouletteTransaction":160,"./assets/scripts/roulette/RouletteController":166,"./assets/scripts/roulette/RouletteListCauItem":169,"./assets/scripts/roulette/RouletteSoiCauItem":170,"./assets/scripts/roulette/RouletteRequest":165,"./assets/scripts/roulette/TimeSubRoulette":168,"./assets/scripts/roulette/UIRouletteRank":172,"./assets/scripts/roulette/UIRoulette":12,"./assets/scripts/roulette/UIRouletteTransaction":175,"./assets/scripts/roulette/Ball":161,"./assets/scripts/sieuxe/SieuXeEvent":188,"./assets/scripts/sieuxe/SieuXeLine":182,"./assets/scripts/sieuxe/SieuXeItem":174,"./assets/scripts/sieuxe/SieuXeMainLine":176,"./assets/scripts/sieuxe/SieuXeReel":179,"./assets/scripts/sieuxe/SieuXeRankItem":178,"./assets/scripts/sieuxe/SieuXeTransactionItem":180,"./assets/scripts/sieuxe/SieuXeRequest":177,"./assets/scripts/sieuxe/SieuXeWinGame":185,"./assets/scripts/sieuxe/UISieuXe":6,"./assets/scripts/sieuxe/UISieuXeTransaction":186,"./assets/scripts/sieuxe/UISieuXeHelper":189,"./assets/scripts/sieuxe/UISieuXeRank":184,"./assets/scripts/sieuxe/UISieuXeTransactionDetail":187,"./assets/scripts/sieuxe/SieuXeController":171,"./assets/scripts/sinbad/SinbadEvent":191,"./assets/scripts/sinbad/SinbadItemBonus":192,"./assets/scripts/sinbad/SinbadItem":181,"./assets/scripts/sinbad/SinbadLine":183,"./assets/scripts/sinbad/SinbadMainLine":193,"./assets/scripts/sinbad/SinbadRankItem":190,"./assets/scripts/sinbad/SinbadTransactionItem":194,"./assets/scripts/sinbad/SinbadReel":196,"./assets/scripts/sinbad/SinbadRequest":197,"./assets/scripts/sinbad/SinbadWinGame":195,"./assets/scripts/sinbad/UISinbad":13,"./assets/scripts/sinbad/UISinbadBonus":198,"./assets/scripts/sinbad/UISinbadHistoryTransaction":199,"./assets/scripts/sinbad/UISinbadHistoryDetail":201,"./assets/scripts/sinbad/UISinbadRank":205,"./assets/scripts/sinbad/UISinbadLobby":202,"./assets/scripts/sinbad/SinbadController":203,"./assets/scripts/taixiu/TXSessionDetail":204,"./assets/scripts/taixiu/TaiXiuEvent":7,"./assets/scripts/taixiu/TaiXiuDuaTop":214,"./assets/scripts/taixiu/TaiXiuRankItem":206,"./assets/scripts/taixiu/TaiXiuRequest":208,"./assets/scripts/taixiu/UITaiXiu":200,"./assets/scripts/taixiu/TaiXiuTransactionItem":207,"./assets/scripts/taixiu/UITaiXiuDuaTop":210,"./assets/scripts/taixiu/UITaiXiuHelper":209,"./assets/scripts/taixiu/UITaiXiuRank":212,"./assets/scripts/taixiu/UITaiXiuSoiCau":15,"./assets/scripts/taixiu/UITaiXiuSessionDetail":211,"./assets/scripts/taixiu/UITaiXiuTanLoc":213,"./assets/scripts/taixiu/UITaiXiuTransaction":216,"./assets/scripts/taixiu/TaiXiuController":14,"./assets/scripts/ui/UIDialogOne":225,"./assets/scripts/ui/UIDialogTwo":215,"./assets/scripts/ui/UIHome":217,"./assets/scripts/ui/UILobby":218,"./assets/scripts/ui/UILogin":221,"./assets/scripts/ui/UIRegister":219,"./assets/scripts/ui/UISplash":223,"./assets/scripts/ui/UIDialogBuyIn":27,"./assets/scripts/vampire/UIVampireBonus":222,"./assets/scripts/vampire/UIVampireHistoryDetail":226,"./assets/scripts/vampire/UIVampireHistoryTransaction":220,"./assets/scripts/vampire/UIVampireRank":228,"./assets/scripts/vampire/UIVampireLobby":224,"./assets/scripts/vampire/VampireController":230,"./assets/scripts/vampire/VampireEvent":227,"./assets/scripts/vampire/VampireItemBonus":229,"./assets/scripts/vampire/VampireItemLine":234,"./assets/scripts/vampire/VampireItem":233,"./assets/scripts/vampire/VampireMainLine":235,"./assets/scripts/vampire/VampireLine":232,"./assets/scripts/vampire/VampireRankItem":231,"./assets/scripts/vampire/VampireReel":237,"./assets/scripts/vampire/VampireTransactionItem":238,"./assets/scripts/vampire/VampireRequest":236,"./assets/scripts/vampire/VampireWinGame":239,"./assets/scripts/vampire/UIVampire":16,"./assets/scripts/xocdia/UIXocDia":17,"./assets/scripts/xocdia/UIXocDiaRank":245,"./assets/scripts/xocdia/UIXocDiaTransaction":240,"./assets/scripts/xocdia/UIXocDiaSoiCau":241,"./assets/scripts/xocdia/XocDiaController":248,"./assets/scripts/xocdia/XocDiaEvent":243,"./assets/scripts/xocdia/XocDiaItemRank":242,"./assets/scripts/xocdia/XocDiaItemTransaction":244,"./assets/scripts/xocdia/XocDiaListCauItem":246,"./assets/scripts/xocdia/XocDiaRequest":247,"./assets/scripts/xocdia/XocDiaSoiCauItem":250,"./assets/scripts/xocdia/UIXocDiaHelper":249,"./assets/scripts/zeus/UIZeusBonus":255,"./assets/scripts/zeus/UIZeusHelper":251,"./assets/scripts/zeus/UIZeusHistoryDetail":252,"./assets/scripts/zeus/UIZeusLobby":254,"./assets/scripts/zeus/UIZeusHistoryTransaction":253,"./assets/scripts/zeus/UIZeusRank":256,"./assets/scripts/zeus/ZeusController":258,"./assets/scripts/zeus/ZeusEvent":261,"./assets/scripts/zeus/ZeusItem":257,"./assets/scripts/zeus/ZeusLine":259,"./assets/scripts/zeus/ZeusItemBonus":262,"./assets/scripts/zeus/ZeusRankItem":260,"./assets/scripts/zeus/ZeusMainLine":263,"./assets/scripts/zeus/ZeusRequest":264,"./assets/scripts/zeus/ZeusReel":267,"./assets/scripts/zeus/ZeusTransactionItem":266,"./assets/scripts/zeus/ZeusWinGame":270,"./assets/scripts/zeus/ZeusTrialResult":271,"./assets/scripts/zeus/UIZeus":18,"./assets/_smartfox/gui/UtilsUI":29,"./assets/_smartfox/gui/md5":28,"./assets/_smartfox/gui/TwoScrollView":265,"./assets/_smartfox/gui/action/ActionScale":269,"./assets/_smartfox/gui/action/ButtonScaler":19,"./assets/_smartfox/gui/action/ActionRotate":274,"./assets/_smartfox/gui/action/NodeEaseElasticInOut":268,"./assets/_smartfox/gui/action/ActionRotateJerk":272,"./assets/_smartfox/gui/multiResolution/ScaleBackground":273,"./assets/_smartfox/gui/multiResolution/ScaleContent":275,"./assets/_smartfox/gui/multiResolution/MultiResolutionCompat":8,"./assets/_smartfox/hotupdate/HoiXoayServer":20,"./assets/_smartfox/gui/VozBaseComponent":276,"./assets/migration/use_v2.1-2.2.1_cc.Toggle_event":30},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratSoiCau.js"},{"deps":{"Helper":31,"CandyWinGame":75,"CandyReel":71,"CandyLine":63,"UtilsUI":29,"candyLanguage":24},"path":"preview-scripts/assets/scripts/candy/UICandy.js"},{"deps":{"Helper":31,"UtilsUI":29,"PokerCard":136,"MiniPokerWinGame":126,"MiniPokerReel":119,"sinbadLanguage":109},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPoker.js"},{"deps":{"PokerCard":136},"path":"preview-scripts/assets/scripts/poker/PlayerPoker.js"},{"deps":{"PokerCard":136},"path":"preview-scripts/assets/scripts/rongho/UIRongHo.js"},{"deps":{"Helper":31,"SieuXeWinGame":185,"SieuXeReel":179,"sieuxeLanguage":110},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXe.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuEvent.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/MultiResolutionCompat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Card.js"},{"deps":{"Helper":31,"UtilsUI":29,"KimCuongWinGame":92,"KimCuongReel":89,"KimCuongLine":85,"kimcuongLanguage":103,"TrialResult":94},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuong.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerEvent.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/roulette/UIRoulette.js"},{"deps":{"Helper":31,"UtilsUI":29,"TrialResult":94,"sinbadLanguage":109,"SinbadWinGame":195,"SinbadReel":196,"SinbadLine":183},"path":"preview-scripts/assets/scripts/sinbad/UISinbad.js"},{"deps":{"TaiXiuEvent":7},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuController.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuSoiCau.js"},{"deps":{"Helper":31,"TrialResult":94,"VampireWinGame":239,"VampireReel":237,"VampireLine":232,"vampireLanguage":114},"path":"preview-scripts/assets/scripts/vampire/UIVampire.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/UIXocDia.js"},{"deps":{"Helper":31,"ZeusWinGame":270,"ZeusReel":267,"ZeusLine":259,"ZeusTrialResult":271,"zeusLanguage":118},"path":"preview-scripts/assets/scripts/zeus/UIZeus.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ButtonScaler.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/hotupdate/HoiXoayServer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Config.js"},{"deps":{},"path":"preview-scripts/assets/scripts/enum/CasinoEnum.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/ItemGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/candyLanguage.js"},{"deps":{"PokerEvent":11},"path":"preview-scripts/assets/scripts/poker/PokerController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/BankLogItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogBuyIn.js"},{"deps":{"C:/CocosDashboard_1.1.1/resources/.editors/Creator/2.4.3/resources/app.asar/node_modules/process/browser.js":279},"path":"preview-scripts/assets/_smartfox/gui/md5.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/UtilsUI.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Helper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MiniGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CasinoEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Move.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CasinoRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SmartFoxAudio.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameVariables.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseGame.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/abase/ChatLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/ChatEmojiLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AnimationEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/HttpHandler.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/ItemChat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Loading.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Toast.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/MM.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseItemCustom.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratEvent.js"},{"deps":{"BaccaratCard":51},"path":"preview-scripts/assets/scripts/baccarat/UIBaccarat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratListCauItem.js"},{"deps":{"BaccaratEvent":52},"path":"preview-scripts/assets/scripts/baccarat/BaccaratController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratSoiCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratRequest.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/ItemCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/TimeSub.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratHelper.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/candy/CandyLine.js"},{"deps":{"BaccaratCard":51},"path":"preview-scripts/assets/scripts/baccarat/BaccaratTransactionItem.js"},{"deps":{"CandyEvent":82},"path":"preview-scripts/assets/scripts/candy/CandyController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyItem.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/SystemMessage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyRequest.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/candy/CandyWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/JackPotIcon.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/UICandyHelper.js"},{"deps":{"Listview":278,"Helper":31},"path":"preview-scripts/assets/scripts/candy/UICandyRank.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/candy/UICandyTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/ItemRoom.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/UICandyTransactionDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongItemBonus.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/HuLobby.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongRequest.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/TrialResult.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongBonusGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryDetail.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/locthuLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongLobby.js"},{"deps":{"KimCuongEvent":86},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongController.js"},{"deps":{"Listview":278,"Helper":31},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/bacayLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/kimcuongLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/minipokerLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/maubinhLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/portalLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/ronghoLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/pokerLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/sinbadLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/sieuxeLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/taixiuLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/thiendiaLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/xocdiaLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/vampireLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/tlmnLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/baccaratLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/zeusLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerItem.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerLine.js"},{"deps":{"PokerCard":136},"path":"preview-scripts/assets/scripts/poker/CommunityCards.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerRequest.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerWinGame.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerRank.js"},{"deps":{"PokerCard":136},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerHelper.js"},{"deps":{"MiniPokerEvent":116},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/Timer.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerRequest.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/poker/UIPokerRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerCard.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/portal/DaiLyCK.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/Actions.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/UIPoker.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/PortalMenu.js"},{"deps":{"UIManager":50},"path":"preview-scripts/assets/scripts/portal/PortalController.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/portal/UIBankLog.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/PortalManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/DaiLyItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIBaoMatOTP.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/portal/UIDaiLy.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIMenu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIChangePassword.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIPayment.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIProfile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIPortal.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/DaiLyCKItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIGiftCode.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UITransferMoney.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoItemTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoItemRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/UIRongHoHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/ItemRouletteTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/Ball.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/rongho/UIRongHoRank.js"},{"deps":{"RongHoEvent":155},"path":"preview-scripts/assets/scripts/rongho/RongHoController.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/rongho/UIRongHoTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteRequest.js"},{"deps":{"RouletteEvent":167},"path":"preview-scripts/assets/scripts/roulette/RouletteController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/TimeSubRoulette.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteListCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteSoiCauItem.js"},{"deps":{"SieuXeEvent":188},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeController.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/roulette/UIRouletteRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/ItemRouletteRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeItem.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/roulette/UIRouletteTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadItem.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeLine.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/sinbad/SinbadLine.js"},{"deps":{"Listview":278,"Helper":31},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeRank.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeWinGame.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeTransaction.js"},{"deps":{"SieuXeReel":179},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeTransactionDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadTransactionItem.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/sinbad/SinbadWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadRequest.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/sinbad/UISinbadBonus.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/sinbad/UISinbadHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/UISinbadHistoryDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/UISinbadLobby.js"},{"deps":{"SinbadEvent":191},"path":"preview-scripts/assets/scripts/sinbad/SinbadController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TXSessionDetail.js"},{"deps":{"Listview":278,"Helper":31},"path":"preview-scripts/assets/scripts/sinbad/UISinbadRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuHelper.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuDuaTop.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuSessionDetail.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuTanLoc.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuDuaTop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogTwo.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIHome.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/ui/UILobby.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIRegister.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/vampire/UIVampireHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UILogin.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/vampire/UIVampireBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UISplash.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/UIVampireLobby.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogOne.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/UIVampireHistoryDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireEvent.js"},{"deps":{"Listview":278,"Helper":31},"path":"preview-scripts/assets/scripts/vampire/UIVampireRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItemBonus.js"},{"deps":{"VampireEvent":227},"path":"preview-scripts/assets/scripts/vampire/VampireController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireRankItem.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/vampire/VampireLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItemLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireTransactionItem.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/vampire/VampireWinGame.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaTransaction.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaSoiCau.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaItemRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaItemTransaction.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaListCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaRequest.js"},{"deps":{"XocDiaEvent":243},"path":"preview-scripts/assets/scripts/xocdia/XocDiaController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaSoiCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusHistoryDetail.js"},{"deps":{"Listview":278},"path":"preview-scripts/assets/scripts/zeus/UIZeusHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusLobby.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/zeus/UIZeusBonus.js"},{"deps":{"Listview":278,"Helper":31},"path":"preview-scripts/assets/scripts/zeus/UIZeusRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusItem.js"},{"deps":{"ZeusEvent":261},"path":"preview-scripts/assets/scripts/zeus/ZeusController.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/zeus/ZeusLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusRequest.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/TwoScrollView.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusReel.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/NodeEaseElasticInOut.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionScale.js"},{"deps":{"Helper":31},"path":"preview-scripts/assets/scripts/zeus/ZeusWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusTrialResult.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionRotateJerk.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/ScaleBackground.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionRotate.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/ScaleContent.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/VozBaseComponent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Listview.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"}];
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
    