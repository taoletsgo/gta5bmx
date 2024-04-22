// ==UserScript==
// @name         Fix rockstar games jobs page
// @namespace    https://gta5bmx.me/
// @version      1.0.2845.0
// @description  rockstar should fix bmx
// @author       taoletsgo/chatGPT
// @match        https://socialclub.rockstargames.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Code by chatGPT 4.0
    let intervalTime = 1000; // ms

    const autoScroll = setInterval(() => {
        let rockstar;
        try {
            rockstar = document.querySelector('[class^="Search__container"]');
        } catch (error) {
            clearInterval(autoScroll);
            return;
        }

        let should;
        try {
            should = Object.keys(rockstar).find(k => k.startsWith('__reactProps'));
        } catch (error) {
            clearInterval(autoScroll);
            return;
        }

        const fix = rockstar[should].children;
        const bmx = (Array.isArray(fix) ? fix[0] : fix)._owner.stateNode;

        bmx.props.hasMore = true;
        bmx.forceUpdate();

        // stop when nothing found
        if (!bmx.props.hasMore) {
            clearInterval(autoScroll);
        }
    }, intervalTime);

})();
