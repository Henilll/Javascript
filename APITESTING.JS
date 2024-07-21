url='https://catfact.ninja/fact/';

fetch(url)
.then((res)=>{
    console.log(res)
    return res.json()


})
.then((data)=>{
    console.log("data1:",data.fact)
    return fetch(url)
})
.then((res)=>{
    console.log(res)
    return res.json()

})
.then((data)=>{
    console.log("data2:",data.fact)
    
})
.catch((err)=>{
    console.log("ERROR->",err)
})


console.log("I am Happy ")