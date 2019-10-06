class Employee{
    setEmpDetails(name,id,phoneNo){
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    getEmpName(name){
        return this.name;
    }
    getEmpid(id){
        return this.id;
    }
    getEmpPhoneNo(phoneNo){
        return this.phoneNo;
    }       
}

let emp1 = new Employee();
emp1.setEmpDetails("rohan",1001,123456789)
console.log(emp1.getEmpName());
console.log(emp1.getEmpid());
console.log(emp1.getEmpPhoneNo());

let emp2 = new Employee();
emp2.setEmpDetails("nesa",1002,123456789)
console.log(emp2.getEmpName());
console.log(emp2.getEmpid());
console.log(emp2.getEmpPhoneNo());

