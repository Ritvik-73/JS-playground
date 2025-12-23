console.log("JS is connected")
cityInput=document.getElementById("cityInput")
searchButn=document.getElementById("btn")
stat=document.getElementById("status")
weatherResult=document.getElementById("weatherResult")

cityInput.addEventListener("keydown",function(event){
    if( event.key === "Enter"){
        event.preventDefault();
        searchButn.click();
    }
});

async function getCoordinates(city) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
  );
  const data = await response.json();

  if (!data.results) {
    throw new Error("City not found");
  }

  return {
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude
  };
}

async function getWeather(latitude, longitude) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await response.json();

  return data.current_weather.temperature;
}

searchButn.addEventListener("click", async function () {
  const city = cityInput.value.trim();
  if (city === "") {
    stat.innerText = "Please enter a city name.";
    return;
  }

  stat.innerText = "Loading...";
  weatherResult.innerText = "";
  searchButn.disabled = true;

  try {
    const { latitude, longitude } = await getCoordinates(city);
    const temperature = await getWeather(latitude, longitude);

    stat.innerText = "";
    weatherResult.innerText = `Temperature in ${city}: ${temperature}°C`;
  } catch (error) {
    stat.innerText = error.message || "Something went wrong.";
   }
   finally {
   searchButn.disabled = false;
   cityInput.value = "";
   }
});



