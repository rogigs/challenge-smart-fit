import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mockResponseUnitsLocations } from './responses/smart-fit.response';
import { Observable } from 'rxjs';

export type UnitsLocations = typeof mockResponseUnitsLocations;

@Injectable({
  providedIn: 'root',
})
export class SmartFitService {
  readonly apiUrl =
    'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

  constructor(private httpClient: HttpClient) {}

  getUnitsLocations(): Observable<UnitsLocations> {
    return this.httpClient.get<UnitsLocations>(this.apiUrl);
  }
}
