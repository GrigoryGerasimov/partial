import React from "react";
import { BigTitle, ItalicText } from "../../ui/typography";
import { TableHeader } from "./TableHeader.jsx";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

export const TableLayout = ({ captionTitle, children }) => {
    if (!React.Children.count(children)) {
        return (
            <BigTitle>
                <ItalicText>No entries</ItalicText>
            </BigTitle>
        );
    };
    return (
        <table className={styles.table}>
            <caption className={styles.table__caption}>
                <BigTitle>{captionTitle}</BigTitle>
            </caption>
            <TableHeader/>
            {React.Children.toArray(children).map(child => {
                return React.cloneElement(child);
            })}
        </table>
    );
};

TableLayout.propTypes = {
    captionTitle: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
