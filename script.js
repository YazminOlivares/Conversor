// Función para convertir kilómetros a millas
function convertirKilometrosAMillas(km) {
    return km * 0.621371;
}

// Función para convertir metros a pies
function convertirMetrosAPies(m) {
    return m * 3.28084;
}

// Obtener referencias a los elementos de entrada y salida
const kilometrosInput = document.getElementById('kilometros');
const millasOutput = document.getElementById('millas');
const metrosInput = document.getElementById('metros');
const piesOutput = document.getElementById('pies');

// Escuchar cambios en el campo de kilómetros
kilometrosInput.addEventListener('input', function() {
    const km = parseFloat(kilometrosInput.value);
    if (!isNaN(km)) {
        millasOutput.textContent = convertirKilometrosAMillas(km).toFixed(2);
    } else {
        millasOutput.textContent = '';
    }
});

// Escuchar cambios en el campo de metros
metrosInput.addEventListener('input', function() {
    const metros = parseFloat(metrosInput.value);
    if (!isNaN(metros)) {
        piesOutput.textContent = convertirMetrosAPies(metros).toFixed(2);
    } else {
        piesOutput.textContent = '';
    }
});
