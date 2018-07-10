import React, { Component } from 'react';
import Card from './Card.js';
import UserInterface from "./UserInterface.js";
import PopupList from './PopupList.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      currentDeck: null,
      selectedCardId: 1,
      cardId: 1,
      deckId: 1,
      relatedCardId: 2,
      side: "front",
      value: "",
      timeStamp: null
    };
    this.handleToggleEdit = this.handleToggleEdit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickCardList = this.handleClickCardList.bind(this);
  }

  componentDidMount() {
    console.log("this is the current deck ", this.state.currentDeck)
    var currentThis = this
    if (!window.indexedDB) {
      alert();
    }
    let request = window.indexedDB.open("deck1", 1),
      db,
      tx,
      store,
      index;
    request.onupgradeneeded = function(e) {
      let db = request.result,
        store = db.createObjectStore("CardStore", {
          keyPath: "cardId",
          autoIncrement: true
        }),
        index = store.createIndex("cardId", "cardId", { unique: true });
    };
    request.onerror = function(e) {
      console.log("Error: ", e.target.error);
    };
    request.onsuccess = function(e) {
      db = request.result;
      tx = db.transaction("CardStore", "readwrite");
      store = tx.objectStore("CardStore");
      index = store.index("cardId");

      db.onerror = function(e) {
        console.log("error: ", e.target.errorCode);
      };

      /* Use below to populate table */
      store.put({ cardId: 1, deckId: 1, relatedCardId: 2, side: "front", value: "This is the front side of card 1!", timeStamp: Date.now() })
      store.put({ cardId: 2, deckId: 1, relatedCardId: 1, side: "back", value: "Back 1: This is the backside of the card 1!", timeStamp: Date.now() })
      store.put({ cardId: 3, deckId: 1, relatedCardId: 4, side: "front", value: "This is the front side of card 2!", timeStamp: Date.now() })
      store.put({ cardId: 4, deckId: 1, relatedCardId: 3, side: "back", value: "Back 2: This is the backside of the card 2!", timeStamp: Date.now() })
      store.put({ cardId: 5, deckId: 1, relatedCardId: 6, side: "front", value: "This is the front side of card 3!", timeStamp: Date.now() })
      store.put({ cardId: 6, deckId: 1, relatedCardId: 5, side: "back", value: "Back 3: This is the backside of the card 3!", timeStamp: Date.now() })
      store.put({ cardId: 7, deckId: 1, relatedCardId: 8, side: "front", value: "This is the front side of card 4!", timeStamp: Date.now() })
      store.put({ cardId: 8, deckId: 1, relatedCardId: 7, side: "back", value: "Back 4: This is the backside of the card 4!", timeStamp: Date.now() })
      store.put({ cardId: 9, deckId: 1, relatedCardId: 10, side: "front", value: "This is the front side of card 5!", timeStamp: Date.now() })
      store.put({ cardId: 10, deckId: 1, relatedCardId: 9, side: "back", value: "Back 5: This is the backside of the card 5!", timeStamp: Date.now() })
      store.put({ cardId: 11, deckId: 1, relatedCardId: 12, side: "front", value: "This is the front side of card 6!", timeStamp: Date.now() })
      store.put({ cardId: 12, deckId: 1, relatedCardId: 11, side: "back", value: "Back 6: This is the backside of the card 6!", timeStamp: Date.now() })
      
      var q1 = store.getAll(); //using key to get the data
      //let qs = index.get("first")
      if (!currentThis.currentDeck){
        q1.onsuccess = function() {
          // console.log(q1.result);
          // console.log(q1.result.questionText);
          if (!currentThis.currentDeck) {
            console.log("currentDeck Updated!");
            currentThis.setState({
              currentDeck: q1.result,
              cardId: q1.result[currentThis.state.selectedCardId-1].cardId,
              deckId: q1.result[currentThis.state.selectedCardId-1].deckId,
              relatedCardId: q1.result[currentThis.state.selectedCardId-1].relatedCardId,
              side: q1.result[currentThis.state.selectedCardId-1].side,
              value: q1.result[currentThis.state.selectedCardId-1].value,
              timeStamp: q1.result[currentThis.state.selectedCardId-1].timeStamp
            });
          } else {
            console.log("currentDeck need not update");
          }
        };
      }

      tx.oncomplete = function() {
        db.close();
      };
    };
  }

  handleInput(e) {
    console.log("typed: ", e);
    this.setState({ value: e });
  }

  handleToggleEdit(e) {
    if (!this.state.editMode) {
      this.setState({ editMode: !this.state.editMode });
    } else {
      console.log("save!");
      this.setState({ editMode: !this.state.editMode });
    }
  }

  handleClickNext(e) {
    console.log('at handle click next: ', this.state.selectedCardId)
    var selectedCardId = this.state.selectedCardId
    if (selectedCardId + 1 <= this.state.currentDeck.length){
      this.setState({
        selectedCardId: selectedCardId + 1,
        cardId: this.state.currentDeck[selectedCardId].cardId,
        deckId: this.state.currentDeck[selectedCardId].deckId,
        relatedCardId: this.state.currentDeck[selectedCardId].relatedCardId,
        side: this.state.currentDeck[selectedCardId].side,
        value: this.state.currentDeck[selectedCardId].value,
        timeStamp: this.state.currentDeck[selectedCardId].timeStamp
      })
    }
  }

  handleClickPrev(e) {
    console.log('prev card: ', this.state.currentDeck[this.state.selectedCardId -1].value)
    console.log('at handle click prev: ', this.state.selectedCardId)
    var selectedCardId = this.state.selectedCardId;
    if (selectedCardId - 1 > 0) {
      this.setState({
        selectedCardId: selectedCardId - 1,
        cardId: this.state.currentDeck[selectedCardId - 2].cardId,
        deckId: this.state.currentDeck[selectedCardId - 2].deckId,
        relatedCardId: this.state.currentDeck[selectedCardId - 2].relatedCardId,
        side: this.state.currentDeck[selectedCardId - 2].side,
        value: this.state.currentDeck[selectedCardId - 2].value,
        timeStamp: this.state.currentDeck[selectedCardId - 2].timeStamp
      })
    }
  }

  handleClickCardList(e) {
    console.log('clicked: ', e)
    var redirectToFront = e
    if (e % 2 !== 0) {
      redirectToFront = e - 1
    }
    this.setState({
      selectedCardId: redirectToFront,
      cardId: this.state.currentDeck[redirectToFront].cardId,
      deckId: this.state.currentDeck[redirectToFront].deckId,
      relatedCardId: this.state.currentDeck[redirectToFront].relatedCardId,
      side: this.state.currentDeck[redirectToFront].side,
      value: this.state.currentDeck[redirectToFront].value,
      timeStamp: this.state.currentDeck[redirectToFront].timeStamp
    })
  }

  render() {
    return <div className="outer">
        {!this.state.currentDeck ? <div>Loading</div> : 
          <div id="enclosing">
            <Card input={this.handleInput} currentValue={this.state.value} editModeStatus={this.state.editMode} />
            <UserInterface relatedCardId={this.state.relatedCardId} cardQty={this.state.currentDeck.length/2} currentCardId={this.state.cardId} handleClickNext={this.handleClickNext} handleClickPrev={this.handleClickPrev} toggleEdit={this.handleToggleEdit} editModeStatus={this.state.editMode} />
              <div className="showCardList" onclick="">Show Card List</div>
            <PopupList handleClickCardList={this.handleClickCardList} currentDeck={this.state.currentDeck} />
          </div>
        }
      </div>;
  }
}

export default App;
