import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bewerbung',
  templateUrl: './bewerbung.component.html',
  styleUrls: ['./bewerbung.component.css'],
})
export class BewerbungComponent implements OnInit {
  constructor() {}

  @Input() linkToApplication: string = 'lol';

  ngOnInit(): void {}
}
