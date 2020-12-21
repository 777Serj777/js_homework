let counter = ((num = 0) => (number) => num += number)();

console.log(counter(3));
console.log(counter(5));
console.log(counter(228)); //result task 01

let getUpdatedArr = ((arrElement = []) => (element) => (element === undefined) ? (arrElement = []) : (arrElement.push(element)) && arrElement)();

getUpdatedArr(1);
getUpdatedArr(5);
console.log(getUpdatedArr({name: "Vasya"}));
console.log(getUpdatedArr()); 
console.log(getUpdatedArr(4)); //result task 02


let getTime = (callTime => () => {

    let time = new Date().getTime();    
    let difference = callTime;

    return   (callTime === undefined) ? (callTime = time) && 'Enabled' : (callTime = time) && ~~((callTime - difference) / 1000);

})()

console.log(getTime());

setTimeout( () => {
    console.log(getTime());
}, 2000);  //result task 03



window.onload = function(){

    const time = 120; 

    document.querySelector('.minute').innerHTML = (((time / 60 ) < 10)  ? '0'+ ~~(time / 60) : ~~(time / 60));
    document.querySelector('.second').innerHTML = ( (time % 60 === 0) || (time % 60 < 10) ? '0' + time % 60 : time % 60 );
    
    const timer = time => {

        document.querySelector('#start').onclick = null;

        setTimeout(function run() {
    
            if(time < 0 || time === undefined) {
         
                document.querySelector('#start').onclick = start;
                console.log("Time End");
                return;
            }
        
            document.querySelector('.minute').innerHTML = (((time / 60 ) < 10)  ? '0'+ ~~(time / 60) : ~~(time / 60));
            document.querySelector('.second').innerHTML = ( (time % 60 === 0) || (time % 60 < 10) ? '0' + time % 60 : time % 60 );

            time--;
    
            setTimeout(run, 1000); 
    
        });
          
    }
    
    let start = () => timer(time);
    
    document.querySelector('#start').onclick =  start; //result task 04
    
};
  