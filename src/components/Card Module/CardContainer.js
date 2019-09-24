import React from "react";
import Card from "./Card";
import DATA from "../../data";
import styles from "./Card.module.scss";

function CardContainer(props) {
    let cards = DATA;
    let type = props.match.params.id;

    //hotfix for setting correct navbar button when linked to
    props.setKind(type);

    const cardItems = () => {
        let filtered = () => {
            if (type !== "All" && type) {
                return cards.filter(item => item.tags.includes(type));
            } else return cards;
        };
        return filtered().map((item, index) => <Card key={index} item={item} />);
    };

    console.log(cardItems());
    return cardItems().length > 0 ? (
        <div id={styles.cardContainer}>{cardItems()}</div>
    ) : (
        <div id={styles.notFound}>
            <h1> Nothing Found!</h1>
        </div>
    );
}

export default CardContainer;
