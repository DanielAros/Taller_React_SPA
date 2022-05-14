import styles from "./Form.module.css"

const FormPokemon = ({ formData, setFormData, handleSubmit }) => {

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return(
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <label id="name">Nombre:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ingresa el nombre"
          onChange={handleChange}
          value={formData.name}
          className={`${styles.input}`}
        />
        <label>Base experience:</label>
        <input
          type="text"
          placeholder="Ingresa el base experience"
          name="base_experience"
          onChange={handleChange}
          value={formData.base_experience}
          className={`${styles.input}`}
        />

        <label>Height:</label>
        <input
          type="text"
          name="height"
          placeholder="Ingresa el height"
          onChange={handleChange}
          value={formData.height}
          className={`${styles.input}`}
        />

        <label>Weight:</label>
        <input
          type="text"
          name="weight"
          placeholder="Ingresa el weight"
          onChange={handleChange}
          value={formData.weight}
          className={`${styles.input}`}
        />

        <label>Sprite:</label>
        <input
          type="text"
          name="sprite"
          placeholder="Ingresa el sprite"
          onChange={handleChange}
          value={formData.sprite}
          className={`${styles.input}`}
        />
        <button type="submit" className={`${styles.button}`}>
          Submit
        </button>
      </form>
    );
}

export default FormPokemon;