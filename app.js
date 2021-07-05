const loginForm = document.querySelector("#login-form");
<<<<<<< HEAD
const loginInput  = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const  HIDDEN_CLASSNAME = "hidden";

/*document는 html전체를  reference한다
"hello" + username 와 `hello ${username}` 같은표현이다 
[''가 아니라 ``다]
preventDefault는 기본으로 제공되는 event발생을 막는 method 다
class가 말티즈라면 object는 사랑이, 다른 말티즈이름이다
classlist.add("hidden") classlist.remove("hidden") ""표시해야함
 관습 string 만 포함된변수 const로 선언할때는 
 대문자로 표기한다 중요하지않은정보이기 때문에
*/

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    greeting.innerText ="hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);

=======
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
>>>>>>> 67cf1c2dd9891618fc96bffbadd19811b7dc1edc
}

loginForm.addEventListener("submit", onLoginSubmit)