import { setHeader, filterValue } from "./header";
import { resetInfoContainers, showInfo } from "./infoContainers";
import { raspored } from "./raspored";

const table = document.getElementById("table");
const checkbox = document.getElementById("checkbox-1");
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
	document.getElementById("radio-obe-grupe").onclick = () => {
		setHeader("");
		generateTable();
	};
	document.getElementById("radio-prva-grupa").onclick = () => {
		setHeader("A");
		generateTable();
	};
	document.getElementById("radio-druga-grupa").onclick = () => {
		setHeader("B");
		generateTable();
	};

	resetTable();

	for (let i = 0; i <= 14; i++) {
		const row = document.createElement("tr");
		const numberCell = row.insertCell();
		const brojCasa = i <= 7 ? i : i - 7;
		numberCell.innerHTML = brojCasa;
		var exists = false;
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
						showInfo(cas, index);
					});
				});
				exists = true;
			}
			if (exists) {
				table.appendChild(row);
			}
		}
	}
}
