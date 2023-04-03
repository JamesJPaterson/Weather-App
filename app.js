const apiKey = "89ad92383ac5dd73e1f096eb9cbf58e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function getWeather(city) {
    // Am adding a fetch call to the OpenWeathermap API and returning the info which is then logged to the console as a JSON object 
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const temperatureElement = document.getElementById("temperature");
        temperatureElement.textContent = `${data.main.temp}°C`;

        const feelslikeElement = document.getElementById("feels-like");
        feelslikeElement.textContent = `Feels like : ${data.main.feels_like}°C`;
      })
      .catch(error => console.error(error));
}

const submitButton = document.getElementById("Submit-button");

submitButton.addEventListener("click", () => {
    const inputCity = document.getElementById("input-city");
    const city = inputCity.value;
    getWeather(city);
});


