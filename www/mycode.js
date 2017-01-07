//declare database
//var db = null;

function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
    document.addEventListener("deviceready", onDeviceReady, false);
    //setInterval(function(){ alert("Hello, Jay"); }, 3000);
}

function onDeviceReady() {
    window.alert("In onDeviceReady");   
} 

function msg() {
     window.alert("button pushed");
    navigator.geolocation.getCurrentPosition(geolocationSuccess,
                                         [geolocationError]);   
    //setInterval(function(){ alert("Hello"); }, 3000);  
}

// onSuccess Callback 
// This method accepts a Position object, which contains the 
// current GPS coordinates 
// 
var geolocationSuccess = function(position) {
    window.alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};
 
// onError Callback receives a PositionError object 
// 
function geolocationError(error) {
    window.alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
 

