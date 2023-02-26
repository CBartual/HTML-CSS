<script setup>
import {ref, onMounted } from 'vue';

import PokemonCard from '../components/PokemonCard.vue';
import myAPI from '../services/services.js';

const pokemons = ref([])

const pokemons_local = [
  {id:1, name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'},
  {id:2, name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/'},
  {id:3, name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/'},
  {id:4, name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/'},
  {id:5, name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/'},
  {id:6, name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/'},
  {id:7, name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/'},
  {id:8, name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/'},
  {id:9, name: 'blastoise', url: 'https://pokeapi.co/api/v2/pokemon/9/'},
  {id:10, name: 'caterpie', url: 'https://pokeapi.co/api/v2/pokemon/10/'}
]

//crear 10 numeros aleatorios y guardarlos en un array
const randomNumbers = [];
while(randomNumbers.length < 10){
  const r = Math.floor(Math.random() * 100) + 1;
  if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
}

//crear un array con los 10 pokemons aleatorios
const pokemons_random = [];
for (let i = 0; i < randomNumbers.length; i++) {
  myAPI.getPokemon(randomNumbers[i]).then((response) => {
    pokemons_random.push(response.data);
  });
}
//console log array de pokemons random
console.log(pokemons_random);

onMounted(() => {
      myAPI.getPokemon(1).then((response) => {
  
    pokemons.value = response.data;
  });



});

</script>
<template>
  <div class="about">
    <p> Api</p>
    <section class="cards">
      <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :info="pokemon" :id="pokemon.id" />

    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>