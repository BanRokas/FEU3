const form = document.getElementById("add-property-form");
const CITIES = ["Vilnius", "Kaunas", "Klaipeda", "Šiauliai", "Panevėžys"];

CITIES.forEach((city) => {
  const addCity = document.getElementById("saleCities");
  const option = document.createElement("option");
  option.setAttribute("value", city);
  option.innerText = city;
  addCity.append(option);
});

function displayStatus(isOk, text) {
  const statusDiv = document.getElementById("statusMessages");
  const statusText = document.createElement("h1");
  statusDiv.style.color = isOk ? "03d3b2" : "red";
  statusText.innerHTML = text;
  statusDiv.append(statusText);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const addFormData = new FormData(form);
  document.getElementById("statusMessages").innerHTML = "";

  fetch("https://radial-reinvented-shoe.glitch.me", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(addFormData))
  })
    .then((res) => {
      if (res.ok) {
        displayStatus(res.ok, "Property successfully added.");
      } else {
        throw new Error(res.statusText);
      }
    })
    .catch((error) => {
      displayStatus(false, `Something went wrong. Server returned: ${error}.`);
    });
}

form.addEventListener("submit", handleFormSubmit);