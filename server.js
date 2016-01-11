(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
var fs = require("fs");
var Server = (function () {
    function Server() {
        console.log("hey");
        console.log("fs", fs);
    }
    return Server;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new Server();

},{"fs":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvZ3J1bnQtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9saWIvX2VtcHR5LmpzIiwic3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBLGtEQUFrRDtBQUNsRCx3REFBd0Q7QUFFeEQsSUFBWSxFQUFFLFdBQU0sSUFBSSxDQUFDLENBQUE7QUFTekI7SUFFSTtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFTM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFNbEIsQ0FBQztJQUdMLGFBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBRUQ7a0JBQWUsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLG51bGwsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL25vZGUvbm9kZS5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2V4cHJlc3MvZXhwcmVzcy5kLnRzXCIgLz5cblxuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbi8qKlxuICogVE9ETzogWVVJRG9jX2NvbW1lbnRcbiAqXG4gKiBAY2xhc3MgU2VydmVyXG4gKiBAY29uc3RydWN0b3JcbiAqKi9cbmNsYXNzIFNlcnZlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJoZXlcIik7XG5cbiAgICAgICAgLy9mcy53cml0ZUZpbGUoXCIvdG1wL3Rlc3RcIiwgXCJIZXkgdGhlcmUhXCIsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyAgICBpZihlcnIpIHtcbiAgICAgICAgLy8gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiVGhlIGZpbGUgd2FzIHNhdmVkIVwiKTtcbiAgICAgICAgLy99KTtcbmNvbnNvbGUubG9nKFwiZnNcIiwgZnMpO1xuXG4gICAgICAgIC8vZnMud3JpdGVGaWxlKCdtZXNzYWdlLnR4dCcsICdIZWxsbyBOb2RlLmpzJywgKGVycikgPT4ge1xuICAgICAgICAvLyAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCdJdFxcJ3Mgc2F2ZWQhJyk7XG4gICAgICAgIC8vfSk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFNlcnZlcigpO1xuIl19
