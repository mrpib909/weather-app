var d = new Date();
var check = d.getHours();

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
            if(check >= 18){
                $("#wicon").attr('src','images/moon.png');
            }
        }
        if(con == "Partly Cloudy"){
            $("#wicon").attr('src','images/part-cloud.png');
            if(check >= 18){
                $("#wicon").attr('src','images/part-cloud-night.png');
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
