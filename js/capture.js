import html2canvas from "html2canvas";
import { setHeader, SetHeaderVisible } from "./header";
import { generateTable } from "./table";

const chooseFileButton = document.getElementById("input-file-button");

chooseFileButton.onclick = () => {
	document.getElementById("input-file").click();
};

export function capture(id = "") {
	html2canvas(document.querySelector("#capture"), {
		scale: 2,
	}).then((canvas) => {
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/jpeg");
		link.download = "raspored-casova" + id + ".jpeg";
		link.click();
	});
}

const captureButton = document.getElementById("capture-button");

captureButton.onclick = () => {
	setHeader("");
	generateTable();
	SetHeaderVisible(false);
	capture("-oba-bez");

	SetHeaderVisible(true);
	capture("-oba");

	setHeader("A");
	generateTable();
	SetHeaderVisible(false);
	capture("-a-bez");

	SetHeaderVisible(true);
	capture("-a");

	setHeader("B");
	generateTable();
	SetHeaderVisible(false);
	capture("-b-bez");

	SetHeaderVisible(true);
	capture("-b");
};
