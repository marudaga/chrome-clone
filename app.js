const loginForm = document.querySelector("#login-form");
const loginInput  = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// document는 html전체를  reference한다

function onLoginBtnClick(){
    const username = loginInput.value;
    if(username ===""){
        alert("Please write your name");
    }
    else if(username.length>15){
        alert("Your name is too long.");
    }
    console.log(loginInput.value);
    /*console.dir(loginInput) attribute중에서 value사용
    console.log하나 출력(""안밖상관없이 전체 출력됨) info 여러객체 출력("hello",b)=hello b의값,  
    %.2d정수(%d정수출력) 10자리수까지 표현, %s 문자열,%.2f 소수점 2번째까지 출력 */
    console.log("click!!!");
}

loginButton.addEventListener("click",onLoginBtnClick);