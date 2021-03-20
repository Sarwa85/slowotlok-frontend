import { AddCardRequest, AddCardResponse } from './addcard';
import { ScoreCardRequest, ScoreCardResponse } from './scorecard';
import { DelCardRespone } from './delcard'

import { Injectable } from '@angular/core';
import { GetCardResponse } from './card'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _baseUrl = environment.apiUrl + ":" + environment.apiPort
  private _urlRandomCards = this._baseUrl + "/card/random/10"
  private _urlScorePost = this._baseUrl + "/score/add"
  private _urlAddCard = this._baseUrl + "/card"
  private _urlDelCard = this._baseUrl + "/card"

  constructor(private http: HttpClient) { }

  subjectModel: Subject<GetCardResponse[]> = new Subject<GetCardResponse[]>()
  subcjecScore: Subject<ScoreCardResponse> = new Subject<ScoreCardResponse>()
  subjectDelCard: Subject<DelCardRespone> = new Subject<DelCardRespone>()

  getModelObs(): Observable<GetCardResponse[]> {
    return this.http.get<GetCardResponse[]>(this._urlRandomCards)
  }

  getScoreObs(req: ScoreCardRequest): Observable<ScoreCardResponse> {
    return this.http.post<ScoreCardResponse>(this._urlScorePost, req)
  }

  getAddCardObs(req: AddCardRequest): Observable<AddCardResponse> {
    return this.http.post<AddCardResponse>(this._urlAddCard, req)
  }

  delDelCardObs(card_id: Number): Observable<DelCardRespone> {
    return this.http.delete<DelCardRespone>(this._urlAddCard + "/" + card_id)
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

  delCard(card_id: number) {
    console.log("delCard: " + card_id)
    this.delDelCardObs(card_id)
      .subscribe(data => {
        console.log("pulled delCard: " + JSON.stringify(data))
        this.subjectDelCard.next(data)
      })
  }
}
