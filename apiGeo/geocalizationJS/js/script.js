const YOUR_API_KEY = "INSERT HERE YOUR API KEY";

(function(){
     
    const successCallback = (position) => {
        console.log(position)
        
        var GETLOCATION ='https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=en'+'&key='+YOUR_API_KEY;
    
        //show view json dat
        $.getJSON(GETLOCATION).done(function(location) {
            console.log(location)
        })
    }
    
    const errorCallback = (error) => {
        console.log(error)
    }

    //call request currentPosition actually
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback,{
        enableHighAccuracy:true,
        timeout: 5000
    })
})();