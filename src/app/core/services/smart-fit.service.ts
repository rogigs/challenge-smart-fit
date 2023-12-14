import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mockUnitsLocations } from 'src/app/shared/mocks/smart-fit.mock';

export type UnitsLocations = typeof mockUnitsLocations;
export type UnitLocation = (typeof mockUnitsLocations.locations)[0];

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
