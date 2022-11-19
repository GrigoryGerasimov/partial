import React from "react";
import PropTypes from "prop-types";

export const QuoteText = ({ children }) => {
    return (
        <blockquote className="w-max my-0 mx-auto py-10 px-28 border-l-1 border-r-1 border-dashed border-yellow-900 border-opacity-90">
            {children}
        </blockquote>
    );
};

QuoteText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
