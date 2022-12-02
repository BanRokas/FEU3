// 1
function sudetis(nr1, nr2) {
  if (typeof (nr1) === "number" && typeof (nr2) === "number") {
    let atsakymas = nr1 + nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function atimtis(nr1, nr2) {
  let atsakymas = nr1 - nr2;
  return atsakymas;
}
function dalyba(nr1, nr2) {
  return nr1 / nr2;
}
function daugyba(nr1, nr2) {
  if (typeof (nr1) === "number" && typeof (nr2) === "number") {
    let atsakymas = nr1 * nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function laipsnioKelimas(nr1, nr2) {
  // return nr1 ** nr2;
  return Math.pow(nr1, nr2);
}
function sakniesTraukimas(nr1, nr2) {
  return nr1 ** (1 / nr2);
}
// console.log("iš 25 traukiame 2 laipsnio šaknį:",sakniesTraukimas(25,2));
// console.log("iš 625 traukiame 4 laipsnio šaknį:",sakniesTraukimas(625,4));
// console.log("iš 625 traukiame 3 laipsnio šaknį:",sakniesTraukimas(625,3));
function liekanosRadimas(nr1, nr2) {
  return nr1 % nr2;
}

// 2
function firstToLast(array) {
  // for(let element of array){
  //   console.log(element);
  // }
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
// 3
function lastToFirst(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  // array.reverse();
  // for(let element of array){
  //   console.log(element);
  // }
}

// 4
let zodziuMasyvas = ['labas', 'ate', 'zodis', 'kaliause', 'ąžuolas', 'haha'];
// function zodziuRikiavimas (a, b) { return a.localeCompare(b); }
// function rikiuojameZodiuMasyva(masyvas){
//   return masyvas.sort(zodziuRikiavimas);
// }
function rikiuojameZodiuMasyva(masyvas) {
  return masyvas.sort(function (a, b) { return a.localeCompare(b) });
}

// 5
let task2 = [1, 5, 6, 7, 8, 1, 4, 6, 1, 6, -4, 654, -1, 46541, -441, 1];
function rikiuojameSkaiciusMasyva(arr1) {
  return arr1.sort(function (a, b) { return a - b });
}

// 6
function nuoIki(nr1, nr2) {
  let arrayToReturn = [];
  for (let i = nr1; i <= nr2; i++) {
    arrayToReturn.push(i);
    // console.log(i);
  }
  return arrayToReturn;
}

// 7
function nuoIkiZingsniu(step, nr1, nr2) {
  let arrayToReturn = [];
  for (let i = nr1; i <= nr2; i += step) { // i = i + step
    arrayToReturn.push(i);
    // console.log(i);
  }
  return arrayToReturn;
}

// 8
function zodziuIlgiai(zodis1, zodis2) {
  // let pirmoZodzioIlgis = zodis1.length;
  // let antroZodzioIlgis = zodis2.length;
  // let atsakymas = pirmoZodzioIlgis + antroZodzioIlgis;
  // return atsakymas;
  return (zodis1 + zodis2).length;
}

// 9
function abecelesRaide(kelinta) {
  const alphabet = ['A', 'Ą', 'B', 'C', 'Č', 'D', 'E', 'Ę', 'Ė', 'F', 'G', 'H', 'I', 'Į', 'Y', 'J', ' K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'Ų', 'Ū', 'V', 'Z', 'Ž'];
  return alphabet[kelinta - 1];
}

// 11
function randomNumber_1_To_10(){
  return Math.ceil(Math.random()*10);
}
function squareNumber(){
  return randomNumber_1_To_10()**2;
  // return Math.pow(randomNumber_1_To_10(), 2);
}

let masyvas1 = [1,2,3,4,5,6,7];
let masyvas2 = ['a','b','c'];

function fancyMasyvuJungimas(arr1, arr2){
  while(arr2.length){
    let koksSiuoMetuIlgis = arr2.length;
    let kaIdeti = arr2.shift(); // tuo pačiu ištriname arr2 pirmąjį elementą
    arr1.splice(koksSiuoMetuIlgis, 0, kaIdeti);
  }
  return arr1;
}

console.log(fancyMasyvuJungimas(masyvas1, masyvas2));