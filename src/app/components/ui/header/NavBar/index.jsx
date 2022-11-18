import React from "react";
import { NavLink } from "react-router-dom";
import { UnorderedList } from "../../typography";
import { navlinks } from "./navlinks.js";
import PropTypes from "prop-types";

const NavBar = ({ navbarClass, navlinkClass }) => {
    return (
        <UnorderedList listClass={navbarClass}>
            {navlinks.map(({ id, key, pathTo, label }) => (
                <NavLink key={`${id}_${key}`} to={pathTo} className={navlinkClass}>
                    {label}
                </NavLink>
            ))}
        </UnorderedList>
    );
};

export default NavBar;

NavBar.propTypes = {
    navbarClass: PropTypes.string,
    navlinkClass: PropTypes.string
};
