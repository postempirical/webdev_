let count = 0

// mutiple buttons so select all loop over them
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

// add event listener to EACH button 
// get their classes in a variable
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) count--;
        else if (styles.contains("increase")) count++;
        else count = 0;
        value.textContent = count
    })
})