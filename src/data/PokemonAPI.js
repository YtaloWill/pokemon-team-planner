import axios from "axios"

const POKEMON_API = import.meta.env.VITE_POKEMON_API

export const getPokemonList = async (limit, offset) => {
	const pokemonList = await axios.get(`${POKEMON_API}/pokemon`, {
		params: {
			limit,
			offset
		}
	})
	return pokemonList.data.results
}

export const getPokemon = async (url) => {
	const pokemon = await axios.get(url)
	return pokemon.data
}