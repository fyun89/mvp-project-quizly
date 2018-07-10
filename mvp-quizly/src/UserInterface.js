import React, { Component } from "react";
import "./App.css";

class UserInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('props at theUI,', this.props.editModeStatus)
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.checkCardNum = this.checkCardNum.bind(this);
  }

  toggleEditMode(e) {
    e.preventDefault()
    this.props.toggleEdit()
  }

  checkCardNum(elem) {
    if(elem % 2 === 0) {
      return elem / 2;
    } else {
      return (elem + 1) / 2;
    }
  }

  render() {
    let editButton;
    if (!this.props.editModeStatus) {
      editButton = <div>Edit</div>
    } else {
      editButton = <div>Save</div>
    }
    return(
      <div className="userInterface">
        <div className="page">Card {
          `${this.checkCardNum(this.props.currentCardId)} of ${this.props.cardQty}`
          }
        </div>
        <div className="editBtn" onClick={this.toggleEditMode}>
          {editButton}
        </div>
        <div className="nextBtn" onClick={this.props.handleClickNext}>
          Next
        </div>
        <div className="prevBtn" onClick={this.props.handleClickPrev}>Prev</div>
        <div className="deckBtn">Decks</div>
      </div>
    )
  }
}

export default UserInterface;
