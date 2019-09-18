import React, { Component } from "react";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.scss";

const ITEMS = [
  {
    title: "Sportex",
    active: true
  },
  {
    title: "other",
    active: false
  }
];

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: ITEMS.map((item, index) => <NavbarItem key={index} data={item} handler={this.handleEvent} id={index} />)
    });

    for (let el of ITEMS) el.active === true && this.props.setType(el.title);
  }

  handleEvent(indx) {
    let newArr = this.state.items;
    for (let el of newArr) {
      if (el.props.id !== indx) el.props.data.active = false;
    }
    this.setState({ items: newArr });

    //alert("Sportex is:" + this.state.items[0].props.data.active + "N Other is:" + this.state.items[1].props.data.active);
  }

  render() {
    return <div id={styles.Navbar}>{this.state.items}</div>;
  }
}

export default Navbar;
