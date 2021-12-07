let time = document.getElementById("time")
let minutes = document.getElementById("minutes")


function startMinCountdown(){
    let min = Number(minutes.value-1)
    let sec = Number(60)
    let startCounter = () => {
        sec--
        if(sec == 00){
            min--
            sec = Number(60)
        }
        time.innerHTML = min + ":" + sec
        if(min === 0 && sec === 1){
            pauseMinCountdown()
            time.innerHTML = "00:00"
        }
    }
    pauseCounter = setInterval(startCounter,1000)
}

function pauseMinCountdown(){
    clearInterval(pauseCounter)
}
function restartMinCountdown(){
    time.innerHTML = "00:00"
    clearInterval(pauseCounter)
    startMinCountdown()
}

