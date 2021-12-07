import React from 'react'
import axios from 'axios'

import PokeCard from './PokeCard'


function PokeIndex () {

  const [pokemon, setPokemon] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
 

  React.useEffect(() => {
    const getPokemonData = async () => {
      const result = await axios.get('https://pokeapi.co/api/v2/pokemon', {
        params: {
          offset: 0,
          limit: 898,
        },
      })
      result ? displayPokemon(result.data) : console.log('waiting') 
    } 
    getPokemonData()
  },[])
  function displayPokemon (pokemonData) {
    const pokemonArray = pokemonData.results.map((item, index) => {
      return {
        name: item.name,
        url: item.url, 
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
        id: index + 1,
      }
    })
    setPokemon(pokemonArray)
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }


  const filteredPokemonNames = pokemon.filter(pokes => {
    return pokes.name.includes(searchValue.toLocaleLowerCase()) 
  })
  

  return (
    <section>
      <div className="container">
        <div className="searchbar field has-addons">
          <div className="control">
            <input className="input" onChange={handleSearch} placeholder="Gotta catch 'em all.."/>
          </div>
          <div className="control">
            <button className="button is-black">Search</button>
          </div>
        </div>
        <div className="columns is-multiline">
          {!pokemon && <p>Loading</p>}
          {pokemon &&
          filteredPokemonNames.map(poke => (
            <PokeCard
              key = {poke.name}
              name= {poke.name}
              image= {poke.image} 
              id = {poke.id}
            />
          ))
          }
          
        </div>
      </div>
    </section>
  )
}

export default PokeIndex