function FizBuz(count){

    for(var value = 0; value < count; value++ ){

        if(value%3 === 0){
            console.log("FizBuz");
            continue;
        }

        (value%2 === 0) ? console.log("Fiz") : console.log("Buz");
    }
}

function factorial(num){
    
    if(num === 0 ){
        return 1;
    }
   
    num *= factorial(num - 1);

    return num;
}

function page(){

    const sheetsInReamPaper = 500;
    const consumptionPerWeek = 1200;
    const weeksAmount = 8;

    return Math.ceil(consumptionPerWeek / sheetsInReamPaper * weeksAmount);
}

function searchFloorPorch(number){
    const roomsOnFloor = 3;
    const floors = 9;
    const roomNumber = number;
 
    const porch  = Math.ceil(roomNumber/(floors*roomsOnFloor));
    const floor = Math.ceil(( roomNumber - ( (porch - 1) * (floors*roomsOnFloor) ) ) / roomsOnFloor);
 
 
    return [porch, floor];
}

function pyramid(num){

    const mediaNumber = num;
    let octothorpe = "#";
    
  

    for(let i = 0; i < mediaNumber; i++){

        const count = mediaNumber * 2 - 1 * octothorpe.length;
        let triangle = ""
        
        for (let j = 1; j <= count; j++) {
            
            if(j === mediaNumber - i){
                triangle += octothorpe;
                octothorpe += "##"
                continue;
            }
            
            triangle += "-";
        }
        console.log(triangle);
    }




    
}

FizBuz(15); 
/*---------------------------------------------------------*/ // task - 1

console.log(factorial(6)); 
/*---------------------------------------------------------*/ // task - 2

console.log(page()); 
/*---------------------------------------------------------*/ // task - 3

let result = searchFloorPorch(456);
console.log(`porch: ${result[0]}, floor: ${result[1]}`); 
/*---------------------------------------------------------*/ //task - 4

pyramid(7);
pyramid(16);
/*---------------------------------------------------------*/ //task - 5