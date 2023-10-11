<script setup>
import Card from './Card.vue';

import { useTeamStore } from '../stores/PokemonTeam'
import { storeToRefs } from 'pinia'

const team = useTeamStore()

const { pokemonTeamList, emptyPokemonTeamList } = storeToRefs(team)

</script>

<template>
	<section id="team-panel">
		<section id="team-title">
			<h2>Your team</h2>
		</section>
		<section id="team">
			<ul id="team-pokemon">
				<Card
					v-for="(pokemon, index) in pokemonTeamList"
					@click="team.removePokemon(index)"
					:key="`${pokemon.name}-${index}`"
					:name="pokemon.name"
					:image="pokemon.image"
				>
				</Card>
				<Card
					v-for="(pokemon, index) in emptyPokemonTeamList"
					:key="`${pokemon.name}-${index}`"
					:name="pokemon.name"
					:image="pokemon.image"
				>
				</Card>
			</ul>
		</section>
	</section>

</template>

<style scoped>
#team-panel {
	background-color: var(--vt-c-white-mute);
}

#team-title {
	text-align: center;
	font-size: 30px;
	margin-bottom: 10px;
}

#team-pokemon {
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(6, 15em);
	justify-content: center;
	row-gap: 30px;
	margin: 0 auto 3em auto;
	padding: 0;


}

@media screen and (max-width: 1370px) {
	#team-pokemon {
		display: grid;
		grid-template-columns: repeat(3, 15em);
	}
}

</style>
