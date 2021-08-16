import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ausbildung',
  templateUrl: './ausbildung.component.html',
  styleUrls: ['./ausbildung.component.css'],
})
export class AusbildungComponent implements OnInit {
  constructor() {}
  linkToApplicationAusbildung: string =
    'https://www.ibs-banking.com/de/unternehmen/karriere/job-angebote/88-ausbildung-zum-fachinformatiker-anwendungsentwicklung.html?ls=JoinMicroSitehttps://www.ibs-banking.com/de/unternehmen/karriere/job-angebote/88-ausbildung-zum-fachinformatiker-anwendungsentwicklung.html?ls=JoinMicroSite';
  ngOnInit(): void {}
}
