let startBtn=document.querySelector("#start")

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

