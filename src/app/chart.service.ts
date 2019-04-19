import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient) { }

  url:string = '../assets/sachin.json';

  getData() {
    return this.http.get(this.url);
  }
}
