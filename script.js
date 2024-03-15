const inputElement = document.getElementById('input');
const outputImg = document.getElementById('Contenido-derecha-img');
const outputTitle = document.getElementById('Contenido-derecha-h1');
const outputText = document.getElementById('Contenido-derecha-p');

const outputElement = document.querySelector('.Contenido-derecha');
const outputTextarea = document.getElementById('Contenido-derecha-text');
const outputBtn = document.getElementById('Contenido-derecha-btn-copiar');


const updateOutput = () => {
    if (inputElement.value !== '') {

        outputImg.style.display = 'none';
        outputTitle.style.display = 'none';
        outputText.style.display = 'none';

        outputTextarea.style.display = 'block';
        outputBtn.style.display = 'block';

        outputTextarea.value = inputElement.value;

        if (window.innerWidth <= 800) {
            outputElement.style.height = '350px';
        } else if (window.innerWidth <= 600) {
            outputElement.style.height = '595px';
        } else {
            outputElement.style.height = '100%';
        }

    } else {
        outputImg.style.display = window.innerWidth <= 800 ? 'none' : 'block';
        outputTitle.style.display = 'block';
        outputText.style.display = 'block';

        outputTextarea.style.display = 'none';
        outputBtn.style.display = 'none';

        if (window.innerWidth <= 800) {
            outputElement.style.height = '133px';
        } else if (window.innerWidth <= 600) {
            outputElement.style.height = '186px';
        } else {
            outputElement.style.height = '100%';
        }
    }


};

inputElement.addEventListener('input', updateOutput);

window.addEventListener('resize', updateOutput);


const criptografar = () => {
    let textoCriptografado = "";

    for (let letra of inputElement.value) {
            if (letra === 'a') {
                letra = 'ai';
            } else if (letra === 'e') {
                letra = 'enter';
            } else if (letra === 'i') {
                letra = 'imes';
            } else if (letra === 'o') {
                letra = 'ober';
            } else if (letra === 'u') {
                letra = 'ufat';
            }

            textoCriptografado += letra;
    }
    
    outputTextarea.value = textoCriptografado;
    inputElement.value = textoCriptografado;
}

const descriptografar = () => {
    let textoDescriptografado = inputElement.value.trim();

    textoDescriptografado = textoDescriptografado.replace(/ai/g, 'a');
    textoDescriptografado = textoDescriptografado.replace(/enter/g, 'e');
    textoDescriptografado = textoDescriptografado.replace(/imes/g, 'i');
    textoDescriptografado = textoDescriptografado.replace(/ober/g, 'o');
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, 'u');

    outputTextarea.value = textoDescriptografado;
    inputElement.value = textoDescriptografado;
}

const copiarTexto = () => {
    const textoParaCopiar = outputTextarea.value;

    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            alert('¡Texto copiado al portapapeles con éxito!');
        })
        .catch((err) => {
            alert('Error al copiar texto en el portapapeles:', err);
        });
};