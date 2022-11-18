import React from "react";

export const TableFooter = ({ children }) => {
    return (
        <tfoot>{children}</tfoot>
    );
};

TableFooter.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
