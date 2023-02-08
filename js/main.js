let numberOfJobs = prompt("Ingrese el numero de puestos de trabajo que desea evaluar");
let ubicationCompany = prompt("¿La empresa se encuentra en Gran Buenos Aires o en CABA?");
let typeOfEvaluation = prompt("Elige una de estas opciones : 'Evaluacion ergonomica', 'Evaluacion de iluminacion' 'Evaluacion de ruido'");


function calcPositionAndUbication(numberOfJobs, ubicationCompany){
while(ubicationCompany=="CABA" ){

  if(numberOfJobs <= 5){
    return 200
  }else if(numberOfJobs > 5 && numberOfJobs <= 10){
    return 450
  }else if(numberOfJobs > 10 && numberOfJobs <= 20){
    return 900
  }else{
    alert("Lo siento, mas de 20 puestos excede nuestro limite actual de evaluaciones")
  }

}
while(ubicationCompany=="Gran Buenos Aires" ){
  if(numberOfJobs <= 5){
    return 300
  }else if(numberOfJobs > 5 && numberOfJobs <= 10){
    return 550
  }else if(numberOfJobs > 10 && numberOfJobs <= 20){
    return 1000
  }else{
    alert("Lo siento, mas de 20 puestos excede nuestro limite actual de evaluaciones")
  } 
}
}

function calcCostTotal(){
  let costo = calcPositionAndUbication(numberOfJobs, ubicationCompany)
  switch (typeOfEvaluation) {
    case 'Evaluacion ergonomica': 
    return costo + 2000;
    break;
    case 'Evaluacion de iluminacion': 
    return costo + 1500;
    break
    case 'Evaluacion de ruido': 
    return costo + 1700;
    break
    default:
    alert("Lo siento, no contamos actualmente con ese tipo de evaluacion");
  }
  
}
alert(calcCostTotal(numberOfJobs, ubicationCompany));















