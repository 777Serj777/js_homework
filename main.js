class Student {
    
    #id;

    constructor(enrolle){

        this.#id = this.getId();
        this.name = enrolle.name;
        this.surname = enrolle.surname;
        this.ratingPoint = enrolle.ratingPoint;
        this.schoolPoint = enrolle.schoolPoint; 
        this.isSelfPayment;

        Object.defineProperty(this, 'id',{
            get: function(){
                return this.#id;
            }
        }) 
    }

    getId() {
        return ~~(Math.random() * 10**8);
    }

} 
Student.listOfStudents = [];

Student.sortArr = function(elementsArr, callback) {
    
    let obj = elementsArr[elementsArr.length-1];


    for (let j = elementsArr.length - 1; j > 0; j--) {
     
        if(callback(elementsArr[j], elementsArr[j - 1]) < 0) continue;
        let tmp = elementsArr[j];
        elementsArr[j] = elementsArr[j - 1];
        elementsArr[j - 1] = tmp;
        elementsArr[j].isSelfPayment = (j >= 5);
    }
    
    obj.isSelfPayment = elementsArr.indexOf(obj) >= 5 || obj.ratingPoint < 800;
    
}

Student.methodSort = (objFirst, objSecond) => {

    if(objFirst.ratingPoint > objSecond.ratingPoint ) return 1;

    if(objFirst.ratingPoint < objSecond.ratingPoint ) return -1;

    if(objFirst.schoolPoint > objSecond.schoolPoint) return 1;

    if(objFirst.schoolPoint < objSecond.schoolPoint) return -1;

    return 0;

}

Student.addStudent = function (enrolle)  {

    if(!(enrolle instanceof Array)){
        this.listOfStudents.push(new Student(enrolle)); 
        return;
    }

    for (const instance of enrolle) {
        this.listOfStudents.push(new Student(instance));  
        this.sortArr(this.listOfStudents, this.methodSort);
    }
  
}

Student.addStudent(enrolleArr);


console.log(Student.listOfStudents); //result task 01

class CustomString{

    reverse([...someString]){

        let resultReverse = "";
    
        someString.forEach(element => {
            resultReverse = element + resultReverse;
        });

        return resultReverse;
    }
    ucFirst([...someString]){

        let result = "";
    
        if(someString[0].charCodeAt() >= 97 && someString[0].charCodeAt() <= 122){

            someString.forEach(element => {
               result += (result.length === 0)? String.fromCharCode(element.charCodeAt() - 32) : element;
            });
        }

        else {
            result = "range of characters a-z!"
        }
        
        return result;
    }
    ucWords(someString){

        let result = "";
        let arrString = someString.split(' ');

        arrString.forEach(element => {
            result += (result.length === 0) ? new CustomString().ucFirst(element) : " " + new CustomString().ucFirst(element);    
        });

        return result;
        
    }
}

const myString = new CustomString();

console.log(myString.reverse("qwerty"));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty')); //result task 02

class Validator{

    checkIsEmail(someString){

        let regexp = /^[\w.]*\@\b[a-z]{4,6}\b.\b[a-z]{2,3}\b/;

        return regexp.test(someString);

    }
    checkIsDomain(someString){
        let regexp = /^[a-zA-Z.]*.\b[a-z]{2,4}$/;

        return regexp.test(someString);
    }
    checkIsDate(someString){

        let reg = [/^\d\d\.[1-9][3-9]\.\d{4}$/, /^[3][2-9]\.[0-1]\d\.\d{4}$/, /^[0][0]\.[0-1]\d\.\d{4}$/, /^\d\d\.[0][0]\.\d{4}$/];

        for (const element of reg) {
            if(element.test(someString)) return false; 
        }
              
        let regexp = /^[0-3]\d\.[0-1]\d\.\d{4}$/;

        return regexp.test(someString);
    }
    checkIsPhone(someString){
       return /^\+380\d{9}$/.test(someString) || /^\+38[(]0\d{2}[)]\d{7}$/.test(someString) || /^\+38[(]0\d{2}[)]\d{3}-\d{2}-\d{2}$/.test(someString);
    }
}

var validator = new Validator();

console.log(validator.checkIsDate('01.11.2021'));
console.log(validator.checkIsDomain('www.google.com'));
console.log(validator.checkIsPhone('+38(012)345-67-89'));
console.log(validator.checkIsEmail('example.ua@gmail.com')); //result task 03




