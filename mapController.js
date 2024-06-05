// mapController.js

// Include Leaflet.js library
import L from 'leaflet';

// Initialize the map
function initializeMap(mapContainerId) {
    const map = L.map(mapContainerId).setView([51.505, -0.09], 13); // Default view set to London

    // Add a tile layer (OpenStreetMap in this case)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map;
}

// Add a marker to the map
function addMarker(map, lat, lng, popupText = '') {
    const marker = L.marker([lat, lng]).addTo(map);
    if (popupText) {
        marker.bindPopup(popupText).openPopup();
    }
    return marker;
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    const map = initializeMap('map');

    // Add a sample marker
    addMarker(map, 51.505, -0.09, 'This is a sample marker');
});

export { initializeMap, addMarker };
