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

searchButn.addEventListener("click",async function(){
    const city=cityInput.value.trim();

    if(city===""){
        stat.innerText="Please enter a city name";
        weatherResult.innerText="";
        return;
    }
    
    stat.innerText="Loading...";
    weatherResult.innerText="";
    
    try{
        const geoResponse=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
        const geoData=await geoResponse.json();
        console.log(geoData);
        
        if(!geoData.results || geoData.results.length===0){
            stat.innerText="City not found";
            return;
        }
        
        const {latitude,longitude}=geoData.results[0];
        console.log(latitude,longitude);
        
        const weatherResponse=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData=await weatherResponse.json();
        
        stat.innerText="CITY FOUND!";
        
        temp=weatherData.current_weather.temperature;
        
        weatherResult.innerText=`Temprature in the city is ${temp}°C`
    }catch(error){
        stat.innerText="Something went wrong";
        weatherResult.innerText=""
    }
})
