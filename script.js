// ------------ FETCH THE DATA -------------

function fetchData(city) {
    
    const apiKey = "68fb8e651aeaecc849e9f1546c246ffc";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => display(data))
    .catch(error => console.error(error.message))      

}

// ------------ CITY IN[UT BUTTON --------------]

let form = document.getElementById("form");

form.addEventListener("submit", (event)=>{

    event.preventDefault()
    let cityInput = document.getElementById("cityName").value;
    fetchData(cityInput);
})

// ------------- DISPLAY ------------------

function display(data){

    const weather = document.querySelector("#weather .card-content");
    const temperatureValue = data.main.temp;
    const humidityValue = data.main.humidity;
    
    const temperature = (temperatureValue - 273.15).toFixed(1)
    const description = data.weather[0].description;
    const city = data.name;

    const currentHour = new Date().getHours()
    const dayTime = currentHour >= 6 && currentHour < 18;
    const background = document.getElementById("weather");


    if(description.includes("clear")){

        background.style.backgroundImage = dayTime ? 
                                                    "url('./images/clear-sky-2.jpg')" : 
                                                    "url('./images/clear-sky-night.jpg')";

    }else if(description.includes("cloud")){

        background.style.backgroundImage = dayTime ? 
                                                    "url('./images/cloudy-sky.webp')" : 
                                                    "url('./images/cloudy-sky-night.jpg')";

    }else if(description.includes("rain")){

        background.style.backgroundImage = dayTime ? 
                                                    "url('./images/rainy-sky.webp')" : 
                                                    "url('./images/rainy-sky-night.jpg')";

    }else if (description.includes("snow")){

        background.style.backgroundImage = dayTime ? 
                                                    "url('./images/snowny-sky.jpg')" : 
                                                    "url('./images/snowny-sky-night.jpg')";

    }else if (description.includes("thunderstorm")){

         background.style.backgroundImage = dayTime ? 
                                                    "url('./images/thunderStorm-sky.webp')" : 
                                                    "url('./images/thunderStorm.jpg')"; 

    }else{
        background.style.backgroundImage = dayTime ? 
                                                    "url('./images/clear-sky-2.jpg')" : 
                                                    "url('./images/clear-sky-night.jpg')";
    }


      weather.innerHTML = `
        <h1 class="fw-bold fs-1">${city}</h1>
        <p class="fw-semibold">Temp: ${temperature} °C</p>
        <p class="fw-semibold">${description}</p>
        <p class="fw-semibold">Humidity: ${humidityValue}%</p>
    `;

}

// ----------- BY DEFAULT CALLING -----------

fetchData("navsari")