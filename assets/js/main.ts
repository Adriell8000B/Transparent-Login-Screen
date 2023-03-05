const mobile_menu:HTMLButtonElement|null = document.querySelector(".mobile-menu")
const nav_list:HTMLUListElement|null = document.querySelector(".nav-list")

mobile_menu?.addEventListener("click", active)
mobile_menu?.addEventListener("touchstart", active)

function active(event:Event) {
	if(event.type === "touchstart") event.preventDefault()
	event.stopPropagation()
	nav_list?.classList.toggle("active")

	clickOutside(nav_list, () => {
		nav_list?.classList.remove("active")
	})
}

function clickOutside(target:HTMLUListElement|null, callback:Function) {
	const html = document.documentElement

	function htmlClick(event:any) {
		if(!target?.contains(event.target)) {
			html.removeAttribute("target")
			html.removeEventListener("click", htmlClick)
			html.removeEventListener("touchstart", htmlClick)
			callback()
		}
	}

	if(!target?.hasAttribute("target")) {
		html?.setAttribute("target", "")
		html.addEventListener("click", htmlClick)
		html.addEventListener("touchstart", htmlClick)
	}
}