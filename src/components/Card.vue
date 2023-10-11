<script setup>
defineProps({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
})

</script>

<template>
	<li 
		class="card"
	>
		<span>{{name}}</span>
		<img :src="image" :alt="name + ' sprite'">
	</li>
</template>

<style scoped>

li {
	list-style: none;
	width: 10em;
	height: 11em;
	display: grid;
	row-gap: 10px;
}

span {
	text-align: center;
	text-transform: capitalize;
}

img {
	width: 5em;
}

.card {
	display: grid;
	background-color: var(--vt-c-white-soft);
	width: fit-content;
	padding: 30px;
	border-radius: 20%;
	margin: auto;
	box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
}

.card:hover {
	cursor: pointer;
	transform: translateY(-3px)
}

</style>
