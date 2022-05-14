import { useParams, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPokemon, updatePokemon} from "../../store/actions/index"
import styles from "./Update.module.css"

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { id } = useParams();
    const {selectedPokemon: pokemon} = useSelector((state) => state.pokemons);
    const [formData, setFormData] = useState({
        name: "",
        base_experience: "",
        height: "",
        weight: "",
        sprite: "",
    });

    useEffect(() => {
        dispatch(fetchPokemon(id));
    }, [dispatch, id]);

    useEffect(() => {
        if(pokemon) {
            delete pokemon.id;
            setFormData(pokemon)
        }
    }, [pokemon]);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            navigate("/");
            dispatch(updatePokemon(id, formData));
            } catch (err) {
            console.log(err);
        }
    };
    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.containerLeft}`}>
                <h1>Editar pokemon</h1>
            </div>
            <div className={`${styles.containerRigth}`}>
                <div className={`${styles.containerForm}`}>
                    <Form
                        handleSubmit={handleSubmit}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
            </div>
        </div>
    );
}

export default Update;
