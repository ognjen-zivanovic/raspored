var headerTextColors = {
	"": "white",
	A: "white",
	B: "white",
};

var headerNames = {
	"": "Obe grupe",
	A: "Група A",
	B: "Група B",
};

var headerBgColors = {
	"": "#d3d3d3",
	A: "#003fff",
	B: "#ff4343",
};

const rootHeader = document.getElementById("root-header");

export var filterValue = "";

const checkboxHeader = document.getElementById("checkbox-header-tabele");
checkboxHeader.onclick = () => {
	if (checkboxHeader.checked) {
		rootHeader.style.display = "";
	} else {
		rootHeader.style.display = "none";
	}
};

export function setHeader(c) {
	filterValue = c;

	var s = c == "" ? "oba" : c.toLowerCase();

	rootHeader.style.color = "var(--header-text-color-" + s + ")";
	rootHeader.style.backgroundColor = "var(--header-background-color-" + s + ")";

	rootHeader.innerHTML = headerNames[c];
}
