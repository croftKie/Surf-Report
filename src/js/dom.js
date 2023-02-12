import { currentForecast } from "./weather-data";



const data = currentForecast();

// DOM module modification on change of day
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
            wavePeriod(e.textContent);
            windDirection(e.textContent);
            windSpeed(e.textContent);
            waveHourly(e.textContent);
            windHourly(e.textContent);
        });
    });
}

// populates date/day DOM module
function dateDom(selectedDay, currentDate, currentMonth, currentYears){
    switch (currentMonth) {
        case 0:
            currentMonth = "January";
            break;
        case 1:
            currentMonth = "February";
            break;
        case 2:
            currentMonth = "March";
            break;
        case 3:
            currentMonth = "April";
            break;
        case 4:
            currentMonth = "May";
            break;
        case 5:
            currentMonth = "June";
            break;
        case 6:
            currentMonth = "July";
            break;
        case 7:
            currentMonth = "August";
            break;
        case 8:
            currentMonth = "September";
            break;
        case 9:
            currentMonth = "October";
            break;
        case 10:
            currentMonth = "November";
            break;
        case 11:
            currentMonth = "December";
            break;
    }
    document.getElementById('textTest').textContent = `${currentDate} ${currentMonth} ${currentYears}`
    document.getElementById('dayTest').textContent = `${selectedDay}`
}

// populates air temp DOM module
function airTemp(selectedDay){
    let avgTemp = 0;
    data[selectedDay].forEach((e)=>{
        avgTemp += e.airTemperature.noaa
    });
    avgTemp = avgTemp/data[selectedDay].length;
    document.getElementById('airTemp').textContent = `${avgTemp.toPrecision(2)}°C`;
}


// populates wave height DOM module
function waveHeight(selectedDay){
    let avgHeight = 0;
    data[selectedDay].forEach((e)=>{
        avgHeight += e.waveHeight.noaa
    });
    avgHeight = avgHeight/data[selectedDay].length;
    document.getElementById('waveHeight').textContent = `${avgHeight.toPrecision(2)}m`;
}

// populates wave period DOM module
function wavePeriod(selectedDay){
    let avgTime = 0;
    data[selectedDay].forEach((e)=>{
        avgTime += e.wavePeriod.noaa
    });
    avgTime = avgTime/data[selectedDay].length;
    document.getElementById('wavePeriod').textContent = `${avgTime.toPrecision(2)}s`;
}

// populates wind direction DOM module
function windDirection(selectedDay){
    let avgDegrees = 0;
    data[selectedDay].forEach((e)=>{
        avgDegrees += e.windDirection.noaa
    });
    avgDegrees = avgDegrees/data[selectedDay].length;
    document.getElementById('windDirection').textContent = `${degreeToCardinal(avgDegrees)}`;
    console.log(avgDegrees)
}

// populates wind speed DOM module
function windSpeed(selectedDay){
    let avgSpeed = 0;
    data[selectedDay].forEach((e)=>{
        avgSpeed += e.windSpeed.noaa
    });
    avgSpeed = avgSpeed/data[selectedDay].length;
    document.getElementById('windSpeed').textContent = `${avgSpeed.toPrecision(2)}m/s`;
}

// populate hourly wave height module
function waveHourly(selectedDay){
    let hoursDom = document.querySelectorAll('.hours');
    let hoursArrDom = [];
    hoursDom.forEach((hour)=>{
        hoursArrDom.push(hour.childNodes);
    });
    let hoursData = [];
    data[selectedDay].forEach((e)=>{
        hoursData.push(e.waveHeight.noaa);
    });
    let count = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 8; j++) {
            hoursArrDom[i][j].childNodes[1].textContent = `${hoursData[count]}m`;
            count++;
        }
    }
}


// populate hourly wind direction module
function windHourly(selectedDay){
    let hoursDom = document.querySelectorAll('.hours');
    let hoursArrDom = [];
    hoursDom.forEach((hour)=>{
        hoursArrDom.push(hour.childNodes);
    });
    let hoursData = [];
    data[selectedDay].forEach((e)=>{
        hoursData.push(e.windDirection.noaa);
    });
    let count = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 8; j++) {
            hoursArrDom[i][j].childNodes[2].textContent = `${degreeToCardinal(hoursData[count])}`;
            count++;
        }
    }
}


function degreeToCardinal(avgDegrees){
    let direction;
    if (avgDegrees > 337 && avgDegrees <= 22) {
        direction = "North";
    } else if (avgDegrees > 22 && avgDegrees <= 67) {
        direction = "North East";
    } else if (avgDegrees > 67 && avgDegrees <= 112) {
        direction = "East";
    } else if (avgDegrees > 112 && avgDegrees <= 157) {
        direction = "South East";
    } else if (avgDegrees > 157 && avgDegrees <= 202) {
        direction = "South";
    } else if (avgDegrees > 202 && avgDegrees <= 247) {
        direction = "South West";
    } else if (avgDegrees > 247 && avgDegrees <= 292) {
        direction = "West";
    } else if (avgDegrees > 292 && avgDegrees <= 337) {
        direction = "North West";
    }
    return direction;
}