function displayRecepie(response) {
	console.log("recepie generated.");
	new Typewriter("#recepie", {
		strings: response.data.answer,
		autoStart: true,
		delay: 30,
		cursor: "",
	});
}

function generateRecepie(event) {
	event.preventDefault();

	let userInstructions = document.querySelector("#user-instructions");
	let apiKey = "t7208a38bb3e0eaafeo46762934523cb";
	let prompt = `Give me a simple and quick recepie with less than 20 minutes of preparation cooking using ${userInstructions.value} as the main ingredient of the recepie`;
	let context =
		"You are a very good chef and know many recepies. Provide a recepie with no more than 7 ingredientes using basic HTML and in a <li> format less. Make sure to use the user's input and provide a clear, short and precise answer. make sure to have a title ";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	console.log("generating recepie..");
	console.log(`${prompt}`);
	console.log(`${context}`);

	axios.get(apiUrl).then(displayRecepie);
}

let recepieElement = document.querySelector("#recepie-generator-form");
recepieElement.addEventListener("submit", generateRecepie);
