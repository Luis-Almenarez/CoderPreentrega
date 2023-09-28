let puntosUsuario = 0;
let puntosComputadora = 0;

let historialUsuaio = [];
let historialComputadora = [];
let contadorRondas = 0;

const resultados = {
  Piedra: {
    nombre: "Piedra",
    ganaA: ["Tijeras"],
  },
  Papel: {
    nombre: "Papel",
    ganaA: ["Piedra"],
  },
  Tijeras: {
    nombre: "Tijeras",
    ganaA: ["Papel"],
  },
};

let iniciarJuego = () => {
  while (puntosUsuario !== 5 && puntosComputadora !== 5) {
    let opcionComputadora = Math.floor(Math.random() * 3);
    let opcionUsuario = prompt(`
    El primero en llegar a 5 puntos ganará la partida
    
    Elige:
        1- Piedra
        2- Papel
        3- Tijeras `);
    let usuarioTexto;
    contadorRondas++;
    console.log("Ronda " + contadorRondas);

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

    determinarResultado(usuarioTexto, opcionComputadora);
    /************************************************************/

    function determinarResultado(jugadaUsuario, jugadaComputadora) {
      if (resultados[jugadaUsuario].ganaA.includes(jugadaComputadora)) {
        puntosUsuario++;
        historialUsuaio.push(`Ronda ${contadorRondas}: Usuario utilizó ${usuarioTexto}, Computadora utilizó ${opcionComputadora}`);
        console.log(`Ganaste la ronda ${contadorRondas}`);
        console.log("Computadora: " + puntosComputadora);
        console.log("Usuario: " + puntosUsuario);
        console.log("_____________________");
      } else if (resultados[jugadaComputadora].ganaA.includes(jugadaUsuario)) {
        puntosComputadora++;
        historialUsuaio.push(`Ronda ${contadorRondas}: Computadora utilizó ${opcionComputadora}, Usuario utilizó ${usuarioTexto}`);
        console.log(`La computadora gana la ronda ${contadorRondas}`);
        console.log("Computadora: " + puntosComputadora);
        console.log("Usuario: " + puntosUsuario);
        console.log("_____________________");
      } else {
        console.log("Computadora: " + puntosComputadora);
        console.log("Usuario: " + puntosUsuario);
        console.log("EMPATE");
        console.log("---------------------");
      }
    }

    /************************************************************/

    if (puntosUsuario === 5) {
      GanaUsuario();
    } else if (puntosComputadora === 5) {
      GanaComputadora();
    }
  }
};

// Función Gana Usuario
let GanaUsuario = () => {
  alert(`GANASTE LA PARTIDA:

  Resumen rondas importantes: \n${historialUsuaio.join("\n")}`);
};

// Función Gana Computadora
let GanaComputadora = () => {
  alert(`HAS PERDIDO LA PARTIDA:
  
  Resumen rondas importantes: \n${historialComputadora.join("\n")}`);
};
