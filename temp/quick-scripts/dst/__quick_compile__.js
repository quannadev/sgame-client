
(function () {
var scripts = [{"deps":{"./assets/scripts/abase/BaseGame":1,"./assets/scripts/CasinoEvent":2,"./assets/_smartfox/gui/action/NodeEaseElasticInOut":3,"./assets/scripts/baccarat/BaccaratCauItem":4,"./assets/scripts/candy/CandyEvent":5,"./assets/scripts/components/ItemRoom":6,"./assets/scripts/kimcuong/KimCuongEvent":7,"./assets/scripts/enum/CasinoEnum":8,"./assets/scripts/language/candyLanguage":9,"./assets/scripts/minipoker/MiniPokerEvent":10,"./assets/scripts/poker/CommunityCards":11,"./assets/scripts/portal/DaiLyCK":12,"./assets/scripts/rongho/RongHoItemRank":13,"./assets/scripts/roulette/RouletteController":14,"./assets/scripts/sieuxe/SieuXeItem":15,"./assets/scripts/sinbad/SinbadItemBonus":16,"./assets/scripts/taixiu/TaiXiuDuaTop":17,"./assets/scripts/ui/UIDialogOne":18,"./assets/scripts/vampire/UIVampireHistoryDetail":19,"./assets/scripts/xocdia/UIXocDiaHelper":20,"./assets/_smartfox/gui/VozBaseComponent":21,"./assets/_smartfox/gui/multiResolution/ScaleContent":22,"./assets/_smartfox/hotupdate/HoiXoayServer":23,"./assets/scripts/Move":24,"./assets/scripts/MiniGame":25,"./assets/scripts/CasinoRequest":26,"./assets/scripts/abase/ChatLayer":27,"./assets/scripts/abase/ItemChat":28,"./assets/scripts/abase/Card":29,"./assets/scripts/Helper":30,"./assets/scripts/zeus/UIZeusBonus":31,"./assets/scripts/abase/ChatEmojiLayer":32,"./assets/scripts/AnimationEvent":33,"./assets/scripts/Config":34,"./assets/scripts/GameVariables":35,"./assets/scripts/abase/Loading":36,"./assets/scripts/abase/Player":37,"./assets/scripts/abase/MM":38,"./assets/scripts/abase/UIManager":39,"./assets/scripts/abase/Toast":40,"./assets/scripts/abase/Utils":41,"./assets/scripts/baccarat/BaccaratListCauItem":42,"./assets/scripts/abase/BaseController":43,"./assets/scripts/baccarat/BaccaratRankItem":44,"./assets/scripts/baccarat/BaccaratEvent":45,"./assets/scripts/baccarat/BaccaratController":46,"./assets/scripts/baccarat/BaccaratSoiCauItem":47,"./assets/scripts/baccarat/BaccaratRequest":48,"./assets/scripts/baccarat/TimeSub":49,"./assets/scripts/baccarat/ItemCard":50,"./assets/scripts/baccarat/UIBaccaratHelper":51,"./assets/scripts/baccarat/UIBaccarat":52,"./assets/scripts/baccarat/UIBaccaratSoiCau":53,"./assets/scripts/baccarat/UIBaccaratRank":54,"./assets/scripts/baccarat/BaccaratTransactionItem":55,"./assets/scripts/abase/BaseItemCustom":56,"./assets/scripts/candy/CandyRankItem":57,"./assets/scripts/baccarat/BaccaratCard":58,"./assets/scripts/candy/CandyItem":59,"./assets/migration/use_v2.1-2.2.1_cc.Toggle_event":60,"./assets/scripts/candy/CandyReel":61,"./assets/scripts/candy/CandyMainLine":62,"./assets/scripts/baccarat/UIBaccaratTransaction":63,"./assets/scripts/candy/CandyWinGame":64,"./assets/scripts/candy/CandyRequest":65,"./assets/scripts/candy/UICandyHelper":66,"./assets/scripts/candy/UICandy":67,"./assets/scripts/candy/UICandyRank":68,"./assets/scripts/candy/CandyLine":69,"./assets/scripts/candy/UICandyTransactionDetail":70,"./assets/scripts/candy/UICandyTransaction":71,"./assets/scripts/candy/CandyController":72,"./assets/scripts/components/SystemMessage":73,"./assets/scripts/components/JackPotIcon":74,"./assets/scripts/components/ItemGame":75,"./assets/scripts/kimcuong/KimCuongItemBonus":76,"./assets/scripts/components/HuLobby":77,"./assets/scripts/kimcuong/KimCuongLine":78,"./assets/scripts/kimcuong/KimCuongTransactionItem":79,"./assets/scripts/kimcuong/KimCuongReel":80,"./assets/scripts/kimcuong/TrialResult":81,"./assets/scripts/kimcuong/KimCuongMainLine":82,"./assets/scripts/kimcuong/KimCuongWinGame":83,"./assets/scripts/kimcuong/KimCuongRequest":84,"./assets/scripts/abase/Listview":85,"./assets/scripts/kimcuong/UIKimCuongHistoryDetail":86,"./assets/scripts/kimcuong/UIKimCuongBonusGame":87,"./assets/scripts/kimcuong/UIKimCuong":88,"./assets/scripts/kimcuong/UIKimCuongLobby":89,"./assets/scripts/kimcuong/UIKimCuongRank":90,"./assets/scripts/SmartFoxAudio":91,"./assets/scripts/language/maubinhLanguage":92,"./assets/scripts/language/minipokerLanguage":93,"./assets/scripts/language/pokerLanguage":94,"./assets/scripts/language/kimcuongLanguage":95,"./assets/scripts/kimcuong/KimCuongRankItem":96,"./assets/scripts/language/portalLanguage":97,"./assets/scripts/language/baccaratLanguage":98,"./assets/scripts/language/ronghoLanguage":99,"./assets/scripts/language/sieuxeLanguage":100,"./assets/scripts/kimcuong/KimCuongController":101,"./assets/scripts/language/sinbadLanguage":102,"./assets/scripts/language/locthuLanguage":103,"./assets/scripts/language/thiendiaLanguage":104,"./assets/scripts/language/vampireLanguage":105,"./assets/scripts/language/tlmnLanguage":106,"./assets/scripts/language/taixiuLanguage":107,"./assets/scripts/language/bacayLanguage":108,"./assets/scripts/minipoker/MiniPokerLine":109,"./assets/scripts/minipoker/MiniPokerMainLine":110,"./assets/scripts/minipoker/MiniPokerRankItem":111,"./assets/scripts/minipoker/MiniPokerItem":112,"./assets/scripts/language/xocdiaLanguage":113,"./assets/scripts/minipoker/MiniPokerReel":114,"./assets/scripts/minipoker/MiniPokerRequest":115,"./assets/scripts/minipoker/MiniPokerWinGame":116,"./assets/scripts/minipoker/UIMiniPoker":117,"./assets/scripts/minipoker/UIMiniPokerRank":118,"./assets/scripts/language/zeusLanguage":119,"./assets/scripts/minipoker/MiniPokerTransactionItem":120,"./assets/scripts/minipoker/UIMiniPokerHelper":121,"./assets/scripts/minipoker/MiniPokerController":122,"./assets/scripts/kimcuong/UIKimCuongHistoryTransaction":123,"./assets/scripts/poker/PlayerPoker":124,"./assets/scripts/poker/PokerEvent":125,"./assets/scripts/poker/PokerController":126,"./assets/scripts/poker/PokerRequest":127,"./assets/scripts/poker/PokerRankItem":128,"./assets/scripts/poker/Timer":129,"./assets/scripts/poker/UIPokerRank":130,"./assets/scripts/poker/Actions":131,"./assets/scripts/portal/DaiLyCKItem":132,"./assets/scripts/minipoker/UIMiniPokerTransaction":133,"./assets/scripts/poker/PokerCard":134,"./assets/scripts/poker/UIPoker":135,"./assets/scripts/abase/HttpHandler":136,"./assets/scripts/portal/UIBaoMatOTP":137,"./assets/scripts/portal/PortalMenu":138,"./assets/scripts/kimcuong/KimCuongItem":139,"./assets/scripts/portal/UIChangePassword":140,"./assets/scripts/portal/UIDaiLy":141,"./assets/scripts/portal/PortalManager":142,"./assets/scripts/portal/UIGiftCode":143,"./assets/scripts/portal/UIMenu":144,"./assets/scripts/portal/UIPayment":145,"./assets/scripts/portal/UIProfile":146,"./assets/scripts/portal/BankLogItem":147,"./assets/scripts/rongho/RongHoEvent":148,"./assets/scripts/candy/CandyTransactionItem":149,"./assets/scripts/portal/UIPortal":150,"./assets/scripts/rongho/RongHoItemTransaction":151,"./assets/scripts/rongho/UIRongHoHelper":152,"./assets/scripts/rongho/UIRongHoRank":153,"./assets/scripts/rongho/UIRongHoTransaction":154,"./assets/scripts/rongho/RongHoRequest":155,"./assets/scripts/roulette/ItemRouletteTransaction":156,"./assets/scripts/roulette/RouletteEvent":157,"./assets/scripts/portal/UITransferMoney":158,"./assets/scripts/portal/DaiLyItem":159,"./assets/scripts/roulette/RouletteListCauItem":160,"./assets/scripts/rongho/RongHoController":161,"./assets/scripts/roulette/TimeSubRoulette":162,"./assets/scripts/roulette/RouletteSoiCauItem":163,"./assets/scripts/roulette/UIRouletteTransaction":164,"./assets/scripts/roulette/RouletteRequest":165,"./assets/scripts/rongho/UIRongHo":166,"./assets/scripts/sieuxe/SieuXeMainLine":167,"./assets/scripts/roulette/UIRouletteRank":168,"./assets/scripts/sieuxe/SieuXeLine":169,"./assets/scripts/sieuxe/SieuXeRankItem":170,"./assets/scripts/sieuxe/SieuXeEvent":171,"./assets/scripts/sieuxe/SieuXeRequest":172,"./assets/scripts/portal/UIBankLog":173,"./assets/scripts/sieuxe/SieuXeTransactionItem":174,"./assets/scripts/sieuxe/SieuXeReel":175,"./assets/scripts/sieuxe/SieuXeWinGame":176,"./assets/scripts/sieuxe/UISieuXe":177,"./assets/scripts/sieuxe/UISieuXeHelper":178,"./assets/scripts/sieuxe/UISieuXeTransactionDetail":179,"./assets/scripts/sieuxe/UISieuXeTransaction":180,"./assets/scripts/sinbad/SinbadItem":181,"./assets/scripts/roulette/ItemRouletteRank":182,"./assets/scripts/sinbad/SinbadMainLine":183,"./assets/scripts/sinbad/SinbadReel":184,"./assets/scripts/sinbad/SinbadRankItem":185,"./assets/scripts/sinbad/SinbadRequest":186,"./assets/scripts/sinbad/SinbadLine":187,"./assets/scripts/portal/PortalController":188,"./assets/scripts/sinbad/SinbadWinGame":189,"./assets/scripts/sinbad/UISinbadBonus":190,"./assets/scripts/sieuxe/UISieuXeRank":191,"./assets/scripts/roulette/UIRoulette":192,"./assets/scripts/sinbad/UISinbadLobby":193,"./assets/scripts/sinbad/UISinbadRank":194,"./assets/scripts/sinbad/SinbadEvent":195,"./assets/scripts/sinbad/UISinbad":196,"./assets/scripts/sinbad/SinbadController":197,"./assets/scripts/taixiu/TaiXiuRankItem":198,"./assets/scripts/taixiu/TaiXiuRequest":199,"./assets/scripts/taixiu/TaiXiuController":200,"./assets/scripts/taixiu/TaiXiuEvent":201,"./assets/scripts/taixiu/TaiXiuTransactionItem":202,"./assets/scripts/taixiu/UITaiXiuSessionDetail":203,"./assets/scripts/taixiu/UITaiXiuSoiCau":204,"./assets/scripts/taixiu/UITaiXiuHelper":205,"./assets/scripts/taixiu/UITaiXiuTransaction":206,"./assets/scripts/sinbad/UISinbadHistoryDetail":207,"./assets/scripts/taixiu/UITaiXiuDuaTop":208,"./assets/scripts/taixiu/UITaiXiuRank":209,"./assets/scripts/taixiu/TXSessionDetail":210,"./assets/scripts/sieuxe/SieuXeController":211,"./assets/scripts/ui/UIHome":212,"./assets/scripts/taixiu/UITaiXiu":213,"./assets/scripts/roulette/Ball":214,"./assets/scripts/ui/UISplash":215,"./assets/scripts/ui/UILogin":216,"./assets/scripts/ui/UIRegister":217,"./assets/scripts/ui/UIDialogTwo":218,"./assets/scripts/ui/UILobby":219,"./assets/scripts/taixiu/UITaiXiuTanLoc":220,"./assets/scripts/sinbad/SinbadTransactionItem":221,"./assets/scripts/sinbad/UISinbadHistoryTransaction":222,"./assets/scripts/vampire/VampireItemBonus":223,"./assets/scripts/vampire/UIVampireHistoryTransaction":224,"./assets/scripts/vampire/VampireItem":225,"./assets/scripts/vampire/UIVampireRank":226,"./assets/scripts/vampire/UIVampireBonus":227,"./assets/scripts/vampire/VampireMainLine":228,"./assets/scripts/vampire/VampireRankItem":229,"./assets/scripts/vampire/VampireItemLine":230,"./assets/scripts/vampire/VampireReel":231,"./assets/scripts/vampire/VampireLine":232,"./assets/scripts/vampire/VampireController":233,"./assets/scripts/vampire/VampireWinGame":234,"./assets/scripts/vampire/VampireTransactionItem":235,"./assets/scripts/vampire/UIVampire":236,"./assets/scripts/xocdia/UIXocDiaRank":237,"./assets/scripts/ui/UIDialogBuyIn":238,"./assets/scripts/xocdia/UIXocDiaSoiCau":239,"./assets/scripts/xocdia/XocDiaController":240,"./assets/scripts/xocdia/XocDiaItemTransaction":241,"./assets/scripts/xocdia/XocDiaEvent":242,"./assets/scripts/xocdia/UIXocDiaTransaction":243,"./assets/scripts/xocdia/XocDiaListCauItem":244,"./assets/scripts/xocdia/XocDiaRequest":245,"./assets/scripts/xocdia/XocDiaSoiCauItem":246,"./assets/scripts/xocdia/XocDiaItemRank":247,"./assets/scripts/vampire/UIVampireLobby":248,"./assets/scripts/zeus/UIZeusHistoryTransaction":249,"./assets/scripts/zeus/UIZeusLobby":250,"./assets/scripts/zeus/UIZeusRank":251,"./assets/scripts/zeus/ZeusController":252,"./assets/scripts/zeus/UIZeusHelper":253,"./assets/scripts/zeus/ZeusEvent":254,"./assets/scripts/zeus/ZeusItem":255,"./assets/scripts/zeus/ZeusItemBonus":256,"./assets/scripts/zeus/ZeusMainLine":257,"./assets/scripts/zeus/ZeusRankItem":258,"./assets/scripts/zeus/ZeusReel":259,"./assets/scripts/zeus/ZeusLine":260,"./assets/scripts/vampire/VampireRequest":261,"./assets/scripts/xocdia/UIXocDia":262,"./assets/scripts/zeus/UIZeusHistoryDetail":263,"./assets/scripts/vampire/VampireEvent":264,"./assets/scripts/zeus/ZeusTransactionItem":265,"./assets/_smartfox/gui/TwoScrollView":266,"./assets/scripts/zeus/ZeusRequest":268,"./assets/_smartfox/gui/action/ActionRotateJerk":269,"./assets/_smartfox/gui/action/ActionScale":270,"./assets/scripts/zeus/ZeusWinGame":271,"./assets/_smartfox/gui/multiResolution/ScaleBackground":272,"./assets/_smartfox/gui/action/ActionRotate":273,"./assets/_smartfox/gui/action/ButtonScaler":274,"./assets/_smartfox/gui/UtilsUI":275,"./assets/scripts/zeus/UIZeus":276,"./assets/scripts/zeus/ZeusTrialResult":277,"./assets/_smartfox/gui/multiResolution/MultiResolutionCompat":278,"./assets/_smartfox/gui/md5":267},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CasinoEvent.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/NodeEaseElasticInOut.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/ItemRoom.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/enum/CasinoEnum.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/candyLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerEvent.js"},{"deps":{"PokerCard":134},"path":"preview-scripts/assets/scripts/poker/CommunityCards.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/portal/DaiLyCK.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoItemRank.js"},{"deps":{"RouletteEvent":157},"path":"preview-scripts/assets/scripts/roulette/RouletteController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuDuaTop.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogOne.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/UIVampireHistoryDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaHelper.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/VozBaseComponent.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/ScaleContent.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/hotupdate/HoiXoayServer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Move.js"},{"deps":{},"path":"preview-scripts/assets/scripts/MiniGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CasinoRequest.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/abase/ChatLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/ItemChat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Card.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Helper.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/zeus/UIZeusBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/ChatEmojiLayer.js"},{"deps":{},"path":"preview-scripts/assets/scripts/AnimationEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Config.js"},{"deps":{},"path":"preview-scripts/assets/scripts/GameVariables.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Loading.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Player.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/MM.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Toast.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratListCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratEvent.js"},{"deps":{"BaccaratEvent":45},"path":"preview-scripts/assets/scripts/baccarat/BaccaratController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratSoiCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/TimeSub.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/ItemCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratHelper.js"},{"deps":{"BaccaratCard":58},"path":"preview-scripts/assets/scripts/baccarat/UIBaccarat.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratSoiCau.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratRank.js"},{"deps":{"BaccaratCard":58},"path":"preview-scripts/assets/scripts/baccarat/BaccaratTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/BaseItemCustom.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/baccarat/BaccaratCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyItem.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyMainLine.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/baccarat/UIBaccaratTransaction.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/candy/CandyWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/UICandyHelper.js"},{"deps":{"CandyWinGame":64,"Helper":30,"CandyReel":61,"CandyLine":69,"UtilsUI":275,"candyLanguage":9},"path":"preview-scripts/assets/scripts/candy/UICandy.js"},{"deps":{"Listview":85,"Helper":30},"path":"preview-scripts/assets/scripts/candy/UICandyRank.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/candy/CandyLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/UICandyTransactionDetail.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/candy/UICandyTransaction.js"},{"deps":{"CandyEvent":5},"path":"preview-scripts/assets/scripts/candy/CandyController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/SystemMessage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/JackPotIcon.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/ItemGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/components/HuLobby.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/TrialResult.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongMainLine.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/Listview.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryDetail.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongBonusGame.js"},{"deps":{"KimCuongWinGame":83,"Helper":30,"KimCuongReel":80,"KimCuongLine":78,"UtilsUI":275,"TrialResult":81,"kimcuongLanguage":95},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuong.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongLobby.js"},{"deps":{"Listview":85,"Helper":30},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/SmartFoxAudio.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/maubinhLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/minipokerLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/pokerLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/kimcuongLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/portalLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/baccaratLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/ronghoLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/sieuxeLanguage.js"},{"deps":{"KimCuongEvent":7},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/sinbadLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/locthuLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/thiendiaLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/vampireLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/tlmnLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/taixiuLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/bacayLanguage.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/xocdiaLanguage.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerRequest.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerWinGame.js"},{"deps":{"MiniPokerWinGame":116,"Helper":30,"MiniPokerReel":114,"UtilsUI":275,"PokerCard":134,"sinbadLanguage":102},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPoker.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/language/zeusLanguage.js"},{"deps":{"PokerCard":134},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerHelper.js"},{"deps":{"MiniPokerEvent":10},"path":"preview-scripts/assets/scripts/minipoker/MiniPokerController.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryTransaction.js"},{"deps":{"PokerCard":134},"path":"preview-scripts/assets/scripts/poker/PlayerPoker.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerEvent.js"},{"deps":{"PokerEvent":125},"path":"preview-scripts/assets/scripts/poker/PokerController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/Timer.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/poker/UIPokerRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/Actions.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/DaiLyCKItem.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/minipoker/UIMiniPokerTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/PokerCard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/poker/UIPoker.js"},{"deps":{},"path":"preview-scripts/assets/scripts/abase/HttpHandler.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIBaoMatOTP.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/PortalMenu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kimcuong/KimCuongItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIChangePassword.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/portal/UIDaiLy.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/PortalManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIGiftCode.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIMenu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIPayment.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIProfile.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/BankLogItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/candy/CandyTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UIPortal.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoItemTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/UIRongHoHelper.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/rongho/UIRongHoRank.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/rongho/UIRongHoTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/rongho/RongHoRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/ItemRouletteTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/UITransferMoney.js"},{"deps":{},"path":"preview-scripts/assets/scripts/portal/DaiLyItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteListCauItem.js"},{"deps":{"RongHoEvent":148},"path":"preview-scripts/assets/scripts/rongho/RongHoController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/TimeSubRoulette.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteSoiCauItem.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/roulette/UIRouletteTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/RouletteRequest.js"},{"deps":{"PokerCard":134},"path":"preview-scripts/assets/scripts/rongho/UIRongHo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeMainLine.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/roulette/UIRouletteRank.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeRequest.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/portal/UIBankLog.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeReel.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeWinGame.js"},{"deps":{"SieuXeWinGame":176,"Helper":30,"SieuXeReel":175,"sieuxeLanguage":100},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXe.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeHelper.js"},{"deps":{"SieuXeReel":175},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeTransactionDetail.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/ItemRouletteRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadReel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadRequest.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/sinbad/SinbadLine.js"},{"deps":{"UIManager":39},"path":"preview-scripts/assets/scripts/portal/PortalController.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/sinbad/SinbadWinGame.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/sinbad/UISinbadBonus.js"},{"deps":{"Listview":85,"Helper":30},"path":"preview-scripts/assets/scripts/sieuxe/UISieuXeRank.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/roulette/UIRoulette.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/UISinbadLobby.js"},{"deps":{"Listview":85,"Helper":30},"path":"preview-scripts/assets/scripts/sinbad/UISinbadRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadEvent.js"},{"deps":{"SinbadWinGame":189,"Helper":30,"SinbadReel":184,"SinbadLine":187,"UtilsUI":275,"TrialResult":81,"sinbadLanguage":102},"path":"preview-scripts/assets/scripts/sinbad/UISinbad.js"},{"deps":{"SinbadEvent":195},"path":"preview-scripts/assets/scripts/sinbad/SinbadController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuRequest.js"},{"deps":{"TaiXiuEvent":201},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TaiXiuTransactionItem.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuSessionDetail.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuSoiCau.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuHelper.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/UISinbadHistoryDetail.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuDuaTop.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/TXSessionDetail.js"},{"deps":{"SieuXeEvent":171},"path":"preview-scripts/assets/scripts/sieuxe/SieuXeController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIHome.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiu.js"},{"deps":{},"path":"preview-scripts/assets/scripts/roulette/Ball.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UISplash.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UILogin.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIRegister.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogTwo.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/ui/UILobby.js"},{"deps":{},"path":"preview-scripts/assets/scripts/taixiu/UITaiXiuTanLoc.js"},{"deps":{},"path":"preview-scripts/assets/scripts/sinbad/SinbadTransactionItem.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/sinbad/UISinbadHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItemBonus.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/vampire/UIVampireHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItem.js"},{"deps":{"Listview":85,"Helper":30},"path":"preview-scripts/assets/scripts/vampire/UIVampireRank.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/vampire/UIVampireBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireItemLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireReel.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/vampire/VampireLine.js"},{"deps":{"VampireEvent":264},"path":"preview-scripts/assets/scripts/vampire/VampireController.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/vampire/VampireWinGame.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireTransactionItem.js"},{"deps":{"VampireWinGame":234,"Helper":30,"VampireReel":231,"VampireLine":232,"TrialResult":81,"vampireLanguage":105},"path":"preview-scripts/assets/scripts/vampire/UIVampire.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/UIDialogBuyIn.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaSoiCau.js"},{"deps":{"XocDiaEvent":242},"path":"preview-scripts/assets/scripts/xocdia/XocDiaController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaItemTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaEvent.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/xocdia/UIXocDiaTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaListCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaSoiCauItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/XocDiaItemRank.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/UIVampireLobby.js"},{"deps":{"Listview":85},"path":"preview-scripts/assets/scripts/zeus/UIZeusHistoryTransaction.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusLobby.js"},{"deps":{"Listview":85,"Helper":30},"path":"preview-scripts/assets/scripts/zeus/UIZeusRank.js"},{"deps":{"ZeusEvent":254},"path":"preview-scripts/assets/scripts/zeus/ZeusController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusHelper.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusItemBonus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusMainLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusRankItem.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusReel.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/zeus/ZeusLine.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireRequest.js"},{"deps":{},"path":"preview-scripts/assets/scripts/xocdia/UIXocDia.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/UIZeusHistoryDetail.js"},{"deps":{},"path":"preview-scripts/assets/scripts/vampire/VampireEvent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusTransactionItem.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/TwoScrollView.js"},{"deps":{"../../../../../../../../../../../Applications/CocosCreator/Creator/2.4.9/CocosCreator.app/Contents/Resources/app.asar/node_modules/process/browser.js":279},"path":"preview-scripts/assets/_smartfox/gui/md5.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusRequest.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionRotateJerk.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionScale.js"},{"deps":{"Helper":30},"path":"preview-scripts/assets/scripts/zeus/ZeusWinGame.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/ScaleBackground.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ActionRotate.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/action/ButtonScaler.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/UtilsUI.js"},{"deps":{"ZeusWinGame":271,"Helper":30,"ZeusReel":259,"ZeusLine":260,"ZeusTrialResult":277,"zeusLanguage":119},"path":"preview-scripts/assets/scripts/zeus/UIZeus.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zeus/ZeusTrialResult.js"},{"deps":{},"path":"preview-scripts/assets/_smartfox/gui/multiResolution/MultiResolutionCompat.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"}];
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
    