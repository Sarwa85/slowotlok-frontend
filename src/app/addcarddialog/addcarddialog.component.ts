import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AddCardDialogData {
  source: string,
  tr: string
}

@Component({
  selector: 'app-addcarddialog',
  templateUrl: './addcarddialog.component.html',
  styleUrls: ['./addcarddialog.component.scss']
})
export class AddCardDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddCardDialogData) { }

  ngOnInit(): void {
  }
}
