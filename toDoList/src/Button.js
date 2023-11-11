import PropTypes from "prop-types";
import styles from "./button.module.css";

function Button({text, onClick}){
    return(
        <button 
        className={styles.btn}
        onClick={onClick}
        >{text}</button>
    )
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
};
export default Button;