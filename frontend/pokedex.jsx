var React = require('react');
var ReactDOM = require('react-dom');
var IndexPokemon = require('./util/apiUtil');
var PokemonStore = require('./stores/pokemon');
var PokemonActions = require('./actions/pokemonActions');
var PokemonConstants = require('./constants/pokemonConstants');
var PokemonsIndex = require('./components/pokemons/pokemonsIndex');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <pokedex>
      <PokemonsIndex/>
    </pokedex>, document.getElementById('root')
  );
} );

window.IndexPokemon = IndexPokemon;
window.PokemonStore = PokemonStore;
window.PokemonActions = PokemonActions;
