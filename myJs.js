function myFunction(){
    document.getElementById("sub_header").innerHTML=Date();
}
function displayDate() {
    document.getElementById("footer_content").innerHTML = Date();
}
function calctip(bill){
    if (bill>50 && bill<500){
        return bill*0.15;
    }
    else
    return bill*.20;
}
const bills= [125,555,44];

const tips= [calctip(bills[0]),calctip(bills[1]),calctip(bills[2])];

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

console.log(tips);

//objects
const jonas ={
    firstName:'abhinav',
    lastName:'yadav',
    age:20,
    job:'softare Engineer',
    friends:['arun','yadav','aakash']

};


console.log(jonas['firstName']);
console.log(jonas.lastName);

const interestedin = prompt('what are you interested in firstname,lastname,age,job,friends');

console.log(jonas[interestedin]);

jonas.location = 'noida';
jonas['twitter'] = 'splendidabhi';
console.log(jonas);
if (jonas[interestedin]) {
    alert(jonas[interestedin])
}else{
    alert('Choose ri ght option')
}