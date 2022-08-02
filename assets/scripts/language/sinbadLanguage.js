let Language = {};
Language.LANGUAGE_VN = {
    "lb_win": "Thắng: ",
    "lb_cuoc": "Tổng cược: ",
    "lb_phien": "Phiên:",
    "lb_free_spine_3": "Sô lượt quay miễn phí: ",
    "lb_receive": "Bạn nhận được ",
    "lb_free_spine_2": "lượt quay miễn phí",
    "lb_title_select_line": "CHỌN DÒNG",
    "lb_from_bonus": "từ Bonus Game",
    "lb_chi_tiet_lich_su_giao_dich": "Chi Tiết Lịch Sử Giao Dịch",
    "lb_so_tien_thang": "Số tiền thắng:",
    "lb_lichsugiaodich": "Lịch Sử Giao Dịch",
    "lb_stt": "STT",
    "lb_thoi_gian": "THỜI GIAN",
    "lb_tai_khoan": "TÀI KHOẢN",
    "lb_no_dat": "ĐẶT",
    "lb_no_thang": "THẮNG",
    "lb_loai": "LOẠI",
    "lb_session": "PHIÊN",
    "lb_detail": "CHI TIẾT",
    "lb_account": "TÀI KHOẢN",
    "lb_des": "MÔ TẢ",
    "noti_not_trial": "Chức năng này không có ở chế độ chơi thử",
    "noti_not_money": "Không đủ số dư",
    "noti_is_playing": "Hiện đang trong tiến trình quay",
    "xxxxxxxxxxx": "xxxxxxxxxxx",
};
Language.LANGUAGE_EN = Language.LANGUAGE_VN;

Language.LANGUAGE_ZH = {
    "home_setting": "xxxxxxxx",
};
Language.getCurrentLanguage = function(){
    let localStorage = cc.sys.localStorage;
    if(localStorage.getItem("current_language") === null || localStorage.getItem("current_language") === undefined){
        Language.setCurrentLanguage("en");
    }
    return localStorage.getItem("current_language");
};
Language.setCurrentLanguage = function(currentLanguage) {
    let localStorage = cc.sys.localStorage;
    localStorage.setItem("current_language", currentLanguage);
};
Language.LANGUAGE = function(){
    return Language.LANGUAGE_VN;
    // let currentLanguage = this.getCurrentLanguage();
    // switch (currentLanguage) {
    //     case "vn":{
    //         return Language.LANGUAGE_VN;
    //     }
    //     case "en":{
    //         return Language.LANGUAGE_EN;
    //     }
    //     case "zh": {
    //         return Language.LANGUAGE_ZH;
    //     }
    //     default: {
    //         return Language.LANGUAGE_VN;
    //     }
    // }
};
Language.changeLanguage = function(nodeTree) {
    let listLabel       = nodeTree.getComponentsInChildren (cc.Label);
    let listRichText    = nodeTree.getComponentsInChildren (cc.RichText);
    for (let i=0; i< listLabel.length; i++){
        this.setLanguage(listLabel[i]);
    }
    for (let i=0; i< listRichText.length; i++){
        this.setLanguage(listRichText[i]);
    }
};
Language.getString = function(key) {
    return this.LANGUAGE()[key];
};
Language.setLanguage = function(subNode) {
    if (Language.LANGUAGE()[subNode.node.name]!== undefined){
        subNode.string = Language.LANGUAGE()[subNode.node.name];
    }
};
module.exports = Language;
