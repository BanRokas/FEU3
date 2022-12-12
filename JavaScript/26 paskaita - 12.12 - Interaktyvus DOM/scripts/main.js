const formSec = document.querySelector('#forma');
const form = document.createElement('form');

let patiekaloSelektoSukurimas = () => {
  let div = document.createElement('div');
  div.classList.add('patiekaloSelektas');
  let select = document.createElement('select');
  select.setAttribute('name', 'patiekalas');
  select.setAttribute('id', 'patiekalas');

  meniu.forEach(item => {
    let option = document.createElement('option');
    option.setAttribute('value', item.id);
    let text = document.createTextNode(item.pavadinimas);
    option.append(text);
    // option.textContent = item.pavadinimas;
    select.append(option);
  });
  div.append(select);
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

patiekaloSelektoSukurimas();
submitMygtukoSukurimas();

formSec.append(form);

const saskaita = document.querySelector('#saskaita');
let saskaitosSukurimas = (preke) => {
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
  const hr1 = document.createElement('hr');
  const hr2 = document.createElement('hr');

  const ul = document.createElement('ul');
  // ul

  let p2 = document.createElement('p');
  p2.classList.add('bendraKaina');
  text = document.createTextNode('bendraKaina');
  p2.append(text);

  let h2 = document.createElement('h2');
  text = document.createTextNode('Padėkojimas');
  h2.append(text);

  mainDiv.append(p1, h4, h1, hr, ul, hr1, p2, hr2, h2);
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

saskaitosSukurimas();