// import { location } from "./init-map";
import { apiRef } from "../../config";

const weatherAPI = apiRef.weather;

// const locTemplate = {
//     lat : 54.24360253672103,
//     lng : -0.35846234063022786
// }

// let data;

// export function main(){
//     const lat = locTemplate.lat;
//     const lng = locTemplate.lng;
//     const params = 'airTemperature,swellHeight,swellPeriod,waveHeight,wavePeriod,windDirection,windSpeed'

//     fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
//   headers: {
//     'Authorization': 'f1dd4fa4-a1b0-11ed-bc36-0242ac130002-f1dd5058-a1b0-11ed-bc36-0242ac130002'
//   }
// }).then((response) => response.json()).then((jsonData) => {
//   data = jsonData;
//   console.log(data);
// });
// }