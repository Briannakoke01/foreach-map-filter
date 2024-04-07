
function doubleValues(arr){
    let doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArray.push(arr[i] * 2);
    }
    return doubledArray;
}


function onlyEvenValues(arr){
    let evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
    }
    return evenArray;
}


function showFirstAndLast(arr) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) { 
        let currentString = arr[i];
        let resultString = currentString[0] + currentString[currentString.length - 1];
        resultArray.push(resultString);
    }
    return resultArray;
}



function addKeyAndValue(arr,key,value){
    for (let i = 0; i < arr.length; i++) {
        arr[i][key] = value;
    }
    return arr;
}


function vowelCount(str){
    let vowelCounts = {};
    let lowerStr = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of lowerStr) {
        if (vowels.includes(char)) {
            if (vowelCounts[char]) {
                vowelCounts[char]++;
            } else {
                vowelCounts[char] = 1;
            }
        }
    }
   return vowelCounts;
}



function doubleValuesWithMap(arr) {
    return arr.map(num => num * 2);
}



function valTimesIndex(arr){
    return arr.map((value, index) => value * index);
}


function extractKey(arr, key){
    return arr.map(obj => obj[key]);
    
}



function extractFullName(arr){
    return arr.map(obj => `${obj.first} ${obj.last}`);
}


function filterByValue(arr, key) {
    return arr.filer(obj => obj.hasOwnProperty(key) && obj[key]);
}


function find(arr, searchValue) {
    return arr.find(element => element === value);
}



function findInObj(arr, key, searchValue) {
    return arr.find(obj => obj.hasOwnProperty(key) && obj[key] === searchValue);
}


function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => !vowels.includes(char)).join('');
}


function doubleOddNumbers(arr) {
    return arr.map(num => num * 2).filter(num => num % 2 !==0);
}
