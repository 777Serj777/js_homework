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


getArray(); //task 2

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],


getNameOfDay(lang, day){
   
        if(lang === 'ru') console.log(this[lang][day-1]); 
        if(lang === 'en') console.log(this[lang][day-1]); 
     
    }
}

namesOfDays.getNameOfDay('ru', 1); //task 3