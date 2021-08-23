import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { Observable, Subject } from 'rxjs';
import { cardContent, InfoCardService } from '../info-card.service';

@Component({
  selector: 'app-studium',
  templateUrl: './studium.component.html',
  styleUrls: ['./studium.component.css'],
})
export class StudiumComponent implements OnInit {
  linkToApplicationStudium: string =
    'https://www.ibs-banking.com/de/unternehmen/karriere/job-angebote/442-duales-studium-informatik-wirtschaftsinformatik-wiesbaden.html';

  constructor(private infoCardService: InfoCardService) {}
  chartLabels: Label[] = ['Paxis', 'Vorlesungen'];
  chartData: MultiDataSet = [[50, 50]];
  chartColors: Color[] = [
    {
      backgroundColor: ['#009EE0', '#85dbff'],
    },
  ];
  infoCardContent: Observable<cardContent[]> = new Subject();
  ngOnInit(): void {
    this.infoCardContent = this.infoCardService.getInfoCardDataStudium();
  }
}
