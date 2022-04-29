import { useState } from "react";
import {Card, Button} from 'react-bootstrap';
import styles from "./Pokemon.module.css"
import TypeTag from "./TypeTag";
import { NavLink } from "react-router-dom";
import axios from "../utils/axios";
import { useDispatch } from "react-redux";
// import { fetchPokemons, removePokemon } from "../store/actions";
import { removePokemon } from "../store/actions"

function Pokemon({ pokemon }){    
    const dispatch = useDispatch();
    // console.log(props.type);

    const deletePokemon = async () => {
        dispatch(removePokemon(pokemon.id));
        alert("Se ha eliminado el pokemon exitosamente!");
    };

    return (
        <div className={`${styles.card}`}>
            <img src={pokemon.sprite} style={{width: '96px'}}/>
            <h4>{pokemon.name}</h4>
            <p><b>Base Experience: </b> {`${pokemon.base_experience}`}</p>
            <p><b>Height: </b> {`${pokemon.height}`}</p>
            <p><b>Weight: </b> {`${pokemon.weight}`}</p>
            {/* <b>Type:</b> */}
            {/* <div className={`${styles.containerTags}`}>
                {
                    props.type.map( t => <TypeTag type={t.type.name}/>)
                }
            </div> */}
            <div>
                <Button variant="danger" onClick={deletePokemon} className={`${styles.buttons}`}>
                    Eliminar
                </Button>
                <Button className={`${styles.buttons}`}>
                    <NavLink to={`/actualizar/${pokemon.id}`} className={`${styles.navLink}`} style={{color: 'white'}}>
                        Actualizar
                    </NavLink>
                </Button>
            </div>
        </div>
    );
}

export default Pokemon;