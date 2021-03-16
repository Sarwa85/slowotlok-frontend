import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { Injectable } from '@angular/core';
import { Card } from './card'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  getModel(): Array<Card> {
    let cards: Array<Card> = []
    cards.push({
      id: 0,
      sourceText: "cat",
      translationText: "kot"
    })
    cards.push({
      id: 1,
      sourceText: "dog",
      translationText: "pies"
    })
    return cards
  }
}
