var cityName = "Boston";
var apiKey = "faa7b7b84dfcd508f70fb1a0655d7b85";
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.Runtime);
    var cardTemplate = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${response.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${response.weather[0].description}</h6>
      <p class="card-text">${response.main.temp}</p>
      <a href="#" class="card-link">Card link</a>
    </div>
  </div>`
  $("#weather_card").html(cardTemplate)
  });

  