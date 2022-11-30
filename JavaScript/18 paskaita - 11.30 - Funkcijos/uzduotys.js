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
