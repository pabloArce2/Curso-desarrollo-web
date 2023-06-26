const heading = document.querySelector('.title');
const paragraph = document.querySelector('#text');
const button = document.querySelector('#button');
const container3 = document.querySelector('#container3');
let counter = 0;
let scrollCounter = 0;

const headingText = "Esto es un titulo";
const paragraphText = "Esto es un parrafo cargado desde JS: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.";

//DOMContentLoaded, solo espera por el html, no espera por imagenes ni css
//load espera por todo el html, imagenes, css, etc

heading.innerHTML = headingText;
paragraph.innerHTML = paragraphText;

button.addEventListener('click', () => {
    const newLine = document.createElement('p');
    newLine.innerHTML = "Esto es una nueva linea (linea " + (counter + 1) + ")";
    container3.appendChild(newLine);
    counter++;
    if (counter === 5) {
        container3.innerHTML += "No puedes agregar mas lineas";
        button.disabled = true;
    }
}
);

window.addEventListener('scroll', () => {
    scrollCounter++;
    if (scrollCounter === 100) {
        alert("Ya te cansaste de hacer scroll?");
    }
    else if(scrollCounter === 1000)
    {
        alert("Vas por el scroll " + scrollCounter);
    }
}
);

const inputPassword = document.querySelector('#inputPassword');
    const checkboxes = {
        length: document.querySelector('#length'),
        lowercase: document.querySelector('#lowercase'),
        uppercase: document.querySelector('#uppercase'),
        number: document.querySelector('#number'),
        special: document.querySelector('#special')
    };

    inputPassword.addEventListener('input', (event) => {
        const password = event.target.value;
        validatePassword(password);
    });

    const validatePassword = (password) => {
        const conditionsPassword = {
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*]/.test(password)
        };

        for (const condition in conditionsPassword) {
            checkboxes[condition].checked = conditionsPassword[condition];
        }

        for (const condition in conditionsPassword) {
            checkboxes[condition].checked = conditionsPassword[condition];
            if (conditionsPassword[condition]) {
                checkboxes[condition].nextElementSibling.classList.remove('disabled');
                checkboxes[condition].nextElementSibling.classList.add('valid');
            } else {
                checkboxes[condition].nextElementSibling.classList.remove('valid');
                checkboxes[condition].nextElementSibling.classList.add('disabled');
            }
        }
    };