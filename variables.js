/* this is 
 multi line
 Comment*/ 



// control+/ ---> for multiline comments

//  console.log("hello world")


let x = 10;
let a= 20, b = '20';

x += 10  // x = x+10
console.log(x,a,b);
console.log(a == b);
console.log(a === b); // check the type 

let result = x>a ? x:a; //ternary operator, takes 3 arguments, if-then-else
console.log(result);

//  let firstName = "rohan"  --- camelcasing
let A = true;
let B = false;
console.log(A && B);

console.log((10>6) && (3>10));
console.log((10>6) || (3>10));
console.log(!A);


// typeof return data type
let firstName = "rohan";
console.log(typeof firstName);
console.log(typeof 123);
console.log(typeof 101.10);
console.log(typeof true);


console.log(typeof "rohan");
console.log(typeof 123);
console.log(typeof null);
console.log(typeof [1,2,3]);
console.log(typeof function() {});
console.log(typeof {name: 'rohan' , lastName: 'k'});
console.log(typeof NaN);
console.log(typeof myclass);
console.log(typeof new Date());

// instanceof return object of that class

let lastName = new String("k");
console.log(lastName instanceof String);

let num1 = new Number(123);
console.log(num1 instanceof Number);


let p = 70;
let q = 70;
if (p>q){
  console.log("p is greater");
}
else if(p==q) {
  console.log("equal");
}
else{
   console.log("q is greater"); 
}


let operation = 1;
r = 10
s = 5

switch(operation){
    case 1:
        console.log("perform addition:"+ (r+s))
        break;
    case 2:
        console.log("perform subtraction:"+ (r-s)) 
        break;
    case 3:
         console.log("perform division:"+ (r/s))   
         break;
    case 4:
        console.log("perform multiplication:"+ (r*s))  
        break;
    default:
        console.log("invalid operation")  
        break;         
}


let i;
for(i=1; i<=5;i++){
    console.log("value is :" + i);
}

fruits = ["banana","apple","mango","kiwi"];
let fruit;
for (fruit in fruits){
    console.log(fruit) 
    console.log(fruits[fruit])
}
console.log("********************")

for(fruit of fruits){
    console.log(fruit)
}

// let counter = 1
// while(counter <=5){
//     console.log("counter value: "+ counter);
//     counter = counter+1;
// }

counter = 11  // do-while will run atleast once even if the condition is failed
do{
    console.log("counter value: "+ counter);
    counter = counter+1;

}while(counter <=10){

}

let cars = new Array ("toyota","bmw","tata");
console.log(cars);
cars[1] = "honda";
cars.push("swift")
console.log(cars.length);
console.log(cars);


fruits = ["banana","apple","mango","kiwi"];
fruits.push("lemon") // adds element at the end
console.log(fruits);
fruits.shift();   // removes firts element
console.log(fruits);
delete fruits[2];    //[ 'apple', 'mango', <1 empty item>, 'lemon' ]
console.log(fruits);
fruits[1] = "orange";
console.log(fruits);
fruits.splice(1,2); // [ 'apple', 'lemon' ]--- removed 1, 2 index items
console.log(fruits);

let citrusFruits = fruits.slice(1)
console.log(fruits);
console.log(citrusFruits);


let evenNumber = [2,4,6];
let oddNumber = [1,3,5];
let primeNumber = [2,3,5];

let numbers = evenNumber.concat(oddNumber,primeNumber);
console.log(numbers);

// function funcName(param1, param2){
//      statement

// }
// call method_name


function add(a,b){
    console.log(a+b);
}
add(2,3)
add(6,3)


function sub(a,b){
    return (a-b)
}
let result1 = sub(10,5)
console.log(result1);

console.log("**************************");

class Employee{    //good pratice to start class name with capital letter
    constructor(name,id){
        this.name = name
        this.id = id    
    //  setdetails(name, id){
    //      this.name = name
    //      this.id = id

    }
}

let emp1 = new Employee("rohan",1001);
let emp2 = new Employee("rahul",1002);
//emp1.setdetails ("rohan",1001)
console.log(emp1.name)
console.log(emp1.id)

console.log(emp2.name)
console.log(emp2.id)

console.log("**************************");

class Student{
    constructor(id,name1,address){
        this.id = id
        this.name1 = name1
        this.address = address

    }
    // Student_details(id,name1,address){ 
    //     this.id = id
    //     this.name1 = name1
    //     this.address = address
}


let stud = new Student(1003,"ABHI","ponda");
let stud1 = new Student(1004,"SUSHIL","borim");

// stud.Student_details(1001,"Nesa","BTM")
console.log(stud.id);
console.log(stud.name1);
console.log(stud.address);

console.log(stud1.id);
console.log(stud1.name1);
console.log(stud1.address);

console.log("**************************");

class Promolta{
    constructor(dev,qa,ba){
         this.dev = dev
         this.qa = qa
         this.ba = ba
    }
    // designation(dev,qa,ba){
    //     this.dev = dev
    //     this.qa = qa
    //     this.ba = ba

    }


let pro = new Promolta("bhanu","rohan","shonima");
let pro1 = new Promolta("chaita","rohan","muiz");

//pro.designation("bhanu","rohan","shonima");
console.log(pro.dev);
console.log(pro.qa);
console.log(pro.ba);

console.log(pro1.dev);
console.log(pro1.qa);
console.log(pro1.ba);



class Kaplan{

    constructor(office1,office2,office3){
        this.office1 = office1;
        this.office2 = office2;
        this.office3 = office3;


    }
    // location(office1,office2,office3){
    //     this.office1 = office1;
    //     this.office2 = office2;
    //     this.office3 = office3;
    }


let director = new Kaplan("WTC","MG-ROAD","RACE-COURSE");
let director1 = new Kaplan("BTM","KORMANGALA","WATER-TANK");

//director.location("WTC","MG-ROAD","RACE-COURSE")
console.log(director.office1);
console.log(director.office2);
console.log(director.office3);

console.log(director1.office1);
console.log(director1.office2);
console.log(director1.office3);
