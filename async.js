async function hello(){
    throw "404Not Found!"
    return "hello!";

}

hello()
.then((result)=>{
    console.log(result)
    console.log("Promise was Resolved")
})

.catch((err)=>{
    console.log("Promise Was Rejected")
})