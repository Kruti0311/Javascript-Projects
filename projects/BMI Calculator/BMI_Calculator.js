let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector('.height').value)
    let weight = parseInt(document.querySelector('.weight').value)
    let result = document.querySelector('.result')

    if ((height === '' || height < 0 || isNaN(height)) && (weight === '' || weight < 0 || isNaN(weight))) {
        result.appendChild(document.createTextNode(`plz enter valid height and weight,height is ${height} and weight is ${weight}`));
    }
    else if (height === '' || height < 0 || isNaN(height)) {
        result.appendChild(document.createTextNode(`plz enter valid height,height is ${height}`));
        // result.innerHTML = `Plz enter valid height,height is ${height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.appendChild(document.createTextNode(`plz enter valid weight,weight is ${weight}`));
        // result.innerHTML = `Plz enter valid weight,weight is ${weight}`;
    }else{
        result.appendChild(document.createTextNode(`BMI = ${(weight / ((height * height) / 10000)).toFixed(2)}`));
    }

}, false)