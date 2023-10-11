<script setup>
import { ref } from 'vue'

import Header from './Header.vue'
import Team from './Team.vue'
import CardPanel from './CardPanel.vue'

import { getPokemon, getPokemonList } from '../data/PokemonAPI'

const getCardInfo = async () => {
	const pokemonBaseList = await getPokemonList(100000, 0)
	for(let i = 0; i<pokemonBaseList.length;i++) {
		const pokemonBase = pokemonBaseList[i]
		const pokemonFull = await getPokemon(pokemonBase.url)
		pokemonList.value.push({
			id: pokemonFull.id,
			name: pokemonFull.name,
			image: pokemonFull.sprites.front_default
		})
	};
}

const pokemonList = ref([])
getCardInfo()

</script>

<template>
  <Header>
  </Header>
  <main>
		<Team></Team>
		<CardPanel id="card-panel" :pokemonList="pokemonList"></CardPanel>
  </main>
</template>

<style scoped>
header {
	text-align: center;
	width: 100vw;
	margin: 0;
	padding: 0;
}

main {
	display: grid;
	row-gap: 20px;
	justify-content: center;
	width: 100vw;
}

#card-panel {
	width: 1rem;
}

</style>
