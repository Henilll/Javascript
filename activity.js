// let btn=document.querySelector('button')

// btn.addEventListener('click',function(){
//     let h3=document.querySelector('h1')
   
    
//     let color=getRandomColor()
//     h3.innerText=color

//     let div=document.querySelector('div')
//     //div.style.backgroundColor=r;
//     div.style.backgroundColor=r;
//     console.log('genrate Random Color')
// })

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255)
//     let green=Math.floor(Math.random()*255)
//     let blue=Math.floor(Math.random()*255)
    
//     let color=`(${red},${green},${blue})`;
//     return color

// }


let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let h3 = document.querySelector('h1');
    let div = document.querySelector('div');

    let color = getRandomColor();
    h3.innerText = color;

    div.style.backgroundColor = color;
    
    console.log('Generate Random Color');
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
