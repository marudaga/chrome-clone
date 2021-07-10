const clock = document.querySelector("h2#clock");
//h2 #clock 띄워쓰면 안됨
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
//getClock를 ms 후에 실행하고 ms마다 반복
//timeout(함수,ms)함수를 ms후에 실행
//padStart는 string에서만 사용가능