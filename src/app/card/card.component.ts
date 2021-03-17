import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number
  @Input() source: string
  @Input() tr: string
  @Output() deleteEvent: EventEmitter<number>  = new EventEmitter<number>();
  checked = false

  ngOnInit(): void {

  }

  check() {
    this.checked = true
  }

  needDelete() {
    console.log("needDelete " + this.id + " " + this.source + " " + this.tr)
    this.deleteEvent.emit(this.id)
  }
}
