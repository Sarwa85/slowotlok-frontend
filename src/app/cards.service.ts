import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { Injectable } from '@angular/core';
import { Card } from './card'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _headers = ('Access-Control-Allow-Origin: *')

  // private _url = "/assets/data/cards.json"
  private _url = "http://localhost:5000/card/random/10"

  constructor(private http: HttpClient) { }

  getModelObserver(): Observable<Card[]> {
    return this.http.get<Card[]>(this._url)
  }
}
