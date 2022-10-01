const appId = config.SECRET_KEY;
const units = "imperial";
let searchMethod = "zip";

function searchWeather(searchTerm) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod = searchTerm}&APPID=${appId}&units=${units}`).then(result => {
    return result.json();
  }).then(result => {
    init(result);
  });
}

function init(resultFromServer) {
  console.log(resultFromServer);
}

// Testing without a framework
function it(description, fn) {
  try {
    fn();
    console.log("\x1b[32m%s\x1b[0m", "\u2714 " + description)
  } catch (error) {
    console.log("\n \x1b[32m%s\x1b[0m", "\u2714 " + description)
    console.error();
  }
}

function assert(condition) {
  if (!condition) {
    throw new Error();
  }
}

// Testing test with example
function sum(a, b) {
  return a + b;
}

// How to use the test
it("should return a sum of two integers", function () {
  assert(sum(2, 11) === 13);
});