//set values to random our color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",];
// get elemenets from html
const btn = document.getElementById('getcolor-button');
const color = document.querySelector('.color-value')
//add listener
btn.addEventListener('click', changeColor)
//add function
function changeColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}
//get random number to change color in changeColor func
const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}