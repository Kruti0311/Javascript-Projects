var button = document.querySelector("button");
var text = document.querySelector("input");
var ul = document.querySelector("ul")
button.addEventListener('click', (e) => {

    let work = document.createElement("li")
    work.innerText = text.value;
    ul.appendChild(work);

    text.value = '';


}, false)