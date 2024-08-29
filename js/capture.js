import html2canvas from "html2canvas";

const chooseFileButton = document.getElementById("input-file-button");

chooseFileButton.onclick = () => {
	document.getElementById("input-file").click();
};

export function capture() {
	html2canvas(document.querySelector("#capture"), {
		scale: 2,
	}).then((canvas) => {
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png");
		link.download = "raspored-casova.png";
		link.click();
	});
}

const captureButton = document.getElementById("capture-button");

captureButton.onclick = () => {
	capture();
};
