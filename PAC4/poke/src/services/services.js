import axios from 'axios';

const myAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

});

export default {
    getPokemonList: () => myAPI.get(`pokemon`),
    getPokemon: (id) => myAPI.get(`pokemon/${id}`),
    getPokemonSpecies: (id) => myAPI.get(`pokemon-species/${id}`),
    getPokemonEvolution: (id) => myAPI.get(`evolution-chain/${id}`),
    getPokemonType: (id) => myAPI.get(`type/${id}`),
    getPokemonAbility: (id) => myAPI.get(`ability/${id}`),
    getPokemonLocation: (id) => myAPI.get(`location/${id}`),
    getPokemonStat: (id) => myAPI.get(`stat/${id}`),
    getPokemonGender: (id) => myAPI.get(`gender/${id}`)

}
