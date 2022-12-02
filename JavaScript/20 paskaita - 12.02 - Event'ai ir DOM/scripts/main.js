let renkames1 = document.querySelectorAll('p');
console.dir(renkames1);
console.log(renkames1);
// dir ir log
// dir - grąžina interaktyvų elemento savybių sąrašą
// log - grąžina elementą

for(let i = 0; i < renkames1.length; i++){
  renkames1[i].addEventListener('click', function(event){
    console.dir(event);
    console.log('Paspaudei ant ' + i + "'ojo, paragrafo.");
  });
}

let renkames2 = document.querySelector('body');
renkames2.addEventListener('keydown', function(event){
  console.dir(event);
  console.log('Paspaudei ' + event.code + ' mygtuką.');
});

let visiH1 = document.querySelectorAll("h1");
for(let i = 0; i < visiH1.length; i++){
  console.dir(visiH1[i]);
  visiH1[i].textContent += " :)";
  visiH1[i].style.color = 'red';
}