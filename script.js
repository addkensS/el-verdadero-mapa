document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('routeForm');
    const canvas = document.getElementById('routeCanvas');
    const ctx = canvas.getContext('2d');
    const mapImage = document.querySelector('.map-image');

    const routes = {

        // Puntos especificos
        "Lobby": { x: 150, y: 130 },
        "Cafeteria": { x: 200, y: 100 },
        "Laboratorio": { x: 200, y: 200 },
        "Biblioteca": { x: 300, y: 300 },
        "Redes": { x: 400, y: 400 },
        "Bloque A": { x: 500, y: 100 },
        "Bloque B": { x: 100, y: 500 },
        "Bloque C": { x: 200, y: 600 }

        // Intersecciones, rutas

    };

    // Predefinir rutas
    const predefinedRoutes = {
        "Lobby-Laboratorio": ["Lobby", "Cafeteria", "Laboratorio"],
        "Lobby-Biblioteca": ["Lobby", "Cafeteria", "Laboratorio", "Biblioteca"],
        "Lobby-Redes": ["Lobby", "Cafeteria", "Laboratorio", "Biblioteca", "Redes"],
        // Agregar mas rutas
    };

    mapImage.onload = () => {
        canvas.width = mapImage.clientWidth;
        canvas.height = mapImage.clientHeight;
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const start = document.getElementById('start').value;
        const end = document.getElementById('end').value;

        if (routes[start] && routes[end]) {
            const routeKey = `${start}-${end}`;
            if (predefinedRoutes[routeKey]) {
                drawRoute(predefinedRoutes[routeKey]);
            } else {
                alert('Ruta no definida. Por favor, selecciona otra combinación.');
            }
        } else {
            alert('Ruta no encontrada. Por favor, verifica los puntos seleccionados.');
        }
    });

    function drawRoute(points) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(routes[points[0]].x, routes[points[0]].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(routes[points[i]].x, routes[points[i]].y);
        }
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
});