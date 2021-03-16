import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id: number
  @Input() sourceText: string
  @Input() translationText: string
  checked = false

  ngOnInit(): void {

  }

  check() {
    this.checked = true
  }
}
