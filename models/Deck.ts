import Card from "./Card";
import { Suit } from "./Suit";

export default class Deck {
  constructor() {
    this.createDeck();
    this.shuffle();
  }

  cards: Card[] = [];
  //prettier-ignore
  suits: Suit[] = [
		{symbol: "♠", name: "Spades"},
		{symbol: "♥", name: "Hearts"},
		{symbol: "♦", name: "Diamonds"},
		{symbol: "♣", name: "Clubs"},
]
  //prettier-ignore
  ranks = [
		{name: "Ace", symbol: "A", value: 1},
		{name: "Two", symbol: "2", value: 2},
		{name: "Three", symbol: "3", value: 3},
		{name: "Four", symbol: "4", value: 4},
		{name: "Five", symbol: "5", value: 5},
		{name: "Six", symbol: "6", value: 6},
		{name: "Seven", symbol: "7", value: 7},
		{name: "Eight", symbol: "8", value: 8},
		{name: "Nine", symbol: "9", value: 9},
		{name: "Ten", symbol: "10", value: 10},
		{name: "Jack", symbol: "J", value: 11},
		{name: "Queen", symbol: "Q", value: 12},
		{name: "King", symbol: "K", value: 13}
	]

  createDeck(): void {
    for (let suit of this.suits) {
      for (let { name, symbol, value } of this.ranks) {
        this.cards.push(new Card(name, suit, symbol, value));
      }
    }
  }

  shuffle(): void {
    for (let i = 0; i < this.cards.length; i++) {
      let rndIdx = Math.floor(i + Math.random() * (this.cards.length - i));
      if (i !== rndIdx) {
        let rndCard = this.cards[rndIdx];
        this.cards[rndIdx] = this.cards[i];
        this.cards[i] = rndCard;
      }
    }
  }

  drawCard(): Card | null {
    if (this.cards.length == 0) return null;
    return this.cards.pop() as Card;
  }
  logCards() {
    let cards: any[] = [];
    console.log(cards.length, "cards");
    for (let card of cards) {
      cards.push(`${card.symbol}${card.suit.symbol}`);
    }
		console.log(cards)
  }
}