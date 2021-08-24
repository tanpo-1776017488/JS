const loginForm=document.querySelector('#login-form');
const loginName=document.querySelector('#login-form input');
const greeting=document.querySelector('#greeting');
const todoForm=document.querySelector('#todo-form');
const todoList=document.querySelector('#todo-list');

const HIDDEN_CLASSNAME='hidden';
const USERNAME_KEY='username';
function handleSubmit(event){
    event.preventDefault();
    const username=loginName.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}
function paintGreetings(us){
    greeting.innerText=`Hello ${us}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername=localStorage.getItem(USERNAME_KEY);
if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',handleSubmit);
}
else{
    paintGreetings(savedUsername);
}
