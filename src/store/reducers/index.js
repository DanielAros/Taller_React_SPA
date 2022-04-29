import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer"

const reducers = combineReducers({
    pokemons: pokemonReducer
});

export default reducers;