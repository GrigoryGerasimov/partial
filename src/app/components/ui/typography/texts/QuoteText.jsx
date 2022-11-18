import React from "react";
import PropTypes from "prop-types";

const quoteTextStyles = {
    width: "fit-content",
    margin: "0 auto",
    padding: "40px 100px",
    borderLeft: "1px dashed rgba(120, 67, 31, 0.85)",
    borderRight: "1px dashed rgba(120, 67, 31, 0.85)"
};

export const QuoteText = ({ children }) => {
    return (
        <blockquote style={quoteTextStyles}>
            {children}
        </blockquote>
    );
};

QuoteText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
