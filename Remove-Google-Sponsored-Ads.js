// ==UserScript==
// @name         Remove Google Sponsored Ads
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  disable various tracking tools, ads from google
// @author       You
// @match        https://www.google.com/*
// ==/UserScript==

(function() {
    'use strict';
    // removes ads from Google
    Array.from(document.getElementById('center_col').children).forEach(elem => {
        const containsAds = elem.querySelectorAll('[data-text-ad]').length > 0;
        containsAds && elem.remove();
    });
})();
