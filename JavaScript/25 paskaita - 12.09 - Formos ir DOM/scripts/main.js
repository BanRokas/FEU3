document
  .querySelector('#card > form')
  .addEventListener("submit", e => {
    e.preventDefault();
    console.dir(e);
    const [photo, title, description, date, location] = [
      e.target.elements.photo.value,
      e.target.elements.title.value,
      e.target.elements.description.value,
      e.target.elements.date.value,
      e.target.elements.location.value
    ];
    console.log(photo, title, description, date, location);

    document.querySelector('#generatedCards').innerHTML += `
    <div class="card">
      <div>
        <img src="${photo}" alt="cardImage">
        ${date && `<p>${date}</p>`}
        ${location && `<p>${location}</p>`}
      </div>
      <div>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </div>
    `;
  });