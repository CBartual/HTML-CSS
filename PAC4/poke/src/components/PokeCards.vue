<script setup>
const props = defineProps(['pokemon']);

console.log(props.pokemon);


</script>

<template>
<div class="card">
        <div class="name">{{ props.pokemon.name }}</div>
        <div> Número Pokédex: {{ props.pokemon.id }}</div>
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`" alt="pokemon" />
        <div> Peso: {{ props.pokemon.weight }}</div>
        <div> Altura: {{ props.pokemon.height }}</div>
        <div class="types"> Tipos: 
            <ul>
                <li v-for="type in props.pokemon.types" :key="type.type.name">
                 {{ type.type.name }}
                </li>
            </ul>
        </div>
        <div> <button @click="$router.push({ name: 'Pokemon', params: { id: props.pokemon.id } })">Ver más</button> </div>
    </div>
  </template>

<style scoped>
    .card {

        padding: 0.5rem;
        border: 2px solid #333;
        margin: 1rem;
        border-radius: 20px 20px 20px 20px;
        max-width: 200px;
    }

    .name {
    text-transform: capitalize;
        font-weight: bold;
    padding: 0.5rem 0;

  }

  .types {

    text-transform: capitalize;
    padding: 2rem 0;
    }

ul {
  list-style: none;
  padding: 0;
  margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}


    </style>
  
