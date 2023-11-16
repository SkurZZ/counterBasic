const btnDecrease = document.getElementById('decrease')
const btnReset = document.getElementById('reset')
const btnIncrease = document.getElementById('increase')
let countNumber = document.getElementById('number')
let count = 0

btnDecrease.addEventListener("click", function () {
    countNumber.innerText = count -= 1
    colorNumbers()
})

btnIncrease.addEventListener("click", function () {
    countNumber.innerText = count += 1
    colorNumbers()
})

btnReset.addEventListener("click", function () {
    countNumber.innerText = count = 0
    colorNumbers()
})

function colorNumbers() {
    if (count < 0) {
        countNumber.style.color = "red";
    } else if (count === 0) {
        countNumber.style.color = "black";
    } else {
        countNumber.style.color = "green";
    }
}
