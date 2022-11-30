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