import React, { Component } from "react";
import Card from "./Card";
import DATA from "../../data";
import styles from "./Card.module.scss";

class CardContainer extends Component {
  constructor() {
    super();

    this.state = {
      cards: DATA
    };
  }

  render() {
    const cardItems = () => {
      var filtered = () => {
        if (this.props.type === "Sportex") {
          return this.state.cards.filter(item => item.category === "Generic");
        } else {
          return this.state.cards.filter(item => item.category !== "Generic");
        }
      };

      return filtered().map((item, index) => <Card key={index} item={item} />);
    };

    console.log(cardItems());
    return <div id={styles.cardContainer}>{cardItems()}</div>;
  }
}

export default CardContainer;
