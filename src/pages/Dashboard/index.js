import './App.css';
import Pokemon from '../../src/components/Pokemon.jsx';
import { useEffect, useState } from 'react';
// import styles from "./components/App.module.css";
import styles from "../../src/components/App.module.css"

import axios from 'axios';
import searchIcon from '../../src/assets/search.png'

function Dashboard() {

  const [pokemon, setPokemon] = useState([]);
  const [backUpPokemon, setBackupPokemon] = useState([]);

  useEffect(() => {
    try{
      const fetchPokemons = async() => {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );

        const fetchPokemonData = async(Pokemon) => {
          const pokemonData = await axios.get(
            `${Pokemon.url}`
          );
          setPokemon((item) => [...item, pokemonData.data]);
          setBackupPokemon((item) => [...item, pokemonData.data]);
        }

        response.data.results.forEach((pokemon) =>{
          fetchPokemonData(pokemon);
        });
      }
      fetchPokemons();
    }catch( err ){
      console.log(err);
    }
  }, []);
  
  const searchTypePokemon = (event) => {
    let pokemonArray = [...backUpPokemon];
    pokemonArray = pokemonArray.filter( (pokemon) => {
      for(let i = 0; i < pokemon.types.length; i++){
        if(pokemon.types[i].type.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1){
          return pokemon;
        }
      }
    });

    setPokemon(pokemonArray);
  }

  return (
    <div className={`${styles.container}`}>
      <header>
        <h1>POKEDEX</h1>
        <input onChange={searchTypePokemon} placeholder='Tipo de pokemon'/>
      </header>
      <div className={`${styles.cards}`}>
        {
          pokemon.map((item) => <Pokemon key={item.id} name={item.name} url={item.sprites.front_default} type={item.types}/>)
        }
      </div>
    </div>
  );
}

export default Dashboard;
