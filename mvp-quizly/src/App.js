import React, { Component } from 'react';
import Card from './Card.js';
import UserInterface from "./UserInterface.js";
import PopupList from './PopupList.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      editMode: false,
      currentCard: null,
      cardId: 1,
      deckId: 1,
      relatedCardId: 2,
      side: 'front',
      value: '',
      timeStamp: null,
    }
    this.handleToggleEdit = this.handleToggleEdit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    
  }

  handleInput(e) {
    console.log("typed: ", e);
    this.setState({value: e});
  }

  handleToggleEdit(e) {
    if (!this.state.editMode) {
      this.setState({editMode: !this.state.editMode})
    } else {
      console.log('save!')
      this.setState({ editMode: !this.state.editMode })
    }
  }

  render() {
    return <div id="enclosing">
        <Card input={this.handleInput} currentValue={this.state.value} editModeStatus={this.state.editMode} />
        <UserInterface toggleEdit={this.handleToggleEdit} editModeStatus={this.state.editMode} />
        <div className="showCardList">Show Card List</div>
        <PopupList />
      </div>;
  }
}

export default App;
