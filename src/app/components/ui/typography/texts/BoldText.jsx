import React from "react";
import PropTypes from "prop-types";

export const BoldText = ({ children }) => {
    return (
        <strong>{children}</strong>
    );
};

BoldText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
