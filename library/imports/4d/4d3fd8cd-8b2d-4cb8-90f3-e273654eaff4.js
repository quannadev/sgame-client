"use strict";
cc._RF.push(module, '4d3fdjNiy1MuJDz4nNlTq/0', 'HttpHandler');
// scripts/abase/HttpHandler.js

"use strict";

var HttpHandler = {
  get: function get(url, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = xhr.responseText;

        if (cb) {
          cb(response);
        }
      } else {}
    };

    xhr.open("GET", url, true);
    xhr.send();
  },
  post: function post(url, data, cb) {
    console.log(url);
    var xhr = cc.loader.getXMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var json = JSON.parse(xhr.responseText);

        if (cb) {
          cb(json);
        }
      }
    };

    xhr.send(JSON.stringify(data));
  } // (user_name, password, callback){
  //     var data = {
  //         "un": user_name,
  //         "pwd": password
  //     }
  //     this.post(Config.URL+"authen",data,callback);
  // }

};
module.exports = HttpHandler;

cc._RF.pop();