let count = 0;
let timeleft = 10;
let timeId;

const clickbatton = document.getElementById("clickbatton")
const timedisplay = document.getElementById("time")
const countdisplay = document.getElementById("count")

//Обработчик кликов
clickbatton.addEventListener("click", () =>{
    count = count +1;
    countdisplay.textContent = count;
});

function StartGame(){
    count = 0
    timeleft = 10;

    countdisplay.textContent = count;
    timedisplay.textContent = timeleft;

    clickbatton.disabled = false;

    timeId = setInterval( ()=>{
        timeleft = timeleft - 1;
        timedisplay.textContent = timeleft;

        //Если время уйдет в минус или закончится
        if (timeleft <=0){
            clearInterval(timeId);
            clickbatton.disabled = true;
            alert("Время вышло! выкликнули " + count + "раз.")
        }



    }, 1000);
}