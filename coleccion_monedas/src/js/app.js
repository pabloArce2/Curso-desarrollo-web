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
        console.log(i);
        galeria.appendChild(imagen);
    }
}

iniciarApp();
