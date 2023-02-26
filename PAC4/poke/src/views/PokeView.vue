<script setup>
import {ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import PokemonCard from '../components/PokemonCard.vue';
import myAPI from '../services/services.js';



const query = ref([])

const pokemons = ref([])
const pokemon = ref([])
const route = useRoute();
const router = useRouter();

const id = route.params.id;
console.log("Id pasada por parametro: " + id);
myAPI.getPokemon(id).then((response) => {
  pokemon.value = response.data;
});
</script>
<template>
  <div class="pokeview">
      <section class="cards">
        <PokemonCard :info="pokemon" :id="pokemon.id" />

      </section>

  </div>
</template>

