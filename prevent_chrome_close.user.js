// ==UserScript==
// @name        Prevent Close Window - 47.116.122.33
// @namespace   Violentmonkey Scripts
// @match       http://47.116.122.33/*
// @grant       none
// @version     1.0
// @author      -
// @description 12/6/2023, 3:03:24 PM
// ==/UserScript==


(function() {
    'use strict';
    window.addEventListener('beforeunload', function (e) {
      console.log('plugin', e)
        e.preventDefault();
        // Chrome requires returnValue to be set
        alert('关闭？')
        e.returnValue = '';
    });

})();

