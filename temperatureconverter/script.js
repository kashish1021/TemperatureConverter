let celsius = document.getElementById('celsius');
let Farehneit = document.getElementById('Farenheit');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value)* 9) /5 + 32;
    Farehneit.value = parseFloat(output.toFixed(2));
};

Farehneit.oninput = () => {
    let output = (parseFloat(Farehneit.value) -32 )* 5/9;
    celsius.value = parseFloat(output.toFixed(2));
};