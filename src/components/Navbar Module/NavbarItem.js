/* eslint-disable default-case */
import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

function NavbarItem(props) {
    return (
        <div className={`${styles.navbarItem} ${props.data.active ? styles.current : styles.inactive}`} onClick={() => props.handler(props.data.id)}>
            <Link className={`${styles.navbarItem} ${props.data.active ? styles.current : styles.inactive}`} to={`/${props.data.title}`}>
                <h3>{props.data.title}</h3>
            </Link>
        </div>
    );
}

export default NavbarItem;
