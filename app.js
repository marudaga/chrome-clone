const loginForm = document.querySelector("#login-form");
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

}

loginForm.addEventListener("submit", onLoginSubmit)