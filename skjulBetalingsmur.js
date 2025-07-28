// ==UserScript==
// @name         Skjul VG+
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Skjul artikler på VG som krever VG+
// @match        https://www.vg.no/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function skjulBetalingsmur() {
        // Sjekk om hver article-container, inneholder en div med class "type-icon pluss-icon"
        document.querySelectorAll('.article-container').forEach(container => {
            if (container.querySelector('.type-icon.pluss-icon')) {
                container.style.display = 'none';
            }
        });
    }

    // Kjør ved innlasting
    skjulBetalingsmur();

    // Kjør igjen for artikler som laster inn underveis
    const observer = new MutationObserver(skjulBetalingsmur);
    observer.observe(document.body, { childList: true, subtree: true });

})();
