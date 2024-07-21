// let btn=document.querySelector("#b1")
// let p=document.querySelector("#p1")

let btn1 = document.querySelector("#b2")
let p1 = document.querySelector("#p2")



// url="https://catfact.ninja/fact/";

let url2 = "https://dog.ceo/api/breeds/image/random"

// btn.addEventListener("click",async()=>{
//     console.log("button Was Hit")

//     let facts=await getFacts()
//     console.log(facts)
//     p.innerText=facts


// })

// async function getFacts(){
//     try{
//     let res=await axios.get(url);
//     return res.data.fact;
//     }
//     catch(e){
//         console.log("Error")
//         return "No fact found"

//     }
// }

btn1.addEventListener("click", async () => {
    let l = await getImage()
    p1.setAttribute("src", l)


})

async function getImage() {
    try {
        let res = await axios.get(url1);
        return res.data.message;
    }
    catch (e) {
        console.log("Error")
        return "/";

    }
}

