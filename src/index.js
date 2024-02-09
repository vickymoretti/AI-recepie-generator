function generateRecepie(event) {
	event.preventDefault();

	new Typewriter("#recepie", {
		strings: ["The new recepie is loading.."],
		autoStart: true,
		Delay: 1,
		cursor: "",
	});
}

let recepieElement = document.querySelector("#recepie-generator-form");
recepieElement.addEventListener("submit", generateRecepie);
