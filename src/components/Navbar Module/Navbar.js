import React from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.scss";

const ITEMS = [
    {
        title: "All",
        active: false,
        id: 0
    },
    {
        title: "Sportex",
        active: false,
        id: 1
    },
    {
        title: "other",
        active: false,
        id: 2
    }
];

function Navbar(props) {
    let items = ITEMS;

    const navItems = () => {
        let nA = items.map(item => {
            if (item.title === props.kind) {
                item.active = true;
            } else item.active = false;
            return item;
        });
        return nA.map(item => <NavbarItem key={item.id} data={item} handler={props.setKind} />);
    };

    return <div id={styles.Navbar}>{navItems()}</div>;
}

export default Navbar;
