var Store = require ("flux/utils").Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');
var PokemonStore = new Store(AppDispatcher);

var _pokemons = {};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  this.__emitChange();
};

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
  case 'POKEMONS_RECEIVED':
    PokemonStore.resetPokemons(payload.pokemons);
    break;
  }

};

PokemonStore.all = function(){
  var all = [];
  Object.keys(_pokemons).forEach(function(key){
    all.push(_pokemons[key]);
  });
  return all;
};

module.exports = PokemonStore;
