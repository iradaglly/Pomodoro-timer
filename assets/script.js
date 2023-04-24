let startBtn = document.querySelector("#start")
let stopBtn = document.querySelector("#stop")
let resetBtn = document.querySelector("#reset")
let list = document.querySelector("ul")
let input = document.querySelector("#input")
let addBtn = document.querySelector("#add")
let clearBtn = document.querySelector("#clear")

let intervalId = undefined;
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

startBtn.onclick = function () {
    let twenntyfiveMin = 60 * 25;
    display = document.querySelector("#pomodoro");
    startTimer(twenntyfiveMin, display);
};
resetBtn.onclick = function () {
    clearInterval(intervalId);
    var twenntyfiveMin = 60 * 25,
        display = document.querySelector("#pomodoro");
    startTimer(twenntyfiveMin, display);
}
stopBtn.onclick = function () {
    clearInterval(intervalId);

}
//-------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    getTime();
})
function getTime() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let clock = document.querySelector("#liveclck");
    clock.textContent = hours + 'h' + ':' + minutes + 'm' + ':' + seconds + 's'
    setInterval(getTime, 1000);
}
let count = 0;
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim() != "") {
        count++
        let listItem = document.createElement("li")
        let content = document.createElement("p")
        content.textContent = count + '.' + input.value
        content.style.fontSize = "18px"
        content.style.textTransform = "capitalize"

        let deleteBtn = document.createElement("button")
        let icon = document.createElement("i")
        icon.setAttribute("class", "fa-solid fa-trash")
        deleteBtn.append(icon)

        let markBtn = document.createElement("button")
        let icon2 = document.createElement("i")
        icon2.setAttribute("class", "fa-solid fa-check")
        markBtn.append(icon2)

        let btnWrapper = document.createElement("div")
        btnWrapper.append(deleteBtn, markBtn)
        listItem.append(content, btnWrapper)
        list.append(listItem)
        input.value = "";
        deleteBtn.addEventListener("click", (e) => {
            count = 0;
            if (window.confirm("Are you sure to delete?")) {
                deleteBtn.parentElement.parentElement.remove()
            }
        })
        markBtn.addEventListener("click", (e) => {
            content.style.textDecoration = "line-through"
        })
        clearBtn.addEventListener("click", (e) => {
            list.innerHTML = ""
        })
    }
})



