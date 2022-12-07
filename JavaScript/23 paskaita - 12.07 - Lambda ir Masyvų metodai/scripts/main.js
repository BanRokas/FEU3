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
console.log(uzd1());
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
/*Iteraciniai masyvų metodai
  forEach()
  map()
  filter()
  reduce()

  reduceRight()
  some()
  every()
  find()
  findIndex()
  findLast()
  findLastIndex()
  flatMap()

  sort()


*/
// populiarus rikiavimo metodas - bubble sort
let skMas = [5,6,7,1,8,16,51,61,91,9,61,61,321,32,169];
let zodzMas = ['labas','ate','ąžuolas','ąsotis', 'žodis', 'kanarėlė'];

function skaiciuSortas(a, b){
  return a - b;
}
skMas.sort(skaiciuSortas);

skMas.sort((a, b) => a - b);

console.log(zodzMas.sort((a,b) => a.localeCompare(b)));