let myfunc = function(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color 
};

myfunc.prototype.getName= function(){
    return this.name;
 };
myfunc.prototype.getAge = function(){
    return this.age;  
};

myfunc.prototype.getColor = function(){
    return this.color;

};

let obj = new myfunc("john",20,"black");
let obj1 = new myfunc("peter",30,"white");
let obj2 = new myfunc("nesa", 40,"fair")
console.log(obj.getName());
console.log(obj1.getAge());
console.log(obj2.getColor());


