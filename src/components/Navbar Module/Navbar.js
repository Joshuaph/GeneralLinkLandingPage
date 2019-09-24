import React, { useEffect } from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.scss";

const ITEMS = [
    {
        title: "All",
        active: true,
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
    let navItems = [];

    function handleEvent(id) {
        items.map(item => {
            if (item.id === id) {
                if (!item.active) item.active = true;
            } else item.active = false;

            return item;
        });

        mapItems();
    }

    function mapItems() {
        navItems = items.map(item => <NavbarItem key={item.id} data={item} handler={handleEvent} />);
    }

    mapItems();
    console.log("I ran here");
    return (
        <div id={styles.Navbar}>
            {navItems}
            {console.log("I rendered")}
        </div>
    );
}

export default Navbar;
