import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { Injectable, EventEmitter } from '@angular/core';
import { Card } from './card'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _headers = ('Access-Control-Allow-Origin: *')

  // private _url = "/assets/data/cards.json"
  private _url = "http://localhost:5000/card/random/10"

  constructor(private http: HttpClient) { }

  subjectModel: Subject<Card[]> = new Subject<Card[]>();

  getModelObs(): Observable<Card[]> {
    return this.http.get<Card[]>(this._url)
  }

  pullModel() {
    console.log("pullModel")
    this.getModelObs()
      .subscribe(data => {
        console.log("pullModel sub")
        this.subjectModel.next(data)
      }
      )
  }
}
