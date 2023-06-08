import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const fetchPokemon = async () => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  const data = await result.json()

  return data
}

export const fetchPokemonById = async (id) => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  const data = await result.json()

  return data
}

export const fetchAxiosPokemon = async (params) => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto', {
    params,
  })
  return data
}

export const usePokemonById = (id) => {
  return useQuery({
    queryKey: ['a', id],
    queryFn: () => fetchPokemonById(id),
  })
}
