import React, { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUrl: this.props.item.img,
      imgAltTxt: this.props.item.title,
      title: this.props.item.title,
      linkUrl: this.props.item.resource,
      isHovered: false
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    if (e.type === "click") window.open(this.state.linkUrl, "_blank");
    else if (e.type === "onMouseOver") this.setState({ isHovered: true });
    else if (e.type === "onMouseLeave") this.setState({ isHovered: false });
  }

  render() {
    return (
      <div className={styles.card} onClick={this.handleEvent}>
        <img src={this.state.imgUrl || "images/sportex-logo.jpg"} alt={this.state.title} />
        <h1 className={styles.title}>{this.state.title}</h1>
        <img className={styles.vBtn} src="images/viewbtn.jpg" alt="View" />
      </div>
    );
  }
}
export default Card;
