var React = require('react');


var PokemonIndexItem = React.createClass({
  render: function(){
    return(
      <li key={this.props.pokemon.id} className='poke-list-item'>
        {this.props.pokemon.name} is type {this.props.pokemon.poke_type}</li>
    );
  }
});

module.exports = PokemonIndexItem;
