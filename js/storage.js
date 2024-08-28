import { setProfesori, getProfesori } from "./data/profesori";
import { setPredmeti, getPredmeti } from "./data/predmeti";
import { setCasovi, getCasovi } from "./data/casovi";

export function loadFromLocalStorage() {
	const profesori = JSON.parse(localStorage.getItem("profesori"));
	const predmeti = JSON.parse(localStorage.getItem("predmeti"));
	const casovi = JSON.parse(localStorage.getItem("casovi"));

	if (profesori != null) setProfesori(profesori);
	if (predmeti != null) setPredmeti(predmeti);
	if (casovi != null) setCasovi(casovi);
}

export function saveToLocalStorage() {
	localStorage.setItem("profesori", JSON.stringify(getProfesori()));
	localStorage.setItem("predmeti", JSON.stringify(getPredmeti()));
	localStorage.setItem("casovi", JSON.stringify(getCasovi()));
}

export function clearLocalStorage() {
	const cachedColors = getColors();
	localStorage.clear();
	setColors(cachedColors);
}

export function setColors(colors) {
	localStorage.setItem("colors", JSON.stringify(colors));
}

export function getColors() {
	return JSON.parse(localStorage.getItem("colors"));
}

export function getRaspored(odeljenje) {
	return JSON.parse(localStorage.getItem("raspored-" + odeljenje));
}

export function setRaspored(odeljenje, raspored) {
	localStorage.setItem("raspored-" + odeljenje, JSON.stringify(raspored));
}
