import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { Observable, Subject } from 'rxjs';
import { BewerbungsContent, BewerbungsService } from '../bewerbung.service';
import { cardContent, InfoCardService } from '../info-card.service';
import { Kontakt, KontaktService } from '../kontakt/kontakt.service';
import {
  PiechartData,
  PiechartService,
} from '../piechart-fix/piechart-fix.service';

@Component({
  selector: 'app-studium',
  templateUrl: './studium.component.html',
  styleUrls: ['./studium.component.css'],
})
export class StudiumComponent implements OnInit {
  linkToApplicationStudium: string =
    'https://www.ibs-banking.com/de/unternehmen/karriere/job-angebote/442-duales-studium-informatik-wirtschaftsinformatik-wiesbaden.html';

  constructor(
    private infoCardService: InfoCardService,
    private kontaktService: KontaktService,
    private bewerbungsService: BewerbungsService,
    private piechartService: PiechartService
  ) {}
  colorConfig: Record<string, string> = {
    Hellblau: '#85dbff',
    Ibsblau: '#009EE0',
    Dunkelblau: '#282f57',
    Grau: '#eeeeee',
  };

  kontakt: Observable<Kontakt[]> = new Subject();
  infoCardContent: Observable<cardContent[]> = new Subject();
  bewerbungsContent: Observable<BewerbungsContent> = new Subject();
  resolvedContent: BewerbungsContent | null = null;
  piechartContent: Observable<PiechartData> = new Subject();
  resolvedPiechartContent: PiechartData | null = null;
  piechartLabels: Label[] = [];
  piechartData: MultiDataSet = [[]];
  piechartColors: Color[] = [];

  ngOnInit(): void {
    this.infoCardContent = this.infoCardService.getInfoCardDataStudium();
    this.kontakt = this.kontaktService.getContactStudium();
    this.bewerbungsContent = this.bewerbungsService.getBewerbungscontent();
    this.bewerbungsContent.subscribe(
      (result) => (this.resolvedContent = result)
    );
    this.piechartContent = this.piechartService.getPiechartDataStudium();
    this.piechartContent.subscribe((result) => {
      this.resolvedPiechartContent = result;
      this.piechartLabels = result.piechartelemente.map(
        (element) => element.name
      );
      this.piechartData = [
        result.piechartelemente.map((element) => element.prozent),
      ];
      this.piechartColors = [
        {
          backgroundColor: result.piechartelemente.map(
            (element) => this.colorConfig[element.farbe]
          ),
        },
      ];
    });
  }
}
