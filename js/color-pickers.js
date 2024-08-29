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

var defaultColors = [
	["--header-color-oba", "#ffffff", "#d3d3d3", "Obe grupe header"],
	["--header-color-a", "#ffffff", "#003fff", "Grupa A header"],
	["--header-color-b", "#ffffff", "#ff4343", "Grupa B header"],

	["--odd-cells-color", "#000000", "#fff2cb", "Boja 1"],
	["--even-cells-color", "#000000", "#ffffff", "Boja 2"],

	["--header-days-color", "#000000", "#ffc000", "Dani"],
];

var colors = defaultColors;

export function loadColors() {
	const cachedColors = getColors();
	if (cachedColors != null) {
		colors = cachedColors;
	}

	for (let i = 0; i < colors.length; i++) {
		const cssName = colors[i][0];
		const colorValueText = colors[i][1];
		const colorValueBg = colors[i][2];

		document.documentElement.style.setProperty(cssName, colorValueText);
		document.documentElement.style.setProperty(cssName + "-bg", colorValueBg);
	}
}

function addColorPicker(color, index) {
	const cssName = color[0];
	const colorValueText = color[1];
	const colorValueBg = color[2];
	const colorText = color[3];

	const pickerName = "picker " + index;

	const colorContainer = document.createElement("div");
	colorContainer.className = "color-container";

	const colorLabel = document.createElement("label");
	colorLabel.innerHTML = colorText;
	colorLabel.style.fontSize = "15px";
	colorLabel.style.flexGrow = "1";
	colorLabel.htmlFor = pickerName;

	const colorInputText = document.createElement("input");
	colorInputText.type = "color";
	colorInputText.id = pickerName;
	colorInputText.name = pickerName;
	colorInputText.value = colorValueText;
	colorInputText.className = "color-input";
	colorInputText.onchange = () => {
		document.documentElement.style.setProperty(cssName, colorInputText.value);
		color[1] = colorInputText.value;
		setColors(colors);
	};

	const colorInputBg = document.createElement("input");
	colorInputBg.type = "color";
	colorInputBg.id = pickerName + "-bg";
	colorInputBg.name = pickerName + "-bg";
	colorInputBg.value = colorValueBg;
	colorInputBg.className = "color-input";
	colorInputBg.onchange = () => {
		document.documentElement.style.setProperty(cssName + "-bg", colorInputBg.value);
		color[2] = colorInputBg.value;
		setColors(colors);
	};

	colorContainer.appendChild(colorLabel);
	colorContainer.appendChild(colorInputText);
	colorContainer.appendChild(colorInputBg);

	colorPickers.appendChild(colorContainer);
}

function addClearColorsButton() {
	const clearColorsButton = document.createElement("button");

	clearColorsButton.innerHTML = "Resetuj boje";
	clearColorsButton.id = "reset-colors-button";
	clearColorsButton.onclick = () => {
		colors = defaultColors;
		setColors(colors);
		location.reload();
	};

	colorPickers.appendChild(clearColorsButton);
}

export function addColorPickers() {
	colors.forEach((color, index) => {
		addColorPicker(color, index);
	});

	addClearColorsButton();
}
