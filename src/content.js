var hideElement = document.createElement('style');
hideElement.innerText = "object[type=\'application/x-googlegears\'] { position: absolute; };";
document.documentElement.insertBefore(hideElement, null);
