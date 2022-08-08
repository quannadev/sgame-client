
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL0h0dHBIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIkh0dHBIYW5kbGVyIiwiZ2V0IiwidXJsIiwiY2IiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwicG9zdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2MiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsInNldFJlcXVlc3RIZWFkZXIiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUc7QUFDZEMsRUFBQUEsR0FEYyxlQUNWQyxHQURVLEVBQ0pDLEVBREksRUFDRDtBQUNULFFBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7O0FBQ0FELElBQUFBLEdBQUcsQ0FBQ0Usa0JBQUosR0FBeUIsWUFBWTtBQUNqQyxVQUFJRixHQUFHLENBQUNHLFVBQUosSUFBa0IsQ0FBbEIsSUFBd0JILEdBQUcsQ0FBQ0ksTUFBSixJQUFjLEdBQWQsSUFBcUJKLEdBQUcsQ0FBQ0ksTUFBSixHQUFhLEdBQTlELEVBQW9FO0FBQ2hFLFlBQUlDLFFBQVEsR0FBR0wsR0FBRyxDQUFDTSxZQUFuQjs7QUFDQSxZQUFJUCxFQUFKLEVBQVE7QUFDSkEsVUFBQUEsRUFBRSxDQUFDTSxRQUFELENBQUY7QUFDSDtBQUNKLE9BTEQsTUFLTyxDQUNOO0FBQ0osS0FSRDs7QUFTQUwsSUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVMsS0FBVCxFQUFnQlQsR0FBaEIsRUFBcUIsSUFBckI7QUFDQUUsSUFBQUEsR0FBRyxDQUFDUSxJQUFKO0FBQ0gsR0FkYTtBQWVkQyxFQUFBQSxJQWZjLGdCQWVUWCxHQWZTLEVBZUhZLElBZkcsRUFlSVgsRUFmSixFQWVPO0FBQ2pCWSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsR0FBWjtBQUNBLFFBQUlFLEdBQUcsR0FBR2EsRUFBRSxDQUFDQyxNQUFILENBQVVDLGlCQUFWLEVBQVY7QUFDQWYsSUFBQUEsR0FBRyxDQUFDTyxJQUFKLENBQVMsTUFBVCxFQUFpQlQsR0FBakIsRUFBc0IsSUFBdEI7QUFDQUUsSUFBQUEsR0FBRyxDQUFDZ0IsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsMEJBQXJDOztBQUNBaEIsSUFBQUEsR0FBRyxDQUFDRSxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLFVBQUlGLEdBQUcsQ0FBQ0csVUFBSixJQUFrQixDQUFsQixJQUF3QkgsR0FBRyxDQUFDSSxNQUFKLElBQWMsR0FBZCxJQUFxQkosR0FBRyxDQUFDSSxNQUFKLEdBQWEsR0FBOUQsRUFBb0U7QUFDaEUsWUFBSWEsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV25CLEdBQUcsQ0FBQ00sWUFBZixDQUFYOztBQUNBLFlBQUlQLEVBQUosRUFBUTtBQUNKQSxVQUFBQSxFQUFFLENBQUNrQixJQUFELENBQUY7QUFDSDtBQUVKO0FBQ0osS0FSRDs7QUFVQWpCLElBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTVSxJQUFJLENBQUNFLFNBQUwsQ0FBZVYsSUFBZixDQUFUO0FBQ0gsR0EvQmEsQ0FnQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdENjLENBQWxCO0FBd0NBVyxNQUFNLENBQUNDLE9BQVAsR0FBaUIxQixXQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEh0dHBIYW5kbGVyID0ge1xuICAgIGdldCh1cmwgLCBjYil7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH0sXG4gICAgcG9zdCh1cmwgLCBkYXRhICwgY2Ipe1xuICAgICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCIpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XG4gICAgICAgICAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgICAgICBjYihqc29uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gICAgLy8gKHVzZXJfbmFtZSwgcGFzc3dvcmQsIGNhbGxiYWNrKXtcbiAgICAvLyAgICAgdmFyIGRhdGEgPSB7XG4gICAgLy8gICAgICAgICBcInVuXCI6IHVzZXJfbmFtZSxcbiAgICAvLyAgICAgICAgIFwicHdkXCI6IHBhc3N3b3JkXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5wb3N0KENvbmZpZy5VUkwrXCJhdXRoZW5cIixkYXRhLGNhbGxiYWNrKTtcbiAgICAvLyB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBIdHRwSGFuZGxlcjsiXX0=