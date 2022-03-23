import styles from './TypeTag.module.css'

const TypeTag = (props) => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.tag}`}>
                {props.type}
            </div>
        </div>
    )
}

export default TypeTag;