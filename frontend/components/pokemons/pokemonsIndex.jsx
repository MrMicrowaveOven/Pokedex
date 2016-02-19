var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var PokemonIndexItem = require('./PokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return {pokemons: PokemonStore.all()};
  },

  _onChange: function(){
    this.setState({pokemons: PokemonStore.all()});
  },

  componentDidMount: function(){
    this.token = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.token.remove();
  },

  render: function(){
    var allPokemon = this.state.pokemons.map(function(pokemon, i) {
      return (<PokemonIndexItem pokemon={pokemon} key={i}/>);
    });


    return(
      <div>
        {allPokemon}
      </div>
    );
  }

});

module.exports = PokemonsIndex;
