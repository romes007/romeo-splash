var links = document.getElementsByClassName('link');
var wrapper = document.getElementById('wrapper');

function changeHover(flag) {
		 if (flag) {
			wrapper.className = "hover";
		 } else {
			wrapper.className = "";
		 }
}

for(var i = 0; i < links.length; i ++) {
    links[i].onmouseover = function() {
        changeHover(true);
    };
    links[i].onmouseout = function() {
        changeHover(false);
    };
}
