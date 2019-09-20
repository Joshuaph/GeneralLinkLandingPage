import React from "react";
import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: "url(" + props.item.img + ")" }}
      onClick={() => window.open(props.item.resource, "_blank")}>
      {/* <img src={props.item.img || "images/sportex-logo.jpg"} alt={props.item.title} /> */}
      {/* <h1 className={styles.title}>{props.item.title}</h1> */}
      {/* <img className={styles.vBtn} src="images/viewbtn.jpg" alt="View" /> */}

      <div className={styles.footer}>
        <h3>VIEW</h3>
      </div>
    </div>
  );
}

export default Card;
