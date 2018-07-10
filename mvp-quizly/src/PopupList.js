import React, { Component } from "react";
import "./App.css";

class PopupList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePopupClick = this.handlePopupClick.bind(this)
    //console.log('PopupList props', this.props.currentDeck)
  }

  handlePopupClick(cardId) {
    console.log('props at popup: ', this.props)
    this.props.handleClickCardList(cardId)
  }

  render() {
    return (
      <div className="popupList">
        <div className="showCardList">Show Card List</div>
        {this.props.currentDeck.map((elem)=> {
          //console.log('current elem', elem)
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
