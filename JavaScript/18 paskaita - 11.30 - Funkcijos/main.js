//          Ciklai
/*
    do while - bent vieną sykį būtų paleistas ciklas
    for in   - suka ciklą per objektą
    for of   - suka ciklą per masyvą

    array iteration methods
*/
//  do while
{
  console.groupCollapsed('doWhile');
  let i = 1;
  // while(i>10){
  //   console.log('veiksmai');
  //   i++;
  // }
  do {
    console.log('veiksmai');
    i++;
  } while(i>10);
  console.groupEnd();
}

// for in
{
  console.groupCollapsed("forIn");
  var objektas = {a:1, b:2, c:3, d:4, e:5};
  for(let raktas in objektas){
    console.log(raktas + " : " + objektas[raktas]);
    console.log(raktas, ":", objektas[raktas]);
  }
  console.log("zodis");
  console.log("1");
  console.log("true");
  console.log(1);
  console.log(true);
  console.groupEnd();
}

// for of
{
  console.groupCollapsed("forOf");
  let masyvas = [5,8,9,4,1,false,false,true,'hallo',46,1,5,4];
  // for(let i = 0; i < masyvas.length; i++){
  //   typeof(masyvas[i]) === "number" ? console.log(element) : null;
  // }
  for(let element of masyvas){
    typeof(element) === "number" ? console.log(element) : null;
    // if(typeof(element) === "number"){
    //   console.log(element);
    // }
  }
  console.groupEnd();
}

// forEach
{
  console.groupCollapsed("forEach");
  let masyvas = [5,8,9,4,1,false,false,true,'hallo',46,1,5,4];
  masyvas.forEach(element => typeof(element) === "number" ? console.log(element) : null);
  console.groupEnd();
}

//          Funkcijos
/*
  Funkcija - veiksmų seka, kuri yra vykdoma tik tuomet, kai į tą funkcija yra kreipiamasi.
  Parametrai/Argumentai - duomenys, perduodami funkcijai jos iškvietimo metu, su kuriais funkcijos viduje bus atliekami kažkokie veiksmai.
  Return - funkcija gali kažką grąžinti. Funkcijos veiksmai vyksta iki tol kol pasiekiamas return'as.
*/
function hello(vardas){
  console.log("Hello " + vardas);
}

function sudetis(nr1, nr2){
  console.log("why not");
  if(typeof(nr1)==="number" && typeof(nr2)==="number"){
    let atsakymas = nr1 + nr2;
    return atsakymas;
  } else {
    return "Error 404";
  }
  console.log("not happening");
}

function kiekStringuMasyve(array){
  let kiek = 0;
  for(let i = 0; i < array.length; i++){
    if(typeof(array[i]) === "string"){
      kiek++;
    }
  }
  return kiek;
}