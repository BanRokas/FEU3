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

let data = "Paragrafas su daug teksto...";

bandymas1.innerHTML +=`
  <div>
    <h1>Pavadinimas</h1>
    <p>${data}</p>
  </div>
`;

//            bandymas2
let bandymas2 = document.querySelector('#bandymas2');

let antraste = "Super duper JS";
let paragrafas = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque consequuntur rerum deleniti autem incidunt accusamus corrupti, enim expedita distinctio ut.";

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

for(let i = 0; i < data4.length; i++){
  bandymas4.innerHTML += `
    <div>
      <h1>${data4[i].antraste}</h1>
      <p>${data4[i].paragrafas}</p>
    </div>
  `;
}