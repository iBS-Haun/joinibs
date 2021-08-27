import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface BewerbungsContent {
  headline: string;
  text: string;
  email: string;
  buttonlabel: string;
  linkausbildung: string;
  linkstudium: string;
}

@Injectable()
export class BewerbungsService {
  constructor(private httpClient: HttpClient) {}
  getBewerbungscontent() {
    return this.httpClient.get<BewerbungsContent>(
      'http://localhost:1337/bewerbungsbanner/'
    );
  }
}
