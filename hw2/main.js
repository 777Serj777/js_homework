const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

let result = [];

for (const key in citiesAndCountries) {

    result.push(`${key} - это ${citiesAndCountries[key]}`);
}

console.log(result); // task 1


function getArray(){

    const amount = 9;


    if(amount%3 !== 0) return console.log(amount + " не кратно 3");; 
    
    let arrNum = [];
    let count = 0;

    for(let index = 0; index < amount / 3; index++){
        
        arrNum.push([])

        for(let value = 0; value < 3; value++){
            arrNum[index].push(++count)
        }

    }
   
    console.log(arrNum);
}


getArray();