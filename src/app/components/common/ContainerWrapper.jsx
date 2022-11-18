import React from "react";
import PropTypes from "prop-types";

export const ContainerWrapper = ({ wrapperClass, children }) => {
    return (
        <div className={wrapperClass}>
            {children}
        </div>
    );
};

ContainerWrapper.propTypes = {
    wrapperClass: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
