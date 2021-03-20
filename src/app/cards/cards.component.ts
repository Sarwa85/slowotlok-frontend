import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';
import { GetCardResponse } from './../card'

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  title = "Lista słów"
  model: GetCardResponse[] = []

  constructor(private service: CardsService) { 

  }

  ngOnInit(): void {
    this.connectModel()
    this.connectDelCard()

    this.service.pullModel()
  }

  connectModel() {
    this.service.subjectModel.subscribe(data => {
      this.model = data
      // todo: change this to signal -> slot
      // Don't need state - model

    })
    this.service.pullModel()
  }

  connectDelCard() {
    this.service.subjectDelCard.subscribe(response => {
      console.log("need to delete card " + response.removed)
      this.model.forEach((element,index)=>{
        if(element.id == response.removed) 
          this.model.splice(index,1);
     });
    })
  }
}
