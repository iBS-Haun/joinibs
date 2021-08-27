import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface WindowData {
  headline: string;
  buttonlabel: string;
  linkZuSeite: 'Ausbildung' | 'Studium' | 'Karriere';
  linkToImplement: string;
  img: { url: string }[];
}

@Injectable()
export class WindowsService {
  constructor(private httpClient: HttpClient) {}
  getWindowsData() {
    return this.httpClient.get<WindowData[]>(
      'http://localhost:1337/infocard-landingpages/'
    );
  }
}
