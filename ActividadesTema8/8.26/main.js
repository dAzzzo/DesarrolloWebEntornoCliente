// main.js
import geo from './geo.js';

geo.askPermissions()
    .then(permissionState => {
        console.log('Permission state:', permissionState);
        return Promise.all([geo.getLongitude(), geo.getLatitude(), geo.getAltitude()]);
    })
    .then(values => {
        const [longitude, latitude, altitude] = values;
        console.log('Longitude:', longitude);
        console.log('Latitude:', latitude);
        console.log('Altitude:', altitude);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
