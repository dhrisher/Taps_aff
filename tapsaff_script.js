let area = "edinburgh";
const heading = document.querySelector(".heading");
const tapsRating = document.querySelector(".taps_rating");

fetch(`https:/\/api.weatherapi.com/v1/forecast.json?key=03a7522f574442939ee153422222602&q=${area}&days=7&aqi=no&alerts=no`)
  .then(response => response.json())
  .then(data => {console.log(data);
                heading.innerHTML = `<h1>Current temp (${area}) = ${getCurrentTemp(data)} degrees centigrade</h1>`;
                tapsRating.style.height = getTopRating(data);
                }
       );

function getCurrentTemp(data){
  return data.current.temp_c;
}



function getCurrentWeather(data){
  
}

function getTopRating(data){
  if (getCurrentTemp(data) < 16 ){
    return "10%";
  }else{
    return "80%";
  }
}