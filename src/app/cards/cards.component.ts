import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';
import { Card } from './../card'

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  title = "Lista słów"
  model: Array<Card> = []

  constructor(service: CardsService) { 
    this.model = service.getModel()
    console.log(this.model)
  }

  ngOnInit(): void {
  }
}
