function savetoDb(data) {
    return new Promise((resolve, reject) => {
        var InterNetSpeed = Math.floor(Math.random() * 10 + 1)

        if (InterNetSpeed > 4) {
            resolve("Sucess: Your Data Was Saved")
        }
        else {
            reject("Failure: Weak Connection")

        }
    });

}


savetoDb("Apna College").then(()=>{
    console.log("Promise Was Resolved")
})
.catch(()=>{
    console.log("Promise Was Rejected")
})
