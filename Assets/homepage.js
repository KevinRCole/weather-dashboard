var APIKey = "1dbcf8290ea4ecbce96bed0c6567bd75";
var cityNameFormEl = document.querySelector("#user-form");
var cityNameInputEL = document. querySelector("#username");
// var city = "Austin";

var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityName = cityNameInputEL.value.trim();
  console.log(cityName);

  if (cityName) {
    getCityWeather(cityName);

  } else {
    alert("Please enter the name of a City");
  } 
}


var getCityWeather = function (city) {
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

  fetch(queryURL)
    .then(function (response) {
      return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.wind.speed);
  
        var windSpeed = data.wind.speed;
        console.log(windSpeed);
  
        var longitude = data.coord.lon;
        console.log(longitude);
  
        var latitude = data.coord.lat;
        console.log(latitude);
  
        var temp = data.main.temp;
        console.log(temp);
  
        var humidity = data.main.humidity;
        console.log(humidity);
  
        
      })};    









// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

  // fetch(queryURL)
  //   .then(function (response) {
  //     return response.json();
  //   })
    


  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


    // five-day forecast:
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


    // var checkPoint = data.

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



cityNameFormEl.addEventListener('submit', formSubmitHandler);
// languageButtonsEl.addEventListener('click', buttonClickHandler);