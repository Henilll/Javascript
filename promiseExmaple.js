h1=document.querySelector('h1')

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color Was change")
            
        },delay);
    })
   
}

changeColor("red",1000)
.then(()=>{
    console.log("Red Color Was Changed")
    return changeColor("green",1000)
})
.then(()=>{
    console.log("Green Color Was Changed")
    return changeColor("yellow",1000)

})
.then(()=>{
    console.log("Yellow Color Was Changed")

})
.catch(()=>{
    console.log("Color Was Not Change")
})
