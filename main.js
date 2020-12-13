const Employee =  function(employee){
    
    for (const key in employee) {
        this[key] = employee[key];
    }

    // this.getFullName = function(){
    //     return this.name +' '+ this.surname;
    // }

}
Employee.prototype.getFullName = function(){
    return this.name +' '+ this.surname;
}

let employeeObj = new Employee(emplyeeArr[0]);


console.log(employeeObj); // task 01

console.log(employeeObj.getFullName()); // task 02

let createEmployesFromArr = (arr) => {

    let instanceArr = [];

    for (const instance of arr) {
        instanceArr.push(new Employee(instance));
    }

    return instanceArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

console.log(emplyeeConstructArr); //task 03

const getFullNamesFromArr = (arr) => {

   let fullNameArr = []; 

   for (const instance of arr) {
       fullNameArr[fullNameArr.length] = instance.getFullName();
   }

   return fullNameArr;
}

console.log(getFullNamesFromArr(emplyeeConstructArr)); //task 04

const getMiddleSalary = (arr) => {
    
   let middleSalary = 0; 

   for (const instance of arr) {
        middleSalary += instance.salary != undefined && instance.salary;
   }

   return middleSalary / arr.length;
}

console.log(getMiddleSalary(emplyeeConstructArr)); //task 05

const getRandomEmployee = (arr) => {

    let index = ~~(Math.random() * arr.length);
    
    return arr[index];
}
    
console.log(getRandomEmployee(emplyeeConstructArr)); // task 06
