/* eslint-disable default-case */
import React from "react";
import styles from "./Navbar.module.scss";

function NavbarItem(props) {
  return (
    <div className={`${styles.navbarItem} ${props.data.active ? styles.current : styles.inactive}`} onClick={() => props.handler(props.data.id)}>
      <h3>{props.data.title}</h3>
    </div>
  );
}

export default NavbarItem;
