const mobile_menu = document.querySelector(".mobile-menu");
const nav_list = document.querySelector(".nav-list");
mobile_menu === null || mobile_menu === void 0 ? void 0 : mobile_menu.addEventListener("click", active);
mobile_menu === null || mobile_menu === void 0 ? void 0 : mobile_menu.addEventListener("touchstart", active);

function active(event) {
	if (event.type === "touchstart")
		event.preventDefault();
	event.stopPropagation();
	nav_list === null || nav_list === void 0 ? void 0 : nav_list.classList.toggle("active");
	clickOutside(nav_list, function () {
		nav_list === null || nav_list === void 0 ? void 0 : nav_list.classList.remove("active");
	});
}

function clickOutside(target, callback) {
	const html = document.documentElement;

	function htmlClick(event) {
		if (!(target === null || target === void 0 ? void 0 : target.contains(event.target))) {
			html.removeAttribute("target");
			html.removeEventListener("click", htmlClick);
			html.removeEventListener("touchstart", htmlClick);
			callback();
		}
	}
	if (!(target === null || target === void 0 ? void 0 : target.hasAttribute("target"))) {
		html === null || html === void 0 ? void 0 : html.setAttribute("target", "");
		html.addEventListener("click", htmlClick);
		html.addEventListener("touchstart", htmlClick);
	}
}