const buttonStart = document.querySelector("#start");
const buttonPause = document.querySelector("#pause")
const buttonEdit = document.querySelector("#edit")
const buttonBack = document.querySelector("#back")
const buttonStop = document.querySelector("#stop")
const buttonRe = document.querySelector("#recomecar")

let cron;

function timer(duration, display) {
    
    let timert = duration, min, seg;

    cron = setInterval(function() {
        min = parseInt( timert / 60, 10 );
        seg = parseInt( timert % 60, 10 );

        min = min < 10 ? "0" + min : min;
        seg = seg < 10 ? "0" + seg : seg;

        display.textContent = min + ":" + seg;

        if(--timert < 0) {
            timert = duration;
        }

        
    }, 1000);
   
};

buttonStart.addEventListener("click", () => {

    let duration = 60 * document.querySelector("#cont").value;
    let display = document.querySelector("#contagem");
    document.querySelector("#stop").removeAttribute("hidden", "hidden");
    
    timer(duration, display)

    document.querySelector("#edit").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").classList.toggle("display");
    document.querySelector("#pause").removeAttribute("hidden", "hidden");

});

buttonEdit.addEventListener("click", () => {

    document.querySelector("#insert-timer").classList.toggle("display");

});

buttonBack.addEventListener("click", () => {

    document.querySelector("#insert-timer").classList.remove("display");
    document.querySelector("#cont").value = document.querySelector("#time").value;
    document.querySelector("#contagem").innerHTML = document.querySelector("#time").value + ":" + "00";

});

buttonPause.addEventListener("click", () => {

    clearTimeout(cron)

    document.querySelector("#recomecar").removeAttribute("hidden", "hidden");
    document.querySelector("#pause").setAttribute("hidden", "hidden");

});

buttonStop.addEventListener("click", () => {

    document.querySelector("#stop").setAttribute("hidden", "hidden");

    clearInterval(cron)

    document.querySelector("#contagem").innerHTML = document.querySelector("#time").value + ":" + "00";
    document.querySelector("#edit").removeAttribute("hidden", "hidden");
    document.querySelector("#contagem").classList.remove("display");
    document.querySelector("#recomecar").setAttribute("hidden", "hidden");
    document.querySelector("#pause").setAttribute("hidden", "hidden");

});

buttonRe.addEventListener("click", () => {

    let duration = 60 * document.querySelector("#contagem").ariaValueText;
    let display = document.querySelector("#contagem");

    timer(duration, display)

    document.querySelector("#recomecar").setAttribute("hidden", "hidden");
    document.querySelector("#pause").removeAttribute("hidden", "hidden");

});





