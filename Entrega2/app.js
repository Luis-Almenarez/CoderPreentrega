let puntosUsuario = 0;
let puntosComputadora = 0;

let iniciarJuego = () => {
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
};
