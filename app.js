// https://www.omnicalculator.com/conversion/degrees-to-radians

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const radiansRadio = document.getElementById('radiansRadio');
const degreesRadio = document.getElementById('degreesRadio');

let radians;
let degrees = v; 

// labels of the inpust
const variable = document.getElementById('variable');

radiansRadio.addEventListener('click', function() {
  variable.textContent = 'Degrees';
  degrees = v;
  result.textContent = '';
});

degreesRadio.addEventListener('click', function() {
  variable.textContent = 'Radians';
  radians = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(radiansRadio.checked)
    result.textContent = `Radians = ${computeradians().toFixed(5)}`;

  else if(degreesRadio.checked)
    result.textContent = `Degrees = ${computedegrees().toFixed(5)}`;
})

// calculation

function computeradians() {
  return Number(degrees.value) * 0.0174533;
}

function computedegrees() {
  return Number(radians.value) / 0.0174533;
}