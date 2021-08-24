const clock=document.querySelector('#clock');

function getclock(){
    const date=new Date();
    const hours=String(date.getHours()).padStart(2,'0');
    const min=String(date.getMinutes()).padStart(2,'0');
    const sec=String(date.getSeconds()).padStart(2,'0');
    clock.innerText=`${hours}:${min}:${sec}`;
}
getclock();
setInterval(getclock,1000);