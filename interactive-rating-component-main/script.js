const cont1 = document.querySelector(".cont-1")
const cont2 = document.querySelector(".thank-you")
const btns = document.querySelectorAll(".btn")
const submit = document.querySelector(".submit")
let result = document.querySelector(".res-text")



btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // if(e.target.classList.toString().includes("active")) {
    
        // }
        btn.classList.toggle('active')
        const rating = btn.innerText
        result.innerText = `You Selected ${rating} out of 5`


    })
})

submit.addEventListener("click", () => {
    cont1.style.display = "none"
    cont2.style.display = "flex"
})