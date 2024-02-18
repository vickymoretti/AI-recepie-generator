function displayRecepie(response) {}

function generateRecepie(event) {
	event.preventDefault();

	let apiKey = "t7208a38bb3e0eaafeo46762934523cb";
	let prompt = "Give me a simple and quick recepie for cooking";
	let context = "Make sure to provide a clear, short and precise answer";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	axios.get(apiUrl).then(displayRecepie);

	new Typewriter("#recepie", {
		strings: "The new recepie is loading..",
		autoStart: true,
		delay: 30,
		cursor: "",
	});
}

let recepieElement = document.querySelector("#recepie-generator-form");
recepieElement.addEventListener("submit", generateRecepie);
