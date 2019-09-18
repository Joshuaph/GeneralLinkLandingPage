import React, { Component } from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.scss";

const ITEMS = [
  {
    title: "Sportex",
    active: true,
    id: 0
  },
  {
    title: "other",
    active: false,
    id: 1
  }
];

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      items: ITEMS
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    //for (var el of ITEMS) el.active === true && this.props.setType(el.title);
  }

  //
  handleEvent(id) {
    this.setState(prevState => {
      const updatedList = prevState.items.map(itm => {
        if (itm.id === id && !itm.active) {
          itm.active = true;
          this.props.setType(itm.title);
        } else if (itm.id !== id && itm.active) itm.active = false;
        else;
        return itm;
      });

      return { items: updatedList };
    });
  }

  render() {
    //create array of navbaritems
    const navItems = this.state.items.map(item => <NavbarItem key={item.id} data={item} handler={this.handleEvent} />);

    return <div id={styles.Navbar}>{navItems}</div>;
  }
}

export default Navbar;
