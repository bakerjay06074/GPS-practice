//declare database
//var db = null;
var isStopButtonPushed = false;
var watchID;

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
   
    watchID = navigator.geolocation.watchPosition(geolocationSuccess,
                                         geolocationError,
        { enableHighAccuracy: true });   
     
}

// onSuccess Callback 
// This method accepts a Position object, which contains the 
// current GPS coordinates 
// 
var geolocationSuccess = function(position) {
    /*
    window.alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    */
    document.getElementById("tbLongitude").value = position.coords.longitude;
     document.getElementById("tbLatitude").value = position.coords.latitude;
};
 
// onError Callback receives a PositionError object 
// 
function geolocationError(error) {
    window.alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
 
function stop_button_pushed() {
    isStopButtonPushed = true;
    navigator.geolocation.clearWatch(watchID);
}
    
