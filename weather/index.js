let  weather = {
    api_key : ' e327a62c5a1554a74d15150619ce63e5',
    fetchWeather: function (city) {
        fetch(
           " https://api.openweathermap.org/data/2.5/weather?q="+ city +
       " &appid=" + this.api_key
          )
          .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
             
            }
            return response.json();
          })
          .then((data) => console.log(data));
      },
}


weather.fetchWeather('new york')
