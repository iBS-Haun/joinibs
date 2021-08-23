import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Kontakt, KontaktService } from './kontakt.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
})
export class KontaktComponent implements OnInit {
  constructor(private kontaktService: KontaktService) {}
  kontakte: Observable<Kontakt[]> = new Subject();

  ngOnInit(): void {
    this.kontakte = this.kontaktService.getContactData();
    /*     this.kontaktService
      .getContactData()
      .subscribe((data: any) => console.log(data)); */
  }
}
