var d = new Date();
var check = d.getHours();
var images = ['images/sun.png','images/moon.png','images/part-cloud.png','images/part-cloud-night.png','images/rain.png','images/cloudy.png']
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
        windchill = weather.wind.chill;
        heat = weather.heatindex;
  
      $("#temp").html(temp);
        $("#con").html(con);
        $("#place").html(loc);
        $("#windsped").html(winds);
        $("#dayh").html(temphigh);
        $("#dayl").html(templow);
        $("#wchill").html(windchill);
        $("#hindex").html(heat);
        if(con == "Fair"){
            $("#wicon").attr('src',images[0]);
            if(check >= 18){
                $("#wicon").attr('src',images[1]);
            }
        }
        if(con == "Mostly Cloudy"){
         $("#wicon").attr('src',images[5]);   
        }
        if(con == "Partly Cloudy"){
            $("#wicon").attr('src',images[2]);
            if(check >= 18){
                $("#wicon").attr('src',images[3]);
            }
        }
        
        if(check >= 18 ){
         $("body").css("background-color","#2c3e50");   
        }
        else{
         $("body").css("background-color","#4890a8");   
        }
    }
  });
}
