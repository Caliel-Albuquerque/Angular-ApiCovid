import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brazilType } from '../types/brazil.type';

@Injectable({
  providedIn: 'root'
})
export class BrazilService {

  private httpendPoint = "https://covid19-brazil-api.now.sh/api/report/v1/brazil"

  constructor(private http: HttpClient) { }

  getBrazil():Observable<brazilType> {
    return this.http.get<brazilType>(this.httpendPoint);
  }
}
