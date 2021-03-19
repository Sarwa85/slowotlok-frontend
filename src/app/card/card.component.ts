import { Card } from './../card';
import { CardsService } from './../cards.service';
import { AskDialogComponent } from './../askdialog/askdialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardData: Card
  @Output() deleteEvent: EventEmitter<number>  = new EventEmitter<number>();
  checked = false
  scored = false
  busy = false
  color: ThemePalette = 'primary';

  constructor(public dialog: MatDialog,
    private service: CardsService) {

  }

  ngOnInit(): void {

  }

  check() {
    this.checked = true
  }

  score(good: boolean) {
    let goodVal = 0
    let badVal = 0
    if (good) {
      goodVal = 1
    } else {
      badVal = 1
    }

    this.busy = true
    this.service.getScoreObs({
      card_id: this.cardData.id,
      good: goodVal,
      bad: badVal
    })
    .subscribe({
      next: async res => {
        await this.service.delay(1000);
        console.log("scoreCard: " + JSON.stringify(res))
        if (this.cardData.id !== res.card_id) {
          console.warn("Niepoprawne id")
          return
        }
        this.cardData.good = res.good
        this.cardData.bad = res.bad
        this.busy = false
      },
      error: error => {
        console.error('There was an error!', error);
        this.busy = false
    }
    })

    

    // this.scored = true
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
