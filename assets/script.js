let startBtn = document.querySelector("#start")
let list = document.querySelector("ul")
let input = document.querySelector("#input")
let addBtn = document.querySelector("#add")
let clearBtn = document.querySelector("#clear")

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