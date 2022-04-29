import '../../App.css';
import Pokemon from '../../components/Pokemon';
import { useEffect, useState, useCallback} from 'react';
import styles from "../../components/App.module.css"
import axios from '../../utils/axios';
import { useSelector, useDispatch } from "react-redux";
import {fetchPokemons} from "../../store/actions/index"


function Dashboard() {
  const dispatch = useDispatch();
  // const [pokemons, setPokemons] = useState([]);
  // const [backUpPokemons, setBackupPokemons] = useState([]);
  const {list:pokemons} = useSelector((state) => state.pokemons);
  console.log(pokemons);
  
  useEffect(() => {
    try {
      dispatch(fetchPokemons())
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
  
  // const searchTypePokemon = (event) => {
  //   let pokemonArray = [...backUpPokemon];
  //   pokemonArray = pokemonArray.filter( (pokemon) => {
  //     for(let i = 0; i < pokemon.types.length; i++){
  //       if(pokemon.types[i].type.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1){
  //         return pokemon;
  //       }
  //     }
  //   });

  //   setPokemon(pokemonArray);
  // }

  const debaunce = (callback, wait) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, wait)
    }
  }

  return (
    <div className={`${styles.container}`}>
      <form>
        <input 
          type="text" 
          placeholder='Ingrese el nombre del pokemon'
          name='name'
          onKeyUp={debaunce(function(e) {
            const filter = {[e.target.name]: e.target.value.trim()};
            dispatch(fetchPokemons(filter))
          }, 500)}
        />
      </form>
      <div className={`${styles.cards}`}>
        {
          pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon}/>)
        }
      </div>
    </div>
  );
}

export default Dashboard;
