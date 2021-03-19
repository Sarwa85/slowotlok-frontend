import { environment } from './../../environments/environment';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CardsService } from './../cards.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string
  @Input() version: string
  isProd = environment.production
  
  constructor(public service: CardsService) { }

  ngOnInit(): void {
  }
}
