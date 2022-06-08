function botonCronometro() {
    hCron = 0;
    mCron = 0;
    sCron = 0;
    botonStart = document.getElementById("start_crono");
    botonRestart = document.getElementById("restart_crono");
    botonStop = document.getElementById("stop_crono");

    botonStart.addEventListener("click", () => {
        tiempo();
        intervaloCrono = setInterval(tiempo, 1000);
        botonStart.disabled = true;
        botonRestart.disabled = false;
        botonStop.disabled = false;
    })

    botonRestart.addEventListener("click", () => {
        clearInterval(intervaloCrono);
        hCron = 0;
        mCron = 0;
        sCron = 0;
        document.getElementById("text_cronometro").innerHTML = "00:00:00";
        botonStart.disabled = false;
        botonRestart.disabled = true;
        botonStop.disabled = true;
    })

    botonStop.addEventListener("click", () => {
        botonStop.disabled = true;
        botonStart.disabled = false;
        clearInterval(intervaloCrono);
    })




}

function tiempo() {
    sCron++
    if (sCron > 59) {
        mCron++;
        sCron = 0;
    }
    if (mCron > 60) {
        hCron++;
        mCron = 0;
    }

    if (sCron < 10) {
        sAuxCron = "0" + sCron;
    } else {
        sAuxCron = sCron;
    }

    if (mCron < 10) {
        mAuxCron = "0" + mCron
    } else {
        mAuxCron = mCron;
    }

    if (hCron < 10) {
        hAuxCron = "0" + hCron
    } else {
        hAuxCron = hCron;
    }
    document.getElementById("text_cronometro").innerHTML = hAuxCron + ":" + mAuxCron + ":" + sAuxCron;
}

function cronometro() {
    botonCronometro();



    document.getElementById("text_cronometro").innerHTML = "00:00:00";
}