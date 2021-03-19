import { ScoreCardRequest, ScoreCardResponse } from './scorecard';
import { Injectable } from '@angular/core';
import { Card } from './card'
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _headers = ('Access-Control-Allow-Origin: *')

  // private _url = "/assets/data/cards.json"
  private _baseUrl = environment.apiUrl + ":" + environment.apiPort
  private _urlRandomCards = this._baseUrl + "/card/random/10"
  private _urlScorePost = this._baseUrl + "/score/add"

  delay = ms => new Promise(res => setTimeout(res, ms));

  constructor(private http: HttpClient) { }

  subjectModel: Subject<Card[]> = new Subject<Card[]>()
  subcjecScore: Subject<ScoreCardResponse> = new Subject<ScoreCardResponse>()

  getModelObs(): Observable<Card[]> {
    return this.http.get<Card[]>(this._urlRandomCards)
  }

  getScoreObs(req: ScoreCardRequest): Observable<ScoreCardResponse> {
    return this.http.post<ScoreCardResponse>(this._urlScorePost, req)
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
 
  // scoreCard(req: ScoreCardRequest) {
  //   console.log("Ustawiam: " + JSON.stringify(req))
  //   this.getScoreObs(req)
  //     .subscribe({
  //       next: async res => {
  //         await this.delay(5000);
  //         console.log("scoreCard: " + JSON.stringify(res))
  //       },
  //       error: error => {
  //         console.error('There was an error!', error);
  //     }
  //     })
  // }
}
