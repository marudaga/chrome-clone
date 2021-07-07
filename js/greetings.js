const loginForm = document.querySelector("#login-form");
const loginInput  = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const  HIDDEN_CLASSNAME = "hidden";

const savedUsername = localStorage.getItem("username");
/*document는 html전체를  reference한다
"hello" + username 와 `hello ${username}` 같은표현이다 
[''가 아니라 ``다]
preventDefault는 기본으로 제공되는 event발생을 막는 method 다
class가 말티즈라면 object는 사랑이, 다른 말티즈이름이다
classlist.add("hidden") classlist.remove("hidden") ""표시해야함
 관습 string 만 포함된변수 const로 선언할때는 
 대문자로 표기한다 중요하지않은정보이기 때문에
*/

/*4.5 localStorage에 user정보 저장하기가 가장 쉽다
 console 창에서 application 에서  localStorage.setItem("username", "nico")라고 입력하면 
 우리 Storage 항목에  들어가게된다.
 localStorage.setItem("key",Value)가 된다.
 가져올때도 console창에 setitem 처럼 getitem이나 removeitem 가능*/
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText ="Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername ===null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    //show the greeting
    paintGreetings(savedUsername);
}
console.log("savedUsername")

loginForm.addEventListener("submit", onLoginSubmit)