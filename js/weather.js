const API_KEY= "3a8ca6d58ef19cecda65b2b63c5f0ae9";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");// url load방법 const x=``; 안에 변수는 ${}

function onGeoOk(position){
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log("당신은 ", lat, lon," 에 살고있습니다");
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          city.innerText = data.name;
          weather.innerText = `현재날씨: ${data.weather[0].main}
        온도: ${Math.floor(data.main.temp-273)} ℃`;
        });
}
function onGeoError(){
    alert("위치를 찾을 수 없습니다.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// parm3개있다 success한경우 error의 경우  error의 경우