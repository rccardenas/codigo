function validarComoIrAEstudiar(hora, dinero) {
  if (hora === "6:00 am") {
    // Me levante temprano. puedo tomar desayuno
    console.log("Tomo desayuno");
    if (dinero > 20) {
      console.log("Tomo colectivo");
    } else if (dinero > 10) {
      console.log("Tomo el corredor");
    } else {
      console.log("Tomo el chino");
    }
    console.log("Llego a estudiar");
  } else if (hora === "7:00 am") {
    console.log("NO Tomo desayuno");
    // Si tengo dinero
    if (dinero) {
      console.log("Tomo el corredor");
    }
    console.log("Llego a estudiar");
  } else {
    console.log("NO Tomo desayuno");
    console.log("Tomo colectivo");
    console.log("Llego a estudiar");
  }
}

console.log("Caso 1");
validarComoIrAEstudiar("6:00 am", 10);
console.log("Caso 2");
validarComoIrAEstudiar("6:00 am", 15);
console.log("Caso 3");
validarComoIrAEstudiar("8:00 am", 15);

function validarUsandoOperadores(username, password) {
  // && => and => y
  // || => or => o
  if (username === "rccardenas" && password === "123456") {
    console.log("Ingreso");
  } else {
    console.log("Datos inválidos")
  }

  if (username === "rccardenas" || password === "123456") {
    console.log("Ingreso 2")
  } else {
    console.log("Datos inválidos 2")
  }
}

validarUsandoOperadores("rccardenas1", "123456"); // Datos invalidos => or // Ingreso2
validarUsandoOperadores("rccardenas", "123456"); // Ingreso => or // Ingreso2
validarUsandoOperadores("rccardenas12", "12345"); // Datos invalidos // Datos invalidos2