import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bewerbung',
  templateUrl: './bewerbung.component.html',
  styleUrls: ['./bewerbung.component.css'],
})
export class BewerbungComponent implements OnInit {
  constructor() {}
  @Input() headline: string = 'Jetzt Bewerben!';
  @Input() textbody: string =
    'Bewirb dich jetzt über unser Bewerbungsportal oder alternativ per E-Mail an';
  @Input() email: string = 'ausbildung@ibs-banking.com';
  @Input() linkToApplication: string = 'dummylink';
  @Input() buttonlabel: string = 'Zum Bewerbungsportal';

  ngOnInit(): void {}
}
