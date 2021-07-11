const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos =[];
//7.5장까지의 주석 정리
const TODOS_KEY ="todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
    /*JSON.stringify() changes to string 
    JSON.parse() string을 array로 변환
    value를 저장할때 a, b, c 보다 ["a","b","c"]귄장 
    a,b,c는 a중복 입력이 안됨}*/

function deleteToDo(event){
    const list = event.target.parentElement;
    list.remove();
    /* x를 포함한 줄(list)을 없애고 싶을때 list를 찾아야함
    event를 console log해서 path를 보면 button의 부모가
    list임을 확인했고 target을 을 찾고 그중에서 
    parentElement가 list임을 확인
    button이 이 함수에서의 event이므로 
    event.target.parentElement
    */
}
function paintToDo(newToDo){
//i will paint newToDo
    const list = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    //mouse event관련 moveover=hoverover은 마우스를 클릭하지않고 위치시키는 것
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(list);
}

function handleToDoSubmit(event){
    event.preventDefault(); //event의 실행을 막는다
    const newToDo = toDoInput.value;
    toDoInput.value="";
    /*위2줄에 대한 설명 newToDo에 들어간 값을 저장하고 toDoInput를 초기화하면 
    value를 초기화하면서 이전값을 저장할수있다.
    */ 
   toDos.push(newToDo);
   /*newToDo를 push해서 toDos라는 array에 입력한다.
   localStorage에는 array안되고 text만 넣을수있다.
   */
   paintToDo(newToDo);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos= localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    /*JSON.stringify() changes to string 
    JSON.parse() string을 array로 변환*/

    toDos =parsedToDos;
    parsedToDos.forEach(paintToDo);
    //paintToDo가 newToDo를 받기때눙누문
    /* 위를 arrow function이라한다
    function sayHello(item){
    console.log("this is the turn of ", item);
    로 표현가능 
    둘다 sayHello("a")  sayHello("b") 이런식으로 
    각각의 array값을 각각넣어 출력하게된다. 
    */
}
