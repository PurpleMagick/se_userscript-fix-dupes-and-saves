// ==UserScript==
// @name            Fix: dupe vote saves
// @author          VLAZ
// @description     A temporary patch for an issue where close voting as a duplicate will some times also add the target as a Save
// @grant           none
// @inject-into     page
// @match           https://stackoverflow.com/*
// @match           https://serverfault.com/*
// @match           https://superuser.com/*
// @match           https://*.stackexchange.com/*
// @match           https://askubuntu.com/*
// @match           https://stackapps.com/*
// @match           https://mathoverflow.net/*
// @match           https://pt.stackoverflow.com/*
// @match           https://ja.stackoverflow.com/*
// @match           https://ru.stackoverflow.com/*
// @match           https://es.stackoverflow.com/*
// @match           https://meta.stackoverflow.com/*
// @match           https://meta.serverfault.com/*
// @match           https://meta.superuser.com/*
// @match           https://meta.askubuntu.com/*
// @match           https://meta.mathoverflow.net/*
// @match           https://pt.meta.stackoverflow.com/*
// @match           https://ja.meta.stackoverflow.com/*
// @match           https://ru.meta.stackoverflow.com/*
// @match           https://es.meta.stackoverflow.com/*
// @namespace       https://github.com/PurpleMagick/
// @run-at          document-end
// @version         1.0.0
// ==/UserScript==
(() => {
	function fix() {
		document.querySelectorAll("button.js-saves-btn:not([type])")
			.forEach(el => el.setAttribute("type", "button"));
	}

	$(document).ajaxComplete(fix);
	fix();
})();
