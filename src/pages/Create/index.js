import Form from "../../components/Form";
import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "../../utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPokemon } from "../../store/actions";
import styles from "./Create.module.css"

const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        base_experience: "",
        height: "",
        weight: "",
        sprite: "",
    });

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
        //   await axios.post("/pokemons", formData);
            dispatch(createPokemon(formData))
            navigate("/");
        } catch (err) {
          console.log(err);
        }
    };


    return(
        <div className={`${styles.container}`}>
            <div className={`${styles.containerLeft}`}>
                <h1>Crear pokemon</h1>
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
    )
}

export default Create;