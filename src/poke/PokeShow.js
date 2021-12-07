import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

import Error from '../common/Error'
import Loading from '../common/Loading'


function PokeShow() {
  const { pokemonid } = useParams()
  const [pokemon, setPokemon] = React.useState(null)
  const [pokemonEvolution, setPokemonEvolution] = React.useState(null)
  const [isShiny, setIsShiny] = React.useState(false)

  const [isError, setIsError] = React.useState(false)
  const isLoading = !pokemon && !isError && pokemonEvolution 

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

  const decideShiny = () => {
    const randomNumber = Math.floor(Math.random() * 5)
    if (randomNumber === 4) {
      setIsShiny(true)
    } else {
      setIsShiny(false)
    }
  }
  console.log(isShiny)
 

  return (

    <section>
      {isError && <Error />}
      {isLoading && <Loading/>}
      {pokemon && 
      <div className={` cardborder container ${pokemonTypes[0]}`}>
        <div className="columns">
          {isError && <Error />}
          <div className="column is-vcentered is-half">
            <figure className="image">
              <img src={!isShiny ? pokemon.sprites.other['official-artwork'].front_default : pokemon.sprites.other.home.front_shiny}/>
            </figure>
          </div>
          <div className="imagetext column is-half">
            <div><h1 className="pokemon title is-1">{isShiny ? 'SHINY ' : ''}{pokemon.name.toUpperCase()}</h1></div>
            <div><h1 className="pokemonid title is-2">#{pokemon.id}</h1></div>
            <div><h3 className="pokemontype title is-3">{pokemonTypes.join(' ').toUpperCase()}</h3></div>
            <div><h4 className="pokemondetails title is-5">{pokedexEntry}</h4></div>  
            <button className="button" onClick={decideShiny}>Try your shiny luck</button>            
            <div></div>
          </div>
        </div>
      </div> }
    </section>
  )
}
export default PokeShow