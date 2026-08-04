const monElement = document.getElementById("arrow-up");

window.addEventListener("scroll", function () {

	if (window.scrollY >= 600) {
		monElement.classList.add("show");
	} else {
		monElement.classList.remove("show");
	}
});
