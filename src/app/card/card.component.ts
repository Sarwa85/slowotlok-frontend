import { Card } from './../card';
import { AskDialogComponent } from './../askdialog/askdialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardData: Card
  @Output() deleteEvent: EventEmitter<number>  = new EventEmitter<number>();
  checked = false
  scored = false

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  check() {
    this.checked = true
  }

  score(good: boolean) {
    if (good) {
      this.cardData.good += 1
    } else {
      this.cardData.bad += 1
    }
      
    this.scored = true
  }

  needDelete() {
    console.log("needDelete " + this.cardData.id + " " + this.cardData.source + " " + this.cardData.tr)
    this.deleteEvent.emit(this.cardData.id)
  }

  openDialog() {
    console.log("open dialog")
    const dialogRef = this.dialog.open(AskDialogComponent, {
      data: {title: "Usuwanie", 
      message: "Czy na pewno chcesz usunąć '" + this.cardData.source + "'?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.needDelete()
    });
  }
}
