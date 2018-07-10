import React, { Component } from 'react';
import "./App.css";

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(e) {
    e.preventDefault();
    this.props.input(e.target.value);
  }

  render() {
    let textArea;
    console.log('current edit mode: ', this.props.editModeStatus)
    if (this.props.editModeStatus) {
      textArea = <textarea className="cardInput" value={this.props.currentValue} type="text" maxLength="300" onChange={this.handleInput} />
    } else {
      textArea = <textarea readOnly className="cardInput" id="flippable" value={this.props.currentValue} type="text" maxLength="300" onChange={this.handleInput} />
    }
    return (
      <div className="outerContainer">
        <div className="innerContainer">
          <form className="mainCard" >
            {textArea}
          </form>
        </div>
      </div>
    );
  }
}

export default Card;