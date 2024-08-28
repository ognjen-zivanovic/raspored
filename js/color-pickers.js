import { getColors, setColors } from "./storage";

const colorPickers = document.getElementById("color-pickers");

// stolen from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

var colors = [
	["--header-background-color-oba", "#d3d3d3", "Obe grupe header pozadina"],
	["--header-text-color-oba", "#ffffff", "Obe grupe header tekst"],
	["--header-background-color-a", "#003fff", "Grupa A header pozadina"],
	["--header-text-color-a", "#ffffff", "Grupa A header tekst"],
	["--header-background-color-b", "#ff4343", "Grupa B header pozadina"],
	["--header-text-color-b", "#ffffff", "Grupa B header tekst"],

	["--header-days-background-color", "#ffc000", "Dani pozadina"],

	["--odd-cells-background-color", "#fff2cb", "Boja 1"],
	["--even-cells-background-color", "#ffffff", "Boja 2"],
];

export function loadColors() {
	const cachedColors = getColors();
	if (cachedColors != null) {
		colors = cachedColors;
	}

	for (let i = 0; i < colors.length; i++) {
		const cssName = colors[i][0];
		const colorValue = colors[i][1];

		document.documentElement.style.setProperty(cssName, colorValue);
	}
}

function addColorPicker(color, index) {
	const cssName = color[0];
	const colorValue = color[1];
	const colorText = color[2];

	const pickerName = "picker " + index;

	const colorLabel = document.createElement("label");
	colorLabel.innerHTML = colorText;
	colorLabel.style.fontSize = "15px";
	colorLabel.htmlFor = pickerName;
	colorPickers.appendChild(colorLabel);

	const colorInput = document.createElement("input");
	colorInput.type = "color";
	colorInput.id = pickerName;
	colorInput.name = pickerName;
	colorInput.value = colorValue;
	colorInput.onchange = () => {
		document.documentElement.style.setProperty(cssName, colorInput.value);
		color[1] = colorInput.value;
		setColors(colors);
	};
	colorPickers.appendChild(colorInput);

	const lineBreak = document.createElement("br");
	colorPickers.appendChild(lineBreak);
}

export function addColorPickers() {
	colors.forEach((color, index) => {
		addColorPicker(color, index);
	});
}
