//        lambda/arrow function
// lambda syntax
/*
  parametras => veiksmas

  (parametras1, parametras2) => veiksmas
  
  (parametras1, parametras2) => { return veiksmas }
  
  (parametras1, parametras2) => {
    veiksmas1
    veiksmas2
    return ats;
  }

  let pavadinimas = (parametras1, parametras2) => { return veiksmas }
*/
// Lambda yra standartizuotas funkcijų užrašymo būdas nuo ECMA6 versijos (2015 metų). Jis yra trumpesnis, patogesnis, greitesnis.

// senuoju
function daugyba0(par1, par2){
  return par1*par2;
}
// naujuoju (lambda/arrow)
let daugyba1 = (par1, par2) => par1*par2;

function daugyba0(){
  return "labas";
}

let uzd1 = () => "labas";
// console.log(uzd1());
// console.log((() => "Labas!")());

let uzd2 = (par1, par2) => par1+par2;

let uzd3 = (tekstas) => tekstas.length;

let uzd4 = (tekstas) => tekstas.charAt(0);


let uzd8 = (masyvas) => {
  for(let i = 0; i < masyvas.length; i+=2){
    console.log(masyvas[i]);
  }
}

let uzduotis9 = (masyvas1, n) => {
  for(let element of masyvas1){
    console.log(element);
  }
  // masyvas1.forEach((element, i) =>  i % n == 0 && console.log(element));
};



//            Masyvų metodai

// populiarus rikiavimo metodas - bubble sort
console.groupCollapsed('masyvų metodai');
let skMas = [5,6,7,1,8,16,51,61,91,9,61,61,321,32,169];
let zodzMas = ['labas','ate','ąžuolas','ąsotis', 'žodis', 'kanarėlė'];

function skaiciuSortas(a, b){
  return a - b;
}
skMas.sort(skaiciuSortas);

skMas.sort((a, b) => a - b);

console.log(zodzMas.sort((a,b) => a.localeCompare(b)));
console.groupEnd();
// Iteraciniai masyvų metodai
/*
  Iteraciniai masyvų metodai - iteruoja per masyvą ir leidžia atlikti kažkokį veiksmą su kiekviena iteracija.
  Naudinga tose situacijose, kuriose neleidžiamas paprastas for'as arba for of'as.
*/
/*Iteraciniai masyvų metodai
  forEach()   -   Iteruoja per masyvo elementus atlikdamas kažkokius veiksmus.
  map()       -   Grąžina naują kažkaip modifikuotą masyvą.
  filter()    -   Grąžina naują masyvą, kuris atitinka nurodytą sąlygą.
  reduce()    -   Grąžina reikšmę, kuri susideda iš viso masyvo modifikuotų elementų judant nuo pradžios link galo

  reduceRight()   - grąžina reikšmę, kuri susideda iš viso masyvo modifikuotų elementų judant nuo galo link pradžios
  some()          - tikrina ar bent vienas masyvo elementas atitinka kažkokią sąlygą ir grąžina true/false
  every()         - tikrina ar kiekvienas masyvo elementas atitinka kažkokią sąlygą ir grąžina true/false
  find()          - ieško masyve, sąlygą atitinkančio pirmojo elemento, ir jį grąžina (jeigu neranda - grąžina "undefined")
  findLast()      - ieško masyve, sąlygą atitinkančio paskutinio elemento, ir jį grąžina (jeigu neranda - grąžina "undefined")
  findIndex()     - ieško masyve, sąlyga atitinkančio pirmojo elemento, ir grąžina jo indeksą (jeigu neranda - grąžina "-1")
  findLastIndex() - ieško masyve, sąlyga atitinkančio paskutinio elemento, ir grąžina jo indeksą (jeigu neranda - grąžina "-1")
  flatMap()       - grąžina naują masyvą, kuriame visi elementai yra vienu lygmeniu žemiau ir kažkaip galbūt papildomai modifikuoti
*/

/* syntax for every iteration method except reduce, reduceRight, sort
  someArray.method(element => veiksmai)
  someArray.method((element, iteration) => veiksmai)
  someArray.method((element, iteration, array) => veiksmai)
*/
let mokinimuisiSkirtasMasyvas = [4,6,1,"zodziu",false,false,4,'naujas'];

// forEach - neatlieka kažko extra
/* minusai
  Negali būti sustabdytas (break)
  Negrąžina jokios reikšmės (return)
*/
console.groupCollapsed("forEach");
mokinimuisiSkirtasMasyvas.forEach(elementas => console.log("Masyvo elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija) => console.log("Masyvo "+ iteracija +" elementas: ", elementas));
console.log('');
mokinimuisiSkirtasMasyvas.forEach((elementas, iteracija, masyvas) => console.log("Masyvo "+ iteracija +" elementas: ", elementas, ';  Sekantis elementas yra: ', masyvas[iteracija+1]));
console.groupEnd();

// map - grąžina naują kažkaip modifikuotą masyvą.
let naujasMasyvas = mokinimuisiSkirtasMasyvas.map(element => element+5);
console.log(naujasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);

// filter - grąžina naują masyvą, kuris atitinka nurodytą sąlygą
let naujasFiltruotasMasyvas = mokinimuisiSkirtasMasyvas.filter(element => typeof(element) === "string");
console.log(naujasFiltruotasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);

// reduce - grąžina reikšmę, kuri susideda iš viso masyvo modifikuotų elementų judant nuo pradžios link galo
// reduceRight - grąžina reikšmę, kuri susideda iš viso masyvo modifikuotų elementų judant nuo galo link pradžios
/*syntax
  someArray.reduce((accumulator, element) => veiksmai)
  someArray.reduce((accumulator, element, iteration) => veiksmai)
  someArray.reduce((accumulator, element, iteration, array) => veiksmai)
  someArray.reduce((accumulator, element) => veiksmai, initialValue)
  someArray.reduce((accumulator, element, iteration) => veiksmai, initialValue)
  someArray.reduce((accumulator, element, iteration, array) => veiksmai, initialValue)
*/
let reduceintasMasyvas = mokinimuisiSkirtasMasyvas.reduce((bendras, elementas) => {
  console.log(bendras);
  return bendras + ' ' + elementas;
}, 'pradžia');
console.log(reduceintasMasyvas);
console.log(mokinimuisiSkirtasMasyvas);

// Neiteraciniai 4) Parašykite funkciją, kuri iš 2 jai paduotų masyvų grąžina(išveda į konsolę) pasikartojančias reikšmes. (jeigu yra dvi vienodos reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę.
let mas4_1 = [1,2,3,4,5,6];
let mas4_2 = [4,9,5,8,7,6,1];
let zodzMas41 = ['labas','ąžuolas', 'žodis', 'aha','haha','hihi'];
let zodzMas42 = ['labas','hihi','ate','ąžuolas','ąsotis', 'žodis', 'kanarėlė'];
let vienodi = (arr1, arr2) => {
  // let arrToReturn = [];
  for(let i = 0; i < arr2.length; i++){
    arr1.includes(arr2[i]) ? console.log(arr2[i]) : null;
  }
  // return arrToReturn;
}

vienodi(mas4_1, mas4_2);
vienodi(zodzMas41, zodzMas42);