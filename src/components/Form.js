import { Button, Form } from "react-bootstrap";

const FormPokemon = ({ formData, setFormData, handleSubmit }) => {

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return(
        <>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ingresa el nombre"
              onChange={handleChange}
              value={formData.name}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Base experience:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el base experience"
              name="base_experience"
              onChange={handleChange}
              value={formData.base_experience}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Height:</Form.Label>
            <Form.Control
              type="text"
              name="height"
              placeholder="Ingresa el height"
              onChange={handleChange}
              value={formData.height}
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Weight:</Form.Label>
            <Form.Control
              type="text"
              name="weight"
              placeholder="Ingresa el weight"
              onChange={handleChange}
              value={formData.weight}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sprite:</Form.Label>
            <Form.Control
              type="text"
              name="sprite"
              placeholder="Ingresa el sprite"
              onChange={handleChange}
              value={formData.sprite}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
}

export default FormPokemon;