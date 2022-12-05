//        simple DOM manipulation

//            bandymas1
let bandymas1 = document.querySelector('#bandymas1');

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');

// let text = document.createTextNode('Pavadinimas');
// h1.append(text);
// text = document.createTextNode('Paragrafas su daug teksto...');
// p.append(text);

// div.append(h1);
// div.append(p);
// bandymas1.append(div);

let data1 = "Paragrafas su daug teksto...";

bandymas1.innerHTML +=
  // <button class="slepti">Slėpti</button>
  // <button class="rodyti nonDisplay">Rodyti</button>
  `
  <button class="sleptiRodyti">Slėpti</button>
  <div>
    <h1>Pavadinimas</h1>
    <p>${data1}</p>
  </div>
`;

//            bandymas2
let bandymas2 = document.querySelector('#bandymas2');

let antraste = "Super duper JS";
let paragrafas = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque consequuntur rerum deleniti autem incidunt accusamus corrupti, enim expedita distinctio ut.";
bandymas2.innerHTML += `<button class="sleptiRodyti">Slėpti</button>`;
for(let i = 0; i < 5; i++){
  bandymas2.innerHTML += `
    <div>
      <h1>${antraste}</h1>
      <p>${paragrafas}</p>
    </div>
  `;
}

//          bandymas3
let bandymas3 = document.querySelector('#bandymas3');

let antrastes = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'];
let paragrafai = [
  'Lorem ipsum dolor sit amet. 1',
  'Lorem ipsum dolor sit amet. 2',
  'Lorem ipsum dolor sit amet. 3',
  'Lorem ipsum dolor sit amet. 4',
  'Lorem ipsum dolor sit amet. 5',
  'Lorem ipsum dolor sit amet. 6',
  'Lorem ipsum dolor sit amet. 7'
];

bandymas3.innerHTML += `<button class="sleptiRodyti">Slėpti</button>`;
for(let i = 0; i < antrastes.length; i++){
  bandymas3.innerHTML += `
    <div>
      <h1>${antrastes[i]}</h1>
      <p>${paragrafai[i]}</p>
    </div>
  `;
}

//            bandymas4
let bandymas4 = document.querySelector('#bandymas4');

let data4 = [
  {
    antraste: "A1",
    paragrafas: "Tekstas1"
  },{
    antraste: "A2",
    paragrafas: "Tekstas2"
  },{
    antraste: "A3",
    paragrafas: "Tekstas3"
  },{
    antraste: "A4",
    paragrafas: "Tekstas4"
  },{
    antraste: "A5",
    paragrafas: "Tekstas5"
  }
];

bandymas4.innerHTML += `<button class="sleptiRodyti">Slėpti</button>`;
for(let i = 0; i < data4.length; i++){
  bandymas4.innerHTML += `
    <div>
      <h1>${data4[i].antraste}</h1>
      <p>${data4[i].paragrafas}</p>
    </div>
  `;
}


//        task1
let sleptiRodyti = document.querySelectorAll('.sleptiRodyti');

for(let i = 0; i < sleptiRodyti.length; i++){
  sleptiRodyti[i].addEventListener('click', function () {
    let itemsToHideOrShow = sleptiRodyti[i].parentElement.querySelectorAll('section > div');
    if(sleptiRodyti[i].innerText === "Slėpti"){
      sleptiRodyti[i].innerText = "Rodyti";
      for(let j = 0; j < itemsToHideOrShow.length; j++){
        itemsToHideOrShow[j].classList.toggle('nonDisplay');
      }
      // bandymas1.children[1].classList.toggle('nonDisplay');
    } else if(sleptiRodyti[i].innerText === "Rodyti"){
      sleptiRodyti[i].innerText = "Slėpti";
      for(let j = 0; j < itemsToHideOrShow.length; j++){
        itemsToHideOrShow[j].classList.toggle('nonDisplay');
      }
      // bandymas1.children[1].classList.toggle('nonDisplay');
    }
    // for(let j = 0; j < itemsToHideOrShow; j++){
    //   itemsToHideOrShow[j].classList.toggle('nonDisplay');
    // }
    // bandymas1.children[1].classList.toggle('nonDisplay');
  });
}

// let sleptiMygtukas = document.querySelector(".slepti");
// let rodytiMygtukas = document.querySelector(".rodyti");
// console.log(rodytiMygtukas);
// sleptiMygtukas.addEventListener('click', function(){
//   sleptiMygtukas.classList.add('nonDisplay');
//   bandymas1.children[2].classList.add('nonDisplay');
//   rodytiMygtukas.classList.remove('nonDisplay');
// });
// rodytiMygtukas.addEventListener('click', function(){
//   sleptiMygtukas.classList.remove('nonDisplay');
//   bandymas1.children[2].classList.remove('nonDisplay');
//   rodytiMygtukas.classList.add('nonDisplay');
// });

console.log(data);

// task 2
let task2 = document.querySelector("#task2");

task2.innerHTML += `
  <div class="task2">
  <h1>${data[1].title}</h1>
    <div class="task2_image_container">
      ${
        data[1].images.map(function(image){
          return `<img src="${image}">`;
        })
      }
    </div>
  </div>
`;

// for(let image of data[1].images){
//   console.log(image);
// }
// console.log("---------------------");
// data[1].images.forEach(function(image){
//   `<img src="${image}">`
// });
/* <img src="${data[1].images[0]}">
  <img src="${data[1].images[1]}">
  <img src="${data[1].images[2]}"></img> */