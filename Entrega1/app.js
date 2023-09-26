function comenzarEjercicio() {
  let number = parseInt(prompt("Ingresa un número"));
  if (number === "" || isNaN(number)) {
    alert("El valor ingresado no es válido");
  } else {
    for (i = 1; i <= 10; i++) {
      let result = number * i;
      console.log(`
      ${number} X ${i} = ${result} 
      
    `);
    }
  }
  console.log("_______________________________");
}

function reset() {
  location.reload();
}
