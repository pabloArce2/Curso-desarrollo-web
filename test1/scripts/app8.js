const boton1 = document.getElementById("btn1");
const boton2 = document.querySelector("#btn2");

boton1.addEventListener("click", () => {
    console.log("click en boton 1");
});
boton2.addEventListener("click", () => {
    Notification.requestPermission()
        .then((result) => { "El resultado es " + result });
});
