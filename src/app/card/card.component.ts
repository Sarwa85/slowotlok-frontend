import { GetCardResponse } from './../card';
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
  @Input() cardData: GetCardResponse
  @Output() deleteEvent: EventEmitter<number>  = new EventEmitter<number>();
  checked = false
  scored = false
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

    this.service.getScoreObs({
      card_id: this.cardData.id,
      good: goodVal,
      bad: badVal
    })
    .subscribe({
      next: async res => {
        console.log("scoreCard: " + JSON.stringify(res))
        if (this.cardData.id !== res.card_id) {
          console.warn("Niepoprawne id")
          return
        }
        this.cardData.good = res.good
        this.cardData.bad = res.bad
        this.scored = true
      },
      error: error => {
        console.error('There was an error!', error);
    }
    })

    

    // this.scored = true
  }

  openDelDialog() {
    console.log("open dialog")
    const dialogRef = this.dialog.open(AskDialogComponent, {
      data: {title: "Usuwanie", 
      message: "Czy na pewno chcesz usunąć '" + this.cardData.source + "'?"}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.service.delCard(this.cardData.id)
    });
  }
}
