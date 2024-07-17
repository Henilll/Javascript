// function savetoDb(data,sucess,failure){
//     var InterNetSpeed=Math.floor(Math.random()*10+1)

//     if(InterNetSpeed>4){
//         sucess()
//     }
//     else{
//         failure()
//     }
// }


savetoDb("Apna college", () => {
    console.log("Sucess 1")
    savetoDb("Hello", () => {
        console.log("Sucess 2")

        savetoDb("Bye", () => {
            console.log("Sucess 3")
        }, () => {
            console.log("Failure 3")
        });



    }, () => {
        console.log("Failure 2")
    })
}, () => {
    console.log("Failure 1")
})

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