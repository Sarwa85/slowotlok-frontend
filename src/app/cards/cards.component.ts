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

  onNeedDelete(id: number) {
    console.log("need to delete card " + id)
    this.model.forEach((element,index)=>{
      if(element.id == id) 
        this.model.splice(index,1);
   });
  }

  ngOnInit(): void {
    this.service.subjectModel.subscribe(data => {
      this.model = data
    })
    this.service.pullModel()
  }
}
