function convertirKilometrosAMillas(km) {
    return km * 0.621371;
}

function convertirMetrosAPies(m) {
    return m * 3.28084;
}

const kilometrosInput = document.getElementById('kilometros');
const millasOutput = document.getElementById('millas');
const metrosInput = document.getElementById('metros');
const piesOutput = document.getElementById('pies');

kilometrosInput.addEventListener('input', function() {
    const km = parseFloat(kilometrosInput.value);
    if (!isNaN(km)) {
        millasOutput.textContent = convertirKilometrosAMillas(km).toFixed(2);
    } else {
        millasOutput.textContent = '';
    }
});

metrosInput.addEventListener('input', function() {
    const metros = parseFloat(metrosInput.value);
    if (!isNaN(metros)) {
        piesOutput.textContent = convertirMetrosAPies(metros).toFixed(2);
    } else {
        piesOutput.textContent = '';
    }
});
