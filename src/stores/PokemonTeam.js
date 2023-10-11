import { defineStore } from 'pinia';

import pokemonEmptyImage from '@/assets/pokemon_empty.png'

const MAX_POKEMON_TEAM = 6;

const EMPTY_POKEMON = {
	name: 'Empty',
	image: pokemonEmptyImage
};

export const useTeamStore = defineStore({
	id: 'team',
	state: () => ({
		pokemonTeamList: [],
		emptyPokemonTeamList: new Array(MAX_POKEMON_TEAM).fill(EMPTY_POKEMON)
	}),
	getters: {
		getPokemonTeamList(state) {
			return state.pokemonTeamList;
		}
	},
	actions: {
		addPokemon(pokemon) {
			if (this.pokemonTeamList.length == MAX_POKEMON_TEAM) {
				alert("you can't add more than 6 pokemon");
				return;
			}
			this.pokemonTeamList.push(pokemon);
			this.emptyPokemonTeamList.pop();
		},
		removePokemon(index) {
			this.pokemonTeamList.splice(index, 1);
			this.emptyPokemonTeamList.push(EMPTY_POKEMON);
		},
	}
});
