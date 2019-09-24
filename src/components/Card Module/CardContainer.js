import React from "react";
import Card from "./Card";
import DATA from "../../data";
import styles from "./Card.module.scss";

function CardContainer(match) {
    let cards = DATA;
    let type = match.match.params.id;

    const cardItems = () => {
        var filtered = () => {
            if (type) {
                return cards.filter(item => item.tags.includes(type));
            } else return cards;
        };
        return filtered().map((item, index) => <Card key={index} item={item} />);
    };

    console.log(type);
    return <div id={styles.cardContainer}>{cardItems()}</div>;
}

export default CardContainer;
