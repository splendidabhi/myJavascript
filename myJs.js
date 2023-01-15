function myFunction(){
    document.getElementById("sub_header").innerHTML="Good ,Javascript is awesome .";
}
let a,b,c;
a=5;
b=10;
c=15;
console.log(a+b+c);

const myArray = ['Abhinav','Arun','Satyam','Lakshay'];
console.log(myArray);
myArray.push('lucky'); //add element to last
console.log(myArray);
myArray.unshift('Pankaj') //add element to beginning
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.shift();
console.log(myArray);
console.log(myArray.indexOf('Abhinav')) 