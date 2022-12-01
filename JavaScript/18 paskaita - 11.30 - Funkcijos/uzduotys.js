// 1
function sudetis(nr1, nr2){
  if(typeof(nr1)==="number" && typeof(nr2)==="number"){
    let atsakymas = nr1 + nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function atimtis(nr1, nr2){
  if(typeof(nr1)==="number" && typeof(nr2)==="number"){
    let atsakymas = nr1 - nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function dalyba(nr1, nr2){
  if(typeof(nr1)==="number" && typeof(nr2)==="number"){
    let atsakymas = nr1 / nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}
function daugyba(nr1, nr2){
  if(typeof(nr1)==="number" && typeof(nr2)==="number"){
    let atsakymas = nr1 * nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
}

// 2
function firstToLast(array){
  for(let element of array){
    console.log(element);
  }
}
// 3
function lastToFirst(array){
  for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  // array.reverse();
  // for(let element of array){
  //   console.log(element);
  // }
}

// 4
let zodziuMasyvas = ['labas', 'ate', 'zodis', 'kaliause'];
// function zodziuRikiavimas (a, b) { return a.localeCompare(b); }
// function rikiuojameZodiuMasyva(masyvas){
//   return masyvas.sort(zodziuRikiavimas);
// }
function rikiuojameZodiuMasyva(masyvas){
  return masyvas.sort((a,b) => a.localeCompare(b));
}

// 5
let task2 = [1,5,6,7,8,1,4,6,1,6,-4,654,-1,46541,-441,1];
function rikiuojameSkaiciusMasyva(arr1){
  return arr1.sort(function(a,b){return a-b});
}

// 6
function nuoIki(nr1, nr2){
  let arrayToReturn = [];
  for(let i = nr1; i <= nr2; i++){
    arrayToReturn.push(i);
  }
  return arrayToReturn;
}

// 7
function nuoIkiZingsniu(step, nr1, nr2){
  let arrayToReturn = [];
  for(let i = nr1; i <= nr2; i+=step){ // i = i + step
    arrayToReturn.push(i);
  }
  return arrayToReturn;
}