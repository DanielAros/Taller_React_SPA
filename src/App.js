import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon.jsx';
import {Button} from 'react-bootstrap';
import Pokemons from './components/Pokemons.json';
import { useState } from 'react';
import styles from "./components/App.module.css";

function App() {

  const [pokemon, setPokemon] = useState(Pokemons);
 
  const agregarPokemon = () => {
    const nuevoPokemon = {}
    nuevoPokemon.name = prompt("Ingresa el nombre del pokemon: ");
    nuevoPokemon.base_experience = prompt("Ingresa la experiencia: ");
    setPokemon((pokemon) => [...pokemon, nuevoPokemon]);
    alert("numero total de pokemons: " + (pokemon.length+1));
  }

  return (
    <div className={`${styles.container}`}>
      <header>
        <h1>POKEDEX</h1>
      </header>
      <div className={`${styles.cards}`}>
        {
          pokemon.map((item) => <Pokemon name={item.name} base_experience={item.base_experience}/>)
        }
      </div>
      <Button variant="primary" onClick={agregarPokemon}>Agregar Pokemon</Button>
    </div>
  );
}

export default App;
