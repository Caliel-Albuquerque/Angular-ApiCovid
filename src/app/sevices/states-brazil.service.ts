import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateBrazil } from '../types/state.type';

@Injectable({
  providedIn: 'root'
})
export class StatesBrazilService {

  private endpointUrl: string = "https://covid19-brazil-api.now.sh/api/report/v1"

  constructor(private http: HttpClient) { }

  getStatesBrazil(): Observable<StateBrazil> {
    return this.http.get<StateBrazil>(this.endpointUrl)
  }
}
