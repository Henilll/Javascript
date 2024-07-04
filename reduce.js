let arr=[1,4,2,5,7,8,,4,9]

// let max=-1
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
// }
// document.write(max)

let max=arr.reduce((max,el)=>{
    if(max<el){
        return el

    }
    else{
        return max;
    }
})

document.write(max)