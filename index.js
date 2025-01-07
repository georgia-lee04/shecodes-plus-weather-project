function currentTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector(".current-temperature-value");
    temperatureElement.innerHTML = `${temperature}`;
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = response.data.city;
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    searchCity(searchInputElement.value);
  }
  
  function searchCity(city) {
    let apiKey = "4f9f36e261a3705eo07b4a98ct5b3f15";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  
    axios.get(apiUrl).then(currentTemperature);
  }
  
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);