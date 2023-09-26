let puntosUsuario = 0;
let puntosComputadora = 0;

let historialUsuaio = [];
let historialComputadora = [];

let iniciarJuego = () => {
  let opcionComputadora = Math.floor(Math.random() * 3);
  let opcionUsuario = prompt(`Elige:
      1- Piedra
      2- Papel
      3- Tijeras `);

  while ((puntosUsuario = 5 || (puntosComputadora = 5))) {
    let usuarioTexto;

    if (opcionUsuario !== null) {
      const opcionUsuarioNum = parseInt(opcionUsuario);

      if (opcionUsuarioNum >= 1 && opcionUsuarioNum <= 3) {
        if (opcionUsuarioNum === 1) {
          usuarioTexto = "Piedra";
        } else if (opcionUsuarioNum === 2) {
          usuarioTexto = "Papel";
        } else if (opcionUsuarioNum === 3) {
          usuarioTexto = "Tijeras";
        }
      } else {
        alert("Opción no válida. Por favor, elige 1, 2 o 3.");
        location.reload();
      }
    }

    if (opcionComputadora === 0) {
      opcionComputadora = "Piedra";
    } else if (opcionComputadora === 1) {
      opcionComputadora = "Papel";
    } else if (opcionComputadora === 2) {
      opcionComputadora = "Tijeras";
    }

    console.log("La computadora ha usado " + opcionComputadora);
    console.log("Usuario ha utilizado " + usuarioTexto);

    // Gana usuario
    if (
      (usuarioTexto === "Piedra" && opcionComputadora === "Tijeras") ||
      (usuarioTexto === "Papel" && opcionComputadora === "Piedra") ||
      (usuarioTexto === "Tijeras" && opcionComputadora === "Papel")
    ) {
      puntosUsuario++;
      console.log("Haz ganado la ronda");

      //Gana Computadora
    } else if (
      (opcionComputadora === "Piedra" && usuarioTexto === "Tijeras") ||
      (opcionComputadora === "Papel" && usuarioTexto === "Piedra") ||
      (opcionComputadora === "Tijeras" && usuarioTexto === "Papel")
    ) {
      puntosComputadora++;
      console.log("La computadora ha ganado la ronda");
    } else {
      console.log("Empate");
    }

    if (puntosUsuario === 5) {
      GanaUsuario();
    } else if (puntosComputadora === 5) {
      GanaComputadora();
    }
  }
};

//Función Gana Usuario

let GanaUsuario = () => {
  alert("Ganaste la partida");
  historialUsuaio.push(`Gana usuario utilizando ${usuarioTexto}`);
  alert(`
    Haz ha ganado la partida:   

    `);
};

//Función Gana Computadora

let GanaComputadora = () => {
  puntosComputadora++;
  console.log("La computadora ha ganado la partida");
  historialComputadora.push(`Gana usuario utilizando ${usuarioTexto}`);
  alert(`
    La computadora ha ganado la partida:   

    `);
};
