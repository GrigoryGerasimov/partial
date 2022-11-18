import React from "react";
import PropTypes from "prop-types";

export const AverageTitle = ({ children }) => {
    return (
        <h4>{children}</h4>
    );
};

AverageTitle.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
