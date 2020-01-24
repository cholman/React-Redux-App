import React from 'react';
import { connect } from 'react-redux';

//actions
import { fetchPokemon } from '../actions';

const PokeCard = props => {
    return (<div>
                <button onClick={props.fetchPokemon}>Get Pokemon</button>
                {!props.pokemon && !props.isLoading && (<h2> hello pokemon </h2>
                )}
                {props.isLoading && (
                    <h1>lonely load...</h1>
                )}
                {props.pokemon && !props.isLoading && <h2>hello {props.pokemon.name}</h2>}
            </div>)
}


const mapStateToProps = state => {
    console.log(state, "state from pokecard");
    return {
        isLoading: state.isLoading,
        pokemon: state.pokemon,
        error: state.error
    }
    
}
export default connect(mapStateToProps, { fetchPokemon })(PokeCard);