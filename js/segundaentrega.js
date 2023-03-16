class Cotizacion {
	constructor(ubicationCompany, numberOfJobs, typeOfEvaluation) {
		this.ubicationCompany = ubicationCompany;
		this.numberOfJobs = numberOfJobs;
		this.typeOfEvaluation = typeOfEvaluation;
		this.price = 0;
	}

	calcular() {
		if (this.ubicationCompany == "gran buenos aires") {
			if (numberOfJobs < 100) this.price = 2000 * 1.05;
		} else if (this.ubicationCompany == "caba") {
			this.price = 2000;
		}
	}
}

const cliente1 = new Cotizacion("Argentina", 15, "Evaluacion de Ruido");
console.log(cliente1.numberOfJobs);
