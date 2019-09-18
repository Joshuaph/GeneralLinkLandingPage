import React, { Component } from "react";
import Card from "./Card";
import DATA from "../../data";
import styles from "./Card.module.scss";

class CardContainer extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      cards: DATA.map((item, index) => <Card key={index} item={item} />)
    });
  }

  render() {
    return <div id={styles.cardContainer}>{this.state.cards}</div>;
  }
}

export default CardContainer;
