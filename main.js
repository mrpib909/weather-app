
$(document).ready(function() {
    
    navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude);
  });
    });
   function loadWeather(location,woeid){ 
  $.simpleWeather({
    location: location,
      woeid: woeid,
    unit: 'f',
    success: function(weather) {

      temp = weather.temp+'&deg;'+weather.units.temp;
        con = weather.currently;
        loc = weather.city;
        winds = weather.wind.direction+' '+weather.wind.speed+' '+"MPH";
        temphigh = weather.high;
        templow = weather.low;
  
      $("#temp").html(temp);
        $("#con").html(con);
        $("#place").html(loc);
        $("#windsped").html(winds);
        $("#dayh").html(temphigh);
        $("#dayl").html(templow);
        if(con == "Fair"){
            $("#wicon").attr('src','images/SUN.png');
        }
    }
  });
}
