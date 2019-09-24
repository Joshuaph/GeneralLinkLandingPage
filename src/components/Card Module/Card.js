import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
    return (
        <div
            className={styles.card}
            style={{ backgroundImage: "url(" + props.item.img + ")" }}
            onClick={() => window.open(props.item.resource, "_blank")}>
            <div className={styles.footer}>
                <h3>VIEW</h3>
            </div>
        </div>
    );
}

export default Card;
