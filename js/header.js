var headerNames = {
	"": "Obe grupe",
	A: "Група A",
	B: "Група B",
};

const rootHeader = document.getElementById("root-header");

export var filterValue = "";

const checkboxHeader = document.getElementById("checkbox-header-tabele");
checkboxHeader.onclick = () => {
	if (checkboxHeader.checked) {
		SetHeaderVisible(true);
	} else {
		SetHeaderVisible(false);
	}
};

export function SetHeaderVisible(show) {
	if (show) {
		rootHeader.style.display = "";
	} else {
		rootHeader.style.display = "none";
	}
}

export function setHeader(c) {
	filterValue = c;

	var s = c == "" ? "oba" : c.toLowerCase();

	rootHeader.style.color = "var(--header-color-" + s + ")";
	rootHeader.style.backgroundColor = "var(--header-color-" + s + "-bg)";

	rootHeader.innerHTML = headerNames[c];
}
