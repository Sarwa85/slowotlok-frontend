import { AddCardDialogComponent, AddCardDialogData } from './../addcarddialog/addcarddialog.component';
import { environment } from './../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from './../cards.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCardRequest } from './../addcard'

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() title: string
  @Input() version: string
  isProd = environment.production

  constructor(
    public service: CardsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddCardDialog() {
    const dialogRef = this.dialog.open(AddCardDialogComponent, {
      width: "300px",
      data: <AddCardDialogData>{
        source: "",
        tr: ""
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("send: " + JSON.stringify(result))
        this.service.getAddCardObs(<AddCardRequest>result)
          .subscribe(response => {
            console.log("got: " + JSON.stringify(response))
          })
      } else {
        console.log("canceled")
      }
    })
  }
}
