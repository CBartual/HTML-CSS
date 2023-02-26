<script setup>
const props = defineProps(['info'])
</script>

<template>
    <article class="card">
    <div class="name">
    <h2> {{ props.info.name }} </h2></div>
    <p> Número pokédex: {{ props.info.id }} </p>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.info.id}.png`" alt="pokemon" />
    <p> Peso: {{ props.info.weight }}</p>
    <p> Altura: {{ props.info.height }}</p>
    <p> Habilidades: </p>
    <ul>
        <li v-for="ability in props.info.abilities" :key="ability.ability.name">
            {{ ability.ability.name }}
        </li>
    </ul>
    <div class="types">
    <p> <b>Tipos:</b></p>
    <ul>
        <li v-for="type in props.info.types" :key="type.type.name">
            {{ type.type.name }}
        </li>
    </ul>
    </div>
    <p>Stats :</p>
    <ul>
        <li v-for="stat in props.info.stats" :key="stat.stat.name">
            <p> {{ stat.stat.name }} : {{ stat.base_stat }} &nbsp;  </p>
        </li>
    </ul>



    <br>
    </article>
</template>

    <style scoped>
    .card {


        padding: 0.5rem;
        border: 2px solid #333;
        margin: 1rem;
        border-radius: 20px 20px 20px 20px;

        display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
    }

    .name {
    text-transform: capitalize;
        font-weight: bold;
    padding: 0.5rem 0;
    text-align: center;

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
    text-transform: capitalize;
}

li {
  padding: 0.5rem 0;
  text-transform: capitalize;
  text-align: center;
    display: inline;
    margin: 0.5rem;
    border: 1px solid #333;
    border-radius: 20px 20px 20px 20px;
    padding: 0.5rem;
}


p {
    padding: 0.5rem 0;
    text-transform: capitalize;
    text-align: center;

}

    </style>