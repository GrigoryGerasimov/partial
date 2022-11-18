import React from "react";
import PropTypes from "prop-types";

export const MainTitle = ({ children }) => {
    return (
        <h1>{children}</h1>
    );
};

MainTitle.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
