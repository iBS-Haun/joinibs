import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PiechartData {
  anzeigen: boolean;
  piechartelemente: [
    {
      name: string;
      prozent: number;
      farbe: string;
    }
  ];
}

@Injectable()
export class PiechartService {
  constructor(private httpClient: HttpClient) {}
  getPiechartDataStudium() {
    return this.httpClient.get<PiechartData>(
      'http://localhost:1337/piechart-studium/'
    );
  }
  getPiechartDataAusbildung() {
    return this.httpClient.get<PiechartData>(
      'http://localhost:1337/piechart-ausbildung/'
    );
  }
}
