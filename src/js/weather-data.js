import { weatherData } from "./weather-api";

// Populates day object with array of weather data
export function currentForecast(weatherData){
    let data = SplitDatabyDay(weatherData);
    for (const prop in data) {
        let date = data[prop][0].time;
        data[selectDayofWeek(date.getDay())] = data[prop];
        delete data[prop];
    }
    return data;
}

// Assigns day name to object key
function selectDayofWeek(time){
    let day;
    switch (time) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        
    }
    return day;
}

// splits weather data object into days
function SplitDatabyDay(weatherData){
    const days = {
        1 : [],
        2 : [],
        3 : [],
        4 : [],
        5 : [],
        6 : [],
        7 : []
    }
    const today = new Date();
    try {
        weatherData.hours.forEach((element)=>{
            let date = new Date(element.time);
            element.time = date;
            if (date.getDate() === today.getDate()) {
                days[1].push(element);
            } else if (date.getDate() === today.getDate()+1) {
                days[2].push(element);
            } else if (date.getDate() === today.getDate()+2) {
                days[3].push(element);
            } else if (date.getDate() === today.getDate()+3) {
                days[4].push(element);
            } else if (date.getDate() === today.getDate()+4) {
                days[5].push(element);
            } else if (date.getDate() === today.getDate()+5) {
                days[6].push(element);
            } else if (date.getDate() === today.getDate()+6) {
                days[7].push(element);
            }
        });
    } catch (error) {
        return;
    }
    return days
}

// weather data
// let weatherData = {
//     "hours": [
//         {
//             "airTemperature": {
//                 "dwd": 7.13,
//                 "noaa": 4.14,
//                 "sg": 7.13
//             },
//             "swellHeight": {
//                 "dwd": 0.77,
//                 "icon": 0.73,
//                 "meteo": 0.6,
//                 "meto": 0.48,
//                 "noaa": 0.12,
//                 "sg": 0.48
//             },
//             "swellPeriod": {
//                 "dwd": 12.2,
//                 "icon": 12.23,
//                 "meteo": 10.16,
//                 "meto": 8.58,
//                 "noaa": 17.96,
//                 "sg": 8.58
//             },
//             "time": "2023-02-12T00:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.77,
//                 "fcoo": 0.51,
//                 "icon": 0.73,
//                 "meteo": 0.65,
//                 "meto": 0.54,
//                 "noaa": 0.6,
//                 "sg": 0.51
//             },
//             "wavePeriod": {
//                 "fcoo": 7.03,
//                 "icon": 12.23,
//                 "meteo": 4.78,
//                 "meto": 8.59,
//                 "noaa": 10.21,
//                 "sg": 7.03
//             },
//             "windDirection": {
//                 "icon": 248.66,
//                 "noaa": 265.23,
//                 "sg": 248.66
//             },
//             "windSpeed": {
//                 "icon": 1.89,
//                 "noaa": 2.61,
//                 "sg": 1.89
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.95,
//                 "noaa": 3.93,
//                 "sg": 6.95
//             },
//             "swellHeight": {
//                 "dwd": 0.79,
//                 "icon": 0.74,
//                 "meteo": 0.61,
//                 "meto": 0.55,
//                 "noaa": 0.26,
//                 "sg": 0.55
//             },
//             "swellPeriod": {
//                 "dwd": 12.36,
//                 "icon": 12.3,
//                 "meteo": 10.12,
//                 "meto": 9.59,
//                 "noaa": 15.51,
//                 "sg": 9.59
//             },
//             "time": "2023-02-12T01:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.79,
//                 "fcoo": 0.53,
//                 "icon": 0.74,
//                 "meteo": 0.66,
//                 "meto": 0.55,
//                 "noaa": 0.61,
//                 "sg": 0.53
//             },
//             "wavePeriod": {
//                 "fcoo": 6.97,
//                 "icon": 12.3,
//                 "meteo": 5.09,
//                 "meto": 8.75,
//                 "noaa": 10.73,
//                 "sg": 6.97
//             },
//             "windDirection": {
//                 "icon": 251.51,
//                 "noaa": 266.27,
//                 "sg": 251.51
//             },
//             "windSpeed": {
//                 "icon": 1.95,
//                 "noaa": 2.44,
//                 "sg": 1.95
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.84,
//                 "noaa": 3.73,
//                 "sg": 6.84
//             },
//             "swellHeight": {
//                 "dwd": 0.81,
//                 "icon": 0.75,
//                 "meteo": 0.63,
//                 "meto": 0.56,
//                 "noaa": 0.41,
//                 "sg": 0.56
//             },
//             "swellPeriod": {
//                 "dwd": 12.47,
//                 "icon": 12.37,
//                 "meteo": 10.08,
//                 "meto": 9.71,
//                 "noaa": 13.06,
//                 "sg": 9.71
//             },
//             "time": "2023-02-12T02:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.81,
//                 "fcoo": 0.54,
//                 "icon": 0.75,
//                 "meteo": 0.66,
//                 "meto": 0.56,
//                 "noaa": 0.63,
//                 "sg": 0.54
//             },
//             "wavePeriod": {
//                 "fcoo": 7.3,
//                 "icon": 12.37,
//                 "meteo": 5.4,
//                 "meto": 8.91,
//                 "noaa": 11.24,
//                 "sg": 7.3
//             },
//             "windDirection": {
//                 "icon": 254.35,
//                 "noaa": 267.32,
//                 "sg": 254.35
//             },
//             "windSpeed": {
//                 "icon": 2.01,
//                 "noaa": 2.26,
//                 "sg": 2.01
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.78,
//                 "noaa": 3.52,
//                 "sg": 6.78
//             },
//             "swellHeight": {
//                 "dwd": 0.82,
//                 "icon": 0.76,
//                 "meteo": 0.64,
//                 "meto": 0.58,
//                 "noaa": 0.55,
//                 "sg": 0.58
//             },
//             "swellPeriod": {
//                 "dwd": 12.52,
//                 "icon": 12.44,
//                 "meteo": 10.04,
//                 "meto": 9.83,
//                 "noaa": 10.61,
//                 "sg": 9.83
//             },
//             "time": "2023-02-12T03:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.82,
//                 "fcoo": 0.55,
//                 "icon": 0.76,
//                 "meteo": 0.67,
//                 "meto": 0.58,
//                 "noaa": 0.64,
//                 "sg": 0.55
//             },
//             "wavePeriod": {
//                 "fcoo": 7.68,
//                 "icon": 12.44,
//                 "meteo": 5.71,
//                 "meto": 9.06,
//                 "noaa": 11.76,
//                 "sg": 7.68
//             },
//             "windDirection": {
//                 "icon": 257.2,
//                 "noaa": 268.36,
//                 "sg": 257.2
//             },
//             "windSpeed": {
//                 "icon": 2.07,
//                 "noaa": 2.09,
//                 "sg": 2.07
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.67,
//                 "noaa": 3.43,
//                 "sg": 6.67
//             },
//             "swellHeight": {
//                 "dwd": 0.84,
//                 "icon": 0.76,
//                 "meteo": 0.66,
//                 "meto": 0.6,
//                 "noaa": 0.59,
//                 "sg": 0.6
//             },
//             "swellPeriod": {
//                 "dwd": 12.54,
//                 "icon": 12.43,
//                 "meteo": 9.99,
//                 "meto": 9.97,
//                 "noaa": 11,
//                 "sg": 9.97
//             },
//             "time": "2023-02-12T04:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.84,
//                 "fcoo": 0.56,
//                 "icon": 0.76,
//                 "meteo": 0.69,
//                 "meto": 0.6,
//                 "noaa": 0.65,
//                 "sg": 0.56
//             },
//             "wavePeriod": {
//                 "fcoo": 8.01,
//                 "icon": 12.43,
//                 "meteo": 5.52,
//                 "meto": 9.22,
//                 "noaa": 11.77,
//                 "sg": 8.01
//             },
//             "windDirection": {
//                 "icon": 254.03,
//                 "noaa": 256.53,
//                 "sg": 254.03
//             },
//             "windSpeed": {
//                 "icon": 2.03,
//                 "noaa": 2.02,
//                 "sg": 2.03
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.46,
//                 "noaa": 3.34,
//                 "sg": 6.46
//             },
//             "swellHeight": {
//                 "dwd": 0.85,
//                 "icon": 0.77,
//                 "meteo": 0.68,
//                 "meto": 0.62,
//                 "noaa": 0.63,
//                 "sg": 0.62
//             },
//             "swellPeriod": {
//                 "dwd": 12.52,
//                 "icon": 12.42,
//                 "meteo": 9.94,
//                 "meto": 10.14,
//                 "noaa": 11.39,
//                 "sg": 10.14
//             },
//             "time": "2023-02-12T05:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.85,
//                 "fcoo": 0.57,
//                 "icon": 0.77,
//                 "meteo": 0.7,
//                 "meto": 0.62,
//                 "noaa": 0.66,
//                 "sg": 0.57
//             },
//             "wavePeriod": {
//                 "fcoo": 8.34,
//                 "icon": 12.42,
//                 "meteo": 5.34,
//                 "meto": 9.42,
//                 "noaa": 11.77,
//                 "sg": 8.34
//             },
//             "windDirection": {
//                 "icon": 250.87,
//                 "noaa": 244.69,
//                 "sg": 250.87
//             },
//             "windSpeed": {
//                 "icon": 2,
//                 "noaa": 1.95,
//                 "sg": 2
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.14,
//                 "noaa": 3.25,
//                 "sg": 6.14
//             },
//             "swellHeight": {
//                 "dwd": 0.86,
//                 "icon": 0.77,
//                 "meteo": 0.7,
//                 "meto": 0.63,
//                 "noaa": 0.67,
//                 "sg": 0.63
//             },
//             "swellPeriod": {
//                 "dwd": 12.49,
//                 "icon": 12.41,
//                 "meteo": 9.89,
//                 "meto": 10.33,
//                 "noaa": 11.78,
//                 "sg": 10.33
//             },
//             "time": "2023-02-12T06:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.86,
//                 "fcoo": 0.59,
//                 "icon": 0.77,
//                 "meteo": 0.72,
//                 "meto": 0.63,
//                 "noaa": 0.67,
//                 "sg": 0.59
//             },
//             "wavePeriod": {
//                 "fcoo": 8.72,
//                 "icon": 12.41,
//                 "meteo": 5.15,
//                 "meto": 9.65,
//                 "noaa": 11.78,
//                 "sg": 8.72
//             },
//             "windDirection": {
//                 "icon": 247.7,
//                 "noaa": 232.86,
//                 "sg": 247.7
//             },
//             "windSpeed": {
//                 "icon": 1.96,
//                 "noaa": 1.88,
//                 "sg": 1.96
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.78,
//                 "noaa": 3.75,
//                 "sg": 5.78
//             },
//             "swellHeight": {
//                 "dwd": 0.87,
//                 "icon": 0.77,
//                 "meteo": 0.71,
//                 "meto": 0.65,
//                 "noaa": 0.66,
//                 "sg": 0.65
//             },
//             "swellPeriod": {
//                 "dwd": 12.44,
//                 "icon": 12.37,
//                 "meteo": 9.87,
//                 "meto": 10.5,
//                 "noaa": 11.71,
//                 "sg": 10.5
//             },
//             "time": "2023-02-12T07:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.87,
//                 "fcoo": 0.61,
//                 "icon": 0.77,
//                 "meteo": 0.73,
//                 "meto": 0.65,
//                 "noaa": 0.68,
//                 "sg": 0.61
//             },
//             "wavePeriod": {
//                 "fcoo": 9.07,
//                 "icon": 12.37,
//                 "meteo": 5.67,
//                 "meto": 9.87,
//                 "noaa": 11.72,
//                 "sg": 9.07
//             },
//             "windDirection": {
//                 "icon": 246.33,
//                 "noaa": 231.02,
//                 "sg": 246.33
//             },
//             "windSpeed": {
//                 "icon": 1.94,
//                 "noaa": 1.8,
//                 "sg": 1.94
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.45,
//                 "noaa": 4.26,
//                 "sg": 5.45
//             },
//             "swellHeight": {
//                 "dwd": 0.88,
//                 "icon": 0.77,
//                 "meteo": 0.72,
//                 "meto": 0.66,
//                 "noaa": 0.66,
//                 "sg": 0.66
//             },
//             "swellPeriod": {
//                 "dwd": 12.39,
//                 "icon": 12.32,
//                 "meteo": 9.85,
//                 "meto": 10.59,
//                 "noaa": 11.65,
//                 "sg": 10.59
//             },
//             "time": "2023-02-12T08:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.88,
//                 "fcoo": 0.65,
//                 "icon": 0.77,
//                 "meteo": 0.73,
//                 "meto": 0.66,
//                 "noaa": 0.68,
//                 "sg": 0.65
//             },
//             "wavePeriod": {
//                 "fcoo": 9.22,
//                 "icon": 12.32,
//                 "meteo": 6.18,
//                 "meto": 10.02,
//                 "noaa": 11.66,
//                 "sg": 9.22
//             },
//             "windDirection": {
//                 "icon": 244.97,
//                 "noaa": 229.17,
//                 "sg": 244.97
//             },
//             "windSpeed": {
//                 "icon": 1.92,
//                 "noaa": 1.71,
//                 "sg": 1.92
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.26,
//                 "noaa": 4.76,
//                 "sg": 5.26
//             },
//             "swellHeight": {
//                 "dwd": 0.88,
//                 "icon": 0.77,
//                 "meteo": 0.73,
//                 "meto": 0.66,
//                 "noaa": 0.65,
//                 "sg": 0.66
//             },
//             "swellPeriod": {
//                 "dwd": 12.32,
//                 "icon": 12.28,
//                 "meteo": 9.83,
//                 "meto": 10.63,
//                 "noaa": 11.58,
//                 "sg": 10.63
//             },
//             "time": "2023-02-12T09:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.89,
//                 "fcoo": 0.69,
//                 "icon": 0.77,
//                 "meteo": 0.74,
//                 "meto": 0.66,
//                 "noaa": 0.69,
//                 "sg": 0.69
//             },
//             "wavePeriod": {
//                 "fcoo": 9.29,
//                 "icon": 12.28,
//                 "meteo": 6.7,
//                 "meto": 10.09,
//                 "noaa": 11.6,
//                 "sg": 9.29
//             },
//             "windDirection": {
//                 "icon": 243.6,
//                 "noaa": 227.33,
//                 "sg": 243.6
//             },
//             "windSpeed": {
//                 "icon": 1.9,
//                 "noaa": 1.63,
//                 "sg": 1.9
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.34,
//                 "noaa": 6.19,
//                 "sg": 5.34
//             },
//             "swellHeight": {
//                 "dwd": 0.89,
//                 "icon": 0.77,
//                 "meteo": 0.72,
//                 "meto": 0.66,
//                 "noaa": 0.64,
//                 "sg": 0.66
//             },
//             "swellPeriod": {
//                 "dwd": 12.11,
//                 "icon": 12.22,
//                 "meteo": 9.72,
//                 "meto": 10.6,
//                 "noaa": 11.41,
//                 "sg": 10.6
//             },
//             "time": "2023-02-12T10:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.91,
//                 "fcoo": 0.72,
//                 "icon": 0.77,
//                 "meteo": 0.73,
//                 "meto": 0.66,
//                 "noaa": 0.69,
//                 "sg": 0.72
//             },
//             "wavePeriod": {
//                 "fcoo": 9.51,
//                 "icon": 12.22,
//                 "meteo": 7.33,
//                 "meto": 10.09,
//                 "noaa": 11.45,
//                 "sg": 9.51
//             },
//             "windDirection": {
//                 "icon": 238.7,
//                 "noaa": 218.83,
//                 "sg": 238.7
//             },
//             "windSpeed": {
//                 "icon": 2.1,
//                 "noaa": 2.11,
//                 "sg": 2.1
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.66,
//                 "noaa": 7.61,
//                 "sg": 5.66
//             },
//             "swellHeight": {
//                 "dwd": 0.89,
//                 "icon": 0.76,
//                 "meteo": 0.72,
//                 "meto": 0.65,
//                 "noaa": 0.64,
//                 "sg": 0.65
//             },
//             "swellPeriod": {
//                 "dwd": 12.11,
//                 "icon": 12.17,
//                 "meteo": 9.62,
//                 "meto": 10.55,
//                 "noaa": 11.24,
//                 "sg": 10.55
//             },
//             "time": "2023-02-12T11:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.9,
//                 "fcoo": 0.74,
//                 "icon": 0.76,
//                 "meteo": 0.73,
//                 "meto": 0.65,
//                 "noaa": 0.7,
//                 "sg": 0.74
//             },
//             "wavePeriod": {
//                 "fcoo": 9.87,
//                 "icon": 12.17,
//                 "meteo": 7.96,
//                 "meto": 10.05,
//                 "noaa": 11.3,
//                 "sg": 9.87
//             },
//             "windDirection": {
//                 "icon": 233.81,
//                 "noaa": 210.32,
//                 "sg": 233.81
//             },
//             "windSpeed": {
//                 "icon": 2.3,
//                 "noaa": 2.59,
//                 "sg": 2.3
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.2,
//                 "noaa": 9.04,
//                 "sg": 6.2
//             },
//             "swellHeight": {
//                 "dwd": 0.88,
//                 "icon": 0.76,
//                 "meteo": 0.71,
//                 "meto": 0.64,
//                 "noaa": 0.63,
//                 "sg": 0.64
//             },
//             "swellPeriod": {
//                 "dwd": 12.09,
//                 "icon": 12.11,
//                 "meteo": 9.51,
//                 "meto": 10.48,
//                 "noaa": 11.07,
//                 "sg": 10.48
//             },
//             "time": "2023-02-12T12:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.89,
//                 "fcoo": 0.76,
//                 "icon": 0.76,
//                 "meteo": 0.72,
//                 "meto": 0.64,
//                 "noaa": 0.7,
//                 "sg": 0.76
//             },
//             "wavePeriod": {
//                 "fcoo": 10.13,
//                 "icon": 12.11,
//                 "meteo": 8.59,
//                 "meto": 9.98,
//                 "noaa": 11.15,
//                 "sg": 10.13
//             },
//             "windDirection": {
//                 "icon": 228.91,
//                 "noaa": 201.82,
//                 "sg": 228.91
//             },
//             "windSpeed": {
//                 "icon": 2.5,
//                 "noaa": 3.07,
//                 "sg": 2.5
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.75,
//                 "noaa": 9.27,
//                 "sg": 6.75
//             },
//             "swellHeight": {
//                 "dwd": 0.88,
//                 "icon": 0.76,
//                 "meteo": 0.7,
//                 "meto": 0.62,
//                 "noaa": 0.62,
//                 "sg": 0.62
//             },
//             "swellPeriod": {
//                 "dwd": 12.08,
//                 "icon": 12.07,
//                 "meteo": 9.41,
//                 "meto": 10.41,
//                 "noaa": 11.06,
//                 "sg": 10.41
//             },
//             "time": "2023-02-12T13:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.88,
//                 "fcoo": 0.77,
//                 "icon": 0.76,
//                 "meteo": 0.7,
//                 "meto": 0.62,
//                 "noaa": 0.7,
//                 "sg": 0.77
//             },
//             "wavePeriod": {
//                 "fcoo": 10.23,
//                 "icon": 12.06,
//                 "meteo": 8.63,
//                 "meto": 9.9,
//                 "noaa": 11.62,
//                 "sg": 10.23
//             },
//             "windDirection": {
//                 "icon": 226.52,
//                 "noaa": 198.79,
//                 "sg": 226.52
//             },
//             "windSpeed": {
//                 "icon": 2.68,
//                 "noaa": 3.23,
//                 "sg": 2.68
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.16,
//                 "noaa": 9.5,
//                 "sg": 7.16
//             },
//             "swellHeight": {
//                 "dwd": 0.87,
//                 "icon": 0.75,
//                 "meteo": 0.68,
//                 "meto": 0.61,
//                 "noaa": 0.61,
//                 "sg": 0.61
//             },
//             "swellPeriod": {
//                 "dwd": 12.04,
//                 "icon": 12.02,
//                 "meteo": 9.31,
//                 "meto": 10.34,
//                 "noaa": 11.04,
//                 "sg": 10.34
//             },
//             "time": "2023-02-12T14:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.87,
//                 "fcoo": 0.77,
//                 "icon": 0.75,
//                 "meteo": 0.69,
//                 "meto": 0.61,
//                 "noaa": 0.71,
//                 "sg": 0.77
//             },
//             "wavePeriod": {
//                 "fcoo": 10.22,
//                 "icon": 12.02,
//                 "meteo": 8.68,
//                 "meto": 9.8,
//                 "noaa": 12.09,
//                 "sg": 10.22
//             },
//             "windDirection": {
//                 "icon": 224.13,
//                 "noaa": 195.76,
//                 "sg": 224.13
//             },
//             "windSpeed": {
//                 "icon": 2.86,
//                 "noaa": 3.39,
//                 "sg": 2.86
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.35,
//                 "noaa": 9.73,
//                 "sg": 7.35
//             },
//             "swellHeight": {
//                 "dwd": 0.86,
//                 "icon": 0.75,
//                 "meteo": 0.67,
//                 "meto": 0.59,
//                 "noaa": 0.6,
//                 "sg": 0.59
//             },
//             "swellPeriod": {
//                 "dwd": 12.01,
//                 "icon": 11.98,
//                 "meteo": 9.21,
//                 "meto": 10.29,
//                 "noaa": 11.03,
//                 "sg": 10.29
//             },
//             "time": "2023-02-12T15:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.86,
//                 "fcoo": 0.78,
//                 "icon": 0.75,
//                 "meteo": 0.67,
//                 "meto": 0.59,
//                 "noaa": 0.71,
//                 "sg": 0.78
//             },
//             "wavePeriod": {
//                 "fcoo": 10.12,
//                 "icon": 11.97,
//                 "meteo": 8.72,
//                 "meto": 9.7,
//                 "noaa": 12.56,
//                 "sg": 10.12
//             },
//             "windDirection": {
//                 "icon": 221.74,
//                 "noaa": 192.73,
//                 "sg": 221.74
//             },
//             "windSpeed": {
//                 "icon": 3.04,
//                 "noaa": 3.55,
//                 "sg": 3.04
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.52,
//                 "noaa": 8.42,
//                 "sg": 7.52
//             },
//             "swellHeight": {
//                 "dwd": 0.85,
//                 "icon": 0.74,
//                 "meteo": 0.65,
//                 "meto": 0.59,
//                 "noaa": 0.43,
//                 "sg": 0.59
//             },
//             "swellPeriod": {
//                 "dwd": 11.97,
//                 "icon": 11.95,
//                 "meteo": 9.15,
//                 "meto": 10.24,
//                 "noaa": 13.43,
//                 "sg": 10.24
//             },
//             "time": "2023-02-12T16:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.85,
//                 "fcoo": 0.78,
//                 "icon": 0.74,
//                 "meteo": 0.66,
//                 "meto": 0.59,
//                 "noaa": 0.71,
//                 "sg": 0.78
//             },
//             "wavePeriod": {
//                 "fcoo": 9.93,
//                 "icon": 11.95,
//                 "meteo": 7.94,
//                 "meto": 9.66,
//                 "noaa": 12.36,
//                 "sg": 9.93
//             },
//             "windDirection": {
//                 "icon": 220.89,
//                 "noaa": 188.32,
//                 "sg": 220.89
//             },
//             "windSpeed": {
//                 "icon": 2.46,
//                 "noaa": 3.25,
//                 "sg": 2.46
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.63,
//                 "noaa": 7.1,
//                 "sg": 7.63
//             },
//             "swellHeight": {
//                 "dwd": 0.84,
//                 "icon": 0.73,
//                 "meteo": 0.64,
//                 "meto": 0.58,
//                 "noaa": 0.25,
//                 "sg": 0.58
//             },
//             "swellPeriod": {
//                 "dwd": 11.94,
//                 "icon": 11.93,
//                 "meteo": 9.09,
//                 "meto": 10.23,
//                 "noaa": 15.83,
//                 "sg": 10.23
//             },
//             "time": "2023-02-12T17:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.84,
//                 "fcoo": 0.78,
//                 "icon": 0.73,
//                 "meteo": 0.64,
//                 "meto": 0.58,
//                 "noaa": 0.7,
//                 "sg": 0.78
//             },
//             "wavePeriod": {
//                 "fcoo": 9.66,
//                 "icon": 11.92,
//                 "meteo": 7.15,
//                 "meto": 9.65,
//                 "noaa": 12.17,
//                 "sg": 9.66
//             },
//             "windDirection": {
//                 "icon": 220.04,
//                 "noaa": 183.9,
//                 "sg": 220.04
//             },
//             "windSpeed": {
//                 "icon": 1.89,
//                 "noaa": 2.95,
//                 "sg": 1.89
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.59,
//                 "noaa": 5.78,
//                 "sg": 7.59
//             },
//             "swellHeight": {
//                 "dwd": 0.83,
//                 "icon": 0.72,
//                 "meteo": 0.62,
//                 "meto": 0.57,
//                 "noaa": 0.08,
//                 "sg": 0.57
//             },
//             "swellPeriod": {
//                 "dwd": 11.91,
//                 "icon": 11.9,
//                 "meteo": 9.03,
//                 "meto": 10.24,
//                 "noaa": 18.23,
//                 "sg": 10.24
//             },
//             "time": "2023-02-12T18:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.83,
//                 "fcoo": 0.77,
//                 "icon": 0.72,
//                 "meteo": 0.63,
//                 "meto": 0.57,
//                 "noaa": 0.7,
//                 "sg": 0.77
//             },
//             "wavePeriod": {
//                 "fcoo": 9.53,
//                 "icon": 11.9,
//                 "meteo": 6.37,
//                 "meto": 9.59,
//                 "noaa": 11.97,
//                 "sg": 9.53
//             },
//             "windDirection": {
//                 "icon": 219.19,
//                 "noaa": 179.49,
//                 "sg": 219.19
//             },
//             "windSpeed": {
//                 "icon": 1.31,
//                 "noaa": 2.65,
//                 "sg": 1.31
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.46,
//                 "noaa": 5.4,
//                 "sg": 7.46
//             },
//             "swellHeight": {
//                 "dwd": 0.82,
//                 "icon": 0.71,
//                 "meteo": 0.6,
//                 "meto": 0.57,
//                 "noaa": 0.27,
//                 "sg": 0.57
//             },
//             "swellPeriod": {
//                 "dwd": 11.89,
//                 "icon": 11.9,
//                 "meteo": 9.02,
//                 "meto": 10.25,
//                 "noaa": 16.09,
//                 "sg": 10.25
//             },
//             "time": "2023-02-12T19:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.82,
//                 "fcoo": 0.75,
//                 "icon": 0.71,
//                 "meteo": 0.62,
//                 "meto": 0.57,
//                 "noaa": 0.7,
//                 "sg": 0.75
//             },
//             "wavePeriod": {
//                 "fcoo": 9.49,
//                 "icon": 11.9,
//                 "meteo": 6.07,
//                 "meto": 9.11,
//                 "noaa": 11.92,
//                 "sg": 9.49
//             },
//             "windDirection": {
//                 "icon": 215.78,
//                 "noaa": 180.87,
//                 "sg": 215.78
//             },
//             "windSpeed": {
//                 "icon": 1.37,
//                 "noaa": 2.65,
//                 "sg": 1.37
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.38,
//                 "noaa": 5.02,
//                 "sg": 7.38
//             },
//             "swellHeight": {
//                 "dwd": 0.81,
//                 "icon": 0.71,
//                 "meteo": 0.59,
//                 "meto": 0.56,
//                 "noaa": 0.47,
//                 "sg": 0.56
//             },
//             "swellPeriod": {
//                 "dwd": 11.88,
//                 "icon": 11.9,
//                 "meteo": 9.02,
//                 "meto": 10.18,
//                 "noaa": 13.96,
//                 "sg": 10.18
//             },
//             "time": "2023-02-12T20:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.81,
//                 "fcoo": 0.73,
//                 "icon": 0.71,
//                 "meteo": 0.61,
//                 "meto": 0.56,
//                 "noaa": 0.69,
//                 "sg": 0.73
//             },
//             "wavePeriod": {
//                 "fcoo": 9.47,
//                 "icon": 11.9,
//                 "meteo": 5.77,
//                 "meto": 7.22,
//                 "noaa": 11.87,
//                 "sg": 9.47
//             },
//             "windDirection": {
//                 "icon": 212.36,
//                 "noaa": 182.24,
//                 "sg": 212.36
//             },
//             "windSpeed": {
//                 "icon": 1.44,
//                 "noaa": 2.65,
//                 "sg": 1.44
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.33,
//                 "noaa": 4.64,
//                 "sg": 7.33
//             },
//             "swellHeight": {
//                 "dwd": 0.81,
//                 "icon": 0.7,
//                 "meteo": 0.57,
//                 "meto": 0.55,
//                 "noaa": 0.66,
//                 "sg": 0.55
//             },
//             "swellPeriod": {
//                 "dwd": 11.88,
//                 "icon": 11.9,
//                 "meteo": 9.01,
//                 "meto": 9.99,
//                 "noaa": 11.82,
//                 "sg": 9.99
//             },
//             "time": "2023-02-12T21:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.81,
//                 "fcoo": 0.71,
//                 "icon": 0.7,
//                 "meteo": 0.6,
//                 "meto": 0.56,
//                 "noaa": 0.69,
//                 "sg": 0.71
//             },
//             "wavePeriod": {
//                 "fcoo": 9.22,
//                 "icon": 11.9,
//                 "meteo": 5.47,
//                 "meto": 6.27,
//                 "noaa": 11.82,
//                 "sg": 9.22
//             },
//             "windDirection": {
//                 "icon": 208.95,
//                 "noaa": 183.62,
//                 "sg": 208.95
//             },
//             "windSpeed": {
//                 "icon": 1.5,
//                 "noaa": 2.65,
//                 "sg": 1.5
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.29,
//                 "noaa": 4.37,
//                 "sg": 7.29
//             },
//             "swellHeight": {
//                 "dwd": 0.8,
//                 "icon": 0.69,
//                 "meteo": 0.56,
//                 "meto": 0.54,
//                 "noaa": 0.64,
//                 "sg": 0.54
//             },
//             "swellPeriod": {
//                 "dwd": 11.88,
//                 "icon": 11.9,
//                 "meteo": 9.03,
//                 "meto": 10.22,
//                 "noaa": 11.77,
//                 "sg": 10.22
//             },
//             "time": "2023-02-12T22:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.8,
//                 "fcoo": 0.7,
//                 "icon": 0.69,
//                 "meteo": 0.59,
//                 "meto": 0.55,
//                 "noaa": 0.68,
//                 "sg": 0.7
//             },
//             "wavePeriod": {
//                 "fcoo": 8.78,
//                 "icon": 11.9,
//                 "meteo": 5.26,
//                 "meto": 6.39,
//                 "noaa": 11.77,
//                 "sg": 8.78
//             },
//             "windDirection": {
//                 "icon": 208.21,
//                 "noaa": 185.52,
//                 "sg": 208.21
//             },
//             "windSpeed": {
//                 "icon": 1.56,
//                 "noaa": 2.64,
//                 "sg": 1.56
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.23,
//                 "noaa": 4.11,
//                 "sg": 7.23
//             },
//             "swellHeight": {
//                 "dwd": 0.79,
//                 "icon": 0.68,
//                 "meteo": 0.54,
//                 "meto": 0.52,
//                 "noaa": 0.63,
//                 "sg": 0.52
//             },
//             "swellPeriod": {
//                 "dwd": 11.87,
//                 "icon": 11.89,
//                 "meteo": 9.04,
//                 "meto": 10.17,
//                 "noaa": 11.72,
//                 "sg": 10.17
//             },
//             "time": "2023-02-12T23:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.79,
//                 "fcoo": 0.67,
//                 "icon": 0.68,
//                 "meteo": 0.58,
//                 "meto": 0.55,
//                 "noaa": 0.67,
//                 "sg": 0.67
//             },
//             "wavePeriod": {
//                 "fcoo": 8.44,
//                 "icon": 11.89,
//                 "meteo": 5.05,
//                 "meto": 6.54,
//                 "noaa": 11.72,
//                 "sg": 8.44
//             },
//             "windDirection": {
//                 "icon": 207.47,
//                 "noaa": 187.41,
//                 "sg": 207.47
//             },
//             "windSpeed": {
//                 "icon": 1.62,
//                 "noaa": 2.63,
//                 "sg": 1.62
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.17,
//                 "noaa": 3.85,
//                 "sg": 7.17
//             },
//             "swellHeight": {
//                 "dwd": 0.79,
//                 "icon": 0.67,
//                 "meteo": 0.53,
//                 "meto": 0.58,
//                 "noaa": 0.61,
//                 "sg": 0.58
//             },
//             "swellPeriod": {
//                 "dwd": 11.86,
//                 "icon": 11.89,
//                 "meteo": 9.06,
//                 "meto": 10.59,
//                 "noaa": 11.67,
//                 "sg": 10.59
//             },
//             "time": "2023-02-13T00:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.79,
//                 "fcoo": 0.64,
//                 "icon": 0.67,
//                 "meteo": 0.57,
//                 "meto": 0.58,
//                 "noaa": 0.66,
//                 "sg": 0.64
//             },
//             "wavePeriod": {
//                 "fcoo": 8.11,
//                 "icon": 11.89,
//                 "meteo": 4.84,
//                 "meto": 10.01,
//                 "noaa": 11.67,
//                 "sg": 8.11
//             },
//             "windDirection": {
//                 "icon": 206.73,
//                 "noaa": 189.31,
//                 "sg": 206.73
//             },
//             "windSpeed": {
//                 "icon": 1.68,
//                 "noaa": 2.62,
//                 "sg": 1.68
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.07,
//                 "noaa": 3.61,
//                 "sg": 7.07
//             },
//             "swellHeight": {
//                 "dwd": 0.78,
//                 "icon": 0.66,
//                 "meteo": 0.52,
//                 "meto": 0.56,
//                 "noaa": 0.6,
//                 "sg": 0.56
//             },
//             "swellPeriod": {
//                 "dwd": 11.83,
//                 "icon": 11.86,
//                 "meteo": 9.09,
//                 "meto": 10.52,
//                 "noaa": 11.63,
//                 "sg": 10.52
//             },
//             "time": "2023-02-13T01:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.78,
//                 "fcoo": 0.61,
//                 "icon": 0.66,
//                 "meteo": 0.56,
//                 "meto": 0.56,
//                 "noaa": 0.65,
//                 "sg": 0.61
//             },
//             "wavePeriod": {
//                 "fcoo": 7.7,
//                 "icon": 11.86,
//                 "meteo": 4.64,
//                 "meto": 9.87,
//                 "noaa": 11.63,
//                 "sg": 7.7
//             },
//             "windDirection": {
//                 "icon": 208.28,
//                 "noaa": 191.32,
//                 "sg": 208.28
//             },
//             "windSpeed": {
//                 "icon": 1.96,
//                 "noaa": 2.73,
//                 "sg": 1.96
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.92,
//                 "noaa": 3.38,
//                 "sg": 6.92
//             },
//             "swellHeight": {
//                 "dwd": 0.78,
//                 "icon": 0.65,
//                 "meteo": 0.51,
//                 "meto": 0.54,
//                 "noaa": 0.58,
//                 "sg": 0.54
//             },
//             "swellPeriod": {
//                 "dwd": 11.79,
//                 "icon": 11.83,
//                 "meteo": 9.12,
//                 "meto": 10.46,
//                 "noaa": 11.58,
//                 "sg": 10.46
//             },
//             "time": "2023-02-13T02:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.78,
//                 "fcoo": 0.59,
//                 "icon": 0.65,
//                 "meteo": 0.55,
//                 "meto": 0.54,
//                 "noaa": 0.63,
//                 "sg": 0.59
//             },
//             "wavePeriod": {
//                 "fcoo": 7.23,
//                 "icon": 11.83,
//                 "meteo": 4.43,
//                 "meto": 9.8,
//                 "noaa": 11.58,
//                 "sg": 7.23
//             },
//             "windDirection": {
//                 "icon": 209.82,
//                 "noaa": 193.34,
//                 "sg": 209.82
//             },
//             "windSpeed": {
//                 "icon": 2.23,
//                 "noaa": 2.83,
//                 "sg": 2.23
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.72,
//                 "noaa": 3.15,
//                 "sg": 6.72
//             },
//             "swellHeight": {
//                 "dwd": 0.77,
//                 "icon": 0.64,
//                 "meteo": 0.5,
//                 "meto": 0.52,
//                 "noaa": 0.57,
//                 "sg": 0.52
//             },
//             "swellPeriod": {
//                 "dwd": 11.74,
//                 "icon": 11.8,
//                 "meteo": 9.15,
//                 "meto": 10.44,
//                 "noaa": 11.54,
//                 "sg": 10.44
//             },
//             "time": "2023-02-13T03:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.78,
//                 "fcoo": 0.58,
//                 "icon": 0.64,
//                 "meteo": 0.54,
//                 "meto": 0.52,
//                 "noaa": 0.62,
//                 "sg": 0.58
//             },
//             "wavePeriod": {
//                 "fcoo": 6.67,
//                 "icon": 11.8,
//                 "meteo": 4.23,
//                 "meto": 9.77,
//                 "noaa": 11.54,
//                 "sg": 6.67
//             },
//             "windDirection": {
//                 "icon": 211.37,
//                 "noaa": 195.35,
//                 "sg": 211.37
//             },
//             "windSpeed": {
//                 "icon": 2.5,
//                 "noaa": 2.94,
//                 "sg": 2.5
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.57,
//                 "noaa": 2.97,
//                 "sg": 6.57
//             },
//             "swellHeight": {
//                 "dwd": 0.76,
//                 "icon": 0.63,
//                 "meteo": 0.49,
//                 "meto": 0.51,
//                 "noaa": 0.56,
//                 "sg": 0.51
//             },
//             "swellPeriod": {
//                 "dwd": 11.59,
//                 "icon": 11.69,
//                 "meteo": 9.17,
//                 "meto": 10.42,
//                 "noaa": 11.44,
//                 "sg": 10.42
//             },
//             "time": "2023-02-13T04:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.77,
//                 "fcoo": 0.56,
//                 "icon": 0.63,
//                 "meteo": 0.54,
//                 "meto": 0.51,
//                 "noaa": 0.61,
//                 "sg": 0.56
//             },
//             "wavePeriod": {
//                 "fcoo": 6.27,
//                 "icon": 11.69,
//                 "meteo": 4.13,
//                 "meto": 9.74,
//                 "noaa": 11.44,
//                 "sg": 6.27
//             },
//             "windDirection": {
//                 "icon": 210.93,
//                 "noaa": 193.59,
//                 "sg": 210.93
//             },
//             "windSpeed": {
//                 "icon": 2.53,
//                 "noaa": 2.96,
//                 "sg": 2.53
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.29,
//                 "noaa": 2.79,
//                 "sg": 6.29
//             },
//             "swellHeight": {
//                 "dwd": 0.76,
//                 "icon": 0.62,
//                 "meteo": 0.48,
//                 "meto": 0.5,
//                 "noaa": 0.54,
//                 "sg": 0.5
//             },
//             "swellPeriod": {
//                 "dwd": 11.46,
//                 "icon": 11.57,
//                 "meteo": 9.2,
//                 "meto": 10.43,
//                 "noaa": 11.34,
//                 "sg": 10.43
//             },
//             "time": "2023-02-13T05:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.77,
//                 "fcoo": 0.53,
//                 "icon": 0.62,
//                 "meteo": 0.53,
//                 "meto": 0.5,
//                 "noaa": 0.6,
//                 "sg": 0.53
//             },
//             "wavePeriod": {
//                 "fcoo": 5.84,
//                 "icon": 11.57,
//                 "meteo": 4.04,
//                 "meto": 9.73,
//                 "noaa": 11.34,
//                 "sg": 5.84
//             },
//             "windDirection": {
//                 "icon": 210.49,
//                 "noaa": 191.83,
//                 "sg": 210.49
//             },
//             "windSpeed": {
//                 "icon": 2.56,
//                 "noaa": 2.99,
//                 "sg": 2.56
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.89,
//                 "noaa": 2.61,
//                 "sg": 5.89
//             },
//             "swellHeight": {
//                 "dwd": 0.75,
//                 "icon": 0.61,
//                 "meteo": 0.47,
//                 "meto": 0.49,
//                 "noaa": 0.53,
//                 "sg": 0.49
//             },
//             "swellPeriod": {
//                 "dwd": 11.27,
//                 "icon": 11.46,
//                 "meteo": 9.22,
//                 "meto": 10.47,
//                 "noaa": 11.24,
//                 "sg": 10.47
//             },
//             "time": "2023-02-13T06:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.77,
//                 "fcoo": 0.5,
//                 "icon": 0.61,
//                 "meteo": 0.53,
//                 "meto": 0.49,
//                 "noaa": 0.59,
//                 "sg": 0.5
//             },
//             "wavePeriod": {
//                 "fcoo": 5.61,
//                 "icon": 11.46,
//                 "meteo": 3.94,
//                 "meto": 9.76,
//                 "noaa": 11.24,
//                 "sg": 5.61
//             },
//             "windDirection": {
//                 "icon": 210.05,
//                 "noaa": 190.07,
//                 "sg": 210.05
//             },
//             "windSpeed": {
//                 "icon": 2.59,
//                 "noaa": 3.01,
//                 "sg": 2.59
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.4,
//                 "noaa": 3.06,
//                 "sg": 5.4
//             },
//             "swellHeight": {
//                 "dwd": 0.75,
//                 "icon": 0.6,
//                 "meteo": 0.46,
//                 "meto": 0.49,
//                 "noaa": 0.52,
//                 "sg": 0.49
//             },
//             "swellPeriod": {
//                 "dwd": 10.96,
//                 "icon": 11.14,
//                 "meteo": 9.24,
//                 "meto": 10.55,
//                 "noaa": 11.23,
//                 "sg": 10.55
//             },
//             "time": "2023-02-13T07:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.77,
//                 "fcoo": 0.47,
//                 "icon": 0.61,
//                 "meteo": 0.53,
//                 "meto": 0.49,
//                 "noaa": 0.59,
//                 "sg": 0.47
//             },
//             "wavePeriod": {
//                 "fcoo": 5.32,
//                 "icon": 11.13,
//                 "meteo": 3.77,
//                 "meto": 9.81,
//                 "noaa": 11.23,
//                 "sg": 5.32
//             },
//             "windDirection": {
//                 "icon": 209.61,
//                 "noaa": 191.89,
//                 "sg": 209.61
//             },
//             "windSpeed": {
//                 "icon": 2.73,
//                 "noaa": 2.95,
//                 "sg": 2.73
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 4.86,
//                 "noaa": 3.51,
//                 "sg": 4.86
//             },
//             "swellHeight": {
//                 "dwd": 0.75,
//                 "icon": 0.6,
//                 "meteo": 0.45,
//                 "meto": 0.48,
//                 "noaa": 0.5,
//                 "sg": 0.48
//             },
//             "swellPeriod": {
//                 "dwd": 10.69,
//                 "icon": 10.81,
//                 "meteo": 9.25,
//                 "meto": 10.62,
//                 "noaa": 11.21,
//                 "sg": 10.62
//             },
//             "time": "2023-02-13T08:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.78,
//                 "fcoo": 0.45,
//                 "icon": 0.6,
//                 "meteo": 0.54,
//                 "meto": 0.48,
//                 "noaa": 0.58,
//                 "sg": 0.45
//             },
//             "wavePeriod": {
//                 "fcoo": 4.86,
//                 "icon": 10.81,
//                 "meteo": 3.61,
//                 "meto": 9.77,
//                 "noaa": 11.21,
//                 "sg": 4.86
//             },
//             "windDirection": {
//                 "icon": 209.16,
//                 "noaa": 193.7,
//                 "sg": 209.16
//             },
//             "windSpeed": {
//                 "icon": 2.86,
//                 "noaa": 2.9,
//                 "sg": 2.86
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 4.5,
//                 "noaa": 3.96,
//                 "sg": 4.5
//             },
//             "swellHeight": {
//                 "dwd": 0.75,
//                 "icon": 0.59,
//                 "meteo": 0.44,
//                 "meto": 0.47,
//                 "noaa": 0.49,
//                 "sg": 0.47
//             },
//             "swellPeriod": {
//                 "dwd": 10.31,
//                 "icon": 10.49,
//                 "meteo": 9.27,
//                 "meto": 10.65,
//                 "noaa": 11.2,
//                 "sg": 10.65
//             },
//             "time": "2023-02-13T09:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.79,
//                 "fcoo": 0.47,
//                 "icon": 0.6,
//                 "meteo": 0.54,
//                 "meto": 0.47,
//                 "noaa": 0.58,
//                 "sg": 0.47
//             },
//             "wavePeriod": {
//                 "fcoo": 4.32,
//                 "icon": 10.48,
//                 "meteo": 3.44,
//                 "meto": 9.2,
//                 "noaa": 11.2,
//                 "sg": 4.32
//             },
//             "windDirection": {
//                 "icon": 208.72,
//                 "noaa": 195.52,
//                 "sg": 208.72
//             },
//             "windSpeed": {
//                 "icon": 3,
//                 "noaa": 2.84,
//                 "sg": 3
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 4.04,
//                 "noaa": 5.55,
//                 "sg": 4.04
//             },
//             "swellHeight": {
//                 "dwd": 0.76,
//                 "icon": 0.58,
//                 "meteo": 0.43,
//                 "meto": 0.46,
//                 "noaa": 0.48,
//                 "sg": 0.46
//             },
//             "swellPeriod": {
//                 "dwd": 9.92,
//                 "icon": 10.25,
//                 "meteo": 9.27,
//                 "meto": 10.55,
//                 "noaa": 11.29,
//                 "sg": 10.55
//             },
//             "time": "2023-02-13T10:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.8,
//                 "fcoo": 0.52,
//                 "icon": 0.61,
//                 "meteo": 0.54,
//                 "meto": 0.46,
//                 "noaa": 0.58,
//                 "sg": 0.52
//             },
//             "wavePeriod": {
//                 "fcoo": 3.81,
//                 "icon": 9.79,
//                 "meteo": 3.39,
//                 "meto": 7.19,
//                 "noaa": 11.29,
//                 "sg": 3.81
//             },
//             "windDirection": {
//                 "icon": 204.65,
//                 "noaa": 190.94,
//                 "sg": 204.65
//             },
//             "windSpeed": {
//                 "icon": 3.69,
//                 "noaa": 3.34,
//                 "sg": 3.69
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 3.84,
//                 "noaa": 7.14,
//                 "sg": 3.84
//             },
//             "swellHeight": {
//                 "dwd": 0.76,
//                 "icon": 0.58,
//                 "meteo": 0.42,
//                 "meto": 0.45,
//                 "noaa": 0.47,
//                 "sg": 0.45
//             },
//             "swellPeriod": {
//                 "dwd": 9.63,
//                 "icon": 10,
//                 "meteo": 9.27,
//                 "meto": 10.74,
//                 "noaa": 11.38,
//                 "sg": 10.74
//             },
//             "time": "2023-02-13T11:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.82,
//                 "fcoo": 0.58,
//                 "icon": 0.62,
//                 "meteo": 0.54,
//                 "meto": 0.46,
//                 "noaa": 0.57,
//                 "sg": 0.58
//             },
//             "wavePeriod": {
//                 "fcoo": 3.58,
//                 "icon": 9.09,
//                 "meteo": 3.34,
//                 "meto": 5.17,
//                 "noaa": 11.38,
//                 "sg": 3.58
//             },
//             "windDirection": {
//                 "icon": 200.59,
//                 "noaa": 186.35,
//                 "sg": 200.59
//             },
//             "windSpeed": {
//                 "icon": 4.38,
//                 "noaa": 3.85,
//                 "sg": 4.38
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 3.92,
//                 "noaa": 8.72,
//                 "sg": 3.92
//             },
//             "swellHeight": {
//                 "dwd": 0.74,
//                 "icon": 0.57,
//                 "meteo": 0.41,
//                 "meto": 0.43,
//                 "noaa": 0.46,
//                 "sg": 0.43
//             },
//             "swellPeriod": {
//                 "dwd": 9.64,
//                 "icon": 9.76,
//                 "meteo": 9.27,
//                 "meto": 10.71,
//                 "noaa": 11.47,
//                 "sg": 10.71
//             },
//             "time": "2023-02-13T12:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.84,
//                 "fcoo": 0.64,
//                 "icon": 0.63,
//                 "meteo": 0.54,
//                 "meto": 0.46,
//                 "noaa": 0.57,
//                 "sg": 0.64
//             },
//             "wavePeriod": {
//                 "fcoo": 3.5,
//                 "icon": 8.4,
//                 "meteo": 3.29,
//                 "meto": 4.25,
//                 "noaa": 11.47,
//                 "sg": 3.5
//             },
//             "windDirection": {
//                 "icon": 196.52,
//                 "noaa": 181.77,
//                 "sg": 196.52
//             },
//             "windSpeed": {
//                 "icon": 5.06,
//                 "noaa": 4.35,
//                 "sg": 5.06
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 4.06,
//                 "noaa": 9.13,
//                 "sg": 4.06
//             },
//             "swellHeight": {
//                 "dwd": 0.72,
//                 "icon": 0.56,
//                 "meteo": 0.4,
//                 "meto": 0.41,
//                 "noaa": 0.45,
//                 "sg": 0.41
//             },
//             "swellPeriod": {
//                 "dwd": 9.51,
//                 "icon": 9.48,
//                 "meteo": 9.26,
//                 "meto": 10.68,
//                 "noaa": 11.43,
//                 "sg": 10.68
//             },
//             "time": "2023-02-13T13:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.86,
//                 "fcoo": 0.71,
//                 "icon": 0.63,
//                 "meteo": 0.56,
//                 "meto": 0.44,
//                 "noaa": 0.57,
//                 "sg": 0.71
//             },
//             "wavePeriod": {
//                 "fcoo": 3.5,
//                 "icon": 7.98,
//                 "meteo": 3.22,
//                 "meto": 4.34,
//                 "noaa": 11.43,
//                 "sg": 3.5
//             },
//             "windDirection": {
//                 "icon": 196.11,
//                 "noaa": 181.29,
//                 "sg": 196.11
//             },
//             "windSpeed": {
//                 "icon": 5.23,
//                 "noaa": 4.26,
//                 "sg": 5.23
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.17,
//                 "noaa": 9.55,
//                 "sg": 5.17
//             },
//             "swellHeight": {
//                 "dwd": 0.71,
//                 "icon": 0.56,
//                 "meteo": 0.38,
//                 "meto": 0.39,
//                 "noaa": 0.43,
//                 "sg": 0.39
//             },
//             "swellPeriod": {
//                 "dwd": 9.27,
//                 "icon": 9.2,
//                 "meteo": 9.25,
//                 "meto": 10.65,
//                 "noaa": 11.38,
//                 "sg": 10.65
//             },
//             "time": "2023-02-13T14:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.89,
//                 "fcoo": 0.73,
//                 "icon": 0.64,
//                 "meteo": 0.57,
//                 "meto": 0.42,
//                 "noaa": 0.58,
//                 "sg": 0.73
//             },
//             "wavePeriod": {
//                 "fcoo": 3.51,
//                 "icon": 7.56,
//                 "meteo": 3.14,
//                 "meto": 4.86,
//                 "noaa": 11.38,
//                 "sg": 3.51
//             },
//             "windDirection": {
//                 "icon": 195.71,
//                 "noaa": 180.8,
//                 "sg": 195.71
//             },
//             "windSpeed": {
//                 "icon": 5.4,
//                 "noaa": 4.18,
//                 "sg": 5.4
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.31,
//                 "noaa": 9.96,
//                 "sg": 6.31
//             },
//             "swellHeight": {
//                 "dwd": 0.7,
//                 "icon": 0.55,
//                 "meteo": 0.37,
//                 "meto": 0.38,
//                 "noaa": 0.42,
//                 "sg": 0.38
//             },
//             "swellPeriod": {
//                 "dwd": 9,
//                 "icon": 8.92,
//                 "meteo": 9.24,
//                 "meto": 10.63,
//                 "noaa": 11.34,
//                 "sg": 10.63
//             },
//             "time": "2023-02-13T15:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.9,
//                 "fcoo": 0.74,
//                 "icon": 0.64,
//                 "meteo": 0.59,
//                 "meto": 0.4,
//                 "noaa": 0.58,
//                 "sg": 0.74
//             },
//             "wavePeriod": {
//                 "fcoo": 3.5,
//                 "icon": 7.14,
//                 "meteo": 3.07,
//                 "meto": 5.16,
//                 "noaa": 11.34,
//                 "sg": 3.5
//             },
//             "windDirection": {
//                 "icon": 195.3,
//                 "noaa": 180.32,
//                 "sg": 195.3
//             },
//             "windSpeed": {
//                 "icon": 5.57,
//                 "noaa": 4.09,
//                 "sg": 5.57
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.11,
//                 "noaa": 8.68,
//                 "sg": 6.11
//             },
//             "swellHeight": {
//                 "dwd": 0.68,
//                 "icon": 0.55,
//                 "meteo": 0.36,
//                 "meto": 0.36,
//                 "noaa": 0.41,
//                 "sg": 0.36
//             },
//             "swellPeriod": {
//                 "dwd": 8.84,
//                 "icon": 8.47,
//                 "meteo": 9.22,
//                 "meto": 10.62,
//                 "noaa": 11.25,
//                 "sg": 10.62
//             },
//             "time": "2023-02-13T16:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.9,
//                 "fcoo": 0.79,
//                 "icon": 0.61,
//                 "meteo": 0.6,
//                 "meto": 0.38,
//                 "noaa": 0.58,
//                 "sg": 0.79
//             },
//             "wavePeriod": {
//                 "fcoo": 3.53,
//                 "icon": 7.23,
//                 "meteo": 3.04,
//                 "meto": 5.64,
//                 "noaa": 11.25,
//                 "sg": 3.53
//             },
//             "windDirection": {
//                 "icon": 198.63,
//                 "noaa": 178.75,
//                 "sg": 198.63
//             },
//             "windSpeed": {
//                 "icon": 4.79,
//                 "noaa": 3.75,
//                 "sg": 4.79
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.25,
//                 "noaa": 7.4,
//                 "sg": 6.25
//             },
//             "swellHeight": {
//                 "dwd": 0.71,
//                 "icon": 0.55,
//                 "meteo": 0.35,
//                 "meto": 0.35,
//                 "noaa": 0.4,
//                 "sg": 0.35
//             },
//             "swellPeriod": {
//                 "dwd": 8.07,
//                 "icon": 8.02,
//                 "meteo": 9.2,
//                 "meto": 10.62,
//                 "noaa": 11.17,
//                 "sg": 10.62
//             },
//             "time": "2023-02-13T17:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.88,
//                 "fcoo": 0.8,
//                 "icon": 0.59,
//                 "meteo": 0.61,
//                 "meto": 0.37,
//                 "noaa": 0.57,
//                 "sg": 0.8
//             },
//             "wavePeriod": {
//                 "fcoo": 3.58,
//                 "icon": 7.31,
//                 "meteo": 3,
//                 "meto": 6.43,
//                 "noaa": 11.17,
//                 "sg": 3.58
//             },
//             "windDirection": {
//                 "icon": 201.95,
//                 "noaa": 177.19,
//                 "sg": 201.95
//             },
//             "windSpeed": {
//                 "icon": 4.02,
//                 "noaa": 3.41,
//                 "sg": 4.02
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.2,
//                 "noaa": 6.12,
//                 "sg": 6.2
//             },
//             "swellHeight": {
//                 "dwd": 0.73,
//                 "icon": 0.55,
//                 "meteo": 0.34,
//                 "meto": 0.35,
//                 "noaa": 0.39,
//                 "sg": 0.35
//             },
//             "swellPeriod": {
//                 "dwd": 7.6,
//                 "icon": 7.57,
//                 "meteo": 9.18,
//                 "meto": 10.63,
//                 "noaa": 11.08,
//                 "sg": 10.63
//             },
//             "time": "2023-02-13T18:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.83,
//                 "fcoo": 0.78,
//                 "icon": 0.56,
//                 "meteo": 0.62,
//                 "meto": 0.36,
//                 "noaa": 0.57,
//                 "sg": 0.78
//             },
//             "wavePeriod": {
//                 "fcoo": 3.6,
//                 "icon": 7.4,
//                 "meteo": 2.97,
//                 "meto": 6.96,
//                 "noaa": 11.08,
//                 "sg": 3.6
//             },
//             "windDirection": {
//                 "icon": 205.28,
//                 "noaa": 175.62,
//                 "sg": 205.28
//             },
//             "windSpeed": {
//                 "icon": 3.24,
//                 "noaa": 3.07,
//                 "sg": 3.24
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.1,
//                 "noaa": 5.86,
//                 "sg": 6.1
//             },
//             "swellHeight": {
//                 "dwd": 0.71,
//                 "icon": 0.52,
//                 "meteo": 0.33,
//                 "meto": 0.34,
//                 "noaa": 0.38,
//                 "sg": 0.34
//             },
//             "swellPeriod": {
//                 "dwd": 7.42,
//                 "icon": 7.7,
//                 "meteo": 7.09,
//                 "meto": 10.66,
//                 "noaa": 11.04,
//                 "sg": 10.66
//             },
//             "time": "2023-02-13T19:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.78,
//                 "fcoo": 0.75,
//                 "icon": 0.53,
//                 "meteo": 0.6,
//                 "meto": 0.35,
//                 "noaa": 0.54,
//                 "sg": 0.75
//             },
//             "wavePeriod": {
//                 "fcoo": 3.59,
//                 "icon": 7.56,
//                 "meteo": 2.95,
//                 "meto": 7.02,
//                 "noaa": 11.04,
//                 "sg": 3.59
//             },
//             "windDirection": {
//                 "icon": 209.43,
//                 "noaa": 178.34,
//                 "sg": 209.43
//             },
//             "windSpeed": {
//                 "icon": 3.12,
//                 "noaa": 3.08,
//                 "sg": 3.12
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.1,
//                 "noaa": 5.61,
//                 "sg": 6.1
//             },
//             "swellHeight": {
//                 "dwd": 0.67,
//                 "icon": 0.49,
//                 "meteo": 0.32,
//                 "meto": 0.33,
//                 "noaa": 0.36,
//                 "sg": 0.33
//             },
//             "swellPeriod": {
//                 "dwd": 7.56,
//                 "icon": 7.84,
//                 "meteo": 4.99,
//                 "meto": 10.71,
//                 "noaa": 10.99,
//                 "sg": 10.71
//             },
//             "time": "2023-02-13T20:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.73,
//                 "fcoo": 0.72,
//                 "icon": 0.5,
//                 "meteo": 0.59,
//                 "meto": 0.34,
//                 "noaa": 0.51,
//                 "sg": 0.72
//             },
//             "wavePeriod": {
//                 "fcoo": 3.57,
//                 "icon": 7.72,
//                 "meteo": 2.93,
//                 "meto": 6.82,
//                 "noaa": 10.99,
//                 "sg": 3.57
//             },
//             "windDirection": {
//                 "icon": 213.58,
//                 "noaa": 181.05,
//                 "sg": 213.58
//             },
//             "windSpeed": {
//                 "icon": 3.01,
//                 "noaa": 3.09,
//                 "sg": 3.01
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.07,
//                 "noaa": 5.35,
//                 "sg": 6.07
//             },
//             "swellHeight": {
//                 "dwd": 0.62,
//                 "icon": 0.46,
//                 "meteo": 0.31,
//                 "meto": 0.32,
//                 "noaa": 0.35,
//                 "sg": 0.32
//             },
//             "swellPeriod": {
//                 "dwd": 7.71,
//                 "icon": 7.97,
//                 "meteo": 2.9,
//                 "meto": 10.77,
//                 "noaa": 10.95,
//                 "sg": 10.77
//             },
//             "time": "2023-02-13T21:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.68,
//                 "fcoo": 0.72,
//                 "icon": 0.47,
//                 "meteo": 0.57,
//                 "meto": 0.34,
//                 "noaa": 0.48,
//                 "sg": 0.72
//             },
//             "wavePeriod": {
//                 "fcoo": 3.54,
//                 "icon": 7.88,
//                 "meteo": 2.91,
//                 "meto": 6.4,
//                 "noaa": 10.95,
//                 "sg": 3.54
//             },
//             "windDirection": {
//                 "icon": 217.73,
//                 "noaa": 183.77,
//                 "sg": 217.73
//             },
//             "windSpeed": {
//                 "icon": 2.89,
//                 "noaa": 3.1,
//                 "sg": 2.89
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.07,
//                 "noaa": 5.06,
//                 "sg": 6.07
//             },
//             "swellHeight": {
//                 "dwd": 0.57,
//                 "icon": 0.44,
//                 "meteo": 0.31,
//                 "meto": 0.31,
//                 "noaa": 0.33,
//                 "sg": 0.31
//             },
//             "swellPeriod": {
//                 "dwd": 7.87,
//                 "icon": 8.05,
//                 "meteo": 2.88,
//                 "meto": 10.6,
//                 "noaa": 10.91,
//                 "sg": 10.6
//             },
//             "time": "2023-02-13T22:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.63,
//                 "fcoo": 0.72,
//                 "icon": 0.44,
//                 "meteo": 0.55,
//                 "meto": 0.34,
//                 "noaa": 0.47,
//                 "sg": 0.72
//             },
//             "wavePeriod": {
//                 "fcoo": 3.47,
//                 "icon": 7.99,
//                 "meteo": 2.89,
//                 "meto": 6.22,
//                 "noaa": 10.91,
//                 "sg": 3.47
//             },
//             "windDirection": {
//                 "icon": 218.86,
//                 "noaa": 185.55,
//                 "sg": 218.86
//             },
//             "windSpeed": {
//                 "icon": 2.69,
//                 "noaa": 3.12,
//                 "sg": 2.69
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.1,
//                 "noaa": 4.77,
//                 "sg": 6.1
//             },
//             "swellHeight": {
//                 "dwd": 0.53,
//                 "icon": 0.41,
//                 "meteo": 0.32,
//                 "meto": 0.3,
//                 "noaa": 0.32,
//                 "sg": 0.3
//             },
//             "swellPeriod": {
//                 "dwd": 7.99,
//                 "icon": 8.14,
//                 "meteo": 2.87,
//                 "meto": 10.51,
//                 "noaa": 10.86,
//                 "sg": 10.51
//             },
//             "time": "2023-02-13T23:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.58,
//                 "fcoo": 0.66,
//                 "icon": 0.42,
//                 "meteo": 0.52,
//                 "meto": 0.34,
//                 "noaa": 0.45,
//                 "sg": 0.66
//             },
//             "wavePeriod": {
//                 "fcoo": 3.38,
//                 "icon": 8.11,
//                 "meteo": 2.88,
//                 "meto": 6.29,
//                 "noaa": 10.86,
//                 "sg": 3.38
//             },
//             "windDirection": {
//                 "icon": 220,
//                 "noaa": 187.33,
//                 "sg": 220
//             },
//             "windSpeed": {
//                 "icon": 2.48,
//                 "noaa": 3.15,
//                 "sg": 2.48
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.01,
//                 "noaa": 4.48,
//                 "sg": 6.01
//             },
//             "swellHeight": {
//                 "dwd": 0.5,
//                 "icon": 0.39,
//                 "meteo": 0.32,
//                 "meto": 0.32,
//                 "noaa": 0.3,
//                 "sg": 0.32
//             },
//             "swellPeriod": {
//                 "dwd": 7.87,
//                 "icon": 8.22,
//                 "meteo": 2.85,
//                 "meto": 10.63,
//                 "noaa": 10.82,
//                 "sg": 10.63
//             },
//             "time": "2023-02-14T00:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.54,
//                 "fcoo": 0.57,
//                 "icon": 0.39,
//                 "meteo": 0.5,
//                 "meto": 0.4,
//                 "noaa": 0.44,
//                 "sg": 0.57
//             },
//             "wavePeriod": {
//                 "fcoo": 3.28,
//                 "icon": 8.22,
//                 "meteo": 2.86,
//                 "meto": 3.8,
//                 "noaa": 10.82,
//                 "sg": 3.28
//             },
//             "windDirection": {
//                 "icon": 221.13,
//                 "noaa": 189.11,
//                 "sg": 221.13
//             },
//             "windSpeed": {
//                 "icon": 2.28,
//                 "noaa": 3.17,
//                 "sg": 2.28
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.87,
//                 "noaa": 4.21,
//                 "sg": 5.87
//             },
//             "swellHeight": {
//                 "dwd": 0.48,
//                 "icon": 0.37,
//                 "meteo": 0.3,
//                 "meto": 0.31,
//                 "noaa": 0.29,
//                 "sg": 0.31
//             },
//             "swellPeriod": {
//                 "dwd": 7.7,
//                 "icon": 8.29,
//                 "meteo": 2.91,
//                 "meto": 10.6,
//                 "noaa": 10.74,
//                 "sg": 10.6
//             },
//             "time": "2023-02-14T01:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.51,
//                 "fcoo": 0.54,
//                 "icon": 0.37,
//                 "meteo": 0.49,
//                 "meto": 0.39,
//                 "noaa": 0.44,
//                 "sg": 0.54
//             },
//             "wavePeriod": {
//                 "fcoo": 3.2,
//                 "icon": 8.29,
//                 "meteo": 2.85,
//                 "meto": 3.94,
//                 "noaa": 10.74,
//                 "sg": 3.2
//             },
//             "windDirection": {
//                 "icon": 222.75,
//                 "noaa": 191.23,
//                 "sg": 222.75
//             },
//             "windSpeed": {
//                 "icon": 2.25,
//                 "noaa": 3.33,
//                 "sg": 2.25
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.78,
//                 "noaa": 3.93,
//                 "sg": 5.78
//             },
//             "swellHeight": {
//                 "dwd": 0.46,
//                 "icon": 0.36,
//                 "meteo": 0.28,
//                 "meto": 0.3,
//                 "noaa": 0.27,
//                 "sg": 0.3
//             },
//             "swellPeriod": {
//                 "dwd": 7.71,
//                 "icon": 8.35,
//                 "meteo": 2.97,
//                 "meto": 10.56,
//                 "noaa": 10.67,
//                 "sg": 10.56
//             },
//             "time": "2023-02-14T02:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.48,
//                 "fcoo": 0.61,
//                 "icon": 0.36,
//                 "meteo": 0.47,
//                 "meto": 0.38,
//                 "noaa": 0.45,
//                 "sg": 0.61
//             },
//             "wavePeriod": {
//                 "fcoo": 3.16,
//                 "icon": 8.35,
//                 "meteo": 2.84,
//                 "meto": 4.13,
//                 "noaa": 10.67,
//                 "sg": 3.16
//             },
//             "windDirection": {
//                 "icon": 224.37,
//                 "noaa": 193.35,
//                 "sg": 224.37
//             },
//             "windSpeed": {
//                 "icon": 2.21,
//                 "noaa": 3.49,
//                 "sg": 2.21
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.67,
//                 "noaa": 3.66,
//                 "sg": 5.67
//             },
//             "swellHeight": {
//                 "dwd": 0.44,
//                 "icon": 0.34,
//                 "meteo": 0.26,
//                 "meto": 0.29,
//                 "noaa": 0.26,
//                 "sg": 0.29
//             },
//             "swellPeriod": {
//                 "dwd": 7.57,
//                 "icon": 8.42,
//                 "meteo": 3.03,
//                 "meto": 10.51,
//                 "noaa": 10.59,
//                 "sg": 10.51
//             },
//             "time": "2023-02-14T03:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.47,
//                 "fcoo": 0.67,
//                 "icon": 0.34,
//                 "meteo": 0.46,
//                 "meto": 0.36,
//                 "noaa": 0.45,
//                 "sg": 0.67
//             },
//             "wavePeriod": {
//                 "fcoo": 3.2,
//                 "icon": 8.42,
//                 "meteo": 2.83,
//                 "meto": 4.26,
//                 "noaa": 10.59,
//                 "sg": 3.2
//             },
//             "windDirection": {
//                 "icon": 225.99,
//                 "noaa": 195.47,
//                 "sg": 225.99
//             },
//             "windSpeed": {
//                 "icon": 2.18,
//                 "noaa": 3.65,
//                 "sg": 2.18
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.51,
//                 "noaa": 3.26,
//                 "sg": 5.51
//             },
//             "swellHeight": {
//                 "dwd": 0.43,
//                 "icon": 0.33,
//                 "meteo": 0.28,
//                 "meto": 0.28,
//                 "noaa": 0.27,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "dwd": 7.33,
//                 "icon": 8.43,
//                 "meteo": 3.01,
//                 "meto": 10.48,
//                 "noaa": 9.1,
//                 "sg": 10.48
//             },
//             "time": "2023-02-14T04:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.47,
//                 "fcoo": 0.67,
//                 "icon": 0.33,
//                 "meteo": 0.45,
//                 "meto": 0.35,
//                 "noaa": 0.45,
//                 "sg": 0.67
//             },
//             "wavePeriod": {
//                 "fcoo": 3.27,
//                 "icon": 8.43,
//                 "meteo": 2.83,
//                 "meto": 4.31,
//                 "noaa": 10.52,
//                 "sg": 3.27
//             },
//             "windDirection": {
//                 "icon": 224.96,
//                 "noaa": 196.43,
//                 "sg": 224.96
//             },
//             "windSpeed": {
//                 "icon": 2.12,
//                 "noaa": 3.54,
//                 "sg": 2.12
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.23,
//                 "noaa": 2.86,
//                 "sg": 5.23
//             },
//             "swellHeight": {
//                 "dwd": 0.43,
//                 "icon": 0.31,
//                 "meteo": 0.31,
//                 "meto": 0.27,
//                 "noaa": 0.27,
//                 "sg": 0.27
//             },
//             "swellPeriod": {
//                 "dwd": 7,
//                 "icon": 8.43,
//                 "meteo": 2.99,
//                 "meto": 10.44,
//                 "noaa": 7.61,
//                 "sg": 10.44
//             },
//             "time": "2023-02-14T05:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.47,
//                 "fcoo": 0.71,
//                 "icon": 0.31,
//                 "meteo": 0.45,
//                 "meto": 0.34,
//                 "noaa": 0.46,
//                 "sg": 0.71
//             },
//             "wavePeriod": {
//                 "fcoo": 3.39,
//                 "icon": 8.43,
//                 "meteo": 2.82,
//                 "meto": 4.33,
//                 "noaa": 10.44,
//                 "sg": 3.39
//             },
//             "windDirection": {
//                 "icon": 223.94,
//                 "noaa": 197.38,
//                 "sg": 223.94
//             },
//             "windSpeed": {
//                 "icon": 2.07,
//                 "noaa": 3.43,
//                 "sg": 2.07
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 4.86,
//                 "noaa": 2.46,
//                 "sg": 4.86
//             },
//             "swellHeight": {
//                 "dwd": 0.44,
//                 "icon": 0.3,
//                 "meteo": 0.33,
//                 "meto": 0.27,
//                 "noaa": 0.28,
//                 "sg": 0.27
//             },
//             "swellPeriod": {
//                 "dwd": 6.62,
//                 "icon": 8.44,
//                 "meteo": 2.97,
//                 "meto": 10.43,
//                 "noaa": 6.12,
//                 "sg": 10.43
//             },
//             "time": "2023-02-14T06:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.48,
//                 "fcoo": 0.72,
//                 "icon": 0.3,
//                 "meteo": 0.44,
//                 "meto": 0.34,
//                 "noaa": 0.46,
//                 "sg": 0.72
//             },
//             "wavePeriod": {
//                 "fcoo": 3.42,
//                 "icon": 8.44,
//                 "meteo": 2.82,
//                 "meto": 4.29,
//                 "noaa": 10.37,
//                 "sg": 3.42
//             },
//             "windDirection": {
//                 "icon": 222.91,
//                 "noaa": 198.34,
//                 "sg": 222.91
//             },
//             "windSpeed": {
//                 "icon": 2.01,
//                 "noaa": 3.32,
//                 "sg": 2.01
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 4.21,
//                 "noaa": 3,
//                 "sg": 4.21
//             },
//             "swellHeight": {
//                 "dwd": 0.44,
//                 "icon": 0.3,
//                 "meteo": 0.32,
//                 "meto": 0.26,
//                 "noaa": 0.27,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 6.4,
//                 "icon": 8.25,
//                 "meteo": 2.99,
//                 "meto": 10.43,
//                 "noaa": 6.12,
//                 "sg": 10.43
//             },
//             "time": "2023-02-14T07:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.49,
//                 "icon": 0.3,
//                 "meteo": 0.43,
//                 "meto": 0.34,
//                 "noaa": 0.45,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 8.25,
//                 "meteo": 2.77,
//                 "meto": 4.24,
//                 "noaa": 10.33,
//                 "sg": 4.24
//             },
//             "windDirection": {
//                 "icon": 219.4,
//                 "noaa": 202.95,
//                 "sg": 219.4
//             },
//             "windSpeed": {
//                 "icon": 2.24,
//                 "noaa": 3.16,
//                 "sg": 2.24
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 3.55,
//                 "noaa": 3.54,
//                 "sg": 3.55
//             },
//             "swellHeight": {
//                 "dwd": 0.43,
//                 "icon": 0.29,
//                 "meteo": 0.3,
//                 "meto": 0.26,
//                 "noaa": 0.25,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 6.3,
//                 "icon": 8.06,
//                 "meteo": 3.02,
//                 "meto": 10.42,
//                 "noaa": 6.12,
//                 "sg": 10.42
//             },
//             "time": "2023-02-14T08:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.52,
//                 "icon": 0.29,
//                 "meteo": 0.43,
//                 "meto": 0.34,
//                 "noaa": 0.43,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 8.05,
//                 "meteo": 2.71,
//                 "meto": 4.17,
//                 "noaa": 10.3,
//                 "sg": 4.17
//             },
//             "windDirection": {
//                 "icon": 215.88,
//                 "noaa": 207.55,
//                 "sg": 215.88
//             },
//             "windSpeed": {
//                 "icon": 2.46,
//                 "noaa": 2.99,
//                 "sg": 2.46
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 3.26,
//                 "noaa": 4.08,
//                 "sg": 3.26
//             },
//             "swellHeight": {
//                 "dwd": 0.42,
//                 "icon": 0.29,
//                 "meteo": 0.29,
//                 "meto": 0.26,
//                 "noaa": 0.24,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 6.13,
//                 "icon": 7.87,
//                 "meteo": 3.04,
//                 "meto": 10.4,
//                 "noaa": 6.12,
//                 "sg": 10.4
//             },
//             "time": "2023-02-14T09:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.53,
//                 "icon": 0.29,
//                 "meteo": 0.42,
//                 "meto": 0.34,
//                 "noaa": 0.42,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 7.86,
//                 "meteo": 2.66,
//                 "meto": 4.11,
//                 "noaa": 10.26,
//                 "sg": 4.11
//             },
//             "windDirection": {
//                 "icon": 212.37,
//                 "noaa": 212.16,
//                 "sg": 212.37
//             },
//             "windSpeed": {
//                 "icon": 2.69,
//                 "noaa": 2.83,
//                 "sg": 2.69
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 3.2,
//                 "noaa": 5.95,
//                 "sg": 3.2
//             },
//             "swellHeight": {
//                 "dwd": 0.43,
//                 "icon": 0.29,
//                 "meteo": 0.28,
//                 "meto": 0.26,
//                 "noaa": 0.23,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.81,
//                 "icon": 7.63,
//                 "meteo": 3.01,
//                 "meto": 10.35,
//                 "noaa": 6.08,
//                 "sg": 10.35
//             },
//             "time": "2023-02-14T10:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.53,
//                 "icon": 0.29,
//                 "meteo": 0.41,
//                 "meto": 0.35,
//                 "noaa": 0.4,
//                 "sg": 0.35
//             },
//             "wavePeriod": {
//                 "icon": 7.59,
//                 "meteo": 2.64,
//                 "meto": 4.07,
//                 "noaa": 9.05,
//                 "sg": 4.07
//             },
//             "windDirection": {
//                 "icon": 214.6,
//                 "noaa": 212.62,
//                 "sg": 214.6
//             },
//             "windSpeed": {
//                 "icon": 2.91,
//                 "noaa": 3.19,
//                 "sg": 2.91
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 3.63,
//                 "noaa": 7.83,
//                 "sg": 3.63
//             },
//             "swellHeight": {
//                 "dwd": 0.41,
//                 "icon": 0.3,
//                 "meteo": 0.27,
//                 "meto": 0.26,
//                 "noaa": 0.22,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.79,
//                 "icon": 7.38,
//                 "meteo": 2.98,
//                 "meto": 10.28,
//                 "noaa": 6.05,
//                 "sg": 10.28
//             },
//             "time": "2023-02-14T11:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.52,
//                 "icon": 0.3,
//                 "meteo": 0.39,
//                 "meto": 0.35,
//                 "noaa": 0.39,
//                 "sg": 0.35
//             },
//             "wavePeriod": {
//                 "icon": 7.32,
//                 "meteo": 2.62,
//                 "meto": 4.11,
//                 "noaa": 7.85,
//                 "sg": 4.11
//             },
//             "windDirection": {
//                 "icon": 216.83,
//                 "noaa": 213.07,
//                 "sg": 216.83
//             },
//             "windSpeed": {
//                 "icon": 3.13,
//                 "noaa": 3.56,
//                 "sg": 3.13
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 4.51,
//                 "noaa": 9.71,
//                 "sg": 4.51
//             },
//             "swellHeight": {
//                 "dwd": 0.4,
//                 "icon": 0.3,
//                 "meteo": 0.26,
//                 "meto": 0.26,
//                 "noaa": 0.21,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.74,
//                 "icon": 7.14,
//                 "meteo": 2.95,
//                 "meto": 10.2,
//                 "noaa": 6.01,
//                 "sg": 10.2
//             },
//             "time": "2023-02-14T12:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.52,
//                 "icon": 0.3,
//                 "meteo": 0.38,
//                 "meto": 0.35,
//                 "noaa": 0.37,
//                 "sg": 0.35
//             },
//             "wavePeriod": {
//                 "icon": 7.05,
//                 "meteo": 2.6,
//                 "meto": 4.23,
//                 "noaa": 6.64,
//                 "sg": 4.23
//             },
//             "windDirection": {
//                 "icon": 219.06,
//                 "noaa": 213.53,
//                 "sg": 219.06
//             },
//             "windSpeed": {
//                 "icon": 3.35,
//                 "noaa": 3.92,
//                 "sg": 3.35
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.85,
//                 "noaa": 10.23,
//                 "sg": 5.85
//             },
//             "swellHeight": {
//                 "dwd": 0.4,
//                 "icon": 0.31,
//                 "meteo": 0.26,
//                 "meto": 0.26,
//                 "noaa": 0.2,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.54,
//                 "icon": 6.83,
//                 "meteo": 2.91,
//                 "meto": 10.12,
//                 "noaa": 5.94,
//                 "sg": 10.12
//             },
//             "time": "2023-02-14T13:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.51,
//                 "icon": 0.33,
//                 "meteo": 0.37,
//                 "meto": 0.35,
//                 "noaa": 0.35,
//                 "sg": 0.35
//             },
//             "wavePeriod": {
//                 "icon": 6.35,
//                 "meteo": 2.58,
//                 "meto": 4.33,
//                 "noaa": 7.69,
//                 "sg": 4.33
//             },
//             "windDirection": {
//                 "icon": 218.91,
//                 "noaa": 209.49,
//                 "sg": 218.91
//             },
//             "windSpeed": {
//                 "icon": 3.48,
//                 "noaa": 3.95,
//                 "sg": 3.48
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.94,
//                 "noaa": 10.75,
//                 "sg": 6.94
//             },
//             "swellHeight": {
//                 "dwd": 0.41,
//                 "icon": 0.31,
//                 "meteo": 0.26,
//                 "meto": 0.26,
//                 "noaa": 0.18,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.32,
//                 "icon": 6.52,
//                 "meteo": 2.86,
//                 "meto": 10.02,
//                 "noaa": 5.88,
//                 "sg": 10.02
//             },
//             "time": "2023-02-14T14:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.49,
//                 "icon": 0.35,
//                 "meteo": 0.36,
//                 "meto": 0.34,
//                 "noaa": 0.34,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 5.64,
//                 "meteo": 2.56,
//                 "meto": 4.36,
//                 "noaa": 8.73,
//                 "sg": 4.36
//             },
//             "windDirection": {
//                 "icon": 218.76,
//                 "noaa": 205.44,
//                 "sg": 218.76
//             },
//             "windSpeed": {
//                 "icon": 3.62,
//                 "noaa": 3.99,
//                 "sg": 3.62
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.48,
//                 "noaa": 11.28,
//                 "sg": 7.48
//             },
//             "swellHeight": {
//                 "dwd": 0.42,
//                 "icon": 0.32,
//                 "meteo": 0.26,
//                 "meto": 0.26,
//                 "noaa": 0.17,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.07,
//                 "icon": 6.21,
//                 "meteo": 2.82,
//                 "meto": 9.95,
//                 "noaa": 5.81,
//                 "sg": 9.95
//             },
//             "time": "2023-02-14T15:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.46,
//                 "icon": 0.38,
//                 "meteo": 0.35,
//                 "meto": 0.33,
//                 "noaa": 0.32,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 4.94,
//                 "meteo": 2.54,
//                 "meto": 4.31,
//                 "noaa": 9.78,
//                 "sg": 4.31
//             },
//             "windDirection": {
//                 "icon": 218.61,
//                 "noaa": 201.4,
//                 "sg": 218.61
//             },
//             "windSpeed": {
//                 "icon": 3.75,
//                 "noaa": 4.02,
//                 "sg": 3.75
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.77,
//                 "noaa": 10,
//                 "sg": 7.77
//             },
//             "swellHeight": {
//                 "dwd": 0.4,
//                 "icon": 0.32,
//                 "meteo": 0.24,
//                 "meto": 0.26,
//                 "noaa": 0.15,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.16,
//                 "icon": 6.16,
//                 "meteo": 2.83,
//                 "meto": 9.88,
//                 "noaa": 7.1,
//                 "sg": 9.88
//             },
//             "time": "2023-02-14T16:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.44,
//                 "icon": 0.36,
//                 "meteo": 0.36,
//                 "meto": 0.33,
//                 "noaa": 0.3,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 5.31,
//                 "meteo": 2.49,
//                 "meto": 4.3,
//                 "noaa": 9.74,
//                 "sg": 4.3
//             },
//             "windDirection": {
//                 "icon": 217.04,
//                 "noaa": 197.76,
//                 "sg": 217.04
//             },
//             "windSpeed": {
//                 "icon": 3.29,
//                 "noaa": 3.62,
//                 "sg": 3.29
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.78,
//                 "noaa": 8.73,
//                 "sg": 7.78
//             },
//             "swellHeight": {
//                 "dwd": 0.4,
//                 "icon": 0.33,
//                 "meteo": 0.23,
//                 "meto": 0.26,
//                 "noaa": 0.14,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.1,
//                 "icon": 6.1,
//                 "meteo": 2.84,
//                 "meto": 9.84,
//                 "noaa": 8.38,
//                 "sg": 9.84
//             },
//             "time": "2023-02-14T17:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.43,
//                 "icon": 0.35,
//                 "meteo": 0.38,
//                 "meto": 0.33,
//                 "noaa": 0.29,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 5.68,
//                 "meteo": 2.44,
//                 "meto": 4.35,
//                 "noaa": 9.71,
//                 "sg": 4.35
//             },
//             "windDirection": {
//                 "icon": 215.46,
//                 "noaa": 194.11,
//                 "sg": 215.46
//             },
//             "windSpeed": {
//                 "icon": 2.83,
//                 "noaa": 3.22,
//                 "sg": 2.83
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.61,
//                 "noaa": 7.45,
//                 "sg": 7.61
//             },
//             "swellHeight": {
//                 "dwd": 0.39,
//                 "icon": 0.33,
//                 "meteo": 0.21,
//                 "meto": 0.26,
//                 "noaa": 0.12,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "dwd": 5.11,
//                 "icon": 6.05,
//                 "meteo": 2.85,
//                 "meto": 9.79,
//                 "noaa": 9.67,
//                 "sg": 9.79
//             },
//             "time": "2023-02-14T18:00:00+00:00",
//             "waveHeight": {
//                 "dwd": 0.42,
//                 "icon": 0.33,
//                 "meteo": 0.39,
//                 "meto": 0.33,
//                 "noaa": 0.27,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 6.05,
//                 "meteo": 2.39,
//                 "meto": 4.38,
//                 "noaa": 9.67,
//                 "sg": 4.38
//             },
//             "windDirection": {
//                 "icon": 213.89,
//                 "noaa": 190.47,
//                 "sg": 213.89
//             },
//             "windSpeed": {
//                 "icon": 2.37,
//                 "noaa": 2.82,
//                 "sg": 2.37
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.45,
//                 "noaa": 7.2,
//                 "sg": 7.45
//             },
//             "swellHeight": {
//                 "icon": 0.32,
//                 "meteo": 0.22,
//                 "meto": 0.27,
//                 "noaa": 0.13,
//                 "sg": 0.27
//             },
//             "swellPeriod": {
//                 "icon": 6.28,
//                 "meteo": 2.83,
//                 "meto": 9.75,
//                 "noaa": 8.3,
//                 "sg": 9.75
//             },
//             "time": "2023-02-14T19:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.32,
//                 "meteo": 0.4,
//                 "meto": 0.34,
//                 "noaa": 0.27,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 6.28,
//                 "meteo": 2.4,
//                 "meto": 4.37,
//                 "noaa": 9.64,
//                 "sg": 4.37
//             },
//             "windDirection": {
//                 "icon": 213.31,
//                 "noaa": 191.31,
//                 "sg": 213.31
//             },
//             "windSpeed": {
//                 "icon": 2.3,
//                 "noaa": 2.84,
//                 "sg": 2.3
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.28,
//                 "noaa": 6.94,
//                 "sg": 7.28
//             },
//             "swellHeight": {
//                 "icon": 0.31,
//                 "meteo": 0.24,
//                 "meto": 0.27,
//                 "noaa": 0.13,
//                 "sg": 0.27
//             },
//             "swellPeriod": {
//                 "icon": 6.51,
//                 "meteo": 2.82,
//                 "meto": 9.72,
//                 "noaa": 6.93,
//                 "sg": 9.72
//             },
//             "time": "2023-02-14T20:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.31,
//                 "meteo": 0.4,
//                 "meto": 0.35,
//                 "noaa": 0.26,
//                 "sg": 0.35
//             },
//             "wavePeriod": {
//                 "icon": 6.51,
//                 "meteo": 2.42,
//                 "meto": 4.34,
//                 "noaa": 9.62,
//                 "sg": 4.34
//             },
//             "windDirection": {
//                 "icon": 212.72,
//                 "noaa": 192.14,
//                 "sg": 212.72
//             },
//             "windSpeed": {
//                 "icon": 2.22,
//                 "noaa": 2.86,
//                 "sg": 2.22
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.11,
//                 "noaa": 6.68,
//                 "sg": 7.11
//             },
//             "swellHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.25,
//                 "meto": 0.28,
//                 "noaa": 0.14,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "icon": 6.74,
//                 "meteo": 2.8,
//                 "meto": 9.69,
//                 "noaa": 5.56,
//                 "sg": 9.69
//             },
//             "time": "2023-02-14T21:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.41,
//                 "meto": 0.36,
//                 "noaa": 0.26,
//                 "sg": 0.36
//             },
//             "wavePeriod": {
//                 "icon": 6.74,
//                 "meteo": 2.43,
//                 "meto": 4.33,
//                 "noaa": 9.59,
//                 "sg": 4.33
//             },
//             "windDirection": {
//                 "icon": 212.14,
//                 "noaa": 192.98,
//                 "sg": 212.14
//             },
//             "windSpeed": {
//                 "icon": 2.15,
//                 "noaa": 2.88,
//                 "sg": 2.15
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7,
//                 "noaa": 6.13,
//                 "sg": 7
//             },
//             "swellHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.25,
//                 "meto": 0.28,
//                 "noaa": 0.14,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "icon": 6.83,
//                 "meteo": 2.78,
//                 "meto": 9.65,
//                 "noaa": 6.21,
//                 "sg": 9.65
//             },
//             "time": "2023-02-14T22:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.4,
//                 "meto": 0.37,
//                 "noaa": 0.26,
//                 "sg": 0.37
//             },
//             "wavePeriod": {
//                 "icon": 6.83,
//                 "meteo": 2.43,
//                 "meto": 4.3,
//                 "noaa": 8.36,
//                 "sg": 4.3
//             },
//             "windDirection": {
//                 "icon": 212.42,
//                 "noaa": 193.26,
//                 "sg": 212.42
//             },
//             "windSpeed": {
//                 "icon": 2.28,
//                 "noaa": 2.96,
//                 "sg": 2.28
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.88,
//                 "noaa": 5.58,
//                 "sg": 6.88
//             },
//             "swellHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.25,
//                 "meto": 0.29,
//                 "noaa": 0.13,
//                 "sg": 0.29
//             },
//             "swellPeriod": {
//                 "icon": 6.92,
//                 "meteo": 2.77,
//                 "meto": 9.6,
//                 "noaa": 6.86,
//                 "sg": 9.6
//             },
//             "time": "2023-02-14T23:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.4,
//                 "meto": 0.37,
//                 "noaa": 0.27,
//                 "sg": 0.37
//             },
//             "wavePeriod": {
//                 "icon": 6.92,
//                 "meteo": 2.42,
//                 "meto": 4.27,
//                 "noaa": 7.12,
//                 "sg": 4.27
//             },
//             "windDirection": {
//                 "icon": 212.71,
//                 "noaa": 193.53,
//                 "sg": 212.71
//             },
//             "windSpeed": {
//                 "icon": 2.41,
//                 "noaa": 3.04,
//                 "sg": 2.41
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.77,
//                 "noaa": 5.03,
//                 "sg": 6.77
//             },
//             "swellHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.25,
//                 "meto": 0.24,
//                 "noaa": 0.13,
//                 "sg": 0.24
//             },
//             "swellPeriod": {
//                 "icon": 7.01,
//                 "meteo": 2.75,
//                 "meto": 4.7,
//                 "noaa": 7.51,
//                 "sg": 4.7
//             },
//             "time": "2023-02-15T00:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.39,
//                 "meto": 0.34,
//                 "noaa": 0.27,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 7.01,
//                 "meteo": 2.42,
//                 "meto": 3.87,
//                 "noaa": 5.89,
//                 "sg": 3.87
//             },
//             "windDirection": {
//                 "icon": 212.99,
//                 "noaa": 193.81,
//                 "sg": 212.99
//             },
//             "windSpeed": {
//                 "icon": 2.54,
//                 "noaa": 3.12,
//                 "sg": 2.54
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.73,
//                 "noaa": 4.91,
//                 "sg": 6.73
//             },
//             "swellHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.24,
//                 "meto": 0.28,
//                 "noaa": 0.12,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "icon": 7.01,
//                 "meteo": 2.77,
//                 "meto": 3.57,
//                 "noaa": 8.22,
//                 "sg": 3.57
//             },
//             "time": "2023-02-15T01:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.39,
//                 "meto": 0.37,
//                 "noaa": 0.29,
//                 "sg": 0.37
//             },
//             "wavePeriod": {
//                 "icon": 7.01,
//                 "meteo": 2.42,
//                 "meto": 4.03,
//                 "noaa": 5.84,
//                 "sg": 4.03
//             },
//             "windDirection": {
//                 "icon": 211.77,
//                 "noaa": 192.97,
//                 "sg": 211.77
//             },
//             "windSpeed": {
//                 "icon": 2.6,
//                 "noaa": 3.27,
//                 "sg": 2.6
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.69,
//                 "noaa": 4.8,
//                 "sg": 6.69
//             },
//             "swellHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.24,
//                 "meto": 0.31,
//                 "noaa": 0.12,
//                 "sg": 0.31
//             },
//             "swellPeriod": {
//                 "icon": 7.02,
//                 "meteo": 2.79,
//                 "meto": 3.73,
//                 "noaa": 8.92,
//                 "sg": 3.73
//             },
//             "time": "2023-02-15T02:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.39,
//                 "meto": 0.39,
//                 "noaa": 0.31,
//                 "sg": 0.39
//             },
//             "wavePeriod": {
//                 "icon": 7,
//                 "meteo": 2.41,
//                 "meto": 4.17,
//                 "noaa": 5.78,
//                 "sg": 4.17
//             },
//             "windDirection": {
//                 "icon": 210.55,
//                 "noaa": 192.12,
//                 "sg": 210.55
//             },
//             "windSpeed": {
//                 "icon": 2.65,
//                 "noaa": 3.42,
//                 "sg": 2.65
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.65,
//                 "noaa": 4.68,
//                 "sg": 6.65
//             },
//             "swellHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.23,
//                 "meto": 0.31,
//                 "noaa": 0.11,
//                 "sg": 0.31
//             },
//             "swellPeriod": {
//                 "icon": 7.02,
//                 "meteo": 2.81,
//                 "meto": 3.81,
//                 "noaa": 9.63,
//                 "sg": 3.81
//             },
//             "time": "2023-02-15T03:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.39,
//                 "meto": 0.39,
//                 "noaa": 0.33,
//                 "sg": 0.39
//             },
//             "wavePeriod": {
//                 "icon": 7,
//                 "meteo": 2.41,
//                 "meto": 4.28,
//                 "noaa": 5.73,
//                 "sg": 4.28
//             },
//             "windDirection": {
//                 "icon": 209.33,
//                 "noaa": 191.28,
//                 "sg": 209.33
//             },
//             "windSpeed": {
//                 "icon": 2.71,
//                 "noaa": 3.57,
//                 "sg": 2.71
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.64,
//                 "noaa": 4.4,
//                 "sg": 6.64
//             },
//             "swellHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.25,
//                 "meto": 0.3,
//                 "noaa": 0.11,
//                 "sg": 0.3
//             },
//             "swellPeriod": {
//                 "icon": 6.92,
//                 "meteo": 2.9,
//                 "meto": 3.83,
//                 "noaa": 9.83,
//                 "sg": 3.83
//             },
//             "time": "2023-02-15T04:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.29,
//                 "meteo": 0.43,
//                 "meto": 0.38,
//                 "noaa": 0.37,
//                 "sg": 0.38
//             },
//             "wavePeriod": {
//                 "icon": 6.84,
//                 "meteo": 2.46,
//                 "meto": 4.36,
//                 "noaa": 5.32,
//                 "sg": 4.36
//             },
//             "windDirection": {
//                 "icon": 209.16,
//                 "noaa": 190.08,
//                 "sg": 209.16
//             },
//             "windSpeed": {
//                 "icon": 2.92,
//                 "noaa": 3.87,
//                 "sg": 2.92
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.62,
//                 "noaa": 4.11,
//                 "sg": 6.62
//             },
//             "swellHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.28,
//                 "meto": 0.28,
//                 "noaa": 0.11,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "icon": 6.82,
//                 "meteo": 2.98,
//                 "meto": 3.79,
//                 "noaa": 10.04,
//                 "sg": 3.79
//             },
//             "time": "2023-02-15T05:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.48,
//                 "meto": 0.36,
//                 "noaa": 0.4,
//                 "sg": 0.36
//             },
//             "wavePeriod": {
//                 "icon": 6.69,
//                 "meteo": 2.51,
//                 "meto": 4.4,
//                 "noaa": 4.92,
//                 "sg": 4.4
//             },
//             "windDirection": {
//                 "icon": 208.98,
//                 "noaa": 188.88,
//                 "sg": 208.98
//             },
//             "windSpeed": {
//                 "icon": 3.14,
//                 "noaa": 4.16,
//                 "sg": 3.14
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.61,
//                 "noaa": 3.82,
//                 "sg": 6.61
//             },
//             "swellHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.3,
//                 "meto": 0.25,
//                 "noaa": 0.11,
//                 "sg": 0.25
//             },
//             "swellPeriod": {
//                 "icon": 6.72,
//                 "meteo": 3.07,
//                 "meto": 3.72,
//                 "noaa": 10.24,
//                 "sg": 3.72
//             },
//             "time": "2023-02-15T06:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.52,
//                 "meto": 0.34,
//                 "noaa": 0.44,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 6.53,
//                 "meteo": 2.56,
//                 "meto": 4.42,
//                 "noaa": 4.51,
//                 "sg": 4.42
//             },
//             "windDirection": {
//                 "icon": 208.81,
//                 "noaa": 187.68,
//                 "sg": 208.81
//             },
//             "windSpeed": {
//                 "icon": 3.35,
//                 "noaa": 4.46,
//                 "sg": 3.35
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.28,
//                 "noaa": 4.4,
//                 "sg": 6.28
//             },
//             "swellHeight": {
//                 "icon": 0.31,
//                 "meteo": 0.31,
//                 "meto": 0.24,
//                 "noaa": 0.13,
//                 "sg": 0.24
//             },
//             "swellPeriod": {
//                 "icon": 6.5,
//                 "meteo": 3.17,
//                 "meto": 4.86,
//                 "noaa": 9.38,
//                 "sg": 4.86
//             },
//             "time": "2023-02-15T07:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.31,
//                 "meteo": 0.56,
//                 "meto": 0.33,
//                 "noaa": 0.46,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 6.19,
//                 "meteo": 2.64,
//                 "meto": 4.42,
//                 "noaa": 4.32,
//                 "sg": 4.42
//             },
//             "windDirection": {
//                 "icon": 208.7,
//                 "noaa": 193.71,
//                 "sg": 208.7
//             },
//             "windSpeed": {
//                 "icon": 3.42,
//                 "noaa": 4.81,
//                 "sg": 3.42
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.96,
//                 "noaa": 4.97,
//                 "sg": 5.96
//             },
//             "swellHeight": {
//                 "icon": 0.31,
//                 "meteo": 0.31,
//                 "meto": 0.23,
//                 "noaa": 0.15,
//                 "sg": 0.23
//             },
//             "swellPeriod": {
//                 "icon": 6.29,
//                 "meteo": 3.28,
//                 "meto": 9.49,
//                 "noaa": 8.53,
//                 "sg": 9.49
//             },
//             "time": "2023-02-15T08:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.33,
//                 "meteo": 0.59,
//                 "meto": 0.32,
//                 "noaa": 0.49,
//                 "sg": 0.32
//             },
//             "wavePeriod": {
//                 "icon": 5.85,
//                 "meteo": 2.71,
//                 "meto": 4.35,
//                 "noaa": 4.12,
//                 "sg": 4.35
//             },
//             "windDirection": {
//                 "icon": 208.59,
//                 "noaa": 199.75,
//                 "sg": 208.59
//             },
//             "windSpeed": {
//                 "icon": 3.49,
//                 "noaa": 5.16,
//                 "sg": 3.49
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.63,
//                 "noaa": 5.55,
//                 "sg": 5.63
//             },
//             "swellHeight": {
//                 "icon": 0.32,
//                 "meteo": 0.32,
//                 "meto": 0.23,
//                 "noaa": 0.17,
//                 "sg": 0.23
//             },
//             "swellPeriod": {
//                 "icon": 6.07,
//                 "meteo": 3.38,
//                 "meto": 9.98,
//                 "noaa": 7.67,
//                 "sg": 9.98
//             },
//             "time": "2023-02-15T09:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.34,
//                 "meteo": 0.63,
//                 "meto": 0.32,
//                 "noaa": 0.51,
//                 "sg": 0.32
//             },
//             "wavePeriod": {
//                 "icon": 5.51,
//                 "meteo": 2.79,
//                 "meto": 4.1,
//                 "noaa": 3.93,
//                 "sg": 4.1
//             },
//             "windDirection": {
//                 "icon": 208.48,
//                 "noaa": 205.78,
//                 "sg": 208.48
//             },
//             "windSpeed": {
//                 "icon": 3.56,
//                 "noaa": 5.51,
//                 "sg": 3.56
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 5.95,
//                 "noaa": 6.95,
//                 "sg": 5.95
//             },
//             "swellHeight": {
//                 "icon": 0.32,
//                 "meteo": 0.36,
//                 "meto": 0.23,
//                 "noaa": 0.19,
//                 "sg": 0.23
//             },
//             "swellPeriod": {
//                 "icon": 5.98,
//                 "meteo": 3.37,
//                 "meto": 9.94,
//                 "noaa": 7.06,
//                 "sg": 9.94
//             },
//             "time": "2023-02-15T10:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.37,
//                 "meteo": 0.65,
//                 "meto": 0.32,
//                 "noaa": 0.51,
//                 "sg": 0.32
//             },
//             "wavePeriod": {
//                 "icon": 5.1,
//                 "meteo": 2.8,
//                 "meto": 3.64,
//                 "noaa": 3.99,
//                 "sg": 3.64
//             },
//             "windDirection": {
//                 "icon": 207.32,
//                 "noaa": 209.08,
//                 "sg": 207.32
//             },
//             "windSpeed": {
//                 "icon": 4.34,
//                 "noaa": 5.72,
//                 "sg": 4.34
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.27,
//                 "noaa": 8.35,
//                 "sg": 6.27
//             },
//             "swellHeight": {
//                 "icon": 0.33,
//                 "meteo": 0.41,
//                 "meto": 0.22,
//                 "noaa": 0.22,
//                 "sg": 0.22
//             },
//             "swellPeriod": {
//                 "icon": 5.88,
//                 "meteo": 3.37,
//                 "meto": 9.89,
//                 "noaa": 6.45,
//                 "sg": 9.89
//             },
//             "time": "2023-02-15T11:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.4,
//                 "meteo": 0.67,
//                 "meto": 0.34,
//                 "noaa": 0.5,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 4.7,
//                 "meteo": 2.8,
//                 "meto": 3.37,
//                 "noaa": 4.06,
//                 "sg": 3.37
//             },
//             "windDirection": {
//                 "icon": 206.15,
//                 "noaa": 212.39,
//                 "sg": 206.15
//             },
//             "windSpeed": {
//                 "icon": 5.13,
//                 "noaa": 5.92,
//                 "sg": 5.13
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.58,
//                 "noaa": 9.75,
//                 "sg": 6.58
//             },
//             "swellHeight": {
//                 "icon": 0.33,
//                 "meteo": 0.45,
//                 "meto": 0.23,
//                 "noaa": 0.24,
//                 "sg": 0.23
//             },
//             "swellPeriod": {
//                 "icon": 5.79,
//                 "meteo": 3.36,
//                 "meto": 4.75,
//                 "noaa": 5.84,
//                 "sg": 4.75
//             },
//             "time": "2023-02-15T12:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.43,
//                 "meteo": 0.69,
//                 "meto": 0.35,
//                 "noaa": 0.5,
//                 "sg": 0.35
//             },
//             "wavePeriod": {
//                 "icon": 4.29,
//                 "meteo": 2.81,
//                 "meto": 3.31,
//                 "noaa": 4.12,
//                 "sg": 3.31
//             },
//             "windDirection": {
//                 "icon": 204.99,
//                 "noaa": 215.69,
//                 "sg": 204.99
//             },
//             "windSpeed": {
//                 "icon": 5.91,
//                 "noaa": 6.13,
//                 "sg": 5.91
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.26,
//                 "noaa": 9.42,
//                 "sg": 7.26
//             },
//             "swellHeight": {
//                 "icon": 0.34,
//                 "meteo": 0.45,
//                 "meto": 0.24,
//                 "noaa": 0.18,
//                 "sg": 0.24
//             },
//             "swellPeriod": {
//                 "icon": 5.62,
//                 "meteo": 3.4,
//                 "meto": 3.62,
//                 "noaa": 7.9,
//                 "sg": 3.62
//             },
//             "time": "2023-02-15T13:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.45,
//                 "meteo": 0.71,
//                 "meto": 0.37,
//                 "noaa": 0.47,
//                 "sg": 0.37
//             },
//             "wavePeriod": {
//                 "icon": 4.19,
//                 "meteo": 2.84,
//                 "meto": 3.32,
//                 "noaa": 4.12,
//                 "sg": 3.32
//             },
//             "windDirection": {
//                 "icon": 208.92,
//                 "noaa": 232.73,
//                 "sg": 208.92
//             },
//             "windSpeed": {
//                 "icon": 5.87,
//                 "noaa": 5.74,
//                 "sg": 5.87
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.93,
//                 "noaa": 9.09,
//                 "sg": 7.93
//             },
//             "swellHeight": {
//                 "icon": 0.35,
//                 "meteo": 0.44,
//                 "meto": 0.25,
//                 "noaa": 0.12,
//                 "sg": 0.25
//             },
//             "swellPeriod": {
//                 "icon": 5.46,
//                 "meteo": 3.43,
//                 "meto": 3.7,
//                 "noaa": 9.97,
//                 "sg": 3.7
//             },
//             "time": "2023-02-15T14:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.47,
//                 "meteo": 0.73,
//                 "meto": 0.37,
//                 "noaa": 0.43,
//                 "sg": 0.37
//             },
//             "wavePeriod": {
//                 "icon": 4.08,
//                 "meteo": 2.86,
//                 "meto": 3.35,
//                 "noaa": 4.13,
//                 "sg": 3.35
//             },
//             "windDirection": {
//                 "icon": 212.85,
//                 "noaa": 249.76,
//                 "sg": 212.85
//             },
//             "windSpeed": {
//                 "icon": 5.84,
//                 "noaa": 5.35,
//                 "sg": 5.84
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 8.6,
//                 "noaa": 8.76,
//                 "sg": 8.6
//             },
//             "swellHeight": {
//                 "icon": 0.36,
//                 "meteo": 0.44,
//                 "meto": 0.24,
//                 "noaa": 0.06,
//                 "sg": 0.24
//             },
//             "swellPeriod": {
//                 "icon": 5.29,
//                 "meteo": 3.47,
//                 "meto": 3.75,
//                 "noaa": 12.03,
//                 "sg": 3.75
//             },
//             "time": "2023-02-15T15:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.49,
//                 "meteo": 0.75,
//                 "meto": 0.37,
//                 "noaa": 0.4,
//                 "sg": 0.37
//             },
//             "wavePeriod": {
//                 "icon": 3.98,
//                 "meteo": 2.89,
//                 "meto": 3.39,
//                 "noaa": 4.13,
//                 "sg": 3.39
//             },
//             "windDirection": {
//                 "icon": 216.78,
//                 "noaa": 266.8,
//                 "sg": 216.78
//             },
//             "windSpeed": {
//                 "icon": 5.8,
//                 "noaa": 4.96,
//                 "sg": 5.8
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 8.51,
//                 "noaa": 7.85,
//                 "sg": 8.51
//             },
//             "swellHeight": {
//                 "icon": 0.36,
//                 "meteo": 0.41,
//                 "meto": 0.25,
//                 "noaa": 0.07,
//                 "sg": 0.25
//             },
//             "swellPeriod": {
//                 "icon": 5.17,
//                 "meteo": 3.52,
//                 "meto": 3.7,
//                 "noaa": 11.94,
//                 "sg": 3.7
//             },
//             "time": "2023-02-15T16:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.46,
//                 "meteo": 0.7,
//                 "meto": 0.36,
//                 "noaa": 0.38,
//                 "sg": 0.36
//             },
//             "wavePeriod": {
//                 "icon": 4.13,
//                 "meteo": 2.86,
//                 "meto": 3.45,
//                 "noaa": 5.14,
//                 "sg": 3.45
//             },
//             "windDirection": {
//                 "icon": 221.23,
//                 "noaa": 262.83,
//                 "sg": 221.23
//             },
//             "windSpeed": {
//                 "icon": 5.18,
//                 "noaa": 4.48,
//                 "sg": 5.18
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 8.42,
//                 "noaa": 6.94,
//                 "sg": 8.42
//             },
//             "swellHeight": {
//                 "icon": 0.37,
//                 "meteo": 0.37,
//                 "meto": 0.25,
//                 "noaa": 0.07,
//                 "sg": 0.25
//             },
//             "swellPeriod": {
//                 "icon": 5.04,
//                 "meteo": 3.57,
//                 "meto": 3.65,
//                 "noaa": 11.86,
//                 "sg": 3.65
//             },
//             "time": "2023-02-15T17:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.43,
//                 "meteo": 0.66,
//                 "meto": 0.34,
//                 "noaa": 0.36,
//                 "sg": 0.34
//             },
//             "wavePeriod": {
//                 "icon": 4.28,
//                 "meteo": 2.84,
//                 "meto": 3.49,
//                 "noaa": 6.14,
//                 "sg": 3.49
//             },
//             "windDirection": {
//                 "icon": 225.68,
//                 "noaa": 258.87,
//                 "sg": 225.68
//             },
//             "windSpeed": {
//                 "icon": 4.56,
//                 "noaa": 3.99,
//                 "sg": 4.56
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 8.33,
//                 "noaa": 6.03,
//                 "sg": 8.33
//             },
//             "swellHeight": {
//                 "icon": 0.37,
//                 "meteo": 0.34,
//                 "meto": 0.25,
//                 "noaa": 0.08,
//                 "sg": 0.25
//             },
//             "swellPeriod": {
//                 "icon": 4.92,
//                 "meteo": 3.62,
//                 "meto": 3.62,
//                 "noaa": 11.77,
//                 "sg": 3.62
//             },
//             "time": "2023-02-15T18:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.4,
//                 "meteo": 0.61,
//                 "meto": 0.33,
//                 "noaa": 0.34,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 4.43,
//                 "meteo": 2.81,
//                 "meto": 3.48,
//                 "noaa": 7.15,
//                 "sg": 3.48
//             },
//             "windDirection": {
//                 "icon": 230.13,
//                 "noaa": 254.9,
//                 "sg": 230.13
//             },
//             "windSpeed": {
//                 "icon": 3.94,
//                 "noaa": 3.51,
//                 "sg": 3.94
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.97,
//                 "noaa": 5.76,
//                 "sg": 7.97
//             },
//             "swellHeight": {
//                 "icon": 0.35,
//                 "meteo": 0.3,
//                 "meto": 0.25,
//                 "noaa": 0.08,
//                 "sg": 0.25
//             },
//             "swellPeriod": {
//                 "icon": 5.05,
//                 "meteo": 3.53,
//                 "meto": 3.57,
//                 "noaa": 10.73,
//                 "sg": 3.57
//             },
//             "time": "2023-02-15T19:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.38,
//                 "meteo": 0.58,
//                 "meto": 0.32,
//                 "noaa": 0.34,
//                 "sg": 0.32
//             },
//             "wavePeriod": {
//                 "icon": 4.54,
//                 "meteo": 2.73,
//                 "meto": 3.47,
//                 "noaa": 8.47,
//                 "sg": 3.47
//             },
//             "windDirection": {
//                 "icon": 232.64,
//                 "noaa": 252.97,
//                 "sg": 232.64
//             },
//             "windSpeed": {
//                 "icon": 3.86,
//                 "noaa": 3.4,
//                 "sg": 3.86
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.62,
//                 "noaa": 5.5,
//                 "sg": 7.62
//             },
//             "swellHeight": {
//                 "icon": 0.32,
//                 "meteo": 0.26,
//                 "meto": 0.27,
//                 "noaa": 0.08,
//                 "sg": 0.27
//             },
//             "swellPeriod": {
//                 "icon": 5.17,
//                 "meteo": 3.43,
//                 "meto": 3.56,
//                 "noaa": 9.69,
//                 "sg": 3.56
//             },
//             "time": "2023-02-15T20:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.35,
//                 "meteo": 0.54,
//                 "meto": 0.33,
//                 "noaa": 0.34,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 4.65,
//                 "meteo": 2.64,
//                 "meto": 3.49,
//                 "noaa": 9.78,
//                 "sg": 3.49
//             },
//             "windDirection": {
//                 "icon": 235.15,
//                 "noaa": 251.03,
//                 "sg": 235.15
//             },
//             "windSpeed": {
//                 "icon": 3.77,
//                 "noaa": 3.28,
//                 "sg": 3.77
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.27,
//                 "noaa": 5.23,
//                 "sg": 7.27
//             },
//             "swellHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.22,
//                 "meto": 0.28,
//                 "noaa": 0.08,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "icon": 5.3,
//                 "meteo": 3.34,
//                 "meto": 3.62,
//                 "noaa": 8.65,
//                 "sg": 3.62
//             },
//             "time": "2023-02-15T21:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.33,
//                 "meteo": 0.51,
//                 "meto": 0.33,
//                 "noaa": 0.34,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 4.76,
//                 "meteo": 2.56,
//                 "meto": 3.5,
//                 "noaa": 11.1,
//                 "sg": 3.5
//             },
//             "windDirection": {
//                 "icon": 237.66,
//                 "noaa": 249.1,
//                 "sg": 237.66
//             },
//             "windSpeed": {
//                 "icon": 3.69,
//                 "noaa": 3.17,
//                 "sg": 3.69
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.1,
//                 "noaa": 5.27,
//                 "sg": 7.1
//             },
//             "swellHeight": {
//                 "icon": 0.28,
//                 "meteo": 0.21,
//                 "meto": 0.28,
//                 "noaa": 0.08,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "icon": 5.43,
//                 "meteo": 3.38,
//                 "meto": 3.65,
//                 "noaa": 8.57,
//                 "sg": 3.65
//             },
//             "time": "2023-02-15T22:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.31,
//                 "meteo": 0.5,
//                 "meto": 0.33,
//                 "noaa": 0.34,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 4.81,
//                 "meteo": 2.54,
//                 "meto": 3.58,
//                 "noaa": 11.04,
//                 "sg": 3.58
//             },
//             "windDirection": {
//                 "icon": 234.95,
//                 "noaa": 244.13,
//                 "sg": 234.95
//             },
//             "windSpeed": {
//                 "icon": 3.69,
//                 "noaa": 2.95,
//                 "sg": 3.69
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.93,
//                 "noaa": 5.31,
//                 "sg": 6.93
//             },
//             "swellHeight": {
//                 "icon": 0.27,
//                 "meteo": 0.21,
//                 "meto": 0.28,
//                 "noaa": 0.08,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "icon": 5.56,
//                 "meteo": 3.42,
//                 "meto": 3.73,
//                 "noaa": 8.5,
//                 "sg": 3.73
//             },
//             "time": "2023-02-15T23:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.5,
//                 "meto": 0.33,
//                 "noaa": 0.34,
//                 "sg": 0.33
//             },
//             "wavePeriod": {
//                 "icon": 4.87,
//                 "meteo": 2.51,
//                 "meto": 3.75,
//                 "noaa": 10.99,
//                 "sg": 3.75
//             },
//             "windDirection": {
//                 "icon": 232.23,
//                 "noaa": 239.17,
//                 "sg": 232.23
//             },
//             "windSpeed": {
//                 "icon": 3.7,
//                 "noaa": 2.72,
//                 "sg": 3.7
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.75,
//                 "noaa": 5.36,
//                 "sg": 6.75
//             },
//             "swellHeight": {
//                 "icon": 0.25,
//                 "meteo": 0.2,
//                 "meto": 0.15,
//                 "noaa": 0.08,
//                 "sg": 0.15
//             },
//             "swellPeriod": {
//                 "icon": 5.69,
//                 "meteo": 3.46,
//                 "meto": 9.63,
//                 "noaa": 8.42,
//                 "sg": 9.63
//             },
//             "time": "2023-02-16T00:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.28,
//                 "meteo": 0.49,
//                 "meto": 0.22,
//                 "noaa": 0.34,
//                 "sg": 0.22
//             },
//             "wavePeriod": {
//                 "icon": 4.92,
//                 "meteo": 2.49,
//                 "meto": 2.86,
//                 "noaa": 10.93,
//                 "sg": 2.86
//             },
//             "windDirection": {
//                 "icon": 229.52,
//                 "noaa": 234.2,
//                 "sg": 229.52
//             },
//             "windSpeed": {
//                 "icon": 3.7,
//                 "noaa": 2.5,
//                 "sg": 3.7
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.78,
//                 "noaa": 5.41,
//                 "sg": 6.78
//             },
//             "swellHeight": {
//                 "icon": 0.24,
//                 "meteo": 0.18,
//                 "meto": 0.15,
//                 "noaa": 0.08,
//                 "sg": 0.15
//             },
//             "swellPeriod": {
//                 "icon": 5.64,
//                 "meteo": 3.55,
//                 "meto": 9.67,
//                 "noaa": 6.46,
//                 "sg": 9.67
//             },
//             "time": "2023-02-16T01:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.27,
//                 "meteo": 0.48,
//                 "meto": 0.21,
//                 "noaa": 0.34,
//                 "sg": 0.21
//             },
//             "wavePeriod": {
//                 "icon": 5.01,
//                 "meteo": 2.48,
//                 "meto": 3.28,
//                 "noaa": 9.69,
//                 "sg": 3.28
//             },
//             "windDirection": {
//                 "icon": 226.59,
//                 "noaa": 225.29,
//                 "sg": 226.59
//             },
//             "windSpeed": {
//                 "icon": 3.51,
//                 "noaa": 2.96,
//                 "sg": 3.51
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.81,
//                 "noaa": 5.46,
//                 "sg": 6.81
//             },
//             "swellHeight": {
//                 "icon": 0.24,
//                 "meteo": 0.16,
//                 "meto": 0.14,
//                 "noaa": 0.07,
//                 "sg": 0.14
//             },
//             "swellPeriod": {
//                 "icon": 5.59,
//                 "meteo": 3.65,
//                 "meto": 9.28,
//                 "noaa": 4.51,
//                 "sg": 9.28
//             },
//             "time": "2023-02-16T02:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.25,
//                 "meteo": 0.48,
//                 "meto": 0.2,
//                 "noaa": 0.35,
//                 "sg": 0.2
//             },
//             "wavePeriod": {
//                 "icon": 5.09,
//                 "meteo": 2.47,
//                 "meto": 3.38,
//                 "noaa": 8.45,
//                 "sg": 3.38
//             },
//             "windDirection": {
//                 "icon": 223.65,
//                 "noaa": 216.38,
//                 "sg": 223.65
//             },
//             "windSpeed": {
//                 "icon": 3.32,
//                 "noaa": 3.41,
//                 "sg": 3.32
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.83,
//                 "noaa": 5.51,
//                 "sg": 6.83
//             },
//             "swellHeight": {
//                 "icon": 0.23,
//                 "meteo": 0.14,
//                 "meto": 0.14,
//                 "noaa": 0.07,
//                 "sg": 0.14
//             },
//             "swellPeriod": {
//                 "icon": 5.54,
//                 "meteo": 3.74,
//                 "meto": 9.75,
//                 "noaa": 2.55,
//                 "sg": 9.75
//             },
//             "time": "2023-02-16T03:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.24,
//                 "meteo": 0.47,
//                 "meto": 0.2,
//                 "noaa": 0.35,
//                 "sg": 0.2
//             },
//             "wavePeriod": {
//                 "icon": 5.18,
//                 "meteo": 2.46,
//                 "meto": 3.06,
//                 "noaa": 7.21,
//                 "sg": 3.06
//             },
//             "windDirection": {
//                 "icon": 220.72,
//                 "noaa": 207.47,
//                 "sg": 220.72
//             },
//             "windSpeed": {
//                 "icon": 3.13,
//                 "noaa": 3.87,
//                 "sg": 3.13
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.76,
//                 "noaa": 5.49,
//                 "sg": 6.76
//             },
//             "swellHeight": {
//                 "icon": 0.22,
//                 "meteo": 0.13,
//                 "meto": 0.13,
//                 "noaa": 0.07,
//                 "sg": 0.13
//             },
//             "swellPeriod": {
//                 "icon": 5.69,
//                 "meteo": 3.74,
//                 "meto": 9.77,
//                 "noaa": 3.89,
//                 "sg": 9.77
//             },
//             "time": "2023-02-16T04:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.23,
//                 "meteo": 0.44,
//                 "meto": 0.19,
//                 "noaa": 0.33,
//                 "sg": 0.19
//             },
//             "wavePeriod": {
//                 "icon": 5.36,
//                 "meteo": 2.44,
//                 "meto": 2.99,
//                 "noaa": 8.31,
//                 "sg": 2.99
//             },
//             "windDirection": {
//                 "icon": 216.36,
//                 "noaa": 203.9,
//                 "sg": 216.36
//             },
//             "windSpeed": {
//                 "icon": 3.08,
//                 "noaa": 3.92,
//                 "sg": 3.08
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.69,
//                 "noaa": 5.47,
//                 "sg": 6.69
//             },
//             "swellHeight": {
//                 "icon": 0.21,
//                 "meteo": 0.13,
//                 "meto": 0.13,
//                 "noaa": 0.07,
//                 "sg": 0.13
//             },
//             "swellPeriod": {
//                 "icon": 5.85,
//                 "meteo": 3.75,
//                 "meto": 9.78,
//                 "noaa": 5.24,
//                 "sg": 9.78
//             },
//             "time": "2023-02-16T05:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.22,
//                 "meteo": 0.41,
//                 "meto": 0.17,
//                 "noaa": 0.31,
//                 "sg": 0.17
//             },
//             "wavePeriod": {
//                 "icon": 5.54,
//                 "meteo": 2.42,
//                 "meto": 3.8,
//                 "noaa": 9.4,
//                 "sg": 3.8
//             },
//             "windDirection": {
//                 "icon": 212,
//                 "noaa": 200.33,
//                 "sg": 212
//             },
//             "windSpeed": {
//                 "icon": 3.04,
//                 "noaa": 3.98,
//                 "sg": 3.04
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.62,
//                 "noaa": 5.45,
//                 "sg": 6.62
//             },
//             "swellHeight": {
//                 "icon": 0.2,
//                 "meteo": 0.12,
//                 "meto": 0.13,
//                 "noaa": 0.07,
//                 "sg": 0.13
//             },
//             "swellPeriod": {
//                 "icon": 6,
//                 "meteo": 3.75,
//                 "meto": 9.61,
//                 "noaa": 6.58,
//                 "sg": 9.61
//             },
//             "time": "2023-02-16T06:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.21,
//                 "meteo": 0.38,
//                 "meto": 0.15,
//                 "noaa": 0.29,
//                 "sg": 0.15
//             },
//             "wavePeriod": {
//                 "icon": 5.72,
//                 "meteo": 2.4,
//                 "meto": 5.23,
//                 "noaa": 10.5,
//                 "sg": 5.23
//             },
//             "windDirection": {
//                 "icon": 207.64,
//                 "noaa": 196.76,
//                 "sg": 207.64
//             },
//             "windSpeed": {
//                 "icon": 2.99,
//                 "noaa": 4.03,
//                 "sg": 2.99
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.71,
//                 "noaa": 5.63,
//                 "sg": 6.71
//             },
//             "swellHeight": {
//                 "icon": 0.2,
//                 "meteo": 0.13,
//                 "meto": 0.12,
//                 "noaa": 0.07,
//                 "sg": 0.12
//             },
//             "swellPeriod": {
//                 "icon": 6.13,
//                 "meteo": 3.67,
//                 "meto": 9.7,
//                 "noaa": 5.89,
//                 "sg": 9.7
//             },
//             "time": "2023-02-16T07:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.25,
//                 "meteo": 0.36,
//                 "meto": 0.15,
//                 "noaa": 0.31,
//                 "sg": 0.15
//             },
//             "wavePeriod": {
//                 "icon": 5.01,
//                 "meteo": 2.39,
//                 "meto": 6.22,
//                 "noaa": 10.66,
//                 "sg": 6.22
//             },
//             "windDirection": {
//                 "icon": 204.73,
//                 "noaa": 196.25,
//                 "sg": 204.73
//             },
//             "windSpeed": {
//                 "icon": 3.87,
//                 "noaa": 4.39,
//                 "sg": 3.87
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.79,
//                 "noaa": 5.81,
//                 "sg": 6.79
//             },
//             "swellHeight": {
//                 "icon": 0.19,
//                 "meteo": 0.13,
//                 "meto": 0.12,
//                 "noaa": 0.06,
//                 "sg": 0.12
//             },
//             "swellPeriod": {
//                 "icon": 6.26,
//                 "meteo": 3.59,
//                 "meto": 9.75,
//                 "noaa": 5.2,
//                 "sg": 9.75
//             },
//             "time": "2023-02-16T08:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.28,
//                 "meteo": 0.34,
//                 "meto": 0.14,
//                 "noaa": 0.33,
//                 "sg": 0.14
//             },
//             "wavePeriod": {
//                 "icon": 4.31,
//                 "meteo": 2.38,
//                 "meto": 6.54,
//                 "noaa": 10.83,
//                 "sg": 6.54
//             },
//             "windDirection": {
//                 "icon": 201.83,
//                 "noaa": 195.73,
//                 "sg": 201.83
//             },
//             "windSpeed": {
//                 "icon": 4.75,
//                 "noaa": 4.74,
//                 "sg": 4.75
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 6.88,
//                 "noaa": 5.99,
//                 "sg": 6.88
//             },
//             "swellHeight": {
//                 "icon": 0.19,
//                 "meteo": 0.14,
//                 "meto": 0.12,
//                 "noaa": 0.06,
//                 "sg": 0.12
//             },
//             "swellPeriod": {
//                 "icon": 6.39,
//                 "meteo": 3.51,
//                 "meto": 9.84,
//                 "noaa": 4.51,
//                 "sg": 9.84
//             },
//             "time": "2023-02-16T09:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.32,
//                 "meteo": 0.32,
//                 "meto": 0.14,
//                 "noaa": 0.35,
//                 "sg": 0.14
//             },
//             "wavePeriod": {
//                 "icon": 3.6,
//                 "meteo": 2.37,
//                 "meto": 6.6,
//                 "noaa": 10.99,
//                 "sg": 6.6
//             },
//             "windDirection": {
//                 "icon": 198.92,
//                 "noaa": 195.22,
//                 "sg": 198.92
//             },
//             "windSpeed": {
//                 "icon": 5.64,
//                 "noaa": 5.1,
//                 "sg": 5.64
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.29,
//                 "noaa": 6.59,
//                 "sg": 7.29
//             },
//             "swellHeight": {
//                 "icon": 0.22,
//                 "meteo": 0.19,
//                 "meto": 0.12,
//                 "noaa": 0.1,
//                 "sg": 0.12
//             },
//             "swellPeriod": {
//                 "icon": 6.1,
//                 "meteo": 3.24,
//                 "meto": 9.66,
//                 "noaa": 4.96,
//                 "sg": 9.66
//             },
//             "time": "2023-02-16T10:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.42,
//                 "meteo": 0.31,
//                 "meto": 0.14,
//                 "noaa": 0.37,
//                 "sg": 0.14
//             },
//             "wavePeriod": {
//                 "icon": 3.53,
//                 "meteo": 2.47,
//                 "meto": 6.59,
//                 "noaa": 10.81,
//                 "sg": 6.59
//             },
//             "windDirection": {
//                 "icon": 199.53,
//                 "noaa": 204.88,
//                 "sg": 199.53
//             },
//             "windSpeed": {
//                 "icon": 6.46,
//                 "noaa": 5.18,
//                 "sg": 6.46
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 7.7,
//                 "noaa": 7.19,
//                 "sg": 7.7
//             },
//             "swellHeight": {
//                 "icon": 0.25,
//                 "meteo": 0.24,
//                 "meto": 0.11,
//                 "noaa": 0.15,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 5.81,
//                 "meteo": 2.96,
//                 "meto": 9.49,
//                 "noaa": 5.41,
//                 "sg": 9.49
//             },
//             "time": "2023-02-16T11:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.52,
//                 "meteo": 0.3,
//                 "meto": 0.14,
//                 "noaa": 0.4,
//                 "sg": 0.14
//             },
//             "wavePeriod": {
//                 "icon": 3.46,
//                 "meteo": 2.57,
//                 "meto": 6.58,
//                 "noaa": 10.63,
//                 "sg": 6.58
//             },
//             "windDirection": {
//                 "icon": 200.15,
//                 "noaa": 214.54,
//                 "sg": 200.15
//             },
//             "windSpeed": {
//                 "icon": 7.28,
//                 "noaa": 5.25,
//                 "sg": 7.28
//             }
//         },
//         {
//             "airTemperature": {
//                 "dwd": 8.1,
//                 "noaa": 7.79,
//                 "sg": 8.1
//             },
//             "swellHeight": {
//                 "icon": 0.28,
//                 "meteo": 0.29,
//                 "meto": 0.11,
//                 "noaa": 0.19,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 5.52,
//                 "meteo": 2.69,
//                 "meto": 9.46,
//                 "noaa": 5.86,
//                 "sg": 9.46
//             },
//             "time": "2023-02-16T12:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.62,
//                 "meteo": 0.29,
//                 "meto": 0.14,
//                 "noaa": 0.42,
//                 "sg": 0.14
//             },
//             "wavePeriod": {
//                 "icon": 3.39,
//                 "meteo": 2.67,
//                 "meto": 6.53,
//                 "noaa": 10.45,
//                 "sg": 6.53
//             },
//             "windDirection": {
//                 "icon": 200.76,
//                 "noaa": 224.2,
//                 "sg": 200.76
//             },
//             "windSpeed": {
//                 "icon": 8.1,
//                 "noaa": 5.33,
//                 "sg": 8.1
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.3,
//                 "sg": 8.3
//             },
//             "swellHeight": {
//                 "icon": 0.31,
//                 "meteo": 0.28,
//                 "meto": 0.11,
//                 "noaa": 0.21,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 5.47,
//                 "meteo": 2.78,
//                 "meto": 9.42,
//                 "noaa": 5.27,
//                 "sg": 9.42
//             },
//             "time": "2023-02-16T13:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.64,
//                 "meteo": 0.28,
//                 "meto": 0.14,
//                 "noaa": 0.43,
//                 "sg": 0.14
//             },
//             "wavePeriod": {
//                 "icon": 3.51,
//                 "meteo": 2.77,
//                 "meto": 6.4,
//                 "noaa": 10.41,
//                 "sg": 6.4
//             },
//             "windDirection": {
//                 "icon": 202.03,
//                 "noaa": 234.37,
//                 "sg": 202.03
//             },
//             "windSpeed": {
//                 "icon": 7.95,
//                 "noaa": 5.38,
//                 "sg": 7.95
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.82,
//                 "sg": 8.82
//             },
//             "swellHeight": {
//                 "icon": 0.35,
//                 "meteo": 0.26,
//                 "meto": 0.11,
//                 "noaa": 0.23,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 5.43,
//                 "meteo": 2.86,
//                 "meto": 8.8,
//                 "noaa": 4.67,
//                 "sg": 8.8
//             },
//             "time": "2023-02-16T14:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.67,
//                 "meteo": 0.27,
//                 "meto": 0.14,
//                 "noaa": 0.44,
//                 "sg": 0.14
//             },
//             "wavePeriod": {
//                 "icon": 3.62,
//                 "meteo": 2.87,
//                 "meto": 5.62,
//                 "noaa": 10.37,
//                 "sg": 5.62
//             },
//             "windDirection": {
//                 "icon": 203.31,
//                 "noaa": 244.53,
//                 "sg": 203.31
//             },
//             "windSpeed": {
//                 "icon": 7.8,
//                 "noaa": 5.43,
//                 "sg": 7.8
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.33,
//                 "sg": 9.33
//             },
//             "swellHeight": {
//                 "icon": 0.38,
//                 "meteo": 0.25,
//                 "meto": 0.1,
//                 "noaa": 0.25,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 5.38,
//                 "meteo": 2.95,
//                 "meto": 9.75,
//                 "noaa": 4.08,
//                 "sg": 9.75
//             },
//             "time": "2023-02-16T15:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.69,
//                 "meteo": 0.26,
//                 "meto": 0.16,
//                 "noaa": 0.45,
//                 "sg": 0.16
//             },
//             "wavePeriod": {
//                 "icon": 3.74,
//                 "meteo": 2.97,
//                 "meto": 4.43,
//                 "noaa": 10.33,
//                 "sg": 4.43
//             },
//             "windDirection": {
//                 "icon": 204.58,
//                 "noaa": 254.7,
//                 "sg": 204.58
//             },
//             "windSpeed": {
//                 "icon": 7.65,
//                 "noaa": 5.48,
//                 "sg": 7.65
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.98,
//                 "sg": 8.98
//             },
//             "swellHeight": {
//                 "icon": 0.36,
//                 "meteo": 0.23,
//                 "meto": 0.11,
//                 "noaa": 0.18,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 5.58,
//                 "meteo": 2.95,
//                 "meto": 4.81,
//                 "noaa": 7.95,
//                 "sg": 4.81
//             },
//             "time": "2023-02-16T16:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.7,
//                 "meteo": 0.24,
//                 "meto": 0.17,
//                 "noaa": 0.41,
//                 "sg": 0.17
//             },
//             "wavePeriod": {
//                 "icon": 3.75,
//                 "meteo": 2.99,
//                 "meto": 4.11,
//                 "noaa": 10.25,
//                 "sg": 4.11
//             },
//             "windDirection": {
//                 "icon": 204.25,
//                 "noaa": 258.06,
//                 "sg": 204.25
//             },
//             "windSpeed": {
//                 "icon": 7.86,
//                 "noaa": 5.14,
//                 "sg": 7.86
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.64,
//                 "sg": 8.64
//             },
//             "swellHeight": {
//                 "icon": 0.35,
//                 "meteo": 0.21,
//                 "meto": 0.11,
//                 "noaa": 0.12,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 5.79,
//                 "meteo": 2.95,
//                 "meto": 3.37,
//                 "noaa": 11.82,
//                 "sg": 3.37
//             },
//             "time": "2023-02-16T17:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.7,
//                 "meteo": 0.22,
//                 "meto": 0.17,
//                 "noaa": 0.36,
//                 "sg": 0.17
//             },
//             "wavePeriod": {
//                 "icon": 3.75,
//                 "meteo": 3.01,
//                 "meto": 4.14,
//                 "noaa": 10.18,
//                 "sg": 4.14
//             },
//             "windDirection": {
//                 "icon": 203.92,
//                 "noaa": 261.41,
//                 "sg": 203.92
//             },
//             "windSpeed": {
//                 "icon": 8.07,
//                 "noaa": 4.81,
//                 "sg": 8.07
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.29,
//                 "sg": 8.29
//             },
//             "swellHeight": {
//                 "icon": 0.33,
//                 "meteo": 0.19,
//                 "meto": 0.11,
//                 "noaa": 0.05,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 5.99,
//                 "meteo": 2.95,
//                 "meto": 4.56,
//                 "noaa": 15.69,
//                 "sg": 4.56
//             },
//             "time": "2023-02-16T18:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.71,
//                 "meteo": 0.2,
//                 "meto": 0.16,
//                 "noaa": 0.32,
//                 "sg": 0.16
//             },
//             "wavePeriod": {
//                 "icon": 3.76,
//                 "meteo": 3.03,
//                 "meto": 4.2,
//                 "noaa": 10.1,
//                 "sg": 4.2
//             },
//             "windDirection": {
//                 "icon": 203.59,
//                 "noaa": 264.77,
//                 "sg": 203.59
//             },
//             "windSpeed": {
//                 "icon": 8.28,
//                 "noaa": 4.47,
//                 "sg": 8.28
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.69,
//                 "sg": 7.69
//             },
//             "swellHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.17,
//                 "meto": 0.1,
//                 "noaa": 0.05,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 6.37,
//                 "meteo": 2.87,
//                 "meto": 4.5,
//                 "noaa": 15.56,
//                 "sg": 4.5
//             },
//             "time": "2023-02-16T19:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.8,
//                 "meteo": 0.19,
//                 "meto": 0.16,
//                 "noaa": 0.29,
//                 "sg": 0.16
//             },
//             "wavePeriod": {
//                 "icon": 3.8,
//                 "meteo": 3.05,
//                 "meto": 4.2,
//                 "noaa": 10.02,
//                 "sg": 4.2
//             },
//             "windDirection": {
//                 "icon": 200.26,
//                 "noaa": 254.1,
//                 "sg": 200.26
//             },
//             "windSpeed": {
//                 "icon": 9,
//                 "noaa": 4.12,
//                 "sg": 9
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.09,
//                 "sg": 7.09
//             },
//             "swellHeight": {
//                 "icon": 0.27,
//                 "meteo": 0.16,
//                 "meto": 0.1,
//                 "noaa": 0.06,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 6.74,
//                 "meteo": 2.79,
//                 "meto": 4.41,
//                 "noaa": 15.43,
//                 "sg": 4.41
//             },
//             "time": "2023-02-16T20:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.88,
//                 "meteo": 0.18,
//                 "meto": 0.16,
//                 "noaa": 0.26,
//                 "sg": 0.16
//             },
//             "wavePeriod": {
//                 "icon": 3.84,
//                 "meteo": 3.07,
//                 "meto": 4.14,
//                 "noaa": 9.94,
//                 "sg": 4.14
//             },
//             "windDirection": {
//                 "icon": 196.94,
//                 "noaa": 243.42,
//                 "sg": 196.94
//             },
//             "windSpeed": {
//                 "icon": 9.72,
//                 "noaa": 3.76,
//                 "sg": 9.72
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.49,
//                 "sg": 6.49
//             },
//             "swellHeight": {
//                 "icon": 0.24,
//                 "meteo": 0.14,
//                 "meto": 0.1,
//                 "noaa": 0.06,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 7.12,
//                 "meteo": 2.71,
//                 "meto": 4.36,
//                 "noaa": 15.3,
//                 "sg": 4.36
//             },
//             "time": "2023-02-16T21:00:00+00:00",
//             "waveHeight": {
//                 "icon": 0.97,
//                 "meteo": 0.17,
//                 "meto": 0.16,
//                 "noaa": 0.23,
//                 "sg": 0.16
//             },
//             "wavePeriod": {
//                 "icon": 3.88,
//                 "meteo": 3.09,
//                 "meto": 4.14,
//                 "noaa": 9.86,
//                 "sg": 4.14
//             },
//             "windDirection": {
//                 "icon": 193.61,
//                 "noaa": 232.75,
//                 "sg": 193.61
//             },
//             "windSpeed": {
//                 "icon": 10.44,
//                 "noaa": 3.41,
//                 "sg": 10.44
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.71,
//                 "sg": 6.71
//             },
//             "swellHeight": {
//                 "icon": 0.3,
//                 "meteo": 0.12,
//                 "meto": 0.1,
//                 "noaa": 0.06,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 6.97,
//                 "meteo": 3.3,
//                 "meto": 4.35,
//                 "noaa": 12.92,
//                 "sg": 4.35
//             },
//             "time": "2023-02-16T22:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.06,
//                 "meteo": 0.17,
//                 "meto": 0.15,
//                 "noaa": 0.24,
//                 "sg": 0.15
//             },
//             "wavePeriod": {
//                 "icon": 4.01,
//                 "meteo": 3.06,
//                 "meto": 4.15,
//                 "noaa": 9.84,
//                 "sg": 4.15
//             },
//             "windDirection": {
//                 "icon": 197.25,
//                 "noaa": 234.01,
//                 "sg": 197.25
//             },
//             "windSpeed": {
//                 "icon": 10.81,
//                 "noaa": 3.78,
//                 "sg": 10.81
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.93,
//                 "sg": 6.93
//             },
//             "swellHeight": {
//                 "icon": 0.36,
//                 "meteo": 0.1,
//                 "meto": 0.1,
//                 "noaa": 0.06,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 6.82,
//                 "meteo": 3.9,
//                 "meto": 4.34,
//                 "noaa": 10.54,
//                 "sg": 4.34
//             },
//             "time": "2023-02-16T23:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.16,
//                 "meteo": 0.16,
//                 "meto": 0.16,
//                 "noaa": 0.26,
//                 "sg": 0.16
//             },
//             "wavePeriod": {
//                 "icon": 4.15,
//                 "meteo": 3.04,
//                 "meto": 4.19,
//                 "noaa": 9.83,
//                 "sg": 4.19
//             },
//             "windDirection": {
//                 "icon": 200.89,
//                 "noaa": 235.26,
//                 "sg": 200.89
//             },
//             "windSpeed": {
//                 "icon": 11.19,
//                 "noaa": 4.14,
//                 "sg": 11.19
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.15,
//                 "sg": 7.15
//             },
//             "swellHeight": {
//                 "icon": 0.42,
//                 "meteo": 0.08,
//                 "meto": 0.1,
//                 "noaa": 0.06,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 6.67,
//                 "meteo": 4.49,
//                 "meto": 4.34,
//                 "noaa": 8.16,
//                 "sg": 4.34
//             },
//             "time": "2023-02-17T00:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.25,
//                 "meteo": 0.16,
//                 "meto": 0.16,
//                 "noaa": 0.27,
//                 "sg": 0.16
//             },
//             "wavePeriod": {
//                 "icon": 4.28,
//                 "meteo": 3.01,
//                 "meto": 4.19,
//                 "noaa": 9.81,
//                 "sg": 4.19
//             },
//             "windDirection": {
//                 "icon": 204.53,
//                 "noaa": 236.52,
//                 "sg": 204.53
//             },
//             "windSpeed": {
//                 "icon": 11.56,
//                 "noaa": 4.51,
//                 "sg": 11.56
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.75,
//                 "sg": 7.75
//             },
//             "swellHeight": {
//                 "icon": 0.43,
//                 "meteo": 0.09,
//                 "noaa": 0.06,
//                 "sg": 0.09
//             },
//             "swellPeriod": {
//                 "icon": 6.84,
//                 "meteo": 4.17,
//                 "noaa": 10.27,
//                 "sg": 4.17
//             },
//             "time": "2023-02-17T01:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.31,
//                 "meteo": 0.21,
//                 "noaa": 0.3,
//                 "sg": 0.21
//             },
//             "wavePeriod": {
//                 "icon": 4.35,
//                 "meteo": 2.54,
//                 "noaa": 8.19,
//                 "sg": 2.54
//             },
//             "windDirection": {
//                 "icon": 204.54,
//                 "noaa": 236.25,
//                 "sg": 204.54
//             },
//             "windSpeed": {
//                 "icon": 11.87,
//                 "noaa": 4.82,
//                 "sg": 11.87
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.35,
//                 "sg": 8.35
//             },
//             "swellHeight": {
//                 "icon": 0.44,
//                 "meteo": 0.11,
//                 "noaa": 0.07,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 7.01,
//                 "meteo": 3.85,
//                 "noaa": 12.37,
//                 "sg": 3.85
//             },
//             "time": "2023-02-17T02:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.36,
//                 "meteo": 0.25,
//                 "noaa": 0.34,
//                 "sg": 0.25
//             },
//             "wavePeriod": {
//                 "icon": 4.43,
//                 "meteo": 2.08,
//                 "noaa": 6.58,
//                 "sg": 2.08
//             },
//             "windDirection": {
//                 "icon": 204.56,
//                 "noaa": 235.99,
//                 "sg": 204.56
//             },
//             "windSpeed": {
//                 "icon": 12.19,
//                 "noaa": 5.13,
//                 "sg": 12.19
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.96,
//                 "sg": 8.96
//             },
//             "swellHeight": {
//                 "icon": 0.45,
//                 "meteo": 0.12,
//                 "noaa": 0.07,
//                 "sg": 0.12
//             },
//             "swellPeriod": {
//                 "icon": 7.18,
//                 "meteo": 3.53,
//                 "noaa": 14.48,
//                 "sg": 3.53
//             },
//             "time": "2023-02-17T03:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.42,
//                 "meteo": 0.3,
//                 "noaa": 0.37,
//                 "sg": 0.3
//             },
//             "wavePeriod": {
//                 "icon": 4.5,
//                 "meteo": 1.61,
//                 "noaa": 4.96,
//                 "sg": 1.61
//             },
//             "windDirection": {
//                 "icon": 204.57,
//                 "noaa": 235.72,
//                 "sg": 204.57
//             },
//             "windSpeed": {
//                 "icon": 12.5,
//                 "noaa": 5.44,
//                 "sg": 12.5
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.51,
//                 "sg": 9.51
//             },
//             "swellHeight": {
//                 "icon": 0.52,
//                 "meteo": 0.11,
//                 "noaa": 0.07,
//                 "sg": 0.11
//             },
//             "swellPeriod": {
//                 "icon": 7.07,
//                 "meteo": 3.27,
//                 "noaa": 14.48,
//                 "sg": 3.27
//             },
//             "time": "2023-02-17T04:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.4,
//                 "meteo": 0.36,
//                 "noaa": 0.42,
//                 "sg": 0.36
//             },
//             "wavePeriod": {
//                 "icon": 4.55,
//                 "meteo": 1.85,
//                 "noaa": 4.21,
//                 "sg": 1.85
//             },
//             "windDirection": {
//                 "icon": 211.77,
//                 "noaa": 237.37,
//                 "sg": 211.77
//             },
//             "windSpeed": {
//                 "icon": 12.48,
//                 "noaa": 5.91,
//                 "sg": 12.48
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.07,
//                 "sg": 10.07
//             },
//             "swellHeight": {
//                 "icon": 0.6,
//                 "meteo": 0.1,
//                 "noaa": 0.07,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 6.97,
//                 "meteo": 3.02,
//                 "noaa": 14.48,
//                 "sg": 3.02
//             },
//             "time": "2023-02-17T05:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.37,
//                 "meteo": 0.43,
//                 "noaa": 0.46,
//                 "sg": 0.43
//             },
//             "wavePeriod": {
//                 "icon": 4.61,
//                 "meteo": 2.09,
//                 "noaa": 3.45,
//                 "sg": 2.09
//             },
//             "windDirection": {
//                 "icon": 218.97,
//                 "noaa": 239.03,
//                 "sg": 218.97
//             },
//             "windSpeed": {
//                 "icon": 12.46,
//                 "noaa": 6.37,
//                 "sg": 12.46
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.62,
//                 "sg": 10.62
//             },
//             "swellHeight": {
//                 "icon": 0.67,
//                 "meteo": 0.09,
//                 "noaa": 0.07,
//                 "sg": 0.09
//             },
//             "swellPeriod": {
//                 "icon": 6.86,
//                 "meteo": 2.76,
//                 "noaa": 14.48,
//                 "sg": 2.76
//             },
//             "time": "2023-02-17T06:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.35,
//                 "meteo": 0.49,
//                 "noaa": 0.51,
//                 "sg": 0.49
//             },
//             "wavePeriod": {
//                 "icon": 4.66,
//                 "meteo": 2.33,
//                 "noaa": 2.7,
//                 "sg": 2.33
//             },
//             "windDirection": {
//                 "icon": 226.17,
//                 "noaa": 240.68,
//                 "sg": 226.17
//             },
//             "windSpeed": {
//                 "icon": 12.44,
//                 "noaa": 6.84,
//                 "sg": 12.44
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 11.06,
//                 "sg": 11.06
//             },
//             "swellHeight": {
//                 "icon": 0.64,
//                 "meteo": 0.09,
//                 "noaa": 0.07,
//                 "sg": 0.09
//             },
//             "swellPeriod": {
//                 "icon": 7.01,
//                 "meteo": 3.11,
//                 "noaa": 14.5,
//                 "sg": 3.11
//             },
//             "time": "2023-02-17T07:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.33,
//                 "meteo": 0.61,
//                 "noaa": 0.58,
//                 "sg": 0.61
//             },
//             "wavePeriod": {
//                 "icon": 4.65,
//                 "meteo": 2.49,
//                 "noaa": 2.9,
//                 "sg": 2.49
//             },
//             "windDirection": {
//                 "icon": 225.11,
//                 "noaa": 245.09,
//                 "sg": 225.11
//             },
//             "windSpeed": {
//                 "icon": 11.95,
//                 "noaa": 7.22,
//                 "sg": 11.95
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 11.51,
//                 "sg": 11.51
//             },
//             "swellHeight": {
//                 "icon": 0.61,
//                 "meteo": 0.1,
//                 "noaa": 0.07,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 7.17,
//                 "meteo": 3.47,
//                 "noaa": 14.51,
//                 "sg": 3.47
//             },
//             "time": "2023-02-17T08:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.3,
//                 "meteo": 0.72,
//                 "noaa": 0.65,
//                 "sg": 0.72
//             },
//             "wavePeriod": {
//                 "icon": 4.64,
//                 "meteo": 2.65,
//                 "noaa": 3.1,
//                 "sg": 2.65
//             },
//             "windDirection": {
//                 "icon": 224.05,
//                 "noaa": 249.5,
//                 "sg": 224.05
//             },
//             "windSpeed": {
//                 "icon": 11.47,
//                 "noaa": 7.6,
//                 "sg": 11.47
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 11.95,
//                 "sg": 11.95
//             },
//             "swellHeight": {
//                 "icon": 0.58,
//                 "meteo": 0.1,
//                 "noaa": 0.07,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 7.32,
//                 "meteo": 3.82,
//                 "noaa": 14.53,
//                 "sg": 3.82
//             },
//             "time": "2023-02-17T09:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.28,
//                 "meteo": 0.84,
//                 "noaa": 0.72,
//                 "sg": 0.84
//             },
//             "wavePeriod": {
//                 "icon": 4.63,
//                 "meteo": 2.81,
//                 "noaa": 3.3,
//                 "sg": 2.81
//             },
//             "windDirection": {
//                 "icon": 222.99,
//                 "noaa": 253.91,
//                 "sg": 222.99
//             },
//             "windSpeed": {
//                 "icon": 10.98,
//                 "noaa": 7.98,
//                 "sg": 10.98
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 12.54,
//                 "sg": 12.54
//             },
//             "swellHeight": {
//                 "icon": 0.58,
//                 "meteo": 0.13,
//                 "noaa": 0.07,
//                 "sg": 0.13
//             },
//             "swellPeriod": {
//                 "icon": 7.08,
//                 "meteo": 3.77,
//                 "noaa": 12.85,
//                 "sg": 3.77
//             },
//             "time": "2023-02-17T10:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.28,
//                 "meteo": 0.89,
//                 "noaa": 0.69,
//                 "sg": 0.89
//             },
//             "wavePeriod": {
//                 "icon": 4.53,
//                 "meteo": 2.93,
//                 "noaa": 3.24,
//                 "sg": 2.93
//             },
//             "windDirection": {
//                 "icon": 237.89,
//                 "noaa": 253.2,
//                 "sg": 237.89
//             },
//             "windSpeed": {
//                 "icon": 11.68,
//                 "noaa": 8.4,
//                 "sg": 11.68
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 13.14,
//                 "sg": 13.14
//             },
//             "swellHeight": {
//                 "icon": 0.57,
//                 "meteo": 0.17,
//                 "noaa": 0.07,
//                 "sg": 0.17
//             },
//             "swellPeriod": {
//                 "icon": 6.84,
//                 "meteo": 3.73,
//                 "noaa": 11.18,
//                 "sg": 3.73
//             },
//             "time": "2023-02-17T11:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.28,
//                 "meteo": 0.93,
//                 "noaa": 0.65,
//                 "sg": 0.93
//             },
//             "wavePeriod": {
//                 "icon": 4.43,
//                 "meteo": 3.06,
//                 "noaa": 3.19,
//                 "sg": 3.06
//             },
//             "windDirection": {
//                 "icon": 252.78,
//                 "noaa": 252.48,
//                 "sg": 252.78
//             },
//             "windSpeed": {
//                 "icon": 12.37,
//                 "noaa": 8.81,
//                 "sg": 12.37
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 13.73,
//                 "sg": 13.73
//             },
//             "swellHeight": {
//                 "icon": 0.57,
//                 "meteo": 0.2,
//                 "noaa": 0.07,
//                 "sg": 0.2
//             },
//             "swellPeriod": {
//                 "icon": 6.6,
//                 "meteo": 3.68,
//                 "noaa": 9.5,
//                 "sg": 3.68
//             },
//             "time": "2023-02-17T12:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.28,
//                 "meteo": 0.98,
//                 "noaa": 0.62,
//                 "sg": 0.98
//             },
//             "wavePeriod": {
//                 "icon": 4.33,
//                 "meteo": 3.18,
//                 "noaa": 3.13,
//                 "sg": 3.18
//             },
//             "windDirection": {
//                 "icon": 267.68,
//                 "noaa": 251.77,
//                 "sg": 267.68
//             },
//             "windSpeed": {
//                 "icon": 13.07,
//                 "noaa": 9.23,
//                 "sg": 13.07
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 13.67,
//                 "sg": 13.67
//             },
//             "swellHeight": {
//                 "icon": 0.49,
//                 "meteo": 0.18,
//                 "noaa": 0.07,
//                 "sg": 0.18
//             },
//             "swellPeriod": {
//                 "icon": 7.02,
//                 "meteo": 3.93,
//                 "noaa": 8.18,
//                 "sg": 3.93
//             },
//             "time": "2023-02-17T13:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.35,
//                 "meteo": 1.07,
//                 "noaa": 0.63,
//                 "sg": 1.07
//             },
//             "wavePeriod": {
//                 "icon": 4.39,
//                 "meteo": 3.27,
//                 "noaa": 3.16,
//                 "sg": 3.27
//             },
//             "windDirection": {
//                 "icon": 271.8,
//                 "noaa": 252.09,
//                 "sg": 271.8
//             },
//             "windSpeed": {
//                 "icon": 12.82,
//                 "noaa": 9.07,
//                 "sg": 12.82
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 13.6,
//                 "sg": 13.6
//             },
//             "swellHeight": {
//                 "icon": 0.41,
//                 "meteo": 0.17,
//                 "noaa": 0.07,
//                 "sg": 0.17
//             },
//             "swellPeriod": {
//                 "icon": 7.45,
//                 "meteo": 4.19,
//                 "noaa": 6.86,
//                 "sg": 4.19
//             },
//             "time": "2023-02-17T14:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.43,
//                 "meteo": 1.17,
//                 "noaa": 0.64,
//                 "sg": 1.17
//             },
//             "wavePeriod": {
//                 "icon": 4.45,
//                 "meteo": 3.36,
//                 "noaa": 3.19,
//                 "sg": 3.36
//             },
//             "windDirection": {
//                 "icon": 275.91,
//                 "noaa": 252.42,
//                 "sg": 275.91
//             },
//             "windSpeed": {
//                 "icon": 12.57,
//                 "noaa": 8.92,
//                 "sg": 12.57
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 13.54,
//                 "sg": 13.54
//             },
//             "swellHeight": {
//                 "icon": 0.33,
//                 "meteo": 0.15,
//                 "noaa": 0.07,
//                 "sg": 0.15
//             },
//             "swellPeriod": {
//                 "icon": 7.87,
//                 "meteo": 4.44,
//                 "noaa": 5.54,
//                 "sg": 4.44
//             },
//             "time": "2023-02-17T15:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.5,
//                 "meteo": 1.26,
//                 "noaa": 0.65,
//                 "sg": 1.26
//             },
//             "wavePeriod": {
//                 "icon": 4.51,
//                 "meteo": 3.45,
//                 "noaa": 3.22,
//                 "sg": 3.45
//             },
//             "windDirection": {
//                 "icon": 280.03,
//                 "noaa": 252.74,
//                 "sg": 280.03
//             },
//             "windSpeed": {
//                 "icon": 12.32,
//                 "noaa": 8.76,
//                 "sg": 12.32
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 12.99,
//                 "sg": 12.99
//             },
//             "swellHeight": {
//                 "icon": 0.45,
//                 "meteo": 0.15,
//                 "noaa": 0.07,
//                 "sg": 0.15
//             },
//             "swellPeriod": {
//                 "icon": 7.47,
//                 "meteo": 4.59,
//                 "noaa": 5.18,
//                 "sg": 4.59
//             },
//             "time": "2023-02-17T16:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.41,
//                 "meteo": 1.33,
//                 "noaa": 0.66,
//                 "sg": 1.33
//             },
//             "wavePeriod": {
//                 "icon": 4.69,
//                 "meteo": 3.52,
//                 "noaa": 3.21,
//                 "sg": 3.52
//             },
//             "windDirection": {
//                 "icon": 277.17,
//                 "noaa": 251.05,
//                 "sg": 277.17
//             },
//             "windSpeed": {
//                 "icon": 11.23,
//                 "noaa": 8.48,
//                 "sg": 11.23
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 12.45,
//                 "sg": 12.45
//             },
//             "swellHeight": {
//                 "icon": 0.56,
//                 "meteo": 0.16,
//                 "noaa": 0.08,
//                 "sg": 0.16
//             },
//             "swellPeriod": {
//                 "icon": 7.08,
//                 "meteo": 4.75,
//                 "noaa": 4.83,
//                 "sg": 4.75
//             },
//             "time": "2023-02-17T17:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.31,
//                 "meteo": 1.39,
//                 "noaa": 0.66,
//                 "sg": 1.39
//             },
//             "wavePeriod": {
//                 "icon": 4.88,
//                 "meteo": 3.59,
//                 "noaa": 3.21,
//                 "sg": 3.59
//             },
//             "windDirection": {
//                 "icon": 274.31,
//                 "noaa": 249.36,
//                 "sg": 274.31
//             },
//             "windSpeed": {
//                 "icon": 10.13,
//                 "noaa": 8.2,
//                 "sg": 10.13
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 11.9,
//                 "sg": 11.9
//             },
//             "swellHeight": {
//                 "icon": 0.68,
//                 "meteo": 0.16,
//                 "noaa": 0.08,
//                 "sg": 0.16
//             },
//             "swellPeriod": {
//                 "icon": 6.68,
//                 "meteo": 4.9,
//                 "noaa": 4.47,
//                 "sg": 4.9
//             },
//             "time": "2023-02-17T18:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.22,
//                 "meteo": 1.46,
//                 "noaa": 0.67,
//                 "sg": 1.46
//             },
//             "wavePeriod": {
//                 "icon": 5.06,
//                 "meteo": 3.66,
//                 "noaa": 3.2,
//                 "sg": 3.66
//             },
//             "windDirection": {
//                 "icon": 271.45,
//                 "noaa": 247.67,
//                 "sg": 271.45
//             },
//             "windSpeed": {
//                 "icon": 9.04,
//                 "noaa": 7.92,
//                 "sg": 9.04
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 11.42,
//                 "sg": 11.42
//             },
//             "swellHeight": {
//                 "icon": 0.74,
//                 "meteo": 0.17,
//                 "noaa": 0.11,
//                 "sg": 0.17
//             },
//             "swellPeriod": {
//                 "icon": 6.8,
//                 "meteo": 4.68,
//                 "noaa": 5.71,
//                 "sg": 4.68
//             },
//             "time": "2023-02-17T19:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.21,
//                 "meteo": 1.42,
//                 "noaa": 0.68,
//                 "sg": 1.42
//             },
//             "wavePeriod": {
//                 "icon": 5.21,
//                 "meteo": 3.66,
//                 "noaa": 3.2,
//                 "sg": 3.66
//             },
//             "windDirection": {
//                 "icon": 271.07,
//                 "noaa": 245.19,
//                 "sg": 271.07
//             },
//             "windSpeed": {
//                 "icon": 8.79,
//                 "noaa": 7.83,
//                 "sg": 8.79
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.93,
//                 "sg": 10.93
//             },
//             "swellHeight": {
//                 "icon": 0.8,
//                 "meteo": 0.17,
//                 "noaa": 0.15,
//                 "sg": 0.17
//             },
//             "swellPeriod": {
//                 "icon": 6.93,
//                 "meteo": 4.47,
//                 "noaa": 6.95,
//                 "sg": 4.47
//             },
//             "time": "2023-02-17T20:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.2,
//                 "meteo": 1.38,
//                 "noaa": 0.69,
//                 "sg": 1.38
//             },
//             "wavePeriod": {
//                 "icon": 5.37,
//                 "meteo": 3.67,
//                 "noaa": 3.21,
//                 "sg": 3.67
//             },
//             "windDirection": {
//                 "icon": 270.68,
//                 "noaa": 242.72,
//                 "sg": 270.68
//             },
//             "windSpeed": {
//                 "icon": 8.54,
//                 "noaa": 7.75,
//                 "sg": 8.54
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.45,
//                 "sg": 10.45
//             },
//             "swellHeight": {
//                 "icon": 0.86,
//                 "meteo": 0.18,
//                 "noaa": 0.18,
//                 "sg": 0.18
//             },
//             "swellPeriod": {
//                 "icon": 7.05,
//                 "meteo": 4.25,
//                 "noaa": 8.19,
//                 "sg": 4.25
//             },
//             "time": "2023-02-17T21:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.19,
//                 "meteo": 1.34,
//                 "noaa": 0.7,
//                 "sg": 1.34
//             },
//             "wavePeriod": {
//                 "icon": 5.52,
//                 "meteo": 3.67,
//                 "noaa": 3.21,
//                 "sg": 3.67
//             },
//             "windDirection": {
//                 "icon": 270.3,
//                 "noaa": 240.24,
//                 "sg": 270.3
//             },
//             "windSpeed": {
//                 "icon": 8.29,
//                 "noaa": 7.66,
//                 "sg": 8.29
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.61,
//                 "sg": 10.61
//             },
//             "swellHeight": {
//                 "icon": 0.89,
//                 "meteo": 0.15,
//                 "noaa": 0.15,
//                 "sg": 0.15
//             },
//             "swellPeriod": {
//                 "icon": 7.16,
//                 "meteo": 4.36,
//                 "noaa": 7.2,
//                 "sg": 4.36
//             },
//             "time": "2023-02-17T22:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.19,
//                 "meteo": 1.32,
//                 "noaa": 0.72,
//                 "sg": 1.32
//             },
//             "wavePeriod": {
//                 "icon": 5.69,
//                 "meteo": 3.65,
//                 "noaa": 5.16,
//                 "sg": 3.65
//             },
//             "windDirection": {
//                 "icon": 272.53,
//                 "noaa": 244.35,
//                 "sg": 272.53
//             },
//             "windSpeed": {
//                 "icon": 8.07,
//                 "noaa": 8.19,
//                 "sg": 8.07
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.78,
//                 "sg": 10.78
//             },
//             "swellHeight": {
//                 "icon": 0.93,
//                 "meteo": 0.13,
//                 "noaa": 0.12,
//                 "sg": 0.13
//             },
//             "swellPeriod": {
//                 "icon": 7.28,
//                 "meteo": 4.48,
//                 "noaa": 6.21,
//                 "sg": 4.48
//             },
//             "time": "2023-02-17T23:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.2,
//                 "meteo": 1.3,
//                 "noaa": 0.74,
//                 "sg": 1.3
//             },
//             "wavePeriod": {
//                 "icon": 5.87,
//                 "meteo": 3.62,
//                 "noaa": 7.12,
//                 "sg": 3.62
//             },
//             "windDirection": {
//                 "icon": 274.77,
//                 "noaa": 248.46,
//                 "sg": 274.77
//             },
//             "windSpeed": {
//                 "icon": 7.85,
//                 "noaa": 8.72,
//                 "sg": 7.85
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.94,
//                 "sg": 10.94
//             },
//             "swellHeight": {
//                 "icon": 0.96,
//                 "meteo": 0.1,
//                 "noaa": 0.09,
//                 "sg": 0.1
//             },
//             "swellPeriod": {
//                 "icon": 7.39,
//                 "meteo": 4.59,
//                 "noaa": 5.22,
//                 "sg": 4.59
//             },
//             "time": "2023-02-18T00:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.2,
//                 "meteo": 1.28,
//                 "noaa": 0.76,
//                 "sg": 1.28
//             },
//             "wavePeriod": {
//                 "icon": 6.04,
//                 "meteo": 3.6,
//                 "noaa": 9.07,
//                 "sg": 3.6
//             },
//             "windDirection": {
//                 "icon": 277,
//                 "noaa": 252.57,
//                 "sg": 277
//             },
//             "windSpeed": {
//                 "icon": 7.63,
//                 "noaa": 9.25,
//                 "sg": 7.63
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.92,
//                 "sg": 10.92
//             },
//             "swellHeight": {
//                 "icon": 1.03,
//                 "meteo": 0.14,
//                 "noaa": 0.09,
//                 "sg": 0.14
//             },
//             "swellPeriod": {
//                 "icon": 7.56,
//                 "meteo": 4.81,
//                 "noaa": 5.93,
//                 "sg": 4.81
//             },
//             "time": "2023-02-18T01:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.23,
//                 "meteo": 1.24,
//                 "noaa": 0.72,
//                 "sg": 1.24
//             },
//             "wavePeriod": {
//                 "icon": 6.38,
//                 "meteo": 3.58,
//                 "noaa": 7.16,
//                 "sg": 3.58
//             },
//             "windDirection": {
//                 "icon": 277.34,
//                 "noaa": 258.35,
//                 "sg": 277.34
//             },
//             "windSpeed": {
//                 "icon": 7.31,
//                 "noaa": 9.52,
//                 "sg": 7.31
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.89,
//                 "sg": 10.89
//             },
//             "swellHeight": {
//                 "icon": 1.09,
//                 "meteo": 0.18,
//                 "noaa": 0.1,
//                 "sg": 0.18
//             },
//             "swellPeriod": {
//                 "icon": 7.72,
//                 "meteo": 5.04,
//                 "noaa": 6.65,
//                 "sg": 5.04
//             },
//             "time": "2023-02-18T02:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.25,
//                 "meteo": 1.21,
//                 "noaa": 0.69,
//                 "sg": 1.21
//             },
//             "wavePeriod": {
//                 "icon": 6.73,
//                 "meteo": 3.56,
//                 "noaa": 5.25,
//                 "sg": 3.56
//             },
//             "windDirection": {
//                 "icon": 277.68,
//                 "noaa": 264.12,
//                 "sg": 277.68
//             },
//             "windSpeed": {
//                 "icon": 6.99,
//                 "noaa": 9.8,
//                 "sg": 6.99
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.87,
//                 "sg": 10.87
//             },
//             "swellHeight": {
//                 "icon": 1.16,
//                 "meteo": 0.22,
//                 "noaa": 0.1,
//                 "sg": 0.22
//             },
//             "swellPeriod": {
//                 "icon": 7.89,
//                 "meteo": 5.26,
//                 "noaa": 7.36,
//                 "sg": 5.26
//             },
//             "time": "2023-02-18T03:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.28,
//                 "meteo": 1.17,
//                 "noaa": 0.65,
//                 "sg": 1.17
//             },
//             "wavePeriod": {
//                 "icon": 7.07,
//                 "meteo": 3.54,
//                 "noaa": 3.34,
//                 "sg": 3.54
//             },
//             "windDirection": {
//                 "icon": 278.02,
//                 "noaa": 269.9,
//                 "sg": 278.02
//             },
//             "windSpeed": {
//                 "icon": 6.67,
//                 "noaa": 10.07,
//                 "sg": 6.67
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.29,
//                 "sg": 10.29
//             },
//             "swellHeight": {
//                 "icon": 1.2,
//                 "meteo": 0.26,
//                 "noaa": 0.28,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "icon": 8,
//                 "meteo": 5.16,
//                 "noaa": 7.94,
//                 "sg": 5.16
//             },
//             "time": "2023-02-18T04:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.29,
//                 "meteo": 1.15,
//                 "noaa": 0.71,
//                 "sg": 1.15
//             },
//             "wavePeriod": {
//                 "icon": 7.34,
//                 "meteo": 3.55,
//                 "noaa": 5.26,
//                 "sg": 3.55
//             },
//             "windDirection": {
//                 "icon": 274.77,
//                 "noaa": 272.34,
//                 "sg": 274.77
//             },
//             "windSpeed": {
//                 "icon": 6.31,
//                 "noaa": 8.79,
//                 "sg": 6.31
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.7,
//                 "sg": 9.7
//             },
//             "swellHeight": {
//                 "icon": 1.23,
//                 "meteo": 0.31,
//                 "noaa": 0.47,
//                 "sg": 0.31
//             },
//             "swellPeriod": {
//                 "icon": 8.11,
//                 "meteo": 5.05,
//                 "noaa": 8.51,
//                 "sg": 5.05
//             },
//             "time": "2023-02-18T05:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.3,
//                 "meteo": 1.12,
//                 "noaa": 0.76,
//                 "sg": 1.12
//             },
//             "wavePeriod": {
//                 "icon": 7.61,
//                 "meteo": 3.56,
//                 "noaa": 7.17,
//                 "sg": 3.56
//             },
//             "windDirection": {
//                 "icon": 271.51,
//                 "noaa": 274.78,
//                 "sg": 271.51
//             },
//             "windSpeed": {
//                 "icon": 5.95,
//                 "noaa": 7.51,
//                 "sg": 5.95
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.12,
//                 "sg": 9.12
//             },
//             "swellHeight": {
//                 "icon": 1.27,
//                 "meteo": 0.35,
//                 "noaa": 0.65,
//                 "sg": 0.35
//             },
//             "swellPeriod": {
//                 "icon": 8.22,
//                 "meteo": 4.95,
//                 "noaa": 9.09,
//                 "sg": 4.95
//             },
//             "time": "2023-02-18T06:00:00+00:00",
//             "waveHeight": {
//                 "icon": 1.31,
//                 "meteo": 1.1,
//                 "noaa": 0.82,
//                 "sg": 1.1
//             },
//             "wavePeriod": {
//                 "icon": 7.88,
//                 "meteo": 3.57,
//                 "noaa": 9.09,
//                 "sg": 3.57
//             },
//             "windDirection": {
//                 "icon": 268.26,
//                 "noaa": 277.22,
//                 "sg": 268.26
//             },
//             "windSpeed": {
//                 "icon": 5.59,
//                 "noaa": 6.23,
//                 "sg": 5.59
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.61,
//                 "sg": 8.61
//             },
//             "swellHeight": {
//                 "meteo": 0.47,
//                 "noaa": 0.45,
//                 "sg": 0.47
//             },
//             "swellPeriod": {
//                 "meteo": 5.22,
//                 "noaa": 7.76,
//                 "sg": 5.22
//             },
//             "time": "2023-02-18T07:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.09,
//                 "noaa": 0.78,
//                 "sg": 1.09
//             },
//             "wavePeriod": {
//                 "meteo": 3.63,
//                 "noaa": 8.6,
//                 "sg": 3.63
//             },
//             "windDirection": {
//                 "noaa": 311.81,
//                 "sg": 311.81
//             },
//             "windSpeed": {
//                 "noaa": 5,
//                 "sg": 5
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.1,
//                 "sg": 8.1
//             },
//             "swellHeight": {
//                 "meteo": 0.59,
//                 "noaa": 0.26,
//                 "sg": 0.59
//             },
//             "swellPeriod": {
//                 "meteo": 5.48,
//                 "noaa": 6.42,
//                 "sg": 5.48
//             },
//             "time": "2023-02-18T08:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.07,
//                 "noaa": 0.75,
//                 "sg": 1.07
//             },
//             "wavePeriod": {
//                 "meteo": 3.69,
//                 "noaa": 8.1,
//                 "sg": 3.69
//             },
//             "windDirection": {
//                 "noaa": 346.4,
//                 "sg": 346.4
//             },
//             "windSpeed": {
//                 "noaa": 3.77,
//                 "sg": 3.77
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.59,
//                 "sg": 7.59
//             },
//             "swellHeight": {
//                 "meteo": 0.71,
//                 "noaa": 0.06,
//                 "sg": 0.71
//             },
//             "swellPeriod": {
//                 "meteo": 5.75,
//                 "noaa": 5.09,
//                 "sg": 5.75
//             },
//             "time": "2023-02-18T09:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.06,
//                 "noaa": 0.71,
//                 "sg": 1.06
//             },
//             "wavePeriod": {
//                 "meteo": 3.75,
//                 "noaa": 7.61,
//                 "sg": 3.75
//             },
//             "windDirection": {
//                 "noaa": 20.99,
//                 "sg": 20.99
//             },
//             "windSpeed": {
//                 "noaa": 2.54,
//                 "sg": 2.54
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.79,
//                 "sg": 7.79
//             },
//             "swellHeight": {
//                 "meteo": 0.71,
//                 "noaa": 0.28,
//                 "sg": 0.71
//             },
//             "swellPeriod": {
//                 "meteo": 5.56,
//                 "noaa": 5.41,
//                 "sg": 5.56
//             },
//             "time": "2023-02-18T10:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.05,
//                 "noaa": 0.71,
//                 "sg": 1.05
//             },
//             "wavePeriod": {
//                 "meteo": 3.84,
//                 "noaa": 7.09,
//                 "sg": 3.84
//             },
//             "windDirection": {
//                 "noaa": 59.11,
//                 "sg": 59.11
//             },
//             "windSpeed": {
//                 "noaa": 2.64,
//                 "sg": 2.64
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8,
//                 "sg": 8
//             },
//             "swellHeight": {
//                 "meteo": 0.72,
//                 "noaa": 0.49,
//                 "sg": 0.72
//             },
//             "swellPeriod": {
//                 "meteo": 5.37,
//                 "noaa": 5.72,
//                 "sg": 5.37
//             },
//             "time": "2023-02-18T11:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.04,
//                 "noaa": 0.71,
//                 "sg": 1.04
//             },
//             "wavePeriod": {
//                 "meteo": 3.94,
//                 "noaa": 6.56,
//                 "sg": 3.94
//             },
//             "windDirection": {
//                 "noaa": 97.24,
//                 "sg": 97.24
//             },
//             "windSpeed": {
//                 "noaa": 2.74,
//                 "sg": 2.74
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.2,
//                 "sg": 8.2
//             },
//             "swellHeight": {
//                 "meteo": 0.72,
//                 "noaa": 0.71,
//                 "sg": 0.72
//             },
//             "swellPeriod": {
//                 "meteo": 5.18,
//                 "noaa": 6.04,
//                 "sg": 5.18
//             },
//             "time": "2023-02-18T12:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.03,
//                 "noaa": 0.71,
//                 "sg": 1.03
//             },
//             "wavePeriod": {
//                 "meteo": 4.03,
//                 "noaa": 6.04,
//                 "sg": 4.03
//             },
//             "windDirection": {
//                 "noaa": 135.36,
//                 "sg": 135.36
//             },
//             "windSpeed": {
//                 "noaa": 2.84,
//                 "sg": 2.84
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.04,
//                 "sg": 9.04
//             },
//             "swellHeight": {
//                 "meteo": 0.79,
//                 "noaa": 0.73,
//                 "sg": 0.79
//             },
//             "swellPeriod": {
//                 "meteo": 6.13,
//                 "noaa": 5.95,
//                 "sg": 6.13
//             },
//             "time": "2023-02-18T13:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.07,
//                 "noaa": 0.74,
//                 "sg": 1.07
//             },
//             "wavePeriod": {
//                 "meteo": 4.42,
//                 "noaa": 5.95,
//                 "sg": 4.42
//             },
//             "windDirection": {
//                 "noaa": 169.1,
//                 "sg": 169.1
//             },
//             "windSpeed": {
//                 "noaa": 3.19,
//                 "sg": 3.19
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.88,
//                 "sg": 9.88
//             },
//             "swellHeight": {
//                 "meteo": 0.87,
//                 "noaa": 0.74,
//                 "sg": 0.87
//             },
//             "swellPeriod": {
//                 "meteo": 7.08,
//                 "noaa": 5.86,
//                 "sg": 7.08
//             },
//             "time": "2023-02-18T14:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.12,
//                 "noaa": 0.77,
//                 "sg": 1.12
//             },
//             "wavePeriod": {
//                 "meteo": 4.81,
//                 "noaa": 5.86,
//                 "sg": 4.81
//             },
//             "windDirection": {
//                 "noaa": 202.85,
//                 "sg": 202.85
//             },
//             "windSpeed": {
//                 "noaa": 3.53,
//                 "sg": 3.53
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.71,
//                 "sg": 10.71
//             },
//             "swellHeight": {
//                 "meteo": 0.94,
//                 "noaa": 0.76,
//                 "sg": 0.94
//             },
//             "swellPeriod": {
//                 "meteo": 8.03,
//                 "noaa": 5.77,
//                 "sg": 8.03
//             },
//             "time": "2023-02-18T15:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.16,
//                 "noaa": 0.8,
//                 "sg": 1.16
//             },
//             "wavePeriod": {
//                 "meteo": 5.2,
//                 "noaa": 5.77,
//                 "sg": 5.2
//             },
//             "windDirection": {
//                 "noaa": 236.59,
//                 "sg": 236.59
//             },
//             "windSpeed": {
//                 "noaa": 3.88,
//                 "sg": 3.88
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.03,
//                 "sg": 10.03
//             },
//             "swellHeight": {
//                 "meteo": 1.05,
//                 "noaa": 0.55,
//                 "sg": 1.05
//             },
//             "swellPeriod": {
//                 "meteo": 7.75,
//                 "noaa": 4.76,
//                 "sg": 7.75
//             },
//             "time": "2023-02-18T16:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.2,
//                 "noaa": 0.83,
//                 "sg": 1.2
//             },
//             "wavePeriod": {
//                 "meteo": 5.59,
//                 "noaa": 6.03,
//                 "sg": 5.59
//             },
//             "windDirection": {
//                 "noaa": 245.62,
//                 "sg": 245.62
//             },
//             "windSpeed": {
//                 "noaa": 4.94,
//                 "sg": 4.94
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.36,
//                 "sg": 9.36
//             },
//             "swellHeight": {
//                 "meteo": 1.16,
//                 "noaa": 0.34,
//                 "sg": 1.16
//             },
//             "swellPeriod": {
//                 "meteo": 7.48,
//                 "noaa": 3.75,
//                 "sg": 7.48
//             },
//             "time": "2023-02-18T17:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.23,
//                 "noaa": 0.85,
//                 "sg": 1.23
//             },
//             "wavePeriod": {
//                 "meteo": 5.99,
//                 "noaa": 6.28,
//                 "sg": 5.99
//             },
//             "windDirection": {
//                 "noaa": 254.66,
//                 "sg": 254.66
//             },
//             "windSpeed": {
//                 "noaa": 6.01,
//                 "sg": 6.01
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.68,
//                 "sg": 8.68
//             },
//             "swellHeight": {
//                 "meteo": 1.27,
//                 "noaa": 0.13,
//                 "sg": 1.27
//             },
//             "swellPeriod": {
//                 "meteo": 7.2,
//                 "noaa": 2.74,
//                 "sg": 7.2
//             },
//             "time": "2023-02-18T18:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.27,
//                 "noaa": 0.88,
//                 "sg": 1.27
//             },
//             "wavePeriod": {
//                 "meteo": 6.38,
//                 "noaa": 6.54,
//                 "sg": 6.38
//             },
//             "windDirection": {
//                 "noaa": 263.69,
//                 "sg": 263.69
//             },
//             "windSpeed": {
//                 "noaa": 7.07,
//                 "sg": 7.07
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.59,
//                 "sg": 8.59
//             },
//             "swellHeight": {
//                 "meteo": 1.28,
//                 "noaa": 0.35,
//                 "sg": 1.28
//             },
//             "swellPeriod": {
//                 "meteo": 7.26,
//                 "noaa": 4.07,
//                 "sg": 7.26
//             },
//             "time": "2023-02-18T19:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.28,
//                 "noaa": 0.88,
//                 "sg": 1.28
//             },
//             "wavePeriod": {
//                 "meteo": 6.55,
//                 "noaa": 6.61,
//                 "sg": 6.55
//             },
//             "windDirection": {
//                 "noaa": 265.69,
//                 "sg": 265.69
//             },
//             "windSpeed": {
//                 "noaa": 7.09,
//                 "sg": 7.09
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.49,
//                 "sg": 8.49
//             },
//             "swellHeight": {
//                 "meteo": 1.29,
//                 "noaa": 0.58,
//                 "sg": 1.29
//             },
//             "swellPeriod": {
//                 "meteo": 7.33,
//                 "noaa": 5.41,
//                 "sg": 7.33
//             },
//             "time": "2023-02-18T20:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.3,
//                 "noaa": 0.87,
//                 "sg": 1.3
//             },
//             "wavePeriod": {
//                 "meteo": 6.71,
//                 "noaa": 6.67,
//                 "sg": 6.71
//             },
//             "windDirection": {
//                 "noaa": 267.68,
//                 "sg": 267.68
//             },
//             "windSpeed": {
//                 "noaa": 7.11,
//                 "sg": 7.11
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.4,
//                 "sg": 8.4
//             },
//             "swellHeight": {
//                 "meteo": 1.3,
//                 "noaa": 0.8,
//                 "sg": 1.3
//             },
//             "swellPeriod": {
//                 "meteo": 7.39,
//                 "noaa": 6.74,
//                 "sg": 7.39
//             },
//             "time": "2023-02-18T21:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.31,
//                 "noaa": 0.87,
//                 "sg": 1.31
//             },
//             "wavePeriod": {
//                 "meteo": 6.88,
//                 "noaa": 6.74,
//                 "sg": 6.88
//             },
//             "windDirection": {
//                 "noaa": 269.68,
//                 "sg": 269.68
//             },
//             "windSpeed": {
//                 "noaa": 7.13,
//                 "sg": 7.13
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.95,
//                 "sg": 7.95
//             },
//             "swellHeight": {
//                 "meteo": 1.28,
//                 "noaa": 0.55,
//                 "sg": 1.28
//             },
//             "swellPeriod": {
//                 "meteo": 7.3,
//                 "noaa": 5.65,
//                 "sg": 7.3
//             },
//             "time": "2023-02-18T22:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.33,
//                 "noaa": 0.89,
//                 "sg": 1.33
//             },
//             "wavePeriod": {
//                 "meteo": 6.77,
//                 "noaa": 6.66,
//                 "sg": 6.77
//             },
//             "windDirection": {
//                 "noaa": 276.26,
//                 "sg": 276.26
//             },
//             "windSpeed": {
//                 "noaa": 6.38,
//                 "sg": 6.38
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.5,
//                 "sg": 7.5
//             },
//             "swellHeight": {
//                 "meteo": 1.27,
//                 "noaa": 0.31,
//                 "sg": 1.27
//             },
//             "swellPeriod": {
//                 "meteo": 7.2,
//                 "noaa": 4.57,
//                 "sg": 7.2
//             },
//             "time": "2023-02-18T23:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.35,
//                 "noaa": 0.9,
//                 "sg": 1.35
//             },
//             "wavePeriod": {
//                 "meteo": 6.65,
//                 "noaa": 6.59,
//                 "sg": 6.65
//             },
//             "windDirection": {
//                 "noaa": 282.84,
//                 "sg": 282.84
//             },
//             "windSpeed": {
//                 "noaa": 5.64,
//                 "sg": 5.64
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.05,
//                 "sg": 7.05
//             },
//             "swellHeight": {
//                 "meteo": 1.25,
//                 "noaa": 0.06,
//                 "sg": 1.25
//             },
//             "swellPeriod": {
//                 "meteo": 7.11,
//                 "noaa": 3.48,
//                 "sg": 7.11
//             },
//             "time": "2023-02-19T00:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.37,
//                 "noaa": 0.92,
//                 "sg": 1.37
//             },
//             "wavePeriod": {
//                 "meteo": 6.54,
//                 "noaa": 6.51,
//                 "sg": 6.54
//             },
//             "windDirection": {
//                 "noaa": 289.42,
//                 "sg": 289.42
//             },
//             "windSpeed": {
//                 "noaa": 4.89,
//                 "sg": 4.89
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.38,
//                 "sg": 6.38
//             },
//             "swellHeight": {
//                 "meteo": 1.23,
//                 "noaa": 0.26,
//                 "sg": 1.23
//             },
//             "swellPeriod": {
//                 "meteo": 7.02,
//                 "noaa": 4.64,
//                 "sg": 7.02
//             },
//             "time": "2023-02-19T01:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.38,
//                 "noaa": 0.93,
//                 "sg": 1.38
//             },
//             "wavePeriod": {
//                 "meteo": 6.57,
//                 "noaa": 6.33,
//                 "sg": 6.57
//             },
//             "windDirection": {
//                 "noaa": 288.66,
//                 "sg": 288.66
//             },
//             "windSpeed": {
//                 "noaa": 4.57,
//                 "sg": 4.57
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.71,
//                 "sg": 5.71
//             },
//             "swellHeight": {
//                 "meteo": 1.2,
//                 "noaa": 0.47,
//                 "sg": 1.2
//             },
//             "swellPeriod": {
//                 "meteo": 6.92,
//                 "noaa": 5.81,
//                 "sg": 6.92
//             },
//             "time": "2023-02-19T02:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.38,
//                 "noaa": 0.94,
//                 "sg": 1.38
//             },
//             "wavePeriod": {
//                 "meteo": 6.61,
//                 "noaa": 6.15,
//                 "sg": 6.61
//             },
//             "windDirection": {
//                 "noaa": 287.89,
//                 "sg": 287.89
//             },
//             "windSpeed": {
//                 "noaa": 4.26,
//                 "sg": 4.26
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.04,
//                 "sg": 5.04
//             },
//             "swellHeight": {
//                 "meteo": 1.18,
//                 "noaa": 0.67,
//                 "sg": 1.18
//             },
//             "swellPeriod": {
//                 "meteo": 6.83,
//                 "noaa": 6.97,
//                 "sg": 6.83
//             },
//             "time": "2023-02-19T03:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.39,
//                 "noaa": 0.95,
//                 "sg": 1.39
//             },
//             "wavePeriod": {
//                 "meteo": 6.64,
//                 "noaa": 5.97,
//                 "sg": 6.64
//             },
//             "windDirection": {
//                 "noaa": 287.13,
//                 "sg": 287.13
//             },
//             "windSpeed": {
//                 "noaa": 3.94,
//                 "sg": 3.94
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 4.75,
//                 "sg": 4.75
//             },
//             "swellHeight": {
//                 "meteo": 1.18,
//                 "noaa": 0.48,
//                 "sg": 1.18
//             },
//             "swellPeriod": {
//                 "meteo": 6.81,
//                 "noaa": 8.9,
//                 "sg": 6.81
//             },
//             "time": "2023-02-19T04:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.38,
//                 "noaa": 0.93,
//                 "sg": 1.38
//             },
//             "wavePeriod": {
//                 "meteo": 6.72,
//                 "noaa": 5.94,
//                 "sg": 6.72
//             },
//             "windDirection": {
//                 "noaa": 283.91,
//                 "sg": 283.91
//             },
//             "windSpeed": {
//                 "noaa": 3.71,
//                 "sg": 3.71
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 4.46,
//                 "sg": 4.46
//             },
//             "swellHeight": {
//                 "meteo": 1.17,
//                 "noaa": 0.28,
//                 "sg": 1.17
//             },
//             "swellPeriod": {
//                 "meteo": 6.78,
//                 "noaa": 10.84,
//                 "sg": 6.78
//             },
//             "time": "2023-02-19T05:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.37,
//                 "noaa": 0.91,
//                 "sg": 1.37
//             },
//             "wavePeriod": {
//                 "meteo": 6.79,
//                 "noaa": 5.91,
//                 "sg": 6.79
//             },
//             "windDirection": {
//                 "noaa": 280.69,
//                 "sg": 280.69
//             },
//             "windSpeed": {
//                 "noaa": 3.47,
//                 "sg": 3.47
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 4.18,
//                 "sg": 4.18
//             },
//             "swellHeight": {
//                 "meteo": 1.17,
//                 "noaa": 0.09,
//                 "sg": 1.17
//             },
//             "swellPeriod": {
//                 "meteo": 6.76,
//                 "noaa": 12.77,
//                 "sg": 6.76
//             },
//             "time": "2023-02-19T06:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.36,
//                 "noaa": 0.89,
//                 "sg": 1.36
//             },
//             "wavePeriod": {
//                 "meteo": 6.87,
//                 "noaa": 5.88,
//                 "sg": 6.87
//             },
//             "windDirection": {
//                 "noaa": 277.47,
//                 "sg": 277.47
//             },
//             "windSpeed": {
//                 "noaa": 3.24,
//                 "sg": 3.24
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 4.88,
//                 "sg": 4.88
//             },
//             "swellHeight": {
//                 "meteo": 1.12,
//                 "noaa": 0.09,
//                 "sg": 1.12
//             },
//             "swellPeriod": {
//                 "meteo": 6.6,
//                 "noaa": 11.71,
//                 "sg": 6.6
//             },
//             "time": "2023-02-19T07:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.34,
//                 "noaa": 1.01,
//                 "sg": 1.34
//             },
//             "wavePeriod": {
//                 "meteo": 6.86,
//                 "noaa": 5.3,
//                 "sg": 6.86
//             },
//             "windDirection": {
//                 "noaa": 278.44,
//                 "sg": 278.44
//             },
//             "windSpeed": {
//                 "noaa": 3.01,
//                 "sg": 3.01
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.58,
//                 "sg": 5.58
//             },
//             "swellHeight": {
//                 "meteo": 1.08,
//                 "noaa": 0.08,
//                 "sg": 1.08
//             },
//             "swellPeriod": {
//                 "meteo": 6.45,
//                 "noaa": 10.64,
//                 "sg": 6.45
//             },
//             "time": "2023-02-19T08:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.32,
//                 "noaa": 1.12,
//                 "sg": 1.32
//             },
//             "wavePeriod": {
//                 "meteo": 6.85,
//                 "noaa": 4.72,
//                 "sg": 6.85
//             },
//             "windDirection": {
//                 "noaa": 279.42,
//                 "sg": 279.42
//             },
//             "windSpeed": {
//                 "noaa": 2.78,
//                 "sg": 2.78
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.28,
//                 "sg": 6.28
//             },
//             "swellHeight": {
//                 "meteo": 1.03,
//                 "noaa": 0.08,
//                 "sg": 1.03
//             },
//             "swellPeriod": {
//                 "meteo": 6.29,
//                 "noaa": 9.58,
//                 "sg": 6.29
//             },
//             "time": "2023-02-19T09:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.3,
//                 "noaa": 1.24,
//                 "sg": 1.3
//             },
//             "wavePeriod": {
//                 "meteo": 6.84,
//                 "noaa": 4.14,
//                 "sg": 6.84
//             },
//             "windDirection": {
//                 "noaa": 280.39,
//                 "sg": 280.39
//             },
//             "windSpeed": {
//                 "noaa": 2.55,
//                 "sg": 2.55
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.57,
//                 "sg": 7.57
//             },
//             "swellHeight": {
//                 "meteo": 1.03,
//                 "noaa": 0.12,
//                 "sg": 1.03
//             },
//             "swellPeriod": {
//                 "meteo": 6.85,
//                 "noaa": 9.07,
//                 "sg": 6.85
//             },
//             "time": "2023-02-19T10:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.27,
//                 "noaa": 1.06,
//                 "sg": 1.27
//             },
//             "wavePeriod": {
//                 "meteo": 6.69,
//                 "noaa": 4.65,
//                 "sg": 6.69
//             },
//             "windDirection": {
//                 "noaa": 281.74,
//                 "sg": 281.74
//             },
//             "windSpeed": {
//                 "noaa": 2.95,
//                 "sg": 2.95
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.85,
//                 "sg": 8.85
//             },
//             "swellHeight": {
//                 "meteo": 1.02,
//                 "noaa": 0.16,
//                 "sg": 1.02
//             },
//             "swellPeriod": {
//                 "meteo": 7.41,
//                 "noaa": 8.56,
//                 "sg": 7.41
//             },
//             "time": "2023-02-19T11:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.25,
//                 "noaa": 0.89,
//                 "sg": 1.25
//             },
//             "wavePeriod": {
//                 "meteo": 6.53,
//                 "noaa": 5.15,
//                 "sg": 6.53
//             },
//             "windDirection": {
//                 "noaa": 283.08,
//                 "sg": 283.08
//             },
//             "windSpeed": {
//                 "noaa": 3.34,
//                 "sg": 3.34
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.14,
//                 "sg": 10.14
//             },
//             "swellHeight": {
//                 "meteo": 1.02,
//                 "noaa": 0.2,
//                 "sg": 1.02
//             },
//             "swellPeriod": {
//                 "meteo": 7.97,
//                 "noaa": 8.05,
//                 "sg": 7.97
//             },
//             "time": "2023-02-19T12:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.22,
//                 "noaa": 0.71,
//                 "sg": 1.22
//             },
//             "wavePeriod": {
//                 "meteo": 6.38,
//                 "noaa": 5.66,
//                 "sg": 6.38
//             },
//             "windDirection": {
//                 "noaa": 284.43,
//                 "sg": 284.43
//             },
//             "windSpeed": {
//                 "noaa": 3.74,
//                 "sg": 3.74
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.49,
//                 "sg": 10.49
//             },
//             "swellHeight": {
//                 "meteo": 1.06,
//                 "noaa": 0.23,
//                 "sg": 1.06
//             },
//             "swellPeriod": {
//                 "meteo": 7.79,
//                 "noaa": 8.84,
//                 "sg": 7.79
//             },
//             "time": "2023-02-19T13:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.2,
//                 "noaa": 0.7,
//                 "sg": 1.2
//             },
//             "wavePeriod": {
//                 "meteo": 6.14,
//                 "noaa": 7.22,
//                 "sg": 6.14
//             },
//             "windDirection": {
//                 "noaa": 276.69,
//                 "sg": 276.69
//             },
//             "windSpeed": {
//                 "noaa": 3.89,
//                 "sg": 3.89
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.83,
//                 "sg": 10.83
//             },
//             "swellHeight": {
//                 "meteo": 1.1,
//                 "noaa": 0.25,
//                 "sg": 1.1
//             },
//             "swellPeriod": {
//                 "meteo": 7.62,
//                 "noaa": 9.62,
//                 "sg": 7.62
//             },
//             "time": "2023-02-19T14:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.19,
//                 "noaa": 0.69,
//                 "sg": 1.19
//             },
//             "wavePeriod": {
//                 "meteo": 5.9,
//                 "noaa": 8.79,
//                 "sg": 5.9
//             },
//             "windDirection": {
//                 "noaa": 268.94,
//                 "sg": 268.94
//             },
//             "windSpeed": {
//                 "noaa": 4.05,
//                 "sg": 4.05
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 11.18,
//                 "sg": 11.18
//             },
//             "swellHeight": {
//                 "meteo": 1.14,
//                 "noaa": 0.28,
//                 "sg": 1.14
//             },
//             "swellPeriod": {
//                 "meteo": 7.44,
//                 "noaa": 10.41,
//                 "sg": 7.44
//             },
//             "time": "2023-02-19T15:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.17,
//                 "noaa": 0.68,
//                 "sg": 1.17
//             },
//             "wavePeriod": {
//                 "meteo": 5.66,
//                 "noaa": 10.35,
//                 "sg": 5.66
//             },
//             "windDirection": {
//                 "noaa": 261.2,
//                 "sg": 261.2
//             },
//             "windSpeed": {
//                 "noaa": 4.2,
//                 "sg": 4.2
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.79,
//                 "sg": 9.79
//             },
//             "swellHeight": {
//                 "meteo": 1.12,
//                 "noaa": 0.22,
//                 "sg": 1.12
//             },
//             "swellPeriod": {
//                 "meteo": 7.45,
//                 "noaa": 9.92,
//                 "sg": 7.45
//             },
//             "time": "2023-02-19T16:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.15,
//                 "noaa": 0.91,
//                 "sg": 1.15
//             },
//             "wavePeriod": {
//                 "meteo": 5.69,
//                 "noaa": 8.36,
//                 "sg": 5.69
//             },
//             "windDirection": {
//                 "noaa": 258.28,
//                 "sg": 258.28
//             },
//             "windSpeed": {
//                 "noaa": 3.95,
//                 "sg": 3.95
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.41,
//                 "sg": 8.41
//             },
//             "swellHeight": {
//                 "meteo": 1.11,
//                 "noaa": 0.15,
//                 "sg": 1.11
//             },
//             "swellPeriod": {
//                 "meteo": 7.46,
//                 "noaa": 9.44,
//                 "sg": 7.46
//             },
//             "time": "2023-02-19T17:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.13,
//                 "noaa": 1.15,
//                 "sg": 1.13
//             },
//             "wavePeriod": {
//                 "meteo": 5.71,
//                 "noaa": 6.36,
//                 "sg": 5.71
//             },
//             "windDirection": {
//                 "noaa": 255.37,
//                 "sg": 255.37
//             },
//             "windSpeed": {
//                 "noaa": 3.7,
//                 "sg": 3.7
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.02,
//                 "sg": 7.02
//             },
//             "swellHeight": {
//                 "meteo": 1.09,
//                 "noaa": 0.09,
//                 "sg": 1.09
//             },
//             "swellPeriod": {
//                 "meteo": 7.47,
//                 "noaa": 8.95,
//                 "sg": 7.47
//             },
//             "time": "2023-02-19T18:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.11,
//                 "noaa": 1.38,
//                 "sg": 1.11
//             },
//             "wavePeriod": {
//                 "meteo": 5.74,
//                 "noaa": 4.37,
//                 "sg": 5.74
//             },
//             "windDirection": {
//                 "noaa": 252.45,
//                 "sg": 252.45
//             },
//             "windSpeed": {
//                 "noaa": 3.45,
//                 "sg": 3.45
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.44,
//                 "sg": 6.44
//             },
//             "swellHeight": {
//                 "meteo": 1.07,
//                 "noaa": 0.08,
//                 "sg": 1.07
//             },
//             "swellPeriod": {
//                 "meteo": 7.47,
//                 "noaa": 10.5,
//                 "sg": 7.47
//             },
//             "time": "2023-02-19T19:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.1,
//                 "noaa": 1.18,
//                 "sg": 1.1
//             },
//             "wavePeriod": {
//                 "meteo": 5.69,
//                 "noaa": 5.44,
//                 "sg": 5.69
//             },
//             "windDirection": {
//                 "noaa": 254.13,
//                 "sg": 254.13
//             },
//             "windSpeed": {
//                 "noaa": 3.46,
//                 "sg": 3.46
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.85,
//                 "sg": 5.85
//             },
//             "swellHeight": {
//                 "meteo": 1.05,
//                 "noaa": 0.07,
//                 "sg": 1.05
//             },
//             "swellPeriod": {
//                 "meteo": 7.47,
//                 "noaa": 12.06,
//                 "sg": 7.47
//             },
//             "time": "2023-02-19T20:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.08,
//                 "noaa": 0.98,
//                 "sg": 1.08
//             },
//             "wavePeriod": {
//                 "meteo": 5.64,
//                 "noaa": 6.5,
//                 "sg": 5.64
//             },
//             "windDirection": {
//                 "noaa": 255.81,
//                 "sg": 255.81
//             },
//             "windSpeed": {
//                 "noaa": 3.48,
//                 "sg": 3.48
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.27,
//                 "sg": 5.27
//             },
//             "swellHeight": {
//                 "meteo": 1.03,
//                 "noaa": 0.06,
//                 "sg": 1.03
//             },
//             "swellPeriod": {
//                 "meteo": 7.47,
//                 "noaa": 13.61,
//                 "sg": 7.47
//             },
//             "time": "2023-02-19T21:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.07,
//                 "noaa": 0.78,
//                 "sg": 1.07
//             },
//             "wavePeriod": {
//                 "meteo": 5.59,
//                 "noaa": 7.57,
//                 "sg": 5.59
//             },
//             "windDirection": {
//                 "noaa": 257.49,
//                 "sg": 257.49
//             },
//             "windSpeed": {
//                 "noaa": 3.49,
//                 "sg": 3.49
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.18,
//                 "sg": 5.18
//             },
//             "swellHeight": {
//                 "meteo": 1.01,
//                 "noaa": 0.07,
//                 "sg": 1.01
//             },
//             "swellPeriod": {
//                 "meteo": 7.46,
//                 "noaa": 11.09,
//                 "sg": 7.46
//             },
//             "time": "2023-02-19T22:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.05,
//                 "noaa": 0.98,
//                 "sg": 1.05
//             },
//             "wavePeriod": {
//                 "meteo": 5.5,
//                 "noaa": 7.33,
//                 "sg": 5.5
//             },
//             "windDirection": {
//                 "noaa": 260.49,
//                 "sg": 260.49
//             },
//             "windSpeed": {
//                 "noaa": 3.53,
//                 "sg": 3.53
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.09,
//                 "sg": 5.09
//             },
//             "swellHeight": {
//                 "meteo": 0.98,
//                 "noaa": 0.08,
//                 "sg": 0.98
//             },
//             "swellPeriod": {
//                 "meteo": 7.44,
//                 "noaa": 8.58,
//                 "sg": 7.44
//             },
//             "time": "2023-02-19T23:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.03,
//                 "noaa": 1.17,
//                 "sg": 1.03
//             },
//             "wavePeriod": {
//                 "meteo": 5.41,
//                 "noaa": 7.1,
//                 "sg": 5.41
//             },
//             "windDirection": {
//                 "noaa": 263.48,
//                 "sg": 263.48
//             },
//             "windSpeed": {
//                 "noaa": 3.56,
//                 "sg": 3.56
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.01,
//                 "sg": 5.01
//             },
//             "swellHeight": {
//                 "meteo": 0.96,
//                 "noaa": 0.09,
//                 "sg": 0.96
//             },
//             "swellPeriod": {
//                 "meteo": 7.43,
//                 "noaa": 6.06,
//                 "sg": 7.43
//             },
//             "time": "2023-02-20T00:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 1.01,
//                 "noaa": 1.37,
//                 "sg": 1.01
//             },
//             "wavePeriod": {
//                 "meteo": 5.32,
//                 "noaa": 6.86,
//                 "sg": 5.32
//             },
//             "windDirection": {
//                 "noaa": 266.48,
//                 "sg": 266.48
//             },
//             "windSpeed": {
//                 "noaa": 3.6,
//                 "sg": 3.6
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.05,
//                 "sg": 5.05
//             },
//             "swellHeight": {
//                 "meteo": 0.93,
//                 "noaa": 0.13,
//                 "sg": 0.93
//             },
//             "swellPeriod": {
//                 "meteo": 7.41,
//                 "noaa": 7.98,
//                 "sg": 7.41
//             },
//             "time": "2023-02-20T01:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.99,
//                 "noaa": 1.16,
//                 "sg": 0.99
//             },
//             "wavePeriod": {
//                 "meteo": 5.2,
//                 "noaa": 7.93,
//                 "sg": 5.2
//             },
//             "windDirection": {
//                 "noaa": 265.26,
//                 "sg": 265.26
//             },
//             "windSpeed": {
//                 "noaa": 3.47,
//                 "sg": 3.47
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.09,
//                 "sg": 5.09
//             },
//             "swellHeight": {
//                 "meteo": 0.91,
//                 "noaa": 0.18,
//                 "sg": 0.91
//             },
//             "swellPeriod": {
//                 "meteo": 7.39,
//                 "noaa": 9.91,
//                 "sg": 7.39
//             },
//             "time": "2023-02-20T02:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.96,
//                 "noaa": 0.94,
//                 "sg": 0.96
//             },
//             "wavePeriod": {
//                 "meteo": 5.09,
//                 "noaa": 8.99,
//                 "sg": 5.09
//             },
//             "windDirection": {
//                 "noaa": 264.05,
//                 "sg": 264.05
//             },
//             "windSpeed": {
//                 "noaa": 3.34,
//                 "sg": 3.34
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.13,
//                 "sg": 5.13
//             },
//             "swellHeight": {
//                 "meteo": 0.88,
//                 "noaa": 0.22,
//                 "sg": 0.88
//             },
//             "swellPeriod": {
//                 "meteo": 7.37,
//                 "noaa": 11.83,
//                 "sg": 7.37
//             },
//             "time": "2023-02-20T03:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.94,
//                 "noaa": 0.73,
//                 "sg": 0.94
//             },
//             "wavePeriod": {
//                 "meteo": 4.97,
//                 "noaa": 10.06,
//                 "sg": 4.97
//             },
//             "windDirection": {
//                 "noaa": 262.83,
//                 "sg": 262.83
//             },
//             "windSpeed": {
//                 "noaa": 3.21,
//                 "sg": 3.21
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.2,
//                 "sg": 5.2
//             },
//             "swellHeight": {
//                 "meteo": 0.85,
//                 "noaa": 0.22,
//                 "sg": 0.85
//             },
//             "swellPeriod": {
//                 "meteo": 7.34,
//                 "noaa": 11.68,
//                 "sg": 7.34
//             },
//             "time": "2023-02-20T04:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.91,
//                 "noaa": 0.72,
//                 "sg": 0.91
//             },
//             "wavePeriod": {
//                 "meteo": 4.86,
//                 "noaa": 10.16,
//                 "sg": 4.86
//             },
//             "windDirection": {
//                 "noaa": 263.32,
//                 "sg": 263.32
//             },
//             "windSpeed": {
//                 "noaa": 3.24,
//                 "sg": 3.24
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.28,
//                 "sg": 5.28
//             },
//             "swellHeight": {
//                 "meteo": 0.83,
//                 "noaa": 0.22,
//                 "sg": 0.83
//             },
//             "swellPeriod": {
//                 "meteo": 7.32,
//                 "noaa": 11.53,
//                 "sg": 7.32
//             },
//             "time": "2023-02-20T05:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.89,
//                 "noaa": 0.7,
//                 "sg": 0.89
//             },
//             "wavePeriod": {
//                 "meteo": 4.75,
//                 "noaa": 10.27,
//                 "sg": 4.75
//             },
//             "windDirection": {
//                 "noaa": 263.82,
//                 "sg": 263.82
//             },
//             "windSpeed": {
//                 "noaa": 3.28,
//                 "sg": 3.28
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.35,
//                 "sg": 5.35
//             },
//             "swellHeight": {
//                 "meteo": 0.8,
//                 "noaa": 0.22,
//                 "sg": 0.8
//             },
//             "swellPeriod": {
//                 "meteo": 7.29,
//                 "noaa": 11.38,
//                 "sg": 7.29
//             },
//             "time": "2023-02-20T06:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.86,
//                 "noaa": 0.69,
//                 "sg": 0.86
//             },
//             "wavePeriod": {
//                 "meteo": 4.64,
//                 "noaa": 10.37,
//                 "sg": 4.64
//             },
//             "windDirection": {
//                 "noaa": 264.31,
//                 "sg": 264.31
//             },
//             "windSpeed": {
//                 "noaa": 3.31,
//                 "sg": 3.31
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.04,
//                 "sg": 6.04
//             },
//             "swellHeight": {
//                 "meteo": 0.77,
//                 "noaa": 0.25,
//                 "sg": 0.77
//             },
//             "swellPeriod": {
//                 "meteo": 7.3,
//                 "noaa": 11.22,
//                 "sg": 7.3
//             },
//             "time": "2023-02-20T07:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.84,
//                 "noaa": 0.71,
//                 "sg": 0.84
//             },
//             "wavePeriod": {
//                 "meteo": 4.5,
//                 "noaa": 10.54,
//                 "sg": 4.5
//             },
//             "windDirection": {
//                 "noaa": 266.7,
//                 "sg": 266.7
//             },
//             "windSpeed": {
//                 "noaa": 3.37,
//                 "sg": 3.37
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.73,
//                 "sg": 6.73
//             },
//             "swellHeight": {
//                 "meteo": 0.74,
//                 "noaa": 0.27,
//                 "sg": 0.74
//             },
//             "swellPeriod": {
//                 "meteo": 7.32,
//                 "noaa": 11.06,
//                 "sg": 7.32
//             },
//             "time": "2023-02-20T08:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.81,
//                 "noaa": 0.72,
//                 "sg": 0.81
//             },
//             "wavePeriod": {
//                 "meteo": 4.37,
//                 "noaa": 10.7,
//                 "sg": 4.37
//             },
//             "windDirection": {
//                 "noaa": 269.09,
//                 "sg": 269.09
//             },
//             "windSpeed": {
//                 "noaa": 3.44,
//                 "sg": 3.44
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.41,
//                 "sg": 7.41
//             },
//             "swellHeight": {
//                 "meteo": 0.71,
//                 "noaa": 0.3,
//                 "sg": 0.71
//             },
//             "swellPeriod": {
//                 "meteo": 7.33,
//                 "noaa": 10.9,
//                 "sg": 7.33
//             },
//             "time": "2023-02-20T09:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.79,
//                 "noaa": 0.74,
//                 "sg": 0.79
//             },
//             "wavePeriod": {
//                 "meteo": 4.23,
//                 "noaa": 10.87,
//                 "sg": 4.23
//             },
//             "windDirection": {
//                 "noaa": 271.48,
//                 "sg": 271.48
//             },
//             "windSpeed": {
//                 "noaa": 3.5,
//                 "sg": 3.5
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.09,
//                 "sg": 9.09
//             },
//             "swellHeight": {
//                 "meteo": 0.68,
//                 "noaa": 0.67,
//                 "sg": 0.68
//             },
//             "swellPeriod": {
//                 "meteo": 7.36,
//                 "noaa": 9.75,
//                 "sg": 7.36
//             },
//             "time": "2023-02-20T10:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.77,
//                 "noaa": 0.98,
//                 "sg": 0.77
//             },
//             "wavePeriod": {
//                 "meteo": 4.1,
//                 "noaa": 9.73,
//                 "sg": 4.1
//             },
//             "windDirection": {
//                 "noaa": 269.94,
//                 "sg": 269.94
//             },
//             "windSpeed": {
//                 "noaa": 4,
//                 "sg": 4
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 10.76,
//                 "sg": 10.76
//             },
//             "swellHeight": {
//                 "meteo": 0.66,
//                 "noaa": 1.05,
//                 "sg": 0.66
//             },
//             "swellPeriod": {
//                 "meteo": 7.4,
//                 "noaa": 8.61,
//                 "sg": 7.4
//             },
//             "time": "2023-02-20T11:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.76,
//                 "noaa": 1.21,
//                 "sg": 0.76
//             },
//             "wavePeriod": {
//                 "meteo": 3.98,
//                 "noaa": 8.6,
//                 "sg": 3.98
//             },
//             "windDirection": {
//                 "noaa": 268.39,
//                 "sg": 268.39
//             },
//             "windSpeed": {
//                 "noaa": 4.49,
//                 "sg": 4.49
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 12.43,
//                 "sg": 12.43
//             },
//             "swellHeight": {
//                 "meteo": 0.63,
//                 "noaa": 1.42,
//                 "sg": 0.63
//             },
//             "swellPeriod": {
//                 "meteo": 7.43,
//                 "noaa": 7.46,
//                 "sg": 7.43
//             },
//             "time": "2023-02-20T12:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.74,
//                 "noaa": 1.45,
//                 "sg": 0.74
//             },
//             "wavePeriod": {
//                 "meteo": 3.85,
//                 "noaa": 7.46,
//                 "sg": 3.85
//             },
//             "windDirection": {
//                 "noaa": 266.85,
//                 "sg": 266.85
//             },
//             "windSpeed": {
//                 "noaa": 4.99,
//                 "sg": 4.99
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 12.59,
//                 "sg": 12.59
//             },
//             "swellHeight": {
//                 "meteo": 0.6,
//                 "noaa": 1.36,
//                 "sg": 0.6
//             },
//             "swellPeriod": {
//                 "meteo": 7.47,
//                 "noaa": 7.48,
//                 "sg": 7.47
//             },
//             "time": "2023-02-20T13:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.72,
//                 "noaa": 1.4,
//                 "sg": 0.72
//             },
//             "wavePeriod": {
//                 "meteo": 3.79,
//                 "noaa": 7.48,
//                 "sg": 3.79
//             },
//             "windDirection": {
//                 "noaa": 266.29,
//                 "sg": 266.29
//             },
//             "windSpeed": {
//                 "noaa": 5,
//                 "sg": 5
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 12.74,
//                 "sg": 12.74
//             },
//             "swellHeight": {
//                 "meteo": 0.58,
//                 "noaa": 1.29,
//                 "sg": 0.58
//             },
//             "swellPeriod": {
//                 "meteo": 7.52,
//                 "noaa": 7.5,
//                 "sg": 7.52
//             },
//             "time": "2023-02-20T14:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.7,
//                 "noaa": 1.35,
//                 "sg": 0.7
//             },
//             "wavePeriod": {
//                 "meteo": 3.72,
//                 "noaa": 7.5,
//                 "sg": 3.72
//             },
//             "windDirection": {
//                 "noaa": 265.73,
//                 "sg": 265.73
//             },
//             "windSpeed": {
//                 "noaa": 5.01,
//                 "sg": 5.01
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 12.89,
//                 "sg": 12.89
//             },
//             "swellHeight": {
//                 "meteo": 0.55,
//                 "noaa": 1.23,
//                 "sg": 0.55
//             },
//             "swellPeriod": {
//                 "meteo": 7.56,
//                 "noaa": 7.52,
//                 "sg": 7.56
//             },
//             "time": "2023-02-20T15:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.68,
//                 "noaa": 1.3,
//                 "sg": 0.68
//             },
//             "wavePeriod": {
//                 "meteo": 3.66,
//                 "noaa": 7.52,
//                 "sg": 3.66
//             },
//             "windDirection": {
//                 "noaa": 265.17,
//                 "sg": 265.17
//             },
//             "windSpeed": {
//                 "noaa": 5.02,
//                 "sg": 5.02
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 11.36,
//                 "sg": 11.36
//             },
//             "swellHeight": {
//                 "meteo": 0.53,
//                 "noaa": 1,
//                 "sg": 0.53
//             },
//             "swellPeriod": {
//                 "meteo": 7.59,
//                 "noaa": 8.24,
//                 "sg": 7.59
//             },
//             "time": "2023-02-20T16:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.66,
//                 "noaa": 1.05,
//                 "sg": 0.66
//             },
//             "wavePeriod": {
//                 "meteo": 3.63,
//                 "noaa": 8.24,
//                 "sg": 3.63
//             },
//             "windDirection": {
//                 "noaa": 262.7,
//                 "sg": 262.7
//             },
//             "windSpeed": {
//                 "noaa": 4.57,
//                 "sg": 4.57
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 9.82,
//                 "sg": 9.82
//             },
//             "swellHeight": {
//                 "meteo": 0.51,
//                 "noaa": 0.78,
//                 "sg": 0.51
//             },
//             "swellPeriod": {
//                 "meteo": 7.63,
//                 "noaa": 8.97,
//                 "sg": 7.63
//             },
//             "time": "2023-02-20T17:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.63,
//                 "noaa": 0.81,
//                 "sg": 0.63
//             },
//             "wavePeriod": {
//                 "meteo": 3.6,
//                 "noaa": 8.97,
//                 "sg": 3.6
//             },
//             "windDirection": {
//                 "noaa": 260.23,
//                 "sg": 260.23
//             },
//             "windSpeed": {
//                 "noaa": 4.12,
//                 "sg": 4.12
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.29,
//                 "sg": 8.29
//             },
//             "swellHeight": {
//                 "meteo": 0.49,
//                 "noaa": 0.55,
//                 "sg": 0.49
//             },
//             "swellPeriod": {
//                 "meteo": 7.66,
//                 "noaa": 9.69,
//                 "sg": 7.66
//             },
//             "time": "2023-02-20T18:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.61,
//                 "noaa": 0.56,
//                 "sg": 0.61
//             },
//             "wavePeriod": {
//                 "meteo": 3.57,
//                 "noaa": 9.69,
//                 "sg": 3.57
//             },
//             "windDirection": {
//                 "noaa": 257.76,
//                 "sg": 257.76
//             },
//             "windSpeed": {
//                 "noaa": 3.67,
//                 "sg": 3.67
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.88,
//                 "sg": 7.88
//             },
//             "swellHeight": {
//                 "meteo": 0.47,
//                 "noaa": 0.53,
//                 "sg": 0.47
//             },
//             "swellPeriod": {
//                 "meteo": 7.67,
//                 "noaa": 9.66,
//                 "sg": 7.67
//             },
//             "time": "2023-02-20T19:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.59,
//                 "noaa": 0.53,
//                 "sg": 0.59
//             },
//             "wavePeriod": {
//                 "meteo": 3.53,
//                 "noaa": 9.66,
//                 "sg": 3.53
//             },
//             "windDirection": {
//                 "noaa": 265.54,
//                 "sg": 265.54
//             },
//             "windSpeed": {
//                 "noaa": 3.5,
//                 "sg": 3.5
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.46,
//                 "sg": 7.46
//             },
//             "swellHeight": {
//                 "meteo": 0.46,
//                 "noaa": 0.5,
//                 "sg": 0.46
//             },
//             "swellPeriod": {
//                 "meteo": 7.68,
//                 "noaa": 9.62,
//                 "sg": 7.68
//             },
//             "time": "2023-02-20T20:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.56,
//                 "noaa": 0.51,
//                 "sg": 0.56
//             },
//             "wavePeriod": {
//                 "meteo": 3.5,
//                 "noaa": 9.62,
//                 "sg": 3.5
//             },
//             "windDirection": {
//                 "noaa": 273.32,
//                 "sg": 273.32
//             },
//             "windSpeed": {
//                 "noaa": 3.33,
//                 "sg": 3.33
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.05,
//                 "sg": 7.05
//             },
//             "swellHeight": {
//                 "meteo": 0.44,
//                 "noaa": 0.48,
//                 "sg": 0.44
//             },
//             "swellPeriod": {
//                 "meteo": 7.69,
//                 "noaa": 9.59,
//                 "sg": 7.69
//             },
//             "time": "2023-02-20T21:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.54,
//                 "noaa": 0.48,
//                 "sg": 0.54
//             },
//             "wavePeriod": {
//                 "meteo": 3.46,
//                 "noaa": 9.59,
//                 "sg": 3.46
//             },
//             "windDirection": {
//                 "noaa": 281.1,
//                 "sg": 281.1
//             },
//             "windSpeed": {
//                 "noaa": 3.16,
//                 "sg": 3.16
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.39,
//                 "sg": 7.39
//             },
//             "swellHeight": {
//                 "meteo": 0.42,
//                 "noaa": 0.47,
//                 "sg": 0.42
//             },
//             "swellPeriod": {
//                 "meteo": 7.69,
//                 "noaa": 9.51,
//                 "sg": 7.69
//             },
//             "time": "2023-02-20T22:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.53,
//                 "noaa": 0.47,
//                 "sg": 0.53
//             },
//             "wavePeriod": {
//                 "meteo": 3.4,
//                 "noaa": 9.51,
//                 "sg": 3.4
//             },
//             "windDirection": {
//                 "noaa": 280.74,
//                 "sg": 280.74
//             },
//             "windSpeed": {
//                 "noaa": 2.85,
//                 "sg": 2.85
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.74,
//                 "sg": 7.74
//             },
//             "swellHeight": {
//                 "meteo": 0.41,
//                 "noaa": 0.45,
//                 "sg": 0.41
//             },
//             "swellPeriod": {
//                 "meteo": 7.69,
//                 "noaa": 9.43,
//                 "sg": 7.69
//             },
//             "time": "2023-02-20T23:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.51,
//                 "noaa": 0.45,
//                 "sg": 0.51
//             },
//             "wavePeriod": {
//                 "meteo": 3.34,
//                 "noaa": 9.43,
//                 "sg": 3.34
//             },
//             "windDirection": {
//                 "noaa": 280.39,
//                 "sg": 280.39
//             },
//             "windSpeed": {
//                 "noaa": 2.53,
//                 "sg": 2.53
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.08,
//                 "sg": 8.08
//             },
//             "swellHeight": {
//                 "meteo": 0.39,
//                 "noaa": 0.44,
//                 "sg": 0.39
//             },
//             "swellPeriod": {
//                 "meteo": 7.69,
//                 "noaa": 9.35,
//                 "sg": 7.69
//             },
//             "time": "2023-02-21T00:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.5,
//                 "noaa": 0.44,
//                 "sg": 0.5
//             },
//             "wavePeriod": {
//                 "meteo": 3.28,
//                 "noaa": 9.35,
//                 "sg": 3.28
//             },
//             "windDirection": {
//                 "noaa": 280.03,
//                 "sg": 280.03
//             },
//             "windSpeed": {
//                 "noaa": 2.22,
//                 "sg": 2.22
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.91,
//                 "sg": 7.91
//             },
//             "swellHeight": {
//                 "meteo": 0.38,
//                 "noaa": 0.78,
//                 "sg": 0.38
//             },
//             "swellPeriod": {
//                 "meteo": 7.69,
//                 "noaa": 8.8,
//                 "sg": 7.69
//             },
//             "time": "2023-02-21T01:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.5,
//                 "noaa": 0.81,
//                 "sg": 0.5
//             },
//             "wavePeriod": {
//                 "meteo": 3.17,
//                 "noaa": 8.78,
//                 "sg": 3.17
//             },
//             "windDirection": {
//                 "noaa": 276.57,
//                 "sg": 276.57
//             },
//             "windSpeed": {
//                 "noaa": 2.26,
//                 "sg": 2.26
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.74,
//                 "sg": 7.74
//             },
//             "swellHeight": {
//                 "meteo": 0.36,
//                 "noaa": 1.12,
//                 "sg": 0.36
//             },
//             "swellPeriod": {
//                 "meteo": 7.69,
//                 "noaa": 8.26,
//                 "sg": 7.69
//             },
//             "time": "2023-02-21T02:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.51,
//                 "noaa": 1.18,
//                 "sg": 0.51
//             },
//             "wavePeriod": {
//                 "meteo": 3.06,
//                 "noaa": 8.21,
//                 "sg": 3.06
//             },
//             "windDirection": {
//                 "noaa": 273.12,
//                 "sg": 273.12
//             },
//             "windSpeed": {
//                 "noaa": 2.29,
//                 "sg": 2.29
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.56,
//                 "sg": 7.56
//             },
//             "swellHeight": {
//                 "meteo": 0.35,
//                 "noaa": 1.46,
//                 "sg": 0.35
//             },
//             "swellPeriod": {
//                 "meteo": 7.69,
//                 "noaa": 7.71,
//                 "sg": 7.69
//             },
//             "time": "2023-02-21T03:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.51,
//                 "noaa": 1.55,
//                 "sg": 0.51
//             },
//             "wavePeriod": {
//                 "meteo": 2.95,
//                 "noaa": 7.64,
//                 "sg": 2.95
//             },
//             "windDirection": {
//                 "noaa": 269.66,
//                 "sg": 269.66
//             },
//             "windSpeed": {
//                 "noaa": 2.33,
//                 "sg": 2.33
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.52,
//                 "sg": 7.52
//             },
//             "swellHeight": {
//                 "meteo": 0.34,
//                 "noaa": 1.4,
//                 "sg": 0.34
//             },
//             "swellPeriod": {
//                 "meteo": 7.7,
//                 "noaa": 7.7,
//                 "sg": 7.7
//             },
//             "time": "2023-02-21T04:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.53,
//                 "noaa": 1.51,
//                 "sg": 0.53
//             },
//             "wavePeriod": {
//                 "meteo": 2.9,
//                 "noaa": 7.65,
//                 "sg": 2.9
//             },
//             "windDirection": {
//                 "noaa": 287.86,
//                 "sg": 287.86
//             },
//             "windSpeed": {
//                 "noaa": 2.15,
//                 "sg": 2.15
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.48,
//                 "sg": 7.48
//             },
//             "swellHeight": {
//                 "meteo": 0.32,
//                 "noaa": 1.35,
//                 "sg": 0.32
//             },
//             "swellPeriod": {
//                 "meteo": 7.72,
//                 "noaa": 7.69,
//                 "sg": 7.72
//             },
//             "time": "2023-02-21T05:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.54,
//                 "noaa": 1.46,
//                 "sg": 0.54
//             },
//             "wavePeriod": {
//                 "meteo": 2.85,
//                 "noaa": 7.67,
//                 "sg": 2.85
//             },
//             "windDirection": {
//                 "noaa": 306.07,
//                 "sg": 306.07
//             },
//             "windSpeed": {
//                 "noaa": 1.96,
//                 "sg": 1.96
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.44,
//                 "sg": 7.44
//             },
//             "swellHeight": {
//                 "meteo": 0.31,
//                 "noaa": 1.29,
//                 "sg": 0.31
//             },
//             "swellPeriod": {
//                 "meteo": 7.73,
//                 "noaa": 7.68,
//                 "sg": 7.73
//             },
//             "time": "2023-02-21T06:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.56,
//                 "noaa": 1.42,
//                 "sg": 0.56
//             },
//             "wavePeriod": {
//                 "meteo": 2.8,
//                 "noaa": 7.68,
//                 "sg": 2.8
//             },
//             "windDirection": {
//                 "noaa": 324.27,
//                 "sg": 324.27
//             },
//             "windSpeed": {
//                 "noaa": 1.78,
//                 "sg": 1.78
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.61,
//                 "sg": 7.61
//             },
//             "swellHeight": {
//                 "meteo": 0.3,
//                 "noaa": 1.29,
//                 "sg": 0.3
//             },
//             "swellPeriod": {
//                 "meteo": 7.75,
//                 "noaa": 8.12,
//                 "sg": 7.75
//             },
//             "time": "2023-02-21T07:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.58,
//                 "noaa": 1.41,
//                 "sg": 0.58
//             },
//             "wavePeriod": {
//                 "meteo": 2.79,
//                 "noaa": 8.12,
//                 "sg": 2.79
//             },
//             "windDirection": {
//                 "noaa": 351.3,
//                 "sg": 351.3
//             },
//             "windSpeed": {
//                 "noaa": 1.47,
//                 "sg": 1.47
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.78,
//                 "sg": 7.78
//             },
//             "swellHeight": {
//                 "meteo": 0.29,
//                 "noaa": 1.29,
//                 "sg": 0.29
//             },
//             "swellPeriod": {
//                 "meteo": 7.77,
//                 "noaa": 8.56,
//                 "sg": 7.77
//             },
//             "time": "2023-02-21T08:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.59,
//                 "noaa": 1.41,
//                 "sg": 0.59
//             },
//             "wavePeriod": {
//                 "meteo": 2.78,
//                 "noaa": 8.56,
//                 "sg": 2.78
//             },
//             "windDirection": {
//                 "noaa": 18.34,
//                 "sg": 18.34
//             },
//             "windSpeed": {
//                 "noaa": 1.16,
//                 "sg": 1.16
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.95,
//                 "sg": 7.95
//             },
//             "swellHeight": {
//                 "meteo": 0.28,
//                 "noaa": 1.29,
//                 "sg": 0.28
//             },
//             "swellPeriod": {
//                 "meteo": 7.79,
//                 "noaa": 9,
//                 "sg": 7.79
//             },
//             "time": "2023-02-21T09:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.61,
//                 "noaa": 1.4,
//                 "sg": 0.61
//             },
//             "wavePeriod": {
//                 "meteo": 2.77,
//                 "noaa": 9,
//                 "sg": 2.77
//             },
//             "windDirection": {
//                 "noaa": 45.37,
//                 "sg": 45.37
//             },
//             "windSpeed": {
//                 "noaa": 0.85,
//                 "sg": 0.85
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.19,
//                 "sg": 8.19
//             },
//             "swellHeight": {
//                 "meteo": 0.27,
//                 "noaa": 1.22,
//                 "sg": 0.27
//             },
//             "swellPeriod": {
//                 "meteo": 7.81,
//                 "noaa": 9.02,
//                 "sg": 7.81
//             },
//             "time": "2023-02-21T10:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.63,
//                 "noaa": 1.42,
//                 "sg": 0.63
//             },
//             "wavePeriod": {
//                 "meteo": 2.79,
//                 "noaa": 9.39,
//                 "sg": 2.79
//             },
//             "windDirection": {
//                 "noaa": 87.17,
//                 "sg": 87.17
//             },
//             "windSpeed": {
//                 "noaa": 0.82,
//                 "sg": 0.82
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.43,
//                 "sg": 8.43
//             },
//             "swellHeight": {
//                 "meteo": 0.26,
//                 "noaa": 1.14,
//                 "sg": 0.26
//             },
//             "swellPeriod": {
//                 "meteo": 7.84,
//                 "noaa": 9.03,
//                 "sg": 7.84
//             },
//             "time": "2023-02-21T11:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.65,
//                 "noaa": 1.45,
//                 "sg": 0.65
//             },
//             "wavePeriod": {
//                 "meteo": 2.8,
//                 "noaa": 9.77,
//                 "sg": 2.8
//             },
//             "windDirection": {
//                 "noaa": 128.97,
//                 "sg": 128.97
//             },
//             "windSpeed": {
//                 "noaa": 0.79,
//                 "sg": 0.79
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.66,
//                 "sg": 8.66
//             },
//             "swellHeight": {
//                 "meteo": 0.25,
//                 "noaa": 1.07,
//                 "sg": 0.25
//             },
//             "swellPeriod": {
//                 "meteo": 7.86,
//                 "noaa": 9.05,
//                 "sg": 7.86
//             },
//             "time": "2023-02-21T12:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.67,
//                 "noaa": 1.47,
//                 "sg": 0.67
//             },
//             "wavePeriod": {
//                 "meteo": 2.82,
//                 "noaa": 10.16,
//                 "sg": 2.82
//             },
//             "windDirection": {
//                 "noaa": 170.77,
//                 "sg": 170.77
//             },
//             "windSpeed": {
//                 "noaa": 0.76,
//                 "sg": 0.76
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 8.19,
//                 "sg": 8.19
//             },
//             "swellHeight": {
//                 "meteo": 0.24,
//                 "noaa": 0.88,
//                 "sg": 0.24
//             },
//             "swellPeriod": {
//                 "meteo": 7.87,
//                 "noaa": 8.84,
//                 "sg": 7.87
//             },
//             "time": "2023-02-21T13:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.66,
//                 "noaa": 1.17,
//                 "sg": 0.66
//             },
//             "wavePeriod": {
//                 "meteo": 2.82,
//                 "noaa": 9.58,
//                 "sg": 2.82
//             },
//             "windDirection": {
//                 "noaa": 178.38,
//                 "sg": 178.38
//             },
//             "windSpeed": {
//                 "noaa": 1.5,
//                 "sg": 1.5
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.72,
//                 "sg": 7.72
//             },
//             "swellHeight": {
//                 "meteo": 0.24,
//                 "noaa": 0.7,
//                 "sg": 0.24
//             },
//             "swellPeriod": {
//                 "meteo": 7.87,
//                 "noaa": 8.62,
//                 "sg": 7.87
//             },
//             "time": "2023-02-21T14:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.65,
//                 "noaa": 0.88,
//                 "sg": 0.65
//             },
//             "wavePeriod": {
//                 "meteo": 2.81,
//                 "noaa": 8.99,
//                 "sg": 2.81
//             },
//             "windDirection": {
//                 "noaa": 185.98,
//                 "sg": 185.98
//             },
//             "windSpeed": {
//                 "noaa": 2.23,
//                 "sg": 2.23
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 7.25,
//                 "sg": 7.25
//             },
//             "swellHeight": {
//                 "meteo": 0.23,
//                 "noaa": 0.51,
//                 "sg": 0.23
//             },
//             "swellPeriod": {
//                 "meteo": 7.88,
//                 "noaa": 8.41,
//                 "sg": 7.88
//             },
//             "time": "2023-02-21T15:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.64,
//                 "noaa": 0.58,
//                 "sg": 0.64
//             },
//             "wavePeriod": {
//                 "meteo": 2.81,
//                 "noaa": 8.41,
//                 "sg": 2.81
//             },
//             "windDirection": {
//                 "noaa": 193.59,
//                 "sg": 193.59
//             },
//             "windSpeed": {
//                 "noaa": 2.96,
//                 "sg": 2.96
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.78,
//                 "sg": 6.78
//             },
//             "swellHeight": {
//                 "meteo": 0.22,
//                 "noaa": 0.51,
//                 "sg": 0.22
//             },
//             "swellPeriod": {
//                 "meteo": 7.88,
//                 "noaa": 8.36,
//                 "sg": 7.88
//             },
//             "time": "2023-02-21T16:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.61,
//                 "noaa": 0.59,
//                 "sg": 0.61
//             },
//             "wavePeriod": {
//                 "meteo": 2.77,
//                 "noaa": 9.15,
//                 "sg": 2.77
//             },
//             "windDirection": {
//                 "noaa": 201.19,
//                 "sg": 201.19
//             },
//             "windSpeed": {
//                 "noaa": 3.7,
//                 "sg": 3.7
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 6.31,
//                 "sg": 6.31
//             },
//             "swellHeight": {
//                 "meteo": 0.21,
//                 "noaa": 0.5,
//                 "sg": 0.21
//             },
//             "swellPeriod": {
//                 "meteo": 7.89,
//                 "noaa": 8.31,
//                 "sg": 7.89
//             },
//             "time": "2023-02-21T17:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.58,
//                 "noaa": 0.61,
//                 "sg": 0.58
//             },
//             "wavePeriod": {
//                 "meteo": 2.74,
//                 "noaa": 9.88,
//                 "sg": 2.74
//             },
//             "windDirection": {
//                 "noaa": 208.8,
//                 "sg": 208.8
//             },
//             "windSpeed": {
//                 "noaa": 4.43,
//                 "sg": 4.43
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.84,
//                 "sg": 5.84
//             },
//             "swellHeight": {
//                 "meteo": 0.2,
//                 "noaa": 0.5,
//                 "sg": 0.2
//             },
//             "swellPeriod": {
//                 "meteo": 7.89,
//                 "noaa": 8.26,
//                 "sg": 7.89
//             },
//             "time": "2023-02-21T18:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.55,
//                 "noaa": 0.62,
//                 "sg": 0.55
//             },
//             "wavePeriod": {
//                 "meteo": 2.7,
//                 "noaa": 10.62,
//                 "sg": 2.7
//             },
//             "windDirection": {
//                 "noaa": 216.4,
//                 "sg": 216.4
//             },
//             "windSpeed": {
//                 "noaa": 5.17,
//                 "sg": 5.17
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 5.37,
//                 "sg": 5.37
//             },
//             "swellHeight": {
//                 "meteo": 0.19,
//                 "noaa": 0.57,
//                 "sg": 0.19
//             },
//             "swellPeriod": {
//                 "meteo": 7.89,
//                 "noaa": 8.71,
//                 "sg": 7.89
//             },
//             "time": "2023-02-21T19:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.52,
//                 "noaa": 0.9,
//                 "sg": 0.52
//             },
//             "wavePeriod": {
//                 "meteo": 2.66,
//                 "noaa": 9.7,
//                 "sg": 2.66
//             },
//             "windDirection": {
//                 "noaa": 224.01,
//                 "sg": 224.01
//             },
//             "windSpeed": {
//                 "noaa": 5.9,
//                 "sg": 5.9
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 4.9,
//                 "sg": 4.9
//             },
//             "swellHeight": {
//                 "meteo": 0.19,
//                 "noaa": 0.64,
//                 "sg": 0.19
//             },
//             "swellPeriod": {
//                 "meteo": 7.9,
//                 "noaa": 9.16,
//                 "sg": 7.9
//             },
//             "time": "2023-02-21T20:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.5,
//                 "noaa": 1.18,
//                 "sg": 0.5
//             },
//             "wavePeriod": {
//                 "meteo": 2.61,
//                 "noaa": 8.79,
//                 "sg": 2.61
//             },
//             "windDirection": {
//                 "noaa": 231.62,
//                 "sg": 231.62
//             },
//             "windSpeed": {
//                 "noaa": 6.64,
//                 "sg": 6.64
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 4.43,
//                 "sg": 4.43
//             },
//             "swellHeight": {
//                 "meteo": 0.18,
//                 "noaa": 0.71,
//                 "sg": 0.18
//             },
//             "swellPeriod": {
//                 "meteo": 7.9,
//                 "noaa": 9.61,
//                 "sg": 7.9
//             },
//             "time": "2023-02-21T21:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.47,
//                 "noaa": 1.46,
//                 "sg": 0.47
//             },
//             "wavePeriod": {
//                 "meteo": 2.57,
//                 "noaa": 7.87,
//                 "sg": 2.57
//             },
//             "windDirection": {
//                 "noaa": 239.22,
//                 "sg": 239.22
//             },
//             "windSpeed": {
//                 "noaa": 7.38,
//                 "sg": 7.38
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 3.96,
//                 "sg": 3.96
//             },
//             "swellHeight": {
//                 "meteo": 0.17,
//                 "noaa": 0.69,
//                 "sg": 0.17
//             },
//             "swellPeriod": {
//                 "meteo": 7.89,
//                 "noaa": 9.65,
//                 "sg": 7.89
//             },
//             "time": "2023-02-21T22:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.44,
//                 "noaa": 1.2,
//                 "sg": 0.44
//             },
//             "wavePeriod": {
//                 "meteo": 2.54,
//                 "noaa": 8.55,
//                 "sg": 2.54
//             },
//             "windDirection": {
//                 "noaa": 246.83,
//                 "sg": 246.83
//             },
//             "windSpeed": {
//                 "noaa": 8.11,
//                 "sg": 8.11
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 3.49,
//                 "sg": 3.49
//             },
//             "swellHeight": {
//                 "meteo": 0.17,
//                 "noaa": 0.66,
//                 "sg": 0.17
//             },
//             "swellPeriod": {
//                 "meteo": 7.89,
//                 "noaa": 9.69,
//                 "sg": 7.89
//             },
//             "time": "2023-02-21T23:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.42,
//                 "noaa": 0.93,
//                 "sg": 0.42
//             },
//             "wavePeriod": {
//                 "meteo": 2.52,
//                 "noaa": 9.22,
//                 "sg": 2.52
//             },
//             "windDirection": {
//                 "noaa": 254.43,
//                 "sg": 254.43
//             },
//             "windSpeed": {
//                 "noaa": 8.84,
//                 "sg": 8.84
//             }
//         },
//         {
//             "airTemperature": {
//                 "noaa": 3.02,
//                 "sg": 3.02
//             },
//             "swellHeight": {
//                 "meteo": 0.16,
//                 "noaa": 0.64,
//                 "sg": 0.16
//             },
//             "swellPeriod": {
//                 "meteo": 7.88,
//                 "noaa": 9.73,
//                 "sg": 7.88
//             },
//             "time": "2023-02-22T00:00:00+00:00",
//             "waveHeight": {
//                 "meteo": 0.39,
//                 "noaa": 0.67,
//                 "sg": 0.39
//             },
//             "wavePeriod": {
//                 "meteo": 2.49,
//                 "noaa": 9.9,
//                 "sg": 2.49
//             },
//             "windDirection": {
//                 "noaa": 262.04,
//                 "sg": 262.04
//             },
//             "windSpeed": {
//                 "noaa": 9.58,
//                 "sg": 9.58
//             }
//         }
//     ],
//     "meta": {
//         "cost": 1,
//         "dailyQuota": 10,
//         "end": "2023-02-22 00:00",
//         "lat": 54.24360253672103,
//         "lng": -0.35846234063022786,
//         "params": [
//             "airTemperature",
//             "swellHeight",
//             "swellPeriod",
//             "waveHeight",
//             "wavePeriod",
//             "windDirection",
//             "windSpeed"
//         ],
//         "requestCount": 1,
//         "start": "2023-02-12 00:00"
//     }
// }