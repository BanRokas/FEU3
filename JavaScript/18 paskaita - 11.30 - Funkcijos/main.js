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

//      Masyvų metodai
/*
  pop()       - išima iš masyvo galo, modifikuoja
  shift()     - išima iš masyvo pradžios, modifikuoja
  push()      - prideda prie masyvo galo, modifikuoja
  unshift()   - prideda prie masyvo pradžios, modifikuoja

  reverse()   - apsuka masyvą, modifikuoja masyvą
  slice(nr1, nr2) - paima nuo nr1 (imtinai) iki nr2 (neimtinai) masyvo elementus, NEmodifikuoja masyvo
  splice(nr1, nr2, nr3, nr4, nr5...) - nuo nr1 trina nr2 kiekį elementų ir nr1 vietoje įterpia nr3, nr4, nr5... elementus, modifikuoja
  arr1.concat(arr2, arr3, arr4...) - prie array1 masyvo prijungia arr2, arr3, arr4... masyvus, NEmodifikuoja 
  sort()      - išrikiuoja masyvą abecelės tvarka.
    skaičių problema spendžiama su function(a,b){return a-b} įkelta į sort skliaustelius
    žodžių problema sprendžiama su function(a,b){return a.localeCompare(b)} įkelta į sort skliaustelius
*/

let masyvas = [1,2,3,4,5,6,7,8,9];
let gabaliukas = masyvas.slice(3, 6);
let iskirptas = masyvas[3];
masyvas.splice(3, 1, 9, 8, 7);
let sujungtas = masyvas.concat(['lesalas', 'labas', 'ąs', 'naujas', 'ūsas', "žiūrovas"], [false, 0, "undefined", "null", 20, 90, 1110, 654]);
// sujungtas.sort(function(a,b){return a-b});
let zodziuMasyvas = ['lesalas', 'labas', 'ąs', 'naujas', 'ūsas', "žiūrovas"];
zodziuMasyvas.sort();