url="https://catfact.ninja/fact/";

async function getFacts(){
    try{
    let res=await fetch(url)
    let data=await(res.json())
    console.log(data)
    }
    catch(e){
        console.log("Error",e)

    }
}

getFacts()