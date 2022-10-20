const buttonStart = document.querySelector("#start");
const buttonPause = document.querySelector("#pause")
const buttonEdit = document.querySelector("#edit");
const buttonBack = document.querySelector("#back");
const buttonStop = document.querySelector("#stop");
const buttonRecomecar = document.querySelector("#recomecar");
const barra = document.querySelector("#barra-contagem");
const buttonPomodoro = document.querySelector("#pomodoro");
const buttonBreak = document.querySelector("#break");

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

        buttonBreak.setAttribute("disabled", "disabled");
        buttonPomodoro.setAttribute("disabled", "disabled");

        if(display.innerHTML.includes("00:00")) {

            clearInterval(cron)

            let duration = 60 * document.querySelector("#break-time").value;
            let display = document.querySelector("#contagem");
    
            breakTime(duration, display)

            const despertar = new Audio ('https://richardaraujob.github.io/pomodoro/despertar.wav');
            despertar.play();
            
            buttonBreak.style.border = "1px solid #554FFF";
            buttonPomodoro.style.border = "none";
        }     
    }, 1000);
};

buttonStart.addEventListener("click", () => {
    let duration = 60 * document.querySelector("#time").value;
    let display = document.querySelector("#contagem");
    const audioPlay = new Audio ("https://richardaraujob.github.io/pomodoro/play.wav");
    
    timer(duration, display)
    audioPlay.play();

    document.querySelector("#stop").removeAttribute("hidden", "hidden");
    document.querySelector("#edit").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").style.fontSize= "44px";
    document.querySelector("#insert-timer").style.display = "none";
    document.querySelector("#pause").removeAttribute("hidden", "hidden");
    document.querySelector("#barra-contagem").removeAttribute("hidden", "hidden");
    buttonPomodoro.click();
});

buttonEdit.addEventListener("click", () => {
    document.querySelector("#insert-timer").style.display = "flex";
});

buttonBack.addEventListener("click", () => {
    let altereValue = Math.round(document.querySelector("#time").value);
    let altereValue2 = Math.round(document.querySelector("#break-time").value);

    altereValue = altereValue < 10 ? "0" + altereValue : altereValue;
    altereValue2 = altereValue2 < 10 ? "0" + altereValue2 : altereValue2;

    document.querySelector("#insert-timer").style.display = "none";
    document.querySelector("#cont").value = document.querySelector("#time").value;
    document.querySelector("#contagem").innerHTML = altereValue + ":" + "00";
    document.querySelector("#break-contagem").innerHTML = altereValue2 + ":" + "00";
});

buttonPause.addEventListener("click", () => {
    clearTimeout(cron)

    document.querySelector("#recomecar").removeAttribute("hidden", "hidden");
    document.querySelector("#pause").setAttribute("hidden", "hidden");
});

buttonStop.addEventListener("click", () => {
    let altereValue = document.querySelector("#time").value;
    let altereValue2 = document.querySelector("#break-time").value;

    altereValue = altereValue < 10 ? "0" + altereValue : altereValue;
    altereValue2 = altereValue2 < 10 ? "0" + altereValue2 : altereValue2;

    clearInterval(cron)

    document.querySelector("#stop").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").innerHTML = altereValue + ":" + "00";
    document.querySelector("#break-contagem").innerHTML = altereValue2 + ":" + "00"
    document.querySelector("#edit").removeAttribute("hidden", "hidden");
    document.querySelector("#recomecar").setAttribute("hidden", "hidden");
    document.querySelector("#pause").setAttribute("hidden", "hidden");
    document.querySelector("#barra-contagem").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").style.fontSize= "34px";
    document.querySelector("#break-contagem").style.fontSize= "34px";
    buttonBreak.removeAttribute("disabled", "disabled");
    buttonPomodoro.removeAttribute("disabled", "disabled");
    buttonPomodoro.click(); 
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


window.addEventListener("load", () => {
    buttonPomodoro.style.border = "1px solid #554FFF";
});

buttonBreak.addEventListener("click", () => {
    buttonBreak.style.border = "1px solid #554FFF";
    buttonPomodoro.style.border = "none";

    document.querySelector("#break-contagem").removeAttribute("hidden", "hidden");
    document.querySelector("#contagem").setAttribute("hidden", "hidden");
});

buttonPomodoro.addEventListener("click", () => {
    buttonBreak.style.border = "none";
    buttonPomodoro.style.border = "1px solid #554FFF";

    document.querySelector("#break-contagem").setAttribute("hidden", "hidden");
    document.querySelector("#contagem").removeAttribute("hidden", "hidden");
});


function breakTime(duration, display) {
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

            let duration = 60 * document.querySelector("#time").value;
            let display = document.querySelector("#contagem");
            
    
            timer(duration, display)

            const play = new Audio ('https://richardaraujob.github.io/pomodoro/play.wav');
            play.play();

            buttonBreak.style.border = "none";
            buttonPomodoro.style.border = "1px solid #554FFF";
        }
    }, 1000);
};
