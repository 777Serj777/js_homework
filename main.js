const Employee =  function(employee){
    
    for (const key in employee) {
        this[key] = employee[key];
    }

    Object.defineProperty(this, 'fullInfo', {

        get: function(){

            let info = "";
          
            for (const key in this) {

                if(typeof(this[key]) === 'function') {continue}

                (info.length > 0) ? info += ", " + key + " - " + this[key] : info += "" + key + " - " + this[key] 
           
            } 

            return info;
        },

        set: function(obj){

            if(typeof(obj) != "object") return;

            for (const key in obj) {

              if(!this[key]) continue;

                this[key] = obj[key];

            }
        }

        
    });
    // this.getFullName = function(){
    //     return this.name +' '+ this.surname;
    // }

}
Employee.prototype.getFullName = function(){
    return this.name +' '+ this.surname;
}

let employeeObj = new Employee(emplyeeArr[0]);


console.log(employeeObj); //result task 01

console.log(employeeObj.getFullName()); //result task 02

let createEmployesFromArr = (arr) => {

    let instanceArr = [];

    for (const instance of arr) {
        instanceArr.push(new Employee(instance));
    }

    return instanceArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

console.log(emplyeeConstructArr); //result task 03

const getFullNamesFromArr = (arr) => {

   let fullNameArr = []; 

   for (const instance of arr) {
       fullNameArr[fullNameArr.length] = instance.getFullName();
   }

   return fullNameArr;
}

console.log(getFullNamesFromArr(emplyeeConstructArr)); //result task 04

const getMiddleSalary = (arr) => {
    
   let middleSalary = 0; 

   for (const instance of arr) {
        middleSalary += instance.salary != undefined && instance.salary;
   }

   return middleSalary / arr.length;
}

console.log(getMiddleSalary(emplyeeConstructArr)); //result task 05

const choseEployee = (arr) => {

    let winner;
    
    return function getEmployee() {
        
        let newIndex  = ~~(Math.random() * arr.length);
     
        if(!winner) return (winner = arr[newIndex]);
     
        if(winner != arr[newIndex]) return (winner = arr[newIndex]);
        
        return getEmployee();
    }
}

let getRandomEmployee = choseEployee(emplyeeArr);

console.log(getRandomEmployee()); //result task 06

console.log(employeeObj.fullInfo); //result task 07

employeeObj.fullInfo =  {name: 'Вася', salary: 9000, email: 'ex@mail.ua'};

console.log(employeeObj.fullInfo); //result task 07





