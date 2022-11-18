import React from "react";
import { NavLink } from "react-router-dom";
import { MainTitle } from "../../typography";
import PropTypes from "prop-types";

const NavLogo = ({ logoClass }) => {
    return (
        <MainTitle>
            <NavLink to="/" className={logoClass}>
                T.E.A.M.
            </NavLink>
        </MainTitle>
    );
};

export default NavLogo;

NavLogo.propTypes = {
    logoClass: PropTypes.string
};
