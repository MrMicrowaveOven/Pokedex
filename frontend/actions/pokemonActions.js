var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');
var PokemonStore = require('../stores/pokemon');


var PokemonActions = {
  receiveAllPokemons: function(pokemon){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemon
    });
  }
};

module.exports = PokemonActions;
