const apiKey = "89ad92383ac5dd73e1f096eb9cbf58e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function getWeather(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // TODO: Display weather information on the page
      })
      .catch(error => console.error(error));
  }