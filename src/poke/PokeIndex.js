import React from 'react'
import axios from 'axios'


function PokeIndex () {

  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(() => {
    
    // try {
    const getPokemonData = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          offset: 0,
          limit: 898,
        },
      })
      console.log(result.data) 
      result ? displayPokemon(result.data) : console.log('waiting') 
    } 
    getPokemonData()
  },[])
  function displayPokemon (pokemonData) {
    const pokemonArray = pokemonData.results.map((item, index) => {
      console.log(item)
      return {
        name: item.name,
        url: item.url, 
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
      }
    })
    setPokemon(pokemonArray)
  }
  return (
    <section>
      <div className="container">
        <h1>Pokedex</h1>
        <div className="columns is-multiline">
          {!pokemon && <p>Loading</p>}
          {pokemon &&
          pokemon.map(poke => (
            <div key={poke.name} className="column is-one-third">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title">
                    {poke.name}
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image image-is-1-by-1">
                    <img src={poke.image} alt=""/>
                  </figure>
                </div>
              </div>
            </div>
          ))
          }
          
        </div>
      </div>
    </section>
  )

}

export default PokeIndex