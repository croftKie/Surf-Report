import { apiRef } from "../../config";
import { dom } from "./dom";
import { currentForecast } from './weather-data';

const weatherAPI = apiRef.weather;

// const locTemplate = {
//     lat : 54.24360253672103,
//     lng : -0.35846234063022786
// }


export function main(myLatlng){
    let weatherData;
    const lat = myLatlng.lat;
    const lng = myLatlng.lng;
    const params = 'airTemperature,swellHeight,swellPeriod,waveHeight,wavePeriod,windDirection,windSpeed'

    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': weatherAPI
  }
}).then((response) => response.json()).then((jsonData) => {
    weatherData = jsonData;
    console.log(weatherData);

    let surfData = currentForecast(weatherData);
    console.log(surfData);
    dom(surfData);
});
}