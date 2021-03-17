import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string
  @Input() version: string
  constructor() { }

  ngOnInit(): void {
  }

}
