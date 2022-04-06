var APIKey = "1dbcf8290ea4ecbce96bed0c6567bd75";

var cityNameFormEl = document.querySelector("#user-form");
var cityNameInputEL = document.querySelector("#username");
var cityLat = "";
var cityLon = "";
// var city = "Austin";
var weatherDataArray = [];




var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityName = cityNameInputEL.value.trim();
  // console.log(cityName);
  // console.log(typeof(cityName));

  if (cityName) {
    getCityWeather(cityName);

  } else {
    alert("Please enter the name of a City");
  } 
}


  var getCityWeather = function (city) {

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey;

        // First, fetch openWeather data for a the current day of the city the user submits

    fetch(queryURL)
      .then(function (response) {
        return response.json();
        })
        .then(function (data) {
          console.log("today's weather data:")
          console.log(data);
        // console.log(data.wind.speed);
  
        // var windSpeed = data.wind.speed;
        // console.log(windSpeed);
  
        var cityLon = data.coord.lon;
        // console.log("longitude:")
        // console.log(cityLon);
        
  
        var cityLat = data.coord.lat;
        // console.log("what type of object is latitude?")
        // console.log(typeof(cityLat));
  
        // var temp = data.main.temp;
        // console.log(temp);
  
        // var humidity = data.main.humidity;
        // console.log(humidity);



      //  the preceding fetch(queryURL) returned weather data for the selected city for the current date, and that data includes the latitude and longitude coordinates, which we can use to fetch forecast data five days out -- this forecast data also includes data for current date
    
   
      var queryForecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial" + "&appid=" + APIKey;

         
      fetch(queryForecastURL)
        .then(function (response) {
          return response.json();
          })
         .then(function (data) {
         
        //  This "one call" returns current weather data, plus an 8-day forecast, and we just need to access the first 5 days of that eight day forecast

          console.log("One call weather data:");
          console.log(data);
          var weatherDataArray = data;
        
          console.log(weatherDataArray);
          var currentWeather = weatherDataArray.current;
          var forecastDay1 = weatherDataArray.daily[1];
          var forecastDay2 = weatherDataArray.daily[2];
          var forecastDay3 = weatherDataArray.daily[3];
          var forecastDay4 = weatherDataArray.daily[4];
          var forecastDay5 = weatherDataArray.daily[5];  
          console.log("Today's weather:");
          console.log(currentWeather);
          console.log("Forecast day one:");
          console.log(forecastDay1);
          console.log(forecastDay2);
          console.log(forecastDay3);
          console.log(forecastDay4);
          console.log(forecastDay5);

        









          })
            
      });
    }

    cityNameFormEl.addEventListener('click', formSubmitHandler);

    
    
    
    
    










    // console.log(checkPoint);
    //   //Loop over the data to generate a table, each table row will have a link to the repo url
    //   for (var i = 0; i < data.length; i++) {
    //     // Creating elements, tablerow, tabledata, and anchor
    //     var createTableRow = document.createElement('tr');
    //     var tableData = document.createElement('td');
    //     var link = document.createElement('a');

    //     // make the text content of each anchor element whatever the "value" of "html_url" "key/name" of the JSON array is.  Each object of that erry has a "key" (or is is called "name"?) and a "value", and url.html is one of the keys.
    //     link.textContent = data[i].html_url;
    //     console.log(link)
        
    //     // this next line of code turns the textContent of the "link" variable into a hyperlink
    //     link.href = data[i].html_url;

    //     // Appending the link to the tabledata and then appending the tabledata to the tablerow
    //     // The tablerow then gets appended to the tablebody
    //     tableData.appendChild(link);
    //     createTableRow.appendChild(tableData);
    //     tableBody.appendChild(createTableRow);
//       }
//     });
// }

// need to remember to start this whole process with the button click
// fetchButton.addEventListener('click', getApi);



// cityNameFormEl.addEventListener('submit', formSubmitHandler);
// languageButtonsEl.addEventListener('click', buttonClickHandler);