let clock = document.querySelector('.clock')
setInterval(()=>{
    let time = new Date();
    let final = time.toLocaleTimeString();
    // clock.appendChild(document.createTextNode(final));
    clock.innerHTML = final;
},1000)