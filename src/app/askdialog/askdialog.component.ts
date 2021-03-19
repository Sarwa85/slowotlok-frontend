import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'askdialog',
  templateUrl: './askdialog.component.html',
  styleUrls: ['./askdialog.component.scss']
})
export class AskDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
