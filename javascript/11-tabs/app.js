const btns = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id
    // only buttons have dataset id
    if (id) {
        // remove active from all buttons
        // add active to the button clicked
        btns.forEach((btn) => {
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

        // remove all other aricles
        // only show articles with id clicked on
        articles.forEach((article) => {
            article.classList.remove("active")
        })

        document.getElementById(id).classList.add("active")
    }
})