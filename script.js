//tiny script file to automatically do things to every article

//set inline delimeters for mathjax
MathJax = {
	tex: {
		inlineMath: [['$', '$']]
	}
};

let prefix = "../";

try {
	if (isMainPage) prefix = "";
} catch(e) {}

//css
add_head_link("stylesheet", prefix+"styles.css");
add_head_link("icon", "icon.png");

//helper functions
function add_script(url) {
	let script = document.body.appendChild(document.createElement("script"));
	script.setAttribute("async", "");
	script.setAttribute("src", url);
}

function add_head_link(rel, href) {
	let link = document.head.appendChild(document.createElement("link"));
	link.setAttribute("rel", rel);
	link.setAttribute("href", href);
}

//load mathjax
add_script("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js");

String.prototype.hashCode=function(){for(var t=0,r=0;r<this.length;r++)t=(t<<5)-t+this.charCodeAt(r),t|=0;return t};

document.querySelector("head").appendChild(document.createElement("title")).innerText = document.querySelector("h1").innerText;

for (let a of document.querySelectorAll("a")) {
	a.setAttribute("target", "_blank");
	if (a.getAttribute("href").includes("wikipedia.org")) {
		let img = document.createElement("img");
		img.setAttribute("src", "https://wikipedia.org/static/favicon/wikipedia.ico");
		img.setAttribute("class", "website-icon");
		a.appendChild(img);
	}
}

if (prefix != "" && false) {
	document.querySelector("body").insertBefore(document.createElement("a"), document.querySelector("h1"));
	document.querySelector("a").innerText = "see other posts";
	document.querySelector("a").setAttribute("href", "../");
	document.querySelector("a").style.textAlign = "right";
	document.querySelector("a").style.display = "block";
}




try {if (isMainPage) {} } catch(e) {
	let a = document.createElement("a");
	document.body.insertBefore(a, document.body.firstChild);
	a.innerText = "blog homepage";
	a.setAttribute("nobefore", "true");
	a.setAttribute("href", "../");
}

let modalOpen = null;
function hiModal(el) {
	if (el.getAttribute("transitionbusy") == "true") return;
	modalOpen = el;
	el.style.animation = "0.5s modal-in";
	el.style.display = "block";
	el.setAttribute("transitionbusy", "true");
	setTimeout(function() {
		el.setAttribute("transitionbusy", "false");
	}, 500)
}
function byeModal(el) {
	if (el.getAttribute("transitionbusy") == "true") return;
	modalOpen = null;
	el.style.animation = "0.5s modal-out";
	el.setAttribute("transitionbusy", "true");
	setTimeout(function() {
		el.setAttribute("transitionbusy", "false");
		el.style.display = "none";
	}, 500)
}