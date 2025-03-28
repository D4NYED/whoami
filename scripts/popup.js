document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.querySelector('.close-button');

    // Datos del popup para cada skill
    const skillTexts = {
        "Ciberseguridad / Hacking Ético": "- Auditorías de ciberseguridad. \n- Securización de sistemas linux y servidores web.\n - Creacion de entornos vulnerables con fines educativos.",
        "Pentesting y Auditoría de Seguridad": " - Analista de ciberseguridad / hacking ético.\n - Programación con Python, Bash o Java.\n - Otras áreas de la informática (Bases de datos, redes, etc.).",
        "Programación": " - Desarrollo de aplicaciones web o en plataforma.\n - Automatización de tareas mediante scripting.\n - Conocimiento en lenguajes como Python, JavaScript, y más.",
        "Blue Team": "- Monitorización de sistemas y detección de intrusos (SIEM, IDS/IPS).\n- Análisis de logs y eventos de seguridad.\n- Implementación de estrategias de defensa proactiva.\n- Gestión y respuesta ante incidentes de seguridad."
    };
    
    

    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const skillTitle = this.getAttribute('data-skill');
            popupTitle.textContent = skillTitle;
            popupText.textContent = skillTexts[skillTitle] || "No hay información adicional disponible.";
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
