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
        video.muted = false; // Activar sonido
        iconoMusica.style.color = "#d87093"; // Cambiar color para indicar que está activado
        iconoMusica.style.border = "1px solid #d87093"
    } else {
        video.muted = true; // Silenciar
        iconoMusica.style.color = "#d8709354"; // Volver al color original
        iconoMusica.style.border = "1px solid #d8709354"
    }
});
});