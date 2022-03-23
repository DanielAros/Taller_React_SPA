import { useState } from "react";
import {Card, Button} from 'react-bootstrap';
import styles from "./Pokemon.module.css"
import TypeTag from "./TypeTag";

function Pokemon(props){    
    // console.log(props.type);
    return (
        <div className={`${styles.card}`}>
            <img src={props.url} style={{width: '96px'}}/>
            <h4>{props.name}</h4>
            <b>Type:</b>
            <div className={`${styles.containerTags}`}>
                {
                    props.type.map( t => <TypeTag type={t.type.name}/>)
                }
            </div>
        </div>
    );
}

export default Pokemon;