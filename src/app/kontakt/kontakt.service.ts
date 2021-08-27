import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Kontakt {
  email: string;
  name: string;
  img: { url: string }[];
  jobdescription: string;
  link: string;
  buttonlabel: string;
}

@Injectable()
export class KontaktService {
  constructor(private httpClient: HttpClient) {}
  getContactData() {
    return this.httpClient.get<Kontakt[]>(
      'http://localhost:1337/kontakkartes/'
    );
  }
  getContactStudium() {
    return this.httpClient.get<Kontakt[]>(
      'http://localhost:1337/studiumcontactcards/'
    );
  }
  getContactAusbildung() {
    return this.httpClient.get<Kontakt[]>(
      'http://localhost:1337/ausbildungscontactcards/'
    );
  }
}
