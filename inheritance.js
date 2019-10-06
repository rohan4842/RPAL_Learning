// class Car{
//     setName(name){
//         this.name = name;
//     }
//     startCar(){
//         console.log("car is started for :"+ this.name);
//     }
//     stopCar(){
//         console.log("car is stopped for :"+ this.name);
//     }
// }
// class Toyota extends Car{
//     topSpeed(speed){
//         console.log("Top speed of :"+ this.name+ " " + "is"+ " "+ speed);
//     }
// }
// let myCar = new Toyota();
// myCar.setName("BMW");
// myCar.startCar();
// myCar.stopCar();
// myCar.topSpeed(100);


/*class Human{
    setName(name){
        this.name = name;
    }
    run(){
        console.log("right now"+ this.name + "is running");
    }
    walk(){
        console.log("right now"+ this.name + "is walking");
    }
}

class Human1 extends Human(){
    food(eating){
        console.log("right now"+ this.name + eating);
    }
}
let obj = new Human();
obj.setNam("test");
obj.run();
obj.walk();
obj.food("pizza")

*/
class Library{
    setbookName(name){
        this.name = name;
    }
    catogery(){
        console.log("the catogery of " + this.name  + "is maths");
    }
    price(){
        console.log("the price of " + this.name  + 350);
    }
}

class Bookstall extends Library(){
    books_avaiable(avaiable){
        console.log("books avaiable in books_avaiable  are" + avaiable)
    }
}

let obj = Bookstall();
obj.setbookName("history");
obj.catogery();
obj.price();
obj.books_avaiable("yes");
















