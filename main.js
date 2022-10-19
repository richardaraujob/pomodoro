const buttonStart = document.querySelector("#start");
const buttonPause = document.querySelector("#pause")
const buttonEdit = document.querySelector("#edit")
const buttonBack = document.querySelector("#back")
const buttonStop = document.querySelector("#stop")
const buttonRecomecar = document.querySelector("#recomecar")
const barra = document.querySelector("#barra-contagem")

let cron;

function timer(duration, display) {
    
    let timert = duration, min, seg;

    cron = setInterval(function() {

        min = parseInt( timert / 60, 10 );
        seg = parseInt( timert % 60, 10 );

        min = min < 10 ? "0" + min : min;
        seg = seg < 10 ? "0" + seg : seg;

        display.textContent = min + ":" + seg;


        barra.style.width = 100 * (timert / duration) + "%" ;


        if(--timert < 0) {
            timert = duration;
        }

        if(display.innerHTML.includes("00:00")) {
            clearInterval(cron)

            const despertar = new Audio ("https://richardaraujob.github.io/pomodoro/despertar.wav");

            despertar.play();
        }
        

    }, 1000);
   
};

buttonStart.addEventListener("click", () => {

    let duration = 60 * document.querySelector("#time").value;
    let display = document.querySelector("#contagem");
    const audioPlay = new Audio (src="https://richardaraujob.github.io/pomodoro/play.wav");
    
    timer(duration, display)
    audioPlay.play();

    document.querySelector("#stop").removeAttribute("hidden", "hidden");
    document.querySelector("#edit").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").style.fontSize= "44px";
    document.querySelector("#insert-timer").style.display = "none";
    document.querySelector("#pause").removeAttribute("hidden", "hidden");
    document.querySelector("#barra-contagem").removeAttribute("hidden", "hidden");

});

buttonEdit.addEventListener("click", () => {

    document.querySelector("#insert-timer").style.display = "flex";

});

buttonBack.addEventListener("click", () => {

    let altereValue = document.querySelector("#time").value;

    altereValue = altereValue < 10 ? "0" + altereValue : altereValue;

    document.querySelector("#insert-timer").style.display = "none";
    document.querySelector("#cont").value = document.querySelector("#time").value;
    document.querySelector("#contagem").innerHTML = altereValue + ":" + "00";

});

buttonPause.addEventListener("click", () => {

    clearTimeout(cron)

    document.querySelector("#recomecar").removeAttribute("hidden", "hidden");
    document.querySelector("#pause").setAttribute("hidden", "hidden");

});

buttonStop.addEventListener("click", () => {

    let altereValue = document.querySelector("#time").value;

    altereValue = altereValue < 10 ? "0" + altereValue : altereValue;

    clearInterval(cron)

    document.querySelector("#stop").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").innerHTML = altereValue + ":" + "00";
    document.querySelector("#edit").removeAttribute("hidden", "hidden");
    document.querySelector("#recomecar").setAttribute("hidden", "hidden");
    document.querySelector("#pause").setAttribute("hidden", "hidden");
    document.querySelector("#barra-contagem").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").style.fontSize= "34px";

});

buttonRecomecar.addEventListener("click", () => {

    let minutesAndSeconds = document.querySelector("#contagem").innerHTML.split(":");
    let minutes = Number(minutesAndSeconds[0]);
    let seconds = Number(minutesAndSeconds[1]); 
    let duration = 60 * minutes + seconds;
    let display = document.querySelector("#contagem");
    const audioPlay = new Audio ("https://richardaraujob.github.io/pomodoro/play.wav");

    timer(duration, display)
    audioPlay.play();

    document.querySelector("#recomecar").setAttribute("hidden", "hidden");
    document.querySelector("#pause").removeAttribute("hidden", "hidden");

});
