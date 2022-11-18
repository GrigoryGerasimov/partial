import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

export const TableRow = ({ children }) => {
    return (
        <tr className={styles.table__row}>
            {children}
        </tr>
    );
};

TableRow.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
