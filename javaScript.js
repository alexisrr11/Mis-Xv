function actualizarCuentaRegresiva() {
    const fechaObjetivo = new Date("June 14, 2025 00:00:00").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
        document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
        document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
        document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
    } else {
        document.querySelector(".cuenta-regresiva").innerHTML = "<h4>¡El gran día ha llegado!</h4>";
    }
}

setInterval(actualizarCuentaRegresiva, 1000);
actualizarCuentaRegresiva();

document.addEventListener("DOMContentLoaded", function () {
const video = document.querySelector(".portada-video video");
const iconoMusica = document.querySelector(".bxs-music");

iconoMusica.addEventListener("click", function () {
    if (video.muted) {
        video.muted = false; // Activar
        iconoMusica.style.color = "rgba(0, 255, 255)";
        iconoMusica.style.border = "3px solid rgba(0, 255, 255)"
    } else {
        video.muted = true; // Silenciar
        iconoMusica.style.color = "rgba(0, 255, 255, 0.473)";
        iconoMusica.style.border = "3px solid rgba(0, 255, 255, 0.473)"
    }
});
});

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("ver");
    const nuevoTextoElemento = document.getElementById("nuevoTxtVer");
    const textoAMostrar = "'🤵Elegante💃'";

    function escribirTexto(elemento, texto) {
        let i = 0;
        elemento.textContent = "";
        const intervalo = setInterval(() => {
            if (i < texto.length) {
                elemento.textContent += texto[i];
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 50); 
    }

    boton.addEventListener("click", () => {
        escribirTexto(nuevoTextoElemento, textoAMostrar);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("CBU");
    const NCBUElemento = document.getElementById("N°CBU");
    const aliasElemento = document.getElementById("Alias");

    const textoCBU = "Número de CBU: 0000003100051271684501";
    const textoAlias = "AliasMP:sofia.del.gomez";

    function escribirTexto(elemento, texto) {
        let i = 0;
        elemento.textContent = ""; 
        const intervalo = setInterval(() => {
            if (i < texto.length) {
                elemento.textContent += texto[i];
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, 50); 
    }

    boton.addEventListener("click", () => {
        escribirTexto(NCBUElemento, textoCBU);
        setTimeout(() => {
            escribirTexto(aliasElemento, textoAlias);
        }, textoCBU.length * 50);
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
  });
