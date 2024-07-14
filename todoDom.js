let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    if (inp.value.length >= 1) {
        item.innerText = inp.value;


        let delBtn = document.createElement('button');
        delBtn.innerText = "x";
        delBtn.classList.add("delete");

        item.appendChild(delBtn);
        ul.appendChild(item);
        inp.value = "";
    }
    else {
        alert("Must Add Text")
    }

})


ul.addEventListener('click', function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove()
        console.log("Deleted")
    }
})

// let delBtns=document.querySelectorAll('.delete');
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=delBtn.parentElement;
//         par.remove()
//     });
// }