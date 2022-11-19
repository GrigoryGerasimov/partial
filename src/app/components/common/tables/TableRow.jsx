import React from "react";
import PropTypes from "prop-types";

export const TableRow = ({ children }) => {
    return (
        <tr className="transition-all hover:bg-red-400 hover:bg-opacity-95 hover:text-white hover:text-opacity-95">
            {React.Children.toArray(children).map(child => {
                let config = {};
                switch (child.type) {
                    case "td": {
                        config = {
                            ...child.props,
                            className: "p-5"
                        };
                        break;
                    }
                    default: {
                        config = {
                            ...child.props
                        };
                        break;
                    }
                }
                return React.cloneElement(child, config);
            })}
        </tr>
    );
};

TableRow.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
