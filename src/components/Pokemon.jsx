import { useState } from "react";

function Pokemon(props){

    const [name, setName] = useState(props.name);
    
    return (
        <>
            <p>
                El nombre del pokemon es: <b>{name}</b>
            </p>
            <button onClick={() => setName('charmander')}>Cambiar Nombre</button>
        </>
    );
}

export default Pokemon;