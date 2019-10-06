/*function Employee(name,age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
    let bonus = 1000; //this.bonus = 1000; now the scope of the bonus will be within funct, private variable,
    

    //finalSalary = salary + bonus
   let calculateFinalSalary = function(){ // this.calculateFinalSalary = function(){  funct avaiable within func
        finalSalary = salary + bonus; // when calling funct within remove this
        console.log("final salary is:" + finalSalary);
    }

    this.getEmpDetails = function(){
        console.log("Name:"+  this.name + " "+"Age:"+  this.age);
        calculateFinalSalary(); // call function within not outside
    }

}

let emp = new  Employee("Nesa",20,1000);
emp.getEmpDetails();
//emp.bonus = 5000; //any one can change bonus value to avoid that we do data abstraction
//emp.calculateFinalSalary();

*/


function Employee(name,age,salary){
    this.name = name;
    this.age  =age ;
    this.salary = salary;
    let bonus = 1500;
    

    let calculateFinalSalary = function(){
        finalsalary = salary + bonus;
        console.log("Final salary is:" + finalsalary)
    }
   

    this.getEmpDetails = function(){
        console.log("Name:"+ this.name + " " +"Age:"+ this.age);
        calculateFinalSalary();

    }
}

let emp = new Employee("Nesa",10,1000);
emp.getEmpDetails();

