let Language = {};
Language.LANGUAGE_VN = {
    "lb_tai_xiu": "TÀI XỈU",
    "lb_sieu_xe": "SIÊU XE",
    "lb_loc_thu": "LỘC THÚ",
    "lb_thien_dia": "THIÊN ĐỊA",
    "lb_lich_su_giao_dich": "LỊCH SỬ GIAO DỊCH",
    "lb_thoi_gian": "THỜI GIAN",
    "lb_phat_sinh": "PHÁT SINH",
    "lb_so_du": "SỐ DƯ",
    "lb_tax": "THUẾ",
    "lb_mieu_ta": "MIÊU TẢ",
    "lb_bao_mat_otp": "Bảo Mật OTP",
    "lb_nhap_sdt": "Nhập số điện thoại",
    "lb_ma_otp": "Mã OTP",
    "lb_doi_mat_khau": "Đổi mật khẩu",
    "lb_mat_khau_moi": "Mật khẩu mới",
    "lb_nhap_lai_mk": "Nhập lại mật khẩu",
    "lb_ten_dai_ly": "TÊN ĐẠI LÝ",
    "lb_khu_vuc": "KHU VỰC",
    "lb_nhap_gift_code": "Nhập Giftcode",
    "lb_ho_tro": "Hỗ trợ",
    "lb_bao_mat": "Bảo mật",
    "lb_lich_su_gd": "Lịch sử GD",
    "lb_chon_menh_gia": "Vui lòng chọn mênh giá",
    "lb_nhap_seri": "Nhập số Seri",
    "lb_nhap_ma_the": "Mã thẻ",
    "lb_thong_tin": "Thông tin",
    "lb_tai_khoan": "Tài khoản :",
    "lb_ten_hien_thi": "Tên hiển thị :",
    "lb_so_du_1": "Số dư :",
    "lb_ten_dang_nhap": "Tên đăng nhập",
    "lb_ten_hien_thi_1": "Tên hiển thị",
    "lb_mat_khau": "Mật khẩu",
    "lb_bang_xep_hang": "Bảng xếp hạng",
    "lb_them": "Thêm",
    "lb_so_du_con_lai": "Số dư còn lại:",
    "lb_6_nguoi": "6 người",
    "lb_9_nguoi": "9 người",
    "xxxxxxxxxxx": "xxxxxxxxxxx"
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
