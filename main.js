const candidateArr = condidateArr;

const arr = ['Vasya', 'Petya', 'Alexey', 'Serhi', 'Boby']

const removeUser = (arr, index) => {
    {
    //    if(index > (arr.length - 1) || index < 0) return; 
    
    //    let tmp = arr[index];
    
    //    for (let i = index; i < arr.length - 1; i++) {
    //        arr[i] = arr[i + 1];
    //    }
    
    //    arr.length -= 1;
    
    //    return [tmp];
    }

  return arr.splice(index, 1); 
}
console.log(arr);
console.log(removeUser(arr, 2));
console.log(arr);  //result task 01

const obj = { name: 'Vasya', age: 1}

const getAllKeys = (obj) => {

    let tmpArr = [];

    for (const key in obj) {
      tmpArr.push(key);
    }

   return tmpArr;
}    

const getAllValues = (obj) => {

    let tmpArr = [];

    for (const key in obj) {
      tmpArr.push(obj[key]);
    }

   return tmpArr;
}

console.log(getAllKeys(obj)); // result task 02

console.log(getAllValues(obj)); //result task 03



const objFirst = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}
const therdthObj = {
    id: 23,
    name: 'Valera'
}

const arrTwo = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

Array.prototype.insertIntoarr =  function(obj, id){

    let index = this.findIndex((elem) => {

        if(elem['id'] === id || elem['_id'] === id) return 1; 
    });

    this.splice(index, 0, obj);
    
}

arrTwo.insertIntoarr(objFirst, 2);
console.log(arrTwo);

arrTwo.insertIntoarr(secondObj, 1);
console.log(arrTwo);

candidateArr.insertIntoarr(therdthObj, '5e216bc9cab1bd9dbae25637');
console.log(candidateArr); //result task 04

class Candidate {

    #id;
    #guid;

    static ListCandidate = [];

    constructor(obj){

        this.#id = obj._id;    
        this.index = Candidate.addListCandidate(this);
        this.#guid = obj.guid;
        this.isActive = obj.isActive;
        this.balance = obj.balance;
        this.picture = obj.picture;
        this.age = obj.age;
        this.eyeColor = obj.eyeColor;
        this.name = obj.name;
        this.eyeColor = obj.eyeColor;
        this.company = obj.company;
        this.email = obj.email;
        this.phone = obj.phone;
        this.address = obj.address;
        this.about = obj.about;
        this.registered = obj.registered;
        this.latitude = obj.latitude;
        this.longitude = obj.longitude;
        this.tags = obj.tags && [...obj.tags];
        this.friends = obj.friends && obj.friends.map(element => { return {...element}});
        this.greeting = obj.greeting;
        this.favoriteFruit = obj.favoriteFruit;

    }

    static addListCandidate(candidate){
        this.ListCandidate.push(candidate);
        return (this.ListCandidate.length - 1);
    }

    get id(){ return this.#id; }

    get guid() { return this.#guid; }

    state(){
        return this.address && this.address.split(',')[2].trim();
    }
}

let candidateFirst = [];

candidateFirst.push(new Candidate(candidateArr[0])) 

console.log(candidateFirst);

console.log(candidateFirst[0].state()); //result task 05


getCompanyNames = () => {

    return candidateArr.map(obj => obj.company).filter((item, index, arr) => {
        return  (index === arr.indexOf(item));  
    })
}

console.log(getCompanyNames().sort()); //result task 06

getUsersByYear = (years) => {

    return candidateArr.filter((obj) => new RegExp(years).test(obj.registered)).map(element => element._id)
}

console.log(getUsersByYear(2017)); //result task 07


getCondidatesByUnreadMsg = (messegesCount) => {
    return candidateArr.filter(obj => {   
       return obj.greeting && obj.greeting.split(' ').includes("" + messegesCount);
    }).map(item => new Candidate(item));
}

console.log(getCondidatesByUnreadMsg(7)); //result task 08

getCondidatesByGender = (gender) => {
    return candidateArr.filter(obj => obj.gender === gender).map(item => new Candidate(item));
}

console.log(getCondidatesByGender('male')); //result task 09


Array.prototype.customReduce = function (callback, accumulator) {
    
    for (let index = 0; index < this.length; index++) {

        if(accumulator === undefined) {
            accumulator = this[index];
            continue;
        }
       
        accumulator = callback(accumulator, this[index], index, this); 
    } 
         
    return accumulator;

}

console.log([1,2,3].customReduce((accum, value)=> accum + value)); // result task 10 - reduce

Array.prototype.customJoin = function (glue) {
    
    let resultJoin = "";

    for (let index = 0; index < this.length; index++) {
        resultJoin += (glue === undefined) ? this[index] : (index === 0) ? this[index] : glue + this[index]; 
    } 
         
   return resultJoin;

}

console.log(['a','b','c'].customJoin('-')); // result task 10 - join