import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studium',
  templateUrl: './studium.component.html',
  styleUrls: ['./studium.component.css'],
})
export class StudiumComponent implements OnInit {
  linkToApplicationStudium: string =
    'https://ibs-banking.softgarden.io/applications/d9b507ec-b6d4-4305-83d1-e99102684b54?7&isEditMode=false&isNew=true&l=de';

  constructor() {}

  ngOnInit(): void {}
}
