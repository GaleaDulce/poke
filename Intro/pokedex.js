let pokedexURL = "https://pokeapi.co/api/v2/pokemon?limit=151"; // url limitada

let pokedex$$ = document.querySelector(".pokedex"); //nodo pokedex

let pokeCards = async () => {
  // creo una funcion asincronica

  let pokeApi = await fetch(pokedexURL);
  let pokeJSON = await pokeApi.json();
  let myHtml = "";

  for (let index = 0; index < pokeJSON.results.length; index++) {
    let app = pokeJSON.results[index].url;
    let web1 = await fetch(app);
    let web1JSON = await web1.json();

    let textUrl = web1JSON.species.url;
    let web3 = await fetch(textUrl);
    let web3JSON = await web3.json();

    let description = "";
    for (let index = 0; index < web3JSON.flavor_text_entries.length; index++) {
      if (web3JSON.flavor_text_entries[index].language.name === "es") {
        description = web3JSON.flavor_text_entries[index].flavor_text;
      }
    }

    let imgx = web1JSON.sprites.other.home.front_default; // variable de mis imagenes con ruta.
    let imagen = "<img src=" + imgx + "></img>";

    myHtml =
      myHtml +
      "<div><h2>" +
      web1JSON.name +
      "</h2>" +
      imagen +
      " <h4>" +
      description +
      "</h4></div>";
  }

  document.getElementById("pokedex").innerHTML = myHtml;
};

pokeCards();
