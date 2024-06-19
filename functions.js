function fun1(){
    document.write("henil<br>")
}
fun1()


function sum(a,b,c){
    document.write((a+b+c)/3+"<br>")
}
sum(1,2,5)


function print_poem(){
    document.write("twinkle twinkle littel star<br> ")
}
print_poem()


function adds(a,b){

    return a+b

}

ab=adds(5,6)
document.write(ab+"<br>")


function sumof(n){
    let sum=0
    for(let i=0;i<=n;i++){
        sum+=i
    }
    document.write(sum)

}

sumof(8)


let arr=['hekek','kdkdk','kdhde']

function con(arr){
    let str=""
    for(let i=0;i<arr.length;i++){
        str+=str[i]
    }
    document.write(str)

}

con(arr)