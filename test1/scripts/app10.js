async function getPurchases() {
    const archivo = "purchases.json";

    /*fetch(archivo)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let { purchases } = data;
            let html = '';
            purchases.forEach(purchase => {
                html += `
                    <div>
                        <h2>${purchase.id}</h2>
                        <p>${purchase.total}</p>
                        <p>${purchase.fecha}</p>
                    </div>
                `;
            });
            document.getElementById('container').innerHTML = html;
        })*/

    const response = await fetch(archivo);
    const data = await response.json();
    console.log(data);
    let html = '';

}

getPurchases();