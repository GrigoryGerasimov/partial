import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

const Button = ({ children, ...rest }) => {
    return (
        <button className={styles.btn} {...rest}>{children}</button>
    );
};

export default Button;

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
