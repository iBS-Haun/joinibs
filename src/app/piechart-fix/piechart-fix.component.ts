import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-piechart-fix',
  templateUrl: './piechart-fix.component.html',
  styleUrls: ['./piechart-fix.component.css']
})
export class PiechartFixComponent implements OnInit {

  ChartLabels: Label[] = ['Praxis', 'DXC-Seminare', 'Berufsschule'];
  ChartData: MultiDataSet = [
    [50, 20, 30]
  ];
  ChartType: ChartType = 'doughnut';

  colors: Color [] = [
    {
      backgroundColor: [
        '#03a9f4',
        '#d1ebf0',
        '#282f57'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
