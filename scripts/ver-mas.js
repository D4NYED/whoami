// Selecciona todas las opiniones ocultas y los botones
const certificadosOcultos = document.querySelectorAll('.certificados-ocultos');
const botonVerMas = document.getElementById('ver-mas');
const botonVerMenos = document.getElementById('ver-menos');

// Muestra solo 4 opiniones por fila
const maxCertificadosPorFila = 4;
const totalCertificados = certificadosOcultos.length;
const totalCertificadosVisibles = document.querySelectorAll('.certificado-item').length - certificadosOcultos.length;

if (totalCertificadosVisibles >= maxCertificadosPorFila) {
    botonVerMas.style.display = 'block'; // Muestra el botón "Ver más"
}

// Evento para el botón "Ver más"
botonVerMas.addEventListener('click', () => {
    // Muestra las opiniones ocultas
    certificadosOcultos.forEach(certificado => {
        certificado.style.display = 'block';
    });
    // Oculta el botón "Ver más" y muestra "Ver menos"
    botonVerMas.style.display = 'none';
    botonVerMenos.style.display = 'block';
});

// Evento para el botón "Ver menos"
botonVerMenos.addEventListener('click', () => {
    // Oculta las opiniones adicionales
    certificadosOcultos.forEach(certificado => {
        certificado.style.display = 'none';
    });
    // Oculta el botón "Ver menos" y muestra "Ver más"
    botonVerMenos.style.display = 'none';
    botonVerMas.style.display = 'block';
});
