import { getProfesori, setProfesori } from "./data/profesori";
import { getPredmeti, setPredmeti } from "./data/predmeti";
import { getCasovi, setCasovi } from "./data/casovi";
import readXlsxFile from "read-excel-file";
import { generateTable } from "./table";
import { clearLocalStorage, saveToLocalStorage, getRaspored, setRaspored } from "./storage";

export var raspored = {};

var offset_x = 5;
var offset_y = 3;

const loadButton = document.getElementById("button-load");
const inputFile = document.getElementById("input-file");
const inputOdeljenje = document.getElementById("input-odeljenje");

var odeljenje = "4/6";
export function getOdeljenje() {
	return odeljenje;
}

inputOdeljenje.addEventListener("change", () => {
	odeljenje = inputOdeljenje.value;

	generateRaspored(inputOdeljenje.value);
	generateTable();
});

inputFile.addEventListener("change", () => {
	readXlsxFile(inputFile.files[0]).then((rows) => {
		clearLocalStorage();
		generateCasovi(rows);
		generateRaspored();
		generateTable();
	});
});

export function generateCasovi(rows) {
	var r = rows.length;
	var c = rows[0].length;

	var profesori = Array(r).fill("");
	var predmeti = Array(r).fill("");
	var casovi = {};

	console.log(profesori);
	console.log(predmeti);

	for (var i = 0; i < r; i++) {
		for (var j = 0; j < c; j++) {
			var val = rows[i][j];
			var isNull = val == null;
			if (!isNull) {
				if (j == 1) {
					// ime
					profesori[i] = val;
				}
				if (j == 2) {
					// prezime
					profesori[i] += " ";
					profesori[i] += val;
				}
				if (j == 3) {
					// predmet
					predmeti[i] = val;
				}
				if (i >= offset_y && j >= offset_x && j < offset_x + 5 * 14) {
					if (val != "ДЕЖ.") {
						//console.log(i, j);
						//console.log(val);
						val = val.split("/");
						val[1] = val[1].split(",");
						console.log(val);
						//val[1] = [list(el) for el in val[1]];

						for (var el of val[1]) {
							var mod = "";
							el = el.replace(" ", "")[0];
							var odeljenje = val[0] + "/" + el;

							if (odeljenje in casovi) {
								casovi[odeljenje].push([i, j]);
							} else {
								casovi[odeljenje] = [[i, j]];
							}
						}
					}
				}
			}
		}
	}

	setPredmeti(predmeti);
	setProfesori(profesori);
	setCasovi(casovi);
}

export function generateRaspored(odeljenje = "4/6") {
	saveToLocalStorage();

	raspored = {};
	const cacheRaspored = getRaspored(odeljenje);
	if (cacheRaspored != null) {
		raspored = cacheRaspored;
		return;
	}

	const casovi = getCasovi();
	const predmeti = getPredmeti();
	const profesori = getProfesori();

	if (!(odeljenje in casovi)) {
		return;
	}

	const value = casovi[odeljenje];

	value.forEach((cas) => {
		const i = cas[0];
		const j = cas[1] - offset_x;
		const dan = Math.floor(j / 14) + 1;
		var brojCasa = (j % 14) + 1;

		let profesor = profesori[i];
		let predmet = predmeti[i];

		if (!(brojCasa in raspored)) {
			raspored[brojCasa] = {};
		}

		if (dan in raspored[brojCasa]) {
			raspored[brojCasa][dan].push([predmet, profesor, ""]);
		} else {
			raspored[brojCasa][dan] = [[predmet, profesor, ""]];
		}
	});

	setRaspored(odeljenje, raspored);
}
