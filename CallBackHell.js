h1=document.querySelector('h1')

function changeColor(color,delay,Next){
    setTimeout(()=>{
        h1.style.color=color;
        if(Next) Next();
    },delay);
}

changeColor('red',1000 ,()=>{
    changeColor("green",1000,()=>{
        changeColor("yellow",1000)
    })
})