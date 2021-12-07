import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'

export function getAllPokemon() {
  return axios.get(`${baseUrl}/pokemon`,{
    params: {
      offset: 0,
      limit: 898,
    },
  })
}

export function decideShiny (isShiny) {
  const randomNumber = Math.floor(Math.random() * 100)
  if (randomNumber === 99) {
    isShiny = true
  }
  console.log(randomNumber)
  return isShiny 
}

