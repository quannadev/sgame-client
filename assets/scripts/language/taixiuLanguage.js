let Language = {};
Language.LANGUAGE_VN = {
    "lb_dat": "Đặt",
    "lb_huong_dan": "HƯỚNG DẪN",
    "lb_bang_xep_hang": "BẢNG XẾP HẠNG",
    "lb_rank": "HẠNG",
    "lb_name": "TÊN TÀI KHOẢN",
    "lb_win": "THẮNG",
    "lb_thoi_gian": "THỜI GIAN",
    "lb_ten": "TÊN",
    "lb_dat1": "ĐẶT",
    "lb_tong": "Tổng",
    "lb_soi_cau": "SOI CẦU",
    "lb_tai": "TÀI:",
    "lb_xiu": "XỈU:",
    "lb_ketqua": "KẾT QUẢ",
    "lb_hoan_tra": "HOÀN TRẢ",
    "lb_lichsu": "LỊCH SỬ GIAO DỊCH",
    "xxxxxxxxxxx": "xxxxxxxxxxx",
};
Language.LANGUAGE_EN = Language.LANGUAGE_VN;

Language.LANGUAGE_ZH = {
    "home_setting": "xxxxxxxx",
};
Language.getCurrentLanguage = function(){
    let localStorage = cc.sys.localStorage;
    if(localStorage.getItem("current_language") === null || localStorage.getItem("current_language") === undefined){
        Language.setCurrentLanguage("vn");
    }
    return localStorage.getItem("current_language");
};
Language.setCurrentLanguage = function(currentLanguage) {
    let localStorage = cc.sys.localStorage;
    localStorage.setItem("current_language", currentLanguage);
};
Language.LANGUAGE = function(){
    let currentLanguage = this.getCurrentLanguage();
    switch (currentLanguage) {
        case "vn":{
            return Language.LANGUAGE_VN;
        }
        case "en":{
            return Language.LANGUAGE_EN;
        }
        case "zh": {
            return Language.LANGUAGE_ZH;
        }
        default: {
            return Language.LANGUAGE_VN;
        }
    }
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
