import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { cardContent, InfoCardService } from '../info-card.service';

@Component({
  selector: 'app-ausbildung-windows',
  templateUrl: './ausbildung-windows.component.html',
  styleUrls: ['./ausbildung-windows.component.css'],
})
export class AusbildungWindowsComponent implements OnInit {
  constructor(private infoCardService: InfoCardService) {}
  infoCardContent: Observable<cardContent[]> = new Subject();
  ngOnInit(): void {
    this.infoCardContent = this.infoCardService.getInfoCardDataAusbildung();
  }
}
