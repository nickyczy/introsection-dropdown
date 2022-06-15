function myFunction() {
	document.getElementById("dropdownFeatures").classList.toggle("show");
}

function company() {
	document.getElementById("dropdownCompany").classList.toggle("show");
}

window.onclick = function (e) {
	if (!e.target.matches(".dropbtn")) {
		let dropdowns = document.getElementsByClassName("dropdown__content");
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};
