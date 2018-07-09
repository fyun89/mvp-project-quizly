/* Even number cards are back side. Odd numbered are front */
var data = [
  {
    cardId: 1,
    deckId: 1,
    relatedCardId: 2,
    side: "front",
    value: "Test first",
    timeStamp: null,
  },
  {
    cardId: 2,
    deckId: 1,
    relatedCardId: 1,
    side: "back",
    value: "first card of the deck 1. This is the back side of first card.",
    timeStamp: null,
  },
  {
    cardId: 3,
    deckId: 1,
    relatedCardId: 4,
    side: "front",
    value: "Test second",
    timeStamp: null,
  },
  {
    cardId: 4,
    deckId: 1,
    relatedCardId: 3,
    side: "back",
    value: "Second card of the deck 1. This is the back side of second card.",
    timeStamp: null,
  },
  {
    cardId: 5,
    deckId: 1,
    relatedCardId: 6,
    side: "front",
    value: "Test third",
    timeStamp: null,
  },
  {
    cardId: 6,
    deckId: 1,
    relatedCardId: 5,
    side: "back",
    value: "Third card of the deck 1. This is the back side of third card.",
    timeStamp: null,
  }
];

module.exports data