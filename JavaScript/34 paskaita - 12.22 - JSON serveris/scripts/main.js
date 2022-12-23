import Knyga from './components/Knyga.js';

let get = (id) => {
  // if(typeof(id) !== "number"){
  //   id = '';
  // }
  fetch(`http://localhost:3000/knygos/${id?id:''}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

let post = (data) => {
  fetch('http://localhost:3000/knygos', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

let remove = (id) => {
  fetch(`http://localhost:3000/knygos/${id}`, {
    method: "DELETE"
  })
}

let update = (id, data) => {
  fetch(`http://localhost:3000/knygos/${id}`, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

fetch('http://localhost:3000/knygos')
  .then(res => res.json())
  .then(knygos => {
    knygos.forEach(knyga =>{
      const naujaKnyga = new Knyga(knyga);
      document.querySelector('#visosKnygos').append(naujaKnyga);
    });
  });





















// document.querySelector('form').addEventListener('submit', e => {
//   e.preventDefault();
//   console.log(e.target.elements.labas.value);
//   let data = {
//     title: e.target.elements.labas.value,
//     author: e.target.elements.labas.value
//   }
  
// });

// let img = new Image();
// img.src = 'https://a.rgbimg.com/users/l/lu/lusi/600/mCb9hYu.jpg';
// setTimeout(() => {
//   console.log(img.src, img.width, img.height);
//   if(img.height > img.width){
//     console.log('portretas')
//     img.classList.add('portetinisImg')
//   } else {
//     console.log('landscape')
//   }
// }, 100)