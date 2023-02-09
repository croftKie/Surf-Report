import { currentForecast } from "./weather-data";

const data = currentForecast();
console.log(data);
export function dom() {
    const buttons = document.querySelectorAll('.d');
    let count = 0;
    buttons.forEach((e)=>{
        e.textContent = Object.keys(data)[count];
        count++
        e.addEventListener('click',()=>{
            dateDom(e.textContent,
                    data[e.textContent][0].time.getDate(),
                    data[e.textContent][0].time.getMonth(),
                    data[e.textContent][0].time.getFullYear());
            airTemp(e.textContent);
            waveHeight(e.textContent);
        });
    });
}


function waveHeight(selectedDay){
    let avgHeight = 0;
    data[selectedDay].forEach((e)=>{
        avgHeight += e.waveHeight.dwd
    });
    avgHeight = avgHeight/data[selectedDay].length;
    document.getElementById('waveHeight').textContent = `${avgHeight.toPrecision(2)}m`;
}


function airTemp(selectedDay){
    let avgTemp = 0;
    data[selectedDay].forEach((e)=>{
        avgTemp += e.airTemperature.dwd
    });
    avgTemp = avgTemp/data[selectedDay].length;
    document.getElementById('airTemp').textContent = `${avgTemp.toPrecision(2)}°C`;
}

function dateDom(selectedDay, currentDate, currentMonth, currentYears){
    switch (currentMonth) {
        case 0:
            currentMonth = "January";
            break;
        case 1:
            currentMonth = "February";
            break;
    }
    document.getElementById('textTest').textContent = `${currentDate} ${currentMonth} ${currentYears}`
    document.getElementById('dayTest').textContent = `${selectedDay}`
}