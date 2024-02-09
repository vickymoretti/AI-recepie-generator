function generateRecepie(event) {
	event.preventDefault();

	let newRecepie = document.querySelector("#recepie");
	newRecepie.innerHTML = "hola";
}

let recepieElement = document.querySelector("#recepie-generator-form");
recepieElement.addEventListener("submit", generateRecepie);
