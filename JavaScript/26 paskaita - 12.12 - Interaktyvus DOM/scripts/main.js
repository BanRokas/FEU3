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

