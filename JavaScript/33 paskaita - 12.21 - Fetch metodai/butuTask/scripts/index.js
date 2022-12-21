const state = {};

function renderFilterButtons(cities) {
  cities.forEach((city) => {
    const filterButton = document.createElement("button");
    filterButton.innerText = city;

    const filtersContainer = document.getElementById("filters-container");
    filtersContainer.append(filterButton);
  });
}

function renderPropertyCards(properties) {
  const propertyContainer = document.getElementById("properties-container");
  propertyContainer.innerHTML = "";

  properties.forEach((property) => {
    const propertyImage = document.createElement("img");
    propertyImage.src = property.image;
    propertyImage.setAttribute("alt", "Property picture");

    const propertyPrice = document.createElement("h1");
    propertyPrice.innerText = `${property.price}€`;

    const propertyCity = document.createElement("p");
    propertyCity.innerText = property.city;

    const propertyDescription = document.createElement("p");
    propertyDescription.innerText = property.description;

    const propertyCard = document.createElement("div");
    propertyCard.setAttribute("class", "property-card");
    propertyCard.append(
      propertyImage,
      propertyPrice,
      propertyCity,
      propertyDescription
    );
    propertyContainer.append(propertyCard);
  });
}

fetchProperties();

function fetchProperties() {
  fetch("https://robust-safe-crafter.glitch.me")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then((data) => {
      state["properties"] = data;
      renderPropertyCards(data);
      renderFilterButtons([...new Set(data.map((entry) => entry.city))]);
    })
    .catch((error) => {
      console.error(error);
    });
}

function filterProperties(event) {
  if (event.target.tagName.toLowerCase() === "button") {
    const isAlreadySelected = event.target.classList.contains("selected");
    if (isAlreadySelected) {
      renderPropertyCards(state.properties);
    } else {
      const cityClicked = event.target.innerText;
      renderPropertyCards(
        state.properties.filter((property) => property.city === cityClicked)
      );
      const allFilterButtons = event.target.parentNode.children;
      for (let i = 0; i < allFilterButtons.length; i++) {
        allFilterButtons[i].classList.remove("selected");
      }
    }
    event.target.classList.toggle("selected");
  }
}

document
  .getElementById("filters-container")
  .addEventListener("click", filterProperties);
