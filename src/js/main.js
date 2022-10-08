const navigation = document.getElementById("navigation");
const toggleMobileNavigation = document.getElementById("toggleMobileNavigation");

toggleMobileNavigation.addEventListener("change", function () {
	navigation.classList.toggle("opacity-0");
	navigation.classList.toggle("scale-0");
});
