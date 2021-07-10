const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    console.log(event);
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
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    toDoInput.value="";
    /*위2줄에 대한 설명 newToDo에 들어간 값을 저장하고 toDoInput를 초기화하면 
    value를 초기화하면서 이전값을 저장할수있다.
    */ 
   paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);