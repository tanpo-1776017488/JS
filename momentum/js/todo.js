const toDoForm=document.getElementById('todo-form');
const toDoList=document.getElementById('todo-list');
const toDoInput=toDoForm.querySelector('input');
let toDos=[];
const TODOS_KEY='todos';

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li=event.target.parentElement;
    toDos=toDos.filter((item)=>{
        return item.id!==Number(li.id);
    })
    saveToDos();
    li.remove();
}

function paintToDo(todo){
    const li=document.createElement('li');
    li.id=todo.id;
    const span=document.createElement('span');
    const button=document.createElement('button');
    button.innerText='❌';
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText=todo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const todoObj={text:newTodo,id:Date.now()};
    toDos.push(todoObj);
    paintToDo(todoObj);
    saveToDos();

}
toDoForm.addEventListener('submit',handleToDoSubmit);

function sayHello(item){
    console.log('hello');
}

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDos=JSON.parse(savedToDos);
    toDOs=parsedToDos;
    parsedToDos.forEach(paintToDo);
}