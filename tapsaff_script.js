let area = "edinburgh";
const temp = document.querySelector(".temperature");
const tapsRating = document.querySelector(".taps_rating");
const weatherText = document.querySelector(".weatherText");
const weatherIcon = document.querySelector(".weatherIcon");

fetch(`https:/\/api.weatherapi.com/v1/forecast.json?key=03a7522f574442939ee153422222602&q=${area}&days=7&aqi=no&alerts=no`)
  .then(response => response.json())
  .then(data => {console.log(data);
                weatherText.innerHTML = `<span>${getCurrentWeatherText(data)}</span>`;
                weatherIcon.innerHTML = `<img src="${getCurrentWeatherIcon(data)}" alt="Weather Icon">`;
                temp.innerHTML = `<span>${getCurrentTemp(data)}℃</span>`;
                tapsRating.style.height = getTopRating(data);
                }
       );

function getCurrentTemp(data){
  return data.current.temp_c;
}



function getCurrentWeatherText(data){
  return data.current.condition.text;
}

function getCurrentWeatherIcon(data){
  return data.current.condition.icon;
}

function getTopRating(data){
  if (getCurrentTemp(data) < 16 ){
    return "10%";
  }else{
    return "80%";
  }
}