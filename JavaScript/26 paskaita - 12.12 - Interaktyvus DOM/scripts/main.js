const formSec = document.querySelector('#forma');
const form = document.createElement('form');
const saskaita = document.querySelector('#saskaita');
formSec.append(form);

let patiekaloSelektoSukurimas = (kelintas) => {
  let div = document.createElement('div');
  div.classList.add('patiekaloSelektas');
  let select = document.createElement('select');
  select.setAttribute('name', 'patiekalas' + kelintas);
  select.setAttribute('id', 'patiekalas' + kelintas);

  meniu.forEach(item => {
    let option = document.createElement('option');
    option.setAttribute('value', item.id);
    let text = document.createTextNode(item.pavadinimas);
    option.append(text);
    // option.textContent = item.pavadinimas;
    select.append(option);
  });

  let input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('name', 'kiekis' + kelintas);
  input.setAttribute('id', 'kiekis' + kelintas);
  input.setAttribute('min', 1);
  input.setAttribute('value', 1);

  div.append(select, input);
  form.insertBefore(div, addMoreDiv);
}

let addMoreMygtukoSukurimas = () => {
  let div = document.createElement('div');
  div.classList.add('addMoreSelect');
  let button = document.createElement('button');
  button.setAttribute('type', 'button');
  let text = document.createTextNode('+');
  button.append(text);
  div.append(button);
  form.append(div);
}

let submitMygtukoSukurimas = () => {
  let div = document.createElement('div');
  div.classList.add('submitDiv');
  let input = document.createElement('input');
  input.setAttribute('type', 'submit');
  input.setAttribute('value', 'Užsisakyti');
  div.append(input);
  form.append(div);
}

let saskaitosSukurimas = (prekes) => {
  let mainDiv = document.createElement('div');

  let p1 = document.createElement('p');
  p1.classList.add('date');
  let text = document.createTextNode(gautiDabartiniLaika());
  p1.append(text);

  let h4 = document.createElement('h4');
  text = document.createTextNode("Įmonės pav");
  h4.append(text);

  let h1 = document.createElement('h1');
  text = document.createTextNode('Sąskaita');
  h1.append(text);

  const hr = document.createElement('hr');

  const ul = document.createElement('ul');
  let bendraKaina = 0;
  prekes.forEach(preke => {
    bendraKaina += preke.kaina * preke.kiekis;
    let li = document.createElement('li');
    let div = document.createElement('div');

    let span = document.createElement('span');
    text = document.createTextNode(preke.pavadinimas);
    span.append(text);
    div.append(span);

    let div2 = document.createElement('div');

    span = document.createElement('span');
    text = document.createTextNode(`kiekis: ${preke.kiekis}`);
    span.append(text);
    div2.append(span)

    span = document.createElement('span');
    text = document.createTextNode(`| ${(preke.kaina * preke.kiekis).toFixed(2)}€`);
    span.append(text);
    div2.append(span);

    div.append(div2);
    li.append(div);
    ul.append(li);
  });

  const hr1 = document.createElement('hr');

  let p2 = document.createElement('p');
  p2.classList.add('bendraKaina');
  text = document.createTextNode(`Bendra kaina: ${bendraKaina.toFixed(2)}€`);
  p2.append(text);

  const hr2 = document.createElement('hr');

  let h2 = document.createElement('h2');
  text = document.createTextNode('Padėkojimas');
  h2.append(text);

  mainDiv.append(p1, h4, h1, hr, ul, hr1, p2, hr2, h2);

  saskaita.innerHTML = '';
  saskaita.append(mainDiv);
}

let gautiDabartiniLaika = () => {
  // let date = new Date().toISOString();
  // date = date.replace("T", " ");
  // date = date.slice(0, date.indexOf(" ")+1)+
  //         (Number(date.slice(date.indexOf(" ")+1, date.indexOf(" ")+3))+2)+
  //         date.slice(date.indexOf(" ")+3, date.indexOf(" ")+6);
  let date = new Date();
  let dateString = date.toLocaleString('lt-LT');
  return dateString;
}

addMoreMygtukoSukurimas();
submitMygtukoSukurimas();
let addMoreDiv;
setTimeout(
  () => {
    addMoreDiv = document.querySelector('.addMoreSelect');
    patiekaloSelektoSukurimas(0);
  }, 100
);

document
  .querySelector('#forma > form')
  .addEventListener('submit', e => {
    e.preventDefault();

    let uzsakymuMasyvas = [];
    for(let i = 0; i < e.target.elements.length - 2; i+=2){
      let [patiekaloId, patiekaloKiekis] = [
        e.target.elements[i].value,
        e.target.elements[i+1].valueAsNumber
      ];
      let pateikiamaPreke = meniu.find(element => element.id === patiekaloId);
      pateikiamaPreke.kiekis = patiekaloKiekis;
      // pateikiamaPreke.kaina = pateikiamaPreke.kiekis*pateikiamaPreke.kaina;
      uzsakymuMasyvas.push(pateikiamaPreke);
    }

    saskaitosSukurimas(uzsakymuMasyvas);
  });

document
  .querySelector('.addMoreSelect > button')
  .addEventListener('click', () => {
    let kiek = document.querySelectorAll('.patiekaloSelektas').length;
    patiekaloSelektoSukurimas(kiek);
  });