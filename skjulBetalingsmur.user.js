// ==UserScript==
// @name         Skjul VG+
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Skjul artikler på VG som krever VG+
// @match        https://www.vg.no/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function skjulBetalingsmur() {
        // Sjekk om hver article-container, inneholder en div med class "type-icon pluss-icon"
        document.querySelectorAll('article.is-paywalled, article.personalized--pluss').forEach(article => {
            article.remove();
        });
    }

    // Kjør ved innlasting
    skjulBetalingsmur();

    // Kjør igjen for artikler som laster inn underveis
    const observer = new MutationObserver(skjulBetalingsmur);
    observer.observe(document.body, { childList: true, subtree: true });

})();
