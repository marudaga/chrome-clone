const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos =[];
/*7.6장 commit
change input value to input obj cause 
한문장 지우기 ctrl+x, 사이드바 숨기기 ctrl+end
주석처리 ctrl+/  묶음 주석 shift+alt+a 
들여쓰기 ctrl+],내어쓰기 ctrl+ [
*/
const TODOS_KEY ="todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const list = event.target.parentElement;
    list.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
  /* typeof를 해서 보면 toDo.id number--- list.id string이다
  toDos.filter((toDo) => toDo.id !== parseInt(list.id)); 
  toDos함수를 필터링하는데 toDo라는 파라미터의 id값과 list의 id값(없앤id)가 다른경우
   통과시켜주고 그 값을 toDos에 업데이트한다 */
  saveToDos();
  /*saveToDos() 쓰는 이유는 기존의 값을 toDos에 업데이트했지만
   그값을 localstorage에 저장하여야 하기때문에*/
}
function paintToDo(newToDoObj){
    const list = document.createElement("li");
    list.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    span.innerText = newToDoObj.text;
    toDoList.appendChild(list);
}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now()
    }//{text:newToDo;에서 ;필요없음
   toDos.push(newToDoObj);
   paintToDo(newToDoObj);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos= localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos =parsedToDos;
    parsedToDos.forEach(paintToDo);
    //paintToDo array
}
//paintToDo("a")-> paintToDo({text:"a", id:12121})로 바꿔줌
//?? forEach function is exicuting this paintToDo function forEach item on the array paredToDos