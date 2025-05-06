// validacion_formulario.js/7
    document.addEventListener('DOMContentLoaded', function() {
        const formulario = document.getElementById('formularioContacto');
        const nombreInput = document.getElementById('nombre');
        const celularInput = document.getElementById('celular');
        const emailInput = document.getElementById('email');
        const comentarioInput = document.getElementById('comentario'); // Nuevo
        const errorNombre = document.getElementById('errorNombre');
        const errorCelular = document.getElementById('errorCelular');
        const errorEmail = document.getElementById('errorEmail');
        const errorComentario = document.getElementById('errorComentario'); // Nuevo
        const mensajeEnviado = document.getElementById('mensajeEnviado');

        formulario.addEventListener('submit', function(event) {
            let valido = true;

            if (nombreInput.value.trim() === '') {
                errorNombre.textContent = 'Por favor, ingresa tu nombre.';
                valido = false;
            } else {
                errorNombre.textContent = '';
            }

            const celularRegex = /^\d{10}$/;
            if (!celularRegex.test(celularInput.value)) {
                errorCelular.textContent = 'Por favor, ingresa un número de celular válido (10 dígitos).';
                valido = false;
            } else {
                errorCelular.textContent = '';
            }

            if (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
                errorEmail.textContent = 'Por favor, ingresa un correo electrónico válido.';
                valido = false;
            } else {
                errorEmail.textContent = '';
            }

            // Validación del comentario
            if (comentarioInput.value.trim() === '') {
                errorComentario.textContent = 'Por favor, ingresa un comentario.';
                valido = false;
            } else {
                errorComentario.textContent = '';
            }

            if (!valido) {
                event.preventDefault(); // Evita que se envíe el formulario si hay errores
            } else {
                // Simulación de envío exitoso
                formulario.style.display = 'none';
                mensajeEnviado.style.display = 'block';
                mensajeEnviado.textContent = '¡Tu mensaje ha sido enviado! Te responderemos pronto.';
            }
        });
    })