const heading = document.querySelector('.title');
const paragraph = document.querySelector('#text');
const button = document.querySelector('#button');
const container3 = document.querySelector('#container3');
let counter = 0;

const headingText = "Esto es un titulo";
const paragraphText = "Esto es un parrafo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.";

heading.innerHTML = headingText;
paragraph.innerHTML = paragraphText;

button.addEventListener('click', () => {
    const newLine = document.createElement('p');
    newLine.innerHTML = "Esto es una nueva linea";
    container3.appendChild(newLine);
    counter++;
    if (counter === 5) {
        container3.innerHTML += "No puedes agregar mas lineas";
        button.disabled = true;
    }
}
);