Write a JavaScript program to print first N odd numbers 
divisible by 7.
let num = parseInt(prompt("Enter the count of numbers you want : 
"));
let counter = 0;
for (let i = 1; counter < num; i++) {
if (i % 2 == 1 && i % 7 == 0) {
console.log(i);
counter++;
}
}