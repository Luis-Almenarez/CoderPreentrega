let puntosUsuario = 0;
let puntosComputadora = 0;

let historialUsuaio = [];
let historialComputadora = [];

let iniciarJuego = () => {
  while (puntosUsuario !== 5 && puntosComputadora !== 5) {
    let opcionComputadora = Math.floor(Math.random() * 3);
    let opcionUsuario = prompt(`Elige:
        1- Piedra
        2- Papel
        3- Tijeras `);

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
        alert("La opción seleccionada no es válida. Por favor, elige 1, 2 o 3.");
        continue;
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
      historialUsuaio.push(`Ganaste utilizando ${usuarioTexto}`);
      console.log("_____________________");
      //Gana Computadora
    } else if (
      (opcionComputadora === "Piedra" && usuarioTexto === "Tijeras") ||
      (opcionComputadora === "Papel" && usuarioTexto === "Piedra") ||
      (opcionComputadora === "Tijeras" && usuarioTexto === "Papel")
    ) {
      puntosComputadora++;
      console.log("La computadora ha ganado la ronda");
      historialComputadora.push(`Utilizando ${opcionComputadora}`);
      console.log("_____________________");
    } else {
      console.log("Empate");
      console.log("---------------------");
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
  alert(`
    Has ha ganado la partida: ${historialUsuaio.join(", ")}

    `);
};

//Función Gana Computadora

let GanaComputadora = () => {
  alert(`
    La computadora ha ganado la partida: ${historialComputadora.join(", ")}

    `);
};
