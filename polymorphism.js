//polymorphsim = many forms 
// method overriding will take child method as first preferance
// super.function_name() will call parent method

class Animal{
    constructor(name){
        this.name = name;
    }
    eats(){
        console.log(this.name+ " " + "eats food");
    }
}
class Aligator extends Animal{
    eats(){    // method overriding
        super.eats();
        console.log(this.name+ " " +"eats fishes");
    }
}

let obj = new Aligator("nesa");
obj.eats();
