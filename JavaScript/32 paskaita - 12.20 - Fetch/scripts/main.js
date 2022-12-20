//        JSON
/*
  JSON - Java Script Object Notation

  JSON skiriasi nuo Object tuo, kad:
    JSON raktiniai žodžiai yra kabutėse
    JSON ignoruoja/nesaugo metodų
*/
const object = {
  raktu : 'reiškmė',
  tiesa : true,
  skaicius : 654,
  masyvas : ['labas', 'ate'],
  objektas : {hi:'ha', du: 2},
  funkcija(zodis){
    return `Pasakei ${zodis}`
  }
}
const objectAsJSON = JSON.stringify(object);

//        Fetch
/*syntax
  fetch('url')
    .then(res => res.text() || response.json())
*/
/*
  Fetch skirtas pasiimti duomenis iš nurodyto failo ar url.
*/

// data.txt
fetch("./data/data.txt")
  .then(response => response.text())
  .then(data => {
    console.log(data);
    let dataAsArray = data.split('\n');
    console.log(dataAsArray);
    // dataAsArray = dataAsArray.map(item => item.split(' '));
    // console.log(dataAsArray);
    dataAsArray.forEach(line => {
      document.querySelector('#tekstinis').innerHTML += `<p>${line}</p>`;
    });
  });

// data.json
fetch('./data/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    Object.keys(data).forEach(key => {
      document.querySelector('#jsonSimple').innerHTML += `<p>${data[key]}</p>`;
    });
  });