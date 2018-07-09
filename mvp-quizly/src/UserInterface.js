import React, { Component } from "react";
import "./App.css";

class UserInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('props at theUI,', this.props.editModeStatus)
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode(e) {
    e.preventDefault()
    this.props.toggleEdit()
  }

  render() {
    let editButton;
    if (!this.props.editModeStatus) {
      editButton = <div>Edit</div>
    } else {
      editButton = <div>Save</div>
    }
    return (
      <div className="userInterface">
        <div className="page">Card 1 of 100</div>
        <div className="editBtn" onClick={this.toggleEditMode}>
          {editButton}
        </div>
        <div className="nextBtn">Next</div>
        <div className="prevBtn">Prev</div>
        <div className="deckBtn">Decks</div>
      </div>
    );
  }
}

export default UserInterface;
