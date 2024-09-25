// ==UserScript==
// @name         RinbowID Blocker
// @namespace    https://github.com/IamAbler/RinbowIDBlocker
// @version      0.1
// @description  Replace the rainbow ID style with the default ID style on a specific website.
// @match        *://azusa.wiki/*
// @grant        none
// ==/UserScript==

(function() {
    window.addEventListener('load', function() {
        const rainbowClasses = ['rainbow-default', 'rainbow-2', 'rainbow-cat'];
        rainbowClasses.forEach(className => {
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(el => {
                const textNode = document.createTextNode(el.textContent);
                el.parentNode.replaceChild(textNode, el);
            });
        });
    });
})();