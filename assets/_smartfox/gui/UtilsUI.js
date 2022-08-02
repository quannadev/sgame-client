let  UtilsUI =  {};
UtilsUI.loadImageLink = function (link, sprite, complete) {
    if(!sprite){
        console.log("Loi sprite");
        return;
    }
    cc.loader.load({url: link, type: 'png'}, function (err, texture) {
        if(err){
            console.log(err);
            return
        }
        if(cc.isValid(sprite))
            sprite.spriteFrame = new cc.SpriteFrame(texture);
        if(complete)
            complete(sprite);
    });
};
UtilsUI.loadImageRes = function(sprite, url){
    cc.loader.loadRes(url, cc.SpriteFrame, function (err, spriteFrame) {
        if(err){
            console.log(err);
            return;
        }
        if(cc.isValid(sprite)){
            sprite.spriteFrame = spriteFrame;
            sprite.node.active = true;
        }
    })
};
UtilsUI.loadPlist = function(sprite, url, name){
    cc.loader.loadRes(url, cc.SpriteAtlas, function (err, atlas) {
        if(err){
            return;
        }
        let frame = atlas.getSpriteFrame(name);
        if(cc.isValid(sprite)){
            sprite.spriteFrame = frame;
            sprite.node.active = true;
        }
    });
};
UtilsUI.addDotToNumber = function(value) {
    if(value <= 0)
        return 0;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
UtilsUI.formatCurrency = function (money)
{
    if(money <= 0)
        return 0;
    if(!mm.KythanhUserVariable.isBet()){
        return Math.floor(money / 500);
    }
    if(money >= Math.pow(10, 4) && money < Math.pow(10, 6)){
        return money/Math.pow(10,3) + "K";
    }else  if(money >= Math.pow(10,6) && money < Math.pow(10,9)){
        money = Math.floor(money/Math.pow(10,4))/100;
        return money + "M";
    }else if(money >= Math.pow(10,9) && money < Math.pow(10,12)){
        money = Math.floor(money/Math.pow(10,7))/100;
        return money + "B";
    }else if(money >= Math.pow(10,12) && money <= Math.pow(10,15)){
        money = Math.floor(money/Math.pow(10,10))/100;
        return  money + "Q";
    }else if(money >= Math.pow(10, 15)){
        money = Math.floor(money/Math.pow(10,13))/100;
        return money+"~~";
    }
    return Utils.addDotToNumber(money);
};
UtilsUI.formatNumber= function (number, point) {
    let numberPoint = Math.pow(10, point);
    number = number/numberPoint;
    number = Math.floor(number);
    number = number*numberPoint;
    return number;
};
UtilsUI.formatTimeToString = function(time){
    let minute = Math.floor(time/60);
    let seconds = Math.floor(time%60);
    if (minute < 10) {
        minute = "0"+minute;
    }
    if(seconds < 10)
        seconds = "0"+seconds;
    return minute+":"+seconds;
};
UtilsUI.convertTimeStampToDate= function (timeStamp) {
    let date = new Date(timeStamp);
    let year = date.getFullYear();
    let month= date.getMonth();
    let day  = date.getDay();
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    // return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return day + "/" + month + "/" + year;
};
UtilsUI.convertTimeStampToTime= function (timeStamp, language) {//+ " " + Language.LANGUAGE()["txt_minute"];
    let date = new Date(timeStamp);
    let year = date.getFullYear();
    let month= date.getMonth();
    let day  = date.getDay();

    let hours   =   date.getHours();
    let minutes =   date.getMinutes();
    let seconds =   date.getSeconds();
    return day + "/" + month + "/" + year;
};
UtilsUI.convertDateToTimestamp= function (myDate) {
    myDate=myDate.split("-");
    if(myDate.length != 3)
        return null;
    let newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
    let time = new Date(newDate).getTime();
    return time;
};
UtilsUI.formatText = function(text, maxLength) {
    if(text == undefined || text == null || text == '')
        return "Error: Empty";
    if (maxLength === undefined)
        maxLength = 10;
    let pre = "";
    if(text.length >= maxLength)
        pre = "..";
    text = text.substring(0, maxLength - pre.length);
    text += pre;
    return text;
};
UtilsUI.formatRelativeTime = function(seconds) {
    if (!Number.isInteger(seconds) || (+seconds <= 0)) {
        return '0 day'
    } else  {
        let days = Math.floor(seconds / (24 * 60 * 60));

        return days + ' days'
    }
};
module.exports = UtilsUI;