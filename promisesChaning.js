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


// 
savetoDb("HEnil")
    .then(() => {
        console.log("Data1 Saved")
        return savetoDb("Hello World")

    })
    .then(()=>{
        console.log("Data2 Saved")
        return savetoDb("HEnil")

    })
    .then(()=>{
        console.log("Data3 Saved")

    })
    .catch(()=>{
        console.log("Promise Was Rejectd")
    })
