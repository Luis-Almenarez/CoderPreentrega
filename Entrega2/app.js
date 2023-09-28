// Declaración de variables para llevar el registro de puntos y rondas.
let puntosUsuario = 0;
let puntosComputadora = 0;

// Arrays para registrar el historial de jugadas.
let historialUsuaio = [];
let historialComputadora = [];

// Contador de rondas.
let contadorRondas = 0;

// Objeto que define las reglas del juego.
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

// Función principal para iniciar el juego.
let iniciarJuego = () => {
  while (puntosUsuario !== 5 && puntosComputadora !== 5) {
    // Genera una elección aleatoria para la computadora.
    let opcionComputadora = Math.floor(Math.random() * 3);
    // Solicita al usuario su elección.
    let opcionUsuario = prompt(`
    El primero en llegar a 5 puntos ganará la partida

    Elige:
        1- Piedra
        2- Papel
        3- Tijeras `);
    let usuarioTexto;
    contadorRondas++;
    console.log("Ronda " + contadorRondas);

    // Valida la elección del usuario.
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
        continue; // Continúa con la siguiente iteración del bucle.
      }
    }

    // Convierte la elección de la computadora en texto.
    if (opcionComputadora === 0) {
      opcionComputadora = "Piedra";
    } else if (opcionComputadora === 1) {
      opcionComputadora = "Papel";
    } else if (opcionComputadora === 2) {
      opcionComputadora = "Tijeras";
    }

    console.log("La computadora ha usado " + opcionComputadora);
    console.log("Usuario ha utilizado " + usuarioTexto);

    // Función para determinar el resultado de la ronda.
    determinarResultado(usuarioTexto, opcionComputadora);

    // Función para determinar el ganador.
    function determinarResultado(jugadaUsuario, jugadaComputadora) {
      if (resultados[jugadaUsuario].ganaA.includes(jugadaComputadora)) {
        puntosUsuario++;
        historialUsuaio.push(`Ronda ${contadorRondas}: Usuario utilizó ${usuarioTexto}, Computadora utilizó ${opcionComputadora} - Gana: Usuario`);
        console.log(`Ganaste la ronda ${contadorRondas}`);
        console.log("Computadora: " + puntosComputadora);
        console.log("Usuario: " + puntosUsuario);
        console.log("_____________________");
      } else if (resultados[jugadaComputadora].ganaA.includes(jugadaUsuario)) {
        puntosComputadora++;
        historialUsuaio.push(`Ronda ${contadorRondas}: Computadora utilizó ${opcionComputadora}, Usuario utilizó ${usuarioTexto} - Gana: Computadora`);
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

    // Comprueba si un jugador ha alcanzado 5 puntos para declarar un ganador.
    if (puntosUsuario === 5) {
      GanaUsuario();
    } else if (puntosComputadora === 5) {
      GanaComputadora();
    }
  }
};

// Función para buscar las rondas ganadas por un jugador en el historial.
function buscarRondasGanadas(array, ganador) {
  return array.filter((ronda) => ronda.includes(ganador));
}

// Función que muestra el mensaje de victoria para el usuario.
let GanaUsuario = () => {
  const rondasGanadasPorUsuario = buscarRondasGanadas(historialUsuaio, "Usuario");
  alert(`GANASTE LA PARTIDA:

  Resumen de partidas:
  
  ${rondasGanadasPorUsuario.join("\n")}`);
};

// Función que muestra el mensaje de victoria para la computadora.
let GanaComputadora = () => {
  const rondasGanadasPorComputadora = buscarRondasGanadas(historialUsuaio, "Computadora");
  alert(`HAS PERDIDO LA PARTIDA:
  
  Resumen de partidas:

  ${rondasGanadasPorComputadora.join("\n")}`);
};
