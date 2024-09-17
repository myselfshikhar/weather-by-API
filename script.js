// document.getElementById('location-form').addEventListener('submit', getWeather);

// function getWeather(e) {
//   //Write you code logic here

//   // Error should be very specific
//   // Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.
  

// }

// key=a7777a1b6b66e290d7cd33440ee8a233

// https://api.openweathermap.org/data/2.5/weather?q={new%20york}&appid={a7777a1b6b66e290d7cd33440ee8a233}

let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let key = 'a7777a1b6b66e290d7cd33440ee8a233';


let searchbox = document.querySelector(".inputbox");
let searcbutton = document.querySelector(".inputbutton");

let temp = document.querySelector(".temp");
// let city = document.querySelector(".city");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");


async function checkweather(city){
    let res= await fetch(url + city + `&appid=${key}`);
    let data = await res.json();

    // console.log(data);
    temp.innerHTML= "temp -"+data.main.temp;
    document.querySelector(".city").innerHTML= "city-"+data.name;
    wind.innerHTML=data.wind.speed +"km/h" ;
    humidity.innerHTML= data.main.humidity + "%";

    // console.log(data);
    // console.log(data.name);
    // console.log(data.main.temp);
    // console.log(data.wind.speed);
    // console.log(data.main.humidity);



}

searcbutton.addEventListener("click" , () =>{
    checkweather(searchbox.value);  
    console.log("button clicked");

})