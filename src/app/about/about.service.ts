import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface About {
  headline: string;
  textbody: string;
  img: { url: string }[];
  buttonlabel: string;
  link: string;
}

@Injectable()
export class AboutService {
  constructor(private httpClient: HttpClient) {}
  getAboutData() {
    return this.httpClient.get<About>(
      'http://localhost:1337/landingpageinfofield/'
    );
  }
}
