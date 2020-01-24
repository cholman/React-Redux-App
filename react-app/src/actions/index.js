//actions
import axios from 'axios';

export const FETCHING_ACTIVITY_START = 'FETCHING_ACTIVITY_START';
export const FETCHING_ACTIVITY_SUCCESS = 'FETCHING_ACTIVITY_SUCCESS';
export const FETCHING_ACTIVITY_FAILURE = 'FETCHING_ACTIVITY_FAILURE';
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max) )
}
export const fetchPokemon = () => dispatch => {
    const randomPoke = getRandomInt(150);
    console.log(randomPoke, "randomPoke");
    dispatch({ type: FETCHING_ACTIVITY_START });
    axios
        .get(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`)
        .then(res => {
            console.log("success", res.data)
            dispatch({ type: FETCHING_ACTIVITY_SUCCESS, payload: res.data});
        })
        .catch(err => {
            console.log("error", err.response)
            dispatch({ type: FETCHING_ACTIVITY_FAILURE, payload: err.response });
        });
}