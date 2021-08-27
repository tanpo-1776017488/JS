const canvas=document.getElementById('jsCanvas');
const ctx=canvas.getContext('2d');
const colorArray=document.getElementsByClassName('controls_color');
const fill=document.querySelector('#jsMode');
const change=document.querySelector('.controls_range input');
const curThickness=document.querySelector('.thick p');
const curColor=document.querySelector('.curColor div');
canvas.width=700;
canvas.height=700;
ctx.strokeStyle='#2c2c2c';
ctx.lineWidth=2.5;

let painting=false;
function stopPainting(){
    painting=false;
}
function onMouseEnter(event){
    const x=event.offsetX;
    const y=event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    
}
function startPainting(){
    painting=true;
}
function onMouseDown(event){
    painting=true;
}
function changeColor(event){
    ctx.strokeStyle=event.target.style.backgroundColor;
    curColor.style.background=event.target.style.backgroundColor;
}
if (canvas){
    //event listener setting
    canvas.addEventListener('mousemove',onMouseEnter);
    canvas.addEventListener('mousedown',startPainting);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);

    for(let i=0;i<colorArray.length;i++){
        colorArray[i].addEventListener('click',changeColor);
    }

    fill.addEventListener('click',(event)=>{ 

        canvas.style.background=ctx.strokeStyle;
        
    });
    
    change.addEventListener('input',(event)=>{
        const curThick=event.target.value;
        ctx.lineWidth=curThick;
        curThickness.innerText=curThick;
    })
}
else{
    alert('please try again!!!');
}