import React, { Component } from "react";
import "./App.css";
var data = [
  {
    cardId: 1,
    deckId: 1,
    relatedCardId: 2,
    side: "front",
    value: "Test first",
    timeStamp: null
  },
  {
    cardId: 2,
    deckId: 1,
    relatedCardId: 1,
    side: "back",
    value: "first card of the deck 1. This is the back side of first card.",
    timeStamp: null
  },
  {
    cardId: 3,
    deckId: 1,
    relatedCardId: 4,
    side: "front",
    value: "Test second",
    timeStamp: null
  },
  {
    cardId: 4,
    deckId: 1,
    relatedCardId: 3,
    side: "back",
    value: "Second card of the deck 1. This is the back side of second card.",
    timeStamp: null
  },
  {
    cardId: 5,
    deckId: 1,
    relatedCardId: 6,
    side: "front",
    value: "Test third",
    timeStamp: null
  },
  {
    cardId: 6,
    deckId: 1,
    relatedCardId: 5,
    side: "back",
    value: "Third card of the deck 1. This is the back side of third card.",
    timeStamp: null
  },
  {
    cardId: 7,
    deckId: 1,
    relatedCardId: 8,
    side: "front",
    value: "Test fourth",
    timeStamp: null
  },
  {
    cardId: 8,
    deckId: 1,
    relatedCardId: 7,
    side: "back",
    value: "Fourth card of the deck 1. This is the back side of fourth card.",
    timeStamp: null
  },
  {
    cardId: 9,
    deckId: 1,
    relatedCardId: 10,
    side: "front",
    value: "Test fifth",
    timeStamp: null
  },
  {
    cardId: 10,
    deckId: 1,
    relatedCardId: 9,
    side: "back",
    value: "Fourth card of the deck 1. This is the back side of fourth card.",
    timeStamp: null
  }
];
class PopupList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePopupClick = this.handlePopupClick.bind(this)
  }

  handlePopupClick(cardId) {
    console.log('clicked: ', cardId)
  }

  render() {
    return (
      <div className="popupList">
        <div className="showCardList">Show Card List</div>
        {data.map((elem)=> {
          if ((elem.cardId % 2) !== 0) {
            return (
              <div onClick={()=>this.handlePopupClick(elem.cardId)} className="listEntry" value={elem.cardId} key={elem.cardId}>{elem.value}</div>
            )
          }
        })}
      </div>
    );
  }
}

export default PopupList;
