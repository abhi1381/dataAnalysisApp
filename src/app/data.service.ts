import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface CricketData {
  batting_innings: string;
  batting_score: number;
  catches: number;
  date: string;
  ground: string;
  match_result: string;
  opposition: string;
  result_margin: string;
  runs_conceded: string;
  stumps: number;
  toss: string;
  wickets: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url:string = '../assets/sachin.json';

  getData() {
    return this.http.get(this.url);
  }
}
