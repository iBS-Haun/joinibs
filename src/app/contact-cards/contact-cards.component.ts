import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.css'],
})
/*Sorry mit dem Plural in Cards, ist nur eine Card. Bin zu bad um in angular zu refactorn :<*/
export class ContactCardsComponent implements OnInit {
  @Input() name: string = 'temp';
  @Input() image: string = 'temp';
  @Input() email: string = 'temp';

  constructor() {}

  ngOnInit(): void {}
}
