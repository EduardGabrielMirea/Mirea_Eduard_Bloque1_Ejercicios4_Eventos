document.addEventListener("DOMContentLoaded",function () {
    // Función para generar los botones
    function generarBotones(numBotones) {
        const container = document.getElementById('botones-container');

        // Limpiamos el contenedor antes de añadir botones
        container.innerHTML = '';

        // Crear tantos botones como se indique
        for (let i = 1; i <= numBotones; i++) {
            const boton = document.createElement('button');
            boton.textContent = `Botón ${i}`;

            // Añadir el evento click a cada botón
            boton.addEventListener('click', function() {
                mostrarMensaje();
            });

            // Añadir el botón al contenedor
            container.appendChild(boton);
        }
    }

    // Función para mostrar el mensaje cuando se pulsa un botón
    function mostrarMensaje() {
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = 'Has pulsado sobre un botón';
    }

    // Generar botones de forma dinámica, puedes cambiar este número
    const numeroDeBotones = 5; // Cambia este número para generar más botones
    generarBotones(numeroDeBotones);
});