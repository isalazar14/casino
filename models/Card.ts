import { Suit } from "./Suit";

export default class Card {
  constructor(
    public name: string,
    public suit: Suit,
    public symbol: string,
    public value: number
  ) {}
}