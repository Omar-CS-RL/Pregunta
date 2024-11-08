const noButton = document.getElementById('noButton');

// Función para mover el botón "NO" a una posición aleatoria dentro del contenedor
noButton.addEventListener('mouseover', function() {
    const container = document.querySelector('.button-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Calculamos los límites para las nuevas coordenadas aleatorias dentro del contenedor
    const maxLeft = containerWidth - noButton.offsetWidth;
    const maxTop = containerHeight - noButton.offsetHeight;

    // Genera nuevas coordenadas aleatorias dentro de los límites del contenedor
    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    // Aplica la nueva posición al botón "NO"
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
});
