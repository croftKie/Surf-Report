import '../css/style.css'
import bg from '../assets/images/waves.jpeg'
import { main } from "./weather-api";
import { slide } from "./slide";
import { dom } from "./dom";

let myLatlng = { lat: -25.363, lng: 131.044 };
document.querySelector('body').style.backgroundImage = `url(${bg})`;

document.getElementById('button').addEventListener('click',(e)=>{
    myLatlng = location;
    main(myLatlng);
    console.log(myLatlng);
    e.target.childNodes[0].textContent = "Choose a day";
    e.target.style.pointerEvents = 'none';

    setTimeout(()=>{
        e.target.childNodes[0].textContent = "Let's Surf";
        e.target.style.pointerEvents = 'auto';
    },4000)
});

dom();
slide();




// sets up Google Map
window.initMap = initMap;

let location = {};
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatlng,
    });
    // Create the initial InfoWindow.
    let infoWindow = new google.maps.InfoWindow({
        content: "Pop the marker on your local beach!",
        position: myLatlng,
    });

    infoWindow.open(map);
    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow.
        infoWindow.close();
        // Create a new InfoWindow.
        infoWindow = new google.maps.InfoWindow({
            content: `Ready to surf? ${mapsMouseEvent.latLng}`
        });
        location = mapsMouseEvent.latLng.toJSON();
        infoWindow.open(map);
    });
}

// dynamically add map
var tag = document.createElement('script');
tag.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBsU8O-lE3TtQzQrZRHV47FW9dHWsJaP9g&callback=initMap";
tag.defer = true;
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


