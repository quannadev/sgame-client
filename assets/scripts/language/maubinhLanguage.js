let Language = {};
Language.LANGUAGE_VN = {
    "lb_xep_bai": "Xếp bài",
    "lb_so_bai": "So bài",
    "lb_bao_binh": "Báo binh",
    "xep_xong": "Xếp Xong",
    "bao_binh": "Báo Binh",
    "sap_ba_chi": "Sập 3 chi",
    "binh_lung": "Binh Lủng",
    "mau_thau": "Mậu Thầu",
    "mot_doi": "Một Đôi",
    "hai_doi": "Hai Đôi",
    "xam_co": "Xám Cô",
    "sanh": "Sảnh",
    "sanh_lon": "Sảnh Lớn",
    "thung": "Thùng",
    "cu_lu": "Cù Lũ",
    "tu_quy": "Tứ Quý",
    "thung_pha_sanh": "Thùng Phá Sảnh",
    "thung_pha_sanh_lon": "Thùng Phá Sảnh Lơn",
    "cu_lu_chi2": "Cù Lũ Chi 2",
    "xam_chi_cuoi": "Sám Chi Cuối",
    "tu_quy_chi2": "Tứ Quý Chi 2",
    "tu_quy_chi_dau": "Tứ Quý Chi Đầu",
    "thung_pha_sanh_chi2": "Thùng Phá Sảnh Chi 2",
    "thung_pha_sanh_chi_dau": "Thùng Phá Sảnh Chi Đầu",
    "noti_phong_day": "Phòng đã đầy vui vòng chọn phòng khác",
    "dang_ky_roi_ban": "Đăng ký rời bàn!",
    "huy_roi_ban": "Hủy rời bàn!",
    "home_setting": "xxxxxxxx",
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
