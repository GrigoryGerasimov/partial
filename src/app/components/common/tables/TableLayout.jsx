import React from "react";
import { BigTitle, ItalicText } from "../../ui/typography";
import { TableHeader } from "./TableHeader.jsx";
import PropTypes from "prop-types";

export const TableLayout = ({ captionTitle, children }) => {
    if (!React.Children.count(children)) {
        return (
            <BigTitle>
                <ItalicText>No entries</ItalicText>
            </BigTitle>
        );
    };
    return (
        <table className="w-full border-collapse text-center my-5 mx-auto">
            <caption className="mb-6">
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
