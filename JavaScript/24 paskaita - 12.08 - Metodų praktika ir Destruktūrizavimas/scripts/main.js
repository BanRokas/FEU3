//      Užduotys be ir su iteraciniais metodai
let zodziuMasyvas = ['labas', 'ate', 'Katašunis', 'pirmadienis', 'nebeprisikiškiakopūtesliaudamasis', 'whoof', 'rytmetis', 'saulė'];
let skaiciuMasyvas = [5,4,65,1,-68,9,1,84,81,-6,-1,18,-981,69165,16,-1,31,6918,61,0];
let misrusMasyvas = [4, 'whoof', 'rytmetis', 'saulė', 9, 1, 84, 81, -6, false, true, false, 'ate', 'Katašunis', 5, 4, 65];

// 1) Parašykite funkciją, kuri į konsolę išspausdinti pateikto masyvo duomenis (atskirose eilutėse)
console.groupCollapsed('---- 1 ----');
let uzd_1_be = (masyvas) => {
  for(let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
  }
}
console.log(uzd_1_be(misrusMasyvas));
console.log('---------------');
let uzd_1_su = (masyvas) => masyvas.forEach(element => console.log(element));
console.log(uzd_1_su(misrusMasyvas));
console.groupEnd();

// 2) Parašykite funkciją, kuri grąžintų masyvą, kuriame yra tik skaičiai didesni už 10, iš jai pateikto skaičių masyvo.
console.groupCollapsed("---- 2 ----")
let uzd_2_be = (masyvas) => {
  let grazinamasMasyvas = [];
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i] > 10){
      grazinamasMasyvas.push(masyvas[i]);
    }
    // masyvas[i] > 10 ? grazinamasMasyvas.push(masyvas[i]) : null;
    // masyvas[i] > 10 && grazinamasMasyvas.push(masyvas[i]);
  }
  return grazinamasMasyvas;
}
console.log(uzd_2_be(skaiciuMasyvas));
console.log('---------------');
let uzd_2_su = (masyvas) => masyvas.filter(element => element > 10);
console.log(uzd_2_su(skaiciuMasyvas));
console.groupEnd();

// 3) Parašykite funkciją, kuri patikrintų ar jai paduotame string masyve bent vienas elementas yra ilgesnis nei 5 raidžių žodis ir grąžintų true/false.
console.groupCollapsed("---- 3 ----");
let uzd_3_be = (masyvas) => {
  // let arTiesa = false;
  for(let i = 0; i < masyvas.length; i++){
    if(masyvas[i].length > 50){
      // arTiesa = true;
      // break;
      return true;
    }
  }
  return false;
  // return arTiesa;
}
console.log(uzd_3_be(zodziuMasyvas));
console.log('---------------');
let uzd_3_su = (masyvas) => masyvas.some(element => element.length > 50);
console.log(uzd_3_su(zodziuMasyvas));
console.groupEnd();

// 4) Parašykite funkciją, kuri jai paduotame mišriame masyve, rastų ir grąžintų pirmąjį kintamąjį, kuris yra skaičius.
let uzd_4_be = (masyvas) => {
  for(let i = 0; i < masyvas.length; i++){
    if(typeof(masyvas[i]) === 'number'){
      return masyvas[i];
    }
  }
}
console.log(uzd_4_be(misrusMasyvas));
console.log('---------------');
let uzd_4_su = (masyvas) => masyvas.find(element => typeof(element) === 'number');
console.log(uzd_4_su(misrusMasyvas));