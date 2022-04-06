var APIKey = "1dbcf8290ea4ecbce96bed0c6567bd75";

var cityNameFormEl = document.querySelector("#user-form");
var cityNameInputEL = document.querySelector("#username");

var presentDate = moment().format('MM/DD/YYYY');
document.getElementById("current-date").textContent=presentDate;



// var cityLat = "";
// var cityLon = "";
// var city = "Austin";
var weatherDataArray = [];




var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityName = cityNameInputEL.value.trim();
  // console.log(cityName);
  // console.log(typeof(cityName));
  
  if (cityName) {
    getCityWeather(cityName);
    document.getElementById("city-searched-for").textContent = cityName;
    // document.getElementById("current-date").textContent = presentDate;
  
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
          console.log("today's weather data:", data);
          
       
        var cityLon = data.coord.lon;
        
        var cityLat = data.coord.lat;
        

      //  use the longitude and latitude coordinates from the preceding fetch(queryURL) in a "onecall" fetch of current data and 8-day forecast 
    
   
      var queryForecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + cityLat + "&lon=" + cityLon + "&units=imperial" + "&appid=" + APIKey;

         
      fetch(queryForecastURL)
        .then(function (response) {
          return response.json();
          })
         .then(function (data) {

          console.log(data);
         
          
        //  The "one call" returns current weather data, plus an 8-day forecast, and we need to access the first 5 days of that eight day forecast
        
        // render this date to the HTML page.
          
          document.getElementById("current-temp").textContent = data.current.temp + "\u00B0"; 
          document.getElementById("current-wind-speed").textContent = data.current.wind_speed;
          document.getElementById("current-humidity").textContent=data.current.humidity;
          document.getElementById("current-uvi").textContent=data.current.uvi;
        
        // document.getElementById

          // var forecastDay1 = data.daily[1];

          for (let i = 0; i <= 4; i++) {
            document.getElementById("temp-forecast-" + String(i + 1)).textContent = data.daily[i].temp.day + "\u00B0";
            document.getElementById("wind-forecast-" + String(i + 1)).textContent = data.daily[i].wind_speed;
            document.getElementById("humidity-forecast-" + String(i + 1)).textContent = data.daily[i].humidity;
          }

        









          })
            
      });
    }

    cityNameFormEl.addEventListener('submit', formSubmitHandler);

    
    
    
    
    










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