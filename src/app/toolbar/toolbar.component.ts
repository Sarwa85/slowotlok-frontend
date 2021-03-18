import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CardsService } from './../cards.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string
  @Input() version: string
  
  constructor(private service: CardsService) { }

  ngOnInit(): void {
  }

  needRefresh() {
    this.service.pullModel()
  }
}
