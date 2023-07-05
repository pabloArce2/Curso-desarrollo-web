document.addEventListener('DOMContentLoaded', function () {
    
});

function iniciarApp() {
    crearGaleria();
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement("picture");
        imagen.innerHTML = `
            <source srcset="build/assets/img/thumb/imagen${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/assets/img/thumb/imagen${i}.jpg" alt="Imagen galeria">
        `;
        imagen.onclick = function () {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}


function mostrarImagen(i) {
    const imagen = document.createElement("picture");

    imagen.innerHTML = `
        <source srcset="build/assets/img/complete/imagen${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/assets/img/complete/imagen${i}.jpg" alt="Imagen galeria">
    `;

    const overlay = document.createElement("div");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    const cerrarModal = document.createElement("p");
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");

    overlay.appendChild(cerrarModal);

    const body = document.querySelector("body");
    body.appendChild(overlay);
}

iniciarApp();
