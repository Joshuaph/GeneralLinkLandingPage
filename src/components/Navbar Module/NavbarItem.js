/* eslint-disable default-case */
import React, { Component } from "react";
import styles from "./Navbar.module.scss";

class NavbarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.data.title,
      active: this.props.data.active
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidUpdate() {
    this.setState({
      title: this.props.data.title,
      active: this.props.data.active
    });
  }

  handleEvent(e) {
    !this.state.active && this.setState({ active: true });
    this.props.handler(this.props.id);
  }

  render() {
    return (
      <div className={`${styles.navbarItem} ${this.state.active && styles.current}`} onClick={this.handleEvent}>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

export default NavbarItem;
