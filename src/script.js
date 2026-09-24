function updateTime() {
  let warsawElement = document.querySelector("#warsaw");
  if (warsawElement) {
    let warsawDateElement = warsawElement.querySelector(".date");
    let warsawTimeElement = warsawElement.querySelector(".time");
    let warsawTime = moment().tz("Europe/Warsaw");
    warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
    warsawTimeElement.innerHTML = warsawTime.format(
      "H:mm:ss [<small>]A[</small>]",
    );
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "H:mm:ss [<small>]A[</small>]",
    );
  }
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "H:mm:ss [<small>]A[</small>]",
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityTimeZone.replace("_", " ").split("/")[1]}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format("A")}</small>
       </div>
      </div>
      <a href="/">Back to all cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
