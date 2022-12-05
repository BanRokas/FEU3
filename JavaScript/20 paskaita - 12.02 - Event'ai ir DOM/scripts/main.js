//        DOM
let renkames1 = document.querySelectorAll('p');
console.dir(renkames1);
console.log(renkames1);
// dir ir log
// dir - grąžina interaktyvų elemento savybių sąrašą
// log - grąžina elementą

//        Event
for(let i = 0; i < renkames1.length; i++){
  renkames1[i].addEventListener('click', function(event){
    console.dir(event);
    console.log('Paspaudei ant ' + i + "'ojo, paragrafo.");
  });
}

let renkames2 = document.querySelector('body');
// renkames2.addEventListener('keydown', function(event){
  // console.dir(event);
  // console.log('Paspaudei ' + event.code + ' mygtuką.');
// });

let visiH1 = document.querySelectorAll("h1");
for(let i = 0; i < visiH1.length; i++){
  console.dir(visiH1[i]);
  visiH1[i].textContent += " :)";
  visiH1[i].style.color = 'red';
}

let paveiksliukasTaskuose = document.querySelector('#tasks > img');
paveiksliukasTaskuose.addEventListener('mouseenter', function(){
  paveiksliukasTaskuose.style.opacity = 0.5;
});
paveiksliukasTaskuose.addEventListener('mouseleave', function(){
  paveiksliukasTaskuose.style.opacity = 1;
});

//        DOM kūrimas iš JS'o
let DOM_is_JS = document.querySelector('#DOM_is_JS');

DOM_is_JS.innerHTML += "<p>Labas</p>";

let paragrafas = document.createElement("p");
console.dir(paragrafas);
let tekstas = document.createTextNode("Text node");
paragrafas.append(tekstas);
DOM_is_JS.append(paragrafas);

let image = document.createElement('img');
image.setAttribute('src', 'https://media.istockphoto.com/id/975157976/vector/browser-window.jpg?s=612x612&w=0&k=20&c=flrP7NkQORpJdvzPHUrR0pcfD-eMizn25-1U44_EVtQ=');
DOM_is_JS.append(image);

//        DOM stilizavimas iŠ JS'o
paragrafas.style.color = '#f00';
// paragrafas.className = 'tekstas';
// paragrafas.setAttribute('class', 'tekstas');
paragrafas.classList.add('tekstas');

// task 5
let calculator = document.querySelector("#calc");

calculator.children.skaic.addEventListener('submit', function(e){
  e.preventDefault();
  let skaicius1 = e.target.elements.skaicius1.valueAsNumber;
  let skaicius2 = e.target.elements.skaicius2.valueAsNumber;
  let veiksmas = e.target.elements.veiksmas.value;
  
  let atsakymas = 0;
  switch(veiksmas){
    case 'sudetis':
      atsakymas = skaicius1+skaicius2;
      break;
    case 'atimtis':
      atsakymas = skaicius1-skaicius2;
      break;
    case 'dauginimas':
      atsakymas = skaicius1*skaicius2;
      break;
    case 'dalinimas':
      atsakymas = skaicius1/skaicius2;
      break;
    case 'laipsnis':
      atsakymas = skaicius1**skaicius2;
      break;
    case 'saknis':
      atsakymas = skaicius1**(1/skaicius2);
      break;
    case 'liekana':
      atsakymas = skaicius1%skaicius2;
      break;
  }
  calculator.children.output.innerHTML = atsakymas;
});