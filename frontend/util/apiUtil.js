var PokemonActions = require('../actions/pokemonActions');
var AppDispatcher = require('../dispatcher/Dispatcher');

var IndexPokemon = {
  fetchAllPokemons: function(){
    $.ajax({
    url: '/api/pokemon',
    method: 'GET',

    success: function (pokemonObjects) {
      PokemonActions.receiveAllPokemons(pokemonObjects);
    }
  });
}};

module.exports = IndexPokemon;
