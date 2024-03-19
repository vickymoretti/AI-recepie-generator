function displayRecepie(response) {
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
		"You are a very good chef and know many recepies. Provide first the ingredients in a <li> formt and then the recepie with no more than 7 ingredientes using basic HTML and in a <li> format. Make sure to use the user's input and provide a clear, short and precise answer. Make sure to have a title and EXPLAIN the process in a <li> format.";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let recepieElement = document.querySelector("#recepie");
	recepieElement.classList.remove("hidden");
	recepieElement.innerHTML = `<div class="generating"> ⌛ Generating a recepie about ${userInstructions.value}..</div>`;

	axios.get(apiUrl).then(displayRecepie);
}

let recepieElement = document.querySelector("#recepie-generator-form");
recepieElement.addEventListener("submit", generateRecepie);
