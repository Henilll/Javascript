h1=document.querySelector('h1')

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`color changed to ${color}!`)
            resolve("Color Was change")
            
        },delay);
    })
   
}

async function demo(){
    await changeColor("red",1000)
    await changeColor("green",1000)
    await changeColor("black",1000)
    await changeColor("yellow",1000)
    await changeColor("blue",1000)
    
}

demo()


