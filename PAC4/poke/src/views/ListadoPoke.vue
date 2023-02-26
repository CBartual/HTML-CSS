<script setup>
import {ref, onMounted, computed } from 'vue';
import PokeCards from '../components/PokeCards.vue';
import myAPI from '../services/services.js';
const search = ref(""); 
const pokemons = ref([]);

for (let i = 0; i < 10; i++) {
  myAPI.getPokemon(Math.round(Math.random() * 800)).then(result => {
    pokemons.value.push(result.data);
  });
}







onMounted(() => {
  console.log("Mounted");

  });

const filteredPokemons = computed(() => {
  return pokemons.value.filter(pokemon => pokemon.name.includes(search.value));
});


</script>

<template>
  <div id="app">
    <div style="width: 100%;">

  Filtrar por nombre: 
  <input type="text" v-model="search" />    
  <p>Debug Value: {{ search }}</p>

      </div>
      <br>
    <PokeCards :key="pokemon.name" v-for="pokemon in filteredPokemons" :pokemon="pokemon"/>
  </div>
</template>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}


</style>
