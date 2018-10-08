const appId = config.SECRET_KEY;
const units = "imperial";
let searchMethod = "zip";

function searchWeather(searchTerm) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod=searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then( result => {
    init(result);
  });
}

function init(resultFromServer) {
  console.log(resultFromServer);
}
