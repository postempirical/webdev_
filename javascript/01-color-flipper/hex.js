const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color")

// #fif5f8
// always start with # followed by 6 values
btn.addEventListener("click", () => {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}