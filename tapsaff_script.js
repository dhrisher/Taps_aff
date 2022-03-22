let area = "edinburgh";
const temp = document.querySelector(".temperature");
const tapsRating = document.querySelector(".taps_rating");
const weatherText = document.querySelector(".weatherText");
const weatherIcon = document.querySelector(".weatherIcon");
const date = document.querySelector("#date");

fetch(`https:/\/api.weatherapi.com/v1/forecast.json?key=03a7522f574442939ee153422222602&q=${area}&days=7&aqi=no&alerts=no`)
  .then(response => response.json())
  .then(data => {console.log(data);
                weatherText.innerHTML = `<span>${getCurrentWeatherText(data)}</span>`;
                weatherIcon.innerHTML = `<img src="${getCurrentWeatherIcon(data)}" alt="Weather Icon">`;
                temp.innerHTML = `<span>${getCurrentTemp(data)}℃</span>`;
                tapsRating.style.height = getTopRating(data);
                console.log("local date is "+getCurrentDate(data))
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

function getCurrentDate(data){
  const dateString = data.location.localtime;

  let splitDate = dateString.split("-");

  let year = splitDate[0];
  let month = splitDate[1];
  //the additional split removes the 00:00 time that trails behind the day
  let day = splitDate[2].split(" ")[0];

  //change month to text 

  if (month == "01"){
    month = "January";
  }
  if (month == "02"){
    month = "February";
  }
  if (month == "03"){
    month = "March";
  }
  if (month == "04"){
    month = "April";
  }
  if (month == "05"){
    month = "May";
  }
  if (month == "06"){
    month = "June";
  }
  if (month == "07"){
    month = "July";
  }
  if (month == "08"){
    month = "August";
  }
  if (month == "09"){
    month = "September";
  }
  if (month == "10"){
    month = "October";
  }
  if (month == "11"){
    month = "November";
  }
  if (month == "12"){
    month = "December";
  }


  return `day:${day} month:${month} year:${year}`;
}

function getTopRating(data){
  if (getCurrentTemp(data) < 16 ){
    return "10%";
  }else{
    return "80%";
  }
}

