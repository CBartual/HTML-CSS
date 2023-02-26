<script setup>
import { RouterLink, RouterView } from 'vue-router';
import{ watch } from 'vue';
import { ref, onMounted, computed } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import AppFooter from './components/AppFooter.vue'



//Check si hay tema en local storage, si no hay, lo crea y lo pone a light
if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'light');
}
const theme = localStorage.getItem('theme');

//cambia el tema al cambiar el radio button
watch(theme, () => {
  if (theme === 'light') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
});

//Cambia el tema
const changeTheme = () => {
  if (theme === 'light') {
    localStorage.setItem('theme', 'dark');
    document.body.className = 'dark';
  } else {
    localStorage.setItem('theme', 'light');
    document.body.className = 'light';
  }
};

//Leer el tema al cargar la página del local storage
onMounted(() => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.body.className = theme;
  }
});

const isDark = computed(() => theme.value === 'dark');
const isLight = computed(() => theme.value === 'light');



</script>

<template>
  <main class="theme">
    <header>
      <img alt="Vue logo" src="@/assets/logo.svg" height="50">
      <p>PAC4 - Pokédex usando Vue 3.</p>
      <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><RouterLink to="/pokemon">Listado Pokémon </RouterLink></li>
        <div class="settings">
        <li>
          
        <input type="radio" id="light" name="theme" value="light" @change="changeTheme" v-model="theme">
        <label for="light"> Light </label></li>
    <li><input type="radio" id="dark" name="theme" value="dark" @change="changeTheme" v-model="theme">
        <label for="dark"> Dark</label></li>
      </div>
      </ul>
    </nav>
    </header>
  <RouterView />
  <AppFooter />
  </main>
</template>

<style lang="scss">

header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;
    width: 100%;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }

    .dark {
        background-color: #181818;
        color: #eee;
    }
    .light {
        background-color: #eee;
        color: #333;
    }

:root {
  --bg-color: #eee;
  --text-color: #111;

}

@media (min-width: 1024px) {
  .theme {
    display: grid;
    place-items: center;
  }

  #app {
    display: grid;
    padding: 0 0;
  }
}

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    margin-top: 0px;


  }


</style>