const primarys = document.getElementsByClassName('primary')

let primarys1 = [...primarys]

primarys1.forEach(element => {
    element.innerText = 'GeForce 20 series'
    element.style = 'background: black;color: white;'
});

console.log(forEach(element))