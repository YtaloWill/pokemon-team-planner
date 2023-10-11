<script setup>
import Card from './Card.vue';
import { useTeamStore } from '../stores/PokemonTeam'

const team = useTeamStore()

defineProps({
	pokemonList: {
		type: Array,
		required: true
	}
})

</script>

<template>
	<ul id="card-panel">
		<Card v-for="(pokemon, index) in pokemonList" :key="`${pokemon.name}-${index}`" :name="pokemon.name"
			:image="pokemon.image" @click="team.addPokemon(pokemon)">
		</Card>
	</ul>
</template>

<style scoped>
#card-panel {
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(5, 15em);
	justify-content: center;
	row-gap: 30px;
	margin: 0 auto;
	padding: 0;
}

@media screen and (max-width: 1120px) {
	#card-panel {
		display: grid;
		grid-template-columns: repeat(3, 15em);
	}
}
</style>
