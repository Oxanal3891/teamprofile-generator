// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, office_number){
        super(name,id, email);
        this.office_number = office_number;
        this.role = "Manager";
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.office_number;
    }
}

module.exports = Manager;