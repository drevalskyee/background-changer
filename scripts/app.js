// set colors
const colors = ['green', 'red', 'black', 'white', 'yellow', 'blue', 'purple', 'pink', 'orange', 'grey', 'aqua',];

// get elemenets from html
const btn = document.getElementById('getcolor-button')
const color = document.querySelector('.color-value')

//add listener
btn.addEventListener('click', changeColor)

//add function
function changeColor() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
}

//get random number to change color in changeColor func
const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}
