/*asociamos los input */
const inputRed = document.getElementById('rojo');
const inputGreen = document.getElementById('verde');
const inputBlue = document.getElementById('azul');

/*asociar los parrafos del html */
const textoRed = document.getElementById('texto-red');
const textoGreen = document.getElementById('texto-green');
const textoBlue = document.getElementById('texto-blue');

/**asignar valores predeterminados del input a la variables auxiliars */
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

/**asinar al parrafo p los valores de los input */
textoRed.innerHTML = red;
textoGreen.innerHTML = green;
textoBlue.innerHTML = blue;

//funcion para enviar color al backgraund del body
function actulizarColor(red,green,blue) {
  const colorRGB = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = colorRGB;
}

//actulizar para input red
inputRed.addEventListener('change',(e)=>{
  red = e.target.value;
  textoRed.innerHTML= red;
  actulizarColor(red,green,blue);
});

//actulizar para input green
inputGreen.addEventListener('change',(e)=>{
  green = e.target.value;
  textoGreen.innerHTML= green;
  actulizarColor(red,green,blue);
});

//actulizar para input blue
inputBlue.addEventListener('change',(e)=>{
  blue = e.target.value;
  textoBlue.innerHTML= blue;
  actulizarColor(red,green,blue);
});

