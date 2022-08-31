let HttpHandler = {
    get(url , cb){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                if (cb) {
                    cb(response);
                }
            } else {
            }
        };
        if (Config.getAccessToken() != "") {
            xhr.setRequestHeader("Authorization", "Bearer " + Config.getAccessToken());
        }
        xhr.open("GET", url, true);
        xhr.send();
    },
    post(url , data , cb){
        console.log(url)
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        if (Config.getAccessToken() != "") {
            xhr.setRequestHeader("Authorization", "Bearer " + Config.getAccessToken());
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var json = JSON.parse(xhr.responseText);
                if (cb) {
                    cb(json);
                }

            }
        }

        xhr.send(JSON.stringify(data));
    }
    // (user_name, password, callback){
    //     var data = {
    //         "un": user_name,
    //         "pwd": password
    //     }
    //     this.post(Config.URL+"authen",data,callback);
    // }
};
module.exports = HttpHandler;