import { generateTable } from "./table";

const infoContainers = document.getElementsByName("info-container");

function getInfoContainer(index) {
	const infoContainer = infoContainers[index];

	infoContainer.innerHTML = "";
	infoContainer.style.display = "flex";
	return infoContainer;
}

function addInput(infoContainer, cas, name, valueIndex) {
	const imeInput = document.createElement("input");
	imeInput.type = "text";
	imeInput.value = cas[valueIndex];
	imeInput.className = name;
	imeInput.onchange = () => {
		cas[valueIndex] = imeInput.value;
		generateTable();
	};
	infoContainer.appendChild(imeInput);
}

function getRadioContainer() {
	const radioContainer = document.createElement("div");
	radioContainer.className = "radio-container";
	return radioContainer;
}

function addRadios(infoContainer, cas, index) {
	const radioContainer = getRadioContainer();

	addRadio(cas, radioContainer, index, "radio-obe-grupe", "grupa-picker", "Obe grupe", "");

	addRadio(cas, radioContainer, index, "radio-prva-grupa", "grupa-picker", "A", "A");

	addRadio(cas, radioContainer, index, "radio-druga-grupa", "grupa-picker", "B", "B");

	infoContainer.appendChild(radioContainer);
}

function addRadio(cas, radioContainer, index, id, name, labelString, clickValue) {
	id += " " + index;
	name += " " + index;

	const radioObe = document.createElement("input");
	radioObe.type = "radio";
	radioObe.id = id;
	radioObe.name = name;
	radioObe.checked = cas[2] == clickValue;
	radioObe.onclick = () => {
		cas[2] = clickValue;
		generateTable();
	};

	const radioLabel = document.createElement("label");
	radioLabel.innerHTML = labelString;
	radioLabel.htmlFor = id;

	radioContainer.appendChild(radioObe);
	radioContainer.appendChild(radioLabel);
}

export function showInfo(cas, index, casovi) {
	console.log(index);
	const infoContainer = getInfoContainer(index);

	addInput(infoContainer, cas, "profesor-input", 1);
	addInput(infoContainer, cas, "predmet-input", 0);

	addRadios(infoContainer, cas, index);

	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.onclick = () => {
		casovi.splice(index, 1);
		console.log(casovi);
		generateTable();
		resetInfoContainers();
	};

	infoContainer.appendChild(deleteButton);
}

export function resetInfoContainers() {
	infoContainers.forEach((infoContainer) => {
		infoContainer.innerHTML = "";
		infoContainer.style.display = "none";
	});
}
