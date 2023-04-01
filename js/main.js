const dataPrices = {
	typesOfEvaluations: [
		{type: "iluminacion", cost: 1500},
		{type: "ruido", cost: 1700},
		{type: "ergonomia", cost: 2000},
	],
	ubicationCompany: [
		{
			ubication: "caba",
			prices: {
				priceA: 200,
				priceB: 450,
				priceC: 900,
			},
		},
		{
			ubication: "gran buenos aires",
			prices: {
				priceA: 300,
				priceB: 550,
				priceC: 1000,
			},
		},
	],
};
async function init(e) {
	e.preventDefault();
	const dolarBlue = await fetch("https://criptoya.com/api/dolar")
		.then((res) => res.json())
		.then((res) => {
			return res.oficial;
		});
	let ubicationCompany;
	let typeOfEvaluation;
	let numberOfJobs = document.getElementById("numberOfJobs").value;
	if (numberOfJobs) {
		ubicationCompany = document.getElementById("ubicationCompany").value;
	}
	if (ubicationCompany) {
		typeOfEvaluation = document.getElementById("typeOfEvaluation").value;
	}
	const total =
		calcCostTotal(dataPrices, numberOfJobs, ubicationCompany, typeOfEvaluation) * dolarBlue;
	if (total) {
		Swal.fire({
			icon: "success",
			text: `Gracias por completar el presupuesto, a la brevedad se comunicara un asistente. Su total es $${total}`,
		});
	} else {
		console.log("Por favor ingrese los datos.");
	}
}

function calcPositionAndUbication(data, numberOfJobs, ubicationCompany) {
	let resultado;
	while (ubicationCompany == data.ubicationCompany[0].ubication) {
		if (numberOfJobs <= 5) {
			resultado = data.ubicationCompany[0].prices.priceA;
		} else if (numberOfJobs > 5 && numberOfJobs <= 10) {
			resultado = data.ubicationCompany[0].prices.priceB;
		} else if (numberOfJobs > 10 && numberOfJobs <= 20) {
			resultado = data.ubicationCompany[0].prices.priceC;
		} else {
			resultado = "Lo siento, mas de 20 puestos excede nuestro limite actual de evaluaciones";
		}
		return resultado;
	}
	while (ubicationCompany == data.ubicationCompany[1].ubication) {
		if (numberOfJobs <= 5) {
			resultado = data.ubicationCompany[1].prices.priceA;
		} else if (numberOfJobs > 5 && numberOfJobs <= 10) {
			resultado = data.ubicationCompany[1].prices.priceB;
		} else if (numberOfJobs > 10 && numberOfJobs <= 20) {
			resultado = data.ubicationCompany[1].prices.priceC;
		} else {
			resultado = "Lo siento, mas de 20 puestos excede nuestro limite actual de evaluaciones";
		}
		return resultado;
	}
}

function calcCostTotal(data, numberOfJobs, ubicationCompany, typeOfEvaluation) {
	let costo = calcPositionAndUbication(data, numberOfJobs, ubicationCompany);
	let resultado;

	if (typeOfEvaluation) {
		switch (typeOfEvaluation) {
			case "ergonomia":
				resultado = costo + 2000;
				break;
			case "iluminacion":
				resultado = costo + 1500;
				break;
			case "ruido":
				resultado = costo + 1700;
				break;
			default:
				console.log("Lo siento, no contamos actualmente con ese tipo de evaluacion");
		}
	}
	return resultado;
}
document.getElementById("formulary").addEventListener("submit", init);

//LOCAL STORAGE & JSON
// Guardar datos
localStorage.setItem("ruidoEvaluation", "ruido");
localStorage.setItem("iluminacionEvaluation", "iluminacion");
localStorage.setItem("evaluacionErgonomica", "ergonomia");

// Obtener datos
let prueba = localStorage.getItem("ruidoEvaluation");
console.log(prueba);

// Modificar datos
localStorage.setItem("ruidoEvaluation", "sonidos");

// Borrar datos
localStorage.removeItem("ruidoEvaluation");

//CRUD --> Create Read Update Delete
//sessionStorage.setItem("fecha", new Date());

for (let i = 0; i < localStorage.length; i += 1) {
	let clave = localStorage.key(i); // CLAVES
	console.log("Clave: " + clave);
	console.log("Valor: " + localStorage.getItem(clave));
}
