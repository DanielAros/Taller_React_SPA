import { useParams, useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import Form from "../../components/Form";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import {fetchPokemon, updatePokemon} from "../../store/actions/index"

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
            // await axios.put(`/pokemons/${id}`, formData);
            navigate("/");
            dispatch(updatePokemon(id, formData));
            } catch (err) {
            console.log(err);
        }
    };
    return(
        <Container>
            <h1 className="white-text m-4 text-center">Editar pokemon</h1>
            <Row className={"justify-content-center"}>
                <Col xs={6}>
                <Card className="p-4">
                    <Form
                        handleSubmit={handleSubmit}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Update;
