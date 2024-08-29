import { generateRaspored } from "./raspored";
import { generateTable } from "./table";
import { addColorPickers, loadColors } from "./color-pickers";
import { loadFromLocalStorage } from "./storage";

import "./capture";

function main() {
	loadColors();
	loadFromLocalStorage();

	generateRaspored();
	generateTable();
	addColorPickers();
}

main();
