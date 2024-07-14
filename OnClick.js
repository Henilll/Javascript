var btn=document.querySelectorAll('button')

for(btns of btn){
    btns.onclick=click;
    btns.onmouseenter=function(){
        console.log("Someone try to hit button")
    }

}

function click(){
    alert("Button Was Hit")
}

