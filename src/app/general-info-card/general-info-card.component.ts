import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info-card',
  templateUrl: './general-info-card.component.html',
  styleUrls: ['./general-info-card.component.css'],
})
export class GeneralInfoCardComponent implements OnInit {
  isCollapsed: boolean = true;
  buttonLabel: string = 'Mehr';
  @Input() cardHeadline: String = 'Temp';

  @Input() cardTextLabel: String = 'Temp';

  constructor() {}

  ngOnInit(): void {}

  onExpandPress() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.buttonLabel = 'Mehr';
    } else {
      this.buttonLabel = 'Weniger';
    }
  }
}
