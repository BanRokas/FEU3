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
    // console.log(data);
    let dataAsArray = data.split('\n');
    // console.log(dataAsArray);
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
    // console.log(data);
    Object.keys(data).forEach(key => {
      document.querySelector('#jsonSimple').innerHTML += `<p>${data[key]}</p>`;
    });
  });

// movies.json
fetch('./data/movies.json')
  .then(res => res.json())
  .then(data => {
    // console.log(data[0].actors.map(actor => `<li>${actor}</li>`).toString().replaceAll(',',''));
    data.forEach(movie => {
      document.querySelector('#filmai').innerHTML += `
        <div class="movie">
          <h1>${movie.name}</h1>
          <img src="${movie.poster}" alt="${movie.name} movie poster">
          <span>Movie length: ${Math.floor(movie.length/60)} hours ${movie.length%60} minutes</span>
          <ul>
            ${
              movie.actors
                .map(actor => `<li>${actor}</li>`)
                .toString()
                .replaceAll(',', '')
            }
          <ul>
        </div>
      `
    });
  });

// random user
fetch('https://randomuser.me/api')
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0]);
    
  });