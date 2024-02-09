function generateRecepie(event) {
	event.preventDefault();

	alert("tuvieja");
}

let recepieFormElement = document.querySelector("#recepie-generator-form");
recepieFormElement.addEventListener("submit", generateRecepie);
alert("tesy");
