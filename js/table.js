import { setHeader, filterValue } from "./header";
import { resetInfoContainers, showInfo } from "./infoContainers";
import { getOdeljenje, raspored } from "./raspored";
import { setRaspored } from "./storage";

const table = document.getElementById("table");
const checkbox = document.getElementById("checkbox-imena-profesora");
checkbox.onclick = () => {
	generateTable();
};

function getValue(cas) {
	var s = cas[0];
	if (checkbox.checked) {
		s += " - " + cas[1] + "<br>";
	} else {
		s += "<br>";
	}
	return s;
}

function resetTable() {
	table.innerHTML = "";
}

export function generateTable() {
	const odeljenje = getOdeljenje();
	setRaspored(odeljenje, raspored);

	document.getElementById("r-obe").onclick = () => {
		setHeader("");
		generateTable();
	};
	document.getElementById("r-1").onclick = () => {
		setHeader("A");
		generateTable();
	};
	document.getElementById("r-2").onclick = () => {
		setHeader("B");
		generateTable();
	};

	resetTable();

	for (let i = 0; i <= 14; i++) {
		if (!(i in raspored)) {
			continue;
		}
		const row = document.createElement("tr");
		table.appendChild(row);

		const numberCell = row.insertCell();
		const brojCasa = i <= 7 ? i : i - 7;
		numberCell.innerHTML = brojCasa;

		for (let j = 1; j <= 5; j++) {
			const cell = row.insertCell();
			const casovi = raspored[i][j];
			if (casovi !== undefined) {
				cell.addEventListener("click", () => {
					resetInfoContainers();
				});
				casovi.forEach((cas, index) => {
					if (cas[2] != "" && filterValue != "" && filterValue != cas[2]) {
						return;
					}

					cell.innerHTML += getValue(cas);

					cell.addEventListener("click", () => {
						showInfo(cas, index, casovi);
					});
				});
			}
		}
	}
}
