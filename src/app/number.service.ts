import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RANDOMORG_API_URL } from './consts';

@Injectable({ providedIn: 'root' })
export class NumberService {
  constructor(private http: HttpClient) {}

  public getNumber(): Observable<number> {
    return this.http.get<number>(RANDOMORG_API_URL);
  }
}
