// 2.3
let masyvas2_3 = [true, 'trecia', 4, ['vienas', 'du', 'trys', 'keturi']];
//
let masyvas2_4 = [1,2,3,{vienas:10, antras:"labas", trecias:98, ketvirtas:false}];


// 3.2
console.log(masyvas2_3[0], masyvas2_3[1], masyvas2_3[3][1]);
console.log(masyvas2_4[0], masyvas2_4[1], masyvas2_4[3].trecias);

// 6
let skaiciuMasyvas = [];
for(let i = 0; i < 50; i++){
  skaiciuMasyvas.push(Math.floor(Math.random()*101));
}
console.log(skaiciuMasyvas);

// 7
console.groupCollapsed('7');
for(let i = 0; i < skaiciuMasyvas.length; i+=3){
  console.log(skaiciuMasyvas[i]);
}
console.groupEnd();

// 8
console.groupCollapsed('8');
for(let i = skaiciuMasyvas.length - 1; i >= 0; i-=2){
  console.log(skaiciuMasyvas[i]);
}
console.groupEnd();