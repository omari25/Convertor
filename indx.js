let pound = document.querySelector('input')
let kg = document.querySelector('#result')
let button = document.querySelector('#btn')

button.onclick = function () {
    let convert = pound.value * 0.453592;
    let todp = convert.toFixed(2);
    kg.innerHTML = todp;
} 