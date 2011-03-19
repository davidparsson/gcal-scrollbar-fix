var gGalScrollbarFixStyle = document.createElement('style');
gGalScrollbarFixStyle.innerText = "object[type=\'application/x-googlegears\'] { position: absolute; };";
document.documentElement.insertBefore(gGalScrollbarFixStyle, null);
