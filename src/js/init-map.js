// Initialize and add the map
export let location = {};

export function initMap() {
    const myLatlng = { lat: -25.363, lng: 131.044 };
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
            content: "Ready to surf? - Cick below!",
            position: mapsMouseEvent.latLng,
        });
        location = mapsMouseEvent.latLng.toJSON();
        console.log(location);
        infoWindow.open(map);
    });
}
