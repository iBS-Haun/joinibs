import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface cardContent {
  headline: string;
  labeltext: string;
  contenttext: string;
}

@Injectable()
export class InfoCardService {
  constructor(private httpClient: HttpClient) {}
  getInfoCardDataAusbildung() {
    return this.httpClient.get<cardContent[]>(
      'http://localhost:1337/infocards/'
    );
  }
  getInfoCardDataStudium() {
    return this.httpClient.get<cardContent[]>(
      'http://localhost:1337/studiumsinfocards/'
    );
  }
}
