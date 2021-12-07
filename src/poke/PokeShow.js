import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

import Error from '../common/Error'


function PokeShow( ) {
  const { pokemonid } = useParams()
  const [pokemon, setPokemon] = React.useState(null)
  const [pokemonEvolution, setPokemonEvolution] = React.useState(null)

  const [isError, setIsError] = React.useState(false)

  let pokedexEntry = null

  let pokemonTypes = []

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
        setPokemon(res.data)
        const  evoRes = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonid}`)
        setPokemonEvolution(evoRes.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [pokemonid]
  )
  if (pokemon) {
    console.log(pokemon.sprites.other.home.front_default)
    const pokemonTypesArray = pokemon.types.map(type => {
      return type.type
    })
    pokemonTypes = pokemonTypesArray.map(type => {
      return type.name
    })
  }
  if (pokemonEvolution) {

    const pokedexEntryFilter = pokemonEvolution.flavor_text_entries.filter(entry => {
      return entry.language.name === 'en' 
    })
    pokedexEntry = pokedexEntryFilter[0].flavor_text
  }

  return (

    <section>
      (pokemon ? 
      <div className={` cardborder container ${pokemonTypes[0]}`}>
        <div className="columns">
          {isError && <Error />}
          <div className="column is-vcentered is-half">
            <figure className="image">
              <img src={pokemon.sprites.other['official-artwork'].front_default}/>
            </figure>
          </div>
          <div className="imagetext column is-half">
            <div><h1 className="pokemon title is-1">{pokemon.name.toUpperCase()}</h1></div>
            <div><h1 className="pokemonid title is-2">#{pokemon.id}</h1></div>
            <div><h3 className="pokemontype title is-3">{pokemonTypes.join(' ').toUpperCase()}</h3></div>
            <div><h4 className="pokemondetails title is-5">{pokedexEntry}</h4></div>              
            <div></div>
          </div>
        </div>
      </div>
        : <p>loading</p> )
    </section>
  )
}

export default PokeShow