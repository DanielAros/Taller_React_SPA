import { useState } from "react";
import {Card, Button} from 'react-bootstrap';
import styles from "./Pokemon.module.css"

function Pokemon(props){

    const [pokemon, setPokemon] = useState(props);
    
    return (
        <Card className={`${styles.card}`}>
            <Card.Body>
                <Card.Title>Pokemon</Card.Title>
                <Card.Text>
                    <b>Name:</b> {props.name}
                </Card.Text>
                <Card.Text>
                    <b>Base experience:</b> {props.base_experience}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Pokemon;