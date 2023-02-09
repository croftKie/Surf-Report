export function currentForecast(){
    let data = weatherMain();
    for (const prop in data) {
        let date = data[prop][0].time;
        data[findDay(date.getDay())] = data[prop];
        delete data[prop];
    }
    return data;
}


function findDay(time){
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

function weatherMain(){
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
    return days
}


const weatherData = {
    "hours": [
        {
            "airTemperature": {
                "dwd": 4.86,
                "noaa": 3.09,
                "sg": 4.86
            },
            "swellHeight": {
                "dwd": 0.64,
                "icon": 0.42,
                "meteo": 0.43,
                "meto": 0.23,
                "noaa": 0.41,
                "sg": 0.23
            },
            "swellPeriod": {
                "dwd": 8,
                "icon": 9.31,
                "meteo": 3.66,
                "meto": 14,
                "noaa": 5.12,
                "sg": 14
            },
            "time": "2023-02-09T00:00:00+00:00",
            "waveHeight": {
                "dwd": 0.83,
                "fcoo": 0.96,
                "icon": 0.55,
                "meteo": 0.68,
                "meto": 0.36,
                "noaa": 0.6,
                "sg": 0.96
            },
            "wavePeriod": {
                "fcoo": 3.81,
                "icon": 6.44,
                "meteo": 2.91,
                "meto": 2.13,
                "noaa": 9.69,
                "sg": 3.81
            },
            "windDirection": {
                "icon": 221.11,
                "noaa": 223.4,
                "sg": 221.11
            },
            "windSpeed": {
                "icon": 5.52,
                "noaa": 4.24,
                "sg": 5.52
            }
        },
        {
            "airTemperature": {
                "dwd": 5.25,
                "noaa": 3.5,
                "sg": 5.25
            },
            "swellHeight": {
                "dwd": 0.61,
                "icon": 0.41,
                "meteo": 0.41,
                "meto": 0.23,
                "noaa": 0.37,
                "sg": 0.23
            },
            "swellPeriod": {
                "dwd": 8.08,
                "icon": 9.06,
                "meteo": 3.6,
                "meto": 14.05,
                "noaa": 5.06,
                "sg": 14.05
            },
            "time": "2023-02-09T01:00:00+00:00",
            "waveHeight": {
                "dwd": 0.76,
                "fcoo": 0.93,
                "icon": 0.51,
                "meteo": 0.63,
                "meto": 0.37,
                "noaa": 0.53,
                "sg": 0.93
            },
            "wavePeriod": {
                "fcoo": 3.75,
                "icon": 7,
                "meteo": 2.87,
                "meto": 2.17,
                "noaa": 9.55,
                "sg": 3.75
            },
            "windDirection": {
                "icon": 225.89,
                "noaa": 226.93,
                "sg": 225.89
            },
            "windSpeed": {
                "icon": 4.83,
                "noaa": 3.68,
                "sg": 4.83
            }
        },
        {
            "airTemperature": {
                "dwd": 5.59,
                "noaa": 3.92,
                "sg": 5.59
            },
            "swellHeight": {
                "dwd": 0.56,
                "icon": 0.41,
                "meteo": 0.4,
                "meto": 0.23,
                "noaa": 0.32,
                "sg": 0.23
            },
            "swellPeriod": {
                "dwd": 8.56,
                "icon": 8.81,
                "meteo": 3.53,
                "meto": 14.16,
                "noaa": 5.01,
                "sg": 14.16
            },
            "time": "2023-02-09T02:00:00+00:00",
            "waveHeight": {
                "dwd": 0.71,
                "fcoo": 0.84,
                "icon": 0.46,
                "meteo": 0.57,
                "meto": 0.38,
                "noaa": 0.47,
                "sg": 0.84
            },
            "wavePeriod": {
                "fcoo": 3.65,
                "icon": 7.56,
                "meteo": 2.84,
                "meto": 2.2,
                "noaa": 9.41,
                "sg": 3.65
            },
            "windDirection": {
                "icon": 230.67,
                "noaa": 230.47,
                "sg": 230.67
            },
            "windSpeed": {
                "icon": 4.14,
                "noaa": 3.13,
                "sg": 4.14
            }
        },
        {
            "airTemperature": {
                "dwd": 5.72,
                "noaa": 4.33,
                "sg": 5.72
            },
            "swellHeight": {
                "dwd": 0.53,
                "icon": 0.4,
                "meteo": 0.38,
                "meto": 0.24,
                "noaa": 0.28,
                "sg": 0.24
            },
            "swellPeriod": {
                "dwd": 8.74,
                "icon": 8.56,
                "meteo": 3.47,
                "meto": 14.33,
                "noaa": 4.95,
                "sg": 14.33
            },
            "time": "2023-02-09T03:00:00+00:00",
            "waveHeight": {
                "dwd": 0.67,
                "fcoo": 0.77,
                "icon": 0.42,
                "meteo": 0.52,
                "meto": 0.38,
                "noaa": 0.4,
                "sg": 0.77
            },
            "wavePeriod": {
                "fcoo": 3.48,
                "icon": 8.12,
                "meteo": 2.8,
                "meto": 2.27,
                "noaa": 9.27,
                "sg": 3.48
            },
            "windDirection": {
                "icon": 235.45,
                "noaa": 234,
                "sg": 235.45
            },
            "windSpeed": {
                "icon": 3.45,
                "noaa": 2.57,
                "sg": 3.45
            }
        },
        {
            "airTemperature": {
                "dwd": 5.89,
                "noaa": 3.74,
                "sg": 5.89
            },
            "swellHeight": {
                "dwd": 0.51,
                "icon": 0.38,
                "meteo": 0.34,
                "meto": 0.25,
                "noaa": 0.22,
                "sg": 0.25
            },
            "swellPeriod": {
                "dwd": 8.93,
                "icon": 8.73,
                "meteo": 3.42,
                "meto": 14.51,
                "noaa": 7.54,
                "sg": 14.51
            },
            "time": "2023-02-09T04:00:00+00:00",
            "waveHeight": {
                "dwd": 0.61,
                "fcoo": 0.75,
                "icon": 0.4,
                "meteo": 0.47,
                "meto": 0.37,
                "noaa": 0.39,
                "sg": 0.75
            },
            "wavePeriod": {
                "fcoo": 3.43,
                "icon": 8.42,
                "meteo": 2.69,
                "meto": 2.42,
                "noaa": 9.06,
                "sg": 3.43
            },
            "windDirection": {
                "icon": 242.04,
                "noaa": 244.53,
                "sg": 242.04
            },
            "windSpeed": {
                "icon": 3.16,
                "noaa": 2.45,
                "sg": 3.16
            }
        },
        {
            "airTemperature": {
                "dwd": 6.51,
                "noaa": 3.15,
                "sg": 6.51
            },
            "swellHeight": {
                "dwd": 0.46,
                "icon": 0.37,
                "meteo": 0.31,
                "meto": 0.26,
                "noaa": 0.17,
                "sg": 0.26
            },
            "swellPeriod": {
                "dwd": 9.54,
                "icon": 8.9,
                "meteo": 3.36,
                "meto": 14.63,
                "noaa": 10.14,
                "sg": 14.63
            },
            "time": "2023-02-09T05:00:00+00:00",
            "waveHeight": {
                "dwd": 0.64,
                "fcoo": 0.76,
                "icon": 0.37,
                "meteo": 0.41,
                "meto": 0.36,
                "noaa": 0.39,
                "sg": 0.76
            },
            "wavePeriod": {
                "fcoo": 3.48,
                "icon": 8.72,
                "meteo": 2.57,
                "meto": 2.61,
                "noaa": 8.86,
                "sg": 3.48
            },
            "windDirection": {
                "icon": 248.64,
                "noaa": 255.05,
                "sg": 248.64
            },
            "windSpeed": {
                "icon": 2.86,
                "noaa": 2.33,
                "sg": 2.86
            }
        },
        {
            "airTemperature": {
                "dwd": 6.15,
                "noaa": 2.56,
                "sg": 6.15
            },
            "swellHeight": {
                "dwd": 0.48,
                "icon": 0.35,
                "meteo": 0.27,
                "meto": 0.26,
                "noaa": 0.11,
                "sg": 0.26
            },
            "swellPeriod": {
                "dwd": 8.86,
                "icon": 9.07,
                "meteo": 3.31,
                "meto": 14.69,
                "noaa": 12.73,
                "sg": 14.69
            },
            "time": "2023-02-09T06:00:00+00:00",
            "waveHeight": {
                "dwd": 0.73,
                "fcoo": 0.75,
                "icon": 0.35,
                "meteo": 0.36,
                "meto": 0.34,
                "noaa": 0.38,
                "sg": 0.75
            },
            "wavePeriod": {
                "fcoo": 3.63,
                "icon": 9.02,
                "meteo": 2.46,
                "meto": 3.01,
                "noaa": 8.65,
                "sg": 3.63
            },
            "windDirection": {
                "icon": 255.23,
                "noaa": 265.58,
                "sg": 255.23
            },
            "windSpeed": {
                "icon": 2.57,
                "noaa": 2.21,
                "sg": 2.57
            }
        },
        {
            "airTemperature": {
                "dwd": 5.62,
                "noaa": 2.53,
                "sg": 5.62
            },
            "swellHeight": {
                "dwd": 0.62,
                "icon": 0.35,
                "meteo": 0.23,
                "meto": 0.26,
                "noaa": 0.11,
                "sg": 0.26
            },
            "swellPeriod": {
                "dwd": 6.69,
                "icon": 8.91,
                "meteo": 3.16,
                "meto": 14.69,
                "noaa": 12.88,
                "sg": 14.69
            },
            "time": "2023-02-09T07:00:00+00:00",
            "waveHeight": {
                "dwd": 0.71,
                "fcoo": 0.73,
                "icon": 0.35,
                "meteo": 0.36,
                "meto": 0.33,
                "noaa": 0.39,
                "sg": 0.73
            },
            "wavePeriod": {
                "fcoo": 3.8,
                "icon": 8.75,
                "meteo": 2.42,
                "meto": 3.36,
                "noaa": 7.36,
                "sg": 3.8
            },
            "windDirection": {
                "icon": 252.79,
                "noaa": 260.28,
                "sg": 252.79
            },
            "windSpeed": {
                "icon": 2.92,
                "noaa": 2.62,
                "sg": 2.92
            }
        },
        {
            "airTemperature": {
                "dwd": 5.23,
                "noaa": 2.5,
                "sg": 5.23
            },
            "swellHeight": {
                "dwd": 0.61,
                "icon": 0.34,
                "meteo": 0.18,
                "meto": 0.25,
                "noaa": 0.11,
                "sg": 0.25
            },
            "swellPeriod": {
                "dwd": 6.61,
                "icon": 8.75,
                "meteo": 3.01,
                "meto": 14.72,
                "noaa": 13.03,
                "sg": 14.72
            },
            "time": "2023-02-09T08:00:00+00:00",
            "waveHeight": {
                "dwd": 0.66,
                "fcoo": 0.69,
                "icon": 0.35,
                "meteo": 0.36,
                "meto": 0.31,
                "noaa": 0.41,
                "sg": 0.69
            },
            "wavePeriod": {
                "fcoo": 3.72,
                "icon": 8.48,
                "meteo": 2.39,
                "meto": 3.74,
                "noaa": 6.07,
                "sg": 3.72
            },
            "windDirection": {
                "icon": 250.35,
                "noaa": 254.98,
                "sg": 250.35
            },
            "windSpeed": {
                "icon": 3.26,
                "noaa": 3.04,
                "sg": 3.26
            }
        },
        {
            "airTemperature": {
                "dwd": 4.92,
                "noaa": 2.47,
                "sg": 4.92
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.34,
                "meteo": 0.14,
                "meto": 0.24,
                "noaa": 0.11,
                "sg": 0.24
            },
            "swellPeriod": {
                "dwd": 6.73,
                "icon": 8.59,
                "meteo": 2.86,
                "meto": 14.85,
                "noaa": 13.18,
                "sg": 14.85
            },
            "time": "2023-02-09T09:00:00+00:00",
            "waveHeight": {
                "dwd": 0.64,
                "fcoo": 0.72,
                "icon": 0.35,
                "meteo": 0.36,
                "meto": 0.29,
                "noaa": 0.42,
                "sg": 0.72
            },
            "wavePeriod": {
                "fcoo": 3.44,
                "icon": 8.21,
                "meteo": 2.35,
                "meto": 4.35,
                "noaa": 4.78,
                "sg": 3.44
            },
            "windDirection": {
                "icon": 247.91,
                "noaa": 249.68,
                "sg": 247.91
            },
            "windSpeed": {
                "icon": 3.61,
                "noaa": 3.45,
                "sg": 3.61
            }
        },
        {
            "airTemperature": {
                "dwd": 5.03,
                "noaa": 3.9,
                "sg": 5.03
            },
            "swellHeight": {
                "dwd": 0.57,
                "icon": 0.33,
                "meteo": 0.14,
                "meto": 0.23,
                "noaa": 0.11,
                "sg": 0.23
            },
            "swellPeriod": {
                "dwd": 6.92,
                "icon": 8.68,
                "meteo": 3.05,
                "meto": 15.13,
                "noaa": 11.69,
                "sg": 15.13
            },
            "time": "2023-02-09T10:00:00+00:00",
            "waveHeight": {
                "dwd": 0.66,
                "fcoo": 0.8,
                "icon": 0.39,
                "meteo": 0.38,
                "meto": 0.26,
                "noaa": 0.45,
                "sg": 0.8
            },
            "wavePeriod": {
                "fcoo": 3.3,
                "icon": 7.22,
                "meteo": 2.37,
                "meto": 5.39,
                "noaa": 4.83,
                "sg": 3.3
            },
            "windDirection": {
                "icon": 246.7,
                "noaa": 256.89,
                "sg": 246.7
            },
            "windSpeed": {
                "icon": 4.56,
                "noaa": 4.47,
                "sg": 4.56
            }
        },
        {
            "airTemperature": {
                "dwd": 5.41,
                "noaa": 5.33,
                "sg": 5.41
            },
            "swellHeight": {
                "dwd": 0.56,
                "icon": 0.33,
                "meteo": 0.15,
                "meto": 0.24,
                "noaa": 0.1,
                "sg": 0.24
            },
            "swellPeriod": {
                "dwd": 6.98,
                "icon": 8.76,
                "meteo": 3.25,
                "meto": 15.48,
                "noaa": 10.19,
                "sg": 15.48
            },
            "time": "2023-02-09T11:00:00+00:00",
            "waveHeight": {
                "dwd": 0.69,
                "fcoo": 0.87,
                "icon": 0.44,
                "meteo": 0.41,
                "meto": 0.25,
                "noaa": 0.47,
                "sg": 0.87
            },
            "wavePeriod": {
                "fcoo": 3.36,
                "icon": 6.23,
                "meteo": 2.38,
                "meto": 6.86,
                "noaa": 4.87,
                "sg": 3.36
            },
            "windDirection": {
                "icon": 245.5,
                "noaa": 264.1,
                "sg": 245.5
            },
            "windSpeed": {
                "icon": 5.5,
                "noaa": 5.48,
                "sg": 5.5
            }
        },
        {
            "airTemperature": {
                "dwd": 5.8,
                "noaa": 6.76,
                "sg": 5.8
            },
            "swellHeight": {
                "dwd": 0.54,
                "icon": 0.32,
                "meteo": 0.15,
                "meto": 0.24,
                "noaa": 0.1,
                "sg": 0.24
            },
            "swellPeriod": {
                "dwd": 7.11,
                "icon": 8.85,
                "meteo": 3.44,
                "meto": 15.75,
                "noaa": 8.7,
                "sg": 15.75
            },
            "time": "2023-02-09T12:00:00+00:00",
            "waveHeight": {
                "dwd": 0.72,
                "fcoo": 0.86,
                "icon": 0.48,
                "meteo": 0.43,
                "meto": 0.25,
                "noaa": 0.5,
                "sg": 0.86
            },
            "wavePeriod": {
                "fcoo": 3.44,
                "icon": 5.24,
                "meteo": 2.4,
                "meto": 7.95,
                "noaa": 4.92,
                "sg": 3.44
            },
            "windDirection": {
                "icon": 244.29,
                "noaa": 271.31,
                "sg": 244.29
            },
            "windSpeed": {
                "icon": 6.45,
                "noaa": 6.5,
                "sg": 6.45
            }
        },
        {
            "airTemperature": {
                "dwd": 6.39,
                "noaa": 6.88,
                "sg": 6.39
            },
            "swellHeight": {
                "dwd": 0.53,
                "icon": 0.33,
                "meteo": 0.16,
                "meto": 0.25,
                "noaa": 0.1,
                "sg": 0.25
            },
            "swellPeriod": {
                "dwd": 7.22,
                "icon": 8.94,
                "meteo": 3.49,
                "meto": 15.78,
                "noaa": 7.32,
                "sg": 15.78
            },
            "time": "2023-02-09T13:00:00+00:00",
            "waveHeight": {
                "dwd": 0.74,
                "fcoo": 0.8,
                "icon": 0.54,
                "meteo": 0.44,
                "meto": 0.26,
                "noaa": 0.51,
                "sg": 0.8
            },
            "wavePeriod": {
                "fcoo": 3.45,
                "icon": 5.07,
                "meteo": 2.43,
                "meto": 8.52,
                "noaa": 5.36,
                "sg": 3.45
            },
            "windDirection": {
                "icon": 252.78,
                "noaa": 270.99,
                "sg": 252.78
            },
            "windSpeed": {
                "icon": 6.6,
                "noaa": 6.35,
                "sg": 6.6
            }
        },
        {
            "airTemperature": {
                "dwd": 7.25,
                "noaa": 6.99,
                "sg": 7.25
            },
            "swellHeight": {
                "dwd": 0.56,
                "icon": 0.34,
                "meteo": 0.17,
                "meto": 0.26,
                "noaa": 0.09,
                "sg": 0.26
            },
            "swellPeriod": {
                "dwd": 7.01,
                "icon": 9.04,
                "meteo": 3.55,
                "meto": 16.13,
                "noaa": 5.93,
                "sg": 16.13
            },
            "time": "2023-02-09T14:00:00+00:00",
            "waveHeight": {
                "dwd": 0.72,
                "fcoo": 0.78,
                "icon": 0.61,
                "meteo": 0.44,
                "meto": 0.27,
                "noaa": 0.51,
                "sg": 0.78
            },
            "wavePeriod": {
                "fcoo": 3.5,
                "icon": 4.89,
                "meteo": 2.45,
                "meto": 8.78,
                "noaa": 5.79,
                "sg": 3.5
            },
            "windDirection": {
                "icon": 261.28,
                "noaa": 270.68,
                "sg": 261.28
            },
            "windSpeed": {
                "icon": 6.75,
                "noaa": 6.19,
                "sg": 6.75
            }
        },
        {
            "airTemperature": {
                "dwd": 7.98,
                "noaa": 7.1,
                "sg": 7.98
            },
            "swellHeight": {
                "dwd": 0.58,
                "icon": 0.35,
                "meteo": 0.18,
                "meto": 0.28,
                "noaa": 0.09,
                "sg": 0.28
            },
            "swellPeriod": {
                "dwd": 7.06,
                "icon": 9.13,
                "meteo": 3.6,
                "meto": 16.19,
                "noaa": 4.55,
                "sg": 16.19
            },
            "time": "2023-02-09T15:00:00+00:00",
            "waveHeight": {
                "dwd": 0.7,
                "fcoo": 0.81,
                "icon": 0.67,
                "meteo": 0.45,
                "meto": 0.3,
                "noaa": 0.52,
                "sg": 0.81
            },
            "wavePeriod": {
                "fcoo": 3.61,
                "icon": 4.72,
                "meteo": 2.48,
                "meto": 7.7,
                "noaa": 6.23,
                "sg": 3.61
            },
            "windDirection": {
                "icon": 269.77,
                "noaa": 270.36,
                "sg": 269.77
            },
            "windSpeed": {
                "icon": 6.9,
                "noaa": 6.04,
                "sg": 6.9
            }
        },
        {
            "airTemperature": {
                "dwd": 7.97,
                "noaa": 6.09,
                "sg": 7.97
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.4,
                "meteo": 0.2,
                "meto": 0.29,
                "noaa": 0.08,
                "sg": 0.29
            },
            "swellPeriod": {
                "dwd": 7.1,
                "icon": 8.64,
                "meteo": 3.62,
                "meto": 15.94,
                "noaa": 4.47,
                "sg": 15.94
            },
            "time": "2023-02-09T16:00:00+00:00",
            "waveHeight": {
                "dwd": 0.69,
                "fcoo": 0.85,
                "icon": 0.64,
                "meteo": 0.46,
                "meto": 0.33,
                "noaa": 0.51,
                "sg": 0.85
            },
            "wavePeriod": {
                "fcoo": 3.67,
                "icon": 5.21,
                "meteo": 2.5,
                "meto": 6.54,
                "noaa": 5.79,
                "sg": 3.67
            },
            "windDirection": {
                "icon": 262.53,
                "noaa": 266.61,
                "sg": 262.53
            },
            "windSpeed": {
                "icon": 6.35,
                "noaa": 5.56,
                "sg": 6.35
            }
        },
        {
            "airTemperature": {
                "dwd": 7.62,
                "noaa": 5.07,
                "sg": 7.62
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.44,
                "meteo": 0.23,
                "meto": 0.3,
                "noaa": 0.08,
                "sg": 0.3
            },
            "swellPeriod": {
                "dwd": 7.3,
                "icon": 8.16,
                "meteo": 3.65,
                "meto": 15.84,
                "noaa": 4.38,
                "sg": 15.84
            },
            "time": "2023-02-09T17:00:00+00:00",
            "waveHeight": {
                "dwd": 0.68,
                "fcoo": 0.85,
                "icon": 0.61,
                "meteo": 0.48,
                "meto": 0.35,
                "noaa": 0.51,
                "sg": 0.85
            },
            "wavePeriod": {
                "fcoo": 3.66,
                "icon": 5.69,
                "meteo": 2.53,
                "meto": 6.19,
                "noaa": 5.36,
                "sg": 3.66
            },
            "windDirection": {
                "icon": 255.3,
                "noaa": 262.87,
                "sg": 255.3
            },
            "windSpeed": {
                "icon": 5.79,
                "noaa": 5.08,
                "sg": 5.79
            }
        },
        {
            "airTemperature": {
                "dwd": 7.15,
                "noaa": 4.06,
                "sg": 7.15
            },
            "swellHeight": {
                "dwd": 0.57,
                "icon": 0.49,
                "meteo": 0.25,
                "meto": 0.3,
                "noaa": 0.07,
                "sg": 0.3
            },
            "swellPeriod": {
                "dwd": 7.61,
                "icon": 7.67,
                "meteo": 3.67,
                "meto": 15.81,
                "noaa": 4.3,
                "sg": 15.81
            },
            "time": "2023-02-09T18:00:00+00:00",
            "waveHeight": {
                "dwd": 0.67,
                "fcoo": 0.83,
                "icon": 0.58,
                "meteo": 0.49,
                "meto": 0.35,
                "noaa": 0.5,
                "sg": 0.83
            },
            "wavePeriod": {
                "fcoo": 3.59,
                "icon": 6.18,
                "meteo": 2.55,
                "meto": 6.14,
                "noaa": 4.92,
                "sg": 3.59
            },
            "windDirection": {
                "icon": 248.06,
                "noaa": 259.12,
                "sg": 248.06
            },
            "windSpeed": {
                "icon": 5.24,
                "noaa": 4.6,
                "sg": 5.24
            }
        },
        {
            "airTemperature": {
                "dwd": 6.72,
                "noaa": 3.71,
                "sg": 6.72
            },
            "swellHeight": {
                "dwd": 0.54,
                "icon": 0.49,
                "meteo": 0.22,
                "meto": 0.3,
                "noaa": 0.07,
                "sg": 0.3
            },
            "swellPeriod": {
                "dwd": 8.12,
                "icon": 8.37,
                "meteo": 4.03,
                "meto": 15.58,
                "noaa": 4.21,
                "sg": 15.58
            },
            "time": "2023-02-09T19:00:00+00:00",
            "waveHeight": {
                "dwd": 0.66,
                "fcoo": 0.8,
                "icon": 0.57,
                "meteo": 0.49,
                "meto": 0.34,
                "noaa": 0.5,
                "sg": 0.8
            },
            "wavePeriod": {
                "fcoo": 3.48,
                "icon": 6.78,
                "meteo": 2.56,
                "meto": 6.22,
                "noaa": 9.3,
                "sg": 3.48
            },
            "windDirection": {
                "icon": 247.54,
                "noaa": 256.08,
                "sg": 247.54
            },
            "windSpeed": {
                "icon": 5.13,
                "noaa": 4.35,
                "sg": 5.13
            }
        },
        {
            "airTemperature": {
                "dwd": 6.23,
                "noaa": 3.37,
                "sg": 6.23
            },
            "swellHeight": {
                "dwd": 0.51,
                "icon": 0.48,
                "meteo": 0.19,
                "meto": 0.28,
                "noaa": 0.06,
                "sg": 0.28
            },
            "swellPeriod": {
                "dwd": 8.69,
                "icon": 9.06,
                "meteo": 4.39,
                "meto": 15.32,
                "noaa": 4.12,
                "sg": 15.32
            },
            "time": "2023-02-09T20:00:00+00:00",
            "waveHeight": {
                "dwd": 0.64,
                "fcoo": 0.75,
                "icon": 0.56,
                "meteo": 0.49,
                "meto": 0.33,
                "noaa": 0.49,
                "sg": 0.75
            },
            "wavePeriod": {
                "fcoo": 3.39,
                "icon": 7.37,
                "meteo": 2.57,
                "meto": 6.19,
                "noaa": 13.69,
                "sg": 3.39
            },
            "windDirection": {
                "icon": 247.02,
                "noaa": 253.03,
                "sg": 247.02
            },
            "windSpeed": {
                "icon": 5.02,
                "noaa": 4.09,
                "sg": 5.02
            }
        },
        {
            "airTemperature": {
                "dwd": 5.86,
                "noaa": 3.02,
                "sg": 5.86
            },
            "swellHeight": {
                "dwd": 0.51,
                "icon": 0.48,
                "meteo": 0.16,
                "meto": 0.27,
                "noaa": 0.06,
                "sg": 0.27
            },
            "swellPeriod": {
                "dwd": 9.12,
                "icon": 9.76,
                "meteo": 4.75,
                "meto": 15.06,
                "noaa": 4.03,
                "sg": 15.06
            },
            "time": "2023-02-09T21:00:00+00:00",
            "waveHeight": {
                "dwd": 0.64,
                "fcoo": 0.72,
                "icon": 0.55,
                "meteo": 0.49,
                "meto": 0.31,
                "noaa": 0.49,
                "sg": 0.72
            },
            "wavePeriod": {
                "fcoo": 3.32,
                "icon": 7.97,
                "meteo": 2.58,
                "meto": 6.15,
                "noaa": 18.07,
                "sg": 3.32
            },
            "windDirection": {
                "icon": 246.5,
                "noaa": 249.99,
                "sg": 246.5
            },
            "windSpeed": {
                "icon": 4.91,
                "noaa": 3.84,
                "sg": 4.91
            }
        },
        {
            "airTemperature": {
                "dwd": 5.69,
                "noaa": 2.79,
                "sg": 5.69
            },
            "swellHeight": {
                "dwd": 0.52,
                "icon": 0.5,
                "meteo": 0.18,
                "meto": 0.26,
                "noaa": 0.15,
                "sg": 0.26
            },
            "swellPeriod": {
                "dwd": 9.4,
                "icon": 10.05,
                "meteo": 4.59,
                "meto": 14.84,
                "noaa": 4.33,
                "sg": 14.84
            },
            "time": "2023-02-09T22:00:00+00:00",
            "waveHeight": {
                "dwd": 0.65,
                "fcoo": 0.71,
                "icon": 0.56,
                "meteo": 0.48,
                "meto": 0.29,
                "noaa": 0.5,
                "sg": 0.71
            },
            "wavePeriod": {
                "fcoo": 3.29,
                "icon": 8.5,
                "meteo": 2.57,
                "meto": 6.18,
                "noaa": 17.87,
                "sg": 3.29
            },
            "windDirection": {
                "icon": 247.86,
                "noaa": 247.43,
                "sg": 247.86
            },
            "windSpeed": {
                "icon": 4.73,
                "noaa": 3.96,
                "sg": 4.73
            }
        },
        {
            "airTemperature": {
                "dwd": 5.52,
                "noaa": 2.56,
                "sg": 5.52
            },
            "swellHeight": {
                "dwd": 0.54,
                "icon": 0.52,
                "meteo": 0.2,
                "meto": 0.25,
                "noaa": 0.24,
                "sg": 0.25
            },
            "swellPeriod": {
                "dwd": 9.67,
                "icon": 10.34,
                "meteo": 4.43,
                "meto": 14.64,
                "noaa": 4.62,
                "sg": 14.64
            },
            "time": "2023-02-09T23:00:00+00:00",
            "waveHeight": {
                "dwd": 0.68,
                "fcoo": 0.7,
                "icon": 0.57,
                "meteo": 0.48,
                "meto": 0.28,
                "noaa": 0.51,
                "sg": 0.7
            },
            "wavePeriod": {
                "fcoo": 3.33,
                "icon": 9.02,
                "meteo": 2.57,
                "meto": 6.2,
                "noaa": 17.68,
                "sg": 3.33
            },
            "windDirection": {
                "icon": 249.21,
                "noaa": 244.87,
                "sg": 249.21
            },
            "windSpeed": {
                "icon": 4.56,
                "noaa": 4.09,
                "sg": 4.56
            }
        },
        {
            "airTemperature": {
                "dwd": 5.42,
                "noaa": 2.33,
                "sg": 5.42
            },
            "swellHeight": {
                "dwd": 0.57,
                "icon": 0.54,
                "meteo": 0.22,
                "meto": 0.21,
                "noaa": 0.33,
                "sg": 0.21
            },
            "swellPeriod": {
                "dwd": 9.96,
                "icon": 10.63,
                "meteo": 4.27,
                "meto": 4.02,
                "noaa": 4.92,
                "sg": 4.02
            },
            "time": "2023-02-10T00:00:00+00:00",
            "waveHeight": {
                "dwd": 0.72,
                "fcoo": 0.67,
                "icon": 0.58,
                "meteo": 0.47,
                "meto": 0.31,
                "noaa": 0.52,
                "sg": 0.67
            },
            "wavePeriod": {
                "fcoo": 3.37,
                "icon": 9.55,
                "meteo": 2.56,
                "meto": 3.33,
                "noaa": 17.48,
                "sg": 3.37
            },
            "windDirection": {
                "icon": 250.57,
                "noaa": 242.31,
                "sg": 250.57
            },
            "windSpeed": {
                "icon": 4.38,
                "noaa": 4.21,
                "sg": 4.38
            }
        },
        {
            "airTemperature": {
                "dwd": 5.35,
                "noaa": 2.28,
                "sg": 5.35
            },
            "swellHeight": {
                "dwd": 0.58,
                "icon": 0.54,
                "meteo": 0.21,
                "meto": 0.22,
                "noaa": 0.25,
                "sg": 0.22
            },
            "swellPeriod": {
                "dwd": 10.37,
                "icon": 10.89,
                "meteo": 4.19,
                "meto": 4.15,
                "noaa": 6.23,
                "sg": 4.15
            },
            "time": "2023-02-10T01:00:00+00:00",
            "waveHeight": {
                "dwd": 0.75,
                "fcoo": 0.62,
                "icon": 0.59,
                "meteo": 0.48,
                "meto": 0.32,
                "noaa": 0.53,
                "sg": 0.62
            },
            "wavePeriod": {
                "fcoo": 3.38,
                "icon": 9.64,
                "meteo": 2.56,
                "meto": 3.48,
                "noaa": 16.98,
                "sg": 3.38
            },
            "windDirection": {
                "icon": 248.86,
                "noaa": 241.31,
                "sg": 248.86
            },
            "windSpeed": {
                "icon": 4.57,
                "noaa": 4.04,
                "sg": 4.57
            }
        },
        {
            "airTemperature": {
                "dwd": 5.41,
                "noaa": 2.24,
                "sg": 5.41
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.55,
                "meteo": 0.19,
                "meto": 0.23,
                "noaa": 0.17,
                "sg": 0.23
            },
            "swellPeriod": {
                "dwd": 10.92,
                "icon": 11.16,
                "meteo": 4.1,
                "meto": 4.19,
                "noaa": 7.53,
                "sg": 4.19
            },
            "time": "2023-02-10T02:00:00+00:00",
            "waveHeight": {
                "dwd": 0.79,
                "fcoo": 0.59,
                "icon": 0.59,
                "meteo": 0.5,
                "meto": 0.33,
                "noaa": 0.55,
                "sg": 0.59
            },
            "wavePeriod": {
                "fcoo": 3.35,
                "icon": 9.73,
                "meteo": 2.57,
                "meto": 3.58,
                "noaa": 16.48,
                "sg": 3.35
            },
            "windDirection": {
                "icon": 247.15,
                "noaa": 240.31,
                "sg": 247.15
            },
            "windSpeed": {
                "icon": 4.76,
                "noaa": 3.88,
                "sg": 4.76
            }
        },
        {
            "airTemperature": {
                "dwd": 5.42,
                "noaa": 2.19,
                "sg": 5.42
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.55,
                "meteo": 0.18,
                "meto": 0.23,
                "noaa": 0.09,
                "sg": 0.23
            },
            "swellPeriod": {
                "dwd": 11.34,
                "icon": 11.42,
                "meteo": 4.02,
                "meto": 11.28,
                "noaa": 8.84,
                "sg": 11.28
            },
            "time": "2023-02-10T03:00:00+00:00",
            "waveHeight": {
                "dwd": 0.82,
                "fcoo": 0.59,
                "icon": 0.6,
                "meteo": 0.51,
                "meto": 0.34,
                "noaa": 0.56,
                "sg": 0.59
            },
            "wavePeriod": {
                "fcoo": 3.33,
                "icon": 9.82,
                "meteo": 2.57,
                "meto": 3.73,
                "noaa": 15.98,
                "sg": 3.33
            },
            "windDirection": {
                "icon": 245.44,
                "noaa": 239.31,
                "sg": 245.44
            },
            "windSpeed": {
                "icon": 4.95,
                "noaa": 3.71,
                "sg": 4.95
            }
        },
        {
            "airTemperature": {
                "dwd": 5.28,
                "noaa": 2.26,
                "sg": 5.28
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.55,
                "meteo": 0.17,
                "meto": 0.24,
                "noaa": 0.18,
                "sg": 0.24
            },
            "swellPeriod": {
                "dwd": 11.49,
                "icon": 11.29,
                "meteo": 5.71,
                "meto": 13.97,
                "noaa": 11.03,
                "sg": 13.97
            },
            "time": "2023-02-10T04:00:00+00:00",
            "waveHeight": {
                "dwd": 0.84,
                "fcoo": 0.58,
                "icon": 0.61,
                "meteo": 0.51,
                "meto": 0.33,
                "noaa": 0.56,
                "sg": 0.58
            },
            "wavePeriod": {
                "fcoo": 3.32,
                "icon": 9.57,
                "meteo": 2.59,
                "meto": 4.17,
                "noaa": 15.79,
                "sg": 3.32
            },
            "windDirection": {
                "icon": 243.13,
                "noaa": 234.43,
                "sg": 243.13
            },
            "windSpeed": {
                "icon": 5.01,
                "noaa": 3.78,
                "sg": 5.01
            }
        },
        {
            "airTemperature": {
                "dwd": 5.37,
                "noaa": 2.33,
                "sg": 5.37
            },
            "swellHeight": {
                "dwd": 0.6,
                "icon": 0.55,
                "meteo": 0.17,
                "meto": 0.26,
                "noaa": 0.26,
                "sg": 0.26
            },
            "swellPeriod": {
                "dwd": 11.56,
                "icon": 11.17,
                "meteo": 7.41,
                "meto": 14.03,
                "noaa": 13.22,
                "sg": 14.03
            },
            "time": "2023-02-10T05:00:00+00:00",
            "waveHeight": {
                "dwd": 0.85,
                "fcoo": 0.57,
                "icon": 0.61,
                "meteo": 0.51,
                "meto": 0.32,
                "noaa": 0.55,
                "sg": 0.57
            },
            "wavePeriod": {
                "fcoo": 3.32,
                "icon": 9.31,
                "meteo": 2.61,
                "meto": 5.02,
                "noaa": 15.6,
                "sg": 3.32
            },
            "windDirection": {
                "icon": 240.83,
                "noaa": 229.56,
                "sg": 240.83
            },
            "windSpeed": {
                "icon": 5.08,
                "noaa": 3.86,
                "sg": 5.08
            }
        },
        {
            "airTemperature": {
                "dwd": 5.42,
                "noaa": 2.4,
                "sg": 5.42
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.55,
                "meteo": 0.16,
                "meto": 0.29,
                "noaa": 0.35,
                "sg": 0.29
            },
            "swellPeriod": {
                "dwd": 11.57,
                "icon": 11.04,
                "meteo": 9.1,
                "meto": 13.99,
                "noaa": 15.41,
                "sg": 13.99
            },
            "time": "2023-02-10T06:00:00+00:00",
            "waveHeight": {
                "dwd": 0.85,
                "fcoo": 0.56,
                "icon": 0.62,
                "meteo": 0.51,
                "meto": 0.33,
                "noaa": 0.55,
                "sg": 0.56
            },
            "wavePeriod": {
                "fcoo": 3.33,
                "icon": 9.06,
                "meteo": 2.63,
                "meto": 6.08,
                "noaa": 15.41,
                "sg": 3.33
            },
            "windDirection": {
                "icon": 238.52,
                "noaa": 224.68,
                "sg": 238.52
            },
            "windSpeed": {
                "icon": 5.14,
                "noaa": 3.93,
                "sg": 5.14
            }
        },
        {
            "airTemperature": {
                "dwd": 5.4,
                "noaa": 2.88,
                "sg": 5.4
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.54,
                "meteo": 0.19,
                "meto": 0.31,
                "noaa": 0.37,
                "sg": 0.31
            },
            "swellPeriod": {
                "dwd": 11.47,
                "icon": 10.99,
                "meteo": 8.9,
                "meto": 13.76,
                "noaa": 13.77,
                "sg": 13.76
            },
            "time": "2023-02-10T07:00:00+00:00",
            "waveHeight": {
                "dwd": 0.83,
                "fcoo": 0.59,
                "icon": 0.64,
                "meteo": 0.52,
                "meto": 0.33,
                "noaa": 0.58,
                "sg": 0.59
            },
            "wavePeriod": {
                "fcoo": 3.33,
                "icon": 8.51,
                "meteo": 2.66,
                "meto": 6.74,
                "noaa": 13.77,
                "sg": 3.33
            },
            "windDirection": {
                "icon": 233.84,
                "noaa": 225.65,
                "sg": 233.84
            },
            "windSpeed": {
                "icon": 5.69,
                "noaa": 4.63,
                "sg": 5.69
            }
        },
        {
            "airTemperature": {
                "dwd": 5.55,
                "noaa": 3.36,
                "sg": 5.55
            },
            "swellHeight": {
                "dwd": 0.58,
                "icon": 0.53,
                "meteo": 0.21,
                "meto": 0.32,
                "noaa": 0.39,
                "sg": 0.32
            },
            "swellPeriod": {
                "dwd": 11.36,
                "icon": 10.94,
                "meteo": 8.7,
                "meto": 13.22,
                "noaa": 12.13,
                "sg": 13.22
            },
            "time": "2023-02-10T08:00:00+00:00",
            "waveHeight": {
                "dwd": 0.81,
                "fcoo": 0.59,
                "icon": 0.66,
                "meteo": 0.53,
                "meto": 0.34,
                "noaa": 0.62,
                "sg": 0.59
            },
            "wavePeriod": {
                "fcoo": 3.48,
                "icon": 7.97,
                "meteo": 2.7,
                "meto": 6.54,
                "noaa": 12.13,
                "sg": 3.48
            },
            "windDirection": {
                "icon": 229.15,
                "noaa": 226.62,
                "sg": 229.15
            },
            "windSpeed": {
                "icon": 6.24,
                "noaa": 5.32,
                "sg": 6.24
            }
        },
        {
            "airTemperature": {
                "dwd": 5.83,
                "noaa": 3.84,
                "sg": 5.83
            },
            "swellHeight": {
                "dwd": 0.56,
                "icon": 0.52,
                "meteo": 0.24,
                "meto": 0.32,
                "noaa": 0.41,
                "sg": 0.32
            },
            "swellPeriod": {
                "dwd": 11.46,
                "icon": 10.89,
                "meteo": 8.5,
                "meto": 12.9,
                "noaa": 10.49,
                "sg": 12.9
            },
            "time": "2023-02-10T09:00:00+00:00",
            "waveHeight": {
                "dwd": 0.82,
                "fcoo": 0.62,
                "icon": 0.68,
                "meteo": 0.54,
                "meto": 0.34,
                "noaa": 0.65,
                "sg": 0.62
            },
            "wavePeriod": {
                "fcoo": 3.64,
                "icon": 7.42,
                "meteo": 2.73,
                "meto": 5.57,
                "noaa": 10.49,
                "sg": 3.64
            },
            "windDirection": {
                "icon": 224.47,
                "noaa": 227.59,
                "sg": 224.47
            },
            "windSpeed": {
                "icon": 6.79,
                "noaa": 6.02,
                "sg": 6.79
            }
        },
        {
            "airTemperature": {
                "dwd": 6.13,
                "noaa": 4.5,
                "sg": 6.13
            },
            "swellHeight": {
                "dwd": 0.54,
                "icon": 0.51,
                "meteo": 0.26,
                "meto": 0.32,
                "noaa": 0.43,
                "sg": 0.32
            },
            "swellPeriod": {
                "dwd": 11.71,
                "icon": 10.7,
                "meteo": 8.33,
                "meto": 12.59,
                "noaa": 10.1,
                "sg": 12.59
            },
            "time": "2023-02-10T10:00:00+00:00",
            "waveHeight": {
                "dwd": 0.85,
                "fcoo": 0.82,
                "icon": 0.72,
                "meteo": 0.6,
                "meto": 0.34,
                "noaa": 0.67,
                "sg": 0.82
            },
            "wavePeriod": {
                "fcoo": 3.67,
                "icon": 6.87,
                "meteo": 2.78,
                "meto": 4.62,
                "noaa": 10.1,
                "sg": 3.67
            },
            "windDirection": {
                "icon": 225.9,
                "noaa": 231.76,
                "sg": 225.9
            },
            "windSpeed": {
                "icon": 6.98,
                "noaa": 6.31,
                "sg": 6.98
            }
        },
        {
            "airTemperature": {
                "dwd": 6.44,
                "noaa": 5.16,
                "sg": 6.44
            },
            "swellHeight": {
                "dwd": 0.52,
                "icon": 0.5,
                "meteo": 0.28,
                "meto": 0.31,
                "noaa": 0.46,
                "sg": 0.31
            },
            "swellPeriod": {
                "dwd": 11.73,
                "icon": 10.5,
                "meteo": 8.16,
                "meto": 12.18,
                "noaa": 9.71,
                "sg": 12.18
            },
            "time": "2023-02-10T11:00:00+00:00",
            "waveHeight": {
                "dwd": 0.9,
                "fcoo": 1.02,
                "icon": 0.75,
                "meteo": 0.67,
                "meto": 0.34,
                "noaa": 0.7,
                "sg": 1.02
            },
            "wavePeriod": {
                "fcoo": 3.83,
                "icon": 6.32,
                "meteo": 2.82,
                "meto": 4.26,
                "noaa": 9.71,
                "sg": 3.83
            },
            "windDirection": {
                "icon": 227.34,
                "noaa": 235.93,
                "sg": 227.34
            },
            "windSpeed": {
                "icon": 7.18,
                "noaa": 6.61,
                "sg": 7.18
            }
        },
        {
            "airTemperature": {
                "dwd": 6.8,
                "noaa": 5.82,
                "sg": 6.8
            },
            "swellHeight": {
                "dwd": 0.5,
                "icon": 0.49,
                "meteo": 0.3,
                "meto": 0.31,
                "noaa": 0.48,
                "sg": 0.31
            },
            "swellPeriod": {
                "dwd": 11.54,
                "icon": 10.31,
                "meteo": 7.99,
                "meto": 11.82,
                "noaa": 9.32,
                "sg": 11.82
            },
            "time": "2023-02-10T12:00:00+00:00",
            "waveHeight": {
                "dwd": 0.93,
                "fcoo": 1.08,
                "icon": 0.79,
                "meteo": 0.73,
                "meto": 0.34,
                "noaa": 0.72,
                "sg": 1.08
            },
            "wavePeriod": {
                "fcoo": 3.92,
                "icon": 5.77,
                "meteo": 2.87,
                "meto": 4.07,
                "noaa": 9.32,
                "sg": 3.92
            },
            "windDirection": {
                "icon": 228.77,
                "noaa": 240.1,
                "sg": 228.77
            },
            "windSpeed": {
                "icon": 7.37,
                "noaa": 6.9,
                "sg": 7.37
            }
        },
        {
            "airTemperature": {
                "dwd": 7.31,
                "noaa": 6.64,
                "sg": 7.31
            },
            "swellHeight": {
                "dwd": 0.5,
                "icon": 0.48,
                "meteo": 0.31,
                "meto": 0.32,
                "noaa": 0.35,
                "sg": 0.32
            },
            "swellPeriod": {
                "dwd": 10.91,
                "icon": 10.04,
                "meteo": 7.8,
                "meto": 11.49,
                "noaa": 8.73,
                "sg": 11.49
            },
            "time": "2023-02-10T13:00:00+00:00",
            "waveHeight": {
                "dwd": 0.95,
                "fcoo": 1.07,
                "icon": 0.77,
                "meteo": 0.75,
                "meto": 0.36,
                "noaa": 0.76,
                "sg": 1.07
            },
            "wavePeriod": {
                "fcoo": 3.96,
                "icon": 5.71,
                "meteo": 2.93,
                "meto": 3.44,
                "noaa": 9.07,
                "sg": 3.96
            },
            "windDirection": {
                "icon": 233.41,
                "noaa": 247.94,
                "sg": 233.41
            },
            "windSpeed": {
                "icon": 7.22,
                "noaa": 7.36,
                "sg": 7.22
            }
        },
        {
            "airTemperature": {
                "dwd": 7.69,
                "noaa": 7.45,
                "sg": 7.69
            },
            "swellHeight": {
                "dwd": 0.51,
                "icon": 0.48,
                "meteo": 0.33,
                "meto": 0.28,
                "noaa": 0.23,
                "sg": 0.28
            },
            "swellPeriod": {
                "dwd": 10.26,
                "icon": 9.78,
                "meteo": 7.62,
                "meto": 10.21,
                "noaa": 8.14,
                "sg": 10.21
            },
            "time": "2023-02-10T14:00:00+00:00",
            "waveHeight": {
                "dwd": 0.91,
                "fcoo": 1.13,
                "icon": 0.76,
                "meteo": 0.78,
                "meto": 0.39,
                "noaa": 0.79,
                "sg": 1.13
            },
            "wavePeriod": {
                "fcoo": 4,
                "icon": 5.66,
                "meteo": 3,
                "meto": 2.8,
                "noaa": 8.81,
                "sg": 4
            },
            "windDirection": {
                "icon": 238.04,
                "noaa": 255.79,
                "sg": 238.04
            },
            "windSpeed": {
                "icon": 7.06,
                "noaa": 7.82,
                "sg": 7.06
            }
        },
        {
            "airTemperature": {
                "dwd": 8.01,
                "noaa": 8.26,
                "sg": 8.01
            },
            "swellHeight": {
                "dwd": 0.48,
                "icon": 0.47,
                "meteo": 0.34,
                "meto": 0.3,
                "noaa": 0.1,
                "sg": 0.3
            },
            "swellPeriod": {
                "dwd": 10.26,
                "icon": 9.51,
                "meteo": 7.43,
                "meto": 9.47,
                "noaa": 7.55,
                "sg": 9.47
            },
            "time": "2023-02-10T15:00:00+00:00",
            "waveHeight": {
                "dwd": 0.91,
                "fcoo": 1.27,
                "icon": 0.74,
                "meteo": 0.8,
                "meto": 0.41,
                "noaa": 0.83,
                "sg": 1.27
            },
            "wavePeriod": {
                "fcoo": 4.13,
                "icon": 5.6,
                "meteo": 3.06,
                "meto": 2.7,
                "noaa": 8.56,
                "sg": 4.13
            },
            "windDirection": {
                "icon": 242.68,
                "noaa": 263.63,
                "sg": 242.68
            },
            "windSpeed": {
                "icon": 6.91,
                "noaa": 8.28,
                "sg": 6.91
            }
        },
        {
            "airTemperature": {
                "dwd": 8.12,
                "noaa": 8.32,
                "sg": 8.12
            },
            "swellHeight": {
                "dwd": 0.48,
                "icon": 0.45,
                "meteo": 0.34,
                "meto": 0.31,
                "noaa": 0.09,
                "sg": 0.31
            },
            "swellPeriod": {
                "dwd": 9.71,
                "icon": 9.73,
                "meteo": 7.38,
                "meto": 9.45,
                "noaa": 6.51,
                "sg": 9.45
            },
            "time": "2023-02-10T16:00:00+00:00",
            "waveHeight": {
                "dwd": 0.87,
                "fcoo": 1.28,
                "icon": 0.81,
                "meteo": 0.79,
                "meto": 0.43,
                "noaa": 0.87,
                "sg": 1.28
            },
            "wavePeriod": {
                "fcoo": 4.13,
                "icon": 5.32,
                "meteo": 3.08,
                "meto": 2.7,
                "noaa": 7.91,
                "sg": 4.13
            },
            "windDirection": {
                "icon": 251.32,
                "noaa": 267.61,
                "sg": 251.32
            },
            "windSpeed": {
                "icon": 7.68,
                "noaa": 8.53,
                "sg": 7.68
            }
        },
        {
            "airTemperature": {
                "dwd": 8.45,
                "noaa": 8.37,
                "sg": 8.45
            },
            "swellHeight": {
                "dwd": 0.48,
                "icon": 0.43,
                "meteo": 0.35,
                "meto": 0.32,
                "noaa": 0.09,
                "sg": 0.32
            },
            "swellPeriod": {
                "dwd": 9.02,
                "icon": 9.95,
                "meteo": 7.34,
                "meto": 9.45,
                "noaa": 5.47,
                "sg": 9.45
            },
            "time": "2023-02-10T17:00:00+00:00",
            "waveHeight": {
                "dwd": 0.81,
                "fcoo": 1.27,
                "icon": 0.89,
                "meteo": 0.77,
                "meto": 0.45,
                "noaa": 0.9,
                "sg": 1.27
            },
            "wavePeriod": {
                "fcoo": 4.06,
                "icon": 5.03,
                "meteo": 3.11,
                "meto": 2.7,
                "noaa": 7.25,
                "sg": 4.06
            },
            "windDirection": {
                "icon": 259.95,
                "noaa": 271.58,
                "sg": 259.95
            },
            "windSpeed": {
                "icon": 8.46,
                "noaa": 8.79,
                "sg": 8.46
            }
        },
        {
            "airTemperature": {
                "dwd": 8.85,
                "noaa": 8.42,
                "sg": 8.85
            },
            "swellHeight": {
                "dwd": 0.5,
                "icon": 0.41,
                "meteo": 0.35,
                "meto": 0.33,
                "noaa": 0.08,
                "sg": 0.33
            },
            "swellPeriod": {
                "dwd": 8.17,
                "icon": 10.17,
                "meteo": 7.29,
                "meto": 9.44,
                "noaa": 4.43,
                "sg": 9.44
            },
            "time": "2023-02-10T18:00:00+00:00",
            "waveHeight": {
                "dwd": 0.8,
                "fcoo": 1.23,
                "icon": 0.96,
                "meteo": 0.76,
                "meto": 0.46,
                "noaa": 0.94,
                "sg": 1.23
            },
            "wavePeriod": {
                "fcoo": 3.99,
                "icon": 4.75,
                "meteo": 3.13,
                "meto": 2.72,
                "noaa": 6.6,
                "sg": 3.99
            },
            "windDirection": {
                "icon": 268.59,
                "noaa": 275.56,
                "sg": 268.59
            },
            "windSpeed": {
                "icon": 9.23,
                "noaa": 9.04,
                "sg": 9.23
            }
        },
        {
            "airTemperature": {
                "dwd": 8.9,
                "noaa": 8.39,
                "sg": 8.9
            },
            "swellHeight": {
                "dwd": 0.59,
                "icon": 0.44,
                "meteo": 0.34,
                "meto": 0.33,
                "noaa": 0.08,
                "sg": 0.33
            },
            "swellPeriod": {
                "dwd": 6.91,
                "icon": 9.66,
                "meteo": 7.09,
                "meto": 9.34,
                "noaa": 4.44,
                "sg": 9.34
            },
            "time": "2023-02-10T19:00:00+00:00",
            "waveHeight": {
                "dwd": 0.84,
                "fcoo": 1.21,
                "icon": 0.96,
                "meteo": 0.75,
                "meto": 0.45,
                "noaa": 0.94,
                "sg": 1.21
            },
            "wavePeriod": {
                "fcoo": 3.9,
                "icon": 4.87,
                "meteo": 3.15,
                "meto": 2.81,
                "noaa": 6.67,
                "sg": 3.9
            },
            "windDirection": {
                "icon": 268.57,
                "noaa": 274.22,
                "sg": 268.57
            },
            "windSpeed": {
                "icon": 8.75,
                "noaa": 8.83,
                "sg": 8.75
            }
        },
        {
            "airTemperature": {
                "dwd": 8.96,
                "noaa": 8.35,
                "sg": 8.96
            },
            "swellHeight": {
                "dwd": 0.66,
                "icon": 0.48,
                "meteo": 0.32,
                "meto": 0.32,
                "noaa": 0.09,
                "sg": 0.32
            },
            "swellPeriod": {
                "dwd": 6.51,
                "icon": 9.16,
                "meteo": 6.88,
                "meto": 9.01,
                "noaa": 4.44,
                "sg": 9.01
            },
            "time": "2023-02-10T20:00:00+00:00",
            "waveHeight": {
                "dwd": 0.92,
                "fcoo": 1.23,
                "icon": 0.95,
                "meteo": 0.74,
                "meto": 0.45,
                "noaa": 0.95,
                "sg": 1.23
            },
            "wavePeriod": {
                "fcoo": 3.88,
                "icon": 5,
                "meteo": 3.17,
                "meto": 2.81,
                "noaa": 6.74,
                "sg": 3.88
            },
            "windDirection": {
                "icon": 268.55,
                "noaa": 272.87,
                "sg": 268.55
            },
            "windSpeed": {
                "icon": 8.27,
                "noaa": 8.63,
                "sg": 8.27
            }
        },
        {
            "airTemperature": {
                "dwd": 8.97,
                "noaa": 8.32,
                "sg": 8.97
            },
            "swellHeight": {
                "dwd": 0.73,
                "icon": 0.51,
                "meteo": 0.31,
                "meto": 0.34,
                "noaa": 0.09,
                "sg": 0.34
            },
            "swellPeriod": {
                "dwd": 6.21,
                "icon": 8.65,
                "meteo": 6.68,
                "meto": 9.11,
                "noaa": 4.45,
                "sg": 9.11
            },
            "time": "2023-02-10T21:00:00+00:00",
            "waveHeight": {
                "dwd": 0.94,
                "fcoo": 1.27,
                "icon": 0.95,
                "meteo": 0.73,
                "meto": 0.45,
                "noaa": 0.95,
                "sg": 1.27
            },
            "wavePeriod": {
                "fcoo": 3.9,
                "icon": 5.12,
                "meteo": 3.19,
                "meto": 2.78,
                "noaa": 6.81,
                "sg": 3.9
            },
            "windDirection": {
                "icon": 268.53,
                "noaa": 271.53,
                "sg": 268.53
            },
            "windSpeed": {
                "icon": 7.79,
                "noaa": 8.42,
                "sg": 7.79
            }
        },
        {
            "airTemperature": {
                "dwd": 9,
                "noaa": 8.24,
                "sg": 9
            },
            "swellHeight": {
                "dwd": 0.75,
                "icon": 0.55,
                "meteo": 0.29,
                "meto": 0.33,
                "noaa": 0.12,
                "sg": 0.33
            },
            "swellPeriod": {
                "dwd": 6.14,
                "icon": 8.32,
                "meteo": 7.35,
                "meto": 8.91,
                "noaa": 6.74,
                "sg": 8.91
            },
            "time": "2023-02-10T22:00:00+00:00",
            "waveHeight": {
                "dwd": 0.94,
                "fcoo": 1.33,
                "icon": 0.9,
                "meteo": 0.71,
                "meto": 0.44,
                "noaa": 0.94,
                "sg": 1.33
            },
            "wavePeriod": {
                "fcoo": 3.95,
                "icon": 5.35,
                "meteo": 3.19,
                "meto": 2.75,
                "noaa": 6.82,
                "sg": 3.95
            },
            "windDirection": {
                "icon": 265.91,
                "noaa": 270.49,
                "sg": 265.91
            },
            "windSpeed": {
                "icon": 7.34,
                "noaa": 7.87,
                "sg": 7.34
            }
        },
        {
            "airTemperature": {
                "dwd": 8.86,
                "noaa": 8.15,
                "sg": 8.86
            },
            "swellHeight": {
                "dwd": 0.77,
                "icon": 0.58,
                "meteo": 0.27,
                "meto": 0.37,
                "noaa": 0.15,
                "sg": 0.37
            },
            "swellPeriod": {
                "dwd": 5.93,
                "icon": 8,
                "meteo": 8.01,
                "meto": 9.45,
                "noaa": 9.02,
                "sg": 9.45
            },
            "time": "2023-02-10T23:00:00+00:00",
            "waveHeight": {
                "dwd": 0.89,
                "fcoo": 1.39,
                "icon": 0.86,
                "meteo": 0.68,
                "meto": 0.44,
                "noaa": 0.92,
                "sg": 1.39
            },
            "wavePeriod": {
                "fcoo": 4.01,
                "icon": 5.58,
                "meteo": 3.18,
                "meto": 2.78,
                "noaa": 6.84,
                "sg": 4.01
            },
            "windDirection": {
                "icon": 263.29,
                "noaa": 269.45,
                "sg": 263.29
            },
            "windSpeed": {
                "icon": 6.89,
                "noaa": 7.32,
                "sg": 6.89
            }
        },
        {
            "airTemperature": {
                "dwd": 8.7,
                "noaa": 8.06,
                "sg": 8.7
            },
            "swellHeight": {
                "dwd": 0.76,
                "icon": 0.62,
                "meteo": 0.25,
                "meto": 0.39,
                "noaa": 0.18,
                "sg": 0.39
            },
            "swellPeriod": {
                "dwd": 5.9,
                "icon": 7.67,
                "meteo": 8.68,
                "meto": 8.73,
                "noaa": 11.31,
                "sg": 8.73
            },
            "time": "2023-02-11T00:00:00+00:00",
            "waveHeight": {
                "dwd": 0.82,
                "fcoo": 1.42,
                "icon": 0.81,
                "meteo": 0.66,
                "meto": 0.41,
                "noaa": 0.91,
                "sg": 1.42
            },
            "wavePeriod": {
                "fcoo": 4.08,
                "icon": 5.81,
                "meteo": 3.18,
                "meto": 4.05,
                "noaa": 6.85,
                "sg": 4.08
            },
            "windDirection": {
                "icon": 260.67,
                "noaa": 268.41,
                "sg": 260.67
            },
            "windSpeed": {
                "icon": 6.44,
                "noaa": 6.77,
                "sg": 6.44
            }
        },
        {
            "airTemperature": {
                "dwd": 8.39,
                "noaa": 7.52,
                "sg": 8.39
            },
            "swellHeight": {
                "dwd": 0.75,
                "icon": 0.64,
                "meteo": 0.26,
                "meto": 0.39,
                "noaa": 0.19,
                "sg": 0.39
            },
            "swellPeriod": {
                "dwd": 5.96,
                "icon": 7.53,
                "meteo": 8.27,
                "meto": 8.76,
                "noaa": 11.65,
                "sg": 8.76
            },
            "time": "2023-02-11T01:00:00+00:00",
            "waveHeight": {
                "dwd": 0.77,
                "fcoo": 1.38,
                "icon": 0.78,
                "meteo": 0.65,
                "meto": 0.41,
                "noaa": 0.86,
                "sg": 1.38
            },
            "wavePeriod": {
                "fcoo": 4.11,
                "icon": 6.21,
                "meteo": 3.16,
                "meto": 4.05,
                "noaa": 7.05,
                "sg": 4.11
            },
            "windDirection": {
                "icon": 254.92,
                "noaa": 265.47,
                "sg": 254.92
            },
            "windSpeed": {
                "icon": 5.59,
                "noaa": 6.02,
                "sg": 5.59
            }
        },
        {
            "airTemperature": {
                "dwd": 8.04,
                "noaa": 6.98,
                "sg": 8.04
            },
            "swellHeight": {
                "dwd": 0.73,
                "icon": 0.67,
                "meteo": 0.28,
                "meto": 0.38,
                "noaa": 0.21,
                "sg": 0.38
            },
            "swellPeriod": {
                "dwd": 6.23,
                "icon": 7.39,
                "meteo": 7.86,
                "meto": 8.82,
                "noaa": 11.99,
                "sg": 8.82
            },
            "time": "2023-02-11T02:00:00+00:00",
            "waveHeight": {
                "dwd": 0.74,
                "fcoo": 1.25,
                "icon": 0.74,
                "meteo": 0.65,
                "meto": 0.41,
                "noaa": 0.82,
                "sg": 1.25
            },
            "wavePeriod": {
                "fcoo": 4.09,
                "icon": 6.61,
                "meteo": 3.14,
                "meto": 3.98,
                "noaa": 7.26,
                "sg": 4.09
            },
            "windDirection": {
                "icon": 249.17,
                "noaa": 262.54,
                "sg": 249.17
            },
            "windSpeed": {
                "icon": 4.75,
                "noaa": 5.26,
                "sg": 4.75
            }
        },
        {
            "airTemperature": {
                "dwd": 7.84,
                "noaa": 6.44,
                "sg": 7.84
            },
            "swellHeight": {
                "dwd": 0.73,
                "icon": 0.69,
                "meteo": 0.29,
                "meto": 0.39,
                "noaa": 0.22,
                "sg": 0.39
            },
            "swellPeriod": {
                "dwd": 6.52,
                "icon": 7.25,
                "meteo": 7.45,
                "meto": 8.87,
                "noaa": 12.33,
                "sg": 8.87
            },
            "time": "2023-02-11T03:00:00+00:00",
            "waveHeight": {
                "dwd": 0.74,
                "fcoo": 1.11,
                "icon": 0.71,
                "meteo": 0.64,
                "meto": 0.41,
                "noaa": 0.77,
                "sg": 1.11
            },
            "wavePeriod": {
                "fcoo": 4.06,
                "icon": 7.01,
                "meteo": 3.12,
                "meto": 3.99,
                "noaa": 7.46,
                "sg": 4.06
            },
            "windDirection": {
                "icon": 243.42,
                "noaa": 259.6,
                "sg": 243.42
            },
            "windSpeed": {
                "icon": 3.9,
                "noaa": 4.51,
                "sg": 3.9
            }
        },
        {
            "airTemperature": {
                "dwd": 7.7,
                "noaa": 6.09,
                "sg": 7.7
            },
            "swellHeight": {
                "dwd": 0.73,
                "icon": 0.68,
                "meteo": 0.31,
                "meto": 0.39,
                "noaa": 0.24,
                "sg": 0.39
            },
            "swellPeriod": {
                "dwd": 6.85,
                "icon": 7.52,
                "meteo": 6.4,
                "meto": 8.85,
                "noaa": 11.86,
                "sg": 8.85
            },
            "time": "2023-02-11T04:00:00+00:00",
            "waveHeight": {
                "dwd": 0.74,
                "fcoo": 1.02,
                "icon": 0.69,
                "meteo": 0.66,
                "meto": 0.41,
                "noaa": 0.76,
                "sg": 1.02
            },
            "wavePeriod": {
                "fcoo": 4.15,
                "icon": 7.32,
                "meteo": 3.12,
                "meto": 3.96,
                "noaa": 7.93,
                "sg": 4.15
            },
            "windDirection": {
                "icon": 241.34,
                "noaa": 257.13,
                "sg": 241.34
            },
            "windSpeed": {
                "icon": 3.72,
                "noaa": 4.45,
                "sg": 3.72
            }
        },
        {
            "airTemperature": {
                "dwd": 7.58,
                "noaa": 5.75,
                "sg": 7.58
            },
            "swellHeight": {
                "dwd": 0.72,
                "icon": 0.67,
                "meteo": 0.33,
                "meto": 0.39,
                "noaa": 0.27,
                "sg": 0.39
            },
            "swellPeriod": {
                "dwd": 7.23,
                "icon": 7.8,
                "meteo": 5.34,
                "meto": 8.9,
                "noaa": 11.38,
                "sg": 8.9
            },
            "time": "2023-02-11T05:00:00+00:00",
            "waveHeight": {
                "dwd": 0.73,
                "fcoo": 0.97,
                "icon": 0.68,
                "meteo": 0.68,
                "meto": 0.42,
                "noaa": 0.74,
                "sg": 0.97
            },
            "wavePeriod": {
                "fcoo": 4.27,
                "icon": 7.64,
                "meteo": 3.13,
                "meto": 3.98,
                "noaa": 8.4,
                "sg": 4.27
            },
            "windDirection": {
                "icon": 239.27,
                "noaa": 254.66,
                "sg": 239.27
            },
            "windSpeed": {
                "icon": 3.53,
                "noaa": 4.38,
                "sg": 3.53
            }
        },
        {
            "airTemperature": {
                "dwd": 7.42,
                "noaa": 5.4,
                "sg": 7.42
            },
            "swellHeight": {
                "dwd": 0.71,
                "icon": 0.66,
                "meteo": 0.35,
                "meto": 0.4,
                "noaa": 0.29,
                "sg": 0.4
            },
            "swellPeriod": {
                "dwd": 7.61,
                "icon": 8.07,
                "meteo": 4.29,
                "meto": 8.72,
                "noaa": 10.91,
                "sg": 8.72
            },
            "time": "2023-02-11T06:00:00+00:00",
            "waveHeight": {
                "dwd": 0.74,
                "fcoo": 0.95,
                "icon": 0.66,
                "meteo": 0.7,
                "meto": 0.43,
                "noaa": 0.73,
                "sg": 0.95
            },
            "wavePeriod": {
                "fcoo": 4.28,
                "icon": 7.95,
                "meteo": 3.13,
                "meto": 4.08,
                "noaa": 8.87,
                "sg": 4.28
            },
            "windDirection": {
                "icon": 237.19,
                "noaa": 252.19,
                "sg": 237.19
            },
            "windSpeed": {
                "icon": 3.35,
                "noaa": 4.32,
                "sg": 3.35
            }
        },
        {
            "airTemperature": {
                "dwd": 7.17,
                "noaa": 5.71,
                "sg": 7.17
            },
            "swellHeight": {
                "dwd": 0.71,
                "icon": 0.65,
                "meteo": 0.35,
                "meto": 0.42,
                "noaa": 0.29,
                "sg": 0.42
            },
            "swellPeriod": {
                "dwd": 7.94,
                "icon": 8.32,
                "meteo": 5.77,
                "meto": 8.32,
                "noaa": 10.19,
                "sg": 8.32
            },
            "time": "2023-02-11T07:00:00+00:00",
            "waveHeight": {
                "dwd": 0.75,
                "icon": 0.66,
                "meteo": 0.71,
                "meto": 0.45,
                "noaa": 0.75,
                "sg": 0.45
            },
            "wavePeriod": {
                "icon": 8.04,
                "meteo": 3.16,
                "meto": 4.06,
                "noaa": 10.04,
                "sg": 4.06
            },
            "windDirection": {
                "icon": 239.88,
                "noaa": 257.16,
                "sg": 239.88
            },
            "windSpeed": {
                "icon": 3.78,
                "noaa": 4.41,
                "sg": 3.78
            }
        },
        {
            "airTemperature": {
                "dwd": 6.83,
                "noaa": 6.02,
                "sg": 6.83
            },
            "swellHeight": {
                "dwd": 0.7,
                "icon": 0.63,
                "meteo": 0.34,
                "meto": 0.44,
                "noaa": 0.28,
                "sg": 0.44
            },
            "swellPeriod": {
                "dwd": 8.2,
                "icon": 8.57,
                "meteo": 7.26,
                "meto": 8.06,
                "noaa": 9.46,
                "sg": 8.06
            },
            "time": "2023-02-11T08:00:00+00:00",
            "waveHeight": {
                "dwd": 0.77,
                "icon": 0.65,
                "meteo": 0.72,
                "meto": 0.46,
                "noaa": 0.76,
                "sg": 0.46
            },
            "wavePeriod": {
                "icon": 8.13,
                "meteo": 3.18,
                "meto": 3.93,
                "noaa": 11.21,
                "sg": 3.93
            },
            "windDirection": {
                "icon": 242.56,
                "noaa": 262.14,
                "sg": 242.56
            },
            "windSpeed": {
                "icon": 4.21,
                "noaa": 4.49,
                "sg": 4.21
            }
        },
        {
            "airTemperature": {
                "dwd": 6.97,
                "noaa": 6.33,
                "sg": 6.97
            },
            "swellHeight": {
                "dwd": 0.69,
                "icon": 0.62,
                "meteo": 0.34,
                "meto": 0.45,
                "noaa": 0.28,
                "sg": 0.45
            },
            "swellPeriod": {
                "dwd": 8.39,
                "icon": 8.82,
                "meteo": 8.74,
                "meto": 8.12,
                "noaa": 8.74,
                "sg": 8.12
            },
            "time": "2023-02-11T09:00:00+00:00",
            "waveHeight": {
                "dwd": 0.78,
                "icon": 0.65,
                "meteo": 0.73,
                "meto": 0.48,
                "noaa": 0.78,
                "sg": 0.48
            },
            "wavePeriod": {
                "icon": 8.22,
                "meteo": 3.21,
                "meto": 3.75,
                "noaa": 12.38,
                "sg": 3.75
            },
            "windDirection": {
                "icon": 245.25,
                "noaa": 267.11,
                "sg": 245.25
            },
            "windSpeed": {
                "icon": 4.64,
                "noaa": 4.58,
                "sg": 4.64
            }
        },
        {
            "airTemperature": {
                "dwd": 7.55,
                "noaa": 7.58,
                "sg": 7.55
            },
            "swellHeight": {
                "dwd": 0.69,
                "icon": 0.61,
                "meteo": 0.35,
                "meto": 0.45,
                "noaa": 0.39,
                "sg": 0.45
            },
            "swellPeriod": {
                "dwd": 8.48,
                "icon": 9.08,
                "meteo": 7.31,
                "meto": 8.35,
                "noaa": 7.92,
                "sg": 8.35
            },
            "time": "2023-02-11T10:00:00+00:00",
            "waveHeight": {
                "dwd": 0.78,
                "icon": 0.67,
                "meteo": 0.71,
                "meto": 0.5,
                "noaa": 0.78,
                "sg": 0.5
            },
            "wavePeriod": {
                "icon": 7.9,
                "meteo": 3.29,
                "meto": 3.7,
                "noaa": 12.15,
                "sg": 3.7
            },
            "windDirection": {
                "icon": 251.3,
                "noaa": 270.97,
                "sg": 251.3
            },
            "windSpeed": {
                "icon": 5.26,
                "noaa": 4.73,
                "sg": 5.26
            }
        },
        {
            "airTemperature": {
                "dwd": 8.1,
                "noaa": 8.84,
                "sg": 8.1
            },
            "swellHeight": {
                "dwd": 0.69,
                "icon": 0.6,
                "meteo": 0.37,
                "meto": 0.41,
                "noaa": 0.49,
                "sg": 0.41
            },
            "swellPeriod": {
                "dwd": 8.46,
                "icon": 9.35,
                "meteo": 5.87,
                "meto": 9.6,
                "noaa": 7.11,
                "sg": 9.6
            },
            "time": "2023-02-11T11:00:00+00:00",
            "waveHeight": {
                "dwd": 0.76,
                "icon": 0.7,
                "meteo": 0.68,
                "meto": 0.52,
                "noaa": 0.78,
                "sg": 0.52
            },
            "wavePeriod": {
                "icon": 7.59,
                "meteo": 3.36,
                "meto": 3.7,
                "noaa": 11.91,
                "sg": 3.7
            },
            "windDirection": {
                "icon": 257.36,
                "noaa": 274.84,
                "sg": 257.36
            },
            "windSpeed": {
                "icon": 5.87,
                "noaa": 4.89,
                "sg": 5.87
            }
        },
        {
            "airTemperature": {
                "dwd": 8.53,
                "noaa": 10.09,
                "sg": 8.53
            },
            "swellHeight": {
                "dwd": 0.69,
                "icon": 0.59,
                "meteo": 0.38,
                "meto": 0.4,
                "noaa": 0.6,
                "sg": 0.4
            },
            "swellPeriod": {
                "dwd": 8.37,
                "icon": 9.61,
                "meteo": 4.44,
                "meto": 9.62,
                "noaa": 6.29,
                "sg": 9.62
            },
            "time": "2023-02-11T12:00:00+00:00",
            "waveHeight": {
                "dwd": 0.72,
                "icon": 0.72,
                "meteo": 0.66,
                "meto": 0.52,
                "noaa": 0.78,
                "sg": 0.52
            },
            "wavePeriod": {
                "icon": 7.27,
                "meteo": 3.44,
                "meto": 3.71,
                "noaa": 11.68,
                "sg": 3.71
            },
            "windDirection": {
                "icon": 263.41,
                "noaa": 278.7,
                "sg": 263.41
            },
            "windSpeed": {
                "icon": 6.49,
                "noaa": 5.04,
                "sg": 6.49
            }
        },
        {
            "airTemperature": {
                "dwd": 8.81,
                "noaa": 10.29,
                "sg": 8.81
            },
            "swellHeight": {
                "dwd": 0.68,
                "icon": 0.61,
                "meteo": 0.38,
                "meto": 0.4,
                "noaa": 0.59,
                "sg": 0.4
            },
            "swellPeriod": {
                "dwd": 8.41,
                "icon": 9.51,
                "meteo": 4.4,
                "meto": 9.67,
                "noaa": 7.89,
                "sg": 9.67
            },
            "time": "2023-02-11T13:00:00+00:00",
            "waveHeight": {
                "dwd": 0.7,
                "icon": 0.73,
                "meteo": 0.64,
                "meto": 0.52,
                "noaa": 0.77,
                "sg": 0.52
            },
            "wavePeriod": {
                "icon": 7.34,
                "meteo": 3.64,
                "meto": 4.02,
                "noaa": 11.49,
                "sg": 4.02
            },
            "windDirection": {
                "icon": 265.05,
                "noaa": 273.52,
                "sg": 265.05
            },
            "windSpeed": {
                "icon": 6.13,
                "noaa": 4.59,
                "sg": 6.13
            }
        },
        {
            "airTemperature": {
                "dwd": 9.08,
                "noaa": 10.49,
                "sg": 9.08
            },
            "swellHeight": {
                "dwd": 0.69,
                "icon": 0.62,
                "meteo": 0.39,
                "meto": 0.39,
                "noaa": 0.57,
                "sg": 0.39
            },
            "swellPeriod": {
                "dwd": 8.39,
                "icon": 9.41,
                "meteo": 4.36,
                "meto": 9.55,
                "noaa": 9.5,
                "sg": 9.55
            },
            "time": "2023-02-11T14:00:00+00:00",
            "waveHeight": {
                "dwd": 0.7,
                "icon": 0.74,
                "meteo": 0.61,
                "meto": 0.51,
                "noaa": 0.75,
                "sg": 0.51
            },
            "wavePeriod": {
                "icon": 7.41,
                "meteo": 3.84,
                "meto": 4.53,
                "noaa": 11.29,
                "sg": 4.53
            },
            "windDirection": {
                "icon": 266.69,
                "noaa": 268.34,
                "sg": 266.69
            },
            "windSpeed": {
                "icon": 5.76,
                "noaa": 4.15,
                "sg": 5.76
            }
        },
        {
            "airTemperature": {
                "dwd": 9.29,
                "noaa": 10.68,
                "sg": 9.29
            },
            "swellHeight": {
                "dwd": 0.69,
                "icon": 0.64,
                "meteo": 0.39,
                "meto": 0.45,
                "noaa": 0.56,
                "sg": 0.45
            },
            "swellPeriod": {
                "dwd": 8.45,
                "icon": 9.31,
                "meteo": 4.32,
                "meto": 7.9,
                "noaa": 11.1,
                "sg": 7.9
            },
            "time": "2023-02-11T15:00:00+00:00",
            "waveHeight": {
                "dwd": 0.69,
                "icon": 0.75,
                "meteo": 0.59,
                "meto": 0.5,
                "noaa": 0.74,
                "sg": 0.5
            },
            "wavePeriod": {
                "icon": 7.48,
                "meteo": 4.04,
                "meto": 5.29,
                "noaa": 11.1,
                "sg": 5.29
            },
            "windDirection": {
                "icon": 268.33,
                "noaa": 263.16,
                "sg": 268.33
            },
            "windSpeed": {
                "icon": 5.4,
                "noaa": 3.7,
                "sg": 5.4
            }
        },
        {
            "airTemperature": {
                "dwd": 9.25,
                "noaa": 9.16,
                "sg": 9.25
            },
            "swellHeight": {
                "dwd": 0.67,
                "icon": 0.65,
                "meteo": 0.39,
                "meto": 0.44,
                "noaa": 0.6,
                "sg": 0.44
            },
            "swellPeriod": {
                "dwd": 8.82,
                "icon": 9.46,
                "meteo": 5.85,
                "meto": 7.82,
                "noaa": 10.93,
                "sg": 7.82
            },
            "time": "2023-02-11T16:00:00+00:00",
            "waveHeight": {
                "dwd": 0.67,
                "icon": 0.73,
                "meteo": 0.58,
                "meto": 0.49,
                "noaa": 0.73,
                "sg": 0.49
            },
            "wavePeriod": {
                "icon": 8.19,
                "meteo": 3.95,
                "meto": 6.06,
                "noaa": 10.93,
                "sg": 6.06
            },
            "windDirection": {
                "icon": 260.29,
                "noaa": 258.21,
                "sg": 260.29
            },
            "windSpeed": {
                "icon": 4.69,
                "noaa": 3.53,
                "sg": 4.69
            }
        },
        {
            "airTemperature": {
                "dwd": 9.01,
                "noaa": 7.64,
                "sg": 9.01
            },
            "swellHeight": {
                "dwd": 0.66,
                "icon": 0.66,
                "meteo": 0.4,
                "meto": 0.4,
                "noaa": 0.63,
                "sg": 0.4
            },
            "swellPeriod": {
                "dwd": 9.3,
                "icon": 9.61,
                "meteo": 7.38,
                "meto": 9.32,
                "noaa": 10.76,
                "sg": 9.32
            },
            "time": "2023-02-11T17:00:00+00:00",
            "waveHeight": {
                "dwd": 0.66,
                "icon": 0.7,
                "meteo": 0.58,
                "meto": 0.49,
                "noaa": 0.73,
                "sg": 0.49
            },
            "wavePeriod": {
                "icon": 8.91,
                "meteo": 3.85,
                "meto": 6.51,
                "noaa": 10.76,
                "sg": 6.51
            },
            "windDirection": {
                "icon": 252.26,
                "noaa": 253.25,
                "sg": 252.26
            },
            "windSpeed": {
                "icon": 3.99,
                "noaa": 3.37,
                "sg": 3.99
            }
        },
        {
            "airTemperature": {
                "dwd": 8.65,
                "noaa": 6.12,
                "sg": 8.65
            },
            "swellHeight": {
                "dwd": 0.65,
                "icon": 0.67,
                "meteo": 0.4,
                "meto": 0.38,
                "noaa": 0.67,
                "sg": 0.38
            },
            "swellPeriod": {
                "dwd": 9.71,
                "icon": 9.76,
                "meteo": 8.91,
                "meto": 9.21,
                "noaa": 10.59,
                "sg": 9.21
            },
            "time": "2023-02-11T18:00:00+00:00",
            "waveHeight": {
                "dwd": 0.65,
                "icon": 0.68,
                "meteo": 0.57,
                "meto": 0.49,
                "noaa": 0.72,
                "sg": 0.49
            },
            "wavePeriod": {
                "icon": 9.62,
                "meteo": 3.76,
                "meto": 6.77,
                "noaa": 10.59,
                "sg": 6.77
            },
            "windDirection": {
                "icon": 244.22,
                "noaa": 248.3,
                "sg": 244.22
            },
            "windSpeed": {
                "icon": 3.28,
                "noaa": 3.2,
                "sg": 3.28
            }
        },
        {
            "airTemperature": {
                "dwd": 8.37,
                "noaa": 5.65,
                "sg": 8.37
            },
            "swellHeight": {
                "dwd": 0.64,
                "icon": 0.67,
                "meteo": 0.41,
                "meto": 0.39,
                "noaa": 0.68,
                "sg": 0.39
            },
            "swellPeriod": {
                "dwd": 10.13,
                "icon": 10.21,
                "meteo": 9.02,
                "meto": 8.76,
                "noaa": 10.52,
                "sg": 8.76
            },
            "time": "2023-02-11T19:00:00+00:00",
            "waveHeight": {
                "dwd": 0.65,
                "icon": 0.68,
                "meteo": 0.56,
                "meto": 0.49,
                "noaa": 0.71,
                "sg": 0.49
            },
            "wavePeriod": {
                "icon": 10.09,
                "meteo": 3.81,
                "meto": 7.1,
                "noaa": 10.52,
                "sg": 7.1
            },
            "windDirection": {
                "icon": 245.95,
                "noaa": 254.23,
                "sg": 245.95
            },
            "windSpeed": {
                "icon": 3.19,
                "noaa": 3.09,
                "sg": 3.19
            }
        },
        {
            "airTemperature": {
                "dwd": 8.06,
                "noaa": 5.18,
                "sg": 8.06
            },
            "swellHeight": {
                "dwd": 0.64,
                "icon": 0.67,
                "meteo": 0.41,
                "meto": 0.42,
                "noaa": 0.69,
                "sg": 0.42
            },
            "swellPeriod": {
                "dwd": 10.45,
                "icon": 10.66,
                "meteo": 9.12,
                "meto": 7.42,
                "noaa": 10.46,
                "sg": 7.42
            },
            "time": "2023-02-11T20:00:00+00:00",
            "waveHeight": {
                "dwd": 0.65,
                "icon": 0.67,
                "meteo": 0.56,
                "meto": 0.51,
                "noaa": 0.71,
                "sg": 0.51
            },
            "wavePeriod": {
                "icon": 10.56,
                "meteo": 3.87,
                "meto": 7.43,
                "noaa": 10.46,
                "sg": 7.43
            },
            "windDirection": {
                "icon": 247.68,
                "noaa": 260.16,
                "sg": 247.68
            },
            "windSpeed": {
                "icon": 3.1,
                "noaa": 2.98,
                "sg": 3.1
            }
        },
        {
            "airTemperature": {
                "dwd": 7.89,
                "noaa": 4.71,
                "sg": 7.89
            },
            "swellHeight": {
                "dwd": 0.65,
                "icon": 0.67,
                "meteo": 0.42,
                "meto": 0.43,
                "noaa": 0.7,
                "sg": 0.43
            },
            "swellPeriod": {
                "dwd": 10.62,
                "icon": 11.11,
                "meteo": 9.23,
                "meto": 7.57,
                "noaa": 10.39,
                "sg": 7.57
            },
            "time": "2023-02-11T21:00:00+00:00",
            "waveHeight": {
                "dwd": 0.65,
                "icon": 0.67,
                "meteo": 0.55,
                "meto": 0.52,
                "noaa": 0.7,
                "sg": 0.52
            },
            "wavePeriod": {
                "icon": 11.03,
                "meteo": 3.92,
                "meto": 7.77,
                "noaa": 10.39,
                "sg": 7.77
            },
            "windDirection": {
                "icon": 249.41,
                "noaa": 266.09,
                "sg": 249.41
            },
            "windSpeed": {
                "icon": 3.01,
                "noaa": 2.87,
                "sg": 3.01
            }
        },
        {
            "airTemperature": {
                "dwd": 7.69,
                "noaa": 4.53,
                "sg": 7.69
            },
            "swellHeight": {
                "dwd": 0.65,
                "icon": 0.67,
                "meteo": 0.43,
                "meto": 0.43,
                "noaa": 0.7,
                "sg": 0.43
            },
            "swellPeriod": {
                "dwd": 10.95,
                "icon": 11.34,
                "meteo": 9.28,
                "meto": 7.59,
                "noaa": 10.25,
                "sg": 7.59
            },
            "time": "2023-02-11T22:00:00+00:00",
            "waveHeight": {
                "dwd": 0.65,
                "icon": 0.67,
                "meteo": 0.56,
                "meto": 0.54,
                "noaa": 0.7,
                "sg": 0.54
            },
            "wavePeriod": {
                "icon": 11.25,
                "meteo": 3.87,
                "meto": 8.05,
                "noaa": 10.25,
                "sg": 8.05
            },
            "windDirection": {
                "icon": 249.64,
                "noaa": 262.26,
                "sg": 249.64
            },
            "windSpeed": {
                "icon": 3.01,
                "noaa": 2.9,
                "sg": 3.01
            }
        },
        {
            "airTemperature": {
                "dwd": 7.52,
                "noaa": 4.35,
                "sg": 7.52
            },
            "swellHeight": {
                "dwd": 0.66,
                "icon": 0.67,
                "meteo": 0.45,
                "meto": 0.42,
                "noaa": 0.71,
                "sg": 0.42
            },
            "swellPeriod": {
                "dwd": 11.25,
                "icon": 11.57,
                "meteo": 9.32,
                "meto": 7.46,
                "noaa": 10.12,
                "sg": 7.46
            },
            "time": "2023-02-11T23:00:00+00:00",
            "waveHeight": {
                "dwd": 0.66,
                "icon": 0.68,
                "meteo": 0.57,
                "meto": 0.56,
                "noaa": 0.71,
                "sg": 0.56
            },
            "wavePeriod": {
                "icon": 11.48,
                "meteo": 3.82,
                "meto": 8.27,
                "noaa": 10.12,
                "sg": 8.27
            },
            "windDirection": {
                "icon": 249.88,
                "noaa": 258.44,
                "sg": 249.88
            },
            "windSpeed": {
                "icon": 3.02,
                "noaa": 2.92,
                "sg": 3.02
            }
        },
        {
            "airTemperature": {
                "dwd": 7.43,
                "noaa": 4.17,
                "sg": 7.43
            },
            "swellHeight": {
                "dwd": 0.67,
                "icon": 0.67,
                "meteo": 0.46,
                "meto": 0.48,
                "noaa": 0.71,
                "sg": 0.48
            },
            "swellPeriod": {
                "dwd": 11.42,
                "icon": 11.8,
                "meteo": 9.37,
                "meto": 8.58,
                "noaa": 9.98,
                "sg": 8.58
            },
            "time": "2023-02-12T00:00:00+00:00",
            "waveHeight": {
                "dwd": 0.67,
                "icon": 0.68,
                "meteo": 0.58,
                "meto": 0.54,
                "noaa": 0.71,
                "sg": 0.54
            },
            "wavePeriod": {
                "icon": 11.7,
                "meteo": 3.77,
                "meto": 8.59,
                "noaa": 9.98,
                "sg": 8.59
            },
            "windDirection": {
                "icon": 250.11,
                "noaa": 254.61,
                "sg": 250.11
            },
            "windSpeed": {
                "icon": 3.02,
                "noaa": 2.95,
                "sg": 3.02
            }
        },
        {
            "airTemperature": {
                "dwd": 7.32,
                "noaa": 4.03,
                "sg": 7.32
            },
            "swellHeight": {
                "dwd": 0.69,
                "icon": 0.67,
                "meteo": 0.49,
                "meto": 0.55,
                "noaa": 0.69,
                "sg": 0.55
            },
            "swellPeriod": {
                "dwd": 11.57,
                "icon": 11.87,
                "meteo": 9.19,
                "meto": 9.59,
                "noaa": 9.96,
                "sg": 9.59
            },
            "time": "2023-02-12T01:00:00+00:00",
            "waveHeight": {
                "dwd": 0.69,
                "icon": 0.68,
                "meteo": 0.59,
                "meto": 0.55,
                "noaa": 0.72,
                "sg": 0.55
            },
            "wavePeriod": {
                "icon": 11.77,
                "meteo": 3.89,
                "meto": 8.75,
                "noaa": 10.84,
                "sg": 8.75
            },
            "windDirection": {
                "icon": 249.39,
                "noaa": 255.6,
                "sg": 249.39
            },
            "windSpeed": {
                "icon": 3.07,
                "noaa": 2.86,
                "sg": 3.07
            }
        },
        {
            "airTemperature": {
                "dwd": 7.17,
                "noaa": 3.89,
                "sg": 7.17
            },
            "swellHeight": {
                "dwd": 0.7,
                "icon": 0.67,
                "meteo": 0.51,
                "meto": 0.56,
                "noaa": 0.67,
                "sg": 0.56
            },
            "swellPeriod": {
                "dwd": 11.65,
                "icon": 11.95,
                "meteo": 9.02,
                "meto": 9.71,
                "noaa": 9.95,
                "sg": 9.71
            },
            "time": "2023-02-12T02:00:00+00:00",
            "waveHeight": {
                "dwd": 0.7,
                "icon": 0.68,
                "meteo": 0.6,
                "meto": 0.56,
                "noaa": 0.74,
                "sg": 0.56
            },
            "wavePeriod": {
                "icon": 11.84,
                "meteo": 4,
                "meto": 8.91,
                "noaa": 11.69,
                "sg": 8.91
            },
            "windDirection": {
                "icon": 248.68,
                "noaa": 256.59,
                "sg": 248.68
            },
            "windSpeed": {
                "icon": 3.12,
                "noaa": 2.78,
                "sg": 3.12
            }
        },
        {
            "airTemperature": {
                "dwd": 7,
                "noaa": 3.76,
                "sg": 7
            },
            "swellHeight": {
                "dwd": 0.72,
                "icon": 0.67,
                "meteo": 0.54,
                "meto": 0.58,
                "noaa": 0.65,
                "sg": 0.58
            },
            "swellPeriod": {
                "dwd": 11.71,
                "icon": 12.02,
                "meteo": 8.84,
                "meto": 9.83,
                "noaa": 9.93,
                "sg": 9.83
            },
            "time": "2023-02-12T03:00:00+00:00",
            "waveHeight": {
                "dwd": 0.72,
                "icon": 0.68,
                "meteo": 0.61,
                "meto": 0.58,
                "noaa": 0.75,
                "sg": 0.58
            },
            "wavePeriod": {
                "icon": 11.91,
                "meteo": 4.12,
                "meto": 9.06,
                "noaa": 12.55,
                "sg": 9.06
            },
            "windDirection": {
                "icon": 247.96,
                "noaa": 257.58,
                "sg": 247.96
            },
            "windSpeed": {
                "icon": 3.17,
                "noaa": 2.69,
                "sg": 3.17
            }
        },
        {
            "airTemperature": {
                "dwd": 6.8,
                "noaa": 3.76,
                "sg": 6.8
            },
            "swellHeight": {
                "dwd": 0.73,
                "icon": 0.67,
                "meteo": 0.55,
                "meto": 0.6,
                "noaa": 0.67,
                "sg": 0.6
            },
            "swellPeriod": {
                "dwd": 11.73,
                "icon": 11.96,
                "meteo": 9.01,
                "meto": 9.97,
                "noaa": 10.66,
                "sg": 9.97
            },
            "time": "2023-02-12T04:00:00+00:00",
            "waveHeight": {
                "dwd": 0.74,
                "icon": 0.68,
                "meteo": 0.62,
                "meto": 0.6,
                "noaa": 0.75,
                "sg": 0.6
            },
            "wavePeriod": {
                "icon": 11.83,
                "meteo": 4.18,
                "meto": 9.22,
                "noaa": 12.4,
                "sg": 9.22
            },
            "windDirection": {
                "icon": 248.41,
                "noaa": 256.4,
                "sg": 248.41
            },
            "windSpeed": {
                "icon": 3.11,
                "noaa": 2.61,
                "sg": 3.11
            }
        },
        {
            "airTemperature": {
                "dwd": 6.62,
                "noaa": 3.76,
                "sg": 6.62
            },
            "swellHeight": {
                "dwd": 0.75,
                "icon": 0.67,
                "meteo": 0.55,
                "meto": 0.62,
                "noaa": 0.68,
                "sg": 0.62
            },
            "swellPeriod": {
                "dwd": 11.71,
                "icon": 11.91,
                "meteo": 9.19,
                "meto": 10.14,
                "noaa": 11.38,
                "sg": 10.14
            },
            "time": "2023-02-12T05:00:00+00:00",
            "waveHeight": {
                "dwd": 0.76,
                "icon": 0.68,
                "meteo": 0.63,
                "meto": 0.62,
                "noaa": 0.75,
                "sg": 0.62
            },
            "wavePeriod": {
                "icon": 11.74,
                "meteo": 4.24,
                "meto": 9.42,
                "noaa": 12.26,
                "sg": 9.42
            },
            "windDirection": {
                "icon": 248.87,
                "noaa": 255.23,
                "sg": 248.87
            },
            "windSpeed": {
                "icon": 3.05,
                "noaa": 2.54,
                "sg": 3.05
            }
        },
        {
            "airTemperature": {
                "dwd": 6.54,
                "noaa": 3.77,
                "sg": 6.54
            },
            "swellHeight": {
                "dwd": 0.76,
                "icon": 0.67,
                "meteo": 0.56,
                "meto": 0.63,
                "noaa": 0.7,
                "sg": 0.63
            },
            "swellPeriod": {
                "dwd": 11.53,
                "icon": 11.85,
                "meteo": 9.36,
                "meto": 10.33,
                "noaa": 12.11,
                "sg": 10.33
            },
            "time": "2023-02-12T06:00:00+00:00",
            "waveHeight": {
                "dwd": 0.77,
                "icon": 0.68,
                "meteo": 0.64,
                "meto": 0.63,
                "noaa": 0.75,
                "sg": 0.63
            },
            "wavePeriod": {
                "icon": 11.66,
                "meteo": 4.3,
                "meto": 9.65,
                "noaa": 12.11,
                "sg": 9.65
            },
            "windDirection": {
                "icon": 249.32,
                "noaa": 254.05,
                "sg": 249.32
            },
            "windSpeed": {
                "icon": 3,
                "noaa": 2.46,
                "sg": 3
            }
        },
        {
            "airTemperature": {
                "dwd": 6.65,
                "noaa": 4.24,
                "sg": 6.65
            },
            "swellHeight": {
                "icon": 0.67,
                "meteo": 0.57,
                "meto": 0.65,
                "noaa": 0.68,
                "sg": 0.65
            },
            "swellPeriod": {
                "icon": 11.81,
                "meteo": 9.31,
                "meto": 10.5,
                "noaa": 11.97,
                "sg": 10.5
            },
            "time": "2023-02-12T07:00:00+00:00",
            "waveHeight": {
                "icon": 0.67,
                "meteo": 0.64,
                "meto": 0.65,
                "noaa": 0.75,
                "sg": 0.65
            },
            "wavePeriod": {
                "icon": 11.68,
                "meteo": 4.42,
                "meto": 9.87,
                "noaa": 12.57,
                "sg": 9.87
            },
            "windDirection": {
                "icon": 248.98,
                "noaa": 249.27,
                "sg": 248.98
            },
            "windSpeed": {
                "icon": 2.83,
                "noaa": 2.35,
                "sg": 2.83
            }
        },
        {
            "airTemperature": {
                "dwd": 6.76,
                "noaa": 4.72,
                "sg": 6.76
            },
            "swellHeight": {
                "icon": 0.66,
                "meteo": 0.59,
                "meto": 0.66,
                "noaa": 0.65,
                "sg": 0.66
            },
            "swellPeriod": {
                "icon": 11.77,
                "meteo": 9.27,
                "meto": 10.59,
                "noaa": 11.83,
                "sg": 10.59
            },
            "time": "2023-02-12T08:00:00+00:00",
            "waveHeight": {
                "icon": 0.67,
                "meteo": 0.65,
                "meto": 0.66,
                "noaa": 0.74,
                "sg": 0.66
            },
            "wavePeriod": {
                "icon": 11.71,
                "meteo": 4.53,
                "meto": 10.02,
                "noaa": 13.03,
                "sg": 10.02
            },
            "windDirection": {
                "icon": 248.65,
                "noaa": 244.49,
                "sg": 248.65
            },
            "windSpeed": {
                "icon": 2.65,
                "noaa": 2.23,
                "sg": 2.65
            }
        },
        {
            "airTemperature": {
                "dwd": 6.87,
                "noaa": 5.2,
                "sg": 6.87
            },
            "swellHeight": {
                "icon": 0.66,
                "meteo": 0.6,
                "meto": 0.66,
                "noaa": 0.63,
                "sg": 0.66
            },
            "swellPeriod": {
                "icon": 11.73,
                "meteo": 9.22,
                "meto": 10.63,
                "noaa": 11.69,
                "sg": 10.63
            },
            "time": "2023-02-12T09:00:00+00:00",
            "waveHeight": {
                "icon": 0.66,
                "meteo": 0.65,
                "meto": 0.66,
                "noaa": 0.74,
                "sg": 0.66
            },
            "wavePeriod": {
                "icon": 11.73,
                "meteo": 4.65,
                "meto": 10.09,
                "noaa": 13.49,
                "sg": 10.09
            },
            "windDirection": {
                "icon": 248.31,
                "noaa": 239.71,
                "sg": 248.31
            },
            "windSpeed": {
                "icon": 2.48,
                "noaa": 2.12,
                "sg": 2.48
            }
        },
        {
            "airTemperature": {
                "dwd": 7.07,
                "noaa": 6.52,
                "sg": 7.07
            },
            "swellHeight": {
                "icon": 0.66,
                "meteo": 0.6,
                "meto": 0.66,
                "noaa": 0.61,
                "sg": 0.66
            },
            "swellPeriod": {
                "icon": 11.75,
                "meteo": 9.23,
                "meto": 10.6,
                "noaa": 11.49,
                "sg": 10.6
            },
            "time": "2023-02-12T10:00:00+00:00",
            "waveHeight": {
                "icon": 0.66,
                "meteo": 0.65,
                "meto": 0.66,
                "noaa": 0.74,
                "sg": 0.66
            },
            "wavePeriod": {
                "icon": 11.63,
                "meteo": 5.03,
                "meto": 10.09,
                "noaa": 13.42,
                "sg": 10.09
            },
            "windDirection": {
                "icon": 244.7,
                "noaa": 235.51,
                "sg": 244.7
            },
            "windSpeed": {
                "icon": 3.05,
                "noaa": 2.2,
                "sg": 3.05
            }
        },
        {
            "airTemperature": {
                "dwd": 7.27,
                "noaa": 7.83,
                "sg": 7.27
            },
            "swellHeight": {
                "icon": 0.65,
                "meteo": 0.61,
                "meto": 0.65,
                "noaa": 0.58,
                "sg": 0.65
            },
            "swellPeriod": {
                "icon": 11.77,
                "meteo": 9.24,
                "meto": 10.55,
                "noaa": 11.3,
                "sg": 10.55
            },
            "time": "2023-02-12T11:00:00+00:00",
            "waveHeight": {
                "icon": 0.66,
                "meteo": 0.64,
                "meto": 0.65,
                "noaa": 0.73,
                "sg": 0.65
            },
            "wavePeriod": {
                "icon": 11.52,
                "meteo": 5.4,
                "meto": 10.05,
                "noaa": 13.35,
                "sg": 10.05
            },
            "windDirection": {
                "icon": 241.09,
                "noaa": 231.31,
                "sg": 241.09
            },
            "windSpeed": {
                "icon": 3.63,
                "noaa": 2.27,
                "sg": 3.63
            }
        },
        {
            "airTemperature": {
                "dwd": 7.48,
                "noaa": 9.15,
                "sg": 7.48
            },
            "swellHeight": {
                "icon": 0.65,
                "meteo": 0.61,
                "meto": 0.64,
                "noaa": 0.56,
                "sg": 0.64
            },
            "swellPeriod": {
                "icon": 11.79,
                "meteo": 9.25,
                "meto": 10.48,
                "noaa": 11.1,
                "sg": 10.48
            },
            "time": "2023-02-12T12:00:00+00:00",
            "waveHeight": {
                "icon": 0.66,
                "meteo": 0.64,
                "meto": 0.64,
                "noaa": 0.73,
                "sg": 0.64
            },
            "wavePeriod": {
                "icon": 11.42,
                "meteo": 5.78,
                "meto": 9.98,
                "noaa": 13.28,
                "sg": 9.98
            },
            "windDirection": {
                "icon": 237.48,
                "noaa": 227.11,
                "sg": 237.48
            },
            "windSpeed": {
                "icon": 4.2,
                "noaa": 2.35,
                "sg": 4.2
            }
        },
        {
            "airTemperature": {
                "dwd": 7.76,
                "noaa": 9.51,
                "sg": 7.76
            },
            "swellHeight": {
                "icon": 0.65,
                "meteo": 0.61,
                "meto": 0.62,
                "noaa": 0.55,
                "sg": 0.62
            },
            "swellPeriod": {
                "icon": 11.53,
                "meteo": 9.25,
                "meto": 10.41,
                "noaa": 11.29,
                "sg": 10.41
            },
            "time": "2023-02-12T13:00:00+00:00",
            "waveHeight": {
                "icon": 0.66,
                "meteo": 0.63,
                "meto": 0.62,
                "noaa": 0.73,
                "sg": 0.62
            },
            "wavePeriod": {
                "icon": 11.16,
                "meteo": 5.7,
                "meto": 9.9,
                "noaa": 13.09,
                "sg": 9.9
            },
            "windDirection": {
                "icon": 236.96,
                "noaa": 217.31,
                "sg": 236.96
            },
            "windSpeed": {
                "icon": 3.99,
                "noaa": 2.54,
                "sg": 3.99
            }
        },
        {
            "airTemperature": {
                "dwd": 8.04,
                "noaa": 9.88,
                "sg": 8.04
            },
            "swellHeight": {
                "icon": 0.66,
                "meteo": 0.6,
                "meto": 0.61,
                "noaa": 0.55,
                "sg": 0.61
            },
            "swellPeriod": {
                "icon": 11.26,
                "meteo": 9.25,
                "meto": 10.34,
                "noaa": 11.47,
                "sg": 10.34
            },
            "time": "2023-02-12T14:00:00+00:00",
            "waveHeight": {
                "icon": 0.67,
                "meteo": 0.63,
                "meto": 0.61,
                "noaa": 0.73,
                "sg": 0.61
            },
            "wavePeriod": {
                "icon": 10.89,
                "meteo": 5.63,
                "meto": 9.8,
                "noaa": 12.91,
                "sg": 9.8
            },
            "windDirection": {
                "icon": 236.43,
                "noaa": 207.5,
                "sg": 236.43
            },
            "windSpeed": {
                "icon": 3.78,
                "noaa": 2.72,
                "sg": 3.78
            }
        },
        {
            "airTemperature": {
                "dwd": 8.32,
                "noaa": 10.25,
                "sg": 8.32
            },
            "swellHeight": {
                "icon": 0.66,
                "meteo": 0.6,
                "meto": 0.59,
                "noaa": 0.54,
                "sg": 0.59
            },
            "swellPeriod": {
                "icon": 11,
                "meteo": 9.25,
                "meto": 10.29,
                "noaa": 11.66,
                "sg": 10.29
            },
            "time": "2023-02-12T15:00:00+00:00",
            "waveHeight": {
                "icon": 0.67,
                "meteo": 0.62,
                "meto": 0.59,
                "noaa": 0.73,
                "sg": 0.59
            },
            "wavePeriod": {
                "icon": 10.63,
                "meteo": 5.55,
                "meto": 9.7,
                "noaa": 12.72,
                "sg": 9.7
            },
            "windDirection": {
                "icon": 235.91,
                "noaa": 197.7,
                "sg": 235.91
            },
            "windSpeed": {
                "icon": 3.57,
                "noaa": 2.91,
                "sg": 3.57
            }
        },
        {
            "airTemperature": {
                "dwd": 8.22,
                "noaa": 8.99,
                "sg": 8.22
            },
            "swellHeight": {
                "icon": 0.65,
                "meteo": 0.6,
                "meto": 0.59,
                "noaa": 0.6,
                "sg": 0.59
            },
            "swellPeriod": {
                "icon": 11.09,
                "meteo": 9.24,
                "meto": 10.24,
                "noaa": 11.97,
                "sg": 10.24
            },
            "time": "2023-02-12T16:00:00+00:00",
            "waveHeight": {
                "icon": 0.66,
                "meteo": 0.62,
                "meto": 0.59,
                "noaa": 0.73,
                "sg": 0.59
            },
            "wavePeriod": {
                "icon": 10.84,
                "meteo": 5.01,
                "meto": 9.66,
                "noaa": 12.68,
                "sg": 9.66
            },
            "windDirection": {
                "icon": 227.08,
                "noaa": 197.39,
                "sg": 227.08
            },
            "windSpeed": {
                "icon": 2.88,
                "noaa": 2.77,
                "sg": 2.88
            }
        },
        {
            "airTemperature": {
                "dwd": 8.11,
                "noaa": 7.73,
                "sg": 8.11
            },
            "swellHeight": {
                "icon": 0.64,
                "meteo": 0.59,
                "meto": 0.58,
                "noaa": 0.66,
                "sg": 0.58
            },
            "swellPeriod": {
                "icon": 11.17,
                "meteo": 9.22,
                "meto": 10.23,
                "noaa": 12.29,
                "sg": 10.23
            },
            "time": "2023-02-12T17:00:00+00:00",
            "waveHeight": {
                "icon": 0.64,
                "meteo": 0.63,
                "meto": 0.58,
                "noaa": 0.72,
                "sg": 0.58
            },
            "wavePeriod": {
                "icon": 11.05,
                "meteo": 4.47,
                "meto": 9.65,
                "noaa": 12.64,
                "sg": 9.65
            },
            "windDirection": {
                "icon": 218.24,
                "noaa": 197.09,
                "sg": 218.24
            },
            "windSpeed": {
                "icon": 2.2,
                "noaa": 2.63,
                "sg": 2.2
            }
        },
        {
            "airTemperature": {
                "dwd": 8,
                "noaa": 6.47,
                "sg": 8
            },
            "swellHeight": {
                "icon": 0.63,
                "meteo": 0.59,
                "meto": 0.57,
                "noaa": 0.72,
                "sg": 0.57
            },
            "swellPeriod": {
                "icon": 11.26,
                "meteo": 9.21,
                "meto": 10.24,
                "noaa": 12.6,
                "sg": 10.24
            },
            "time": "2023-02-12T18:00:00+00:00",
            "waveHeight": {
                "icon": 0.63,
                "meteo": 0.63,
                "meto": 0.57,
                "noaa": 0.72,
                "sg": 0.57
            },
            "wavePeriod": {
                "icon": 11.26,
                "meteo": 3.93,
                "meto": 9.59,
                "noaa": 12.6,
                "sg": 9.59
            },
            "windDirection": {
                "icon": 209.41,
                "noaa": 196.78,
                "sg": 209.41
            },
            "windSpeed": {
                "icon": 1.51,
                "noaa": 2.49,
                "sg": 1.51
            }
        },
        {
            "airTemperature": {
                "dwd": 7.91,
                "noaa": 6.07,
                "sg": 7.91
            },
            "swellHeight": {
                "icon": 0.62,
                "meteo": 0.58,
                "meto": 0.57,
                "noaa": 0.71,
                "sg": 0.57
            },
            "swellPeriod": {
                "icon": 11.36,
                "meteo": 9.2,
                "meto": 10.25,
                "noaa": 12.49,
                "sg": 10.25
            },
            "time": "2023-02-12T19:00:00+00:00",
            "waveHeight": {
                "icon": 0.62,
                "meteo": 0.62,
                "meto": 0.57,
                "noaa": 0.71,
                "sg": 0.57
            },
            "wavePeriod": {
                "icon": 11.36,
                "meteo": 4.19,
                "meto": 9.11,
                "noaa": 12.49,
                "sg": 9.11
            },
            "windDirection": {
                "icon": 212.46,
                "noaa": 199.26,
                "sg": 212.46
            },
            "windSpeed": {
                "icon": 1.67,
                "noaa": 2.46,
                "sg": 1.67
            }
        },
        {
            "airTemperature": {
                "dwd": 7.82,
                "noaa": 5.67,
                "sg": 7.82
            },
            "swellHeight": {
                "icon": 0.61,
                "meteo": 0.56,
                "meto": 0.56,
                "noaa": 0.7,
                "sg": 0.56
            },
            "swellPeriod": {
                "icon": 11.46,
                "meteo": 9.18,
                "meto": 10.18,
                "noaa": 12.39,
                "sg": 10.18
            },
            "time": "2023-02-12T20:00:00+00:00",
            "waveHeight": {
                "icon": 0.61,
                "meteo": 0.6,
                "meto": 0.56,
                "noaa": 0.71,
                "sg": 0.56
            },
            "wavePeriod": {
                "icon": 11.46,
                "meteo": 4.44,
                "meto": 7.22,
                "noaa": 12.39,
                "sg": 7.22
            },
            "windDirection": {
                "icon": 215.51,
                "noaa": 201.75,
                "sg": 215.51
            },
            "windSpeed": {
                "icon": 1.83,
                "noaa": 2.43,
                "sg": 1.83
            }
        },
        {
            "airTemperature": {
                "dwd": 7.73,
                "noaa": 5.27,
                "sg": 7.73
            },
            "swellHeight": {
                "icon": 0.6,
                "meteo": 0.55,
                "meto": 0.55,
                "noaa": 0.69,
                "sg": 0.55
            },
            "swellPeriod": {
                "icon": 11.56,
                "meteo": 9.17,
                "meto": 9.99,
                "noaa": 12.28,
                "sg": 9.99
            },
            "time": "2023-02-12T21:00:00+00:00",
            "waveHeight": {
                "icon": 0.6,
                "meteo": 0.59,
                "meto": 0.56,
                "noaa": 0.7,
                "sg": 0.56
            },
            "wavePeriod": {
                "icon": 11.56,
                "meteo": 4.7,
                "meto": 6.27,
                "noaa": 12.28,
                "sg": 6.27
            },
            "windDirection": {
                "icon": 218.56,
                "noaa": 204.23,
                "sg": 218.56
            },
            "windSpeed": {
                "icon": 1.99,
                "noaa": 2.4,
                "sg": 1.99
            }
        },
        {
            "airTemperature": {
                "dwd": 7.59,
                "noaa": 4.85,
                "sg": 7.59
            },
            "swellHeight": {
                "icon": 0.59,
                "meteo": 0.54,
                "meto": 0.54,
                "noaa": 0.68,
                "sg": 0.54
            },
            "swellPeriod": {
                "icon": 11.6,
                "meteo": 9.17,
                "meto": 10.22,
                "noaa": 12.18,
                "sg": 10.22
            },
            "time": "2023-02-12T22:00:00+00:00",
            "waveHeight": {
                "icon": 0.59,
                "meteo": 0.57,
                "meto": 0.55,
                "noaa": 0.69,
                "sg": 0.55
            },
            "wavePeriod": {
                "icon": 11.6,
                "meteo": 4.8,
                "meto": 6.39,
                "noaa": 12.18,
                "sg": 6.39
            },
            "windDirection": {
                "icon": 218.51,
                "noaa": 202.96,
                "sg": 218.51
            },
            "windSpeed": {
                "icon": 2.04,
                "noaa": 2.41,
                "sg": 2.04
            }
        },
        {
            "airTemperature": {
                "dwd": 7.44,
                "noaa": 4.44,
                "sg": 7.44
            },
            "swellHeight": {
                "icon": 0.59,
                "meteo": 0.53,
                "meto": 0.52,
                "noaa": 0.68,
                "sg": 0.52
            },
            "swellPeriod": {
                "icon": 11.64,
                "meteo": 9.16,
                "meto": 10.17,
                "noaa": 12.09,
                "sg": 10.17
            },
            "time": "2023-02-12T23:00:00+00:00",
            "waveHeight": {
                "icon": 0.59,
                "meteo": 0.56,
                "meto": 0.55,
                "noaa": 0.68,
                "sg": 0.55
            },
            "wavePeriod": {
                "icon": 11.64,
                "meteo": 4.9,
                "meto": 6.54,
                "noaa": 12.09,
                "sg": 6.54
            },
            "windDirection": {
                "icon": 218.47,
                "noaa": 201.68,
                "sg": 218.47
            },
            "windSpeed": {
                "icon": 2.09,
                "noaa": 2.42,
                "sg": 2.09
            }
        },
        {
            "airTemperature": {
                "dwd": 7.3,
                "noaa": 4.03,
                "sg": 7.3
            },
            "swellHeight": {
                "icon": 0.58,
                "meteo": 0.52,
                "meto": 0.58,
                "noaa": 0.67,
                "sg": 0.58
            },
            "swellPeriod": {
                "icon": 11.68,
                "meteo": 9.16,
                "meto": 10.59,
                "noaa": 11.99,
                "sg": 10.59
            },
            "time": "2023-02-13T00:00:00+00:00",
            "waveHeight": {
                "icon": 0.58,
                "meteo": 0.54,
                "meto": 0.58,
                "noaa": 0.67,
                "sg": 0.58
            },
            "wavePeriod": {
                "icon": 11.68,
                "meteo": 5,
                "meto": 10.01,
                "noaa": 11.99,
                "sg": 10.01
            },
            "windDirection": {
                "icon": 218.42,
                "noaa": 200.41,
                "sg": 218.42
            },
            "windSpeed": {
                "icon": 2.14,
                "noaa": 2.43,
                "sg": 2.14
            }
        },
        {
            "airTemperature": {
                "dwd": 7.22,
                "noaa": 3.88,
                "sg": 7.22
            },
            "swellHeight": {
                "icon": 0.57,
                "meteo": 0.51,
                "meto": 0.56,
                "noaa": 0.65,
                "sg": 0.56
            },
            "swellPeriod": {
                "icon": 11.64,
                "meteo": 9.16,
                "meto": 10.52,
                "noaa": 11.92,
                "sg": 10.52
            },
            "time": "2023-02-13T01:00:00+00:00",
            "waveHeight": {
                "icon": 0.57,
                "meteo": 0.53,
                "meto": 0.56,
                "noaa": 0.65,
                "sg": 0.56
            },
            "wavePeriod": {
                "icon": 11.64,
                "meteo": 5.15,
                "meto": 9.87,
                "noaa": 11.92,
                "sg": 9.87
            },
            "windDirection": {
                "icon": 219.69,
                "noaa": 201.07,
                "sg": 219.69
            },
            "windSpeed": {
                "icon": 2.14,
                "noaa": 2.38,
                "sg": 2.14
            }
        },
        {
            "airTemperature": {
                "dwd": 7.13,
                "noaa": 3.74,
                "sg": 7.13
            },
            "swellHeight": {
                "icon": 0.56,
                "meteo": 0.49,
                "meto": 0.54,
                "noaa": 0.64,
                "sg": 0.54
            },
            "swellPeriod": {
                "icon": 11.61,
                "meteo": 9.16,
                "meto": 10.46,
                "noaa": 11.85,
                "sg": 10.46
            },
            "time": "2023-02-13T02:00:00+00:00",
            "waveHeight": {
                "icon": 0.56,
                "meteo": 0.51,
                "meto": 0.54,
                "noaa": 0.64,
                "sg": 0.54
            },
            "wavePeriod": {
                "icon": 11.61,
                "meteo": 5.29,
                "meto": 9.8,
                "noaa": 11.85,
                "sg": 9.8
            },
            "windDirection": {
                "icon": 220.96,
                "noaa": 201.72,
                "sg": 220.96
            },
            "windSpeed": {
                "icon": 2.13,
                "noaa": 2.32,
                "sg": 2.13
            }
        },
        {
            "airTemperature": {
                "dwd": 7.05,
                "noaa": 3.59,
                "sg": 7.05
            },
            "swellHeight": {
                "icon": 0.55,
                "meteo": 0.48,
                "meto": 0.52,
                "noaa": 0.62,
                "sg": 0.52
            },
            "swellPeriod": {
                "icon": 11.57,
                "meteo": 9.16,
                "meto": 10.44,
                "noaa": 11.78,
                "sg": 10.44
            },
            "time": "2023-02-13T03:00:00+00:00",
            "waveHeight": {
                "icon": 0.55,
                "meteo": 0.5,
                "meto": 0.52,
                "noaa": 0.62,
                "sg": 0.52
            },
            "wavePeriod": {
                "icon": 11.57,
                "meteo": 5.44,
                "meto": 9.77,
                "noaa": 11.78,
                "sg": 9.77
            },
            "windDirection": {
                "icon": 222.23,
                "noaa": 202.38,
                "sg": 222.23
            },
            "windSpeed": {
                "icon": 2.13,
                "noaa": 2.27,
                "sg": 2.13
            }
        },
        {
            "airTemperature": {
                "dwd": 6.82,
                "noaa": 3.51,
                "sg": 6.82
            },
            "swellHeight": {
                "icon": 0.54,
                "meteo": 0.47,
                "meto": 0.51,
                "noaa": 0.6,
                "sg": 0.51
            },
            "swellPeriod": {
                "icon": 11.5,
                "meteo": 9.16,
                "meto": 10.42,
                "noaa": 11.72,
                "sg": 10.42
            },
            "time": "2023-02-13T04:00:00+00:00",
            "waveHeight": {
                "icon": 0.54,
                "meteo": 0.48,
                "meto": 0.51,
                "noaa": 0.6,
                "sg": 0.51
            },
            "wavePeriod": {
                "icon": 11.5,
                "meteo": 6.01,
                "meto": 9.74,
                "noaa": 11.72,
                "sg": 9.74
            },
            "windDirection": {
                "icon": 224.14,
                "noaa": 202.84,
                "sg": 224.14
            },
            "windSpeed": {
                "icon": 1.99,
                "noaa": 2.16,
                "sg": 1.99
            }
        },
        {
            "airTemperature": {
                "dwd": 6.6,
                "noaa": 3.43,
                "sg": 6.6
            },
            "swellHeight": {
                "icon": 0.53,
                "meteo": 0.45,
                "meto": 0.5,
                "noaa": 0.59,
                "sg": 0.5
            },
            "swellPeriod": {
                "icon": 11.44,
                "meteo": 9.17,
                "meto": 10.43,
                "noaa": 11.67,
                "sg": 10.43
            },
            "time": "2023-02-13T05:00:00+00:00",
            "waveHeight": {
                "icon": 0.53,
                "meteo": 0.47,
                "meto": 0.5,
                "noaa": 0.59,
                "sg": 0.5
            },
            "wavePeriod": {
                "icon": 11.44,
                "meteo": 6.57,
                "meto": 9.73,
                "noaa": 11.67,
                "sg": 9.73
            },
            "windDirection": {
                "icon": 226.05,
                "noaa": 203.31,
                "sg": 226.05
            },
            "windSpeed": {
                "icon": 1.85,
                "noaa": 2.05,
                "sg": 1.85
            }
        },
        {
            "airTemperature": {
                "dwd": 6.37,
                "noaa": 3.35,
                "sg": 6.37
            },
            "swellHeight": {
                "icon": 0.52,
                "meteo": 0.44,
                "meto": 0.49,
                "noaa": 0.57,
                "sg": 0.49
            },
            "swellPeriod": {
                "icon": 11.37,
                "meteo": 9.17,
                "meto": 10.47,
                "noaa": 11.61,
                "sg": 10.47
            },
            "time": "2023-02-13T06:00:00+00:00",
            "waveHeight": {
                "icon": 0.52,
                "meteo": 0.45,
                "meto": 0.49,
                "noaa": 0.57,
                "sg": 0.49
            },
            "wavePeriod": {
                "icon": 11.37,
                "meteo": 7.14,
                "meto": 9.76,
                "noaa": 11.61,
                "sg": 9.76
            },
            "windDirection": {
                "icon": 227.96,
                "noaa": 203.77,
                "sg": 227.96
            },
            "windSpeed": {
                "icon": 1.71,
                "noaa": 1.94,
                "sg": 1.71
            }
        },
        {
            "airTemperature": {
                "dwd": 6.15,
                "noaa": 3.92,
                "sg": 6.15
            },
            "swellHeight": {
                "icon": 0.51,
                "meteo": 0.43,
                "meto": 0.49,
                "noaa": 0.56,
                "sg": 0.49
            },
            "swellPeriod": {
                "icon": 11.29,
                "meteo": 9.17,
                "meto": 10.55,
                "noaa": 11.52,
                "sg": 10.55
            },
            "time": "2023-02-13T07:00:00+00:00",
            "waveHeight": {
                "icon": 0.51,
                "meteo": 0.44,
                "meto": 0.49,
                "noaa": 0.56,
                "sg": 0.49
            },
            "wavePeriod": {
                "icon": 11.29,
                "meteo": 7.48,
                "meto": 9.81,
                "noaa": 11.52,
                "sg": 9.81
            },
            "windDirection": {
                "icon": 226.42,
                "noaa": 195.72,
                "sg": 226.42
            },
            "windSpeed": {
                "icon": 1.86,
                "noaa": 1.96,
                "sg": 1.86
            }
        },
        {
            "airTemperature": {
                "dwd": 5.93,
                "noaa": 4.49,
                "sg": 5.93
            },
            "swellHeight": {
                "icon": 0.49,
                "meteo": 0.42,
                "meto": 0.48,
                "noaa": 0.54,
                "sg": 0.48
            },
            "swellPeriod": {
                "icon": 11.22,
                "meteo": 9.17,
                "meto": 10.62,
                "noaa": 11.42,
                "sg": 10.62
            },
            "time": "2023-02-13T08:00:00+00:00",
            "waveHeight": {
                "icon": 0.49,
                "meteo": 0.42,
                "meto": 0.48,
                "noaa": 0.54,
                "sg": 0.48
            },
            "wavePeriod": {
                "icon": 11.22,
                "meteo": 7.83,
                "meto": 9.77,
                "noaa": 11.42,
                "sg": 9.77
            },
            "windDirection": {
                "icon": 224.87,
                "noaa": 187.66,
                "sg": 224.87
            },
            "windSpeed": {
                "icon": 2.01,
                "noaa": 1.97,
                "sg": 2.01
            }
        },
        {
            "airTemperature": {
                "dwd": 5.72,
                "noaa": 5.06,
                "sg": 5.72
            },
            "swellHeight": {
                "icon": 0.48,
                "meteo": 0.41,
                "meto": 0.47,
                "noaa": 0.53,
                "sg": 0.47
            },
            "swellPeriod": {
                "icon": 11.14,
                "meteo": 9.17,
                "meto": 10.65,
                "noaa": 11.33,
                "sg": 10.65
            },
            "time": "2023-02-13T09:00:00+00:00",
            "waveHeight": {
                "icon": 0.48,
                "meteo": 0.41,
                "meto": 0.47,
                "noaa": 0.53,
                "sg": 0.47
            },
            "wavePeriod": {
                "icon": 11.14,
                "meteo": 8.17,
                "meto": 9.2,
                "noaa": 11.33,
                "sg": 9.2
            },
            "windDirection": {
                "icon": 223.33,
                "noaa": 179.61,
                "sg": 223.33
            },
            "windSpeed": {
                "icon": 2.16,
                "noaa": 1.99,
                "sg": 2.16
            }
        },
        {
            "airTemperature": {
                "dwd": 5.55,
                "noaa": 6.58,
                "sg": 5.55
            },
            "swellHeight": {
                "icon": 0.47,
                "meteo": 0.4,
                "meto": 0.46,
                "noaa": 0.51,
                "sg": 0.46
            },
            "swellPeriod": {
                "icon": 11.04,
                "meteo": 9.16,
                "meto": 10.55,
                "noaa": 11.28,
                "sg": 10.55
            },
            "time": "2023-02-13T10:00:00+00:00",
            "waveHeight": {
                "icon": 0.47,
                "meteo": 0.4,
                "meto": 0.46,
                "noaa": 0.53,
                "sg": 0.46
            },
            "wavePeriod": {
                "icon": 11.04,
                "meteo": 8.29,
                "meto": 7.19,
                "noaa": 11.28,
                "sg": 7.19
            },
            "windDirection": {
                "icon": 218.55,
                "noaa": 179.09,
                "sg": 218.55
            },
            "windSpeed": {
                "icon": 2.38,
                "noaa": 2.57,
                "sg": 2.38
            }
        },
        {
            "airTemperature": {
                "dwd": 5.38,
                "noaa": 8.1,
                "sg": 5.38
            },
            "swellHeight": {
                "icon": 0.46,
                "meteo": 0.38,
                "meto": 0.45,
                "noaa": 0.5,
                "sg": 0.45
            },
            "swellPeriod": {
                "icon": 10.94,
                "meteo": 9.16,
                "meto": 10.74,
                "noaa": 11.23,
                "sg": 10.74
            },
            "time": "2023-02-13T11:00:00+00:00",
            "waveHeight": {
                "icon": 0.46,
                "meteo": 0.39,
                "meto": 0.46,
                "noaa": 0.52,
                "sg": 0.46
            },
            "wavePeriod": {
                "icon": 10.93,
                "meteo": 8.4,
                "meto": 5.17,
                "noaa": 11.23,
                "sg": 5.17
            },
            "windDirection": {
                "icon": 213.77,
                "noaa": 178.57,
                "sg": 213.77
            },
            "windSpeed": {
                "icon": 2.61,
                "noaa": 3.15,
                "sg": 2.61
            }
        },
        {
            "airTemperature": {
                "dwd": 5.22,
                "noaa": 9.62,
                "sg": 5.22
            },
            "swellHeight": {
                "icon": 0.45,
                "meteo": 0.37,
                "meto": 0.43,
                "noaa": 0.48,
                "sg": 0.43
            },
            "swellPeriod": {
                "icon": 10.84,
                "meteo": 9.15,
                "meto": 10.71,
                "noaa": 11.18,
                "sg": 10.71
            },
            "time": "2023-02-13T12:00:00+00:00",
            "waveHeight": {
                "icon": 0.45,
                "meteo": 0.38,
                "meto": 0.46,
                "noaa": 0.52,
                "sg": 0.46
            },
            "wavePeriod": {
                "icon": 10.83,
                "meteo": 8.52,
                "meto": 4.25,
                "noaa": 11.18,
                "sg": 4.25
            },
            "windDirection": {
                "icon": 208.99,
                "noaa": 178.05,
                "sg": 208.99
            },
            "windSpeed": {
                "icon": 2.83,
                "noaa": 3.73,
                "sg": 2.83
            }
        },
        {
            "airTemperature": {
                "dwd": 5.42,
                "noaa": 9.94,
                "sg": 5.42
            },
            "swellHeight": {
                "icon": 0.44,
                "meteo": 0.36,
                "meto": 0.41,
                "noaa": 0.46,
                "sg": 0.41
            },
            "swellPeriod": {
                "icon": 10.71,
                "meteo": 9.14,
                "meto": 10.68,
                "noaa": 11.16,
                "sg": 10.68
            },
            "time": "2023-02-13T13:00:00+00:00",
            "waveHeight": {
                "icon": 0.44,
                "meteo": 0.37,
                "meto": 0.44,
                "noaa": 0.53,
                "sg": 0.44
            },
            "wavePeriod": {
                "icon": 10.68,
                "meteo": 7.65,
                "meto": 4.34,
                "noaa": 11.16,
                "sg": 4.34
            },
            "windDirection": {
                "icon": 199.6,
                "noaa": 169.5,
                "sg": 199.6
            },
            "windSpeed": {
                "icon": 2.83,
                "noaa": 3.78,
                "sg": 2.83
            }
        },
        {
            "airTemperature": {
                "dwd": 5.63,
                "noaa": 10.27,
                "sg": 5.63
            },
            "swellHeight": {
                "icon": 0.43,
                "meteo": 0.35,
                "meto": 0.39,
                "noaa": 0.45,
                "sg": 0.39
            },
            "swellPeriod": {
                "icon": 10.58,
                "meteo": 9.12,
                "meto": 10.65,
                "noaa": 11.15,
                "sg": 10.65
            },
            "time": "2023-02-13T14:00:00+00:00",
            "waveHeight": {
                "icon": 0.44,
                "meteo": 0.35,
                "meto": 0.42,
                "noaa": 0.53,
                "sg": 0.42
            },
            "wavePeriod": {
                "icon": 10.54,
                "meteo": 6.79,
                "meto": 4.86,
                "noaa": 11.15,
                "sg": 4.86
            },
            "windDirection": {
                "icon": 190.22,
                "noaa": 160.95,
                "sg": 190.22
            },
            "windSpeed": {
                "icon": 2.84,
                "noaa": 3.82,
                "sg": 2.84
            }
        },
        {
            "airTemperature": {
                "dwd": 5.83,
                "noaa": 10.59,
                "sg": 5.83
            },
            "swellHeight": {
                "icon": 0.42,
                "meteo": 0.34,
                "meto": 0.38,
                "noaa": 0.43,
                "sg": 0.38
            },
            "swellPeriod": {
                "icon": 10.45,
                "meteo": 9.11,
                "meto": 10.63,
                "noaa": 11.13,
                "sg": 10.63
            },
            "time": "2023-02-13T15:00:00+00:00",
            "waveHeight": {
                "icon": 0.43,
                "meteo": 0.34,
                "meto": 0.4,
                "noaa": 0.54,
                "sg": 0.4
            },
            "wavePeriod": {
                "icon": 10.39,
                "meteo": 5.92,
                "meto": 5.16,
                "noaa": 11.13,
                "sg": 5.16
            },
            "windDirection": {
                "icon": 180.83,
                "noaa": 152.4,
                "sg": 180.83
            },
            "windSpeed": {
                "icon": 2.84,
                "noaa": 3.87,
                "sg": 2.84
            }
        },
        {
            "airTemperature": {
                "dwd": 6.03,
                "noaa": 9.03,
                "sg": 6.03
            },
            "swellHeight": {
                "icon": 0.42,
                "meteo": 0.33,
                "meto": 0.36,
                "noaa": 0.42,
                "sg": 0.36
            },
            "swellPeriod": {
                "icon": 10.09,
                "meteo": 9.09,
                "meto": 10.62,
                "noaa": 11.11,
                "sg": 10.62
            },
            "time": "2023-02-13T16:00:00+00:00",
            "waveHeight": {
                "icon": 0.43,
                "meteo": 0.36,
                "meto": 0.38,
                "noaa": 0.54,
                "sg": 0.38
            },
            "wavePeriod": {
                "icon": 10.02,
                "meteo": 4.9,
                "meto": 5.64,
                "noaa": 11.11,
                "sg": 5.64
            },
            "windDirection": {
                "icon": 177.2,
                "noaa": 148.17,
                "sg": 177.2
            },
            "windSpeed": {
                "icon": 2.77,
                "noaa": 3.53,
                "sg": 2.77
            }
        },
        {
            "airTemperature": {
                "dwd": 6.22,
                "noaa": 7.47,
                "sg": 6.22
            },
            "swellHeight": {
                "icon": 0.43,
                "meteo": 0.31,
                "meto": 0.35,
                "noaa": 0.4,
                "sg": 0.35
            },
            "swellPeriod": {
                "icon": 9.74,
                "meteo": 9.07,
                "meto": 10.62,
                "noaa": 11.1,
                "sg": 10.62
            },
            "time": "2023-02-13T17:00:00+00:00",
            "waveHeight": {
                "icon": 0.43,
                "meteo": 0.38,
                "meto": 0.37,
                "noaa": 0.53,
                "sg": 0.37
            },
            "wavePeriod": {
                "icon": 9.66,
                "meteo": 3.87,
                "meto": 6.43,
                "noaa": 11.1,
                "sg": 6.43
            },
            "windDirection": {
                "icon": 173.58,
                "noaa": 143.95,
                "sg": 173.58
            },
            "windSpeed": {
                "icon": 2.7,
                "noaa": 3.18,
                "sg": 2.7
            }
        },
        {
            "airTemperature": {
                "dwd": 6.42,
                "noaa": 5.92,
                "sg": 6.42
            },
            "swellHeight": {
                "icon": 0.43,
                "meteo": 0.3,
                "meto": 0.35,
                "noaa": 0.39,
                "sg": 0.35
            },
            "swellPeriod": {
                "icon": 9.38,
                "meteo": 9.05,
                "meto": 10.63,
                "noaa": 11.08,
                "sg": 10.63
            },
            "time": "2023-02-13T18:00:00+00:00",
            "waveHeight": {
                "icon": 0.43,
                "meteo": 0.4,
                "meto": 0.36,
                "noaa": 0.53,
                "sg": 0.36
            },
            "wavePeriod": {
                "icon": 9.29,
                "meteo": 2.85,
                "meto": 6.96,
                "noaa": 11.08,
                "sg": 6.96
            },
            "windDirection": {
                "icon": 169.95,
                "noaa": 139.72,
                "sg": 169.95
            },
            "windSpeed": {
                "icon": 2.63,
                "noaa": 2.84,
                "sg": 2.63
            }
        },
        {
            "airTemperature": {
                "dwd": 6.51,
                "noaa": 5.69,
                "sg": 6.51
            },
            "swellHeight": {
                "icon": 0.43,
                "meteo": 0.29,
                "meto": 0.34,
                "noaa": 0.37,
                "sg": 0.34
            },
            "swellPeriod": {
                "icon": 9.02,
                "meteo": 9.03,
                "meto": 10.66,
                "noaa": 11.03,
                "sg": 10.66
            },
            "time": "2023-02-13T19:00:00+00:00",
            "waveHeight": {
                "icon": 0.44,
                "meteo": 0.41,
                "meto": 0.35,
                "noaa": 0.51,
                "sg": 0.35
            },
            "wavePeriod": {
                "icon": 8.94,
                "meteo": 2.8,
                "meto": 7.02,
                "noaa": 11.03,
                "sg": 7.02
            },
            "windDirection": {
                "icon": 168.29,
                "noaa": 143.38,
                "sg": 168.29
            },
            "windSpeed": {
                "icon": 2.66,
                "noaa": 2.79,
                "sg": 2.66
            }
        },
        {
            "airTemperature": {
                "dwd": 6.6,
                "noaa": 5.46,
                "sg": 6.6
            },
            "swellHeight": {
                "icon": 0.44,
                "meteo": 0.27,
                "meto": 0.33,
                "noaa": 0.36,
                "sg": 0.33
            },
            "swellPeriod": {
                "icon": 8.67,
                "meteo": 9,
                "meto": 10.71,
                "noaa": 10.99,
                "sg": 10.71
            },
            "time": "2023-02-13T20:00:00+00:00",
            "waveHeight": {
                "icon": 0.44,
                "meteo": 0.42,
                "meto": 0.34,
                "noaa": 0.5,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 8.6,
                "meteo": 2.75,
                "meto": 6.82,
                "noaa": 10.99,
                "sg": 6.82
            },
            "windDirection": {
                "icon": 166.64,
                "noaa": 147.03,
                "sg": 166.64
            },
            "windSpeed": {
                "icon": 2.68,
                "noaa": 2.73,
                "sg": 2.68
            }
        },
        {
            "airTemperature": {
                "dwd": 6.69,
                "noaa": 5.24,
                "sg": 6.69
            },
            "swellHeight": {
                "icon": 0.44,
                "meteo": 0.26,
                "meto": 0.32,
                "noaa": 0.34,
                "sg": 0.32
            },
            "swellPeriod": {
                "icon": 8.31,
                "meteo": 8.98,
                "meto": 10.77,
                "noaa": 10.94,
                "sg": 10.77
            },
            "time": "2023-02-13T21:00:00+00:00",
            "waveHeight": {
                "icon": 0.45,
                "meteo": 0.43,
                "meto": 0.34,
                "noaa": 0.48,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 8.25,
                "meteo": 2.7,
                "meto": 6.4,
                "noaa": 10.94,
                "sg": 6.4
            },
            "windDirection": {
                "icon": 164.98,
                "noaa": 150.69,
                "sg": 164.98
            },
            "windSpeed": {
                "icon": 2.71,
                "noaa": 2.68,
                "sg": 2.71
            }
        },
        {
            "airTemperature": {
                "dwd": 6.51,
                "noaa": 4.92,
                "sg": 6.51
            },
            "swellHeight": {
                "icon": 0.47,
                "meteo": 0.25,
                "meto": 0.31,
                "noaa": 0.33,
                "sg": 0.31
            },
            "swellPeriod": {
                "icon": 7.74,
                "meteo": 8.97,
                "meto": 10.6,
                "noaa": 10.89,
                "sg": 10.6
            },
            "time": "2023-02-13T22:00:00+00:00",
            "waveHeight": {
                "icon": 0.48,
                "meteo": 0.47,
                "meto": 0.34,
                "noaa": 0.5,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 7.61,
                "meteo": 2.71,
                "meto": 6.22,
                "noaa": 10.89,
                "sg": 6.22
            },
            "windDirection": {
                "icon": 168.87,
                "noaa": 149.57,
                "sg": 168.87
            },
            "windSpeed": {
                "icon": 3.12,
                "noaa": 2.74,
                "sg": 3.12
            }
        },
        {
            "airTemperature": {
                "dwd": 6.32,
                "noaa": 4.59,
                "sg": 6.32
            },
            "swellHeight": {
                "icon": 0.51,
                "meteo": 0.24,
                "meto": 0.3,
                "noaa": 0.31,
                "sg": 0.3
            },
            "swellPeriod": {
                "icon": 7.17,
                "meteo": 8.97,
                "meto": 10.51,
                "noaa": 10.85,
                "sg": 10.51
            },
            "time": "2023-02-13T23:00:00+00:00",
            "waveHeight": {
                "icon": 0.52,
                "meteo": 0.52,
                "meto": 0.34,
                "noaa": 0.51,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 6.97,
                "meteo": 2.72,
                "meto": 6.29,
                "noaa": 10.85,
                "sg": 6.29
            },
            "windDirection": {
                "icon": 172.75,
                "noaa": 148.46,
                "sg": 172.75
            },
            "windSpeed": {
                "icon": 3.52,
                "noaa": 2.8,
                "sg": 3.52
            }
        },
        {
            "airTemperature": {
                "dwd": 6.14,
                "noaa": 4.27,
                "sg": 6.14
            },
            "swellHeight": {
                "icon": 0.54,
                "meteo": 0.23,
                "meto": 0.32,
                "noaa": 0.3,
                "sg": 0.32
            },
            "swellPeriod": {
                "icon": 6.6,
                "meteo": 8.96,
                "meto": 10.63,
                "noaa": 10.8,
                "sg": 10.63
            },
            "time": "2023-02-14T00:00:00+00:00",
            "waveHeight": {
                "icon": 0.55,
                "meteo": 0.56,
                "meto": 0.4,
                "noaa": 0.53,
                "sg": 0.4
            },
            "wavePeriod": {
                "icon": 6.33,
                "meteo": 2.73,
                "meto": 3.8,
                "noaa": 10.8,
                "sg": 3.8
            },
            "windDirection": {
                "icon": 176.64,
                "noaa": 147.34,
                "sg": 176.64
            },
            "windSpeed": {
                "icon": 3.93,
                "noaa": 2.86,
                "sg": 3.93
            }
        },
        {
            "airTemperature": {
                "noaa": 3.99,
                "sg": 3.99
            },
            "swellHeight": {
                "icon": 0.55,
                "meteo": 0.23,
                "meto": 0.31,
                "noaa": 0.29,
                "sg": 0.31
            },
            "swellPeriod": {
                "icon": 6.47,
                "meteo": 7.02,
                "meto": 10.6,
                "noaa": 10.74,
                "sg": 10.6
            },
            "time": "2023-02-14T01:00:00+00:00",
            "waveHeight": {
                "icon": 0.55,
                "meteo": 0.57,
                "meto": 0.39,
                "noaa": 0.53,
                "sg": 0.39
            },
            "wavePeriod": {
                "icon": 6.26,
                "meteo": 2.76,
                "meto": 3.94,
                "noaa": 10.74,
                "sg": 3.94
            },
            "windDirection": {
                "icon": 178.34,
                "noaa": 154.16,
                "sg": 178.34
            },
            "windSpeed": {
                "icon": 3.7,
                "noaa": 2.8,
                "sg": 3.7
            }
        },
        {
            "airTemperature": {
                "noaa": 3.71,
                "sg": 3.71
            },
            "swellHeight": {
                "icon": 0.55,
                "meteo": 0.22,
                "meto": 0.3,
                "noaa": 0.27,
                "sg": 0.3
            },
            "swellPeriod": {
                "icon": 6.33,
                "meteo": 5.09,
                "meto": 10.56,
                "noaa": 10.68,
                "sg": 10.56
            },
            "time": "2023-02-14T02:00:00+00:00",
            "waveHeight": {
                "icon": 0.56,
                "meteo": 0.58,
                "meto": 0.38,
                "noaa": 0.54,
                "sg": 0.38
            },
            "wavePeriod": {
                "icon": 6.18,
                "meteo": 2.8,
                "meto": 4.13,
                "noaa": 10.68,
                "sg": 4.13
            },
            "windDirection": {
                "icon": 180.05,
                "noaa": 160.98,
                "sg": 180.05
            },
            "windSpeed": {
                "icon": 3.46,
                "noaa": 2.73,
                "sg": 3.46
            }
        },
        {
            "airTemperature": {
                "noaa": 3.43,
                "sg": 3.43
            },
            "swellHeight": {
                "icon": 0.56,
                "meteo": 0.22,
                "meto": 0.29,
                "noaa": 0.26,
                "sg": 0.29
            },
            "swellPeriod": {
                "icon": 6.2,
                "meteo": 3.15,
                "meto": 10.51,
                "noaa": 10.62,
                "sg": 10.51
            },
            "time": "2023-02-14T03:00:00+00:00",
            "waveHeight": {
                "icon": 0.56,
                "meteo": 0.59,
                "meto": 0.36,
                "noaa": 0.54,
                "sg": 0.36
            },
            "wavePeriod": {
                "icon": 6.11,
                "meteo": 2.83,
                "meto": 4.26,
                "noaa": 10.62,
                "sg": 4.26
            },
            "windDirection": {
                "icon": 181.75,
                "noaa": 167.8,
                "sg": 181.75
            },
            "windSpeed": {
                "icon": 3.23,
                "noaa": 2.67,
                "sg": 3.23
            }
        },
        {
            "airTemperature": {
                "noaa": 3.2,
                "sg": 3.2
            },
            "swellHeight": {
                "icon": 0.54,
                "meteo": 0.28,
                "meto": 0.28,
                "noaa": 0.25,
                "sg": 0.28
            },
            "swellPeriod": {
                "icon": 6.24,
                "meteo": 3.14,
                "meto": 10.48,
                "noaa": 10.58,
                "sg": 10.48
            },
            "time": "2023-02-14T04:00:00+00:00",
            "waveHeight": {
                "icon": 0.55,
                "meteo": 0.59,
                "meto": 0.35,
                "noaa": 0.53,
                "sg": 0.35
            },
            "wavePeriod": {
                "icon": 6.12,
                "meteo": 2.85,
                "meto": 4.31,
                "noaa": 10.58,
                "sg": 4.31
            },
            "windDirection": {
                "icon": 186.33,
                "noaa": 172.54,
                "sg": 186.33
            },
            "windSpeed": {
                "icon": 3.45,
                "noaa": 2.78,
                "sg": 3.45
            }
        },
        {
            "airTemperature": {
                "noaa": 2.96,
                "sg": 2.96
            },
            "swellHeight": {
                "icon": 0.53,
                "meteo": 0.35,
                "meto": 0.27,
                "noaa": 0.25,
                "sg": 0.27
            },
            "swellPeriod": {
                "icon": 6.29,
                "meteo": 3.13,
                "meto": 10.44,
                "noaa": 10.53,
                "sg": 10.44
            },
            "time": "2023-02-14T05:00:00+00:00",
            "waveHeight": {
                "icon": 0.53,
                "meteo": 0.58,
                "meto": 0.34,
                "noaa": 0.51,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 6.13,
                "meteo": 2.86,
                "meto": 4.33,
                "noaa": 10.53,
                "sg": 4.33
            },
            "windDirection": {
                "icon": 190.92,
                "noaa": 177.29,
                "sg": 190.92
            },
            "windSpeed": {
                "icon": 3.68,
                "noaa": 2.88,
                "sg": 3.68
            }
        },
        {
            "airTemperature": {
                "noaa": 2.73,
                "sg": 2.73
            },
            "swellHeight": {
                "icon": 0.51,
                "meteo": 0.41,
                "meto": 0.27,
                "noaa": 0.24,
                "sg": 0.27
            },
            "swellPeriod": {
                "icon": 6.33,
                "meteo": 3.12,
                "meto": 10.43,
                "noaa": 10.49,
                "sg": 10.43
            },
            "time": "2023-02-14T06:00:00+00:00",
            "waveHeight": {
                "icon": 0.52,
                "meteo": 0.58,
                "meto": 0.34,
                "noaa": 0.5,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 6.14,
                "meteo": 2.88,
                "meto": 4.29,
                "noaa": 10.49,
                "sg": 4.29
            },
            "windDirection": {
                "icon": 195.5,
                "noaa": 182.03,
                "sg": 195.5
            },
            "windSpeed": {
                "icon": 3.9,
                "noaa": 2.99,
                "sg": 3.9
            }
        },
        {
            "airTemperature": {
                "noaa": 3.27,
                "sg": 3.27
            },
            "swellHeight": {
                "icon": 0.49,
                "meteo": 0.41,
                "meto": 0.26,
                "noaa": 0.24,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.37,
                "meteo": 3.13,
                "meto": 10.43,
                "noaa": 9.73,
                "sg": 10.43
            },
            "time": "2023-02-14T07:00:00+00:00",
            "waveHeight": {
                "icon": 0.51,
                "meteo": 0.57,
                "meto": 0.34,
                "noaa": 0.48,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 6.08,
                "meteo": 2.87,
                "meto": 4.24,
                "noaa": 10.44,
                "sg": 4.24
            },
            "windDirection": {
                "icon": 200.23,
                "noaa": 185.07,
                "sg": 200.23
            },
            "windSpeed": {
                "icon": 4.03,
                "noaa": 2.95,
                "sg": 4.03
            }
        },
        {
            "airTemperature": {
                "noaa": 3.81,
                "sg": 3.81
            },
            "swellHeight": {
                "icon": 0.48,
                "meteo": 0.4,
                "meto": 0.26,
                "noaa": 0.25,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.41,
                "meteo": 3.15,
                "meto": 10.42,
                "noaa": 8.97,
                "sg": 10.42
            },
            "time": "2023-02-14T08:00:00+00:00",
            "waveHeight": {
                "icon": 0.5,
                "meteo": 0.56,
                "meto": 0.34,
                "noaa": 0.47,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 6.01,
                "meteo": 2.86,
                "meto": 4.17,
                "noaa": 10.4,
                "sg": 4.17
            },
            "windDirection": {
                "icon": 204.97,
                "noaa": 188.12,
                "sg": 204.97
            },
            "windSpeed": {
                "icon": 4.16,
                "noaa": 2.92,
                "sg": 4.16
            }
        },
        {
            "airTemperature": {
                "noaa": 4.36,
                "sg": 4.36
            },
            "swellHeight": {
                "icon": 0.46,
                "meteo": 0.4,
                "meto": 0.26,
                "noaa": 0.25,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.45,
                "meteo": 3.16,
                "meto": 10.4,
                "noaa": 8.21,
                "sg": 10.4
            },
            "time": "2023-02-14T09:00:00+00:00",
            "waveHeight": {
                "icon": 0.49,
                "meteo": 0.55,
                "meto": 0.34,
                "noaa": 0.45,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 5.95,
                "meteo": 2.85,
                "meto": 4.11,
                "noaa": 10.35,
                "sg": 4.11
            },
            "windDirection": {
                "icon": 209.7,
                "noaa": 191.16,
                "sg": 209.7
            },
            "windSpeed": {
                "icon": 4.29,
                "noaa": 2.88,
                "sg": 4.29
            }
        },
        {
            "airTemperature": {
                "noaa": 6.04,
                "sg": 6.04
            },
            "swellHeight": {
                "icon": 0.45,
                "meteo": 0.37,
                "meto": 0.26,
                "noaa": 0.24,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.5,
                "meteo": 3.19,
                "meto": 10.35,
                "noaa": 8.18,
                "sg": 10.35
            },
            "time": "2023-02-14T10:00:00+00:00",
            "waveHeight": {
                "icon": 0.47,
                "meteo": 0.53,
                "meto": 0.35,
                "noaa": 0.44,
                "sg": 0.35
            },
            "wavePeriod": {
                "icon": 6.03,
                "meteo": 2.86,
                "meto": 4.07,
                "noaa": 10.3,
                "sg": 4.07
            },
            "windDirection": {
                "icon": 209.66,
                "noaa": 192.17,
                "sg": 209.66
            },
            "windSpeed": {
                "icon": 4.11,
                "noaa": 3.26,
                "sg": 4.11
            }
        },
        {
            "airTemperature": {
                "noaa": 7.72,
                "sg": 7.72
            },
            "swellHeight": {
                "icon": 0.43,
                "meteo": 0.35,
                "meto": 0.26,
                "noaa": 0.23,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.56,
                "meteo": 3.23,
                "meto": 10.28,
                "noaa": 8.15,
                "sg": 10.28
            },
            "time": "2023-02-14T11:00:00+00:00",
            "waveHeight": {
                "icon": 0.46,
                "meteo": 0.52,
                "meto": 0.35,
                "noaa": 0.42,
                "sg": 0.35
            },
            "wavePeriod": {
                "icon": 6.1,
                "meteo": 2.88,
                "meto": 4.11,
                "noaa": 10.26,
                "sg": 4.11
            },
            "windDirection": {
                "icon": 209.62,
                "noaa": 193.18,
                "sg": 209.62
            },
            "windSpeed": {
                "icon": 3.92,
                "noaa": 3.65,
                "sg": 3.92
            }
        },
        {
            "airTemperature": {
                "noaa": 9.4,
                "sg": 9.4
            },
            "swellHeight": {
                "icon": 0.42,
                "meteo": 0.32,
                "meto": 0.26,
                "noaa": 0.22,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.61,
                "meteo": 3.26,
                "meto": 10.2,
                "noaa": 8.12,
                "sg": 10.2
            },
            "time": "2023-02-14T12:00:00+00:00",
            "waveHeight": {
                "icon": 0.44,
                "meteo": 0.5,
                "meto": 0.35,
                "noaa": 0.41,
                "sg": 0.35
            },
            "wavePeriod": {
                "icon": 6.18,
                "meteo": 2.89,
                "meto": 4.23,
                "noaa": 10.21,
                "sg": 4.23
            },
            "windDirection": {
                "icon": 209.58,
                "noaa": 194.19,
                "sg": 209.58
            },
            "windSpeed": {
                "icon": 3.73,
                "noaa": 4.03,
                "sg": 3.73
            }
        },
        {
            "airTemperature": {
                "noaa": 9.8,
                "sg": 9.8
            },
            "swellHeight": {
                "icon": 0.41,
                "meteo": 0.27,
                "meto": 0.26,
                "noaa": 0.2,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.75,
                "meteo": 4.84,
                "meto": 10.12,
                "noaa": 8.76,
                "sg": 10.12
            },
            "time": "2023-02-14T13:00:00+00:00",
            "waveHeight": {
                "icon": 0.42,
                "meteo": 0.51,
                "meto": 0.35,
                "noaa": 0.41,
                "sg": 0.35
            },
            "wavePeriod": {
                "icon": 6.44,
                "meteo": 2.86,
                "meto": 4.33,
                "noaa": 10.15,
                "sg": 4.33
            },
            "windDirection": {
                "icon": 208.34,
                "noaa": 189.58,
                "sg": 208.34
            },
            "windSpeed": {
                "icon": 3.38,
                "noaa": 3.85,
                "sg": 3.38
            }
        },
        {
            "airTemperature": {
                "noaa": 10.2,
                "sg": 10.2
            },
            "swellHeight": {
                "icon": 0.4,
                "meteo": 0.23,
                "meto": 0.26,
                "noaa": 0.18,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 6.88,
                "meteo": 6.43,
                "meto": 10.02,
                "noaa": 9.39,
                "sg": 10.02
            },
            "time": "2023-02-14T14:00:00+00:00",
            "waveHeight": {
                "icon": 0.41,
                "meteo": 0.53,
                "meto": 0.34,
                "noaa": 0.4,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 6.71,
                "meteo": 2.82,
                "meto": 4.36,
                "noaa": 10.09,
                "sg": 4.36
            },
            "windDirection": {
                "icon": 207.09,
                "noaa": 184.97,
                "sg": 207.09
            },
            "windSpeed": {
                "icon": 3.03,
                "noaa": 3.66,
                "sg": 3.03
            }
        },
        {
            "airTemperature": {
                "noaa": 10.61,
                "sg": 10.61
            },
            "swellHeight": {
                "icon": 0.39,
                "meteo": 0.18,
                "meto": 0.26,
                "noaa": 0.16,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 7.02,
                "meteo": 8.01,
                "meto": 9.95,
                "noaa": 10.03,
                "sg": 9.95
            },
            "time": "2023-02-14T15:00:00+00:00",
            "waveHeight": {
                "icon": 0.39,
                "meteo": 0.54,
                "meto": 0.33,
                "noaa": 0.4,
                "sg": 0.33
            },
            "wavePeriod": {
                "icon": 6.97,
                "meteo": 2.79,
                "meto": 4.31,
                "noaa": 10.03,
                "sg": 4.31
            },
            "windDirection": {
                "icon": 205.85,
                "noaa": 180.36,
                "sg": 205.85
            },
            "windSpeed": {
                "icon": 2.68,
                "noaa": 3.48,
                "sg": 2.68
            }
        },
        {
            "airTemperature": {
                "noaa": 9.18,
                "sg": 9.18
            },
            "swellHeight": {
                "icon": 0.38,
                "meteo": 0.23,
                "meto": 0.26,
                "noaa": 0.16,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 7.23,
                "meteo": 6.37,
                "meto": 9.88,
                "noaa": 9.91,
                "sg": 9.88
            },
            "time": "2023-02-14T16:00:00+00:00",
            "waveHeight": {
                "icon": 0.38,
                "meteo": 0.54,
                "meto": 0.33,
                "noaa": 0.41,
                "sg": 0.33
            },
            "wavePeriod": {
                "icon": 7.19,
                "meteo": 2.83,
                "meto": 4.3,
                "noaa": 8.79,
                "sg": 4.3
            },
            "windDirection": {
                "icon": 204.77,
                "noaa": 175.46,
                "sg": 204.77
            },
            "windSpeed": {
                "icon": 2.32,
                "noaa": 3.32,
                "sg": 2.32
            }
        },
        {
            "airTemperature": {
                "noaa": 7.75,
                "sg": 7.75
            },
            "swellHeight": {
                "icon": 0.38,
                "meteo": 0.28,
                "meto": 0.26,
                "noaa": 0.15,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 7.43,
                "meteo": 4.72,
                "meto": 9.84,
                "noaa": 9.8,
                "sg": 9.84
            },
            "time": "2023-02-14T17:00:00+00:00",
            "waveHeight": {
                "icon": 0.38,
                "meteo": 0.55,
                "meto": 0.33,
                "noaa": 0.41,
                "sg": 0.33
            },
            "wavePeriod": {
                "icon": 7.42,
                "meteo": 2.86,
                "meto": 4.35,
                "noaa": 7.55,
                "sg": 4.35
            },
            "windDirection": {
                "icon": 203.69,
                "noaa": 170.57,
                "sg": 203.69
            },
            "windSpeed": {
                "icon": 1.96,
                "noaa": 3.15,
                "sg": 1.96
            }
        },
        {
            "airTemperature": {
                "noaa": 6.31,
                "sg": 6.31
            },
            "swellHeight": {
                "icon": 0.37,
                "meteo": 0.33,
                "meto": 0.26,
                "noaa": 0.15,
                "sg": 0.26
            },
            "swellPeriod": {
                "icon": 7.64,
                "meteo": 3.08,
                "meto": 9.79,
                "noaa": 9.68,
                "sg": 9.79
            },
            "time": "2023-02-14T18:00:00+00:00",
            "waveHeight": {
                "icon": 0.37,
                "meteo": 0.55,
                "meto": 0.33,
                "noaa": 0.42,
                "sg": 0.33
            },
            "wavePeriod": {
                "icon": 7.64,
                "meteo": 2.9,
                "meto": 4.38,
                "noaa": 6.31,
                "sg": 4.38
            },
            "windDirection": {
                "icon": 202.61,
                "noaa": 165.67,
                "sg": 202.61
            },
            "windSpeed": {
                "icon": 1.6,
                "noaa": 2.99,
                "sg": 1.6
            }
        },
        {
            "airTemperature": {
                "noaa": 5.9,
                "sg": 5.9
            },
            "swellHeight": {
                "icon": 0.37,
                "meteo": 0.34,
                "meto": 0.27,
                "noaa": 0.13,
                "sg": 0.27
            },
            "swellPeriod": {
                "icon": 7.78,
                "meteo": 3.07,
                "meto": 9.75,
                "noaa": 10.83,
                "sg": 9.75
            },
            "time": "2023-02-14T19:00:00+00:00",
            "waveHeight": {
                "icon": 0.37,
                "meteo": 0.54,
                "meto": 0.34,
                "noaa": 0.42,
                "sg": 0.34
            },
            "wavePeriod": {
                "icon": 7.78,
                "meteo": 2.97,
                "meto": 4.37,
                "noaa": 5.79,
                "sg": 4.37
            },
            "windDirection": {
                "icon": 207.41,
                "noaa": 163.51,
                "sg": 207.41
            },
            "windSpeed": {
                "icon": 1.7,
                "noaa": 2.83,
                "sg": 1.7
            }
        },
        {
            "airTemperature": {
                "noaa": 5.48,
                "sg": 5.48
            },
            "swellHeight": {
                "icon": 0.36,
                "meteo": 0.36,
                "meto": 0.27,
                "noaa": 0.12,
                "sg": 0.27
            },
            "swellPeriod": {
                "icon": 7.92,
                "meteo": 3.05,
                "meto": 9.72,
                "noaa": 11.98,
                "sg": 9.72
            },
            "time": "2023-02-14T20:00:00+00:00",
            "waveHeight": {
                "icon": 0.36,
                "meteo": 0.52,
                "meto": 0.35,
                "noaa": 0.43,
                "sg": 0.35
            },
            "wavePeriod": {
                "icon": 7.92,
                "meteo": 3.03,
                "meto": 4.34,
                "noaa": 5.26,
                "sg": 4.34
            },
            "windDirection": {
                "icon": 212.2,
                "noaa": 161.34,
                "sg": 212.2
            },
            "windSpeed": {
                "icon": 1.8,
                "noaa": 2.68,
                "sg": 1.8
            }
        },
        {
            "airTemperature": {
                "noaa": 5.07,
                "sg": 5.07
            },
            "swellHeight": {
                "icon": 0.36,
                "meteo": 0.37,
                "meto": 0.28,
                "noaa": 0.1,
                "sg": 0.28
            },
            "swellPeriod": {
                "icon": 8.06,
                "meteo": 3.04,
                "meto": 9.69,
                "noaa": 13.13,
                "sg": 9.69
            },
            "time": "2023-02-14T21:00:00+00:00",
            "waveHeight": {
                "icon": 0.36,
                "meteo": 0.51,
                "meto": 0.36,
                "noaa": 0.43,
                "sg": 0.36
            },
            "wavePeriod": {
                "icon": 8.06,
                "meteo": 3.1,
                "meto": 4.33,
                "noaa": 4.74,
                "sg": 4.33
            },
            "windDirection": {
                "icon": 217,
                "noaa": 159.18,
                "sg": 217
            },
            "windSpeed": {
                "icon": 1.9,
                "noaa": 2.52,
                "sg": 1.9
            }
        },
        {
            "airTemperature": {
                "noaa": 4.75,
                "sg": 4.75
            },
            "swellHeight": {
                "icon": 0.36,
                "meteo": 0.36,
                "meto": 0.28,
                "noaa": 0.11,
                "sg": 0.28
            },
            "swellPeriod": {
                "icon": 8.13,
                "meteo": 3.03,
                "meto": 9.65,
                "noaa": 13.13,
                "sg": 9.65
            },
            "time": "2023-02-14T22:00:00+00:00",
            "waveHeight": {
                "icon": 0.36,
                "meteo": 0.51,
                "meto": 0.37,
                "noaa": 0.42,
                "sg": 0.37
            },
            "wavePeriod": {
                "icon": 8.13,
                "meteo": 3.08,
                "meto": 4.3,
                "noaa": 4.41,
                "sg": 4.3
            },
            "windDirection": {
                "icon": 219.84,
                "noaa": 159.91,
                "sg": 219.84
            },
            "windSpeed": {
                "icon": 1.96,
                "noaa": 2.54,
                "sg": 1.96
            }
        },
        {
            "airTemperature": {
                "noaa": 4.44,
                "sg": 4.44
            },
            "swellHeight": {
                "icon": 0.37,
                "meteo": 0.35,
                "meto": 0.29,
                "noaa": 0.11,
                "sg": 0.29
            },
            "swellPeriod": {
                "icon": 8.2,
                "meteo": 3.02,
                "meto": 9.6,
                "noaa": 13.13,
                "sg": 9.6
            },
            "time": "2023-02-14T23:00:00+00:00",
            "waveHeight": {
                "icon": 0.37,
                "meteo": 0.51,
                "meto": 0.37,
                "noaa": 0.41,
                "sg": 0.37
            },
            "wavePeriod": {
                "icon": 8.2,
                "meteo": 3.05,
                "meto": 4.27,
                "noaa": 4.07,
                "sg": 4.27
            },
            "windDirection": {
                "icon": 222.67,
                "noaa": 160.64,
                "sg": 222.67
            },
            "windSpeed": {
                "icon": 2.02,
                "noaa": 2.55,
                "sg": 2.02
            }
        },
        {
            "airTemperature": {
                "noaa": 4.12,
                "sg": 4.12
            },
            "swellHeight": {
                "icon": 0.37,
                "meteo": 0.34,
                "meto": 0.29,
                "noaa": 0.12,
                "sg": 0.29
            },
            "swellPeriod": {
                "icon": 8.27,
                "meteo": 3.01,
                "meto": 9.6,
                "noaa": 13.13,
                "sg": 9.6
            },
            "time": "2023-02-15T00:00:00+00:00",
            "waveHeight": {
                "icon": 0.37,
                "meteo": 0.51,
                "meto": 0.37,
                "noaa": 0.4,
                "sg": 0.37
            },
            "wavePeriod": {
                "icon": 8.27,
                "meteo": 3.03,
                "meto": 4.27,
                "noaa": 3.74,
                "sg": 4.27
            },
            "windDirection": {
                "icon": 225.51,
                "noaa": 161.37,
                "sg": 225.51
            },
            "windSpeed": {
                "icon": 2.08,
                "noaa": 2.57,
                "sg": 2.08
            }
        },
        {
            "airTemperature": {
                "noaa": 3.74,
                "sg": 3.74
            },
            "swellHeight": {
                "icon": 0.37,
                "meteo": 0.34,
                "noaa": 0.13,
                "sg": 0.34
            },
            "swellPeriod": {
                "icon": 8.3,
                "meteo": 3.02,
                "noaa": 12.98,
                "sg": 3.02
            },
            "time": "2023-02-15T01:00:00+00:00",
            "waveHeight": {
                "icon": 0.37,
                "meteo": 0.51,
                "noaa": 0.42,
                "sg": 0.51
            },
            "wavePeriod": {
                "icon": 8.3,
                "meteo": 3.03,
                "noaa": 4.15,
                "sg": 3.03
            },
            "windDirection": {
                "icon": 222.25,
                "noaa": 157.69,
                "sg": 222.25
            },
            "windSpeed": {
                "icon": 2.19,
                "noaa": 2.65,
                "sg": 2.19
            }
        },
        {
            "airTemperature": {
                "noaa": 3.35,
                "sg": 3.35
            },
            "swellHeight": {
                "icon": 0.38,
                "meteo": 0.33,
                "noaa": 0.13,
                "sg": 0.33
            },
            "swellPeriod": {
                "icon": 8.33,
                "meteo": 3.02,
                "noaa": 12.82,
                "sg": 3.02
            },
            "time": "2023-02-15T02:00:00+00:00",
            "waveHeight": {
                "icon": 0.38,
                "meteo": 0.51,
                "noaa": 0.44,
                "sg": 0.51
            },
            "wavePeriod": {
                "icon": 8.33,
                "meteo": 3.04,
                "noaa": 4.56,
                "sg": 3.04
            },
            "windDirection": {
                "icon": 218.98,
                "noaa": 154.01,
                "sg": 218.98
            },
            "windSpeed": {
                "icon": 2.29,
                "noaa": 2.74,
                "sg": 2.29
            }
        },
        {
            "airTemperature": {
                "noaa": 2.97,
                "sg": 2.97
            },
            "swellHeight": {
                "icon": 0.38,
                "meteo": 0.33,
                "noaa": 0.14,
                "sg": 0.33
            },
            "swellPeriod": {
                "icon": 8.36,
                "meteo": 3.03,
                "noaa": 12.67,
                "sg": 3.03
            },
            "time": "2023-02-15T03:00:00+00:00",
            "waveHeight": {
                "icon": 0.38,
                "meteo": 0.51,
                "noaa": 0.46,
                "sg": 0.51
            },
            "wavePeriod": {
                "icon": 8.36,
                "meteo": 3.04,
                "noaa": 4.97,
                "sg": 3.04
            },
            "windDirection": {
                "icon": 215.72,
                "noaa": 150.33,
                "sg": 215.72
            },
            "windSpeed": {
                "icon": 2.4,
                "noaa": 2.82,
                "sg": 2.4
            }
        },
        {
            "airTemperature": {
                "noaa": 2.77,
                "sg": 2.77
            },
            "swellHeight": {
                "icon": 0.38,
                "meteo": 0.32,
                "noaa": 0.12,
                "sg": 0.32
            },
            "swellPeriod": {
                "icon": 8.28,
                "meteo": 3.03,
                "noaa": 11.43,
                "sg": 3.03
            },
            "time": "2023-02-15T04:00:00+00:00",
            "waveHeight": {
                "icon": 0.39,
                "meteo": 0.51,
                "noaa": 0.47,
                "sg": 0.51
            },
            "wavePeriod": {
                "icon": 8.17,
                "meteo": 3.03,
                "noaa": 5.04,
                "sg": 3.03
            },
            "windDirection": {
                "icon": 212.78,
                "noaa": 154.9,
                "sg": 212.78
            },
            "windSpeed": {
                "icon": 3.2,
                "noaa": 2.61,
                "sg": 3.2
            }
        },
        {
            "airTemperature": {
                "noaa": 2.58,
                "sg": 2.58
            },
            "swellHeight": {
                "icon": 0.39,
                "meteo": 0.32,
                "noaa": 0.1,
                "sg": 0.32
            },
            "swellPeriod": {
                "icon": 8.2,
                "meteo": 3.03,
                "noaa": 10.18,
                "sg": 3.03
            },
            "time": "2023-02-15T05:00:00+00:00",
            "waveHeight": {
                "icon": 0.39,
                "meteo": 0.5,
                "noaa": 0.48,
                "sg": 0.5
            },
            "wavePeriod": {
                "icon": 7.97,
                "meteo": 3.03,
                "noaa": 5.11,
                "sg": 3.03
            },
            "windDirection": {
                "icon": 209.85,
                "noaa": 159.48,
                "sg": 209.85
            },
            "windSpeed": {
                "icon": 3.99,
                "noaa": 2.41,
                "sg": 3.99
            }
        },
        {
            "airTemperature": {
                "noaa": 2.39,
                "sg": 2.39
            },
            "swellHeight": {
                "icon": 0.39,
                "meteo": 0.31,
                "noaa": 0.08,
                "sg": 0.31
            },
            "swellPeriod": {
                "icon": 8.12,
                "meteo": 3.03,
                "noaa": 8.94,
                "sg": 3.03
            },
            "time": "2023-02-15T06:00:00+00:00",
            "waveHeight": {
                "icon": 0.4,
                "meteo": 0.5,
                "noaa": 0.49,
                "sg": 0.5
            },
            "wavePeriod": {
                "icon": 7.78,
                "meteo": 3.02,
                "noaa": 5.18,
                "sg": 3.02
            },
            "windDirection": {
                "icon": 206.91,
                "noaa": 164.05,
                "sg": 206.91
            },
            "windSpeed": {
                "icon": 4.79,
                "noaa": 2.2,
                "sg": 4.79
            }
        },
        {
            "airTemperature": {
                "noaa": 2.96,
                "sg": 2.96
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.13,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 4.79,
                "noaa": 9.02,
                "sg": 4.79
            },
            "time": "2023-02-15T07:00:00+00:00",
            "waveHeight": {
                "meteo": 0.5,
                "noaa": 0.48,
                "sg": 0.5
            },
            "wavePeriod": {
                "meteo": 2.98,
                "noaa": 5.83,
                "sg": 2.98
            },
            "windDirection": {
                "noaa": 165.12,
                "sg": 165.12
            },
            "windSpeed": {
                "noaa": 2.14,
                "sg": 2.14
            }
        },
        {
            "airTemperature": {
                "noaa": 3.54,
                "sg": 3.54
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.19,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 6.55,
                "noaa": 9.1,
                "sg": 6.55
            },
            "time": "2023-02-15T08:00:00+00:00",
            "waveHeight": {
                "meteo": 0.51,
                "noaa": 0.48,
                "sg": 0.51
            },
            "wavePeriod": {
                "meteo": 2.94,
                "noaa": 6.48,
                "sg": 2.94
            },
            "windDirection": {
                "noaa": 166.18,
                "sg": 166.18
            },
            "windSpeed": {
                "noaa": 2.08,
                "sg": 2.08
            }
        },
        {
            "airTemperature": {
                "noaa": 4.11,
                "sg": 4.11
            },
            "swellHeight": {
                "meteo": 0.29,
                "noaa": 0.24,
                "sg": 0.29
            },
            "swellPeriod": {
                "meteo": 8.31,
                "noaa": 9.18,
                "sg": 8.31
            },
            "time": "2023-02-15T09:00:00+00:00",
            "waveHeight": {
                "meteo": 0.51,
                "noaa": 0.47,
                "sg": 0.51
            },
            "wavePeriod": {
                "meteo": 2.9,
                "noaa": 7.13,
                "sg": 2.9
            },
            "windDirection": {
                "noaa": 167.25,
                "sg": 167.25
            },
            "windSpeed": {
                "noaa": 2.02,
                "sg": 2.02
            }
        },
        {
            "airTemperature": {
                "noaa": 5.77,
                "sg": 5.77
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.23,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 6.52,
                "noaa": 9.87,
                "sg": 6.52
            },
            "time": "2023-02-15T10:00:00+00:00",
            "waveHeight": {
                "meteo": 0.53,
                "noaa": 0.47,
                "sg": 0.53
            },
            "wavePeriod": {
                "meteo": 2.88,
                "noaa": 8.5,
                "sg": 2.88
            },
            "windDirection": {
                "noaa": 171.22,
                "sg": 171.22
            },
            "windSpeed": {
                "noaa": 2.62,
                "sg": 2.62
            }
        },
        {
            "airTemperature": {
                "noaa": 7.42,
                "sg": 7.42
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.22,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 4.72,
                "noaa": 10.55,
                "sg": 4.72
            },
            "time": "2023-02-15T11:00:00+00:00",
            "waveHeight": {
                "meteo": 0.54,
                "noaa": 0.46,
                "sg": 0.54
            },
            "wavePeriod": {
                "meteo": 2.86,
                "noaa": 9.87,
                "sg": 2.86
            },
            "windDirection": {
                "noaa": 175.19,
                "sg": 175.19
            },
            "windSpeed": {
                "noaa": 3.23,
                "sg": 3.23
            }
        },
        {
            "airTemperature": {
                "noaa": 9.08,
                "sg": 9.08
            },
            "swellHeight": {
                "meteo": 0.31,
                "noaa": 0.21,
                "sg": 0.31
            },
            "swellPeriod": {
                "meteo": 2.93,
                "noaa": 11.24,
                "sg": 2.93
            },
            "time": "2023-02-15T12:00:00+00:00",
            "waveHeight": {
                "meteo": 0.56,
                "noaa": 0.46,
                "sg": 0.56
            },
            "wavePeriod": {
                "meteo": 2.84,
                "noaa": 11.24,
                "sg": 2.84
            },
            "windDirection": {
                "noaa": 179.16,
                "sg": 179.16
            },
            "windSpeed": {
                "noaa": 3.83,
                "sg": 3.83
            }
        },
        {
            "airTemperature": {
                "noaa": 9.49,
                "sg": 9.49
            },
            "swellHeight": {
                "meteo": 0.31,
                "noaa": 0.21,
                "sg": 0.31
            },
            "swellPeriod": {
                "meteo": 2.99,
                "noaa": 11.14,
                "sg": 2.99
            },
            "time": "2023-02-15T13:00:00+00:00",
            "waveHeight": {
                "meteo": 0.58,
                "noaa": 0.47,
                "sg": 0.58
            },
            "wavePeriod": {
                "meteo": 2.85,
                "noaa": 11.14,
                "sg": 2.85
            },
            "windDirection": {
                "noaa": 180.02,
                "sg": 180.02
            },
            "windSpeed": {
                "noaa": 3.7,
                "sg": 3.7
            }
        },
        {
            "airTemperature": {
                "noaa": 9.9,
                "sg": 9.9
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.21,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 3.05,
                "noaa": 11.05,
                "sg": 3.05
            },
            "time": "2023-02-15T14:00:00+00:00",
            "waveHeight": {
                "meteo": 0.6,
                "noaa": 0.48,
                "sg": 0.6
            },
            "wavePeriod": {
                "meteo": 2.86,
                "noaa": 11.05,
                "sg": 2.86
            },
            "windDirection": {
                "noaa": 180.87,
                "sg": 180.87
            },
            "windSpeed": {
                "noaa": 3.58,
                "sg": 3.58
            }
        },
        {
            "airTemperature": {
                "noaa": 10.31,
                "sg": 10.31
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.21,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 3.11,
                "noaa": 10.95,
                "sg": 3.11
            },
            "time": "2023-02-15T15:00:00+00:00",
            "waveHeight": {
                "meteo": 0.62,
                "noaa": 0.49,
                "sg": 0.62
            },
            "wavePeriod": {
                "meteo": 2.87,
                "noaa": 10.95,
                "sg": 2.87
            },
            "windDirection": {
                "noaa": 181.73,
                "sg": 181.73
            },
            "windSpeed": {
                "noaa": 3.45,
                "sg": 3.45
            }
        },
        {
            "airTemperature": {
                "noaa": 8.9,
                "sg": 8.9
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.24,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 3.17,
                "noaa": 10.1,
                "sg": 3.17
            },
            "time": "2023-02-15T16:00:00+00:00",
            "waveHeight": {
                "meteo": 0.64,
                "noaa": 0.5,
                "sg": 0.64
            },
            "wavePeriod": {
                "meteo": 2.88,
                "noaa": 8.64,
                "sg": 2.88
            },
            "windDirection": {
                "noaa": 176.77,
                "sg": 176.77
            },
            "windSpeed": {
                "noaa": 3.32,
                "sg": 3.32
            }
        },
        {
            "airTemperature": {
                "noaa": 7.49,
                "sg": 7.49
            },
            "swellHeight": {
                "meteo": 0.29,
                "noaa": 0.26,
                "sg": 0.29
            },
            "swellPeriod": {
                "meteo": 3.23,
                "noaa": 9.24,
                "sg": 3.23
            },
            "time": "2023-02-15T17:00:00+00:00",
            "waveHeight": {
                "meteo": 0.66,
                "noaa": 0.51,
                "sg": 0.66
            },
            "wavePeriod": {
                "meteo": 2.9,
                "noaa": 6.33,
                "sg": 2.9
            },
            "windDirection": {
                "noaa": 171.8,
                "sg": 171.8
            },
            "windSpeed": {
                "noaa": 3.18,
                "sg": 3.18
            }
        },
        {
            "airTemperature": {
                "noaa": 6.07,
                "sg": 6.07
            },
            "swellHeight": {
                "meteo": 0.29,
                "noaa": 0.29,
                "sg": 0.29
            },
            "swellPeriod": {
                "meteo": 3.29,
                "noaa": 8.39,
                "sg": 3.29
            },
            "time": "2023-02-15T18:00:00+00:00",
            "waveHeight": {
                "meteo": 0.68,
                "noaa": 0.52,
                "sg": 0.68
            },
            "wavePeriod": {
                "meteo": 2.91,
                "noaa": 4.02,
                "sg": 2.91
            },
            "windDirection": {
                "noaa": 166.84,
                "sg": 166.84
            },
            "windSpeed": {
                "noaa": 3.05,
                "sg": 3.05
            }
        },
        {
            "airTemperature": {
                "noaa": 5.8,
                "sg": 5.8
            },
            "swellHeight": {
                "meteo": 0.32,
                "noaa": 0.28,
                "sg": 0.32
            },
            "swellPeriod": {
                "meteo": 3.3,
                "noaa": 8.35,
                "sg": 3.3
            },
            "time": "2023-02-15T19:00:00+00:00",
            "waveHeight": {
                "meteo": 0.7,
                "noaa": 0.51,
                "sg": 0.7
            },
            "wavePeriod": {
                "meteo": 2.91,
                "noaa": 4.93,
                "sg": 2.91
            },
            "windDirection": {
                "noaa": 174.53,
                "sg": 174.53
            },
            "windSpeed": {
                "noaa": 3.13,
                "sg": 3.13
            }
        },
        {
            "airTemperature": {
                "noaa": 5.52,
                "sg": 5.52
            },
            "swellHeight": {
                "meteo": 0.34,
                "noaa": 0.28,
                "sg": 0.34
            },
            "swellPeriod": {
                "meteo": 3.31,
                "noaa": 8.3,
                "sg": 3.31
            },
            "time": "2023-02-15T20:00:00+00:00",
            "waveHeight": {
                "meteo": 0.72,
                "noaa": 0.51,
                "sg": 0.72
            },
            "wavePeriod": {
                "meteo": 2.91,
                "noaa": 5.84,
                "sg": 2.91
            },
            "windDirection": {
                "noaa": 182.22,
                "sg": 182.22
            },
            "windSpeed": {
                "noaa": 3.22,
                "sg": 3.22
            }
        },
        {
            "airTemperature": {
                "noaa": 5.25,
                "sg": 5.25
            },
            "swellHeight": {
                "meteo": 0.37,
                "noaa": 0.27,
                "sg": 0.37
            },
            "swellPeriod": {
                "meteo": 3.32,
                "noaa": 8.26,
                "sg": 3.32
            },
            "time": "2023-02-15T21:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.5,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 2.91,
                "noaa": 6.75,
                "sg": 2.91
            },
            "windDirection": {
                "noaa": 189.91,
                "sg": 189.91
            },
            "windSpeed": {
                "noaa": 3.3,
                "sg": 3.3
            }
        },
        {
            "airTemperature": {
                "noaa": 5.05,
                "sg": 5.05
            },
            "swellHeight": {
                "meteo": 0.34,
                "noaa": 0.28,
                "sg": 0.34
            },
            "swellPeriod": {
                "meteo": 3.4,
                "noaa": 7.6,
                "sg": 3.4
            },
            "time": "2023-02-15T22:00:00+00:00",
            "waveHeight": {
                "meteo": 0.76,
                "noaa": 0.5,
                "sg": 0.76
            },
            "wavePeriod": {
                "meteo": 2.92,
                "noaa": 8.11,
                "sg": 2.92
            },
            "windDirection": {
                "noaa": 191.57,
                "sg": 191.57
            },
            "windSpeed": {
                "noaa": 3.46,
                "sg": 3.46
            }
        },
        {
            "airTemperature": {
                "noaa": 4.86,
                "sg": 4.86
            },
            "swellHeight": {
                "meteo": 0.3,
                "noaa": 0.28,
                "sg": 0.3
            },
            "swellPeriod": {
                "meteo": 3.48,
                "noaa": 6.94,
                "sg": 3.48
            },
            "time": "2023-02-15T23:00:00+00:00",
            "waveHeight": {
                "meteo": 0.77,
                "noaa": 0.5,
                "sg": 0.77
            },
            "wavePeriod": {
                "meteo": 2.92,
                "noaa": 9.48,
                "sg": 2.92
            },
            "windDirection": {
                "noaa": 193.24,
                "sg": 193.24
            },
            "windSpeed": {
                "noaa": 3.63,
                "sg": 3.63
            }
        },
        {
            "airTemperature": {
                "noaa": 4.66,
                "sg": 4.66
            },
            "swellHeight": {
                "meteo": 0.27,
                "noaa": 0.29,
                "sg": 0.27
            },
            "swellPeriod": {
                "meteo": 3.56,
                "noaa": 6.28,
                "sg": 3.56
            },
            "time": "2023-02-16T00:00:00+00:00",
            "waveHeight": {
                "meteo": 0.79,
                "noaa": 0.5,
                "sg": 0.79
            },
            "wavePeriod": {
                "meteo": 2.93,
                "noaa": 10.84,
                "sg": 2.93
            },
            "windDirection": {
                "noaa": 194.9,
                "sg": 194.9
            },
            "windSpeed": {
                "noaa": 3.79,
                "sg": 3.79
            }
        },
        {
            "airTemperature": {
                "noaa": 4.46,
                "sg": 4.46
            },
            "swellHeight": {
                "meteo": 0.25,
                "noaa": 0.32,
                "sg": 0.25
            },
            "swellPeriod": {
                "meteo": 5.09,
                "noaa": 5.54,
                "sg": 5.09
            },
            "time": "2023-02-16T01:00:00+00:00",
            "waveHeight": {
                "meteo": 0.78,
                "noaa": 0.49,
                "sg": 0.78
            },
            "wavePeriod": {
                "meteo": 2.95,
                "noaa": 10.68,
                "sg": 2.95
            },
            "windDirection": {
                "noaa": 203.97,
                "sg": 203.97
            },
            "windSpeed": {
                "noaa": 3.57,
                "sg": 3.57
            }
        },
        {
            "airTemperature": {
                "noaa": 4.26,
                "sg": 4.26
            },
            "swellHeight": {
                "meteo": 0.23,
                "noaa": 0.34,
                "sg": 0.23
            },
            "swellPeriod": {
                "meteo": 6.61,
                "noaa": 4.8,
                "sg": 6.61
            },
            "time": "2023-02-16T02:00:00+00:00",
            "waveHeight": {
                "meteo": 0.78,
                "noaa": 0.49,
                "sg": 0.78
            },
            "wavePeriod": {
                "meteo": 2.97,
                "noaa": 10.51,
                "sg": 2.97
            },
            "windDirection": {
                "noaa": 213.05,
                "sg": 213.05
            },
            "windSpeed": {
                "noaa": 3.35,
                "sg": 3.35
            }
        },
        {
            "airTemperature": {
                "noaa": 4.05,
                "sg": 4.05
            },
            "swellHeight": {
                "meteo": 0.21,
                "noaa": 0.37,
                "sg": 0.21
            },
            "swellPeriod": {
                "meteo": 8.14,
                "noaa": 4.06,
                "sg": 8.14
            },
            "time": "2023-02-16T03:00:00+00:00",
            "waveHeight": {
                "meteo": 0.77,
                "noaa": 0.48,
                "sg": 0.77
            },
            "wavePeriod": {
                "meteo": 2.99,
                "noaa": 10.35,
                "sg": 2.99
            },
            "windDirection": {
                "noaa": 222.12,
                "sg": 222.12
            },
            "windSpeed": {
                "noaa": 3.13,
                "sg": 3.13
            }
        },
        {
            "airTemperature": {
                "noaa": 4.31,
                "sg": 4.31
            },
            "swellHeight": {
                "meteo": 0.2,
                "noaa": 0.36,
                "sg": 0.2
            },
            "swellPeriod": {
                "meteo": 8.11,
                "noaa": 4.09,
                "sg": 8.11
            },
            "time": "2023-02-16T04:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.45,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 2.95,
                "noaa": 10.31,
                "sg": 2.95
            },
            "windDirection": {
                "noaa": 227.76,
                "sg": 227.76
            },
            "windSpeed": {
                "noaa": 2.96,
                "sg": 2.96
            }
        },
        {
            "airTemperature": {
                "noaa": 4.57,
                "sg": 4.57
            },
            "swellHeight": {
                "meteo": 0.2,
                "noaa": 0.35,
                "sg": 0.2
            },
            "swellPeriod": {
                "meteo": 8.07,
                "noaa": 4.11,
                "sg": 8.07
            },
            "time": "2023-02-16T05:00:00+00:00",
            "waveHeight": {
                "meteo": 0.7,
                "noaa": 0.43,
                "sg": 0.7
            },
            "wavePeriod": {
                "meteo": 2.91,
                "noaa": 10.26,
                "sg": 2.91
            },
            "windDirection": {
                "noaa": 233.41,
                "sg": 233.41
            },
            "windSpeed": {
                "noaa": 2.78,
                "sg": 2.78
            }
        },
        {
            "airTemperature": {
                "noaa": 4.82,
                "sg": 4.82
            },
            "swellHeight": {
                "meteo": 0.19,
                "noaa": 0.34,
                "sg": 0.19
            },
            "swellPeriod": {
                "meteo": 8.04,
                "noaa": 4.14,
                "sg": 8.04
            },
            "time": "2023-02-16T06:00:00+00:00",
            "waveHeight": {
                "meteo": 0.67,
                "noaa": 0.4,
                "sg": 0.67
            },
            "wavePeriod": {
                "meteo": 2.87,
                "noaa": 10.22,
                "sg": 2.87
            },
            "windDirection": {
                "noaa": 239.05,
                "sg": 239.05
            },
            "windSpeed": {
                "noaa": 2.61,
                "sg": 2.61
            }
        },
        {
            "airTemperature": {
                "noaa": 5.33,
                "sg": 5.33
            },
            "swellHeight": {
                "meteo": 0.18,
                "noaa": 0.32,
                "sg": 0.18
            },
            "swellPeriod": {
                "meteo": 8.01,
                "noaa": 4.12,
                "sg": 8.01
            },
            "time": "2023-02-16T07:00:00+00:00",
            "waveHeight": {
                "meteo": 0.65,
                "noaa": 0.39,
                "sg": 0.65
            },
            "wavePeriod": {
                "meteo": 2.83,
                "noaa": 10.08,
                "sg": 2.83
            },
            "windDirection": {
                "noaa": 241.89,
                "sg": 241.89
            },
            "windSpeed": {
                "noaa": 2.62,
                "sg": 2.62
            }
        },
        {
            "airTemperature": {
                "noaa": 5.83,
                "sg": 5.83
            },
            "swellHeight": {
                "meteo": 0.17,
                "noaa": 0.31,
                "sg": 0.17
            },
            "swellPeriod": {
                "meteo": 7.97,
                "noaa": 4.11,
                "sg": 7.97
            },
            "time": "2023-02-16T08:00:00+00:00",
            "waveHeight": {
                "meteo": 0.62,
                "noaa": 0.37,
                "sg": 0.62
            },
            "wavePeriod": {
                "meteo": 2.79,
                "noaa": 9.94,
                "sg": 2.79
            },
            "windDirection": {
                "noaa": 244.74,
                "sg": 244.74
            },
            "windSpeed": {
                "noaa": 2.62,
                "sg": 2.62
            }
        },
        {
            "airTemperature": {
                "noaa": 6.33,
                "sg": 6.33
            },
            "swellHeight": {
                "meteo": 0.16,
                "noaa": 0.29,
                "sg": 0.16
            },
            "swellPeriod": {
                "meteo": 7.94,
                "noaa": 4.09,
                "sg": 7.94
            },
            "time": "2023-02-16T09:00:00+00:00",
            "waveHeight": {
                "meteo": 0.6,
                "noaa": 0.36,
                "sg": 0.6
            },
            "wavePeriod": {
                "meteo": 2.75,
                "noaa": 9.8,
                "sg": 2.75
            },
            "windDirection": {
                "noaa": 247.58,
                "sg": 247.58
            },
            "windSpeed": {
                "noaa": 2.63,
                "sg": 2.63
            }
        },
        {
            "airTemperature": {
                "noaa": 7.77,
                "sg": 7.77
            },
            "swellHeight": {
                "meteo": 0.17,
                "noaa": 0.28,
                "sg": 0.17
            },
            "swellPeriod": {
                "meteo": 6.74,
                "noaa": 4.05,
                "sg": 6.74
            },
            "time": "2023-02-16T10:00:00+00:00",
            "waveHeight": {
                "meteo": 0.58,
                "noaa": 0.35,
                "sg": 0.58
            },
            "wavePeriod": {
                "meteo": 2.73,
                "noaa": 9.74,
                "sg": 2.73
            },
            "windDirection": {
                "noaa": 254.16,
                "sg": 254.16
            },
            "windSpeed": {
                "noaa": 3.01,
                "sg": 3.01
            }
        },
        {
            "airTemperature": {
                "noaa": 9.2,
                "sg": 9.2
            },
            "swellHeight": {
                "meteo": 0.18,
                "noaa": 0.26,
                "sg": 0.18
            },
            "swellPeriod": {
                "meteo": 5.54,
                "noaa": 4.01,
                "sg": 5.54
            },
            "time": "2023-02-16T11:00:00+00:00",
            "waveHeight": {
                "meteo": 0.57,
                "noaa": 0.33,
                "sg": 0.57
            },
            "wavePeriod": {
                "meteo": 2.7,
                "noaa": 9.69,
                "sg": 2.7
            },
            "windDirection": {
                "noaa": 260.73,
                "sg": 260.73
            },
            "windSpeed": {
                "noaa": 3.39,
                "sg": 3.39
            }
        },
        {
            "airTemperature": {
                "noaa": 10.64,
                "sg": 10.64
            },
            "swellHeight": {
                "meteo": 0.19,
                "noaa": 0.25,
                "sg": 0.19
            },
            "swellPeriod": {
                "meteo": 4.34,
                "noaa": 3.97,
                "sg": 4.34
            },
            "time": "2023-02-16T12:00:00+00:00",
            "waveHeight": {
                "meteo": 0.55,
                "noaa": 0.32,
                "sg": 0.55
            },
            "wavePeriod": {
                "meteo": 2.68,
                "noaa": 9.63,
                "sg": 2.68
            },
            "windDirection": {
                "noaa": 267.31,
                "sg": 267.31
            },
            "windSpeed": {
                "noaa": 3.77,
                "sg": 3.77
            }
        },
        {
            "airTemperature": {
                "noaa": 10.4,
                "sg": 10.4
            },
            "swellHeight": {
                "meteo": 0.19,
                "noaa": 0.2,
                "sg": 0.19
            },
            "swellPeriod": {
                "meteo": 4.36,
                "noaa": 4.05,
                "sg": 4.36
            },
            "time": "2023-02-16T13:00:00+00:00",
            "waveHeight": {
                "meteo": 0.54,
                "noaa": 0.35,
                "sg": 0.54
            },
            "wavePeriod": {
                "meteo": 2.66,
                "noaa": 9.54,
                "sg": 2.66
            },
            "windDirection": {
                "noaa": 301.35,
                "sg": 301.35
            },
            "windSpeed": {
                "noaa": 3.5,
                "sg": 3.5
            }
        },
        {
            "airTemperature": {
                "noaa": 10.17,
                "sg": 10.17
            },
            "swellHeight": {
                "meteo": 0.2,
                "noaa": 0.15,
                "sg": 0.2
            },
            "swellPeriod": {
                "meteo": 4.39,
                "noaa": 4.12,
                "sg": 4.39
            },
            "time": "2023-02-16T14:00:00+00:00",
            "waveHeight": {
                "meteo": 0.53,
                "noaa": 0.37,
                "sg": 0.53
            },
            "wavePeriod": {
                "meteo": 2.63,
                "noaa": 9.45,
                "sg": 2.63
            },
            "windDirection": {
                "noaa": 335.38,
                "sg": 335.38
            },
            "windSpeed": {
                "noaa": 3.24,
                "sg": 3.24
            }
        },
        {
            "airTemperature": {
                "noaa": 9.94,
                "sg": 9.94
            },
            "swellHeight": {
                "meteo": 0.2,
                "noaa": 0.1,
                "sg": 0.2
            },
            "swellPeriod": {
                "meteo": 4.41,
                "noaa": 4.2,
                "sg": 4.41
            },
            "time": "2023-02-16T15:00:00+00:00",
            "waveHeight": {
                "meteo": 0.52,
                "noaa": 0.4,
                "sg": 0.52
            },
            "wavePeriod": {
                "meteo": 2.61,
                "noaa": 9.36,
                "sg": 2.61
            },
            "windDirection": {
                "noaa": 9.42,
                "sg": 9.42
            },
            "windSpeed": {
                "noaa": 2.97,
                "sg": 2.97
            }
        },
        {
            "airTemperature": {
                "noaa": 9.01,
                "sg": 9.01
            },
            "swellHeight": {
                "meteo": 0.2,
                "noaa": 0.1,
                "sg": 0.2
            },
            "swellPeriod": {
                "meteo": 4.42,
                "noaa": 4.07,
                "sg": 4.42
            },
            "time": "2023-02-16T16:00:00+00:00",
            "waveHeight": {
                "meteo": 0.52,
                "noaa": 0.4,
                "sg": 0.52
            },
            "wavePeriod": {
                "meteo": 2.6,
                "noaa": 9.29,
                "sg": 2.6
            },
            "windDirection": {
                "noaa": 4.71,
                "sg": 4.71
            },
            "windSpeed": {
                "noaa": 2.96,
                "sg": 2.96
            }
        },
        {
            "airTemperature": {
                "noaa": 8.08,
                "sg": 8.08
            },
            "swellHeight": {
                "meteo": 0.19,
                "noaa": 0.09,
                "sg": 0.19
            },
            "swellPeriod": {
                "meteo": 4.42,
                "noaa": 3.95,
                "sg": 4.42
            },
            "time": "2023-02-16T17:00:00+00:00",
            "waveHeight": {
                "meteo": 0.52,
                "noaa": 0.39,
                "sg": 0.52
            },
            "wavePeriod": {
                "meteo": 2.58,
                "noaa": 9.21,
                "sg": 2.58
            },
            "windDirection": {
                "noaa": 0,
                "sg": 0
            },
            "windSpeed": {
                "noaa": 2.94,
                "sg": 2.94
            }
        },
        {
            "airTemperature": {
                "noaa": 7.15,
                "sg": 7.15
            },
            "swellHeight": {
                "meteo": 0.19,
                "noaa": 0.09,
                "sg": 0.19
            },
            "swellPeriod": {
                "meteo": 4.43,
                "noaa": 3.82,
                "sg": 4.43
            },
            "time": "2023-02-16T18:00:00+00:00",
            "waveHeight": {
                "meteo": 0.52,
                "noaa": 0.39,
                "sg": 0.52
            },
            "wavePeriod": {
                "meteo": 2.57,
                "noaa": 9.14,
                "sg": 2.57
            },
            "windDirection": {
                "noaa": 355.29,
                "sg": 355.29
            },
            "windSpeed": {
                "noaa": 2.93,
                "sg": 2.93
            }
        },
        {
            "airTemperature": {
                "noaa": 6.93,
                "sg": 6.93
            },
            "swellHeight": {
                "meteo": 0.17,
                "noaa": 0.09,
                "sg": 0.17
            },
            "swellPeriod": {
                "meteo": 4.53,
                "noaa": 3.69,
                "sg": 4.53
            },
            "time": "2023-02-16T19:00:00+00:00",
            "waveHeight": {
                "meteo": 0.55,
                "noaa": 0.38,
                "sg": 0.55
            },
            "wavePeriod": {
                "meteo": 2.59,
                "noaa": 9.1,
                "sg": 2.59
            },
            "windDirection": {
                "noaa": 359.89,
                "sg": 359.89
            },
            "windSpeed": {
                "noaa": 2.85,
                "sg": 2.85
            }
        },
        {
            "airTemperature": {
                "noaa": 6.71,
                "sg": 6.71
            },
            "swellHeight": {
                "meteo": 0.15,
                "noaa": 0.08,
                "sg": 0.15
            },
            "swellPeriod": {
                "meteo": 4.62,
                "noaa": 3.55,
                "sg": 4.62
            },
            "time": "2023-02-16T20:00:00+00:00",
            "waveHeight": {
                "meteo": 0.57,
                "noaa": 0.37,
                "sg": 0.57
            },
            "wavePeriod": {
                "meteo": 2.6,
                "noaa": 9.06,
                "sg": 2.6
            },
            "windDirection": {
                "noaa": 4.48,
                "sg": 4.48
            },
            "windSpeed": {
                "noaa": 2.77,
                "sg": 2.77
            }
        },
        {
            "airTemperature": {
                "noaa": 6.49,
                "sg": 6.49
            },
            "swellHeight": {
                "meteo": 0.13,
                "noaa": 0.08,
                "sg": 0.13
            },
            "swellPeriod": {
                "meteo": 4.72,
                "noaa": 3.42,
                "sg": 4.72
            },
            "time": "2023-02-16T21:00:00+00:00",
            "waveHeight": {
                "meteo": 0.6,
                "noaa": 0.36,
                "sg": 0.6
            },
            "wavePeriod": {
                "meteo": 2.62,
                "noaa": 9.02,
                "sg": 2.62
            },
            "windDirection": {
                "noaa": 9.08,
                "sg": 9.08
            },
            "windSpeed": {
                "noaa": 2.69,
                "sg": 2.69
            }
        },
        {
            "airTemperature": {
                "noaa": 6.3,
                "sg": 6.3
            },
            "swellHeight": {
                "meteo": 0.13,
                "noaa": 0.08,
                "sg": 0.13
            },
            "swellPeriod": {
                "meteo": 4.24,
                "noaa": 3.49,
                "sg": 4.24
            },
            "time": "2023-02-16T22:00:00+00:00",
            "waveHeight": {
                "meteo": 0.64,
                "noaa": 0.37,
                "sg": 0.64
            },
            "wavePeriod": {
                "meteo": 2.68,
                "noaa": 7.57,
                "sg": 2.68
            },
            "windDirection": {
                "noaa": 14.4,
                "sg": 14.4
            },
            "windSpeed": {
                "noaa": 2.33,
                "sg": 2.33
            }
        },
        {
            "airTemperature": {
                "noaa": 6.1,
                "sg": 6.1
            },
            "swellHeight": {
                "meteo": 0.12,
                "noaa": 0.08,
                "sg": 0.12
            },
            "swellPeriod": {
                "meteo": 3.75,
                "noaa": 3.57,
                "sg": 3.75
            },
            "time": "2023-02-16T23:00:00+00:00",
            "waveHeight": {
                "meteo": 0.69,
                "noaa": 0.39,
                "sg": 0.69
            },
            "wavePeriod": {
                "meteo": 2.75,
                "noaa": 6.13,
                "sg": 2.75
            },
            "windDirection": {
                "noaa": 19.73,
                "sg": 19.73
            },
            "windSpeed": {
                "noaa": 1.97,
                "sg": 1.97
            }
        },
        {
            "airTemperature": {
                "noaa": 5.9,
                "sg": 5.9
            },
            "swellHeight": {
                "meteo": 0.12,
                "noaa": 0.08,
                "sg": 0.12
            },
            "swellPeriod": {
                "meteo": 3.27,
                "noaa": 3.64,
                "sg": 3.27
            },
            "time": "2023-02-17T00:00:00+00:00",
            "waveHeight": {
                "meteo": 0.73,
                "noaa": 0.4,
                "sg": 0.73
            },
            "wavePeriod": {
                "meteo": 2.81,
                "noaa": 4.68,
                "sg": 2.81
            },
            "windDirection": {
                "noaa": 25.05,
                "sg": 25.05
            },
            "windSpeed": {
                "noaa": 1.61,
                "sg": 1.61
            }
        },
        {
            "airTemperature": {
                "noaa": 5.81,
                "sg": 5.81
            },
            "swellHeight": {
                "meteo": 0.17,
                "noaa": 0.08,
                "sg": 0.17
            },
            "swellPeriod": {
                "meteo": 3.46,
                "noaa": 3.75,
                "sg": 3.46
            },
            "time": "2023-02-17T01:00:00+00:00",
            "waveHeight": {
                "meteo": 0.77,
                "noaa": 0.4,
                "sg": 0.77
            },
            "wavePeriod": {
                "meteo": 2.87,
                "noaa": 4.44,
                "sg": 2.87
            },
            "windDirection": {
                "noaa": 26.1,
                "sg": 26.1
            },
            "windSpeed": {
                "noaa": 1.44,
                "sg": 1.44
            }
        },
        {
            "airTemperature": {
                "noaa": 5.72,
                "sg": 5.72
            },
            "swellHeight": {
                "meteo": 0.21,
                "noaa": 0.08,
                "sg": 0.21
            },
            "swellPeriod": {
                "meteo": 3.66,
                "noaa": 3.86,
                "sg": 3.66
            },
            "time": "2023-02-17T02:00:00+00:00",
            "waveHeight": {
                "meteo": 0.82,
                "noaa": 0.39,
                "sg": 0.82
            },
            "wavePeriod": {
                "meteo": 2.94,
                "noaa": 4.2,
                "sg": 2.94
            },
            "windDirection": {
                "noaa": 27.14,
                "sg": 27.14
            },
            "windSpeed": {
                "noaa": 1.28,
                "sg": 1.28
            }
        },
        {
            "airTemperature": {
                "noaa": 5.62,
                "sg": 5.62
            },
            "swellHeight": {
                "meteo": 0.26,
                "noaa": 0.08,
                "sg": 0.26
            },
            "swellPeriod": {
                "meteo": 3.85,
                "noaa": 3.97,
                "sg": 3.85
            },
            "time": "2023-02-17T03:00:00+00:00",
            "waveHeight": {
                "meteo": 0.86,
                "noaa": 0.39,
                "sg": 0.86
            },
            "wavePeriod": {
                "meteo": 3,
                "noaa": 3.96,
                "sg": 3
            },
            "windDirection": {
                "noaa": 28.19,
                "sg": 28.19
            },
            "windSpeed": {
                "noaa": 1.11,
                "sg": 1.11
            }
        },
        {
            "airTemperature": {
                "noaa": 5.11,
                "sg": 5.11
            },
            "swellHeight": {
                "meteo": 0.28,
                "noaa": 0.08,
                "sg": 0.28
            },
            "swellPeriod": {
                "meteo": 3.88,
                "noaa": 3.94,
                "sg": 3.88
            },
            "time": "2023-02-17T04:00:00+00:00",
            "waveHeight": {
                "meteo": 0.9,
                "noaa": 0.39,
                "sg": 0.9
            },
            "wavePeriod": {
                "meteo": 3.05,
                "noaa": 4.04,
                "sg": 3.05
            },
            "windDirection": {
                "noaa": 78.85,
                "sg": 78.85
            },
            "windSpeed": {
                "noaa": 0.96,
                "sg": 0.96
            }
        },
        {
            "airTemperature": {
                "noaa": 4.6,
                "sg": 4.6
            },
            "swellHeight": {
                "meteo": 0.29,
                "noaa": 0.07,
                "sg": 0.29
            },
            "swellPeriod": {
                "meteo": 3.9,
                "noaa": 3.92,
                "sg": 3.9
            },
            "time": "2023-02-17T05:00:00+00:00",
            "waveHeight": {
                "meteo": 0.93,
                "noaa": 0.39,
                "sg": 0.93
            },
            "wavePeriod": {
                "meteo": 3.1,
                "noaa": 4.12,
                "sg": 3.1
            },
            "windDirection": {
                "noaa": 129.51,
                "sg": 129.51
            },
            "windSpeed": {
                "noaa": 0.81,
                "sg": 0.81
            }
        },
        {
            "airTemperature": {
                "noaa": 4.09,
                "sg": 4.09
            },
            "swellHeight": {
                "meteo": 0.31,
                "noaa": 0.07,
                "sg": 0.31
            },
            "swellPeriod": {
                "meteo": 3.93,
                "noaa": 3.89,
                "sg": 3.93
            },
            "time": "2023-02-17T06:00:00+00:00",
            "waveHeight": {
                "meteo": 0.97,
                "noaa": 0.39,
                "sg": 0.97
            },
            "wavePeriod": {
                "meteo": 3.15,
                "noaa": 4.2,
                "sg": 3.15
            },
            "windDirection": {
                "noaa": 180.17,
                "sg": 180.17
            },
            "windSpeed": {
                "noaa": 0.66,
                "sg": 0.66
            }
        },
        {
            "airTemperature": {
                "noaa": 4.77,
                "sg": 4.77
            },
            "swellHeight": {
                "meteo": 0.31,
                "noaa": 0.07,
                "sg": 0.31
            },
            "swellPeriod": {
                "meteo": 3.83,
                "noaa": 3.85,
                "sg": 3.83
            },
            "time": "2023-02-17T07:00:00+00:00",
            "waveHeight": {
                "meteo": 0.95,
                "noaa": 0.39,
                "sg": 0.95
            },
            "wavePeriod": {
                "meteo": 3.15,
                "noaa": 4.26,
                "sg": 3.15
            },
            "windDirection": {
                "noaa": 178.9,
                "sg": 178.9
            },
            "windSpeed": {
                "noaa": 0.84,
                "sg": 0.84
            }
        },
        {
            "airTemperature": {
                "noaa": 5.45,
                "sg": 5.45
            },
            "swellHeight": {
                "meteo": 0.32,
                "noaa": 0.06,
                "sg": 0.32
            },
            "swellPeriod": {
                "meteo": 3.74,
                "noaa": 3.81,
                "sg": 3.74
            },
            "time": "2023-02-17T08:00:00+00:00",
            "waveHeight": {
                "meteo": 0.93,
                "noaa": 0.4,
                "sg": 0.93
            },
            "wavePeriod": {
                "meteo": 3.14,
                "noaa": 4.32,
                "sg": 3.14
            },
            "windDirection": {
                "noaa": 177.62,
                "sg": 177.62
            },
            "windSpeed": {
                "noaa": 1.01,
                "sg": 1.01
            }
        },
        {
            "airTemperature": {
                "noaa": 6.12,
                "sg": 6.12
            },
            "swellHeight": {
                "meteo": 0.32,
                "noaa": 0.06,
                "sg": 0.32
            },
            "swellPeriod": {
                "meteo": 3.64,
                "noaa": 3.77,
                "sg": 3.64
            },
            "time": "2023-02-17T09:00:00+00:00",
            "waveHeight": {
                "meteo": 0.91,
                "noaa": 0.4,
                "sg": 0.91
            },
            "wavePeriod": {
                "meteo": 3.14,
                "noaa": 4.38,
                "sg": 3.14
            },
            "windDirection": {
                "noaa": 176.35,
                "sg": 176.35
            },
            "windSpeed": {
                "noaa": 1.19,
                "sg": 1.19
            }
        },
        {
            "airTemperature": {
                "noaa": 7.48,
                "sg": 7.48
            },
            "swellHeight": {
                "meteo": 0.28,
                "noaa": 0.06,
                "sg": 0.28
            },
            "swellPeriod": {
                "meteo": 3.48,
                "noaa": 3.74,
                "sg": 3.48
            },
            "time": "2023-02-17T10:00:00+00:00",
            "waveHeight": {
                "meteo": 0.87,
                "noaa": 0.4,
                "sg": 0.87
            },
            "wavePeriod": {
                "meteo": 3.08,
                "noaa": 4.55,
                "sg": 3.08
            },
            "windDirection": {
                "noaa": 178.96,
                "sg": 178.96
            },
            "windSpeed": {
                "noaa": 1.89,
                "sg": 1.89
            }
        },
        {
            "airTemperature": {
                "noaa": 8.83,
                "sg": 8.83
            },
            "swellHeight": {
                "meteo": 0.23,
                "noaa": 0.05,
                "sg": 0.23
            },
            "swellPeriod": {
                "meteo": 3.32,
                "noaa": 3.72,
                "sg": 3.32
            },
            "time": "2023-02-17T11:00:00+00:00",
            "waveHeight": {
                "meteo": 0.83,
                "noaa": 0.4,
                "sg": 0.83
            },
            "wavePeriod": {
                "meteo": 3.03,
                "noaa": 4.73,
                "sg": 3.03
            },
            "windDirection": {
                "noaa": 181.58,
                "sg": 181.58
            },
            "windSpeed": {
                "noaa": 2.6,
                "sg": 2.6
            }
        },
        {
            "airTemperature": {
                "noaa": 10.18,
                "sg": 10.18
            },
            "swellHeight": {
                "meteo": 0.19,
                "noaa": 0.05,
                "sg": 0.19
            },
            "swellPeriod": {
                "meteo": 3.16,
                "noaa": 3.69,
                "sg": 3.16
            },
            "time": "2023-02-17T12:00:00+00:00",
            "waveHeight": {
                "meteo": 0.79,
                "noaa": 0.4,
                "sg": 0.79
            },
            "wavePeriod": {
                "meteo": 2.97,
                "noaa": 4.9,
                "sg": 2.97
            },
            "windDirection": {
                "noaa": 184.19,
                "sg": 184.19
            },
            "windSpeed": {
                "noaa": 3.3,
                "sg": 3.3
            }
        },
        {
            "airTemperature": {
                "noaa": 10.41,
                "sg": 10.41
            },
            "swellHeight": {
                "meteo": 0.16,
                "noaa": 0.13,
                "sg": 0.16
            },
            "swellPeriod": {
                "meteo": 3.53,
                "noaa": 4.04,
                "sg": 3.53
            },
            "time": "2023-02-17T13:00:00+00:00",
            "waveHeight": {
                "meteo": 0.77,
                "noaa": 0.4,
                "sg": 0.77
            },
            "wavePeriod": {
                "meteo": 2.94,
                "noaa": 4.84,
                "sg": 2.94
            },
            "windDirection": {
                "noaa": 186.79,
                "sg": 186.79
            },
            "windSpeed": {
                "noaa": 3.71,
                "sg": 3.71
            }
        },
        {
            "airTemperature": {
                "noaa": 10.63,
                "sg": 10.63
            },
            "swellHeight": {
                "meteo": 0.13,
                "noaa": 0.22,
                "sg": 0.13
            },
            "swellPeriod": {
                "meteo": 3.91,
                "noaa": 4.38,
                "sg": 3.91
            },
            "time": "2023-02-17T14:00:00+00:00",
            "waveHeight": {
                "meteo": 0.76,
                "noaa": 0.39,
                "sg": 0.76
            },
            "wavePeriod": {
                "meteo": 2.92,
                "noaa": 4.79,
                "sg": 2.92
            },
            "windDirection": {
                "noaa": 189.38,
                "sg": 189.38
            },
            "windSpeed": {
                "noaa": 4.13,
                "sg": 4.13
            }
        },
        {
            "airTemperature": {
                "noaa": 10.86,
                "sg": 10.86
            },
            "swellHeight": {
                "meteo": 0.1,
                "noaa": 0.3,
                "sg": 0.1
            },
            "swellPeriod": {
                "meteo": 4.28,
                "noaa": 4.73,
                "sg": 4.28
            },
            "time": "2023-02-17T15:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.39,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 2.89,
                "noaa": 4.73,
                "sg": 2.89
            },
            "windDirection": {
                "noaa": 191.98,
                "sg": 191.98
            },
            "windSpeed": {
                "noaa": 4.54,
                "sg": 4.54
            }
        },
        {
            "airTemperature": {
                "noaa": 9.84,
                "sg": 9.84
            },
            "swellHeight": {
                "meteo": 0.11,
                "noaa": 0.22,
                "sg": 0.11
            },
            "swellPeriod": {
                "meteo": 4.25,
                "noaa": 5.94,
                "sg": 4.25
            },
            "time": "2023-02-17T16:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.37,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 2.89,
                "noaa": 4.66,
                "sg": 2.89
            },
            "windDirection": {
                "noaa": 189.36,
                "sg": 189.36
            },
            "windSpeed": {
                "noaa": 4.07,
                "sg": 4.07
            }
        },
        {
            "airTemperature": {
                "noaa": 8.82,
                "sg": 8.82
            },
            "swellHeight": {
                "meteo": 0.12,
                "noaa": 0.14,
                "sg": 0.12
            },
            "swellPeriod": {
                "meteo": 4.21,
                "noaa": 7.14,
                "sg": 4.21
            },
            "time": "2023-02-17T17:00:00+00:00",
            "waveHeight": {
                "meteo": 0.73,
                "noaa": 0.36,
                "sg": 0.73
            },
            "wavePeriod": {
                "meteo": 2.88,
                "noaa": 4.59,
                "sg": 2.88
            },
            "windDirection": {
                "noaa": 186.74,
                "sg": 186.74
            },
            "windSpeed": {
                "noaa": 3.61,
                "sg": 3.61
            }
        },
        {
            "airTemperature": {
                "noaa": 7.81,
                "sg": 7.81
            },
            "swellHeight": {
                "meteo": 0.13,
                "noaa": 0.06,
                "sg": 0.13
            },
            "swellPeriod": {
                "meteo": 4.18,
                "noaa": 8.35,
                "sg": 4.18
            },
            "time": "2023-02-17T18:00:00+00:00",
            "waveHeight": {
                "meteo": 0.73,
                "noaa": 0.34,
                "sg": 0.73
            },
            "wavePeriod": {
                "meteo": 2.88,
                "noaa": 4.52,
                "sg": 2.88
            },
            "windDirection": {
                "noaa": 184.12,
                "sg": 184.12
            },
            "windSpeed": {
                "noaa": 3.14,
                "sg": 3.14
            }
        },
        {
            "airTemperature": {
                "noaa": 7.78,
                "sg": 7.78
            },
            "swellHeight": {
                "meteo": 0.18,
                "noaa": 0.06,
                "sg": 0.18
            },
            "swellPeriod": {
                "meteo": 4.18,
                "noaa": 8.23,
                "sg": 4.18
            },
            "time": "2023-02-17T19:00:00+00:00",
            "waveHeight": {
                "meteo": 0.73,
                "noaa": 0.33,
                "sg": 0.73
            },
            "wavePeriod": {
                "meteo": 2.9,
                "noaa": 4.48,
                "sg": 2.9
            },
            "windDirection": {
                "noaa": 192.18,
                "sg": 192.18
            },
            "windSpeed": {
                "noaa": 3.13,
                "sg": 3.13
            }
        },
        {
            "airTemperature": {
                "noaa": 7.76,
                "sg": 7.76
            },
            "swellHeight": {
                "meteo": 0.24,
                "noaa": 0.06,
                "sg": 0.24
            },
            "swellPeriod": {
                "meteo": 4.19,
                "noaa": 8.11,
                "sg": 4.19
            },
            "time": "2023-02-17T20:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.31,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 2.91,
                "noaa": 4.45,
                "sg": 2.91
            },
            "windDirection": {
                "noaa": 200.24,
                "sg": 200.24
            },
            "windSpeed": {
                "noaa": 3.12,
                "sg": 3.12
            }
        },
        {
            "airTemperature": {
                "noaa": 7.73,
                "sg": 7.73
            },
            "swellHeight": {
                "meteo": 0.29,
                "noaa": 0.06,
                "sg": 0.29
            },
            "swellPeriod": {
                "meteo": 4.19,
                "noaa": 7.99,
                "sg": 4.19
            },
            "time": "2023-02-17T21:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.3,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 2.93,
                "noaa": 4.41,
                "sg": 2.93
            },
            "windDirection": {
                "noaa": 208.3,
                "sg": 208.3
            },
            "windSpeed": {
                "noaa": 3.11,
                "sg": 3.11
            }
        },
        {
            "airTemperature": {
                "noaa": 7.11,
                "sg": 7.11
            },
            "swellHeight": {
                "meteo": 0.31,
                "noaa": 0.06,
                "sg": 0.31
            },
            "swellPeriod": {
                "meteo": 4.21,
                "noaa": 8,
                "sg": 4.21
            },
            "time": "2023-02-17T22:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.29,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 2.96,
                "noaa": 4.23,
                "sg": 2.96
            },
            "windDirection": {
                "noaa": 213.02,
                "sg": 213.02
            },
            "windSpeed": {
                "noaa": 3,
                "sg": 3
            }
        },
        {
            "airTemperature": {
                "noaa": 6.48,
                "sg": 6.48
            },
            "swellHeight": {
                "meteo": 0.32,
                "noaa": 0.05,
                "sg": 0.32
            },
            "swellPeriod": {
                "meteo": 4.22,
                "noaa": 8.01,
                "sg": 4.22
            },
            "time": "2023-02-17T23:00:00+00:00",
            "waveHeight": {
                "meteo": 0.75,
                "noaa": 0.29,
                "sg": 0.75
            },
            "wavePeriod": {
                "meteo": 2.98,
                "noaa": 4.04,
                "sg": 2.98
            },
            "windDirection": {
                "noaa": 217.74,
                "sg": 217.74
            },
            "windSpeed": {
                "noaa": 2.9,
                "sg": 2.9
            }
        },
        {
            "airTemperature": {
                "noaa": 5.85,
                "sg": 5.85
            },
            "swellHeight": {
                "meteo": 0.34,
                "noaa": 0.05,
                "sg": 0.34
            },
            "swellPeriod": {
                "meteo": 4.24,
                "noaa": 8.02,
                "sg": 4.24
            },
            "time": "2023-02-18T00:00:00+00:00",
            "waveHeight": {
                "meteo": 0.75,
                "noaa": 0.28,
                "sg": 0.75
            },
            "wavePeriod": {
                "meteo": 3.01,
                "noaa": 3.86,
                "sg": 3.01
            },
            "windDirection": {
                "noaa": 222.46,
                "sg": 222.46
            },
            "windSpeed": {
                "noaa": 2.79,
                "sg": 2.79
            }
        },
        {
            "airTemperature": {
                "noaa": 6.09,
                "sg": 6.09
            },
            "swellHeight": {
                "meteo": 0.39,
                "noaa": 0.06,
                "sg": 0.39
            },
            "swellPeriod": {
                "meteo": 4.39,
                "noaa": 6.77,
                "sg": 4.39
            },
            "time": "2023-02-18T01:00:00+00:00",
            "waveHeight": {
                "meteo": 0.75,
                "noaa": 0.27,
                "sg": 0.75
            },
            "wavePeriod": {
                "meteo": 3.05,
                "noaa": 3.85,
                "sg": 3.05
            },
            "windDirection": {
                "noaa": 217.55,
                "sg": 217.55
            },
            "windSpeed": {
                "noaa": 2.63,
                "sg": 2.63
            }
        },
        {
            "airTemperature": {
                "noaa": 6.34,
                "sg": 6.34
            },
            "swellHeight": {
                "meteo": 0.43,
                "noaa": 0.08,
                "sg": 0.43
            },
            "swellPeriod": {
                "meteo": 4.55,
                "noaa": 5.52,
                "sg": 4.55
            },
            "time": "2023-02-18T02:00:00+00:00",
            "waveHeight": {
                "meteo": 0.75,
                "noaa": 0.25,
                "sg": 0.75
            },
            "wavePeriod": {
                "meteo": 3.1,
                "noaa": 3.83,
                "sg": 3.1
            },
            "windDirection": {
                "noaa": 212.65,
                "sg": 212.65
            },
            "windSpeed": {
                "noaa": 2.46,
                "sg": 2.46
            }
        },
        {
            "airTemperature": {
                "noaa": 6.58,
                "sg": 6.58
            },
            "swellHeight": {
                "meteo": 0.48,
                "noaa": 0.09,
                "sg": 0.48
            },
            "swellPeriod": {
                "meteo": 4.7,
                "noaa": 4.27,
                "sg": 4.7
            },
            "time": "2023-02-18T03:00:00+00:00",
            "waveHeight": {
                "meteo": 0.75,
                "noaa": 0.24,
                "sg": 0.75
            },
            "wavePeriod": {
                "meteo": 3.14,
                "noaa": 3.82,
                "sg": 3.14
            },
            "windDirection": {
                "noaa": 207.74,
                "sg": 207.74
            },
            "windSpeed": {
                "noaa": 2.3,
                "sg": 2.3
            }
        },
        {
            "airTemperature": {
                "noaa": 6.81,
                "sg": 6.81
            },
            "swellHeight": {
                "meteo": 0.49,
                "noaa": 0.09,
                "sg": 0.49
            },
            "swellPeriod": {
                "meteo": 4.72,
                "noaa": 4.06,
                "sg": 4.72
            },
            "time": "2023-02-18T04:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.23,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 3.17,
                "noaa": 3.8,
                "sg": 3.17
            },
            "windDirection": {
                "noaa": 207.79,
                "sg": 207.79
            },
            "windSpeed": {
                "noaa": 2.32,
                "sg": 2.32
            }
        },
        {
            "airTemperature": {
                "noaa": 7.04,
                "sg": 7.04
            },
            "swellHeight": {
                "meteo": 0.51,
                "noaa": 0.08,
                "sg": 0.51
            },
            "swellPeriod": {
                "meteo": 4.73,
                "noaa": 3.84,
                "sg": 4.73
            },
            "time": "2023-02-18T05:00:00+00:00",
            "waveHeight": {
                "meteo": 0.72,
                "noaa": 0.23,
                "sg": 0.72
            },
            "wavePeriod": {
                "meteo": 3.2,
                "noaa": 3.79,
                "sg": 3.2
            },
            "windDirection": {
                "noaa": 207.84,
                "sg": 207.84
            },
            "windSpeed": {
                "noaa": 2.33,
                "sg": 2.33
            }
        },
        {
            "airTemperature": {
                "noaa": 7.27,
                "sg": 7.27
            },
            "swellHeight": {
                "meteo": 0.52,
                "noaa": 0.08,
                "sg": 0.52
            },
            "swellPeriod": {
                "meteo": 4.75,
                "noaa": 3.63,
                "sg": 4.75
            },
            "time": "2023-02-18T06:00:00+00:00",
            "waveHeight": {
                "meteo": 0.71,
                "noaa": 0.22,
                "sg": 0.71
            },
            "wavePeriod": {
                "meteo": 3.23,
                "noaa": 3.77,
                "sg": 3.23
            },
            "windDirection": {
                "noaa": 207.89,
                "sg": 207.89
            },
            "windSpeed": {
                "noaa": 2.35,
                "sg": 2.35
            }
        },
        {
            "airTemperature": {
                "noaa": 7.41,
                "sg": 7.41
            },
            "swellHeight": {
                "meteo": 0.51,
                "noaa": 0.08,
                "sg": 0.51
            },
            "swellPeriod": {
                "meteo": 4.67,
                "noaa": 3.78,
                "sg": 4.67
            },
            "time": "2023-02-18T07:00:00+00:00",
            "waveHeight": {
                "meteo": 0.7,
                "noaa": 0.21,
                "sg": 0.7
            },
            "wavePeriod": {
                "meteo": 3.25,
                "noaa": 4.79,
                "sg": 3.25
            },
            "windDirection": {
                "noaa": 214.66,
                "sg": 214.66
            },
            "windSpeed": {
                "noaa": 2.3,
                "sg": 2.3
            }
        },
        {
            "airTemperature": {
                "noaa": 7.55,
                "sg": 7.55
            },
            "swellHeight": {
                "meteo": 0.49,
                "noaa": 0.08,
                "sg": 0.49
            },
            "swellPeriod": {
                "meteo": 4.6,
                "noaa": 3.94,
                "sg": 4.6
            },
            "time": "2023-02-18T08:00:00+00:00",
            "waveHeight": {
                "meteo": 0.69,
                "noaa": 0.2,
                "sg": 0.69
            },
            "wavePeriod": {
                "meteo": 3.27,
                "noaa": 5.82,
                "sg": 3.27
            },
            "windDirection": {
                "noaa": 221.44,
                "sg": 221.44
            },
            "windSpeed": {
                "noaa": 2.25,
                "sg": 2.25
            }
        },
        {
            "airTemperature": {
                "noaa": 7.69,
                "sg": 7.69
            },
            "swellHeight": {
                "meteo": 0.48,
                "noaa": 0.08,
                "sg": 0.48
            },
            "swellPeriod": {
                "meteo": 4.52,
                "noaa": 4.09,
                "sg": 4.52
            },
            "time": "2023-02-18T09:00:00+00:00",
            "waveHeight": {
                "meteo": 0.68,
                "noaa": 0.19,
                "sg": 0.68
            },
            "wavePeriod": {
                "meteo": 3.29,
                "noaa": 6.84,
                "sg": 3.29
            },
            "windDirection": {
                "noaa": 228.21,
                "sg": 228.21
            },
            "windSpeed": {
                "noaa": 2.2,
                "sg": 2.2
            }
        },
        {
            "airTemperature": {
                "noaa": 8.59,
                "sg": 8.59
            },
            "swellHeight": {
                "meteo": 0.45,
                "noaa": 0.07,
                "sg": 0.45
            },
            "swellPeriod": {
                "meteo": 4.55,
                "noaa": 5.88,
                "sg": 4.55
            },
            "time": "2023-02-18T10:00:00+00:00",
            "waveHeight": {
                "meteo": 0.68,
                "noaa": 0.19,
                "sg": 0.68
            },
            "wavePeriod": {
                "meteo": 3.34,
                "noaa": 10.81,
                "sg": 3.34
            },
            "windDirection": {
                "noaa": 236.47,
                "sg": 236.47
            },
            "windSpeed": {
                "noaa": 3.01,
                "sg": 3.01
            }
        },
        {
            "airTemperature": {
                "noaa": 9.48,
                "sg": 9.48
            },
            "swellHeight": {
                "meteo": 0.43,
                "noaa": 0.07,
                "sg": 0.43
            },
            "swellPeriod": {
                "meteo": 4.57,
                "noaa": 7.68,
                "sg": 4.57
            },
            "time": "2023-02-18T11:00:00+00:00",
            "waveHeight": {
                "meteo": 0.68,
                "noaa": 0.2,
                "sg": 0.68
            },
            "wavePeriod": {
                "meteo": 3.4,
                "noaa": 14.79,
                "sg": 3.4
            },
            "windDirection": {
                "noaa": 244.73,
                "sg": 244.73
            },
            "windSpeed": {
                "noaa": 3.82,
                "sg": 3.82
            }
        },
        {
            "airTemperature": {
                "noaa": 10.38,
                "sg": 10.38
            },
            "swellHeight": {
                "meteo": 0.4,
                "noaa": 0.06,
                "sg": 0.4
            },
            "swellPeriod": {
                "meteo": 4.6,
                "noaa": 9.47,
                "sg": 4.6
            },
            "time": "2023-02-18T12:00:00+00:00",
            "waveHeight": {
                "meteo": 0.68,
                "noaa": 0.2,
                "sg": 0.68
            },
            "wavePeriod": {
                "meteo": 3.45,
                "noaa": 18.76,
                "sg": 3.45
            },
            "windDirection": {
                "noaa": 252.99,
                "sg": 252.99
            },
            "windSpeed": {
                "noaa": 4.63,
                "sg": 4.63
            }
        },
        {
            "airTemperature": {
                "noaa": 10.43,
                "sg": 10.43
            },
            "swellHeight": {
                "meteo": 0.43,
                "noaa": 0.06,
                "sg": 0.43
            },
            "swellPeriod": {
                "meteo": 5.65,
                "noaa": 7.48,
                "sg": 5.65
            },
            "time": "2023-02-18T13:00:00+00:00",
            "waveHeight": {
                "meteo": 0.69,
                "noaa": 0.21,
                "sg": 0.69
            },
            "wavePeriod": {
                "meteo": 3.52,
                "noaa": 18.9,
                "sg": 3.52
            },
            "windDirection": {
                "noaa": 258.92,
                "sg": 258.92
            },
            "windSpeed": {
                "noaa": 4.57,
                "sg": 4.57
            }
        },
        {
            "airTemperature": {
                "noaa": 10.47,
                "sg": 10.47
            },
            "swellHeight": {
                "meteo": 0.45,
                "noaa": 0.07,
                "sg": 0.45
            },
            "swellPeriod": {
                "meteo": 6.69,
                "noaa": 5.48,
                "sg": 6.69
            },
            "time": "2023-02-18T14:00:00+00:00",
            "waveHeight": {
                "meteo": 0.7,
                "noaa": 0.21,
                "sg": 0.7
            },
            "wavePeriod": {
                "meteo": 3.58,
                "noaa": 19.05,
                "sg": 3.58
            },
            "windDirection": {
                "noaa": 264.85,
                "sg": 264.85
            },
            "windSpeed": {
                "noaa": 4.52,
                "sg": 4.52
            }
        },
        {
            "airTemperature": {
                "noaa": 10.52,
                "sg": 10.52
            },
            "swellHeight": {
                "meteo": 0.48,
                "noaa": 0.07,
                "sg": 0.48
            },
            "swellPeriod": {
                "meteo": 7.74,
                "noaa": 3.49,
                "sg": 7.74
            },
            "time": "2023-02-18T15:00:00+00:00",
            "waveHeight": {
                "meteo": 0.71,
                "noaa": 0.22,
                "sg": 0.71
            },
            "wavePeriod": {
                "meteo": 3.65,
                "noaa": 19.19,
                "sg": 3.65
            },
            "windDirection": {
                "noaa": 270.78,
                "sg": 270.78
            },
            "windSpeed": {
                "noaa": 4.46,
                "sg": 4.46
            }
        },
        {
            "airTemperature": {
                "noaa": 9.85,
                "sg": 9.85
            },
            "swellHeight": {
                "meteo": 0.53,
                "noaa": 0.07,
                "sg": 0.53
            },
            "swellPeriod": {
                "meteo": 7.38,
                "noaa": 3.71,
                "sg": 7.38
            },
            "time": "2023-02-18T16:00:00+00:00",
            "waveHeight": {
                "meteo": 0.72,
                "noaa": 0.21,
                "sg": 0.72
            },
            "wavePeriod": {
                "meteo": 3.73,
                "noaa": 19.08,
                "sg": 3.73
            },
            "windDirection": {
                "noaa": 267.34,
                "sg": 267.34
            },
            "windSpeed": {
                "noaa": 3.98,
                "sg": 3.98
            }
        },
        {
            "airTemperature": {
                "noaa": 9.18,
                "sg": 9.18
            },
            "swellHeight": {
                "meteo": 0.57,
                "noaa": 0.06,
                "sg": 0.57
            },
            "swellPeriod": {
                "meteo": 7.02,
                "noaa": 3.93,
                "sg": 7.02
            },
            "time": "2023-02-18T17:00:00+00:00",
            "waveHeight": {
                "meteo": 0.73,
                "noaa": 0.21,
                "sg": 0.73
            },
            "wavePeriod": {
                "meteo": 3.81,
                "noaa": 18.98,
                "sg": 3.81
            },
            "windDirection": {
                "noaa": 263.89,
                "sg": 263.89
            },
            "windSpeed": {
                "noaa": 3.51,
                "sg": 3.51
            }
        },
        {
            "airTemperature": {
                "noaa": 8.5,
                "sg": 8.5
            },
            "swellHeight": {
                "meteo": 0.62,
                "noaa": 0.06,
                "sg": 0.62
            },
            "swellPeriod": {
                "meteo": 6.66,
                "noaa": 4.15,
                "sg": 6.66
            },
            "time": "2023-02-18T18:00:00+00:00",
            "waveHeight": {
                "meteo": 0.74,
                "noaa": 0.2,
                "sg": 0.74
            },
            "wavePeriod": {
                "meteo": 3.89,
                "noaa": 18.87,
                "sg": 3.89
            },
            "windDirection": {
                "noaa": 260.45,
                "sg": 260.45
            },
            "windSpeed": {
                "noaa": 3.03,
                "sg": 3.03
            }
        },
        {
            "airTemperature": {
                "noaa": 8.09,
                "sg": 8.09
            },
            "swellHeight": {
                "meteo": 0.63,
                "noaa": 0.06,
                "sg": 0.63
            },
            "swellPeriod": {
                "meteo": 6.76,
                "noaa": 4.17,
                "sg": 6.76
            },
            "time": "2023-02-18T19:00:00+00:00",
            "waveHeight": {
                "meteo": 0.76,
                "noaa": 0.21,
                "sg": 0.76
            },
            "wavePeriod": {
                "meteo": 3.91,
                "noaa": 18.83,
                "sg": 3.91
            },
            "windDirection": {
                "noaa": 272.88,
                "sg": 272.88
            },
            "windSpeed": {
                "noaa": 3.22,
                "sg": 3.22
            }
        },
        {
            "airTemperature": {
                "noaa": 7.68,
                "sg": 7.68
            },
            "swellHeight": {
                "meteo": 0.63,
                "noaa": 0.05,
                "sg": 0.63
            },
            "swellPeriod": {
                "meteo": 6.87,
                "noaa": 4.19,
                "sg": 6.87
            },
            "time": "2023-02-18T20:00:00+00:00",
            "waveHeight": {
                "meteo": 0.78,
                "noaa": 0.22,
                "sg": 0.78
            },
            "wavePeriod": {
                "meteo": 3.92,
                "noaa": 18.78,
                "sg": 3.92
            },
            "windDirection": {
                "noaa": 285.31,
                "sg": 285.31
            },
            "windSpeed": {
                "noaa": 3.41,
                "sg": 3.41
            }
        },
        {
            "airTemperature": {
                "noaa": 7.26,
                "sg": 7.26
            },
            "swellHeight": {
                "meteo": 0.64,
                "noaa": 0.05,
                "sg": 0.64
            },
            "swellPeriod": {
                "meteo": 6.97,
                "noaa": 4.21,
                "sg": 6.97
            },
            "time": "2023-02-18T21:00:00+00:00",
            "waveHeight": {
                "meteo": 0.8,
                "noaa": 0.23,
                "sg": 0.8
            },
            "wavePeriod": {
                "meteo": 3.94,
                "noaa": 18.74,
                "sg": 3.94
            },
            "windDirection": {
                "noaa": 297.74,
                "sg": 297.74
            },
            "windSpeed": {
                "noaa": 3.6,
                "sg": 3.6
            }
        },
        {
            "airTemperature": {
                "noaa": 6.38,
                "sg": 6.38
            },
            "swellHeight": {
                "meteo": 0.64,
                "noaa": 0.07,
                "sg": 0.64
            },
            "swellPeriod": {
                "meteo": 6.95,
                "noaa": 9.19,
                "sg": 6.95
            },
            "time": "2023-02-18T22:00:00+00:00",
            "waveHeight": {
                "meteo": 0.82,
                "noaa": 0.26,
                "sg": 0.82
            },
            "wavePeriod": {
                "meteo": 3.9,
                "noaa": 14.86,
                "sg": 3.9
            },
            "windDirection": {
                "noaa": 298.72,
                "sg": 298.72
            },
            "windSpeed": {
                "noaa": 3.31,
                "sg": 3.31
            }
        },
        {
            "airTemperature": {
                "noaa": 5.49,
                "sg": 5.49
            },
            "swellHeight": {
                "meteo": 0.63,
                "noaa": 0.08,
                "sg": 0.63
            },
            "swellPeriod": {
                "meteo": 6.94,
                "noaa": 14.16,
                "sg": 6.94
            },
            "time": "2023-02-18T23:00:00+00:00",
            "waveHeight": {
                "meteo": 0.85,
                "noaa": 0.3,
                "sg": 0.85
            },
            "wavePeriod": {
                "meteo": 3.85,
                "noaa": 10.97,
                "sg": 3.85
            },
            "windDirection": {
                "noaa": 299.69,
                "sg": 299.69
            },
            "windSpeed": {
                "noaa": 3.03,
                "sg": 3.03
            }
        },
        {
            "airTemperature": {
                "noaa": 4.6,
                "sg": 4.6
            },
            "swellHeight": {
                "meteo": 0.63,
                "noaa": 0.1,
                "sg": 0.63
            },
            "swellPeriod": {
                "meteo": 6.92,
                "noaa": 19.14,
                "sg": 6.92
            },
            "time": "2023-02-19T00:00:00+00:00",
            "waveHeight": {
                "meteo": 0.87,
                "noaa": 0.33,
                "sg": 0.87
            },
            "wavePeriod": {
                "meteo": 3.81,
                "noaa": 7.09,
                "sg": 3.81
            },
            "windDirection": {
                "noaa": 300.67,
                "sg": 300.67
            },
            "windSpeed": {
                "noaa": 2.74,
                "sg": 2.74
            }
        }
    ],
    "meta": {
        "cost": 1,
        "dailyQuota": 10,
        "end": "2023-02-19 00:00",
        "lat": 54.24360253672103,
        "lng": -0.35846234063022786,
        "params": [
            "airTemperature",
            "swellHeight",
            "swellPeriod",
            "waveHeight",
            "wavePeriod",
            "windDirection",
            "windSpeed"
        ],
        "requestCount": 1,
        "start": "2023-02-09 00:00"
    }
}