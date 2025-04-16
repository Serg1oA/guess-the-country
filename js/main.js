//Example fetch using pokemonapi.co
document.querySelector("#btnGuess").addEventListener("click", getFetch)

// call function at page load to get a country right away
getFetch()

function getFetch() {
  // API url
  const apiURL = `https://countryinfoapi.com/api/countries?fields=name,population,capital,flag,coatOfArms`

  fetch(apiURL)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // get a random country
        let numOfCountries = data.length
        let randCountry = Math.floor(Math.random(numOfCountries) * numOfCountries)
        console.log(randCountry)
        // show flag
        document.querySelector("#imgFlag").src = data[randCountry].flag
        // show coat of arms
        document.querySelector("#imgCoatOfArms").src = data[randCountry].coatOfArms
        // show population
        document.querySelector("#population").innerText = "Population: " + data[randCountry].population
        // show capital
        document.querySelector("#capital").innerText = "Capital: " + data[randCountry].capital[0]


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}