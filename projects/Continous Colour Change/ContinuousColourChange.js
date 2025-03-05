let color
const RandomColour = function () {
    let hex = '0123456789ABCDEF'
    color = '#'
    for (let index = 0; index < 6; index++) {
        let random = parseInt(Math.random() * 16)
        color += hex[random]
    }
    return color
}

console.log(color);

let start = document.getElementById('start')
let intervalID
start.addEventListener('click', (e) => {
    intervalID = setInterval(() => {
        document.body.style.backgroundColor = RandomColour();
    }, 1000);
}, false)

let stop = document.getElementById('Stop')

stop.addEventListener('click', (e) => {
    clearInterval(intervalID);

}, false)