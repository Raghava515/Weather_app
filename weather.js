const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");
  
  async function checkWeather(city) {
      if (!city) return;
  
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  
      if (response.status === 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
      } else {
          const data = await response.json();
  
          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
          document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
          document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
  
          const weatherCondition = data.weather[0].main;
          const weatherIcons = {
              Clouds: "img/clouds.png",
              Clear: "img/clear.png",
              Rain: "img/rain.png",
              Drizzle: "img/drizzle.png",
              Mist: "img/mist.png"
          };
  
          weatherIcon.src = weatherIcons[weatherCondition] || "img/default.png";
  
          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";
      }
  }
  
  searchBtn.addEventListener("click", () => checkWeather(searchBox.value))