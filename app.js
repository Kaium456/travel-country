const loadCountry = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCOuntry(data));
};
loadCountry();

const displayCOuntry = (countryies) => {
  const countryDiv = document.getElementById("countries");
  for (const country of countryies) {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("country-style");
    div.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.capital}</p>
    <Button onclick="loadCountryByName('${country.name}')">Show Details </Button>
    `;
    countryDiv.appendChild(div);
  }
};

const loadCountryByName = (name) => {
  fetch(`https://restcountries.com/v2/name/${name}`)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  // const div = document.getElementById("country-details");
  console.log(country);
  const div = document.getElementById("country-details");
  div.innerHTML = `
 <h3>${country.name}</h3>
 <img width='200px' src=${country.flag} alt="">
  `;
};
