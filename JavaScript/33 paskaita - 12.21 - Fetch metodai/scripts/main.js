// CRUD su Fetch
/*
  C - create  - POST metodas
  R - read    - GET metodas (default)
  U - update  - PUT metodas
  D - delete  - DELETE metodas
*/

/* Fetch syntax
  fetch(link, {
    method: 'POST', // PUT
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
*/

let getiname = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data));
}

let postinam = () => {
  let newData = {
    body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
    title: "Batukas",
    userId: 5
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

let triname = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/54', {
    method: "DELETE"
  })
  .then(res => res.json()) // DELETE nieko negrąžina
  .then(data => console.log(data)) // DELETE nieko negrąžina
}

let updateSuPUT = () => { // PUT ištrina buvusią ir įklijuoja naują info tame elemente, į kurį kreipiesi
  let newData = {
    body: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
  }
  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(res => res.json())
  .then(data => console.log(data));
}

let updateSuPATCH = () => { // PATCH pakeičia arba papildo tik tą informaciją, kuri buvo perduota, tame elemente, į kurį kreipiesi
  let newData = {
    bodyNr2: "Mano batai buvo du, vienas dingo nerandu. O su vienu batuku, spirt į šikną tegaliu.",
  }
  fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "PATCH",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newData)
  })
  .then(res => res.json())
  .then(data => console.log(data));
}