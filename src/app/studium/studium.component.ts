import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-studium',
  templateUrl: './studium.component.html',
  styleUrls: ['./studium.component.css'],
})
export class StudiumComponent implements OnInit {
  linkToApplicationStudium: string =
    'https://www.ibs-banking.com/de/unternehmen/karriere/job-angebote/442-duales-studium-informatik-wirtschaftsinformatik-wiesbaden.html';

  constructor() {}
  chartLabels: Label[] = ['Paxis', 'Vorlesungen'];
  chartData: MultiDataSet = [[50, 50]];
  chartColors: Color[] = [
    {
      backgroundColor: ['#009EE0', '#85dbff'],
    },
  ];

  ngOnInit(): void {}
}
