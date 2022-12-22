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