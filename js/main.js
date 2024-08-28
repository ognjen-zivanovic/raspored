import { generateRaspored } from "./raspored";
import { capture } from "./capture";
import { generateTable } from "./table";
import { addColorPickers, loadColors } from "./color-pickers";
import { loadFromLocalStorage } from "./storage";

function main() {
	loadColors();
	loadFromLocalStorage();

	generateRaspored();
	generateTable();
	addColorPickers();
}

main();
