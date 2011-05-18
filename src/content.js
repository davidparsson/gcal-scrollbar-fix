function appendGCalScrollFix() {
	var css = document.createElement('style');
	css.type = 'text/css';

	css.innerText = "object[type=\'application/x-googlegears\'] { position: absolute; };";

	document.getElementsByTagName("head")[0].appendChild(gGalScrollbarFixStyle, null);
}

window.onload = appendGCalScrollFix;
