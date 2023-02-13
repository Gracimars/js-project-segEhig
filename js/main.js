function init() {
  let ubicationCompany;
  let typeOfEvaluation;

  let numberOfJobs = prompt(
    'Ingrese el numero de puestos de trabajo que desea evaluar'
  );
  if (numberOfJobs) {
    ubicationCompany = prompt(
      '¿La empresa se encuentra en Gran Buenos Aires o en CABA?'
    ).toLowerCase();
  }

  if (ubicationCompany) {
    typeOfEvaluation = prompt(
      "Elige una de estas opciones : 'Evaluacion ergonomica', 'Evaluacion de iluminacion' 'Evaluacion de ruido'"
    ).toLowerCase();
  }

  const total = calcCostTotal(numberOfJobs, ubicationCompany, typeOfEvaluation);
  if (total) {
    alert(total);
  } else {
    alert('Por favor ingrese los datos.');
  }
}

function calcPositionAndUbication(numberOfJobs, ubicationCompany) {
  let resultado;
  while (ubicationCompany == 'caba') {
    if (numberOfJobs <= 5) {
      resultado = 200;
    } else if (numberOfJobs > 5 && numberOfJobs <= 10) {
      resultado = 450;
    } else if (numberOfJobs > 10 && numberOfJobs <= 20) {
      resultado = 900;
    } else {
      resultado =
        'Lo siento, mas de 20 puestos excede nuestro limite actual de evaluaciones';
    }
    return resultado;
  }
  while (ubicationCompany == 'gran buenos aires') {
    if (numberOfJobs <= 5) {
      resultado = 300;
    } else if (numberOfJobs > 5 && numberOfJobs <= 10) {
      resultado = 550;
    } else if (numberOfJobs > 10 && numberOfJobs <= 20) {
      resultado = 1000;
    } else {
      resultado =
        'Lo siento, mas de 20 puestos excede nuestro limite actual de evaluaciones';
    }
    return resultado;
  }
}

function calcCostTotal(numberOfJobs, ubicationCompany, typeOfEvaluation) {
  let costo = calcPositionAndUbication(numberOfJobs, ubicationCompany);
  let resultado;

  if (typeOfEvaluation) {
    switch (typeOfEvaluation) {
      case 'evaluacion ergonomica':
        resultado = costo + 2000;
        break;
      case 'evaluacion de iluminacion':
        resultado = costo + 1500;
        break;
      case 'evaluacion de ruido':
        resultado = costo + 1700;
        break;
      default:
        alert('Lo siento, no contamos actualmente con ese tipo de evaluacion');
    }
  }
  return resultado;
}
init()














