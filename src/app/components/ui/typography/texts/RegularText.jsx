import React from "react";
import PropTypes from "prop-types";

export const RegularText = ({ children }) => {
    return (
        <p>{children}</p>
    );
};

RegularText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
