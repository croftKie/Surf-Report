const noDataRef = 'No Data';

// DOM module modification on change of day
export function dom(surfData) {
    const buttons = document.querySelectorAll('.d');
    let count = 0;
    try {
        buttons.forEach((e)=>{
            e.textContent = Object.keys(surfData)[count];
            count++
            e.addEventListener('click',()=>{
                dateDom(e.textContent,
                    surfData[e.textContent][0].time.getDate(),
                    surfData[e.textContent][0].time.getMonth(),
                    surfData[e.textContent][0].time.getFullYear());
                airTemp(surfData, e.textContent);
                waveHeight(surfData, e.textContent);
                wavePeriod(surfData, e.textContent);
                windDirection(surfData, e.textContent);
                windSpeed(surfData, e.textContent);
                waveHourly(surfData, e.textContent);
                windHourly(surfData, e.textContent);
            });
        });
    } catch (error) {
        return;
    }
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
function airTemp(data, selectedDay){
    try {
        let avgTemp = 0;
        data[selectedDay].forEach((e)=>{
            avgTemp += e.airTemperature.noaa
        });
        avgTemp = avgTemp/data[selectedDay].length;
        document.getElementById('airTemp').textContent = `${avgTemp.toPrecision(2)}°C`;
    } catch {
        document.getElementById('airTemp').textContent = noDataRef;
    }
}


// populates wave height DOM module
function waveHeight(data, selectedDay){
    try {
        let avgHeight = 0;
        data[selectedDay].forEach((e)=>{
            avgHeight += e.waveHeight.noaa
        });
        avgHeight = avgHeight/data[selectedDay].length;
        document.getElementById('waveHeight').textContent = `${avgHeight.toPrecision(2)}m`;
    } catch {
        document.getElementById('waveHeight').textContent = noDataRef;
    }

}

// populates wave period DOM module
function wavePeriod(data, selectedDay){
    try {
        let avgTime = 0;
        data[selectedDay].forEach((e)=>{
            avgTime += e.wavePeriod.noaa
        });
        avgTime = avgTime/data[selectedDay].length;
        document.getElementById('wavePeriod').textContent = `${avgTime.toPrecision(2)}s`;
    } catch {
        document.getElementById('wavePeriod').textContent = noDataRef;
    }


}

// populates wind direction DOM module
function windDirection(data, selectedDay){
    try {
        let avgDegrees = 0;
        data[selectedDay].forEach((e)=>{
            avgDegrees += e.windDirection.noaa
        });
        avgDegrees = avgDegrees/data[selectedDay].length;
        document.getElementById('windDirection').textContent = `${degreeToCardinal(avgDegrees)}`;
    } catch {
        document.getElementById('windDirection').textContent = noDataRef;
    }


}

// populates wind speed DOM module
function windSpeed(data, selectedDay){
    try {
        let avgSpeed = 0;
        data[selectedDay].forEach((e)=>{
            avgSpeed += e.windSpeed.noaa
        });
        avgSpeed = avgSpeed/data[selectedDay].length;
        document.getElementById('windSpeed').textContent = `${avgSpeed.toPrecision(2)}m/s`;
    } catch {
        document.getElementById('windSpeed').textContent = noDataRef;
    }

}

// populate hourly wave height module
function waveHourly(data, selectedDay){
    let hoursDom = document.querySelectorAll('.hours');
    let hoursArrDom = [];
    let hoursData = [];
    hoursDom.forEach((hour)=>{
        hoursArrDom.push(hour.childNodes);
    });
    try {
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
    } catch {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 8; j++) {
                hoursArrDom[i][j].childNodes[1].textContent = noDataRef;
                count++;
            }
        }
    }

}


// populate hourly wind direction module
function windHourly(data, selectedDay){
    let hoursDom = document.querySelectorAll('.hours');
    let hoursArrDom = [];
    let hoursData = [];
    hoursDom.forEach((hour)=>{
        hoursArrDom.push(hour.childNodes);
    });
    try {
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
    } catch {
        let count = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 8; j++) {
                hoursArrDom[i][j].childNodes[2].textContent = noDataRef;
                count++;
            }
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