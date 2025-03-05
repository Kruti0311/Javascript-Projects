// document.querySelector('#images').addEventListener('click', (e) => {
//     console.log('images is clicked');
// },false)

// document.querySelector('#japan').addEventListener('click', (e) => {
//     console.log('japan is clicked');
// },false)


let ul = document.querySelectorAll('li');

ul.forEach((photo) => {
    photo.addEventListener('click', (e) => {
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            e.target.parentNode.remove();
        }

    }, false)
})

