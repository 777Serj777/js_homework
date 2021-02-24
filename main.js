const candidateArr = condidateArr;

const searchCandidatesByPhoneNumber = phone => candidateArr.filter(candidate => candidate['phone'].split(/\D/).join('').includes(phone.split(/\D/).join('')));

console.log(searchCandidatesByPhoneNumber('+1 (869) 408-3982'));

console.log(searchCandidatesByPhoneNumber('+1(869) 40')); 

console.log(searchCandidatesByPhoneNumber('43'));

const getCandidateById = id => new Date(candidateArr.find(item => id === item._id).registered.replace(/\s/g, '')).toLocaleDateString();

console.log(getCandidateById('5e216bc9a6059760578aefa4'));

const sortCandidatesArr = sortBy => {

    let reg = /(\$)|(,)*/g;

    let sortList = (sortBy === 'asc' || sortBy === 'desc') && candidateArr.map(item => item).sort((a, b) => a.balance.replace(reg, '') - b.balance.replace(reg, ''));

    return (sortBy === 'asc') ? sortList : (sortBy === 'desc') ? sortList.reverse() : candidateArr;
};

console.log(sortCandidatesArr('asc'));

console.log(sortCandidatesArr('desc'));

console.log(sortCandidatesArr());

const getEyeColorMap = () => {
    let listColorEyes = {};
    candidateArr.forEach(item => listColorEyes[item.eyeColor] = []);
    candidateArr.forEach(item => listColorEyes[item.eyeColor].push(item))
    return listColorEyes;
}

console.log(getEyeColorMap());