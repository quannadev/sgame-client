
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/HttpHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXEh0dHBIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIkh0dHBIYW5kbGVyIiwiZ2V0IiwidXJsIiwiY2IiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwicG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2MiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsInNldFJlcXVlc3RIZWFkZXIiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUc7QUFDZEMsRUFBQUEsR0FEYyxlQUNWQyxHQURVLEVBQ0pDLEVBREksRUFDRDtBQUNULFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7O0FBQ0FELElBQUFBLEdBQUcsQ0FBQ0Usa0JBQUosR0FBeUIsWUFBWTtBQUNqQyxVQUFJRixHQUFHLENBQUNHLFVBQUosSUFBa0IsQ0FBbEIsSUFBd0JILEdBQUcsQ0FBQ0ksTUFBSixJQUFjLEdBQWQsSUFBcUJKLEdBQUcsQ0FBQ0ksTUFBSixHQUFhLEdBQTlELEVBQW9FO0FBQ2hFLFlBQUlDLFFBQVEsR0FBR0wsR0FBRyxDQUFDTSxZQUFuQjs7QUFDQSxZQUFJUCxFQUFKLEVBQVE7QUFDSkEsVUFBQUEsRUFBRSxDQUFDTSxRQUFELENBQUY7QUFDSDtBQUNKLE9BTEQsTUFLTyxDQUNOO0FBQ0osS0FSRDs7QUFTQUwsSUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVMsS0FBVCxFQUFnQlQsR0FBaEIsRUFBcUIsSUFBckI7QUFDQUUsSUFBQUEsR0FBRyxDQUFDUSxJQUFKO0FBQ0gsR0FkYTtBQWVkQyxFQUFBQSxJQWZjLGdCQWVUWCxHQWZTLEVBZUhZLElBZkcsRUFlSVgsRUFmSixFQWVPO0FBQ2pCWSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsR0FBWjtBQUNBLFFBQUlFLEdBQUcsR0FBR2EsRUFBRSxDQUFDQyxNQUFILENBQVVDLGlCQUFWLEVBQVY7QUFDQWYsSUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVMsTUFBVCxFQUFpQlQsR0FBakIsRUFBc0IsSUFBdEI7QUFDQUUsSUFBQUEsR0FBRyxDQUFDZ0IsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsMEJBQXJDOztBQUNBaEIsSUFBQUEsR0FBRyxDQUFDRSxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLFVBQUlGLEdBQUcsQ0FBQ0csVUFBSixJQUFrQixDQUFsQixJQUF3QkgsR0FBRyxDQUFDSSxNQUFKLElBQWMsR0FBZCxJQUFxQkosR0FBRyxDQUFDSSxNQUFKLEdBQWEsR0FBOUQsRUFBb0U7QUFDaEUsWUFBSWEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV25CLEdBQUcsQ0FBQ00sWUFBZixDQUFYOztBQUNBLFlBQUlQLEVBQUosRUFBUTtBQUNKQSxVQUFBQSxFQUFFLENBQUNrQixJQUFELENBQUY7QUFDSDtBQUVKO0FBQ0osS0FSRDs7QUFVQWpCLElBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTVSxJQUFJLENBQUNFLFNBQUwsQ0FBZVYsSUFBZixDQUFUO0FBQ0gsR0EvQmEsQ0FnQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdENjLENBQWxCO0FBd0NBVyxNQUFNLENBQUNDLE9BQVAsR0FBaUIxQixXQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEh0dHBIYW5kbGVyID0ge1xyXG4gICAgZ2V0KHVybCAsIGNiKXtcclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICB9LFxyXG4gICAgcG9zdCh1cmwgLCBkYXRhICwgY2Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybClcclxuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYihqc29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuICAgIC8vICh1c2VyX25hbWUsIHBhc3N3b3JkLCBjYWxsYmFjayl7XHJcbiAgICAvLyAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAvLyAgICAgICAgIFwidW5cIjogdXNlcl9uYW1lLFxyXG4gICAgLy8gICAgICAgICBcInB3ZFwiOiBwYXNzd29yZFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnBvc3QoQ29uZmlnLlVSTCtcImF1dGhlblwiLGRhdGEsY2FsbGJhY2spO1xyXG4gICAgLy8gfVxyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEh0dHBIYW5kbGVyOyJdfQ==