import React from "react";
import NavBar from "../NavBar";
import NavLogo from "../NavLogo";
import styles from "../index.module.scss";

const Header = () => {
    return (
        <header className={styles.header_container}>
            <NavLogo logoClass={styles.navlogo}/>
            <NavBar navbarClass={styles.navlink_list} navlinkClass={styles.navlink_list__list_item}/>
        </header>
    );
};

export default Header;
