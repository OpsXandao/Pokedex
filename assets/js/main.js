
const offset = 0;
const limit = 20;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit};`;

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        <li id="type-grass" class="type" >Grass</li>
                        <li id="type-poison" class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif" alt="${pokemon.name}">
                </div>
    </li>
            `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)

           
        }
    })
    .catch((error) => console.error(error))

    